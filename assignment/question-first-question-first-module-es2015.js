(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["question-first-question-first-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-first/home/home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-first/home/home.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr class=\"custom-hr\">\n<div class=\"container\">\n    <form #firstQues=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"col-md-12 form-group\">\n                <div class=\"col-md-4\">\n                    <table class=\"table\">\n                        <tr>\n                            <th colspan=\"2\">Next number is <b>82</b></th>\n                        </tr>\n                        <tr>\n                            <th>Index</th>\n                            <th>Number</th>\n                        </tr>\n                        <tr *ngFor=\"let item of arr; index as i\">\n                            <td>{{i}}</td>\n                            <td>{{item}}</td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"col-md-4\">\n                    <input type=\"text\" class=\"form-control\" autocomplete=\"off\" [(ngModel)]=\"_local.mainObj.number\" name=\"num\" placeholder=\"Enter Index\">\n                </div>\n                <div class=\"col-md-4 btn btn-primary btn-sm\" style=\"width: auto;\" (click)=\"getIndex()\">Get Number</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 style=\"text-align: center; color: red;\">{{_local.actualNum}}</h3>\n\n            </div>\n        </div>\n\n    </form>\n\n</div>\n");

/***/ }),

/***/ "./src/app/question-first/first.service.ts":
/*!*************************************************!*\
  !*** ./src/app/question-first/first.service.ts ***!
  \*************************************************/
/*! exports provided: FirstService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstService", function() { return FirstService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirstService = class FirstService {
    constructor() {
        this.mainObj = {
            number: null
        };
        this.actualNum = null;
    }
};
FirstService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirstService);



/***/ }),

/***/ "./src/app/question-first/home/home.component.css":
/*!********************************************************!*\
  !*** ./src/app/question-first/home/home.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZpcnN0L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/question-first/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/question-first/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _first_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../first.service */ "./src/app/question-first/first.service.ts");



let HomeComponent = class HomeComponent {
    constructor(_local) {
        this._local = _local;
        this.getIndex = () => {
            this.arr.forEach((value, index) => {
                this._value = value;
                this._index = index;
                if (this._index == this._local.mainObj.number) {
                    this._local.actualNum = this._value;
                }
                else if (this._index != this._local.mainObj.number) {
                    // console.log(` this._index = ${this._index} and this._local.mainObj.number ${this._local.mainObj.number}`)
                    // this._local.actualNum = "not a number";
                    return;
                }
            });
            console.log(this._local.actualNum);
        };
        this.arr = [2, 3, 10, 15, 26, 35, 50, 63];
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _first_service__WEBPACK_IMPORTED_MODULE_2__["FirstService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-first/home/home.component.html")).default,
        providers: [_first_service__WEBPACK_IMPORTED_MODULE_2__["FirstService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/question-first/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/question-first/question-first-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/question-first/question-first-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: QuestionFirstRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFirstRoutingModule", function() { return QuestionFirstRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/question-first/routes.ts");




let QuestionFirstRoutingModule = class QuestionFirstRoutingModule {
};
QuestionFirstRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_3__["_routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuestionFirstRoutingModule);



/***/ }),

/***/ "./src/app/question-first/question-first.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/question-first/question-first.module.ts ***!
  \*********************************************************/
/*! exports provided: QuestionFirstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFirstModule", function() { return QuestionFirstModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-first/home/home.component.ts");
/* harmony import */ var _question_first_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-first-routing.module */ "./src/app/question-first/question-first-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let QuestionFirstModule = class QuestionFirstModule {
};
QuestionFirstModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [
            _question_first_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionFirstRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]
    })
], QuestionFirstModule);



/***/ }),

/***/ "./src/app/question-first/routes.ts":
/*!******************************************!*\
  !*** ./src/app/question-first/routes.ts ***!
  \******************************************/
/*! exports provided: _routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_routes", function() { return _routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-first/home/home.component.ts");


const _routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { state: "module" } },
];


/***/ })

}]);
//# sourceMappingURL=question-first-question-first-module-es2015.js.map