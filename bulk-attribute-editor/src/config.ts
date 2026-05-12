import { type ImmutableObject } from 'seamless-immutable'
import { type UseDataSource, type IMFieldSchema } from 'jimu-core'

export interface FieldConfig {
  id: string
  useDataSource: UseDataSource    // couche choisie (référence ExB)
  fieldName: string               // nom technique (ex: STATUT)
  label: string                   // libellé affiché à l'utilisateur
}

export interface Config {
  useMapWidgetIds?: string[]
  fieldConfigs: FieldConfig[]
}

export type IMConfig = ImmutableObject<Config>
