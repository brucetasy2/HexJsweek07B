(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-961bc26c"],{"057f":function(t,e,a){var n=a("fc6a"),i=a("241c").f,r={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==r.call(t)?s(t):i(n(t))}},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[t.pages.count>1?a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("上一頁«")])]):t._e()]),t._l(t.pages.total_pages,(function(e,n){return a("li",{key:n,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[t.pages.count>1?a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("下一頁»")])]):t._e()])],2)])])},i=[],r={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("naviPages",t)}}},o=r,s=a("2877"),c=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=c.exports},"1be0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right mt-4 mx-5"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("new")}}},[t._v("加入圖檔")])]),a("table",{staticClass:"table table-striped table-bordered mt-4",attrs:{cellspacing:"0"}},[t._m(0),a("tbody",t._l(t.storeImg,(function(e,n){return a("tr",{key:n},[a("td",[a("img",{staticClass:"img-fluid",attrs:{src:e.path,width:"100px"}})]),a("td",[a("a",{attrs:{href:e.path,target:"_blank"}},[t._v("CLICK ME")])]),a("td",[a("div",{staticClass:"btn-group btn-group-sm"},[a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return a.preventDefault(),t.openModal("delete",e)}}},[t._v("刪除")])])])])})),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{naviPages:t.getSorage}}),a("div",[a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[t._v("是否刪除該筆資料 (刪除後將無法恢復)。")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteData}},[t._v("確認刪除")])])])])])]),a("div",[a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content "},[t._m(2),a("div",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("上傳圖片 ")]),a("input",{ref:"file",staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.updateData}},[t._v("確認")])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("圖片縮圖")]),a("th",[t._v("圖片位置")]),a("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除資料")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("圖檔上傳")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=(a("99af"),a("ac1f"),a("5319"),a("5530")),o=a("1799"),s={components:{Pagination:o["a"]},data:function(){return{isNew:!1,isLoading:!1,uuid:"d952d084-2b40-40c3-9758-1aef7c7aa9e6",xerror:"NO_ERROR",pagination:[],storeImg:[],tempImg:{imageUrl:[]},status:{fileUploading:!1},updimg:[]}},created:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)BruceStoreT7_token\s*=\s*([^;]*).*$)|^.*$/,"$1");var e="".concat("https://course-ec-api.hexschool.io/api/","auth/check");this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.$http.post(e,{api_token:this.token}).then((function(){t.getSorage()}))},methods:{getSorage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat(this.uuid,"/admin/storage");this.$http.get(a,{params:{page:"".concat(e),paged:5}}).then((function(e){t.storeImg=e.data.data,t.pagination=e.data.meta.pagination,t.isLoading=!1}))},deleteData:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat(this.uuid,"/admin/storage/").concat(this.tempImg.id);this.$http.delete(e).then((function(){t.isLoading=!1,t.$swal.fire({icon:"success",title:"刪除圖檔",text:"成功 !",timer:1e3}).then((function(){t.getSorage(t.pagination.current_page)})),$("#deleteModal").modal("hide")})).catch((function(e){t.isLoading=!1,t.$swal.fire({icon:"error",title:"刪除圖檔",text:"錯誤代碼".concat(e.request.status)})})),this.getSorage(this.pagination.current_page)},openModal:function(t,e){switch(t){case"new":this.tempImg={},this.isNew=!0,$("#editModal").modal("show");break;case"edit":this.isNew=!1,$("#editModal").modal("show");break;case"delete":this.tempImg=Object(r["a"])({},e),$("#deleteModal").modal("show");break;default:break}},updateData:function(){var t=this;if(!0===this.status.fileUploading){var e="".concat("https://course-ec-api.hexschool.io/api/").concat(this.uuid,"/admin/storage");this.$http.post(e,this.updimg,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200===e.status&&(t.status.fileUploading=!1),t.$swal.fire({icon:"success",title:"檔案上傳",text:"成功",timer:4e3}).then((function(){t.getSorage(t.pagination.current_page)})),$("#editModal").modal("hide")})).catch((function(e){t.status.fileUploading=!1,t.$swal.fire({icon:"error",title:"檔案上傳失敗...",text:"請檢查是不是檔案大小超過 2MB ".concat(e.request.status)})}))}},uploadFile:function(){var t=this.$refs.file.files[0],e=new FormData;e.append("file",t),this.status.fileUploading=!0,this.updimg=e,this.$swal.fire({icon:"success",title:"檔案準備完成，請按下 [確認] 上傳...",text:"READY",timer:1e3}),this.status.fileUploading=!0}}},c=s,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var n=a("428f"),i=a("5135"),r=a("e538"),o=a("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:r.f(t)})}},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var o=n(e);o in t?i.f(t,o,r(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),o=a("861d"),s=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),g=f("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",m=p>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=d("concat"),y=function(t){if(!o(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},w=!m||!v;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,i,r,o=s(this),d=u(o,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?o:arguments[e],y(r)){if(i=c(r.length),f+i>b)throw TypeError(h);for(a=0;a<i;a++,f++)a in r&&l(d,f,r[a])}else{if(f>=b)throw TypeError(h);l(d,f++,r)}return d.length=f,d}})},a4d3:function(t,e,a){"use strict";var n=a("23e7"),i=a("da84"),r=a("d066"),o=a("c430"),s=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),f=a("e8b5"),p=a("861d"),g=a("825a"),b=a("7b0b"),h=a("fc6a"),m=a("c04e"),v=a("5c6c"),y=a("7c73"),w=a("df75"),_=a("241c"),O=a("057f"),C=a("7418"),x=a("06cf"),P=a("9bf2"),j=a("d1e7"),k=a("9112"),S=a("6eeb"),$=a("5692"),D=a("f772"),M=a("d012"),E=a("90e3"),L=a("b622"),N=a("e538"),I=a("746f"),F=a("d44e"),U=a("69f3"),T=a("b727").forEach,J=D("hidden"),R="Symbol",A="prototype",B=L("toPrimitive"),q=U.set,z=U.getterFor(R),K=Object[A],Q=i.Symbol,W=r("JSON","stringify"),Y=x.f,G=P.f,H=O.f,V=j.f,X=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),at=$("wks"),nt=i.QObject,it=!nt||!nt[A]||!nt[A].findChild,rt=s&&u((function(){return 7!=y(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,a){var n=Y(K,e);n&&delete K[e],G(t,e,a),n&&t!==K&&G(K,e,n)}:G,ot=function(t,e){var a=X[t]=y(Q[A]);return q(a,{type:R,tag:t,description:e}),s||(a.description=e),a},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,a){t===K&&ct(Z,e,a),g(t);var n=m(e,!0);return g(a),d(X,n)?(a.enumerable?(d(t,J)&&t[J][n]&&(t[J][n]=!1),a=y(a,{enumerable:v(0,!1)})):(d(t,J)||G(t,J,v(1,{})),t[J][n]=!0),rt(t,n,a)):G(t,n,a)},lt=function(t,e){g(t);var a=h(e),n=w(a).concat(gt(a));return T(n,(function(e){s&&!dt.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=m(t,!0),a=V.call(this,e);return!(this===K&&d(X,e)&&!d(Z,e))&&(!(a||!d(this,e)||!d(X,e)||d(this,J)&&this[J][e])||a)},ft=function(t,e){var a=h(t),n=m(e,!0);if(a!==K||!d(X,n)||d(Z,n)){var i=Y(a,n);return!i||!d(X,n)||d(a,J)&&a[J][n]||(i.enumerable=!0),i}},pt=function(t){var e=H(h(t)),a=[];return T(e,(function(t){d(X,t)||d(M,t)||a.push(t)})),a},gt=function(t){var e=t===K,a=H(e?Z:h(t)),n=[];return T(a,(function(t){!d(X,t)||e&&!d(K,t)||n.push(X[t])})),n};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),a=function(t){this===K&&a.call(Z,t),d(this,J)&&d(this[J],e)&&(this[J][e]=!1),rt(this,e,v(1,t))};return s&&it&&rt(K,e,{configurable:!0,set:a}),ot(e,t)},S(Q[A],"toString",(function(){return z(this).tag})),S(Q,"withoutSetter",(function(t){return ot(E(t),t)})),j.f=dt,P.f=ct,x.f=ft,_.f=O.f=pt,C.f=gt,N.f=function(t){return ot(L(t),t)},s&&(G(Q[A],"description",{configurable:!0,get:function(){return z(this).description}}),o||S(K,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),T(w(at),(function(t){I(t)})),n({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=Q(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(b(t))}}),W){var bt=!c||u((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,a){var n,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,W.apply(null,i)}})}Q[A][B]||k(Q[A],B,Q[A].valueOf),F(Q,R),M[J]=!0},dbb4:function(t,e,a){var n=a("23e7"),i=a("83ab"),r=a("56ef"),o=a("fc6a"),s=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,a,n=o(t),i=s.f,l=r(n),u={},d=0;while(l.length>d)a=i(n,e=l[d++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var n=a("23e7"),i=a("d039"),r=a("fc6a"),o=a("06cf").f,s=a("83ab"),c=i((function(){o(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(r(t),e)}})},e538:function(t,e,a){var n=a("b622");e.f=n}}]);
//# sourceMappingURL=chunk-961bc26c.b10a6a2c.js.map