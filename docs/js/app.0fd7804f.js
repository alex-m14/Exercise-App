(function(t){function e(e){for(var a,r,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"edbccd4b"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"f320cfb0"}[t]+".css",o=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navbar"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-success max-width",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[t._m(0),n("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbar"},on:{click:function(e){t.isActive=!t.isActive}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbar"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v(" Home ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/About"}},[t._v(" About ")])],1),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-primary",attrs:{to:"/Login"}},[n("strong",[t._v("Register/Login")])]),n("router-link",{staticClass:"button is-light",attrs:{to:"/AdminPage"}},[t._v(" Admin ")])],1)])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-item",attrs:{href:""}},[n("i",{staticClass:"fas fa-heartbeat is-large "})])}],u={data:function(){return{isActive:!1}}},c=u,l=n("2877"),d=Object(l["a"])(c,i,s,!1,null,null,null),f=d.exports,v={name:"App",components:{Navbar:f},data:function(){return{}}},p=v,b=Object(l["a"])(p,r,o,!1,null,null,null),m=b.exports,h=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._m(1),n("div",{staticClass:"row"},[n("router-link",{staticClass:"button is-primary",attrs:{to:"/Form"}},[t._v("Add Exercise")])],1)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h1",{staticStyle:{"font-size":"35px"}},[t._v("Welcome to the Exercise App")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("p",{staticStyle:{"font-size":"20px"}},[t._v(" Register or login to enter your workout today!!"),n("br")])])}],y={name:"Home",components:{},methods:{}},C=y,w=(n("cccb"),Object(l["a"])(C,g,_,!1,null,null,null)),A=w.exports;n("f820");a["a"].use(h["a"]);var E=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/AdminPage",name:"AdminPage",component:function(){return n.e("about").then(n.bind(null,"a55b9"))}},{path:"/Form",name:"Form",component:function(){return n.e("about").then(n.bind(null,"c109"))}}],x=new h["a"]({mode:"history",base:"",routes:E}),O=x,j=n("f309");a["a"].use(j["a"]);var k=new j["a"]({}),P=n("ecee"),S=n("c074"),L=n("ad3d");P["c"].add(S["a"]),a["a"].component("font-awesome-icon",L["a"]),a["a"].config.productionTip=!1,n("b383"),new a["a"]({router:O,vuetify:k,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,n){},b383:function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("5ced"),r=n.n(a);r.a},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" About Page ")]),n("p",[t._v(" This website is made by Alexandra Maceda for Fall 2020 Web Programming class ")])])}],o={name:"About",data:function(){return{}}},i=o,s=n("2877"),u=Object(s["a"])(i,a,r,!1,null,null,null);e["default"]=u.exports}});
//# sourceMappingURL=app.0fd7804f.js.map