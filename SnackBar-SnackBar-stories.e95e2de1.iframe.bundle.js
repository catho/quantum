"use strict";(self.webpackChunk_catho_quantum=self.webpackChunk_catho_quantum||[]).push([[4134,9290,1926,1680],{"./components/shared/shadow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/shared/hexToRgba.js"),_SHADOWS$UMBRA={elevations:["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],opacity:.2},umbraElevations=_SHADOWS$UMBRA.elevations,umbraOpacity=_SHADOWS$UMBRA.opacity,_SHADOWS$PENUMBRA={elevations:["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],opacity:.14},penumbraElevations=_SHADOWS$PENUMBRA.elevations,penumbraOpacity=_SHADOWS$PENUMBRA.opacity,_SHADOWS$AMBIENT={elevations:["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"],opacity:.12},ambientElevations=_SHADOWS$AMBIENT.elevations,ambientOpacity=_SHADOWS$AMBIENT.opacity;const __WEBPACK_DEFAULT_EXPORT__=function shadow(){var elevation=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,color=arguments.length>1?arguments[1]:void 0;return function(_ref2){return function shadowWithTheme(_ref,elevation){var defaultColor=_ref.colors.neutral[700],color=arguments.length>2&&void 0!==arguments[2]?arguments[2]:defaultColor,umbra="".concat(umbraElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,umbraOpacity)),penumbra="".concat(penumbraElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,penumbraOpacity)),ambient="".concat(ambientElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,ambientOpacity));return"box-shadow: ".concat(umbra,", ").concat(penumbra,", ").concat(ambient,";")}(_ref2.theme,elevation,color)}}}}]);