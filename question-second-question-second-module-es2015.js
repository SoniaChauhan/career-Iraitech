(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["question-second-question-second-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/first/first.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/first/first.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h2>Component X</h2>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <div class=\"row\">\n                <div class=\"col-md-12 form-group\">\n                    <div class=\"col-md-6\">Component X Details</div>\n                    <div class=\"col-md-6\"><button class=\"btn btn-primary pull-right\" (click)=\"_local.addYcomponent(index)\" style=\"width: auto;\">(+) Add Y Component</button></div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"panel-body\">\n            <form #componentX=\"ngForm\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 form-group\">\n                        <div class=\"col-md-6\">\n                            <input type=\"text\" placeholder=\"Enter Your Name \" class=\"form-control\" autocomplete=\"off\" name=\"name{{index}}\" [(ngModel)]=\"item.X\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-primary pull-right\" style=\"width: auto;\" (click)=\"_local.addXname()\">Save X</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <ng-container *ngIf=\"_local.isAddedYComponent\">\n                            <div *ngFor=\"let y of _local.itemsY; let i = index\">\n                                <app-second [index]=\"i\" [item]=\"y\"></app-second>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <!-- <button class=\"btn btn-danger pull-left\" style=\"width: auto;\" (click)=\"_local.addResult()\">Click here to get final result</button> -->\n                        <button class=\"btn btn-danger pull-right\" style=\"width: auto;\" (click)=\"_local.finalResult()\">Click here to get final result</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <button class=\"btn btn-primary pull-right\" style=\"width: auto;\" (click)=\"_local.addXcomponent()\">(+) Add X Component</button>\n        </div>\n    </div>\n    <ng-container *ngIf=\"_local.isAddedXComponent\">\n\n        <div *ngFor=\"let x of _local.itemsX; let i = index\">\n            <hr class=\"custom-hr\">\n            <app-first [index]=\"i\" [item]=\"x\"></app-first>\n        </div>\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/second/second.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/second/second.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h2>Component Y</h2>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <div class=\"row\">\n                <div class=\"col-md-12 form-group\">\n                    Component Y Details\n                </div>\n            </div>\n        </div>\n        <div class=\"panel-body\">\n            <form #componentX=\"ngForm\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 form-group\">\n                        <div class=\"col-md-6\">\n                            <input type=\"text\" placeholder=\"Enter Your Name\" autocomplete=\"off\" class=\"form-control\" name=\"name{{index}}\" [(ngModel)]=\"item.Y\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-primary pull-right\" style=\"width: auto;\" (click)=\"_local.addYname()\">Save Y</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/question-second/first/first.component.css":
/*!***********************************************************!*\
  !*** ./src/app/question-second/first/first.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLXNlY29uZC9maXJzdC9maXJzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/question-second/first/first.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-second/first/first.component.ts ***!
  \**********************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _second_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../second.service */ "./src/app/question-second/second.service.ts");



let FirstComponent = class FirstComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
FirstComponent.ctorParameters = () => [
    { type: _second_service__WEBPACK_IMPORTED_MODULE_2__["SecondService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstComponent.prototype, "item", void 0);
FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/first/first.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first.component.css */ "./src/app/question-second/first/first.component.css")).default]
    })
], FirstComponent);



/***/ }),

/***/ "./src/app/question-second/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/question-second/home/home.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLXNlY29uZC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/question-second/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-second/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _second_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../second.service */ "./src/app/question-second/second.service.ts");



let HomeComponent = class HomeComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _second_service__WEBPACK_IMPORTED_MODULE_2__["SecondService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/question-second/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/question-second/question-second-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/question-second/question-second-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionSecondRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSecondRoutingModule", function() { return QuestionSecondRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/question-second/routes.ts");




let QuestionSecondRoutingModule = class QuestionSecondRoutingModule {
};
QuestionSecondRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_3__["_routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuestionSecondRoutingModule);



/***/ }),

/***/ "./src/app/question-second/question-second.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/question-second/question-second.module.ts ***!
  \***********************************************************/
/*! exports provided: QuestionSecondModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSecondModule", function() { return QuestionSecondModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-second/home/home.component.ts");
/* harmony import */ var _question_second_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-second-routing.module */ "./src/app/question-second/question-second-routing.module.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first/first.component */ "./src/app/question-second/first/first.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second/second.component */ "./src/app/question-second/second/second.component.ts");








let QuestionSecondModule = class QuestionSecondModule {
};
QuestionSecondModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _first_first_component__WEBPACK_IMPORTED_MODULE_4__["FirstComponent"], _second_second_component__WEBPACK_IMPORTED_MODULE_7__["SecondComponent"]],
        imports: [
            _question_second_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionSecondRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        ]
    })
], QuestionSecondModule);



/***/ }),

/***/ "./src/app/question-second/routes.ts":
/*!*******************************************!*\
  !*** ./src/app/question-second/routes.ts ***!
  \*******************************************/
/*! exports provided: _routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_routes", function() { return _routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-second/home/home.component.ts");


const _routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { state: "module" } },
];


/***/ }),

/***/ "./src/app/question-second/second.service.ts":
/*!***************************************************!*\
  !*** ./src/app/question-second/second.service.ts ***!
  \***************************************************/
/*! exports provided: SecondService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondService", function() { return SecondService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecondService = class SecondService {
    constructor() {
        this.isAddedXComponent = false;
        this.isAddedYComponent = false;
        this.itemsY = [];
        //  _indexToCheckRepeated = 0;
        this.addYcomponent = (_index) => {
            this._indexForYcomponentAdded = _index;
            this.itemsY.push({});
            this.isAddedYComponent = true;
        };
        //////////////////////
        this.itemsX = [];
        this.addXcomponent = () => {
            this.itemsX.push({});
            this.isAddedXComponent = true;
        };
        ///////////////////////
        this.addXname = () => {
            this.itemsX.forEach((val, ind) => {
                for (let x in val) {
                    this._keyX++;
                    val['X' + this._keyX] = val['X'];
                    delete val['X'];
                }
            });
            console.log(this.itemsX);
        };
        this.addYname = () => {
            this.itemsY.forEach((val, ind) => {
                for (let x in val) {
                    this._keyY++;
                    val['Y' + this._keyY] = val['Y'];
                    delete val['Y'];
                }
            });
            console.log(this.itemsY);
        };
        this._keyX = 0;
        this._keyY = 0;
        this.finalArr = [];
        this.finalResult = () => {
            this.itemsX.forEach((val, ind) => {
                this.finalArr.push(val);
                for (let x in val) {
                    this._keyX++;
                    val['X' + this._keyX] = val['X'];
                    delete val['X'];
                }
            });
            this.itemsY.forEach((val, ind) => {
                for (let x in val) {
                    this._keyY++;
                    val['Y' + this._keyY] = val['Y'];
                    delete val['Y'];
                }
            });
            this.finalArr.push(this.itemsY);
            console.log(this.finalArr);
        };
    }
};
SecondService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SecondService);

// [
// {
// x1:"jhj",
// [{y1:hjh,y2:hjh}]
//  }
// ]


/***/ }),

/***/ "./src/app/question-second/second/second.component.css":
/*!*************************************************************!*\
  !*** ./src/app/question-second/second/second.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLXNlY29uZC9zZWNvbmQvc2Vjb25kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/question-second/second/second.component.ts":
/*!************************************************************!*\
  !*** ./src/app/question-second/second/second.component.ts ***!
  \************************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _second_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../second.service */ "./src/app/question-second/second.service.ts");



let SecondComponent = class SecondComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
SecondComponent.ctorParameters = () => [
    { type: _second_service__WEBPACK_IMPORTED_MODULE_2__["SecondService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondComponent.prototype, "item", void 0);
SecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-second',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./second.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-second/second/second.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./second.component.css */ "./src/app/question-second/second/second.component.css")).default]
    })
], SecondComponent);



/***/ })

}]);
//# sourceMappingURL=question-second-question-second-module-es2015.js.map