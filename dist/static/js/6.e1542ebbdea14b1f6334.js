webpackJsonp([6],{"7NcZ":function(t,e){},GDvs:function(t,e){},Usbo:function(t,e){},kTWP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("TrLn"),n=i("looZ"),o=i("rXpJ"),r=(i("rwyn"),"undefined"!=typeof window),h=r?window:{},s="cropper-hidden",c=h.PointerEvent?"pointerdown":"touchstart mousedown",d=h.PointerEvent?"pointermove":"touchmove mousemove",l=h.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",p=/^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,m=/^data:/,u=/^data:image\/jpeg;base64,/,g=/^(?:img|canvas)$/i,f={viewMode:0,dragMode:"crop",initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},b=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),x=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)},y=Number.isNaN||h.isNaN;function C(t){return"number"==typeof t&&!y(t)}function M(t){return void 0===t}function D(t){return"object"===(void 0===t?"undefined":v(t))&&null!==t}var k=Object.prototype.hasOwnProperty;function B(t){if(!D(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&k.call(i,"isPrototypeOf")}catch(t){return!1}}function T(t){return"function"==typeof t}function E(t,e){if(t&&T(e))if(Array.isArray(t)||C(t.length)){var i=t.length,a=void 0;for(a=0;a<i&&!1!==e.call(t,t[a],a,t);a+=1);}else D(t)&&Object.keys(t).forEach(function(i){e.call(t,t[i],i,t)});return t}var N=Object.assign||function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];return D(t)&&i.length>0&&i.forEach(function(e){D(e)&&Object.keys(e).forEach(function(i){t[i]=e[i]})}),t},W=/\.\d*(?:0|9){12}\d*$/i;function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return W.test(t)?Math.round(t*e)/e:t}var H=/^(?:width|height|left|top|marginLeft|marginTop)$/;function R(t,e){var i=t.style;E(e,function(t,e){H.test(e)&&C(t)&&(t+="px"),i[e]=t})}function z(t,e){if(e)if(C(t.length))E(t,function(t){z(t,e)});else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className=i+" "+e):t.className=e}}function O(t,e){e&&(C(t.length)?E(t,function(t){O(t,e)}):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function X(t,e,i){e&&(C(t.length)?E(t,function(t){X(t,e,i)}):i?z(t,e):O(t,e))}var Y=/([a-z\d])([A-Z])/g;function A(t){return t.replace(Y,"$1-$2").toLowerCase()}function S(t,e){return D(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-"+A(e))}function U(t,e,i){D(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-"+A(e),i)}function I(t,e){if(D(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-"+A(e))}var _=/\s\s*/,P=function(){var t=!1;if(r){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});h.addEventListener("test",i,a),h.removeEventListener("test",i,a)}return t}();function j(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(_).forEach(function(e){if(!P){var o=t.listeners;o&&o[e]&&o[e][i]&&(n=o[e][i],delete o[e][i],0===Object.keys(o[e]).length&&delete o[e],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(e,n,a)})}function $(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(_).forEach(function(e){if(a.once&&!P){var o=t.listeners,r=void 0===o?{}:o;n=function(){for(var o=arguments.length,h=Array(o),s=0;s<o;s++)h[s]=arguments[s];delete r[e][i],t.removeEventListener(e,n,a),i.apply(t,h)},r[e]||(r[e]={}),r[e][i]&&t.removeEventListener(e,r[e][i],a),r[e][i]=n,t.listeners=r}t.addEventListener(e,n,a)})}function q(t,e,i){var a=void 0;return T(Event)&&T(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function F(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Z=h.location,Q=/^(https?:)\/\/([^:/?#]+):?(\d*)/i;function J(t){var e=t.match(Q);return e&&(e[1]!==Z.protocol||e[2]!==Z.hostname||e[3]!==Z.port)}function V(t){var e="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+e}function G(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];C(n)&&0!==n&&r.push("translateX("+n+"px)"),C(o)&&0!==o&&r.push("translateY("+o+"px)"),C(e)&&0!==e&&r.push("rotate("+e+"deg)"),C(i)&&1!==i&&r.push("scaleX("+i+")"),C(a)&&1!==a&&r.push("scaleY("+a+")");var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function K(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:N({startX:i,startY:a},n)}var tt=Number.isFinite||h.isFinite;function et(t){var e=t.aspectRatio,i=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=function(t){return tt(t)&&t>0};if(o(a)&&o(i)){var r=i*e;"contain"===n&&r>a||"cover"===n&&r<a?i=a/e:a=i*e}else o(a)?i=a/e:o(i)&&(a=i*e);return{width:a,height:i}}var it=String.fromCharCode;var at=/^data:.*,/;function nt(t){var e=new DataView(t),i=void 0,a=void 0,n=void 0,o=void 0;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var r=e.byteLength,h=2;h<r;){if(255===e.getUint8(h)&&225===e.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===function(t,e,i){var a="",n=void 0;for(i+=e,n=e;n<i;n+=1)a+=it(t.getUint8(n));return a}(e,n+4,4)){var c=e.getUint16(s);if(((a=18761===c)||19789===c)&&42===e.getUint16(s+2,a)){var d=e.getUint32(s+4,a);d>=8&&(o=s+d)}}}if(o){var l=e.getUint16(o,a),p=void 0,m=void 0;for(m=0;m<l;m+=1)if(p=o+12*m+2,274===e.getUint16(p,a)){p+=8,i=e.getUint16(p,a),e.setUint16(p,1,a);break}}return i}var ot={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;z(a,s),O(t,s);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};this.containerData=n,R(a,{width:n.width,height:n.height}),z(t,s),O(a,s)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};c.left=(t.width-h)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=N({},e),this.initialCanvasData=N({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,d=Number(i.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===r&&(d*h>c?c=d*h:d=c/h)):r>0&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&(c=o.width,(d=o.height)*h>c?c=d*h:d=c/h));var l=et({aspectRatio:h,width:c,height:d});c=l.width,d=l.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r>(s?0:1)){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return a>90?{width:s,height:h}:{width:h,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,R(this.canvas,N({width:i.width,height:i.height},G({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);N(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),R(this.image,N({width:i.width,height:i.height},G(N({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=N({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,d=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,l=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?c*h>s?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),l*h>d?l=d/h:d=l*h),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,l),o.maxWidth=d,o.maxHeight=l}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&U(this.face,"cropperAction",i.width>=e.width&&i.height>=e.height?"move":"all"),R(this.cropBox,N({width:i.width,height:i.height},G({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),q(this.element,"crop",this.getData())}},rt={initPreview:function(){var t=this.crossOrigin,e=this.options.preview,i=t?this.crossOriginUrl:this.url,a=document.createElement("img");if(t&&(a.crossOrigin=t),a.src=i,this.viewBox.appendChild(a),this.viewBoxImage=a,e){var n=e;"string"==typeof e?n=this.element.ownerDocument.querySelectorAll(e):e.querySelector&&(n=[e]),this.previews=n,E(n,function(e){var a=document.createElement("img");U(e,"cropperPreview",{width:e.offsetWidth,height:e.offsetHeight,html:e.innerHTML}),t&&(a.crossOrigin=t),a.src=i,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',e.innerHTML="",e.appendChild(a)})}},resetPreview:function(){E(this.previews,function(t){var e=S(t,"cropperPreview");R(t,{width:e.width,height:e.height}),t.innerHTML=e.html,I(t,"cropperPreview")})},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,a=i.width,n=i.height,o=t.width,r=t.height,h=i.left-e.left-t.left,s=i.top-e.top-t.top;this.cropped&&!this.disabled&&(R(this.viewBoxImage,N({width:o,height:r},G(N({translateX:-h,translateY:-s},t)))),E(this.previews,function(e){var i=S(e,"cropperPreview"),c=i.width,d=i.height,l=c,p=d,m=1;a&&(p=n*(m=c/a)),n&&p>d&&(l=a*(m=d/n),p=d),R(e,{width:l,height:p}),R(e.getElementsByTagName("img")[0],N({width:o*m,height:r*m},G(N({translateX:-h*m,translateY:-s*m},t))))}))}},ht={bind:function(){var t=this.element,e=this.options,i=this.cropper;T(e.cropstart)&&$(t,"cropstart",e.cropstart),T(e.cropmove)&&$(t,"cropmove",e.cropmove),T(e.cropend)&&$(t,"cropend",e.cropend),T(e.crop)&&$(t,"crop",e.crop),T(e.zoom)&&$(t,"zoom",e.zoom),$(i,c,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&$(i,"wheel mousewheel DOMMouseScroll",this.onWheel=this.wheel.bind(this)),e.toggleDragModeOnDblclick&&$(i,"dblclick",this.onDblclick=this.dblclick.bind(this)),$(t.ownerDocument,d,this.onCropMove=this.cropMove.bind(this)),$(t.ownerDocument,l,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&$(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;T(e.cropstart)&&j(t,"cropstart",e.cropstart),T(e.cropmove)&&j(t,"cropmove",e.cropmove),T(e.cropend)&&j(t,"cropend",e.cropend),T(e.crop)&&j(t,"crop",e.crop),T(e.zoom)&&j(t,"zoom",e.zoom),j(i,c,this.onCropStart),e.zoomable&&e.zoomOnWheel&&j(i,"wheel mousewheel DOMMouseScroll",this.onWheel),e.toggleDragModeOnDblclick&&j(i,"dblclick",this.onDblclick),j(t.ownerDocument,d,this.onCropMove),j(t.ownerDocument,l,this.onCropEnd),e.responsive&&j(window,"resize",this.onResize)}},st={resize:function(){var t=this.options,e=this.container,i=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||i.width<=a||i.height<=n)){var o=e.offsetWidth/i.width;if(1!==o||e.offsetHeight!==i.height){var r=void 0,h=void 0;t.restore&&(r=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(E(r,function(t,e){r[e]=t*o})),this.setCropBoxData(E(h,function(t,e){h[e]=t*o})))}}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((t=this.dragBox,e="cropper-crop",(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?"move":"crop"))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){if(!this.disabled){var e=this.options,i=this.pointers,a=void 0;t.changedTouches?E(t.changedTouches,function(t){i[t.identifier]=K(t)}):i[t.pointerId||0]=K(t),a=Object.keys(i).length>1&&e.zoomable&&e.zoomOnTouch?"zoom":S(t.target,"cropperAction"),p.test(a)&&!1!==q(this.element,"cropstart",{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,"crop"===a&&(this.cropping=!0,z(this.dragBox,"cropper-modal")))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==q(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?E(t.changedTouches,function(t){N(i[t.identifier],K(t,!0))}):N(i[t.pointerId||0],K(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?E(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,X(this.dragBox,"cropper-modal",this.cropped&&this.options.modal)),q(this.element,"cropend",{originalEvent:t,action:e}))}}},ct={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,r=this.action,h=e.aspectRatio,c=n.left,d=n.top,l=n.width,p=n.height,m=c+l,u=d+p,g=0,f=0,v=a.width,w=a.height,b=!0,x=void 0;!h&&t.shiftKey&&(h=l&&p?l/p:1),this.limited&&(g=n.minLeft,f=n.minTop,v=g+Math.min(a.width,i.width,i.left+i.width),w=f+Math.min(a.height,i.height,i.top+i.height));var y=o[Object.keys(o)[0]],C={x:y.endX-y.startX,y:y.endY-y.startY},M=function(t){switch(t){case"e":m+C.x>v&&(C.x=v-m);break;case"w":c+C.x<g&&(C.x=g-c);break;case"n":d+C.y<f&&(C.y=f-d);break;case"s":u+C.y>w&&(C.y=w-u)}};switch(r){case"all":c+=C.x,d+=C.y;break;case"e":if(C.x>=0&&(m>=v||h&&(d<=f||u>=w))){b=!1;break}M("e"),(l+=C.x)<0&&(r="w",c-=l=-l),h&&(p=l/h,d+=(n.height-p)/2);break;case"n":if(C.y<=0&&(d<=f||h&&(c<=g||m>=v))){b=!1;break}M("n"),p-=C.y,d+=C.y,p<0&&(r="s",d-=p=-p),h&&(l=p*h,c+=(n.width-l)/2);break;case"w":if(C.x<=0&&(c<=g||h&&(d<=f||u>=w))){b=!1;break}M("w"),l-=C.x,c+=C.x,l<0&&(r="e",c-=l=-l),h&&(p=l/h,d+=(n.height-p)/2);break;case"s":if(C.y>=0&&(u>=w||h&&(c<=g||m>=v))){b=!1;break}M("s"),(p+=C.y)<0&&(r="n",d-=p=-p),h&&(l=p*h,c+=(n.width-l)/2);break;case"ne":if(h){if(C.y<=0&&(d<=f||m>=v)){b=!1;break}M("n"),p-=C.y,d+=C.y,l=p*h}else M("n"),M("e"),C.x>=0?m<v?l+=C.x:C.y<=0&&d<=f&&(b=!1):l+=C.x,C.y<=0?d>f&&(p-=C.y,d+=C.y):(p-=C.y,d+=C.y);l<0&&p<0?(r="sw",d-=p=-p,c-=l=-l):l<0?(r="nw",c-=l=-l):p<0&&(r="se",d-=p=-p);break;case"nw":if(h){if(C.y<=0&&(d<=f||c<=g)){b=!1;break}M("n"),p-=C.y,d+=C.y,l=p*h,c+=n.width-l}else M("n"),M("w"),C.x<=0?c>g?(l-=C.x,c+=C.x):C.y<=0&&d<=f&&(b=!1):(l-=C.x,c+=C.x),C.y<=0?d>f&&(p-=C.y,d+=C.y):(p-=C.y,d+=C.y);l<0&&p<0?(r="se",d-=p=-p,c-=l=-l):l<0?(r="ne",c-=l=-l):p<0&&(r="sw",d-=p=-p);break;case"sw":if(h){if(C.x<=0&&(c<=g||u>=w)){b=!1;break}M("w"),l-=C.x,c+=C.x,p=l/h}else M("s"),M("w"),C.x<=0?c>g?(l-=C.x,c+=C.x):C.y>=0&&u>=w&&(b=!1):(l-=C.x,c+=C.x),C.y>=0?u<w&&(p+=C.y):p+=C.y;l<0&&p<0?(r="ne",d-=p=-p,c-=l=-l):l<0?(r="se",c-=l=-l):p<0&&(r="nw",d-=p=-p);break;case"se":if(h){if(C.x>=0&&(m>=v||u>=w)){b=!1;break}M("e"),p=(l+=C.x)/h}else M("s"),M("e"),C.x>=0?m<v?l+=C.x:C.y>=0&&u>=w&&(b=!1):l+=C.x,C.y>=0?u<w&&(p+=C.y):p+=C.y;l<0&&p<0?(r="nw",d-=p=-p,c-=l=-l):l<0?(r="sw",c-=l=-l):p<0&&(r="ne",d-=p=-p);break;case"move":this.move(C.x,C.y),b=!1;break;case"zoom":this.zoom(function(t){var e=N({},t),i=[];return E(t,function(t,a){delete e[a],E(e,function(e){var a=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),o=Math.abs(t.endX-e.endX),r=Math.abs(t.endY-e.endY),h=Math.sqrt(a*a+n*n),s=(Math.sqrt(o*o+r*r)-h)/h;i.push(s)})}),i.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),i[0]}(o),t),b=!1;break;case"crop":if(!C.x||!C.y){b=!1;break}x=F(this.cropper),c=y.startX-x.left,d=y.startY-x.top,l=n.minWidth,p=n.minHeight,C.x>0?r=C.y>0?"se":"ne":C.x<0&&(c-=l,r=C.y>0?"sw":"nw"),C.y<0&&(d-=p),this.cropped||(O(this.cropBox,s),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}b&&(n.width=l,n.height=p,n.left=c,n.top=d,this.action=r,this.renderCropBox()),E(o,function(t){t.startX=t.endX,t.startY=t.endY})}},dt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&z(this.dragBox,"cropper-modal"),O(this.cropBox,s),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=N({},this.initialImageData),this.canvasData=N({},this.initialCanvasData),this.cropBoxData=N({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(N(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),O(this.dragBox,"cropper-modal"),z(this.cropBox,s)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,E(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,O(this.cropper,"cropper-disabled")),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,z(this.cropper,"cropper-disabled")),this},destroy:function(){var t=this.element;return S(t,"cropper")?(this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),I(t,"cropper"),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,n=i.top;return this.moveTo(M(t)?t:a+Number(t),M(e)?e:n+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(C(t)&&(i.left=t,a=!0),C(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,d=s*t;if(!1===q(this.element,"zoom",{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var l=this.pointers,p=F(this.cropper),m=l&&Object.keys(l).length?function(t){var e=0,i=0,a=0;return E(t,function(t){var n=t.startX,o=t.startY;e+=n,i+=o,a+=1}),{pageX:e/=a,pageY:i/=a}}(l):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((m.pageX-p.left-n.left)/o),n.top-=(d-r)*((m.pageY-p.top-n.top)/r)}else B(e)&&C(e.x)&&C(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(d-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(d-r)/2);n.width=c,n.height=d,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return C(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,C(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(C(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(C(t)&&(i.scaleX=t,a=!0),C(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,i=this.imageData,a=this.canvasData,n=this.cropBoxData,o=void 0;if(this.ready&&this.cropped){o={x:n.left-a.left,y:n.top-a.top,width:n.width,height:n.height};var r=i.width/i.naturalWidth;if(E(o,function(t,e){o[e]=t/r}),t){var h=Math.round(o.y+o.height),s=Math.round(o.x+o.width);o.x=Math.round(o.x),o.y=Math.round(o.y),o.width=s-o.x,o.height=h-o.y}}else o={x:0,y:0,width:0,height:0};return e.rotatable&&(o.rotate=i.rotate||0),e.scalable&&(o.scaleX=i.scaleX||1,o.scaleY=i.scaleY||1),o},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&B(t)){var o=!1;e.rotatable&&C(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(C(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),C(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;C(t.x)&&(n.left=t.x*r+a.left),C(t.y)&&(n.top=t.y*r+a.top),C(t.width)&&(n.width=t.width*r),C(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?N({},this.containerData):{}},getImageData:function(){return this.sized?N({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&E(["left","top","width","height","naturalWidth","naturalHeight"],function(i){e[i]=t[i]}),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&B(t)&&(C(t.left)&&(e.left=t.left),C(t.top)&&(e.top=t.top),C(t.width)?(e.width=t.width,e.height=t.width/i):C(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,e=void 0;return this.ready&&this.cropped&&(e={left:t.left,top:t.top,width:t.width,height:t.height}),e||{}},setCropBoxData:function(t){var e=this.cropBoxData,i=this.options.aspectRatio,a=void 0,n=void 0;return this.ready&&this.cropped&&!this.disabled&&B(t)&&(C(t.left)&&(e.left=t.left),C(t.top)&&(e.top=t.top),C(t.width)&&t.width!==e.width&&(a=!0,e.width=t.width),C(t.height)&&t.height!==e.height&&(n=!0,e.height=t.height),i&&(a?e.height=e.width/i:n&&(e.width=e.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=function(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,r=e.naturalHeight,h=e.rotate,s=void 0===h?0:h,c=e.scaleX,d=void 0===c?1:c,l=e.scaleY,p=void 0===l?1:l,m=i.aspectRatio,u=i.naturalWidth,g=i.naturalHeight,f=a.fillColor,v=void 0===f?"transparent":f,w=a.imageSmoothingEnabled,b=void 0===w||w,y=a.imageSmoothingQuality,C=void 0===y?"low":y,M=a.maxWidth,D=void 0===M?1/0:M,k=a.maxHeight,B=void 0===k?1/0:k,T=a.minWidth,E=void 0===T?0:T,N=a.minHeight,W=void 0===N?0:N,H=document.createElement("canvas"),R=H.getContext("2d"),z=et({aspectRatio:m,width:D,height:B}),O=et({aspectRatio:m,width:E,height:W},"cover"),X=Math.min(z.width,Math.max(O.width,u)),Y=Math.min(z.height,Math.max(O.height,g)),A=et({aspectRatio:n,width:D,height:B}),S=et({aspectRatio:n,width:E,height:W},"cover"),U=Math.min(A.width,Math.max(S.width,o)),I=Math.min(A.height,Math.max(S.height,r)),_=[-U/2,-I/2,U,I];return H.width=L(X),H.height=L(Y),R.fillStyle=v,R.fillRect(0,0,X,Y),R.save(),R.translate(X/2,Y/2),R.rotate(s*Math.PI/180),R.scale(d,p),R.imageSmoothingEnabled=b,R.imageSmoothingQuality=C,R.drawImage.apply(R,[t].concat(x(_.map(function(t){return Math.floor(L(t))})))),R.restore(),H}(this.image,this.imageData,e,t);if(!this.cropped)return i;var a=this.getData(),n=a.x,o=a.y,r=a.width,h=a.height,s=i.width/Math.floor(e.naturalWidth);1!==s&&(n*=s,o*=s,r*=s,h*=s);var c=r/h,d=et({aspectRatio:c,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),l=et({aspectRatio:c,width:t.minWidth||0,height:t.minHeight||0},"cover"),p=et({aspectRatio:c,width:t.width||(1!==s?i.width:r),height:t.height||(1!==s?i.height:h)}),m=p.width,u=p.height;m=Math.min(d.width,Math.max(l.width,m)),u=Math.min(d.height,Math.max(l.height,u));var g=document.createElement("canvas"),f=g.getContext("2d");g.width=L(m),g.height=L(u),f.fillStyle=t.fillColor||"transparent",f.fillRect(0,0,m,u);var v=t.imageSmoothingEnabled,w=void 0===v||v,b=t.imageSmoothingQuality;f.imageSmoothingEnabled=w,b&&(f.imageSmoothingQuality=b);var y=i.width,C=i.height,M=n,D=o,k=void 0,B=void 0,T=void 0,E=void 0,N=void 0,W=void 0;M<=-r||M>y?(M=0,k=0,T=0,N=0):M<=0?(T=-M,M=0,N=k=Math.min(y,r+M)):M<=y&&(T=0,N=k=Math.min(r,y-M)),k<=0||D<=-h||D>C?(D=0,B=0,E=0,W=0):D<=0?(E=-D,D=0,W=B=Math.min(C,h+D)):D<=C&&(E=0,W=B=Math.min(h,C-D));var H=[M,D,k,B];if(N>0&&W>0){var R=m/r;H.push(T*R,E*R,N*R,W*R)}return f.drawImage.apply(f,[i].concat(x(H.map(function(t){return Math.floor(L(t))})))),g},setAspectRatio:function(t){var e=this.options;return this.disabled||M(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n="crop"===t,o=e.movable&&"move"===t;t=n||o?t:"none",e.dragMode=t,U(i,"cropperAction",t),X(i,"cropper-crop",n),X(i,"cropper-move",o),e.cropBoxMovable||(U(a,"cropperAction",t),X(a,"cropper-crop",n),X(a,"cropper-move",o))}return this}},lt=h.Cropper,pt=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(w(this,t),!e||!g.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=N({},f,B(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return b(t,[{key:"init",value:function(){var t=this.element,e=t.tagName.toLowerCase(),i=void 0;if(!S(t,"cropper")){if(U(t,"cropper",this),"img"===e){if(this.isImg=!0,i=t.getAttribute("src")||"",this.originalUrl=i,!i)return;i=t.src}else"canvas"===e&&window.HTMLCanvasElement&&(i=t.toDataURL());this.load(i)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(m.test(t))u.test(t)?this.read((n=t.replace(at,""),o=atob(n),r=new ArrayBuffer(o.length),E(h=new Uint8Array(r),function(t,e){h[e]=o.charCodeAt(e)}),r)):this.clone();else{var n,o,r,h,s=new XMLHttpRequest;this.reloading=!0,this.xhr=s;var c=function(){e.reloading=!1,e.xhr=null};s.ontimeout=c,s.onabort=c,s.onerror=function(){c(),e.clone()},s.onload=function(){c(),e.read(s.response)},a.checkCrossOrigin&&J(t)&&i.crossOrigin&&(t=V(t)),s.open("get",t),s.responseType="arraybuffer",s.withCredentials="use-credentials"===i.crossOrigin,s.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=nt(t),n=0,o=1,r=1;if(a>1){this.url=function(t,e){var i=new Uint8Array(t),a="";return T(i.forEach)?i.forEach(function(t){a+=it(t)}):E(i,function(t){a+=it(t)}),"data:"+e+";base64,"+btoa(a)}(t,"image/jpeg");var h=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=void 0,a=void 0;this.options.checkCrossOrigin&&J(e)&&((i=t.crossOrigin)?a=e:(i="anonymous",a=V(e))),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),z(n,"cropper-hide"),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.isImg?this.element:this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=h.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(h.navigator.userAgent),a=function(e,i){N(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),i||o.removeChild(n)},n.src=e.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".cropper-container"),r=o.querySelector(".cropper-canvas"),h=o.querySelector(".cropper-drag-box"),c=o.querySelector(".cropper-crop-box"),d=c.querySelector(".cropper-face");this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=c,this.viewBox=o.querySelector(".cropper-view-box"),this.face=d,r.appendChild(i),z(t,s),a.insertBefore(o,t.nextSibling),this.isImg||O(i,"cropper-hide"),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,z(c,s),e.guides||z(c.getElementsByClassName("cropper-dashed"),s),e.center||z(c.getElementsByClassName("cropper-center"),s),e.background&&z(o,"cropper-bg"),e.highlight||z(d,"cropper-invisible"),e.cropBoxMovable&&(z(d,"cropper-move"),U(d,"cropperAction","all")),e.cropBoxResizable||(z(c.getElementsByClassName("cropper-line"),s),z(c.getElementsByClassName("cropper-point"),s)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),T(e.ready)&&$(t,"ready",e.ready,{once:!0}),q(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),O(this.element,s))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?this.xhr.abort():this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=lt,t}},{key:"setDefaults",value:function(t){N(f,B(t)&&t)}}]),t}();N(pt.prototype,ot,rt,ht,st,ct,dt);var mt=pt,ut=null,gt={name:"",components:{Topbar:n.a,FixedLayout:a.a,FileImage:o.a},props:{},data:function(){return{cropper:{dialog:!1}}},watch:{},computed:{},created:function(){this.init()},methods:{init:function(){},initData:function(){},handLoadFile:function(t,e){var i=this;console.log(t,e),this.cropper.dialog=!0,setTimeout(function(){i.$refs.cover.src=t.target.result,ut=new mt(i.$refs.cover,{aspectRatio:1.3,crop:function(t){console.log(t.detail)}})},100)},handCropperCancel:function(){this.cropper.dialog=!1},handCropperReset:function(){ut.reset()},handCropperDone:function(){var t=ut.getCroppedCanvas({width:200,height:200}).toDataURL("image/jpeg");this.$store.commit(this.$actionType.write.set_article_data,{cover:t}),this.cropper.dialog=!1,this.$router.push({path:"/write/club"})}}},ft={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("fixed-layout",[i("template",{slot:"header"},[i("topbar",[i("template",{slot:"before"},[i("b",{staticClass:"iconfont icon-back",on:{click:function(e){t.$router.go(-1)}}})]),t._v("\n        上传封面\n      ")],2)],1),t._v(" "),i("section",{staticClass:"upload"},[i("h3",{staticClass:"fw4"},[t._v("上传封面")]),t._v(" "),i("file-image",{staticClass:"mc",on:{load:t.handLoadFile}}),t._v(" "),i("p",[t._v("注：该封面图片会出现在“约”的文章列表及文章头部")])],1)],2),t._v(" "),t.cropper.dialog?[i("section",{staticClass:"m-cover"},[i("section",{staticClass:"bd"},[i("img",{ref:"cover",staticStyle:{"max-width":"100%"}})]),t._v(" "),i("section",{staticClass:"ft"},[i("button",{on:{click:t.handCropperCancel}},[t._v("取消")]),t._v(" "),i("button",{on:{click:t.handCropperReset}},[t._v("还原")]),t._v(" "),i("button",{on:{click:t.handCropperDone}},[t._v("完成")])])])]:t._e()],2)},staticRenderFns:[]};var vt=i("VU/8")(gt,ft,!1,function(t){i("GDvs"),i("7NcZ")},"data-v-25be92ea",null);e.default=vt.exports},rXpJ:function(t,e,i){"use strict";var a={name:"file-image",props:{multiple:{type:Boolean,default:!0}},data:function(){return{}},methods:{handChange:function(t){var e=this;if(console.log(t),this.$emit("change",t),t.target.files.length){for(var i=function(i){var a=new FileReader;a.onload=function(t){console.log(t),e.$emit("load",t,i)},a.readAsDataURL(t.target.files[i])},a=0;a<t.target.files.length;a++)i(a);this.$refs.file.value=""}}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"ui-upload"},[e("b",{staticClass:"iconfont icon-add"}),this._v(" "),e("input",{ref:"file",attrs:{type:"file",accept:"image/jpeg, image/png, image/gif",multiple:this.multiple},on:{change:this.handChange}})])},staticRenderFns:[]};var o=i("VU/8")(a,n,!1,function(t){i("Usbo")},"data-v-05af3850",null);e.a=o.exports},rwyn:function(t,e){}});
//# sourceMappingURL=6.e1542ebbdea14b1f6334.js.map