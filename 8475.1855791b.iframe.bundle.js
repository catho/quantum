"use strict";(self.webpackChunk_catho_quantum=self.webpackChunk_catho_quantum||[]).push([[8475],{"./node_modules/downshift/dist/downshift.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>downshift_esm});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),assertThisInitialized=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/react-is/index.js");function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}var idCounter=0;function cbToCb(cb){return"function"==typeof cb?cb:noop}function noop(){}function scrollIntoView(node,menuNode){if(null!==node){var actions=function(e,i){var o=window,l=i.scrollMode,d=i.block,f=i.inline,h=i.boundary,u=i.skipOverflowHiddenElements,s="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var a,c,g=document.scrollingElement||document.documentElement,p=[],m=e;t(m)&&s(m);){if((m=null==(c=(a=m).parentElement)?a.getRootNode().host||null:c)===g){p.push(m);break}null!=m&&m===document.body&&n(m)&&!n(document.documentElement)||null!=m&&n(m,u)&&p.push(m)}for(var w=o.visualViewport?o.visualViewport.width:innerWidth,v=o.visualViewport?o.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),y=b.height,E=b.width,M=b.top,V=b.right,x=b.bottom,I=b.left,C="start"===d||"nearest"===d?M:"end"===d?x:M+y/2,R="center"===f?I+E/2:"end"===f?V:I,T=[],k=0;k<p.length;k++){var B=p[k],D=B.getBoundingClientRect(),O=D.height,X=D.width,Y=D.top,L=D.right,S=D.bottom,j=D.left;if("if-needed"===l&&M>=0&&I>=0&&x<=v&&V<=w&&M>=Y&&x<=S&&I>=j&&V<=L)return T;var N=getComputedStyle(B),q=parseInt(N.borderLeftWidth,10),z=parseInt(N.borderTopWidth,10),A=parseInt(N.borderRightWidth,10),F=parseInt(N.borderBottomWidth,10),G=0,J=0,K="offsetWidth"in B?B.offsetWidth-B.clientWidth-q-A:0,P="offsetHeight"in B?B.offsetHeight-B.clientHeight-z-F:0,Q="offsetWidth"in B?0===B.offsetWidth?0:X/B.offsetWidth:0,U="offsetHeight"in B?0===B.offsetHeight?0:O/B.offsetHeight:0;if(g===B)G="start"===d?C:"end"===d?C-v:"nearest"===d?r(H,H+v,v,z,F,H+C,H+C+y,y):C-v/2,J="start"===f?R:"center"===f?R-w/2:"end"===f?R-w:r(W,W+w,w,q,A,W+R,W+R+E,E),G=Math.max(0,G+H),J=Math.max(0,J+W);else{G="start"===d?C-Y-z:"end"===d?C-S+F+P:"nearest"===d?r(Y,S,O,z,F+P,C,C+y,y):C-(Y+O/2)+P/2,J="start"===f?R-j-q:"center"===f?R-(j+X/2)+K/2:"end"===f?R-L+A+K:r(j,L,X,q,A+K,R,R+E,E);var Z=B.scrollLeft,$=B.scrollTop;C+=$-(G=Math.max(0,Math.min($+G/U,B.scrollHeight-O/U+P))),R+=Z-(J=Math.max(0,Math.min(Z+J/Q,B.scrollWidth-X/Q+K)))}T.push({el:B,top:G,left:J})}return T}(node,{boundary:menuNode,block:"nearest",scrollMode:"if-needed"});actions.forEach((function(_ref){var el=_ref.el,top=_ref.top,left=_ref.left;el.scrollTop=top,el.scrollLeft=left}))}}function isOrContainsNode(parent,child){return parent===child||parent.contains&&parent.contains(child)}function debounce(fn,time){var timeoutId;function cancel(){timeoutId&&clearTimeout(timeoutId)}function wrapper(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];cancel(),timeoutId=setTimeout((function(){timeoutId=null,fn.apply(void 0,args)}),time)}return wrapper.cancel=cancel,wrapper}function callAllEventHandlers(){for(var _len2=arguments.length,fns=new Array(_len2),_key2=0;_key2<_len2;_key2++)fns[_key2]=arguments[_key2];return function(event){for(var _len3=arguments.length,args=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++)args[_key3-1]=arguments[_key3];return fns.some((function(fn){return fn&&fn.apply(void 0,[event].concat(args)),event.preventDownshiftDefault||event.hasOwnProperty("nativeEvent")&&event.nativeEvent.preventDownshiftDefault}))}}function handleRefs(){for(var _len4=arguments.length,refs=new Array(_len4),_key4=0;_key4<_len4;_key4++)refs[_key4]=arguments[_key4];return function(node){refs.forEach((function(ref){"function"==typeof ref?ref(node):ref&&(ref.current=node)}))}}function getA11yStatusMessage(_ref2){var isOpen=_ref2.isOpen,selectedItem=_ref2.selectedItem,resultCount=_ref2.resultCount,previousResultCount=_ref2.previousResultCount,itemToString=_ref2.itemToString;return isOpen?resultCount?resultCount!==previousResultCount?resultCount+" result"+(1===resultCount?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":selectedItem?itemToString(selectedItem):""}function unwrapArray(arg,defaultValue){return!(arg=Array.isArray(arg)?arg[0]:arg)&&defaultValue?defaultValue:arg}function isDOMElement(element){return"string"==typeof element.type}function getElementProps(element){return element.props}var stateKeys=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function pickState(state){void 0===state&&(state={});var result={};return stateKeys.forEach((function(k){state.hasOwnProperty(k)&&(result[k]=state[k])})),result}function normalizeArrowKey(event){var key=event.key,keyCode=event.keyCode;return keyCode>=37&&keyCode<=40&&0!==key.indexOf("Arrow")?"Arrow"+key:key}function getNextWrappingIndex(moveAmount,baseIndex,itemCount){var itemsLastIndex=itemCount-1;("number"!=typeof baseIndex||baseIndex<0||baseIndex>=itemCount)&&(baseIndex=moveAmount>0?-1:itemsLastIndex+1);var newIndex=baseIndex+moveAmount;return newIndex<0?newIndex=itemsLastIndex:newIndex>itemsLastIndex&&(newIndex=0),newIndex}var cleanupStatus=debounce((function(){getStatusDiv().textContent=""}),500);function setStatus(status,documentProp){var div=getStatusDiv(documentProp);status&&(div.textContent=status,cleanupStatus())}function getStatusDiv(documentProp){void 0===documentProp&&(documentProp=document);var statusDiv=documentProp.getElementById("a11y-status-message");return statusDiv||((statusDiv=documentProp.createElement("div")).setAttribute("id","a11y-status-message"),statusDiv.setAttribute("role","status"),statusDiv.setAttribute("aria-live","polite"),statusDiv.setAttribute("aria-relevant","additions text"),Object.assign(statusDiv.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),documentProp.body.appendChild(statusDiv),statusDiv)}var stateChangeTypes=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16}),Downshift=function(){var Downshift=function(_Component){function Downshift(_props){var _this=_Component.call(this,_props)||this;_this.id=_this.props.id||"downshift-"+function generateId(){return String(idCounter++)}(),_this.menuId=_this.props.menuId||_this.id+"-menu",_this.labelId=_this.props.labelId||_this.id+"-label",_this.inputId=_this.props.inputId||_this.id+"-input",_this.getItemId=_this.props.getItemId||function(index){return _this.id+"-item-"+index},_this.input=null,_this.items=[],_this.itemCount=null,_this.previousResultCount=0,_this.timeoutIds=[],_this.internalSetTimeout=function(fn,time){var id=setTimeout((function(){_this.timeoutIds=_this.timeoutIds.filter((function(i){return i!==id})),fn()}),time);_this.timeoutIds.push(id)},_this.setItemCount=function(count){_this.itemCount=count},_this.unsetItemCount=function(){_this.itemCount=null},_this.setHighlightedIndex=function(highlightedIndex,otherStateToSet){void 0===highlightedIndex&&(highlightedIndex=_this.props.defaultHighlightedIndex),void 0===otherStateToSet&&(otherStateToSet={}),otherStateToSet=pickState(otherStateToSet),_this.internalSetState((0,esm_extends.A)({highlightedIndex},otherStateToSet))},_this.clearSelection=function(cb){_this.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:_this.props.defaultHighlightedIndex,isOpen:_this.props.defaultIsOpen},cb)},_this.selectItem=function(item,otherStateToSet,cb){otherStateToSet=pickState(otherStateToSet),_this.internalSetState((0,esm_extends.A)({isOpen:_this.props.defaultIsOpen,highlightedIndex:_this.props.defaultHighlightedIndex,selectedItem:item,inputValue:_this.props.itemToString(item)},otherStateToSet),cb)},_this.selectItemAtIndex=function(itemIndex,otherStateToSet,cb){var item=_this.items[itemIndex];null!=item&&_this.selectItem(item,otherStateToSet,cb)},_this.selectHighlightedItem=function(otherStateToSet,cb){return _this.selectItemAtIndex(_this.getState().highlightedIndex,otherStateToSet,cb)},_this.internalSetState=function(stateToSet,cb){var isItemSelected,onChangeArg,onStateChangeArg={},isStateToSetFunction="function"==typeof stateToSet;return!isStateToSetFunction&&stateToSet.hasOwnProperty("inputValue")&&_this.props.onInputValueChange(stateToSet.inputValue,(0,esm_extends.A)({},_this.getStateAndHelpers(),{},stateToSet)),_this.setState((function(state){state=_this.getState(state);var newStateToSet=isStateToSetFunction?stateToSet(state):stateToSet;newStateToSet=_this.props.stateReducer(state,newStateToSet),isItemSelected=newStateToSet.hasOwnProperty("selectedItem");var nextState={},nextFullState={};return isItemSelected&&newStateToSet.selectedItem!==state.selectedItem&&(onChangeArg=newStateToSet.selectedItem),newStateToSet.type=newStateToSet.type||0,Object.keys(newStateToSet).forEach((function(key){state[key]!==newStateToSet[key]&&(onStateChangeArg[key]=newStateToSet[key]),"type"!==key&&(nextFullState[key]=newStateToSet[key],_this.isControlledProp(key)||(nextState[key]=newStateToSet[key]))})),isStateToSetFunction&&newStateToSet.hasOwnProperty("inputValue")&&_this.props.onInputValueChange(newStateToSet.inputValue,(0,esm_extends.A)({},_this.getStateAndHelpers(),{},newStateToSet)),nextState}),(function(){cbToCb(cb)(),Object.keys(onStateChangeArg).length>1&&_this.props.onStateChange(onStateChangeArg,_this.getStateAndHelpers()),isItemSelected&&_this.props.onSelect(stateToSet.selectedItem,_this.getStateAndHelpers()),void 0!==onChangeArg&&_this.props.onChange(onChangeArg,_this.getStateAndHelpers()),_this.props.onUserAction(onStateChangeArg,_this.getStateAndHelpers())}))},_this.rootRef=function(node){return _this._rootNode=node},_this.getRootProps=function(_temp,_temp2){var _extends2,_ref=void 0===_temp?{}:_temp,_ref$refKey=_ref.refKey,refKey=void 0===_ref$refKey?"ref":_ref$refKey,ref=_ref.ref,rest=(0,objectWithoutPropertiesLoose.A)(_ref,["refKey","ref"]),_ref2$suppressRefErro=(void 0===_temp2?{}:_temp2).suppressRefError,suppressRefError=void 0!==_ref2$suppressRefErro&&_ref2$suppressRefErro;_this.getRootProps.called=!0,_this.getRootProps.refKey=refKey,_this.getRootProps.suppressRefError=suppressRefError;var isOpen=_this.getState().isOpen;return(0,esm_extends.A)(((_extends2={})[refKey]=handleRefs(ref,_this.rootRef),_extends2.role="combobox",_extends2["aria-expanded"]=isOpen,_extends2["aria-haspopup"]="listbox",_extends2["aria-owns"]=isOpen?_this.menuId:null,_extends2["aria-labelledby"]=_this.labelId,_extends2),rest)},_this.keyDownHandlers={ArrowDown:function ArrowDown(event){var _this2=this;if(event.preventDefault(),this.getState().isOpen){var amount=event.shiftKey?5:1;this.moveHighlightedIndex(amount,{type:4})}else this.internalSetState({isOpen:!0,type:4},(function(){var itemCount=_this2.getItemCount();itemCount>0&&_this2.setHighlightedIndex(getNextWrappingIndex(1,_this2.getState().highlightedIndex,itemCount),{type:4})}))},ArrowUp:function ArrowUp(event){var _this3=this;if(event.preventDefault(),this.getState().isOpen){var amount=event.shiftKey?-5:-1;this.moveHighlightedIndex(amount,{type:3})}else this.internalSetState({isOpen:!0,type:3},(function(){var itemCount=_this3.getItemCount();itemCount>0&&_this3.setHighlightedIndex(getNextWrappingIndex(-1,_this3.getState().highlightedIndex,itemCount),{type:4})}))},Enter:function Enter(event){var _this$getState2=this.getState(),isOpen=_this$getState2.isOpen,highlightedIndex=_this$getState2.highlightedIndex;if(isOpen&&null!=highlightedIndex){event.preventDefault();var item=this.items[highlightedIndex],itemNode=this.getItemNodeFromIndex(highlightedIndex);if(null==item||itemNode&&itemNode.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}},Escape:function Escape(event){event.preventDefault(),this.reset({type:5,selectedItem:null,inputValue:""})}},_this.buttonKeyDownHandlers=(0,esm_extends.A)({},_this.keyDownHandlers,{" ":function _(event){event.preventDefault(),this.toggleMenu({type:12})}}),_this.inputKeyDownHandlers=(0,esm_extends.A)({},_this.keyDownHandlers,{Home:function Home(event){this.highlightFirstOrLastIndex(event,!0,{type:7})},End:function End(event){this.highlightFirstOrLastIndex(event,!1,{type:8})}}),_this.getToggleButtonProps=function(_temp3){var _ref3=void 0===_temp3?{}:_temp3,onClick=_ref3.onClick,onKeyDown=(_ref3.onPress,_ref3.onKeyDown),onKeyUp=_ref3.onKeyUp,onBlur=_ref3.onBlur,rest=(0,objectWithoutPropertiesLoose.A)(_ref3,["onClick","onPress","onKeyDown","onKeyUp","onBlur"]),isOpen=_this.getState().isOpen,enabledEventHandlers={onClick:callAllEventHandlers(onClick,_this.buttonHandleClick),onKeyDown:callAllEventHandlers(onKeyDown,_this.buttonHandleKeyDown),onKeyUp:callAllEventHandlers(onKeyUp,_this.buttonHandleKeyUp),onBlur:callAllEventHandlers(onBlur,_this.buttonHandleBlur)},eventHandlers=rest.disabled?{}:enabledEventHandlers;return(0,esm_extends.A)({type:"button",role:"button","aria-label":isOpen?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},eventHandlers,{},rest)},_this.buttonHandleKeyUp=function(event){event.preventDefault()},_this.buttonHandleKeyDown=function(event){var key=normalizeArrowKey(event);_this.buttonKeyDownHandlers[key]&&_this.buttonKeyDownHandlers[key].call((0,assertThisInitialized.A)(_this),event)},_this.buttonHandleClick=function(event){event.preventDefault(),_this.props.environment.document.activeElement===_this.props.environment.document.body&&event.target.focus(),_this.internalSetTimeout((function(){return _this.toggleMenu({type:13})}))},_this.buttonHandleBlur=function(event){var blurTarget=event.target;_this.internalSetTimeout((function(){_this.isMouseDown||null!=_this.props.environment.document.activeElement&&_this.props.environment.document.activeElement.id===_this.inputId||_this.props.environment.document.activeElement===blurTarget||_this.reset({type:14})}))},_this.getLabelProps=function(props){return(0,esm_extends.A)({htmlFor:_this.inputId,id:_this.labelId},props)},_this.getInputProps=function(_temp4){var _ref4=void 0===_temp4?{}:_temp4,onKeyDown=_ref4.onKeyDown,onBlur=_ref4.onBlur,onChange=_ref4.onChange,onInput=_ref4.onInput,rest=(_ref4.onChangeText,(0,objectWithoutPropertiesLoose.A)(_ref4,["onKeyDown","onBlur","onChange","onInput","onChangeText"])),eventHandlers={};var _eventHandlers,_this$getState4=_this.getState(),inputValue=_this$getState4.inputValue,isOpen=_this$getState4.isOpen,highlightedIndex=_this$getState4.highlightedIndex;rest.disabled||((_eventHandlers={}).onChange=callAllEventHandlers(onChange,onInput,_this.inputHandleChange),_eventHandlers.onKeyDown=callAllEventHandlers(onKeyDown,_this.inputHandleKeyDown),_eventHandlers.onBlur=callAllEventHandlers(onBlur,_this.inputHandleBlur),eventHandlers=_eventHandlers);return(0,esm_extends.A)({"aria-autocomplete":"list","aria-activedescendant":isOpen&&"number"==typeof highlightedIndex&&highlightedIndex>=0?_this.getItemId(highlightedIndex):null,"aria-controls":isOpen?_this.menuId:null,"aria-labelledby":_this.labelId,autoComplete:"off",value:inputValue,id:_this.inputId},eventHandlers,{},rest)},_this.inputHandleKeyDown=function(event){var key=normalizeArrowKey(event);key&&_this.inputKeyDownHandlers[key]&&_this.inputKeyDownHandlers[key].call((0,assertThisInitialized.A)(_this),event)},_this.inputHandleChange=function(event){_this.internalSetState({type:11,isOpen:!0,inputValue:event.target.value,highlightedIndex:_this.props.defaultHighlightedIndex})},_this.inputHandleBlur=function(){_this.internalSetTimeout((function(){var downshiftButtonIsActive=_this.props.environment.document&&!!_this.props.environment.document.activeElement&&!!_this.props.environment.document.activeElement.dataset&&_this.props.environment.document.activeElement.dataset.toggle&&_this._rootNode&&_this._rootNode.contains(_this.props.environment.document.activeElement);_this.isMouseDown||downshiftButtonIsActive||_this.reset({type:10})}))},_this.menuRef=function(node){_this._menuNode=node},_this.getMenuProps=function(_temp5,_temp6){var _extends3,_ref5=void 0===_temp5?{}:_temp5,_ref5$refKey=_ref5.refKey,refKey=void 0===_ref5$refKey?"ref":_ref5$refKey,ref=_ref5.ref,props=(0,objectWithoutPropertiesLoose.A)(_ref5,["refKey","ref"]),_ref6$suppressRefErro=(void 0===_temp6?{}:_temp6).suppressRefError,suppressRefError=void 0!==_ref6$suppressRefErro&&_ref6$suppressRefErro;return _this.getMenuProps.called=!0,_this.getMenuProps.refKey=refKey,_this.getMenuProps.suppressRefError=suppressRefError,(0,esm_extends.A)(((_extends3={})[refKey]=handleRefs(ref,_this.menuRef),_extends3.role="listbox",_extends3["aria-labelledby"]=props&&props["aria-label"]?null:_this.labelId,_extends3.id=_this.menuId,_extends3),props)},_this.getItemProps=function(_temp7){var _enabledEventHandlers,_ref7=void 0===_temp7?{}:_temp7,onMouseMove=_ref7.onMouseMove,onMouseDown=_ref7.onMouseDown,onClick=_ref7.onClick,index=(_ref7.onPress,_ref7.index),_ref7$item=_ref7.item,item=void 0===_ref7$item?void 0:_ref7$item,rest=(0,objectWithoutPropertiesLoose.A)(_ref7,["onMouseMove","onMouseDown","onClick","onPress","index","item"]);void 0===index?(_this.items.push(item),index=_this.items.indexOf(item)):_this.items[index]=item;var customClickHandler=onClick,enabledEventHandlers=((_enabledEventHandlers={onMouseMove:callAllEventHandlers(onMouseMove,(function(){index!==_this.getState().highlightedIndex&&(_this.setHighlightedIndex(index,{type:2}),_this.avoidScrolling=!0,_this.internalSetTimeout((function(){return _this.avoidScrolling=!1}),250))})),onMouseDown:callAllEventHandlers(onMouseDown,(function(event){event.preventDefault()}))}).onClick=callAllEventHandlers(customClickHandler,(function(){_this.selectItemAtIndex(index,{type:9})})),_enabledEventHandlers),eventHandlers=rest.disabled?{onMouseDown:enabledEventHandlers.onMouseDown}:enabledEventHandlers;return(0,esm_extends.A)({id:_this.getItemId(index),role:"option","aria-selected":_this.getState().highlightedIndex===index},eventHandlers,{},rest)},_this.clearItems=function(){_this.items=[]},_this.reset=function(otherStateToSet,cb){void 0===otherStateToSet&&(otherStateToSet={}),otherStateToSet=pickState(otherStateToSet),_this.internalSetState((function(_ref8){var selectedItem=_ref8.selectedItem;return(0,esm_extends.A)({isOpen:_this.props.defaultIsOpen,highlightedIndex:_this.props.defaultHighlightedIndex,inputValue:_this.props.itemToString(selectedItem)},otherStateToSet)}),cb)},_this.toggleMenu=function(otherStateToSet,cb){void 0===otherStateToSet&&(otherStateToSet={}),otherStateToSet=pickState(otherStateToSet),_this.internalSetState((function(_ref9){var isOpen=_ref9.isOpen;return(0,esm_extends.A)({isOpen:!isOpen},isOpen&&{highlightedIndex:_this.props.defaultHighlightedIndex},{},otherStateToSet)}),(function(){var _this$getState5=_this.getState(),isOpen=_this$getState5.isOpen,highlightedIndex=_this$getState5.highlightedIndex;isOpen&&_this.getItemCount()>0&&"number"==typeof highlightedIndex&&_this.setHighlightedIndex(highlightedIndex,otherStateToSet),cbToCb(cb)()}))},_this.openMenu=function(cb){_this.internalSetState({isOpen:!0},cb)},_this.closeMenu=function(cb){_this.internalSetState({isOpen:!1},cb)},_this.updateStatus=debounce((function(){var state=_this.getState(),item=_this.items[state.highlightedIndex],resultCount=_this.getItemCount(),status=_this.props.getA11yStatusMessage((0,esm_extends.A)({itemToString:_this.props.itemToString,previousResultCount:_this.previousResultCount,resultCount,highlightedItem:item},state));_this.previousResultCount=resultCount,setStatus(status,_this.props.environment.document)}),200);var _this$props=_this.props,defaultHighlightedIndex=_this$props.defaultHighlightedIndex,_this$props$initialHi=_this$props.initialHighlightedIndex,_highlightedIndex=void 0===_this$props$initialHi?defaultHighlightedIndex:_this$props$initialHi,defaultIsOpen=_this$props.defaultIsOpen,_this$props$initialIs=_this$props.initialIsOpen,_isOpen=void 0===_this$props$initialIs?defaultIsOpen:_this$props$initialIs,_this$props$initialIn=_this$props.initialInputValue,_inputValue=void 0===_this$props$initialIn?"":_this$props$initialIn,_this$props$initialSe=_this$props.initialSelectedItem,_selectedItem=void 0===_this$props$initialSe?null:_this$props$initialSe,_state=_this.getState({highlightedIndex:_highlightedIndex,isOpen:_isOpen,inputValue:_inputValue,selectedItem:_selectedItem});return null!=_state.selectedItem&&void 0===_this.props.initialInputValue&&(_state.inputValue=_this.props.itemToString(_state.selectedItem)),_this.state=_state,_this}(0,inheritsLoose.A)(Downshift,_Component);var _proto=Downshift.prototype;return _proto.internalClearTimeouts=function internalClearTimeouts(){this.timeoutIds.forEach((function(id){clearTimeout(id)})),this.timeoutIds=[]},_proto.getState=function getState(stateToMerge){var _this4=this;return void 0===stateToMerge&&(stateToMerge=this.state),Object.keys(stateToMerge).reduce((function(state,key){return state[key]=_this4.isControlledProp(key)?_this4.props[key]:stateToMerge[key],state}),{})},_proto.isControlledProp=function isControlledProp(key){return void 0!==this.props[key]},_proto.getItemCount=function getItemCount(){var itemCount=this.items.length;return null!=this.itemCount?itemCount=this.itemCount:void 0!==this.props.itemCount&&(itemCount=this.props.itemCount),itemCount},_proto.getItemNodeFromIndex=function getItemNodeFromIndex(index){return this.props.environment.document.getElementById(this.getItemId(index))},_proto.scrollHighlightedItemIntoView=function scrollHighlightedItemIntoView(){var node=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(node,this._menuNode)},_proto.moveHighlightedIndex=function moveHighlightedIndex(amount,otherStateToSet){var itemCount=this.getItemCount();if(itemCount>0){var nextHighlightedIndex=getNextWrappingIndex(amount,this.getState().highlightedIndex,itemCount);this.setHighlightedIndex(nextHighlightedIndex,otherStateToSet)}},_proto.highlightFirstOrLastIndex=function highlightFirstOrLastIndex(event,first,otherStateToSet){var itemsLastIndex=this.getItemCount()-1;itemsLastIndex<0||!this.getState().isOpen||(event.preventDefault(),this.setHighlightedIndex(first?0:itemsLastIndex,otherStateToSet))},_proto.getStateAndHelpers=function getStateAndHelpers(){var _this$getState6=this.getState(),highlightedIndex=_this$getState6.highlightedIndex,inputValue=_this$getState6.inputValue,selectedItem=_this$getState6.selectedItem,isOpen=_this$getState6.isOpen,itemToString=this.props.itemToString,id=this.id,getRootProps=this.getRootProps,getToggleButtonProps=this.getToggleButtonProps,getLabelProps=this.getLabelProps,getMenuProps=this.getMenuProps,getInputProps=this.getInputProps,getItemProps=this.getItemProps,openMenu=this.openMenu,closeMenu=this.closeMenu,toggleMenu=this.toggleMenu,selectItem=this.selectItem,selectItemAtIndex=this.selectItemAtIndex,selectHighlightedItem=this.selectHighlightedItem,setHighlightedIndex=this.setHighlightedIndex,clearSelection=this.clearSelection,clearItems=this.clearItems;return{getRootProps,getToggleButtonProps,getLabelProps,getMenuProps,getInputProps,getItemProps,reset:this.reset,openMenu,closeMenu,toggleMenu,selectItem,selectItemAtIndex,selectHighlightedItem,setHighlightedIndex,clearSelection,clearItems,setItemCount:this.setItemCount,unsetItemCount:this.unsetItemCount,setState:this.internalSetState,itemToString,id,highlightedIndex,inputValue,isOpen,selectedItem}},_proto.componentDidMount=function componentDidMount(){var _this5=this;var targetWithinDownshift=function(target,checkActiveElement){void 0===checkActiveElement&&(checkActiveElement=!0);var document=_this5.props.environment.document;return[_this5._rootNode,_this5._menuNode].some((function(contextNode){return contextNode&&(isOrContainsNode(contextNode,target)||checkActiveElement&&isOrContainsNode(contextNode,document.activeElement))}))},onMouseDown=function(){_this5.isMouseDown=!0},onMouseUp=function(event){_this5.isMouseDown=!1,!targetWithinDownshift(event.target)&&_this5.getState().isOpen&&_this5.reset({type:1},(function(){return _this5.props.onOuterClick(_this5.getStateAndHelpers())}))},onTouchStart=function(){_this5.isTouchMove=!1},onTouchMove=function(){_this5.isTouchMove=!0},onTouchEnd=function(event){var contextWithinDownshift=targetWithinDownshift(event.target,!1);_this5.isTouchMove||contextWithinDownshift||!_this5.getState().isOpen||_this5.reset({type:16},(function(){return _this5.props.onOuterClick(_this5.getStateAndHelpers())}))},environment=this.props.environment;environment.addEventListener("mousedown",onMouseDown),environment.addEventListener("mouseup",onMouseUp),environment.addEventListener("touchstart",onTouchStart),environment.addEventListener("touchmove",onTouchMove),environment.addEventListener("touchend",onTouchEnd),this.cleanup=function(){_this5.internalClearTimeouts(),_this5.updateStatus.cancel(),environment.removeEventListener("mousedown",onMouseDown),environment.removeEventListener("mouseup",onMouseUp),environment.removeEventListener("touchstart",onTouchStart),environment.removeEventListener("touchmove",onTouchMove),environment.removeEventListener("touchend",onTouchEnd)}},_proto.shouldScroll=function shouldScroll(prevState,prevProps){var currentHighlightedIndex=(void 0===this.props.highlightedIndex?this.getState():this.props).highlightedIndex,prevHighlightedIndex=(void 0===prevProps.highlightedIndex?prevState:prevProps).highlightedIndex;return currentHighlightedIndex&&this.getState().isOpen&&!prevState.isOpen||currentHighlightedIndex!==prevHighlightedIndex},_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){this.isControlledProp("selectedItem")&&this.props.selectedItemChanged(prevProps.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(prevState,prevProps)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},_proto.componentWillUnmount=function componentWillUnmount(){this.cleanup()},_proto.render=function render(){var children=unwrapArray(this.props.children,noop);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var element=unwrapArray(children(this.getStateAndHelpers()));return element?this.getRootProps.called||this.props.suppressRefError?element:isDOMElement(element)?(0,react.cloneElement)(element,this.getRootProps(getElementProps(element))):void 0:null},Downshift}(react.Component);return Downshift.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage,itemToString:function itemToString(i){return null==i?"":String(i)},onStateChange:noop,onInputValueChange:noop,onUserAction:noop,onChange:noop,onSelect:noop,onOuterClick:noop,selectedItemChanged:function selectedItemChanged(prevItem,item){return prevItem!==item},environment:"undefined"==typeof window?{}:window,stateReducer:function stateReducer(state,stateToSet){return stateToSet},suppressRefError:!1,scrollIntoView},Downshift.stateChangeTypes=stateChangeTypes,Downshift}();prop_types_default().array.isRequired,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().bool,prop_types_default().number,prop_types_default().number,prop_types_default().number,prop_types_default().bool,prop_types_default().bool,prop_types_default().bool,prop_types_default().any,prop_types_default().any,prop_types_default().any,prop_types_default().string,prop_types_default().string,prop_types_default().string,prop_types_default().func,prop_types_default().string,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().func,prop_types_default().shape({addEventListener:prop_types_default().func,removeEventListener:prop_types_default().func,document:prop_types_default().shape({getElementById:prop_types_default().func,activeElement:prop_types_default().any,body:prop_types_default().any})});"undefined"==typeof window||window;const downshift_esm=Downshift}}]);