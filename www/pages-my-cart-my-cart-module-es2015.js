(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-cart-my-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-cart/my-cart.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-cart/my-cart.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <!--- <ion-back-button mode=\"md\"></ion-back-button>-->\r\n\r\n      <ion-menu-button></ion-menu-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"ion-button custom-class\" (click)=\"addtocart()\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Mon panier</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"shopping-cart\">\r\n    <!--  Title  -->\r\n\r\n    <!--   Product #1 -->\r\n\r\n    <!--   Product #2 -->\r\n    <div *ngIf=\" produits_commandes_list.length >0\">\r\n      <div class=\"item\" *ngFor=\"let item of produits_commandes_list\">\r\n        <div class=\"buttons\" *ngIf=\" item['_idProd']\">\r\n          <span class=\"delete-btn\" (click)=\"delete(item['_idProd'])\"></span>\r\n          <!-- <span class=\"like-btn\"></span>-->\r\n        </div>\r\n\r\n        <div class=\"image\">\r\n          <img [src]=\"showImage(item['_urlimgProd'])\"  alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"description\">\r\n          <span>{{item['_nameProd']}}</span>\r\n          <span>{{item['_descriptionProd']}}</span>\r\n          <!-- <span>{{item['_buyingPriceProd']}}.00</span>-->\r\n        </div>\r\n\r\n        <div class=\"quantity\"  *ngIf=\" item['_idProd']\">\r\n          <!-- <button class=\"plus-btn\" type=\"button\" name=\"button\">\r\n             <img src=\"https://designmodo.com/demo/shopping-cart/plus.svg\" alt=\"\" />\r\n           </button>-->\r\n\r\n          <div class=\"last_div\">\r\n            <ion-button (click)=\"plus(item['_idProd'])\" size=\"small\" fill=\"clear\">\r\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n            </ion-button>\r\n\r\n            <!--  <ion-label><span>{{value}}</span></ion-label> -->\r\n\r\n            <div class=\"text_div\">\r\n              <div class=\"lbl_div\">{{item['_compteur']}}</div>\r\n            </div>\r\n\r\n            <ion-button (click)=\"minus(item['_idProd'])\" size=\"small\" fill=\"clear\">\r\n              <ion-icon slot=\"icon-only\" name=\"remove-outline\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n          <!-- <input type=\"text\" name=\"name\" value=\"{{item['_compteur']}}\" />\r\n           <button class=\"minus-btn\" type=\"button\" name=\"button\">\r\n             <img src=\"https://designmodo.com/demo/shopping-cart/minus.svg\" alt=\"\" />\r\n           </button>-->\r\n        </div>\r\n\r\n        <div class=\"total-price\">{{item['_buyingPriceProd']}}.00</div>\r\n        <br>\r\n        <ion-button expand=\"block\">\r\n          <span class=\"title\" style=\"color:white\" (click)=\"gotocaisse(item['_categoryIdProd'],item['_nameProd'],item['_compteur'])\"> Procéder à la caisse</span>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <script>\r\n      $('.like-btn').on('click', function() {\r\n          $(this).toggleClass('is-active');\r\n      });\r\n\r\n      $('.minus-btn').on('click', function(e) {\r\n          e.preventDefault();\r\n          var $this = $(this);\r\n          var $input = $this.closest('div').find('input');\r\n          var value = parseInt($input.val());\r\n\r\n          if (value &gt; 1) {\r\n              value = value - 1;\r\n          } else {\r\n              value = 0;\r\n          }\r\n\r\n          $input.val(value);\r\n\r\n      });\r\n\r\n      $('.plus-btn').on('click', function(e) {\r\n          e.preventDefault();\r\n          var $this = $(this);\r\n          var $input = $this.closest('div').find('input');\r\n          var value = parseInt($input.val());\r\n\r\n          if (value < 100) {\r\n              value = value + 1;\r\n          } else {\r\n              value =100;\r\n          }\r\n\r\n          $input.val(value);\r\n      });\r\n  </script>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/my-cart/my-cart-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-cart/my-cart-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyCartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartPageRoutingModule", function() { return MyCartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-cart.page */ "./src/app/pages/my-cart/my-cart.page.ts");




const routes = [
    {
        path: '',
        component: _my_cart_page__WEBPACK_IMPORTED_MODULE_3__["MyCartPage"]
    }
];
let MyCartPageRoutingModule = class MyCartPageRoutingModule {
};
MyCartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyCartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-cart/my-cart.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my-cart/my-cart.module.ts ***!
  \*************************************************/
/*! exports provided: MyCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartPageModule", function() { return MyCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-cart-routing.module */ "./src/app/pages/my-cart/my-cart-routing.module.ts");
/* harmony import */ var _my_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-cart.page */ "./src/app/pages/my-cart/my-cart.page.ts");







let MyCartPageModule = class MyCartPageModule {
};
MyCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCartPageRoutingModule"]
        ],
        declarations: [_my_cart_page__WEBPACK_IMPORTED_MODULE_6__["MyCartPage"]]
    })
], MyCartPageModule);



/***/ }),

/***/ "./src/app/pages/my-cart/my-cart.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/my-cart/my-cart.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n\n.shopping-cart {\n  width: 750px;\n  height: 423px;\n  background: white;\n  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.title {\n  height: 60px;\n  border-bottom: 1px solid #e1e8ee;\n  padding: 20px 30px;\n  color: #5e6977;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.item {\n  padding: 20px 30px;\n  height: 120px;\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid gray;\n}\n\n.item:nth-child(3) {\n  border-top: 1px solid #e1e8ee;\n  border-bottom: 1px solid #e1e8ee;\n}\n\n.buttons {\n  position: relative;\n  padding-top: 30px;\n  margin-right: 60px;\n}\n\n.delete-btn,\n.like-btn {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.delete-btn {\n  width: 18px;\n  height: 17px;\n  background: url(\"https://designmodo.com/demo/shopping-cart/delete-icn.svg\") no-repeat center;\n}\n\n.like-btn {\n  position: absolute;\n  top: 9px;\n  left: 15px;\n  background: url(\"https://designmodo.com/demo/shopping-cart/twitter-heart.png\");\n  width: 60px;\n  height: 60px;\n  background-size: 2900%;\n  background-repeat: no-repeat;\n}\n\n.is-active {\n  -webkit-animation-name: animate;\n          animation-name: animate;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: steps(28);\n          animation-timing-function: steps(28);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    background-position: left;\n  }\n  50% {\n    background-position: right;\n  }\n  100% {\n    background-position: right;\n  }\n}\n\n@keyframes animate {\n  0% {\n    background-position: left;\n  }\n  50% {\n    background-position: right;\n  }\n  100% {\n    background-position: right;\n  }\n}\n\n.image {\n  margin-right: 50px;\n}\n\n.description {\n  padding-top: 10px;\n  margin-right: 60px;\n  width: 115px;\n}\n\n.description span {\n  display: block;\n  font-size: 14px;\n  color: #43484D;\n  font-weight: 400;\n}\n\n.description span:first-child {\n  margin-bottom: 5px;\n}\n\n.description span:last-child {\n  font-weight: 300;\n  margin-top: 8px;\n  color: #86939E;\n}\n\n.quantity {\n  padding-top: 20px;\n  margin-right: 60px;\n}\n\n.quantity input {\n  -webkit-appearance: none;\n  border: none;\n  text-align: center;\n  width: 32px;\n  font-size: 16px;\n  color: #43484D;\n  font-weight: 300;\n}\n\nbutton[class*=btn] {\n  width: 30px;\n  height: 30px;\n  background-color: #E1E8EE;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n}\n\n.minus-btn img {\n  margin-bottom: 3px;\n}\n\n.plus-btn img {\n  margin-top: 2px;\n}\n\nbutton:focus,\ninput:focus {\n  outline: 0;\n}\n\n.total-price {\n  width: 83px;\n  padding-top: 27px;\n  text-align: center;\n  font-size: 16px;\n  color: #43484D;\n  font-weight: 300;\n}\n\n@media (max-width: 800px) {\n  .shopping-cart {\n    width: 100%;\n    height: auto;\n    overflow: hidden;\n  }\n\n  .item {\n    height: auto;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  .image img {\n    width: 50%;\n  }\n\n  .image,\n.quantity,\n.description {\n    width: 100%;\n    text-align: center;\n    margin: 6px 0;\n  }\n\n  .buttons {\n    margin-right: 20px;\n  }\n}\n\n.last_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.last_div ion-button {\n  margin: 0;\n  color: gray;\n}\n\n.last_div .text_div {\n  text-align: center;\n}\n\n.last_div .text_div .lbl_div {\n  background: #73D25C;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktY2FydC9EOlxcRURTXFxJb25pYyBFUlBcXEVSUF9Nb25vbGl0aGlxdWVNb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFxteS1jYXJ0XFxteS1jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXktY2FydC9teS1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBLDZCQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNBRjs7QURhQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBR0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDYkY7O0FEZUE7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaRjs7QURjQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDWEY7O0FEYUE7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0FDVkY7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURXQTs7RUFFRSxxQkFBQTtFQUNBLGVBQUE7QUNSRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEZBQUE7QUNQRjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw4RUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ05GOztBRFNBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNORjs7QURTQTtFQUNFO0lBQU8seUJBQUE7RUNMUDtFRE1BO0lBQU8sMEJBQUE7RUNIUDtFRElBO0lBQU8sMEJBQUE7RUNEUDtBQUNGOztBREhBO0VBQ0U7SUFBTyx5QkFBQTtFQ0xQO0VETUE7SUFBTywwQkFBQTtFQ0hQO0VESUE7SUFBTywwQkFBQTtFQ0RQO0FBQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FERkE7O0VBRUUsVUFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNPRjs7RURMQTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtFQ1FGOztFRE5BO0lBQ0UsVUFBQTtFQ1NGOztFRFBBOzs7SUFHRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDVUY7O0VEUkE7SUFDRSxrQkFBQTtFQ1dGO0FBQ0Y7O0FEUkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDVUY7O0FEVEU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ1dKOztBRFJFO0VBQ0Usa0JBQUE7QUNVSjs7QURSSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1VOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktY2FydC9teS1jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogOHB0O1xyXG4gIHJpZ2h0OiAtNXB4O1xyXG4gIHRvcDogMnB4O1xyXG59XHJcblxyXG4uaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xyXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uc2hvcHBpbmctY2FydCB7XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIGhlaWdodDogNDIzcHg7XHJcbiAgLy9tYXJnaW46IDgwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAgMXB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlOGVlO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBjb2xvcjogIzVlNjk3NztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uaXRlbSB7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xyXG59XHJcbi5pdGVtOm50aC1jaGlsZCgzKSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWU4ZWU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWU4ZWU7XHJcbn1cclxuLmJ1dHRvbnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbn1cclxuLmRlbGV0ZS1idG4sXHJcbi5saWtlLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9kZXNpZ25tb2RvLmNvbS9kZW1vL3Nob3BwaW5nLWNhcnQvZGVsZXRlLWljbi5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG59XHJcbi5saWtlLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Rlc2lnbm1vZG8uY29tL2RlbW8vc2hvcHBpbmctY2FydC90d2l0dGVyLWhlYXJ0LnBuZycpO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI5MDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMjgpO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAgfVxyXG4gIDUwJSAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDsgfVxyXG59XHJcbi5pbWFnZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMTVweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzQzNDg0RDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbiBzcGFuOmxhc3QtY2hpbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbG9yOiAjODY5MzlFO1xyXG59XHJcbi5xdWFudGl0eSB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcbi5xdWFudGl0eSBpbnB1dCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNDM0ODREO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmJ1dHRvbltjbGFzcyo9YnRuXSB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUU4RUU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5taW51cy1idG4gaW1nIHtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuLnBsdXMtYnRuIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMsXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuLnRvdGFsLXByaWNlIHtcclxuICB3aWR0aDogODNweDtcclxuICBwYWRkaW5nLXRvcDogMjdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNDM0ODREO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnNob3BwaW5nLWNhcnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuaW1hZ2UsXHJcbiAgLnF1YW50aXR5LFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgfVxyXG4gIC5idXR0b25zIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5sYXN0X2RpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuXHJcbiAgLnRleHRfZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5sYmxfZGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNzNEMjVDO1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICByaWdodDogLTVweDtcbiAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uc2hvcHBpbmctY2FydCB7XG4gIHdpZHRoOiA3NTBweDtcbiAgaGVpZ2h0OiA0MjNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZThlZTtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBjb2xvcjogIzVlNjk3NztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5pdGVtOm50aC1jaGlsZCgzKSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlOGVlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZThlZTtcbn1cblxuLmJ1dHRvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbi5kZWxldGUtYnRuLFxuLmxpa2UtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMTdweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9kZXNpZ25tb2RvLmNvbS9kZW1vL3Nob3BwaW5nLWNhcnQvZGVsZXRlLWljbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuLmxpa2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9kZXNpZ25tb2RvLmNvbS9kZW1vL3Nob3BwaW5nLWNhcnQvdHdpdHRlci1oZWFydC5wbmdcIik7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjkwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5pcy1hY3RpdmUge1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygyOCk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB9XG59XG4uaW1hZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMTVweDtcbn1cblxuLmRlc2NyaXB0aW9uIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQzNDg0RDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmRlc2NyaXB0aW9uIHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kZXNjcmlwdGlvbiBzcGFuOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGNvbG9yOiAjODY5MzlFO1xufVxuXG4ucXVhbnRpdHkge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuXG4ucXVhbnRpdHkgaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzQzNDg0RDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuYnV0dG9uW2NsYXNzKj1idG5dIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRThFRTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1pbnVzLWJ0biBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5wbHVzLWJ0biBpbWcge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbmJ1dHRvbjpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgd2lkdGg6IDgzcHg7XG4gIHBhZGRpbmctdG9wOiAyN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM0MzQ4NEQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2hvcHBpbmctY2FydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuaXRlbSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5pbWFnZSBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuaW1hZ2UsXG4ucXVhbnRpdHksXG4uZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDZweCAwO1xuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuLmxhc3RfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ubGFzdF9kaXYgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubGFzdF9kaXYgLnRleHRfZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxhc3RfZGl2IC50ZXh0X2RpdiAubGJsX2RpdiB7XG4gIGJhY2tncm91bmQ6ICM3M0QyNUM7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/my-cart/my-cart.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/my-cart/my-cart.page.ts ***!
  \***********************************************/
/*! exports provided: MyCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartPage", function() { return MyCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let MyCartPage = class MyCartPage {
    constructor(navCtrl, route, sanitizer) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.sanitizer = sanitizer;
        this.badgecount = '0';
        this.produits_commandes_list = [];
        this.value = 0;
        this.c2 = 0;
        //this.badgecount=0;
        if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
    }
    showImage(data) {
        const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
        return sanitizedContent;
    }
    ngOnInit() {
        if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
        if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
        }
    }
    plus(idprod) {
        var i;
        if (this.produits_commandes_list.length > 0) {
            for (i = 0; i < this.produits_commandes_list.length; i++) {
                if (this.produits_commandes_list[i]['_idProd'] == idprod) {
                    this.value = parseInt(this.produits_commandes_list[i]['_compteur']) + 1;
                    this.produits_commandes_list[i]['_compteur'] = this.value + "";
                    localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
                }
            }
        }
    }
    minus(idprod) {
        var i;
        if (this.produits_commandes_list.length > 0) {
            for (i = 0; i < this.produits_commandes_list.length; i++) {
                if (this.produits_commandes_list[i]['_idProd'] == idprod) {
                    this.value = parseInt(this.produits_commandes_list[i]['_compteur']) - 1;
                    this.produits_commandes_list[i]['_compteur'] = this.value + "";
                    localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
                }
            }
        }
    }
    delete(idprod) {
        var i;
        if (this.produits_commandes_list.length > 0) {
            for (i = 0; i < this.produits_commandes_list.length; i++) {
                if (this.produits_commandes_list[i]['_idProd'] == idprod) {
                    delete this.produits_commandes_list[i];
                    localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
                    this.c2 = parseInt(this.badgecount) - 1;
                    localStorage.setItem("compteur", this.c2 + "");
                }
            }
        }
    }
    charge_compteur() {
        /* if (localStorage.getItem("compteur") != null) {
           this.badgecount=localStorage.getItem("compteur");
         }
         else{
           this.badgecount=0;
         }*/
        return this.badgecount;
    }
    addtocart() {
        this.navCtrl.navigateRoot(['my-cart']);
    }
    gotocaisse(idcat, nomprod, compteur) {
        let navigationExtras = {
            queryParams: {
                categoryId: idcat,
                quantity: compteur,
                nomprod: nomprod,
            }
        };
        this.navCtrl.navigateRoot(['send-request'], navigationExtras);
    }
};
MyCartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
MyCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-cart/my-cart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-cart.page.scss */ "./src/app/pages/my-cart/my-cart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], MyCartPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-cart-my-cart-module-es2015.js.map