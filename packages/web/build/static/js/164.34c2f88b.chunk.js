"use strict";(self.webpackChunk_infomat_web=self.webpackChunk_infomat_web||[]).push([[164],{26481:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(46528),o=t(82417),i=t(66204),a=t(53583),c=t(88600),u=t(95882),l=t(8449),s=t(85293),f=t(43188);const p=["className","component"];var d=t(51388);const m=function(e={}){const{defaultTheme:n,defaultClassName:t="MuiBox-root",generateClassName:d,styleFunctionSx:m=u.Z}=e,v=(0,c.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(m);return i.forwardRef((function(e,i){const c=(0,s.Z)(n),u=(0,l.Z)(e),{className:m,component:g="div"}=u,y=(0,o.Z)(u,p);return(0,f.jsx)(v,(0,r.Z)({as:g,ref:i,className:(0,a.Z)(m,d?d(t):t),theme:c},y))}))}({defaultTheme:(0,t(82569).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate});var v=m},22875:function(e,n){n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},43869:function(e,n,t){t.d(n,{ZP:function(){return he}});var r=t(66204),o=t(97641),i=t.n(o);function a(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(n){i(n)}}function c(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function c(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function u(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function l(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create;var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=s.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"===typeof e&&null!==e}function m(e){return b(e.target.files).map((function(e){return f(e)}))}function v(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return f(e)}))]}}))}))}function g(e,n){return a(this,void 0,void 0,(function(){var t;return c(this,(function(r){switch(r.label){case 0:return e.items?(t=b(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(h))]):[3,2];case 1:return[2,y(w(r.sent()))];case 2:return[2,y(b(e.files).map((function(e){return f(e)})))]}}))}))}function y(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function b(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function h(e){if("function"!==typeof e.webkitGetAsEntry)return D(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?O(n):D(e)}function w(e){return e.reduce((function(e,n){return l(l([],u(e),!1),u(Array.isArray(n)?w(n):[n]),!1)}),[])}function D(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=f(n);return Promise.resolve(t)}function x(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,e.isDirectory?O(e):j(e)]}))}))}function O(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,u;return c(this,(function(c){switch(c.label){case 0:if(n.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),t(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(x)),r.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function j(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=f(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var A=t(22875);function F(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){P(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||C(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){if(e){if("string"===typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,n):void 0}}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var R="file-invalid-type",T="file-too-large",I="file-too-small",M="too-many-files",L=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:R,message:"File type must be ".concat(n)}},_=function(e){return{code:T,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Z=function(e){return{code:I,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},B={code:M,message:"Too many files"};function K(e,n){var t="application/x-moz-file"===e.type||(0,A.Z)(e,n);return[t,t?null:L(n)]}function N(e,n,t){if(U(e.size))if(U(n)&&U(t)){if(e.size>t)return[!1,_(t)];if(e.size<n)return[!1,Z(n)]}else{if(U(n)&&e.size<n)return[!1,Z(n)];if(U(t)&&e.size>t)return[!1,_(t)]}return[!0,null]}function U(e){return void 0!==e&&null!==e}function $(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=S(K(e,t),1)[0],i=S(N(e,r,o),1)[0],a=c?c(e):null;return n&&i&&!a}))}function W(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function G(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function H(e){e.preventDefault()}function q(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function Y(e){return-1!==e.indexOf("Edge/")}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return q(e)||Y(e)}function Q(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!W(e)&&n&&n.apply(void 0,[e].concat(r)),W(e)}))}}function V(){return"showOpenFilePicker"in window}function X(e){return U(e)?[{accept:Object.entries(e).filter((function(e){var n=S(e,2),t=n[0],r=n[1],o=!0;return re(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(oe)||(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,n){var t=S(n,2),r=t[0],o=t[1];return E(E({},e),{},P({},r,o))}),{})}]:e}function ee(e){if(U(e))return Object.entries(e).reduce((function(e,n){var t=S(n,2),r=t[0],o=t[1];return[].concat(F(e),[r],F(o))}),[]).filter((function(e){return re(e)||oe(e)})).join(",")}function ne(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function te(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function re(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function oe(e){return/^.*\.[\w]+$/.test(e)}var ie=["children"],ae=["open"],ce=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ue=["refKey","onChange","onClick"];function le(e){return function(e){if(Array.isArray(e))return pe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||fe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||fe(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,n){if(e){if("string"===typeof e)return pe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?pe(e,n):void 0}}function pe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function de(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function me(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?de(Object(t),!0).forEach((function(n){ve(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ve(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ge(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ye=(0,r.forwardRef)((function(e,n){var t=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=me(me({},be),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,m=n.onDropAccepted,v=n.onDropRejected,g=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.autoFocus,w=n.preventDropOnDocument,D=n.noClick,x=n.noKeyboard,O=n.noDrag,j=n.noDragEventsBubbling,A=n.onError,F=n.validator,k=(0,r.useMemo)((function(){return ee(t)}),[t]),E=(0,r.useMemo)((function(){return X(t)}),[t]),P=(0,r.useMemo)((function(){return"function"===typeof y?y:xe}),[y]),S=(0,r.useMemo)((function(){return"function"===typeof g?g:xe}),[g]),C=(0,r.useRef)(null),z=(0,r.useRef)(null),R=se((0,r.useReducer)(De,we),2),T=R[0],I=R[1],M=T.isFocused,L=T.isFileDialogActive,_=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&V()),Z=function(){!_.current&&L&&setTimeout((function(){z.current&&(z.current.files.length||(I({type:"closeDialog"}),S()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",Z,!1),function(){window.removeEventListener("focus",Z,!1)}}),[z,L,S,_]);var U=(0,r.useRef)([]),q=function(e){C.current&&C.current.contains(e.target)||(e.preventDefault(),U.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",H,!1),document.addEventListener("drop",q,!1)),function(){w&&(document.removeEventListener("dragover",H),document.removeEventListener("drop",q))}}),[C,w]),(0,r.useEffect)((function(){return!o&&h&&C.current&&C.current.focus(),function(){}}),[C,h,o]);var Y=(0,r.useCallback)((function(e){A?A(e):console.error(e)}),[A]),re=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),U.current=[].concat(le(U.current),[e.target]),G(e)&&Promise.resolve(i(e)).then((function(n){if(!W(e)||j){var t=n.length,r=t>0&&$({files:n,accept:k,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:F});I({isDragAccept:r,isDragReject:t>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return Y(e)}))}),[i,s,Y,j,k,c,a,u,l,F]),oe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var n=G(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&p&&p(e),!1}),[p,j]),ie=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var n=U.current.filter((function(e){return C.current&&C.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),U.current=n,n.length>0||(I({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),G(e)&&f&&f(e))}),[C,f,j]),ae=(0,r.useCallback)((function(e,n){var t=[],r=[];e.forEach((function(e){var n=se(K(e,k),2),o=n[0],i=n[1],u=se(N(e,c,a),2),l=u[0],s=u[1],f=F?F(e):null;if(o&&l&&!f)t.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&t.length>1||u&&l>=1&&t.length>l)&&(t.forEach((function(e){r.push({file:e,errors:[B]})})),t.splice(0)),I({acceptedFiles:t,fileRejections:r,type:"setFiles"}),d&&d(t,r,n),r.length>0&&v&&v(r,n),t.length>0&&m&&m(t,n)}),[I,u,k,c,a,l,d,m,v,F]),fe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),U.current=[],G(e)&&Promise.resolve(i(e)).then((function(n){W(e)&&!j||ae(n,e)})).catch((function(e){return Y(e)})),I({type:"reset"})}),[i,ae,Y,j]),pe=(0,r.useCallback)((function(){if(_.current){I({type:"openDialog"}),P();var e={multiple:u,types:E};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ae(e,null),I({type:"closeDialog"})})).catch((function(e){ne(e)?(S(e),I({type:"closeDialog"})):te(e)?(_.current=!1,z.current?(z.current.value=null,z.current.click()):Y(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):Y(e)}))}else z.current&&(I({type:"openDialog"}),P(),z.current.value=null,z.current.click())}),[I,P,S,b,ae,Y,E,u]),de=(0,r.useCallback)((function(e){C.current&&C.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),pe()))}),[C,pe]),ye=(0,r.useCallback)((function(){I({type:"focus"})}),[]),he=(0,r.useCallback)((function(){I({type:"blur"})}),[]),Oe=(0,r.useCallback)((function(){D||(J()?setTimeout(pe,0):pe())}),[D,pe]),je=function(e){return o?null:e},Ae=function(e){return x?null:je(e)},Fe=function(e){return O?null:je(e)},ke=function(e){j&&e.stopPropagation()},Ee=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=ge(e,ce);return me(me(ve({onKeyDown:Ae(Q(i,de)),onFocus:Ae(Q(a,ye)),onBlur:Ae(Q(c,he)),onClick:je(Q(u,Oe)),onDragEnter:Fe(Q(l,re)),onDragOver:Fe(Q(s,oe)),onDragLeave:Fe(Q(f,ie)),onDrop:Fe(Q(p,fe)),role:"string"===typeof r&&""!==r?r:"presentation"},t,C),o||x?{}:{tabIndex:0}),d)}}),[C,de,ye,he,Oe,re,oe,ie,fe,x,O,o]),Pe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Se=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.onChange,o=e.onClick,i=ge(e,ue);return me(me({},ve({accept:k,multiple:u,type:"file",style:{display:"none"},onChange:je(Q(r,fe)),onClick:je(Q(o,Pe)),tabIndex:-1},t,z)),i)}}),[z,t,u,fe,o]);return me(me({},T),{},{isFocused:M&&!o,getRootProps:Ee,getInputProps:Se,rootRef:C,inputRef:z,open:je(pe)})}(ge(e,ie)),i=o.open,a=ge(o,ae);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(me(me({},a),{},{open:i})))}));ye.displayName="Dropzone";var be={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return d(e)&&d(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:function(e){return d(e)&&d(e.target)}(e)?[2,m(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,v(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ye.defaultProps=be,ye.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var he=ye,we={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function De(e,n){switch(n.type){case"focus":return me(me({},e),{},{isFocused:!0});case"blur":return me(me({},e),{},{isFocused:!1});case"openDialog":return me(me({},we),{},{isFileDialogActive:!0});case"closeDialog":return me(me({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return me(me({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return me(me({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return me({},we);default:return e}}function xe(){}}}]);
//# sourceMappingURL=164.34c2f88b.chunk.js.map