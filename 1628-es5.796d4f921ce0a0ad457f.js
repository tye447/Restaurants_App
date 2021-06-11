!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(self.webpackChunkionic_restaurants_app=self.webpackChunkionic_restaurants_app||[]).push([[1628],{1628:function(n,r,a){"use strict";a.r(r),a.d(r,{RestaurantsPageModule:function(){return y}});var i=a(1116),s=a(1462),o=a(8809),u=a(5860),c=a(8619),l=a(9827),d=function(){return["restaurant-info"]},f=function(e,t){return{name:e,formatted_address:t}};function g(e,t){if(1&e&&(c.TgZ(0,"ion-card",5),c.TgZ(1,"ion-card-content"),c.TgZ(2,"ion-list",0),c.TgZ(3,"ion-item"),c.TgZ(4,"ion-text"),c._uU(5),c._UZ(6,"br"),c._UZ(7,"br"),c._uU(8),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e){var n=t.$implicit;c.Q6J("routerLink",c.DdM(4,d))("queryParams",c.WLB(5,f,n.name,n.formatted_address)),c.xp6(5),c.Oqu(n.name),c.xp6(3),c.Oqu(n.formatted_address)}}var p,m,_=[],h=[{path:"",component:(p=function(){function n(t){e(this,n),this.restaurantsService=t,this.order=function(e,t){if(e.name<t.name)return t.name},this.inputAddress="Part-Dieu"}var r,a,i;return r=n,(a=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){}},{key:"search",value:function(e){this.serviceLocation(e)}},{key:"services",value:function(){this.serviceLocation(this.inputAddress)}},{key:"serviceLocation",value:function(e){var t=this;JSON.parse(window.sessionStorage.getItem("location")),this.restaurantsService.getLocation(e).subscribe(function(e){var n=JSON.parse(JSON.stringify(e)).candidates[0].geometry.location;t.resultLocation=JSON.stringify(n.lat+","+n.lng),window.sessionStorage.setItem("location",t.resultLocation),t.serviceRestaurant(n.lat,n.lng)})}},{key:"serviceRestaurant",value:function(e,t){var n=this;this.restaurantsService.getAllRestaurantLyon(e,t).subscribe(function(e){n.resultTest=JSON.stringify(e),n.createTest(_,n.resultTest)})}},{key:"createTest",value:function(e,t){var n=this;e=[];var r=JSON.parse(this.resultTest),a={name:"",rating:0,formatted_address:"",weekday_text:"",formatted_phone_number:"",website:"",user_ratings_total:0};r.results.forEach(function(t){n.affectation(e,t,a)})}},{key:"affectation",value:function(e,t,n){var r=this;this.restaurantsService.getPlaceName(t.place_id,"name,rating,formatted_phone_number,formatted_address,opening_hours,website,user_ratings_total").subscribe(function(t){var a=JSON.stringify(t),i=JSON.parse(a).result;(n={name:"",rating:0,formatted_address:"",weekday_text:"",formatted_phone_number:"",website:"",user_ratings_total:0}).formatted_address=i.formatted_address,n.formatted_phone_number=i.formatted_phone_number,n.name=i.name,n.rating=i.rating,n.user_ratings_total=i.user_ratings_total,n.website=i.website,null!=i.opening_hours&&(n.weekday_text=i.opening_hours.weekday_text),e.push(n),r.restaurants=e,window.sessionStorage.setItem("allRes",JSON.stringify(e))})}},{key:"loadAllRestaurants",value:function(){this.restaurants=JSON.parse(window.sessionStorage.getItem("allRestaurants"))}}])&&t(r.prototype,a),i&&t(r,i),n}(),p.\u0275fac=function(e){return new(e||p)(c.Y36(l.P))},p.\u0275cmp=c.Xpm({type:p,selectors:[["app-restaurants"]],decls:14,vars:2,consts:[["lines","none"],["color","primary","stacked",""],["placeholder","Part-Dieu","type","text",3,"ngModel","ngModelChange"],[3,"click"],[3,"routerLink","queryParams",4,"ngFor","ngForOf"],[3,"routerLink","queryParams"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3,"Restaurants"),c.qZA(),c.qZA(),c.TgZ(4,"ion-list"),c.TgZ(5,"ion-item",0),c.TgZ(6,"ion-label",1),c._uU(7,"Place"),c.qZA(),c.TgZ(8,"ion-input",2),c.NdJ("ngModelChange",function(e){return t.inputAddress=e}),c.qZA(),c.qZA(),c.TgZ(9,"ion-item",0),c.TgZ(10,"ion-button",3),c.NdJ("click",function(){return t.search(t.inputAddress)}),c._uU(11,"Search"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(12,"ion-content"),c.YNc(13,g,9,8,"ion-card",4),c.qZA()),2&e&&(c.xp6(8),c.Q6J("ngModel",t.inputAddress),c.xp6(5),c.Q6J("ngForOf",t.restaurants))},directives:[o.Gu,o.sr,o.wd,o.q_,o.Ie,o.Q$,o.pK,o.j9,s.JJ,s.On,o.YG,o.W2,i.sg,o.PM,o.YI,u.rH,o.FN,o.yW],styles:[""]}),p)},{path:"restaurant-info",loadChildren:function(){return a.e(7099).then(a.bind(a,7099)).then(function(e){return e.RestaurantInfoPageModule})}}],v=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[u.Bz.forChild(h)],u.Bz]}),t}(),y=((m=function t(){e(this,t)}).\u0275fac=function(e){return new(e||m)},m.\u0275mod=c.oAB({type:m}),m.\u0275inj=c.cJS({imports:[[i.ez,s.u5,o.Pc,v]]}),m)}}])}();