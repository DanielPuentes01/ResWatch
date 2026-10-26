var Mv=Object.defineProperty;var Sv=(s,e,t)=>e in s?Mv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Xe=(s,e,t)=>Sv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function o0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Au={exports:{}},Ua={},Ru={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Ev(){if(zp)return vt;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function y(O,se,De){this.props=O,this.context=se,this.refs=E,this.updater=De||M}y.prototype.isReactComponent={},y.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(O,se,De){this.props=O,this.context=se,this.refs=E,this.updater=De||M}var P=L.prototype=new x;P.constructor=L,S(P,y.prototype),P.isPureReactComponent=!0;var T=Array.isArray,V=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function k(O,se,De){var J,me={},we=null,Me=null;if(se!=null)for(J in se.ref!==void 0&&(Me=se.ref),se.key!==void 0&&(we=""+se.key),se)V.call(se,J)&&!U.hasOwnProperty(J)&&(me[J]=se[J]);var Le=arguments.length-2;if(Le===1)me.children=De;else if(1<Le){for(var ke=Array(Le),et=0;et<Le;et++)ke[et]=arguments[et+2];me.children=ke}if(O&&O.defaultProps)for(J in Le=O.defaultProps,Le)me[J]===void 0&&(me[J]=Le[J]);return{$$typeof:s,type:O,key:we,ref:Me,props:me,_owner:N.current}}function C(O,se){return{$$typeof:s,type:O.type,key:se,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function F(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(De){return se[De]})}var Q=/\/+/g;function $(O,se){return typeof O=="object"&&O!==null&&O.key!=null?F(""+O.key):se.toString(36)}function ce(O,se,De,J,me){var we=typeof O;(we==="undefined"||we==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(we){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case s:case e:Me=!0}}if(Me)return Me=O,me=me(Me),O=J===""?"."+$(Me,0):J,T(me)?(De="",O!=null&&(De=O.replace(Q,"$&/")+"/"),ce(me,se,De,"",function(et){return et})):me!=null&&(A(me)&&(me=C(me,De+(!me.key||Me&&Me.key===me.key?"":(""+me.key).replace(Q,"$&/")+"/")+O)),se.push(me)),1;if(Me=0,J=J===""?".":J+":",T(O))for(var Le=0;Le<O.length;Le++){we=O[Le];var ke=J+$(we,Le);Me+=ce(we,se,De,ke,me)}else if(ke=v(O),typeof ke=="function")for(O=ke.call(O),Le=0;!(we=O.next()).done;)we=we.value,ke=J+$(we,Le++),Me+=ce(we,se,De,ke,me);else if(we==="object")throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return Me}function he(O,se,De){if(O==null)return O;var J=[],me=0;return ce(O,J,"","",function(we){return se.call(De,we,me++)}),J}function ne(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(De){(O._status===0||O._status===-1)&&(O._status=1,O._result=De)},function(De){(O._status===0||O._status===-1)&&(O._status=2,O._result=De)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var pe={current:null},z={transition:null},ue={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function oe(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:he,forEach:function(O,se,De){he(O,function(){se.apply(this,arguments)},De)},count:function(O){var se=0;return he(O,function(){se++}),se},toArray:function(O){return he(O,function(se){return se})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},vt.Component=y,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=L,vt.StrictMode=r,vt.Suspense=p,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,vt.act=oe,vt.cloneElement=function(O,se,De){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=S({},O.props),me=O.key,we=O.ref,Me=O._owner;if(se!=null){if(se.ref!==void 0&&(we=se.ref,Me=N.current),se.key!==void 0&&(me=""+se.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for(ke in se)V.call(se,ke)&&!U.hasOwnProperty(ke)&&(J[ke]=se[ke]===void 0&&Le!==void 0?Le[ke]:se[ke])}var ke=arguments.length-2;if(ke===1)J.children=De;else if(1<ke){Le=Array(ke);for(var et=0;et<ke;et++)Le[et]=arguments[et+2];J.children=Le}return{$$typeof:s,type:O.type,key:me,ref:we,props:J,_owner:Me}},vt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},vt.createElement=k,vt.createFactory=function(O){var se=k.bind(null,O);return se.type=O,se},vt.createRef=function(){return{current:null}},vt.forwardRef=function(O){return{$$typeof:d,render:O}},vt.isValidElement=A,vt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:ne}},vt.memo=function(O,se){return{$$typeof:h,type:O,compare:se===void 0?null:se}},vt.startTransition=function(O){var se=z.transition;z.transition={};try{O()}finally{z.transition=se}},vt.unstable_act=oe,vt.useCallback=function(O,se){return pe.current.useCallback(O,se)},vt.useContext=function(O){return pe.current.useContext(O)},vt.useDebugValue=function(){},vt.useDeferredValue=function(O){return pe.current.useDeferredValue(O)},vt.useEffect=function(O,se){return pe.current.useEffect(O,se)},vt.useId=function(){return pe.current.useId()},vt.useImperativeHandle=function(O,se,De){return pe.current.useImperativeHandle(O,se,De)},vt.useInsertionEffect=function(O,se){return pe.current.useInsertionEffect(O,se)},vt.useLayoutEffect=function(O,se){return pe.current.useLayoutEffect(O,se)},vt.useMemo=function(O,se){return pe.current.useMemo(O,se)},vt.useReducer=function(O,se,De){return pe.current.useReducer(O,se,De)},vt.useRef=function(O){return pe.current.useRef(O)},vt.useState=function(O){return pe.current.useState(O)},vt.useSyncExternalStore=function(O,se,De){return pe.current.useSyncExternalStore(O,se,De)},vt.useTransition=function(){return pe.current.useTransition()},vt.version="18.3.1",vt}var Bp;function ef(){return Bp||(Bp=1,Ru.exports=Ev()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function wv(){if(Hp)return Ua;Hp=1;var s=ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,h){var m,_={},v=null,M=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(M=p.ref);for(m in p)r.call(p,m)&&!l.hasOwnProperty(m)&&(_[m]=p[m]);if(d&&d.defaultProps)for(m in p=d.defaultProps,p)_[m]===void 0&&(_[m]=p[m]);return{$$typeof:e,type:d,key:v,ref:M,props:_,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=u,Ua.jsxs=u,Ua}var Vp;function Tv(){return Vp||(Vp=1,Au.exports=wv()),Au.exports}var H=Tv(),mt=ef();const Av=o0(mt);var rl={},Cu={exports:{}},Un={},bu={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Rv(){return Gp||(Gp=1,(function(s){function e(z,ue){var oe=z.length;z.push(ue);e:for(;0<oe;){var O=oe-1>>>1,se=z[O];if(0<o(se,ue))z[O]=ue,z[oe]=se,oe=O;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ue=z[0],oe=z.pop();if(oe!==ue){z[0]=oe;e:for(var O=0,se=z.length,De=se>>>1;O<De;){var J=2*(O+1)-1,me=z[J],we=J+1,Me=z[we];if(0>o(me,oe))we<se&&0>o(Me,me)?(z[O]=Me,z[we]=oe,O=we):(z[O]=me,z[J]=oe,O=J);else if(we<se&&0>o(Me,oe))z[O]=Me,z[we]=oe,O=we;else break e}}return ue}function o(z,ue){var oe=z.sortIndex-ue.sortIndex;return oe!==0?oe:z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],h=[],m=1,_=null,v=3,M=!1,S=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var ue=t(h);ue!==null;){if(ue.callback===null)r(h);else if(ue.startTime<=z)r(h),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=t(h)}}function T(z){if(E=!1,P(z),!S)if(t(p)!==null)S=!0,ne(V);else{var ue=t(h);ue!==null&&pe(T,ue.startTime-z)}}function V(z,ue){S=!1,E&&(E=!1,x(k),k=-1),M=!0;var oe=v;try{for(P(ue),_=t(p);_!==null&&(!(_.expirationTime>ue)||z&&!F());){var O=_.callback;if(typeof O=="function"){_.callback=null,v=_.priorityLevel;var se=O(_.expirationTime<=ue);ue=s.unstable_now(),typeof se=="function"?_.callback=se:_===t(p)&&r(p),P(ue)}else r(p);_=t(p)}if(_!==null)var De=!0;else{var J=t(h);J!==null&&pe(T,J.startTime-ue),De=!1}return De}finally{_=null,v=oe,M=!1}}var N=!1,U=null,k=-1,C=5,A=-1;function F(){return!(s.unstable_now()-A<C)}function Q(){if(U!==null){var z=s.unstable_now();A=z;var ue=!0;try{ue=U(!0,z)}finally{ue?$():(N=!1,U=null)}}else N=!1}var $;if(typeof L=="function")$=function(){L(Q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=Q,$=function(){he.postMessage(null)}}else $=function(){y(Q,0)};function ne(z){U=z,N||(N=!0,$())}function pe(z,ue){k=y(function(){z(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){S||M||(S=!0,ne(V))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var oe=v;v=ue;try{return z()}finally{v=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,ue){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=v;v=z;try{return ue()}finally{v=oe}},s.unstable_scheduleCallback=function(z,ue,oe){var O=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,z={id:m++,callback:ue,priorityLevel:z,startTime:oe,expirationTime:se,sortIndex:-1},oe>O?(z.sortIndex=oe,e(h,z),t(p)===null&&z===t(h)&&(E?(x(k),k=-1):E=!0,pe(T,oe-O))):(z.sortIndex=se,e(p,z),S||M||(S=!0,ne(V))),z},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(z){var ue=v;return function(){var oe=v;v=ue;try{return z.apply(this,arguments)}finally{v=oe}}}})(Pu)),Pu}var Wp;function Cv(){return Wp||(Wp=1,bu.exports=Rv()),bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function bv(){if(jp)return Un;jp=1;var s=ef(),e=Cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function v(n){return p.call(_,n)?!0:p.call(m,n)?!1:h.test(n)?_[n]=!0:(m[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,f,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,L);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,L);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,L);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,f,c)&&(a=null),c||f===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),F=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function se(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var De=!1;function J(n,i){if(!n||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){c=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var f=ie.stack.split(`
`),g=c.stack.split(`
`),w=f.length-1,I=g.length-1;1<=w&&0<=I&&f[w]!==g[I];)I--;for(;1<=w&&0<=I;w--,I--)if(f[w]!==g[I]){if(w!==1||I!==1)do if(w--,I--,0>I||f[w]!==g[I]){var B=`
`+f[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=I);break}}}finally{De=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function me(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case N:return"Portal";case C:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function bt(n){n._valueTracker||(n._valueTracker=et(n))}function ht(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function q(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Pe(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Le(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Qe(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function nt(n,i){Qe(n,i);var a=Le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wt(n,i.type,a):i.hasOwnProperty("defaultValue")&&wt(n,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function tt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function wt(n,i,a){(i!=="number"||Dt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ze=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function te(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ze(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Le(a)}}function Z(n,i){var a=Le(i.value),c=Le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function le(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ve,Te=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ve=ve||document.createElement("div"),ve.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ve.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(ge).forEach(function(n){Re.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ge[i]=ge[n]})});function He(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ge.hasOwnProperty(n)&&ge[n]?(""+i).trim():i+"px"}function Je(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=He(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ve=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function lt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,fe=null,_e=null;function Oe(n){if(n=ya(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=xo(i),Ne(n.stateNode,n.type,i))}}function Ue(n){fe?_e?_e.push(n):_e=[n]:fe=n}function ct(){if(fe){var n=fe,i=_e;if(_e=fe=null,Oe(n),i)for(n=0;n<i.length;n++)Oe(i[n])}}function zt(n,i){return n(i)}function Zt(){}var Mt=!1;function Cn(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return zt(n,i,a)}finally{Mt=!1,(fe!==null||_e!==null)&&(Zt(),ct())}}function Sn(n,i){var a=n.stateNode;if(a===null)return null;var c=xo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ss=!1;if(d)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{ss=!1}function bi(n,i,a,c,f,g,w,I,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(Se){this.onError(Se)}}var Pi=!1,Pr=null,Lr=!1,Qi=null,Qa={onError:function(n){Pi=!0,Pr=n}};function as(n,i,a,c,f,g,w,I,B){Pi=!1,Pr=null,bi.apply(Qa,arguments)}function Ja(n,i,a,c,f,g,w,I,B){if(as.apply(this,arguments),Pi){if(Pi){var ie=Pr;Pi=!1,Pr=null}else throw Error(t(198));Lr||(Lr=!0,Qi=ie)}}function xi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function eo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function to(n){if(xi(n)!==n)throw Error(t(188))}function Yl(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return to(f),n;if(g===c)return to(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var w=!1,I=f.child;I;){if(I===a){w=!0,a=f,c=g;break}if(I===c){w=!0,c=f,a=g;break}I=I.sibling}if(!w){for(I=g.child;I;){if(I===a){w=!0,a=g,c=f;break}if(I===c){w=!0,c=g,a=f;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function b(n){return n=Yl(n),n!==null?X(n):null}function X(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=X(n);if(i!==null)return i;n=n.sibling}return null}var re=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,Y=e.unstable_shouldYield,be=e.unstable_requestPaint,Ae=e.unstable_now,qe=e.unstable_getCurrentPriorityLevel,We=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Rt=null,xt=null;function dn(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Tt,Ke=Math.log,si=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(Ke(n)/si|0)|0}var fn=64,ai=4194304;function Kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~f;I!==0?c=Kt(I):(g&=w,g!==0&&(c=Kt(g)))}else w=a&~f,w!==0?c=Kt(w):g!==0&&(c=Kt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ut(i),f=1<<a,c|=n[a],i&=~f;return c}function Ut(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-ut(g),I=1<<w,B=f[w];B===-1?((I&a)===0||(I&c)!==0)&&(f[w]=Ut(I,i)):B<=i&&(n.expiredLanes|=I),g&=~I}}function Li(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function En(){var n=fn;return fn<<=1,(fn&4194240)===0&&(fn=64),n}function $n(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function bn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=a}function no(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-ut(a),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~g}}function $l(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ut(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Lt=0;function vf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var _f,Zl,xf,yf,Mf,Kl=!1,io=[],Ji=null,er=null,tr=null,ra=new Map,sa=new Map,nr=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(n,i){switch(n){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(n,i,a,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=ya(i),i!==null&&Zl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function W0(n,i,a,c,f){switch(i){case"focusin":return Ji=aa(Ji,n,i,a,c,f),!0;case"dragenter":return er=aa(er,n,i,a,c,f),!0;case"mouseover":return tr=aa(tr,n,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return ra.set(g,aa(ra.get(g)||null,n,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,sa.set(g,aa(sa.get(g)||null,n,i,a,c,f)),!0}return!1}function Ef(n){var i=Dr(n.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=eo(a),i!==null){n.blockedOn=i,Mf(n.priority,function(){xf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Jl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pt=c,a.target.dispatchEvent(c),Pt=null}else return i=ya(a),i!==null&&Zl(i),n.blockedOn=a,!1;i.shift()}return!0}function wf(n,i,a){ro(n)&&a.delete(i)}function j0(){Kl=!1,Ji!==null&&ro(Ji)&&(Ji=null),er!==null&&ro(er)&&(er=null),tr!==null&&ro(tr)&&(tr=null),ra.forEach(wf),sa.forEach(wf)}function oa(n,i){n.blockedOn===i&&(n.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,j0)))}function la(n){function i(f){return oa(f,n)}if(0<io.length){oa(io[0],n);for(var a=1;a<io.length;a++){var c=io[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ji!==null&&oa(Ji,n),er!==null&&oa(er,n),tr!==null&&oa(tr,n),ra.forEach(i),sa.forEach(i),a=0;a<nr.length;a++)c=nr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&nr.shift()}var os=T.ReactCurrentBatchConfig,so=!0;function X0(n,i,a,c){var f=Lt,g=os.transition;os.transition=null;try{Lt=1,Ql(n,i,a,c)}finally{Lt=f,os.transition=g}}function q0(n,i,a,c){var f=Lt,g=os.transition;os.transition=null;try{Lt=4,Ql(n,i,a,c)}finally{Lt=f,os.transition=g}}function Ql(n,i,a,c){if(so){var f=Jl(n,i,a,c);if(f===null)gc(n,i,c,ao,a),Sf(n,c);else if(W0(f,n,i,a,c))c.stopPropagation();else if(Sf(n,c),i&4&&-1<G0.indexOf(n)){for(;f!==null;){var g=ya(f);if(g!==null&&_f(g),g=Jl(n,i,a,c),g===null&&gc(n,i,c,ao,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else gc(n,i,c,null,a)}}var ao=null;function Jl(n,i,a,c){if(ao=null,n=j(c),n=Dr(n),n!==null)if(i=xi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=eo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ao=n,null}function Tf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qe()){case We:return 1;case st:return 4;case ot:case Ye:return 16;case yt:return 536870912;default:return 16}default:return 16}}var ir=null,ec=null,oo=null;function Af(){if(oo)return oo;var n,i=ec,a=i.length,c,f="value"in ir?ir.value:ir.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[g-c];c++);return oo=f.slice(n,1<c?1-c:void 0)}function lo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function co(){return!0}function Rf(){return!1}function Bn(n){function i(a,c,f,g,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?co:Rf,this.isPropagationStopped=Rf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=Bn(ls),ca=oe({},ls,{view:0,detail:0}),Y0=Bn(ca),nc,ic,ua,uo=oe({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ua&&(ua&&n.type==="mousemove"?(nc=n.screenX-ua.screenX,ic=n.screenY-ua.screenY):ic=nc=0,ua=n),nc)},movementY:function(n){return"movementY"in n?n.movementY:ic}}),Cf=Bn(uo),$0=oe({},uo,{dataTransfer:0}),Z0=Bn($0),K0=oe({},ca,{relatedTarget:0}),rc=Bn(K0),Q0=oe({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Bn(Q0),eg=oe({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tg=Bn(eg),ng=oe({},ls,{data:0}),bf=Bn(ng),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ag(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=sg[n])?!!i[n]:!1}function sc(){return ag}var og=oe({},ca,{key:function(n){if(n.key){var i=ig[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=lo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(n){return n.type==="keypress"?lo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lg=Bn(og),cg=oe({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=Bn(cg),ug=oe({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),dg=Bn(ug),fg=oe({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=Bn(fg),pg=oe({},uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=Bn(pg),gg=[9,13,27,32],ac=d&&"CompositionEvent"in window,da=null;d&&"documentMode"in document&&(da=document.documentMode);var vg=d&&"TextEvent"in window&&!da,Lf=d&&(!ac||da&&8<da&&11>=da),Df=" ",Nf=!1;function If(n,i){switch(n){case"keyup":return gg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function _g(n,i){switch(n){case"compositionend":return Uf(i);case"keypress":return i.which!==32?null:(Nf=!0,Df);case"textInput":return n=i.data,n===Df&&Nf?null:n;default:return null}}function xg(n,i){if(cs)return n==="compositionend"||!ac&&If(n,i)?(n=Af(),oo=ec=ir=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lf&&i.locale!=="ko"?null:i.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!yg[n.type]:i==="textarea"}function Of(n,i,a,c){Ue(c),i=go(i,"onChange"),0<i.length&&(a=new tc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var fa=null,ha=null;function Mg(n){th(n,0)}function fo(n){var i=ps(n);if(ht(i))return n}function Sg(n,i){if(n==="change")return i}var kf=!1;if(d){var oc;if(d){var lc="oninput"in document;if(!lc){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),lc=typeof zf.oninput=="function"}oc=lc}else oc=!1;kf=oc&&(!document.documentMode||9<document.documentMode)}function Bf(){fa&&(fa.detachEvent("onpropertychange",Hf),ha=fa=null)}function Hf(n){if(n.propertyName==="value"&&fo(ha)){var i=[];Of(i,ha,n,j(n)),Cn(Mg,i)}}function Eg(n,i,a){n==="focusin"?(Bf(),fa=i,ha=a,fa.attachEvent("onpropertychange",Hf)):n==="focusout"&&Bf()}function wg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fo(ha)}function Tg(n,i){if(n==="click")return fo(i)}function Ag(n,i){if(n==="input"||n==="change")return fo(i)}function Rg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:Rg;function pa(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!oi(n[f],i[f]))return!1}return!0}function Vf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gf(n,i){var a=Vf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vf(a)}}function Wf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function jf(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Dt(n.document)}return i}function cc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Cg(n){var i=jf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wf(a.ownerDocument.documentElement,a)){if(c!==null&&cc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Gf(a,g);var w=Gf(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bg=d&&"documentMode"in document&&11>=document.documentMode,us=null,uc=null,ma=null,dc=!1;function Xf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dc||us==null||us!==Dt(c)||(c=us,"selectionStart"in c&&cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=go(uc,"onSelect"),0<c.length&&(i=new tc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=us)))}function ho(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ds={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},fc={},qf={};d&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function po(n){if(fc[n])return fc[n];if(!ds[n])return n;var i=ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in qf)return fc[n]=i[a];return n}var Yf=po("animationend"),$f=po("animationiteration"),Zf=po("animationstart"),Kf=po("transitionend"),Qf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,i){Qf.set(n,i),l(i,[n])}for(var hc=0;hc<Jf.length;hc++){var pc=Jf[hc],Pg=pc.toLowerCase(),Lg=pc[0].toUpperCase()+pc.slice(1);rr(Pg,"on"+Lg)}rr(Yf,"onAnimationEnd"),rr($f,"onAnimationIteration"),rr(Zf,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Kf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function eh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ja(c,i,void 0,n),n.currentTarget=null}function th(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],B=I.instance,ie=I.currentTarget;if(I=I.listener,B!==g&&f.isPropagationStopped())break e;eh(f,I,ie),g=B}else for(w=0;w<c.length;w++){if(I=c[w],B=I.instance,ie=I.currentTarget,I=I.listener,B!==g&&f.isPropagationStopped())break e;eh(f,I,ie),g=B}}}if(Lr)throw n=Qi,Lr=!1,Qi=null,n}function Bt(n,i){var a=i[Sc];a===void 0&&(a=i[Sc]=new Set);var c=n+"__bubble";a.has(c)||(nh(i,n,2,!1),a.add(c))}function mc(n,i,a){var c=0;i&&(c|=4),nh(a,n,c,i)}var mo="_reactListening"+Math.random().toString(36).slice(2);function va(n){if(!n[mo]){n[mo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Dg.has(a)||mc(a,!1,n),mc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[mo]||(i[mo]=!0,mc("selectionchange",!1,i))}}function nh(n,i,a,c){switch(Tf(i)){case 1:var f=X0;break;case 4:f=q0;break;default:f=Ql}a=f.bind(null,i,a,n),f=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function gc(n,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;w=w.return}for(;I!==null;){if(w=Dr(I),w===null)return;if(B=w.tag,B===5||B===6){c=g=w;continue e}I=I.parentNode}}c=c.return}Cn(function(){var ie=g,Se=j(a),Ee=[];e:{var ye=Qf.get(n);if(ye!==void 0){var ze=tc,Ge=n;switch(n){case"keypress":if(lo(a)===0)break e;case"keydown":case"keyup":ze=lg;break;case"focusin":Ge="focus",ze=rc;break;case"focusout":Ge="blur",ze=rc;break;case"beforeblur":case"afterblur":ze=rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=dg;break;case Yf:case $f:case Zf:ze=J0;break;case Kf:ze=hg;break;case"scroll":ze=Y0;break;case"wheel":ze=mg;break;case"copy":case"cut":case"paste":ze=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Pf}var je=(i&4)!==0,Xt=!je&&n==="scroll",K=je?ye!==null?ye+"Capture":null:ye;je=[];for(var G=ie,ee;G!==null;){ee=G;var Ce=ee.stateNode;if(ee.tag===5&&Ce!==null&&(ee=Ce,K!==null&&(Ce=Sn(G,K),Ce!=null&&je.push(_a(G,Ce,ee)))),Xt)break;G=G.return}0<je.length&&(ye=new ze(ye,Ge,null,a,Se),Ee.push({event:ye,listeners:je}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ye&&a!==Pt&&(Ge=a.relatedTarget||a.fromElement)&&(Dr(Ge)||Ge[Di]))break e;if((ze||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,ze?(Ge=a.relatedTarget||a.toElement,ze=ie,Ge=Ge?Dr(Ge):null,Ge!==null&&(Xt=xi(Ge),Ge!==Xt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ze=null,Ge=ie),ze!==Ge)){if(je=Cf,Ce="onMouseLeave",K="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(je=Pf,Ce="onPointerLeave",K="onPointerEnter",G="pointer"),Xt=ze==null?ye:ps(ze),ee=Ge==null?ye:ps(Ge),ye=new je(Ce,G+"leave",ze,a,Se),ye.target=Xt,ye.relatedTarget=ee,Ce=null,Dr(Se)===ie&&(je=new je(K,G+"enter",Ge,a,Se),je.target=ee,je.relatedTarget=Xt,Ce=je),Xt=Ce,ze&&Ge)t:{for(je=ze,K=Ge,G=0,ee=je;ee;ee=fs(ee))G++;for(ee=0,Ce=K;Ce;Ce=fs(Ce))ee++;for(;0<G-ee;)je=fs(je),G--;for(;0<ee-G;)K=fs(K),ee--;for(;G--;){if(je===K||K!==null&&je===K.alternate)break t;je=fs(je),K=fs(K)}je=null}else je=null;ze!==null&&ih(Ee,ye,ze,je,!1),Ge!==null&&Xt!==null&&ih(Ee,Xt,Ge,je,!0)}}e:{if(ye=ie?ps(ie):window,ze=ye.nodeName&&ye.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ye.type==="file")var $e=Sg;else if(Ff(ye))if(kf)$e=Ag;else{$e=wg;var it=Eg}else(ze=ye.nodeName)&&ze.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&($e=Tg);if($e&&($e=$e(n,ie))){Of(Ee,$e,a,Se);break e}it&&it(n,ye,ie),n==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&wt(ye,"number",ye.value)}switch(it=ie?ps(ie):window,n){case"focusin":(Ff(it)||it.contentEditable==="true")&&(us=it,uc=ie,ma=null);break;case"focusout":ma=uc=us=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Xf(Ee,a,Se);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":Xf(Ee,a,Se)}var rt;if(ac)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else cs?If(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Lf&&a.locale!=="ko"&&(cs||at!=="onCompositionStart"?at==="onCompositionEnd"&&cs&&(rt=Af()):(ir=Se,ec="value"in ir?ir.value:ir.textContent,cs=!0)),it=go(ie,at),0<it.length&&(at=new bf(at,n,null,a,Se),Ee.push({event:at,listeners:it}),rt?at.data=rt:(rt=Uf(a),rt!==null&&(at.data=rt)))),(rt=vg?_g(n,a):xg(n,a))&&(ie=go(ie,"onBeforeInput"),0<ie.length&&(Se=new bf("onBeforeInput","beforeinput",null,a,Se),Ee.push({event:Se,listeners:ie}),Se.data=rt))}th(Ee,i)})}function _a(n,i,a){return{instance:n,listener:i,currentTarget:a}}function go(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Sn(n,a),g!=null&&c.unshift(_a(n,g,f)),g=Sn(n,i),g!=null&&c.push(_a(n,g,f))),n=n.return}return c}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ih(n,i,a,c,f){for(var g=i._reactName,w=[];a!==null&&a!==c;){var I=a,B=I.alternate,ie=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&ie!==null&&(I=ie,f?(B=Sn(a,g),B!=null&&w.unshift(_a(a,B,I))):f||(B=Sn(a,g),B!=null&&w.push(_a(a,B,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Ng=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function rh(n){return(typeof n=="string"?n:""+n).replace(Ng,`
`).replace(Ig,"")}function vo(n,i,a){if(i=rh(i),rh(n)!==i&&a)throw Error(t(425))}function _o(){}var vc=null,_c=null;function xc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,Fg=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(n){return sh.resolve(null).then(n).catch(Og)}:yc;function Og(n){setTimeout(function(){throw n})}function Mc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),la(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);la(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+hs,xa="__reactProps$"+hs,Di="__reactContainer$"+hs,Sc="__reactEvents$"+hs,kg="__reactListeners$"+hs,zg="__reactHandles$"+hs;function Dr(n){var i=n[Mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Di]||a[Mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ah(n);n!==null;){if(a=n[Mi])return a;n=ah(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[Mi]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xo(n){return n[xa]||null}var Ec=[],ms=-1;function ar(n){return{current:n}}function Ht(n){0>ms||(n.current=Ec[ms],Ec[ms]=null,ms--)}function Ft(n,i){ms++,Ec[ms]=n.current,n.current=i}var or={},hn=ar(or),Pn=ar(!1),Nr=or;function gs(n,i){var a=n.type.contextTypes;if(!a)return or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(n){return n=n.childContextTypes,n!=null}function yo(){Ht(Pn),Ht(hn)}function oh(n,i,a){if(hn.current!==or)throw Error(t(168));Ft(hn,i),Ft(Pn,a)}function lh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Me(n)||"Unknown",f));return oe({},a,c)}function Mo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Nr=hn.current,Ft(hn,n),Ft(Pn,Pn.current),!0}function ch(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=lh(n,i,Nr),c.__reactInternalMemoizedMergedChildContext=n,Ht(Pn),Ht(hn),Ft(hn,n)):Ht(Pn),Ft(Pn,a)}var Ni=null,So=!1,wc=!1;function uh(n){Ni===null?Ni=[n]:Ni.push(n)}function Bg(n){So=!0,uh(n)}function lr(){if(!wc&&Ni!==null){wc=!0;var n=0,i=Lt;try{var a=Ni;for(Lt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ni=null,So=!1}catch(f){throw Ni!==null&&(Ni=Ni.slice(n+1)),re(We,lr),f}finally{Lt=i,wc=!1}}return null}var vs=[],_s=0,Eo=null,wo=0,Zn=[],Kn=0,Ir=null,Ii=1,Ui="";function Ur(n,i){vs[_s++]=wo,vs[_s++]=Eo,Eo=n,wo=i}function dh(n,i,a){Zn[Kn++]=Ii,Zn[Kn++]=Ui,Zn[Kn++]=Ir,Ir=n;var c=Ii;n=Ui;var f=32-ut(c)-1;c&=~(1<<f),a+=1;var g=32-ut(i)+f;if(30<g){var w=f-f%5;g=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Ii=1<<32-ut(i)+f|a<<f|c,Ui=g+n}else Ii=1<<g|a<<f|c,Ui=n}function Tc(n){n.return!==null&&(Ur(n,1),dh(n,1,0))}function Ac(n){for(;n===Eo;)Eo=vs[--_s],vs[_s]=null,wo=vs[--_s],vs[_s]=null;for(;n===Ir;)Ir=Zn[--Kn],Zn[Kn]=null,Ui=Zn[--Kn],Zn[Kn]=null,Ii=Zn[--Kn],Zn[Kn]=null}var Hn=null,Vn=null,Vt=!1,li=null;function fh(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:Ii,overflow:Ui}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function Rc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cc(n){if(Vt){var i=Vn;if(i){var a=i;if(!hh(n,i)){if(Rc(n))throw Error(t(418));i=sr(a.nextSibling);var c=Hn;i&&hh(n,i)?fh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,Hn=n)}}else{if(Rc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Hn=n}}}function ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function To(n){if(n!==Hn)return!1;if(!Vt)return ph(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!xc(n.type,n.memoizedProps)),i&&(i=Vn)){if(Rc(n))throw mh(),Error(t(418));for(;i;)fh(n,i),i=sr(i.nextSibling)}if(ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=sr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Hn?sr(n.stateNode.nextSibling):null;return!0}function mh(){for(var n=Vn;n;)n=sr(n.nextSibling)}function xs(){Vn=Hn=null,Vt=!1}function bc(n){li===null?li=[n]:li.push(n)}var Hg=T.ReactCurrentBatchConfig;function Ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var I=f.refs;w===null?delete I[g]:I[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ao(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function gh(n){var i=n._init;return i(n._payload)}function vh(n){function i(K,G){if(n){var ee=K.deletions;ee===null?(K.deletions=[G],K.flags|=16):ee.push(G)}}function a(K,G){if(!n)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function f(K,G){return K=gr(K,G),K.index=0,K.sibling=null,K}function g(K,G,ee){return K.index=ee,n?(ee=K.alternate,ee!==null?(ee=ee.index,ee<G?(K.flags|=2,G):ee):(K.flags|=2,G)):(K.flags|=1048576,G)}function w(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,G,ee,Ce){return G===null||G.tag!==6?(G=yu(ee,K.mode,Ce),G.return=K,G):(G=f(G,ee),G.return=K,G)}function B(K,G,ee,Ce){var $e=ee.type;return $e===U?Se(K,G,ee.props.children,Ce,ee.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ne&&gh($e)===G.type)?(Ce=f(G,ee.props),Ce.ref=Ma(K,G,ee),Ce.return=K,Ce):(Ce=Zo(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=Ma(K,G,ee),Ce.return=K,Ce)}function ie(K,G,ee,Ce){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=Mu(ee,K.mode,Ce),G.return=K,G):(G=f(G,ee.children||[]),G.return=K,G)}function Se(K,G,ee,Ce,$e){return G===null||G.tag!==7?(G=Gr(ee,K.mode,Ce,$e),G.return=K,G):(G=f(G,ee),G.return=K,G)}function Ee(K,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=yu(""+G,K.mode,ee),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return ee=Zo(G.type,G.key,G.props,null,K.mode,ee),ee.ref=Ma(K,null,G),ee.return=K,ee;case N:return G=Mu(G,K.mode,ee),G.return=K,G;case ne:var Ce=G._init;return Ee(K,Ce(G._payload),ee)}if(Ze(G)||ue(G))return G=Gr(G,K.mode,ee,null),G.return=K,G;Ao(K,G)}return null}function ye(K,G,ee,Ce){var $e=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return $e!==null?null:I(K,G,""+ee,Ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:return ee.key===$e?B(K,G,ee,Ce):null;case N:return ee.key===$e?ie(K,G,ee,Ce):null;case ne:return $e=ee._init,ye(K,G,$e(ee._payload),Ce)}if(Ze(ee)||ue(ee))return $e!==null?null:Se(K,G,ee,Ce,null);Ao(K,ee)}return null}function ze(K,G,ee,Ce,$e){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(ee)||null,I(G,K,""+Ce,$e);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case V:return K=K.get(Ce.key===null?ee:Ce.key)||null,B(G,K,Ce,$e);case N:return K=K.get(Ce.key===null?ee:Ce.key)||null,ie(G,K,Ce,$e);case ne:var it=Ce._init;return ze(K,G,ee,it(Ce._payload),$e)}if(Ze(Ce)||ue(Ce))return K=K.get(ee)||null,Se(G,K,Ce,$e,null);Ao(G,Ce)}return null}function Ge(K,G,ee,Ce){for(var $e=null,it=null,rt=G,at=G=0,sn=null;rt!==null&&at<ee.length;at++){rt.index>at?(sn=rt,rt=null):sn=rt.sibling;var At=ye(K,rt,ee[at],Ce);if(At===null){rt===null&&(rt=sn);break}n&&rt&&At.alternate===null&&i(K,rt),G=g(At,G,at),it===null?$e=At:it.sibling=At,it=At,rt=sn}if(at===ee.length)return a(K,rt),Vt&&Ur(K,at),$e;if(rt===null){for(;at<ee.length;at++)rt=Ee(K,ee[at],Ce),rt!==null&&(G=g(rt,G,at),it===null?$e=rt:it.sibling=rt,it=rt);return Vt&&Ur(K,at),$e}for(rt=c(K,rt);at<ee.length;at++)sn=ze(rt,K,at,ee[at],Ce),sn!==null&&(n&&sn.alternate!==null&&rt.delete(sn.key===null?at:sn.key),G=g(sn,G,at),it===null?$e=sn:it.sibling=sn,it=sn);return n&&rt.forEach(function(vr){return i(K,vr)}),Vt&&Ur(K,at),$e}function je(K,G,ee,Ce){var $e=ue(ee);if(typeof $e!="function")throw Error(t(150));if(ee=$e.call(ee),ee==null)throw Error(t(151));for(var it=$e=null,rt=G,at=G=0,sn=null,At=ee.next();rt!==null&&!At.done;at++,At=ee.next()){rt.index>at?(sn=rt,rt=null):sn=rt.sibling;var vr=ye(K,rt,At.value,Ce);if(vr===null){rt===null&&(rt=sn);break}n&&rt&&vr.alternate===null&&i(K,rt),G=g(vr,G,at),it===null?$e=vr:it.sibling=vr,it=vr,rt=sn}if(At.done)return a(K,rt),Vt&&Ur(K,at),$e;if(rt===null){for(;!At.done;at++,At=ee.next())At=Ee(K,At.value,Ce),At!==null&&(G=g(At,G,at),it===null?$e=At:it.sibling=At,it=At);return Vt&&Ur(K,at),$e}for(rt=c(K,rt);!At.done;at++,At=ee.next())At=ze(rt,K,at,At.value,Ce),At!==null&&(n&&At.alternate!==null&&rt.delete(At.key===null?at:At.key),G=g(At,G,at),it===null?$e=At:it.sibling=At,it=At);return n&&rt.forEach(function(yv){return i(K,yv)}),Vt&&Ur(K,at),$e}function Xt(K,G,ee,Ce){if(typeof ee=="object"&&ee!==null&&ee.type===U&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:e:{for(var $e=ee.key,it=G;it!==null;){if(it.key===$e){if($e=ee.type,$e===U){if(it.tag===7){a(K,it.sibling),G=f(it,ee.props.children),G.return=K,K=G;break e}}else if(it.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ne&&gh($e)===it.type){a(K,it.sibling),G=f(it,ee.props),G.ref=Ma(K,it,ee),G.return=K,K=G;break e}a(K,it);break}else i(K,it);it=it.sibling}ee.type===U?(G=Gr(ee.props.children,K.mode,Ce,ee.key),G.return=K,K=G):(Ce=Zo(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=Ma(K,G,ee),Ce.return=K,K=Ce)}return w(K);case N:e:{for(it=ee.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){a(K,G.sibling),G=f(G,ee.children||[]),G.return=K,K=G;break e}else{a(K,G);break}else i(K,G);G=G.sibling}G=Mu(ee,K.mode,Ce),G.return=K,K=G}return w(K);case ne:return it=ee._init,Xt(K,G,it(ee._payload),Ce)}if(Ze(ee))return Ge(K,G,ee,Ce);if(ue(ee))return je(K,G,ee,Ce);Ao(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(a(K,G.sibling),G=f(G,ee),G.return=K,K=G):(a(K,G),G=yu(ee,K.mode,Ce),G.return=K,K=G),w(K)):a(K,G)}return Xt}var ys=vh(!0),_h=vh(!1),Ro=ar(null),Co=null,Ms=null,Pc=null;function Lc(){Pc=Ms=Co=null}function Dc(n){var i=Ro.current;Ht(Ro),n._currentValue=i}function Nc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ss(n,i){Co=n,Pc=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Pc!==n)if(n={context:n,memoizedValue:i,next:null},Ms===null){if(Co===null)throw Error(t(308));Ms=n,Co.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return i}var Fr=null;function Ic(n){Fr===null?Fr=[n]:Fr.push(n)}function xh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Ic(i)):(a.next=f.next,f.next=a),i.interleaved=a,Fi(n,c)}function Fi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var cr=!1;function Uc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Fi(n,a)}return f=c.interleaved,f===null?(i.next=i,Ic(c)):(i.next=f.next,f.next=i),c.interleaved=i,Fi(n,a)}function bo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,$l(n,a)}}function Mh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Po(n,i,a,c){var f=n.updateQueue;cr=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,ie=B.next;B.next=null,w===null?g=ie:w.next=ie,w=B;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==w&&(I===null?Se.firstBaseUpdate=ie:I.next=ie,Se.lastBaseUpdate=B))}if(g!==null){var Ee=f.baseState;w=0,Se=ie=B=null,I=g;do{var ye=I.lane,ze=I.eventTime;if((c&ye)===ye){Se!==null&&(Se=Se.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ge=n,je=I;switch(ye=i,ze=a,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){Ee=Ge.call(ze,Ee,ye);break e}Ee=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,ye=typeof Ge=="function"?Ge.call(ze,Ee,ye):Ge,ye==null)break e;Ee=oe({},Ee,ye);break e;case 2:cr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[I]:ye.push(I))}else ze={eventTime:ze,lane:ye,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(ie=Se=ze,B=Ee):Se=Se.next=ze,w|=ye;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ye=I,I=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Se===null&&(B=Ee),f.baseState=B,f.firstBaseUpdate=ie,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);zr|=w,n.lanes=w,n.memoizedState=Ee}}function Sh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Sa={},Si=ar(Sa),Ea=ar(Sa),wa=ar(Sa);function Or(n){if(n===Sa)throw Error(t(174));return n}function Fc(n,i){switch(Ft(wa,i),Ft(Ea,n),Ft(Si,Sa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Fe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Fe(i,n)}Ht(Si),Ft(Si,i)}function Es(){Ht(Si),Ht(Ea),Ht(wa)}function Eh(n){Or(wa.current);var i=Or(Si.current),a=Fe(i,n.type);i!==a&&(Ft(Ea,n),Ft(Si,a))}function Oc(n){Ea.current===n&&(Ht(Si),Ht(Ea))}var Gt=ar(0);function Lo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var kc=[];function zc(){for(var n=0;n<kc.length;n++)kc[n]._workInProgressVersionPrimary=null;kc.length=0}var Do=T.ReactCurrentDispatcher,Bc=T.ReactCurrentBatchConfig,kr=0,Wt=null,Qt=null,nn=null,No=!1,Ta=!1,Aa=0,Vg=0;function pn(){throw Error(t(321))}function Hc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function Vc(n,i,a,c,f,g){if(kr=g,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=n===null||n.memoizedState===null?Xg:qg,n=a(c,f),Ta){g=0;do{if(Ta=!1,Aa=0,25<=g)throw Error(t(301));g+=1,nn=Qt=null,i.updateQueue=null,Do.current=Yg,n=a(c,f)}while(Ta)}if(Do.current=Fo,i=Qt!==null&&Qt.next!==null,kr=0,nn=Qt=Wt=null,No=!1,i)throw Error(t(300));return n}function Gc(){var n=Aa!==0;return Aa=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Wt.memoizedState=nn=n:nn=nn.next=n,nn}function Jn(){if(Qt===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=nn===null?Wt.memoizedState:nn.next;if(i!==null)nn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},nn===null?Wt.memoizedState=nn=n:nn=nn.next=n}return nn}function Ra(n,i){return typeof i=="function"?i(n):i}function Wc(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Qt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=w=null,B=null,ie=g;do{var Se=ie.lane;if((kr&Se)===Se)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var Ee={lane:Se,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(I=B=Ee,w=c):B=B.next=Ee,Wt.lanes|=Se,zr|=Se}ie=ie.next}while(ie!==null&&ie!==g);B===null?w=c:B.next=I,oi(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do g=f.lane,Wt.lanes|=g,zr|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function jc(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=n(g,w.action),w=w.next;while(w!==f);oi(g,i.memoizedState)||(Dn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function wh(){}function Th(n,i){var a=Wt,c=Jn(),f=i(),g=!oi(c.memoizedState,f);if(g&&(c.memoizedState=f,Dn=!0),c=c.queue,Xc(Ch.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Ca(9,Rh.bind(null,a,c,f,i),void 0,null),rn===null)throw Error(t(349));(kr&30)!==0||Ah(a,i,f)}return f}function Ah(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Rh(n,i,a,c){i.value=a,i.getSnapshot=c,bh(i)&&Ph(n)}function Ch(n,i,a){return a(function(){bh(i)&&Ph(n)})}function bh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function Ph(n){var i=Fi(n,1);i!==null&&fi(i,n,1,-1)}function Lh(n){var i=Ei();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:n},i.queue=n,n=n.dispatch=jg.bind(null,Wt,n),[i.memoizedState,n]}function Ca(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Dh(){return Jn().memoizedState}function Io(n,i,a,c){var f=Ei();Wt.flags|=n,f.memoizedState=Ca(1|i,a,void 0,c===void 0?null:c)}function Uo(n,i,a,c){var f=Jn();c=c===void 0?null:c;var g=void 0;if(Qt!==null){var w=Qt.memoizedState;if(g=w.destroy,c!==null&&Hc(c,w.deps)){f.memoizedState=Ca(i,a,g,c);return}}Wt.flags|=n,f.memoizedState=Ca(1|i,a,g,c)}function Nh(n,i){return Io(8390656,8,n,i)}function Xc(n,i){return Uo(2048,8,n,i)}function Ih(n,i){return Uo(4,2,n,i)}function Uh(n,i){return Uo(4,4,n,i)}function Fh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Oh(n,i,a){return a=a!=null?a.concat([n]):null,Uo(4,4,Fh.bind(null,i,n),a)}function qc(){}function kh(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Hc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function zh(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Hc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Bh(n,i,a){return(kr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(oi(a,i)||(a=En(),Wt.lanes|=a,zr|=a,n.baseState=!0),i)}function Gg(n,i){var a=Lt;Lt=a!==0&&4>a?a:4,n(!0);var c=Bc.transition;Bc.transition={};try{n(!1),i()}finally{Lt=a,Bc.transition=c}}function Hh(){return Jn().memoizedState}function Wg(n,i,a){var c=pr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Vh(n))Gh(i,a);else if(a=xh(n,i,a,c),a!==null){var f=Tn();fi(a,n,c,f),Wh(a,i,c)}}function jg(n,i,a){var c=pr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vh(n))Gh(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,I=g(w,a);if(f.hasEagerState=!0,f.eagerState=I,oi(I,w)){var B=i.interleaved;B===null?(f.next=f,Ic(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=xh(n,i,f,c),a!==null&&(f=Tn(),fi(a,n,c,f),Wh(a,i,c))}}function Vh(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function Gh(n,i){Ta=No=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wh(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,$l(n,a)}}var Fo={readContext:Qn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Xg={readContext:Qn,useCallback:function(n,i){return Ei().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:Nh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Io(4194308,4,Fh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Io(4194308,4,n,i)},useInsertionEffect:function(n,i){return Io(4,2,n,i)},useMemo:function(n,i){var a=Ei();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ei();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Wg.bind(null,Wt,n),[c.memoizedState,n]},useRef:function(n){var i=Ei();return n={current:n},i.memoizedState=n},useState:Lh,useDebugValue:qc,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=Lh(!1),i=n[0];return n=Gg.bind(null,n[1]),Ei().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Wt,f=Ei();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),rn===null)throw Error(t(349));(kr&30)!==0||Ah(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,Nh(Ch.bind(null,c,g,n),[n]),c.flags|=2048,Ca(9,Rh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ei(),i=rn.identifierPrefix;if(Vt){var a=Ui,c=Ii;a=(c&~(1<<32-ut(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Vg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},qg={readContext:Qn,useCallback:kh,useContext:Qn,useEffect:Xc,useImperativeHandle:Oh,useInsertionEffect:Ih,useLayoutEffect:Uh,useMemo:zh,useReducer:Wc,useRef:Dh,useState:function(){return Wc(Ra)},useDebugValue:qc,useDeferredValue:function(n){var i=Jn();return Bh(i,Qt.memoizedState,n)},useTransition:function(){var n=Wc(Ra)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Th,useId:Hh,unstable_isNewReconciler:!1},Yg={readContext:Qn,useCallback:kh,useContext:Qn,useEffect:Xc,useImperativeHandle:Oh,useInsertionEffect:Ih,useLayoutEffect:Uh,useMemo:zh,useReducer:jc,useRef:Dh,useState:function(){return jc(Ra)},useDebugValue:qc,useDeferredValue:function(n){var i=Jn();return Qt===null?i.memoizedState=n:Bh(i,Qt.memoizedState,n)},useTransition:function(){var n=jc(Ra)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Th,useId:Hh,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Yc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Oo={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Tn(),f=pr(n),g=Oi(c,f);g.payload=i,a!=null&&(g.callback=a),i=ur(n,g,f),i!==null&&(fi(i,n,f,c),bo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Tn(),f=pr(n),g=Oi(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ur(n,g,f),i!==null&&(fi(i,n,f,c),bo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Tn(),c=pr(n),f=Oi(a,c);f.tag=2,i!=null&&(f.callback=i),i=ur(n,f,c),i!==null&&(fi(i,n,c,a),bo(i,n,c))}};function jh(n,i,a,c,f,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!pa(a,c)||!pa(f,g):!0}function Xh(n,i,a){var c=!1,f=or,g=i.contextType;return typeof g=="object"&&g!==null?g=Qn(g):(f=Ln(i)?Nr:hn.current,c=i.contextTypes,g=(c=c!=null)?gs(n,f):or),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function qh(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Oo.enqueueReplaceState(i,i.state,null)}function $c(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Uc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Qn(g):(g=Ln(i)?Nr:hn.current,f.context=gs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Yc(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Oo.enqueueReplaceState(f,f.state,null),Po(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var a="",c=i;do a+=me(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function Zc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Kc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var $g=typeof WeakMap=="function"?WeakMap:Map;function Yh(n,i,a){a=Oi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Wo||(Wo=!0,fu=c),Kc(n,i)},a}function $h(n,i,a){a=Oi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Kc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Kc(n,i),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Zh(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new $g;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=cv.bind(null,n,i,a),i.then(n,n))}function Kh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Qh(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Oi(-1,1),i.tag=2,ur(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Zg=T.ReactCurrentOwner,Dn=!1;function wn(n,i,a,c){i.child=n===null?_h(i,null,a,c):ys(i,n.child,a,c)}function Jh(n,i,a,c,f){a=a.render;var g=i.ref;return Ss(i,f),c=Vc(n,i,a,c,g,f),a=Gc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(Vt&&a&&Tc(i),i.flags|=1,wn(n,i,c,f),i.child)}function ep(n,i,a,c,f){if(n===null){var g=a.type;return typeof g=="function"&&!xu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,tp(n,i,g,c,f)):(n=Zo(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(w,c)&&n.ref===i.ref)return ki(n,i,f)}return i.flags|=1,n=gr(g,c),n.ref=i.ref,n.return=i,i.child=n}function tp(n,i,a,c,f){if(n!==null){var g=n.memoizedProps;if(pa(g,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,ki(n,i,f)}return Qc(n,i,a,c,f)}function np(n,i,a){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(As,Gn),Gn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(As,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Ft(As,Gn),Gn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Ft(As,Gn),Gn|=c;return wn(n,i,f,a),i.child}function ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qc(n,i,a,c,f){var g=Ln(a)?Nr:hn.current;return g=gs(i,g),Ss(i,f),a=Vc(n,i,a,c,g,f),c=Gc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(Vt&&c&&Tc(i),i.flags|=1,wn(n,i,a,f),i.child)}function rp(n,i,a,c,f){if(Ln(a)){var g=!0;Mo(i)}else g=!1;if(Ss(i,f),i.stateNode===null)zo(n,i),Xh(i,a,c),$c(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var B=w.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=Qn(ie):(ie=Ln(a)?Nr:hn.current,ie=gs(i,ie));var Se=a.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||B!==ie)&&qh(i,w,c,ie),cr=!1;var ye=i.memoizedState;w.state=ye,Po(i,c,w,f),B=i.memoizedState,I!==c||ye!==B||Pn.current||cr?(typeof Se=="function"&&(Yc(i,a,Se,c),B=i.memoizedState),(I=cr||jh(i,a,I,c,ye,B,ie))?(Ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),w.props=c,w.state=B,w.context=ie,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,yh(n,i),I=i.memoizedProps,ie=i.type===i.elementType?I:ci(i.type,I),w.props=ie,Ee=i.pendingProps,ye=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=Ln(a)?Nr:hn.current,B=gs(i,B));var ze=a.getDerivedStateFromProps;(Se=typeof ze=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Ee||ye!==B)&&qh(i,w,c,B),cr=!1,ye=i.memoizedState,w.state=ye,Po(i,c,w,f);var Ge=i.memoizedState;I!==Ee||ye!==Ge||Pn.current||cr?(typeof ze=="function"&&(Yc(i,a,ze,c),Ge=i.memoizedState),(ie=cr||jh(i,a,ie,c,ye,Ge,B)||!1)?(Se||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ge,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ge,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),w.props=c,w.state=Ge,w.context=B,c=ie):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return Jc(n,i,a,c,g,f)}function Jc(n,i,a,c,f,g){ip(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&ch(i,a,!1),ki(n,i,g);c=i.stateNode,Zg.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=ys(i,n.child,null,g),i.child=ys(i,null,I,g)):wn(n,i,I,g),i.memoizedState=c.state,f&&ch(i,a,!0),i.child}function sp(n){var i=n.stateNode;i.pendingContext?oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(n,i.context,!1),Fc(n,i.containerInfo)}function ap(n,i,a,c,f){return xs(),bc(f),i.flags|=256,wn(n,i,a,c),i.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function op(n,i,a){var c=i.pendingProps,f=Gt.current,g=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ft(Gt,f&1),n===null)return Cc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Ko(w,c,0,null),n=Gr(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=tu(a),i.memoizedState=eu,n):nu(i,w));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return Kg(n,i,w,c,I,f,a);if(g){g=c.fallback,w=i.mode,f=n.child,I=f.sibling;var B={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=gr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=gr(I,g):(g=Gr(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?tu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=eu,c}return g=n.child,n=g.sibling,c=gr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function nu(n,i){return i=Ko({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ko(n,i,a,c){return c!==null&&bc(c),ys(i,n.child,null,a),n=nu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Kg(n,i,a,c,f,g,w){if(a)return i.flags&256?(i.flags&=-257,c=Zc(Error(t(422))),ko(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=Ko({mode:"visible",children:c.children},f,0,null),g=Gr(g,f,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&ys(i,n.child,null,w),i.child.memoizedState=tu(w),i.memoizedState=eu,g);if((i.mode&1)===0)return ko(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=Zc(g,c,void 0),ko(n,i,w,c)}if(I=(w&n.childLanes)!==0,Dn||I){if(c=rn,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Fi(n,f),fi(c,n,f,-1))}return _u(),c=Zc(Error(t(421))),ko(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=uv.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,Vn=sr(f.nextSibling),Hn=i,Vt=!0,li=null,n!==null&&(Zn[Kn++]=Ii,Zn[Kn++]=Ui,Zn[Kn++]=Ir,Ii=n.id,Ui=n.overflow,Ir=i),i=nu(i,c.children),i.flags|=4096,i)}function lp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Nc(n.return,i,a)}function iu(n,i,a,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function cp(n,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(wn(n,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lp(n,a,i);else if(n.tag===19)lp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Lo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),iu(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Lo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}iu(i,!0,a,null,g);break;case"together":iu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Qg(n,i,a){switch(i.tag){case 3:sp(i),xs();break;case 5:Eh(i);break;case 1:Ln(i.type)&&Mo(i);break;case 4:Fc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ft(Ro,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?op(n,i,a):(Ft(Gt,Gt.current&1),n=ki(n,i,a),n!==null?n.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return cp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ft(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,np(n,i,a)}return ki(n,i,a)}var up,ru,dp,fp;up=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ru=function(){},dp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Or(Si.current);var g=null;switch(a){case"input":f=q(n,f),c=q(n,c),g=[];break;case"select":f=oe({},f,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":f=R(n,f),c=R(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=_o)}gt(a,c);var w;a=null;for(ie in f)if(!c.hasOwnProperty(ie)&&f.hasOwnProperty(ie)&&f[ie]!=null)if(ie==="style"){var I=f[ie];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in c){var B=c[ie];if(I=f!=null?f[ie]:void 0,c.hasOwnProperty(ie)&&B!==I&&(B!=null||I!=null))if(ie==="style")if(I){for(w in I)!I.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&I[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(g||(g=[]),g.push(ie,a)),a=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(g=g||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&Bt("scroll",n),g||I===B||(g=[])):(g=g||[]).push(ie,B))}a&&(g=g||[]).push("style",a);var ie=g;(i.updateQueue=ie)&&(i.flags|=4)}},fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function ba(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Jg(n,i,a){var c=i.pendingProps;switch(Ac(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Ln(i.type)&&yo(),mn(i),null;case 3:return c=i.stateNode,Es(),Ht(Pn),Ht(hn),zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(To(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(mu(li),li=null))),ru(n,i),mn(i),null;case 5:Oc(i);var f=Or(wa.current);if(a=i.type,n!==null&&i.stateNode!=null)dp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Or(Si.current),To(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Mi]=i,c[xa]=g,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(f=0;f<ga.length;f++)Bt(ga[f],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Pe(c,g),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Bt("invalid",c);break;case"textarea":te(c,g),Bt("invalid",c)}gt(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var I=g[w];w==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&vo(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&vo(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Bt("scroll",c)}switch(a){case"input":bt(c),tt(c,g,!0);break;case"textarea":bt(c),le(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=_o)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Mi]=i,n[xa]=c,up(n,i,!1,!1),i.stateNode=n;e:{switch(w=lt(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),f=c;break;case"iframe":case"object":case"embed":Bt("load",n),f=c;break;case"video":case"audio":for(f=0;f<ga.length;f++)Bt(ga[f],n);f=c;break;case"source":Bt("error",n),f=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),f=c;break;case"details":Bt("toggle",n),f=c;break;case"input":Pe(n,c),f=q(n,c),Bt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=oe({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":te(n,c),f=R(n,c),Bt("invalid",n);break;default:f=c}gt(a,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var B=I[g];g==="style"?Je(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Te(n,B)):g==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&xe(n,B):typeof B=="number"&&xe(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Bt("scroll",n):B!=null&&P(n,g,B,w))}switch(a){case"input":bt(n),tt(n,c,!1);break;case"textarea":bt(n),le(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?D(n,!!c.multiple,g,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=_o)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Or(wa.current),Or(Si.current),To(i)){if(c=i.stateNode,a=i.memoizedProps,c[Mi]=i,(g=c.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:vo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return mn(i),null;case 13:if(Ht(Gt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mh(),xs(),i.flags|=98560,g=!1;else if(g=To(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Mi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),g=!1}else li!==null&&(mu(li),li=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?Jt===0&&(Jt=3):_u())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Es(),ru(n,i),n===null&&va(i.stateNode.containerInfo),mn(i),null;case 10:return Dc(i.type._context),mn(i),null;case 17:return Ln(i.type)&&yo(),mn(i),null;case 19:if(Ht(Gt),g=i.memoizedState,g===null)return mn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)ba(g,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Lo(n),w!==null){for(i.flags|=128,ba(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Gt,Gt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Ae()>Rs&&(i.flags|=128,c=!0,ba(g,!1),i.lanes=4194304)}else{if(!c)if(n=Lo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ba(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Vt)return mn(i),null}else 2*Ae()-g.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,c=!0,ba(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ae(),i.sibling=null,a=Gt.current,Ft(Gt,c?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return vu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ev(n,i){switch(Ac(i),i.tag){case 1:return Ln(i.type)&&yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),Ht(Pn),Ht(hn),zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Oc(i),null;case 13:if(Ht(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(Gt),null;case 4:return Es(),null;case 10:return Dc(i.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var Bo=!1,gn=!1,tv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ts(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(n,i,c)}else a.current=null}function su(n,i,a){try{a()}catch(c){jt(n,i,c)}}var hp=!1;function nv(n,i){if(vc=so,n=jf(),cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,I=-1,B=-1,ie=0,Se=0,Ee=n,ye=null;t:for(;;){for(var ze;Ee!==a||f!==0&&Ee.nodeType!==3||(I=w+f),Ee!==g||c!==0&&Ee.nodeType!==3||(B=w+c),Ee.nodeType===3&&(w+=Ee.nodeValue.length),(ze=Ee.firstChild)!==null;)ye=Ee,Ee=ze;for(;;){if(Ee===n)break t;if(ye===a&&++ie===f&&(I=w),ye===g&&++Se===c&&(B=w),(ze=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=ze}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(_c={focusedElem:n,selectionRange:a},so=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,Xt=Ge.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?je:ci(i.type,je),Xt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){jt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return Ge=hp,hp=!1,Ge}function Pa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&su(i,a,g)}f=f.next}while(f!==c)}}function Ho(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function pp(n){var i=n.alternate;i!==null&&(n.alternate=null,pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[xa],delete i[Sc],delete i[kg],delete i[zg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mp(n){return n.tag===5||n.tag===3||n.tag===4}function gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ou(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_o));else if(c!==4&&(n=n.child,n!==null))for(ou(n,i,a),n=n.sibling;n!==null;)ou(n,i,a),n=n.sibling}function lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(lu(n,i,a),n=n.sibling;n!==null;)lu(n,i,a),n=n.sibling}var cn=null,ui=!1;function dr(n,i,a){for(a=a.child;a!==null;)vp(n,i,a),a=a.sibling}function vp(n,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 5:gn||Ts(a,i);case 6:var c=cn,f=ui;cn=null,dr(n,i,a),cn=c,ui=f,cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),la(n)):Mc(cn,a.stateNode));break;case 4:c=cn,f=ui,cn=a.stateNode.containerInfo,ui=!0,dr(n,i,a),cn=c,ui=f;break;case 0:case 11:case 14:case 15:if(!gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&su(a,i,w),f=f.next}while(f!==c)}dr(n,i,a);break;case 1:if(!gn&&(Ts(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,i,I)}dr(n,i,a);break;case 21:dr(n,i,a);break;case 22:a.mode&1?(gn=(c=gn)||a.memoizedState!==null,dr(n,i,a),gn=c):dr(n,i,a);break;default:dr(n,i,a)}}function _p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new tv),i.forEach(function(c){var f=dv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,ui=!1;break e;case 3:cn=I.stateNode.containerInfo,ui=!0;break e;case 4:cn=I.stateNode.containerInfo,ui=!0;break e}I=I.return}if(cn===null)throw Error(t(160));vp(g,w,f),cn=null,ui=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ie){jt(f,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xp(i,n),i=i.sibling}function xp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),wi(n),c&4){try{Pa(3,n,n.return),Ho(3,n)}catch(je){jt(n,n.return,je)}try{Pa(5,n,n.return)}catch(je){jt(n,n.return,je)}}break;case 1:di(i,n),wi(n),c&512&&a!==null&&Ts(a,a.return);break;case 5:if(di(i,n),wi(n),c&512&&a!==null&&Ts(a,a.return),n.flags&32){var f=n.stateNode;try{xe(f,"")}catch(je){jt(n,n.return,je)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Qe(f,g),lt(I,w);var ie=lt(I,g);for(w=0;w<B.length;w+=2){var Se=B[w],Ee=B[w+1];Se==="style"?Je(f,Ee):Se==="dangerouslySetInnerHTML"?Te(f,Ee):Se==="children"?xe(f,Ee):P(f,Se,Ee,ie)}switch(I){case"input":nt(f,g);break;case"textarea":Z(f,g);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ze=g.value;ze!=null?D(f,!!g.multiple,ze,!1):ye!==!!g.multiple&&(g.defaultValue!=null?D(f,!!g.multiple,g.defaultValue,!0):D(f,!!g.multiple,g.multiple?[]:"",!1))}f[xa]=g}catch(je){jt(n,n.return,je)}}break;case 6:if(di(i,n),wi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(je){jt(n,n.return,je)}}break;case 3:if(di(i,n),wi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(je){jt(n,n.return,je)}break;case 4:di(i,n),wi(n);break;case 13:di(i,n),wi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(du=Ae())),c&4&&_p(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(ie=gn)||Se,di(i,n),gn=ie):di(i,n),wi(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!Se&&(n.mode&1)!==0)for(Be=n,Se=n.child;Se!==null;){for(Ee=Be=Se;Be!==null;){switch(ye=Be,ze=ye.child,ye.tag){case 0:case 11:case 14:case 15:Pa(4,ye,ye.return);break;case 1:Ts(ye,ye.return);var Ge=ye.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ye,a=ye.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(je){jt(c,a,je)}}break;case 5:Ts(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Sp(Ee);continue}}ze!==null?(ze.return=ye,Be=ze):Sp(Ee)}Se=Se.sibling}e:for(Se=null,Ee=n;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{f=Ee.stateNode,ie?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Ee.stateNode,B=Ee.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=He("display",w))}catch(je){jt(n,n.return,je)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=ie?"":Ee.memoizedProps}catch(je){jt(n,n.return,je)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:di(i,n),wi(n),c&4&&_p(n);break;case 21:break;default:di(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(mp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(xe(f,""),c.flags&=-33);var g=gp(n);lu(n,g,f);break;case 3:case 4:var w=c.stateNode.containerInfo,I=gp(n);ou(n,I,w);break;default:throw Error(t(161))}}catch(B){jt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function iv(n,i,a){Be=n,yp(n)}function yp(n,i,a){for(var c=(n.mode&1)!==0;Be!==null;){var f=Be,g=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Bo;if(!w){var I=f.alternate,B=I!==null&&I.memoizedState!==null||gn;I=Bo;var ie=gn;if(Bo=w,(gn=B)&&!ie)for(Be=f;Be!==null;)w=Be,B=w.child,w.tag===22&&w.memoizedState!==null?Ep(f):B!==null?(B.return=w,Be=B):Ep(f);for(;g!==null;)Be=g,yp(g),g=g.sibling;Be=f,Bo=I,gn=ie}Mp(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Be=g):Mp(n)}}function Mp(n){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Ho(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!gn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Sh(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var Se=ie.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&la(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&au(i)}catch(ye){jt(i,i.return,ye)}}if(i===n){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function Sp(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function Ep(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ho(4,i)}catch(B){jt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){jt(i,f,B)}}var g=i.return;try{au(i)}catch(B){jt(i,g,B)}break;case 5:var w=i.return;try{au(i)}catch(B){jt(i,w,B)}}}catch(B){jt(i,i.return,B)}if(i===n){Be=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Be=I;break}Be=i.return}}var rv=Math.ceil,Vo=T.ReactCurrentDispatcher,cu=T.ReactCurrentOwner,ei=T.ReactCurrentBatchConfig,St=0,rn=null,qt=null,un=0,Gn=0,As=ar(0),Jt=0,La=null,zr=0,Go=0,uu=0,Da=null,Nn=null,du=0,Rs=1/0,zi=null,Wo=!1,fu=null,fr=null,jo=!1,hr=null,Xo=0,Na=0,hu=null,qo=-1,Yo=0;function Tn(){return(St&6)!==0?Ae():qo!==-1?qo:qo=Ae()}function pr(n){return(n.mode&1)===0?1:(St&2)!==0&&un!==0?un&-un:Hg.transition!==null?(Yo===0&&(Yo=En()),Yo):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:Tf(n.type)),n)}function fi(n,i,a,c){if(50<Na)throw Na=0,hu=null,Error(t(185));bn(n,a,c),((St&2)===0||n!==rn)&&(n===rn&&((St&2)===0&&(Go|=a),Jt===4&&mr(n,un)),In(n,c),a===1&&St===0&&(i.mode&1)===0&&(Rs=Ae()+500,So&&lr()))}function In(n,i){var a=n.callbackNode;Yn(n,i);var c=yi(n,n===rn?un:0);if(c===0)a!==null&&ae(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ae(a),i===1)n.tag===0?Bg(Tp.bind(null,n)):uh(Tp.bind(null,n)),Fg(function(){(St&6)===0&&lr()}),a=null;else{switch(vf(c)){case 1:a=We;break;case 4:a=st;break;case 16:a=ot;break;case 536870912:a=yt;break;default:a=ot}a=Np(a,wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function wp(n,i){if(qo=-1,Yo=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Cs()&&n.callbackNode!==a)return null;var c=yi(n,n===rn?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=$o(n,c);else{i=c;var f=St;St|=2;var g=Rp();(rn!==n||un!==i)&&(zi=null,Rs=Ae()+500,Hr(n,i));do try{ov();break}catch(I){Ap(n,I)}while(!0);Lc(),Vo.current=g,St=f,qt!==null?i=0:(rn=null,un=0,i=Jt)}if(i!==0){if(i===2&&(f=Li(n),f!==0&&(c=f,i=pu(n,f))),i===1)throw a=La,Hr(n,0),mr(n,c),In(n,Ae()),a;if(i===6)mr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!sv(f)&&(i=$o(n,c),i===2&&(g=Li(n),g!==0&&(c=g,i=pu(n,g))),i===1))throw a=La,Hr(n,0),mr(n,c),In(n,Ae()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Nn,zi);break;case 3:if(mr(n,c),(c&130023424)===c&&(i=du+500-Ae(),10<i)){if(yi(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Tn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=yc(Vr.bind(null,n,Nn,zi),i);break}Vr(n,Nn,zi);break;case 4:if(mr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-ut(c);g=1<<w,w=i[w],w>f&&(f=w),c&=~g}if(c=f,c=Ae()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rv(c/1960))-c,10<c){n.timeoutHandle=yc(Vr.bind(null,n,Nn,zi),c);break}Vr(n,Nn,zi);break;case 5:Vr(n,Nn,zi);break;default:throw Error(t(329))}}}return In(n,Ae()),n.callbackNode===a?wp.bind(null,n):null}function pu(n,i){var a=Da;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=$o(n,i),n!==2&&(i=Nn,Nn=a,i!==null&&mu(i)),n}function mu(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function sv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!oi(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~uu,i&=~Go,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ut(i),c=1<<a;n[a]=-1,i&=~c}}function Tp(n){if((St&6)!==0)throw Error(t(327));Cs();var i=yi(n,0);if((i&1)===0)return In(n,Ae()),null;var a=$o(n,i);if(n.tag!==0&&a===2){var c=Li(n);c!==0&&(i=c,a=pu(n,c))}if(a===1)throw a=La,Hr(n,0),mr(n,i),In(n,Ae()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Nn,zi),In(n,Ae()),null}function gu(n,i){var a=St;St|=1;try{return n(i)}finally{St=a,St===0&&(Rs=Ae()+500,So&&lr())}}function Br(n){hr!==null&&hr.tag===0&&(St&6)===0&&Cs();var i=St;St|=1;var a=ei.transition,c=Lt;try{if(ei.transition=null,Lt=1,n)return n()}finally{Lt=c,ei.transition=a,St=i,(St&6)===0&&lr()}}function vu(){Gn=As.current,Ht(As)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ug(a)),qt!==null)for(a=qt.return;a!==null;){var c=a;switch(Ac(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&yo();break;case 3:Es(),Ht(Pn),Ht(hn),zc();break;case 5:Oc(c);break;case 4:Es();break;case 13:Ht(Gt);break;case 19:Ht(Gt);break;case 10:Dc(c.type._context);break;case 22:case 23:vu()}a=a.return}if(rn=n,qt=n=gr(n.current,null),un=Gn=i,Jt=0,La=null,uu=Go=zr=0,Nn=Da=null,Fr!==null){for(i=0;i<Fr.length;i++)if(a=Fr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,c.next=w}a.pending=c}Fr=null}return n}function Ap(n,i){do{var a=qt;try{if(Lc(),Do.current=Fo,No){for(var c=Wt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}No=!1}if(kr=0,nn=Qt=Wt=null,Ta=!1,Aa=0,cu.current=null,a===null||a.return===null){Jt=1,La=i,qt=null;break}e:{var g=n,w=a.return,I=a,B=i;if(i=un,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,Se=I,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ze=Kh(w);if(ze!==null){ze.flags&=-257,Qh(ze,w,I,g,i),ze.mode&1&&Zh(g,ie,i),i=ze,B=ie;var Ge=i.updateQueue;if(Ge===null){var je=new Set;je.add(B),i.updateQueue=je}else Ge.add(B);break e}else{if((i&1)===0){Zh(g,ie,i),_u();break e}B=Error(t(426))}}else if(Vt&&I.mode&1){var Xt=Kh(w);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Qh(Xt,w,I,g,i),bc(ws(B,I));break e}}g=B=ws(B,I),Jt!==4&&(Jt=2),Da===null?Da=[g]:Da.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var K=Yh(g,B,i);Mh(g,K);break e;case 1:I=B;var G=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(fr===null||!fr.has(ee)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=$h(g,I,i);Mh(g,Ce);break e}}g=g.return}while(g!==null)}bp(a)}catch($e){i=$e,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function Rp(){var n=Vo.current;return Vo.current=Fo,n===null?Fo:n}function _u(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||(zr&268435455)===0&&(Go&268435455)===0||mr(rn,un)}function $o(n,i){var a=St;St|=2;var c=Rp();(rn!==n||un!==i)&&(zi=null,Hr(n,i));do try{av();break}catch(f){Ap(n,f)}while(!0);if(Lc(),St=a,Vo.current=c,qt!==null)throw Error(t(261));return rn=null,un=0,Jt}function av(){for(;qt!==null;)Cp(qt)}function ov(){for(;qt!==null&&!Y();)Cp(qt)}function Cp(n){var i=Dp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?bp(n):qt=i,cu.current=null}function bp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Jg(a,i,Gn),a!==null){qt=a;return}}else{if(a=ev(a,i),a!==null){a.flags&=32767,qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Jt===0&&(Jt=5)}function Vr(n,i,a){var c=Lt,f=ei.transition;try{ei.transition=null,Lt=1,lv(n,i,a,c)}finally{ei.transition=f,Lt=c}return null}function lv(n,i,a,c){do Cs();while(hr!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(no(n,g),n===rn&&(qt=rn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||jo||(jo=!0,Np(ot,function(){return Cs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ei.transition,ei.transition=null;var w=Lt;Lt=1;var I=St;St|=4,cu.current=null,nv(n,a),xp(a,n),Cg(_c),so=!!vc,_c=vc=null,n.current=a,iv(a),be(),St=I,Lt=w,ei.transition=g}else n.current=a;if(jo&&(jo=!1,hr=n,Xo=f),g=n.pendingLanes,g===0&&(fr=null),dn(a.stateNode),In(n,Ae()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Wo)throw Wo=!1,n=fu,fu=null,n;return(Xo&1)!==0&&n.tag!==0&&Cs(),g=n.pendingLanes,(g&1)!==0?n===hu?Na++:(Na=0,hu=n):Na=0,lr(),null}function Cs(){if(hr!==null){var n=vf(Xo),i=ei.transition,a=Lt;try{if(ei.transition=null,Lt=16>n?16:n,hr===null)var c=!1;else{if(n=hr,hr=null,Xo=0,(St&6)!==0)throw Error(t(331));var f=St;for(St|=4,Be=n.current;Be!==null;){var g=Be,w=g.child;if((Be.flags&16)!==0){var I=g.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ie=I[B];for(Be=ie;Be!==null;){var Se=Be;switch(Se.tag){case 0:case 11:case 15:Pa(8,Se,g)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,Be=Ee;else for(;Be!==null;){Se=Be;var ye=Se.sibling,ze=Se.return;if(pp(Se),Se===ie){Be=null;break}if(ye!==null){ye.return=ze,Be=ye;break}Be=ze}}}var Ge=g.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var Xt=je.sibling;je.sibling=null,je=Xt}while(je!==null)}}Be=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Be=w;else e:for(;Be!==null;){if(g=Be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Pa(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Be=K;break e}Be=g.return}}var G=n.current;for(Be=G;Be!==null;){w=Be;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,Be=ee;else e:for(w=G;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ho(9,I)}}catch($e){jt(I,I.return,$e)}if(I===w){Be=null;break e}var Ce=I.sibling;if(Ce!==null){Ce.return=I.return,Be=Ce;break e}Be=I.return}}if(St=f,lr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Rt,n)}catch{}c=!0}return c}finally{Lt=a,ei.transition=i}}return!1}function Pp(n,i,a){i=ws(a,i),i=Yh(n,i,1),n=ur(n,i,1),i=Tn(),n!==null&&(bn(n,1,i),In(n,i))}function jt(n,i,a){if(n.tag===3)Pp(n,n,a);else for(;i!==null;){if(i.tag===3){Pp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){n=ws(a,n),n=$h(i,n,1),i=ur(i,n,1),n=Tn(),i!==null&&(bn(i,1,n),In(i,n));break}}i=i.return}}function cv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&a,rn===n&&(un&a)===a&&(Jt===4||Jt===3&&(un&130023424)===un&&500>Ae()-du?Hr(n,0):uu|=a),In(n,i)}function Lp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ai,ai<<=1,(ai&130023424)===0&&(ai=4194304)));var a=Tn();n=Fi(n,i),n!==null&&(bn(n,i,a),In(n,a))}function uv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Lp(n,a)}function dv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Lp(n,a)}var Dp;Dp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,Qg(n,i,a);Dn=(n.flags&131072)!==0}else Dn=!1,Vt&&(i.flags&1048576)!==0&&dh(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;zo(n,i),n=i.pendingProps;var f=gs(i,hn.current);Ss(i,a),f=Vc(null,i,c,n,f,a);var g=Gc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(g=!0,Mo(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Uc(i),f.updater=Oo,i.stateNode=f,f._reactInternals=i,$c(i,c,n,a),i=Jc(null,i,c,!0,g,a)):(i.tag=0,Vt&&g&&Tc(i),wn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(zo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=hv(c),n=ci(c,n),f){case 0:i=Qc(null,i,c,n,a);break e;case 1:i=rp(null,i,c,n,a);break e;case 11:i=Jh(null,i,c,n,a);break e;case 14:i=ep(null,i,c,ci(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),Qc(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),rp(n,i,c,f,a);case 3:e:{if(sp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,yh(n,i),Po(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=ws(Error(t(423)),i),i=ap(n,i,c,a,f);break e}else if(c!==f){f=ws(Error(t(424)),i),i=ap(n,i,c,a,f);break e}else for(Vn=sr(i.stateNode.containerInfo.firstChild),Hn=i,Vt=!0,li=null,a=_h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===f){i=ki(n,i,a);break e}wn(n,i,c,a)}i=i.child}return i;case 5:return Eh(i),n===null&&Cc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,w=f.children,xc(c,f)?w=null:g!==null&&xc(c,g)&&(i.flags|=32),ip(n,i),wn(n,i,w,a),i.child;case 6:return n===null&&Cc(i),null;case 13:return op(n,i,a);case 4:return Fc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ys(i,null,c,a):wn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),Jh(n,i,c,f,a);case 7:return wn(n,i,i.pendingProps,a),i.child;case 8:return wn(n,i,i.pendingProps.children,a),i.child;case 12:return wn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,w=f.value,Ft(Ro,c._currentValue),c._currentValue=w,g!==null)if(oi(g.value,w)){if(g.children===f.children&&!Pn.current){i=ki(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){w=g.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(g.tag===1){B=Oi(-1,a&-a),B.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var Se=ie.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),ie.pending=B}}g.lanes|=a,B=g.alternate,B!==null&&(B.lanes|=a),Nc(g.return,a,i),I.lanes|=a;break}B=B.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Nc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}wn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ss(i,a),f=Qn(f),c=c(f),i.flags|=1,wn(n,i,c,a),i.child;case 14:return c=i.type,f=ci(c,i.pendingProps),f=ci(c.type,f),ep(n,i,c,f,a);case 15:return tp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),zo(n,i),i.tag=1,Ln(c)?(n=!0,Mo(i)):n=!1,Ss(i,a),Xh(i,c,f),$c(i,c,f,a),Jc(null,i,c,!0,n,a);case 19:return cp(n,i,a);case 22:return np(n,i,a)}throw Error(t(156,i.tag))};function Np(n,i){return re(n,i)}function fv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,c){return new fv(n,i,a,c)}function xu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hv(n){if(typeof n=="function")return xu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===he)return 14}return 2}function gr(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Zo(n,i,a,c,f,g){var w=2;if(c=n,typeof n=="function")xu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case U:return Gr(a.children,f,g,i);case k:w=8,f|=8;break;case C:return n=ti(12,a,i,f|2),n.elementType=C,n.lanes=g,n;case $:return n=ti(13,a,i,f),n.elementType=$,n.lanes=g,n;case ce:return n=ti(19,a,i,f),n.elementType=ce,n.lanes=g,n;case pe:return Ko(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case F:w=9;break e;case Q:w=11;break e;case he:w=14;break e;case ne:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(w,a,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function Gr(n,i,a,c){return n=ti(7,n,c,i),n.lanes=a,n}function Ko(n,i,a,c){return n=ti(22,n,c,i),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function yu(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Mu(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function pv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$n(0),this.expirationTimes=$n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$n(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Su(n,i,a,c,f,g,w,I,B){return n=new pv(n,i,a,I,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ti(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(g),n}function mv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Ip(n){if(!n)return or;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return lh(n,a,i)}return i}function Up(n,i,a,c,f,g,w,I,B){return n=Su(a,c,!0,n,f,g,w,I,B),n.context=Ip(null),a=n.current,c=Tn(),f=pr(a),g=Oi(c,f),g.callback=i??null,ur(a,g,f),n.current.lanes=f,bn(n,f,c),In(n,c),n}function Qo(n,i,a,c){var f=i.current,g=Tn(),w=pr(f);return a=Ip(a),i.context===null?i.context=a:i.pendingContext=a,i=Oi(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ur(f,i,w),n!==null&&(fi(n,f,w,g),bo(n,f,w)),w}function Jo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Eu(n,i){Fp(n,i),(n=n.alternate)&&Fp(n,i)}function gv(){return null}var Op=typeof reportError=="function"?reportError:function(n){console.error(n)};function wu(n){this._internalRoot=n}el.prototype.render=wu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Qo(n,i,null,null)},el.prototype.unmount=wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){Qo(null,n,null,null)}),i[Di]=null}};function el(n){this._internalRoot=n}el.prototype.unstable_scheduleHydration=function(n){if(n){var i=yf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<nr.length&&i!==0&&i<nr[a].priority;a++);nr.splice(a,0,n),a===0&&Ef(n)}};function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kp(){}function vv(n,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ie=Jo(w);g.call(ie)}}var w=Up(i,c,n,0,null,!1,!1,"",kp);return n._reactRootContainer=w,n[Di]=w.current,va(n.nodeType===8?n.parentNode:n),Br(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ie=Jo(B);I.call(ie)}}var B=Su(n,0,!1,null,null,!1,!1,"",kp);return n._reactRootContainer=B,n[Di]=B.current,va(n.nodeType===8?n.parentNode:n),Br(function(){Qo(i,B,a,c)}),B}function nl(n,i,a,c,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var I=f;f=function(){var B=Jo(w);I.call(B)}}Qo(i,w,n,f)}else w=vv(a,i,n,f,c);return Jo(w)}_f=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Kt(i.pendingLanes);a!==0&&($l(i,a|1),In(i,Ae()),(St&6)===0&&(Rs=Ae()+500,lr()))}break;case 13:Br(function(){var c=Fi(n,1);if(c!==null){var f=Tn();fi(c,n,1,f)}}),Eu(n,1)}},Zl=function(n){if(n.tag===13){var i=Fi(n,134217728);if(i!==null){var a=Tn();fi(i,n,134217728,a)}Eu(n,134217728)}},xf=function(n){if(n.tag===13){var i=pr(n),a=Fi(n,i);if(a!==null){var c=Tn();fi(a,n,i,c)}Eu(n,i)}},yf=function(){return Lt},Mf=function(n,i){var a=Lt;try{return Lt=n,i()}finally{Lt=a}},Ne=function(n,i,a){switch(i){case"input":if(nt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=xo(c);if(!f)throw Error(t(90));ht(c),nt(c,f)}}}break;case"textarea":Z(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},zt=gu,Zt=Br;var _v={usingClientEntryPoint:!1,Events:[ya,ps,xo,Ue,ct,gu]},Ia={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Rt=il.inject(xv),xt=il}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v,Un.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(i))throw Error(t(200));return mv(n,i,null,a)},Un.createRoot=function(n,i){if(!Tu(n))throw Error(t(299));var a=!1,c="",f=Op;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Su(n,1,!1,null,null,a,!1,c,f),n[Di]=i.current,va(n.nodeType===8?n.parentNode:n),new wu(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=b(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Br(n)},Un.hydrate=function(n,i,a){if(!tl(i))throw Error(t(200));return nl(null,n,i,!0,a)},Un.hydrateRoot=function(n,i,a){if(!Tu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",w=Op;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Up(i,null,n,1,a??null,f,!1,g,w),n[Di]=i.current,va(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new el(i)},Un.render=function(n,i,a){if(!tl(i))throw Error(t(200));return nl(null,n,i,!1,a)},Un.unmountComponentAtNode=function(n){if(!tl(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},Un.unstable_batchedUpdates=gu,Un.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!tl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nl(n,i,a,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Xp;function Pv(){if(Xp)return Cu.exports;Xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cu.exports=bv(),Cu.exports}var qp;function Lv(){if(qp)return rl;qp=1;var s=Pv();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var Dv=Lv();const Nv=o0(Dv);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=mt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>mt.createElement("svg",{ref:p,...Uv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:l0("lucide",o),...d},[...u.map(([h,m])=>mt.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=(s,e)=>{const t=mt.forwardRef(({className:r,...o},l)=>mt.createElement(Fv,{ref:l,iconNode:e,className:l0(`lucide-${Iv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ln("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ln("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ln("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ln("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ln("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ln("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=ln("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=ln("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=ln("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=ln("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ln("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=ln("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ln("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ln("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ln("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=ln("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=ln("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=ln("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="170",Jv=0,Zp=1,e_=2,c0=1,t_=2,Xi=3,Cr=0,zn=1,yn=2,Ar=0,js=1,Ti=2,Kp=3,Qp=4,n_=5,Qr=100,i_=101,r_=102,s_=103,a_=104,o_=200,l_=201,c_=202,u_=203,ud=204,dd=205,d_=206,f_=207,h_=208,p_=209,m_=210,g_=211,v_=212,__=213,x_=214,fd=0,hd=1,pd=2,Ys=3,md=4,gd=5,vd=6,_d=7,u0=0,y_=1,M_=2,Rr=0,S_=1,E_=2,w_=3,d0=4,T_=5,A_=6,R_=7,f0=300,$s=301,Zs=302,xd=303,yd=304,Vl=306,Md=1e3,es=1001,Sd=1002,_i=1003,C_=1004,sl=1005,Ri=1006,Lu=1007,ts=1008,Zi=1009,h0=1010,p0=1011,Xa=1012,nf=1013,ns=1014,qi=1015,qa=1016,rf=1017,sf=1018,Ks=1020,m0=35902,g0=1021,v0=1022,vi=1023,_0=1024,x0=1025,Xs=1026,Qs=1027,y0=1028,af=1029,M0=1030,of=1031,lf=1033,Pl=33776,Ll=33777,Dl=33778,Nl=33779,Ed=35840,wd=35841,Td=35842,Ad=35843,Rd=36196,Cd=37492,bd=37496,Pd=37808,Ld=37809,Dd=37810,Nd=37811,Id=37812,Ud=37813,Fd=37814,Od=37815,kd=37816,zd=37817,Bd=37818,Hd=37819,Vd=37820,Gd=37821,Il=36492,Wd=36494,jd=36495,S0=36283,Xd=36284,qd=36285,Yd=36286,b_=3200,P_=3201,E0=0,L_=1,Tr="",On="srgb",ea="srgb-linear",Gl="linear",Nt="srgb",bs=7680,Jp=519,D_=512,N_=513,I_=514,w0=515,U_=516,F_=517,O_=518,k_=519,em=35044,tm="300 es",Yi=2e3,Fl=2001;class ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=Math.PI/180,$d=180/Math.PI;function Ya(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function kn(s,e,t){return Math.max(e,Math.min(t,s))}function z_(s,e){return(s%e+e)%e}function Nu(s,e,t){return(1-t)*s+t*e}function Fa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,r,o,l,u,d,p,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,h)}set(e,t,r,o,l,u,d,p,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=p,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],h=r[1],m=r[4],_=r[7],v=r[2],M=r[5],S=r[8],E=o[0],y=o[3],x=o[6],L=o[1],P=o[4],T=o[7],V=o[2],N=o[5],U=o[8];return l[0]=u*E+d*L+p*V,l[3]=u*y+d*P+p*N,l[6]=u*x+d*T+p*U,l[1]=h*E+m*L+_*V,l[4]=h*y+m*P+_*N,l[7]=h*x+m*T+_*U,l[2]=v*E+M*L+S*V,l[5]=v*y+M*P+S*N,l[8]=v*x+M*T+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],m=e[8];return t*u*m-t*d*h-r*l*m+r*d*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],m=e[8],_=m*u-d*h,v=d*p-m*l,M=h*l-u*p,S=t*_+r*v+o*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=_*E,e[1]=(o*h-m*r)*E,e[2]=(d*r-o*u)*E,e[3]=v*E,e[4]=(m*t-o*p)*E,e[5]=(o*l-d*t)*E,e[6]=M*E,e[7]=(r*p-h*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*d)+u+e,-o*h,o*p,-o*(-h*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Iu.makeScale(e,t)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new ft;function T0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function B_(){const s=Ol("canvas");return s.style.display="block",s}const nm={};function Ga(s){s in nm||(nm[s]=!0,console.warn(s))}function H_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function V_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function G_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Nt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Nt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tr?Gl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const im=[.64,.33,.3,.6,.15,.06],rm=[.2126,.7152,.0722],sm=[.3127,.329],am=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),om=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[ea]:{primaries:im,whitePoint:sm,transfer:Gl,toXYZ:am,fromXYZ:om,luminanceCoefficients:rm,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:im,whitePoint:sm,transfer:Nt,toXYZ:am,fromXYZ:om,luminanceCoefficients:rm,outputColorSpaceConfig:{drawingBufferColorSpace:On}}});let Ps;class W_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Ol("canvas")),Ps.width=e.width,Ps.height=e.height;const r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ol("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=$i(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor($i(t[r]/255)*255):t[r]=$i(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j_=0;class A0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Uu(o[u].image)):l.push(Uu(o[u]))}else l=Uu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Uu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?W_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;class Rn extends ta{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,r=es,o=es,l=Ri,u=ts,d=vi,p=Zi,h=Rn.DEFAULT_ANISOTROPY,m=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ya(),this.name="",this.source=new A0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=f0;Rn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,r=0,o=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,h=p[0],m=p[4],_=p[8],v=p[1],M=p[5],S=p[9],E=p[2],y=p[6],x=p[10];if(Math.abs(m-v)<.01&&Math.abs(_-E)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+E)<.1&&Math.abs(S+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,T=(M+1)/2,V=(x+1)/2,N=(m+v)/4,U=(_+E)/4,k=(S+y)/4;return P>T&&P>V?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=N/r,l=U/r):T>V?T<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(T),r=N/o,l=k/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=U/l,o=k/l),this.set(r,o,l,t),this}let L=Math.sqrt((y-S)*(y-S)+(_-E)*(_-E)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(y-S)/L,this.y=(_-E)/L,this.z=(v-m)/L,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends ta{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Rn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new A0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends q_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class R0 extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y_ extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],h=r[o+1],m=r[o+2],_=r[o+3];const v=l[u+0],M=l[u+1],S=l[u+2],E=l[u+3];if(d===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(d===1){e[t+0]=v,e[t+1]=M,e[t+2]=S,e[t+3]=E;return}if(_!==E||p!==v||h!==M||m!==S){let y=1-d;const x=p*v+h*M+m*S+_*E,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const V=Math.sqrt(P),N=Math.atan2(V,x*L);y=Math.sin(y*N)/V,d=Math.sin(d*N)/V}const T=d*L;if(p=p*y+v*T,h=h*y+M*T,m=m*y+S*T,_=_*y+E*T,y===1-d){const V=1/Math.sqrt(p*p+h*h+m*m+_*_);p*=V,h*=V,m*=V,_*=V}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],h=r[o+2],m=r[o+3],_=l[u],v=l[u+1],M=l[u+2],S=l[u+3];return e[t]=d*S+m*_+p*M-h*v,e[t+1]=p*S+m*v+h*_-d*M,e[t+2]=h*S+m*M+d*v-p*_,e[t+3]=m*S-d*_-p*v-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,h=d(r/2),m=d(o/2),_=d(l/2),v=p(r/2),M=p(o/2),S=p(l/2);switch(u){case"XYZ":this._x=v*m*_+h*M*S,this._y=h*M*_-v*m*S,this._z=h*m*S+v*M*_,this._w=h*m*_-v*M*S;break;case"YXZ":this._x=v*m*_+h*M*S,this._y=h*M*_-v*m*S,this._z=h*m*S-v*M*_,this._w=h*m*_+v*M*S;break;case"ZXY":this._x=v*m*_-h*M*S,this._y=h*M*_+v*m*S,this._z=h*m*S+v*M*_,this._w=h*m*_-v*M*S;break;case"ZYX":this._x=v*m*_-h*M*S,this._y=h*M*_+v*m*S,this._z=h*m*S-v*M*_,this._w=h*m*_+v*M*S;break;case"YZX":this._x=v*m*_+h*M*S,this._y=h*M*_+v*m*S,this._z=h*m*S-v*M*_,this._w=h*m*_-v*M*S;break;case"XZY":this._x=v*m*_-h*M*S,this._y=h*M*_-v*m*S,this._z=h*m*S+v*M*_,this._w=h*m*_+v*M*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],h=t[2],m=t[6],_=t[10],v=r+d+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(m-p)*M,this._y=(l-h)*M,this._z=(u-o)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(m-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+h)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-h)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+m)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(u-o)/M,this._x=(l+h)/M,this._y=(p+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,h=t._z,m=t._w;return this._x=r*m+u*d+o*h-l*p,this._y=o*m+u*p+l*d-r*h,this._z=l*m+u*h+r*p-o*d,this._w=u*m-r*d-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,d),_=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*_+this._w*v,this._x=r*_+this._x*v,this._y=o*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,h=2*(u*o-d*r),m=2*(d*t-l*o),_=2*(l*r-u*t);return this.x=t+p*h+u*_-d*m,this.y=r+p*m+d*h-l*_,this.z=o+p*_+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new W,lm=new na;class $a{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,hi):hi.fromBufferAttribute(l,u),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),ol.subVectors(this.max,Oa),Ls.subVectors(e.a,Oa),Ds.subVectors(e.b,Oa),Ns.subVectors(e.c,Oa),_r.subVectors(Ds,Ls),xr.subVectors(Ns,Ds),Wr.subVectors(Ls,Ns);let t=[0,-_r.z,_r.y,0,-xr.z,xr.y,0,-Wr.z,Wr.y,_r.z,0,-_r.x,xr.z,0,-xr.x,Wr.z,0,-Wr.x,-_r.y,_r.x,0,-xr.y,xr.x,0,-Wr.y,Wr.x,0];return!Ou(t,Ls,Ds,Ns,ol)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,Ls,Ds,Ns,ol))?!1:(ll.crossVectors(_r,xr),t=[ll.x,ll.y,ll.z],Ou(t,Ls,Ds,Ns,ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new W,new W,new W,new W,new W,new W,new W,new W],hi=new W,al=new $a,Ls=new W,Ds=new W,Ns=new W,_r=new W,xr=new W,Wr=new W,Oa=new W,ol=new W,ll=new W,jr=new W;function Ou(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){jr.fromArray(s,l);const d=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),p=e.dot(jr),h=t.dot(jr),m=r.dot(jr);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>d)return!1}return!0}const $_=new $a,ka=new W,ku=new W;class Za{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):$_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(ku)),this.expandByPoint(ka.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new W,zu=new W,cl=new W,yr=new W,Bu=new W,ul=new W,Hu=new W;class Wl{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){zu.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(zu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(cl),d=yr.dot(this.direction),p=-yr.dot(cl),h=yr.lengthSq(),m=Math.abs(1-u*u);let _,v,M,S;if(m>0)if(_=u*p-d,v=u*d-p,S=l*m,_>=0)if(v>=-S)if(v<=S){const E=1/m;_*=E,v*=E,M=_*(_+u*v+2*d)+v*(u*_+v+2*p)+h}else v=l,_=Math.max(0,-(u*v+d)),M=-_*_+v*(v+2*p)+h;else v=-l,_=Math.max(0,-(u*v+d)),M=-_*_+v*(v+2*p)+h;else v<=-S?(_=Math.max(0,-(-u*l+d)),v=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+v*(v+2*p)+h):v<=S?(_=0,v=Math.min(Math.max(-l,-p),l),M=v*(v+2*p)+h):(_=Math.max(0,-(u*l+d)),v=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+v*(v+2*p)+h);else v=u>0?-l:l,_=Math.max(0,-(u*v+d)),M=-_*_+v*(v+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(zu).addScaledVector(cl,v),M}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),o=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,o,l){Bu.subVectors(t,e),ul.subVectors(r,e),Hu.crossVectors(Bu,ul);let u=this.direction.dot(Hu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;yr.subVectors(this.origin,e);const p=d*this.direction.dot(ul.crossVectors(yr,ul));if(p<0)return null;const h=d*this.direction.dot(Bu.cross(yr));if(h<0||p+h>u)return null;const m=-d*yr.dot(Hu);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,r,o,l,u,d,p,h,m,_,v,M,S,E,y){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,h,m,_,v,M,S,E,y)}set(e,t,r,o,l,u,d,p,h,m,_,v,M,S,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=d,x[13]=p,x[2]=h,x[6]=m,x[10]=_,x[14]=v,x[3]=M,x[7]=S,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),h=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*m,M=u*_,S=d*m,E=d*_;t[0]=p*m,t[4]=-p*_,t[8]=h,t[1]=M+S*h,t[5]=v-E*h,t[9]=-d*p,t[2]=E-v*h,t[6]=S+M*h,t[10]=u*p}else if(e.order==="YXZ"){const v=p*m,M=p*_,S=h*m,E=h*_;t[0]=v+E*d,t[4]=S*d-M,t[8]=u*h,t[1]=u*_,t[5]=u*m,t[9]=-d,t[2]=M*d-S,t[6]=E+v*d,t[10]=u*p}else if(e.order==="ZXY"){const v=p*m,M=p*_,S=h*m,E=h*_;t[0]=v-E*d,t[4]=-u*_,t[8]=S+M*d,t[1]=M+S*d,t[5]=u*m,t[9]=E-v*d,t[2]=-u*h,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const v=u*m,M=u*_,S=d*m,E=d*_;t[0]=p*m,t[4]=S*h-M,t[8]=v*h+E,t[1]=p*_,t[5]=E*h+v,t[9]=M*h-S,t[2]=-h,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,M=u*h,S=d*p,E=d*h;t[0]=p*m,t[4]=E-v*_,t[8]=S*_+M,t[1]=_,t[5]=u*m,t[9]=-d*m,t[2]=-h*m,t[6]=M*_+S,t[10]=v-E*_}else if(e.order==="XZY"){const v=u*p,M=u*h,S=d*p,E=d*h;t[0]=p*m,t[4]=-_,t[8]=h*m,t[1]=v*_+E,t[5]=u*m,t[9]=M*_-S,t[2]=S*_-M,t[6]=d*m,t[10]=E*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,K_)}lookAt(e,t,r){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Mr.crossVectors(r,Wn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Mr.crossVectors(r,Wn)),Mr.normalize(),dl.crossVectors(Wn,Mr),o[0]=Mr.x,o[4]=dl.x,o[8]=Wn.x,o[1]=Mr.y,o[5]=dl.y,o[9]=Wn.y,o[2]=Mr.z,o[6]=dl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],h=r[12],m=r[1],_=r[5],v=r[9],M=r[13],S=r[2],E=r[6],y=r[10],x=r[14],L=r[3],P=r[7],T=r[11],V=r[15],N=o[0],U=o[4],k=o[8],C=o[12],A=o[1],F=o[5],Q=o[9],$=o[13],ce=o[2],he=o[6],ne=o[10],pe=o[14],z=o[3],ue=o[7],oe=o[11],O=o[15];return l[0]=u*N+d*A+p*ce+h*z,l[4]=u*U+d*F+p*he+h*ue,l[8]=u*k+d*Q+p*ne+h*oe,l[12]=u*C+d*$+p*pe+h*O,l[1]=m*N+_*A+v*ce+M*z,l[5]=m*U+_*F+v*he+M*ue,l[9]=m*k+_*Q+v*ne+M*oe,l[13]=m*C+_*$+v*pe+M*O,l[2]=S*N+E*A+y*ce+x*z,l[6]=S*U+E*F+y*he+x*ue,l[10]=S*k+E*Q+y*ne+x*oe,l[14]=S*C+E*$+y*pe+x*O,l[3]=L*N+P*A+T*ce+V*z,l[7]=L*U+P*F+T*he+V*ue,l[11]=L*k+P*Q+T*ne+V*oe,l[15]=L*C+P*$+T*pe+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],h=e[13],m=e[2],_=e[6],v=e[10],M=e[14],S=e[3],E=e[7],y=e[11],x=e[15];return S*(+l*p*_-o*h*_-l*d*v+r*h*v+o*d*M-r*p*M)+E*(+t*p*M-t*h*v+l*u*v-o*u*M+o*h*m-l*p*m)+y*(+t*h*_-t*d*M-l*u*_+r*u*M+l*d*m-r*h*m)+x*(-o*d*m-t*p*_+t*d*v+o*u*_-r*u*v+r*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],m=e[8],_=e[9],v=e[10],M=e[11],S=e[12],E=e[13],y=e[14],x=e[15],L=_*y*h-E*v*h+E*p*M-d*y*M-_*p*x+d*v*x,P=S*v*h-m*y*h-S*p*M+u*y*M+m*p*x-u*v*x,T=m*E*h-S*_*h+S*d*M-u*E*M-m*d*x+u*_*x,V=S*_*p-m*E*p-S*d*v+u*E*v+m*d*y-u*_*y,N=t*L+r*P+o*T+l*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=L*U,e[1]=(E*v*l-_*y*l-E*o*M+r*y*M+_*o*x-r*v*x)*U,e[2]=(d*y*l-E*p*l+E*o*h-r*y*h-d*o*x+r*p*x)*U,e[3]=(_*p*l-d*v*l-_*o*h+r*v*h+d*o*M-r*p*M)*U,e[4]=P*U,e[5]=(m*y*l-S*v*l+S*o*M-t*y*M-m*o*x+t*v*x)*U,e[6]=(S*p*l-u*y*l-S*o*h+t*y*h+u*o*x-t*p*x)*U,e[7]=(u*v*l-m*p*l+m*o*h-t*v*h-u*o*M+t*p*M)*U,e[8]=T*U,e[9]=(S*_*l-m*E*l-S*r*M+t*E*M+m*r*x-t*_*x)*U,e[10]=(u*E*l-S*d*l+S*r*h-t*E*h-u*r*x+t*d*x)*U,e[11]=(m*d*l-u*_*l-m*r*h+t*_*h+u*r*M-t*d*M)*U,e[12]=V*U,e[13]=(m*E*o-S*_*o+S*r*v-t*E*v-m*r*y+t*_*y)*U,e[14]=(S*d*o-u*E*o-S*r*p+t*E*p+u*r*y-t*d*y)*U,e[15]=(u*_*o-m*d*o+m*r*p-t*_*p-u*r*v+t*d*v)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,h=l*u,m=l*d;return this.set(h*u+r,h*d-o*p,h*p+o*d,0,h*d+o*p,m*d+r,m*p-o*u,0,h*p-o*d,m*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,h=l+l,m=u+u,_=d+d,v=l*h,M=l*m,S=l*_,E=u*m,y=u*_,x=d*_,L=p*h,P=p*m,T=p*_,V=r.x,N=r.y,U=r.z;return o[0]=(1-(E+x))*V,o[1]=(M+T)*V,o[2]=(S-P)*V,o[3]=0,o[4]=(M-T)*N,o[5]=(1-(v+x))*N,o[6]=(y+L)*N,o[7]=0,o[8]=(S+P)*U,o[9]=(y-L)*U,o[10]=(1-(v+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Is.set(o[0],o[1],o[2]).length();const u=Is.set(o[4],o[5],o[6]).length(),d=Is.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],pi.copy(this);const h=1/l,m=1/u,_=1/d;return pi.elements[0]*=h,pi.elements[1]*=h,pi.elements[2]*=h,pi.elements[4]*=m,pi.elements[5]*=m,pi.elements[6]*=m,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,t.setFromRotationMatrix(pi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Yi){const p=this.elements,h=2*l/(t-e),m=2*l/(r-o),_=(t+e)/(t-e),v=(r+o)/(r-o);let M,S;if(d===Yi)M=-(u+l)/(u-l),S=-2*u*l/(u-l);else if(d===Fl)M=-u/(u-l),S=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=h,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=m,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=S,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Yi){const p=this.elements,h=1/(t-e),m=1/(r-o),_=1/(u-l),v=(t+e)*h,M=(r+o)*m;let S,E;if(d===Yi)S=(u+l)*_,E=-2*_;else if(d===Fl)S=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*h,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*m,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=E,p[14]=-S,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Is=new W,pi=new kt,Z_=new W(0,0,0),K_=new W(1,1,1),Mr=new W,dl=new W,Wn=new W,cm=new kt,um=new na;class Ci{constructor(e=0,t=0,r=0,o=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],h=o[5],m=o[9],_=o[2],v=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(kn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-kn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(kn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-kn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q_=0;const dm=new W,Us=new na,Vi=new kt,fl=new W,za=new W,J_=new W,ex=new na,fm=new W(1,0,0),hm=new W(0,1,0),pm=new W(0,0,1),mm={type:"added"},tx={type:"removed"},Fs={type:"childadded",child:null},Vu={type:"childremoved",child:null};class on extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new W,t=new Ci,r=new na,o=new W(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new ft}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,t){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fl.copy(e):fl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(za,fl,this.up):Vi.lookAt(fl,za,this.up),this.quaternion.setFromRotationMatrix(Vi),o&&(Vi.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Vi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tx),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),h=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),M=u(e.animations),S=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),S.length>0&&(r.nodes=S)}return r.object=o,r;function u(d){const p=[];for(const h in d){const m=d[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}on.DEFAULT_UP=new W(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new W,Gi=new W,Gu=new W,Wi=new W,Os=new W,ks=new W,gm=new W,Wu=new W,ju=new W,Xu=new W,qu=new It,Yu=new It,$u=new It;class gi{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){mi.subVectors(o,t),Gi.subVectors(r,t),Gu.subVectors(e,t);const u=mi.dot(mi),d=mi.dot(Gi),p=mi.dot(Gu),h=Gi.dot(Gi),m=Gi.dot(Gu),_=u*h-d*d;if(_===0)return l.set(0,0,0),null;const v=1/_,M=(h*p-d*m)*v,S=(u*m-d*p)*v;return l.set(1-M-S,S,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,Wi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Wi.x),p.addScaledVector(u,Wi.y),p.addScaledVector(d,Wi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return qu.setScalar(0),Yu.setScalar(0),$u.setScalar(0),qu.fromBufferAttribute(e,t),Yu.fromBufferAttribute(e,r),$u.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(qu,l.x),u.addScaledVector(Yu,l.y),u.addScaledVector($u,l.z),u}static isFrontFacing(e,t,r,o){return mi.subVectors(r,t),Gi.subVectors(e,t),mi.cross(Gi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),mi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Os.subVectors(o,r),ks.subVectors(l,r),Wu.subVectors(e,r);const p=Os.dot(Wu),h=ks.dot(Wu);if(p<=0&&h<=0)return t.copy(r);ju.subVectors(e,o);const m=Os.dot(ju),_=ks.dot(ju);if(m>=0&&_<=m)return t.copy(o);const v=p*_-m*h;if(v<=0&&p>=0&&m<=0)return u=p/(p-m),t.copy(r).addScaledVector(Os,u);Xu.subVectors(e,l);const M=Os.dot(Xu),S=ks.dot(Xu);if(S>=0&&M<=S)return t.copy(l);const E=M*h-p*S;if(E<=0&&h>=0&&S<=0)return d=h/(h-S),t.copy(r).addScaledVector(ks,d);const y=m*S-M*_;if(y<=0&&_-m>=0&&M-S>=0)return gm.subVectors(l,o),d=(_-m)/(_-m+(M-S)),t.copy(o).addScaledVector(gm,d);const x=1/(y+E+v);return u=E*x,d=v*x,t.copy(r).addScaledVector(Os,u).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Zu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class dt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=z_(e,1),t=kn(t,0,1),r=kn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Zu(u,l,e+1/3),this.g=Zu(u,l,e),this.b=Zu(u,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=On){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const r=C0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Et.fromWorkingColorSpace(_n.copy(this),e),Math.round(kn(_n.r*255,0,255))*65536+Math.round(kn(_n.g*255,0,255))*256+Math.round(kn(_n.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(_n.copy(this),t);const r=_n.r,o=_n.g,l=_n.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,h;const m=(d+u)/2;if(d===u)p=0,h=0;else{const _=u-d;switch(h=m<=.5?_/(u+d):_/(2-u-d),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=On){Et.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,o=_n.b;return e!==On?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(hl);const r=Nu(Sr.h,hl.h,t),o=Nu(Sr.s,hl.s,t),l=Nu(Sr.l,hl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new dt;dt.NAMES=C0;let nx=0;class rs extends ta{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ya(),this.name="",this.blending=js,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=dd,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ud&&(r.blendSrc=this.blendSrc),this.blendDst!==dd&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xn extends rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new W,pl=new _t;class Mn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=em,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==em&&(e.usage=this.usage),e}}class b0 extends Mn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class P0 extends Mn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ct extends Mn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ix=0;const ni=new kt,Ku=new on,zs=new W,jn=new $a,Ba=new $a,an=new W;class $t extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T0(e)?P0:b0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ct(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ba.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(jn.min,Ba.min),jn.expandByPoint(an),an.addVectors(jn.max,Ba.max),jn.expandByPoint(an)):(jn.expandByPoint(Ba.min),jn.expandByPoint(Ba.max))}jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let h=0,m=d.count;h<m;h++)an.fromBufferAttribute(d,h),p&&(zs.fromBufferAttribute(e,h),an.add(zs)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<r.count;k++)d[k]=new W,p[k]=new W;const h=new W,m=new W,_=new W,v=new _t,M=new _t,S=new _t,E=new W,y=new W;function x(k,C,A){h.fromBufferAttribute(r,k),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,A),v.fromBufferAttribute(l,k),M.fromBufferAttribute(l,C),S.fromBufferAttribute(l,A),m.sub(h),_.sub(h),M.sub(v),S.sub(v);const F=1/(M.x*S.y-S.x*M.y);isFinite(F)&&(E.copy(m).multiplyScalar(S.y).addScaledVector(_,-M.y).multiplyScalar(F),y.copy(_).multiplyScalar(M.x).addScaledVector(m,-S.x).multiplyScalar(F),d[k].add(E),d[C].add(E),d[A].add(E),p[k].add(y),p[C].add(y),p[A].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,C=L.length;k<C;++k){const A=L[k],F=A.start,Q=A.count;for(let $=F,ce=F+Q;$<ce;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const P=new W,T=new W,V=new W,N=new W;function U(k){V.fromBufferAttribute(o,k),N.copy(V);const C=d[k];P.copy(C),P.sub(V.multiplyScalar(V.dot(C))).normalize(),T.crossVectors(N,C);const F=T.dot(p[k])<0?-1:1;u.setXYZW(k,P.x,P.y,P.z,F)}for(let k=0,C=L.length;k<C;++k){const A=L[k],F=A.start,Q=A.count;for(let $=F,ce=F+Q;$<ce;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const o=new W,l=new W,u=new W,d=new W,p=new W,h=new W,m=new W,_=new W;if(e)for(let v=0,M=e.count;v<M;v+=3){const S=e.getX(v+0),E=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,y),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,E),h.fromBufferAttribute(r,y),d.add(m),p.add(m),h.add(m),r.setXYZ(S,d.x,d.y,d.z),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,M=t.count;v<M;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(d,p){const h=d.array,m=d.itemSize,_=d.normalized,v=new h.constructor(p.length*m);let M=0,S=0;for(let E=0,y=p.length;E<y;E++){d.isInterleavedBufferAttribute?M=p[E]*d.data.stride+d.offset:M=p[E]*m;for(let x=0;x<m;x++)v[S++]=h[M++]}return new Mn(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],h=e(p,r);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const p=[],h=l[d];for(let m=0,_=h.length;m<_;m++){const v=h[m],M=e(v,r);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let _=0,v=h.length;_<v;_++){const M=h[_];m.push(M.toJSON(e.data))}m.length>0&&(o[p]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],_=l[h];for(let v=0,M=_.length;v<M;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new kt,Xr=new Wl,ml=new Za,_m=new W,gl=new W,vl=new W,_l=new W,Qu=new W,xl=new W,xm=new W,yl=new W;class Ot extends on{constructor(e=new $t,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){xl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=d[p],_=l[p];m!==0&&(Qu.fromBufferAttribute(_,e),u?xl.addScaledVector(Qu,m):xl.addScaledVector(Qu.sub(t),m))}t.add(xl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(ml.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(ml,_m)===null||Xr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let S=0,E=v.length;S<E;S++){const y=v[S],x=u[y.materialIndex],L=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let T=L,V=P;T<V;T+=3){const N=d.getX(T),U=d.getX(T+1),k=d.getX(T+2);o=Ml(this,x,e,r,h,m,_,N,U,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let y=S,x=E;y<x;y+=3){const L=d.getX(y),P=d.getX(y+1),T=d.getX(y+2);o=Ml(this,u,e,r,h,m,_,L,P,T),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let S=0,E=v.length;S<E;S++){const y=v[S],x=u[y.materialIndex],L=Math.max(y.start,M.start),P=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let T=L,V=P;T<V;T+=3){const N=T,U=T+1,k=T+2;o=Ml(this,x,e,r,h,m,_,N,U,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,M.start),E=Math.min(p.count,M.start+M.count);for(let y=S,x=E;y<x;y+=3){const L=y,P=y+1,T=y+2;o=Ml(this,u,e,r,h,m,_,L,P,T),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function rx(s,e,t,r,o,l,u,d){let p;if(e.side===zn?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Cr,d),p===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(yl);return h<t.near||h>t.far?null:{distance:h,point:yl.clone(),object:s}}function Ml(s,e,t,r,o,l,u,d,p,h){s.getVertexPosition(d,gl),s.getVertexPosition(p,vl),s.getVertexPosition(h,_l);const m=rx(s,e,t,r,gl,vl,_l,xm);if(m){const _=new W;gi.getBarycoord(xm,gl,vl,_l,_),o&&(m.uv=gi.getInterpolatedAttribute(o,d,p,h,_,new _t)),l&&(m.uv1=gi.getInterpolatedAttribute(l,d,p,h,_,new _t)),u&&(m.normal=gi.getInterpolatedAttribute(u,d,p,h,_,new W),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:d,b:p,c:h,normal:new W,materialIndex:0};gi.getNormal(gl,vl,_l,v.normal),m.face=v,m.barycoord=_}return m}class Ka extends $t{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],m=[],_=[];let v=0,M=0;S("z","y","x",-1,-1,r,t,e,u,l,0),S("z","y","x",1,-1,r,t,-e,u,l,1),S("x","z","y",1,1,e,r,t,o,u,2),S("x","z","y",1,-1,e,r,-t,o,u,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(m,3)),this.setAttribute("uv",new Ct(_,2));function S(E,y,x,L,P,T,V,N,U,k,C){const A=T/U,F=V/k,Q=T/2,$=V/2,ce=N/2,he=U+1,ne=k+1;let pe=0,z=0;const ue=new W;for(let oe=0;oe<ne;oe++){const O=oe*F-$;for(let se=0;se<he;se++){const De=se*A-Q;ue[E]=De*L,ue[y]=O*P,ue[x]=ce,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[y]=0,ue[x]=N>0?1:-1,m.push(ue.x,ue.y,ue.z),_.push(se/U),_.push(1-oe/k),pe+=1}}for(let oe=0;oe<k;oe++)for(let O=0;O<U;O++){const se=v+O+he*oe,De=v+O+he*(oe+1),J=v+(O+1)+he*(oe+1),me=v+(O+1)+he*oe;p.push(se,De,me),p.push(De,J,me),z+=6}d.addGroup(M,z,C),M+=z,v+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const r=Js(s[t]);for(const o in r)e[o]=r[o]}return e}function sx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function L0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ax={clone:Js,merge:An};var ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ox,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class D0 extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new W,ym=new _t,Mm=new _t;class qn extends D0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$d*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(Du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,ym,Mm),t.subVectors(Mm,ym)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Du*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/h,o*=u.width/p,r*=u.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,Hs=1;class cx extends on{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qn(Bs,Hs,e,t);o.layers=this.layers,this.add(o);const l=new qn(Bs,Hs,e,t);l.layers=this.layers,this.add(l);const u=new qn(Bs,Hs,e,t);u.layers=this.layers,this.add(u);const d=new qn(Bs,Hs,e,t);d.layers=this.layers,this.add(d);const p=new qn(Bs,Hs,e,t);p.layers=this.layers,this.add(p);const h=new qn(Bs,Hs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const h of t)this.remove(h);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,h,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(_,v,M),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class N0 extends Rn{constructor(e,t,r,o,l,u,d,p,h,m){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,r,o,l,u,d,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ux extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new N0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ka(5,5,5),l=new br({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ar});l.uniforms.tEquirect.value=t;const u=new Ot(o,l),d=t.minFilter;return t.minFilter===ts&&(t.minFilter=Ri),new cx(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Ju=new W,dx=new W,fx=new ft;class Zr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ju.subVectors(r,t).cross(dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ju),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||fx.getNormalMatrix(e),o=this.coplanarPoint(Ju).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Za,Sl=new W;class uf{constructor(e=new Zr,t=new Zr,r=new Zr,o=new Zr,l=new Zr,u=new Zr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],p=o[3],h=o[4],m=o[5],_=o[6],v=o[7],M=o[8],S=o[9],E=o[10],y=o[11],x=o[12],L=o[13],P=o[14],T=o[15];if(r[0].setComponents(p-l,v-h,y-M,T-x).normalize(),r[1].setComponents(p+l,v+h,y+M,T+x).normalize(),r[2].setComponents(p+u,v+m,y+S,T+L).normalize(),r[3].setComponents(p-u,v-m,y-S,T-L).normalize(),r[4].setComponents(p-d,v-_,y-E,T-P).normalize(),t===Yi)r[5].setComponents(p+d,v+_,y+E,T+P).normalize();else if(t===Fl)r[5].setComponents(d,_,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Sl.x=o.normal.x>0?e.max.x:e.min.x,Sl.y=o.normal.y>0?e.max.y:e.min.y,Sl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function I0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function hx(s){const e=new WeakMap;function t(d,p){const h=d.array,m=d.usage,_=h.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,h,m),d.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,h){const m=p.array,_=p.updateRanges;if(s.bindBuffer(h,d),_.length===0)s.bufferSubData(h,0,m);else{_.sort((M,S)=>M.start-S.start);let v=0;for(let M=1;M<_.length;M++){const S=_[v],E=_[M];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++v,_[v]=E)}_.length=v+1;for(let M=0,S=_.length;M<S;M++){const E=_[M];s.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,p),h.version=d.version}}return{get:o,remove:l,update:u}}class jl extends $t{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),h=d+1,m=p+1,_=e/d,v=t/p,M=[],S=[],E=[],y=[];for(let x=0;x<m;x++){const L=x*v-u;for(let P=0;P<h;P++){const T=P*_-l;S.push(T,-L,0),E.push(0,0,1),y.push(P/d),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<d;L++){const P=L+h*x,T=L+h*(x+1),V=L+1+h*(x+1),N=L+1+h*x;M.push(P,T,N),M.push(T,V,N)}this.setIndex(M),this.setAttribute("position",new Ct(S,3)),this.setAttribute("normal",new Ct(E,3)),this.setAttribute("uv",new Ct(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ay=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,py=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,my=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:vx,alphatest_fragment:_x,alphatest_pars_fragment:xx,aomap_fragment:yx,aomap_pars_fragment:Mx,batching_pars_vertex:Sx,batching_vertex:Ex,begin_vertex:wx,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ix,color_pars_vertex:Ux,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:kx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Bx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:jx,envmap_fragment:Xx,envmap_common_pars_fragment:qx,envmap_pars_fragment:Yx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:ay,envmap_vertex:Zx,fog_vertex:Kx,fog_pars_vertex:Qx,fog_fragment:Jx,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:ry,lights_pars_begin:sy,lights_toon_fragment:oy,lights_toon_pars_fragment:ly,lights_phong_fragment:cy,lights_phong_pars_fragment:uy,lights_physical_fragment:dy,lights_physical_pars_fragment:fy,lights_fragment_begin:hy,lights_fragment_maps:py,lights_fragment_end:my,logdepthbuf_fragment:gy,logdepthbuf_pars_fragment:vy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:xy,map_fragment:yy,map_pars_fragment:My,map_particle_fragment:Sy,map_particle_pars_fragment:Ey,metalnessmap_fragment:wy,metalnessmap_pars_fragment:Ty,morphinstance_vertex:Ay,morphcolor_vertex:Ry,morphnormal_vertex:Cy,morphtarget_pars_vertex:by,morphtarget_vertex:Py,normal_fragment_begin:Ly,normal_fragment_maps:Dy,normal_pars_fragment:Ny,normal_pars_vertex:Iy,normal_vertex:Uy,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:zy,iridescence_pars_fragment:By,opaque_fragment:Hy,packing:Vy,premultiplied_alpha_fragment:Gy,project_vertex:Wy,dithering_fragment:jy,dithering_pars_fragment:Xy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Zy,shadowmap_vertex:Ky,shadowmask_pars_fragment:Qy,skinbase_vertex:Jy,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:rM,tonemapping_fragment:sM,tonemapping_pars_fragment:aM,transmission_fragment:oM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:dM,worldpos_vertex:fM,background_vert:hM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:vM,cube_frag:_M,depth_vert:xM,depth_frag:yM,distanceRGBA_vert:MM,distanceRGBA_frag:SM,equirect_vert:EM,equirect_frag:wM,linedashed_vert:TM,linedashed_frag:AM,meshbasic_vert:RM,meshbasic_frag:CM,meshlambert_vert:bM,meshlambert_frag:PM,meshmatcap_vert:LM,meshmatcap_frag:DM,meshnormal_vert:NM,meshnormal_frag:IM,meshphong_vert:UM,meshphong_frag:FM,meshphysical_vert:OM,meshphysical_frag:kM,meshtoon_vert:zM,meshtoon_frag:BM,points_vert:HM,points_frag:VM,shadow_vert:GM,shadow_frag:WM,sprite_vert:jM,sprite_frag:XM},Ie={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ai={basic:{uniforms:An([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new dt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new dt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:An([Ie.common,Ie.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:An([Ie.lights,Ie.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ai.physical={uniforms:An([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const El={r:0,b:0,g:0},Yr=new Ci,qM=new kt;function YM(s,e,t,r,o,l,u){const d=new dt(0);let p=l===!0?0:1,h,m,_=null,v=0,M=null;function S(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function E(L){let P=!1;const T=S(L);T===null?x(d,p):T&&T.isColor&&(x(T,1),P=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,P){const T=S(P);T&&(T.isCubeTexture||T.mapping===Vl)?(m===void 0&&(m=new Ot(new Ka(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:Js(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Yr.copy(P.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.material.uniforms.envMap.value=T,m.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Yr)),m.material.toneMapped=Et.getTransfer(T.colorSpace)!==Nt,(_!==T||v!==T.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=T,v=T.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Ot(new jl(2,2),new br({name:"BackgroundMaterial",uniforms:Js(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Et.getTransfer(T.colorSpace)!==Nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||v!==T.version||M!==s.toneMapping)&&(h.material.needsUpdate=!0,_=T,v=T.version,M=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,P){L.getRGB(El,L0(s)),r.buffers.color.setClear(El.r,El.g,El.b,P,u)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),p=P,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(d,p)},render:E,addToRenderList:y}}function $M(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function d(A,F,Q,$,ce){let he=!1;const ne=_($,Q,F);l!==ne&&(l=ne,h(l.object)),he=M(A,$,Q,ce),he&&S(A,$,Q,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,T(A,F,Q,$),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return s.createVertexArray()}function h(A){return s.bindVertexArray(A)}function m(A){return s.deleteVertexArray(A)}function _(A,F,Q){const $=Q.wireframe===!0;let ce=r[A.id];ce===void 0&&(ce={},r[A.id]=ce);let he=ce[F.id];he===void 0&&(he={},ce[F.id]=he);let ne=he[$];return ne===void 0&&(ne=v(p()),he[$]=ne),ne}function v(A){const F=[],Q=[],$=[];for(let ce=0;ce<t;ce++)F[ce]=0,Q[ce]=0,$[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Q,attributeDivisors:$,object:A,attributes:{},index:null}}function M(A,F,Q,$){const ce=l.attributes,he=F.attributes;let ne=0;const pe=Q.getAttributes();for(const z in pe)if(pe[z].location>=0){const oe=ce[z];let O=he[z];if(O===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),oe===void 0||oe.attribute!==O||O&&oe.data!==O.data)return!0;ne++}return l.attributesNum!==ne||l.index!==$}function S(A,F,Q,$){const ce={},he=F.attributes;let ne=0;const pe=Q.getAttributes();for(const z in pe)if(pe[z].location>=0){let oe=he[z];oe===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const O={};O.attribute=oe,oe&&oe.data&&(O.data=oe.data),ce[z]=O,ne++}l.attributes=ce,l.attributesNum=ne,l.index=$}function E(){const A=l.newAttributes;for(let F=0,Q=A.length;F<Q;F++)A[F]=0}function y(A){x(A,0)}function x(A,F){const Q=l.newAttributes,$=l.enabledAttributes,ce=l.attributeDivisors;Q[A]=1,$[A]===0&&(s.enableVertexAttribArray(A),$[A]=1),ce[A]!==F&&(s.vertexAttribDivisor(A,F),ce[A]=F)}function L(){const A=l.newAttributes,F=l.enabledAttributes;for(let Q=0,$=F.length;Q<$;Q++)F[Q]!==A[Q]&&(s.disableVertexAttribArray(Q),F[Q]=0)}function P(A,F,Q,$,ce,he,ne){ne===!0?s.vertexAttribIPointer(A,F,Q,ce,he):s.vertexAttribPointer(A,F,Q,$,ce,he)}function T(A,F,Q,$){E();const ce=$.attributes,he=Q.getAttributes(),ne=F.defaultAttributeValues;for(const pe in he){const z=he[pe];if(z.location>=0){let ue=ce[pe];if(ue===void 0&&(pe==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),pe==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){const oe=ue.normalized,O=ue.itemSize,se=e.get(ue);if(se===void 0)continue;const De=se.buffer,J=se.type,me=se.bytesPerElement,we=J===s.INT||J===s.UNSIGNED_INT||ue.gpuType===nf;if(ue.isInterleavedBufferAttribute){const Me=ue.data,Le=Me.stride,ke=ue.offset;if(Me.isInstancedInterleavedBuffer){for(let et=0;et<z.locationSize;et++)x(z.location+et,Me.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let et=0;et<z.locationSize;et++)y(z.location+et);s.bindBuffer(s.ARRAY_BUFFER,De);for(let et=0;et<z.locationSize;et++)P(z.location+et,O/z.locationSize,J,oe,Le*me,(ke+O/z.locationSize*et)*me,we)}else{if(ue.isInstancedBufferAttribute){for(let Me=0;Me<z.locationSize;Me++)x(z.location+Me,ue.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Me=0;Me<z.locationSize;Me++)y(z.location+Me);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Me=0;Me<z.locationSize;Me++)P(z.location+Me,O/z.locationSize,J,oe,O*me,O/z.locationSize*Me*me,we)}}else if(ne!==void 0){const oe=ne[pe];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(z.location,oe);break;case 3:s.vertexAttrib3fv(z.location,oe);break;case 4:s.vertexAttrib4fv(z.location,oe);break;default:s.vertexAttrib1fv(z.location,oe)}}}}L()}function V(){k();for(const A in r){const F=r[A];for(const Q in F){const $=F[Q];for(const ce in $)m($[ce].object),delete $[ce];delete F[Q]}delete r[A]}}function N(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const Q in F){const $=F[Q];for(const ce in $)m($[ce].object),delete $[ce];delete F[Q]}delete r[A.id]}function U(A){for(const F in r){const Q=r[F];if(Q[A.id]===void 0)continue;const $=Q[A.id];for(const ce in $)m($[ce].object),delete $[ce];delete Q[A.id]}}function k(){C(),u=!0,l!==o&&(l=o,h(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:k,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:y,disableUnusedAttributes:L}}function ZM(s,e,t){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,_){_!==0&&(s.drawArraysInstanced(r,h,m,_),t.update(m,r,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,_);let M=0;for(let S=0;S<_;S++)M+=m[S];t.update(M,r,1)}function p(h,m,_,v){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<h.length;S++)u(h[S],m[S],v[S]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,_);let S=0;for(let E=0;E<_;E++)S+=m[E]*v[E];t.update(S,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function KM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==vi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const k=U===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Zi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==qi&&!k)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=S>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:T,vertexTextures:V,maxSamples:N}}function QM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Zr,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||r!==0||o;return o=v,r=_.length,M},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,M){const S=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||S===null||S.length===0||l&&!y)l?m(null):h();else{const L=l?0:r,P=L*4;let T=x.clippingState||null;p.value=T,T=m(S,v,P,M);for(let V=0;V!==P;++V)T[V]=t[V];x.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(_,v,M,S){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=p.value,S!==!0||y===null){const x=M+E*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,T=M;P!==E;++P,T+=4)u.copy(_[P]).applyMatrix4(L,d),u.normal.toArray(y,T),y[T+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function JM(s){let e=new WeakMap;function t(u,d){return d===xd?u.mapping=$s:d===yd&&(u.mapping=Zs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===xd||d===yd)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new ux(p.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class U0 extends D0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,d-=m*this.view.offsetY,p=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,Sm=[.125,.215,.35,.446,.526,.582],Jr=20,ed=new U0,Em=new dt;let td=null,nd=0,id=0,rd=!1;const Kr=(1+Math.sqrt(5))/2,Vs=1/Kr,wm=[new W(-Kr,Vs,0),new W(Kr,Vs,0),new W(-Vs,0,Kr),new W(Vs,0,Kr),new W(0,Kr,-Vs),new W(0,Kr,Vs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:qa,format:vi,colorSpace:ea,depthBuffer:!1},o=Am(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eS(l)),this._blurMaterial=tS(l,e,t)}return o}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,ed)}_sceneToCubeUV(e,t,r,o){const d=new qn(90,1,t,r),p=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(Em),m.toneMapping=Rr,m.autoClear=!1;const M=new Xn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),S=new Ot(new Ka,M);let E=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,E=!0):(M.color.copy(Em),E=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(d.up.set(0,p[x],0),d.lookAt(h[x],0,0)):L===1?(d.up.set(0,0,p[x]),d.lookAt(0,h[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,h[x]));const P=this._cubeSize;wl(o,L*P,x>2?P:0,P,P),m.setRenderTarget(o),E&&m.render(S,d),m.render(e,d)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===$s||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Ot(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;wl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,ed)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=wm[(o-l-1)%wm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Ot(this._lodPlanes[o],h),v=h.uniforms,M=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Jr-1),E=l/S,y=isFinite(l)?1+Math.floor(m*E):Jr;y>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const x=[];let L=0;for(let U=0;U<Jr;++U){const k=U/E,C=Math.exp(-k*k/2);x.push(C),U===0?L+=C:U<y&&(L+=2*C)}for(let U=0;U<x.length;U++)x[U]=x[U]/L;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=S,v.mipInt.value=P-r;const T=this._sizeLods[o],V=3*T*(o>P-Ws?o-P+Ws:0),N=4*(this._cubeSize-T);wl(t,V,N,3*T,2*T),p.setRenderTarget(t),p.render(_,ed)}}function eS(s){const e=[],t=[],r=[];let o=s;const l=s-Ws+1+Sm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let p=1/d;u>s-Ws?p=Sm[u-s+Ws-1]:u===0&&(p=0),r.push(p);const h=1/(d-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],M=6,S=6,E=3,y=2,x=1,L=new Float32Array(E*S*M),P=new Float32Array(y*S*M),T=new Float32Array(x*S*M);for(let N=0;N<M;N++){const U=N%3*2/3-1,k=N>2?0:-1,C=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];L.set(C,E*S*N),P.set(v,y*S*N);const A=[N,N,N,N,N,N];T.set(A,x*S*N)}const V=new $t;V.setAttribute("position",new Mn(L,E)),V.setAttribute("uv",new Mn(P,y)),V.setAttribute("faceIndex",new Mn(T,x)),e.push(V),o>Ws&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Am(s,e,t){const r=new is(s,e,t);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function tS(s,e,t){const r=new Float32Array(Jr),o=new W(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Rm(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Cm(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,h=p===xd||p===yd,m=p===$s||p===Zs;if(h||m){let _=e.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return t===null&&(t=new Tm(s)),_=h?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return h&&M&&M.height>0||m&&M&&o(M)?(t===null&&(t=new Tm(s)),_=h?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let p=0;const h=6;for(let m=0;m<h;m++)d[m]!==void 0&&p++;return p===h}function l(d){const p=d.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function iS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ga("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function rS(s,e,t,r){const o={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);for(const S in v.morphAttributes){const E=v.morphAttributes[S];for(let y=0,x=E.length;y<x;y++)e.remove(E[y])}v.removeEventListener("dispose",u),delete o[v.id];const M=l.get(v);M&&(e.remove(M),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const S in M){const E=M[S];for(let y=0,x=E.length;y<x;y++)e.update(E[y],s.ARRAY_BUFFER)}}function h(_){const v=[],M=_.index,S=_.attributes.position;let E=0;if(M!==null){const L=M.array;E=M.version;for(let P=0,T=L.length;P<T;P+=3){const V=L[P+0],N=L[P+1],U=L[P+2];v.push(V,N,N,U,U,V)}}else if(S!==void 0){const L=S.array;E=S.version;for(let P=0,T=L.length/3-1;P<T;P+=3){const V=P+0,N=P+1,U=P+2;v.push(V,N,N,U,U,V)}}else return;const y=new(T0(v)?P0:b0)(v,1);y.version=E;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function m(_){const v=l.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&h(_)}else h(_);return l.get(_)}return{get:d,update:p,getWireframeAttribute:m}}function sS(s,e,t){let r;function o(v){r=v}let l,u;function d(v){l=v.type,u=v.bytesPerElement}function p(v,M){s.drawElements(r,M,l,v*u),t.update(M,r,1)}function h(v,M,S){S!==0&&(s.drawElementsInstanced(r,M,l,v*u,S),t.update(M,r,S))}function m(v,M,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,v,0,S);let y=0;for(let x=0;x<S;x++)y+=M[x];t.update(y,r,1)}function _(v,M,S,E){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/u,M[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,v,0,E,0,S);let x=0;for(let L=0;L<S;L++)x+=M[L]*E[L];t.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function aS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function oS(s,e,t){const r=new WeakMap,o=new It;function l(u,d,p){const h=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let A=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;v!==void 0&&v.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let T=0;S===!0&&(T=1),E===!0&&(T=2),y===!0&&(T=3);let V=d.attributes.position.count*T,N=1;V>e.maxTextureSize&&(N=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*N*4*_),k=new R0(U,V,N,_);k.type=qi,k.needsUpdate=!0;const C=T*4;for(let F=0;F<_;F++){const Q=x[F],$=L[F],ce=P[F],he=V*N*4*F;for(let ne=0;ne<Q.count;ne++){const pe=ne*C;S===!0&&(o.fromBufferAttribute(Q,ne),U[he+pe+0]=o.x,U[he+pe+1]=o.y,U[he+pe+2]=o.z,U[he+pe+3]=0),E===!0&&(o.fromBufferAttribute($,ne),U[he+pe+4]=o.x,U[he+pe+5]=o.y,U[he+pe+6]=o.z,U[he+pe+7]=0),y===!0&&(o.fromBufferAttribute(ce,ne),U[he+pe+8]=o.x,U[he+pe+9]=o.y,U[he+pe+10]=o.z,U[he+pe+11]=ce.itemSize===4?o.w:1)}}v={count:_,texture:k,size:new _t(V,N)},r.set(d,v),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const E=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function lS(s,e,t,r){let o=new WeakMap;function l(p){const h=r.render.frame,m=p.geometry,_=e.get(p,m);if(o.get(_)!==h&&(e.update(_),o.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==h&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return _}function u(){o=new WeakMap}function d(p){const h=p.target;h.removeEventListener("dispose",d),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}class F0 extends Rn{constructor(e,t,r,o,l,u,d,p,h,m=Xs){if(m!==Xs&&m!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Xs&&(r=ns),r===void 0&&m===Qs&&(r=Ks),super(null,o,l,u,d,p,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:_i,this.minFilter=p!==void 0?p:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const O0=new Rn,bm=new F0(1,1),k0=new R0,z0=new Y_,B0=new N0,Pm=[],Lm=[],Dm=new Float32Array(16),Nm=new Float32Array(9),Im=new Float32Array(4);function ia(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Pm[o];if(l===void 0&&(l=new Float32Array(o),Pm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Xl(s,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function cS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function dS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function fS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function hS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),tn(t,r)}}function pS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Nm.set(r),s.uniformMatrix3fv(this.addr,!1,Nm),tn(t,r)}}function mS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),tn(t,r)}}function gS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function _S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function xS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function yS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function MS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function SS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function ES(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function wS(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=w0,l=bm):l=O0,t.setTexture2D(e||l,o)}function TS(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||z0,o)}function AS(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||B0,o)}function RS(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||k0,o)}function CS(s){switch(s){case 5126:return cS;case 35664:return uS;case 35665:return dS;case 35666:return fS;case 35674:return hS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return vS;case 35668:case 35672:return _S;case 35669:case 35673:return xS;case 5125:return yS;case 36294:return MS;case 36295:return SS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return RS}}function bS(s,e){s.uniform1fv(this.addr,e)}function PS(s,e){const t=ia(e,this.size,2);s.uniform2fv(this.addr,t)}function LS(s,e){const t=ia(e,this.size,3);s.uniform3fv(this.addr,t)}function DS(s,e){const t=ia(e,this.size,4);s.uniform4fv(this.addr,t)}function NS(s,e){const t=ia(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function IS(s,e){const t=ia(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function US(s,e){const t=ia(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FS(s,e){s.uniform1iv(this.addr,e)}function OS(s,e){s.uniform2iv(this.addr,e)}function kS(s,e){s.uniform3iv(this.addr,e)}function zS(s,e){s.uniform4iv(this.addr,e)}function BS(s,e){s.uniform1uiv(this.addr,e)}function HS(s,e){s.uniform2uiv(this.addr,e)}function VS(s,e){s.uniform3uiv(this.addr,e)}function GS(s,e){s.uniform4uiv(this.addr,e)}function WS(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||O0,l[u])}function jS(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||z0,l[u])}function XS(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||B0,l[u])}function qS(s,e,t){const r=this.cache,o=e.length,l=Xl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||k0,l[u])}function YS(s){switch(s){case 5126:return bS;case 35664:return PS;case 35665:return LS;case 35666:return DS;case 35674:return NS;case 35675:return IS;case 35676:return US;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return kS;case 35669:case 35673:return zS;case 5125:return BS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return qS}}class $S{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=CS(t.type)}}class ZS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YS(t.type)}}class KS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function QS(s,e,t){const r=s.name,o=r.length;for(sd.lastIndex=0;;){const l=sd.exec(r),u=sd.lastIndex;let d=l[1];const p=l[2]==="]",h=l[3];if(p&&(d=d|0),h===void 0||h==="["&&u+2===o){Um(t,h===void 0?new $S(d,s,e):new ZS(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new KS(d),Um(t,_)),t=_}}}class Ul{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);QS(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Fm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const JS=37297;let e1=0;function t1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Om=new ft;function n1(s){Et._getMatrix(Om,Et.workingColorSpace,s);const e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function km(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+t1(s.getShaderSource(e),u)}else return o}function i1(s,e){const t=n1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r1(s,e){let t;switch(e){case S_:t="Linear";break;case E_:t="Reinhard";break;case w_:t="Cineon";break;case d0:t="ACESFilmic";break;case A_:t="AgX";break;case R_:t="Neutral";break;case T_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tl=new W;function s1(){Et.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function o1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function l1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Wa(s){return s!==""}function zm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(s){return s.replace(c1,d1)}const u1=new Map;function d1(s,e){let t=pt[e];if(t===void 0){const r=u1.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zd(t)}const f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(f1,h1)}function h1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Vm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function m1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Zs:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function v1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case u0:e="ENVMAP_BLENDING_MULTIPLY";break;case y_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function _1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function x1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=p1(t),h=m1(t),m=g1(t),_=v1(t),v=_1(t),M=a1(t),S=o1(l),E=o.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Wa).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Wa).join(`
`),x.length>0&&(x+=`
`)):(y=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),x=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Rr?r1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,i1("linearToOutputTexel",t.outputColorSpace),s1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),u=Zd(u),u=zm(u,t),u=Bm(u,t),d=Zd(d),d=zm(d,t),d=Bm(d,t),u=Hm(u),d=Hm(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+u,T=L+x+d,V=Fm(o,o.VERTEX_SHADER,P),N=Fm(o,o.FRAGMENT_SHADER,T);o.attachShader(E,V),o.attachShader(E,N),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(F){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(E).trim(),$=o.getShaderInfoLog(V).trim(),ce=o.getShaderInfoLog(N).trim();let he=!0,ne=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,V,N);else{const pe=km(o,V,"vertex"),z=km(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Q+`
`+pe+`
`+z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||ce==="")&&(ne=!1);ne&&(F.diagnostics={runnable:he,programLog:Q,vertexShader:{log:$,prefix:y},fragmentShader:{log:ce,prefix:x}})}o.deleteShader(V),o.deleteShader(N),k=new Ul(o,E),C=l1(o,E)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(E,JS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=N,this}let y1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new S1(e),t.set(e,r)),r}}class S1{constructor(e){this.id=y1++,this.code=e,this.usedTimes=0}}function E1(s,e,t,r,o,l,u){const d=new cf,p=new M1,h=new Set,m=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let M=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function y(C,A,F,Q,$){const ce=Q.fog,he=$.geometry,ne=C.isMeshStandardMaterial?Q.environment:null,pe=(C.isMeshStandardMaterial?t:e).get(C.envMap||ne),z=pe&&pe.mapping===Vl?pe.image.height:null,ue=S[C.type];C.precision!==null&&(M=o.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=oe!==void 0?oe.length:0;let se=0;he.morphAttributes.position!==void 0&&(se=1),he.morphAttributes.normal!==void 0&&(se=2),he.morphAttributes.color!==void 0&&(se=3);let De,J,me,we;if(ue){const Mt=Ai[ue];De=Mt.vertexShader,J=Mt.fragmentShader}else De=C.vertexShader,J=C.fragmentShader,p.update(C),me=p.getVertexShaderID(C),we=p.getFragmentShaderID(C);const Me=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),ke=$.isInstancedMesh===!0,et=$.isBatchedMesh===!0,bt=!!C.map,ht=!!C.matcap,Dt=!!pe,q=!!C.aoMap,Pe=!!C.lightMap,Qe=!!C.bumpMap,nt=!!C.normalMap,tt=!!C.displacementMap,wt=!!C.emissiveMap,Ze=!!C.metalnessMap,D=!!C.roughnessMap,R=C.anisotropy>0,te=C.clearcoat>0,Z=C.dispersion>0,le=C.iridescence>0,de=C.sheen>0,Fe=C.transmission>0,ve=R&&!!C.anisotropyMap,Te=te&&!!C.clearcoatMap,xe=te&&!!C.clearcoatNormalMap,ge=te&&!!C.clearcoatRoughnessMap,Re=le&&!!C.iridescenceMap,He=le&&!!C.iridescenceThicknessMap,Je=de&&!!C.sheenColorMap,Ve=de&&!!C.sheenRoughnessMap,gt=!!C.specularMap,lt=!!C.specularColorMap,Pt=!!C.specularIntensityMap,j=Fe&&!!C.transmissionMap,Ne=Fe&&!!C.thicknessMap,fe=!!C.gradientMap,_e=!!C.alphaMap,Oe=C.alphaTest>0,Ue=!!C.alphaHash,ct=!!C.extensions;let zt=Rr;C.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(zt=s.toneMapping);const Zt={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:J,defines:C.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:et,batchingColor:et&&$._colorsTexture!==null,instancing:ke,instancingColor:ke&&$.instanceColor!==null,instancingMorph:ke&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ea,alphaToCoverage:!!C.alphaToCoverage,map:bt,matcap:ht,envMap:Dt,envMapMode:Dt&&pe.mapping,envMapCubeUVHeight:z,aoMap:q,lightMap:Pe,bumpMap:Qe,normalMap:nt,displacementMap:v&&tt,emissiveMap:wt,normalMapObjectSpace:nt&&C.normalMapType===L_,normalMapTangentSpace:nt&&C.normalMapType===E0,metalnessMap:Ze,roughnessMap:D,anisotropy:R,anisotropyMap:ve,clearcoat:te,clearcoatMap:Te,clearcoatNormalMap:xe,clearcoatRoughnessMap:ge,dispersion:Z,iridescence:le,iridescenceMap:Re,iridescenceThicknessMap:He,sheen:de,sheenColorMap:Je,sheenRoughnessMap:Ve,specularMap:gt,specularColorMap:lt,specularIntensityMap:Pt,transmission:Fe,transmissionMap:j,thicknessMap:Ne,gradientMap:fe,opaque:C.transparent===!1&&C.blending===js&&C.alphaToCoverage===!1,alphaMap:_e,alphaTest:Oe,alphaHash:Ue,combine:C.combine,mapUv:bt&&E(C.map.channel),aoMapUv:q&&E(C.aoMap.channel),lightMapUv:Pe&&E(C.lightMap.channel),bumpMapUv:Qe&&E(C.bumpMap.channel),normalMapUv:nt&&E(C.normalMap.channel),displacementMapUv:tt&&E(C.displacementMap.channel),emissiveMapUv:wt&&E(C.emissiveMap.channel),metalnessMapUv:Ze&&E(C.metalnessMap.channel),roughnessMapUv:D&&E(C.roughnessMap.channel),anisotropyMapUv:ve&&E(C.anisotropyMap.channel),clearcoatMapUv:Te&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:xe&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:He&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(C.sheenRoughnessMap.channel),specularMapUv:gt&&E(C.specularMap.channel),specularColorMapUv:lt&&E(C.specularColorMap.channel),specularIntensityMapUv:Pt&&E(C.specularIntensityMap.channel),transmissionMapUv:j&&E(C.transmissionMap.channel),thicknessMapUv:Ne&&E(C.thicknessMap.channel),alphaMapUv:_e&&E(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(nt||R),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!he.attributes.uv&&(bt||_e),fog:!!ce,useFog:C.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Le,skinning:$.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:zt,decodeVideoTexture:bt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Nt,decodeVideoTextureEmissive:wt&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Nt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yn,flipSided:C.side===zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ct&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&C.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Zt.vertexUv1s=h.has(1),Zt.vertexUv2s=h.has(2),Zt.vertexUv3s=h.has(3),h.clear(),Zt}function x(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)A.push(F),A.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(L(A,C),P(A,C),A.push(s.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function L(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function P(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function T(C){const A=S[C.type];let F;if(A){const Q=Ai[A];F=ax.clone(Q.uniforms)}else F=C.uniforms;return F}function V(C,A){let F;for(let Q=0,$=m.length;Q<$;Q++){const ce=m[Q];if(ce.cacheKey===A){F=ce,++F.usedTimes;break}}return F===void 0&&(F=new x1(s,A,C,l),m.push(F)),F}function N(C){if(--C.usedTimes===0){const A=m.indexOf(C);m[A]=m[m.length-1],m.pop(),C.destroy()}}function U(C){p.remove(C)}function k(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:T,acquireProgram:V,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:k}}function w1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function T1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,v,M,S,E,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:M,groupOrder:S,renderOrder:_.renderOrder,z:E,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=M,x.groupOrder=S,x.renderOrder=_.renderOrder,x.z=E,x.group=y),e++,x}function d(_,v,M,S,E,y){const x=u(_,v,M,S,E,y);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):t.push(x)}function p(_,v,M,S,E,y){const x=u(_,v,M,S,E,y);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):t.unshift(x)}function h(_,v){t.length>1&&t.sort(_||T1),r.length>1&&r.sort(v||Gm),o.length>1&&o.sort(v||Gm)}function m(){for(let _=e,v=s.length;_<v;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:m,sort:h}}function A1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Wm,s.set(r,[u])):o>=l.length?(u=new Wm,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function R1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new dt};break;case"SpotLight":t={position:new W,direction:new W,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function C1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let b1=0;function P1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function L1(s){const e=new R1,t=C1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new W);const o=new W,l=new kt,u=new kt;function d(h){let m=0,_=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,S=0,E=0,y=0,x=0,L=0,P=0,T=0,V=0,N=0,U=0;h.sort(P1);for(let C=0,A=h.length;C<A;C++){const F=h[C],Q=F.color,$=F.intensity,ce=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=Q.r*$,_+=Q.g*$,v+=Q.b*$;else if(F.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(F.sh.coefficients[ne],$);U++}else if(F.isDirectionalLight){const ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const pe=F.shadow,z=t.get(F);z.shadowIntensity=pe.intensity,z.shadowBias=pe.bias,z.shadowNormalBias=pe.normalBias,z.shadowRadius=pe.radius,z.shadowMapSize=pe.mapSize,r.directionalShadow[M]=z,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=F.shadow.matrix,L++}r.directional[M]=ne,M++}else if(F.isSpotLight){const ne=e.get(F);ne.position.setFromMatrixPosition(F.matrixWorld),ne.color.copy(Q).multiplyScalar($),ne.distance=ce,ne.coneCos=Math.cos(F.angle),ne.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ne.decay=F.decay,r.spot[E]=ne;const pe=F.shadow;if(F.map&&(r.spotLightMap[V]=F.map,V++,pe.updateMatrices(F),F.castShadow&&N++),r.spotLightMatrix[E]=pe.matrix,F.castShadow){const z=t.get(F);z.shadowIntensity=pe.intensity,z.shadowBias=pe.bias,z.shadowNormalBias=pe.normalBias,z.shadowRadius=pe.radius,z.shadowMapSize=pe.mapSize,r.spotShadow[E]=z,r.spotShadowMap[E]=he,T++}E++}else if(F.isRectAreaLight){const ne=e.get(F);ne.color.copy(Q).multiplyScalar($),ne.halfWidth.set(F.width*.5,0,0),ne.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=ne,y++}else if(F.isPointLight){const ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),ne.distance=F.distance,ne.decay=F.decay,F.castShadow){const pe=F.shadow,z=t.get(F);z.shadowIntensity=pe.intensity,z.shadowBias=pe.bias,z.shadowNormalBias=pe.normalBias,z.shadowRadius=pe.radius,z.shadowMapSize=pe.mapSize,z.shadowCameraNear=pe.camera.near,z.shadowCameraFar=pe.camera.far,r.pointShadow[S]=z,r.pointShadowMap[S]=he,r.pointShadowMatrix[S]=F.shadow.matrix,P++}r.point[S]=ne,S++}else if(F.isHemisphereLight){const ne=e.get(F);ne.skyColor.copy(F.color).multiplyScalar($),ne.groundColor.copy(F.groundColor).multiplyScalar($),r.hemi[x]=ne,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==M||k.pointLength!==S||k.spotLength!==E||k.rectAreaLength!==y||k.hemiLength!==x||k.numDirectionalShadows!==L||k.numPointShadows!==P||k.numSpotShadows!==T||k.numSpotMaps!==V||k.numLightProbes!==U)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=y,r.point.length=S,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=T+V-N,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=U,k.directionalLength=M,k.pointLength=S,k.spotLength=E,k.rectAreaLength=y,k.hemiLength=x,k.numDirectionalShadows=L,k.numPointShadows=P,k.numSpotShadows=T,k.numSpotMaps=V,k.numLightProbes=U,r.version=b1++)}function p(h,m){let _=0,v=0,M=0,S=0,E=0;const y=m.matrixWorldInverse;for(let x=0,L=h.length;x<L;x++){const P=h[x];if(P.isDirectionalLight){const T=r.directional[_];T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(y),_++}else if(P.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const T=r.rectArea[S];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),S++}else if(P.isPointLight){const T=r.point[v];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const T=r.hemi[E];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(y),E++}}}return{setup:d,setupView:p,state:r}}function jm(s){const e=new L1(s),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function D1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new jm(s),e.set(o,[d])):l>=u.length?(d=new jm(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class N1 extends rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I1 extends rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O1(s,e,t){let r=new uf;const o=new _t,l=new _t,u=new It,d=new N1({depthPacking:P_}),p=new I1,h={},m=t.maxTextureSize,_={[Cr]:zn,[zn]:Cr,[yn]:yn},v=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:U1,fragmentShader:F1}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const S=new $t;S.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ot(S,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let x=this.type;this.render=function(N,U,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const C=s.getRenderTarget(),A=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(Ar),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=x!==Xi&&this.type===Xi,ce=x===Xi&&this.type!==Xi;for(let he=0,ne=N.length;he<ne;he++){const pe=N[he],z=pe.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const ue=z.getFrameExtents();if(o.multiply(ue),l.copy(z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ue.x),o.x=l.x*ue.x,z.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ue.y),o.y=l.y*ue.y,z.mapSize.y=l.y)),z.map===null||$===!0||ce===!0){const O=this.type!==Xi?{minFilter:_i,magFilter:_i}:{};z.map!==null&&z.map.dispose(),z.map=new is(o.x,o.y,O),z.map.texture.name=pe.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const oe=z.getViewportCount();for(let O=0;O<oe;O++){const se=z.getViewport(O);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),Q.viewport(u),z.updateMatrices(pe,O),r=z.getFrustum(),T(U,k,z.camera,pe,this.type)}z.isPointLightShadow!==!0&&this.type===Xi&&L(z,k),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(C,A,F)};function L(N,U){const k=e.update(E);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new is(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(U,null,k,v,E,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(U,null,k,M,E,null)}function P(N,U,k,C){let A=null;const F=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)A=F;else if(A=k.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Q=A.uuid,$=U.uuid;let ce=h[Q];ce===void 0&&(ce={},h[Q]=ce);let he=ce[$];he===void 0&&(he=A.clone(),ce[$]=he,U.addEventListener("dispose",V)),A=he}if(A.visible=U.visible,A.wireframe=U.wireframe,C===Xi?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:_[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Q=s.properties.get(A);Q.light=k}return A}function T(N,U,k,C,A){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===Xi)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const $=e.update(N),ce=N.material;if(Array.isArray(ce)){const he=$.groups;for(let ne=0,pe=he.length;ne<pe;ne++){const z=he[ne],ue=ce[z.materialIndex];if(ue&&ue.visible){const oe=P(N,ue,C,A);N.onBeforeShadow(s,N,U,k,$,oe,z),s.renderBufferDirect(k,null,$,oe,N,z),N.onAfterShadow(s,N,U,k,$,oe,z)}}}else if(ce.visible){const he=P(N,ce,C,A);N.onBeforeShadow(s,N,U,k,$,he,null),s.renderBufferDirect(k,null,$,he,N,null),N.onAfterShadow(s,N,U,k,$,he,null)}}const Q=N.children;for(let $=0,ce=Q.length;$<ce;$++)T(Q[$],U,k,C,A)}function V(N){N.target.removeEventListener("dispose",V);for(const k in h){const C=h[k],A=N.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const k1={[fd]:hd,[pd]:vd,[md]:_d,[Ys]:gd,[hd]:fd,[vd]:pd,[_d]:md,[gd]:Ys};function z1(s,e){function t(){let j=!1;const Ne=new It;let fe=null;const _e=new It(0,0,0,0);return{setMask:function(Oe){fe!==Oe&&!j&&(s.colorMask(Oe,Oe,Oe,Oe),fe=Oe)},setLocked:function(Oe){j=Oe},setClear:function(Oe,Ue,ct,zt,Zt){Zt===!0&&(Oe*=zt,Ue*=zt,ct*=zt),Ne.set(Oe,Ue,ct,zt),_e.equals(Ne)===!1&&(s.clearColor(Oe,Ue,ct,zt),_e.copy(Ne))},reset:function(){j=!1,fe=null,_e.set(-1,0,0,0)}}}function r(){let j=!1,Ne=!1,fe=null,_e=null,Oe=null;return{setReversed:function(Ue){if(Ne!==Ue){const ct=e.get("EXT_clip_control");Ne?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const zt=Oe;Oe=null,this.setClear(zt)}Ne=Ue},getReversed:function(){return Ne},setTest:function(Ue){Ue?Me(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!j&&(s.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(Ne&&(Ue=k1[Ue]),_e!==Ue){switch(Ue){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case pd:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case md:s.depthFunc(s.EQUAL);break;case gd:s.depthFunc(s.GEQUAL);break;case vd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Ue}},setLocked:function(Ue){j=Ue},setClear:function(Ue){Oe!==Ue&&(Ne&&(Ue=1-Ue),s.clearDepth(Ue),Oe=Ue)},reset:function(){j=!1,fe=null,_e=null,Oe=null,Ne=!1}}}function o(){let j=!1,Ne=null,fe=null,_e=null,Oe=null,Ue=null,ct=null,zt=null,Zt=null;return{setTest:function(Mt){j||(Mt?Me(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(Mt){Ne!==Mt&&!j&&(s.stencilMask(Mt),Ne=Mt)},setFunc:function(Mt,Cn,Sn){(fe!==Mt||_e!==Cn||Oe!==Sn)&&(s.stencilFunc(Mt,Cn,Sn),fe=Mt,_e=Cn,Oe=Sn)},setOp:function(Mt,Cn,Sn){(Ue!==Mt||ct!==Cn||zt!==Sn)&&(s.stencilOp(Mt,Cn,Sn),Ue=Mt,ct=Cn,zt=Sn)},setLocked:function(Mt){j=Mt},setClear:function(Mt){Zt!==Mt&&(s.clearStencil(Mt),Zt=Mt)},reset:function(){j=!1,Ne=null,fe=null,_e=null,Oe=null,Ue=null,ct=null,zt=null,Zt=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,h=new WeakMap;let m={},_={},v=new WeakMap,M=[],S=null,E=!1,y=null,x=null,L=null,P=null,T=null,V=null,N=null,U=new dt(0,0,0),k=0,C=!1,A=null,F=null,Q=null,$=null,ce=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,pe=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(z)[1]),ne=pe>=1):z.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ne=pe>=2);let ue=null,oe={};const O=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),De=new It().fromArray(O),J=new It().fromArray(se);function me(j,Ne,fe,_e){const Oe=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(j,Ue),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<fe;ct++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Ne+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return Ue}const we={};we[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Me(s.DEPTH_TEST),u.setFunc(Ys),Qe(!1),nt(Zp),Me(s.CULL_FACE),q(Ar);function Me(j){m[j]!==!0&&(s.enable(j),m[j]=!0)}function Le(j){m[j]!==!1&&(s.disable(j),m[j]=!1)}function ke(j,Ne){return _[j]!==Ne?(s.bindFramebuffer(j,Ne),_[j]=Ne,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ne),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function et(j,Ne){let fe=M,_e=!1;if(j){fe=v.get(Ne),fe===void 0&&(fe=[],v.set(Ne,fe));const Oe=j.textures;if(fe.length!==Oe.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,ct=Oe.length;Ue<ct;Ue++)fe[Ue]=s.COLOR_ATTACHMENT0+Ue;fe.length=Oe.length,_e=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,_e=!0);_e&&s.drawBuffers(fe)}function bt(j){return S!==j?(s.useProgram(j),S=j,!0):!1}const ht={[Qr]:s.FUNC_ADD,[i_]:s.FUNC_SUBTRACT,[r_]:s.FUNC_REVERSE_SUBTRACT};ht[s_]=s.MIN,ht[a_]=s.MAX;const Dt={[o_]:s.ZERO,[l_]:s.ONE,[c_]:s.SRC_COLOR,[ud]:s.SRC_ALPHA,[m_]:s.SRC_ALPHA_SATURATE,[h_]:s.DST_COLOR,[d_]:s.DST_ALPHA,[u_]:s.ONE_MINUS_SRC_COLOR,[dd]:s.ONE_MINUS_SRC_ALPHA,[p_]:s.ONE_MINUS_DST_COLOR,[f_]:s.ONE_MINUS_DST_ALPHA,[g_]:s.CONSTANT_COLOR,[v_]:s.ONE_MINUS_CONSTANT_COLOR,[__]:s.CONSTANT_ALPHA,[x_]:s.ONE_MINUS_CONSTANT_ALPHA};function q(j,Ne,fe,_e,Oe,Ue,ct,zt,Zt,Mt){if(j===Ar){E===!0&&(Le(s.BLEND),E=!1);return}if(E===!1&&(Me(s.BLEND),E=!0),j!==n_){if(j!==y||Mt!==C){if((x!==Qr||T!==Qr)&&(s.blendEquation(s.FUNC_ADD),x=Qr,T=Qr),Mt)switch(j){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.ONE,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,P=null,V=null,N=null,U.set(0,0,0),k=0,y=j,C=Mt}return}Oe=Oe||Ne,Ue=Ue||fe,ct=ct||_e,(Ne!==x||Oe!==T)&&(s.blendEquationSeparate(ht[Ne],ht[Oe]),x=Ne,T=Oe),(fe!==L||_e!==P||Ue!==V||ct!==N)&&(s.blendFuncSeparate(Dt[fe],Dt[_e],Dt[Ue],Dt[ct]),L=fe,P=_e,V=Ue,N=ct),(zt.equals(U)===!1||Zt!==k)&&(s.blendColor(zt.r,zt.g,zt.b,Zt),U.copy(zt),k=Zt),y=j,C=!1}function Pe(j,Ne){j.side===yn?Le(s.CULL_FACE):Me(s.CULL_FACE);let fe=j.side===zn;Ne&&(fe=!fe),Qe(fe),j.blending===js&&j.transparent===!1?q(Ar):q(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const _e=j.stencilWrite;d.setTest(_e),_e&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),wt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(j){A!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),A=j)}function nt(j){j!==Jv?(Me(s.CULL_FACE),j!==F&&(j===Zp?s.cullFace(s.BACK):j===e_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),F=j}function tt(j){j!==Q&&(ne&&s.lineWidth(j),Q=j)}function wt(j,Ne,fe){j?(Me(s.POLYGON_OFFSET_FILL),($!==Ne||ce!==fe)&&(s.polygonOffset(Ne,fe),$=Ne,ce=fe)):Le(s.POLYGON_OFFSET_FILL)}function Ze(j){j?Me(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function D(j){j===void 0&&(j=s.TEXTURE0+he-1),ue!==j&&(s.activeTexture(j),ue=j)}function R(j,Ne,fe){fe===void 0&&(ue===null?fe=s.TEXTURE0+he-1:fe=ue);let _e=oe[fe];_e===void 0&&(_e={type:void 0,texture:void 0},oe[fe]=_e),(_e.type!==j||_e.texture!==Ne)&&(ue!==fe&&(s.activeTexture(fe),ue=fe),s.bindTexture(j,Ne||we[j]),_e.type=j,_e.texture=Ne)}function te(){const j=oe[ue];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(j){De.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),De.copy(j))}function Ve(j){J.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function gt(j,Ne){let fe=h.get(Ne);fe===void 0&&(fe=new WeakMap,h.set(Ne,fe));let _e=fe.get(j);_e===void 0&&(_e=s.getUniformBlockIndex(Ne,j.name),fe.set(j,_e))}function lt(j,Ne){const _e=h.get(Ne).get(j);p.get(Ne)!==_e&&(s.uniformBlockBinding(Ne,_e,j.__bindingPointIndex),p.set(Ne,_e))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ue=null,oe={},_={},v=new WeakMap,M=[],S=null,E=!1,y=null,x=null,L=null,P=null,T=null,V=null,N=null,U=new dt(0,0,0),k=0,C=!1,A=null,F=null,Q=null,$=null,ce=null,De.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Me,disable:Le,bindFramebuffer:ke,drawBuffers:et,useProgram:bt,setBlending:q,setMaterial:Pe,setFlipSided:Qe,setCullFace:nt,setLineWidth:tt,setPolygonOffset:wt,setScissorTest:Ze,activeTexture:D,bindTexture:R,unbindTexture:te,compressedTexImage2D:Z,compressedTexImage3D:le,texImage2D:Re,texImage3D:He,updateUBOMapping:gt,uniformBlockBinding:lt,texStorage2D:xe,texStorage3D:ge,texSubImage2D:de,texSubImage3D:Fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:Te,scissor:Je,viewport:Ve,reset:Pt}}function Xm(s,e,t,r){const o=B1(r);switch(t){case g0:return s*e;case _0:return s*e;case x0:return s*e*2;case y0:return s*e/o.components*o.byteLength;case af:return s*e/o.components*o.byteLength;case M0:return s*e*2/o.components*o.byteLength;case of:return s*e*2/o.components*o.byteLength;case v0:return s*e*3/o.components*o.byteLength;case vi:return s*e*4/o.components*o.byteLength;case lf:return s*e*4/o.components*o.byteLength;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:case Ad:return Math.max(s,16)*Math.max(e,8)/4;case Ed:case Td:return Math.max(s,8)*Math.max(e,8)/2;case Rd:case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case Wd:case jd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case S0:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qd:case Yd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B1(s){switch(s){case Zi:case h0:return{byteLength:1,components:1};case Xa:case p0:case qa:return{byteLength:2,components:1};case rf:case sf:return{byteLength:2,components:4};case ns:case nf:case qi:return{byteLength:4,components:1};case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function H1(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _t,m=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,R){return M?new OffscreenCanvas(D,R):Ol("canvas")}function E(D,R,te){let Z=1;const le=Ze(D);if((le.width>te||le.height>te)&&(Z=te/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(Z*le.width),Fe=Math.floor(Z*le.height);_===void 0&&(_=S(de,Fe));const ve=R?S(de,Fe):_;return ve.width=de,ve.height=Fe,ve.getContext("2d").drawImage(D,0,0,de,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+de+"x"+Fe+")."),ve}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,R,te,Z,le=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=R;if(R===s.RED&&(te===s.FLOAT&&(de=s.R32F),te===s.HALF_FLOAT&&(de=s.R16F),te===s.UNSIGNED_BYTE&&(de=s.R8)),R===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.R8UI),te===s.UNSIGNED_SHORT&&(de=s.R16UI),te===s.UNSIGNED_INT&&(de=s.R32UI),te===s.BYTE&&(de=s.R8I),te===s.SHORT&&(de=s.R16I),te===s.INT&&(de=s.R32I)),R===s.RG&&(te===s.FLOAT&&(de=s.RG32F),te===s.HALF_FLOAT&&(de=s.RG16F),te===s.UNSIGNED_BYTE&&(de=s.RG8)),R===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RG8UI),te===s.UNSIGNED_SHORT&&(de=s.RG16UI),te===s.UNSIGNED_INT&&(de=s.RG32UI),te===s.BYTE&&(de=s.RG8I),te===s.SHORT&&(de=s.RG16I),te===s.INT&&(de=s.RG32I)),R===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGB8UI),te===s.UNSIGNED_SHORT&&(de=s.RGB16UI),te===s.UNSIGNED_INT&&(de=s.RGB32UI),te===s.BYTE&&(de=s.RGB8I),te===s.SHORT&&(de=s.RGB16I),te===s.INT&&(de=s.RGB32I)),R===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),te===s.UNSIGNED_INT&&(de=s.RGBA32UI),te===s.BYTE&&(de=s.RGBA8I),te===s.SHORT&&(de=s.RGBA16I),te===s.INT&&(de=s.RGBA32I)),R===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),R===s.RGBA){const Fe=le?Gl:Et.getTransfer(Z);te===s.FLOAT&&(de=s.RGBA32F),te===s.HALF_FLOAT&&(de=s.RGBA16F),te===s.UNSIGNED_BYTE&&(de=Fe===Nt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function T(D,R){let te;return D?R===null||R===ns||R===Ks?te=s.DEPTH24_STENCIL8:R===qi?te=s.DEPTH32F_STENCIL8:R===Xa&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ns||R===Ks?te=s.DEPTH_COMPONENT24:R===qi?te=s.DEPTH_COMPONENT32F:R===Xa&&(te=s.DEPTH_COMPONENT16),te}function V(D,R){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==_i&&D.minFilter!==Ri?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function N(D){const R=D.target;R.removeEventListener("dispose",N),k(R),R.isVideoTexture&&m.delete(R)}function U(D){const R=D.target;R.removeEventListener("dispose",U),A(R)}function k(D){const R=r.get(D);if(R.__webglInit===void 0)return;const te=D.source,Z=v.get(te);if(Z){const le=Z[R.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(D),Object.keys(Z).length===0&&v.delete(te)}r.remove(D)}function C(D){const R=r.get(D);s.deleteTexture(R.__webglTexture);const te=D.source,Z=v.get(te);delete Z[R.__cacheKey],u.memory.textures--}function A(D){const R=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(R.__webglFramebuffer[Z]))for(let le=0;le<R.__webglFramebuffer[Z].length;le++)s.deleteFramebuffer(R.__webglFramebuffer[Z][le]);else s.deleteFramebuffer(R.__webglFramebuffer[Z]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[Z])}else{if(Array.isArray(R.__webglFramebuffer))for(let Z=0;Z<R.__webglFramebuffer.length;Z++)s.deleteFramebuffer(R.__webglFramebuffer[Z]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const te=D.textures;for(let Z=0,le=te.length;Z<le;Z++){const de=r.get(te[Z]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(te[Z])}r.remove(D)}let F=0;function Q(){F=0}function $(){const D=F;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),F+=1,D}function ce(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function he(D,R){const te=r.get(D);if(D.isVideoTexture&&tt(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const Z=D.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,D,R);return}}t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+R)}function ne(D,R){const te=r.get(D);if(D.version>0&&te.__version!==D.version){J(te,D,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+R)}function pe(D,R){const te=r.get(D);if(D.version>0&&te.__version!==D.version){J(te,D,R);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+R)}function z(D,R){const te=r.get(D);if(D.version>0&&te.__version!==D.version){me(te,D,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+R)}const ue={[Md]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[Sd]:s.MIRRORED_REPEAT},oe={[_i]:s.NEAREST,[C_]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[Ri]:s.LINEAR,[Lu]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},O={[D_]:s.NEVER,[k_]:s.ALWAYS,[N_]:s.LESS,[w0]:s.LEQUAL,[I_]:s.EQUAL,[O_]:s.GEQUAL,[U_]:s.GREATER,[F_]:s.NOTEQUAL};function se(D,R){if(R.type===qi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ri||R.magFilter===Lu||R.magFilter===sl||R.magFilter===ts||R.minFilter===Ri||R.minFilter===Lu||R.minFilter===sl||R.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ue[R.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ue[R.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ue[R.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,oe[R.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,oe[R.minFilter]),R.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_i||R.minFilter!==sl&&R.minFilter!==ts||R.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function De(D,R){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",N));const Z=R.source;let le=v.get(Z);le===void 0&&(le={},v.set(Z,le));const de=ce(R);if(de!==D.__cacheKey){le[de]===void 0&&(le[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),le[de].usedTimes++;const Fe=le[D.__cacheKey];Fe!==void 0&&(le[D.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(R)),D.__cacheKey=de,D.__webglTexture=le[de].texture}return te}function J(D,R,te){let Z=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=s.TEXTURE_3D);const le=De(D,R),de=R.source;t.bindTexture(Z,D.__webglTexture,s.TEXTURE0+te);const Fe=r.get(de);if(de.version!==Fe.__version||le===!0){t.activeTexture(s.TEXTURE0+te);const ve=Et.getPrimaries(Et.workingColorSpace),Te=R.colorSpace===Tr?null:Et.getPrimaries(R.colorSpace),xe=R.colorSpace===Tr||ve===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ge=E(R.image,!1,o.maxTextureSize);ge=wt(R,ge);const Re=l.convert(R.format,R.colorSpace),He=l.convert(R.type);let Je=P(R.internalFormat,Re,He,R.colorSpace,R.isVideoTexture);se(Z,R);let Ve;const gt=R.mipmaps,lt=R.isVideoTexture!==!0,Pt=Fe.__version===void 0||le===!0,j=de.dataReady,Ne=V(R,ge);if(R.isDepthTexture)Je=T(R.format===Qs,R.type),Pt&&(lt?t.texStorage2D(s.TEXTURE_2D,1,Je,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Je,ge.width,ge.height,0,Re,He,null));else if(R.isDataTexture)if(gt.length>0){lt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ne,Je,gt[0].width,gt[0].height);for(let fe=0,_e=gt.length;fe<_e;fe++)Ve=gt[fe],lt?j&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,Re,He,Ve.data):t.texImage2D(s.TEXTURE_2D,fe,Je,Ve.width,Ve.height,0,Re,He,Ve.data);R.generateMipmaps=!1}else lt?(Pt&&t.texStorage2D(s.TEXTURE_2D,Ne,Je,ge.width,ge.height),j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,Re,He,ge.data)):t.texImage2D(s.TEXTURE_2D,0,Je,ge.width,ge.height,0,Re,He,ge.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){lt&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Je,gt[0].width,gt[0].height,ge.depth);for(let fe=0,_e=gt.length;fe<_e;fe++)if(Ve=gt[fe],R.format!==vi)if(Re!==null)if(lt){if(j)if(R.layerUpdates.size>0){const Oe=Xm(Ve.width,Ve.height,R.format,R.type);for(const Ue of R.layerUpdates){const ct=Ve.data.subarray(Ue*Oe/Ve.data.BYTES_PER_ELEMENT,(Ue+1)*Oe/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ue,Ve.width,Ve.height,1,Re,ct)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,ge.depth,Re,Ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Je,Ve.width,Ve.height,ge.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,ge.depth,Re,He,Ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,Je,Ve.width,Ve.height,ge.depth,0,Re,He,Ve.data)}else{lt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ne,Je,gt[0].width,gt[0].height);for(let fe=0,_e=gt.length;fe<_e;fe++)Ve=gt[fe],R.format!==vi?Re!==null?lt?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,Re,Ve.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,Je,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?j&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,Re,He,Ve.data):t.texImage2D(s.TEXTURE_2D,fe,Je,Ve.width,Ve.height,0,Re,He,Ve.data)}else if(R.isDataArrayTexture)if(lt){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Je,ge.width,ge.height,ge.depth),j)if(R.layerUpdates.size>0){const fe=Xm(ge.width,ge.height,R.format,R.type);for(const _e of R.layerUpdates){const Oe=ge.data.subarray(_e*fe/ge.data.BYTES_PER_ELEMENT,(_e+1)*fe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,ge.width,ge.height,1,Re,He,Oe)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,He,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ge.width,ge.height,ge.depth,0,Re,He,ge.data);else if(R.isData3DTexture)lt?(Pt&&t.texStorage3D(s.TEXTURE_3D,Ne,Je,ge.width,ge.height,ge.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,He,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Je,ge.width,ge.height,ge.depth,0,Re,He,ge.data);else if(R.isFramebufferTexture){if(Pt)if(lt)t.texStorage2D(s.TEXTURE_2D,Ne,Je,ge.width,ge.height);else{let fe=ge.width,_e=ge.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Je,fe,_e,0,Re,He,null),fe>>=1,_e>>=1}}else if(gt.length>0){if(lt&&Pt){const fe=Ze(gt[0]);t.texStorage2D(s.TEXTURE_2D,Ne,Je,fe.width,fe.height)}for(let fe=0,_e=gt.length;fe<_e;fe++)Ve=gt[fe],lt?j&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Re,He,Ve):t.texImage2D(s.TEXTURE_2D,fe,Je,Re,He,Ve);R.generateMipmaps=!1}else if(lt){if(Pt){const fe=Ze(ge);t.texStorage2D(s.TEXTURE_2D,Ne,Je,fe.width,fe.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,He,ge)}else t.texImage2D(s.TEXTURE_2D,0,Je,Re,He,ge);y(R)&&x(Z),Fe.__version=de.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function me(D,R,te){if(R.image.length!==6)return;const Z=De(D,R),le=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+te);const de=r.get(le);if(le.version!==de.__version||Z===!0){t.activeTexture(s.TEXTURE0+te);const Fe=Et.getPrimaries(Et.workingColorSpace),ve=R.colorSpace===Tr?null:Et.getPrimaries(R.colorSpace),Te=R.colorSpace===Tr||Fe===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const xe=R.isCompressedTexture||R.image[0].isCompressedTexture,ge=R.image[0]&&R.image[0].isDataTexture,Re=[];for(let _e=0;_e<6;_e++)!xe&&!ge?Re[_e]=E(R.image[_e],!0,o.maxCubemapSize):Re[_e]=ge?R.image[_e].image:R.image[_e],Re[_e]=wt(R,Re[_e]);const He=Re[0],Je=l.convert(R.format,R.colorSpace),Ve=l.convert(R.type),gt=P(R.internalFormat,Je,Ve,R.colorSpace),lt=R.isVideoTexture!==!0,Pt=de.__version===void 0||Z===!0,j=le.dataReady;let Ne=V(R,He);se(s.TEXTURE_CUBE_MAP,R);let fe;if(xe){lt&&Pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,gt,He.width,He.height);for(let _e=0;_e<6;_e++){fe=Re[_e].mipmaps;for(let Oe=0;Oe<fe.length;Oe++){const Ue=fe[Oe];R.format!==vi?Je!==null?lt?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ue.width,Ue.height,Je,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,gt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ue.width,Ue.height,Je,Ve,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,gt,Ue.width,Ue.height,0,Je,Ve,Ue.data)}}}else{if(fe=R.mipmaps,lt&&Pt){fe.length>0&&Ne++;const _e=Ze(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,gt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ge){lt?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re[_e].width,Re[_e].height,Je,Ve,Re[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,Re[_e].width,Re[_e].height,0,Je,Ve,Re[_e].data);for(let Oe=0;Oe<fe.length;Oe++){const ct=fe[Oe].image[_e].image;lt?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,ct.width,ct.height,Je,Ve,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,gt,ct.width,ct.height,0,Je,Ve,ct.data)}}else{lt?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Je,Ve,Re[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,Je,Ve,Re[_e]);for(let Oe=0;Oe<fe.length;Oe++){const Ue=fe[Oe];lt?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,Je,Ve,Ue.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,gt,Je,Ve,Ue.image[_e])}}}y(R)&&x(s.TEXTURE_CUBE_MAP),de.__version=le.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function we(D,R,te,Z,le,de){const Fe=l.convert(te.format,te.colorSpace),ve=l.convert(te.type),Te=P(te.internalFormat,Fe,ve,te.colorSpace),xe=r.get(R),ge=r.get(te);if(ge.__renderTarget=R,!xe.__hasExternalTextures){const Re=Math.max(1,R.width>>de),He=Math.max(1,R.height>>de);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?t.texImage3D(le,de,Te,Re,He,R.depth,0,Fe,ve,null):t.texImage2D(le,de,Te,Re,He,0,Fe,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),nt(R)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,le,ge.__webglTexture,0,Qe(R)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,le,ge.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(D,R,te){if(s.bindRenderbuffer(s.RENDERBUFFER,D),R.depthBuffer){const Z=R.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,de=T(R.stencilBuffer,le),Fe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=Qe(R);nt(R)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,de,R.width,R.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,de,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,D)}else{const Z=R.textures;for(let le=0;le<Z.length;le++){const de=Z[le],Fe=l.convert(de.format,de.colorSpace),ve=l.convert(de.type),Te=P(de.internalFormat,Fe,ve,de.colorSpace),xe=Qe(R);te&&nt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Te,R.width,R.height):nt(R)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,Te,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Te,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=r.get(R.depthTexture);Z.__renderTarget=R,(!Z.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),he(R.depthTexture,0);const le=Z.__webglTexture,de=Qe(R);if(R.depthTexture.format===Xs)nt(R)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(R.depthTexture.format===Qs)nt(R)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ke(D){const R=r.get(D),te=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Z){const le=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),R.__depthDisposeCallback=le}R.__boundDepthTexture=Z}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Le(R.__webglFramebuffer,D)}else if(te){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]===void 0)R.__webglDepthbuffer[Z]=s.createRenderbuffer(),Me(R.__webglDepthbuffer[Z],D,!1);else{const le=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Me(R.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(D,R,te){const Z=r.get(D);R!==void 0&&we(Z.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&ke(D)}function bt(D){const R=D.texture,te=r.get(D),Z=r.get(R);D.addEventListener("dispose",U);const le=D.textures,de=D.isWebGLCubeRenderTarget===!0,Fe=le.length>1;if(Fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=R.version,u.memory.textures++),de){te.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer[ve]=[];for(let Te=0;Te<R.mipmaps.length;Te++)te.__webglFramebuffer[ve][Te]=s.createFramebuffer()}else te.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer=[];for(let ve=0;ve<R.mipmaps.length;ve++)te.__webglFramebuffer[ve]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let ve=0,Te=le.length;ve<Te;ve++){const xe=r.get(le[ve]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&nt(D)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Te=le[ve];te.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const xe=l.convert(Te.format,Te.colorSpace),ge=l.convert(Te.type),Re=P(Te.internalFormat,xe,ge,Te.colorSpace,D.isXRRenderTarget===!0),He=Qe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Re,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,te.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(te.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),se(s.TEXTURE_CUBE_MAP,R);for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0)for(let Te=0;Te<R.mipmaps.length;Te++)we(te.__webglFramebuffer[ve][Te],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else we(te.__webglFramebuffer[ve],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);y(R)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ve=0,Te=le.length;ve<Te;ve++){const xe=le[ve],ge=r.get(xe);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),se(s.TEXTURE_2D,xe),we(te.__webglFramebuffer,D,xe,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),y(xe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ve=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Z.__webglTexture),se(ve,R),R.mipmaps&&R.mipmaps.length>0)for(let Te=0;Te<R.mipmaps.length;Te++)we(te.__webglFramebuffer[Te],D,R,s.COLOR_ATTACHMENT0,ve,Te);else we(te.__webglFramebuffer,D,R,s.COLOR_ATTACHMENT0,ve,0);y(R)&&x(ve),t.unbindTexture()}D.depthBuffer&&ke(D)}function ht(D){const R=D.textures;for(let te=0,Z=R.length;te<Z;te++){const le=R[te];if(y(le)){const de=L(D),Fe=r.get(le).__webglTexture;t.bindTexture(de,Fe),x(de),t.unbindTexture()}}}const Dt=[],q=[];function Pe(D){if(D.samples>0){if(nt(D)===!1){const R=D.textures,te=D.width,Z=D.height;let le=s.COLOR_BUFFER_BIT;const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(D),ve=R.length>1;if(ve)for(let Te=0;Te<R.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Te=0;Te<R.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Te]);const xe=r.get(R[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,te,Z,0,0,te,Z,le,s.NEAREST),p===!0&&(Dt.length=0,q.length=0,Dt.push(s.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Dt.push(de),q.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<R.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Te]);const xe=r.get(R[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const R=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function Qe(D){return Math.min(o.maxSamples,D.samples)}function nt(D){const R=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function tt(D){const R=u.render.frame;m.get(D)!==R&&(m.set(D,R),D.update())}function wt(D,R){const te=D.colorSpace,Z=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==ea&&te!==Tr&&(Et.getTransfer(te)===Nt?(Z!==vi||le!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),R}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=he,this.setTexture2DArray=ne,this.setTexture3D=pe,this.setTextureCube=z,this.rebindTextures=et,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=nt}function V1(s,e){function t(r,o=Tr){let l;const u=Et.getTransfer(o);if(r===Zi)return s.UNSIGNED_BYTE;if(r===rf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===m0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===h0)return s.BYTE;if(r===p0)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===nf)return s.INT;if(r===ns)return s.UNSIGNED_INT;if(r===qi)return s.FLOAT;if(r===qa)return s.HALF_FLOAT;if(r===g0)return s.ALPHA;if(r===v0)return s.RGB;if(r===vi)return s.RGBA;if(r===_0)return s.LUMINANCE;if(r===x0)return s.LUMINANCE_ALPHA;if(r===Xs)return s.DEPTH_COMPONENT;if(r===Qs)return s.DEPTH_STENCIL;if(r===y0)return s.RED;if(r===af)return s.RED_INTEGER;if(r===M0)return s.RG;if(r===of)return s.RG_INTEGER;if(r===lf)return s.RGBA_INTEGER;if(r===Pl||r===Ll||r===Dl||r===Nl)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ed||r===wd||r===Td||r===Ad)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ed)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Td)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ad)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd||r===Cd||r===bd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Rd||r===Cd)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===bd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pd||r===Ld||r===Dd||r===Nd||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===zd||r===Bd||r===Hd||r===Vd||r===Gd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Pd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Id)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ud)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===Wd||r===jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Il)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===S0||r===Xd||r===qd||r===Yd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Il)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Xd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class G1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W1={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,r),x=this._getHandJoint(h,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),M=.02,S=.005;h.inputState.pinching&&v>M+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=M-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ri;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const j1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Rn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new br({vertexShader:j1,fragmentShader:X1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y1 extends ta{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,h=null,m=null,_=null,v=null,M=null,S=null;const E=new q1,y=t.getContextAttributes();let x=null,L=null;const P=[],T=[],V=new _t;let N=null;const U=new qn;U.viewport=new It;const k=new qn;k.viewport=new It;const C=[U,k],A=new G1;let F=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=P[J];return me===void 0&&(me=new ad,P[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=P[J];return me===void 0&&(me=new ad,P[J]=me),me.getGripSpace()},this.getHand=function(J){let me=P[J];return me===void 0&&(me=new ad,P[J]=me),me.getHandSpace()};function $(J){const me=T.indexOf(J.inputSource);if(me===-1)return;const we=P[me];we!==void 0&&(we.update(J.inputSource,J.frame,h||u),we.dispatchEvent({type:J.type,data:J.inputSource}))}function ce(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",he);for(let J=0;J<P.length;J++){const me=T[J];me!==null&&(T[J]=null,P[J].disconnect(me))}F=null,Q=null,E.reset(),e.setRenderTarget(x),M=null,v=null,_=null,o=null,L=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0){const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new is(M.framebufferWidth,M.framebufferHeight,{format:vi,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let me=null,we=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?Qs:Xs,we=y.stencil?Ks:ns);const Le={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:l};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Le),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new is(v.textureWidth,v.textureHeight,{format:vi,type:Zi,depthTexture:new F0(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(J){for(let me=0;me<J.removed.length;me++){const we=J.removed[me],Me=T.indexOf(we);Me>=0&&(T[Me]=null,P[Me].disconnect(we))}for(let me=0;me<J.added.length;me++){const we=J.added[me];let Me=T.indexOf(we);if(Me===-1){for(let ke=0;ke<P.length;ke++)if(ke>=T.length){T.push(we),Me=ke;break}else if(T[ke]===null){T[ke]=we,Me=ke;break}if(Me===-1)break}const Le=P[Me];Le&&Le.connect(we)}}const ne=new W,pe=new W;function z(J,me,we){ne.setFromMatrixPosition(me.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);const Me=ne.distanceTo(pe),Le=me.projectionMatrix.elements,ke=we.projectionMatrix.elements,et=Le[14]/(Le[10]-1),bt=Le[14]/(Le[10]+1),ht=(Le[9]+1)/Le[5],Dt=(Le[9]-1)/Le[5],q=(Le[8]-1)/Le[0],Pe=(ke[8]+1)/ke[0],Qe=et*q,nt=et*Pe,tt=Me/(-q+Pe),wt=tt*-q;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(wt),J.translateZ(tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ze=et+tt,D=bt+tt,R=Qe-wt,te=nt+(Me-wt),Z=ht*bt/D*Ze,le=Dt*bt/D*Ze;J.projectionMatrix.makePerspective(R,te,Z,le,Ze,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let me=J.near,we=J.far;E.texture!==null&&(E.depthNear>0&&(me=E.depthNear),E.depthFar>0&&(we=E.depthFar)),A.near=k.near=U.near=me,A.far=k.far=U.far=we,(F!==A.near||Q!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,Q=A.far),U.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,A.layers.mask=U.layers.mask|k.layers.mask;const Me=J.parent,Le=A.cameras;ue(A,Me);for(let ke=0;ke<Le.length;ke++)ue(Le[ke],Me);Le.length===2?z(A,U,k):A.projectionMatrix.copy(U.projectionMatrix),oe(J,A,Me)};function oe(J,me,we){we===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$d*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let O=null;function se(J,me){if(m=me.getViewerPose(h||u),S=me,m!==null){const we=m.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Me=!1;we.length!==A.cameras.length&&(A.cameras.length=0,Me=!0);for(let ke=0;ke<we.length;ke++){const et=we[ke];let bt=null;if(M!==null)bt=M.getViewport(et);else{const Dt=_.getViewSubImage(v,et);bt=Dt.viewport,ke===0&&(e.setRenderTargetTextures(L,Dt.colorTexture,v.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(L))}let ht=C[ke];ht===void 0&&(ht=new qn,ht.layers.enable(ke),ht.viewport=new It,C[ke]=ht),ht.matrix.fromArray(et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(bt.x,bt.y,bt.width,bt.height),ke===0&&(A.matrix.copy(ht.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Me===!0&&A.cameras.push(ht)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ke=_.getDepthInformation(we[0]);ke&&ke.isValid&&ke.texture&&E.init(e,ke,o.renderState)}}for(let we=0;we<P.length;we++){const Me=T[we],Le=P[we];Me!==null&&Le!==void 0&&Le.update(Me,me,h||u)}O&&O(J,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),S=null}const De=new I0;De.setAnimationLoop(se),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const $r=new Ci,$1=new kt;function Z1(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,L0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,L,P,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&M(y,x,T)):x.isMeshMatcapMaterial?(l(y,x),S(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),E(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?p(y,x,L,P):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===zn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===zn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),P=L.envMap,T=L.envMapRotation;P&&(y.envMap.value=P,$r.copy(T),$r.x*=-1,$r.y*=-1,$r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4($1.makeRotationFromEuler($r)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===zn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function K1(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,P){const T=P.program;r.uniformBlockBinding(L,T)}function h(L,P){let T=o[L.id];T===void 0&&(S(L),T=m(L),o[L.id]=T,L.addEventListener("dispose",y));const V=P.program;r.updateUBOMapping(L,V);const N=e.render.frame;l[L.id]!==N&&(v(L),l[L.id]=N)}function m(L){const P=_();L.__bindingPointIndex=P;const T=s.createBuffer(),V=L.__size,N=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,V,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,T),T}function _(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const P=o[L.id],T=L.uniforms,V=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let N=0,U=T.length;N<U;N++){const k=Array.isArray(T[N])?T[N]:[T[N]];for(let C=0,A=k.length;C<A;C++){const F=k[C];if(M(F,N,C,V)===!0){const Q=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ce=0;for(let he=0;he<$.length;he++){const ne=$[he],pe=E(ne);typeof ne=="number"||typeof ne=="boolean"?(F.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,Q+ce,F.__data)):ne.isMatrix3?(F.__data[0]=ne.elements[0],F.__data[1]=ne.elements[1],F.__data[2]=ne.elements[2],F.__data[3]=0,F.__data[4]=ne.elements[3],F.__data[5]=ne.elements[4],F.__data[6]=ne.elements[5],F.__data[7]=0,F.__data[8]=ne.elements[6],F.__data[9]=ne.elements[7],F.__data[10]=ne.elements[8],F.__data[11]=0):(ne.toArray(F.__data,ce),ce+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,P,T,V){const N=L.value,U=P+"_"+T;if(V[U]===void 0)return typeof N=="number"||typeof N=="boolean"?V[U]=N:V[U]=N.clone(),!0;{const k=V[U];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return V[U]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function S(L){const P=L.uniforms;let T=0;const V=16;for(let U=0,k=P.length;U<k;U++){const C=Array.isArray(P[U])?P[U]:[P[U]];for(let A=0,F=C.length;A<F;A++){const Q=C[A],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let ce=0,he=$.length;ce<he;ce++){const ne=$[ce],pe=E(ne),z=T%V,ue=z%pe.boundary,oe=z+ue;T+=ue,oe!==0&&V-oe<pe.storage&&(T+=V-oe),Q.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=pe.storage}}}const N=T%V;return N>0&&(T+=V-N),L.__size=T,L.__cache={},this}function E(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const T=u.indexOf(P.__bindingPointIndex);u.splice(T,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:p,update:h,dispose:x}}class Q1{constructor(e={}){const{canvas:t=B_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const S=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=Rr,this.toneMappingExposure=1;const T=this;let V=!1,N=0,U=0,k=null,C=-1,A=null;const F=new It,Q=new It;let $=null;const ce=new dt(0);let he=0,ne=t.width,pe=t.height,z=1,ue=null,oe=null;const O=new It(0,0,ne,pe),se=new It(0,0,ne,pe);let De=!1;const J=new uf;let me=!1,we=!1;const Me=new kt,Le=new kt,ke=new W,et=new It,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Dt(){return k===null?z:1}let q=r;function Pe(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tf}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),q===null){const X="webgl2";if(q=Pe(X,b),q===null)throw Pe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Qe,nt,tt,wt,Ze,D,R,te,Z,le,de,Fe,ve,Te,xe,ge,Re,He,Je,Ve,gt,lt,Pt,j;function Ne(){Qe=new iS(q),Qe.init(),lt=new V1(q,Qe),nt=new KM(q,Qe,e,lt),tt=new z1(q,Qe),nt.reverseDepthBuffer&&v&&tt.buffers.depth.setReversed(!0),wt=new aS(q),Ze=new w1,D=new H1(q,Qe,tt,Ze,nt,lt,wt),R=new JM(T),te=new nS(T),Z=new hx(q),Pt=new $M(q,Z),le=new rS(q,Z,wt,Pt),de=new lS(q,le,Z,wt),Je=new oS(q,nt,D),ge=new QM(Ze),Fe=new E1(T,R,te,Qe,nt,Pt,ge),ve=new Z1(T,Ze),Te=new A1,xe=new D1(Qe),He=new YM(T,R,te,tt,de,M,p),Re=new O1(T,de,nt),j=new K1(q,wt,nt,tt),Ve=new ZM(q,Qe,wt),gt=new sS(q,Qe,wt),wt.programs=Fe.programs,T.capabilities=nt,T.extensions=Qe,T.properties=Ze,T.renderLists=Te,T.shadowMap=Re,T.state=tt,T.info=wt}Ne();const fe=new Y1(T,q);this.xr=fe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=Qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(ne,pe,!1))},this.getSize=function(b){return b.set(ne,pe)},this.setSize=function(b,X,re=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,pe=X,t.width=Math.floor(b*z),t.height=Math.floor(X*z),re===!0&&(t.style.width=b+"px",t.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ne*z,pe*z).floor()},this.setDrawingBufferSize=function(b,X,re){ne=b,pe=X,z=re,t.width=Math.floor(b*re),t.height=Math.floor(X*re),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,X,re,ae){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,X,re,ae),tt.viewport(F.copy(O).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,X,re,ae){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,X,re,ae),tt.scissor(Q.copy(se).multiplyScalar(z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){tt.setScissorTest(De=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(b=!0,X=!0,re=!0){let ae=0;if(b){let Y=!1;if(k!==null){const be=k.texture.format;Y=be===lf||be===of||be===af}if(Y){const be=k.texture.type,Ae=be===Zi||be===ns||be===Xa||be===Ks||be===rf||be===sf,qe=He.getClearColor(),We=He.getClearAlpha(),st=qe.r,ot=qe.g,Ye=qe.b;Ae?(S[0]=st,S[1]=ot,S[2]=Ye,S[3]=We,q.clearBufferuiv(q.COLOR,0,S)):(E[0]=st,E[1]=ot,E[2]=Ye,E[3]=We,q.clearBufferiv(q.COLOR,0,E))}else ae|=q.COLOR_BUFFER_BIT}X&&(ae|=q.DEPTH_BUFFER_BIT),re&&(ae|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Te.dispose(),xe.dispose(),Ze.dispose(),R.dispose(),te.dispose(),de.dispose(),Pt.dispose(),j.dispose(),Fe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ss),fe.removeEventListener("sessionend",Ki),bi.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=wt.autoReset,X=Re.enabled,re=Re.autoUpdate,ae=Re.needsUpdate,Y=Re.type;Ne(),wt.autoReset=b,Re.enabled=X,Re.autoUpdate=re,Re.needsUpdate=ae,Re.type=Y}function Ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const X=b.target;X.removeEventListener("dispose",ct),zt(X)}function zt(b){Zt(b),Ze.remove(b)}function Zt(b){const X=Ze.get(b).programs;X!==void 0&&(X.forEach(function(re){Fe.releaseProgram(re)}),b.isShaderMaterial&&Fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,re,ae,Y,be){X===null&&(X=bt);const Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,qe=eo(b,X,re,ae,Y);tt.setMaterial(ae,Ae);let We=re.index,st=1;if(ae.wireframe===!0){if(We=le.getWireframeAttribute(re),We===void 0)return;st=2}const ot=re.drawRange,Ye=re.attributes.position;let yt=ot.start*st,Rt=(ot.start+ot.count)*st;be!==null&&(yt=Math.max(yt,be.start*st),Rt=Math.min(Rt,(be.start+be.count)*st)),We!==null?(yt=Math.max(yt,0),Rt=Math.min(Rt,We.count)):Ye!=null&&(yt=Math.max(yt,0),Rt=Math.min(Rt,Ye.count));const xt=Rt-yt;if(xt<0||xt===1/0)return;Pt.setup(Y,ae,qe,re,We);let dn,ut=Ve;if(We!==null&&(dn=Z.get(We),ut=gt,ut.setIndex(dn)),Y.isMesh)ae.wireframe===!0?(tt.setLineWidth(ae.wireframeLinewidth*Dt()),ut.setMode(q.LINES)):ut.setMode(q.TRIANGLES);else if(Y.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),tt.setLineWidth(Ke*Dt()),Y.isLineSegments?ut.setMode(q.LINES):Y.isLineLoop?ut.setMode(q.LINE_LOOP):ut.setMode(q.LINE_STRIP)}else Y.isPoints?ut.setMode(q.POINTS):Y.isSprite&&ut.setMode(q.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ut.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ke=Y._multiDrawStarts,si=Y._multiDrawCounts,Tt=Y._multiDrawCount,fn=We?Z.get(We).bytesPerElement:1,ai=Ze.get(ae).currentProgram.getUniforms();for(let Kt=0;Kt<Tt;Kt++)ai.setValue(q,"_gl_DrawID",Kt),ut.render(Ke[Kt]/fn,si[Kt])}else if(Y.isInstancedMesh)ut.renderInstances(yt,xt,Y.count);else if(re.isInstancedBufferGeometry){const Ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,si=Math.min(re.instanceCount,Ke);ut.renderInstances(yt,xt,si)}else ut.render(yt,xt)};function Mt(b,X,re){b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,as(b,X,re),b.side=Cr,b.needsUpdate=!0,as(b,X,re),b.side=yn):as(b,X,re)}this.compile=function(b,X,re=null){re===null&&(re=b),x=xe.get(re),x.init(X),P.push(x),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),b!==re&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const ae=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const be=Y.material;if(be)if(Array.isArray(be))for(let Ae=0;Ae<be.length;Ae++){const qe=be[Ae];Mt(qe,re,Y),ae.add(qe)}else Mt(be,re,Y),ae.add(be)}),P.pop(),x=null,ae},this.compileAsync=function(b,X,re=null){const ae=this.compile(b,X,re);return new Promise(Y=>{function be(){if(ae.forEach(function(Ae){Ze.get(Ae).currentProgram.isReady()&&ae.delete(Ae)}),ae.size===0){Y(b);return}setTimeout(be,10)}Qe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Cn=null;function Sn(b){Cn&&Cn(b)}function ss(){bi.stop()}function Ki(){bi.start()}const bi=new I0;bi.setAnimationLoop(Sn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){Cn=b,fe.setAnimationLoop(b),b===null?bi.stop():bi.start()},fe.addEventListener("sessionstart",ss),fe.addEventListener("sessionend",Ki),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,X,k),x=xe.get(b,P.length),x.init(X),P.push(x),Le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Le),we=this.localClippingEnabled,me=ge.init(this.clippingPlanes,we),y=Te.get(b,L.length),y.init(),L.push(y),fe.enabled===!0&&fe.isPresenting===!0){const be=T.xr.getDepthSensingMesh();be!==null&&Pi(be,X,-1/0,T.sortObjects)}Pi(b,X,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ue,oe),ht=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ht&&He.addToRenderList(y,b),this.info.render.frame++,me===!0&&ge.beginShadows();const re=x.state.shadowsArray;Re.render(re,b,X),me===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,Y=y.transmissive;if(x.setupLights(),X.isArrayCamera){const be=X.cameras;if(Y.length>0)for(let Ae=0,qe=be.length;Ae<qe;Ae++){const We=be[Ae];Lr(ae,Y,b,We)}ht&&He.render(b);for(let Ae=0,qe=be.length;Ae<qe;Ae++){const We=be[Ae];Pr(y,b,We,We.viewport)}}else Y.length>0&&Lr(ae,Y,b,X),ht&&He.render(b),Pr(y,b,X);k!==null&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(T,b,X),Pt.resetDefaultState(),C=-1,A=null,P.pop(),P.length>0?(x=P[P.length-1],me===!0&&ge.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Pi(b,X,re,ae){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)re=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){ae&&et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Le);const Ae=de.update(b),qe=b.material;qe.visible&&y.push(b,Ae,qe,re,et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const Ae=de.update(b),qe=b.material;if(ae&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),et.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),et.copy(Ae.boundingSphere.center)),et.applyMatrix4(b.matrixWorld).applyMatrix4(Le)),Array.isArray(qe)){const We=Ae.groups;for(let st=0,ot=We.length;st<ot;st++){const Ye=We[st],yt=qe[Ye.materialIndex];yt&&yt.visible&&y.push(b,Ae,yt,re,et.z,Ye)}}else qe.visible&&y.push(b,Ae,qe,re,et.z,null)}}const be=b.children;for(let Ae=0,qe=be.length;Ae<qe;Ae++)Pi(be[Ae],X,re,ae)}function Pr(b,X,re,ae){const Y=b.opaque,be=b.transmissive,Ae=b.transparent;x.setupLightsView(re),me===!0&&ge.setGlobalState(T.clippingPlanes,re),ae&&tt.viewport(F.copy(ae)),Y.length>0&&Qi(Y,X,re),be.length>0&&Qi(be,X,re),Ae.length>0&&Qi(Ae,X,re),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Lr(b,X,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new is(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?qa:Zi,minFilter:ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const be=x.state.transmissionRenderTarget[ae.id],Ae=ae.viewport||F;be.setSize(Ae.z,Ae.w);const qe=T.getRenderTarget();T.setRenderTarget(be),T.getClearColor(ce),he=T.getClearAlpha(),he<1&&T.setClearColor(16777215,.5),T.clear(),ht&&He.render(re);const We=T.toneMapping;T.toneMapping=Rr;const st=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),me===!0&&ge.setGlobalState(T.clippingPlanes,ae),Qi(b,re,ae),D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ye=0,yt=X.length;Ye<yt;Ye++){const Rt=X[Ye],xt=Rt.object,dn=Rt.geometry,ut=Rt.material,Ke=Rt.group;if(ut.side===yn&&xt.layers.test(ae.layers)){const si=ut.side;ut.side=zn,ut.needsUpdate=!0,Qa(xt,re,ae,dn,ut,Ke),ut.side=si,ut.needsUpdate=!0,ot=!0}}ot===!0&&(D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be))}T.setRenderTarget(qe),T.setClearColor(ce,he),st!==void 0&&(ae.viewport=st),T.toneMapping=We}function Qi(b,X,re){const ae=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,be=b.length;Y<be;Y++){const Ae=b[Y],qe=Ae.object,We=Ae.geometry,st=ae===null?Ae.material:ae,ot=Ae.group;qe.layers.test(re.layers)&&Qa(qe,X,re,We,st,ot)}}function Qa(b,X,re,ae,Y,be){b.onBeforeRender(T,X,re,ae,Y,be),b.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(T,X,re,ae,b,be),Y.transparent===!0&&Y.side===yn&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,T.renderBufferDirect(re,X,ae,Y,b,be),Y.side=Cr,Y.needsUpdate=!0,T.renderBufferDirect(re,X,ae,Y,b,be),Y.side=yn):T.renderBufferDirect(re,X,ae,Y,b,be),b.onAfterRender(T,X,re,ae,Y,be)}function as(b,X,re){X.isScene!==!0&&(X=bt);const ae=Ze.get(b),Y=x.state.lights,be=x.state.shadowsArray,Ae=Y.state.version,qe=Fe.getParameters(b,Y.state,be,X,re),We=Fe.getProgramCacheKey(qe);let st=ae.programs;ae.environment=b.isMeshStandardMaterial?X.environment:null,ae.fog=X.fog,ae.envMap=(b.isMeshStandardMaterial?te:R).get(b.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,st===void 0&&(b.addEventListener("dispose",ct),st=new Map,ae.programs=st);let ot=st.get(We);if(ot!==void 0){if(ae.currentProgram===ot&&ae.lightsStateVersion===Ae)return xi(b,qe),ot}else qe.uniforms=Fe.getUniforms(b),b.onBeforeCompile(qe,T),ot=Fe.acquireProgram(qe,We),st.set(We,ot),ae.uniforms=qe.uniforms;const Ye=ae.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ye.clippingPlanes=ge.uniform),xi(b,qe),ae.needsLights=Yl(b),ae.lightsStateVersion=Ae,ae.needsLights&&(Ye.ambientLightColor.value=Y.state.ambient,Ye.lightProbe.value=Y.state.probe,Ye.directionalLights.value=Y.state.directional,Ye.directionalLightShadows.value=Y.state.directionalShadow,Ye.spotLights.value=Y.state.spot,Ye.spotLightShadows.value=Y.state.spotShadow,Ye.rectAreaLights.value=Y.state.rectArea,Ye.ltc_1.value=Y.state.rectAreaLTC1,Ye.ltc_2.value=Y.state.rectAreaLTC2,Ye.pointLights.value=Y.state.point,Ye.pointLightShadows.value=Y.state.pointShadow,Ye.hemisphereLights.value=Y.state.hemi,Ye.directionalShadowMap.value=Y.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ye.spotShadowMap.value=Y.state.spotShadowMap,Ye.spotLightMatrix.value=Y.state.spotLightMatrix,Ye.spotLightMap.value=Y.state.spotLightMap,Ye.pointShadowMap.value=Y.state.pointShadowMap,Ye.pointShadowMatrix.value=Y.state.pointShadowMatrix),ae.currentProgram=ot,ae.uniformsList=null,ot}function Ja(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Ul.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function xi(b,X){const re=Ze.get(b);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function eo(b,X,re,ae,Y){X.isScene!==!0&&(X=bt),D.resetTextureUnits();const be=X.fog,Ae=ae.isMeshStandardMaterial?X.environment:null,qe=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ea,We=(ae.isMeshStandardMaterial?te:R).get(ae.envMap||Ae),st=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!re.morphAttributes.position,yt=!!re.morphAttributes.normal,Rt=!!re.morphAttributes.color;let xt=Rr;ae.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(xt=T.toneMapping);const dn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ut=dn!==void 0?dn.length:0,Ke=Ze.get(ae),si=x.state.lights;if(me===!0&&(we===!0||b!==A)){const En=b===A&&ae.id===C;ge.setState(ae,b,En)}let Tt=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==si.state.version||Ke.outputColorSpace!==qe||Y.isBatchedMesh&&Ke.batching===!1||!Y.isBatchedMesh&&Ke.batching===!0||Y.isBatchedMesh&&Ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ke.instancing===!1||!Y.isInstancedMesh&&Ke.instancing===!0||Y.isSkinnedMesh&&Ke.skinning===!1||!Y.isSkinnedMesh&&Ke.skinning===!0||Y.isInstancedMesh&&Ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ke.instancingMorph===!1&&Y.morphTexture!==null||Ke.envMap!==We||ae.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ge.numPlanes||Ke.numIntersection!==ge.numIntersection)||Ke.vertexAlphas!==st||Ke.vertexTangents!==ot||Ke.morphTargets!==Ye||Ke.morphNormals!==yt||Ke.morphColors!==Rt||Ke.toneMapping!==xt||Ke.morphTargetsCount!==ut)&&(Tt=!0):(Tt=!0,Ke.__version=ae.version);let fn=Ke.currentProgram;Tt===!0&&(fn=as(ae,X,Y));let ai=!1,Kt=!1,yi=!1;const Ut=fn.getUniforms(),Yn=Ke.uniforms;if(tt.useProgram(fn.program)&&(ai=!0,Kt=!0,yi=!0),ae.id!==C&&(C=ae.id,Kt=!0),ai||A!==b){tt.buffers.depth.getReversed()?(Me.copy(b.projectionMatrix),V_(Me),G_(Me),Ut.setValue(q,"projectionMatrix",Me)):Ut.setValue(q,"projectionMatrix",b.projectionMatrix),Ut.setValue(q,"viewMatrix",b.matrixWorldInverse);const $n=Ut.map.cameraPosition;$n!==void 0&&$n.setValue(q,ke.setFromMatrixPosition(b.matrixWorld)),nt.logarithmicDepthBuffer&&Ut.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ut.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Kt=!0,yi=!0)}if(Y.isSkinnedMesh){Ut.setOptional(q,Y,"bindMatrix"),Ut.setOptional(q,Y,"bindMatrixInverse");const En=Y.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ut.setValue(q,"boneTexture",En.boneTexture,D))}Y.isBatchedMesh&&(Ut.setOptional(q,Y,"batchingTexture"),Ut.setValue(q,"batchingTexture",Y._matricesTexture,D),Ut.setOptional(q,Y,"batchingIdTexture"),Ut.setValue(q,"batchingIdTexture",Y._indirectTexture,D),Ut.setOptional(q,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ut.setValue(q,"batchingColorTexture",Y._colorsTexture,D));const Li=re.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Je.update(Y,re,fn),(Kt||Ke.receiveShadow!==Y.receiveShadow)&&(Ke.receiveShadow=Y.receiveShadow,Ut.setValue(q,"receiveShadow",Y.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Yn.envMap.value=We,Yn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&X.environment!==null&&(Yn.envMapIntensity.value=X.environmentIntensity),Kt&&(Ut.setValue(q,"toneMappingExposure",T.toneMappingExposure),Ke.needsLights&&to(Yn,yi),be&&ae.fog===!0&&ve.refreshFogUniforms(Yn,be),ve.refreshMaterialUniforms(Yn,ae,z,pe,x.state.transmissionRenderTarget[b.id]),Ul.upload(q,Ja(Ke),Yn,D)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ul.upload(q,Ja(Ke),Yn,D),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ut.setValue(q,"center",Y.center),Ut.setValue(q,"modelViewMatrix",Y.modelViewMatrix),Ut.setValue(q,"normalMatrix",Y.normalMatrix),Ut.setValue(q,"modelMatrix",Y.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const En=ae.uniformsGroups;for(let $n=0,bn=En.length;$n<bn;$n++){const no=En[$n];j.update(no,fn),j.bind(no,fn)}}return fn}function to(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Yl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,X,re){Ze.get(b.texture).__webglTexture=X,Ze.get(b.depthTexture).__webglTexture=re;const ae=Ze.get(b);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=re===void 0,ae.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const re=Ze.get(b);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,re=0){k=b,N=X,U=re;let ae=!0,Y=null,be=!1,Ae=!1;if(b){const We=Ze.get(b);if(We.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(q.FRAMEBUFFER,null),ae=!1;else if(We.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(We.__hasExternalTextures)D.rebindTextures(b,Ze.get(b.texture).__webglTexture,Ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ye=b.depthTexture;if(We.__boundDepthTexture!==Ye){if(Ye!==null&&Ze.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const st=b.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ae=!0);const ot=Ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ot[X])?Y=ot[X][re]:Y=ot[X],be=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?Y=Ze.get(b).__webglMultisampledFramebuffer:Array.isArray(ot)?Y=ot[re]:Y=ot,F.copy(b.viewport),Q.copy(b.scissor),$=b.scissorTest}else F.copy(O).multiplyScalar(z).floor(),Q.copy(se).multiplyScalar(z).floor(),$=De;if(tt.bindFramebuffer(q.FRAMEBUFFER,Y)&&ae&&tt.drawBuffers(b,Y),tt.viewport(F),tt.scissor(Q),tt.setScissorTest($),be){const We=Ze.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,We.__webglTexture,re)}else if(Ae){const We=Ze.get(b.texture),st=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,We.__webglTexture,re||0,st)}C=-1},this.readRenderTargetPixels=function(b,X,re,ae,Y,be,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(qe=qe[Ae]),qe){tt.bindFramebuffer(q.FRAMEBUFFER,qe);try{const We=b.texture,st=We.format,ot=We.type;if(!nt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ae&&re>=0&&re<=b.height-Y&&q.readPixels(X,re,ae,Y,lt.convert(st),lt.convert(ot),be)}finally{const We=k!==null?Ze.get(k).__webglFramebuffer:null;tt.bindFramebuffer(q.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(b,X,re,ae,Y,be,Ae){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(qe=qe[Ae]),qe){const We=b.texture,st=We.format,ot=We.type;if(!nt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-ae&&re>=0&&re<=b.height-Y){tt.bindFramebuffer(q.FRAMEBUFFER,qe);const Ye=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ye),q.bufferData(q.PIXEL_PACK_BUFFER,be.byteLength,q.STREAM_READ),q.readPixels(X,re,ae,Y,lt.convert(st),lt.convert(ot),0);const yt=k!==null?Ze.get(k).__webglFramebuffer:null;tt.bindFramebuffer(q.FRAMEBUFFER,yt);const Rt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await H_(q,Rt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ye),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,be),q.deleteBuffer(Ye),q.deleteSync(Rt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,re=0){b.isTexture!==!0&&(Ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const ae=Math.pow(2,-re),Y=Math.floor(b.image.width*ae),be=Math.floor(b.image.height*ae),Ae=X!==null?X.x:0,qe=X!==null?X.y:0;D.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,Ae,qe,Y,be),tt.unbindTexture()},this.copyTextureToTexture=function(b,X,re=null,ae=null,Y=0){b.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,b=arguments[1],X=arguments[2],Y=arguments[3]||0,re=null);let be,Ae,qe,We,st,ot,Ye,yt,Rt;const xt=b.isCompressedTexture?b.mipmaps[Y]:b.image;re!==null?(be=re.max.x-re.min.x,Ae=re.max.y-re.min.y,qe=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,st=re.min.y,ot=re.isBox3?re.min.z:0):(be=xt.width,Ae=xt.height,qe=xt.depth||1,We=0,st=0,ot=0),ae!==null?(Ye=ae.x,yt=ae.y,Rt=ae.z):(Ye=0,yt=0,Rt=0);const dn=lt.convert(X.format),ut=lt.convert(X.type);let Ke;X.isData3DTexture?(D.setTexture3D(X,0),Ke=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Ke=q.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Ke=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const si=q.getParameter(q.UNPACK_ROW_LENGTH),Tt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),fn=q.getParameter(q.UNPACK_SKIP_PIXELS),ai=q.getParameter(q.UNPACK_SKIP_ROWS),Kt=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,xt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,We),q.pixelStorei(q.UNPACK_SKIP_ROWS,st),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ot);const yi=b.isDataArrayTexture||b.isData3DTexture,Ut=X.isDataArrayTexture||X.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Yn=Ze.get(b),Li=Ze.get(X),En=Ze.get(Yn.__renderTarget),$n=Ze.get(Li.__renderTarget);tt.bindFramebuffer(q.READ_FRAMEBUFFER,En.__webglFramebuffer),tt.bindFramebuffer(q.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let bn=0;bn<qe;bn++)yi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ze.get(b).__webglTexture,Y,ot+bn),b.isDepthTexture?(Ut&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ze.get(X).__webglTexture,Y,Rt+bn),q.blitFramebuffer(We,st,be,Ae,Ye,yt,be,Ae,q.DEPTH_BUFFER_BIT,q.NEAREST)):Ut?q.copyTexSubImage3D(Ke,Y,Ye,yt,Rt+bn,We,st,be,Ae):q.copyTexSubImage2D(Ke,Y,Ye,yt,Rt+bn,We,st,be,Ae);tt.bindFramebuffer(q.READ_FRAMEBUFFER,null),tt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ut?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(Ke,Y,Ye,yt,Rt,be,Ae,qe,dn,ut,xt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Ke,Y,Ye,yt,Rt,be,Ae,qe,dn,xt.data):q.texSubImage3D(Ke,Y,Ye,yt,Rt,be,Ae,qe,dn,ut,xt):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Y,Ye,yt,be,Ae,dn,ut,xt.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Y,Ye,yt,xt.width,xt.height,dn,xt.data):q.texSubImage2D(q.TEXTURE_2D,Y,Ye,yt,be,Ae,dn,ut,xt);q.pixelStorei(q.UNPACK_ROW_LENGTH,si),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,fn),q.pixelStorei(q.UNPACK_SKIP_ROWS,ai),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Kt),Y===0&&X.generateMipmaps&&q.generateMipmap(Ke),tt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,re=null,ae=null,Y=0){return b.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,ae=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0),Ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,re,ae,Y)},this.initRenderTarget=function(b){Ze.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),tt.unbindTexture()},this.resetState=function(){N=0,U=0,k=null,tt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class J1 extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class H0 extends rs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new W,zl=new W,qm=new kt,Ha=new Wl,Al=new Za,od=new W,Ym=new W;class eE extends on{constructor(e=new $t,t=new H0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)kl.fromBufferAttribute(t,o-1),zl.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=kl.distanceTo(zl);e.setAttribute("lineDistance",new Ct(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(o),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;qm.copy(o).invert(),Ha.copy(e.ray).applyMatrix4(qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=this.isLineSegments?2:1,m=r.index,v=r.attributes.position;if(m!==null){const M=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let E=M,y=S-1;E<y;E+=h){const x=m.getX(E),L=m.getX(E+1),P=Rl(this,e,Ha,p,x,L);P&&t.push(P)}if(this.isLineLoop){const E=m.getX(S-1),y=m.getX(M),x=Rl(this,e,Ha,p,E,y);x&&t.push(x)}}else{const M=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let E=M,y=S-1;E<y;E+=h){const x=Rl(this,e,Ha,p,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=Rl(this,e,Ha,p,S-1,M);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Rl(s,e,t,r,o,l){const u=s.geometry.attributes.position;if(kl.fromBufferAttribute(u,o),zl.fromBufferAttribute(u,l),t.distanceSqToSegment(kl,zl,od,Ym)>r)return;od.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(od);if(!(p<e.near||p>e.far))return{distance:p,point:Ym.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const $m=new W,Zm=new W;class tE extends eE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)$m.fromBufferAttribute(t,o),Zm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+$m.distanceTo(Zm);e.setAttribute("lineDistance",new Ct(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kd extends rs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new kt,Qd=new Wl,Cl=new Za,bl=new W;class Qm extends on{constructor(e=new $t,t=new Kd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(o),Cl.radius+=l,e.ray.intersectsSphere(Cl)===!1)return;Km.copy(o).invert(),Qd.copy(e.ray).applyMatrix4(Km);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=r.index,_=r.attributes.position;if(h!==null){const v=Math.max(0,u.start),M=Math.min(h.count,u.start+u.count);for(let S=v,E=M;S<E;S++){const y=h.getX(S);bl.fromBufferAttribute(_,y),Jm(bl,y,p,o,e,t,this)}}else{const v=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let S=v,E=M;S<E;S++)bl.fromBufferAttribute(_,S),Jm(bl,S,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Jm(s,e,t,r,o,l,u){const d=Qd.distanceSqToPoint(s);if(d<t){const p=new W;Qd.closestPointToPoint(s,p),p.applyMatrix4(r);const h=o.ray.origin.distanceTo(p);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class nE extends Rn{constructor(e,t,r,o,l,u,d,p,h){super(e,t,r,o,l,u,d,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ff extends $t{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],d=[],p=[],h=new W,m=new _t;u.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const M=r+_/t*o;h.x=e*Math.cos(M),h.y=e*Math.sin(M),u.push(h.x,h.y,h.z),d.push(0,0,1),m.x=(u[v]/e+1)/2,m.y=(u[v+1]/e+1)/2,p.push(m.x,m.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bl extends $t{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const h=this;o=Math.floor(o),l=Math.floor(l);const m=[],_=[],v=[],M=[];let S=0;const E=[],y=r/2;let x=0;L(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(m),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(M,2));function L(){const T=new W,V=new W;let N=0;const U=(t-e)/r;for(let k=0;k<=l;k++){const C=[],A=k/l,F=A*(t-e)+e;for(let Q=0;Q<=o;Q++){const $=Q/o,ce=$*p+d,he=Math.sin(ce),ne=Math.cos(ce);V.x=F*he,V.y=-A*r+y,V.z=F*ne,_.push(V.x,V.y,V.z),T.set(he,U,ne).normalize(),v.push(T.x,T.y,T.z),M.push($,1-A),C.push(S++)}E.push(C)}for(let k=0;k<o;k++)for(let C=0;C<l;C++){const A=E[C][k],F=E[C+1][k],Q=E[C+1][k+1],$=E[C][k+1];(e>0||C!==0)&&(m.push(A,F,$),N+=3),(t>0||C!==l-1)&&(m.push(F,Q,$),N+=3)}h.addGroup(x,N,0),x+=N}function P(T){const V=S,N=new _t,U=new W;let k=0;const C=T===!0?e:t,A=T===!0?1:-1;for(let Q=1;Q<=o;Q++)_.push(0,y*A,0),v.push(0,A,0),M.push(.5,.5),S++;const F=S;for(let Q=0;Q<=o;Q++){const ce=Q/o*p+d,he=Math.cos(ce),ne=Math.sin(ce);U.x=C*ne,U.y=y*A,U.z=C*he,_.push(U.x,U.y,U.z),v.push(0,A,0),N.x=he*.5+.5,N.y=ne*.5*A+.5,M.push(N.x,N.y),S++}for(let Q=0;Q<o;Q++){const $=V+Q,ce=F+Q;T===!0?m.push(ce,ce+1,$):m.push(ce+1,ce,$),k+=3}h.addGroup(x,k,T===!0?1:2),x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ql extends $t{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];d(o),h(r),m(),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(l.slice(),3)),this.setAttribute("uv",new Ct(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const P=new W,T=new W,V=new W;for(let N=0;N<t.length;N+=3)M(t[N+0],P),M(t[N+1],T),M(t[N+2],V),p(P,T,V,L)}function p(L,P,T,V){const N=V+1,U=[];for(let k=0;k<=N;k++){U[k]=[];const C=L.clone().lerp(T,k/N),A=P.clone().lerp(T,k/N),F=N-k;for(let Q=0;Q<=F;Q++)Q===0&&k===N?U[k][Q]=C:U[k][Q]=C.clone().lerp(A,Q/F)}for(let k=0;k<N;k++)for(let C=0;C<2*(N-k)-1;C++){const A=Math.floor(C/2);C%2===0?(v(U[k][A+1]),v(U[k+1][A]),v(U[k][A])):(v(U[k][A+1]),v(U[k+1][A+1]),v(U[k+1][A]))}}function h(L){const P=new W;for(let T=0;T<l.length;T+=3)P.x=l[T+0],P.y=l[T+1],P.z=l[T+2],P.normalize().multiplyScalar(L),l[T+0]=P.x,l[T+1]=P.y,l[T+2]=P.z}function m(){const L=new W;for(let P=0;P<l.length;P+=3){L.x=l[P+0],L.y=l[P+1],L.z=l[P+2];const T=y(L)/2/Math.PI+.5,V=x(L)/Math.PI+.5;u.push(T,1-V)}S(),_()}function _(){for(let L=0;L<u.length;L+=6){const P=u[L+0],T=u[L+2],V=u[L+4],N=Math.max(P,T,V),U=Math.min(P,T,V);N>.9&&U<.1&&(P<.2&&(u[L+0]+=1),T<.2&&(u[L+2]+=1),V<.2&&(u[L+4]+=1))}}function v(L){l.push(L.x,L.y,L.z)}function M(L,P){const T=L*3;P.x=e[T+0],P.y=e[T+1],P.z=e[T+2]}function S(){const L=new W,P=new W,T=new W,V=new W,N=new _t,U=new _t,k=new _t;for(let C=0,A=0;C<l.length;C+=9,A+=6){L.set(l[C+0],l[C+1],l[C+2]),P.set(l[C+3],l[C+4],l[C+5]),T.set(l[C+6],l[C+7],l[C+8]),N.set(u[A+0],u[A+1]),U.set(u[A+2],u[A+3]),k.set(u[A+4],u[A+5]),V.copy(L).add(P).add(T).divideScalar(3);const F=y(V);E(N,A+0,L,F),E(U,A+2,P,F),E(k,A+4,T,F)}}function E(L,P,T,V){V<0&&L.x===1&&(u[P]=L.x-1),T.x===0&&T.z===0&&(u[P]=V/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.vertices,e.indices,e.radius,e.details)}}class hf extends ql{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hf(e.radius,e.detail)}}class Hl extends ql{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class wr extends $t{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],p=[],h=[],m=[];let _=e;const v=(t-e)/o,M=new W,S=new _t;for(let E=0;E<=o;E++){for(let y=0;y<=r;y++){const x=l+y/r*u;M.x=_*Math.cos(x),M.y=_*Math.sin(x),p.push(M.x,M.y,M.z),h.push(0,0,1),S.x=(M.x/t+1)/2,S.y=(M.y/t+1)/2,m.push(S.x,S.y)}_+=v}for(let E=0;E<o;E++){const y=E*(r+1);for(let x=0;x<r;x++){const L=x+y,P=L,T=L+r+1,V=L+r+2,N=L+1;d.push(P,T,N),d.push(T,V,N)}}this.setIndex(d),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pf extends $t{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let h=0;const m=[],_=new W,v=new W,M=[],S=[],E=[],y=[];for(let x=0;x<=r;x++){const L=[],P=x/r;let T=0;x===0&&u===0?T=.5/t:x===r&&p===Math.PI&&(T=-.5/t);for(let V=0;V<=t;V++){const N=V/t;_.x=-e*Math.cos(o+N*l)*Math.sin(u+P*d),_.y=e*Math.cos(u+P*d),_.z=e*Math.sin(o+N*l)*Math.sin(u+P*d),S.push(_.x,_.y,_.z),v.copy(_).normalize(),E.push(v.x,v.y,v.z),y.push(N+T,1-P),L.push(h++)}m.push(L)}for(let x=0;x<r;x++)for(let L=0;L<t;L++){const P=m[x][L+1],T=m[x][L],V=m[x+1][L],N=m[x+1][L+1];(x!==0||u>0)&&M.push(P,T,N),(x!==r-1||p<Math.PI)&&M.push(T,V,N)}this.setIndex(M),this.setAttribute("position",new Ct(S,3)),this.setAttribute("normal",new Ct(E,3)),this.setAttribute("uv",new Ct(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ja extends $t{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],h=[],m=new W,_=new W,v=new W;for(let M=0;M<=r;M++)for(let S=0;S<=o;S++){const E=S/o*l,y=M/r*Math.PI*2;_.x=(e+t*Math.cos(y))*Math.cos(E),_.y=(e+t*Math.cos(y))*Math.sin(E),_.z=t*Math.sin(y),d.push(_.x,_.y,_.z),m.x=e*Math.cos(E),m.y=e*Math.sin(E),v.subVectors(_,m).normalize(),p.push(v.x,v.y,v.z),h.push(S/o),h.push(M/r)}for(let M=1;M<=r;M++)for(let S=1;S<=o;S++){const E=(o+1)*M+S-1,y=(o+1)*(M-1)+S-1,x=(o+1)*(M-1)+S,L=(o+1)*M+S;u.push(E,y,L),u.push(y,x,L)}this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gs extends rs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E0,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const e0={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class iE{constructor(e,t,r){const o=this;let l=!1,u=0,d=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){d++,l===!1&&o.onStart!==void 0&&o.onStart(m,u,d),l=!0},this.itemEnd=function(m){u++,o.onProgress!==void 0&&o.onProgress(m,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,_){return h.push(m,_),this},this.removeHandler=function(m){const _=h.indexOf(m);return _!==-1&&h.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=h.length;_<v;_+=2){const M=h[_],S=h[_+1];if(M.global&&(M.lastIndex=0),M.test(m))return S}return null}}}const rE=new iE;class mf{constructor(e){this.manager=e!==void 0?e:rE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mf.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji={};class sE extends Error{constructor(e,t){super(e),this.response=t}}class aE extends mf{constructor(e){super(e)}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=e0.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:r,onError:o});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:r,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=ji[e],_=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),M=v?parseInt(v):0,S=M!==0;let E=0;const y=new ReadableStream({start(x){L();function L(){_.read().then(({done:P,value:T})=>{if(P)x.close();else{E+=T.byteLength;const V=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:M});for(let N=0,U=m.length;N<U;N++){const k=m[N];k.onProgress&&k.onProgress(V)}x.enqueue(T),L()}},P=>{x.error(P)})}}});return new Response(y)}else throw new sE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,d));case"json":return h.json();default:if(d===void 0)return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),v=_&&_[1]?_[1].toLowerCase():void 0,M=new TextDecoder(v);return h.arrayBuffer().then(S=>M.decode(S))}}}).then(h=>{e0.add(e,h);const m=ji[e];delete ji[e];for(let _=0,v=m.length;_<v;_++){const M=m[_];M.onLoad&&M.onLoad(h)}}).catch(h=>{const m=ji[e];if(m===void 0)throw this.manager.itemError(e),h;delete ji[e];for(let _=0,v=m.length;_<v;_++){const M=m[_];M.onError&&M.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gf extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ld=new kt,t0=new W,n0=new W;class V0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;t0.setFromMatrixPosition(e.matrixWorld),t.position.copy(t0),n0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n0),t.updateMatrixWorld(),ld.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const i0=new kt,Va=new W,cd=new W;class oE extends V0{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),r.position.copy(Va),cd.copy(r.position),cd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(cd),r.updateMatrixWorld(),o.makeTranslation(-Va.x,-Va.y,-Va.z),i0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i0)}}class r0 extends gf{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new oE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lE extends V0{constructor(){super(new U0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cE extends gf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new lE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uE extends gf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const s0=new kt;class dE{constructor(e,t,r=0,o=1/0){this.ray=new Wl(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return s0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s0),this}intersectObject(e,t=!0,r=[]){return Jd(e,this,r,t),r.sort(a0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Jd(e[o],this,r,t);return r.sort(a0),r}}function a0(s,e){return s.distance-e.distance}function Jd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Jd(l[u],e,t,!0)}}class fE extends tE{constructor(e=10,t=10,r=4473924,o=8947848){r=new dt(r),o=new dt(o);const l=t/2,u=e/t,d=e/2,p=[],h=[];for(let v=0,M=0,S=-d;v<=t;v++,S+=u){p.push(-d,0,S,d,0,S),p.push(S,0,-d,S,0,d);const E=v===l?r:o;E.toArray(h,M),M+=3,E.toArray(h,M),M+=3,E.toArray(h,M),M+=3,E.toArray(h,M),M+=3}const m=new $t;m.setAttribute("position",new Ct(p,3)),m.setAttribute("color",new Ct(h,3));const _=new H0({vertexColors:!0,toneMapped:!1});super(m,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);class hE extends mf{constructor(e){super(e)}load(e,t,r,o){const l=this,u=new aE(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(d){try{t(l.parse(d))}catch(p){o?o(p):console.error(p),l.manager.itemError(e)}},r,o)}parse(e){function t(h){const m=new DataView(h),_=32/8*3+32/8*3*3+16/8,v=m.getUint32(80,!0);if(80+32/8+v*_===m.byteLength)return!0;const S=[115,111,108,105,100];for(let E=0;E<5;E++)if(r(S,m,E))return!1;return!0}function r(h,m,_){for(let v=0,M=h.length;v<M;v++)if(h[v]!==m.getUint8(_+v))return!1;return!0}function o(h){const m=new DataView(h),_=m.getUint32(80,!0);let v,M,S,E=!1,y,x,L,P,T;for(let F=0;F<70;F++)m.getUint32(F,!1)==1129270351&&m.getUint8(F+4)==82&&m.getUint8(F+5)==61&&(E=!0,y=new Float32Array(_*3*3),x=m.getUint8(F+6)/255,L=m.getUint8(F+7)/255,P=m.getUint8(F+8)/255,T=m.getUint8(F+9)/255);const V=84,N=50,U=new $t,k=new Float32Array(_*3*3),C=new Float32Array(_*3*3),A=new dt;for(let F=0;F<_;F++){const Q=V+F*N,$=m.getFloat32(Q,!0),ce=m.getFloat32(Q+4,!0),he=m.getFloat32(Q+8,!0);if(E){const ne=m.getUint16(Q+48,!0);(ne&32768)===0?(v=(ne&31)/31,M=(ne>>5&31)/31,S=(ne>>10&31)/31):(v=x,M=L,S=P)}for(let ne=1;ne<=3;ne++){const pe=Q+ne*12,z=F*3*3+(ne-1)*3;k[z]=m.getFloat32(pe,!0),k[z+1]=m.getFloat32(pe+4,!0),k[z+2]=m.getFloat32(pe+8,!0),C[z]=$,C[z+1]=ce,C[z+2]=he,E&&(A.setRGB(v,M,S,On),y[z]=A.r,y[z+1]=A.g,y[z+2]=A.b)}}return U.setAttribute("position",new Mn(k,3)),U.setAttribute("normal",new Mn(C,3)),E&&(U.setAttribute("color",new Mn(y,3)),U.hasColors=!0,U.alpha=T),U}function l(h){const m=new $t,_=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let S=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+E+E+E,"g"),x=new RegExp("normal"+E+E+E,"g"),L=[],P=[],T=[],V=new W;let N,U=0,k=0,C=0;for(;(N=_.exec(h))!==null;){k=C;const A=N[0],F=(N=M.exec(A))!==null?N[1]:"";for(T.push(F);(N=v.exec(A))!==null;){let ce=0,he=0;const ne=N[0];for(;(N=x.exec(ne))!==null;)V.x=parseFloat(N[1]),V.y=parseFloat(N[2]),V.z=parseFloat(N[3]),he++;for(;(N=y.exec(ne))!==null;)L.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),P.push(V.x,V.y,V.z),ce++,C++;he!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+S),ce!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+S),S++}const Q=k,$=C-k;m.userData.groupNames=T,m.addGroup(Q,$,U),U++}return m.setAttribute("position",new Ct(L,3)),m.setAttribute("normal",new Ct(P,3)),m}function u(h){return typeof h!="string"?new TextDecoder().decode(h):h}function d(h){if(typeof h=="string"){const m=new Uint8Array(h.length);for(let _=0;_<h.length;_++)m[_]=h.charCodeAt(_)&255;return m.buffer||m}else return h}const p=d(e);return t(p)?o(p):l(u(e))}}class pE{constructor(e=1024){Xe(this,"canvas");Xe(this,"ctx");Xe(this,"ecgHistory",new Array(80).fill(0));Xe(this,"lastEcgStep",0);this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=e;const t=this.canvas.getContext("2d");if(!t)throw new Error("Failed to create watch face 2D context");this.ctx=t}render(e){const t=this.ctx,r=this.canvas.width,o=this.canvas.height,l=r/2,u=o/2,d=e.timeSec;t.clearRect(0,0,r,o);const p=t.createRadialGradient(l,u,r*.05,l,u,r*.5);if(e.bpm>135?(p.addColorStop(0,"#191324"),p.addColorStop(.75,"#0c1828"),p.addColorStop(1,"#2a0f18")):e.calmModeActive?(p.addColorStop(0,"#09242c"),p.addColorStop(.8,"#081826"),p.addColorStop(1,"#05101a")):(p.addColorStop(0,"#0d2136"),p.addColorStop(.78,"#091726"),p.addColorStop(1,"#06101b")),t.fillStyle=p,t.beginPath(),t.arc(l,u,r*.495,0,Math.PI*2),t.fill(),t.save(),t.strokeStyle="#55b8ea",t.lineWidth=10,t.shadowColor="#55b8ea",t.shadowBlur=14,t.beginPath(),t.arc(l,u,r*.482,0,Math.PI*2),t.stroke(),t.shadowBlur=0,t.strokeStyle="#182b3d",t.lineWidth=22,t.beginPath(),t.arc(l,u,r*.456,0,Math.PI*2),t.stroke(),t.strokeStyle=e.bpm>140?"#f87171":"#65c5f4",t.lineWidth=11,t.shadowColor=e.bpm>140?"#ef4444":"#55b8ea",t.shadowBlur=16,t.beginPath(),t.arc(l,u,r*.432,0,Math.PI*2),t.stroke(),t.restore(),e.extractionProgress>0){t.save(),t.strokeStyle="#38bdf8",t.lineWidth=7,t.lineCap="round";const P=-Math.PI/2,T=P+Math.min(100,e.extractionProgress)/100*Math.PI*2;t.beginPath(),t.arc(l,u,r*.412,P,T),t.stroke(),t.restore()}this.drawZoneHighlight(t,l+10,o*.205,130,"battery",e),this.drawBatteryWidget(t,l,o*.21,Math.round(e.battery),d);const h=r*.34,m=o*.36;this.drawZoneHighlight(t,h,m+10,108,"alert",e),this.drawWarningTriangle(t,h,m,e.activeHazards,e.hoveredZone==="alert",d);const _=r*.265,v=o*.54;this.drawZoneHighlight(t,r*.52,o*.53,185,"heart",e);const M=e.bpm/60,S=d*M%1,E=S<.15?1+Math.sin(S/.15*Math.PI)*.18:S<.32?1+Math.sin((S-.15)/.17*Math.PI)*.09:1;this.drawHeartIcon(t,_,v,64*E,e.bpm,e.calmModeActive),t.save(),t.fillStyle=e.bpm>145?"#fecaca":"#ffffff",t.font='700 225px "Inter", system-ui, -apple-system, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=e.bpm>145?"rgba(239, 68, 68, 0.55)":"rgba(86, 185, 235, 0.32)",t.shadowBlur=18;const y=String(Math.round(e.bpm));t.fillText(y,r*.61,o*.535),t.restore(),this.updateAndDrawEcg(t,r*.34,o*.665,r*.36,28,S,e.bpm,e.calmModeActive);const x=l,L=o*.805;this.drawZoneHighlight(t,x,L,108,"home",e),this.drawHomeIcon(t,x,L,84,e.hoveredZone==="home",e.shieldActive,e.extractionProgress,d)}drawZoneHighlight(e,t,r,o,l,u){const d=u.hoveredZone===l,p=u.activePulseZone===l&&u.timeSec-u.activePulseTime<.8;if(!d&&!p)return;e.save();const h=p?Math.max(0,1-(u.timeSec-u.activePulseTime)/.8):.45,m=e.createRadialGradient(t,r,o*.1,t,r,o);m.addColorStop(0,`rgba(86, 185, 235, ${h*.45})`),m.addColorStop(.7,`rgba(86, 185, 235, ${h*.18})`),m.addColorStop(1,"rgba(86, 185, 235, 0)"),e.fillStyle=m,e.beginPath(),e.arc(t,r,o,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(101, 197, 244, ${h*.9})`,e.lineWidth=3.5,e.setLineDash([10,8]),e.beginPath(),e.arc(t,r,o*.85,u.timeSec*2,u.timeSec*2+Math.PI*2),e.stroke(),e.restore()}drawBatteryWidget(e,t,r,o,l){e.save();const u=o<25,d=u&&Math.sin(l*8)>0;e.fillStyle=d?"#f87171":"#ffffff",e.font='600 72px "Inter", system-ui, sans-serif',e.textAlign="right",e.textBaseline="middle",e.fillText(`${o}%`,t+38,r);const p=t+56,h=r-24,m=96,_=46;e.strokeStyle="#ffffff",e.lineWidth=4.5,e.beginPath(),e.roundRect(p,h,m,_,6),e.stroke(),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(p+m+3,r-10,7,20,2),e.fill();const v=6,M=m-v*2,S=Math.max(4,Math.max(0,Math.min(100,o))/100*M);e.fillStyle=u?"#ef4444":"#63c3f3",e.beginPath(),e.roundRect(p+v,h+v,S,_-v*2,3),e.fill(),e.restore()}drawWarningTriangle(e,t,r,o,l,u){e.save();const d=o>0,p=d?.5+.5*Math.sin(u*7):0,h=76,m=r-h*.85,_=r+h*.65,v=h*.88;(d||l)&&(e.shadowColor=d?"#f59e0b":"#56b9eb",e.shadowBlur=d?16+p*16:14),e.strokeStyle=d&&p>.55?"#fbbf24":"#ffffff",e.lineWidth=10,e.lineJoin="round",e.lineCap="round",e.beginPath(),e.moveTo(t,m),e.lineTo(t+v,_),e.lineTo(t-v,_),e.closePath(),e.stroke(),d&&(e.fillStyle=`rgba(245, 158, 11, ${.15+p*.22})`,e.fill()),e.fillStyle=d&&p>.55?"#fbbf24":"#ffffff",e.beginPath(),e.roundRect(t-5.5,m+34,11,40,5.5),e.fill(),e.beginPath(),e.arc(t,_-19,6.5,0,Math.PI*2),e.fill(),o>0&&(e.fillStyle="#ef4444",e.beginPath(),e.arc(t+v-4,m+18,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font='700 24px "Inter", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(String(o),t+v-4,m+19)),e.restore()}drawHeartIcon(e,t,r,o,l,u){e.save(),e.translate(t,r);const d=l>140;e.fillStyle=d?"#f87171":u?"#6ee7b7":"#ffffff",e.shadowColor=d?"#ef4444":u?"#10b981":"#56b9eb",e.shadowBlur=d?24:12,e.beginPath();const p=o*.32;e.moveTo(0,p),e.bezierCurveTo(0,0,-o,0,-o,p),e.bezierCurveTo(-o,o*.78,0,o*1.05,0,o*1.38),e.bezierCurveTo(0,o*1.05,o,o*.78,o,p),e.bezierCurveTo(o,0,0,0,0,p),e.closePath(),e.translate(0,-o*.68),e.fill(),e.restore()}updateAndDrawEcg(e,t,r,o,l,u,d,p){const h=performance.now();if(h-this.lastEcgStep>28){this.lastEcgStep=h;let m=0;u<.08?m=.25:u<.13?m=-.35:u<.19?m=1:u<.25?m=-.5:u<.38?m=.35:m=(Math.random()-.5)*.06,this.ecgHistory.push(m),this.ecgHistory.length>80&&this.ecgHistory.shift()}e.save(),e.strokeStyle=d>140?"rgba(248, 113, 113, 0.78)":p?"rgba(52, 211, 153, 0.8)":"rgba(86, 185, 235, 0.65)",e.lineWidth=3.5,e.beginPath();for(let m=0;m<this.ecgHistory.length;m++){const _=t+m/(this.ecgHistory.length-1)*o,v=r-this.ecgHistory[m]*l;m===0?e.moveTo(_,v):e.lineTo(_,v)}e.stroke(),e.restore()}drawHomeIcon(e,t,r,o,l,u,d,p){e.save(),(u||l||d>=100)&&(e.shadowColor="#56b9eb",e.shadowBlur=22),e.strokeStyle="#ffffff",e.lineWidth=9,e.beginPath(),e.arc(t,r,o,0,Math.PI*2),e.stroke(),e.fillStyle=u?"rgba(14, 116, 144, 0.38)":"#091726",e.fill();const h=o*.58;e.fillStyle=d>=100&&Math.sin(p*8)>0?"#34d399":"#58beee",e.beginPath(),e.moveTo(t,r-h*.95),e.lineTo(t+h*.95,r-h*.05),e.lineTo(t+h*.68,r-h*.05),e.lineTo(t+h*.68,r+h*.82),e.lineTo(t+h*.18,r+h*.82),e.lineTo(t+h*.18,r+h*.18),e.lineTo(t-h*.18,r+h*.18),e.lineTo(t-h*.18,r+h*.82),e.lineTo(t-h*.68,r+h*.82),e.lineTo(t-h*.68,r-h*.05),e.lineTo(t-h*.95,r-h*.05),e.closePath(),e.fill(),e.beginPath(),e.roundRect(t+h*.35,r-h*.78,h*.22,h*.45,2),e.fill(),e.fillStyle="#091726",e.fillRect(t-h*.44,r-h*.05,h*.22,h*.22),e.restore()}}class mE{constructor(e,t){Xe(this,"container");Xe(this,"renderer");Xe(this,"scene");Xe(this,"camera");Xe(this,"watchFaceRenderer");Xe(this,"screenTexture");Xe(this,"watchRoot");Xe(this,"watchModelGroup");Xe(this,"screenPlaneGroup");Xe(this,"hologramGroup");Xe(this,"empShockwaveMesh");Xe(this,"safeDomeMesh");Xe(this,"portalGroup");Xe(this,"mrHandReticle");Xe(this,"envParticles");Xe(this,"envGrid");Xe(this,"ambientLight");Xe(this,"keyLight");Xe(this,"rimLight");Xe(this,"screenGlowLight");Xe(this,"zoneHitMeshes",new Map);Xe(this,"hazards",[]);Xe(this,"energyNodes",[]);Xe(this,"explosions",[]);Xe(this,"nextEntityId",1);Xe(this,"raycaster",new dE);Xe(this,"pointer",new _t);Xe(this,"isDragging",!1);Xe(this,"dragStart",{x:0,y:0});Xe(this,"targetRotY",-.28);Xe(this,"targetRotX",.06);Xe(this,"currentRotY",-.28);Xe(this,"currentRotX",.06);Xe(this,"wristMode",!1);Xe(this,"empWaveActive",!1);Xe(this,"empWaveRadius",.1);Xe(this,"callbacks");Xe(this,"stlLoaded",!1);Xe(this,"STL_ROT_X",-Math.PI/2);Xe(this,"STL_CENTER",new W(0,-.7109,1.0684));Xe(this,"STL_NORMAL",new W(0,-.980427,.196882).normalize());Xe(this,"STL_OFFSET",new W(0,.05,-1.02));this.container=e,this.callbacks=t,this.scene=new J1;const r=e.clientWidth||window.innerWidth,o=e.clientHeight||window.innerHeight;this.camera=new qn(42,r/o,.1,100),this.camera.position.set(0,.12,3.15),this.camera.lookAt(0,.04,0),this.renderer=new Q1({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(r,o),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=d0,this.renderer.toneMappingExposure=1.22,e.innerHTML="",e.appendChild(this.renderer.domElement),this.watchFaceRenderer=new pE(1024),this.screenTexture=new nE(this.watchFaceRenderer.canvas),this.screenTexture.anisotropy=4,this.screenTexture.colorSpace=On,this.ambientLight=new uE(14412542,1.5),this.scene.add(this.ambientLight),this.keyLight=new cE(16777215,2.4),this.keyLight.position.set(2.8,4.5,4.5),this.scene.add(this.keyLight),this.rimLight=new r0(5683691,3.8,12),this.rimLight.position.set(-2.5,1.8,2.5),this.scene.add(this.rimLight),this.screenGlowLight=new r0(5683691,2.2,5),this.screenGlowLight.position.set(0,.2,1.7),this.scene.add(this.screenGlowLight),this.envGrid=new fE(26,36,3718648,1976635),this.envGrid.position.y=-1.55,this.envGrid.material.transparent=!0,this.envGrid.material.opacity=.35,this.scene.add(this.envGrid),this.envParticles=this.createEnvironmentParticles(),this.scene.add(this.envParticles),this.watchRoot=new ri,this.scene.add(this.watchRoot),this.watchModelGroup=new ri,this.watchRoot.add(this.watchModelGroup),this.screenPlaneGroup=new ri,this.watchRoot.add(this.screenPlaneGroup),this.hologramGroup=new ri,this.screenPlaneGroup.add(this.hologramGroup),this.buildProceduralWatchFallback(),this.setupWatchScreenAndHitZones(),this.loadAuthenticStlWatch();const l=new ja(1,.035,16,64),u=new Xn({color:5683691,transparent:!0,opacity:0,blending:Ti});this.empShockwaveMesh=new Ot(l,u),this.empShockwaveMesh.visible=!1,this.screenPlaneGroup.add(this.empShockwaveMesh);const d=new hf(1.42,2),p=new Xn({color:3718648,wireframe:!0,transparent:!0,opacity:0,blending:Ti});this.safeDomeMesh=new Ot(d,p),this.watchRoot.add(this.safeDomeMesh),this.portalGroup=this.createExtractionPortal(),this.portalGroup.visible=!1,this.scene.add(this.portalGroup),this.mrHandReticle=this.createMrHandReticle(),this.mrHandReticle.visible=!1,this.scene.add(this.mrHandReticle),this.bindEvents()}createEnvironmentParticles(){const t=new Float32Array(1260);for(let l=0;l<420;l++)t[l*3]=(Math.random()-.5)*14,t[l*3+1]=(Math.random()-.5)*9,t[l*3+2]=(Math.random()-.5)*10-1.5;const r=new $t;r.setAttribute("position",new Mn(t,3));const o=new Kd({color:5683691,size:.055,transparent:!0,opacity:.65,blending:Ti});return new Qm(r,o)}createExtractionPortal(){const e=new ri;e.position.set(0,.1,-1.6);for(let t=0;t<3;t++){const r=new wr(1.1+t*.32,1.16+t*.32,64),o=new Xn({color:t%2===0?3718648:3462041,side:yn,transparent:!0,opacity:.55-t*.12,blending:Ti}),l=new Ot(r,o);e.add(l)}return e}createMrHandReticle(){const e=new ri,t=new wr(.11,.145,32),r=new Xn({color:3718648,side:yn,transparent:!0,opacity:.9,blending:Ti});e.add(new Ot(t,r));const o=new pf(.045,16,16),l=new Xn({color:7268279});return e.add(new Ot(o,l)),e}getScreenTransformInRoot(){const e=this.STL_CENTER.clone().add(this.STL_OFFSET).applyAxisAngle(new W(1,0,0),this.STL_ROT_X),t=this.STL_NORMAL.clone().applyAxisAngle(new W(1,0,0),this.STL_ROT_X).normalize();return{centerInRoot:e,normalInRoot:t}}setupWatchScreenAndHitZones(){const{centerInRoot:e,normalInRoot:t}=this.getScreenTransformInRoot();this.screenPlaneGroup.position.copy(e).addScaledVector(t,.018);const r=new na().setFromUnitVectors(new W(0,0,1),t);this.screenPlaneGroup.quaternion.copy(r);const o=new wr(.542,.596,64),l=new Gs({color:2505810,roughness:.32,metalness:.55,side:yn}),u=new Ot(o,l);u.position.z=-.002,this.screenPlaneGroup.add(u);const d=.548,p=new ff(d,64),h=new Xn({map:this.screenTexture,side:yn}),m=new Ot(p,h);m.position.z=.002,this.screenPlaneGroup.add(m);const _=new ja(.576,.012,16,64),v=new Xn({color:5683691}),M=new Ot(_,v);M.position.z=.005,this.screenPlaneGroup.add(M);const S=new wr(.46,.482,64),E=new Xn({color:5683691,side:yn,transparent:!0,opacity:.36,blending:Ti}),y=new Ot(S,E);y.position.z=.055,this.hologramGroup.add(y);const x=new Ot(new wr(.54,.555,64),new Xn({color:3718648,side:yn,transparent:!0,opacity:.22,blending:Ti}));x.position.z=.105,this.hologramGroup.add(x),[{id:"battery",x:.02,y:.31,r:.16},{id:"alert",x:-.18,y:.14,r:.14},{id:"heart",x:.03,y:-.04,r:.21},{id:"home",x:0,y:-.33,r:.15}].forEach(P=>{const T=new Bl(P.r,P.r,.08,24);T.rotateX(Math.PI/2);const V=new Xn({color:5683691,transparent:!0,opacity:0,depthWrite:!1}),N=new Ot(T,V);N.position.set(P.x,P.y,.035),N.userData={watchZone:P.id},this.screenPlaneGroup.add(N),this.zoneHitMeshes.set(P.id,N)})}buildProceduralWatchFallback(){this.watchModelGroup.clear();const{centerInRoot:e,normalInRoot:t}=this.getScreenTransformInRoot(),r=new ri;r.position.copy(e),r.quaternion.setFromUnitVectors(new W(0,0,1),t);const o=new Bl(.595,.595,.28,64);o.rotateX(Math.PI/2),o.translate(0,0,-.15);const l=new Gs({color:2505552,metalness:.55,roughness:.35});r.add(new Ot(o,l));const u=new ja(.76,.18,24,64);u.rotateY(Math.PI/2),u.scale(1.3,1.05,.95);const d=new Gs({color:1185309,roughness:.75,metalness:.15}),p=new Ot(u,d);p.position.set(0,-.04,-.05),this.watchModelGroup.add(p),this.watchModelGroup.add(r)}loadAuthenticStlWatch(){const e=new hE,r=["./assets/watch/base.stl","./public/assets/watch/base.stl","../public/assets/watch/base.stl"],o=l=>{l>=r.length||e.load(r[l],u=>{const d=u.getAttribute("position"),p=d.count,h=new Float32Array(p*3),m=this.STL_CENTER.x,_=this.STL_CENTER.y,v=this.STL_CENTER.z,M=this.STL_NORMAL.x,S=this.STL_NORMAL.y,E=this.STL_NORMAL.z,y=1,x=0,L=0,P=0,T=E,V=-S,N=new dt(1119516),U=new dt(1778224),k=new dt(2571346),C=new dt(5816046),A=new dt(595750);for(let $=0;$<p;$++){let ce=d.getX($),he=d.getY($),ne=d.getZ($);const pe=ce-m,z=he-_,ue=ne-v,oe=pe*M+z*S+ue*E,O=pe*y+z*x+ue*L,se=pe*P+z*T+ue*V,De=Math.sqrt(O*O+se*se);let J=N;oe>=-.31&&De<=.608?oe>-.045&&De<=.542?(J=A,oe>0&&(ce-=M*oe,he-=S*oe,ne-=E*oe,d.setXYZ($,ce,he,ne))):oe>-.05&&(De>.542&&De<=.564||De>.578&&De<=.595)?J=C:J=k:J=Math.sin(ne*38+he*12)>.55?U:N,h[$*3]=J.r,h[$*3+1]=J.g,h[$*3+2]=J.b}d.needsUpdate=!0,u.computeVertexNormals(),u.setAttribute("color",new Mn(h,3)),u.translate(this.STL_OFFSET.x,this.STL_OFFSET.y,this.STL_OFFSET.z),u.rotateX(this.STL_ROT_X);const F=new Gs({vertexColors:!0,roughness:.42,metalness:.38}),Q=new Ot(u,F);this.watchModelGroup.clear(),this.watchModelGroup.add(Q),this.stlLoaded=!0},void 0,()=>{o(l+1)})};o(0)}setSectorTheme(e,t,r){if(t&&r!=="virtual")this.scene.background=null,this.renderer.setClearColor(0,0);else{const d={1:265498,2:1574924,3:398610,4:461598};this.scene.background=new dt(d[e]||265498)}const u={1:3718648,2:16347926,3:1096065,4:8490232}[e]||3718648;this.rimLight.color.setHex(u),this.envParticles.material.color.setHex(u)}setWristMode(e){this.wristMode=e,e?(this.targetRotY=.18,this.targetRotX=.16):(this.targetRotY=-.28,this.targetRotX=.06)}resetView(){this.targetRotY=-.28,this.targetRotX=.06}triggerEmpShockwave(){this.empWaveActive=!0,this.empWaveRadius=.15,this.empShockwaveMesh.visible=!0;const e=[...this.hazards];this.hazards=[],e.forEach(t=>{this.spawnExplosion(t.mesh.position,5683691),this.scene.remove(t.mesh),this.callbacks.onHazardDestroyed(!0)})}pullAllEnergyNodes(){this.energyNodes.forEach(e=>{e.pullingToWatch=!0});for(let e=0;e<2;e++)this.spawnEnergyNode(!0)}spawnHazard(e){if(this.hazards.length>=6)return;const t=e===2?["thermal","thermal","emp"]:e===3?["toxic","toxic","emp"]:["emp","thermal","toxic"],r=t[Math.floor(Math.random()*t.length)],o=new ri,u={thermal:15680580,emp:16096779,toxic:11032055}[r],d=new Hl(.19,1),p=new Gs({color:u,emissive:u,emissiveIntensity:.85,roughness:.2}),h=new Ot(d,p);o.add(h);const m=new wr(.24,.28,24),_=new Xn({color:u,side:yn,transparent:!0,opacity:.75}),v=new Ot(m,_);o.add(v);const M=Math.random()*Math.PI*2,S=2.35+Math.random()*.5;o.position.set(Math.cos(M)*S,(Math.random()-.5)*1.8,Math.sin(M)*.65+.3);const E=this.nextEntityId++;o.userData={hazardId:E},h.userData={hazardId:E},v.userData={hazardId:E};const y=new W(0,0,.5).sub(o.position).normalize(),x=.26+e*.045;this.scene.add(o),this.hazards.push({id:E,mesh:o,velocity:y.multiplyScalar(x),type:r,hp:1})}spawnEnergyNode(e=!1){if(this.energyNodes.length>=6&&!e)return;const t=new Hl(.14,0),r=new Gs({color:3718648,emissive:959977,emissiveIntensity:.9,roughness:.1,metalness:.5}),o=new Ot(t,r),l=Math.random()*Math.PI*2,u=1.65+Math.random()*.65;o.position.set(Math.cos(l)*u,(Math.random()-.5)*1.5,.45+(Math.random()-.5)*.5);const d=this.nextEntityId++;o.userData={energyId:d},this.scene.add(o),this.energyNodes.push({id:d,mesh:o,pullingToWatch:e})}spawnExplosion(e,t){const o=new Float32Array(84),l=[];for(let h=0;h<28;h++)o[h*3]=e.x,o[h*3+1]=e.y,o[h*3+2]=e.z,l.push(new W((Math.random()-.5)*2.4,(Math.random()-.5)*2.4,(Math.random()-.5)*2.4));const u=new $t;u.setAttribute("position",new Mn(o,3)),u.userData={velocities:l};const d=new Kd({color:t,size:.08,transparent:!0,opacity:1,blending:Ti}),p=new Qm(u,d);this.scene.add(p),this.explosions.push({mesh:p,age:0})}getActiveHazardCount(){return this.hazards.length}clearAllEntities(){this.hazards.forEach(e=>this.scene.remove(e.mesh)),this.hazards=[],this.energyNodes.forEach(e=>this.scene.remove(e.mesh)),this.energyNodes=[]}updateMrHandInteraction(e,t,r){if(this.mrHandReticle.visible=r,!r)return;const o=e*1.9,l=t*1.25+.15;this.mrHandReticle.position.set(o,l,.95),this.mrHandReticle.rotation.z+=.08;for(let u=this.hazards.length-1;u>=0;u--){const d=this.hazards[u];d.mesh.position.distanceTo(this.mrHandReticle.position)<.48&&(this.spawnExplosion(d.mesh.position,3718648),this.scene.remove(d.mesh),this.hazards.splice(u,1),this.callbacks.onHazardDestroyed(!1))}for(let u=this.energyNodes.length-1;u>=0;u--){const d=this.energyNodes[u];d.mesh.position.distanceTo(this.mrHandReticle.position)<.48&&(d.pullingToWatch=!0)}}update(e,t){const r=t.timeSec;this.watchFaceRenderer.render({...t,activeHazards:this.hazards.length}),this.screenTexture.needsUpdate=!0,this.currentRotY+=(this.targetRotY-this.currentRotY)*Math.min(1,e*8),this.currentRotX+=(this.targetRotX-this.currentRotX)*Math.min(1,e*8);const o=Math.sin(r*1.8)*.03,l=t.bpm>140?Math.sin(r*28)*.008:0;if(this.watchRoot.position.set(this.wristMode?-.1:0,o+l,this.wristMode?.22:0),this.watchRoot.rotation.y=this.currentRotY,this.watchRoot.rotation.x=this.currentRotX,this.watchRoot.rotation.z=this.wristMode?-.18:0,this.hologramGroup.children.forEach((p,h)=>{p.rotation.z=r*(h%2===0?.6:-.8);const m=Math.sin(r*3+h)*.012;p.position.z=(h+1)*.05+m}),this.empWaveActive){this.empWaveRadius+=e*4.2,this.empShockwaveMesh.scale.setScalar(this.empWaveRadius);const p=this.empShockwaveMesh.material;p.opacity=Math.max(0,1-this.empWaveRadius/3.2),this.empWaveRadius>=3.2&&(this.empWaveActive=!1,this.empShockwaveMesh.visible=!1)}const u=this.safeDomeMesh.material,d=t.shieldActive?.28+Math.sin(r*5)*.08:0;if(u.opacity+=(d-u.opacity)*Math.min(1,e*6),this.safeDomeMesh.rotation.y+=e*.45,this.safeDomeMesh.rotation.x+=e*.2,this.portalGroup.visible=t.extractionProgress>15||t.shieldActive,this.portalGroup.visible){const p=.4+t.extractionProgress/100*.85;this.portalGroup.scale.setScalar(p),this.portalGroup.children.forEach((h,m)=>{h.rotation.z=r*(m%2===0?1.2:-1.5)})}for(let p=this.hazards.length-1;p>=0;p--){const h=this.hazards[p];h.mesh.position.addScaledVector(h.velocity,e),h.mesh.rotation.x+=e*2.2,h.mesh.rotation.y+=e*1.8;const m=h.mesh.position.distanceTo(new W(0,0,.5));t.shieldActive&&m<1.45?(this.spawnExplosion(h.mesh.position,3718648),this.scene.remove(h.mesh),this.hazards.splice(p,1),this.callbacks.onHazardDestroyed(!1)):m<.65&&(this.spawnExplosion(h.mesh.position,15680580),this.scene.remove(h.mesh),this.hazards.splice(p,1),this.callbacks.onHazardImpact(h.type))}for(let p=this.energyNodes.length-1;p>=0;p--){const h=this.energyNodes[p];if(h.mesh.rotation.y+=e*2,h.mesh.rotation.x+=e*1.2,h.pullingToWatch){const m=new W(0,.1,.68).sub(h.mesh.position);if(m.length()<.35){this.spawnExplosion(h.mesh.position,3462041),this.scene.remove(h.mesh),this.energyNodes.splice(p,1),this.callbacks.onEnergyCollected(9);continue}m.normalize(),h.mesh.position.addScaledVector(m,e*4.8)}else h.mesh.position.y+=Math.sin(r*2.5+h.id)*e*.15}for(let p=this.explosions.length-1;p>=0;p--){const h=this.explosions[p];h.age+=e;const m=h.mesh.geometry.getAttribute("position"),_=h.mesh.geometry.userData.velocities;for(let v=0;v<_.length;v++)m.setXYZ(v,m.getX(v)+_[v].x*e,m.getY(v)+_[v].y*e,m.getZ(v)+_[v].z*e);m.needsUpdate=!0,h.mesh.material.opacity=Math.max(0,1-h.age*1.8),h.age>.55&&(this.scene.remove(h.mesh),this.explosions.splice(p,1))}this.envParticles.rotation.y=r*.04,this.renderer.render(this.scene,this.camera)}bindEvents(){const e=this.renderer.domElement,t=(r,o)=>{const l=e.getBoundingClientRect();this.pointer.x=(r-l.left)/l.width*2-1,this.pointer.y=-((o-l.top)/l.height)*2+1};e.addEventListener("pointerdown",r=>{var m,_,v,M;t(r.clientX,r.clientY),this.raycaster.setFromCamera(this.pointer,this.camera);const o=this.hazards.map(S=>S.mesh),l=this.raycaster.intersectObjects(o,!0);if(l.length>0){let S=l[0].object;for(;S&&!((m=S.userData)!=null&&m.hazardId);)S=S.parent;if((_=S==null?void 0:S.userData)!=null&&_.hazardId){const E=this.hazards.findIndex(y=>y.id===S.userData.hazardId);if(E!==-1){const y=this.hazards[E];this.spawnExplosion(y.mesh.position,3718648),this.scene.remove(y.mesh),this.hazards.splice(E,1),this.callbacks.onHazardDestroyed(!1);return}}}const u=this.energyNodes.map(S=>S.mesh),d=this.raycaster.intersectObjects(u,!1);if(d.length>0){const S=(v=d[0].object.userData)==null?void 0:v.energyId,E=this.energyNodes.find(y=>y.id===S);if(E){E.pullingToWatch=!0;return}}const p=Array.from(this.zoneHitMeshes.values()),h=this.raycaster.intersectObjects(p,!1);if(h.length>0){const S=(M=h[0].object.userData)==null?void 0:M.watchZone;if(S){this.callbacks.onWatchZoneTrigger(S);return}}this.isDragging=!0,this.dragStart={x:r.clientX,y:r.clientY}}),e.addEventListener("pointermove",r=>{var p;if(t(r.clientX,r.clientY),this.isDragging){const h=r.clientX-this.dragStart.x,m=r.clientY-this.dragStart.y;this.dragStart={x:r.clientX,y:r.clientY},this.targetRotY=Math.max(-1.45,Math.min(1.45,this.targetRotY+h*.0075)),this.targetRotX=Math.max(-.85,Math.min(.85,this.targetRotX+m*.0075));return}this.raycaster.setFromCamera(this.pointer,this.camera);const o=Array.from(this.zoneHitMeshes.values()),l=this.raycaster.intersectObjects(o,!1);if(l.length>0){const h=(p=l[0].object.userData)==null?void 0:p.watchZone;e.style.cursor="pointer",this.callbacks.onHoverChange(h,null);return}if(this.raycaster.intersectObjects(this.hazards.map(h=>h.mesh),!0).length>0){e.style.cursor="crosshair",this.callbacks.onHoverChange(null,"hazard");return}if(this.raycaster.intersectObjects(this.energyNodes.map(h=>h.mesh),!1).length>0){e.style.cursor="pointer",this.callbacks.onHoverChange(null,"energy");return}e.style.cursor="grab",this.callbacks.onHoverChange(null,null)}),window.addEventListener("pointerup",()=>{this.isDragging=!1}),e.addEventListener("wheel",r=>{r.preventDefault(),this.camera.position.z=Math.max(2,Math.min(4.8,this.camera.position.z+r.deltaY*.002))},{passive:!1}),window.addEventListener("resize",()=>{const r=this.container.clientWidth||window.innerWidth,o=this.container.clientHeight||window.innerHeight;this.camera.aspect=r/o,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,o)})}dispose(){this.renderer.dispose()}}class gE{constructor(){Xe(this,"video",null);Xe(this,"workCanvas");Xe(this,"workCtx");Xe(this,"prevFrame",null);Xe(this,"stream",null);Xe(this,"isRunning",!1);Xe(this,"errorMsg",null);Xe(this,"smoothHandX",0);Xe(this,"smoothHandY",0);Xe(this,"smoothMotion",0);Xe(this,"calmSeconds",0);Xe(this,"lastProcessTime",performance.now());this.workCanvas=document.createElement("canvas"),this.workCanvas.width=128,this.workCanvas.height=96;const e=this.workCanvas.getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("2D context unavailable");this.workCtx=e}async start(e){this.errorMsg=null;try{return!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia?(this.errorMsg="Tu navegador no expone acceso directo a cámara en este contexto; usando Simulador MR Táctico.",!1):(this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1}),this.video=e,this.video.srcObject=this.stream,await this.video.play(),this.isRunning=!0,this.prevFrame=null,this.lastProcessTime=performance.now(),!0)}catch(t){const r=t instanceof Error?t.message:String(t);return this.errorMsg=`Cámara no disponible (${r}). Modo Simulador Humano MR activo.`,this.isRunning=!1,!1}}stop(){this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.video&&(this.video.srcObject=null),this.isRunning=!1,this.prevFrame=null}analyzeFrame(e){const t=performance.now(),r=Math.min(.2,(t-this.lastProcessTime)/1e3);if(this.lastProcessTime=t,!this.isRunning||!this.video||this.video.readyState<2)return{cameraActive:!1,motionIntensity:0,handX:0,handY:0,handDetected:!1,calmStreakSeconds:0};const o=this.workCanvas.width,l=this.workCanvas.height;this.workCtx.save(),this.workCtx.scale(-1,1),this.workCtx.drawImage(this.video,-o,0,o,l),this.workCtx.restore();const d=this.workCtx.getImageData(0,0,o,l).data;let p=0,h=0,m=0,_=0,v=null;if(e&&(v=e.getContext("2d"),v&&(v.clearRect(0,0,e.width,e.height),v.drawImage(this.workCanvas,0,0,e.width,e.height))),this.prevFrame)for(let y=0;y<l;y+=2)for(let x=0;x<o;x+=2){const L=(y*o+x)*4,P=d[L],T=d[L+1],V=d[L+2],N=this.prevFrame[L],U=this.prevFrame[L+1],k=this.prevFrame[L+2],C=Math.abs(P-N)+Math.abs(T-U)+Math.abs(V-k);if(C>55){_++;const A=P>75&&T>45&&V>30&&P>T&&P>V,F=A?C*2.2:C;if(p+=F,h+=x*F,m+=y*F,v&&C>95){v.fillStyle=A?"rgba(86, 185, 235, 0.7)":"rgba(16, 185, 129, 0.45)";const Q=x/o*e.width,$=y/l*e.height;v.fillRect(Q,$,3,3)}}}this.prevFrame=new Uint8ClampedArray(d);const M=o*l/4,S=Math.min(100,_/(M*.18)*100);this.smoothMotion=this.smoothMotion*.72+S*.28;const E=p>2800;if(E){const y=h/p,x=m/p,L=y/o*2-1,P=-(x/l*2-1);if(this.smoothHandX=this.smoothHandX*.65+L*.35,this.smoothHandY=this.smoothHandY*.65+P*.35,v&&e){const T=(this.smoothHandX+1)*.5*e.width,V=(1-this.smoothHandY)*.5*e.height;v.strokeStyle="#56b9eb",v.lineWidth=2,v.beginPath(),v.arc(T,V,12,0,Math.PI*2),v.stroke()}}return this.smoothMotion<14?this.calmSeconds=Math.min(20,this.calmSeconds+r):this.calmSeconds=Math.max(0,this.calmSeconds-r*1.5),{cameraActive:!0,motionIntensity:Math.round(this.smoothMotion),handX:this.smoothHandX,handY:this.smoothHandY,handDetected:E,calmStreakSeconds:this.calmSeconds}}}class vE{constructor(){Xe(this,"ctx",null);Xe(this,"muted",!1);Xe(this,"lastBeatTime",0)}ensureContext(){if(this.muted)return null;if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}tickHeartbeat(e,t){if(this.muted)return;const r=60/Math.max(40,Math.min(210,e))*1e3;t-this.lastBeatTime>=r&&(this.lastBeatTime=t,this.playHeartbeat(e))}playHeartbeat(e){const t=this.ensureContext();if(!t)return;const r=t.currentTime,o=e>120,l=o?68:54,u=o?.22:.12;this.triggerThump(t,r,l,.09,u),this.triggerThump(t,r+.11,l*1.22,.07,u*.75)}triggerThump(e,t,r,o,l){const u=e.createOscillator(),d=e.createGain();u.type="sine",u.frequency.setValueAtTime(r*1.3,t),u.frequency.exponentialRampToValueAtTime(r*.55,t+o),d.gain.setValueAtTime(.001,t),d.gain.linearRampToValueAtTime(l,t+.012),d.gain.exponentialRampToValueAtTime(.001,t+o),u.connect(d),d.connect(e.destination),u.start(t),u.stop(t+o+.01)}playEmpScan(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,r=e.createOscillator(),o=e.createGain();r.type="sawtooth",r.frequency.setValueAtTime(180,t),r.frequency.exponentialRampToValueAtTime(880,t+.18),r.frequency.exponentialRampToValueAtTime(95,t+.48);const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(600,t),l.Q.setValueAtTime(4,t),o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.18,t+.04),o.gain.exponentialRampToValueAtTime(.001,t+.5),r.connect(l),l.connect(o),o.connect(e.destination),r.start(t),r.stop(t+.52)}playCardioStabilize(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[261.63,329.63,392].forEach((r,o)=>{const l=e.createOscillator(),u=e.createGain();l.type="sine",l.frequency.setValueAtTime(r,t+o*.05),u.gain.setValueAtTime(.001,t+o*.05),u.gain.linearRampToValueAtTime(.08,t+o*.05+.06),u.gain.exponentialRampToValueAtTime(.001,t+.55+o*.05),l.connect(u),u.connect(e.destination),l.start(t+o*.05),l.stop(t+.6+o*.05)})}playKineticCharge(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,r=e.createOscillator(),o=e.createGain();r.type="triangle",r.frequency.setValueAtTime(440,t),r.frequency.exponentialRampToValueAtTime(1180,t+.22),o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.14,t+.03),o.gain.exponentialRampToValueAtTime(.001,t+.25),r.connect(o),o.connect(e.destination),r.start(t),r.stop(t+.26)}playHomeBeacon(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[293.66,440,587.33,880].forEach((o,l)=>{const u=e.createOscillator(),d=e.createGain();u.type="sine",u.frequency.setValueAtTime(o,t+l*.06),d.gain.setValueAtTime(.001,t+l*.06),d.gain.linearRampToValueAtTime(.09,t+l*.06+.04),d.gain.exponentialRampToValueAtTime(.001,t+.75+l*.06),u.connect(d),d.connect(e.destination),u.start(t+l*.06),u.stop(t+.8+l*.06)})}playHazardHit(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,r=e.createOscillator(),o=e.createGain();r.type="sawtooth",r.frequency.setValueAtTime(150,t),r.frequency.linearRampToValueAtTime(55,t+.28),o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.2,t+.02),o.gain.exponentialRampToValueAtTime(.001,t+.3),r.connect(o),o.connect(e.destination),r.start(t),r.stop(t+.32)}}const ii=new vE,xn=[{id:1,name:"Sector 01: Tormenta Ionizante",subtitle:"Anomalías Electromagnéticas de Rango Cercano",envHazardDesc:"Pulsos EMP drenan la batería (73%) y orbitan hacia el humano.",ambientBpmDrift:1.4,batteryDrainRate:.75,spawnInterval:3.4},{id:2,name:"Sector 02: Falla Térmica Volcánica",subtitle:"Estrés Calórico y Taquicardia Reactiva",envHazardDesc:"Olas de calor elevan el pulso cardíaco (86 → 150+ BPM). Usa ❤️ para estabilizar.",ambientBpmDrift:3.1,batteryDrainRate:.9,spawnInterval:2.8},{id:3,name:"Sector 03: Grieta Bio-Cuántica",subtitle:"Enjambre de Anomalías y Arritmia Inducida",envHazardDesc:"Alta densidad de amenazas (⚠️). Combina pulsos EMP y escudo doméstico (🏠).",ambientBpmDrift:2.6,batteryDrainRate:1.15,spawnInterval:2.3},{id:4,name:"Sector 04: Portal de Retorno a Casa (🏠)",subtitle:"Secuencia Final de Extracción Biométrica",envHazardDesc:"Mantén signos vitales estables y activa 🏠 para abrir el portal de rescate al 100%.",ambientBpmDrift:3.4,batteryDrainRate:1.25,spawnInterval:2}];function _E(){var te;const s=mt.useRef(null),e=mt.useRef(null),t=mt.useRef(null),r=mt.useRef(null),o=mt.useRef(null),[l,u]=mt.useState(86),[d,p]=mt.useState(73),[h,m]=mt.useState(100),[_,v]=mt.useState(0),[M,S]=mt.useState(0),[E,y]=mt.useState(0),[x,L]=mt.useState("playing"),[P,T]=mt.useState(null),[V,N]=mt.useState(null),[U,k]=mt.useState(null),[C,A]=mt.useState(0),[F,Q]=mt.useState(!1),[$,ce]=mt.useState(!1),[he,ne]=mt.useState(!1),[pe,z]=mt.useState(!1),[ue,oe]=mt.useState(!1),[O,se]=mt.useState("hologram"),[De,J]=mt.useState({cameraActive:!1,motionIntensity:0,handX:0,handY:0,handDetected:!1,calmStreakSeconds:0}),[me,we]=mt.useState(null),[Me,Le]=mt.useState(!1),[ke,et]=mt.useState(!1),[bt,ht]=mt.useState(!1),[Dt,q]=mt.useState([{id:1,time:"00:00",source:"RELOJ",text:"ResWatch MR inicializado: Pulso base 86 BPM · Batería 73% · Escáner ⚠️ y Baliza 🏠 listos.",tone:"info"},{id:2,time:"00:01",source:"ENTORNO",text:"Sector 01 (Tormenta Ionizante) generado alrededor del reloj. Toca los íconos del reloj en 3D.",tone:"warn"}]),Pe=mt.useRef({bpm:86,battery:73,bioStability:100,extractionProgress:0,sectorIdx:0,hoveredZone:null,activePulseZone:null,activePulseTime:0,shieldActive:!1,calmModeActive:!1,simKineticActive:!1,simBreathActive:!1,mrCameraEnabled:!1,gameStatus:"playing",startTime:performance.now(),lastSpawnTime:performance.now(),lastEnergySpawnTime:performance.now(),shieldEndTime:0,calmEndTime:0}),Qe=mt.useCallback((Z,le,de="info")=>{const Fe=Math.floor((performance.now()-Pe.current.startTime)/1e3),ve=String(Math.floor(Fe/60)).padStart(2,"0"),Te=String(Fe%60).padStart(2,"0");q(xe=>[{id:Date.now()+Math.random(),time:`${ve}:${Te}`,source:Z,text:le,tone:de},...xe.slice(0,5)])},[]),nt=mt.useCallback(Z=>{var de,Fe,ve,Te,xe;const le=(performance.now()-Pe.current.startTime)/1e3;if(Pe.current.activePulseZone=Z,Pe.current.activePulseTime=le,k(Z),A(le),Z==="heart"){ii.playCardioStabilize(),Pe.current.calmModeActive=!0,Pe.current.calmEndTime=performance.now()+4500,ce(!0);const ge=Math.max(72,Pe.current.bpm-(Pe.current.bpm-86)*.58-10),Re=Math.min(100,Pe.current.bioStability+12);Pe.current.bpm=ge,Pe.current.bioStability=Re,u(Math.round(ge)),m(Math.round(Re)),S(He=>He+35),Qe("RELOJ",`❤️ Sincronización Cardio-Vagal activada: Pulso estabilizado hacia ${Math.round(ge)} BPM (+12% bio-estabilidad).`,"success")}else if(Z==="alert"){if(Pe.current.battery<6){Qe("RELOJ","⚠️ Batería insuficiente para pulso EMP. Recarga con 🔋 o movimiento cinético.","danger");return}ii.playEmpScan();const ge=((de=r.current)==null?void 0:de.getActiveHazardCount())||0;(Fe=r.current)==null||Fe.triggerEmpShockwave();const Re=Math.max(0,Pe.current.battery-5);Pe.current.battery=Re,p(Math.round(Re)),S(He=>He+50+ge*30),Qe("RELOJ",`⚠️ Onda de Choque EMP emitida al entorno: ${ge>0?`${ge} anomalía(s) neutralizada(s)`:"perímetro despejado"}.`,"info")}else if(Z==="battery"){ii.playKineticCharge(),(ve=r.current)==null||ve.pullAllEnergyNodes();const ge=Math.min(100,Pe.current.battery+14);Pe.current.battery=ge,p(Math.round(ge)),S(Re=>Re+40),Qe("HUMANO",`🔋 Cosecha Cinética/ Ambiental activada: Batería del reloj recargada a ${Math.round(ge)}%.`,"success")}else if(Z==="home"){if(Pe.current.battery<8){Qe("RELOJ","🏠 Necesitas al menos 8% de batería para desplegar el Domo Seguro.","danger");return}ii.playHomeBeacon(),Pe.current.shieldActive=!0,Pe.current.shieldEndTime=performance.now()+6e3,Q(!0);const ge=Math.max(0,Pe.current.battery-7),Re=Pe.current.bpm<130?22:12,He=Math.min(100,Pe.current.extractionProgress+Re);if(Pe.current.battery=ge,Pe.current.extractionProgress=He,p(Math.round(ge)),v(Math.round(He)),S(Je=>Je+65),He>=100)if(Pe.current.sectorIdx<xn.length-1){const Je=Pe.current.sectorIdx+1;Pe.current.sectorIdx=Je,Pe.current.extractionProgress=0,y(Je),v(0),(Te=r.current)==null||Te.clearAllEntities(),(xe=r.current)==null||xe.setSectorTheme(xn[Je].id,Pe.current.mrCameraEnabled,O),Qe("ENTORNO",`🏠 Salto Cuántico completado → Entrando a ${xn[Je].name}.`,"success")}else Pe.current.gameStatus="extracted",L("extracted"),Qe("RELOJ","🏠 ¡EXTRACCIÓN COMPLETA! El humano ha regresado a salvo a Casa con signos vitales estabilizados.","success");else Qe("RELOJ",`🏠 Domo de Protección MR desplegado (6s) y Baliza a Casa al ${Math.round(He)}%.`,"info")}},[O,Qe]);mt.useEffect(()=>{if(!s.current)return;o.current=new gE;const Z=new mE(s.current,{onWatchZoneTrigger:ve=>{nt(ve)},onHazardDestroyed:ve=>{S(Te=>Te+(ve?35:45)),ve||(ii.playKineticCharge(),Qe("HUMANO","Interacción espacial MR: Anomalía desviada directamente en el entorno 3D.","success"))},onHazardImpact:ve=>{ii.playHazardHit();const Te=ve==="thermal"?18:ve==="toxic"?15:11,xe=ve==="emp"?11:6,ge=Math.min(192,Pe.current.bpm+Te),Re=Math.max(0,Pe.current.battery-xe),He=Math.max(10,Pe.current.bioStability-11);Pe.current.bpm=ge,Pe.current.battery=Re,Pe.current.bioStability=He,u(Math.round(ge)),p(Math.round(Re)),m(Math.round(He)),Qe("ENTORNO",`⚠️ Impacto de ${ve==="thermal"?"Choque Térmico":ve==="emp"?"Descarga EMP":"Espora Bio-Tóxica"}: El pulso del humano sube a ${Math.round(ge)} BPM y la batería baja a ${Math.round(Re)}%.`,"danger")},onEnergyCollected:ve=>{ii.playKineticCharge();const Te=Math.min(100,Pe.current.battery+ve),xe=Math.max(75,Pe.current.bpm-3);Pe.current.battery=Te,Pe.current.bpm=xe,p(Math.round(Te)),u(Math.round(xe)),S(ge=>ge+25)},onHoverChange:(ve,Te)=>{Pe.current.hoveredZone=ve,T(ve),N(Te)}});r.current=Z,Z.setSectorTheme(xn[0].id,!1,"hologram"),Z.spawnHazard(1),Z.spawnEnergyNode(!1);let le=0,de=performance.now();const Fe=ve=>{le=requestAnimationFrame(Fe);const Te=Math.min(.1,(ve-de)/1e3);de=ve;const xe=Pe.current,ge=xn[xe.sectorIdx]||xn[0];if(o.current&&o.current.isRunning){const Re=o.current.analyzeFrame(t.current);if(J(Re),Z.updateMrHandInteraction(Re.handX,Re.handY,Re.handDetected),Re.motionIntensity>32){const He=Re.motionIntensity/100*3.8*Te;xe.battery=Math.min(100,xe.battery+He),xe.bpm=Math.min(175,xe.bpm+Re.motionIntensity/100*2.5*Te)}else Re.calmStreakSeconds>1.8&&(xe.bpm+=(86-xe.bpm)*.45*Te)}else Z.updateMrHandInteraction(0,0,!1);if(xe.shieldActive&&ve>xe.shieldEndTime&&(xe.shieldActive=!1,Q(!1)),xe.calmModeActive&&ve>xe.calmEndTime&&(xe.calmModeActive=!1,ce(!1)),xe.gameStatus==="playing"){const Re=xe.shieldActive?.2:1;xe.bpm=Math.min(190,xe.bpm+ge.ambientBpmDrift*Re*Te),xe.battery=Math.max(0,xe.battery-ge.batteryDrainRate*Re*Te),(xe.calmModeActive||xe.simBreathActive)&&(xe.bpm+=(84-xe.bpm)*1.65*Te,xe.bioStability=Math.min(100,xe.bioStability+5.5*Te)),xe.simKineticActive&&(xe.battery=Math.min(100,xe.battery+9.5*Te),xe.bpm=Math.min(165,xe.bpm+4.2*Te)),xe.bpm<=125&&xe.battery>=20&&(xe.extractionProgress=Math.min(100,xe.extractionProgress+1.8*Te)),xe.bpm>145&&(xe.bioStability=Math.max(15,xe.bioStability-3.2*Te)),xe.bioStability<=16&&xe.battery>=15&&(xe.bioStability=65,xe.bpm=92,xe.battery=Math.max(5,xe.battery-12),ii.playCardioStabilize(),Qe("RELOJ","❤️ Auto-Estabilización de Emergencia ejecutada por ResWatch: Pulso restaurado a 92 BPM.","warn")),(ve-xe.lastSpawnTime)/1e3>=ge.spawnInterval&&(xe.lastSpawnTime=ve,Z.spawnHazard(ge.id)),(ve-xe.lastEnergySpawnTime)/1e3>=4.2&&(xe.lastEnergySpawnTime=ve,Z.spawnEnergyNode(!1)),u(Math.round(xe.bpm)),p(Math.round(xe.battery)),m(Math.round(xe.bioStability)),v(Math.round(xe.extractionProgress))}ii.tickHeartbeat(xe.bpm,ve),Z.update(Te,{bpm:xe.bpm,battery:xe.battery,activeHazards:Z.getActiveHazardCount(),extractionProgress:xe.extractionProgress,hoveredZone:xe.hoveredZone,activePulseZone:xe.activePulseZone,activePulseTime:xe.activePulseTime,shieldActive:xe.shieldActive,calmModeActive:xe.calmModeActive||xe.simBreathActive,timeSec:(ve-xe.startTime)/1e3})};return le=requestAnimationFrame(Fe),()=>{var ve;cancelAnimationFrame(le),(ve=o.current)==null||ve.stop(),Z.dispose()}},[nt,Qe]),mt.useEffect(()=>{const Z=le=>{le.key==="1"?nt("heart"):le.key==="2"?nt("alert"):le.key==="3"?nt("battery"):le.key==="4"?nt("home"):le.key===" "&&(le.preventDefault(),nt("alert"))};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[nt]);const tt=async()=>{var Z,le;!o.current||!e.current||(ue?(o.current.stop(),Pe.current.mrCameraEnabled=!1,oe(!1),we(null),(Z=r.current)==null||Z.setSectorTheme(xn[E].id,!1,O),Qe("HUMANO","Cámara MR desactivada. Entorno 3D táctico completo activo.","info")):await o.current.start(e.current)?(Pe.current.mrCameraEnabled=!0,oe(!0),we(null),(le=r.current)==null||le.setSectorTheme(xn[E].id,!0,O),Qe("HUMANO","Cámara MR en Vivo activada: Mueve tu mano frente a la cámara para cargar energía cinética y desviar anomalías 3D.","success")):(we(o.current.errorMsg),Qe("RELOJ",o.current.errorMsg||"Usando Simulador Humano MR integrado.","warn")))},wt=Z=>{var le,de,Fe,ve;Pe.current.sectorIdx=Z,Pe.current.extractionProgress=0,Pe.current.gameStatus="playing",y(Z),v(0),L("playing"),(le=r.current)==null||le.clearAllEntities(),(de=r.current)==null||de.setSectorTheme(xn[Z].id,ue,O),(Fe=r.current)==null||Fe.spawnHazard(xn[Z].id),(ve=r.current)==null||ve.spawnEnergyNode(!1),Qe("ENTORNO",`Entorno regenerado: ${xn[Z].name} — ${xn[Z].subtitle}.`,"info")},Ze=()=>{var Z,le,de;Pe.current.bpm=86,Pe.current.battery=73,Pe.current.bioStability=100,Pe.current.extractionProgress=0,Pe.current.gameStatus="playing",u(86),p(73),m(100),v(0),L("playing"),(Z=r.current)==null||Z.clearAllEntities(),(le=r.current)==null||le.resetView(),(de=r.current)==null||de.spawnHazard(xn[E].id),Qe("RELOJ","Valores restablecidos al estado original del reloj: 86 BPM · 73% Batería · Escáner ⚠️ activo.","info")},D=xn[E]||xn[0],R=l>135;return H.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 select-none",children:[H.jsx("video",{ref:e,playsInline:!0,muted:!0,className:`absolute inset-0 w-full h-full object-cover scale-x-[-1] transition-opacity duration-500 ${ue&&O!=="virtual"?"opacity-100":"opacity-0 pointer-events-none"} ${O==="tactical"?"sepia hue-rotate-[130deg] saturate-200 contrast-125 brightness-75":"brightness-75 contrast-110"}`}),H.jsx("div",{className:`absolute inset-0 pointer-events-none mr-scanlines transition-colors duration-500 ${R?"shadow-[inset_0_0_110px_rgba(239,68,68,0.42)]":F?"shadow-[inset_0_0_110px_rgba(56,189,248,0.35)]":"shadow-[inset_0_0_90px_rgba(2,6,23,0.75)]"}`}),H.jsx("div",{ref:s,className:"absolute inset-0 w-full h-full z-10"}),H.jsxs("header",{className:"relative z-20 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 pointer-events-none",children:[H.jsxs("div",{className:"hud-glass rounded-xl px-3.5 py-2 flex items-center gap-3 pointer-events-auto",children:[H.jsxs("div",{className:"relative flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/40",children:[H.jsx(Ov,{className:"w-5 h-5 text-sky-400"}),H.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"}),H.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400"})]}),H.jsxs("div",{children:[H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsxs("h1",{className:"text-sm font-bold tracking-wider uppercase text-white",children:["ResWatch ",H.jsx("span",{className:"text-sky-400",children:"MR"})]}),H.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30",children:"Merged Reality 3D"})]}),H.jsx("p",{className:"text-[11px] text-slate-300",children:"Interacción Humano ↔ Reloj ↔ Entorno Generado"})]}),H.jsxs("button",{onClick:()=>z(Z=>!Z),className:"ml-1 px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-[11px] text-sky-300 border border-sky-500/30 flex items-center gap-1 transition",title:"Comparar con imagen de referencia del reloj",children:[H.jsx(Gv,{className:"w-3.5 h-3.5"}),H.jsx("span",{className:"hidden sm:inline",children:"Ref. Reloj"})]})]}),H.jsxs("div",{className:"hud-glass rounded-xl px-3 py-1.5 flex items-center gap-1.5 pointer-events-auto",children:[H.jsx(Vv,{className:"w-4 h-4 text-sky-400 mr-1 hidden md:inline"}),xn.map((Z,le)=>H.jsxs("button",{onClick:()=>wt(le),className:`px-2.5 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1 ${E===le?"bg-sky-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.6)]":"bg-slate-900/70 text-slate-300 hover:bg-slate-800"}`,children:[H.jsxs("span",{children:["S0",Z.id]}),H.jsx("span",{className:"hidden lg:inline",children:Z.id===1?"Ionizante":Z.id===2?"Térmico":Z.id===3?"Bio-Cuántico":"Portal 🏠"})]},Z.id))]}),H.jsxs("div",{className:"hud-glass rounded-xl px-3 py-1.5 flex items-center gap-2 pointer-events-auto",children:[H.jsxs("button",{onClick:tt,className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${ue?"bg-emerald-500 text-slate-950 shadow-[0_0_14px_rgba(16,185,129,0.6)]":"bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/40"}`,children:[ue?H.jsx(Bv,{className:"w-4 h-4"}):H.jsx(zv,{className:"w-4 h-4"}),H.jsx("span",{children:ue?"Cámara MR Activa":"Activar Cámara MR"})]}),ue&&H.jsxs("select",{value:O,onChange:Z=>{var de;const le=Z.target.value;se(le),(de=r.current)==null||de.setSectorTheme(D.id,ue,le)},className:"bg-slate-900/90 text-xs text-sky-200 border border-sky-500/30 rounded-lg px-2 py-1 outline-none",children:[H.jsx("option",{value:"hologram",children:"Fusión Real + Hologramas"}),H.jsx("option",{value:"tactical",children:"Visión Táctica Nocturna"}),H.jsx("option",{value:"virtual",children:"Fondo 3D + Tracking Cámara"})]}),H.jsx("button",{onClick:()=>{var le;const Z=!he;ne(Z),(le=r.current)==null||le.setWristMode(Z)},className:`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${he?"bg-sky-500/30 border-sky-400 text-white":"bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800"}`,title:"Alternar vista de muñeca o inspección 360°",children:he?"Vista Muñeca":"Vista 360°"}),H.jsx("button",{onClick:Ze,className:"p-1.5 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-300 border border-slate-700 transition",title:"Restablecer a 86 BPM y 73% Batería",children:H.jsx(jv,{className:"w-4 h-4"})}),H.jsx("button",{onClick:()=>{const Z=!Me;ii.muted=Z,Le(Z)},className:"p-1.5 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-300 border border-slate-700 transition",title:Me?"Activar sonido biométrico":"Silenciar",children:Me?H.jsx(Zv,{className:"w-4 h-4 text-rose-400"}):H.jsx($v,{className:"w-4 h-4 text-sky-400"})})]})]}),me&&H.jsxs("div",{className:"relative z-20 mx-auto max-w-xl mt-1 px-4 py-2 rounded-xl hud-glass text-xs text-amber-200 flex items-center justify-between",children:[H.jsx("span",{children:me}),H.jsx("button",{onClick:()=>we(null),className:"ml-3 px-2 py-0.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700",children:"Cerrar"})]}),H.jsxs("aside",{className:"absolute left-4 top-20 z-20 w-72 space-y-2.5 pointer-events-none hidden md:block",children:[H.jsxs("div",{className:`${R?"hud-glass-danger":"hud-glass"} rounded-2xl p-3.5 pointer-events-auto transition-colors`,children:[H.jsxs("div",{className:"flex items-center justify-between mb-2",children:[H.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5",children:[H.jsx(Yp,{className:`w-3.5 h-3.5 ${R?"text-rose-400 animate-ping":"text-rose-400"}`}),"Estado Biométrico Humano"]}),H.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["PTS: ",M]})]}),H.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[H.jsxs("div",{className:"bg-slate-900/75 rounded-xl p-2.5 border border-slate-800",children:[H.jsx("div",{className:"text-[10px] text-slate-400 uppercase",children:"Ritmo Cardíaco"}),H.jsxs("div",{className:"flex items-baseline gap-1 mt-0.5",children:[H.jsx("span",{className:`text-2xl font-extrabold font-mono ${R?"text-rose-400":"text-white"}`,children:l}),H.jsx("span",{className:"text-[11px] text-slate-400",children:"BPM"})]}),H.jsx("div",{className:"text-[10px] mt-0.5 text-sky-300",children:l>135?"⚠️ Taquicardia Térmica":l<95?"✓ Rango Óptimo (Base 86)":"Pulso Activo"})]}),H.jsxs("div",{className:"bg-slate-900/75 rounded-xl p-2.5 border border-slate-800",children:[H.jsx("div",{className:"text-[10px] text-slate-400 uppercase",children:"Carga ResWatch"}),H.jsxs("div",{className:"flex items-baseline gap-1 mt-0.5",children:[H.jsxs("span",{className:`text-2xl font-extrabold font-mono ${d<25?"text-rose-400":"text-sky-400"}`,children:[d,"%"]}),H.jsx("span",{className:"text-[11px] text-slate-400",children:"BAT"})]}),H.jsx("div",{className:"text-[10px] mt-0.5 text-emerald-300",children:ke||De.motionIntensity>32?"⚡ Cosecha Cinética":"Base inicial: 73%"})]})]}),H.jsxs("div",{className:"space-y-2 text-xs",children:[H.jsxs("div",{children:[H.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[H.jsx("span",{className:"text-slate-300",children:"Estabilidad Fisiológica"}),H.jsxs("span",{className:"font-mono text-emerald-400",children:[h,"%"]})]}),H.jsx("div",{className:"w-full h-2 rounded-full bg-slate-900 overflow-hidden",children:H.jsx("div",{className:`h-full transition-all duration-300 ${h>50?"bg-emerald-400":"bg-rose-500"}`,style:{width:`${h}%`}})})]}),H.jsxs("div",{children:[H.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[H.jsxs("span",{className:"text-slate-300 flex items-center gap-1",children:[H.jsx($p,{className:"w-3 h-3 text-sky-400"})," Enlace Portal a Casa (🏠)"]}),H.jsxs("span",{className:"font-mono text-sky-400",children:[_,"%"]})]}),H.jsx("div",{className:"w-full h-2 rounded-full bg-slate-900 overflow-hidden",children:H.jsx("div",{className:"h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300",style:{width:`${_}%`}})})]})]})]}),H.jsxs("div",{className:"hud-glass rounded-2xl p-3.5 pointer-events-auto",children:[H.jsxs("div",{className:"flex items-center justify-between mb-2",children:[H.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5",children:[H.jsx(Wv,{className:"w-3.5 h-3.5"}),"Sensor de Interacción Humana"]}),H.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300",children:ue?"Óptico en Vivo":"Simulador + 3D"})]}),ue?H.jsxs("div",{className:"space-y-2 mb-2.5",children:[H.jsxs("div",{className:"relative rounded-xl overflow-hidden border border-sky-500/40 bg-slate-950 h-28",children:[H.jsx("canvas",{ref:t,width:160,height:120,className:"w-full h-full object-cover"}),H.jsxs("div",{className:"absolute bottom-1.5 left-2 right-2 flex justify-between text-[10px] font-mono bg-slate-950/80 px-2 py-0.5 rounded",children:[H.jsxs("span",{className:"text-sky-300",children:["Mov. Cinético: ",De.motionIntensity,"%"]}),H.jsx("span",{className:"text-emerald-300",children:De.handDetected?"✋ Mano MR Activa":"Calma Vagal"})]})]}),H.jsxs("p",{className:"text-[11px] text-slate-300 leading-tight",children:["Mueve tu mano para desviar anomalías 3D y cargar ",H.jsx("b",{className:"text-sky-300",children:"🔋"}),", o quédate quieto para bajar ",H.jsx("b",{className:"text-emerald-300",children:"❤️ BPM"}),"."]})]}):H.jsx("p",{className:"text-[11px] text-slate-300 mb-2.5 leading-relaxed",children:"Haz clic directamente sobre los íconos de la pantalla 3D del reloj o usa las acciones fisiológicas del humano:"}),H.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[H.jsxs("button",{onMouseDown:()=>{Pe.current.simBreathActive=!0,ht(!0),ii.playCardioStabilize()},onMouseUp:()=>{Pe.current.simBreathActive=!1,ht(!1)},onMouseLeave:()=>{Pe.current.simBreathActive=!1,ht(!1)},onClick:()=>nt("heart"),className:`p-2 rounded-xl border text-left transition flex flex-col justify-between ${bt||$?"bg-emerald-500/30 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]":"bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-slate-200"}`,children:[H.jsxs("div",{className:"flex items-center justify-between",children:[H.jsx(Kv,{className:"w-4 h-4 text-emerald-400"}),H.jsx("span",{className:"text-[10px] font-mono text-emerald-300",children:"-BPM"})]}),H.jsxs("div",{className:"mt-1",children:[H.jsx("div",{className:"text-xs font-semibold",children:"Respirar / Calmar"}),H.jsx("div",{className:"text-[10px] text-slate-400",children:"Estabiliza ❤️ hacia 86"})]})]}),H.jsxs("button",{onMouseDown:()=>{Pe.current.simKineticActive=!0,et(!0),ii.playKineticCharge()},onMouseUp:()=>{Pe.current.simKineticActive=!1,et(!1)},onMouseLeave:()=>{Pe.current.simKineticActive=!1,et(!1)},onClick:()=>nt("battery"),className:`p-2 rounded-xl border text-left transition flex flex-col justify-between ${ke?"bg-sky-500/30 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]":"bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-slate-200"}`,children:[H.jsxs("div",{className:"flex items-center justify-between",children:[H.jsx(Qv,{className:"w-4 h-4 text-sky-400"}),H.jsx("span",{className:"text-[10px] font-mono text-sky-300",children:"+🔋 BAT"})]}),H.jsxs("div",{className:"mt-1",children:[H.jsx("div",{className:"text-xs font-semibold",children:"Agitar / Cinética"}),H.jsx("div",{className:"text-[10px] text-slate-400",children:"Genera carga 🔋 (+BPM)"})]})]})]})]})]}),H.jsxs("aside",{className:"absolute right-4 top-20 z-20 w-80 space-y-2.5 pointer-events-none hidden lg:block",children:[H.jsxs("div",{className:"hud-glass rounded-2xl p-3.5 pointer-events-auto",children:[H.jsxs("div",{className:"flex items-center justify-between mb-1",children:[H.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5",children:[H.jsx(qv,{className:"w-3.5 h-3.5"}),"Entorno Generado Activo"]}),H.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30",children:["Amenazas: ",((te=r.current)==null?void 0:te.getActiveHazardCount())||0]})]}),H.jsx("h2",{className:"text-sm font-bold text-white",children:D.name}),H.jsx("p",{className:"text-[11px] text-sky-300 mb-1.5",children:D.subtitle}),H.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed bg-slate-900/75 p-2 rounded-xl border border-slate-800",children:D.envHazardDesc})]}),H.jsxs("div",{className:"hud-glass rounded-2xl p-3.5 pointer-events-auto",children:[H.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-2",children:"Bitácora Reloj ↔ Humano ↔ Entorno"}),H.jsx("div",{className:"space-y-1.5 max-h-52 overflow-y-auto pr-1",children:Dt.map(Z=>H.jsxs("div",{className:`text-[11px] p-2 rounded-xl border leading-snug ${Z.tone==="danger"?"bg-rose-950/60 border-rose-500/40 text-rose-200":Z.tone==="warn"?"bg-amber-950/50 border-amber-500/40 text-amber-200":Z.tone==="success"?"bg-emerald-950/50 border-emerald-500/40 text-emerald-200":"bg-slate-900/75 border-slate-800 text-slate-200"}`,children:[H.jsxs("div",{className:"flex items-center justify-between text-[10px] opacity-75 mb-0.5 font-mono",children:[H.jsx("span",{className:"font-bold",children:Z.source}),H.jsx("span",{children:Z.time})]}),H.jsx("div",{children:Z.text})]},Z.id))})]})]}),(P||V)&&H.jsx("div",{className:"fixed bottom-28 left-1/2 -translate-x-1/2 z-30 pointer-events-none",children:H.jsxs("div",{className:"hud-glass px-4 py-2 rounded-full text-xs font-medium text-white flex items-center gap-2 shadow-xl border border-sky-400/50",children:[H.jsx("span",{className:"w-2 h-2 rounded-full bg-sky-400 animate-ping"}),P==="heart"&&H.jsxs("span",{children:[H.jsxs("b",{children:["❤️ Sensor Cardíaco (",l," BPM):"]})," Clic para activar Sincronización Cardio-Vagal y estabilizar pulso"]}),P==="alert"&&H.jsxs("span",{children:[H.jsx("b",{children:"⚠️ Escáner de Amenazas:"})," Clic para emitir Onda de Choque EMP al entorno 3D"]}),P==="battery"&&H.jsxs("span",{children:[H.jsxs("b",{children:["🔋 Gestión Energética (",d,"%):"]})," Clic para absorber cristales cinéticos del entorno"]}),P==="home"&&H.jsxs("span",{children:[H.jsxs("b",{children:["🏠 Baliza a Casa (",_,"%):"]})," Clic para desplegar Domo Seguro MR y abrir portal"]}),V==="hazard"&&H.jsxs("span",{className:"text-amber-300",children:[H.jsx("b",{children:"☄️ Anomalía del Entorno:"})," Haz clic para neutralizar antes de que altere el pulso del humano"]}),V==="energy"&&H.jsxs("span",{className:"text-emerald-300",children:[H.jsx("b",{children:"💎 Cristal Bio-Cinético:"})," Haz clic para recolectar energía hacia el reloj"]})]})}),H.jsx("footer",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-3xl pointer-events-auto",children:H.jsxs("div",{className:"hud-glass rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-2",children:[H.jsxs("button",{onClick:()=>nt("heart"),onMouseEnter:()=>{Pe.current.hoveredZone="heart",T("heart")},onMouseLeave:()=>{Pe.current.hoveredZone=null,T(null)},className:`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${P==="heart"||$?"bg-emerald-500/25 border-emerald-400 text-white shadow-[0_0_16px_rgba(16,185,129,0.35)]":"bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100"}`,children:[H.jsx("div",{className:"p-2 rounded-lg bg-rose-500/20 border border-rose-400/40 text-rose-400",children:H.jsx(Yp,{className:"w-5 h-5 fill-current"})}),H.jsxs("div",{className:"text-left",children:[H.jsxs("div",{className:"text-xs font-bold flex items-center gap-1.5",children:[H.jsxs("span",{children:["Pulso ",l," BPM"]}),H.jsx("kbd",{className:"text-[10px] px-1 bg-slate-800 rounded text-slate-400",children:"1"})]}),H.jsx("div",{className:"text-[10px] text-slate-300",children:"Estabilizar Humano"})]})]}),H.jsxs("button",{onClick:()=>nt("alert"),onMouseEnter:()=>{Pe.current.hoveredZone="alert",T("alert")},onMouseLeave:()=>{Pe.current.hoveredZone=null,T(null)},className:`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${P==="alert"?"bg-amber-500/25 border-amber-400 text-white shadow-[0_0_16px_rgba(245,158,11,0.35)]":"bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100"}`,children:[H.jsx("div",{className:"p-2 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300",children:H.jsx(Yv,{className:"w-5 h-5"})}),H.jsxs("div",{className:"text-left",children:[H.jsxs("div",{className:"text-xs font-bold flex items-center gap-1.5",children:[H.jsx("span",{children:"Alerta / EMP"}),H.jsx("kbd",{className:"text-[10px] px-1 bg-slate-800 rounded text-slate-400",children:"2"})]}),H.jsx("div",{className:"text-[10px] text-slate-300",children:"Despejar Entorno"})]})]}),H.jsxs("button",{onClick:()=>nt("battery"),onMouseEnter:()=>{Pe.current.hoveredZone="battery",T("battery")},onMouseLeave:()=>{Pe.current.hoveredZone=null,T(null)},className:`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${P==="battery"?"bg-sky-500/25 border-sky-400 text-white shadow-[0_0_16px_rgba(56,189,248,0.35)]":"bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100"}`,children:[H.jsx("div",{className:"p-2 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300",children:H.jsx(kv,{className:"w-5 h-5"})}),H.jsxs("div",{className:"text-left",children:[H.jsxs("div",{className:"text-xs font-bold flex items-center gap-1.5",children:[H.jsxs("span",{children:["Batería ",d,"%"]}),H.jsx("kbd",{className:"text-[10px] px-1 bg-slate-800 rounded text-slate-400",children:"3"})]}),H.jsx("div",{className:"text-[10px] text-slate-300",children:"Cosecha Cinética"})]})]}),H.jsxs("button",{onClick:()=>nt("home"),onMouseEnter:()=>{Pe.current.hoveredZone="home",T("home")},onMouseLeave:()=>{Pe.current.hoveredZone=null,T(null)},className:`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${P==="home"||F?"bg-sky-500/30 border-sky-300 text-white shadow-[0_0_18px_rgba(56,189,248,0.45)]":"bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100"}`,children:[H.jsx("div",{className:"p-2 rounded-lg bg-sky-400/20 border border-sky-300/50 text-sky-300",children:F?H.jsx(Xv,{className:"w-5 h-5"}):H.jsx($p,{className:"w-5 h-5"})}),H.jsxs("div",{className:"text-left",children:[H.jsxs("div",{className:"text-xs font-bold flex items-center gap-1.5",children:[H.jsxs("span",{children:["Casa (",_,"%)"]}),H.jsx("kbd",{className:"text-[10px] px-1 bg-slate-800 rounded text-slate-400",children:"4"})]}),H.jsx("div",{className:"text-[10px] text-slate-300",children:"Domo y Portal MR"})]})]})]})}),pe&&H.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4",children:H.jsxs("div",{className:"hud-glass rounded-2xl max-w-md w-full p-5 border border-sky-400/40 space-y-3",children:[H.jsxs("div",{className:"flex items-center justify-between",children:[H.jsx("h3",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"Reloj Adjunto de Referencia vs Modelo 3D Interactivo"}),H.jsx("button",{onClick:()=>z(!1),className:"px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-slate-700",children:"Cerrar"})]}),H.jsx("img",{src:"./assets/watch-reference.jpg",onError:Z=>{const le=Z.currentTarget;le.dataset.fallback||(le.dataset.fallback="1",le.src="./public/assets/watch-reference.jpg")},alt:"Reloj ResWatch Original",className:"w-full h-56 object-contain rounded-xl bg-white p-2"}),H.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["El modelo 3D interactivo carga la geometría ",H.jsx("code",{className:"text-sky-300",children:"base.stl"})," del repositorio e integra los 4 elementos del reloj original (",H.jsx("b",{className:"text-white",children:"73% 🔋"}),", ",H.jsx("b",{className:"text-white",children:"⚠️"}),", ",H.jsx("b",{className:"text-white",children:"❤️ 86"})," y ",H.jsx("b",{className:"text-white",children:"🏠"}),") como zonas táctiles en 3D que responden al humano y transforman el entorno."]})]})}),x==="extracted"&&H.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4",children:H.jsxs("div",{className:"hud-glass rounded-3xl max-w-lg w-full p-6 text-center border border-emerald-400/50 space-y-4",children:[H.jsx("div",{className:"mx-auto w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300",children:H.jsx(Hv,{className:"w-8 h-8"})}),H.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"¡Extracción a Casa Completada!"}),H.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Has sincronizado los signos vitales del humano con el ",H.jsx("b",{className:"text-sky-300",children:"ResWatch MR"}),", neutralizado las anomalías de los 4 sectores y desplegado el portal dimensional ",H.jsx("b",{className:"text-emerald-300",children:"🏠 Casa"}),"."]}),H.jsxs("div",{className:"grid grid-cols-3 gap-2 bg-slate-900/80 p-3 rounded-2xl border border-slate-800",children:[H.jsxs("div",{children:[H.jsx("div",{className:"text-[10px] text-slate-400",children:"PULSO FINAL"}),H.jsxs("div",{className:"text-lg font-bold text-emerald-400",children:[l," BPM"]})]}),H.jsxs("div",{children:[H.jsx("div",{className:"text-[10px] text-slate-400",children:"BATERÍA"}),H.jsxs("div",{className:"text-lg font-bold text-sky-400",children:[d,"%"]})]}),H.jsxs("div",{children:[H.jsx("div",{className:"text-[10px] text-slate-400",children:"PUNTUACIÓN"}),H.jsx("div",{className:"text-lg font-bold text-white",children:M})]})]}),H.jsxs("div",{className:"flex justify-center gap-3",children:[H.jsx("button",{onClick:()=>wt(0),className:"px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Jugar Nueva Misión MR"}),H.jsx("button",{onClick:()=>{Pe.current.gameStatus="playing",Pe.current.extractionProgress=50,L("playing"),v(50)},className:"px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition",children:"Seguir en Modo Libre"})]})]})})]})}Nv.createRoot(document.getElementById("root")).render(H.jsx(Av.StrictMode,{children:H.jsx(_E,{})}));
