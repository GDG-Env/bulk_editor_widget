System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
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

/***/ },

/***/ "jimu-ui/advanced/data-source-selector"
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/bulk-attribute-editor/src/setting/setting.tsx ***!
  \*******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");

/** @jsx jsx */
// =============================================================================
// Setting panel — l'admin choisit la carte, puis ajoute des champs en cliquant
// directement sur des sélecteurs visuels de couche et de champ.
// =============================================================================




const uid = () => Math.random().toString(36).slice(2, 9);
const Setting = (props) => {
    var _a;
    const fieldConfigs = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.fieldConfigs) || [];
    // ── Persistance ──────────────────────────────────────────────────────────
    const saveFields = (next) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('fieldConfigs', next)
        });
    };
    const onMapSelect = (ids) => {
        props.onSettingChange({ id: props.id, useMapWidgetIds: ids });
    };
    // ── Helpers ──────────────────────────────────────────────────────────────
    const addField = () => {
        saveFields([
            ...fieldConfigs,
            { id: uid(), useDataSource: null, fieldName: '', label: '' }
        ]);
    };
    const updateField = (i, patch) => {
        saveFields(fieldConfigs.map((fc, j) => j === i ? Object.assign(Object.assign({}, fc), patch) : fc));
    };
    const removeField = (i) => {
        saveFields(fieldConfigs.filter((_, j) => j !== i));
    };
    const moveField = (i, dir) => {
        const j = i + dir;
        if (j < 0 || j >= fieldConfigs.length)
            return;
        const next = [...fieldConfigs];
        [next[i], next[j]] = [next[j], next[i]];
        saveFields(next);
    };
    // ── DataSource → titre lisible ───────────────────────────────────────────
    const getLayerLabel = (uds) => {
        var _a;
        if (!uds)
            return '';
        try {
            const ds = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(uds.dataSourceId);
            return ((_a = ds === null || ds === void 0 ? void 0 : ds.getLabel) === null || _a === void 0 ? void 0 : _a.call(ds)) || uds.dataSourceId;
        }
        catch (_b) {
            return uds.dataSourceId;
        }
    };
    // ── Styles ───────────────────────────────────────────────────────────────
    const card = {
        border: '1px solid var(--border, #444)', borderRadius: 4,
        padding: 8, marginBottom: 10
    };
    const lbl = { fontSize: 11, color: '#888', marginBottom: 2, marginTop: 6 };
    const headerRow = { display: 'flex', gap: 4, alignItems: 'center', marginBottom: 4 };
    // useMapWidgetIds wrapper passé aux sélecteurs (limite aux couches de la carte choisie)
    const mapIds = props.useMapWidgetIds && props.useMapWidgetIds.length > 0
        ? props.useMapWidgetIds
        : null;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Map source", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapSelect }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Fields to bulk-edit", children: [!mapIds && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, color: '#f90' }, children: "Select a map source above first." }) })), mapIds && fieldConfigs.length === 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { fontSize: 12, color: '#aaa' }, children: ["Click ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "+ Add a field" }), " to configure a field to bulk-edit."] }) })), mapIds && fieldConfigs.map((fc, idx) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: card, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: headerRow, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { flex: 1, fontWeight: 600, fontSize: 12 }, children: ["Field ", idx + 1, fc.useDataSource ? ` — ${getLayerLabel(fc.useDataSource)}` : ''] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "tertiary", onClick: () => moveField(idx, -1), disabled: idx === 0, children: "\u2191" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "tertiary", onClick: () => moveField(idx, 1), disabled: idx === fieldConfigs.length - 1, children: "\u2193" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "tertiary", onClick: () => removeField(idx), children: "\u2715" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: lbl, children: "Layer" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.FeatureLayer]), useMapWidgetIds: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)(mapIds), useDataSources: fc.useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)([fc.useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)([]), mustUseDataSource: true, hideAddDataButton: true, hideDataView: true, onChange: (arr) => {
                                    const first = arr && arr.length ? arr[0] : null;
                                    const uds = first
                                        ? (typeof first.asMutable === 'function' ? first.asMutable({ deep: true }) : first)
                                        : null;
                                    updateField(idx, { useDataSource: uds, fieldName: '' });
                                } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: lbl, children: "Field to edit" }), fc.useDataSource
                                ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.FieldSelector, { useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)([fc.useDataSource]), selectedFields: fc.fieldName ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)([fc.fieldName]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)([]), isMultiple: false, onChange: (fields) => {
                                        const name = fields && fields.length ? fields[0].jimuName || fields[0].name : '';
                                        updateField(idx, { fieldName: name });
                                    } }))
                                : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 11, color: '#888' }, children: "Choose a layer first." }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: lbl, children: "Label displayed to the user (optional)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { size: "sm", value: fc.label, placeholder: fc.fieldName || 'Field label', onChange: e => updateField(idx, { label: e.target.value }) })] }, fc.id))), mapIds && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { type: "primary", size: "sm", style: { width: '100%' }, onClick: addField, children: "+ Add a field" }) }))] })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9idWxrLWF0dHJpYnV0ZS1lZGl0b3IvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRjs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUNmLGdGQUFnRjtBQUNoRiwrRUFBK0U7QUFDL0UsZ0VBQWdFO0FBQ2hFLGdGQUFnRjtBQUs5RDtBQU0wQjtBQUlFO0FBQ0g7QUFHM0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUV4RCxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQXNDLEVBQUUsRUFBRTs7SUFDekQsTUFBTSxZQUFZLEdBQWtCLENBQUMsV0FBSyxDQUFDLE1BQU0sMENBQUUsWUFBb0IsS0FB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QUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTt3Q0FDaEYsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQ0FDdkMsQ0FBQyxHQUNELENBQ0g7Z0NBQ0QsQ0FBQyxDQUFDLHlFQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxzQ0FBNkIsRUFJNUUseUVBQUssS0FBSyxFQUFFLEdBQUcsdURBQThDLEVBQzdELGdFQUFDLDhDQUFTLElBQ1IsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFDZixXQUFXLEVBQUUsRUFBRSxDQUFDLFNBQVMsSUFBSSxhQUFhLEVBQzFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUMxRCxLQXJETSxFQUFFLENBQUMsRUFBRSxDQXNEVCxDQUNQLENBQUMsRUFFRCxNQUFNLElBQUksQ0FDVCxnRUFBQywyRUFBVSxjQUNULGdFQUFDLDJDQUFNLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSw4QkFFbkUsR0FDRSxDQUNkLElBQ2MsSUFDYixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE9BQU87QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2J1bGstYXR0cmlidXRlLWVkaXRvci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNldHRpbmcgcGFuZWwg4oCUIGwnYWRtaW4gY2hvaXNpdCBsYSBjYXJ0ZSwgcHVpcyBham91dGUgZGVzIGNoYW1wcyBlbiBjbGlxdWFudFxyXG4vLyBkaXJlY3RlbWVudCBzdXIgZGVzIHPDqWxlY3RldXJzIHZpc3VlbHMgZGUgY291Y2hlIGV0IGRlIGNoYW1wLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBqc3gsIEltbXV0YWJsZSxcclxuICBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBVc2VEYXRhU291cmNlLFxyXG4gIERhdGFTb3VyY2VUeXBlc1xyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQge1xyXG4gIE1hcFdpZGdldFNlbGVjdG9yLFxyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG4gIFNldHRpbmdSb3dcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHtcclxuICBEYXRhU291cmNlU2VsZWN0b3IsXHJcbiAgRmllbGRTZWxlY3RvclxyXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dElucHV0IH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZywgdHlwZSBGaWVsZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHVpZCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDkpXHJcblxyXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgZmllbGRDb25maWdzOiBGaWVsZENvbmZpZ1tdID0gKHByb3BzLmNvbmZpZz8uZmllbGRDb25maWdzIGFzIGFueSkgfHwgW11cclxuXHJcbiAgLy8g4pSA4pSAIFBlcnNpc3RhbmNlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGNvbnN0IHNhdmVGaWVsZHMgPSAobmV4dDogRmllbGRDb25maWdbXSkgPT4ge1xyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ2ZpZWxkQ29uZmlncycsIG5leHQgYXMgYW55KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTWFwU2VsZWN0ID0gKGlkczogc3RyaW5nW10pID0+IHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiBwcm9wcy5pZCwgdXNlTWFwV2lkZ2V0SWRzOiBpZHMgfSlcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBIZWxwZXJzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGNvbnN0IGFkZEZpZWxkID0gKCkgPT4ge1xyXG4gICAgc2F2ZUZpZWxkcyhbXHJcbiAgICAgIC4uLmZpZWxkQ29uZmlncyxcclxuICAgICAgeyBpZDogdWlkKCksIHVzZURhdGFTb3VyY2U6IG51bGwgYXMgYW55LCBmaWVsZE5hbWU6ICcnLCBsYWJlbDogJycgfVxyXG4gICAgXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUZpZWxkID0gKGk6IG51bWJlciwgcGF0Y2g6IFBhcnRpYWw8RmllbGRDb25maWc+KSA9PiB7XHJcbiAgICBzYXZlRmllbGRzKGZpZWxkQ29uZmlncy5tYXAoKGZjLCBqKSA9PiBqID09PSBpID8geyAuLi5mYywgLi4ucGF0Y2ggfSA6IGZjKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZpZWxkID0gKGk6IG51bWJlcikgPT4ge1xyXG4gICAgc2F2ZUZpZWxkcyhmaWVsZENvbmZpZ3MuZmlsdGVyKChfLCBqKSA9PiBqICE9PSBpKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vdmVGaWVsZCA9IChpOiBudW1iZXIsIGRpcjogLTEgfCAxKSA9PiB7XHJcbiAgICBjb25zdCBqID0gaSArIGRpclxyXG4gICAgaWYgKGogPCAwIHx8IGogPj0gZmllbGRDb25maWdzLmxlbmd0aCkgcmV0dXJuXHJcbiAgICBjb25zdCBuZXh0ID0gWy4uLmZpZWxkQ29uZmlnc11cclxuICAgIDtbbmV4dFtpXSwgbmV4dFtqXV0gPSBbbmV4dFtqXSwgbmV4dFtpXV1cclxuICAgIHNhdmVGaWVsZHMobmV4dClcclxuICB9XHJcblxyXG4gIC8vIOKUgOKUgCBEYXRhU291cmNlIOKGkiB0aXRyZSBsaXNpYmxlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gIGNvbnN0IGdldExheWVyTGFiZWwgPSAodWRzPzogVXNlRGF0YVNvdXJjZSk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAoIXVkcykgcmV0dXJuICcnXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh1ZHMuZGF0YVNvdXJjZUlkKVxyXG4gICAgICByZXR1cm4gZHM/LmdldExhYmVsPy4oKSB8fCB1ZHMuZGF0YVNvdXJjZUlkXHJcbiAgICB9IGNhdGNoIHsgcmV0dXJuIHVkcy5kYXRhU291cmNlSWQgfVxyXG4gIH1cclxuXHJcbiAgLy8g4pSA4pSAIFN0eWxlcyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICBjb25zdCBjYXJkOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlciwgIzQ0NCknLCBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICBwYWRkaW5nOiA4LCBtYXJnaW5Cb3R0b206IDEwXHJcbiAgfVxyXG4gIGNvbnN0IGxibDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgZm9udFNpemU6IDExLCBjb2xvcjogJyM4ODgnLCBtYXJnaW5Cb3R0b206IDIsIG1hcmdpblRvcDogNiB9XHJcbiAgY29uc3QgaGVhZGVyUm93OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNCwgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogNCB9XHJcblxyXG4gIC8vIHVzZU1hcFdpZGdldElkcyB3cmFwcGVyIHBhc3PDqSBhdXggc8OpbGVjdGV1cnMgKGxpbWl0ZSBhdXggY291Y2hlcyBkZSBsYSBjYXJ0ZSBjaG9pc2llKVxyXG4gIGNvbnN0IG1hcElkcyA9IHByb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID4gMFxyXG4gICAgPyBwcm9wcy51c2VNYXBXaWRnZXRJZHNcclxuICAgIDogbnVsbFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICB7Lyog4pSA4pSAIENhcnRlIHNvdXJjZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi99XHJcbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIk1hcCBzb3VyY2VcIj5cclxuICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxyXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgb25TZWxlY3Q9e29uTWFwU2VsZWN0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICB7Lyog4pSA4pSAIENoYW1wcyDDoCDDqWRpdGVyIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL31cclxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiRmllbGRzIHRvIGJ1bGstZWRpdFwiPlxyXG4gICAgICAgIHshbWFwSWRzICYmIChcclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjZjkwJyB9fT5cclxuICAgICAgICAgICAgICBTZWxlY3QgYSBtYXAgc291cmNlIGFib3ZlIGZpcnN0LlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7bWFwSWRzICYmIGZpZWxkQ29uZmlncy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJyNhYWEnIH19PlxyXG4gICAgICAgICAgICAgIENsaWNrIDxzdHJvbmc+KyBBZGQgYSBmaWVsZDwvc3Ryb25nPiB0byBjb25maWd1cmUgYSBmaWVsZCB0byBidWxrLWVkaXQuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHttYXBJZHMgJiYgZmllbGRDb25maWdzLm1hcCgoZmMsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2ZjLmlkfSBzdHlsZT17Y2FyZH0+XHJcbiAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2hlYWRlclJvd30+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZmxleDogMSwgZm9udFdlaWdodDogNjAwLCBmb250U2l6ZTogMTIgfX0+XHJcbiAgICAgICAgICAgICAgICBGaWVsZCB7aWR4ICsgMX17ZmMudXNlRGF0YVNvdXJjZSA/IGAg4oCUICR7Z2V0TGF5ZXJMYWJlbChmYy51c2VEYXRhU291cmNlKX1gIDogJyd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInRlcnRpYXJ5XCIgb25DbGljaz17KCkgPT4gbW92ZUZpZWxkKGlkeCwgLTEpfSBkaXNhYmxlZD17aWR4ID09PSAwfT7ihpE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJ0ZXJ0aWFyeVwiIG9uQ2xpY2s9eygpID0+IG1vdmVGaWVsZChpZHgsICAxKX0gZGlzYWJsZWQ9e2lkeCA9PT0gZmllbGRDb25maWdzLmxlbmd0aCAtIDF9PuKGkzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInRlcnRpYXJ5XCIgb25DbGljaz17KCkgPT4gcmVtb3ZlRmllbGQoaWR4KX0+4pyVPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENvdWNoZSAoRGF0YVNvdXJjZVNlbGVjdG9yIGxpbWl0w6kgYXV4IGNvdWNoZXMgZGUgbGEgY2FydGUpICovfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtsYmx9PkxheWVyPC9kaXY+XHJcbiAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgICAgICB0eXBlcz17SW1tdXRhYmxlKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSl9XHJcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXtJbW11dGFibGUobWFwSWRzKX1cclxuICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17ZmMudXNlRGF0YVNvdXJjZSA/IEltbXV0YWJsZShbZmMudXNlRGF0YVNvdXJjZV0pIDogSW1tdXRhYmxlKFtdKX1cclxuICAgICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgICAgIGhpZGVBZGREYXRhQnV0dG9uXHJcbiAgICAgICAgICAgICAgaGlkZURhdGFWaWV3XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhhcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBhcnIgJiYgYXJyLmxlbmd0aCA/IGFyclswXSA6IG51bGxcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVkcyA9IGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgID8gKHR5cGVvZiBmaXJzdC5hc011dGFibGUgPT09ICdmdW5jdGlvbicgPyBmaXJzdC5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pIDogZmlyc3QpXHJcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlRmllbGQoaWR4LCB7IHVzZURhdGFTb3VyY2U6IHVkcywgZmllbGROYW1lOiAnJyB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogQ2hhbXAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2xibH0+RmllbGQgdG8gZWRpdDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmMudXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e0ltbXV0YWJsZShbZmMudXNlRGF0YVNvdXJjZV0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17ZmMuZmllbGROYW1lID8gSW1tdXRhYmxlKFtmYy5maWVsZE5hbWVdKSA6IEltbXV0YWJsZShbXSl9XHJcbiAgICAgICAgICAgICAgICAgIGlzTXVsdGlwbGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpZWxkczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZpZWxkcyAmJiBmaWVsZHMubGVuZ3RoID8gZmllbGRzWzBdLmppbXVOYW1lIHx8IGZpZWxkc1swXS5uYW1lIDogJydcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGaWVsZChpZHgsIHsgZmllbGROYW1lOiBuYW1lIH0pXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogJyM4ODgnIH19PkNob29zZSBhIGxheWVyIGZpcnN0LjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7LyogTGliZWxsw6kgYWZmaWNow6kgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2xibH0+TGFiZWwgZGlzcGxheWVkIHRvIHRoZSB1c2VyIChvcHRpb25hbCk8L2Rpdj5cclxuICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZjLmxhYmVsfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmYy5maWVsZE5hbWUgfHwgJ0ZpZWxkIGxhYmVsJ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVGaWVsZChpZHgsIHsgbGFiZWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIHttYXBJZHMgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IG9uQ2xpY2s9e2FkZEZpZWxkfT5cclxuICAgICAgICAgICAgICArIEFkZCBhIGZpZWxkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==