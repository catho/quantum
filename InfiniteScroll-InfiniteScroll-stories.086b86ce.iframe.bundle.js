/*! For license information please see InfiniteScroll-InfiniteScroll-stories.086b86ce.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_catho_quantum=self.webpackChunk_catho_quantum||[]).push([[1762],{"./stories/InfiniteScroll/InfiniteScroll.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Reverse:()=>Reverse,WithLoaderIndicator:()=>WithLoaderIndicator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_InfiniteScroll__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/InfiniteScroll/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["reverse","loading"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}const __WEBPACK_DEFAULT_EXPORT__={title:"InfiniteScroll",component:_components_InfiniteScroll__WEBPACK_IMPORTED_MODULE_2__.A};var itemsMock=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],fakePromisse=function fakePromisse(){return new Promise((function(resolve){setTimeout(resolve,1e3)}))},Template=function Template(args){var reverse=args.reverse,loading=args.loading,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(args,_excluded),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(reverse?itemsMock.slice(0,10).reverse():itemsMock.slice(0,10)),2),items=_useState2[0],setItems=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),loadingList=_useState4[0],setLoadingList=_useState4[1],pushItems=function(){var _ref=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(items.length<20)){_context.next=7;break}if(setLoadingList(!0),!loading){_context.next=5;break}return _context.next=5,fakePromisse();case 5:setItems(reverse?[].concat(itemsMock).reverse():[].concat(itemsMock)),setLoadingList(!1);case 7:case"end":return _context.stop()}}),_callee)})));return function pushItems(){return _ref.apply(this,arguments)}}();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:180},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_InfiniteScroll__WEBPACK_IMPORTED_MODULE_2__.A,_objectSpread(_objectSpread({reverse,loading:loadingList},rest),{},{onScrollEnd:pushItems,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{children:items.map((function(number){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:number},number)}))})}))})};Template.displayName="Template";var Default=Template.bind({}),Reverse=Template.bind({});Reverse.args={reverse:!0};var WithLoaderIndicator=Template.bind({});WithLoaderIndicator.args={loading:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const {\n    reverse,\n    loading,\n    ...rest\n  } = args;\n  const [items, setItems] = useState(reverse ? itemsMock.slice(0, 10).reverse() : itemsMock.slice(0, 10));\n  const [loadingList, setLoadingList] = useState(false);\n  const pushItems = async () => {\n    if (items.length < 20) {\n      setLoadingList(true);\n      if (loading) {\n        await fakePromisse();\n      }\n      setItems(reverse ? [...itemsMock].reverse() : [...itemsMock]);\n      setLoadingList(false);\n    }\n  };\n  return <div style={{\n    height: 180\n  }}>\n      <InfiniteScroll reverse={reverse} loading={loadingList} {...rest} onScrollEnd={pushItems}>\n        <ul>\n          {items.map(number => <li key={number}>{number}</li>)}\n        </ul>\n      </InfiniteScroll>\n    </div>;\n}",...Default.parameters?.docs?.source}}},Reverse.parameters={...Reverse.parameters,docs:{...Reverse.parameters?.docs,source:{originalSource:"args => {\n  const {\n    reverse,\n    loading,\n    ...rest\n  } = args;\n  const [items, setItems] = useState(reverse ? itemsMock.slice(0, 10).reverse() : itemsMock.slice(0, 10));\n  const [loadingList, setLoadingList] = useState(false);\n  const pushItems = async () => {\n    if (items.length < 20) {\n      setLoadingList(true);\n      if (loading) {\n        await fakePromisse();\n      }\n      setItems(reverse ? [...itemsMock].reverse() : [...itemsMock]);\n      setLoadingList(false);\n    }\n  };\n  return <div style={{\n    height: 180\n  }}>\n      <InfiniteScroll reverse={reverse} loading={loadingList} {...rest} onScrollEnd={pushItems}>\n        <ul>\n          {items.map(number => <li key={number}>{number}</li>)}\n        </ul>\n      </InfiniteScroll>\n    </div>;\n}",...Reverse.parameters?.docs?.source}}},WithLoaderIndicator.parameters={...WithLoaderIndicator.parameters,docs:{...WithLoaderIndicator.parameters?.docs,source:{originalSource:"args => {\n  const {\n    reverse,\n    loading,\n    ...rest\n  } = args;\n  const [items, setItems] = useState(reverse ? itemsMock.slice(0, 10).reverse() : itemsMock.slice(0, 10));\n  const [loadingList, setLoadingList] = useState(false);\n  const pushItems = async () => {\n    if (items.length < 20) {\n      setLoadingList(true);\n      if (loading) {\n        await fakePromisse();\n      }\n      setItems(reverse ? [...itemsMock].reverse() : [...itemsMock]);\n      setLoadingList(false);\n    }\n  };\n  return <div style={{\n    height: 180\n  }}>\n      <InfiniteScroll reverse={reverse} loading={loadingList} {...rest} onScrollEnd={pushItems}>\n        <ul>\n          {items.map(number => <li key={number}>{number}</li>)}\n        </ul>\n      </InfiniteScroll>\n    </div>;\n}",...WithLoaderIndicator.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Reverse","WithLoaderIndicator"]},"./components/CircularLoader/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_CircularLoader});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),shared_theme=__webpack_require__("./components/shared/theme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),getSizePixels=function getSizePixels(size,gutter){return{medium:2*gutter,large:3*gutter,xlarge:4*gutter,xxlarge:5*gutter,xxxlarge:6*gutter}[size]},Content=styled_components_browser_esm.Ay.svg.withConfig({displayName:"CircularLoader__Content",componentId:"sc-eiglhs-0"})(["left:50%;overflow:hidden;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%;height:100%;",""],(function(_ref){var color=_ref.color;return"\n    color: ".concat(color,";\n  ")})),circularRotate=(0,styled_components_browser_esm.i7)(["100%{transform:rotate(360deg);}"]),circularDash=(0,styled_components_browser_esm.i7)(["0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-125px;}"]),circleProps_cx=44,circleProps_cy=44,circleProps_r=20.2,circleProps_strokeWidth=3.6,Circle=styled_components_browser_esm.Ay.circle.withConfig({displayName:"CircularLoader__Circle",componentId:"sc-eiglhs-1"})(["animation:"," 1.4s ease-in-out infinite;cx:","px;cy:","px;fill:none;line-height:1;r:","px;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:","px;stroke:currentColor;",""],circularDash,circleProps_cx,circleProps_cy,circleProps_r,circleProps_strokeWidth,(function(_ref2){var color=_ref2.color;return"\n    color: ".concat(color,";\n  ")})),Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"CircularLoader__Wrapper",componentId:"sc-eiglhs-2"})(["animation:"," 1.4s linear infinite;position:relative;",""],circularRotate,(function(_ref3){var size=_ref3.size,gutter=_ref3.gutter;return"\n    height: ".concat(getSizePixels(size,gutter),"px;\n    width: ").concat(getSizePixels(size,gutter),"px; \n  ")})),CircularLoader=function CircularLoader(_ref4){var _ref4$size=_ref4.size,size=void 0===_ref4$size?"medium":_ref4$size,_ref4$skin=_ref4.skin,skin=void 0===_ref4$skin?"primary":_ref4$skin,_ref4$theme=_ref4.theme,theme=void 0===_ref4$theme?{colors:shared_theme.colors,gutter:shared_theme.gutter}:_ref4$theme,color=theme.colors[skin][700],gutter=theme.gutter,cx=circleProps_cx,cy=circleProps_cy,r=circleProps_r,strokeWidth=circleProps_strokeWidth;return(0,jsx_runtime.jsx)(Wrapper,{size,gutter,role:"progressbar",children:(0,jsx_runtime.jsx)(Content,{color,viewBox:"22 22 44 44",children:(0,jsx_runtime.jsx)(Circle,{strokeWidth,cx,cy,r,color})})})};CircularLoader.displayName="CircularLoader",CircularLoader.propTypes={size:prop_types_default().oneOf(["medium","large","xlarge","xxlarge","xxxlarge"]),skin:prop_types_default().oneOf(["primary","secondary"]),theme:prop_types_default().shape({colors:prop_types_default().object,gutter:prop_types_default().number})};const CircularLoader_CircularLoader=CircularLoader;CircularLoader.__docgenInfo={description:"",methods:[],displayName:"CircularLoader",props:{size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1},{value:"'xxlarge'",computed:!1},{value:"'xxxlarge'",computed:!1}]},required:!1},skin:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},theme:{defaultValue:{value:"{\n  colors,\n  gutter: defaultGutter,\n}",computed:!1},description:"Edit only for themification",type:{name:"shape",value:{colors:{name:"object",required:!1},gutter:{name:"number",required:!1}}},required:!1}}};const components_CircularLoader=CircularLoader_CircularLoader;CircularLoader_CircularLoader.__docgenInfo={description:"",methods:[],displayName:"CircularLoader",props:{size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1},{value:"'xxlarge'",computed:!1},{value:"'xxxlarge'",computed:!1}]},required:!1},skin:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},theme:{defaultValue:{value:"{\n  colors,\n  gutter: defaultGutter,\n}",computed:!1},description:"Edit only for themification",type:{name:"shape",value:{colors:{name:"object",required:!1},gutter:{name:"number",required:!1}}},required:!1}}}},"./components/InfiniteScroll/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_InfiniteScroll});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),CircularLoader=__webpack_require__("./components/CircularLoader/index.js"),theme=__webpack_require__("./components/shared/theme.js"),hexToRgba=__webpack_require__("./components/shared/hexToRgba.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),neutral=theme.colors.neutral,small=theme.spacing.small,LoaderWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"Loader__LoaderWrapper",componentId:"sc-nk1t1f-0"})(["display:flex;align-items:center;justify-content:center;height:100%;padding:","px 0;background-color:",";"],small,(0,hexToRgba.A)(neutral[300],.25)),Loader=function Loader(){return(0,jsx_runtime.jsx)(LoaderWrapper,{"aria-live":"polite","aria-busy":"true",children:(0,jsx_runtime.jsx)(CircularLoader.A,{skin:"primary",size:"large"})})};Loader.displayName="Loader";const InfiniteScroll_Loader=Loader;function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}Loader.__docgenInfo={description:"",methods:[],displayName:"Loader"};var DEFAULT_OPTIONS={config:{attributes:!0,childList:!0,subtree:!0}};function InfiniteScroll_slicedToArray(r,e){return function InfiniteScroll_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function InfiniteScroll_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function InfiniteScroll_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return InfiniteScroll_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?InfiniteScroll_arrayLikeToArray(r,a):void 0}}(r,e)||function InfiniteScroll_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function InfiniteScroll_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var InfiniteScrollWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"InfiniteScroll__InfiniteScrollWrapper",componentId:"sc-otcxrg-0"})(["display:flex;flex-direction:column;height:100%;scroll-behavior:smooth;overflow-x:none;overflow-y:auto;"]),InfiniteScrollBase=function InfiniteScrollBase(_ref,ref){var children=_ref.children,_ref$reverse=_ref.reverse,reverse=void 0!==_ref$reverse&&_ref$reverse,_ref$onScrollEnd=_ref.onScrollEnd,onScrollEnd=void 0===_ref$onScrollEnd?function(){}:_ref$onScrollEnd,loading=_ref.loading,_useState2=InfiniteScroll_slicedToArray((0,react.useState)(),2),scrollHeight=_useState2[0],setScrollHeight=_useState2[1],_useState4=InfiniteScroll_slicedToArray((0,react.useState)(!1),2),dispatchObserverEvent=_useState4[0],setDispatchObserverEvent=_useState4[1],wrapperRef=(0,react.useRef)(),triggerRef=(0,react.useRef)(),handleObserver=function handleObserver(_ref2){var target=InfiniteScroll_slicedToArray(_ref2,1)[0];target.isIntersecting&&target.intersectionRatio&&setDispatchObserverEvent(!0)},handleMutations=(0,react.useCallback)((function(mutations){if((null==mutations?void 0:mutations.length)>1){var wrapperEl=wrapperRef.current;setScrollHeight((function(state){return wrapperEl.scrollHeight-state}))}}),[]);reverse&&function useMutationObservable(_ref){var targetEl=_ref.targetEl,callback=_ref.callback,_ref$options=_ref.options,options=void 0===_ref$options?DEFAULT_OPTIONS:_ref$options,_useState2=_slicedToArray((0,react.useState)(void 0),2),observer=_useState2[0],setObserver=_useState2[1];(0,react.useEffect)((function(){var obs=new MutationObserver(callback);setObserver(obs)}),[callback,options,setObserver]),(0,react.useEffect)((function(){if(observer&&targetEl){var config=options.config;return observer.observe(targetEl,config),function(){observer&&observer.disconnect()}}}),[observer,targetEl,options])}({targetEl:wrapperRef.current,callback:handleMutations});var handleScrollToStart=(0,react.useCallback)((function(){var _wrapperRef$current;setScrollHeight(null==wrapperRef||null===(_wrapperRef$current=wrapperRef.current)||void 0===_wrapperRef$current?void 0:_wrapperRef$current.scrollHeight)}),[]);return(0,react.useImperativeHandle)(ref,(function(){return{scrollToStart:handleScrollToStart}})),(0,react.useEffect)((function(){var wrapperEl=wrapperRef.current,triggerEl=triggerRef.current,intersectionObserver=new IntersectionObserver(handleObserver,{root:wrapperEl,threshold:1});return intersectionObserver.observe(triggerEl),reverse&&setScrollHeight(wrapperEl.scrollHeight),function(){intersectionObserver.unobserve(triggerEl)}}),[]),(0,react.useEffect)((function(){reverse&&InfiniteScrollBase.handleScrollPosition(wrapperRef.current,scrollHeight)}),[scrollHeight]),(0,react.useEffect)((function(){dispatchObserverEvent&&(onScrollEnd(),setDispatchObserverEvent(!1))}),[dispatchObserverEvent]),reverse?(0,jsx_runtime.jsxs)(InfiniteScrollWrapper,{ref:wrapperRef,children:[loading&&(0,jsx_runtime.jsx)(InfiniteScroll_Loader,{}),(0,jsx_runtime.jsx)("span",{ref:triggerRef}),children]}):(0,jsx_runtime.jsxs)(InfiniteScrollWrapper,{ref:wrapperRef,children:[children,(0,jsx_runtime.jsx)("span",{ref:triggerRef}),loading&&(0,jsx_runtime.jsx)(InfiniteScroll_Loader,{})]})};InfiniteScrollBase.displayName="InfiniteScrollBase",InfiniteScrollBase.handleScrollPosition=function(element,height){element.scrollTo({top:height,behavior:"instant"})};var InfiniteScroll=(0,react.forwardRef)(InfiniteScrollBase);InfiniteScroll.propTypes={children:prop_types_default().element.isRequired,reverse:prop_types_default().bool,onScrollEnd:prop_types_default().func};const InfiniteScroll_InfiniteScroll=InfiniteScroll;InfiniteScroll.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll",props:{reverse:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onScrollEnd:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"element"},required:!0}}};const components_InfiniteScroll=InfiniteScroll_InfiniteScroll;InfiniteScroll_InfiniteScroll.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll",props:{reverse:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onScrollEnd:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"element"},required:!0}}}}}]);