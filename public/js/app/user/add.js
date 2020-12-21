(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{hr5N:function(e,r,a){"use strict";a.r(r);var t=a("yjgD"),o=a("BcCH"),s={components:{CommonForm:t.a},beforeRouteLeave:function(e,r,a){o.a.$emit("ROUTE_LEAVING",a)}},i=a("KHd+"),n=Object(i.a)(s,(function(){var e=this.$createElement,r=this._self._c||e;return r("base-container",{attrs:{boxed:""}},[r("common-form")],1)}),[],!1,null,null,null);r.default=n.exports},yjgD:function(e,r,a){"use strict";var t={extends:a("g+26").a,data:function(){return{formData:{uuid:null,username:"",email:"",profile:{name:"",gender:null,birthDate:null},password:"",passwordConfirmation:"",forcePassword:!1,role:null},preRequisite:{genders:[],roles:[]},formLabels:{name:$t("user.props.name"),email:$t("user.props.email"),gender:$t("user.props.gender"),role:$t("config.role.role"),birthDate:$t("user.props.birth_date"),username:$t("user.props.username"),password:$t("user.props.password"),passwordConfirmation:$t("user.props.password_confirmation")},initUrl:"users"}},mounted:function(){this.getInitialData()}},o=a("KHd+"),s=Object(o.a)(t,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("form",{on:{submit:function(r){return r.preventDefault(),e.submit(r)}}},[a("animated-loader",{attrs:{"is-loading":e.isLoading||e.isFetching,"loader-color":e.vars.loaderColor}}),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{"auto-focus":"",label:e.formLabels.name,type:"text",error:e.formErrors.profileName,required:"",format:"startCase"},on:{"update:error":function(r){return e.$set(e.formErrors,"profileName",r)}},model:{value:e.formData.profile.name,callback:function(r){e.$set(e.formData.profile,"name",r)},expression:"formData.profile.name"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-select",{attrs:{options:e.preRequisite.roles,label:e.formLabels.role,error:e.formErrors.role,required:"","preselect-first":""},on:{"update:error":function(r){return e.$set(e.formErrors,"role",r)}},model:{value:e.formData.role,callback:function(r){e.$set(e.formData,"role",r)},expression:"formData.role"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{label:e.formLabels.email,type:"text",error:e.formErrors.email,required:"",format:"lowercase"},on:{"update:error":function(r){return e.$set(e.formErrors,"email",r)}},model:{value:e.formData.email,callback:function(r){e.$set(e.formData,"email",r)},expression:"formData.email"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{label:e.formLabels.username,type:"text",error:e.formErrors.username,required:""},on:{"update:error":function(r){return e.$set(e.formErrors,"username",r)}},model:{value:e.formData.username,callback:function(r){e.$set(e.formData,"username",r)},expression:"formData.username"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-select",{attrs:{options:e.preRequisite.genders,label:e.formLabels.gender,error:e.formErrors.profileGender,required:"","preselect-first":""},on:{"update:error":function(r){return e.$set(e.formErrors,"profileGender",r)}},model:{value:e.formData.profile.gender,callback:function(r){e.$set(e.formData.profile,"gender",r)},expression:"formData.profile.gender"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{label:e.formLabels.birthDate,"addon-right-icon":"far fa-calendar-alt",type:"text",error:e.formErrors.profileBirthDate,"is-wrapper":!0},on:{"update:error":function(r){return e.$set(e.formErrors,"profileBirthDate",r)}},model:{value:e.formData.profile.birthDate,callback:function(r){e.$set(e.formData.profile,"birthDate",r)},expression:"formData.profile.birthDate"}},[a("date-picker",{staticClass:"form-control datepicker",attrs:{config:e.vars.datepickerConfig},model:{value:e.formData.profile.birthDate,callback:function(r){e.$set(e.formData.profile,"birthDate",r)},expression:"formData.profile.birthDate"}})],1)],1),e._v(" "),e.editData?[a("div",{staticClass:"col-12 mt-4 mb-3"},[a("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:e.formData.forcePassword,callback:function(r){e.$set(e.formData,"forcePassword",r)},expression:"formData.forcePassword"}},[e._v("\n                    "+e._s(e.$t("user.force_password"))+"\n                ")])],1)]:e._e(),e._v(" "),!e.editData||e.formData.forcePassword?[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{label:e.formLabels.password,type:"password",error:e.formErrors.password,required:""},on:{"update:error":function(r){return e.$set(e.formErrors,"password",r)}},model:{value:e.formData.password,callback:function(r){e.$set(e.formData,"password",r)},expression:"formData.password"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("base-input",{attrs:{label:e.formLabels.passwordConfirmation,type:"password",error:e.formErrors.passwordConfirmation,required:""},on:{"update:error":function(r){return e.$set(e.formErrors,"passwordConfirmation",r)}},model:{value:e.formData.passwordConfirmation,callback:function(r){e.$set(e.formData,"passwordConfirmation",r)},expression:"formData.passwordConfirmation"}})],1)]:e._e()],2),e._v(" "),a("div",{staticClass:"form-footer mt-3"},[a("div",{staticClass:"left-side"},[a("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(r){return e.$router.back()}}},[a("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.cancel")))]),e._v(" "),e.showKeepAdding?a("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:e.keepAdding,callback:function(r){e.keepAdding=r},expression:"keepAdding"}},[e._v("\n                "+e._s(e.$t("general.keep_adding"))+"\n            ")]):e._e()],1),e._v(" "),a("div",{staticClass:"right-side"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:e.reset}},[e._v(e._s(e.$t("general.reset")))]),e._v(" "),a("base-button",{attrs:{type:"submit",design:"primary"}},[a("i",{staticClass:"fas fa-save"}),e._v(" "+e._s(e.$t("global.save",{attribute:e.$t("user.user")})))])],1)]),e._v(" "),e.showKeepAdding&&e.keepAdding?[a("keep-adding-form",{attrs:{"keep-adding-fields":e.keepAddingFields,"keep-adding-option":e.keepAddingOption,"keep-adding-selected-fields":e.keepAddingSelectedFields,"is-loading":e.isLoading},on:{optionUpdated:function(r){e.keepAddingOption=r},fieldsUpdated:function(r){e.keepAddingSelectedFields=r}}})]:e._e()],2)}),[],!1,null,null,null);r.a=s.exports}}]);
//# sourceMappingURL=add.js.map?id=5597719f73c80e7559c2