!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkionic_restaurants_app=self.webpackChunkionic_restaurants_app||[]).push([[5892],{5892:function(n,o,i){"use strict";i.r(o),i.d(o,{OrderInfoPageModule:function(){return p}});var t=i(8583),a=i(665),u=i(7823),s=i(649),c=i(639);function l(e,r){if(1&e&&(c.TgZ(0,"ion-row"),c.TgZ(1,"ion-col",9),c._uU(2),c.qZA(),c.TgZ(3,"ion-col",10),c._uU(4),c.qZA(),c.qZA()),2&e){var n=r.$implicit;c.xp6(2),c.Oqu(null==n?null:n.name),c.xp6(2),c.hij("",null==n?null:n.price," \u20ac")}}var Z,f,d=[{path:"",component:(Z=function(){function n(r){e(this,n),this.route=r,this.orderInfo={orderDate:"",recipes:[],orderId:0,priceTotal:0,restaurantName:"",restaurantAddress:""}}var o,i,t;return o=n,(i=[{key:"ngOnInit",value:function(){var e=this,r=JSON.parse(window.sessionStorage.getItem("ordersCurrentUserTrans")),n=JSON.parse(window.sessionStorage.getItem("allRestaurants"));this.route.queryParams.subscribe(function(o){var i=r.filter(function(e){return e.orderId===parseInt(o.id,10)})[0];e.orderInfo.orderDate=i.orderDate,e.orderInfo.orderId=i.orderId,e.orderInfo.priceTotal=i.orderPriceTotal,e.orderInfo.restaurantName=i.restaurantName,e.setRecipes(i,n)})}},{key:"setRecipes",value:function(e,r){var n=[],o={name:"",price:0};e.recipes.forEach(function(i){o={name:"",price:0};var t=r.filter(function(r){return r.name===e.restaurantName})[0].recipes.filter(function(e){return e.name===i.name})[0];o.name=t.name,o.price=t.price,n.push(o)}),this.orderInfo.recipes=n}}])&&r(o.prototype,i),t&&r(o,t),n}(),Z.\u0275fac=function(e){return new(e||Z)(c.Y36(s.gz))},Z.\u0275cmp=c.Xpm({type:Z,selectors:[["app-order-info"]],decls:37,vars:4,consts:[["slot","start"],["defaultHref","/"],[2,"font-size","16px"],["size","6"],[1,"label"],[4,"ngFor","ngForOf"],["ion-item","","lines","full"],["size","6",1,"label"],["size","6",2,"text-align","right"],["size","9"],["size","3",2,"text-align","right"]],template:function(e,r){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c._UZ(3,"ion-back-button",1),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5,"Order Detail"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content"),c.TgZ(7,"ion-card"),c.TgZ(8,"ion-grid",2),c.TgZ(9,"ion-row"),c.TgZ(10,"ion-col",3),c.TgZ(11,"ion-label",4),c._uU(12,"Order Date:"),c.qZA(),c.qZA(),c.TgZ(13,"ion-col",3),c.TgZ(14,"ion-label"),c._uU(15),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(16,"ion-grid"),c.TgZ(17,"ion-row"),c.TgZ(18,"ion-col",3),c.TgZ(19,"ion-label",4),c._uU(20,"Order Id:"),c.qZA(),c.qZA(),c.TgZ(21,"ion-col",3),c.TgZ(22,"ion-label"),c._uU(23),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(24,"ion-grid"),c.TgZ(25,"ion-row"),c.TgZ(26,"ion-col"),c.TgZ(27,"ion-label",4),c._uU(28,"Recipes:"),c.qZA(),c.qZA(),c.qZA(),c.YNc(29,l,5,2,"ion-row",5),c.qZA(),c.TgZ(30,"ion-grid"),c.TgZ(31,"ion-row",6),c.TgZ(32,"ion-col",7),c.TgZ(33,"ion-label"),c._uU(34,"Total:"),c.qZA(),c.qZA(),c.TgZ(35,"ion-col",8),c._uU(36),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(15),c.Oqu(r.orderInfo.orderDate),c.xp6(8),c.Oqu(r.orderInfo.orderId),c.xp6(6),c.Q6J("ngForOf",null==r.orderInfo?null:r.orderInfo.recipes),c.xp6(7),c.hij("",r.orderInfo.priceTotal," \u20ac"))},directives:[u.Gu,u.sr,u.Sm,u.oU,u.cs,u.wd,u.W2,u.PM,u.jY,u.Nd,u.wI,u.Q$,t.sg],styles:[".label[_ngcontent-%COMP%]{font-size:large;font-weight:700}"]}),Z)}],g=function(){var r=function r(){e(this,r)};return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),r}(),p=((f=function r(){e(this,r)}).\u0275fac=function(e){return new(e||f)},f.\u0275mod=c.oAB({type:f}),f.\u0275inj=c.cJS({imports:[[t.ez,a.u5,u.Pc,g]]}),f)}}])}();