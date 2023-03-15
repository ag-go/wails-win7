(()=>{var j=Object.defineProperty;var d=(e,t)=>{for(var n in t)j(e,n,{get:t[n],enumerable:!0})};var h={};d(h,{SetText:()=>V,Text:()=>Z});var K=window.location.origin+"/wails/runtime";function O(e,t){let n=new URL(K);return n.searchParams.append("method",e),t&&n.searchParams.append("args",JSON.stringify(t)),new Promise((r,o)=>{fetch(n).then(i=>{if(i.ok)return i.headers.get("Content-Type")&&i.headers.get("Content-Type").indexOf("application/json")!==-1?i.json():i.text();o(Error(i.statusText))}).then(i=>r(i)).catch(i=>o(i))})}function l(e,t){return!t||t===-1?function(n,r){return O(e+"."+n,r)}:function(n,r){return r=r||{},r.windowID=t,O(e+"."+n,r)}}var k=l("clipboard");function V(e){return k("SetText",{text:e})}function Z(){return k("Text")}var S={};d(S,{Hide:()=>$,Quit:()=>te,Show:()=>ee});var C=l("application");function $(){return C("Hide")}function ee(){return C("Show")}function te(){return C("Quit")}var M={};d(M,{Log:()=>re});var ne=l("log");function re(e){return ne("Log",e)}var v={};d(v,{GetAll:()=>oe,GetCurrent:()=>le,GetPrimary:()=>ie});var b=l("screens");function oe(){return b("GetAll")}function ie(){return b("GetPrimary")}function le(){return b("GetCurrent")}var ae="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var p=(e=21)=>{let t="",n=e;for(;n--;)t+=ae[Math.random()*64|0];return t};var ue=l("call"),u=new Map;function ce(){let e;do e=p();while(u.has(e));return e}function A(e,t,n){let r=u.get(e);r&&(n?r.resolve(JSON.parse(t)):r.resolve(t),u.delete(e))}function R(e,t){let n=u.get(e);n&&(n.reject(t),u.delete(e))}function se(e,t){return new Promise((n,r)=>{let o=ce();t=t||{},t["call-id"]=o,u.set(o,{resolve:n,reject:r}),ue(e,t).catch(i=>{r(i),u.delete(o)})})}function T(e){return se("Call",e)}function W(e){let t=l("window",e);return{Center:()=>t("Center"),SetTitle:n=>t("SetTitle",{title:n}),Fullscreen:()=>t("Fullscreen"),UnFullscreen:()=>t("UnFullscreen"),SetSize:(n,r)=>t("SetSize",{width:n,height:r}),Size:()=>t("Size"),SetMaxSize:(n,r)=>t("SetMaxSize",{width:n,height:r}),SetMinSize:(n,r)=>t("SetMinSize",{width:n,height:r}),SetAlwaysOnTop:n=>t("SetAlwaysOnTop",{alwaysOnTop:n}),SetPosition:(n,r)=>t("SetPosition",{x:n,y:r}),Position:()=>t("Position"),Screen:()=>t("Screen"),Hide:()=>t("Hide"),Maximise:()=>t("Maximise"),Show:()=>t("Show"),Close:()=>t("Close"),ToggleMaximise:()=>t("ToggleMaximise"),UnMaximise:()=>t("UnMaximise"),Minimise:()=>t("Minimise"),UnMinimise:()=>t("UnMinimise"),SetBackgroundColour:(n,r,o,i)=>t("SetBackgroundColour",{r:n,g:r,b:o,a:i})}}var fe=l("events"),E=class{constructor(t,n,r){this.eventName=t,this.maxCallbacks=r||-1,this.Callback=o=>(n(o),this.maxCallbacks===-1?!1:(this.maxCallbacks-=1,this.maxCallbacks===0))}};var a=new Map;function w(e,t,n){let r=a.get(e)||[],o=new E(e,t,n);return r.push(o),a.set(e,r),()=>me(o)}function y(e,t){return w(e,t,-1)}function P(e,t){return w(e,t,1)}function me(e){let t=e.eventName,n=a.get(t).filter(r=>r!==e);n.length===0?a.delete(t):a.set(t,n)}function D(e){console.log("dispatching event: ",{event:e});let t=a.get(e.name);if(t){let n=[];t.forEach(r=>{r.Callback(e)&&n.push(r)}),n.length>0&&(t=t.filter(r=>!n.includes(r)),t.length===0?a.delete(e.name):a.set(e.name,t))}}function F(e,...t){[e,...t].forEach(r=>{a.delete(r)})}function U(){a.clear()}function x(e){return fe("Emit",e)}var de=l("dialog"),c=new Map;function pe(){let e;do e=p();while(c.has(e));return e}function z(e,t,n){let r=c.get(e);r&&(n?r.resolve(JSON.parse(t)):r.resolve(t),c.delete(e))}function I(e,t){let n=c.get(e);n&&(n.reject(t),c.delete(e))}function s(e,t){return new Promise((n,r)=>{let o=pe();t=t||{},t["dialog-id"]=o,c.set(o,{resolve:n,reject:r}),de(e,t).catch(i=>{r(i),c.delete(o)})})}function N(e){return s("Info",e)}function G(e){return s("Warning",e)}function Q(e){return s("Error",e)}function m(e){return s("Question",e)}function B(e){return s("OpenFile",e)}function H(e){return s("SaveFile",e)}var we=l("contextmenu");function xe(e,t,n,r){return we("OpenContextMenu",{id:e,x:t,y:n,data:r})}function Y(e){e?window.addEventListener("contextmenu",J):window.removeEventListener("contextmenu",J)}function J(e){q(e.target,e)}function q(e,t){let n=e.getAttribute("data-contextmenu");if(n)t.preventDefault(),xe(n,t.clientX,t.clientY,e.getAttribute("data-contextmenu-data"));else{let r=e.parentElement;r&&q(r,t)}}function _(e){let t=x({name:e})}function ge(){let e=document.querySelectorAll("[data-wml-event]");for(let t=0;t<e.length;t++){let n=e[t],r=n.getAttribute("data-wml-event"),o=n.getAttribute("data-wml-confirm"),i=n.getAttribute("data-wml-trigger")||"click",f=function(){if(o){m({Title:"Confirm",Message:o,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(g){g!=="No"&&_(r)});return}_(r)};n.removeEventListener(i,f),n.addEventListener(i,f)}}function X(e){wails.Window[e]===void 0&&console.log("Window method "+e+" not found"),wails.Window[e]()}function he(){let e=document.querySelectorAll("[data-wml-window]");for(let t=0;t<e.length;t++){let n=e[t],r=n.getAttribute("data-wml-window"),o=n.getAttribute("data-wml-confirm"),i=n.getAttribute("data-wml-trigger")||"click",f=function(){if(o){m({Title:"Confirm",Message:o,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(g){g!=="No"&&X(r)});return}X(r)};n.removeEventListener(i,f),n.addEventListener(i,f)}}function L(){ge(),he()}window.wails={...Ce(-1)};window._wails={dialogCallback:z,dialogErrorCallback:I,dispatchCustomEvent:D,callCallback:A,callErrorCallback:R};function Ce(e){return{Clipboard:{...h},Application:{...S},Log:M,Screens:v,Call:T,WML:{Reload:L},Dialog:{Info:N,Warning:G,Error:Q,Question:m,OpenFile:B,SaveFile:H},Events:{Emit:x,On:y,Once:P,OnMultiple:w,Off:F,OffAll:U},Window:W(e)}}console.log("Wails v3.0.0 Debug Mode Enabled");Y(!0);document.addEventListener("DOMContentLoaded",function(e){L()});})();
