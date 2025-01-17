function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charts-charts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChartsChartsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\r\n              <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n              <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n          </ion-button>\r\n\r\n      </ion-buttons>\r\n    <ion-title style=\"text-align: center\">\r\n      Accueil\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <!--<ion-row>\r\n    <ion-col size=\"3\">\r\n      <div class=\"center\">\r\n        <div class=\"seperator\"></div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <p class=\"title\">Line Chart</p>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <div class=\"center\">\r\n        <div class=\"seperator\"></div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"row\">\r\n    <div style=\"display: block;\">\r\n      <canvas baseChart width=\"400\" height=\"400\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n        [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"\r\n        (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n    <ion-button (click)=\"randomize()\" color=\"secondary\" expand=\"block\">\r\n      Change\r\n    </ion-button>\r\n  </div>-->\r\n    <ion-row>\r\n        <ion-col>\r\n            <p class=\"title\">Statistiques Globals</p>\r\n            <br>\r\n        </ion-col>\r\n        <table class=\"table\">\r\n\r\n            <tr>\r\n                <td class=\"box\" style=\"width: 50%; padding: 10px; \">\r\n\r\n                    <span style=\"color: white; font-size: larger\">{{this.compteurSiteStockDisponible}}</span>\r\n                    <br>\r\n                    <span style=\"color: white;\"><br>Site Stock<br>Disponible</span>\r\n\r\n                </td>\r\n                <td style=\"width: 2% \">&nbsp;</td>\r\n                <td  class=\"box\" style=\"background-color: red\" >\r\n\r\n                    <span style=\"color: white; font-size: larger\">{{this.compteurSiteStockNonDisponible}}</span>\r\n                    <br>\r\n                    <span style=\"color: white;\"><br>Site Stock<br>Non Disponible</span>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"box\" style=\"width: 50%;padding: 10px; \">\r\n\r\n                    <span style=\"color: white; font-size: larger\">{{this.compteurProductSolde}}</span>\r\n                    <br>\r\n                    <span style=\"color: white;\"><br>Produits <br>Soldés</span>\r\n\r\n                </td>\r\n                <td style=\"width: 2% \">&nbsp;</td>\r\n                <td  class=\"box\" style=\"background-color: red\" >\r\n\r\n                    <span style=\"color: white; font-size: larger\">{{this.compteurProductNonSolde}}</span>\r\n                    <br>\r\n                    <span style=\"color: white;\"><br>Produits <br>Non Soldés</span>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"box\" style=\"width: 50%;padding: 10px; \">\r\n\r\n                  <span style=\"color: white; font-size: larger\">10</span>\r\n                  <br>\r\n                  <span style=\"color: white;\"><br>Commande <br>Total</span>\r\n\r\n              </td>\r\n              <td style=\"width: 2% \">&nbsp;</td>\r\n              <td  class=\"box\" style=\"background-color: red\" >\r\n\r\n                  <span style=\"color: white; font-size: larger\">3</span>\r\n                  <br>\r\n                  <span style=\"color: white;\"><br>Commande de <br> {{this.today2}}</span>\r\n\r\n              </td>\r\n          </tr>\r\n\r\n        </table>\r\n    </ion-row>\r\n\r\n  <ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">Site Stock</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>\r\n\r\n  <div style=\"display: block\">\r\n   <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"['Site Stock Non Disponible', 'Site Stock Disponible']\" [chartType]=\"doughnutChartType\">\r\n   </canvas>\r\n </div>\r\n\r\n    <ion-row>\r\n        <ion-col size=\"3\">\r\n            <div class=\"center\">\r\n                <div class=\"seperator\"></div>\r\n            </div>\r\n        </ion-col>\r\n        <ion-col>\r\n            <p class=\"title\">Statut de produits</p>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n            <div class=\"center\">\r\n                <div class=\"seperator\"></div>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <div style=\"display: block\">\r\n        <canvas baseChart [datasets]=\"radarChartData\" [options]=\"radarChartOptions\" [labels]=\"radarChartLabels\"\r\n                [chartType]=\"radarChartType\">\r\n        </canvas>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--<ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">Pie Chart</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>-->\r\n\r\n\r\n  <!--<div class=\"chart\">\r\n   <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\r\n     [options]=\"pieChartOptions\" [colors]=\"pieChartColors\" [legend]=\"pieChartLegend\">\r\n   </canvas>\r\n </div>\r\n <ion-row>\r\n   <ion-col size=\"6\">\r\n     <ion-button (click)=\"pieChartLegend=!pieChartLegend\" color=\"secondary\" expand=\"block\">\r\n       Toggle Legend\r\n     </ion-button>\r\n   </ion-col>\r\n   <ion-col size=\"6\">\r\n     <ion-button (click)=\"changeLabels()\" color=\"secondary\" expand=\"block\">\r\n       Change Labels\r\n     </ion-button>\r\n   </ion-col>\r\n </ion-row>-->\r\n\r\n\r\n\r\n  <!--<ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">PolarArea Chart</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>-->\r\n\r\n\r\n  <!--<div style=\"display: block\">\r\n   <canvas baseChart [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\"\r\n     [chartType]=\"polarAreaChartType\">\r\n   </canvas>\r\n </div>\r\n\r\n\r\n <ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">Bubble Chart</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>\r\n\r\n\r\n <div style=\"display: block\">\r\n   <canvas baseChart [datasets]=\"bubbleChartData\" [options]=\"bubbleChartOptions\" [colors]=\"bubbleChartColors\"\r\n     [legend]=\"bubbleChartLegend\" [chartType]=\"bubbleChartType\">\r\n   </canvas>\r\n </div>-->\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/charts/charts-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/charts/charts-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ChartsPageRoutingModule */

  /***/
  function srcAppPagesChartsChartsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsPageRoutingModule", function () {
      return ChartsPageRoutingModule;
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


    var _charts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./charts.page */
    "./src/app/pages/charts/charts.page.ts");

    var routes = [{
      path: '',
      component: _charts_page__WEBPACK_IMPORTED_MODULE_3__["ChartsPage"]
    }];

    var ChartsPageRoutingModule = function ChartsPageRoutingModule() {
      _classCallCheck(this, ChartsPageRoutingModule);
    };

    ChartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChartsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/charts/charts.module.ts ***!
    \***********************************************/

  /*! exports provided: ChartsPageModule */

  /***/
  function srcAppPagesChartsChartsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsPageModule", function () {
      return ChartsPageModule;
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


    var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./charts-routing.module */
    "./src/app/pages/charts/charts-routing.module.ts");
    /* harmony import */


    var _charts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./charts.page */
    "./src/app/pages/charts/charts.page.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

    var ChartsPageModule = function ChartsPageModule() {
      _classCallCheck(this, ChartsPageModule);
    };

    ChartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsPageRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]],
      declarations: [_charts_page__WEBPACK_IMPORTED_MODULE_6__["ChartsPage"]]
    })], ChartsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/charts/charts.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChartsChartsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box {\n  border-radius: 20px;\n  box-shadow: 2px 2px 15px -2px #323232;\n  background-color: dodgerblue;\n  text-align: center;\n  vertical-align: middle;\n  color: darkorange;\n  width: 200px;\n}\n\n.box2 {\n  border-radius: 20px;\n  box-shadow: 2px 2px 15px -2px #323232;\n  background-color: dodgerblue;\n  text-align: center;\n  vertical-align: middle;\n  color: darkorange;\n  collapse: 2%;\n}\n\n.table {\n  width: 100%;\n  height: 100%;\n}\n\n.btn {\n  background-color: transparent;\n}\n\n.title {\n  text-align: center;\n  font-family: \"Avenir\";\n  font-size: 18px;\n  margin: 0px;\n  margin-top: 10px;\n}\n\n.center {\n  width: 100%;\n  height: 100%;\n}\n\n.seperator {\n  width: 90%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: 1px;\n  background-color: #ECF0F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --border-radius: 5px;\n}\n\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcnRzL0Q6XFxFRFNcXElvbmljIEVSUFxcRVJQX01vbm9saXRoaXF1ZU1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGNoYXJ0c1xcY2hhcnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2NoYXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsNkJBQUE7QUNHRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREVBLDZCQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9jaGFydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCAtMnB4IHJnYig1MCwgNTAsIDUwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmRvZGdlcmJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5ib3gye1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IC0ycHggcmdiKDUwLCA1MCwgNTApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgY29sbGFwc2U6IDIlO1xyXG59XHJcbi50YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXZlbmlyJztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlcGVyYXRvcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogOHB0O1xyXG4gIHJpZ2h0OiAtNXB4O1xyXG4gIHRvcDogMnB4O1xyXG59XHJcblxyXG4uaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xyXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn0iLCIuYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IC0ycHggIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogZGFya29yYW5nZTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYm94MiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCAtMnB4ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IGRhcmtvcmFuZ2U7XG4gIGNvbGxhcHNlOiAyJTtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pclwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlcGVyYXRvciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICByaWdodDogLTVweDtcbiAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/charts/charts.page.ts ***!
    \*********************************************/

  /*! exports provided: ChartsPage */

  /***/
  function srcAppPagesChartsChartsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsPage", function () {
      return ChartsPage;
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


    var _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @awesome-cordova-plugins/badge/ngx */
    "./node_modules/@awesome-cordova-plugins/badge/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/rest/environnement.model */
    "./src/app/services/rest/environnement.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! date-fns/format */
    "./node_modules/date-fns/esm/format/index.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var ChartsPage = /*#__PURE__*/function () {
      function ChartsPage(badge, navCtrl, http) {
        _classCallCheck(this, ChartsPage);

        this.badge = badge;
        this.navCtrl = navCtrl;
        this.http = http;
        this.today2 = Object(date_fns_format__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), "yyyy-MM-dd");
        this.produits_commandes_list = [];
        this.compteurSiteStockDisponible = 0;
        this.compteurSiteStockNonDisponible = 0;
        this.compteurProductSolde = 0;
        this.compteurProductNonSolde = 0;
        this.category_list = [];
        this.product_active_list = [];
        this.product_nonactive_list = [];
        this.doughnutChartLabels = ['Site Stock Non Disponible', 'Site Stock Disponible'];
        this.doughnutChartData = [0, 0];
        this.doughnutChartType = 'doughnut';
        this.barChartOptions = {
          responsive: true,
          // We use these empty structures as placeholders for dynamic theming.
          scales: {
            xAxes: [{}],
            yAxes: [{}]
          },
          plugins: {
            datalabels: {
              anchor: 'end',
              align: 'end'
            }
          }
        }; //public barChartLabels: Array<any> = ['cat1', 'cat2'];

        this.barChartLabels = this.category_list;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
          data: [5, 2],
          label: 'Produits Non Active'
        }, {
          data: [5, 2],
          label: 'Produits active'
        }];
        this.radarChartOptions = {
          responsive: true
        };
        this.radarChartLabels = this.category_list;
        this.radarChartData = [{
          data: this.product_nonactive_list,
          label: 'Produits Non Active'
        }, {
          data: this.product_active_list,
          label: 'Produits Active'
        }];
        this.radarChartType = 'radar'; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Pie Chart
        // https://valor-software.com/ng2-charts/#PieChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.pieChartOptions = {
          responsive: true,
          legend: {
            position: 'top'
          },
          plugins: {
            datalabels: {
              formatter: function formatter(value, ctx) {
                var label = ctx.chart.data.labels[ctx.dataIndex];
                return label;
              }
            }
          }
        };
        this.pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartColors = [{
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
        }]; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Polar Area Chart
        //https://valor-software.com/ng2-charts/#PolarAreaChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea'; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Bubble Chart
        // https://valor-software.com/ng2-charts/#BubbleChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.bubbleChartOptions = {
          responsive: true,
          scales: {
            xAxes: [{
              ticks: {
                min: 0,
                max: 30
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 30
              }
            }]
          }
        };
        this.bubbleChartType = 'bubble';
        this.bubbleChartLegend = true;
        this.bubbleChartData = [{
          data: [{
            x: 10,
            y: 10,
            r: 10
          }, {
            x: 15,
            y: 5,
            r: 15
          }, {
            x: 26,
            y: 12,
            r: 23
          }, {
            x: 7,
            y: 8,
            r: 8
          }],
          label: 'Series A',
          backgroundColor: 'green',
          borderColor: 'blue',
          hoverBackgroundColor: 'purple',
          hoverBorderColor: 'red'
        }];
        this.bubbleChartColors = [{
          backgroundColor: ['red', 'green', 'blue', 'purple', 'yellow', 'brown', 'magenta', 'cyan', 'orange', 'pink']
        }]; //localStorage.removeItem("produits_commandes");
        // localStorage.removeItem("compteur");

        if (localStorage.getItem("produits_commandes") != null) {
          this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
      } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //Line chart
      //https://valor-software.com/ng2-charts/#LineChart
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /* public lineChartData: Array<any> = [
         { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
         { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
         { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
       ];
       public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
       public lineChartOptions: any = {
         responsive: true
       };
       public lineChartColors: Array<any> = [
         { // grey
           backgroundColor: 'rgba(148,159,177,0.2)',
           borderColor: 'rgba(148,159,177,1)',
           pointBackgroundColor: 'rgba(148,159,177,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(148,159,177,0.8)'
         },
         { // dark grey
           backgroundColor: 'rgba(77,83,96,0.2)',
           borderColor: 'rgba(77,83,96,1)',
           pointBackgroundColor: 'rgba(77,83,96,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(77,83,96,1)'
         },
         { // grey
           backgroundColor: 'rgba(148,159,177,0.2)',
           borderColor: 'rgba(148,159,177,1)',
           pointBackgroundColor: 'rgba(148,159,177,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(148,159,177,0.8)'
         }
       ];
       public lineChartLegend: boolean = true;
       public lineChartType: string = 'line';
      
       public randomize(): void {
         let _lineChartData: Array<any> = new Array(this.lineChartData.length);
         for (let i = 0; i < this.lineChartData.length; i++) {
           _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
           for (let j = 0; j < this.lineChartData[i].data.length; j++) {
             _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
           }
         }
         this.lineChartData = _lineChartData;
         const data = [
           Math.round(Math.random() * 100),
      
           (Math.random() * 100),
           56,
           (Math.random() * 100),
           40];
         this.barChartData[0].data = data;
       }
      */
      // events


      _createClass(ChartsPage, [{
        key: "chartClicked",
        value: function chartClicked(e) {
          console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {
          console.log(e);
        } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //doughnut Chart
        // https://valor-software.com/ng2-charts/#DoughnutChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "numberSiteStockDisponible",
        value: function numberSiteStockDisponible() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/statistique/numberSiteStockDisponible");
        }
      }, {
        key: "getnumberSiteStockDisponible",
        value: function getnumberSiteStockDisponible() {
          var _this = this;

          var i;
          this.numberSiteStockDisponible().subscribe(function (data) {
            _this.compteurSiteStockDisponible = data;

            _this.getnumberSiteStockNonDisponible(data);
          });
        }
      }, {
        key: "numberSiteStockNonDisponible",
        value: function numberSiteStockNonDisponible() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/statistique/numberSiteStockNonDisponible");
        }
      }, {
        key: "getnumberSiteStockNonDisponible",
        value: function getnumberSiteStockNonDisponible(stockdispo) {
          var _this2 = this;

          var i;
          this.numberSiteStockNonDisponible().subscribe(function (data) {
            _this2.compteurSiteStockNonDisponible = data;
            _this2.doughnutChartData = [[data, stockdispo]];
          });
        }
      }, {
        key: "chartClickedDonut",
        value: function chartClickedDonut(_ref) {
          var event = _ref.event,
              active = _ref.active;
          console.log(event, active);
        }
      }, {
        key: "chartHoveredDonut",
        value: function chartHoveredDonut(_ref2) {
          var event = _ref2.event,
              active = _ref2.active;
          console.log(event, active);
        } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Radar Chart
        // https://valor-software.com/ng2-charts/#RadarChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "listCategory",
        value: function listCategory() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/category/categorys");
        }
      }, {
        key: "getallCategory",
        value: function getallCategory() {
          var _this3 = this;

          var cat, i, j;
          this.listCategory().subscribe(function (data) {
            var info = data;

            if (info.length > 0) {
              for (i = 0; i < info.length; i++) {
                _this3.category_list.push(info[i]['name']);

                _this3.getproductsByCat(info[i]['id']);
              }
            }
          });
        }
      }, {
        key: "listProduct",
        value: function listProduct() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/product/products");
        }
      }, {
        key: "getproductsByCat",
        value: function getproductsByCat(idcat) {
          var _this4 = this;

          var prod, i, j;
          this.listProduct().subscribe(function (data) {
            var info = data;
            var compactive = 0;
            var compnonactive = 0;

            if (info.length > 0) {
              for (i = 0; i < info.length; i++) {
                if (info[i]['categoryId'] == idcat) {
                  if (info[i]['active']) {
                    compactive = compactive + 1;
                  } else {
                    compnonactive = compnonactive + 1;
                  }
                }
              }

              _this4.product_active_list.push(compactive + '');

              _this4.product_nonactive_list.push(compnonactive + '');
            }
          }); //   if(this.img_list.length>0) {
          //  }
          // }

          /* else {
           // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
           }*/
        }
      }, {
        key: "numberProductSolde",
        value: function numberProductSolde() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/statistique/numberProductPromo");
        }
      }, {
        key: "getnumberProductSolde",
        value: function getnumberProductSolde() {
          var _this5 = this;

          var prod, i, j;
          this.listProduct().subscribe(function (data) {
            var i;

            _this5.numberProductSolde().subscribe(function (data) {
              _this5.compteurProductSolde = data;
            });
          });
        }
      }, {
        key: "numberProductNonSolde",
        value: function numberProductNonSolde() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/statistique/numberProductNomPromo");
        }
      }, {
        key: "getnumberProductNonSolde",
        value: function getnumberProductNonSolde() {
          var _this6 = this;

          var prod, i, j;
          this.listProduct().subscribe(function (data) {
            var i;

            _this6.numberProductNonSolde().subscribe(function (data) {
              _this6.compteurProductNonSolde = data;
            });
          });
        }
      }, {
        key: "changeLabels",
        value: function changeLabels() {
          var words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film', 'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy', 'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef', 'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language', 'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];

          var randomWord = function randomWord() {
            return words[Math.trunc(Math.random() * words.length)];
          };

          this.pieChartLabels = Array.apply(null, {
            length: 3
          }).map(function (_) {
            return randomWord();
          });
        }
      }, {
        key: "addSlice",
        value: function addSlice() {
          this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
          this.pieChartData.push(400);
          this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
        }
      }, {
        key: "removeSlice",
        value: function removeSlice() {
          this.pieChartLabels.pop();
          this.pieChartData.pop();
          this.pieChartColors[0].backgroundColor.pop();
        }
      }, {
        key: "changeLegendPosition",
        value: function changeLegendPosition() {
          this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
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
        key: "ngOnInit",
        value: function ngOnInit() {
          this.badgecount = 0;
          this.getnumberSiteStockDisponible();
          this.getnumberProductSolde();
          this.getallCategory();
          console.log('vvvvv  ' + this.compteurSiteStockDisponible);
          console.log('vvvvv  ' + this.compteurSiteStockNonDisponible);
        }
      }, {
        key: "addtocart",
        value: function addtocart(idprod) {
          // console.log('mycart2  '+ JSON.parse(localStorage.getItem("produits_commandes")));
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }]);

      return ChartsPage;
    }();

    ChartsPage.ctorParameters = function () {
      return [{
        type: _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_2__["Badge"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    ChartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-charts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./charts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./charts.page.scss */
      "./src/app/pages/charts/charts.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_2__["Badge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], ChartsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-charts-charts-module-es5.js.map