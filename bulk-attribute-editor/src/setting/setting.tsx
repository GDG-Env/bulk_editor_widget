/** @jsx jsx */
// =============================================================================
// Setting panel — l'admin choisit la carte, puis ajoute des champs en cliquant
// directement sur des sélecteurs visuels de couche et de champ.
// =============================================================================
import {
  React, jsx, Immutable,
  DataSourceManager, type UseDataSource,
  DataSourceTypes
} from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import {
  DataSourceSelector,
  FieldSelector
} from 'jimu-ui/advanced/data-source-selector'
import { Button, TextInput } from 'jimu-ui'
import { type IMConfig, type FieldConfig } from '../config'

const uid = () => Math.random().toString(36).slice(2, 9)

interface LayerGroup {
  key: string
  useDataSource: UseDataSource | null
  items: FieldConfig[]
}

const buildLayerGroups = (fieldConfigs: FieldConfig[]): LayerGroup[] => {
  const groups = new Map<string, LayerGroup>()
  const order: string[] = []

  fieldConfigs.forEach((fc) => {
    const dsId = fc.useDataSource?.dataSourceId
    const key = dsId || `draft:${fc.id}`
    if (!groups.has(key)) {
      groups.set(key, {
        key,
        useDataSource: fc.useDataSource || null,
        items: []
      })
      order.push(key)
    }

    groups.get(key)!.items.push(fc)
  })

  return order.map((key) => {
    const group = groups.get(key)!
    const configuredItems = group.items.filter(item => item.fieldName)
    return {
      ...group,
      items: configuredItems.length > 0 ? configuredItems : [group.items[0]]
    }
  })
}

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const fieldConfigs: FieldConfig[] = (props.config?.fieldConfigs as any) || []
  const layerGroups = React.useMemo(() => buildLayerGroups(fieldConfigs), [fieldConfigs])

  // ── Persistance ──────────────────────────────────────────────────────────
  const saveFields = (next: FieldConfig[]) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('fieldConfigs', next as any)
    })
  }

  const saveGroups = (nextGroups: LayerGroup[]) => {
    saveFields(nextGroups.flatMap(group => group.items))
  }

  const onMapSelect = (ids: string[]) => {
    props.onSettingChange({ id: props.id, useMapWidgetIds: ids })
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  const addLayer = () => {
    saveFields([
      ...fieldConfigs,
      { id: uid(), useDataSource: null as any, fieldName: '', label: '' }
    ])
  }

  const moveLayer = (i: number, dir: -1 | 1) => {
    const j = i + dir
    if (j < 0 || j >= layerGroups.length) return
    const next = [...layerGroups]
    ;[next[i], next[j]] = [next[j], next[i]]
    saveGroups(next)
  }

  const removeLayer = (i: number) => {
    saveGroups(layerGroups.filter((_, j) => j !== i))
  }

  const setLayerDataSource = (groupIndex: number, nextUseDataSource: UseDataSource | null) => {
    const nextGroups = layerGroups.map((group, index) => {
      if (index !== groupIndex) return group
      return {
        ...group,
        key: nextUseDataSource?.dataSourceId || `draft:${group.items[0]?.id || uid()}`,
        useDataSource: nextUseDataSource,
        items: [{
          id: group.items[0]?.id || uid(),
          useDataSource: nextUseDataSource as any,
          fieldName: '',
          label: ''
        }]
      }
    })
    saveGroups(nextGroups)
  }

  const setLayerFields = (groupIndex: number, names: string[]) => {
    const group = layerGroups[groupIndex]
    if (!group) return

    const uniqueNames = Array.from(new Set(names.filter(Boolean)))
    const existingByName = new Map(group.items.filter(item => item.fieldName).map(item => [item.fieldName, item]))
    const nextItems = uniqueNames.length > 0
      ? uniqueNames.map((name) => {
          const existing = existingByName.get(name)
          return existing
            ? { ...existing, useDataSource: group.useDataSource as any }
            : { id: uid(), useDataSource: group.useDataSource as any, fieldName: name, label: '' }
        })
      : [{
          id: group.items[0]?.id || uid(),
          useDataSource: group.useDataSource as any,
          fieldName: '',
          label: ''
        }]

    const nextGroups = layerGroups.map((current, index) => index === groupIndex ? { ...current, items: nextItems } : current)
    saveGroups(nextGroups)
  }

  const updateLayerField = (groupIndex: number, fieldId: string, patch: Partial<FieldConfig>) => {
    const nextGroups = layerGroups.map((group, index) => {
      if (index !== groupIndex) return group
      return {
        ...group,
        items: group.items.map((item) => item.id === fieldId ? { ...item, ...patch } : item)
      }
    })
    saveGroups(nextGroups)
  }

  const removeLayerField = (groupIndex: number, fieldId: string) => {
    const nextGroups = layerGroups.map((group, index) => {
      if (index !== groupIndex) return group
      const remaining = group.items.filter(item => item.id !== fieldId)
      return {
        ...group,
        items: remaining.length > 0
          ? remaining
          : [{ id: uid(), useDataSource: group.useDataSource as any, fieldName: '', label: '' }]
      }
    })
    saveGroups(nextGroups)
  }

  const moveLayerField = (groupIndex: number, fieldIndex: number, dir: -1 | 1) => {
    const nextGroups = layerGroups.map((group, index) => {
      if (index !== groupIndex) return group
      const swapIndex = fieldIndex + dir
      if (swapIndex < 0 || swapIndex >= group.items.length) return group
      const nextItems = [...group.items]
      ;[nextItems[fieldIndex], nextItems[swapIndex]] = [nextItems[swapIndex], nextItems[fieldIndex]]
      return { ...group, items: nextItems }
    })
    saveGroups(nextGroups)
  }

  // ── DataSource → titre lisible ───────────────────────────────────────────
  const getLayerLabel = (uds?: UseDataSource): string => {
    if (!uds) return ''
    try {
      const ds = DataSourceManager.getInstance().getDataSource(uds.dataSourceId)
      return ds?.getLabel?.() || uds.dataSourceId
    } catch { return uds.dataSourceId }
  }

  // ── Styles ───────────────────────────────────────────────────────────────
  const card: React.CSSProperties = {
    border: '1px solid var(--border, #444)', borderRadius: 4,
    padding: 8, marginBottom: 10
  }
  const lbl: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 2, marginTop: 6 }
  const headerRow: React.CSSProperties = { display: 'flex', gap: 4, alignItems: 'center', marginBottom: 4 }

  // useMapWidgetIds wrapper passé aux sélecteurs (limite aux couches de la carte choisie)
  const mapIds = props.useMapWidgetIds && props.useMapWidgetIds.length > 0
    ? props.useMapWidgetIds
    : null

  return (
    <div style={{ padding: 8 }}>
      {/* ── Carte source ─────────────────────────────────────────────── */}
      <SettingSection title="Map source">
        <SettingRow>
          <MapWidgetSelector
            useMapWidgetIds={props.useMapWidgetIds}
            onSelect={onMapSelect}
          />
        </SettingRow>
      </SettingSection>

      {/* ── Champs à éditer ──────────────────────────────────────────── */}
      <SettingSection title="Fields to bulk-edit">
        {!mapIds && (
          <SettingRow>
            <div style={{ fontSize: 12, color: '#f90' }}>
              Select a map source above first.
            </div>
          </SettingRow>
        )}

        {mapIds && fieldConfigs.length === 0 && (
          <SettingRow>
            <div style={{ fontSize: 12, color: '#aaa' }}>
              Click <strong>+ Add a layer</strong> to configure one or more fields to bulk-edit.
            </div>
          </SettingRow>
        )}

        {mapIds && layerGroups.map((group, groupIndex) => (
          <div key={group.key} style={card}>
            {/* Header */}
            <div style={headerRow}>
              <span style={{ flex: 1, fontWeight: 600, fontSize: 12 }}>
                Layer {groupIndex + 1}{group.useDataSource ? ` — ${getLayerLabel(group.useDataSource)}` : ''}
              </span>
              <Button size="sm" type="tertiary" onClick={() => moveLayer(groupIndex, -1)} disabled={groupIndex === 0}>↑</Button>
              <Button size="sm" type="tertiary" onClick={() => moveLayer(groupIndex,  1)} disabled={groupIndex === layerGroups.length - 1}>↓</Button>
              <Button size="sm" type="tertiary" onClick={() => removeLayer(groupIndex)}>✕</Button>
            </div>

            {/* Couche (DataSourceSelector limité aux couches de la carte) */}
            <div style={lbl}>Layer</div>
            <DataSourceSelector
              types={Immutable([DataSourceTypes.FeatureLayer])}
              useMapWidgetIds={Immutable(mapIds)}
              useDataSources={group.useDataSource ? Immutable([group.useDataSource]) : Immutable([])}
              mustUseDataSource
              hideAddDataButton
              hideDataView
              onChange={(arr: any) => {
                const first = arr && arr.length ? arr[0] : null
                const uds = first
                  ? (typeof first.asMutable === 'function' ? first.asMutable({ deep: true }) : first)
                  : null
                setLayerDataSource(groupIndex, uds)
              }}
            />

            {/* Champ */}
            <div style={lbl}>Fields to edit</div>
            {group.useDataSource
              ? (
                <>
                  <FieldSelector
                    useDataSources={Immutable([group.useDataSource])}
                    selectedFields={Immutable(group.items.filter(item => item.fieldName).map(item => item.fieldName))}
                    isMultiple
                    onChange={(fields: any) => {
                      const names = (fields || []).map((field: any) => field.jimuName || field.name).filter(Boolean)
                      setLayerFields(groupIndex, names)
                    }}
                  />

                  {group.items.filter(item => item.fieldName).map((item, fieldIndex) => (
                    <div key={item.id} style={{ ...card, marginTop: 8, marginBottom: 0 }}>
                      <div style={headerRow}>
                        <span style={{ flex: 1, fontWeight: 600, fontSize: 12 }}>{item.fieldName}</span>
                        <Button size="sm" type="tertiary" onClick={() => moveLayerField(groupIndex, fieldIndex, -1)} disabled={fieldIndex === 0}>↑</Button>
                        <Button size="sm" type="tertiary" onClick={() => moveLayerField(groupIndex, fieldIndex, 1)} disabled={fieldIndex === group.items.filter(entry => entry.fieldName).length - 1}>↓</Button>
                        <Button size="sm" type="tertiary" onClick={() => removeLayerField(groupIndex, item.id)}>✕</Button>
                      </div>

                      <div style={lbl}>Label displayed to the user (optional)</div>
                      <TextInput
                        size="sm"
                        value={item.label}
                        placeholder={item.fieldName || 'Field label'}
                        onChange={e => updateLayerField(groupIndex, item.id, { label: e.target.value })}
                      />
                    </div>
                  ))}
                </>
              )
              : <div style={{ fontSize: 11, color: '#888' }}>Choose a layer first.</div>
            }
          </div>
        ))}

        {mapIds && (
          <SettingRow>
            <Button type="primary" size="sm" style={{ width: '100%' }} onClick={addLayer}>
              + Add a layer
            </Button>
          </SettingRow>
        )}
      </SettingSection>
    </div>
  )
}

export default Setting
