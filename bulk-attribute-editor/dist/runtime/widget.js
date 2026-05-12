System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
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

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
__webpack_require__.p = window.jimuConfig.baseUrl;

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
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/bulk-attribute-editor/src/runtime/translations/default.ts");
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




const { useState, useEffect, useRef, useMemo, useCallback } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
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
        let msg = _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"][key];
        if (params)
            Object.keys(params).forEach(k => { msg = msg.replace(`{${k}}`, String(params[k])); });
        return msg;
    };
    // â”€â”€ Load ArcGIS modules once â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    useEffect(() => {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
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
        var _a, _b, _c, _d, _e;
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
            yield ((_c = (_b = (_a = jmv.view).when) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : Promise.resolve());
        }
        catch (_f) { }
        for (const fc of configs) {
            const dsId = (_d = fc.useDataSource) === null || _d === void 0 ? void 0 : _d.dataSourceId;
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
            catch (_g) { }
            // MÃ©thode 2 : DataSourceManager â†’ ds.layer
            if (!layer) {
                try {
                    const ds = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(dsId);
                    layer = (ds === null || ds === void 0 ? void 0 : ds.layer) || ((_e = ds === null || ds === void 0 ? void 0 : ds.getLayer) === null || _e === void 0 ? void 0 : _e.call(ds));
                }
                catch (_h) { }
            }
            if (!layer)
                continue;
            if (!layer.loaded) {
                try {
                    yield layer.load();
                }
                catch (_j) { }
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
                    catch (_a) { }
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
            return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: val, placeholder: "field not available", disabled: true, onChange: e => set(e.target.value) });
        const dom = field.domain;
        if ((dom === null || dom === void 0 ? void 0 : dom.type) === 'coded-value') {
            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { size: "sm", value: val, onChange: e => set(e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "", children: "-- Choose --" }), dom.codedValues.map((cv) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: String(cv.code), children: cv.name }, String(cv.code))))] }));
        }
        const numeric = ['small-integer', 'integer', 'big-integer', 'single', 'double', 'long'].includes(field.type);
        if (numeric) {
            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { size: "sm", value: val === '' ? undefined : Number(val), min: (dom === null || dom === void 0 ? void 0 : dom.type) === 'range' ? dom.minValue : undefined, max: (dom === null || dom === void 0 ? void 0 : dom.type) === 'range' ? dom.maxValue : undefined, onChange: v => set(v !== null && v !== void 0 ? v : '') }));
        }
        if (field.type === 'date') {
            return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", type: "datetime-local", value: val, onChange: e => set(e.target.value) });
        }
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: val, placeholder: "New value", onChange: e => set(e.target.value) });
    };
    // â”€â”€ Apply edits â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const applyAll = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
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
                const dsId = (_a = fc.useDataSource) === null || _a === void 0 ? void 0 : _a.dataSourceId;
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
                    throw new Error(`${layer.title} : ${((_b = errs[0].error) === null || _b === void 0 ? void 0 : _b.message) || 'erreur'}`);
                total += ((_c = res.updateFeatureResults) === null || _c === void 0 ? void 0 : _c.length) || 0;
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
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 12 }, children: t('selectMap') });
    }
    if (fieldConfigs.length === 0) {
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: 12 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: v => { setJimuMapView(v); if (v)
                        scanLayers(v); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { type: "warning", withIcon: true, text: "No fields configured. Open the widget settings (\u2699\uFE0F) to define the layers and fields to edit." })] }));
    }
    // â”€â”€ Render â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.root, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: v => { setJimuMapView(v); if (v)
                    scanLayers(v); } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.mb, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.label, children: t('selectionTool') }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, S.row), { marginBottom: 6 }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { size: "sm", value: tool, style: { flex: 1 }, onChange: e => setTool(e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "rectangle", children: t('rectangle') }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "polygon", children: t('polygon') }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "lasso", children: t('lasso') }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "point", children: t('point') })] }), drawing
                                ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: "sm", type: "danger", onClick: cancelDrawing, children: "Cancel" })
                                : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: "sm", type: "primary", onClick: startDrawing, disabled: !canSelect, title: scanStatus === 'scanning' ? 'Loading layers...' : '', children: scanStatus === 'scanning' ? 'Loading...' : 'Select' })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.between, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 12 }, children: t('selectedFeatures', { count: totalSelected }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: "sm", type: "tertiary", onClick: clearSelection, disabled: !totalSelected, children: t('clearSelection') })] }), totalSelected > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.muted, children: uniqueDsIds.map(dsId => {
                            var _a;
                            const info = layerMap.get(dsId);
                            if (!info)
                                return null;
                            const cnt = ((_a = selected[info.layer.id]) === null || _a === void 0 ? void 0 : _a.length) || 0;
                            return cnt ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["\u00E2\u20AC\u00A2 ", info.title, " : ", cnt] }, dsId) : null;
                        }) }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.mb, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.label, children: t('fieldsToEdit') }), uniqueDsIds.map(dsId => {
                        const info = layerMap.get(dsId);
                        const title = (info === null || info === void 0 ? void 0 : info.title) || dsId;
                        const fields = fieldConfigs.filter(fc => { var _a; return ((_a = fc.useDataSource) === null || _a === void 0 ? void 0 : _a.dataSourceId) === dsId; });
                        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 10 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { fontWeight: 500, fontSize: 13, marginBottom: 4 }, children: [title, !info && scanStatus === 'done' && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.warn, children: "\u26A0 layer not found in map" }), !info && scanStatus === 'scanning' && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.warn, children: "... loading" })] }), fields.map(fc => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.card, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, S.mb4), { fontSize: 12, fontWeight: 500 }), children: fc.label || fc.fieldName }), renderInput(fc)] }, fc.id)))] }, dsId));
                    })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: "primary", style: { width: '100%' }, onClick: applyAll, disabled: busy || !totalSelected, children: busy ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Loading, { type: "DONUT", width: 16, height: 16 }) : t('applyEdits') }), message && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { style: { marginTop: 10 }, type: message.type, text: message.text, withIcon: true, closable: true, onClose: () => setMessage(null) }))] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9idWxrLWF0dHJpYnV0ZS1lZGl0b3IvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsdUJBQXVCO0lBQ3JDLFNBQVMsRUFBRSxxQ0FBcUM7SUFDaEQsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87SUFDZCxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGdCQUFnQixFQUFFLDZCQUE2QjtJQUMvQyxZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLEtBQUssRUFBRSxPQUFPO0lBQ2QsUUFBUSxFQUFFLFdBQVc7SUFDckIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsUUFBUSxFQUFFLGFBQWE7SUFDdkIsT0FBTyxFQUFFLDRCQUE0QjtJQUNyQyxRQUFRLEVBQUUsb0JBQW9CO0lBQzlCLFFBQVEsRUFBRSw2QkFBNkI7SUFDdkMsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxrQkFBa0IsRUFBRSxnQ0FBZ0M7SUFDcEQsTUFBTSxFQUFFLFFBQVE7SUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQyxnQkFBZ0IsRUFBRSxxQ0FBcUM7SUFDdkQsWUFBWSxFQUFFLHdDQUF3QztJQUN0RCxPQUFPLEVBQUUsVUFBVTtDQUNwQjs7Ozs7Ozs7Ozs7O0FDM0JELHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtV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QUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxZQUNqRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdFQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUNsRSxFQUVSLE9BQU8sSUFBSSxDQUNWLGdFQUFDLDBDQUFLLElBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUNyRSxRQUFRLFFBQUMsUUFBUSxRQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FDeEQsSUFDRyxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9idWxrLWF0dHJpYnV0ZS1lZGl0b3Ivc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYnVsay1hdHRyaWJ1dGUtZWRpdG9yL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogJ0J1bGsgYXR0cmlidXRlIGVkaXRvcicsXHJcbiAgc2VsZWN0TWFwOiAnU2VsZWN0IGEgbWFwIHdpZGdldCBpbiB0aGUgc2V0dGluZ3MnLFxyXG4gIHNlbGVjdExheWVyczogJ0xheWVycyB0byBlZGl0JyxcclxuICBzZWxlY3Rpb25Ub29sOiAnU2VsZWN0aW9uIHRvb2wnLFxyXG4gIHJlY3RhbmdsZTogJ1JlY3RhbmdsZScsXHJcbiAgcG9seWdvbjogJ1BvbHlnb24nLFxyXG4gIGxhc3NvOiAnTGFzc28nLFxyXG4gIHBvaW50OiAnUG9pbnQnLFxyXG4gIGNsZWFyU2VsZWN0aW9uOiAnQ2xlYXIgc2VsZWN0aW9uJyxcclxuICBzZWxlY3RlZEZlYXR1cmVzOiAne2NvdW50fSBmZWF0dXJlKHMpIHNlbGVjdGVkJyxcclxuICBmaWVsZHNUb0VkaXQ6ICdGaWVsZHMgdG8gZWRpdCcsXHJcbiAgYWRkRmllbGQ6ICdBZGQgYSBmaWVsZCcsXHJcbiAgZmllbGQ6ICdGaWVsZCcsXHJcbiAgbmV3VmFsdWU6ICdOZXcgdmFsdWUnLFxyXG4gIGFwcGx5RWRpdHM6ICdBcHBseSBjaGFuZ2VzJyxcclxuICBhcHBseWluZzogJ0FwcGx5aW5nLi4uJyxcclxuICBzdWNjZXNzOiAnQ2hhbmdlcyBzYXZlZCBzdWNjZXNzZnVsbHknLFxyXG4gIGVycm9yTXNnOiAnRXJyb3Igd2hpbGUgc2F2aW5nJyxcclxuICBub0xheWVyczogJ05vIGVkaXRhYmxlIGxheWVyIGF2YWlsYWJsZScsXHJcbiAgbm9GZWF0dXJlczogJ05vIGZlYXR1cmUgc2VsZWN0ZWQnLFxyXG4gIGFkZEF0TGVhc3RPbmVGaWVsZDogJ0FkZCBhdCBsZWFzdCBvbmUgZmllbGQgdG8gZWRpdCcsXHJcbiAgcmVtb3ZlOiAnUmVtb3ZlJyxcclxuICBzZWxlY3RGaWVsZDogJy0tIENob29zZSBhIGZpZWxkIC0tJyxcclxuICBrZWVwQ3VycmVudFZhbHVlOiAnKGxlYXZlIGVtcHR5IHRvIGtlZXAgY3VycmVudCB2YWx1ZSknLFxyXG4gIGNvbmZpcm1BcHBseTogJ0NvbmZpcm0gY2hhbmdlcyBvbiB7Y291bnR9IGZlYXR1cmUocyk/JyxcclxuICBieUxheWVyOiAnQnkgbGF5ZXInXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gV2lkZ2V0IDogw4PigLBkaXRpb24gZCdhdHRyaWJ1dHMgZW4gbG90XHJcbi8vIExlcyBjaGFtcHMgw4PCoCBtb2RpZmllciBzb250IGTDg8KpZmluaXMgZGFucyBsZXMgUEFSQU3Dg8uGVFJFUyBwYXIgbCdhZG1pbmlzdHJhdGV1cixcclxuLy8gdmlhIGxlcyBzw4PCqWxlY3RldXJzIEV4QiAoRGF0YVNvdXJjZVNlbGVjdG9yICsgRmllbGRTZWxlY3RvcikuXHJcbi8vIEwndXRpbGlzYXRldXIgc8ODwqlsZWN0aW9ubmUgZGVzIGVudGl0w4PCqXMgc3VyIGxhIGNhcnRlLCBzYWlzaXQgbGVzIHZhbGV1cnNcclxuLy8gZXQgYXBwbGlxdWUgbGVzIG1vZGlmaWNhdGlvbnMuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCB7IEFsbFdpZGdldFByb3BzLCBqc3gsIFJlYWN0LCBEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3LCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0LCBPcHRpb24sIEFsZXJ0LCBMb2FkaW5nLCBUZXh0SW5wdXQsIE51bWVyaWNJbnB1dCB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZywgdHlwZSBGaWVsZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9ID0gUmVhY3RcclxuXHJcbi8vIMOi4oCd4oKsw6LigJ3igqwgVHlwZXMgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG5cclxuaW50ZXJmYWNlIExheWVySW5mbyAgIHsgbGF5ZXI6IGFueTsgZmllbGRzOiBhbnlbXTsgdGl0bGU6IHN0cmluZyB9XHJcbmludGVyZmFjZSBWYWx1ZU1hcCAgICB7IFtmaWVsZENvbmZpZ0lkOiBzdHJpbmddOiBhbnkgfVxyXG5pbnRlcmZhY2UgU2VsZWN0ZWRTZXQgeyBbbGF5ZXJJZDogc3RyaW5nXTogbnVtYmVyW10gfVxyXG50eXBlIFNlbGVjdGlvblRvb2wgPSAncmVjdGFuZ2xlJyB8ICdwb2x5Z29uJyB8ICdsYXNzbycgfCAncG9pbnQnXHJcblxyXG4vLyDDouKAneKCrMOi4oCd4oKsIFN0eWxlcyDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG5cclxuY29uc3QgUzogUmVjb3JkPHN0cmluZywgUmVhY3QuQ1NTUHJvcGVydGllcz4gPSB7XHJcbiAgcm9vdDogICAgeyBvdmVyZmxvdzogJ2F1dG8nLCBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogMTIsIGZvbnRTaXplOiAxNCwgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSxcclxuICBsYWJlbDogICB7IGZvbnRXZWlnaHQ6IDYwMCwgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiA0LCBtYXJnaW5Ub3A6IDggfSxcclxuICByb3c6ICAgICB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA2LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxyXG4gIGJldHdlZW46IHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxyXG4gIG11dGVkOiAgIHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyM4ODgnLCBtYXJnaW5Ub3A6IDQgfSxcclxuICBtYjogICAgICB7IG1hcmdpbkJvdHRvbTogMTAgfSxcclxuICBtYjQ6ICAgICB7IG1hcmdpbkJvdHRvbTogNCB9LFxyXG4gIGNhcmQ6ICAgIHsgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBib3JkZXJSYWRpdXM6IDQsIHBhZGRpbmc6IDgsIG1hcmdpbkJvdHRvbTogNiB9LFxyXG4gIHdhcm46ICAgIHsgZm9udFNpemU6IDExLCBjb2xvcjogJyNmOTAnLCBtYXJnaW5MZWZ0OiA0IH1cclxufVxyXG5cclxuLy8gw6LigJ3igqzDouKAneKCrCBXaWRnZXQgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgLy8gZmllbGRDb25maWdzIGTDg8KpZmluaXMgZGFucyBsZXMgcGFyYW3Dg8KodHJlcyBwYXIgbCdhZG1pblxyXG4gIGNvbnN0IGZpZWxkQ29uZmlnczogRmllbGRDb25maWdbXSA9IChwcm9wcy5jb25maWc/LmZpZWxkQ29uZmlncyBhcyBhbnkpIHx8IFtdXHJcblxyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddICAgPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4obnVsbClcclxuICBjb25zdCBbbGF5ZXJNYXAsIHNldExheWVyTWFwXSAgICAgICAgID0gdXNlU3RhdGU8TWFwPHN0cmluZywgTGF5ZXJJbmZvPj4obmV3IE1hcCgpKVxyXG4gIGNvbnN0IFt0b29sLCBzZXRUb29sXSAgICAgICAgICAgICAgICAgPSB1c2VTdGF0ZTxTZWxlY3Rpb25Ub29sPigncmVjdGFuZ2xlJylcclxuICBjb25zdCBbZHJhd2luZywgc2V0RHJhd2luZ10gICAgICAgICAgID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gICAgICAgICA9IHVzZVN0YXRlPFNlbGVjdGVkU2V0Pih7fSlcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdICAgICAgICAgICAgID0gdXNlU3RhdGU8VmFsdWVNYXA+KHt9KVxyXG4gIGNvbnN0IFtidXN5LCBzZXRCdXN5XSAgICAgICAgICAgICAgICAgPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbW9kdWxlc1JlYWR5LCBzZXRNb2R1bGVzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NjYW5TdGF0dXMsIHNldFNjYW5TdGF0dXNdICAgICA9IHVzZVN0YXRlPCdpZGxlJyB8ICdzY2FubmluZycgfCAnZG9uZSc+KCdpZGxlJylcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gICAgICAgICAgID0gdXNlU3RhdGU8eyB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InOyB0ZXh0OiBzdHJpbmcgfSB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnN0IGptdlJlZiAgICAgICAgICA9IHVzZVJlZjxKaW11TWFwVmlldz4obnVsbClcclxuICBjb25zdCBsYXllck1hcFJlZiAgICAgPSB1c2VSZWY8TWFwPHN0cmluZywgTGF5ZXJJbmZvPj4obmV3IE1hcCgpKVxyXG4gIGNvbnN0IGZpZWxkQ29uZmlnc1JlZiA9IHVzZVJlZjxGaWVsZENvbmZpZ1tdPihbXSlcclxuICBjb25zdCBza2V0Y2hWTVJlZiAgICAgPSB1c2VSZWY8YW55PihudWxsKVxyXG4gIGNvbnN0IGdyYXBoaWNzTHlyUmVmICA9IHVzZVJlZjxhbnk+KG51bGwpXHJcbiAgY29uc3QgaGlnaGxpZ2h0cyAgICAgID0gdXNlUmVmPEFycmF5PHsgcmVtb3ZlOiAoKSA9PiB2b2lkIH0+PihbXSlcclxuICBjb25zdCBtb2R1bGVzUmVmICAgICAgPSB1c2VSZWY8YW55PihudWxsKVxyXG4gIGNvbnN0IHNjYW5UaW1lcnMgICAgICA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PltdPihbXSlcclxuICBjb25zdCByZWFjdEhhbmRsZSAgICAgPSB1c2VSZWY8eyByZW1vdmU6ICgpID0+IHZvaWQgfT4obnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgam12UmVmLmN1cnJlbnQgPSBqaW11TWFwVmlldyB9LCAgICAgICAgICAgW2ppbXVNYXBWaWV3XSlcclxuICB1c2VFZmZlY3QoKCkgPT4geyBsYXllck1hcFJlZi5jdXJyZW50ID0gbGF5ZXJNYXAgfSwgICAgICAgICBbbGF5ZXJNYXBdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IGZpZWxkQ29uZmlnc1JlZi5jdXJyZW50ID0gZmllbGRDb25maWdzIH0sIFtmaWVsZENvbmZpZ3NdKVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIFRyYW5zbGF0aW9uIGhlbHBlciDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuICBjb25zdCB0ID0gKGtleToga2V5b2YgdHlwZW9mIGRlZmF1bHRNZXNzYWdlcywgcGFyYW1zPzogUmVjb3JkPHN0cmluZywgYW55PikgPT4ge1xyXG4gICAgbGV0IG1zZyA9IGRlZmF1bHRNZXNzYWdlc1trZXldIGFzIHN0cmluZ1xyXG4gICAgaWYgKHBhcmFtcykgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsgPT4geyBtc2cgPSBtc2cucmVwbGFjZShgeyR7a319YCwgU3RyaW5nKHBhcmFtc1trXSkpIH0pXHJcbiAgICByZXR1cm4gbXNnXHJcbiAgfVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIExvYWQgQXJjR0lTIG1vZHVsZXMgb25jZSDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJyxcclxuICAgICAgJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gvU2tldGNoVmlld01vZGVsJyxcclxuICAgICAgJ2VzcmkvY29yZS9yZWFjdGl2ZVV0aWxzJ1xyXG4gICAgXSkudGhlbigoW0dyYXBoaWNzTGF5ZXIsIFNrZXRjaFZpZXdNb2RlbCwgcmVhY3RpdmVVdGlsc10pID0+IHtcclxuICAgICAgbW9kdWxlc1JlZi5jdXJyZW50ID0geyBHcmFwaGljc0xheWVyLCBTa2V0Y2hWaWV3TW9kZWwsIHJlYWN0aXZlVXRpbHMgfVxyXG4gICAgICBzZXRNb2R1bGVzUmVhZHkodHJ1ZSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIMOi4oCd4oKsw6LigJ3igqwgU2NhbiBsYXllcnMgZnJvbSBjb25maWd1cmVkIGRhdGEgc291cmNlcyDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIC8vIE1hcCBrZXllZCBieSBkYXRhU291cmNlSWQgw6LigKDigJkgTGF5ZXJJbmZvXHJcbiAgY29uc3Qgc2NhbkxheWVycyA9IHVzZUNhbGxiYWNrKGFzeW5jIChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBpZiAoIWptdikgcmV0dXJuXHJcbiAgICBjb25zdCBjb25maWdzID0gZmllbGRDb25maWdzUmVmLmN1cnJlbnRcclxuICAgIGlmIChjb25maWdzLmxlbmd0aCA9PT0gMCkgeyBzZXRTY2FuU3RhdHVzKCdkb25lJyk7IHJldHVybiB9XHJcblxyXG4gICAgc2V0U2NhblN0YXR1cygnc2Nhbm5pbmcnKVxyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcDxzdHJpbmcsIExheWVySW5mbz4oKVxyXG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXHJcblxyXG4gICAgLy8gV2FpdCBmb3IgdmlldyByZWFkeVxyXG4gICAgdHJ5IHsgYXdhaXQgKChqbXYudmlldyBhcyBhbnkpLndoZW4/LigpID8/IFByb21pc2UucmVzb2x2ZSgpKSB9IGNhdGNoIHt9XHJcblxyXG4gICAgZm9yIChjb25zdCBmYyBvZiBjb25maWdzKSB7XHJcbiAgICAgIGNvbnN0IGRzSWQgPSBmYy51c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgaWYgKCFkc0lkIHx8IHNlZW4uaGFzKGRzSWQpKSBjb250aW51ZVxyXG4gICAgICBzZWVuLmFkZChkc0lkKVxyXG5cclxuICAgICAgbGV0IGxheWVyOiBhbnkgPSBudWxsXHJcblxyXG4gICAgICAvLyBNw4PCqXRob2RlIDEgOiBKaW11TGF5ZXJWaWV3IChsZSBwbHVzIGRpcmVjdCBkYW5zIEV4QilcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqbHZEaWN0ID0gKGptdiBhcyBhbnkpLmppbXVMYXllclZpZXdzIHx8IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBqbHYgb2YgT2JqZWN0LnZhbHVlcyhqbHZEaWN0KSBhcyBhbnlbXSkge1xyXG4gICAgICAgICAgaWYgKGpsdj8ubGF5ZXJEYXRhU291cmNlSWQgPT09IGRzSWQgfHwgamx2Py5kYXRhU291cmNlSWQgPT09IGRzSWQpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSBqbHYubGF5ZXJcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICAgIC8vIE3Dg8KpdGhvZGUgMiA6IERhdGFTb3VyY2VNYW5hZ2VyIMOi4oCg4oCZIGRzLmxheWVyXHJcbiAgICAgIGlmICghbGF5ZXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgZHM6IGFueSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKVxyXG4gICAgICAgICAgbGF5ZXIgPSBkcz8ubGF5ZXIgfHwgZHM/LmdldExheWVyPy4oKVxyXG4gICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFsYXllcikgY29udGludWVcclxuICAgICAgaWYgKCFsYXllci5sb2FkZWQpIHsgdHJ5IHsgYXdhaXQgbGF5ZXIubG9hZCgpIH0gY2F0Y2gge30gfVxyXG4gICAgICBpZiAoIWxheWVyLmxvYWRlZCkgY29udGludWVcclxuXHJcbiAgICAgIHJlc3VsdC5zZXQoZHNJZCwgeyBsYXllciwgZmllbGRzOiBsYXllci5maWVsZHMgfHwgW10sIHRpdGxlOiBsYXllci50aXRsZSB8fCBkc0lkIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGF5ZXJNYXAocmVzdWx0KVxyXG4gICAgc2V0U2NhblN0YXR1cygnZG9uZScpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIMOi4oCd4oKsw6LigJ3igqwgQ2xlYXIgaGlnaGxpZ2h0cyDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgY29uc3QgY2xlYXJIaWdobGlnaHRzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaGlnaGxpZ2h0cy5jdXJyZW50LmZvckVhY2goaCA9PiB7IHRyeSB7IGgucmVtb3ZlKCkgfSBjYXRjaCB7fSB9KVxyXG4gICAgaGlnaGxpZ2h0cy5jdXJyZW50ID0gW11cclxuICB9LCBbXSlcclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBTcGF0aWFsIHNlbGVjdGlvbiDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIGNvbnN0IHJ1blNlbGVjdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChnZW9tZXRyeTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBqbXYgPSBqbXZSZWYuY3VycmVudFxyXG4gICAgaWYgKCFqbXYpIHJldHVyblxyXG4gICAgY2xlYXJIaWdobGlnaHRzKClcclxuICAgIGNvbnN0IG5ld1NlbDogU2VsZWN0ZWRTZXQgPSB7fVxyXG4gICAgZm9yIChjb25zdCBbLCBpbmZvXSBvZiBsYXllck1hcFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gaW5mby5sYXllclxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHEgPSBsYXllci5jcmVhdGVRdWVyeSgpXHJcbiAgICAgICAgcS5nZW9tZXRyeSAgICAgICAgICAgID0gZ2VvbWV0cnlcclxuICAgICAgICBxLnNwYXRpYWxSZWxhdGlvbnNoaXAgPSAnaW50ZXJzZWN0cydcclxuICAgICAgICBxLnJldHVybkdlb21ldHJ5ICAgICAgPSBmYWxzZVxyXG4gICAgICAgIHEub3V0RmllbGRzICAgICAgICAgICA9IFtsYXllci5vYmplY3RJZEZpZWxkXVxyXG4gICAgICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHEpXHJcbiAgICAgICAgY29uc3Qgb2lkcyA9IHJlcy5mZWF0dXJlcy5tYXAoKGY6IGFueSkgPT4gZi5hdHRyaWJ1dGVzW2xheWVyLm9iamVjdElkRmllbGRdKVxyXG4gICAgICAgIGlmIChvaWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgbmV3U2VsW2xheWVyLmlkXSA9IG9pZHNcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGx2ID0gYXdhaXQgKGptdi52aWV3IGFzIGFueSkud2hlbkxheWVyVmlldyhsYXllcilcclxuICAgICAgICAgICAgaGlnaGxpZ2h0cy5jdXJyZW50LnB1c2gobHYuaGlnaGxpZ2h0KG9pZHMpKVxyXG4gICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmVycm9yKCdTZWxlY3Rpb24gZXJyb3InLCBsYXllci50aXRsZSwgZSkgfVxyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWQobmV3U2VsKVxyXG4gIH0sIFtjbGVhckhpZ2hsaWdodHNdKVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIEluaXQgU2tldGNoVmlld01vZGVsIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcgfHwgIW1vZHVsZXNSZWFkeSkgcmV0dXJuXHJcbiAgICBjb25zdCB7IEdyYXBoaWNzTGF5ZXIsIFNrZXRjaFZpZXdNb2RlbCwgcmVhY3RpdmVVdGlscyB9ID0gbW9kdWxlc1JlZi5jdXJyZW50XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldyBhcyBhbnlcclxuICAgIGxldCBnbDogYW55LCBzdm06IGFueSwgc2tldGNoSGFuZGxlOiBhbnlcclxuXHJcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkgeyBhd2FpdCB2aWV3LndoZW4oKSB9IGNhdGNoIHt9XHJcbiAgICAgIGdsID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pXHJcbiAgICAgIHZpZXcubWFwLmFkZChnbClcclxuICAgICAgZ3JhcGhpY3NMeXJSZWYuY3VycmVudCA9IGdsXHJcblxyXG4gICAgICBzdm0gPSBuZXcgU2tldGNoVmlld01vZGVsKHtcclxuICAgICAgICB2aWV3LFxyXG4gICAgICAgIGxheWVyOiBnbCxcclxuICAgICAgICBkZWZhdWx0Q3JlYXRlT3B0aW9uczogeyBoYXNaOiBmYWxzZSB9IGFzIGFueSxcclxuICAgICAgICBwb2x5Z29uU3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtZmlsbCcsIGNvbG9yOiBbMCwgMTIwLCAyMTIsIDAuMTVdLCBvdXRsaW5lOiB7IGNvbG9yOiBbMCwgMTIwLCAyMTIsIDFdLCB3aWR0aDogMiB9IH0gYXMgYW55LFxyXG4gICAgICAgIHBvaW50U3ltYm9sOiAgIHsgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBjb2xvcjogWzAsIDEyMCwgMjEyLCAwLjVdLCBvdXRsaW5lOiB7IGNvbG9yOiBbMCwgMTIwLCAyMTIsIDFdLCB3aWR0aDogMiB9LCBzaXplOiAxMCB9IGFzIGFueVxyXG4gICAgICB9KVxyXG4gICAgICBza2V0Y2hWTVJlZi5jdXJyZW50ID0gc3ZtXHJcblxyXG4gICAgICBza2V0Y2hIYW5kbGUgPSBzdm0ub24oJ2NyZWF0ZScsIChldnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tidWxrLWF0dHJdIHNrZXRjaCBldmVudCcsIGV2dC5zdGF0ZSwgZXZ0LnRvb2wpXHJcbiAgICAgICAgaWYgKGV2dC5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgcnVuU2VsZWN0aW9uKGV2dC5ncmFwaGljLmdlb21ldHJ5KVxyXG4gICAgICAgICAgc2V0RHJhd2luZyhmYWxzZSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0cnkgeyBnbC5yZW1vdmVBbGwoKSB9IGNhdGNoIHt9IH0sIDYwMClcclxuICAgICAgICAgIC8vIFLDg8KpYWN0aXZlIGxlIHBvcHVwIGFwcsODwqhzIGxhIHPDg8KpbGVjdGlvblxyXG4gICAgICAgICAgdHJ5IHsgaWYgKHZpZXcucG9wdXApIHZpZXcucG9wdXAuYXV0b09wZW5FbmFibGVkID0gdHJ1ZSB9IGNhdGNoIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldnQuc3RhdGUgPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgICBzZXREcmF3aW5nKGZhbHNlKVxyXG4gICAgICAgICAgdHJ5IHsgaWYgKHZpZXcucG9wdXApIHZpZXcucG9wdXAuYXV0b09wZW5FbmFibGVkID0gdHJ1ZSB9IGNhdGNoIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgYXdhaXQgc2NhbkxheWVycyhqaW11TWFwVmlldylcclxuXHJcbiAgICAgIC8vIFJlLXNjYW4gc2kgZGVzIGNvdWNoZXMgc29udCBham91dMODwqllcy9yZXRpcsODwqllc1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlYWN0SGFuZGxlLmN1cnJlbnQgPSByZWFjdGl2ZVV0aWxzLm9uKFxyXG4gICAgICAgICAgKCkgPT4gdmlldy5tYXAuYWxsTGF5ZXJzLCAnY2hhbmdlJyxcclxuICAgICAgICAgICgpID0+IHNjYW5MYXllcnMoamltdU1hcFZpZXcpXHJcbiAgICAgICAgKVxyXG4gICAgICB9IGNhdGNoIHt9XHJcblxyXG4gICAgICAvLyBSZXRyaWVzIGRpZmbDg8KpcsODwqlzIHBvdXIgbGVzIGNvdWNoZXMgbGVudGVzIMODwqAgY2hhcmdlclxyXG4gICAgICBzY2FuVGltZXJzLmN1cnJlbnQgPSBbXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGlmIChqbXZSZWYuY3VycmVudCkgc2NhbkxheWVycyhqbXZSZWYuY3VycmVudCkgfSwgMjAwMCksXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGlmIChqbXZSZWYuY3VycmVudCkgc2NhbkxheWVycyhqbXZSZWYuY3VycmVudCkgfSwgNTAwMClcclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChza2V0Y2hIYW5kbGUpICAgICAgICB0cnkgeyBza2V0Y2hIYW5kbGUucmVtb3ZlKCkgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgaWYgKHJlYWN0SGFuZGxlLmN1cnJlbnQpIHRyeSB7IHJlYWN0SGFuZGxlLmN1cnJlbnQucmVtb3ZlKCkgfSBjYXRjaCB7fVxyXG4gICAgICBzY2FuVGltZXJzLmN1cnJlbnQuZm9yRWFjaChjbGVhclRpbWVvdXQpXHJcbiAgICAgIGlmIChzdm0pIHRyeSB7IHN2bS5kZXN0cm95KCkgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICBpZiAoZ2wpICB0cnkgeyB2aWV3Lm1hcC5yZW1vdmUoZ2wpIH0gY2F0Y2gge31cclxuICAgICAgY2xlYXJIaWdobGlnaHRzKClcclxuICAgIH1cclxuICB9LCBbamltdU1hcFZpZXcsIG1vZHVsZXNSZWFkeSwgcnVuU2VsZWN0aW9uLCBzY2FuTGF5ZXJzLCBjbGVhckhpZ2hsaWdodHNdKVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIERyYXdpbmcgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgY29uc3Qgc3RhcnREcmF3aW5nID0gKCkgPT4ge1xyXG4gICAgaWYgKCFza2V0Y2hWTVJlZi5jdXJyZW50KSB7IGNvbnNvbGUud2FybignW2J1bGstYXR0cl0gU2tldGNoVmlld01vZGVsIG5vdCByZWFkeScpOyByZXR1cm4gfVxyXG4gICAgY29uc3Qgam12ID0gam12UmVmLmN1cnJlbnRcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgdHJ5IHsgKGptdi52aWV3IGFzIGFueSkucG9wdXAuYXV0b09wZW5FbmFibGVkID0gZmFsc2UgfSBjYXRjaCB7fVxyXG4gICAgICB0cnkgeyAoam12LnZpZXcgYXMgYW55KS5wb3B1cD8uY2xvc2U/LigpIH0gY2F0Y2gge31cclxuICAgIH1cclxuICAgIHNldERyYXdpbmcodHJ1ZSk7IHNldE1lc3NhZ2UobnVsbClcclxuICAgIGNvbnNvbGUuZGVidWcoJ1tidWxrLWF0dHJdIHN0YXJ0RHJhd2luZyB0b29sPScsIHRvb2wsICdsYXllcnM9JywgbGF5ZXJNYXBSZWYuY3VycmVudC5zaXplKVxyXG4gICAgaWYgKHRvb2wgPT09ICdsYXNzbycpIHNrZXRjaFZNUmVmLmN1cnJlbnQuY3JlYXRlKCdwb2x5Z29uJywgeyBtb2RlOiAnZnJlZWhhbmQnIH0pXHJcbiAgICBlbHNlICAgICAgICAgICAgICAgICAgc2tldGNoVk1SZWYuY3VycmVudC5jcmVhdGUodG9vbClcclxuICB9XHJcbiAgY29uc3QgY2FuY2VsRHJhd2luZyA9ICgpID0+IHtcclxuICAgIHRyeSB7IHNrZXRjaFZNUmVmLmN1cnJlbnQ/LmNhbmNlbCgpIH0gY2F0Y2gge31cclxuICAgIHNldERyYXdpbmcoZmFsc2UpXHJcbiAgICB0cnkgeyAoam12UmVmLmN1cnJlbnQ/LnZpZXcgYXMgYW55KS5wb3B1cC5hdXRvT3BlbkVuYWJsZWQgPSB0cnVlIH0gY2F0Y2gge31cclxuICB9XHJcbiAgY29uc3QgY2xlYXJTZWxlY3Rpb24gPSAoKSA9PiB7IGNsZWFySGlnaGxpZ2h0cygpOyBzZXRTZWxlY3RlZCh7fSk7IHNldE1lc3NhZ2UobnVsbCkgfVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIERlcml2ZWQgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgY29uc3QgdG90YWxTZWxlY3RlZCA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBPYmplY3QudmFsdWVzKHNlbGVjdGVkKS5yZWR1Y2UoKHMsIGEpID0+IHMgKyBhLmxlbmd0aCwgMCksIFtzZWxlY3RlZF0pXHJcbiAgY29uc3QgY2FuU2VsZWN0ID0gbGF5ZXJNYXAuc2l6ZSA+IDAgJiYgbW9kdWxlc1JlYWR5XHJcbiAgLy8gTGlzdGUgdW5pcXVlIGRlcyBkYXRhU291cmNlSWRzIGNvbmZpZ3Vyw4PCqXMsIGRhbnMgbCdvcmRyZSBkJ2FwcGFyaXRpb25cclxuICBjb25zdCB1bmlxdWVEc0lkcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpOyBjb25zdCBvdXQ6IHN0cmluZ1tdID0gW11cclxuICAgIGZpZWxkQ29uZmlncy5mb3JFYWNoKGZjID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBmYy51c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgaWYgKGlkICYmICFzZWVuLmhhcyhpZCkpIHsgc2Vlbi5hZGQoaWQpOyBvdXQucHVzaChpZCkgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBvdXRcclxuICB9LCBbZmllbGRDb25maWdzXSlcclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBJbnB1dCByZW5kZXJlciDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsXHJcbiAgY29uc3QgcmVuZGVySW5wdXQgPSAoZmM6IEZpZWxkQ29uZmlnKSA9PiB7XHJcbiAgICBjb25zdCBpbmZvICA9IGxheWVyTWFwLmdldChmYy51c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWQpXHJcbiAgICBjb25zdCBmaWVsZCA9IGluZm8/LmZpZWxkcy5maW5kKChmOiBhbnkpID0+IGYubmFtZSA9PT0gZmMuZmllbGROYW1lKVxyXG4gICAgY29uc3QgdmFsICAgPSB2YWx1ZXNbZmMuaWRdID8/ICcnXHJcbiAgICBjb25zdCBzZXQgICA9ICh2OiBhbnkpID0+IHNldFZhbHVlcyhwID0+ICh7IC4uLnAsIFtmYy5pZF06IHYgfSkpXHJcblxyXG4gICAgaWYgKCFmaWVsZCkgcmV0dXJuIDxUZXh0SW5wdXQgc2l6ZT1cInNtXCIgdmFsdWU9e3ZhbH0gcGxhY2Vob2xkZXI9XCJmaWVsZCBub3QgYXZhaWxhYmxlXCIgZGlzYWJsZWQgb25DaGFuZ2U9e2UgPT4gc2V0KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHJcbiAgICBjb25zdCBkb20gPSBmaWVsZC5kb21haW4gYXMgYW55XHJcbiAgICBpZiAoZG9tPy50eXBlID09PSAnY29kZWQtdmFsdWUnKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbGVjdCBzaXplPVwic21cIiB2YWx1ZT17dmFsfSBvbkNoYW5nZT17ZSA9PiBzZXQoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj4tLSBDaG9vc2UgLS08L09wdGlvbj5cclxuICAgICAgICAgIHtkb20uY29kZWRWYWx1ZXMubWFwKChjdjogYW55KSA9PiAoXHJcbiAgICAgICAgICAgIDxPcHRpb24ga2V5PXtTdHJpbmcoY3YuY29kZSl9IHZhbHVlPXtTdHJpbmcoY3YuY29kZSl9Pntjdi5uYW1lfTwvT3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBudW1lcmljID0gWydzbWFsbC1pbnRlZ2VyJywnaW50ZWdlcicsJ2JpZy1pbnRlZ2VyJywnc2luZ2xlJywnZG91YmxlJywnbG9uZyddLmluY2x1ZGVzKGZpZWxkLnR5cGUpXHJcbiAgICBpZiAobnVtZXJpYykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOdW1lcmljSW5wdXQgc2l6ZT1cInNtXCJcclxuICAgICAgICAgIHZhbHVlPXt2YWwgPT09ICcnID8gdW5kZWZpbmVkIDogTnVtYmVyKHZhbCl9XHJcbiAgICAgICAgICBtaW49e2RvbT8udHlwZSA9PT0gJ3JhbmdlJyA/IGRvbS5taW5WYWx1ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgIG1heD17ZG9tPy50eXBlID09PSAncmFuZ2UnID8gZG9tLm1heFZhbHVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3YgPT4gc2V0KHYgPz8gJycpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChmaWVsZC50eXBlID09PSAnZGF0ZScpIHtcclxuICAgICAgcmV0dXJuIDxUZXh0SW5wdXQgc2l6ZT1cInNtXCIgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgdmFsdWU9e3ZhbH0gb25DaGFuZ2U9e2UgPT4gc2V0KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgIH1cclxuICAgIHJldHVybiA8VGV4dElucHV0IHNpemU9XCJzbVwiIHZhbHVlPXt2YWx9IHBsYWNlaG9sZGVyPVwiTmV3IHZhbHVlXCIgb25DaGFuZ2U9e2UgPT4gc2V0KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICB9XHJcblxyXG4gIC8vIMOi4oCd4oKsw6LigJ3igqwgQXBwbHkgZWRpdHMgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIGNvbnN0IGFwcGx5QWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCF0b3RhbFNlbGVjdGVkKSB7IHNldE1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCB0ZXh0OiB0KCdub0ZlYXR1cmVzJykgfSk7IHJldHVybiB9XHJcbiAgICBjb25zdCBhY3RpdmUgPSBmaWVsZENvbmZpZ3MuZmlsdGVyKGZjID0+IHsgY29uc3QgdiA9IHZhbHVlc1tmYy5pZF07IHJldHVybiB2ICE9PSAnJyAmJiB2ICE9IG51bGwgfSlcclxuICAgIGlmICghYWN0aXZlLmxlbmd0aCkgeyBzZXRNZXNzYWdlKHsgdHlwZTogJ2Vycm9yJywgdGV4dDogJ0VudGVyIGF0IGxlYXN0IG9uZSB2YWx1ZS4nIH0pOyByZXR1cm4gfVxyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSh0KCdjb25maXJtQXBwbHknLCB7IGNvdW50OiB0b3RhbFNlbGVjdGVkIH0pKSkgcmV0dXJuXHJcblxyXG4gICAgc2V0QnVzeSh0cnVlKTsgc2V0TWVzc2FnZShudWxsKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYnlEcyA9IG5ldyBNYXA8c3RyaW5nLCB7IGluZm86IExheWVySW5mbzsgZWRpdHM6IEZpZWxkQ29uZmlnW10gfT4oKVxyXG4gICAgICBmb3IgKGNvbnN0IGZjIG9mIGFjdGl2ZSkge1xyXG4gICAgICAgIGNvbnN0IGRzSWQgPSBmYy51c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgICBpZiAoIWRzSWQpIGNvbnRpbnVlXHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGxheWVyTWFwLmdldChkc0lkKVxyXG4gICAgICAgIGlmICghaW5mbykgY29udGludWVcclxuICAgICAgICBpZiAoIWJ5RHMuaGFzKGRzSWQpKSBieURzLnNldChkc0lkLCB7IGluZm8sIGVkaXRzOiBbXSB9KVxyXG4gICAgICAgIGJ5RHMuZ2V0KGRzSWQpIS5lZGl0cy5wdXNoKGZjKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdG90YWwgPSAwXHJcbiAgICAgIGZvciAoY29uc3QgWywgeyBpbmZvLCBlZGl0cyB9XSBvZiBieURzKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYXllciwgZmllbGRzIH0gPSBpbmZvXHJcbiAgICAgICAgY29uc3Qgb2lkcyA9IHNlbGVjdGVkW2xheWVyLmlkXVxyXG4gICAgICAgIGlmICghb2lkcz8ubGVuZ3RoKSBjb250aW51ZVxyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVzID0gb2lkcy5tYXAob2lkID0+IHtcclxuICAgICAgICAgIGNvbnN0IGF0dHJzOiBhbnkgPSB7IFtsYXllci5vYmplY3RJZEZpZWxkXTogb2lkIH1cclxuICAgICAgICAgIGVkaXRzLmZvckVhY2goZmMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gZmllbGRzLmZpbmQoKHg6IGFueSkgPT4geC5uYW1lID09PSBmYy5maWVsZE5hbWUpXHJcbiAgICAgICAgICAgIGxldCB2OiBhbnkgPSB2YWx1ZXNbZmMuaWRdXHJcbiAgICAgICAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgICAgICAgaWYgKFsnc21hbGwtaW50ZWdlcicsJ2ludGVnZXInLCdiaWctaW50ZWdlcicsJ2xvbmcnXS5pbmNsdWRlcyhmLnR5cGUpKSB2ID0gcGFyc2VJbnQodiwgMTApXHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAoWydzaW5nbGUnLCdkb3VibGUnXS5pbmNsdWRlcyhmLnR5cGUpKSAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gcGFyc2VGbG9hdCh2KVxyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKGYudHlwZSA9PT0gJ2RhdGUnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHYgPyBuZXcgRGF0ZSh2KS5nZXRUaW1lKCkgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0cnNbZmMuZmllbGROYW1lXSA9IHZcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4geyBhdHRyaWJ1dGVzOiBhdHRycyB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgcmVzICA9IGF3YWl0IGxheWVyLmFwcGx5RWRpdHMoeyB1cGRhdGVGZWF0dXJlczogdXBkYXRlcyB9KVxyXG4gICAgICAgIGNvbnN0IGVycnMgPSAocmVzLnVwZGF0ZUZlYXR1cmVSZXN1bHRzIHx8IFtdKS5maWx0ZXIoKHI6IGFueSkgPT4gci5lcnJvcilcclxuICAgICAgICBpZiAoZXJycy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihgJHtsYXllci50aXRsZX0gOiAke2VycnNbMF0uZXJyb3I/Lm1lc3NhZ2UgfHwgJ2VycmV1cid9YClcclxuICAgICAgICB0b3RhbCArPSByZXMudXBkYXRlRmVhdHVyZVJlc3VsdHM/Lmxlbmd0aCB8fCAwXHJcbiAgICAgIH1cclxuICAgICAgc2V0TWVzc2FnZSh7IHR5cGU6ICdzdWNjZXNzJywgdGV4dDogYCR7dCgnc3VjY2VzcycpfSAoJHt0b3RhbH0gZmVhdHVyZShzKSlgIH0pXHJcbiAgICAgIHNldFZhbHVlcyh7fSlcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgIHNldE1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCB0ZXh0OiBgJHt0KCdlcnJvck1zZycpfSA6ICR7ZS5tZXNzYWdlIHx8IGV9YCB9KVxyXG4gICAgfSBmaW5hbGx5IHsgc2V0QnVzeShmYWxzZSkgfVxyXG4gIH1cclxuXHJcbiAgLy8gw6LigJ3igqzDouKAneKCrCBHdWFyZHMgw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqxcclxuICBpZiAoIXByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMiB9fT57dCgnc2VsZWN0TWFwJyl9PC9kaXY+XHJcbiAgfVxyXG4gIGlmIChmaWVsZENvbmZpZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEyIH19PlxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3YgPT4geyBzZXRKaW11TWFwVmlldyh2KTsgaWYgKHYpIHNjYW5MYXllcnModikgfX0gLz5cclxuICAgICAgICA8QWxlcnQgdHlwZT1cIndhcm5pbmdcIiB3aXRoSWNvbiB0ZXh0PVwiTm8gZmllbGRzIGNvbmZpZ3VyZWQuIE9wZW4gdGhlIHdpZGdldCBzZXR0aW5ncyAo4pqZ77iPKSB0byBkZWZpbmUgdGhlIGxheWVycyBhbmQgZmllbGRzIHRvIGVkaXQuXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyDDouKAneKCrMOi4oCd4oKsIFJlbmRlciDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtTLnJvb3R9PlxyXG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17diA9PiB7IHNldEppbXVNYXBWaWV3KHYpOyBpZiAodikgc2NhbkxheWVycyh2KSB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIMOi4oCd4oKsw6LigJ3igqwgT3V0aWwgZGUgc8ODwqlsZWN0aW9uIMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXtTLm1ifT5cclxuICAgICAgICA8c3BhbiBzdHlsZT17Uy5sYWJlbH0+e3QoJ3NlbGVjdGlvblRvb2wnKX08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5TLnJvdywgbWFyZ2luQm90dG9tOiA2IH19PlxyXG4gICAgICAgICAgPFNlbGVjdCBzaXplPVwic21cIiB2YWx1ZT17dG9vbH0gc3R5bGU9e3sgZmxleDogMSB9fSBvbkNoYW5nZT17ZSA9PiBzZXRUb29sKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlIGFzIFNlbGVjdGlvblRvb2wpfT5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlY3RhbmdsZVwiPnt0KCdyZWN0YW5nbGUnKX08L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBvbHlnb25cIj57dCgncG9seWdvbicpfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibGFzc29cIj57dCgnbGFzc28nKX08L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInBvaW50XCI+e3QoJ3BvaW50Jyl9PC9PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIHtkcmF3aW5nXHJcbiAgICAgICAgICAgID8gPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwiZGFuZ2VyXCIgIG9uQ2xpY2s9e2NhbmNlbERyYXdpbmd9PkNhbmNlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA6IDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzdGFydERyYXdpbmd9IGRpc2FibGVkPXshY2FuU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3NjYW5TdGF0dXMgPT09ICdzY2FubmluZycgPyAnTG9hZGluZyBsYXllcnMuLi4nIDogJyd9PlxyXG4gICAgICAgICAgICAgICAge3NjYW5TdGF0dXMgPT09ICdzY2FubmluZycgPyAnTG9hZGluZy4uLicgOiAnU2VsZWN0J31cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtTLmJldHdlZW59PlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyIH19Pnt0KCdzZWxlY3RlZEZlYXR1cmVzJywgeyBjb3VudDogdG90YWxTZWxlY3RlZCB9KX08L3NwYW4+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJ0ZXJ0aWFyeVwiIG9uQ2xpY2s9e2NsZWFyU2VsZWN0aW9ufSBkaXNhYmxlZD17IXRvdGFsU2VsZWN0ZWR9Pnt0KCdjbGVhclNlbGVjdGlvbicpfTwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0b3RhbFNlbGVjdGVkID4gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtTLm11dGVkfT5cclxuICAgICAgICAgICAge3VuaXF1ZURzSWRzLm1hcChkc0lkID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBpbmZvID0gbGF5ZXJNYXAuZ2V0KGRzSWQpXHJcbiAgICAgICAgICAgICAgaWYgKCFpbmZvKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgIGNvbnN0IGNudCAgPSBzZWxlY3RlZFtpbmZvLmxheWVyLmlkXT8ubGVuZ3RoIHx8IDBcclxuICAgICAgICAgICAgICByZXR1cm4gY250ID8gPGRpdiBrZXk9e2RzSWR9PsOi4oKswqIge2luZm8udGl0bGV9IDoge2NudH08L2Rpdj4gOiBudWxsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Lyogw6LigJ3igqzDouKAneKCrCBDaGFtcHMgw4PCoCBtb2RpZmllciAoZMODwqlmaW5pcyBkYW5zIGxlcyBwYXJhbcODwqh0cmVzKSDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXtTLm1ifT5cclxuICAgICAgICA8c3BhbiBzdHlsZT17Uy5sYWJlbH0+e3QoJ2ZpZWxkc1RvRWRpdCcpfTwvc3Bhbj5cclxuICAgICAgICB7dW5pcXVlRHNJZHMubWFwKGRzSWQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW5mbyAgID0gbGF5ZXJNYXAuZ2V0KGRzSWQpXHJcbiAgICAgICAgICBjb25zdCB0aXRsZSAgPSBpbmZvPy50aXRsZSB8fCBkc0lkXHJcbiAgICAgICAgICBjb25zdCBmaWVsZHMgPSBmaWVsZENvbmZpZ3MuZmlsdGVyKGZjID0+IGZjLnVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZCA9PT0gZHNJZClcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkc0lkfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwLCBmb250U2l6ZTogMTMsIG1hcmdpbkJvdHRvbTogNCB9fT5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIHshaW5mbyAmJiBzY2FuU3RhdHVzID09PSAnZG9uZScgICAgICYmIDxzcGFuIHN0eWxlPXtTLndhcm59PiYjeDI2QTA7IGxheWVyIG5vdCBmb3VuZCBpbiBtYXA8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgeyFpbmZvICYmIHNjYW5TdGF0dXMgPT09ICdzY2FubmluZycgJiYgPHNwYW4gc3R5bGU9e1Mud2Fybn0+Li4uIGxvYWRpbmc8L3NwYW4+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtmaWVsZHMubWFwKGZjID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmYy5pZH0gc3R5bGU9e1MuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5tYjQsIGZvbnRTaXplOiAxMiwgZm9udFdlaWdodDogNTAwIH19PntmYy5sYWJlbCB8fCBmYy5maWVsZE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJJbnB1dChmYyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIMOi4oCd4oKsw6LigJ3igqwgQm91dG9uIEFwcGxpcXVlciDDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrMOi4oCd4oKsw6LigJ3igqzDouKAneKCrCAqL31cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gb25DbGljaz17YXBwbHlBbGx9IGRpc2FibGVkPXtidXN5IHx8ICF0b3RhbFNlbGVjdGVkfT5cclxuICAgICAgICB7YnVzeSA/IDxMb2FkaW5nIHR5cGU9XCJET05VVFwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz4gOiB0KCdhcHBseUVkaXRzJyl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgIDxBbGVydCBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19IHR5cGU9e21lc3NhZ2UudHlwZX0gdGV4dD17bWVzc2FnZS50ZXh0fVxyXG4gICAgICAgICAgd2l0aEljb24gY2xvc2FibGUgb25DbG9zZT17KCkgPT4gc2V0TWVzc2FnZShudWxsKX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=