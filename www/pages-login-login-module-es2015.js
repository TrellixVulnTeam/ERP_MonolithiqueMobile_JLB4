(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"end\">\r\n       <ion-button color='dark' (click)=\"startApp()\" [hidden]=\"!showSkip\">skip </ion-button>\r\n     </ion-buttons>-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"bg\">\r\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\r\n\r\n    <!-- <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>-->\r\n\r\n    <div class=\"green_curve\"></div>\r\n    <div class=\"black_curve\">\r\n      <img src=\"assets/imgs/logo_sonicerp.png\" class=\"car\">\r\n    </div>\r\n    <div class=\"black_green_curve\"></div>\r\n\r\n    <div class=\"form_div\">\r\n      <!--  <ion-label class=\"head_lbl\">Login</ion-label>-->\r\n      <form #loginForm=\"ngForm\" novalidate>\r\n       \r\n        <ion-input [(ngModel)]=\"login.email\" type=\"text\" placeholder=\"Login\" name=\"email\" #email=\"ngModel\"\r\n                   spellcheck=\"false\" autocapitalize=\"off\" value=\"{{this.emailinput}}\" required>\r\n        </ion-input>\r\n        <ion-text>\r\n          <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\r\n            Login requis\r\n          </p>\r\n        </ion-text>\r\n\r\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"password\" type=\"password\"\r\n                   #password=\"ngModel\" required>\r\n        </ion-input>\r\n        <ion-text>\r\n          <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\r\n            Mot de passe requis\r\n          </p>\r\n        </ion-text>\r\n\r\n\r\n        <ion-label class=\"forgot\">Mot de passe oublié ?</ion-label>\r\n\r\n        <ion-row class=\"ion-no-margin ion-no-padding\">\r\n          <ion-col class=\"ion-no-margin ion-no-padding\">\r\n            <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">\r\n              <span class=\"title\"> Se Connecter</span>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!--<ion-label class=\"bottom_lbl\">Don't have Account ? <span class=\"signup_span\">Sign Up</span></ion-label>\r\n        <br>-->\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #e7f4fc;\n}\n\n.main_content_div {\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .green_curve {\n  background-color: #1c9aea;\n  width: 130%;\n  height: 300px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  position: absolute;\n}\n\n.main_content_div .black_curve {\n  background: #e7f4fc;\n  height: 170px;\n  width: 150%;\n  position: absolute;\n  z-index: 99;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .black_curve .car {\n  width: 200px;\n  left: 43%;\n  position: absolute;\n  margin-top: 10px;\n}\n\n.main_content_div .black_green_curve {\n  background: #e7f4fc;\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 9;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .upper_curve {\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 999;\n  border-radius: 50%;\n  box-shadow: 15px 15px 0 0 red;\n}\n\n.main_content_div .form_div {\n  padding-top: 300px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .form_div .head_lbl {\n  color: #1c9aea;\n  font-size: 25px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .form_div ion-input {\n  color: #1c9aea;\n  border-bottom: 1px solid #1c9aea;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div ion-button {\n  margin-top: 30px;\n  color: white;\n  --border-radius: 5px;\n  --background: #1c9aea;\n  --border-color: #1c9aea;\n}\n\n.main_content_div .form_div .bottom_lbl {\n  display: block;\n  text-align: center;\n  color: #1c9aea;\n  margin-top: 20px;\n}\n\n.main_content_div .form_div .forgot {\n  display: block;\n  color: #1c9aea;\n  text-align: right;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div .signup_span {\n  font-weight: 600;\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\nion-slides {\n  height: 80vh;\n  --bullet-background: #f2d7d7;\n  --bullet-background-active: var(--ion-color-primary);\n  --bullet-width:30px !important;\n}\n\n.bg {\n  --ion-background-color: white;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n  color: black;\n  font-size: 1rem;\n}\n\n.slide-image {\n  height: 250px;\n  width: 100%;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: black;\n}\n\np b {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXEVEU1xcSW9uaWMgRVJQXFxFUlBfTW9ub2xpdGhpcXVlTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElFO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0hOOztBRE1JO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNKTjs7QURPSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0xOOztBRFFJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTk47O0FEU0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BOOztBRFNJO0VBQ0UsZ0JBQUE7QUNQTjs7QUQwQkE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FDdkJGOztBRHlCQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG9EQUFBO0VBQ0EsOEJBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsNkJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UsY0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDckJGOztBRHlCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDdEJGOztBRHlCQTtFQUNFLGdCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3RCRjs7QUR3QkU7RUFDRSxZQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTdmNGZjO1xyXG59XHJcbi8vZTdmNGZjXHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5ncmVlbl9jdXJ2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5YWVhO1xyXG4gICAgd2lkdGg6IDEzMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAuYmxhY2tfY3VydmUge1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZjRmYztcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIC5jYXIge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGxlZnQ6IDQzJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmxhY2tfZ3JlZW5fY3VydmUge1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZjRmYztcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC51cHBlcl9jdXJ2ZSB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggMCAwIHJlZDtcclxuICB9XHJcblxyXG4gIC5mb3JtX2RpdiB7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAuaGVhZF9sYmwge1xyXG4gICAgICBjb2xvcjogIzFjOWFlYTtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBjb2xvcjogIzFjOWFlYTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYzlhZWE7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzFjOWFlYTtcclxuICAgICAgLS1ib3JkZXItY29sb3I6ICMxYzlhZWE7XHJcblxyXG4gICAgfVxyXG4gICAgLmJvdHRvbV9sYmwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzFjOWFlYTtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9yZ290IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAjMWM5YWVhO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5zaWdudXBfc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tc2xpZGVze1xyXG4gIGhlaWdodDogODB2aDtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZjJkN2Q3O1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1idWxsZXQtd2lkdGg6MzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmcge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2xpZGUtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLnNsaWRlLWltYWdlIHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG4gIGIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTdmNGZjO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ncmVlbl9jdXJ2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzlhZWE7XG4gIHdpZHRoOiAxMzAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2N1cnZlIHtcbiAgYmFja2dyb3VuZDogI2U3ZjRmYztcbiAgaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDE1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmxhY2tfY3VydmUgLmNhciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbGVmdDogNDMlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmxhY2tfZ3JlZW5fY3VydmUge1xuICBiYWNrZ3JvdW5kOiAjZTdmNGZjO1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2N1cnZlIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDE1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAwIDAgcmVkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IHtcbiAgcGFkZGluZy10b3A6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmhlYWRfbGJsIHtcbiAgY29sb3I6ICMxYzlhZWE7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWlucHV0IHtcbiAgY29sb3I6ICMxYzlhZWE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWM5YWVhO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJhY2tncm91bmQ6ICMxYzlhZWE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMWM5YWVhO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5ib3R0b21fbGJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxYzlhZWE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzFjOWFlYTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLnNpZ251cF9zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDgwdmg7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNmMmQ3ZDc7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnVsbGV0LXdpZHRoOjMwcHggIWltcG9ydGFudDtcbn1cblxuLmJnIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IGJsYWNrO1xufVxucCBiIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/rest-apis.service */ "./src/app/services/rest/rest-apis.service.ts");
/* harmony import */ var src_app_services_rest_authentification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest/authentification.service */ "./src/app/services/rest/authentification.service.ts");








let LoginPage = class LoginPage {
    constructor(menuCtrl, navCtrl, util, router, api, authService, loadingCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.router = router;
        this.api = api;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.isLogin = false;
        this.showSkip = true;
        this.slideOpts = {
            zoom: false
        };
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    onSlideChangeStart(event) {
        event.target.isEnd().then(isEnd => {
            this.showSkip = !isEnd;
        });
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        this.menuCtrl.enable(true);
    }
    startApp() {
        console.log('logn');
        this.navCtrl.navigateRoot(['home']);
    }
    onLogin(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('form', form);
            this.submitted = true;
            if (form.valid) {
                this.isLogin = true;
                let dataForm = {
                    userName: this.login.email,
                    password: this.login.password
                };
                const loading = yield this.loadingCtrl.create({
                    message: 'Chargement ...',
                });
                loading.present();
                this.authService.login(dataForm).subscribe((resp) => {
                    let jwt = resp.headers.get("Authorization");
                    this.authService.saveToken(jwt);
                    console.log("success");
                    setTimeout(() => {
                        this.router.navigateByUrl('/charts');
                        ;
                    }, 2000);
                    loading.dismiss();
                }, (err) => {
                    //location.reload();
                    this.navCtrl.back();
                    loading.dismiss();
                    console.log(err.message);
                    this.util.showToast('Veuillez vérifier vos données !', 'danger', 'bottom');
                });
            }
        });
    }
    onSignIn(resp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    register() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"] },
    { type: src_app_services_rest_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], LoginPage.prototype, "slides", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"],
        src_app_services_rest_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map