(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"/4Es":function(t,e,i){"use strict";i.r(e);var n=i("L2JU");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a={extends:i("g+26").a,data:function(){return{formData:{identifier:""},initUrl:"meetings"}},methods:s(s({},Object(n.b)("config",["SetUiConfig"])),{},{submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.Custom({url:"/meetings/m/".concat(this.formData.identifier),method:"get"}).then((function(e){e.uuid&&t.$router.push({name:"liveMeeting",params:{uuid:e.uuid}})})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))}}),mounted:function(){var t=this;this.isLoading=!1,this.$nextTick((function(){t.SetUiConfig({pageHeaderShow:!1})}))},destroyed:function(){this.SetUiConfig({pageHeaderShow:!0})}},c=i("KHd+"),u=Object(c.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("base-container",{staticClass:"mt-element",attrs:{boxed:""}},[t.isLoading?[i("div",{staticClass:"pt-150 pb-150 text-center"},[i("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor,size:"inline","with-overlay":!1}}),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("h5",[t._v(t._s(t.$t("meeting.joining_a_meeting")))])],1)]:[i("div",{staticClass:"row pt-15 pb-15"},[i("div",{staticClass:"col-12 col-md-5 pt-50 pb-50"},[i("h1",{staticClass:"text-left"},[t._v(t._s(t.$t("meeting.join_a_meeting")))]),t._v(" "),i("p",{staticClass:"text-muted"},[t._v(t._s(t.$t("meeting.join_a_meeting_desc")))]),t._v(" "),i("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("base-input",{attrs:{"auto-focus":"",label:t.$t("meeting.enter_meeting_code"),type:"text",error:t.formErrors.identifier,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"identifier",e)}},model:{value:t.formData.identifier,callback:function(e){t.$set(t.formData,"identifier",e)},expression:"formData.identifier"}}),t._v(" "),i("div",{staticClass:"form-footer mt-5"},[t.hasPermission("create-meeting")?i("div",{staticClass:"left-side"},[i("base-button",{attrs:{type:"button",design:"light"},on:{click:function(e){return t.$router.push({name:"appInstantMeetingStart"})}}},[t._v(t._s(t.$t("meeting.new_meeting")))])],1):t._e(),t._v(" "),i("div",{staticClass:"right-side"},[i("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("meeting.join")))])],1)])],1)]),t._v(" "),i("div",{staticClass:"col-12 col-md-6 offset-md-1"},[i("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"/images/DemoScreenshot.png"}})])])]],2)}),[],!1,null,null,null);e.default=u.exports}}]);
//# sourceMappingURL=join.js.map?id=590f9a0a3bf733dfb110