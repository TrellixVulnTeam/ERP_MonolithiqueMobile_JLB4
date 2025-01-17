function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Products-product-list-product-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-list/product-list.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-list/product-list.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductListProductListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">{{this.nomcateg}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--<div class=\"main_content_div\" *ngFor=\"let item of product_list\">\r\n\r\n    <div class=\"card_div\">\r\n      <div class=\"back_image\"></div>\r\n      <div class=\"second_div\">\r\n        <ion-label class=\"name_lbl\">{{item.geturlimg()}}</ion-label>\r\n        <ion-label class=\"price_lbl\">{{item.getdescription()}}</ion-label>\r\n        <ion-button style=\"width: 200px\" size=\"large\" fill=\"outline\" shape=\"round\" (click)=\"goListProduct(item.getid(),item.getname())\">\r\n          Voir les produits\r\n        </ion-button>\r\n\r\n        <ion-icon name=\"heart-outline\">Brand</ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\r\n  <div class=\"main_content_div\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"5.8\" *ngFor=\"let item of product_list\">\r\n          <div class=\"back_image\">\r\n              <img [src]=\"showImage(item.geturlimg())\" />\r\n             <!-- -- <img [src]='item.getimageUrl()' width=\"100%\" height=\"100%\" alt=\"Image\" />\r\n            div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\">\r\n              <ion-icon name=\"heart-outline\"></ion-icon>-->\r\n          </div>\r\n          <ion-label class=\"name\" (click)=\"gotodetail(item.getid())\"> {{item.getname()}}</ion-label>\r\n          <ion-label class=\"prize\">{{item.getsellingPrice()}}.00</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/modals/Product.ts":
  /*!***********************************!*\
    !*** ./src/app/modals/Product.ts ***!
    \***********************************/

  /*! exports provided: Product */

  /***/
  function srcAppModalsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Created by Asus on 02/06/2022.
     */


    var Product = /*#__PURE__*/function () {
      function Product() {
        _classCallCheck(this, Product);
      }

      _createClass(Product, [{
        key: "geturlimg",
        value: function geturlimg() {
          return this._urlimg;
        }
      }, {
        key: "seturlimg",
        value: function seturlimg(value) {
          this._urlimg = value;
        }
      }, {
        key: "getimageUrl",
        value: function getimageUrl() {
          return this._imageUrl;
        }
      }, {
        key: "setimageUrl",
        value: function setimageUrl(value) {
          this._imageUrl = value;
        }
      }, {
        key: "getid",
        value: function getid() {
          return this._id;
        }
      }, {
        key: "getname",
        value: function getname() {
          return this._name;
        }
      }, {
        key: "getdescription",
        value: function getdescription() {
          return this._description;
        }
      }, {
        key: "getsellingPrice",
        value: function getsellingPrice() {
          return this._sellingPrice;
        }
      }, {
        key: "getbuyingPrice",
        value: function getbuyingPrice() {
          return this._buyingPrice;
        }
      }, {
        key: "getstate",
        value: function getstate() {
          return this._state;
        }
      }, {
        key: "getactive",
        value: function getactive() {
          return this._active;
        }
      }, {
        key: "getimagesIds",
        value: function getimagesIds() {
          return this._imagesIds;
        }
      }, {
        key: "getcategoryId",
        value: function getcategoryId() {
          return this._categoryId;
        }
      }, {
        key: "getsiteStockId",
        value: function getsiteStockId() {
          return this._siteStockId;
        }
      }, {
        key: "setid",
        value: function setid(value) {
          this._id = value;
        }
      }, {
        key: "setname",
        value: function setname(value) {
          this._name = value;
        }
      }, {
        key: "setdescription",
        value: function setdescription(value) {
          this._description = value;
        }
      }, {
        key: "setsellingPrice",
        value: function setsellingPrice(value) {
          this._sellingPrice = value;
        }
      }, {
        key: "setbuyingPrice",
        value: function setbuyingPrice(value) {
          this._buyingPrice = value;
        }
      }, {
        key: "setstate",
        value: function setstate(value) {
          this._state = value;
        }
      }, {
        key: "setactive",
        value: function setactive(value) {
          this._active = value;
        }
      }, {
        key: "setimagesIds",
        value: function setimagesIds(value) {
          this._imagesIds = value;
        }
      }, {
        key: "setcategoryId",
        value: function setcategoryId(value) {
          this._categoryId = value;
        }
      }, {
        key: "setsiteStockId",
        value: function setsiteStockId(value) {
          this._siteStockId = value;
        }
      }]);

      return Product;
    }();
    /***/

  },

  /***/
  "./src/app/pages/Products/product-list/product-list-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductListPageRoutingModule */

  /***/
  function srcAppPagesProductsProductListProductListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function () {
      return ProductListPageRoutingModule;
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


    var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/pages/Products/product-list/product-list.page.ts");

    var routes = [{
      path: '',
      component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }];

    var ProductListPageRoutingModule = function ProductListPageRoutingModule() {
      _classCallCheck(this, ProductListPageRoutingModule);
    };

    ProductListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/Products/product-list/product-list.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list.module.ts ***!
    \********************************************************************/

  /*! exports provided: ProductListPageModule */

  /***/
  function srcAppPagesProductsProductListProductListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function () {
      return ProductListPageModule;
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


    var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-list-routing.module */
    "./src/app/pages/Products/product-list/product-list-routing.module.ts");
    /* harmony import */


    var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/pages/Products/product-list/product-list.page.ts");

    var ProductListPageModule = function ProductListPageModule() {
      _classCallCheck(this, ProductListPageModule);
    };

    ProductListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListPageRoutingModule"]],
      declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })], ProductListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/Products/product-list/product-list.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductListProductListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-row {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div ion-row ion-col {\n  border: 1px solid lightgray;\n  padding: 0px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n}\n.main_content_div ion-row ion-col .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.main_content_div ion-row ion-col .back_image ion-icon {\n  position: absolute;\n  right: 5px;\n  padding: 5px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  top: 5px;\n  font-size: 16px;\n  color: #29b507;\n}\n.main_content_div ion-row ion-col ion-label {\n  display: block;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.main_content_div ion-row ion-col .name {\n  font-size: 14px;\n}\n.main_content_div ion-row ion-col .prize {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1saXN0L0M6XFxVc2Vyc1xcQVNVU1xcRG93bmxvYWRzXFxBcHBfY29kZVxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxQcm9kdWN0c1xccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9Qcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDQ047QURDTTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQVI7QURFUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBVjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0FDRFI7QURHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE9BLDZCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICBpb24tcm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjEpO1xyXG5cclxuICAgICAgLmJhY2tfaW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzI5YjUwNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAucHJpemV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXHJcbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLmJhY2tfaW1hZ2UgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5YjUwNztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5wcml6ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogMnB4O1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */";
=======
<<<<<<< HEAD:node_modules/.cache/angular-build-dl/content-v2/sha512/ba/a5/48ebc9e29bd069753a079e7323bfde51a63c1d3608a7ccbf70ddf46dbc8cc6d8f57baf0a5e135d2d368d36b48dc48f840720d3fb3472e87ec70dac8d77d7
    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-row {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div ion-row ion-col {\n  border: 1px solid lightgray;\n  padding: 0px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n}\n.main_content_div ion-row ion-col .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.main_content_div ion-row ion-col .back_image ion-icon {\n  position: absolute;\n  right: 5px;\n  padding: 5px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  top: 5px;\n  font-size: 16px;\n  color: #29b507;\n}\n.main_content_div ion-row ion-col ion-label {\n  display: block;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.main_content_div ion-row ion-col .name {\n  font-size: 14px;\n}\n.main_content_div ion-row ion-col .prize {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1saXN0L0M6XFxVc2Vyc1xcQVNVU1xcRG93bmxvYWRzXFxBcHBfY29kZVxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxQcm9kdWN0c1xccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9Qcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDQ047QURDTTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQVI7QURFUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBVjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0FDRFI7QURHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE9BLDZCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICBpb24tcm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjEpO1xyXG5cclxuICAgICAgLmJhY2tfaW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzI5YjUwNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAucHJpemV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXHJcbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLmJhY2tfaW1hZ2UgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5YjUwNztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5wcml6ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogMnB4O1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */";
=======
    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-row {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div ion-row ion-col {\n  border: 1px solid lightgray;\n  padding: 0px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n}\n.main_content_div ion-row ion-col .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.main_content_div ion-row ion-col .back_image ion-icon {\n  position: absolute;\n  right: 5px;\n  padding: 5px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  top: 5px;\n  font-size: 16px;\n  color: #29b507;\n}\n.main_content_div ion-row ion-col ion-label {\n  display: block;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.main_content_div ion-row ion-col .name {\n  font-size: 14px;\n}\n.main_content_div ion-row ion-col .prize {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1saXN0L0M6XFxrYWlzIGlvbmljIHByb2plY3RcXEVSUF9Nb25vbGl0aGlxdWVNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxQcm9kdWN0c1xccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9Qcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDQ047QURDTTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQVI7QURFUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBVjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0FDRFI7QURHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE9BLDZCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICBpb24tcm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjEpO1xyXG5cclxuICAgICAgLmJhY2tfaW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzI5YjUwNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAucHJpemV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXHJcbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLmJhY2tfaW1hZ2UgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5YjUwNztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIC5wcml6ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogMnB4O1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */";
>>>>>>> a6225635db8510973aa5a1ec3d921a5694092dff:platforms/browser/www/pages-Products-product-list-product-list-module-es5.js
>>>>>>> a6225635db8510973aa5a1ec3d921a5694092dff
    /***/
  },

  /***/
  "./src/app/pages/Products/product-list/product-list.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list.page.ts ***!
    \******************************************************************/

  /*! exports provided: ProductListPage */

  /***/
  function srcAppPagesProductsProductListProductListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPage", function () {
      return ProductListPage;
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


    var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/products/products.service */
    "./src/app/services/products/products.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/rest/rest-apis.service */
    "./src/app/services/rest/rest-apis.service.ts");
    /* harmony import */


    var _modals_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../modals/Product */
    "./src/app/modals/Product.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/rest/environnement.model */
    "./src/app/services/rest/environnement.model.ts");

    var ProductListPage = /*#__PURE__*/function () {
      function ProductListPage(sanitizer, products, navCtrl, api, loadingCtrl, router, http, route) {
        var _this = this;

        _classCallCheck(this, ProductListPage);

        this.sanitizer = sanitizer;
        this.products = products;
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.http = http;
        this.route = route;
        this.imagesIds = '';
        this.produits_commandes_list = [];
        this.product_list = [];
        this.img_list = [];
        this.allProducts = this.products.products;
        this.route.queryParams.subscribe(function (params) {
          _this.idcateg = params["idcateg"];
          _this.nomcateg = params["nomcateg"];
        });

        if (localStorage.getItem("produits_commandes") != null) {
          this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }

        this.charge_compteur();
        this.getallimages();
        this.getallproducts();
      }

      _createClass(ProductListPage, [{
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
        value: function ngOnInit() {}
      }, {
        key: "gotodetail",
        value: function gotodetail(id) {
          var i;

          for (i = 0; i < this.product_list.length; i++) {
            if (this.product_list[i].getid() == id) {
              var navigationExtras = {
                queryParams: {
                  id: this.product_list[i].getid(),
                  name: this.product_list[i].getname(),
                  description: this.product_list[i].getdescription(),
                  sellingPrice: this.product_list[i].getsellingPrice(),
                  buyingPrice: this.product_list[i].getbuyingPrice(),
                  state: this.product_list[i].getstate(),
                  active: this.product_list[i].getactive(),
                  imagesIds: this.product_list[i].getimagesIds(),
                  imageUrl: this.product_list[i].getimageUrl(),
                  categoryId: this.product_list[i].getcategoryId(),
                  siteStockId: this.product_list[i].getsiteStockId(),
                  urlimg: this.product_list[i].geturlimg()
                }
              };
              this.navCtrl.navigateForward(['product-detail'], navigationExtras);
            }
          } //this.navCtrl.navigateRoot(['example2']);

        }
      }, {
        key: "addtocart",
        value: function addtocart() {
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }, {
        key: "showImage",
        value: function showImage(data) {
          //console.log('data  '+data);
          var sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
          return sanitizedContent;
        }
      }, {
        key: "simpleLoader",
        value: function simpleLoader(message) {
          this.loadingCtrl.create({
            message: 'Chargement',
            duration: 9000
          }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
              console.log('Loading dismissed! after 2 Seconds', dis);
            });
          });
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          this.loadingCtrl.dismiss().then(function (response) {
            console.log('Loader closed!', response);
          }).catch(function (err) {
            console.log('Error occured : ', err.message);
          });
        }
      }, {
        key: "listImage",
        value: function listImage() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_9__["environmentApi"].host + "/api/image/images");
        }
      }, {
        key: "getallimages",
        value: function getallimages() {
          var _this2 = this;

          var img, i;
          this.simpleLoader('Chargement ..');
          this.listImage().subscribe(function (data) {
            //console.log(data);
            _this2.img_list = data;

            if (data.length > 0) {
              _this2.img_list = data;
            }

            _this2.mergelists(_this2.product_list, data);
          }); // this.dismissLoader();
        }
      }, {
        key: "listProduct",
        value: function listProduct() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_9__["environmentApi"].host + "/api/product/products");
        }
      }, {
        key: "getallproducts",
        value: function getallproducts() {
          var _this3 = this;

          var prod, i, j;
          this.listProduct().subscribe(function (data) {
            var info = data; //alert(info[0]['id']);
            // alert(info.length);
            //  this.product_list=data;
            //const info = JSON.parse(data.data);

            if (info.length > 0) {
              for (i = 0; i < info.length; i++) {
                if (info[i]['categoryId'] == _this3.idcateg) {
                  prod = new _modals_Product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
                  prod.setid(info[i]['id']);
                  prod.setname(info[i]['name']);
                  prod.setdescription(info[i]['description']);
                  prod.setsellingPrice(info[i]['sellingPrice']);
                  prod.setbuyingPrice(info[i]['buyingPrice']);
                  prod.setstate(info[i]['state']);
                  prod.setactive(info[i]['active']);
                  prod.setimagesIds(info[i]['imagesIds']);
                  _this3.imagesIds = info[i]['imagesIds'];
                  prod.setcategoryId(info[i]['categoryId']);
                  prod.setsiteStockId(info[i]['siteStockId']);

                  _this3.product_list.push(prod);
                }
              }
            }
          }); //   if(this.img_list.length>0) {
          //  }
          // }

          /* else {
           // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
           }*/
        }
      }, {
        key: "mergelists",
        value: function mergelists(productlist, imagelist) {
          //console.log('getallimages', imagelist);
          var i, j;

          if (imagelist.length >= productlist.length) {
            for (j = 0; j < imagelist.length; j++) {
              for (i = 0; i < productlist.length; i++) {
                if (imagelist[j].id == productlist[i].getimagesIds()) {
                  productlist[i].seturlimg(imagelist[j].data);
                }
              }
            }
          }

          if (imagelist.length <= productlist.length) {
            for (i = 0; i < productlist.length; i++) {
              for (j = 0; j < imagelist.length; j++) {
                if (imagelist[j].id == productlist[i].getimagesIds()) {
                  productlist[i].seturlimg(imagelist[j].data);
                }
              }
            }
          }
        }
      }]);

      return ProductListPage;
    }();

    ProductListPage.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }];
    };

    ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-list/product-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.page.scss */
      "./src/app/pages/Products/product-list/product-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], ProductListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-Products-product-list-product-list-module-es5.js.map