(self.webpackChunk_catho_quantum=self.webpackChunk_catho_quantum||[]).push([[9495],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,di:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.di,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./stories/shared/EvaluationForm/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_components_Accordion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/Accordion/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),urlGenerator=function urlGenerator(componentName){return"https://docs.google.com/forms/d/e/1FAIpQLSewdS_VhSt_JSFOxiuiIc-auEj0MQwn_P_WiXYhAEAE1DqJhg/viewform?entry.1112120969=".concat(componentName)},IFrame=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.iframe.withConfig({displayName:"EvaluationForm__IFrame",componentId:"sc-uifger-0"})(["width:100%;height:500px;border:0;"]),EvaluationForm=function EvaluationForm(_ref){var componentName=_ref.componentName;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.di,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Accordion__WEBPACK_IMPORTED_MODULE_3__.A,{items:[{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IFrame,{title:"Rate our Documentation",src:"".concat(urlGenerator(componentName)),children:"Carregando…"})})}),title:"Rate our Documentation ⭐ "}]})})};EvaluationForm.displayName="EvaluationForm";const __WEBPACK_DEFAULT_EXPORT__=EvaluationForm;EvaluationForm.__docgenInfo={description:"",methods:[],displayName:"EvaluationForm"}},"./stories/shared/Header.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>shared_Header});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),theme=__webpack_require__("./components/shared/theme.js");const arrow_left_namespaceObject=__webpack_require__.p+"static/media/arrow-left.2b756d48.png",arrow_right_namespaceObject=__webpack_require__.p+"static/media/arrow-right.925cf563.png";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),large=theme.spacing.large,_theme$colors=theme.colors,secondary=_theme$colors.secondary,neutral=_theme$colors.neutral,HeaderWrapper=styled_components_browser_esm.Ay.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1nweprh-0"})(["position:relative;display:flex;flex-direction:column;align-items:flex-start;margin-bottom:","px;background:linear-gradient( 101.73deg,#0023a0 25.56%,"," 99.08% );z-index:0;&::before,&::after{content:'';position:absolute;width:100%;height:100%;}&::before{background:url(",") no-repeat left top;}&::after{background:url(",") no-repeat right bottom;}& > div{width:100%;z-index:1;}h1,p{color:",";}"],large,secondary[700],arrow_left_namespaceObject,arrow_right_namespaceObject,neutral[0]),Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"Header__Container",componentId:"sc-1nweprh-1"})(["margin:0 auto;max-width:87%;padding-bottom:90px;"]),Title=styled_components_browser_esm.Ay.h1.withConfig({displayName:"Header__Title",componentId:"sc-1nweprh-2"})(["align-items:center;color:#294661;display:flex;flex-direction:row;font-size:40px;font-weight:700;letter-spacing:-1px;line-height:60px;margin:0 0 30px 0;padding:90px 0 0 0;text-align:left;"," ",""],(function(_ref){return"h2"===_ref.as&&"font-size: 30px;"}),(function(_ref2){return"h3"===_ref2.as&&"font-size: 24px;"})),Header=function Header(_ref3){var title=_ref3.title,_ref3$children=_ref3.children,children=void 0===_ref3$children?void 0:_ref3$children;return(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsx)(HeaderWrapper,{children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)("p",{children})]})})})};Header.displayName="Header",Header.propTypes={title:prop_types_default().string.isRequired,children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node])};const shared_Header=Header;Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1},title:{description:"",type:{name:"string"},required:!0}}}},"./stories/Breakpoints/Breakpoints.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Breakpoints});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Header=__webpack_require__("./stories/shared/Header.jsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),breakpoints=__webpack_require__("./components/shared/breakpoints.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var mediaQueries=(0,__webpack_require__("./components/Grid/sub-components/shared/media.js").P)(breakpoints.A),StyledDivExample=styled_components_browser_esm.Ay.div.withConfig({displayName:"styles__StyledDivExample",componentId:"sc-gryuuq-0"})(["padding:15px 20px;color:white;background-color:red;"," "," ",""],mediaQueries.small(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    background-color: blue;\n  "]))),mediaQueries.medium(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    background-color: green;\n  "]))),mediaQueries.large(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    background-color: black;\n  "])))),EvaluationForm=__webpack_require__("./stories/shared/EvaluationForm/index.jsx");function _createMdxContent(props){const _components=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundation/Breakpoints"}),"\n",(0,jsx_runtime.jsxs)(Header.A,{title:"Breakpoints",children:[(0,jsx_runtime.jsx)(_components.p,{children:"Breakpoints - Quantum provides a breakpoints object to use with\nstyled components."}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(_components.p,{children:"You can create different styled rules following Quantum breakpoints."})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Firstly, import ",(0,jsx_runtime.jsx)(_components.code,{children:"BREAKPOINTS"})," from ",(0,jsx_runtime.jsx)(_components.code,{children:"shared"}),". Second\nimport ",(0,jsx_runtime.jsx)(_components.code,{children:"query"})," function from ",(0,jsx_runtime.jsx)(_components.code,{children:"Grid"})," shared."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import BREAKPOINTS from '@catho/quantum/shared/breakpoints';\nimport { query } from '@catho/quantum/Grid/sub-components/shared';\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Create a constant variable calling ",(0,jsx_runtime.jsx)(_components.code,{children:"query"})," with ",(0,jsx_runtime.jsx)(_components.code,{children:"BREAKPOINTS"})," as parameter. Then, create a styled component\nand introduce the variable. In this example, we will use a ",(0,jsx_runtime.jsx)(_components.code,{children:"div"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The variable provides ",(0,jsx_runtime.jsx)(_components.code,{children:"min-widths"})," media queries with the following sizes:"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"small: 600px"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"medium: 1024px"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"large: 1440px"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In each resolution we will change the div background color:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Blue color for ",(0,jsx_runtime.jsx)(_components.code,{children:"small"})," resolution."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Green color for ",(0,jsx_runtime.jsx)(_components.code,{children:"medium"})," resolution."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Black color for ",(0,jsx_runtime.jsx)(_components.code,{children:"large"})," resolution."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"const mediaQueries = query(BREAKPOINTS);\nconst StyledDiv = styled.div`\n  padding: 15px 20px;\n  color: white;\n  background-color: red;\n\n  ${mediaQueries.small`\n    background-color: blue;\n  `}\n\n  ${mediaQueries.medium`\n    background-color: green;\n  `}\n\n  ${mediaQueries.large`\n    background-color: black;\n  `}\n`;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Test the div in different sizes:"}),"\n",(0,jsx_runtime.jsx)(StyledDivExample,{children:"Test me in different sizes =)"}),"\n",(0,jsx_runtime.jsx)(EvaluationForm.A,{componentName:"Breakpoints"})]})}const Breakpoints=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/slugify/slugify.js":function(module){var factory;factory=function(){var charMap=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),locales=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function replace(string,options){if("string"!=typeof string)throw new Error("slugify: string argument expected");var locale=locales[(options="string"==typeof options?{replacement:options}:options||{}).locale]||{},replacement=void 0===options.replacement?"-":options.replacement,trim=void 0===options.trim||options.trim,slug=string.normalize().split("").reduce((function(result,ch){var appendChar=locale[ch];return void 0===appendChar&&(appendChar=charMap[ch]),void 0===appendChar&&(appendChar=ch),appendChar===replacement&&(appendChar=" "),result+appendChar.replace(options.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return options.strict&&(slug=slug.replace(/[^A-Za-z0-9\s]/g,"")),trim&&(slug=slug.trim()),slug=slug.replace(/\s+/g,replacement),options.lower&&(slug=slug.toLowerCase()),slug}return replace.extend=function(customMap){Object.assign(charMap,customMap)},replace},module.exports=factory(),module.exports.default=factory()}}]);