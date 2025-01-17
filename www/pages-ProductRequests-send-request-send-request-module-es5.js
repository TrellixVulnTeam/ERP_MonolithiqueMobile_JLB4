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


    __webpack_exports__["default"] = "ion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n\n.contactFormList {\n  margin-top: 20px;\n}\n\n.contactFormList .inputs-item {\n  border: 1px solid lightcyan;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n}\n\nion-button {\n  --border-radius: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdFJlcXVlc3RzL3NlbmQtcmVxdWVzdC9EOlxcRURTXFxJb25pYyBFUlBcXEVSUF9Nb25vbGl0aGlxdWVNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxQcm9kdWN0UmVxdWVzdHNcXHNlbmQtcmVxdWVzdFxcc2VuZC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvUHJvZHVjdFJlcXVlc3RzL3NlbmQtcmVxdWVzdC9zZW5kLXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FER0EsNkJBQUE7O0FBQ0E7RUFDRSxpQkFBQTtBQ0FGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURJRTtFQUNFLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FDRko7O0FETUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1Byb2R1Y3RSZXF1ZXN0cy9zZW5kLXJlcXVlc3Qvc2VuZC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogOHB0O1xyXG4gIHJpZ2h0OiAtNXB4O1xyXG4gIHRvcDogMnB4O1xyXG59XHJcblxyXG4uaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xyXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhY3RGb3JtTGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgLmlucHV0cy1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59IiwiaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogMnB4O1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNvbnRhY3RGb3JtTGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGFjdEZvcm1MaXN0IC5pbnB1dHMtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */";
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
    /* harmony import */


    var _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/util/util.service */
    "./src/app/services/util/util.service.ts");

    var SendRequestPage = /*#__PURE__*/function () {
      function SendRequestPage(util, api, http, route, navCtrl, loadingCtrl) {
        var _this = this;

        _classCallCheck(this, SendRequestPage);

        this.util = util;
        this.api = api;
        this.http = http;
        this.route = route;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/user/getCurretnUser").toPromise());

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser(clientid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var cur_user, i, loading, lineSale;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.CurrentUser().then(function (data) {
                      _this3.currentUser = data;
                    });

                  case 2:
                    _context2.next = 4;
                    return this.loadingCtrl.create({
                      message: 'Chargement ...'
                    });

                  case 4:
                    loading = _context2.sent;
                    loading.present();
                    _context2.next = 8;
                    return this.createNewSalesOrderEmpty(clientid, this.currentUser.id).then(function (data) {
                      _this3.saleOrder = data;
                    });

                  case 8:
                    lineSale = {
                      "categoryId": this.categoryId,
                      "id": null,
                      "quantity": this.quantity,
                      "salesOrderId": this.saleOrder.id,
                      "state": 0
                    };
                    _context2.next = 11;
                    return this.saveLineToSalesOrder(lineSale).then(function (data) {
                      _this3.util.showToast('Demande Envoyée avec succée !', 'success', 'bottom');

                      localStorage.removeItem("produits_commandes");
                      localStorage.removeItem("compteur");
                      loading.dismiss();
                    });

                  case 11:
                    loading.dismiss();

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
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
                  if (groupids[0].id == 3) {
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
        key: "saveLineToSalesOrder",
        value: function saveLineToSalesOrder(line) {
          return this.http.post(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/ligneSale/addLineToSalesOrder", line).toPromise();
        }
      }]);

      return SendRequestPage;
    }();

    SendRequestPage.ctorParameters = function () {
      return [{
        type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }, {
        type: _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])], SendRequestPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-ProductRequests-send-request-send-request-module-es5.js.map