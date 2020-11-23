(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["question-third-question-third-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-third/home/home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-third/home/home.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr class=\"custom-hr\">\n<form (ngSubmit)=\"onsubmit()\">\n    <div class=\"container\">\n        <div class=\"row\" *ngFor=\"let item of multiContact; index as i\">\n            <div class=\"col-md-12 form-group\">\n                <div class=\"col-md-6\">\n                    <label>Primary Mobile No.</label>\n                    <input type=\"text\" max=\"12\" class=\"form-control\" name=\"prinum{{i}}\" placeholder=\"Enter Primary Nuber\" [(ngModel)]=\"item.phone\">\n                </div>\n                <div class=\"col-md-2 pull-left\" style=\"margin-top: 1.8%;\" *ngIf=\"i!=0\">\n                    <label for=\"\"></label>\n                    <button class=\"btn btn-danger\" (click)=\"deleteContact(i)\"> delete </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 form-group\">\n                <div class=\"col-md-6\">\n                    <span class=\"btn btn-success pull-left\" (click)=\"addAnotherPhoneNum()\"> + Add Another Phone Number</span>\n                </div>\n                <div class=\"col-md-2\">\n                    <button class=\"btn btn-primary pull-left\">Submit</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</form>");

/***/ }),

/***/ "./src/app/question-third/home/home.component.css":
/*!********************************************************!*\
  !*** ./src/app/question-third/home/home.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLXRoaXJkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/question-third/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/question-third/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _third_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../third.service */ "./src/app/question-third/third.service.ts");



let HomeComponent = class HomeComponent {
    constructor(_local) {
        this._local = _local;
        this.multiContact = [];
        ////////// add number//////////
        this.addAnotherPhoneNum = () => {
            this.multiContact.push({});
        };
        ////////// delete number//////////
        this.deleteContact = (index) => {
            this.multiContact.splice(index, 1);
        };
        //////submit/////////////////////
        this._key = 0;
        this.onsubmit = () => {
            this.multiContact.forEach((val, ind) => {
                for (let x in val) {
                    this._key++;
                    val['phone' + this._key] = val['phone'];
                    delete val['phone'];
                }
            });
            console.log(this.multiContact);
        };
    }
    ngOnInit() {
        this.multiContact.push({});
    }
};
HomeComponent.ctorParameters = () => [
    { type: _third_service__WEBPACK_IMPORTED_MODULE_2__["ThirdService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-third/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/question-third/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/question-third/question-third-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/question-third/question-third-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: QuestionThirdRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionThirdRoutingModule", function() { return QuestionThirdRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/question-third/routes.ts");




let QuestionThirdRoutingModule = class QuestionThirdRoutingModule {
};
QuestionThirdRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_3__["_routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuestionThirdRoutingModule);



/***/ }),

/***/ "./src/app/question-third/question-third.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/question-third/question-third.module.ts ***!
  \*********************************************************/
/*! exports provided: QuestionThirdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionThirdModule", function() { return QuestionThirdModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-third/home/home.component.ts");
/* harmony import */ var _question_third_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-third-routing.module */ "./src/app/question-third/question-third-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let QuestionThirdModule = class QuestionThirdModule {
};
QuestionThirdModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [
            _question_third_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionThirdRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]
    })
], QuestionThirdModule);



/***/ }),

/***/ "./src/app/question-third/routes.ts":
/*!******************************************!*\
  !*** ./src/app/question-third/routes.ts ***!
  \******************************************/
/*! exports provided: _routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_routes", function() { return _routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-third/home/home.component.ts");


const _routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { state: "module" } },
];


/***/ }),

/***/ "./src/app/question-third/third.service.ts":
/*!*************************************************!*\
  !*** ./src/app/question-third/third.service.ts ***!
  \*************************************************/
/*! exports provided: ThirdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdService", function() { return ThirdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThirdService = class ThirdService {
    constructor() { }
};
ThirdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ThirdService);



/***/ })

}]);
//# sourceMappingURL=question-third-question-third-module-es2015.js.map