(function(e){function t(t){for(var a,r,o=t[0],c=t[1],u=t[2],d=0,l=[];d<o.length;d++)r=o[d],s[r]&&l.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-9c9dc960":"2989d3a2"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-9c9dc960":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-9c9dc960":"0826c2a8"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===a||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){r[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e),u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}s[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"066b":function(e,t,n){},"335f":function(e,t,n){},4360:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var a=n("bd86"),r=n("a026"),s=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}r["a"].use(s["a"]);var c=new s["a"].Store({state:{settings:{apiKey:"602c6979cdc5738a6e9358add145ba16",language:"zh-CN",tempUnit:"metric",useGeoLoc:!1,location:"Beijing, BJ, China",weatherRefreshRate:"halfHour",burnInHomogenize:!1,burnInTime:"04:00",burnInDuration:"oneMinute"}},mutations:{loadSettings:function(e){var t=localStorage.getItem("klock_settings")&&JSON.parse(localStorage.getItem("klock_settings"));t&&(e.settings=o({},t))},saveSettings:function(e,t){var n=JSON.parse(JSON.stringify(t));e.settings=n,localStorage.setItem("klock_settings",JSON.stringify(n))}}});t["a"]=c},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},5516:function(e,t,n){"use strict";var a=n("8254"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),r=n("30f4"),s=n("dd88"),i=n("d4ea"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u={name:"App"},d=u,l=(n("7c55"),n("2877")),f=Object(l["a"])(d,o,c,!1,null,null,null),m=f.exports,h=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-view",on:{click:function(t){e.actions.show=!e.actions.show}}},[n("div",{staticClass:"main-ui"},[n("time-date"),n("weathers",{ref:"weathers"})],1),n("div",{staticClass:"actions",class:{show:e.actions.show}},[n("mu-button",{attrs:{icon:""},on:{click:e.switchFullScreen}},[n("mu-icon",{attrs:{value:e.isFullScreen()?"fullscreen_exit":"fullscreen"}})],1),n("mu-button",{attrs:{icon:""},on:{click:e.refreshWeather}},[n("mu-icon",{attrs:{value:"refresh"}})],1),n("mu-button",{attrs:{icon:""},on:{click:e.toSetting}},[n("mu-icon",{attrs:{value:"settings"}})],1)],1),n("burn-in")],1)},b=[],g=n("c1df"),j=n.n(g),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"time-date"},[n("div",{staticClass:"time"},[n("div",{staticClass:"hour"},[e._v("\n      "+e._s(e.hour)+"\n    ")]),n("div",{staticClass:"minute"},[e._v("\n      "+e._s(e.minute)+"\n    ")])]),n("div",{staticClass:"date"},[e._v("\n    "+e._s(e.date)+"\n  ")])])},w=[],y=n("9099"),_={name:"timeDate",data:function(){return{timerId:null,hour:"",minute:"",date:""}},methods:{init:function(){var e=this;this.getTime(),this.timerId=this.timerId||setInterval(function(){e.getTime()},1e3)},deInit:function(){this.timerId&&clearInterval(this.timerId),this.timerId=null},getTime:function(){var e=j()();this.hour=e.format("HH"),this.minute=e.format("mm"),this.date=e.format(y["a"].dateFormat)}},computed:{i18n:function(){return y["a"]}},mounted:function(){this.init()},destroyed:function(){this.deInit()}},k=_,O=(n("993d"),Object(l["a"])(k,v,w,!1,null,"75b55c84",null)),S=O.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"weathers",attrs:{"data-mu-loading-color":"#fff","data-mu-loading-overlay-color":"transparent"}},[n("today-weather",{directives:[{name:"show",rawName:"v-show",value:e.todayWeather.weather,expression:"todayWeather.weather"}],attrs:{data:e.todayWeather}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.futureWeathers.length,expression:"futureWeathers.length"}],staticClass:"future-weathers"},e._l(e.futureWeathers,function(e,t){return n("future-weather",{key:t,attrs:{data:e}})}),1)],1)},M=[],T=(n("456d"),n("7514"),n("75fc")),x=(n("8615"),n("ac6a"),n("28a5"),n("bc3a")),C=n.n(x),W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"today-weather"},[n("div",{staticClass:"max-min-temp"},[e._v("\n    "+e._s(e.i18n.maxTemp)+": "+e._s(e.data.maxTemp)+"° ↑ · "+e._s(e.i18n.minTemp)+": "+e._s(e.data.minTemp)+"° ↓\n  ")]),n("div",{staticClass:"current-weather"},[n("img",{staticClass:"weather",attrs:{src:"./images/weather_"+(e.data.weather||"na")+".png",alt:"weather icon"}}),n("span",{staticClass:"temprature"},[e._v(e._s(e.data.currentTemp))]),n("span",{staticClass:"unit"},[e._v("\n      °"+e._s({metric:"C",imperial:"F"}[e.$store.state.settings.tempUnit])+"\n      ")])]),n("div",{staticClass:"others"},[n("div",{staticClass:"weather-desc"},[e._v("\n      "+e._s(e.data.weatherDescr)+"\n    ")]),n("div",{staticClass:"body-others"},[e._v("\n      "+e._s(e.i18n.humidity)+": "+e._s(e.data.humidity)+"%,\n      "+e._s(e.i18n.windDeg([e.data.windDeg]))+",\n      "+e._s(e.i18n.windSpeed([e.data.windSpeed]))+"\n    ")])])])},E=[],D={name:"TodayWeather",props:{data:{type:Object,required:!0}},computed:{i18n:function(){return y["a"]}}},z=D,F=(n("a019"),Object(l["a"])(z,W,E,!1,null,"56d87b2e",null)),$=F.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"future-weather"},[n("span",{staticClass:"date"},[e._v(e._s(e.data.date))]),n("img",{staticClass:"weather-icon",attrs:{src:"./images/weather_"+(e.data.weather||"na")+".png",alt:"weather icon"}}),n("span",{staticClass:"temp-diff"},[e._v(e._s(e.data.minTemp)+"° ~ "+e._s(e.data.maxTemp)+"°")])])},P=[],H={name:"FutureWeather",props:{data:{type:Object,required:!0}}},L=H,R=(n("5516"),Object(l["a"])(L,N,P,!1,null,"7151cd4e",null)),B=R.exports,A={name:"Weathers",components:{TodayWeather:$,FutureWeather:B},data:function(){return{timerId:null,todayWeather:{maxTemp:"",minTemp:"",weather:"",currentTemp:"",weatherDescr:""},futureWeathers:[],isLoading:!1}},methods:{getLocation:function(){var e=this;return new Promise(function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition(e,t):t()}).catch(function(){e.$toast.error(y["a"].getLocationFailed);var t=JSON.parse(JSON.stringify(e.$store.state.settings));t.useGeoLoc=!1,e.$store.commit("saveSettings",t)})},getWeathers:function(e){var t=this;this.isLoading=!0;var n={appid:this.$store.state.settings.apiKey,lang:this.$store.state.settings.language.split("-")[0],units:this.$store.state.settings.tempUnit,_:Date.now()};return e?(n.lat=e.coords.latitude,n.lon=e.coords.longitude):n.q=this.$store.state.settings.location,C()({url:"https://api.openweathermap.org/data/2.5/forecast",params:n}).then(function(e){if(t.isLoading=!1,200===e.status&&"200"===e.data.cod){var n=e.data.list[0];t.todayWeather={maxTemp:Math.round(n.main.temp_max),minTemp:Math.round(n.main.temp_min),weather:n.weather[0].icon,currentTemp:Math.round(n.main.temp),humidity:n.main.humidity,weatherDescr:n.weather[0].description,windDeg:n.wind.deg,windSpeed:n.wind.speed};var a=e.data.list.filter(function(e){return j()(1e3*e.dt).date()!==j()().date()&&1e3*e.dt>Date.now()}),r={};a.forEach(function(e){var t=j()(1e3*e.dt).date();r[t]?r[t].push(e):r[t]=[]}),t.futureWeathers=Object.values(r).map(function(e,t){return{date:j()().add(1+t,"days").format("dddd"),maxTemp:Math.round(Math.max.apply(Math,Object(T["a"])(e.map(function(e){return e.main.temp_max})))),minTemp:Math.round(Math.min.apply(Math,Object(T["a"])(e.map(function(e){return e.main.temp_min})))),weather:function(){var t={};e.forEach(function(e){var n=e.weather[0].icon;t[n]=t[n]?t[n]+1:1});var n=Math.max.apply(Math,Object(T["a"])(Object.values(t)));return Object.keys(t).find(function(e){return t[e]===n})}()}}).slice(0,4)}else t.$toast.error(y["a"].getWeatherError(e.status,e.data.cod,e.data.message))}).catch(function(e){t.$toast.error(y["a"].getWeatherError(e.request.status,e.response&&e.response.data&&e.response.data.cod,e.response&&e.response.data&&e.response.data.message))})},initWeathers:function(){var e=this;this.$store.state.settings.useGeoLoc?this.getLocation().then(function(t){return e.getWeathers(t)}):this.getWeathers()}},computed:{i18n:function(){return y["a"]}},mounted:function(){var e=this;this.initWeathers();var t={noRefresh:1/0,fiveMinute:3e5,fifteenMinute:9e5,halfHour:18e5,oneHour:36e5,threeHour:108e5,oneDay:864e5};this.timerId=setInterval(function(){e.initWeathers()},t[this.$store.state.settings.weatherRefreshRate])},destroyed:function(){clearInterval(this.timerId)}},q=A,G=(n("9768"),Object(l["a"])(q,I,M,!1,null,"814225ac",null)),K=G.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"burn-in"}):e._e()},J=[],Y=n("5118"),Q={name:"BurnIn",data:function(){return{timerId:null,show:!1}},methods:{setBurnIn:function(){if(!this.$store.state.settings.burnInHomogenize)return!1;var e=this.$store.state.settings,t=j()();if(!e.burnInTime)return!1;var n=j()("".concat(t.format("YYYY-MM-DD")," ").concat(e.burnInTime)),a={oneMinute:1,fiveMinute:5,fifteenMinute:15,halfHour:30,oneHour:60}[e.burnInDuration],r=n.clone().add(a,"minutes");return this.timerId=Object(Y["setTimeout"])(this.setBurnIn,1e3),!n.isAfter()&&(n.isBefore()&&r.isAfter()?(this.show=!0,!1):(r.isBefore()&&(this.show=!1),!1))},cancelBurnIn:function(){this.timerId&&Object(Y["clearTimeout"])(this.timerId)}},mounted:function(){this.setBurnIn()},destroyed:function(){this.cancelBurnIn()}},V=Q,X=(n("aa0a"),Object(l["a"])(V,U,J,!1,null,"a91a071a",null)),Z=X.exports,ee={name:"Index",components:{TimeDate:S,Weathers:K,BurnIn:Z},data:function(){return{actions:{show:!1}}},methods:{toSetting:function(){this.$router.push({path:"/settings"})},switchFullScreen:function(){var e=this,t=function(){e.$el.requestFullscreen?e.$el.requestFullscreen():e.$el.webkitRequestFullScreen?e.$el.webkitRequestFullScreen():e.$el.mozRequestFullScreen()},n=function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen()};this.isFullScreen()?n():t()},refreshWeather:function(){this.$refs.weathers.initWeathers()},isFullScreen:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}},mounted:function(){j.a.locale(this.$store.state.settings.language)}},te=ee,ne=(n("ec12"),Object(l["a"])(te,p,b,!1,null,null,null)),ae=ne.exports;a["a"].use(h["a"]);var re=new h["a"]({routes:[{path:"/",name:"index",component:ae},{path:"/settings",name:"settings",component:function(){return n.e("chunk-9c9dc960").then(n.bind(null,"26d3"))}}]}),se=n("4360");n("d6f6");a["a"].use(r["a"]),a["a"].use(s["a"]),a["a"].use(i["a"]),se["a"].commit("loadSettings"),a["a"].config.productionTip=!1,new a["a"]({router:re,store:se["a"],render:function(e){return e(m)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var a=n("5c48"),r=n.n(a);r.a},8254:function(e,t,n){},"8c25":function(e,t,n){},"903a":function(e,t,n){},9099:function(e,t,n){"use strict";n("d185");var a=n("75fc"),r=n("4360"),s={"zh-CN":{settings:"设置",apiKey:"API Key",apiKeyDescr:'如果这个 API Key 无法使用，可以在 <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> 注册帐号创建一个新的。',language:"语言",dateFormat:"M 月 D 日 dddd",save:"保存",close:"关闭",maxTemp:"最高温",minTemp:"最低温",humidity:"湿度",tempUnit:"温度单位",metric:"公制，摄氏度 (°C)",imperial:"英制，华氏度 (°F)",getWeatherError:function(e,t,n){return"获取天气失败，HTTP 状态码: ".concat(e).concat(t?", API 状态码: ".concat(t):"").concat(n?", 错误消息: ".concat(n):"","。")},location:"位置",useGeoLoc:"使用定位",inputCity:"请输入城市名称，例如: Beijing",getLocationFailed:"定位失败，设置已关闭，使用城市获取天气。",weatherRefreshRate:"天气刷新新频率",noRefresh:"从不刷新",oneMinute:"1 分钟",fiveMinute:"5 分钟",fifteenMinute:"15 分钟",halfHour:"半小时",oneHour:"1 小时",threeHour:"3 小时",oneDay:"一天",windDeg:function(e){var t=[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5],n=["北","东北偏北","东北","东北偏东","东","东南偏东","东南","东南偏南","南","西南偏南","西南","西南偏西","西","西北偏西","西北","西北偏北"],r=t.map(function(t){return Math.abs(e-t)}),s=r.indexOf(Math.min.apply(Math,Object(a["a"])(r)));return"".concat(n[s],"风")},windSpeed:function(e){var t=[[0,.2],[.3,1.5],[1.6,3.3],[3.4,5.4],[5.5,7.9],[8,10.7],[10.8,13.8],[13.9,17.1],[17.2,20.7],[20.8,24.4],[24.5,28.4],[28.5,32.6],[32.7,36.9]],n=0;return t.forEach(function(t,a){e>=t[0]&&e<=t[1]&&(n=a)}),"".concat(n," 级")},burnInHomogenize:"均匀老化",notRecommend:"不推荐",burnInTip:"每天特定时段显示变换的扫描线使屏幕均匀老化，以缓解“烧屏”现象，会加剧屏幕损耗。",burnInTime:"老化开始时间",burnInDuration:"老化持续时间"},"en-US":{settings:"Settings",apiKey:"API Key",apiKeyDescr:'If you can\'t use it, go <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> to get a new one.',language:"Language",dateFormat:"MMM Do dddd",save:"Save",close:"Close",maxTemp:"Max temperature",minTemp:"Min temperature",humidity:"Humidity",tempUnit:"Temperature unit",metric:"Metric (°C)",imperial:"Imperial (°F)",getWeatherError:function(e,t,n){return"Get weather failed，HTTP code: ".concat(e).concat(t?", API code: ".concat(t):"").concat(n?", error message: ".concat(n):"",".")},location:"Location",useGeoLoc:"Using Geolocation",inputCity:"Input city name, e.g. London",getLocationFailed:"Get current location failed, use city name to get weathers.",weatherRefreshRate:"Weather Refresh Rate",noRefresh:"Never refresh",oneMinute:"1 Minute",fiveMinute:"5 Minute",fifteenMinute:"15 Minute",halfHour:"30 Minute",oneHour:"1 Hour",threeHour:"3 Hour",oneDay:"1 Day",windDeg:function(e){var t=[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5],n=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],r=t.map(function(t){return Math.abs(e-t)}),s=r.indexOf(Math.min.apply(Math,Object(a["a"])(r)));return"wind: ".concat(n[s])},windSpeed:function(e){return"".concat(e," m/s")},burnInHomogenize:"Burn-in Protect",notRecommend:"Not Recommend",burnInTip:"Display moving scan lines at specific times of day to ease screen burn. This will make the screen age faster.",burnInTime:"Burn-in start time",burnInDuration:"Burn-in Duration"}},i=new Proxy(s,{get:function(e,t,n){return Reflect.get(e[r["a"].state.settings.language],t,n)}});t["a"]=i},9768:function(e,t,n){"use strict";var a=n("066b"),r=n.n(a);r.a},"993d":function(e,t,n){"use strict";var a=n("335f"),r=n.n(a);r.a},a019:function(e,t,n){"use strict";var a=n("903a"),r=n.n(a);r.a},aa0a:function(e,t,n){"use strict";var a=n("8c25"),r=n.n(a);r.a},db95:function(e,t,n){},ec12:function(e,t,n){"use strict";var a=n("db95"),r=n.n(a);r.a}});
//# sourceMappingURL=app.b6b40ce5.js.map