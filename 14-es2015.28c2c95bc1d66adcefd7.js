(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"F/Pw":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),r=u("MKJQ"),i=u("sZkV"),b=u("SVse");class a{constructor(){}ngOnInit(){}ionViewWillEnter(){this.loadOrdersCurrentUser()}loadOrdersCurrentUser(){this.orders=[];let l,n={orderId:0,restaurantName:"",orderContent:"",orderPrice:0,orderDate:"",restaurantIcon:""},u=[];l=JSON.parse(window.sessionStorage.getItem("ordersCurrentUser")),u=JSON.parse(window.sessionStorage.getItem("allRestaurants")),l.forEach(l=>{n={orderId:0,restaurantName:"",orderContent:"",orderPrice:0,orderDate:"",restaurantIcon:""},n.orderId=l.id,n.orderContent=l.content,n.restaurantName=u.filter(n=>n.id===parseInt(l.restaurantId,10))[0].name,n.restaurantIcon=u.filter(n=>n.id===parseInt(l.restaurantId,10))[0].img,n.orderPrice=l.price,n.orderDate=l.date,this.orders.push(n)})}}var s=t.nb({encapsulation:0,styles:[["ion-col[_ngcontent-%COMP%]{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}"]],data:{}});function c(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,28,"ion-card",[],null,null,null,r.J,r.e)),t.ob(1,49152,null,0,i.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,26,"ion-card-content",[],null,null,null,r.F,r.f)),t.ob(3,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,24,"ion-list",[["lines","none"]],null,null,null,r.T,r.s)),t.ob(5,49152,null,0,i.N,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(6,0,null,0,8,"ion-item",[],null,null,null,r.R,r.q)),t.ob(7,49152,null,0,i.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,r.Z,r.y)),t.ob(9,49152,null,0,i.vb,[t.h,t.k,t.x],null,null),(l()(),t.pb(10,0,null,0,1,"ion-img",[],null,null,null,r.P,r.o)),t.ob(11,49152,null,0,i.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.Ib(12,0,[" ",""])),(l()(),t.pb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(14,0,[""," "])),(l()(),t.pb(15,0,null,0,13,"ion-grid",[],null,null,null,r.M,r.l)),t.ob(16,49152,null,0,i.z,[t.h,t.k,t.x],null,null),(l()(),t.pb(17,0,null,0,11,"ion-row",[],null,null,null,r.U,r.t)),t.ob(18,49152,null,0,i.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(19,0,null,0,4,"ion-col",[],null,null,null,r.K,r.j)),t.ob(20,49152,null,0,i.s,[t.h,t.k,t.x],null,null),(l()(),t.pb(21,0,null,0,2,"ion-text",[],null,null,null,r.Y,r.x)),t.ob(22,49152,null,0,i.tb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(23,0,["",""])),(l()(),t.pb(24,0,null,0,4,"ion-col",[],null,null,null,r.K,r.j)),t.ob(25,49152,null,0,i.s,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,2,"ion-text",[],null,null,null,r.Y,r.x)),t.ob(27,49152,null,0,i.tb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(28,0,[""," \u20ac"]))],(function(l,n){l(n,5,0,"none"),l(n,11,0,null==n.context.$implicit?null:n.context.$implicit.restaurantIcon)}),(function(l,n){l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.restaurantName),l(n,14,0,null==n.context.$implicit?null:n.context.$implicit.orderDate),l(n,23,0,null==n.context.$implicit?null:n.context.$implicit.orderContent),l(n,28,0,null==n.context.$implicit?null:n.context.$implicit.orderPrice)}))}function p(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,11,"body",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,6,"ion-header",[],null,null,null,r.N,r.m)),t.ob(2,49152,null,0,i.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,r.bb,r.A)),t.ob(4,49152,null,0,i.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,2,"ion-title",[],null,null,null,r.ab,r.z)),t.ob(6,49152,null,0,i.wb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Orders"])),(l()(),t.pb(8,0,null,null,3,"ion-content",[],null,null,null,r.L,r.k)),t.ob(9,49152,null,0,i.t,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,c)),t.ob(11,278528,null,0,b.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,11,0,n.component.orders)}),null)}function d(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-orders",[],null,null,null,p,s)),t.ob(1,114688,null,0,a,[],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.lb("app-orders",a,d,{},{},[]),m=u("s7LF"),h=u("iInd");class k{}u.d(n,"OrdersPageModuleNgFactory",(function(){return f}));var f=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[e.a,x]],[3,t.j],t.v]),t.zb(4608,b.k,b.j,[t.s,[2,b.q]]),t.zb(4608,m.l,m.l,[]),t.zb(4608,i.b,i.b,[t.x,t.g]),t.zb(4608,i.Cb,i.Cb,[i.b,t.j,t.p]),t.zb(4608,i.Fb,i.Fb,[i.b,t.j,t.p]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,m.k,m.k,[]),t.zb(1073742336,m.c,m.c,[]),t.zb(1073742336,i.Ab,i.Ab,[]),t.zb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.zb(1073742336,k,k,[]),t.zb(1073742336,o,o,[]),t.zb(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);