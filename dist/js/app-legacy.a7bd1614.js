(function(){"use strict";var t={510:function(t,e,n){n.d(e,{Z:function(){return k}});n(8309);var r=n(6252),o=n(3577),a=n(9963),i={class:"card"},c={class:"card-title"},u={class:"card-body"},l={class:"row"},s=(0,r._)("div",{class:"cell"},[(0,r._)("label",null,"Type:")],-1),d={class:"cell"},f={class:"row"},p=(0,r._)("div",{class:"cell"},[(0,r._)("label",null,"Price:")],-1),v={class:"cell"},b={class:"row"},m=(0,r._)("div",{class:"cell"},[(0,r._)("label",null,"Quantity:")],-1),_={class:"cell"},y={class:"card-footer"};function g(t,e,n,g,h,w){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",c,(0,o.zw)(n.product.name),1),(0,r._)("div",u,[(0,r._)("i",{class:(0,o.C_)(["icofont-10x","icofont-"+n.product.icon])},null,2),(0,r._)("form",null,[(0,r._)("div",l,[s,(0,r._)("div",d,[(0,r._)("em",null,(0,o.zw)(n.product.type),1)])]),(0,r._)("div",f,[p,(0,r._)("div",v," $"+(0,o.zw)(n.product.price.USD),1)]),(0,r._)("div",b,[m,(0,r._)("div",_,[(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=function(t){return h.quantity=t})},null,512),[[a.nr,h.quantity,void 0,{number:!0}]])])])])]),(0,r._)("div",y,[(0,r._)("button",{onClick:e[1]||(e[1]=function(t){return n.addToCart(n.product.name,h.quantity)}),class:"btn btn-light"}," Add to cart ")])])}var h={props:["product","index","addToCart"],data:function(){return{quantity:0}}},w=n(3744);const O=(0,w.Z)(h,[["render",g]]);var k=O},6533:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(9963),o=n(6252),a=n(3577),i=n(1457),c=n(4212),u=n(7695),l=n(941),s=function(t){return(0,o.dD)("data-v-c4c1bfd6"),t=t(),(0,o.Cn)(),t},d=s((function(){return(0,o._)("h1",{class:"font-weight-bold text-h2 basil--text"}," Online Grocery Store ",-1)})),f={class:"top-bar spread"},p={id:"nav",class:"top-bar-nav"},v=s((function(){return(0,o._)("i",{class:"icofont-spoon-and-fork"},null,-1)})),b=s((function(){return(0,o._)("span",null,"Home",-1)})),m=s((function(){return(0,o._)("span",null,"Products",-1)})),_=s((function(){return(0,o._)("span",null,"Past Orders",-1)})),y=s((function(){return(0,o._)("i",{class:"icofont-cart-alt icofont-1x"},null,-1)}));function g(t,e,n,r,s,g){var h=(0,o.up)("router-link"),w=(0,o.up)("router-view"),O=(0,o.up)("Sidebar");return(0,o.wg)(),(0,o.j4)(i.q,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(c._,{color:"basil"},{default:(0,o.w5)((function(){return[(0,o.Wm)(u.E,{class:"text-center justify-center py-6"},{default:(0,o.w5)((function(){return[d]})),_:1})]})),_:1}),(0,o._)("header",f,[(0,o._)("nav",p,[(0,o.Wm)(h,{to:"/",class:"top-bar-link"},{default:(0,o.w5)((function(){return[v,b]})),_:1}),(0,o.Wm)(h,{to:"/products",class:"top-bar-link"},{default:(0,o.w5)((function(){return[m]})),_:1}),(0,o.Wm)(h,{to:"/pastOrders",class:"top-bar-link"},{default:(0,o.w5)((function(){return[_]})),_:1})]),(0,o._)("div",{onClick:e[0]||(e[0]=function(){return g.toggleSidebar&&g.toggleSidebar.apply(g,arguments)}),id:"cart",class:"top-bar-cart-link"},[y,(0,o._)("span",null,"Cart ("+(0,a.zw)(g.totalQuantity)+")",1)])]),(0,o.Wm)(l.O,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(w,{inventory:t.inventory,addToCart:g.addToCart},null,8,["inventory","addToCart"])]})),_:1}),t.showSidebar?((0,o.wg)(),(0,o.j4)(O,{key:0,toggle:g.toggleSidebar,cart:t.cart,inventory:t.inventory,remove:g.removeItem,addToCart:g.addToCart},null,8,["toggle","cart","inventory","remove","addToCart"])):(0,o.kq)("",!0)]})),_:1})}n(1539),n(2479),n(7941);var h={class:"cart-container"},w={class:"cart"},O={class:"cart-title spread"},k=(0,o._)("span",null,[(0,o.Uk)(" Cart "),(0,o._)("i",{class:"icofont-cart-alt icofont-1x"})],-1),C={class:"cart-body"},S={class:"cart-table"},P=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,[(0,o._)("span",{class:"sr-only"},"Product Image")]),(0,o._)("th",null,"Product"),(0,o._)("th",null,"Price"),(0,o._)("th",null,"Qty"),(0,o._)("th",null,"Total"),(0,o._)("th",null,[(0,o._)("span",{class:"sr-only"},"Actions")])])],-1),T={class:"center"},j={class:"center"},D=["onClick"],N={key:0,class:"center"},U=(0,o._)("em",null,"No items in cart",-1),x=[U],K={class:"spread"},E=(0,o._)("strong",null,"Total:",-1),A=(0,o._)("button",{class:"btn btn-light"},"Checkout",-1);function z(t,e,n,r,i,c){return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",w,[(0,o._)("h1",O,[k,(0,o._)("button",{onClick:e[0]||(e[0]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),class:"cart-close"},"×")]),(0,o._)("div",C,[(0,o._)("table",S,[P,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.cart,(function(t,e,r){return(0,o.wg)(),(0,o.iD)("tr",{key:r},[(0,o._)("td",null,[(0,o._)("i",{class:(0,a.C_)(["icofont-"+e.toLowerCase(),"icofont-3x"])},null,2)]),(0,o._)("td",null,(0,a.zw)(e),1),(0,o._)("td",null,"$"+(0,a.zw)(c.getPrice(e)),1),(0,o._)("td",T,(0,a.zw)(t),1),(0,o._)("td",null,"$"+(0,a.zw)(t*c.getPrice(e)),1),(0,o._)("td",j,[(0,o._)("button",{onClick:function(t){return n.remove(e)},class:"btn btn-light cart-remove"}," × ",8,D)])])})),128))])]),Object.keys(n.cart).length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",N,x)),(0,o._)("div",K,[(0,o._)("span",null,[E,(0,o.Uk)(" $"+(0,a.zw)(c.calculateTotal()),1)]),A])])])])}n(9826),n(8309),n(9720),n(6977);var q={props:["toggle","cart","inventory","remove"],methods:{getPrice:function(t){var e=this.inventory.find((function(e){return e.name===t}));return e.price.USD},calculateTotal:function(){var t=this,e=Object.entries(this.cart).reduce((function(e,n,r){return e+n[1]*t.getPrice(n[0])}),0);return e.toFixed(2)}}},R=n(3744);const W=(0,R.Z)(q,[["render",z]]);var Z=W,M=JSON.parse('[{"id":1,"name":"Raddish","icon":"raddish","price":{"USD":3.26,"NOK":17.43},"type":"vegetable"},{"id":2,"name":"Artichoke","icon":"artichoke","price":{"USD":9.44,"NOK":15.82},"type":"vegetable"},{"id":3,"name":"Broccoli","icon":"broccoli","price":{"USD":5.2,"NOK":16.66},"type":"vegetable"},{"id":5,"name":"Cabbage","icon":"cabbage","price":{"USD":0.95,"NOK":62.33},"type":"vegetable"},{"id":6,"name":"Cherry","icon":"cherry","price":{"USD":1.04,"NOK":62.5},"type":"fruit"},{"id":7,"name":"Carrot","icon":"carrot","price":{"USD":4.82,"NOK":72.74},"type":"vegetable"},{"id":8,"name":"Corn","icon":"corn","price":{"USD":7.53,"NOK":99.43},"type":"vegetable"},{"id":9,"name":"Grapes","icon":"grapes","price":{"USD":4.94,"NOK":88.29},"type":"fruit"},{"id":10,"name":"Onion","icon":"onion","price":{"USD":6.45,"NOK":69.53},"type":"vegetable"},{"id":11,"name":"Orange","icon":"orange","price":{"USD":9.95,"NOK":96.53},"type":"fruit"},{"id":12,"name":"Peas","icon":"peas","price":{"USD":2.61,"NOK":65.74},"type":"vegetable"},{"id":13,"name":"Pineapple","icon":"pineapple","price":{"USD":1.62,"NOK":35.22},"type":"fruit"},{"id":14,"name":"Steak","icon":"steak","price":{"USD":8.32,"NOK":83.08},"type":"meat"},{"id":15,"name":"Watermelon","icon":"watermelon","price":{"USD":5.08,"NOK":89.69},"type":"fruit"},{"id":16,"name":"Sausage","icon":"sausage","price":{"USD":3.69,"NOK":26.68},"type":"meat"}]'),H={name:"App",components:{Sidebar:Z},data:function(){return{showSidebar:!1,inventory:M,cart:{}}},computed:{totalQuantity:function(){return Object.values(this.cart).reduce((function(t,e){return t+e}),0)}},methods:{addToCart:function(t,e){this.cart[t]||(this.cart[t]=0),this.cart[t]+=e},toggleSidebar:function(){this.showSidebar=!this.showSidebar},removeItem:function(t){delete this.cart[t]}}};const F=(0,R.Z)(H,[["render",g],["__scopeId","data-v-c4c1bfd6"]]);var I=F,Q=(n(8783),n(3948),n(2119)),$=(n(7042),{class:"home"}),L=(0,o._)("div",{class:"splash-container"},[(0,o._)("div",{class:"splash"},[(0,o._)("h1",null,"Splendid Food")])],-1),B={class:"wrapper"},G=(0,o._)("h2",null,"Recommended",-1),Y={class:"recommended"};function J(t,e,n,r,a,i){var c=(0,o.up)("ProductCard");return(0,o.wg)(),(0,o.iD)("div",$,[L,(0,o._)("main",B,[G,(0,o._)("div",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.inventory.slice(0,3),(function(t,e){return(0,o.wg)(),(0,o.j4)(c,{key:t.id,class:"card",index:e,product:t,addToCart:n.addToCart},null,8,["index","product","addToCart"])})),128))])])])}var V=n(510),X={name:"Home",props:["inventory","addToCart"],components:{ProductCard:V.Z}};const tt=(0,R.Z)(X,[["render",J]]);var et=tt,nt=[{path:"/",name:"Home",component:et},{path:"/products",name:"Products",component:function(){return n.e(443).then(n.bind(n,7423))}},{path:"/pastOrders",name:"PastOrders",component:function(){return n.e(443).then(n.bind(n,5145))}}],rt=(0,Q.p7)({history:(0,Q.PO)("/REPO_NAME/"),routes:nt}),ot=rt,at=n(8637),it=(0,at.MT)({state:{},mutations:{},actions:{},modules:{}}),ct=(n(9773),n(4359)),ut=(0,ct.Rd)(),lt=n(8534);n(5666);function st(){return dt.apply(this,arguments)}function dt(){return dt=(0,lt.Z)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(461).then(n.t.bind(n,5933,23));case 2:e=t.sent,e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}});case 4:case"end":return t.stop()}}),t)}))),dt.apply(this,arguments)}st(),(0,r.ri)(I).use(ot).use(it).use(ut).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],a=t[s][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&r;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){i[t]=function(){return r[t]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{443:"about",461:"webfontloader"}[t]+"-legacy."+{443:"276822fa",461:"856967ec"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+{143:"app",998:"chunk-vendors"}[t]+"."+{143:"7d58fa17",998:"10d78fb2"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="web-grocery:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var f=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/REPO_NAME/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[i[l]]=0;return n.O(s)},r=self["webpackChunkweb_grocery"]=self["webpackChunkweb_grocery"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6533)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.a7bd1614.js.map