!function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;a.push([4,1]),n()}([function(e,t){},,,,function(e,t,n){"use strict";n.r(t);n(1),n(2);const r=async(e,t)=>{try{return(await fetch(e,t)).json()}catch(e){console.error(e)}};function o(e,t){document.getElementById(e).appendChild(t)}n(3);var a=function(e,t,n,r){const o=((e,t)=>{const n=new Image;return n.src=e,n.onerror=()=>{n.src!==t&&(n.src=t)},n})(e,t);return o.setAttribute("alt",n),o.classList.add(...r),o};const c=new Map;c.set("facebook.com","fab fa-facebook-f"),c.set("twitter.com","fab fa-twitter"),c.set("linkedin.com","fab fa-linkedin-in"),c.set("google.com","fab fa-google-plus-g"),c.set("dribble.com","fab fa-dribbble");var i=function(e,t){const n=document.createElement("ul");return e.forEach(e=>{n.appendChild(function(e,t){const n=document.createElement("li"),r=document.createElement("a");r.setAttribute("href",e);const o=document.createElement("i"),{hostname:a}=new URL(e);return c.has(a)?o.setAttribute("class",c.get(new URL(e).hostname)):o.classList.add("fab","default"),n.appendChild(r),r.appendChild(o),n}(e))}),n.classList.add(...t),n},s=function(e){const t=document.createElement("div"),n=a(e.userAvatar,"/assets/images/Layer 43.png","profile picture",["profilePictureContainer"]);return t.classList.add("cardListItem"),t.appendChild(n),t.appendChild(function(e){const t=document.createElement("div");return t.appendChild(function({name:e,surname:t}){const n=document.createElement("h4");return n.classList.add("cardsFullName"),n.innerText=`${e} ${t}`,n}(e)),t.appendChild(function({position:e}){const t=document.createElement("p");return t.classList.add("cardsWork"),t.innerText=`${e}`,t}(e)),t.appendChild(function({info:e}){const t=document.createElement("p");return t.classList.add("cardsAboutMe"),t.innerText=`${e}`,t}(e)),t}(e)),t.appendChild(i(e.contacts,["social-icons"])),t},u=function(e){const t=document.getElementById("cardContainer");return e.forEach(e=>{t.appendChild(function(e){const t=document.createElement("div");return t.appendChild(s(e)),t}(e))}),t};r("./data/employees.json").then(e=>{Array.isArray(e)&&o("cardsList",u(e))});var d=n(0),l=n.n(d);r("/data/comments.json").then(e=>{o("sliderContainer",l()(e))})}]);