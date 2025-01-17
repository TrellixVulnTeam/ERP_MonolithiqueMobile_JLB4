function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ProductRequests-send-request-send-request-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ProductRequests/send-request/send-request.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ProductRequests/send-request/send-request.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductRequestsSendRequestSendRequestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <!--- <ion-back-button mode=\"md\"></ion-back-button>-->\r\n\r\n      <ion-menu-button></ion-menu-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"ion-button custom-class\" (click)=\"addtocart()\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Envoyer une demande</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form (submit)=\"getCurrentUser(clientid.value)\">\r\n    <ion-list lines=\"none\" class=\"contactFormList\">\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-label>Client</ion-label>\r\n        <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Fermer\" #clientid>\r\n          <ion-select-option value=\"\" hidden>Client : </ion-select-option>\r\n          <ion-select-option value=\"{{item.id}}\" *ngFor=\"let item of user_list\">\r\n           <p>{{item.firstName}} {{item.lastName}}</p>\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\" *ngFor=\"let item of category_list\">\r\n        <ion-label>Catégorie : </ion-label>\r\n        <ion-input type=\"text\" readonly value=\"{{item.getname()}}\" #catid></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-label>Produit : </ion-label>\r\n        <ion-input type=\"text\" readonly value=\"{{this.nomprod}}\" #prodnom></ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-label>Quantité : </ion-label>\r\n        <ion-input type=\"text\" readonly value=\"{{this.quantity}}\" #qte></ion-input>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"getCurrentUser(clientid.value)\">Enregistrer</ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/ProductRequests/send-request/send-request-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/ProductRequests/send-request/send-request-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: SendRequestPageRoutingModule */

  /***/
  function srcAppPagesProductRequestsSendRequestSendRequestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendRequestPageRoutingModule", function () {
      return SendRequestPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _send_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./send-request.page */
    "./src/app/pages/ProductRequests/send-request/send-request.page.ts");

    var routes = [{
      path: '',
      component: _send_request_page__WEBPACK_IMPORTED_MODULE_3__["SendRequestPage"]
    }];

    var SendRequestPageRoutingModule = function SendRequestPageRoutingModule() {
      _classCallCheck(this, SendRequestPageRoutingModule);
    };

    SendRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendRequestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ProductRequests/send-request/send-request.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/ProductRequests/send-request/send-request.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SendRequestPageModule */

  /***/
  function srcAppPagesProductRequestsSendRequestSendRequestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendRequestPageModule", function () {
      return SendRequestPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _send_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./send-request-routing.module */
    "./src/app/pages/ProductRequests/send-request/send-request-routing.module.ts");
    /* harmony import */


    var _send_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./send-request.page */
    "./src/app/pages/ProductRequests/send-request/send-request.page.ts");

    var SendRequestPageModule = function SendRequestPageModule() {
      _classCallCheck(this, SendRequestPageModule);
    };

    SendRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _send_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendRequestPageRoutingModule"]],
      declarations: [_send_request_page__WEBPACK_IMPORTED_MODULE_6__["SendRequestPage"]]
    })], SendRequestPageModule);
    /***/
  },

  /***/
  "./src/app/pages/ProductRequests/send-request/send-request.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/ProductRequests/send-request/send-request.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductRequestsSendRequestSendRequestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "ion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n\n.contactFormList {\n  margin-top: 20px;\n}\n\n.contactFormList .inputs-item {\n  border: 1px solid lightcyan;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n}\n\nion-button {\n  --border-radius: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdFJlcXVlc3RzL3NlbmQtcmVxdWVzdC9DOlxcVXNlcnNcXEFTVVNcXERvd25sb2Fkc1xcQXBwX2NvZGVcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcUHJvZHVjdFJlcXVlc3RzXFxzZW5kLXJlcXVlc3RcXHNlbmQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL1Byb2R1Y3RSZXF1ZXN0cy9zZW5kLXJlcXVlc3Qvc2VuZC1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBLDZCQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNBRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUU7RUFDRSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9Qcm9kdWN0UmVxdWVzdHMvc2VuZC1yZXF1ZXN0L3NlbmQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDhwdDtcclxuICByaWdodDogLTVweDtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuLmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cclxuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWN0Rm9ybUxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5pbnB1dHMtaXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufSIsImlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDJweDtcbn1cblxuLmlvbi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jb250YWN0Rm9ybUxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhY3RGb3JtTGlzdCAuaW5wdXRzLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */";
=======
    __webpack_exports__["default"] = "ion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n\n.contactFormList {\n  margin-top: 20px;\n}\n\n.contactFormList .inputs-item {\n  border: 1px solid lightcyan;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n}\n\nion-button {\n  --border-radius: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdFJlcXVlc3RzL3NlbmQtcmVxdWVzdC9DOlxca2FpcyBpb25pYyBwcm9qZWN0XFxFUlBfTW9ub2xpdGhpcXVlTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcUHJvZHVjdFJlcXVlc3RzXFxzZW5kLXJlcXVlc3RcXHNlbmQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL1Byb2R1Y3RSZXF1ZXN0cy9zZW5kLXJlcXVlc3Qvc2VuZC1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBLDZCQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNBRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUU7RUFDRSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9Qcm9kdWN0UmVxdWVzdHMvc2VuZC1yZXF1ZXN0L3NlbmQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDhwdDtcclxuICByaWdodDogLTVweDtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuLmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cclxuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWN0Rm9ybUxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5pbnB1dHMtaXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufSIsImlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDJweDtcbn1cblxuLmlvbi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jb250YWN0Rm9ybUxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhY3RGb3JtTGlzdCAuaW5wdXRzLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */";
>>>>>>> a6225635db8510973aa5a1ec3d921a5694092dff
    /***/
  },

  /***/
  "./src/app/pages/ProductRequests/send-request/send-request.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/ProductRequests/send-request/send-request.page.ts ***!
    \*************************************************************************/

  /*! exports provided: SendRequestPage */

  /***/
  function srcAppPagesProductRequestsSendRequestSendRequestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendRequestPage", function () {
      return SendRequestPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/rest/rest-apis.service */
    "./src/app/services/rest/rest-apis.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/rest/environnement.model */
    "./src/app/services/rest/environnement.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modals_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../modals/Category */
    "./src/app/modals/Category.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SendRequestPage = /*#__PURE__*/function () {
      function SendRequestPage(api, http, route, navCtrl) {
        var _this = this;

        _classCallCheck(this, SendRequestPage);

        this.api = api;
        this.http = http;
        this.route = route;
        this.navCtrl = navCtrl;
        this.user_list = [];
        this.current_user = [];
        this.category_list = [];
        this.route.queryParams.subscribe(function (params) {
          _this.categoryId = params["categoryId"];
          _this.quantity = params["quantity"];
          _this.nomprod = params["nomprod"]; // this.currency = JSON.parse(params["currency"]);
        });
      }

      _createClass(SendRequestPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllClients();
          this.getallCategory();
        }
      }, {
        key: "charge_compteur",
        value: function charge_compteur() {
          if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
          } else {
            this.badgecount = 0;
          }

          return this.badgecount;
        }
      }, {
        key: "listCategory",
        value: function listCategory() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/category/categorys");
        }
      }, {
        key: "getallCategory",
        value: function getallCategory() {
          var _this2 = this;

          var cat, i, j;
          this.listCategory().subscribe(function (data) {
            var info = data; //alert(info[0]['id']);

            if (info.length > 0) {
              for (i = 0; i < info.length; i++) {
                if (info[i]['id'] == _this2.categoryId) {
                  cat = new _modals_Category__WEBPACK_IMPORTED_MODULE_6__["Category"]();
                  cat.setid(info[i]['id']);
                  cat.setname(info[i]['name']);
                  cat.setdescription(info[i]['description']);
                  cat.setidBrand(info[i]['idBrand']);

                  _this2.category_list.push(cat);
                }
              }
            }
          });
        }
      }, {
        key: "CurrentUser",
        value: function CurrentUser() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/user/getCurretnUser");
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser(clientid) {
          var _this3 = this;

          var cur_user, i;
          this.CurrentUser().subscribe(function (data) {
            var info = _this3.createNewSalesOrderEmpty(clientid, data['id'] + "");

            _this3.addLineToSalesOrder(info['__zone_symbol__value'].id); //console.log(data['id'])

          });
        }
      }, {
        key: "AllUser",
        value: function AllUser() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/user/users");
        }
      }, {
        key: "getAllClients",
        value: function getAllClients() {
          var _this4 = this;

          var i, user;
          this.AllUser().subscribe(function (data) {
            var info = data;
            console.log('getAllClients  ');
            /*   alert(info[1]['groupIds']);
             alert(groupids[0]['id']);
               alert(groupids[0].id);*/

            if (data.length > 0) {
              for (i = 0; i < data.length; i++) {
                var groupids = data[i].groupIds;

                if (groupids.length > 0) {
                  if (groupids[0].id == '3') {
                    _this4.user_list = data;
                  }
                }
              }
            }

            console.log(_this4.user_list); //  this.dismissLoader();
          });
        }
      }, {
        key: "createNewSalesOrderEmpty",
        value: function createNewSalesOrderEmpty(clientId, purchasingManagerId) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().append("clientId", clientId).append("purchasingManagerId", purchasingManagerId);
          return this.http.post(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/salesorder/createNewSalesOrderEmpty", httpParams).toPromise();
        }
      }, {
        key: "addtocart",
        value: function addtocart() {
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }, {
        key: "addLineToSalesOrder",
        value: function addLineToSalesOrder(idnewSaleOrder) {
          // alert(clientid);
          var data = {
            categoryId: this.categoryId,
            id: null,
            quantity: this.quantity,
            salesOrderId: idnewSaleOrder,
            state: null
          };
          this.saveLineToSalesOrder(data).subscribe(function (data) {
            console.log("succces");
          }, function (err) {//this.util.showToast('Utilisateur existe déjà', 'danger', 'bottom');
          });
        }
      }, {
        key: "saveLineToSalesOrder",
        value: function saveLineToSalesOrder(order) {
          return this.http.post(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/ligneSale/addLineToSalesOrder", order);
        }
      }]);

      return SendRequestPage;
    }();

    SendRequestPage.ctorParameters = function () {
      return [{
        type: _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }];
    };

    SendRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-request',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./send-request.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ProductRequests/send-request/send-request.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./send-request.page.scss */
      "./src/app/pages/ProductRequests/send-request/send-request.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], SendRequestPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-ProductRequests-send-request-send-request-module-es5.js.map