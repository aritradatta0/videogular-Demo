"use strict";
(self["webpackChunkvideogular_Demo"] = self["webpackChunkvideogular_Demo"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/input.component */ 3185);
/* harmony import */ var _play_video_play_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-video/play-video.component */ 5851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        children: [
            {
                path: '',
                component: _input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent
            },
            {
                path: 'play',
                component: _play_video_play_video_component__WEBPACK_IMPORTED_MODULE_2__.PlayVideoComponent
            }
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ 9197);
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ 6836);
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ 8399);
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ 6131);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _play_video_play_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-video/play-video.component */ 5851);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input.component */ 3185);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_7__.VgCoreModule,
        _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_8__.VgControlsModule,
        _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_9__.VgOverlayPlayModule,
        _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_10__.VgBufferingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _play_video_play_video_component__WEBPACK_IMPORTED_MODULE_2__.PlayVideoComponent,
        _input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_7__.VgCoreModule,
        _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_8__.VgControlsModule,
        _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_9__.VgOverlayPlayModule,
        _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_10__.VgBufferingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule] }); })();


/***/ }),

/***/ 3185:
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);






const _c0 = function (a0, a1) { return { link: a0, subLink: a1 }; };
class InputComponent {
    constructor() {
        this.url = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        this.Suburl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
    }
    ngOnInit() {
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], decls: 6, vars: 8, consts: [[1, "input-div"], [1, "form-control"], ["type", "text", "matInput", "", "placeholder", "Video Url", 3, "formControl"], ["type", "text", "matInput", "", "placeholder", "Subtitle Url", 3, "formControl"], ["mat-raised-button", "", "color", "accent", 3, "routerLink", "queryParams", "disabled"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2)(3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Go to Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.Suburl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/play/")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.url.value, ctx.Suburl.value))("disabled", ctx.url.invalid);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: [".form-control[_ngcontent-%COMP%] {\n  border: 1px solid aqua;\n  box-shadow: rgba(32, 246, 242, 0.25) 0px 30px 60px -12px inset, rgba(42, 215, 143, 0.3) 0px 18px 36px -18px inset;\n}\n\n.input-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  padding: 50px;\n  flex-direction: column;\n}\n\n.input-div[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 80px;\n  display: block;\n  align-items: center;\n  justify-content: center;\n}\n\n.input-div[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-radius: 10px;\n  padding: 10px;\n  border-color: aqua;\n  width: 100%;\n}\n\n.input-div[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  border-color: rgb(187, 36, 61);\n}\n\n.input-div[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 50%;\n  margin: auto;\n}\n\n  .mat-card {\n  border: 10px aqua !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxpSEFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBUjs7QUFFUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQVo7O0FBRVk7RUFDSSw4QkFBQTtBQUFoQjs7QUFJUTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFGWjs7QUFRSTtFQUNJLDRCQUFBO0FBTFIiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGFxdWE7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDMyLCAyNDYsIDI0MiwgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCBpbnNldCwgcmdiYSg0MiwgMjE1LCAxNDMsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcclxufVxyXG5cclxuXHJcbi5pbnB1dC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGFxdWE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDE4NywgMzYsIDYxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxMHB4IGFxdWEgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5851:
/*!****************************************************!*\
  !*** ./src/app/play-video/play-video.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayVideoComponent": () => (/* binding */ PlayVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ 9197);
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ 6836);
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ 8399);
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ 6131);











function PlayVideoComponent_ng_container_0_vg_player_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vg-player", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPlayerReady", function PlayVideoComponent_ng_container_0_vg_player_1_Template_vg_player_onPlayerReady_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onPlayerReady($event)); })("onUpdateState", function PlayVideoComponent_ng_container_0_vg_player_1_Template_vg_player_onUpdateState_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onMediaStateChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "vg-overlay-play")(2, "vg-buffering");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "vg-scrub-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vg-scrub-bar-current-time")(5, "vg-scrub-bar-buffering-time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "vg-controls", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "vg-play-pause")(8, "vg-playback-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_0_vg_player_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.fastBack(10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "replay_10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_0_vg_player_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.fastForward(10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "forward_10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_0_vg_player_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.fastBack(30)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "replay_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayVideoComponent_ng_container_0_vg_player_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.fastForward(30)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "forward_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "vg-time-display", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Aritra Datta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "vg-scrub-bar", 8)(28, "vg-time-display", 9)(29, "vg-time-display", 10)(30, "vg-track-selector")(31, "vg-mute")(32, "vg-volume")(33, "vg-fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "video", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "source", 13)(37, "track", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vgAutohide", true)("vgAutohideTime", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vgMedia", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.videoUrl ? ctx_r1.videoUrl : "https://test.rtg.workers.dev/0:/%5BSubsPlease%5D%20Boku%20no%20Hero%20Academia%20-%20117%20(1080p)%20%5B27059ADF%5D.mkv", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.subtitleUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayVideoComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayVideoComponent_ng_container_0_vg_player_1_Template, 38, 5, "vg-player", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._isBrowser);
} }
class PlayVideoComponent {
    constructor(http, platformId, activatedRoute) {
        this.http = http;
        this.platformId = platformId;
        this.activatedRoute = activatedRoute;
        this.title = 'videogular-Demo';
        this.currentTime = 0;
        this._isBrowser = false;
        this.activatedRoute.queryParamMap.subscribe((res) => {
            this.videoUrl = res.params.link.trim();
            this.subtitleUrl = res.params.subLink.trim();
        });
    }
    ngOnInit() {
        this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
    }
    onPlayerReady(event) {
        this.api = event;
        this.timeUpdateListener();
        console.log(this.api.getMasterMedia());
        this.api.getDefaultMedia().subscriptions.loadedData.subscribe((res) => {
            console.log('bhosdike', res, this.api.getDefaultMedia().track);
        });
        this.api.getDefaultMedia().subscriptions.ended.subscribe((media) => {
            console.log(media);
            console.log(this.api.getDefaultMedia().track, this.api.getDefaultMedia().currentTime);
            this.currentTime = this.api.getDefaultMedia().currentTime;
        });
    }
    fastBack(time) {
        console.log(this.currentTime);
        this.api.seekTime(this.currentTime - time, false);
    }
    fastForward(time) {
        this.api.seekTime(this.currentTime + time, false);
    }
    handleKeyboardEvent(event) {
        if (this.api) {
            const KEY = event.key;
            switch (KEY) {
                case 'ArrowLeft': {
                    this.fastBack(10);
                    break;
                }
                case 'ArrowRight': {
                    this.fastForward(10);
                    break;
                }
                case 'ArrowDown': {
                    if (this.api.volume > 0 && this.api.volume < 1) {
                        if (this.api.volume >= 0.10) {
                            this.api.volume = this.api.volume - 0.10;
                        }
                        else {
                            this.api.volume = 0;
                        }
                    }
                    console.log((this.api.volume - 0.10));
                    break;
                }
                case 'ArrowUp': {
                    if (this.api.volume > 0 && this.api.volume < 1) {
                        if (this.api.volume <= 0.90) {
                            this.api.volume = this.api.volume + 0.10;
                        }
                        else {
                            this.api.volume = 1;
                        }
                    }
                    console.log((this.api.volume));
                    break;
                }
                case 'm': {
                    if (this.api.volume === 0) {
                        this.api.volume = 1;
                    }
                    else {
                        this.api.volume = 0;
                    }
                }
            }
            if (event?.code == "Space") {
                if (this.api.state === 'playing') {
                    this.api.pause();
                }
                else {
                    this.api.play();
                }
            }
        }
        // ArrowUp ArrowDown ArrowRight ArrowLeft
        console.log(event);
    }
    onMediaStateChange(state) {
        console.log(state);
    }
    timeUpdateListener() {
        this.api && this.api.subscriptions.timeUpdate.subscribe((res) => {
            this.currentTime = res.srcElement.currentTime;
        });
    }
}
PlayVideoComponent.ɵfac = function PlayVideoComponent_Factory(t) { return new (t || PlayVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
PlayVideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayVideoComponent, selectors: [["app-play-video"]], hostBindings: function PlayVideoComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PlayVideoComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "onPlayerReady", "onUpdateState", 4, "ngIf"], [3, "onPlayerReady", "onUpdateState"], [3, "vgAutohide", "vgAutohideTime"], [1, "btn-skip", 3, "click"], ["vgProperty", "current", "vgFormat", "mm:ss"], [1, "btn-skip", 3, "disabled"], [2, "color", "red"], [2, "pointer-events", "none"], ["vgProperty", "left", "vgFormat", "mm:ss"], ["vgProperty", "total", "vgFormat", "mm:ss"], ["id", "singleVideo", "preload", "auto", "crossorigin", "", 3, "vgMedia"], ["media", ""], ["type", "video/mp4", 3, "src"], ["kind", "subtitles", "label", "English", "srclang", "en", "default", "", 3, "src"]], template: function PlayVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlayVideoComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoUrl);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__.VgMediaDirective, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__.VgPlayerComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgControlsComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgVolumeComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgTrackSelectorComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgTimeDisplayComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgScrubBarComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgPlaybackButtonComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgPlayPauseComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgMuteComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgFullscreenComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgScrubBarBufferingTimeComponent, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_6__.VgScrubBarCurrentTimeComponent, _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_7__.VgOverlayPlayComponent, _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_8__.VgBufferingComponent], styles: ["@import url(\"https://fonts.cdnfonts.com/css/snell-roundhand\");\n.btn-skip[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  display: flex;\n  align-items: center;\n}\n.btn-skip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.btn-skip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Snell Roundhand\", cursive;\n  padding: 16px;\n  font-weight: 900;\n  font-size: 22px;\n  margin-left: 258px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXktdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkRBQUE7QUFFUjtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUdJO0VBQ0UsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNGLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREoiLCJmaWxlIjoicGxheS12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3Mvc25lbGwtcm91bmRoYW5kJyk7XG5cbi5idG4tc2tpcCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBzcGFue1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1mYW1pbHk6ICdTbmVsbCBSb3VuZGhhbmQnLGN1cnNpdmU7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNThweDtcbiAgICB9XG4gIH0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map