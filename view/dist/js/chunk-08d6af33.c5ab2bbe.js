(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08d6af33"],{"00a3":function(t,e,a){},"0ecc":function(t,e,a){"use strict";var i=a("d4de"),n=a.n(i);n.a},"133b":function(t,e,a){"use strict";var i=a("e7a1"),n=RegExp.prototype.exec,c=String.prototype.replace,r=n,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(r=function(t){var e,a,r,u,h=this;return l&&(a=new RegExp("^"+h.source+"$(?!\\s)",i.call(h))),o&&(e=h[s]),r=n.call(h,t),o&&r&&(h[s]=h.global?r.index+r[0].length:e),l&&r&&r.length>1&&c.call(r[0],a,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)})),r}),t.exports=r},2137:function(t,e,a){"use strict";var i=a("02f2"),n=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var c=a.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},2990:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"traffic"},[a("div",{attrs:{id:"container"}}),a("div",{staticClass:"search"},[a("md-field",[a("md-input-item",{ref:"name",attrs:{title:"出发点",placeholder:"请输入出发点",clearable:"","is-title-latent":""},on:{focus:function(e){return t.searchOnFocus("start")},blur:t.searchOnBlur},model:{value:t.searchStart,callback:function(e){t.searchStart=e},expression:"searchStart"}}),a("md-input-item",{ref:"id",attrs:{title:"目的地",placeholder:"请输入目的地",clearable:"","is-title-latent":""},on:{focus:function(e){return t.searchOnFocus("objective")},blur:t.searchOnBlur},model:{value:t.searchObjective,callback:function(e){t.searchObjective=e},expression:"searchObjective"}})],1),a("md-button",{staticClass:"search-btn1",attrs:{type:"primary",plain:""},on:{click:t.trafficTypeOnClick}},[t._v(t._s(t.trafficType.slice(0,2)))]),a("md-button",{staticClass:"search-btn2",attrs:{type:"primary"},on:{click:t.searchOnClick}},[t._v("搜索")])],1),a("div",{staticClass:"search-list",attrs:{id:t.searchListShow?"searchList":""}},[a("p",{staticClass:"up-btn",on:{click:t.searchResultDown}},[a("svg-icon",{staticClass:"up-svg",attrs:{"icon-class":"down"}})],1),a("md-field",t._l(t.searchResult,(function(e,i){return a("md-cell-item",{key:i,attrs:{title:e.name,brief:"string"===typeof e.address?e.address:e.district},on:{click:function(a){return t.searchResultListOnClick(e)}}})})),1),0===t.searchResult.length?a("div",{staticClass:"no-result"},[a("md-result-page")],1):t._e()],1),t.isPanelShow?a("div",{staticClass:"panel-list",attrs:{id:t.panelListShow?"panelList":""}},[a("p",{staticClass:"panel-list-title",on:{click:t.panelListAuto}},[a("span",[t._v("请选择合适路线")]),t.panelListShow?a("svg-icon",{staticClass:"up-svg",attrs:{"icon-class":"down"}}):a("svg-icon",{staticClass:"up-svg",attrs:{"icon-class":"up"}}),a("span",{staticClass:"sure-btn",on:{click:function(e){return e.stopPropagation(),t.panelSureOnClick(e)}}},[t._v("确定")])],1),a("div",{attrs:{id:"panel"}})]):t._e(),a("md-dialog",{attrs:{title:"本次出行",closable:!0,btns:t.btnDialog},model:{value:t.sureDialog,callback:function(e){t.sureDialog=e},expression:"sureDialog"}},[a("md-field",{staticClass:"dialog-field"},[a("md-detail-item",{attrs:{title:"交通公交",content:t.trafficType,bold:""}}),a("md-detail-item",{attrs:{title:"出发地",content:t.searchStart}}),a("md-detail-item",{attrs:{title:"目的地",content:t.searchObjective}}),a("md-field-item",{attrs:{title:"花费"}},[a("md-stepper",{attrs:{slot:"right",min:"0"},slot:"right",model:{value:t.spendValue,callback:function(e){t.spendValue=e},expression:"spendValue"}})],1),a("md-detail-item",{attrs:{title:"日期",content:t.dateTime}}),a("md-input-item",{attrs:{id:"markText",title:"备注",placeholder:"点此输入备注，少于20字",maxlength:20},model:{value:t.markText,callback:function(e){t.markText=e},expression:"markText"}})],1)],1),a("md-popup",{attrs:{position:"top"},model:{value:t.tripTypePopupShow,callback:function(e){t.tripTypePopupShow=e},expression:"tripTypePopupShow"}},[a("div",{staticClass:"traffic-type"},[a("md-field",{staticClass:"radio-field",attrs:{title:"选择出行工具"}},[a("md-radio-list",{attrs:{options:t.reasons,icon:"right","icon-inverse":"","icon-disabled":"","icon-position":"right"},on:{change:t.trafficTypeOnChange},model:{value:t.tripTypeMarriage,callback:function(e){t.tripTypeMarriage=e},expression:"tripTypeMarriage"}})],1)],1)])],1)},n=[],c=(a("efce"),a("4634"),a("ed8b"),a("db3e"),a("7cfd"),a("e4e2")),r=a("7090"),s=a("61f7"),o=a("08c1");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"traffic",data:function(){return{spendValue:0,trafficMap:null,searchState:"start",searchStart:"",searchStartData:{},searchObjective:"",searchObjectiveData:{},timer:null,searchResult:[],searchListShow:!1,watchStop:!1,panelListShow:!1,isPanelShow:!1,driving:null,tripTypePopupShow:!1,tripTypeMarriage:"AMap.Transfer",trafficType:"公交/地铁",markText:"",sureDialog:!1,dateTime:Object(s["a"])().date3,distance:"0",btnDialog:[{text:"确认保存",handler:this.onIconConfirm}],reasons:[{value:"AMap.Transfer",text:"公交/地铁"},{value:"AMap.Driving",text:"出租车"},{value:"AMap.Riding",text:"单车/电车"},{value:"AMap.Walking",text:"步行"}]}},watch:{searchStart:function(t){this.searchKeyBefore(t)},searchObjective:function(t){this.searchKeyBefore(t)},searchListShow:function(t){t&&(this.panelListShow=!1)},panelListShow:function(t){t&&(this.searchListShow=!1)}},mounted:function(){this.init(),this.loactionMap()},methods:u({searchOnFocus:function(t){this.searchState=t,this.searchResult=[],this.searchListShow=!0,"start"===t?this.searchKeyBefore(this.searchStart):this.searchKeyBefore(this.searchObjective)},searchOnBlur:function(){},searchResultDown:function(){this.searchListShow=!1},searchResultListOnClick:function(t){console.log(t),"start"===this.searchState?(this.searchStartData=t,this.searchStart=t.name):(this.searchObjectiveData=t,this.searchObjective=t.name),this.searchListShow=!1,this.watchStop=!0},trafficTypeOnClick:function(){this.tripTypePopupShow=!0},trafficTypeOnChange:function(t){this.trafficType=t.text,this.tripTypePopupShow=!1},searchOnClick:function(){this.driving&&this.driving.clear();var t=[];this.searchStartData.location&&this.searchObjectiveData.location?(t.push(this.searchStartData.location),t.push(this.searchObjectiveData.location),this.isPanelShow=!0,this.searchDriving(t)):r["h"].failed("请先在列表中确认准确地点")},panelSureOnClick:function(){this.panelListShow=!1,this.sureDialog=!0,this.dateTime=Object(s["a"])().date3},panelListAuto:function(){this.panelListShow=!this.panelListShow},onIconConfirm:function(){this.saveTripDataAjax(),this.sureDialog=!1,this.driving.clear(),this.searchStart="",this.searchStartData={},this.searchObjective="",this.searchObjectiveData={},this.isPanelShow=!1},init:function(){this.trafficMap=new window.AMap.Map("container",{resizeEnable:!0,center:[116.397428,39.90923],zoom:13})},searchKeyBefore:function(t){var e=this;""!==t&&(this.watchStop?this.watchStop=!1:(clearTimeout(this.timer),this.timer=setTimeout((function(){e.searchKey(t)}),500)))},searchKey:function(t){this.ToastHide("正在搜索...");var e=this;this.trafficMap.plugin("AMap.Autocomplete",(function(){var a={city:"全国"},i=new window.AMap.Autocomplete(a);i.search(t,(function(t,a){r["h"].hide(),console.log(t,a),"complete"===t&&"OK"===a.info?e.searchResult=a.tips:e.searchResult=[]}))}))},searchDriving:function(t){console.log("LngLatArr"),console.log(t),this.ToastHide("正在规划路线...");var e=this,a=e.tripTypeMarriage.slice(5,15);console.log(a),this.trafficMap.plugin(e.tripTypeMarriage,(function(){e.driving=new window.AMap[a]({map:e.trafficMap,city:"北京市",panel:"panel",autoFitView:!0}),e.driving.search(t[0],t[1],(function(t,a){r["h"].hide(),console.log(t,a),"complete"===t?(console.log("绘制驾车路线完成"),e.panelListShow=!0,a.plans?e.distance=(a.plans[0].distance/1e3).toFixed(2):e.distance=(a.routes[0].distance/1e3).toFixed(2)):(console.log("获取驾车数据失败："+a),r["h"].failed("未检测到匹配路线"))}))}))},loactionMap:function(){var t=this;this.trafficMap.plugin(["AMap.Geolocation","AMap.ControlBar"],(function(){var e=new window.AMap.Geolocation({enableHighAccuracy:!0,timeout:15e3,buttonPosition:"RB",buttonOffset:new window.AMap.Pixel(100,20),zoomToAccuracy:!0});t.trafficMap.addControl(e),e.getCurrentPosition((function(t,e){})),window.AMap.event.addListener(e,"error",(function(t){console.log(t)}))}))},ToastHide:function(t){r["h"].loading(t),setTimeout((function(){r["h"].hide()}),15e3)},saveTripDataAjax:function(){var t=this;console.log("确认");var e="".concat(this.searchStartData.location.lng,", ").concat(this.searchStartData.location.lat),a="".concat(this.searchObjectiveData.location.lng,", ").concat(this.searchObjectiveData.location.lat),i={type:"traffic",tripType:this.trafficType,distance:this.distance,date:Object(s["a"])().date2,time:Object(s["a"])().date4,price:this.spendValue,startPlace:this.searchStart,endPlace:this.searchObjective,startCode:e,endCode:a,mark:this.markText||"未备注"};console.log(i),this.$http.get("/trip/addTraffic",i).then((function(e){200===e.data.code?(r["h"].succeed("本次出行记录已上传"),t.setUserData(e.data.data)):r["h"].failed("记录上传出错")}))}},Object(o["b"])(["setUserData"]))},p=h,f=(a("0ecc"),a("a253"),a("4e82")),d=Object(f["a"])(p,i,n,!1,null,null,null);e["default"]=d.exports},"61f7":function(t,e,a){"use strict";function i(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate(),n=t.getHours(),c=t.getMinutes(),r=t.getSeconds(),s={date1:"".concat(e,"年").concat(a,"月").concat(i,"日"),date2:"".concat(e,"/").concat(a,"/").concat(i),date3:"".concat(e,"年").concat(a,"月").concat(i,"日/").concat(n,":").concat(c,":").concat(r),date4:"".concat(n,":").concat(c,":").concat(r)};return s}a.d(e,"a",(function(){return i}))},"6af6":function(t,e,a){"use strict";a("b3f3");var i=a("a6d5"),n=a("b8ea"),c=a("0cc1"),r=a("3038"),s=a("1277"),o=a("133b"),l=s("species"),u=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=s(t),f=!c((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),d=f?!c((function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[p](""),!e})):void 0;if(!f||!d||"replace"===t&&!u||"split"===t&&!h){var v=/./[p],g=a(r,p,""[t],(function(t,e,a,i,n){return e.exec===o?f&&!n?{done:!0,value:v.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}})),b=g[0],m=g[1];i(String.prototype,t,b),n(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"8f12":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},a253:function(t,e,a){"use strict";var i=a("00a3"),n=a.n(i);n.a},b3f3:function(t,e,a){"use strict";var i=a("133b");a("2498")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},d4de:function(t,e,a){},db3e:function(t,e,a){"use strict";var i=a("8cac"),n=a("8f12"),c=a("2137");a("6af6")("search",1,(function(t,e,a,r){return[function(a){var i=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,i):new RegExp(a)[e](String(i))},function(t){var e=r(a,t,this);if(e.done)return e.value;var s=i(t),o=String(this),l=s.lastIndex;n(l,0)||(s.lastIndex=0);var u=c(s,o);return n(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},e7a1:function(t,e,a){"use strict";var i=a("8cac");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}}}]);
//# sourceMappingURL=chunk-08d6af33.c5ab2bbe.js.map