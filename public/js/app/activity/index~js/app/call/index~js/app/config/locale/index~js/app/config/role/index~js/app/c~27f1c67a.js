(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{BcCH:function(t,e,i){"use strict";var r=i("XuX8"),n=new(i.n(r).a);e.a=n},"TBq+":function(t,e,i){"use strict";i.d(e,"k",(function(){return l})),i.d(e,"j",(function(){return c})),i.d(e,"i",(function(){return f})),i.d(e,"a",(function(){return d})),i.d(e,"g",(function(){return p})),i.d(e,"h",(function(){return m})),i.d(e,"l",(function(){return E})),i.d(e,"c",(function(){return P})),i.d(e,"m",(function(){return $})),i.d(e,"e",(function(){return w})),i.d(e,"f",(function(){return T})),i.d(e,"d",(function(){return q})),i.d(e,"b",(function(){return j}));i("nFxi");function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=function(t){var e=t.label,i=t.icon,r=t.tooltip,n=t.design,s=void 0===n?{color:"white",size:"md"}:n;return{label:e,icon:i,tooltip:r,design:s&&s.color||"white",size:s&&s.size||"md"}},l=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return o(o({},u({label:t,icon:e,tooltip:r,design:n})),{},{action:function(t){t.push({name:i,params:s,query:a})}})},c=function(t,e,i,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return o(o({},l(t,e,i,n,s,a,u)),{},{permissions:[r]})},f=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return o(o({},u({label:t,icon:e,tooltip:r,design:n})),{},{action:i})},h=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return f(t,e,(function(t,e){e.$emit(i.event,i.options)}),r,n)},d=function(t,e){return c($t("general.add_new"),"fas fa-plus",t,e)},p=function(){return h($t("general.filter"),"fas fa-filter",{event:"TOGGLE_FILTER"})},g={storeName:"common",design:"white"},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return o(o(o({},g),t),{},{options:[{label:$t("general.default"),dispatch:{sortBy:"created_at"}}].concat(r(e))})},b=function(t){return{label:t.label,icon:t.icon}},y=function(t,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return o(o({},b({label:t,icon:e})),{},{to:{name:i,params:r,query:n}})},v=function(t,e,i,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return o(o({},y(t,e,i,n,s)),{},{permissions:[r]})},O=function(t,e,i){return o(o({},b({label:t,icon:e})),{},{action:i})},R=function(t,e,i){return O(t,e,(function(t,e){e.$emit(i.event,i.options)}))},E=function(t,e){return v($t("general.import"),"fas fa-file-import",t,e)},P=function(t,e){return v($t("general.config"),"fas fa-cog",t,e)},$=function(){return R($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},w=function(){return R($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},T=function(){return R($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},q=function(){return R($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},F={key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},L={key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}},j=o(o(o({},{key_f:{type:"event",emit:"TOGGLE_FILTER"}}),F),L)},UPFT:function(t,e,i){"use strict";var r=i("o0o1"),n=i.n(r),s=i("TBq+"),o=i("L2JU"),a=i("kogc"),u=i("BcCH");function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,i,r,n,s,o){try{var a=t[s](o),u=a.value}catch(t){return void i(t)}a.done?e(u):Promise.resolve(u).then(r,n)}function f(t){return function(){var e=this,i=arguments;return new Promise((function(r,n){var s=t.apply(e,i);function o(t){c(s,r,n,o,a,"next",t)}function a(t){c(s,r,n,o,a,"throw",t)}o(void 0)}))}}function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={data:function(){return{uuid:null,entity:null,fields:[],preRequisite:{},showFilters:!1,isInitialized:!1,isLoading:!1,getInitialDataCalled:!1,gotError:!1,selectedRows:[],formErrors:{},customFilters:{},appendToQuery:{},filtersOptions:{name:""},sortOptions:{hasScroll:!1},columnsOptions:{hasScroll:!1},exportOptions:{},initUrl:"",initSubUrl:null,dataType:null,printOptions:null,headerButtons:null,headerFloaters:null,headerLinks:null,hideFilterButton:!1}},computed:d(d(d(d({},Object(o.c)("common",["entities","filters","columns","others"])),Object(o.c)("config",["configs","configs","uiConfigs","vars"])),Object(o.c)("user",["hasPermission","hasAnyPermission"])),{},{isFiltered:function(){var t=this.$route.query;return"true"===t.filtered||"false"!==t.filtered&&t.filtered},selectAllRows:{get:function(){var t=this;return this.entities&&this.entities.data.every((function(e){var i=e.uuid;return-1!==t.selectedRows.indexOf(i)}))},set:function(t){var e=this.selectedRows;t?this.entities.data.forEach((function(t){-1===e.indexOf(t.uuid)&&e.push(t.uuid)})):this.entities.data.forEach((function(t){var i=e.indexOf(t.uuid);-1!==i&&e.splice(i,1)})),this.selectedRows=e}},showTagsForm:function(){return!!this.selectedRows.length}}),watch:{$route:function(t,e){this.initSubUrl&&this.$route.params.uuid&&t.params.uuid!==e.params.uuid?(this.doInit(),this.getEntityData()):(this.updatePageMeta(),this.applyPageHeader())},columns:function(t,e){t.fields&&(this.fields=t.fields,this.refreshTable())}},methods:d(d(d({},Object(o.b)("common",["Init","InitSub","Get","GetList","Destroy","SetMeta","SetFilters","Custom","GetPreRequisite","ResetFilters"])),Object(o.b)("config",["SetUiConfig","SetConfig"])),{},{itemsProvider:function(t){var e=this;this.isLoading=!0;var i=d(d({},this.filters),{},{currentPage:this.entities.meta.currentPage,perPage:this.entities.meta.perPage},this.appendToQuery);return this.gotError=!1,this.GetList(i).then((function(t){return t.data})).catch((function(t){return e.isLoading=!1,formUtil.handleErrors(t),e.gotError=!0,[]}))},updatePageMeta:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.$route.query,i={currentPage:parseInt(e.currentPage||1),perPage:parseInt(e.perPage||this.configs.system.perPage)},r=this.filters;e.objForEach((function(t,e){r[e]=t})),this.customFilters&&this.customFilters.objForEach((function(t,e){r[e]=t})),this.SetMeta(i),this.SetFilters(r),t&&(this.isInitialized?(this.refreshTable(),this.isInitialized=!0):this.isInitialized=!0)},refreshTable:function(){this.$refs&&this.$refs.hasOwnProperty("btable")&&this.$refs.btable&&this.$refs.btable.refresh()},refreshTableIfRoute:function(t){this.$route.name===t&&this.refreshTable()},toggleFilter:function(){this.showFilters=!this.showFilters},deleteEntity:function(t){var e=this;formUtil.confirmAction().then((function(i){i.value?(e.isLoading=!0,e.Destroy(t).then((function(t){e.isLoading=!1,e.$toasted.success(t.message,e.$toastConfig),e.$nextTick((function(){e.refreshTable(),"function"==typeof e.getInitialData&&e.getInitialDataCalled&&e.getInitialDataCalledAfterDeleting&&e.getInitialData()}))})).catch((function(t){e.isLoading=!1,e.isInitialized=!0,e.formErrors=formUtil.handleErrors(t)}))):(i.dismiss,a.c.DismissReason.cancel)}))},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(i,r){e.preRequisite[r]=t.hasOwnProperty(r)?t[r]:i})),this.isLoading=!1},getInitialData:function(){var t=this;return f(n.a.mark((function e(){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.getInitialDataCalled=!0,e.prev=2,e.next=5,t.GetPreRequisite(t.customFilters);case 5:return i=e.sent,t.fillPreRequisite(i),t.updatePageMeta(),"function"==typeof t.afterGetInitialData&&t.afterGetInitialData(),e.abrupt("return",i);case 12:throw e.prev=12,e.t0=e.catch(2),t.isLoading=!1,t.formErrors=formUtil.handleErrors(e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))()},getEntityData:function(){var t=this;if(this.isLoading=!0,this.initSubUrl&&this.$route.params.uuid)return this.uuid=this.$route.params.uuid,this.Get({uuid:this.uuid}).then((function(e){t.entity=e,e.name&&(t.pageTitle=e.name,t.subTitle=e.name?t.subTitle:"",t.applyPageHeader()),t.doInitSub(),t.isLoading=!1,t.updatePageMeta(),"function"==typeof t.afterGetEntityData&&t.afterGetEntityData()})).catch((function(e){t.isLoading=!1,formUtil.handleErrors(e),t.$router.back()}));this.isLoading=!1,this.$router.back()},applyTags:function(t){var e=this;this.Custom({url:"/".concat(this.initUrl,"/action"),method:"post",data:d(d({},t),{},{uuids:this.selectedRows})}).then((function(t){e.selectedRows=[],e.$toasted.success(t.message,e.$toastConfig),e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.formErrors=formUtil.handleErrors(t)}))},getSortOptionsArray:function(){return this.fields.filter((function(t){return t.sort})).map((function(t){return{label:t.label,sort:t.sort}}))},getHeaderOptions:function(){var t=[];this.routesRequired&&this.routesRequired.add&&("object"===l(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.add?t.push(s.a(this.routesRequired.add,this.permissionsRequired.add)):this.permissionsRequired?t.push(s.a(this.routesRequired.add,this.permissionsRequired)):t.push(s.a(this.routesRequired.add))),this.hideFilterButton||t.push(s.g()),this.headerButtons&&(t=t.concat(this.headerButtons));this.headerFloaters&&(headerFloaters=headerFloaters.concat(this.headerFloaters));var e=[];return this.routesRequired&&this.routesRequired.import&&("object"===l(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.import?e.push(s.l(this.routesRequired.import,this.permissionsRequired.import)):this.permissionsRequired&&e.push(s.l(this.routesRequired.import,this.permissionsRequired))),this.routesRequired&&this.routesRequired.config&&("object"===l(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.config?e.push(s.c(this.routesRequired.config,this.permissionsRequired.config)):this.permissionsRequired&&e.push(s.c(this.routesRequired.config,this.permissionsRequired))),e.push(s.m()),e.push(s.e()),e.push(s.d()),e.push(s.f()),this.headerLinks&&(e=e.concat(this.headerLinks)),{hideLinks:this.hideHeaderLinks||!1,buttons:t,floaters:[],sort:s.h(this.sortOptions||{},this.getSortOptionsArray()),links:e,columns:this.columnsOptions,title:this.pageTitle||"",subTitle:this.pageTitle&&this.subTitle||""}},getKeyBindingOptions:function(){var t=d({},s.b);return this.routesRequired&&this.routesRequired.add&&(t.key_a=this.routesRequired.add),t},applyPageHeader:function(){var t=Object.assign({},this.getHeaderOptions(),this.header||{}),e=Object.assign({},this.getKeyBindingOptions(),this.keyBindings||{});this.SetUiConfig({pageHeader:t}),this.SetConfig({keyBindings:e})},export:function(t){var e=this;return f(n.a.mark((function r(){var s,o,a,u,l,c,f,h,d;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.isLoading=!0,r.next=3,i.e(98).then(i.bind(null,"tkDv"));case 3:if(s=r.sent,o=function(t,e){var i,r=e.split(".");return r&&r.length?r.forEach((function(e,r){i=i?i[e]:0===r?t[e]:null})):i=t[e],i},u=e.exportOptions||{},l=e.exportPdfFields||e.fields.filter((function(t){return t.label&&!t.cantExport})),c=[],!1,f="",h=moment().unix(),e.$route.meta.title&&(f=e.$route.meta.trans?$t(e.$route.meta.trans,{attribute:$t(e.$route.meta.title)}):$t(e.$route.meta.title),h=f.toLowerCase().replace(/\s+/g,"-")+"-"+h),"xls-csv"===t.type&&(t.type="csv",!0),"pdf"!==t.type&&"print"!==t.type){r.next=22;break}return r.next=16,Promise.all([i.e(117),i.e(111)]).then(i.bind(null,"xWJq"));case 16:a=r.sent,d=l.map((function(t){return{header:t.label,dataKey:t.key}})),c=e.entities.data.map((function(t){var e={};return l.forEach((function(i){var r=i.transformer,n=o(t,i.key);r&&(n||!1===n)&&(r=_.isArray(r)?r:[r]).forEach((function(e){var r=_.isFunction(e)?e:s[e];n=i.transformerOpts?r(n,i.transformerOpts):r(n,t)})),e[i.key]=n||""})),e})),"pdf"===t.type?a.downloadPdfFile(h,f,d,c,u):a.printTable(f,d,c,u),r.next=27;break;case 22:return r.next=24,i.e(110).then(i.bind(null,"LBS4"));case 24:a=r.sent,c=e.entities.data.map((function(t){var e={};return l.forEach((function(i){var r=i.transformer,n=o(t,i.key);r&&(n||!1===n)&&(r=_.isArray(r)?r:[r]).forEach((function(e){var r=_.isFunction(e)?e:s[e];n=i.transformerOpts?r(n,i.transformerOpts):r(n,t)})),e[i.label]=n||""})),e})),a.downloadFile(c,t.type,h);case 27:e.isLoading=!1;case 28:case"end":return r.stop()}}),r)})))()},doInitSub:function(){this.uuid=this.$route.params.uuid,this.uuid||(this.isLoading=!1,this.$router.back()),this.InitSub({url:this.uuid+"/"+this.initSubUrl,filters:this.filtersOptions})},doInit:function(){this.Init({url:this.initUrl,filters:this.filtersOptions,columns:this.fields}),this.applyPageHeader()},clearFilters:function(){this.ResetFilters(),this.$route.query&&this.$route.query.filtered&&this.$router.push({path:this.$route.path})},rowClickHandler:function(t,e){t.action&&"function"==typeof t.action?t.action(t,e):t.route&&this.$router.push({name:t.route,params:{uuid:e.uuid}})}}),mounted:function(){u.a.$off("REFRESH_TABLE",this.refreshTableIfRoute),u.a.$on("REFRESH_TABLE",this.refreshTableIfRoute),u.a.$off("TOGGLE_FILTER",this.toggleFilter),u.a.$on("TOGGLE_FILTER",this.toggleFilter),u.a.$off("CLEAR_FILTERS",this.clearFilters),u.a.$on("CLEAR_FILTERS",this.clearFilters),u.a.$off("EXPORT",this.export),u.a.$on("EXPORT",this.export),this.doInit()},destroyed:function(){u.a.$off("REFRESH_TABLE",this.refreshTableIfRoute),u.a.$off("TOGGLE_FILTER",this.toggleFilter),u.a.$off("CLEAR_FILTERS",this.clearFilters),u.a.$off("EXPORT",this.export)}}}}]);
//# sourceMappingURL=c~27f1c67a.js.map?id=dd0d13a897587da7698c