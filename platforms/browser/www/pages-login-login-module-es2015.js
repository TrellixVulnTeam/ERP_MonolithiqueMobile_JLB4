(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"end\">\n       <ion-button color='dark' (click)=\"startApp()\" [hidden]=\"!showSkip\">skip </ion-button>\n     </ion-buttons>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"bg\">\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\n\n    <!-- <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>-->\n\n    <div class=\"green_curve\"></div>\n    <div class=\"black_curve\">\n      <img src=\"assets/imgs/logo_sonicerp.png\" class=\"car\">\n    </div>\n    <div class=\"black_green_curve\"></div>\n\n    <div class=\"form_div\">\n      <!--  <ion-label class=\"head_lbl\">Login</ion-label>-->\n      <form #loginForm=\"ngForm\" novalidate>\n        <ion-input [(ngModel)]=\"login.email\" type=\"text\" placeholder=\"Login\" name=\"email\" #email=\"ngModel\"\n                   spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n        <ion-text>\n          <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\n            Login requis\n          </p>\n        </ion-text>\n\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"password\" type=\"password\"\n                   #password=\"ngModel\" required>\n        </ion-input>\n        <ion-text>\n          <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\n            Mot de passe requis\n          </p>\n        </ion-text>\n\n\n        <ion-label class=\"forgot\">Mot de passe oublié ?</ion-label>\n\n        <ion-row class=\"ion-no-margin ion-no-padding\">\n          <ion-col class=\"ion-no-margin ion-no-padding\">\n            <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\"\n                        [disabled]=\"isLogin\">\n              <span class=\"title\" *ngIf=\"!isLogin\"> Log In</span>\n              <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <!--<ion-label class=\"bottom_lbl\">Don't have Account ? <span class=\"signup_span\">Sign Up</span></ion-label>\n        <br>-->\n      </form>\n\n    </div>\n  </div>\n</ion-content>");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"end\">\r\n       <ion-button color='dark' (click)=\"startApp()\" [hidden]=\"!showSkip\">skip </ion-button>\r\n     </ion-buttons>-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"bg\">\r\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\r\n\r\n    <!-- <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>-->\r\n\r\n    <div class=\"green_curve\"></div>\r\n    <div class=\"black_curve\">\r\n      <img src=\"assets/imgs/logo_sonicerp.png\" class=\"car\">\r\n    </div>\r\n    <div class=\"black_green_curve\"></div>\r\n\r\n    <div class=\"form_div\">\r\n      <!--  <ion-label class=\"head_lbl\">Login</ion-label>-->\r\n      <form #loginForm=\"ngForm\" novalidate>\r\n        <ion-input [(ngModel)]=\"login.email\" type=\"text\" placeholder=\"Login\" name=\"email\" #email=\"ngModel\"\r\n                   spellcheck=\"false\" autocapitalize=\"off\" required>\r\n        </ion-input>\r\n        <ion-text>\r\n          <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\r\n            Login requis\r\n          </p>\r\n        </ion-text>\r\n\r\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"password\" type=\"password\"\r\n                   #password=\"ngModel\" required>\r\n        </ion-input>\r\n        <ion-text>\r\n          <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\" style=\"color:red\">\r\n            Mot de passe requis\r\n          </p>\r\n        </ion-text>\r\n\r\n\r\n        <ion-label class=\"forgot\">Mot de passe oublié ?</ion-label>\r\n\r\n        <ion-row class=\"ion-no-margin ion-no-padding\">\r\n          <ion-col class=\"ion-no-margin ion-no-padding\">\r\n            <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\"\r\n                        [disabled]=\"isLogin\">\r\n              <span class=\"title\" *ngIf=\"!isLogin\"> Log In</span>\r\n              <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!--<ion-label class=\"bottom_lbl\">Don't have Account ? <span class=\"signup_span\">Sign Up</span></ion-label>\r\n        <br>-->\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>");
>>>>>>> a6225635db8510973aa5a1ec3d921a5694092dff

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
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #e7f4fc;\n}\n\n.main_content_div {\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .green_curve {\n  background-color: #1c9aea;\n  width: 130%;\n  height: 300px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  position: absolute;\n}\n\n.main_content_div .black_curve {\n  background: #e7f4fc;\n  height: 170px;\n  width: 150%;\n  position: absolute;\n  z-index: 99;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .black_curve .car {\n  width: 200px;\n  left: 43%;\n  position: absolute;\n  margin-top: 10px;\n}\n\n.main_content_div .black_green_curve {\n  background: #e7f4fc;\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 9;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .upper_curve {\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 999;\n  border-radius: 50%;\n  box-shadow: 15px 15px 0 0 red;\n}\n\n.main_content_div .form_div {\n  padding-top: 300px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .form_div .head_lbl {\n  color: #1c9aea;\n  font-size: 25px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .form_div ion-input {\n  color: #1c9aea;\n  border-bottom: 1px solid #1c9aea;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div ion-button {\n  margin-top: 30px;\n  color: white;\n  --border-radius: 5px;\n  --background: #1c9aea;\n  --border-color: #1c9aea;\n}\n\n.main_content_div .form_div .bottom_lbl {\n  display: block;\n  text-align: center;\n  color: #1c9aea;\n  margin-top: 20px;\n}\n\n.main_content_div .form_div .forgot {\n  display: block;\n  color: #1c9aea;\n  text-align: right;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div .signup_span {\n  font-weight: 600;\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\nion-slides {\n  height: 80vh;\n  --bullet-background: #f2d7d7;\n  --bullet-background-active: var(--ion-color-primary);\n  --bullet-width:30px !important;\n}\n\n.bg {\n  --ion-background-color: white;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n  color: black;\n  font-size: 1rem;\n}\n\n.slide-image {\n  height: 250px;\n  width: 100%;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: black;\n}\n\np b {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxBU1VTXFxEb3dubG9hZHNcXEFwcF9jb2RlXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJRTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBREtJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNITjs7QURNSTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDSk47O0FET0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNMTjs7QURRSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ05OOztBRFNJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURTSTtFQUNFLGdCQUFBO0FDUE47O0FEMEJBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ3ZCRjs7QUR5QkE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxvREFBQTtFQUNBLDhCQUFBO0FDdEJGOztBRHlCQTtFQUNFLDZCQUFBO0FDdEJGOztBRHdCQTtFQUNFLGNBQUE7QUNyQkY7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3JCRjs7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ3RCRjs7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN0QkY7O0FEd0JFO0VBQ0UsWUFBQTtBQ3RCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2U3ZjRmYztcclxufVxyXG4vL2U3ZjRmY1xyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW5fY3VydmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjOWFlYTtcclxuICAgIHdpZHRoOiAxMzAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmJsYWNrX2N1cnZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAuY2FyIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBsZWZ0OiA0MyU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJsYWNrX2dyZWVuX2N1cnZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAudXBwZXJfY3VydmUge1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDAgMCByZWQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybV9kaXYge1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgLmhlYWRfbGJsIHtcclxuICAgICAgY29sb3I6ICMxYzlhZWE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgY29sb3I6ICMxYzlhZWE7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWM5YWVhO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMxYzlhZWE7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMWM5YWVhO1xyXG5cclxuICAgIH1cclxuICAgIC5ib3R0b21fbGJsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMxYzlhZWE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcmdvdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogIzFjOWFlYTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbnVwX3NwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI2YyZDdkNztcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tYnVsbGV0LXdpZHRoOjMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNsaWRlLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5cclxuICBiIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2U3ZjRmYztcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZ3JlZW5fY3VydmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5YWVhO1xuICB3aWR0aDogMTMwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ibGFja19jdXJ2ZSB7XG4gIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2N1cnZlIC5jYXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IDQzJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2dyZWVuX2N1cnZlIHtcbiAgYmFja2dyb3VuZDogI2U3ZjRmYztcbiAgaGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDE1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9jdXJ2ZSB7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiAxNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAxNXB4IDE1cHggMCAwIHJlZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIHBhZGRpbmctdG9wOiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5oZWFkX2xibCB7XG4gIGNvbG9yOiAjMWM5YWVhO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMWM5YWVhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFjOWFlYTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWM5YWVhO1xuICAtLWJvcmRlci1jb2xvcjogIzFjOWFlYTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuYm90dG9tX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWM5YWVhO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5mb3Jnb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMxYzlhZWE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZjJkN2Q3O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJ1bGxldC13aWR0aDozMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiBibGFjaztcbn1cbnAgYiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");
=======
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #e7f4fc;\n}\n\n.main_content_div {\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .green_curve {\n  background-color: #1c9aea;\n  width: 130%;\n  height: 300px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  position: absolute;\n}\n\n.main_content_div .black_curve {\n  background: #e7f4fc;\n  height: 170px;\n  width: 150%;\n  position: absolute;\n  z-index: 99;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .black_curve .car {\n  width: 200px;\n  left: 43%;\n  position: absolute;\n  margin-top: 10px;\n}\n\n.main_content_div .black_green_curve {\n  background: #e7f4fc;\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 9;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .upper_curve {\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 999;\n  border-radius: 50%;\n  box-shadow: 15px 15px 0 0 red;\n}\n\n.main_content_div .form_div {\n  padding-top: 300px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .form_div .head_lbl {\n  color: #1c9aea;\n  font-size: 25px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .form_div ion-input {\n  color: #1c9aea;\n  border-bottom: 1px solid #1c9aea;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div ion-button {\n  margin-top: 30px;\n  color: white;\n  --border-radius: 5px;\n  --background: #1c9aea;\n  --border-color: #1c9aea;\n}\n\n.main_content_div .form_div .bottom_lbl {\n  display: block;\n  text-align: center;\n  color: #1c9aea;\n  margin-top: 20px;\n}\n\n.main_content_div .form_div .forgot {\n  display: block;\n  color: #1c9aea;\n  text-align: right;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div .signup_span {\n  font-weight: 600;\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\nion-slides {\n  height: 80vh;\n  --bullet-background: #f2d7d7;\n  --bullet-background-active: var(--ion-color-primary);\n  --bullet-width:30px !important;\n}\n\n.bg {\n  --ion-background-color: white;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n  color: black;\n  font-size: 1rem;\n}\n\n.slide-image {\n  height: 250px;\n  width: 100%;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: black;\n}\n\np b {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXGthaXMgaW9uaWMgcHJvamVjdFxcRVJQX01vbm9saXRoaXF1ZU1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJRTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBREtJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNITjs7QURNSTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDSk47O0FET0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNMTjs7QURRSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ05OOztBRFNJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURTSTtFQUNFLGdCQUFBO0FDUE47O0FEMEJBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ3ZCRjs7QUR5QkE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxvREFBQTtFQUNBLDhCQUFBO0FDdEJGOztBRHlCQTtFQUNFLDZCQUFBO0FDdEJGOztBRHdCQTtFQUNFLGNBQUE7QUNyQkY7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3JCRjs7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ3RCRjs7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN0QkY7O0FEd0JFO0VBQ0UsWUFBQTtBQ3RCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2U3ZjRmYztcclxufVxyXG4vL2U3ZjRmY1xyXG4ubWFpbl9jb250ZW50X2RpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW5fY3VydmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjOWFlYTtcclxuICAgIHdpZHRoOiAxMzAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmJsYWNrX2N1cnZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAuY2FyIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBsZWZ0OiA0MyU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJsYWNrX2dyZWVuX2N1cnZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAudXBwZXJfY3VydmUge1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDAgMCByZWQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybV9kaXYge1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgLmhlYWRfbGJsIHtcclxuICAgICAgY29sb3I6ICMxYzlhZWE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgY29sb3I6ICMxYzlhZWE7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWM5YWVhO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMxYzlhZWE7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMWM5YWVhO1xyXG5cclxuICAgIH1cclxuICAgIC5ib3R0b21fbGJsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMxYzlhZWE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcmdvdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogIzFjOWFlYTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lnbnVwX3NwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI2YyZDdkNztcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tYnVsbGV0LXdpZHRoOjMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNsaWRlLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5cclxuICBiIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2U3ZjRmYztcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZ3JlZW5fY3VydmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5YWVhO1xuICB3aWR0aDogMTMwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ibGFja19jdXJ2ZSB7XG4gIGJhY2tncm91bmQ6ICNlN2Y0ZmM7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2N1cnZlIC5jYXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IDQzJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2dyZWVuX2N1cnZlIHtcbiAgYmFja2dyb3VuZDogI2U3ZjRmYztcbiAgaGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDE1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9jdXJ2ZSB7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiAxNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAxNXB4IDE1cHggMCAwIHJlZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIHBhZGRpbmctdG9wOiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5oZWFkX2xibCB7XG4gIGNvbG9yOiAjMWM5YWVhO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMWM5YWVhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFjOWFlYTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWM5YWVhO1xuICAtLWJvcmRlci1jb2xvcjogIzFjOWFlYTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuYm90dG9tX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWM5YWVhO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5mb3Jnb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMxYzlhZWE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZjJkN2Q3O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJ1bGxldC13aWR0aDozMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiBibGFjaztcbn1cbnAgYiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");
>>>>>>> a6225635db8510973aa5a1ec3d921a5694092dff

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
    constructor(menuCtrl, navCtrl, util, router, api, authService) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.router = router;
        this.api = api;
        this.authService = authService;
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
        console.log('form', form);
        this.submitted = true;
        if (form.valid) {
            this.isLogin = true;
            let dataForm = {
                userName: this.login.email,
                password: this.login.password
            };
            this.authService.login(dataForm).subscribe((resp) => {
                let jwt = resp.headers.get("Authorization");
                this.authService.saveToken(jwt);
                console.log("success");
                setTimeout(() => {
                    this.router.navigateByUrl('/charts');
                    ;
                }, 2000);
            }, (err) => {
                console.log(err.message);
            });
        }
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
    { type: src_app_services_rest_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationServiceService"] }
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
        src_app_services_rest_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationServiceService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map