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

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const fieldConfigs: FieldConfig[] = (props.config?.fieldConfigs as any) || []

  // ── Persistance ──────────────────────────────────────────────────────────
  const saveFields = (next: FieldConfig[]) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('fieldConfigs', next as any)
    })
  }

  const onMapSelect = (ids: string[]) => {
    props.onSettingChange({ id: props.id, useMapWidgetIds: ids })
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  const addField = () => {
    saveFields([
      ...fieldConfigs,
      { id: uid(), useDataSource: null as any, fieldName: '', label: '' }
    ])
  }

  const updateField = (i: number, patch: Partial<FieldConfig>) => {
    saveFields(fieldConfigs.map((fc, j) => j === i ? { ...fc, ...patch } : fc))
  }

  const removeField = (i: number) => {
    saveFields(fieldConfigs.filter((_, j) => j !== i))
  }

  const moveField = (i: number, dir: -1 | 1) => {
    const j = i + dir
    if (j < 0 || j >= fieldConfigs.length) return
    const next = [...fieldConfigs]
    ;[next[i], next[j]] = [next[j], next[i]]
    saveFields(next)
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
              Click <strong>+ Add a field</strong> to configure a field to bulk-edit.
            </div>
          </SettingRow>
        )}

        {mapIds && fieldConfigs.map((fc, idx) => (
          <div key={fc.id} style={card}>
            {/* Header */}
            <div style={headerRow}>
              <span style={{ flex: 1, fontWeight: 600, fontSize: 12 }}>
                Field {idx + 1}{fc.useDataSource ? ` — ${getLayerLabel(fc.useDataSource)}` : ''}
              </span>
              <Button size="sm" type="tertiary" onClick={() => moveField(idx, -1)} disabled={idx === 0}>↑</Button>
              <Button size="sm" type="tertiary" onClick={() => moveField(idx,  1)} disabled={idx === fieldConfigs.length - 1}>↓</Button>
              <Button size="sm" type="tertiary" onClick={() => removeField(idx)}>✕</Button>
            </div>

            {/* Couche (DataSourceSelector limité aux couches de la carte) */}
            <div style={lbl}>Layer</div>
            <DataSourceSelector
              types={Immutable([DataSourceTypes.FeatureLayer])}
              useMapWidgetIds={Immutable(mapIds)}
              useDataSources={fc.useDataSource ? Immutable([fc.useDataSource]) : Immutable([])}
              mustUseDataSource
              hideAddDataButton
              hideDataView
              onChange={(arr: any) => {
                const first = arr && arr.length ? arr[0] : null
                const uds = first
                  ? (typeof first.asMutable === 'function' ? first.asMutable({ deep: true }) : first)
                  : null
                updateField(idx, { useDataSource: uds, fieldName: '' })
              }}
            />

            {/* Champ */}
            <div style={lbl}>Field to edit</div>
            {fc.useDataSource
              ? (
                <FieldSelector
                  useDataSources={Immutable([fc.useDataSource])}
                  selectedFields={fc.fieldName ? Immutable([fc.fieldName]) : Immutable([])}
                  isMultiple={false}
                  onChange={(fields: any) => {
                    const name = fields && fields.length ? fields[0].jimuName || fields[0].name : ''
                    updateField(idx, { fieldName: name })
                  }}
                />
              )
              : <div style={{ fontSize: 11, color: '#888' }}>Choose a layer first.</div>
            }

            {/* Libellé affiché */}
            <div style={lbl}>Label displayed to the user (optional)</div>
            <TextInput
              size="sm"
              value={fc.label}
              placeholder={fc.fieldName || 'Field label'}
              onChange={e => updateField(idx, { label: e.target.value })}
            />
          </div>
        ))}

        {mapIds && (
          <SettingRow>
            <Button type="primary" size="sm" style={{ width: '100%' }} onClick={addField}>
              + Add a field
            </Button>
          </SettingRow>
        )}
      </SettingSection>
    </div>
  )
}

export default Setting
