(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["question-fourth-question-fourth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/five/five.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/five/five.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" name=\"name\" placeholder=\"Enter Text\" [(ngModel)]=\"_local.userText\">\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/four/four.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/four/four.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{_local.userText}}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr class=\"custom-hr\">\n<div class=\"container\">\n    <div id=\"parent\">\n        <p>\n            <app-one></app-one>\n        </p>\n        <p>\n            <app-two></app-two>\n        </p>\n        <p>\n            <app-three></app-three>\n        </p>\n        <p>\n            <app-four></app-four>\n        </p>\n        <div class=\"centre\">\n            <app-five></app-five>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/one/one.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/one/one.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{_local.userText}}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/three/three.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/three/three.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{_local.userText}}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/two/two.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/two/two.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{_local.userText}}</p>");

/***/ }),

/***/ "./src/app/question-fourth/five/five.component.css":
/*!*********************************************************!*\
  !*** ./src/app/question-fourth/five/five.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvdXJ0aC9maXZlL2ZpdmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/question-fourth/five/five.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-fourth/five/five.component.ts ***!
  \********************************************************/
/*! exports provided: FiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiveComponent", function() { return FiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fourth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fourth.service */ "./src/app/question-fourth/fourth.service.ts");



let FiveComponent = class FiveComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
FiveComponent.ctorParameters = () => [
    { type: _fourth_service__WEBPACK_IMPORTED_MODULE_2__["FourthService"] }
];
FiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-five',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./five.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/five/five.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./five.component.css */ "./src/app/question-fourth/five/five.component.css")).default]
    })
], FiveComponent);



/***/ }),

/***/ "./src/app/question-fourth/four/four.component.css":
/*!*********************************************************!*\
  !*** ./src/app/question-fourth/four/four.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvdXJ0aC9mb3VyL2ZvdXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/question-fourth/four/four.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-fourth/four/four.component.ts ***!
  \********************************************************/
/*! exports provided: FourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourComponent", function() { return FourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fourth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fourth.service */ "./src/app/question-fourth/fourth.service.ts");



let FourComponent = class FourComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
FourComponent.ctorParameters = () => [
    { type: _fourth_service__WEBPACK_IMPORTED_MODULE_2__["FourthService"] }
];
FourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-four',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./four.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/four/four.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./four.component.css */ "./src/app/question-fourth/four/four.component.css")).default]
    })
], FourComponent);



/***/ }),

/***/ "./src/app/question-fourth/fourth.service.ts":
/*!***************************************************!*\
  !*** ./src/app/question-fourth/fourth.service.ts ***!
  \***************************************************/
/*! exports provided: FourthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourthService", function() { return FourthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FourthService = class FourthService {
    constructor() {
        this.userText = null;
    }
};
FourthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FourthService);



/***/ }),

/***/ "./src/app/question-fourth/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/question-fourth/home/home.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#parent {\r\n    position: relative;\r\n    border: 3px solid blue;\r\n    height: 300px;\r\n    padding: 0;\r\n}\r\n\r\np {\r\n    position: absolute;\r\n    border: 2px solid;\r\n    margin: 0;\r\n    padding: 25px;\r\n}\r\n\r\np:nth-child(1) {\r\n    border-color: green;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\np:nth-child(2) {\r\n    border-color: red;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\np:nth-child(3) {\r\n    border-color: yellow;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\np:nth-child(4) {\r\n    border-color: pink;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.centre {\r\n    margin: 0 !important;\r\n    position: absolute !important;\r\n    top: 50% !important;\r\n    left: 50% !important;\r\n    transform: translate(-50%, -50%) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tZm91cnRoL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsU0FBUztJQUNULE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBRXBCLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvdXJ0aC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxucDpudGgtY2hpbGQoMSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbnA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbnA6bnRoLWNoaWxkKDMpIHtcclxuICAgIGJvcmRlci1jb2xvcjogeWVsbG93O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxucDpudGgtY2hpbGQoNCkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBwaW5rO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jZW50cmUge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/question-fourth/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-fourth/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fourth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fourth.service */ "./src/app/question-fourth/fourth.service.ts");



let HomeComponent = class HomeComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _fourth_service__WEBPACK_IMPORTED_MODULE_2__["FourthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/question-fourth/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/question-fourth/one/one.component.css":
/*!*******************************************************!*\
  !*** ./src/app/question-fourth/one/one.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvdXJ0aC9vbmUvb25lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/question-fourth/one/one.component.ts":
/*!******************************************************!*\
  !*** ./src/app/question-fourth/one/one.component.ts ***!
  \******************************************************/
/*! exports provided: OneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneComponent", function() { return OneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fourth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fourth.service */ "./src/app/question-fourth/fourth.service.ts");



let OneComponent = class OneComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
OneComponent.ctorParameters = () => [
    { type: _fourth_service__WEBPACK_IMPORTED_MODULE_2__["FourthService"] }
];
OneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/one/one.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./one.component.css */ "./src/app/question-fourth/one/one.component.css")).default]
    })
], OneComponent);



/***/ }),

/***/ "./src/app/question-fourth/question-fourth-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/question-fourth/question-fourth-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionFourthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFourthRoutingModule", function() { return QuestionFourthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/question-fourth/routes.ts");




let QuestionFourthRoutingModule = class QuestionFourthRoutingModule {
};
QuestionFourthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_3__["_routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuestionFourthRoutingModule);



/***/ }),

/***/ "./src/app/question-fourth/question-fourth.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/question-fourth/question-fourth.module.ts ***!
  \***********************************************************/
/*! exports provided: QuestionFourthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFourthModule", function() { return QuestionFourthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-fourth/home/home.component.ts");
/* harmony import */ var _question_fourth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-fourth-routing.module */ "./src/app/question-fourth/question-fourth-routing.module.ts");
/* harmony import */ var _one_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./one/one.component */ "./src/app/question-fourth/one/one.component.ts");
/* harmony import */ var _two_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./two/two.component */ "./src/app/question-fourth/two/two.component.ts");
/* harmony import */ var _three_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./three/three.component */ "./src/app/question-fourth/three/three.component.ts");
/* harmony import */ var _four_four_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./four/four.component */ "./src/app/question-fourth/four/four.component.ts");
/* harmony import */ var _five_five_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./five/five.component */ "./src/app/question-fourth/five/five.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let QuestionFourthModule = class QuestionFourthModule {
};
QuestionFourthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _one_one_component__WEBPACK_IMPORTED_MODULE_4__["OneComponent"], _two_two_component__WEBPACK_IMPORTED_MODULE_5__["TwoComponent"], _three_three_component__WEBPACK_IMPORTED_MODULE_6__["ThreeComponent"], _four_four_component__WEBPACK_IMPORTED_MODULE_7__["FourComponent"], _five_five_component__WEBPACK_IMPORTED_MODULE_8__["FiveComponent"]],
        imports: [
            _question_fourth_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionFourthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]
        ]
    })
], QuestionFourthModule);



/***/ }),

/***/ "./src/app/question-fourth/routes.ts":
/*!*******************************************!*\
  !*** ./src/app/question-fourth/routes.ts ***!
  \*******************************************/
/*! exports provided: _routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_routes", function() { return _routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/question-fourth/home/home.component.ts");


const _routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { state: "module" } },
];


/***/ }),

/***/ "./src/app/question-fourth/three/three.component.css":
/*!***********************************************************!*\
  !*** ./src/app/question-fourth/three/three.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvdXJ0aC90aHJlZS90aHJlZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/question-fourth/three/three.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-fourth/three/three.component.ts ***!
  \**********************************************************/
/*! exports provided: ThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeComponent", function() { return ThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fourth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fourth.service */ "./src/app/question-fourth/fourth.service.ts");



let ThreeComponent = class ThreeComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
ThreeComponent.ctorParameters = () => [
    { type: _fourth_service__WEBPACK_IMPORTED_MODULE_2__["FourthService"] }
];
ThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-three',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./three.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/three/three.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./three.component.css */ "./src/app/question-fourth/three/three.component.css")).default]
    })
], ThreeComponent);



/***/ }),

/***/ "./src/app/question-fourth/two/two.component.css":
/*!*******************************************************!*\
  !*** ./src/app/question-fourth/two/two.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvdXJ0aC90d28vdHdvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/question-fourth/two/two.component.ts":
/*!******************************************************!*\
  !*** ./src/app/question-fourth/two/two.component.ts ***!
  \******************************************************/
/*! exports provided: TwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoComponent", function() { return TwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fourth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fourth.service */ "./src/app/question-fourth/fourth.service.ts");



let TwoComponent = class TwoComponent {
    constructor(_local) {
        this._local = _local;
    }
    ngOnInit() {
    }
};
TwoComponent.ctorParameters = () => [
    { type: _fourth_service__WEBPACK_IMPORTED_MODULE_2__["FourthService"] }
];
TwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-fourth/two/two.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./two.component.css */ "./src/app/question-fourth/two/two.component.css")).default]
    })
], TwoComponent);



/***/ })

}]);
//# sourceMappingURL=question-fourth-question-fourth-module-es2015.js.map