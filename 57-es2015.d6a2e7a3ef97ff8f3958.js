(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{mgaC:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_modal",(function(){return u}));var i=o("54nT"),a=(o("AfW+"),o("aiEM")),s=o("iAHb"),r=o("0AIG"),n=o("AzGJ"),d=(o("kBU6"),o("u6aj")),l=o("Dl6n"),c=o("m9yc"),m=o("Uch9");const h=(e,t)=>{const o=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),i=Object(s.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),a=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).beforeAddClass("show-modal").addAnimation([o,i]);if(t){const e=document.body,o=`translateY(${"ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))"}) scale(0.93)`,i=Object(s.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}).afterStyles({transform:o}).beforeAddWrite(()=>e.style.setProperty("background-color","black","important")).addElement(t).keyframes([{offset:0,transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,transform:o,borderRadius:"10px 10px 0 0"}]);a.addAnimation(i)}return a},p=(e,t,o=500)=>{const i=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a=Object(s.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY(100%)"),r=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation([i,a]);if(t){const e="ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))",o=document.body,i=.93,a=Object(s.a)().addElement(t).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(e=>{1===e&&(t.style.setProperty("overflow",""),Array.from(o.querySelectorAll("ion-modal")).filter(e=>void 0!==e.presentingElement).length<=1&&o.style.setProperty("background-color",""))}).keyframes([{offset:0,transform:`translateY(${e}) scale(${i})`,borderRadius:"10px 10px 0 0"},{offset:1,transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);r.addAnimation(a)}return r},b=e=>{const t=Object(s.a)(),o=Object(s.a)(),i=Object(s.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),i.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([o,i])},f=e=>{const t=Object(s.a)(),o=Object(s.a)(),i=Object(s.a)(),a=e.querySelector(".modal-wrapper");return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(a).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},u=class{constructor(e){Object(i.k)(this,e),this.gestureAnimationDismissing=!1,this.presented=!1,this.mode=Object(i.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,d.a)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,o=g[e.type];if(t&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}},Object(d.e)(this.el),this.didPresent=Object(i.e)(this,"ionModalDidPresent",7),this.willPresent=Object(i.e)(this,"ionModalWillPresent",7),this.willDismiss=Object(i.e)(this,"ionModalWillDismiss",7),this.didDismiss=Object(i.e)(this,"ionModalDidDismiss",7)}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await Object(c.a)(this.delegate,e,this.component,["ion-page"],t),await Object(m.a)(this.usersElement),await Object(d.f)(this,"modalEnter",h,b,this.presentingElement);const o=Object(i.d)(this);if(this.swipeToClose&&"ios"===o){const e=this.animation=p(this.el,this.presentingElement);this.gesture=((e,t,o)=>{const i=e.offsetHeight;let s=!1;const d=Object(n.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:()=>{t.progressStart(!0,s?1:0)},onMove:e=>{const o=e.deltaY/i;o<0||t.progressStep(o)},onEnd:e=>{const n=e.velocityY,l=e.deltaY/i;if(l<0)return;const c=(e.deltaY+1e3*n)/i>=.5;let m=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=Object(r.a)([0,0],[.32,.72],[0,1],[1,1],l)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=Object(r.a)([0,0],[1,0],[.68,.28],[1,1],l)[0]);const h=((e,t)=>Object(a.c)(400,e/Math.abs(1.1*t),500))(c?l*i:(1-l)*i,n);s=c,d.enable(!1),t.onFinish(()=>{c||d.enable(!0)}).progressEnd(c?1:0,m,h),c&&o()}});return d})(this.el,e,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}}async dismiss(e,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;const o=void 0===this.animation||t===d.a||void 0===t?p:void 0,i=d.i.get(this)||[],a=await Object(d.g)(this,e,t,"modalLeave",o,f,this.presentingElement);return a&&(await Object(c.b)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),i.forEach(e=>e.destroy())),this.animation=void 0,a}onDidDismiss(){return Object(d.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return Object(d.h)(this.el,"ionModalWillDismiss")}render(){const e=Object(i.d)(this);return Object(i.i)(i.a,{"no-router":!0,"aria-modal":"true",class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement},Object(l.b)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(i.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(i.i)("div",{role:"dialog",class:"modal-wrapper"}))}get el(){return Object(i.f)(this)}static get style(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.4)}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0.15;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}"}},g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);