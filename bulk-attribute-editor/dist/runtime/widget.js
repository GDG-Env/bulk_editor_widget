System.register(["jimu-core","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/bulk-attribute-editor/src/runtime/translations/default.ts"
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/bulk-attribute-editor/src/runtime/translations/default.ts ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Bulk attribute editor',
    selectMap: 'Select a map widget in the settings',
    selectLayers: 'Layers to edit',
    selectionTool: 'Selection tool',
    rectangle: 'Rectangle',
    polygon: 'Polygon',
    lasso: 'Lasso',
    point: 'Point',
    clearSelection: 'Clear selection',
    selectedFeatures: '{count} feature(s) selected',
    fieldsToEdit: 'Fields to edit',
    addField: 'Add a field',
    field: 'Field',
    newValue: 'New value',
    applyEdits: 'Apply changes',
    applying: 'Applying...',
    success: 'Changes saved successfully',
    errorMsg: 'Error while saving',
    noLayers: 'No editable layer available',
    noFeatures: 'No feature selected',
    addAtLeastOneField: 'Add at least one field to edit',
    remove: 'Remove',
    selectField: '-- Choose a field --',
    keepCurrentValue: '(leave empty to keep current value)',
    confirmApply: 'Confirm changes on {count} feature(s)?',
    byLayer: 'By layer'
});


/***/ },

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = (window.jimuConfig && window.jimuConfig.baseUrl) || '';

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/bulk-attribute-editor/src/runtime/widget.tsx ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/bulk-attribute-editor/src/runtime/translations/default.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */
// =============================================================================
// Widget : Ã‰dition d'attributs en lot
// Les champs Ã  modifier sont dÃ©finis dans les PARAMÃˆTRES par l'administrateur,
// via les sÃ©lecteurs ExB (DataSourceSelector + FieldSelector).
// L'utilisateur sÃ©lectionne des entitÃ©s sur la carte, saisit les valeurs
// et applique les modifications.
// =============================================================================




const { useState, useEffect, useRef, useMemo, useCallback } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
// â”€â”€ Styles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const S = {
    root: { overflow: 'auto', height: '100%', padding: 12, fontSize: 14, boxSizing: 'border-box' },
    label: { fontWeight: 600, display: 'block', marginBottom: 4, marginTop: 8 },
    row: { display: 'flex', gap: 6, alignItems: 'center' },
    between: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    muted: { fontSize: 12, color: '#888', marginTop: 4 },
    mb: { marginBottom: 10 },
    mb4: { marginBottom: 4 },
    card: { border: '1px solid #ddd', borderRadius: 4, padding: 8, marginBottom: 6 },
    warn: { fontSize: 11, color: '#f90', marginLeft: 4 }
};
// â”€â”€ Widget â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const Widget = (props) => {
    var _a, _b;
    // fieldConfigs dÃ©finis dans les paramÃ¨tres par l'admin
    const fieldConfigs = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.fieldConfigs) || [];
    const [jimuMapView, setJimuMapView] = useState(null);
    const [layerMap, setLayerMap] = useState(new Map());
    const [tool, setTool] = useState('rectangle');
    const [drawing, setDrawing] = useState(false);
    const [selected, setSelected] = useState({});
    const [values, setValues] = useState({});
    const [busy, setBusy] = useState(false);
    const [modulesReady, setModulesReady] = useState(false);
    const [scanStatus, setScanStatus] = useState('idle');
    const [message, setMessage] = useState(null);
    const jmvRef = useRef(null);
    const layerMapRef = useRef(new Map());
    const fieldConfigsRef = useRef([]);
    const sketchVMRef = useRef(null);
    const graphicsLyrRef = useRef(null);
    const highlights = useRef([]);
    const modulesRef = useRef(null);
    const scanTimers = useRef([]);
    const reactHandle = useRef(null);
    useEffect(() => { jmvRef.current = jimuMapView; }, [jimuMapView]);
    useEffect(() => { layerMapRef.current = layerMap; }, [layerMap]);
    useEffect(() => { fieldConfigsRef.current = fieldConfigs; }, [fieldConfigs]);
    // â”€â”€ Translation helper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const t = (key, params) => {
        let msg = _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"][key];
        if (params)
            Object.keys(params).forEach(k => { msg = msg.replace(`{${k}}`, String(params[k])); });
        return msg;
    };
    // â”€â”€ Load ArcGIS modules once â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    useEffect(() => {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
            'esri/layers/GraphicsLayer',
            'esri/widgets/Sketch/SketchViewModel',
            'esri/core/reactiveUtils'
        ]).then(([GraphicsLayer, SketchViewModel, reactiveUtils]) => {
            modulesRef.current = { GraphicsLayer, SketchViewModel, reactiveUtils };
            setModulesReady(true);
        });
    }, []);
    // â”€â”€ Scan layers from configured data sources â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // Map keyed by dataSourceId â†’ LayerInfo
    const scanLayers = useCallback((jmv) => __awaiter(void 0, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g;
        if (!jmv)
            return;
        const configs = fieldConfigsRef.current;
        if (configs.length === 0) {
            setScanStatus('done');
            return;
        }
        setScanStatus('scanning');
        const result = new Map();
        const seen = new Set();
        // Wait for view ready
        try {
            yield ((_e = (_d = (_c = jmv.view).when) === null || _d === void 0 ? void 0 : _d.call(_c)) !== null && _e !== void 0 ? _e : Promise.resolve());
        }
        catch (_h) { }
        for (const fc of configs) {
            const dsId = (_f = fc.useDataSource) === null || _f === void 0 ? void 0 : _f.dataSourceId;
            if (!dsId || seen.has(dsId))
                continue;
            seen.add(dsId);
            let layer = null;
            // MÃ©thode 1 : JimuLayerView (le plus direct dans ExB)
            try {
                const jlvDict = jmv.jimuLayerViews || {};
                for (const jlv of Object.values(jlvDict)) {
                    if ((jlv === null || jlv === void 0 ? void 0 : jlv.layerDataSourceId) === dsId || (jlv === null || jlv === void 0 ? void 0 : jlv.dataSourceId) === dsId) {
                        layer = jlv.layer;
                        break;
                    }
                }
            }
            catch (_j) { }
            // MÃ©thode 2 : DataSourceManager â†’ ds.layer
            if (!layer) {
                try {
                    const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
                    layer = (ds === null || ds === void 0 ? void 0 : ds.layer) || ((_g = ds === null || ds === void 0 ? void 0 : ds.getLayer) === null || _g === void 0 ? void 0 : _g.call(ds));
                }
                catch (_k) { }
            }
            if (!layer)
                continue;
            if (!layer.loaded) {
                try {
                    yield layer.load();
                }
                catch (_l) { }
            }
            if (!layer.loaded)
                continue;
            result.set(dsId, { layer, fields: layer.fields || [], title: layer.title || dsId });
        }
        setLayerMap(result);
        setScanStatus('done');
    }), []);
    // â”€â”€ Clear highlights â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const clearHighlights = useCallback(() => {
        highlights.current.forEach(h => { try {
            h.remove();
        }
        catch (_a) { } });
        highlights.current = [];
    }, []);
    // â”€â”€ Spatial selection â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const runSelection = useCallback((geometry) => __awaiter(void 0, void 0, void 0, function* () {
        const jmv = jmvRef.current;
        if (!jmv)
            return;
        clearHighlights();
        const newSel = {};
        for (const [, info] of layerMapRef.current) {
            const layer = info.layer;
            try {
                const q = layer.createQuery();
                q.geometry = geometry;
                q.spatialRelationship = 'intersects';
                q.returnGeometry = false;
                q.outFields = [layer.objectIdField];
                const res = yield layer.queryFeatures(q);
                const oids = res.features.map((f) => f.attributes[layer.objectIdField]);
                if (oids.length) {
                    newSel[layer.id] = oids;
                    try {
                        const lv = yield jmv.view.whenLayerView(layer);
                        highlights.current.push(lv.highlight(oids));
                    }
                    catch (_m) { }
                }
            }
            catch (e) {
                console.error('Selection error', layer.title, e);
            }
        }
        setSelected(newSel);
    }), [clearHighlights]);
    // â”€â”€ Init SketchViewModel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    useEffect(() => {
        if (!jimuMapView || !modulesReady)
            return;
        const { GraphicsLayer, SketchViewModel, reactiveUtils } = modulesRef.current;
        const view = jimuMapView.view;
        let gl, svm, sketchHandle;
        const init = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield view.when();
            }
            catch (_a) { }
            gl = new GraphicsLayer({ listMode: 'hide' });
            view.map.add(gl);
            graphicsLyrRef.current = gl;
            svm = new SketchViewModel({
                view,
                layer: gl,
                defaultCreateOptions: { hasZ: false },
                polygonSymbol: { type: 'simple-fill', color: [0, 120, 212, 0.15], outline: { color: [0, 120, 212, 1], width: 2 } },
                pointSymbol: { type: 'simple-marker', color: [0, 120, 212, 0.5], outline: { color: [0, 120, 212, 1], width: 2 }, size: 10 }
            });
            sketchVMRef.current = svm;
            sketchHandle = svm.on('create', (evt) => {
                console.debug('[bulk-attr] sketch event', evt.state, evt.tool);
                if (evt.state === 'complete') {
                    runSelection(evt.graphic.geometry);
                    setDrawing(false);
                    setTimeout(() => { try {
                        gl.removeAll();
                    }
                    catch (_a) { } }, 600);
                    // RÃ©active le popup aprÃ¨s la sÃ©lection
                    try {
                        if (view.popup)
                            view.popup.autoOpenEnabled = true;
                    }
                    catch (_a) { }
                }
                if (evt.state === 'cancel') {
                    setDrawing(false);
                    try {
                        if (view.popup)
                            view.popup.autoOpenEnabled = true;
                    }
                    catch (_b) { }
                }
            });
            yield scanLayers(jimuMapView);
            // Re-scan si des couches sont ajoutÃ©es/retirÃ©es
            try {
                reactHandle.current = reactiveUtils.on(() => view.map.allLayers, 'change', () => scanLayers(jimuMapView));
            }
            catch (_b) { }
            // Retries diffÃ©rÃ©s pour les couches lentes Ã  charger
            scanTimers.current = [
                setTimeout(() => { if (jmvRef.current)
                    scanLayers(jmvRef.current); }, 2000),
                setTimeout(() => { if (jmvRef.current)
                    scanLayers(jmvRef.current); }, 5000)
            ];
        });
        init();
        return () => {
            if (sketchHandle)
                try {
                    sketchHandle.remove();
                }
                catch (_a) { }
            if (reactHandle.current)
                try {
                    reactHandle.current.remove();
                }
                catch (_b) { }
            scanTimers.current.forEach(clearTimeout);
            if (svm)
                try {
                    svm.destroy();
                }
                catch (_c) { }
            if (gl)
                try {
                    view.map.remove(gl);
                }
                catch (_d) { }
            clearHighlights();
        };
    }, [jimuMapView, modulesReady, runSelection, scanLayers, clearHighlights]);
    // â”€â”€ Drawing â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const startDrawing = () => {
        var _a, _b;
        if (!sketchVMRef.current) {
            console.warn('[bulk-attr] SketchViewModel not ready');
            return;
        }
        const jmv = jmvRef.current;
        if (jmv) {
            try {
                jmv.view.popup.autoOpenEnabled = false;
            }
            catch (_c) { }
            try {
                (_b = (_a = jmv.view.popup) === null || _a === void 0 ? void 0 : _a.close) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            catch (_d) { }
        }
        setDrawing(true);
        setMessage(null);
        console.debug('[bulk-attr] startDrawing tool=', tool, 'layers=', layerMapRef.current.size);
        if (tool === 'lasso')
            sketchVMRef.current.create('polygon', { mode: 'freehand' });
        else
            sketchVMRef.current.create(tool);
    };
    const cancelDrawing = () => {
        var _a, _b;
        try {
            (_a = sketchVMRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
        }
        catch (_c) { }
        setDrawing(false);
        try {
            ((_b = jmvRef.current) === null || _b === void 0 ? void 0 : _b.view).popup.autoOpenEnabled = true;
        }
        catch (_d) { }
    };
    const clearSelection = () => { clearHighlights(); setSelected({}); setMessage(null); };
    // â”€â”€ Derived â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const totalSelected = useMemo(() => Object.values(selected).reduce((s, a) => s + a.length, 0), [selected]);
    const canSelect = layerMap.size > 0 && modulesReady;
    // Liste unique des dataSourceIds configurÃ©s, dans l'ordre d'apparition
    const uniqueDsIds = useMemo(() => {
        const seen = new Set();
        const out = [];
        fieldConfigs.forEach(fc => {
            var _a;
            const id = (_a = fc.useDataSource) === null || _a === void 0 ? void 0 : _a.dataSourceId;
            if (id && !seen.has(id)) {
                seen.add(id);
                out.push(id);
            }
        });
        return out;
    }, [fieldConfigs]);
    // â”€â”€ Input renderer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const renderInput = (fc) => {
        var _a, _b;
        const info = layerMap.get((_a = fc.useDataSource) === null || _a === void 0 ? void 0 : _a.dataSourceId);
        const field = info === null || info === void 0 ? void 0 : info.fields.find((f) => f.name === fc.fieldName);
        const val = (_b = values[fc.id]) !== null && _b !== void 0 ? _b : '';
        const set = (v) => setValues(p => (Object.assign(Object.assign({}, p), { [fc.id]: v })));
        if (!field)
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { size: "sm", value: val, placeholder: "field not available", disabled: true, onChange: e => set(e.target.value) });
        // Cas spécial : treatment_num avec liste déroulante 1-10
        if (fc.fieldName === 'treatment_num') {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", value: val, onChange: e => set(e.target.value) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "" }, "-- Choose --"),
                Array.from({ length: 10 }, (_, i) => (i + 1).toString()).map(num => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { key: num, value: num }, num)))));
        }
        const dom = field.domain;
        if ((dom === null || dom === void 0 ? void 0 : dom.type) === 'coded-value') {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", value: val, onChange: e => set(e.target.value) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "" }, "-- Choose --"),
                dom.codedValues.map((cv) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { key: String(cv.code), value: String(cv.code) }, cv.name)))));
        }
        const numeric = ['small-integer', 'integer', 'big-integer', 'single', 'double', 'long'].includes(field.type);
        if (numeric) {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: "sm", value: val === '' ? undefined : Number(val), min: (dom === null || dom === void 0 ? void 0 : dom.type) === 'range' ? dom.minValue : undefined, max: (dom === null || dom === void 0 ? void 0 : dom.type) === 'range' ? dom.maxValue : undefined, onChange: v => set(v !== null && v !== void 0 ? v : '') }));
        }
        if (field.type === 'date') {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { size: "sm", type: "datetime-local", value: val, onChange: e => set(e.target.value) });
        }
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { size: "sm", value: val, placeholder: "New value", onChange: e => set(e.target.value) });
    };
    // â”€â”€ Apply edits â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const applyAll = () => __awaiter(void 0, void 0, void 0, function* () {
        var _o, _p, _q;
        if (!totalSelected) {
            setMessage({ type: 'error', text: t('noFeatures') });
            return;
        }
        const active = fieldConfigs.filter(fc => { const v = values[fc.id]; return v !== '' && v != null; });
        if (!active.length) {
            setMessage({ type: 'error', text: 'Enter at least one value.' });
            return;
        }
        if (!window.confirm(t('confirmApply', { count: totalSelected })))
            return;
        setBusy(true);
        setMessage(null);
        try {
            const byDs = new Map();
            for (const fc of active) {
                const dsId = (_o = fc.useDataSource) === null || _o === void 0 ? void 0 : _o.dataSourceId;
                if (!dsId)
                    continue;
                const info = layerMap.get(dsId);
                if (!info)
                    continue;
                if (!byDs.has(dsId))
                    byDs.set(dsId, { info, edits: [] });
                byDs.get(dsId).edits.push(fc);
            }
            let total = 0;
            for (const [, { info, edits }] of byDs) {
                const { layer, fields } = info;
                const oids = selected[layer.id];
                if (!(oids === null || oids === void 0 ? void 0 : oids.length))
                    continue;
                const updates = oids.map(oid => {
                    const attrs = { [layer.objectIdField]: oid };
                    edits.forEach(fc => {
                        const f = fields.find((x) => x.name === fc.fieldName);
                        let v = values[fc.id];
                        if (f) {
                            if (['small-integer', 'integer', 'big-integer', 'long'].includes(f.type))
                                v = parseInt(v, 10);
                            else if (['single', 'double'].includes(f.type))
                                v = parseFloat(v);
                            else if (f.type === 'date')
                                v = v ? new Date(v).getTime() : null;
                        }
                        attrs[fc.fieldName] = v;
                    });
                    return { attributes: attrs };
                });
                const res = yield layer.applyEdits({ updateFeatures: updates });
                const errs = (res.updateFeatureResults || []).filter((r) => r.error);
                if (errs.length)
                    throw new Error(`${layer.title} : ${((_p = errs[0].error) === null || _p === void 0 ? void 0 : _p.message) || 'erreur'}`);
                total += ((_q = res.updateFeatureResults) === null || _q === void 0 ? void 0 : _q.length) || 0;
            }
            setMessage({ type: 'success', text: `${t('success')} (${total} feature(s))` });
            setValues({});
        }
        catch (e) {
            console.error(e);
            setMessage({ type: 'error', text: `${t('errorMsg')} : ${e.message || e}` });
        }
        finally {
            setBusy(false);
        }
    });
    // â”€â”€ Guards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    if (!((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length)) {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 12 } }, t('selectMap'));
    }
    if (fieldConfigs.length === 0) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 12 } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: v => { setJimuMapView(v); if (v)
                    scanLayers(v); } }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { type: "warning", withIcon: true, text: "No fields configured. Open the widget settings (\u2699\uFE0F) to define the layers and fields to edit." })));
    }
    // â”€â”€ Render â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.root },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: v => { setJimuMapView(v); if (v)
                scanLayers(v); } }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.mb },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.label }, t('selectionTool')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, S.row), { marginBottom: 6 }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", value: tool, style: { flex: 1 }, onChange: e => setTool(e.target.value) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "rectangle" }, t('rectangle')),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "polygon" }, t('polygon')),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "lasso" }, t('lasso')),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "point" }, t('point'))),
                drawing
                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "danger", onClick: cancelDrawing }, "Cancel")
                    : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "primary", onClick: startDrawing, disabled: !canSelect, title: scanStatus === 'scanning' ? 'Loading layers...' : '' }, scanStatus === 'scanning' ? 'Loading...' : 'Select')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.between },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 12 } }, t('selectedFeatures', { count: totalSelected })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "tertiary", onClick: clearSelection, disabled: !totalSelected }, t('clearSelection'))),
            totalSelected > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.muted }, uniqueDsIds.map(dsId => {
                var _a;
                const info = layerMap.get(dsId);
                if (!info)
                    return null;
                const cnt = ((_a = selected[info.layer.id]) === null || _a === void 0 ? void 0 : _a.length) || 0;
                return cnt ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: dsId },
                    "\u00E2\u20AC\u00A2 ",
                    info.title,
                    " : ",
                    cnt) : null;
            })))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.mb },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.label }, t('fieldsToEdit')),
            uniqueDsIds.map(dsId => {
                const info = layerMap.get(dsId);
                const title = (info === null || info === void 0 ? void 0 : info.title) || dsId;
                const fields = fieldConfigs.filter(fc => { var _a; return ((_a = fc.useDataSource) === null || _a === void 0 ? void 0 : _a.dataSourceId) === dsId; });
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: dsId, style: { marginBottom: 10 } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 500, fontSize: 13, marginBottom: 4 } },
                        title,
                        !info && scanStatus === 'done' && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.warn }, "\u26A0 layer not found in map"),
                        !info && scanStatus === 'scanning' && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.warn }, "... loading")),
                    fields.map(fc => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: fc.id, style: S.card },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, S.mb4), { fontSize: 12, fontWeight: 500 }) }, fc.label || fc.fieldName),
                        renderInput(fc))))));
            })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", style: { width: '100%' }, onClick: applyAll, disabled: busy || !totalSelected }, busy ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Loading, { type: "DONUT", width: 16, height: 16 }) : t('applyEdits')),
        message && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { style: { marginTop: 10 }, type: message.type, text: message.text, withIcon: true, closable: true, onClose: () => setMessage(null) }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9idWxrLWF0dHJpYnV0ZS1lZGl0b3IvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLHVCQUF1QjtJQUNyQyxTQUFTLEVBQUUscUNBQXFDO0lBQ2hELFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixTQUFTLEVBQUUsV0FBVztJQUN0QixPQUFPLEVBQUUsU0FBUztJQUNsQixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0lBQ2QsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxnQkFBZ0IsRUFBRSw2QkFBNkI7SUFDL0MsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixRQUFRLEVBQUUsYUFBYTtJQUN2QixLQUFLLEVBQUUsT0FBTztJQUNkLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLFVBQVUsRUFBRSxlQUFlO0lBQzNCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLE9BQU8sRUFBRSw0QkFBNEI7SUFDckMsUUFBUSxFQUFFLG9CQUFvQjtJQUM5QixRQUFRLEVBQUUsNkJBQTZCO0lBQ3ZDLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsa0JBQWtCLEVBQUUsZ0NBQWdDO0lBQ3BELE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkMsZ0JBQWdCLEVBQUUscUNBQXFDO0lBQ3ZELFlBQVksRUFBRSx3Q0FBd0M7SUFDdEQsT0FBTyxFQUFFLFVBQVU7Q0FDcEI7Ozs7Ozs7Ozs7OztBQzNCRCx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtV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QVMsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUNqRyxJQUFJLENBQUMsQ0FBQyxDQUFDLCtDQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNsRTtRQUVSLE9BQU8sSUFBSSxDQUNWLCtDQUFDLDBDQUFLLElBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUNyRSxRQUFRLFFBQUMsUUFBUSxRQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FDeEQsQ0FDRyxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9idWxrLWF0dHJpYnV0ZS1lZGl0b3Ivc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9idWxrLWF0dHJpYnV0ZS1lZGl0b3Ivc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnQnVsayBhdHRyaWJ1dGUgZWRpdG9yJyxcclxuICBzZWxlY3RNYXA6ICdTZWxlY3QgYSBtYXAgd2lkZ2V0IGluIHRoZSBzZXR0aW5ncycsXHJcbiAgc2VsZWN0TGF5ZXJzOiAnTGF5ZXJzIHRvIGVkaXQnLFxyXG4gIHNlbGVjdGlvblRvb2w6ICdTZWxlY3Rpb24gdG9vbCcsXHJcbiAgcmVjdGFuZ2xlOiAnUmVjdGFuZ2xlJyxcclxuICBwb2x5Z29uOiAnUG9seWdvbicsXHJcbiAgbGFzc286ICdMYXNzbycsXHJcbiAgcG9pbnQ6ICdQb2ludCcsXHJcbiAgY2xlYXJTZWxlY3Rpb246ICdDbGVhciBzZWxlY3Rpb24nLFxyXG4gIHNlbGVjdGVkRmVhdHVyZXM6ICd7Y291bnR9IGZlYXR1cmUocykgc2VsZWN0ZWQnLFxyXG4gIGZpZWxkc1RvRWRpdDogJ0ZpZWxkcyB0byBlZGl0JyxcclxuICBhZGRGaWVsZDogJ0FkZCBhIGZpZWxkJyxcclxuICBmaWVsZDogJ0ZpZWxkJyxcclxuICBuZXdWYWx1ZTogJ05ldyB2YWx1ZScsXHJcbiAgYXBwbHlFZGl0czogJ0FwcGx5IGNoYW5nZXMnLFxyXG4gIGFwcGx5aW5nOiAnQXBwbHlpbmcuLi4nLFxyXG4gIHN1Y2Nlc3M6ICdDaGFuZ2VzIHNhdmVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgZXJyb3JNc2c6ICdFcnJvciB3aGlsZSBzYXZpbmcnLFxyXG4gIG5vTGF5ZXJzOiAnTm8gZWRpdGFibGUgbGF5ZXIgYXZhaWxhYmxlJyxcclxuICBub0ZlYXR1cmVzOiAnTm8gZmVhdHVyZSBzZWxlY3RlZCcsXHJcbiAgYWRkQXRMZWFzdE9uZUZpZWxkOiAnQWRkIGF0IGxlYXN0IG9uZSBmaWVsZCB0byBlZGl0JyxcclxuICByZW1vdmU6ICdSZW1vdmUnLFxyXG4gIHNlbGVjdEZpZWxkOiAnLS0gQ2hvb3NlIGEgZmllbGQgLS0nLFxyXG4gIGtlZXBDdXJyZW50VmFsdWU6ICcobGVhdmUgZW1wdHkgdG8ga2VlcCBjdXJyZW50IHZhbHVlKScsXHJcbiAgY29uZmlybUFwcGx5OiAnQ29uZmlybSBjaGFuZ2VzIG9uIHtjb3VudH0gZmVhdHVyZShzKT8nLFxyXG4gIGJ5TGF5ZXI6ICdCeSBsYXllcidcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSAod2luZG93LmppbXVDb25maWcgJiYgd2luZG93LmppbXVDb25maWcuYmFzZVVybCkgfHwgJydcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFdpZGdldCA6IMOD4oCwZGl0aW9uIGQnYXR0cmlidXRzIGVuIGxvdFxyXG4vLyBMZXMgY2hhbXBzIMODwqAgbW9kaWZpZXIgc29udCBkw4PCqWZpbmlzIGRhbnMgbGVzIFBBUkFNw4PLhlRSRVMgcGFyIGwnYWRtaW5pc3RyYXRldXIsXHJcbi8vIHZpYSBsZXMgc8ODwqlsZWN0ZXVycyBFeEIgKERhdGFTb3VyY2VTZWxlY3RvciArIEZpZWxkU2VsZWN0b3IpLlxyXG4vLyBMJ3V0aWxpc2F0ZXVyIHPDg8KpbGVjdGlvbm5lIGRlcyBlbnRpdMODwqlzIHN1ciBsYSBjYXJ0ZSwgc2Fpc2l0IGxlcyB2YWxldXJzXHJcbi8vIGV0IGFwcGxpcXVlIGxlcyBtb2RpZmljYXRpb25zLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywganN4LCBSZWFjdCwgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdCwgT3B0aW9uLCBBbGVydCwgTG9hZGluZywgVGV4dElucHV0LCBOdW1lcmljSW5wdXQgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcsIHR5cGUgRmllbGRDb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSA9IFJlYWN0XHJcblxyXG4vLyDDouKAneKCrMOi4oCd4oKsIFR5cGVzIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuXHJcbmludGVyZmFjZSBMYXllckluZm8gICB7IGxheWVyOiBhbnk7IGZpZWxkczogYW55W107IHRpdGxlOiBzdHJpbmcgfVxyXG5pbnRlcmZhY2UgVmFsdWVNYXAgICAgeyBbZmllbGRDb25maWdJZDogc3RyaW5nXTogYW55IH1cclxuaW50ZXJmYWNlIFNlbGVjdGVkU2V0IHsgW2xheWVySWQ6IHN0cmluZ106IG51bWJlcltdIH1cclxudHlwZSBTZWxlY3Rpb25Ub29sID0gJ3JlY3RhbmdsZScgfCAncG9seWdvbicgfCAnbGFzc28nIHwgJ3BvaW50J1xyXG5cclxuLy8gw6LigJ3igqzDouKAneKCrCBTdHlsZXMgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuXHJcbmNvbnN0IFM6IFJlY29yZDxzdHJpbmcsIFJlYWN0LkNTU1Byb3BlcnRpZXM+ID0ge1xyXG4gIHJvb3Q6ICAgIHsgb3ZlcmZsb3c6ICdhdXRvJywgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6IDEyLCBmb250U2l6ZTogMTQsIGJveFNpemluZzogJ2JvcmRlci1ib3gnIH0sXHJcbiAgbGFiZWw6ICAgeyBmb250V2VpZ2h0OiA2MDAsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogNCwgbWFyZ2luVG9wOiA4IH0sXHJcbiAgcm93OiAgICAgeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiwgYWxpZ25JdGVtczogJ2NlbnRlcicgfSxcclxuICBiZXR3ZWVuOiB7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSxcclxuICBtdXRlZDogICB7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjODg4JywgbWFyZ2luVG9wOiA0IH0sXHJcbiAgbWI6ICAgICAgeyBtYXJnaW5Cb3R0b206IDEwIH0sXHJcbiAgbWI0OiAgICAgeyBtYXJnaW5Cb3R0b206IDQgfSxcclxuICBjYXJkOiAgICB7IGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJywgYm9yZGVyUmFkaXVzOiA0LCBwYWRkaW5nOiA4LCBtYXJnaW5Cb3R0b206IDYgfSxcclxuICB3YXJuOiAgICB7IGZvbnRTaXplOiAxMSwgY29sb3I6ICcjZjkwJywgbWFyZ2luTGVmdDogNCB9XHJcbn1cclxuXHJcbi8vIMOi4oCd4oKsw6LigJ3igqwgV2lkZ2V0IMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIC8vIGZpZWxkQ29uZmlncyBkw4PCqWZpbmlzIGRhbnMgbGVzIHBhcmFtw4PCqHRyZXMgcGFyIGwnYWRtaW5cclxuICBjb25zdCBmaWVsZENvbmZpZ3M6IEZpZWxkQ29uZmlnW10gPSAocHJvcHMuY29uZmlnPy5maWVsZENvbmZpZ3MgYXMgYW55KSB8fCBbXVxyXG5cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSAgID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXHJcbiAgY29uc3QgW2xheWVyTWFwLCBzZXRMYXllck1hcF0gICAgICAgICA9IHVzZVN0YXRlPE1hcDxzdHJpbmcsIExheWVySW5mbz4+KG5ldyBNYXAoKSlcclxuICBjb25zdCBbdG9vbCwgc2V0VG9vbF0gICAgICAgICAgICAgICAgID0gdXNlU3RhdGU8U2VsZWN0aW9uVG9vbD4oJ3JlY3RhbmdsZScpXHJcbiAgY29uc3QgW2RyYXdpbmcsIHNldERyYXdpbmddICAgICAgICAgICA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdICAgICAgICAgPSB1c2VTdGF0ZTxTZWxlY3RlZFNldD4oe30pXHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSAgICAgICAgICAgICA9IHVzZVN0YXRlPFZhbHVlTWFwPih7fSlcclxuICBjb25zdCBbYnVzeSwgc2V0QnVzeV0gICAgICAgICAgICAgICAgID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21vZHVsZXNSZWFkeSwgc2V0TW9kdWxlc1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzY2FuU3RhdHVzLCBzZXRTY2FuU3RhdHVzXSAgICAgPSB1c2VTdGF0ZTwnaWRsZScgfCAnc2Nhbm5pbmcnIHwgJ2RvbmUnPignaWRsZScpXHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdICAgICAgICAgICA9IHVzZVN0YXRlPHsgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJzsgdGV4dDogc3RyaW5nIH0gfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBqbXZSZWYgICAgICAgICAgPSB1c2VSZWY8SmltdU1hcFZpZXc+KG51bGwpXHJcbiAgY29uc3QgbGF5ZXJNYXBSZWYgICAgID0gdXNlUmVmPE1hcDxzdHJpbmcsIExheWVySW5mbz4+KG5ldyBNYXAoKSlcclxuICBjb25zdCBmaWVsZENvbmZpZ3NSZWYgPSB1c2VSZWY8RmllbGRDb25maWdbXT4oW10pXHJcbiAgY29uc3Qgc2tldGNoVk1SZWYgICAgID0gdXNlUmVmPGFueT4obnVsbClcclxuICBjb25zdCBncmFwaGljc0x5clJlZiAgPSB1c2VSZWY8YW55PihudWxsKVxyXG4gIGNvbnN0IGhpZ2hsaWdodHMgICAgICA9IHVzZVJlZjxBcnJheTx7IHJlbW92ZTogKCkgPT4gdm9pZCB9Pj4oW10pXHJcbiAgY29uc3QgbW9kdWxlc1JlZiAgICAgID0gdXNlUmVmPGFueT4obnVsbClcclxuICBjb25zdCBzY2FuVGltZXJzICAgICAgPSB1c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD5bXT4oW10pXHJcbiAgY29uc3QgcmVhY3RIYW5kbGUgICAgID0gdXNlUmVmPHsgcmVtb3ZlOiAoKSA9PiB2b2lkIH0+KG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IGptdlJlZi5jdXJyZW50ID0gamltdU1hcFZpZXcgfSwgICAgICAgICAgIFtqaW11TWFwVmlld10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgbGF5ZXJNYXBSZWYuY3VycmVudCA9IGxheWVyTWFwIH0sICAgICAgICAgW2xheWVyTWFwXSlcclxuICB1c2VFZmZlY3QoKCkgPT4geyBmaWVsZENvbmZpZ3NSZWYuY3VycmVudCA9IGZpZWxkQ29uZmlncyB9LCBbZmllbGRDb25maWdzXSlcclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBUcmFuc2xhdGlvbiBoZWxwZXIgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgY29uc3QgdCA9IChrZXk6IGtleW9mIHR5cGVvZiBkZWZhdWx0TWVzc2FnZXMsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcclxuICAgIGxldCBtc2cgPSBkZWZhdWx0TWVzc2FnZXNba2V5XSBhcyBzdHJpbmdcclxuICAgIGlmIChwYXJhbXMpIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrID0+IHsgbXNnID0gbXNnLnJlcGxhY2UoYHske2t9fWAsIFN0cmluZyhwYXJhbXNba10pKSB9KVxyXG4gICAgcmV0dXJuIG1zZ1xyXG4gIH1cclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBMb2FkIEFyY0dJUyBtb2R1bGVzIG9uY2Ugw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcicsXHJcbiAgICAgICdlc3JpL3dpZGdldHMvU2tldGNoL1NrZXRjaFZpZXdNb2RlbCcsXHJcbiAgICAgICdlc3JpL2NvcmUvcmVhY3RpdmVVdGlscydcclxuICAgIF0pLnRoZW4oKFtHcmFwaGljc0xheWVyLCBTa2V0Y2hWaWV3TW9kZWwsIHJlYWN0aXZlVXRpbHNdKSA9PiB7XHJcbiAgICAgIG1vZHVsZXNSZWYuY3VycmVudCA9IHsgR3JhcGhpY3NMYXllciwgU2tldGNoVmlld01vZGVsLCByZWFjdGl2ZVV0aWxzIH1cclxuICAgICAgc2V0TW9kdWxlc1JlYWR5KHRydWUpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIFNjYW4gbGF5ZXJzIGZyb20gY29uZmlndXJlZCBkYXRhIHNvdXJjZXMgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuICAvLyBNYXAga2V5ZWQgYnkgZGF0YVNvdXJjZUlkIMOi4oCg4oCZIExheWVySW5mb1xyXG4gIGNvbnN0IHNjYW5MYXllcnMgPSB1c2VDYWxsYmFjayhhc3luYyAoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgaWYgKCFqbXYpIHJldHVyblxyXG4gICAgY29uc3QgY29uZmlncyA9IGZpZWxkQ29uZmlnc1JlZi5jdXJyZW50XHJcbiAgICBpZiAoY29uZmlncy5sZW5ndGggPT09IDApIHsgc2V0U2NhblN0YXR1cygnZG9uZScpOyByZXR1cm4gfVxyXG5cclxuICAgIHNldFNjYW5TdGF0dXMoJ3NjYW5uaW5nJylcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXA8c3RyaW5nLCBMYXllckluZm8+KClcclxuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKVxyXG5cclxuICAgIC8vIFdhaXQgZm9yIHZpZXcgcmVhZHlcclxuICAgIHRyeSB7IGF3YWl0ICgoam12LnZpZXcgYXMgYW55KS53aGVuPy4oKSA/PyBQcm9taXNlLnJlc29sdmUoKSkgfSBjYXRjaCB7fVxyXG5cclxuICAgIGZvciAoY29uc3QgZmMgb2YgY29uZmlncykge1xyXG4gICAgICBjb25zdCBkc0lkID0gZmMudXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgIGlmICghZHNJZCB8fCBzZWVuLmhhcyhkc0lkKSkgY29udGludWVcclxuICAgICAgc2Vlbi5hZGQoZHNJZClcclxuXHJcbiAgICAgIGxldCBsYXllcjogYW55ID0gbnVsbFxyXG5cclxuICAgICAgLy8gTcODwql0aG9kZSAxIDogSmltdUxheWVyVmlldyAobGUgcGx1cyBkaXJlY3QgZGFucyBFeEIpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgamx2RGljdCA9IChqbXYgYXMgYW55KS5qaW11TGF5ZXJWaWV3cyB8fCB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qgamx2IG9mIE9iamVjdC52YWx1ZXMoamx2RGljdCkgYXMgYW55W10pIHtcclxuICAgICAgICAgIGlmIChqbHY/LmxheWVyRGF0YVNvdXJjZUlkID09PSBkc0lkIHx8IGpsdj8uZGF0YVNvdXJjZUlkID09PSBkc0lkKSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gamx2LmxheWVyXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIHt9XHJcblxyXG4gICAgICAvLyBNw4PCqXRob2RlIDIgOiBEYXRhU291cmNlTWFuYWdlciDDouKAoOKAmSBkcy5sYXllclxyXG4gICAgICBpZiAoIWxheWVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGRzOiBhbnkgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHNJZClcclxuICAgICAgICAgIGxheWVyID0gZHM/LmxheWVyIHx8IGRzPy5nZXRMYXllcj8uKClcclxuICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghbGF5ZXIpIGNvbnRpbnVlXHJcbiAgICAgIGlmICghbGF5ZXIubG9hZGVkKSB7IHRyeSB7IGF3YWl0IGxheWVyLmxvYWQoKSB9IGNhdGNoIHt9IH1cclxuICAgICAgaWYgKCFsYXllci5sb2FkZWQpIGNvbnRpbnVlXHJcblxyXG4gICAgICByZXN1bHQuc2V0KGRzSWQsIHsgbGF5ZXIsIGZpZWxkczogbGF5ZXIuZmllbGRzIHx8IFtdLCB0aXRsZTogbGF5ZXIudGl0bGUgfHwgZHNJZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldExheWVyTWFwKHJlc3VsdClcclxuICAgIHNldFNjYW5TdGF0dXMoJ2RvbmUnKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIENsZWFyIGhpZ2hsaWdodHMgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIGNvbnN0IGNsZWFySGlnaGxpZ2h0cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGhpZ2hsaWdodHMuY3VycmVudC5mb3JFYWNoKGggPT4geyB0cnkgeyBoLnJlbW92ZSgpIH0gY2F0Y2gge30gfSlcclxuICAgIGhpZ2hsaWdodHMuY3VycmVudCA9IFtdXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIMOi4oCd4oKsw6LigJ3igqwgU3BhdGlhbCBzZWxlY3Rpb24gw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuICBjb25zdCBydW5TZWxlY3Rpb24gPSB1c2VDYWxsYmFjayhhc3luYyAoZ2VvbWV0cnk6IGFueSkgPT4ge1xyXG4gICAgY29uc3Qgam12ID0gam12UmVmLmN1cnJlbnRcclxuICAgIGlmICgham12KSByZXR1cm5cclxuICAgIGNsZWFySGlnaGxpZ2h0cygpXHJcbiAgICBjb25zdCBuZXdTZWw6IFNlbGVjdGVkU2V0ID0ge31cclxuICAgIGZvciAoY29uc3QgWywgaW5mb10gb2YgbGF5ZXJNYXBSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBsYXllciA9IGluZm8ubGF5ZXJcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBxID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgIHEuZ2VvbWV0cnkgICAgICAgICAgICA9IGdlb21ldHJ5XHJcbiAgICAgICAgcS5zcGF0aWFsUmVsYXRpb25zaGlwID0gJ2ludGVyc2VjdHMnXHJcbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSAgICAgID0gZmFsc2VcclxuICAgICAgICBxLm91dEZpZWxkcyAgICAgICAgICAgPSBbbGF5ZXIub2JqZWN0SWRGaWVsZF1cclxuICAgICAgICBjb25zdCByZXMgID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxKVxyXG4gICAgICAgIGNvbnN0IG9pZHMgPSByZXMuZmVhdHVyZXMubWFwKChmOiBhbnkpID0+IGYuYXR0cmlidXRlc1tsYXllci5vYmplY3RJZEZpZWxkXSlcclxuICAgICAgICBpZiAob2lkcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5ld1NlbFtsYXllci5pZF0gPSBvaWRzXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBsdiA9IGF3YWl0IChqbXYudmlldyBhcyBhbnkpLndoZW5MYXllclZpZXcobGF5ZXIpXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodHMuY3VycmVudC5wdXNoKGx2LmhpZ2hsaWdodChvaWRzKSlcclxuICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS5lcnJvcignU2VsZWN0aW9uIGVycm9yJywgbGF5ZXIudGl0bGUsIGUpIH1cclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkKG5ld1NlbClcclxuICB9LCBbY2xlYXJIaWdobGlnaHRzXSlcclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBJbml0IFNrZXRjaFZpZXdNb2RlbCDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3IHx8ICFtb2R1bGVzUmVhZHkpIHJldHVyblxyXG4gICAgY29uc3QgeyBHcmFwaGljc0xheWVyLCBTa2V0Y2hWaWV3TW9kZWwsIHJlYWN0aXZlVXRpbHMgfSA9IG1vZHVsZXNSZWYuY3VycmVudFxyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXcgYXMgYW55XHJcbiAgICBsZXQgZ2w6IGFueSwgc3ZtOiBhbnksIHNrZXRjaEhhbmRsZTogYW55XHJcblxyXG4gICAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHsgYXdhaXQgdmlldy53aGVuKCkgfSBjYXRjaCB7fVxyXG4gICAgICBnbCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KVxyXG4gICAgICB2aWV3Lm1hcC5hZGQoZ2wpXHJcbiAgICAgIGdyYXBoaWNzTHlyUmVmLmN1cnJlbnQgPSBnbFxyXG5cclxuICAgICAgc3ZtID0gbmV3IFNrZXRjaFZpZXdNb2RlbCh7XHJcbiAgICAgICAgdmlldyxcclxuICAgICAgICBsYXllcjogZ2wsXHJcbiAgICAgICAgZGVmYXVsdENyZWF0ZU9wdGlvbnM6IHsgaGFzWjogZmFsc2UgfSBhcyBhbnksXHJcbiAgICAgICAgcG9seWdvblN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWZpbGwnLCBjb2xvcjogWzAsIDEyMCwgMjEyLCAwLjE1XSwgb3V0bGluZTogeyBjb2xvcjogWzAsIDEyMCwgMjEyLCAxXSwgd2lkdGg6IDIgfSB9IGFzIGFueSxcclxuICAgICAgICBwb2ludFN5bWJvbDogICB7IHR5cGU6ICdzaW1wbGUtbWFya2VyJywgY29sb3I6IFswLCAxMjAsIDIxMiwgMC41XSwgb3V0bGluZTogeyBjb2xvcjogWzAsIDEyMCwgMjEyLCAxXSwgd2lkdGg6IDIgfSwgc2l6ZTogMTAgfSBhcyBhbnlcclxuICAgICAgfSlcclxuICAgICAgc2tldGNoVk1SZWYuY3VycmVudCA9IHN2bVxyXG5cclxuICAgICAgc2tldGNoSGFuZGxlID0gc3ZtLm9uKCdjcmVhdGUnLCAoZXZ0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKCdbYnVsay1hdHRyXSBza2V0Y2ggZXZlbnQnLCBldnQuc3RhdGUsIGV2dC50b29sKVxyXG4gICAgICAgIGlmIChldnQuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAgIHJ1blNlbGVjdGlvbihldnQuZ3JhcGhpYy5nZW9tZXRyeSlcclxuICAgICAgICAgIHNldERyYXdpbmcoZmFsc2UpXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdHJ5IHsgZ2wucmVtb3ZlQWxsKCkgfSBjYXRjaCB7fSB9LCA2MDApXHJcbiAgICAgICAgICAvLyBSw4PCqWFjdGl2ZSBsZSBwb3B1cCBhcHLDg8KocyBsYSBzw4PCqWxlY3Rpb25cclxuICAgICAgICAgIHRyeSB7IGlmICh2aWV3LnBvcHVwKSB2aWV3LnBvcHVwLmF1dG9PcGVuRW5hYmxlZCA9IHRydWUgfSBjYXRjaCB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZ0LnN0YXRlID09PSAnY2FuY2VsJykge1xyXG4gICAgICAgICAgc2V0RHJhd2luZyhmYWxzZSlcclxuICAgICAgICAgIHRyeSB7IGlmICh2aWV3LnBvcHVwKSB2aWV3LnBvcHVwLmF1dG9PcGVuRW5hYmxlZCA9IHRydWUgfSBjYXRjaCB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGF3YWl0IHNjYW5MYXllcnMoamltdU1hcFZpZXcpXHJcblxyXG4gICAgICAvLyBSZS1zY2FuIHNpIGRlcyBjb3VjaGVzIHNvbnQgYWpvdXTDg8KpZXMvcmV0aXLDg8KpZXNcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZWFjdEhhbmRsZS5jdXJyZW50ID0gcmVhY3RpdmVVdGlscy5vbihcclxuICAgICAgICAgICgpID0+IHZpZXcubWFwLmFsbExheWVycywgJ2NoYW5nZScsXHJcbiAgICAgICAgICAoKSA9PiBzY2FuTGF5ZXJzKGppbXVNYXBWaWV3KVxyXG4gICAgICAgIClcclxuICAgICAgfSBjYXRjaCB7fVxyXG5cclxuICAgICAgLy8gUmV0cmllcyBkaWZmw4PCqXLDg8KpcyBwb3VyIGxlcyBjb3VjaGVzIGxlbnRlcyDDg8KgIGNoYXJnZXJcclxuICAgICAgc2NhblRpbWVycy5jdXJyZW50ID0gW1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBpZiAoam12UmVmLmN1cnJlbnQpIHNjYW5MYXllcnMoam12UmVmLmN1cnJlbnQpIH0sIDIwMDApLFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBpZiAoam12UmVmLmN1cnJlbnQpIHNjYW5MYXllcnMoam12UmVmLmN1cnJlbnQpIH0sIDUwMDApXHJcbiAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoc2tldGNoSGFuZGxlKSAgICAgICAgdHJ5IHsgc2tldGNoSGFuZGxlLnJlbW92ZSgpICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgIGlmIChyZWFjdEhhbmRsZS5jdXJyZW50KSB0cnkgeyByZWFjdEhhbmRsZS5jdXJyZW50LnJlbW92ZSgpIH0gY2F0Y2gge31cclxuICAgICAgc2NhblRpbWVycy5jdXJyZW50LmZvckVhY2goY2xlYXJUaW1lb3V0KVxyXG4gICAgICBpZiAoc3ZtKSB0cnkgeyBzdm0uZGVzdHJveSgpICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgaWYgKGdsKSAgdHJ5IHsgdmlldy5tYXAucmVtb3ZlKGdsKSB9IGNhdGNoIHt9XHJcbiAgICAgIGNsZWFySGlnaGxpZ2h0cygpXHJcbiAgICB9XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBtb2R1bGVzUmVhZHksIHJ1blNlbGVjdGlvbiwgc2NhbkxheWVycywgY2xlYXJIaWdobGlnaHRzXSlcclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBEcmF3aW5nIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIGNvbnN0IHN0YXJ0RHJhd2luZyA9ICgpID0+IHtcclxuICAgIGlmICghc2tldGNoVk1SZWYuY3VycmVudCkgeyBjb25zb2xlLndhcm4oJ1tidWxrLWF0dHJdIFNrZXRjaFZpZXdNb2RlbCBub3QgcmVhZHknKTsgcmV0dXJuIH1cclxuICAgIGNvbnN0IGptdiA9IGptdlJlZi5jdXJyZW50XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIHRyeSB7IChqbXYudmlldyBhcyBhbnkpLnBvcHVwLmF1dG9PcGVuRW5hYmxlZCA9IGZhbHNlIH0gY2F0Y2gge31cclxuICAgICAgdHJ5IHsgKGptdi52aWV3IGFzIGFueSkucG9wdXA/LmNsb3NlPy4oKSB9IGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgICBzZXREcmF3aW5nKHRydWUpOyBzZXRNZXNzYWdlKG51bGwpXHJcbiAgICBjb25zb2xlLmRlYnVnKCdbYnVsay1hdHRyXSBzdGFydERyYXdpbmcgdG9vbD0nLCB0b29sLCAnbGF5ZXJzPScsIGxheWVyTWFwUmVmLmN1cnJlbnQuc2l6ZSlcclxuICAgIGlmICh0b29sID09PSAnbGFzc28nKSBza2V0Y2hWTVJlZi5jdXJyZW50LmNyZWF0ZSgncG9seWdvbicsIHsgbW9kZTogJ2ZyZWVoYW5kJyB9KVxyXG4gICAgZWxzZSAgICAgICAgICAgICAgICAgIHNrZXRjaFZNUmVmLmN1cnJlbnQuY3JlYXRlKHRvb2wpXHJcbiAgfVxyXG4gIGNvbnN0IGNhbmNlbERyYXdpbmcgPSAoKSA9PiB7XHJcbiAgICB0cnkgeyBza2V0Y2hWTVJlZi5jdXJyZW50Py5jYW5jZWwoKSB9IGNhdGNoIHt9XHJcbiAgICBzZXREcmF3aW5nKGZhbHNlKVxyXG4gICAgdHJ5IHsgKGptdlJlZi5jdXJyZW50Py52aWV3IGFzIGFueSkucG9wdXAuYXV0b09wZW5FbmFibGVkID0gdHJ1ZSB9IGNhdGNoIHt9XHJcbiAgfVxyXG4gIGNvbnN0IGNsZWFyU2VsZWN0aW9uID0gKCkgPT4geyBjbGVhckhpZ2hsaWdodHMoKTsgc2V0U2VsZWN0ZWQoe30pOyBzZXRNZXNzYWdlKG51bGwpIH1cclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBEZXJpdmVkIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIGNvbnN0IHRvdGFsU2VsZWN0ZWQgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gT2JqZWN0LnZhbHVlcyhzZWxlY3RlZCkucmVkdWNlKChzLCBhKSA9PiBzICsgYS5sZW5ndGgsIDApLCBbc2VsZWN0ZWRdKVxyXG4gIGNvbnN0IGNhblNlbGVjdCA9IGxheWVyTWFwLnNpemUgPiAwICYmIG1vZHVsZXNSZWFkeVxyXG4gIC8vIExpc3RlIHVuaXF1ZSBkZXMgZGF0YVNvdXJjZUlkcyBjb25maWd1csODwqlzLCBkYW5zIGwnb3JkcmUgZCdhcHBhcml0aW9uXHJcbiAgY29uc3QgdW5pcXVlRHNJZHMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTsgY29uc3Qgb3V0OiBzdHJpbmdbXSA9IFtdXHJcbiAgICBmaWVsZENvbmZpZ3MuZm9yRWFjaChmYyA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gZmMudXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgIGlmIChpZCAmJiAhc2Vlbi5oYXMoaWQpKSB7IHNlZW4uYWRkKGlkKTsgb3V0LnB1c2goaWQpIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gb3V0XHJcbiAgfSwgW2ZpZWxkQ29uZmlnc10pXHJcblxyXG4gIC8vIMOi4oCd4oKsw6LigJ3igqwgSW5wdXQgcmVuZGVyZXIgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIGNvbnN0IHJlbmRlcklucHV0ID0gKGZjOiBGaWVsZENvbmZpZykgPT4ge1xyXG4gICAgY29uc3QgaW5mbyAgPSBsYXllck1hcC5nZXQoZmMudXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkKVxyXG4gICAgY29uc3QgZmllbGQgPSBpbmZvPy5maWVsZHMuZmluZCgoZjogYW55KSA9PiBmLm5hbWUgPT09IGZjLmZpZWxkTmFtZSlcclxuICAgIGNvbnN0IHZhbCAgID0gdmFsdWVzW2ZjLmlkXSA/PyAnJ1xyXG4gICAgY29uc3Qgc2V0ICAgPSAodjogYW55KSA9PiBzZXRWYWx1ZXMocCA9PiAoeyAuLi5wLCBbZmMuaWRdOiB2IH0pKVxyXG5cclxuICAgIGlmICghZmllbGQpIHJldHVybiA8VGV4dElucHV0IHNpemU9XCJzbVwiIHZhbHVlPXt2YWx9IHBsYWNlaG9sZGVyPVwiZmllbGQgbm90IGF2YWlsYWJsZVwiIGRpc2FibGVkIG9uQ2hhbmdlPXtlID0+IHNldChlLnRhcmdldC52YWx1ZSl9IC8+XHJcblxyXG4gICAgLy8gQ2FzIHNww6ljaWFsIDogdHJlYXRtZW50X251bSBhdmVjIGxpc3RlIGTDqXJvdWxhbnRlIDEtMTBcclxuICAgIGlmIChmYy5maWVsZE5hbWUgPT09ICd0cmVhdG1lbnRfbnVtJykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWxlY3Qgc2l6ZT1cInNtXCIgdmFsdWU9e3ZhbH0gb25DaGFuZ2U9e2UgPT4gc2V0KChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKX0+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvb3NlIC0tPC9PcHRpb24+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKF8sIGkpID0+IChpICsgMSkudG9TdHJpbmcoKSkubWFwKG51bSA9PiAoXHJcbiAgICAgICAgICAgIDxPcHRpb24ga2V5PXtudW19IHZhbHVlPXtudW19PntudW19PC9PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbSA9IGZpZWxkLmRvbWFpbiBhcyBhbnlcclxuICAgIGlmIChkb20/LnR5cGUgPT09ICdjb2RlZC12YWx1ZScpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2VsZWN0IHNpemU9XCJzbVwiIHZhbHVlPXt2YWx9IG9uQ2hhbmdlPXtlID0+IHNldCgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSl9PlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob29zZSAtLTwvT3B0aW9uPlxyXG4gICAgICAgICAge2RvbS5jb2RlZFZhbHVlcy5tYXAoKGN2OiBhbnkpID0+IChcclxuICAgICAgICAgICAgPE9wdGlvbiBrZXk9e1N0cmluZyhjdi5jb2RlKX0gdmFsdWU9e1N0cmluZyhjdi5jb2RlKX0+e2N2Lm5hbWV9PC9PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG51bWVyaWMgPSBbJ3NtYWxsLWludGVnZXInLCdpbnRlZ2VyJywnYmlnLWludGVnZXInLCdzaW5nbGUnLCdkb3VibGUnLCdsb25nJ10uaW5jbHVkZXMoZmllbGQudHlwZSlcclxuICAgIGlmIChudW1lcmljKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE51bWVyaWNJbnB1dCBzaXplPVwic21cIlxyXG4gICAgICAgICAgdmFsdWU9e3ZhbCA9PT0gJycgPyB1bmRlZmluZWQgOiBOdW1iZXIodmFsKX1cclxuICAgICAgICAgIG1pbj17ZG9tPy50eXBlID09PSAncmFuZ2UnID8gZG9tLm1pblZhbHVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgbWF4PXtkb20/LnR5cGUgPT09ICdyYW5nZScgPyBkb20ubWF4VmFsdWUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17diA9PiBzZXQodiA/PyAnJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgICByZXR1cm4gPFRleHRJbnB1dCBzaXplPVwic21cIiB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiB2YWx1ZT17dmFsfSBvbkNoYW5nZT17ZSA9PiBzZXQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxUZXh0SW5wdXQgc2l6ZT1cInNtXCIgdmFsdWU9e3ZhbH0gcGxhY2Vob2xkZXI9XCJOZXcgdmFsdWVcIiBvbkNoYW5nZT17ZSA9PiBzZXQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gIH1cclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBBcHBseSBlZGl0cyDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgY29uc3QgYXBwbHlBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXRvdGFsU2VsZWN0ZWQpIHsgc2V0TWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IHQoJ25vRmVhdHVyZXMnKSB9KTsgcmV0dXJuIH1cclxuICAgIGNvbnN0IGFjdGl2ZSA9IGZpZWxkQ29uZmlncy5maWx0ZXIoZmMgPT4geyBjb25zdCB2ID0gdmFsdWVzW2ZjLmlkXTsgcmV0dXJuIHYgIT09ICcnICYmIHYgIT0gbnVsbCB9KVxyXG4gICAgaWYgKCFhY3RpdmUubGVuZ3RoKSB7IHNldE1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCB0ZXh0OiAnRW50ZXIgYXQgbGVhc3Qgb25lIHZhbHVlLicgfSk7IHJldHVybiB9XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKHQoJ2NvbmZpcm1BcHBseScsIHsgY291bnQ6IHRvdGFsU2VsZWN0ZWQgfSkpKSByZXR1cm5cclxuXHJcbiAgICBzZXRCdXN5KHRydWUpOyBzZXRNZXNzYWdlKG51bGwpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBieURzID0gbmV3IE1hcDxzdHJpbmcsIHsgaW5mbzogTGF5ZXJJbmZvOyBlZGl0czogRmllbGRDb25maWdbXSB9PigpXHJcbiAgICAgIGZvciAoY29uc3QgZmMgb2YgYWN0aXZlKSB7XHJcbiAgICAgICAgY29uc3QgZHNJZCA9IGZjLnVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIGlmICghZHNJZCkgY29udGludWVcclxuICAgICAgICBjb25zdCBpbmZvID0gbGF5ZXJNYXAuZ2V0KGRzSWQpXHJcbiAgICAgICAgaWYgKCFpbmZvKSBjb250aW51ZVxyXG4gICAgICAgIGlmICghYnlEcy5oYXMoZHNJZCkpIGJ5RHMuc2V0KGRzSWQsIHsgaW5mbywgZWRpdHM6IFtdIH0pXHJcbiAgICAgICAgYnlEcy5nZXQoZHNJZCkhLmVkaXRzLnB1c2goZmMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB0b3RhbCA9IDBcclxuICAgICAgZm9yIChjb25zdCBbLCB7IGluZm8sIGVkaXRzIH1dIG9mIGJ5RHMpIHtcclxuICAgICAgICBjb25zdCB7IGxheWVyLCBmaWVsZHMgfSA9IGluZm9cclxuICAgICAgICBjb25zdCBvaWRzID0gc2VsZWN0ZWRbbGF5ZXIuaWRdXHJcbiAgICAgICAgaWYgKCFvaWRzPy5sZW5ndGgpIGNvbnRpbnVlXHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBvaWRzLm1hcChvaWQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXR0cnM6IGFueSA9IHsgW2xheWVyLm9iamVjdElkRmllbGRdOiBvaWQgfVxyXG4gICAgICAgICAgZWRpdHMuZm9yRWFjaChmYyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSBmaWVsZHMuZmluZCgoeDogYW55KSA9PiB4Lm5hbWUgPT09IGZjLmZpZWxkTmFtZSlcclxuICAgICAgICAgICAgbGV0IHY6IGFueSA9IHZhbHVlc1tmYy5pZF1cclxuICAgICAgICAgICAgaWYgKGYpIHtcclxuICAgICAgICAgICAgICBpZiAoWydzbWFsbC1pbnRlZ2VyJywnaW50ZWdlcicsJ2JpZy1pbnRlZ2VyJywnbG9uZyddLmluY2x1ZGVzKGYudHlwZSkpIHYgPSBwYXJzZUludCh2LCAxMClcclxuICAgICAgICAgICAgICBlbHNlIGlmIChbJ3NpbmdsZScsJ2RvdWJsZSddLmluY2x1ZGVzKGYudHlwZSkpICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBwYXJzZUZsb2F0KHYpXHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAoZi50eXBlID09PSAnZGF0ZScpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gdiA/IG5ldyBEYXRlKHYpLmdldFRpbWUoKSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRyc1tmYy5maWVsZE5hbWVdID0gdlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiB7IGF0dHJpYnV0ZXM6IGF0dHJzIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCByZXMgID0gYXdhaXQgbGF5ZXIuYXBwbHlFZGl0cyh7IHVwZGF0ZUZlYXR1cmVzOiB1cGRhdGVzIH0pXHJcbiAgICAgICAgY29uc3QgZXJycyA9IChyZXMudXBkYXRlRmVhdHVyZVJlc3VsdHMgfHwgW10pLmZpbHRlcigocjogYW55KSA9PiByLmVycm9yKVxyXG4gICAgICAgIGlmIChlcnJzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGAke2xheWVyLnRpdGxlfSA6ICR7ZXJyc1swXS5lcnJvcj8ubWVzc2FnZSB8fCAnZXJyZXVyJ31gKVxyXG4gICAgICAgIHRvdGFsICs9IHJlcy51cGRhdGVGZWF0dXJlUmVzdWx0cz8ubGVuZ3RoIHx8IDBcclxuICAgICAgfVxyXG4gICAgICBzZXRNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCB0ZXh0OiBgJHt0KCdzdWNjZXNzJyl9ICgke3RvdGFsfSBmZWF0dXJlKHMpKWAgfSlcclxuICAgICAgc2V0VmFsdWVzKHt9KVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgc2V0TWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGAke3QoJ2Vycm9yTXNnJyl9IDogJHtlLm1lc3NhZ2UgfHwgZX1gIH0pXHJcbiAgICB9IGZpbmFsbHkgeyBzZXRCdXN5KGZhbHNlKSB9XHJcbiAgfVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIEd1YXJkcyDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIGlmICghcHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEyIH19Pnt0KCdzZWxlY3RNYXAnKX08L2Rpdj5cclxuICB9XHJcbiAgaWYgKGZpZWxkQ29uZmlncy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTIgfX0+XHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19IG9uQWN0aXZlVmlld0NoYW5nZT17diA9PiB7IHNldEppbXVNYXBWaWV3KHYpOyBpZiAodikgc2NhbkxheWVycyh2KSB9fSAvPlxyXG4gICAgICAgIDxBbGVydCB0eXBlPVwid2FybmluZ1wiIHdpdGhJY29uIHRleHQ9XCJObyBmaWVsZHMgY29uZmlndXJlZC4gT3BlbiB0aGUgd2lkZ2V0IHNldHRpbmdzICjimpnvuI8pIHRvIGRlZmluZSB0aGUgbGF5ZXJzIGFuZCBmaWVsZHMgdG8gZWRpdC5cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vIMOi4oCd4oKsw6LigJ3igqwgUmVuZGVyIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e1Mucm9vdH0+XHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt2ID0+IHsgc2V0SmltdU1hcFZpZXcodik7IGlmICh2KSBzY2FuTGF5ZXJzKHYpIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Lyogw6LigJ3igqzDouKAneKCrCBPdXRpbCBkZSBzw4PCqWxlY3Rpb24gw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqwgKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e1MubWJ9PlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXtTLmxhYmVsfT57dCgnc2VsZWN0aW9uVG9vbCcpfTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMucm93LCBtYXJnaW5Cb3R0b206IDYgfX0+XHJcbiAgICAgICAgICA8U2VsZWN0IHNpemU9XCJzbVwiIHZhbHVlPXt0b29sfSBzdHlsZT17eyBmbGV4OiAxIH19IG9uQ2hhbmdlPXtlID0+IHNldFRvb2woKGUudGFyZ2V0IGFzIGFueSkudmFsdWUgYXMgU2VsZWN0aW9uVG9vbCl9PlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVjdGFuZ2xlXCI+e3QoJ3JlY3RhbmdsZScpfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicG9seWdvblwiPnt0KCdwb2x5Z29uJyl9PC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsYXNzb1wiPnt0KCdsYXNzbycpfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicG9pbnRcIj57dCgncG9pbnQnKX08L09wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAge2RyYXdpbmdcclxuICAgICAgICAgICAgPyA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJkYW5nZXJcIiAgb25DbGljaz17Y2FuY2VsRHJhd2luZ30+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDogPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3N0YXJ0RHJhd2luZ30gZGlzYWJsZWQ9eyFjYW5TZWxlY3R9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17c2NhblN0YXR1cyA9PT0gJ3NjYW5uaW5nJyA/ICdMb2FkaW5nIGxheWVycy4uLicgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICB7c2NhblN0YXR1cyA9PT0gJ3NjYW5uaW5nJyA/ICdMb2FkaW5nLi4uJyA6ICdTZWxlY3QnfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e1MuYmV0d2Vlbn0+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e3QoJ3NlbGVjdGVkRmVhdHVyZXMnLCB7IGNvdW50OiB0b3RhbFNlbGVjdGVkIH0pfTwvc3Bhbj5cclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInRlcnRpYXJ5XCIgb25DbGljaz17Y2xlYXJTZWxlY3Rpb259IGRpc2FibGVkPXshdG90YWxTZWxlY3RlZH0+e3QoJ2NsZWFyU2VsZWN0aW9uJyl9PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RvdGFsU2VsZWN0ZWQgPiAwICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e1MubXV0ZWR9PlxyXG4gICAgICAgICAgICB7dW5pcXVlRHNJZHMubWFwKGRzSWQgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBsYXllck1hcC5nZXQoZHNJZClcclxuICAgICAgICAgICAgICBpZiAoIWluZm8pIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgY29uc3QgY250ICA9IHNlbGVjdGVkW2luZm8ubGF5ZXIuaWRdPy5sZW5ndGggfHwgMFxyXG4gICAgICAgICAgICAgIHJldHVybiBjbnQgPyA8ZGl2IGtleT17ZHNJZH0+w6LigqzCoiB7aW5mby50aXRsZX0gOiB7Y250fTwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiDDouKAneKCrMOi4oCd4oKsIENoYW1wcyDDg8KgIG1vZGlmaWVyIChkw4PCqWZpbmlzIGRhbnMgbGVzIHBhcmFtw4PCqHRyZXMpIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqwgKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e1MubWJ9PlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXtTLmxhYmVsfT57dCgnZmllbGRzVG9FZGl0Jyl9PC9zcGFuPlxyXG4gICAgICAgIHt1bmlxdWVEc0lkcy5tYXAoZHNJZCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbmZvICAgPSBsYXllck1hcC5nZXQoZHNJZClcclxuICAgICAgICAgIGNvbnN0IHRpdGxlICA9IGluZm8/LnRpdGxlIHx8IGRzSWRcclxuICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IGZpZWxkQ29uZmlncy5maWx0ZXIoZmMgPT4gZmMudXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkID09PSBkc0lkKVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2RzSWR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAxMywgbWFyZ2luQm90dG9tOiA0IH19PlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgeyFpbmZvICYmIHNjYW5TdGF0dXMgPT09ICdkb25lJyAgICAgJiYgPHNwYW4gc3R5bGU9e1Mud2Fybn0+JiN4MjZBMDsgbGF5ZXIgbm90IGZvdW5kIGluIG1hcDwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICB7IWluZm8gJiYgc2NhblN0YXR1cyA9PT0gJ3NjYW5uaW5nJyAmJiA8c3BhbiBzdHlsZT17Uy53YXJufT4uLi4gbG9hZGluZzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoZmMgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZjLmlkfSBzdHlsZT17Uy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5TLm1iNCwgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiA1MDAgfX0+e2ZjLmxhYmVsIHx8IGZjLmZpZWxkTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlcklucHV0KGZjKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Lyogw6LigJ3igqzDouKAneKCrCBCb3V0b24gQXBwbGlxdWVyIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsICovfVxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBvbkNsaWNrPXthcHBseUFsbH0gZGlzYWJsZWQ9e2J1c3kgfHwgIXRvdGFsU2VsZWN0ZWR9PlxyXG4gICAgICAgIHtidXN5ID8gPExvYWRpbmcgdHlwZT1cIkRPTlVUXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSAvPiA6IHQoJ2FwcGx5RWRpdHMnKX1cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgPEFsZXJ0IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0gdHlwZT17bWVzc2FnZS50eXBlfSB0ZXh0PXttZXNzYWdlLnRleHR9XHJcbiAgICAgICAgICB3aXRoSWNvbiBjbG9zYWJsZSBvbkNsb3NlPXsoKSA9PiBzZXRNZXNzYWdlKG51bGwpfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==