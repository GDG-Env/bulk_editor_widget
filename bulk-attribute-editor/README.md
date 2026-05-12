# Bulk Attribute Editor

Custom widget for **ArcGIS Experience Builder** that allows bulk editing of feature attributes (points, lines, polygons).
Fields to edit are configured by the admin in the widget settings panel.

## Compatibility

| ArcGIS Experience Builder | Compatible |
|---------------------------|:----------:|
| 1.13                      | yes        |

| ArcGIS Enterprise | Compatible |
|-------------------|:----------:|
| 11.3              | yes        |

## Deploy to ArcGIS Enterprise

In Experience Builder, go to **Custom widgets -> Add custom widget** and paste this URL:

    https://raw.githubusercontent.com/GDG-Env/bulk_editor_widget/master/bulk-attribute-editor/manifest.json

## Features

- Select features by rectangle, polygon, lasso or point
- Fields and layers configured by admin (not exposed to end users)
- Supports coded-value domains (dropdown), range domains (min/max), date fields
- Bulk applyEdits grouped by layer
