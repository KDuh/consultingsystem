(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{oXok:function(t,e,a){"use strict";a.d(e,"a",(function(){return X}));var i=a("L3ns"),n=a("xjcK"),r=a("m/oX"),s=a("j7Ey"),o=a("mS7b"),l=a("+nMp"),u=function(t){return"\\"+t},c=function(t){var e=(t=Object(l.d)(t)).length,a=t.charCodeAt(0);return t.split("").reduce((function(i,n,r){var s=t.charCodeAt(r);return 0===s?i+"�":127===s||s>=1&&s<=31||0===r&&s>=48&&s<=57||1===r&&s>=48&&s<=57&&45===a?i+u("".concat(s.toString(16)," ")):0===r&&45===s&&1===e?i+u(n):s>=128||45===s||95===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+n:i+u(n)}),"")},d=a("bAY6"),p=a("PCFI"),f=a("Iyau"),g=a("Io6r"),h=a("kGy3"),b=a("a3f1"),v=a("2C+6"),m=a("ex6f"),y=a("3ec0"),O=a("rUdO"),j=a("1SAT"),T=a("kO/s"),S=a("jBgq"),I=a("GUe+"),_=a("tC49"),w=Object(g.b)({id:{type:String},tag:{type:String,default:"div"},tooltip:{type:Boolean,default:!1},forceShow:{type:Boolean,default:!1},state:{type:Boolean,default:null},ariaLive:{type:String},role:{type:String}},n.h),x=i.a.extend({name:n.h,functional:!0,props:w,render:function(t,e){var a=e.props,i=e.data,n=e.children,r=!0===a.forceShow||!1===a.state;return t(a.tag,Object(_.a)(i,{class:{"invalid-feedback":!a.tooltip,"invalid-tooltip":a.tooltip,"d-block":r},attrs:{id:a.id||null,role:a.role||null,"aria-live":a.ariaLive||null,"aria-atomic":a.ariaLive?"true":null}}),n)}});var k=Object(g.b)({id:{type:String},tag:{type:String,default:"small"},textVariant:{type:String,default:"muted"},inline:{type:Boolean,default:!1}},n.k),C=i.a.extend({name:n.k,functional:!0,props:k,render:function(t,e){var a,i,n,r=e.props,s=e.data,o=e.children;return t(r.tag,Object(_.a)(s,{class:(a={"form-text":!r.inline},i="text-".concat(r.textVariant),n=r.textVariant,i in a?Object.defineProperty(a,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[i]=n,a),attrs:{id:r.id}}),o)}}),A=a("z3V6"),B=a("Sjgb"),P=a("qlm0");function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function L(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var R=Object(v.i)(P.b,["event","routerTag"]);delete R.href.default,delete R.to.default;var F=Object(g.b)(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){L(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({tag:{type:String,default:"span"},variant:{type:String,default:"secondary"},pill:{type:Boolean,default:!1}},R),n.a),E=i.a.extend({name:n.a,functional:!0,props:F,render:function(t,e){var a=e.props,i=e.data,n=e.children,r=Object(B.d)(a),s=r?P.a:a.tag,o={staticClass:"badge",class:[a.variant?"badge-".concat(a.variant):"badge-secondary",{"badge-pill":a.pill,active:a.active,disabled:a.disabled}],props:r?Object(A.a)(R,a):{}};return t(s,Object(_.a)(i,o),n)}}),V=a("8p45"),$=i.a.extend({name:n.i,mixins:[T.a,S.a],props:Object(g.b)({variant:{type:String,default:"secondary"},disabled:{type:Boolean,default:!1},title:{type:String},pill:{type:Boolean,default:!1},removeLabel:{type:String,default:"Remove tag"},tag:{type:String,default:"span"}},n.i),methods:{onDelete:function(t){var e=t.type,a=t.keyCode;this.disabled||"click"!==e&&("keydown"!==e||a!==r.b)||this.$emit("remove")}},render:function(t){var e=this.safeId(),a=this.safeId("_taglabel_"),i=t();this.disabled||(i=t(V.a,{staticClass:"b-form-tag-remove",props:{ariaLabel:this.removeLabel},attrs:{"aria-controls":e,"aria-describedby":a,"aria-keyshortcuts":"Delete"},on:{click:this.onDelete,keydown:this.onDelete}}));var n=t("span",{staticClass:"b-form-tag-content flex-grow-1 text-truncate",attrs:{id:a}},this.normalizeSlot()||this.title||[t()]);return t(E,{staticClass:"b-form-tag d-inline-flex align-items-baseline mw-100",class:{disabled:this.disabled},attrs:{id:e,title:this.title||null,"aria-labelledby":a},props:{tag:this.tag,variant:this.variant,pill:this.pill}},[n,i])}});function z(t){return function(t){if(Array.isArray(t))return J(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return J(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return J(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function H(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function q(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?H(Object(a),!0).forEach((function(e){K(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function K(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var U=["text","email","tel","url","number"],G=function(t){return Object(f.b)(t).map((function(t){return Object(l.e)(Object(l.d)(t))})).filter((function(t,e,a){return t.length>0&&a.indexOf(t)===e}))},M=function(t){return Object(m.l)(t)?t:Object(m.d)(t)&&t.target.value||""},X=i.a.extend({name:n.j,mixins:[T.a,y.a,O.a,j.a,S.a],model:{prop:"value",event:"input"},props:Object(g.b)(q(q(q(q({},y.b),O.b),j.b),{},{value:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Add tag..."},inputId:{type:String},inputType:{type:String,default:"text",validator:function(t){return Object(f.a)(U,t)}},inputClass:{type:[String,Array,Object]},inputAttrs:{type:Object,default:function(){return{}}},addButtonText:{type:String,default:"Add"},addButtonVariant:{type:String,default:"outline-secondary"},tagVariant:{type:String,default:"secondary"},tagClass:{type:[String,Array,Object]},tagPills:{type:Boolean,default:!1},tagRemoveLabel:{type:String,default:"Remove tag"},tagRemovedLabel:{type:String,default:"Tag removed"},tagValidator:{type:Function},duplicateTagText:{type:String,default:"Duplicate tag(s)"},invalidTagText:{type:String,default:"Invalid tag(s)"},limitTagsText:{type:String,default:"Tag limit reached"},limit:{type:Number},separator:{type:[String,Array]},removeOnDelete:{type:Boolean,default:!1},addOnChange:{type:Boolean,default:!1},noAddOnEnter:{type:Boolean,default:!1},noOuterFocus:{type:Boolean,default:!1},ignoreInputFocusSelector:{type:[Array,String],default:function(){return[".b-form-tag","button","input","select"]}}}),n.j),data:function(){return{hasFocus:!1,newTag:"",tags:[],removedTags:[],tagsState:{all:[],valid:[],invalid:[],duplicate:[]}}},computed:{computedInputId:function(){return this.inputId||this.safeId("__input__")},computedInputType:function(){return Object(f.a)(U,this.inputType)?this.inputType:"text"},computedInputAttrs:function(){return q(q({},this.inputAttrs),{},{id:this.computedInputId,value:this.newTag,disabled:this.disabled||null,form:this.form||null})},computedInputHandlers:function(){return{input:this.onInputInput,change:this.onInputChange,keydown:this.onInputKeydown}},computedSeparator:function(){return Object(f.b)(this.separator).filter(m.l).filter(d.a).join("")},computedSeparatorRegExp:function(){var t,e=this.computedSeparator;return e?new RegExp("[".concat((t=e,Object(l.a)(t).replace(o.m,"\\s")),"]+")):null},computedJoiner:function(){var t=this.computedSeparator.charAt(0);return" "!==t?"".concat(t," "):t},computeIgnoreInputFocusSelector:function(){return Object(f.b)(this.ignoreInputFocusSelector).filter(d.a).join(",").trim()},disableAddButton:function(){var t=this,e=Object(l.e)(this.newTag);return""===e||!this.splitTags(e).some((function(e){return!Object(f.a)(t.tags,e)&&t.validateTag(e)}))},duplicateTags:function(){return this.tagsState.duplicate},hasDuplicateTags:function(){return this.duplicateTags.length>0},invalidTags:function(){return this.tagsState.invalid},hasInvalidTags:function(){return this.invalidTags.length>0},isLimitReached:function(){var t=this.limit;return Object(m.g)(t)&&t>=0&&this.tags.length>=t}},watch:{value:function(t){this.tags=G(t)},tags:function(t,e){Object(p.a)(t,this.value)||this.$emit("input",t),Object(p.a)(t,e)||(t=Object(f.b)(t).filter(d.a),e=Object(f.b)(e).filter(d.a),this.removedTags=e.filter((function(e){return!Object(f.a)(t,e)})))},tagsState:function(t,e){Object(p.a)(t,e)||this.$emit("tag-state",t.valid,t.invalid,t.duplicate)}},created:function(){this.tags=G(this.value)},methods:{addTag:function(t){if(t=Object(m.l)(t)?t:this.newTag,!this.disabled&&""!==Object(l.e)(t)&&!this.isLimitReached){var e=this.parseTags(t);if(e.valid.length>0||0===e.all.length)if(Object(h.v)(this.getInput(),"select"))this.newTag="";else{var a=[].concat(z(e.invalid),z(e.duplicate));this.newTag=e.all.filter((function(t){return Object(f.a)(a,t)})).join(this.computedJoiner).concat(a.length>0?this.computedJoiner.charAt(0):"")}e.valid.length>0&&(this.tags=Object(f.b)(this.tags,e.valid)),this.tagsState=e,this.focus()}},removeTag:function(t){var e=this;this.disabled||(this.tags=this.tags.filter((function(e){return e!==t})),this.$nextTick((function(){e.focus()})))},onInputInput:function(t){if(!(this.disabled||Object(m.d)(t)&&t.target.composing)){var e=M(t),a=this.computedSeparatorRegExp;this.newTag!==e&&(this.newTag=e),e=Object(l.f)(e),a&&a.test(e.slice(-1))?this.addTag():this.tagsState=""===e?{all:[],valid:[],invalid:[],duplicate:[]}:this.parseTags(e)}},onInputChange:function(t){if(!this.disabled&&this.addOnChange){var e=M(t);this.newTag!==e&&(this.newTag=e),this.addTag()}},onInputKeydown:function(t){if(!this.disabled&&Object(m.d)(t)){var e=t.keyCode,a=t.target.value||"";this.noAddOnEnter||e!==r.e?!this.removeOnDelete||e!==r.a&&e!==r.b||""!==a||(Object(b.d)(t,{propagation:!1}),this.tags=this.tags.slice(0,-1)):(Object(b.d)(t,{propagation:!1}),this.addTag())}},onClick:function(t){var e=this,a=this.computeIgnoreInputFocusSelector,i=t.target;this.disabled||Object(h.q)(i)||a&&Object(h.e)(a,i,!0)||this.$nextTick((function(){e.focus()}))},onFocusin:function(){this.hasFocus=!0},onFocusout:function(){this.hasFocus=!1},handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(h.B)((function(){t.autofocus&&!t.disabled&&t.focus()}))}))},focus:function(){this.disabled||Object(h.d)(this.getInput())},blur:function(){this.disabled||Object(h.c)(this.getInput())},splitTags:function(t){t=Object(l.d)(t);var e=this.computedSeparatorRegExp;return(e?t.split(e):[t]).map(l.e).filter(d.a)},parseTags:function(t){var e=this,a=this.splitTags(t),i={all:a,valid:[],invalid:[],duplicate:[]};return a.forEach((function(t){Object(f.a)(e.tags,t)||Object(f.a)(i.valid,t)?Object(f.a)(i.duplicate,t)||i.duplicate.push(t):e.validateTag(t)?i.valid.push(t):Object(f.a)(i.invalid,t)||i.invalid.push(t)})),i},validateTag:function(t){var e=this.tagValidator,a=null;try{a=e()}catch(t){}return!!Object(m.m)(a)||e(t)},getInput:function(){return Object(h.C)("#".concat(c(this.computedInputId)),this.$el)},defaultRender:function(t){var e=t.tags,a=t.inputAttrs,i=t.inputType,n=t.inputHandlers,r=t.removeTag,s=t.addTag,o=t.isInvalid,u=t.isDuplicate,c=t.isLimitReached,p=t.disableAddButton,f=t.disabled,g=t.placeholder,h=t.inputClass,b=t.tagRemoveLabel,v=t.tagVariant,m=t.tagPills,y=t.tagClass,O=t.addButtonText,j=t.addButtonVariant,T=t.invalidTagText,S=t.duplicateTagText,_=t.limitTagsText,w=this.$createElement,k=e.map((function(t){return t=Object(l.d)(t),w($,{class:y,props:{tag:"li",title:t,disabled:f,variant:v,pill:m,removeLabel:b},on:{remove:function(){return r(t)}},key:"tags_".concat(t)},t)})),A=T&&o?this.safeId("__invalid_feedback__"):null,B=S&&u?this.safeId("__duplicate_feedback__"):null,P=_&&c?this.safeId("__limit_feedback__"):null,D=[a["aria-describedby"],A,B,P].filter(d.a).join(" "),L=w("input",{ref:"input",directives:[{name:"model",value:a.value}],staticClass:"b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",class:h,style:{outline:0,minWidth:"5rem"},attrs:q(q({},a),{},{"aria-describedby":D||null,type:i,placeholder:g||null}),domProps:{value:a.value},on:n}),R=w(I.a,{ref:"button",staticClass:"b-form-tags-button py-0",class:{invisible:p},style:{fontSize:"90%"},props:{variant:j,disabled:p||c},on:{click:function(){return s()}}},[this.normalizeSlot("add-button-text")||O]),F=this.safeId("__tag_list__"),E=w("li",{staticClass:"b-from-tags-field flex-grow-1",attrs:{role:"none","aria-live":"off","aria-controls":F},key:"tags_field"},[w("div",{staticClass:"d-flex",attrs:{role:"group"}},[L,R])]),V=w("ul",{staticClass:"b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",attrs:{id:F},key:"tags_list"},[k,E]),z=w();if(T||S||_){var J=this.computedJoiner,H=w();A&&(H=w(x,{props:{id:A,forceShow:!0},key:"tags_invalid_feedback"},[this.invalidTagText,": ",this.invalidTags.join(J)]));var K=w();B&&(K=w(C,{props:{id:B},key:"tags_duplicate_feedback"},[this.duplicateTagText,": ",this.duplicateTags.join(J)]));var U=w();P&&(U=w(C,{props:{id:P},key:"tags_limit_feedback"},[_])),z=w("div",{attrs:{"aria-live":"polite","aria-atomic":"true"},key:"tags_feedback"},[H,K,U])}return[V,z]}},render:function(t){var e=this,a=this.name,i=this.disabled,n=this.tags,r=this.computedInputId,o=this.hasFocus,l=this.noOuterFocus,u=q({tags:n.slice(),inputAttrs:this.computedInputAttrs,inputType:this.computedInputType,inputHandlers:this.computedInputHandlers,removeTag:this.removeTag,addTag:this.addTag,inputId:r,isInvalid:this.hasInvalidTags,invalidTags:this.invalidTags.slice(),isDuplicate:this.hasDuplicateTags,duplicateTags:this.duplicateTags.slice(),isLimitReached:this.isLimitReached,disableAddButton:this.disableAddButton},Object(v.j)(this.$props,["disabled","state","size","limit","separator","placeholder","inputClass","tagRemoveLabel","tagVariant","tagPills","tagClass","addButtonText","addButtonVariant","invalidTagText","duplicateTagText","limitTagsText"])),c=this.normalizeSlot(s.a,u)||this.defaultRender(u),d=t("output",{staticClass:"sr-only",attrs:{id:this.safeId("__selected_tags__"),role:"status",for:r,"aria-live":o?"polite":"off","aria-atomic":"true","aria-relevant":"additions text"}},this.tags.join(", ")),p=t("div",{staticClass:"sr-only",attrs:{id:this.safeId("__removed_tags__"),role:"status","aria-live":o?"assertive":"off","aria-atomic":"true"}},this.removedTags.length>0?"(".concat(this.tagRemovedLabel,") ").concat(this.removedTags.join(", ")):""),f=t();return a&&!i&&(f=n.map((function(i){return t("input",{attrs:{type:"hidden",value:i,name:a,form:e.form||null},key:"tag_input_".concat(i)})}))),t("div",{staticClass:"b-form-tags form-control h-auto",class:[{focus:o&&!l&&!i,disabled:i},this.sizeFormClass,this.stateClass],attrs:{id:this.safeId(),role:"group",tabindex:i||l?null:"-1","aria-describedby":this.safeId("__selected_tags__")},on:{click:this.onClick,focusin:this.onFocusin,focusout:this.onFocusout}},[d,p,c,f])}})}}]);
//# sourceMappingURL=invite.js.map?id=e764d962914138d11190