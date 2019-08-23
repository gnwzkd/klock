(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c9dc960"],{"21e2":function(t,n,e){"use strict";var i=e("6a77"),o=e.n(i);o.a},"26d3":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mu-paper",{staticClass:"settings-view"},[e("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"primary"}},[e("mu-button",{attrs:{slot:"left",icon:""},on:{click:function(n){return t.$router.back()}},slot:"left"},[e("mu-icon",{attrs:{value:"arrow_back"}})],1),t._v("\n    "+t._s(t.i18n.settings)+"\n  ")],1),e("mu-list",{attrs:{textline:"two-line"}},[e("mu-list-item",{attrs:{button:""},on:{click:function(n){return t.openDialog("apiKey")}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v(t._s(t.i18n.apiKey))]),e("mu-list-item-sub-title",[t._v(t._s(t.$store.state.settings.apiKey))])],1)],1),e("mu-list-item",{attrs:{button:""},on:{click:function(n){return t.openDialog("language")}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v(t._s(t.i18n.language))]),e("mu-list-item-sub-title",[t._v("\n          "+t._s(t.options.language[t.$store.state.settings.language].name)+"\n        ")])],1)],1),e("mu-list-item",{attrs:{button:""},on:{click:function(n){return t.openDialog("tempUnit")}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v(t._s(t.i18n.tempUnit))]),e("mu-list-item-sub-title",[t._v("\n          "+t._s(t.options.tempUnit[t.$store.state.settings.tempUnit].name)+"\n        ")])],1)],1),e("mu-list-item",{attrs:{button:""},on:{click:function(n){t.settings.useGeoLoc=!t.settings.useGeoLoc,t.saveSetting()}}},[e("mu-list-item-title",[t._v(t._s(t.i18n.useGeoLoc))]),e("mu-list-item-action",[e("mu-switch",{attrs:{readonly:""},model:{value:t.settings.useGeoLoc,callback:function(n){t.$set(t.settings,"useGeoLoc",n)},expression:"settings.useGeoLoc"}})],1)],1),t.settings.useGeoLoc?t._e():e("mu-list-item",{attrs:{button:""},on:{click:function(n){return t.openDialog("location")}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v(t._s(t.i18n.location))]),e("mu-list-item-sub-title",[t._v(t._s(t.$store.state.settings.location))])],1)],1),e("mu-list-item",{attrs:{button:""},on:{click:function(n){return t.openDialog("weatherRefreshRate")}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v(t._s(t.i18n.weatherRefreshRate))]),e("mu-list-item-sub-title",[t._v("\n          "+t._s(t.options.weatherRefreshRate[t.$store.state.settings.weatherRefreshRate].name)+"\n        ")])],1)],1),e("mu-list-item",{attrs:{button:""},on:{click:function(n){t.settings.burnInHomogenize=!t.settings.burnInHomogenize,t.saveSetting()}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v("\n          "+t._s(t.i18n.burnInHomogenize)+"("+t._s(t.i18n.notRecommend)+")\n        ")]),e("mu-list-item-sub-title",{staticClass:"wrap-line"},[t._v("\n          "+t._s(t.i18n.burnInTip)+"\n        ")])],1),e("mu-list-item-action",[e("mu-switch",{attrs:{readonly:""},model:{value:t.settings.burnInHomogenize,callback:function(n){t.$set(t.settings,"burnInHomogenize",n)},expression:"settings.burnInHomogenize"}})],1)],1),e("mu-list-item",{attrs:{button:""},on:{click:function(n){return t.openDialog("burnInTime")}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v(t._s(t.i18n.burnInTime))]),e("mu-list-item-sub-title",[t._v("\n          "+t._s(t.settings.burnInTime)+"\n        ")])],1)],1),e("mu-list-item",{attrs:{button:""},on:{click:function(n){return t.openDialog("burnInDuration")}}},[e("mu-list-item-content",[e("mu-list-item-title",[t._v(t._s(t.i18n.burnInDuration))]),e("mu-list-item-sub-title",[t._v("\n          "+t._s(t.options.burnInDuration[t.$store.state.settings.burnInDuration].name)+"\n        ")])],1)],1)],1),e("mu-dialog",{attrs:{title:t.i18n.apiKey,open:t.dialogs.apiKey.open},on:{"update:open":function(n){return t.$set(t.dialogs.apiKey,"open",n)}}},[e("mu-text-field",{attrs:{"full-width":"",placeholder:"OpenWeatherMap API Key"},model:{value:t.settings.apiKey,callback:function(n){t.$set(t.settings,"apiKey",n)},expression:"settings.apiKey"}}),e("p",{domProps:{innerHTML:t._s(t.i18n.apiKeyDescr)}}),e("mu-button",{attrs:{slot:"actions",flat:""},on:{click:function(n){t.closeDialog("apiKey"),t.getSettings()}},slot:"actions"},[t._v("\n      "+t._s(t.i18n.close)+"\n    ")]),e("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(n){t.saveSetting(),t.closeDialog("apiKey")}},slot:"actions"},[t._v(t._s(t.i18n.save))])],1),e("mu-dialog",{attrs:{title:t.i18n.language,open:t.dialogs.language.open},on:{"update:open":function(n){return t.$set(t.dialogs.language,"open",n)}}},[e("mu-list",t._l(t.options.language,function(n){return e("mu-list-item",{key:n.value},[e("mu-list-item-content",[e("mu-radio",{attrs:{label:n.name,value:n.value},model:{value:t.settings.language,callback:function(n){t.$set(t.settings,"language",n)},expression:"settings.language"}})],1)],1)}),1),e("mu-button",{attrs:{slot:"actions",flat:""},on:{click:function(n){t.closeDialog("language"),t.getSettings()}},slot:"actions"},[t._v(t._s(t.i18n.close))]),e("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(n){t.saveSetting(),t.closeDialog("language")}},slot:"actions"},[t._v(t._s(t.i18n.save))])],1),e("mu-dialog",{attrs:{title:t.i18n.tempUnit,open:t.dialogs.tempUnit.open},on:{"update:open":function(n){return t.$set(t.dialogs.tempUnit,"open",n)}}},[e("mu-list",t._l(t.options.tempUnit,function(n){return e("mu-list-item",{key:n.value},[e("mu-list-item-content",[e("mu-radio",{attrs:{label:n.name,value:n.value},model:{value:t.settings.tempUnit,callback:function(n){t.$set(t.settings,"tempUnit",n)},expression:"settings.tempUnit"}})],1)],1)}),1),e("mu-button",{attrs:{slot:"actions",flat:""},on:{click:function(n){t.closeDialog("tempUnit"),t.getSettings()}},slot:"actions"},[t._v(t._s(t.i18n.close))]),e("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(n){t.saveSetting(),t.closeDialog("tempUnit")}},slot:"actions"},[t._v(t._s(t.i18n.save))])],1),e("mu-dialog",{attrs:{title:t.i18n.location,open:t.dialogs.location.open},on:{"update:open":function(n){return t.$set(t.dialogs.location,"open",n)}}},[e("mu-auto-complete",{attrs:{data:t.locationAutoCompletes,label:t.i18n.inputCity,"open-on-focus":""},nativeOn:{input:function(n){return t.locationInputed(n)}},model:{value:t.settings.location,callback:function(n){t.$set(t.settings,"location",n)},expression:"settings.location"}}),e("mu-button",{attrs:{slot:"actions",flat:""},on:{click:function(n){t.closeDialog("location"),t.getSettings()}},slot:"actions"},[t._v(t._s(t.i18n.close))]),e("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(n){t.saveSetting(),t.closeDialog("location")}},slot:"actions"},[t._v(t._s(t.i18n.save))])],1),e("mu-dialog",{attrs:{title:t.i18n.weatherRefreshRate,open:t.dialogs.weatherRefreshRate.open,scrollable:""},on:{"update:open":function(n){return t.$set(t.dialogs.weatherRefreshRate,"open",n)}}},[e("mu-list",t._l(t.options.weatherRefreshRate,function(n){return e("mu-list-item",{key:n.value},[e("mu-list-item-content",[e("mu-radio",{attrs:{label:n.name,value:n.value},model:{value:t.settings.weatherRefreshRate,callback:function(n){t.$set(t.settings,"weatherRefreshRate",n)},expression:"settings.weatherRefreshRate"}})],1)],1)}),1),e("mu-button",{attrs:{slot:"actions",flat:""},on:{click:function(n){t.closeDialog("weatherRefreshRate"),t.getSettings()}},slot:"actions"},[t._v(t._s(t.i18n.close))]),e("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(n){t.saveSetting(),t.closeDialog("weatherRefreshRate")}},slot:"actions"},[t._v(t._s(t.i18n.save))])],1),e("mu-dialog",{attrs:{title:t.i18n.burnInTime,open:t.dialogs.burnInTime.open},on:{"update:open":function(n){return t.$set(t.dialogs.burnInTime,"open",n)}}},[e("mu-text-field",{attrs:{"full-width":"",placeholder:t.i18n.burnInTime,type:"time"},model:{value:t.settings.burnInTime,callback:function(n){t.$set(t.settings,"burnInTime",n)},expression:"settings.burnInTime"}}),e("mu-button",{attrs:{slot:"actions",flat:""},on:{click:function(n){t.closeDialog("burnInTime"),t.getSettings()}},slot:"actions"},[t._v(t._s(t.i18n.close))]),e("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(n){t.saveSetting(),t.closeDialog("burnInTime")}},slot:"actions"},[t._v(t._s(t.i18n.save))])],1),e("mu-dialog",{attrs:{title:t.i18n.burnInDuration,open:t.dialogs.burnInDuration.open,scrollable:""},on:{"update:open":function(n){return t.$set(t.dialogs.burnInDuration,"open",n)}}},[e("mu-list",t._l(t.options.burnInDuration,function(n){return e("mu-list-item",{key:n.value},[e("mu-list-item-content",[e("mu-radio",{attrs:{label:n.name,value:n.value},model:{value:t.settings.burnInDuration,callback:function(n){t.$set(t.settings,"burnInDuration",n)},expression:"settings.burnInDuration"}})],1)],1)}),1),e("mu-button",{attrs:{slot:"actions",flat:""},on:{click:function(n){t.closeDialog("burnInDuration"),t.getSettings()}},slot:"actions"},[t._v(t._s(t.i18n.close))]),e("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:function(n){t.saveSetting(),t.closeDialog("burnInDuration")}},slot:"actions"},[t._v(t._s(t.i18n.save))])],1)],1)},o=[],s=(e("7f7f"),e("bc3a")),a=e.n(s),l=e("9099"),u=null,r=function(t){return{get name(){return l["a"][t]},value:t}},c={name:"Settings",data:function(){return{settings:{},options:{language:{"zh-CN":{name:"中文 (简体)",value:"zh-CN"},"en-US":{name:"English (United States)",value:"en-US"}},tempUnit:{metric:r("metric"),imperial:r("imperial")},weatherRefreshRate:{noRefresh:r("noRefresh"),fiveMinute:r("fiveMinute"),fifteenMinute:r("fifteenMinute"),halfHour:r("halfHour"),oneHour:r("oneHour"),threeHour:r("threeHour"),oneDay:r("oneDay")},burnInDuration:{oneMinute:r("oneMinute"),fiveMinute:r("fiveMinute"),fifteenMinute:r("fifteenMinute"),halfHour:r("halfHour"),oneHour:r("oneHour")}},dialogs:{apiKey:{open:!1},language:{open:!1},tempUnit:{open:!1},location:{open:!1},weatherRefreshRate:{open:!1},burnInTime:{open:!1},burnInDuration:{open:!1}},locationAutoCompletes:[]}},methods:{getSettings:function(){this.settings=JSON.parse(JSON.stringify(this.$store.state.settings))},openDialog:function(t){this.dialogs[t].open=!0},closeDialog:function(t){this.dialogs[t]&&(this.dialogs[t].open=!1)},saveSetting:function(){this.$store.commit("saveSettings",this.settings)},locationInputed:function(t){var n=this;u&&clearTimeout(u),u=setTimeout(function(){n.settings.location&&a()({method:"POST",url:"https://ass-we-can.herokuapp.com/autoCompleteCity",params:{q:n.settings.location}}).then(function(e){e.data&&e.data.length&&(n.locationAutoCompletes=e.data.map(function(t){return"".concat(t.name,", ").concat(t.country)}),t.target.blur(),n.$nextTick(function(){t.target.focus()}))})},500)}},computed:{i18n:function(){return l["a"]}},mounted:function(){this.getSettings()}},m=c,g=(e("21e2"),e("2877")),p=Object(g["a"])(m,i,o,!1,null,"14fc2eda",null);n["default"]=p.exports},"6a77":function(t,n,e){},"7f7f":function(t,n,e){var i=e("86cc").f,o=Function.prototype,s=/^\s*function ([^ (]*)/,a="name";a in o||e("9e1e")&&i(o,a,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-9c9dc960.2989d3a2.js.map