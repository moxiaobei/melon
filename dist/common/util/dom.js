/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","../../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("../../babelHelpers"));else{var r={exports:{}};t(r.exports,e.babelHelpers),e.dom=r.exports}}(this,function(exports,e){"use strict";function t(e){var t=e&&e.ownerDocument||document,r=t.compatMode;return!r||"CSS1Compat"===r?t.documentElement:t.body}exports.on=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r);else e.attachEvent("on"+t,r)},exports.off=function(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r);else e.detachEvent("on"+t,r)},exports.contains=function(e,t){return e.contains(t)},exports.getScrollLeft=function(){return window.pageXOffset||t().scrollLeft},exports.getScrollTop=function(){return window.pageYOffset||t().scrollTop},exports.getClientHeight=function(){return t().clientHeight},exports.getClientWidth=function(){return t().clientWidth},exports.getPosition=function(e){var t=e.getBoundingClientRect(),r=document.documentElement,n=document.body,i=r.clientTop||n.clientTop||0,o=r.clientLeft||n.clientLeft||0,a=window.pageYOffset||r.scrollTop,l=window.pageXOffset||r.scrollLeft;return{left:parseFloat(t.left)+l-o,top:parseFloat(t.top)+a-i,width:t.width,height:t.height}},exports.hasClass=function(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},exports.addClass=function(e,t){if(!this.hasClass(e,t))e.className+=" "+t},exports.removeClass=function(e,t){if(this.hasClass(e,t)){var r=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(r," ")}}});