"use strict";(self.webpackChunk_catho_quantum=self.webpackChunk_catho_quantum||[]).push([[8908,9290,1926,4134,1680],{"./stories/Card/Card.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdvancedCard:()=>AdvancedCard,CompoundComponentsList:()=>CompoundComponentsList,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_Card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Card/index.js"),_shared_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/shared/Table.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const __WEBPACK_DEFAULT_EXPORT__={title:"Card",component:_components_Card__WEBPACK_IMPORTED_MODULE_1__.A};var componentsList=[{component:"<Card/>",description:"Card wrapper, it's the root element of card component. Hold all card elements, and their size is determined by the space those elements occupy."},{component:"<Card.Header/>",description:"It's envolve the card header components."},{component:"<Card.HeaderText/>",description:"It's envolve the Card.Title and Card.Description components."},{component:"<Card.Title/>",description:"The main title."},{component:"<Card.Description/>",description:"Cards can display a little explanation."},{component:"<Card.Thumbnail/>",description:"Display an image, avatar, or logo."},{component:"<Card.Media/>",description:"Cards can include a variety of media, including images, photos, graphics, and so on."},{component:"<Card.Content/>",description:"The main content, can include, for example, a job description or a resume information."},{component:"<Card.Footer/>",description:"Footer is provided for include actions buttons, icons, any kind of user interaction."}],CompoundComponentsList=function CompoundComponentsList(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_Table__WEBPACK_IMPORTED_MODULE_2__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th",{children:"Component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th",{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody",{children:componentsList.map((function(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr",{children:Object.keys(row).map((function(key){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td",{children:row[key]},row[key])}))},row.component)}))})]})};CompoundComponentsList.displayName="CompoundComponentsList";var Template=function Template(args){var _args$children=args.children,Component=void 0===_args$children?"Lorem ipsum dolor sit amet...":_args$children,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(args,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A,_objectSpread(_objectSpread({},rest),{},{children:Component}))};Template.displayName="Template";var AdvancedCardTemplate=function AdvancedCardTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A,_objectSpread(_objectSpread({},args),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.Header,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.Thumbnail,{src:"https://assets.catho.com.br/quantum/card/thumb-72x72.png",alt:"Avatar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.HeaderText,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.Title,{small:!0,children:"Title"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.Description,{children:"Card Description"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.Media,{src:"https://assets.catho.com.br/quantum/card/thumb-800x800.png",alt:"A beautiful Cat"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.Content,{children:"Card Content: Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed metus elit. In hac habitasse platea dictumst. Fusce non purus a dui semper molestie vitae in sapien. In a odio quis nisi placerat varius eget et magna. Donec nec cursus mauris. Donec a cursus velit."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A.Footer,{children:"Card Footer: Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed metus elit. In hac habitasse platea dictumst. Fusce non purus a dui semper molestie vitae in sapien. In a odio quis nisi placerat varius eget et magna. Donec nec cursus mauris. Donec a cursus velit."})]}))};AdvancedCardTemplate.displayName="AdvancedCardTemplate";var Default=Template.bind({}),AdvancedCard=AdvancedCardTemplate.bind({});CompoundComponentsList.parameters={...CompoundComponentsList.parameters,docs:{...CompoundComponentsList.parameters?.docs,source:{originalSource:"() => <Table>\n    <thead>\n      <tr>\n        <th>Component</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      {componentsList.map(row => <tr key={row.component}>\n          {Object.keys(row).map(key => <td key={row[key]}>{row[key]}</td>)}\n        </tr>)}\n    </tbody>\n  </Table>",...CompoundComponentsList.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const {\n    children: Component = 'Lorem ipsum dolor sit amet...',\n    ...rest\n  } = args;\n  return <Card {...rest}>{Component}</Card>;\n}",...Default.parameters?.docs?.source}}},AdvancedCard.parameters={...AdvancedCard.parameters,docs:{...AdvancedCard.parameters?.docs,source:{originalSource:'args => <Card {...args}>\n    <Card.Header>\n      <Card.Thumbnail src="https://assets.catho.com.br/quantum/card/thumb-72x72.png" alt="Avatar" />\n      <Card.HeaderText>\n        <Card.Title small>Title</Card.Title>\n        <Card.Description>Card Description</Card.Description>\n      </Card.HeaderText>\n    </Card.Header>\n    <Card.Media src="https://assets.catho.com.br/quantum/card/thumb-800x800.png" alt="A beautiful Cat" />\n    <Card.Content>\n      Card Content: Duis ac enim non leo dapibus placerat ut vel ligula.\n      Pellentesque sed metus elit. In hac habitasse platea dictumst. Fusce non\n      purus a dui semper molestie vitae in sapien. In a odio quis nisi placerat\n      varius eget et magna. Donec nec cursus mauris. Donec a cursus velit.\n    </Card.Content>\n    <Card.Footer>\n      Card Footer: Duis ac enim non leo dapibus placerat ut vel ligula.\n      Pellentesque sed metus elit. In hac habitasse platea dictumst. Fusce non\n      purus a dui semper molestie vitae in sapien. In a odio quis nisi placerat\n      varius eget et magna. Donec nec cursus mauris. Donec a cursus velit.\n    </Card.Footer>\n  </Card>',...AdvancedCard.parameters?.docs?.source}}};const __namedExportsOrder=["CompoundComponentsList","Default","AdvancedCard"]},"./components/shared/shadow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/shared/hexToRgba.js"),_SHADOWS$UMBRA={elevations:["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],opacity:.2},umbraElevations=_SHADOWS$UMBRA.elevations,umbraOpacity=_SHADOWS$UMBRA.opacity,_SHADOWS$PENUMBRA={elevations:["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],opacity:.14},penumbraElevations=_SHADOWS$PENUMBRA.elevations,penumbraOpacity=_SHADOWS$PENUMBRA.opacity,_SHADOWS$AMBIENT={elevations:["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"],opacity:.12},ambientElevations=_SHADOWS$AMBIENT.elevations,ambientOpacity=_SHADOWS$AMBIENT.opacity;const __WEBPACK_DEFAULT_EXPORT__=function shadow(){var elevation=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,color=arguments.length>1?arguments[1]:void 0;return function(_ref2){return function shadowWithTheme(_ref,elevation){var defaultColor=_ref.colors.neutral[700],color=arguments.length>2&&void 0!==arguments[2]?arguments[2]:defaultColor,umbra="".concat(umbraElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,umbraOpacity)),penumbra="".concat(penumbraElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,penumbraOpacity)),ambient="".concat(ambientElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,ambientOpacity));return"box-shadow: ".concat(umbra,", ").concat(penumbra,", ").concat(ambient,";")}(_ref2.theme,elevation,color)}}},"./stories/shared/Table.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.table.withConfig({displayName:"Table",componentId:"sc-9570pk-0"})(["width:100%;border-collapse:collapse;margin-bottom:40px;&.bordered{th,td{border:1px solid #ccc;}}th,td{padding:8px;text-align:left;}tr:nth-child(even){background-color:#f6f8fa;}"])}}]);