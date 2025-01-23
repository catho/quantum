(self.webpackChunk_catho_quantum=self.webpackChunk_catho_quantum||[]).push([[5690,2652,980,7687,9290,1736,1926,1796,1494,4134,5806,1680],{"./stories/Input/Input.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CEP:()=>CEP,CNPJ:()=>CNPJ,CPF:()=>CPF,ControlledExample:()=>ControlledExample,Date:()=>Date,Default:()=>Default,DescriptionLabel:()=>DescriptionLabel,Disabled:()=>Disabled,Error:()=>Error,HelperText:()=>HelperText,Label:()=>Label,Password:()=>Password,Phone:()=>Phone,Searchable:()=>Searchable,Skin:()=>Skin,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Input/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["staticType"];function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Input",component:_components__WEBPACK_IMPORTED_MODULE_2__.A};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.A,_objectSpread({},args))};Template.displayName="Template";var TemplateWithType=function TemplateWithType(_ref){var staticType=_ref.staticType,otherArgs=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),InputWithType=_components__WEBPACK_IMPORTED_MODULE_2__.A[staticType];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputWithType,_objectSpread({},otherArgs))};TemplateWithType.displayName="TemplateWithType";var Default=Template.bind({}),Label=Template.bind({});Label.args={label:"With Label"};var Error=Template.bind({});Error.args={error:"Some error"};var Disabled=Template.bind({});Disabled.args={disabled:!0};var DescriptionLabel=Template.bind({});DescriptionLabel.args={descriptionLabel:"Some description label"};var HelperText=Template.bind({});HelperText.args={helperText:"Some helper text"};var Searchable=Template.bind({});Searchable.args={type:"search"};var CEP=TemplateWithType.bind({});CEP.args={staticType:"CEP"};var CNPJ=TemplateWithType.bind({});CNPJ.args={staticType:"CNPJ"};var CPF=TemplateWithType.bind({});CPF.args={staticType:"CPF"};var Date=TemplateWithType.bind({});Date.args={staticType:"Date"};var Phone=TemplateWithType.bind({});Phone.args={staticType:"Phone"};var Password=TemplateWithType.bind({});Password.args={staticType:"Password"};var Skin=Template.bind({});Skin.args={skin:"dark"};var ControlledExample=function ControlledExample(props){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("This is an example text"),2),value=_useState2[0],setValue=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.A,_objectSpread(_objectSpread({},props),{},{label:"Controlled example",value,onClean:function onClean(){setValue("")},onChange:function onChange(event){setValue(event.target.value)}}))};ControlledExample.displayName="ControlledExample",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Label.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Disabled.parameters?.docs?.source}}},DescriptionLabel.parameters={...DescriptionLabel.parameters,docs:{...DescriptionLabel.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...DescriptionLabel.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...HelperText.parameters?.docs?.source}}},Searchable.parameters={...Searchable.parameters,docs:{...Searchable.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Searchable.parameters?.docs?.source}}},CEP.parameters={...CEP.parameters,docs:{...CEP.parameters?.docs,source:{originalSource:"({\n  staticType,\n  ...otherArgs\n}) => {\n  const InputWithType = Input[staticType];\n  return <InputWithType {...otherArgs} />;\n}",...CEP.parameters?.docs?.source}}},CNPJ.parameters={...CNPJ.parameters,docs:{...CNPJ.parameters?.docs,source:{originalSource:"({\n  staticType,\n  ...otherArgs\n}) => {\n  const InputWithType = Input[staticType];\n  return <InputWithType {...otherArgs} />;\n}",...CNPJ.parameters?.docs?.source}}},CPF.parameters={...CPF.parameters,docs:{...CPF.parameters?.docs,source:{originalSource:"({\n  staticType,\n  ...otherArgs\n}) => {\n  const InputWithType = Input[staticType];\n  return <InputWithType {...otherArgs} />;\n}",...CPF.parameters?.docs?.source}}},Date.parameters={...Date.parameters,docs:{...Date.parameters?.docs,source:{originalSource:"({\n  staticType,\n  ...otherArgs\n}) => {\n  const InputWithType = Input[staticType];\n  return <InputWithType {...otherArgs} />;\n}",...Date.parameters?.docs?.source}}},Phone.parameters={...Phone.parameters,docs:{...Phone.parameters?.docs,source:{originalSource:"({\n  staticType,\n  ...otherArgs\n}) => {\n  const InputWithType = Input[staticType];\n  return <InputWithType {...otherArgs} />;\n}",...Phone.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"({\n  staticType,\n  ...otherArgs\n}) => {\n  const InputWithType = Input[staticType];\n  return <InputWithType {...otherArgs} />;\n}",...Password.parameters?.docs?.source}}},Skin.parameters={...Skin.parameters,docs:{...Skin.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Skin.parameters?.docs?.source}}},ControlledExample.parameters={...ControlledExample.parameters,docs:{...ControlledExample.parameters?.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState('This is an example text');\n  const onClean = () => {\n    setValue('');\n  };\n  const onChange = event => {\n    setValue(event.target.value);\n  };\n  return <Input {...props} label=\"Controlled example\" value={value} onClean={onClean} onChange={onChange} />;\n}",...ControlledExample.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Label","Error","Disabled","DescriptionLabel","HelperText","Searchable","CEP","CNPJ","CPF","Date","Phone","Password","Skin","ControlledExample"]},"./components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/Icon/Icon.jsx");const __WEBPACK_DEFAULT_EXPORT__=_Icon__WEBPACK_IMPORTED_MODULE_0__.A;_Icon__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{skin:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"instanceOf",value:"Object"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'xsmall'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1}]},required:!1},name:{description:"",type:{name:"enum",value:[{value:"'access_time'",computed:!1},{value:"'accessible_forward'",computed:!1},{value:"'accessible'",computed:!1},{value:"'add'",computed:!1},{value:"'wallet'",computed:!1},{value:"'add_chart'",computed:!1},{value:"'add_circle'",computed:!1},{value:"'add_alarm'",computed:!1},{value:"'apps'",computed:!1},{value:"'arrow_drop_down'",computed:!1},{value:"'arrow_drop_up'",computed:!1},{value:"'arrow_right'",computed:!1},{value:"'arrow_left'",computed:!1},{value:"'arrow_upward'",computed:!1},{value:"'assessment'",computed:!1},{value:"'assignment'",computed:!1},{value:"'assignment_ind'",computed:!1},{value:"'assignment_turned_in'",computed:!1},{value:"'attach_money'",computed:!1},{value:"'auto_graph'",computed:!1},{value:"'block'",computed:!1},{value:"'box_seam_fill'",computed:!1},{value:"'cached'",computed:!1},{value:"'camera'",computed:!1},{value:"'chat'",computed:!1},{value:"'check_box_outline_blank'",computed:!1},{value:"'check_box'",computed:!1},{value:"'check_circle'",computed:!1},{value:"'check'",computed:!1},{value:"'clear'",computed:!1},{value:"'close'",computed:!1},{value:"'collections'",computed:!1},{value:"'contacts'",computed:!1},{value:"'contact_phone'",computed:!1},{value:"'contact_support'",computed:!1},{value:"'contrast'",computed:!1},{value:"'credit_card'",computed:!1},{value:"'date_range'",computed:!1},{value:"'delete'",computed:!1},{value:"'dentistry'",computed:!1},{value:"'description_outlined'",computed:!1},{value:"'done'",computed:!1},{value:"'ecg_heart'",computed:!1},{value:"'edit'",computed:!1},{value:"'emoji_people'",computed:!1},{value:"'equalizer'",computed:!1},{value:"'error'",computed:!1},{value:"'event_available'",computed:!1},{value:"'exit_to_app'",computed:!1},{value:"'expand_less'",computed:!1},{value:"'expand_more'",computed:!1},{value:"'favorite'",computed:!1},{value:"'favorite_border'",computed:!1},{value:"'filter_list'",computed:!1},{value:"'folder'",computed:!1},{value:"'flash_on'",computed:!1},{value:"'group'",computed:!1},{value:"'group_add'",computed:!1},{value:"'home'",computed:!1},{value:"'home_work'",computed:!1},{value:"'help'",computed:!1},{value:"'info'",computed:!1},{value:"'keyboard_arrow_down'",computed:!1},{value:"'keyboard_arrow_left'",computed:!1},{value:"'keyboard_arrow_right'",computed:!1},{value:"'keyboard_arrow_up'",computed:!1},{value:"'launch'",computed:!1},{value:"'lightbulb_outlined'",computed:!1},{value:"'location_city'",computed:!1},{value:"'lock'",computed:!1},{value:"'lock_open'",computed:!1},{value:"'lock_outlined'",computed:!1},{value:"'markunread'",computed:!1},{value:"'menu_book'",computed:!1},{value:"'menu'",computed:!1},{value:"'more_vert'",computed:!1},{value:"'notification'",computed:!1},{value:"'payment'",computed:!1},{value:"'pause_circle_outline'",computed:!1},{value:"'perm_device_information'",computed:!1},{value:"'person'",computed:!1},{value:"'person_add'",computed:!1},{value:"'person_circle'",computed:!1},{value:"'phone_android'",computed:!1},{value:"'print'",computed:!1},{value:"'radio_button_checked'",computed:!1},{value:"'radio_button_unchecked'",computed:!1},{value:"'refresh'",computed:!1},{value:"'receipt'",computed:!1},{value:"'room'",computed:!1},{value:"'search'",computed:!1},{value:"'security'",computed:!1},{value:"'send'",computed:!1},{value:"'school'",computed:!1},{value:"'share'",computed:!1},{value:"'star_border'",computed:!1},{value:"'star_half'",computed:!1},{value:"'star'",computed:!1},{value:"'stars'",computed:!1},{value:"'star_rounded'",computed:!1},{value:"'timer_outlined'",computed:!1},{value:"'thumb_down_outlined'",computed:!1},{value:"'thumb_down'",computed:!1},{value:"'thumb_up_outlined'",computed:!1},{value:"'thumb_up'",computed:!1},{value:"'trending_up'",computed:!1},{value:"'tune'",computed:!1},{value:"'swap_vert'",computed:!1},{value:"'verified_user'",computed:!1},{value:"'visibility_off'",computed:!1},{value:"'visibility'",computed:!1},{value:"'warning'",computed:!1},{value:"'watch_later'",computed:!1},{value:"'whatshot'",computed:!1},{value:"'work'",computed:!1}]},required:!0}}}},"./components/shared/shadow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _hexToRgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/shared/hexToRgba.js"),_SHADOWS$UMBRA={elevations:["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],opacity:.2},umbraElevations=_SHADOWS$UMBRA.elevations,umbraOpacity=_SHADOWS$UMBRA.opacity,_SHADOWS$PENUMBRA={elevations:["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],opacity:.14},penumbraElevations=_SHADOWS$PENUMBRA.elevations,penumbraOpacity=_SHADOWS$PENUMBRA.opacity,_SHADOWS$AMBIENT={elevations:["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"],opacity:.12},ambientElevations=_SHADOWS$AMBIENT.elevations,ambientOpacity=_SHADOWS$AMBIENT.opacity;const __WEBPACK_DEFAULT_EXPORT__=function shadow(){var elevation=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,color=arguments.length>1?arguments[1]:void 0;return function(_ref2){return function shadowWithTheme(_ref,elevation){var defaultColor=_ref.colors.neutral[700],color=arguments.length>2&&void 0!==arguments[2]?arguments[2]:defaultColor,umbra="".concat(umbraElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,umbraOpacity)),penumbra="".concat(penumbraElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,penumbraOpacity)),ambient="".concat(ambientElevations[elevation]," ").concat((0,_hexToRgba__WEBPACK_IMPORTED_MODULE_0__.A)(color,ambientOpacity));return"box-shadow: ".concat(umbra,", ").concat(penumbra,", ").concat(ambient,";")}(_ref2.theme,elevation,color)}}},"./node_modules/react-text-mask/dist/reactTextMask.js":function(module,__unused_webpack_exports,__webpack_require__){var e;module.exports=(e=__webpack_require__("./node_modules/react/index.js"),function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(f).default}});var p=n(r(11)),h=n(r(9)),y=n(r(5)),m=r(2),b=function(e){function t(){var e;i(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.setRef=u.setRef.bind(u),u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return u(t,e),l(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,y.default)(s({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,s={guide:t.guide,placeholderChar:t.placeholderChar,showMask:t.showMask},l="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0,m.isNil)(n)&&!(0,m.isNil)(e.pipe)||!(0,m.isNil)(n)&&(0,m.isNil)(e.pipe),f=o.toString()!==e.mask.toString(),c=Object.keys(s).some((function(t){return s[t]!==e[t]}))||f||l;(r!==this.inputElement.value||c)&&this.initTextMask()}},{key:"render",value:function e(){var t=this.props,e=t.render,r=o(t,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,e(this.setRef,s({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(p.default.PureComponent);t.default=b,b.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool},b.defaultProps={render:function(e,t){return p.default.createElement("input",s({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return null==e}function s(e){for(var t=[],r=void 0;-1!==(r=e.indexOf(c));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isArray=o,t.isString=i,t.isNumber=a,t.isNil=u,t.processCaretTraps=s;var l=r(1),f=[],c="[]"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(t)){if((void 0===t?"undefined":o(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,i.processCaretTraps)(t).maskWithoutCaretTraps}var n=r.guide,l=void 0===n||n,f=r.previousConformedValue,c=void 0===f?s:f,p=r.placeholderChar,d=void 0===p?a.placeholderChar:p,h=r.placeholder,v=void 0===h?(0,i.convertMaskToPlaceholder)(t,d):h,y=r.currentCaretPosition,m=r.keepCharPositions,b=!1===l&&void 0!==c,g=e.length,k=c.length,C=v.length,O=t.length,T=g-k,P=T>0,x=y+(P?-T:0),w=x+Math.abs(T);if(!0===m&&!P){for(var S=s,_=x;_<w;_++)v[_]===d&&(S+=d);e=e.slice(0,x)+S+e.slice(x,g)}for(var M=e.split(s).map((function(e,t){return{char:e,isNew:t>=x&&t<w}})),j=g-1;j>=0;j--){var E=M[j].char;E!==d&&E===v[j>=x&&k===O?j-T:j]&&M.splice(j,1)}var V=s,N=!1;e:for(var A=0;A<C;A++){var B=v[A];if(B===d){if(M.length>0)for(;M.length>0;){var I=M.shift(),F=I.char,q=I.isNew;if(F===d&&!0!==b){V+=d;continue e}if(t[A].test(F)){if(!0===m&&!1!==q&&c!==s&&!1!==l&&P){for(var D=M.length,L=null,W=0;W<D;W++){var J=M[W];if(J.char!==d&&!1===J.isNew)break;if(J.char===d){L=W;break}}null!==L?(V+=F,M.splice(L,1)):A--}else V+=F;continue e}N=!0}!1===b&&(V+=v.substr(A,C));break}V+=B}if(b&&!1===P){for(var U=null,H=0;H<V.length;H++)v[H]===d&&(U=H);V=null!==U?V.substr(0,U+1):s}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var i=r(2),a=r(1),u=[],s=""},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===s||!f.length)return 0;var m=f.length,b=r.length,g=p.length,k=l.length,C=m-b,O=C>0;if(C>1&&!O&&0!==b)return s;var w=0,S=void 0,_=void 0;if(!O||r!==l&&l!==p){var M=l.toLowerCase(),R=f.toLowerCase().substr(0,s).split(o).filter((function(e){return-1!==M.indexOf(e)}));_=R[R.length-1];var V=a.substr(0,R.length).split(o).filter((function(e){return e!==c})).length,N=p.substr(0,R.length).split(o).filter((function(e){return e!==c})).length,A=N!==V,B=void 0!==a[R.length-1]&&void 0!==p[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==p[R.length-1]&&a[R.length-1]===p[R.length-2];!O&&(A||B)&&V>0&&p.indexOf(_)>-1&&void 0!==f[s]&&(S=!0,_=f[s]);for(var I=h.map((function(e){return M[e]})),F=I.filter((function(e){return e===_})).length,q=R.filter((function(e){return e===_})).length,D=p.substr(0,p.indexOf(c)).split(o).filter((function(e,t){return e===_&&f[t]!==e})).length,L=D+q+F+(S?1:0),W=0,J=0;J<k&&(w=J+1,M[J]===_&&W++,!(W>=L));J++);}else w=s-C;if(O){for(var H=w,Y=w;Y<=g;Y++)if(p[Y]===c&&(H=Y),p[Y]===c||-1!==y.indexOf(Y)||Y===g)return H}else if(S){for(var z=w-1;z>=0;z--)if(l[z]===_||-1!==y.indexOf(z)||0===z)return z}else for(var G=w;G>=0;G--)if(p[G-1]===c||-1!==y.indexOf(G)||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,l=n.mask,c=n.guide,y=n.pipe,b=n.placeholderChar,g=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,C=void 0!==k&&k,O=n.showMask,T=void 0!==O&&O;if(void 0===r&&(r=o.value),r!==t.previousConformedValue){(void 0===l?"undefined":s(l))===m&&void 0!==l.pipe&&void 0!==l.mask&&(y=l.pipe,l=l.mask);var P=void 0,x=void 0;if(l instanceof Array&&(P=(0,d.convertMaskToPlaceholder)(l,g)),!1!==l){var w=a(r),S=o.selectionEnd,_=t.previousConformedValue,M=t.previousPlaceholder,j=void 0;if((void 0===l?"undefined":s(l))===h.strFunction){if(!1===(x=l(w,{currentCaretPosition:S,previousConformedValue:_,placeholderChar:g})))return;var E=(0,d.processCaretTraps)(x);x=E.maskWithoutCaretTraps,j=E.indexes,P=(0,d.convertMaskToPlaceholder)(x,g)}else x=l;var N={previousConformedValue:_,guide:c,placeholderChar:g,pipe:y,placeholder:P,currentCaretPosition:S,keepCharPositions:C},B=(0,p.default)(w,x,N).conformedValue,I=(void 0===y?"undefined":s(y))===h.strFunction,F={};I&&(!1===(F=y(B,u({rawValue:w},N)))?F={value:_,rejected:!0}:(0,d.isString)(F)&&(F={value:F}));var q=I?F.value:B,D=(0,f.default)({previousConformedValue:_,previousPlaceholder:M,conformedValue:q,placeholder:P,rawValue:w,currentCaretPosition:S,placeholderChar:g,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:j}),J=q===P&&0===D?T?P:v:q;t.previousConformedValue=J,t.previousPlaceholder=P,o.value!==J&&(o.value=J,i(o,D))}}}}}function i(e,t){document.activeElement===e&&(b?g((function(){return e.setSelectionRange(t,t,y)}),0):e.setSelectionRange(t,t,y))}function a(e){if((0,d.isString)(e))return e;if((0,d.isNumber)(e))return String(e);if(null==e)return v;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var f=n(r(4)),p=n(r(3)),d=r(2),h=r(1),v="",y="none",m="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,i,a,u,s){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,s],c=0;(l=new Error(t.replace(/%s/g,(function(){return f[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&Symbol.iterator,e.exports=r(8)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(t,r){t.exports=e}]))}}]);