/** @jsx jsx */
// =============================================================================
// Widget : Ã‰dition d'attributs en lot
// Les champs Ã  modifier sont dÃ©finis dans les PARAMÃˆTRES par l'administrateur,
// via les sÃ©lecteurs ExB (DataSourceSelector + FieldSelector).
// L'utilisateur sÃ©lectionne des entitÃ©s sur la carte, saisit les valeurs
// et applique les modifications.
// =============================================================================
import { AllWidgetProps, jsx, React, DataSourceManager } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import { Button, Select, Option, Alert, Loading, TextInput, NumericInput } from 'jimu-ui'
import defaultMessages from './translations/default'
import { type IMConfig, type FieldConfig } from '../config'

const { useState, useEffect, useRef, useMemo, useCallback } = React

// â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface LayerInfo   { layer: any; fields: any[]; title: string }
interface ValueMap    { [fieldConfigId: string]: any }
interface SelectedSet { [layerId: string]: number[] }
type SelectionTool = 'rectangle' | 'polygon' | 'lasso' | 'point'

// â”€â”€ Styles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const S: Record<string, React.CSSProperties> = {
  root:    { overflow: 'auto', height: '100%', padding: 12, fontSize: 14, boxSizing: 'border-box' },
  label:   { fontWeight: 600, display: 'block', marginBottom: 4, marginTop: 8 },
  row:     { display: 'flex', gap: 6, alignItems: 'center' },
  between: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  muted:   { fontSize: 12, color: '#888', marginTop: 4 },
  mb:      { marginBottom: 10 },
  mb4:     { marginBottom: 4 },
  card:        { border: '1px solid #ddd', borderRadius: 4, padding: 8, marginBottom: 6 },
  warn:        { fontSize: 11, color: '#f90', marginLeft: 4 },
  layerGroup:  { border: '1px solid #ccc', borderRadius: 4, marginBottom: 8, overflow: 'hidden' },
  layerHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: '#f0f0f0', cursor: 'pointer', userSelect: 'none' as any, fontWeight: 600, fontSize: 13 },
  layerBody:   { padding: '8px 8px 2px 8px' },
  chevron:     { fontSize: 10, transition: 'transform 0.2s', display: 'inline-block' }
}

// â”€â”€ Widget â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // fieldConfigs dÃ©finis dans les paramÃ¨tres par l'admin
  const fieldConfigs: FieldConfig[] = (props.config?.fieldConfigs as any) || []

  const [jimuMapView, setJimuMapView]   = useState<JimuMapView>(null)
  const [layerMap, setLayerMap]         = useState<Map<string, LayerInfo>>(new Map())
  const [tool, setTool]                 = useState<SelectionTool>('rectangle')
  const [drawing, setDrawing]           = useState(false)
  const [selected, setSelected]         = useState<SelectedSet>({})
  const [values, setValues]             = useState<ValueMap>({})
  const [busy, setBusy]                 = useState(false)
  const [modulesReady, setModulesReady] = useState(false)
  const [scanStatus, setScanStatus]     = useState<'idle' | 'scanning' | 'done'>('idle')
  const [message, setMessage]           = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [collapsedLayers, setCollapsedLayers] = useState<Set<string>>(new Set())

  const jmvRef          = useRef<JimuMapView>(null)
  const layerMapRef     = useRef<Map<string, LayerInfo>>(new Map())
  const fieldConfigsRef = useRef<FieldConfig[]>([])
  const sketchVMRef     = useRef<any>(null)
  const graphicsLyrRef  = useRef<any>(null)
  const highlights      = useRef<Array<{ remove: () => void }>>([])
  const modulesRef      = useRef<any>(null)
  const scanTimers      = useRef<ReturnType<typeof setTimeout>[]>([])
  const reactHandle     = useRef<{ remove: () => void }>(null)

  useEffect(() => { jmvRef.current = jimuMapView },           [jimuMapView])
  useEffect(() => { layerMapRef.current = layerMap },         [layerMap])
  useEffect(() => { fieldConfigsRef.current = fieldConfigs }, [fieldConfigs])

  // â”€â”€ Translation helper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const t = (key: keyof typeof defaultMessages, params?: Record<string, any>) => {
    let msg = defaultMessages[key] as string
    if (params) Object.keys(params).forEach(k => { msg = msg.replace(`{${k}}`, String(params[k])) })
    return msg
  }

  // â”€â”€ Load ArcGIS modules once â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    loadArcGISJSAPIModules([
      'esri/layers/GraphicsLayer',
      'esri/widgets/Sketch/SketchViewModel',
      'esri/core/reactiveUtils'
    ]).then(([GraphicsLayer, SketchViewModel, reactiveUtils]) => {
      modulesRef.current = { GraphicsLayer, SketchViewModel, reactiveUtils }
      setModulesReady(true)
    })
  }, [])

  // â”€â”€ Scan layers from configured data sources â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Map keyed by dataSourceId â†’ LayerInfo
  const scanLayers = useCallback(async (jmv: JimuMapView) => {
    if (!jmv) return
    const configs = fieldConfigsRef.current
    if (configs.length === 0) { setScanStatus('done'); return }

    setScanStatus('scanning')
    const result = new Map<string, LayerInfo>()
    const seen = new Set<string>()

    // Wait for view ready
    try { await ((jmv.view as any).when?.() ?? Promise.resolve()) } catch {}

    for (const fc of configs) {
      const dsId = fc.useDataSource?.dataSourceId
      if (!dsId || seen.has(dsId)) continue
      seen.add(dsId)

      let layer: any = null

      // MÃ©thode 1 : JimuLayerView (le plus direct dans ExB)
      try {
        const jlvDict = (jmv as any).jimuLayerViews || {}
        for (const jlv of Object.values(jlvDict) as any[]) {
          if (jlv?.layerDataSourceId === dsId || jlv?.dataSourceId === dsId) {
            layer = jlv.layer
            break
          }
        }
      } catch {}

      // MÃ©thode 2 : DataSourceManager â†’ ds.layer
      if (!layer) {
        try {
          const ds: any = DataSourceManager.getInstance().getDataSource(dsId)
          layer = ds?.layer || ds?.getLayer?.()
        } catch {}
      }

      if (!layer) continue
      if (!layer.loaded) { try { await layer.load() } catch {} }
      if (!layer.loaded) continue

      result.set(dsId, { layer, fields: layer.fields || [], title: layer.title || dsId })
    }

    setLayerMap(result)
    setScanStatus('done')
  }, [])

  // â”€â”€ Clear highlights â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const clearHighlights = useCallback(() => {
    highlights.current.forEach(h => { try { h.remove() } catch {} })
    highlights.current = []
  }, [])

  // â”€â”€ Spatial selection â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const runSelection = useCallback(async (geometry: any) => {
    const jmv = jmvRef.current
    if (!jmv) return
    clearHighlights()
    const newSel: SelectedSet = {}
    for (const [, info] of layerMapRef.current) {
      const layer = info.layer
      try {
        const q = layer.createQuery()
        q.geometry            = geometry
        q.spatialRelationship = 'intersects'
        q.returnGeometry      = false
        q.outFields           = [layer.objectIdField]
        const res  = await layer.queryFeatures(q)
        const oids = res.features.map((f: any) => f.attributes[layer.objectIdField])
        if (oids.length) {
          newSel[layer.id] = oids
          try {
            const lv = await (jmv.view as any).whenLayerView(layer)
            highlights.current.push(lv.highlight(oids))
          } catch {}
        }
      } catch (e) { console.error('Selection error', layer.title, e) }
    }
    setSelected(newSel)
  }, [clearHighlights])

  // â”€â”€ Init SketchViewModel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    if (!jimuMapView || !modulesReady) return
    const { GraphicsLayer, SketchViewModel, reactiveUtils } = modulesRef.current
    const view = jimuMapView.view as any
    let gl: any, svm: any, sketchHandle: any

    const init = async () => {
      try { await view.when() } catch {}
      gl = new GraphicsLayer({ listMode: 'hide' })
      view.map.add(gl)
      graphicsLyrRef.current = gl

      svm = new SketchViewModel({
        view,
        layer: gl,
        defaultCreateOptions: { hasZ: false } as any,
        polygonSymbol: { type: 'simple-fill', color: [0, 120, 212, 0.15], outline: { color: [0, 120, 212, 1], width: 2 } } as any,
        pointSymbol:   { type: 'simple-marker', color: [0, 120, 212, 0.5], outline: { color: [0, 120, 212, 1], width: 2 }, size: 10 } as any
      })
      sketchVMRef.current = svm

      sketchHandle = svm.on('create', (evt: any) => {
        console.debug('[bulk-attr] sketch event', evt.state, evt.tool)
        if (evt.state === 'complete') {
          runSelection(evt.graphic.geometry)
          setDrawing(false)
          setTimeout(() => { try { gl.removeAll() } catch {} }, 600)
          // RÃ©active le popup aprÃ¨s la sÃ©lection
          try { if (view.popup) view.popup.autoOpenEnabled = true } catch {}
        }
        if (evt.state === 'cancel') {
          setDrawing(false)
          try { if (view.popup) view.popup.autoOpenEnabled = true } catch {}
        }
      })

      await scanLayers(jimuMapView)

      // Re-scan si des couches sont ajoutÃ©es/retirÃ©es
      try {
        reactHandle.current = reactiveUtils.on(
          () => view.map.allLayers, 'change',
          () => scanLayers(jimuMapView)
        )
      } catch {}

      // Retries diffÃ©rÃ©s pour les couches lentes Ã  charger
      scanTimers.current = [
        setTimeout(() => { if (jmvRef.current) scanLayers(jmvRef.current) }, 2000),
        setTimeout(() => { if (jmvRef.current) scanLayers(jmvRef.current) }, 5000)
      ]
    }

    init()

    return () => {
      if (sketchHandle)        try { sketchHandle.remove()        } catch {}
      if (reactHandle.current) try { reactHandle.current.remove() } catch {}
      scanTimers.current.forEach(clearTimeout)
      if (svm) try { svm.destroy()       } catch {}
      if (gl)  try { view.map.remove(gl) } catch {}
      clearHighlights()
    }
  }, [jimuMapView, modulesReady, runSelection, scanLayers, clearHighlights])

  // â”€â”€ Drawing â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const startDrawing = () => {
    if (!sketchVMRef.current) { console.warn('[bulk-attr] SketchViewModel not ready'); return }
    const jmv = jmvRef.current
    if (jmv) {
      try { (jmv.view as any).popup.autoOpenEnabled = false } catch {}
      try { (jmv.view as any).popup?.close?.() } catch {}
    }
    setDrawing(true); setMessage(null)
    console.debug('[bulk-attr] startDrawing tool=', tool, 'layers=', layerMapRef.current.size)
    if (tool === 'lasso') sketchVMRef.current.create('polygon', { mode: 'freehand' })
    else                  sketchVMRef.current.create(tool)
  }
  const cancelDrawing = () => {
    try { sketchVMRef.current?.cancel() } catch {}
    setDrawing(false)
    try { (jmvRef.current?.view as any).popup.autoOpenEnabled = true } catch {}
  }
  const clearSelection = () => { clearHighlights(); setSelected({}); setMessage(null) }

  // â”€â”€ Derived â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const totalSelected = useMemo(
    () => Object.values(selected).reduce((s, a) => s + a.length, 0), [selected])
  const canSelect = layerMap.size > 0 && modulesReady
  // Liste unique des dataSourceIds configurÃ©s, dans l'ordre d'apparition
  const uniqueDsIds = useMemo(() => {
    const seen = new Set<string>(); const out: string[] = []
    fieldConfigs.forEach(fc => {
      const id = fc.useDataSource?.dataSourceId
      if (id && !seen.has(id)) { seen.add(id); out.push(id) }
    })
    return out
  }, [fieldConfigs])

  // â”€â”€ Input renderer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const renderInput = (fc: FieldConfig) => {
    const info  = layerMap.get(fc.useDataSource?.dataSourceId)
    const field = info?.fields.find((f: any) => f.name === fc.fieldName)
    const val   = values[fc.id] ?? ''
    const set   = (v: any) => setValues(p => ({ ...p, [fc.id]: v }))

    if (!field) return <TextInput size="sm" value={val} placeholder="field not available" disabled onChange={e => set(e.target.value)} />

    // Cas spécial : treatment_num avec liste déroulante 1-10
    if (fc.fieldName === 'treatment_num') {
      return (
        <Select size="sm" value={val} onChange={e => set((e.target as any).value)}>
          <Option value="">-- Choose --</Option>
          {Array.from({ length: 10 }, (_, i) => (i + 1).toString()).map(num => (
            <Option key={num} value={num}>{num}</Option>
          ))}
        </Select>
      )
    }

    const dom = field.domain as any
    if (dom?.type === 'coded-value') {
      return (
        <Select size="sm" value={val} onChange={e => set((e.target as any).value)}>
          <Option value="">-- Choose --</Option>
          {dom.codedValues.map((cv: any) => (
            <Option key={String(cv.code)} value={String(cv.code)}>{cv.name}</Option>
          ))}
        </Select>
      )
    }

    const numeric = ['small-integer','integer','big-integer','single','double','long'].includes(field.type)
    if (numeric) {
      return (
        <NumericInput size="sm"
          value={val === '' ? undefined : Number(val)}
          min={dom?.type === 'range' ? dom.minValue : undefined}
          max={dom?.type === 'range' ? dom.maxValue : undefined}
          onChange={v => set(v ?? '')}
        />
      )
    }
    if (field.type === 'date') {
      return <TextInput size="sm" type="datetime-local" value={val} onChange={e => set(e.target.value)} />
    }
    return <TextInput size="sm" value={val} placeholder="New value" onChange={e => set(e.target.value)} />
  }

  // â”€â”€ Apply edits â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const applyAll = async () => {
    if (!totalSelected) { setMessage({ type: 'error', text: t('noFeatures') }); return }
    const active = fieldConfigs.filter(fc => { const v = values[fc.id]; return v !== '' && v != null })
    if (!active.length) { setMessage({ type: 'error', text: 'Enter at least one value.' }); return }
    if (!window.confirm(t('confirmApply', { count: totalSelected }))) return

    setBusy(true); setMessage(null)
    try {
      const byDs = new Map<string, { info: LayerInfo; edits: FieldConfig[] }>()
      for (const fc of active) {
        const dsId = fc.useDataSource?.dataSourceId
        if (!dsId) continue
        const info = layerMap.get(dsId)
        if (!info) continue
        if (!byDs.has(dsId)) byDs.set(dsId, { info, edits: [] })
        byDs.get(dsId)!.edits.push(fc)
      }

      let total = 0
      for (const [, { info, edits }] of byDs) {
        const { layer, fields } = info
        const oids = selected[layer.id]
        if (!oids?.length) continue

        const updates = oids.map(oid => {
          const attrs: any = { [layer.objectIdField]: oid }
          edits.forEach(fc => {
            const f = fields.find((x: any) => x.name === fc.fieldName)
            let v: any = values[fc.id]
            if (f) {
              if (['small-integer','integer','big-integer','long'].includes(f.type)) v = parseInt(v, 10)
              else if (['single','double'].includes(f.type))                         v = parseFloat(v)
              else if (f.type === 'date')                                            v = v ? new Date(v).getTime() : null
            }
            attrs[fc.fieldName] = v
          })
          return { attributes: attrs }
        })

        const res  = await layer.applyEdits({ updateFeatures: updates })
        const errs = (res.updateFeatureResults || []).filter((r: any) => r.error)
        if (errs.length) throw new Error(`${layer.title} : ${errs[0].error?.message || 'erreur'}`)
        total += res.updateFeatureResults?.length || 0
      }
      setMessage({ type: 'success', text: `${t('success')} (${total} feature(s))` })
      setValues({})
    } catch (e: any) {
      console.error(e)
      setMessage({ type: 'error', text: `${t('errorMsg')} : ${e.message || e}` })
    } finally { setBusy(false) }
  }

  // â”€â”€ Guards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  if (!props.useMapWidgetIds?.length) {
    return <div style={{ padding: 12 }}>{t('selectMap')}</div>
  }
  if (fieldConfigs.length === 0) {
    return (
      <div style={{ padding: 12 }}>
        <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds[0]} onActiveViewChange={v => { setJimuMapView(v); if (v) scanLayers(v) }} />
        <Alert type="warning" withIcon text="No fields configured. Open the widget settings (⚙️) to define the layers and fields to edit." />
      </div>
    )
  }

  // â”€â”€ Render â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  return (
    <div style={S.root}>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds[0]}
        onActiveViewChange={v => { setJimuMapView(v); if (v) scanLayers(v) }}
      />

      {/* â”€â”€ Outil de sÃ©lection â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div style={S.mb}>
        <span style={S.label}>{t('selectionTool')}</span>
        <div style={{ ...S.row, marginBottom: 6 }}>
          <Select size="sm" value={tool} style={{ flex: 1 }} onChange={e => setTool((e.target as any).value as SelectionTool)}>
            <Option value="rectangle">{t('rectangle')}</Option>
            <Option value="polygon">{t('polygon')}</Option>
            <Option value="lasso">{t('lasso')}</Option>
            <Option value="point">{t('point')}</Option>
          </Select>
          {drawing
            ? <Button size="sm" type="danger"  onClick={cancelDrawing}>Cancel</Button>
            : <Button size="sm" type="primary" onClick={startDrawing} disabled={!canSelect}
                title={scanStatus === 'scanning' ? 'Loading layers...' : ''}>
                {scanStatus === 'scanning' ? 'Loading...' : 'Select'}
              </Button>
          }
        </div>
        <div style={S.between}>
          <span style={{ fontSize: 12 }}>{t('selectedFeatures', { count: totalSelected })}</span>
          <Button size="sm" type="tertiary" onClick={clearSelection} disabled={!totalSelected}>{t('clearSelection')}</Button>
        </div>
        {totalSelected > 0 && (
          <div style={S.muted}>
            {uniqueDsIds.map(dsId => {
              const info = layerMap.get(dsId)
              if (!info) return null
              const cnt  = selected[info.layer.id]?.length || 0
              return cnt ? <div key={dsId}>â€¢ {info.title} : {cnt}</div> : null
            })}
          </div>
        )}
      </div>

      {/* â”€â”€ Champs Ã  modifier (dÃ©finis dans les paramÃ¨tres) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div style={S.mb}>
        <span style={S.label}>{t('fieldsToEdit')}</span>
        {uniqueDsIds.map(dsId => {
          const info      = layerMap.get(dsId)
          const title     = info?.title || dsId
          const fields    = fieldConfigs.filter(fc => fc.useDataSource?.dataSourceId === dsId)
          const collapsed = collapsedLayers.has(dsId)
          const toggle    = () => setCollapsedLayers(prev => {
            const next = new Set(prev)
            collapsed ? next.delete(dsId) : next.add(dsId)
            return next
          })
          return (
            <div key={dsId} style={S.layerGroup}>
              <div style={S.layerHeader} onClick={toggle}>
                <span>
                  {title}
                  {!info && scanStatus === 'done'     && <span style={S.warn}>&#x26A0; layer not found</span>}
                  {!info && scanStatus === 'scanning' && <span style={S.warn}>... loading</span>}
                </span>
                <span style={{ ...S.chevron, transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)' }}>&#9660;</span>
              </div>
              {!collapsed && (
                <div style={S.layerBody}>
                  {fields.map(fc => (
                    <div key={fc.id} style={S.card}>
                      <div style={{ ...S.mb4, fontSize: 12, fontWeight: 500 }}>{fc.label || fc.fieldName}</div>
                      {renderInput(fc)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* â”€â”€ Bouton Appliquer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <Button type="primary" style={{ width: '100%' }} onClick={applyAll} disabled={busy || !totalSelected}>
        {busy ? <Loading type="DONUT" width={16} height={16} /> : t('applyEdits')}
      </Button>

      {message && (
        <Alert style={{ marginTop: 10 }} type={message.type} text={message.text}
          withIcon closable onClose={() => setMessage(null)} />
      )}
    </div>
  )
}

export default Widget
