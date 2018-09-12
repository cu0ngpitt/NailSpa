webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host >>> .section-page-title {\r\n  background-color: mistyrose;\r\n}\r\n/*remove the styles above when done, only used for visual*/\r\n:host >>> .breadcrumb > li + li:before {\r\n  content: \">\";\r\n}\r\n:host >>> .section {\r\n  padding: 50px 0;\r\n}\r\n:host >>> .section-page-title {\r\n  padding: 80px 0;\r\n}\r\n:host >>> .page-title {\r\n  margin: 0 auto;\r\n  max-width: 1160px;\r\n}\r\n:host >>> nav .breadcrumb {\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n:host >>> .breadcrumb-section {\r\n  background-color: #e9ecef;\r\n}\r\n:host >>> .btn {\r\n  border-radius: 25px;\r\n  padding: 10px 32px;\r\n  margin-top: 20px;\r\n}\r\n:host >>> .divider-lg {\r\n  border-bottom: 2px solid pink;\r\n  width: 90px;\r\n  height: 24px;\r\n}\r\n:host >>> h2 {\r\n  margin: 0;\r\n}\r\n:host >>> .intro {\r\n  margin: 30px auto 0;\r\n}\r\n:host >>> .text {\r\n  max-width: 75%;\r\n  margin: 0 auto;\r\n}\r\n:host >>> .text p {\r\n  margin-top: 32px;\r\n}\r\n:host >>> a {\r\n  text-decoration: none;\r\n}\r\n#contact-bar {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul, li {\r\n  display: inline-block;\r\n}\r\n#open {\r\n  margin-left: 60px;\r\n}\r\n#mon {\r\n  margin-left: 10px;\r\n}\r\n#sat, #sun {\r\n  margin-left: 30px;\r\n}\r\n.outer {\r\n  padding: 0 15px;\r\n}\r\n.inner {\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n/* For laptops: */\r\n@media only screen and (max-width: 991.5px) {\r\n    .outer {\r\n      display: none;\r\n    }    \r\n}\r\n/* For laptops: */\r\n@media only screen and (min-width: 768px) {\r\n    :host >>>  .section {\r\n      padding: 85px 0;\r\n    }\r\n}\r\n/* For desktops: */\r\n@media only screen and (min-width: 992px) {\r\n    :host >>>  .section {\r\n      padding: 100px 0;\r\n    }\r\n}\r\n/* For Widescreens: */\r\n@media only screen and (min-width: 1200px) {\r\n    :host >>>  .section {\r\n      padding: 115px 0;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\n  <div class=\"inner\">\n    <ul id=\"contact-bar\">\n      <li id=\"call\">Call Us: <a href=\"tel:(972) 952-0232\">(972) 952-0232</a></li>\n      <li id=\"open\">Opening Hours:</li>\n      <li id=\"mon\">Mon-Fr: 10 am &ndash; 7:30 pm</li>\n      <li id=\"sat\">Sat: 9:30 am &ndash; 7:30 pm</li>\n      <li id=\"sun\">Sun: 12 pm &ndash; 6 pm</li>\n    </ul>\n  </div>\n</div>\n\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<app-footer-bar></app-footer-bar>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nav_bar_nav_bar_component__ = __webpack_require__("./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_bar_footer_bar_component__ = __webpack_require__("./src/app/components/footer-bar/footer-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_services_services_component__ = __webpack_require__("./src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pricing_pricing_component__ = __webpack_require__("./src/app/components/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_gallery_gallery_component__ = __webpack_require__("./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_8__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_9__components_pricing_pricing_component__["a" /* PricingComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_10__components_gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_footer_bar_footer_bar_component__["a" /* FooterBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_pricing_pricing_component__["a" /* PricingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".section {\r\n  padding: 80px 0 80px 0;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n.contact-info i {\r\n  position: absolute;\r\n  top: 44px;\r\n  left: 35px;\r\n  height: 24px;\r\n  width: 24px;\r\n}\r\n\r\n.contact-info .fa-phone {\r\n  position: absolute;\r\n  top: 5px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.info-list {\r\n  padding: 25px 0;\r\n}\r\n\r\n.info-list:not(:last-child) {\r\n  border-bottom: 1px solid lightgrey;\r\n}\r\n\r\n.info {\r\n  padding-left: 30px;\r\n}\r\n\r\ninput, textarea {\r\n  border-radius: 25px;\r\n  padding: 12px 19px;\r\n}\r\n\r\n.intro, form {\r\n  margin-top: 30px;\r\n}\r\n\r\n.col-lg-8, .col-lg-4 {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.prefContact {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.pref-input {\r\n  margin: 0;\r\n}\r\n\r\n/* For desktops and smaller: */\r\n\r\n@media only screen and (max-width: 812px) {\r\n    .contact {\r\n        padding: 40px 0;\r\n    }\r\n}\r\n\r\n/*form validation*/\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border: 1px solid limegreen;\r\n}\r\n\r\n.ng-touched.ng-invalid:not(form)  {\r\n  border: 1px solid red;\r\n}\r\n\r\n.isInvalid {\r\n  color: red;\r\n  font-size: 11px;\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 22px;\r\n}\r\n\r\n.isInvalid-msg {\r\n  color: red;\r\n  font-size: 11px;\r\n  position: absolute;\r\n  right: 30px;\r\n  z-index: 2\r\n}\r\n\r\ntextarea {\r\n  z-index: 1;\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .break {\r\n    display: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-page-title\">\r\n  <div class=\"container\">\r\n    <h1 class=\"page-title\">Contact Us</h1>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section contact\">\r\n  <div class=\"container row\">\r\n<!--contact form column section-->\r\n    <div class=\"col-lg-8\">\r\n      <h2>Contact Us</h2>\r\n\r\n      <div class=\"divider-lg\"></div>\r\n\r\n      <p class=\"intro\">Have a question or comment? You may contact us by phone or email.<br class=\"break\">\r\n        Or you can also use the contact form below.\r\n      </p>\r\n\r\n      <form #contactForm=\"ngForm\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\" required ngModel name=\"first\" #first=\"ngModel\">\r\n            <div [hidden]=\"first.valid || first.untouched\" class=\"isInvalid\">First name is required</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\" required ngModel name=\"last\" #last=\"ngModel\">\r\n            <div [hidden]=\"last.valid || last.untouched\" class=\"isInvalid\">Last name is required</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n          <p class=\"\">Please select your preferred method of contact:</p>\r\n\r\n          <div class=\"form-row container prefContact\">\r\n            <div class=\"form-check form-check-inline\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"Phone\" ngModel name=\"pref\" #pref=\"ngModel\" required>\r\n              <label class=\"form-check-label\" for=\"inlineRadio1\">Cell Phone</label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"Email\" ngModel name=\"pref\" #pref=\"ngModel\" required>\r\n              <label class=\"form-check-label\" for=\"inlineRadio2\">Email</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-row align-items-center\">\r\n          <div *ngIf=\"pref.value === 'Phone'\" class=\"form-group col-md-6 pref-input\">\r\n            <input type=\"tel; number\" class=\"form-control prefContact\" id=\"inputPhone\" placeholder=\"Phone\" required ngModel name=\"phone\" #phone=\"ngModel\">\r\n            <div [hidden]=\"phone.valid || phone.untouched\" class=\"isInvalid\">Phone number is required</div>\r\n          </div>\r\n          <div *ngIf=\"pref.value === 'Email'\" class=\"form-group col-md-6 pref-input\">\r\n            <input type=\"email\" class=\"form-control prefContact\" id=\"inputEmail\" placeholder=\"Email\" required ngModel name=\"email\" #email=\"ngModel\">\r\n            <div [hidden]=\"email.valid || email.untouched\" class=\"isInvalid\">Email is required</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group message\">\r\n          <div [hidden]=\"message.valid || message.untouched\" class=\"isInvalid-msg\">A message is required</div>\r\n          <textarea class=\"form-control\" id=\"inputMessage\" rows=\"5\" placeholder=\"Message\" required ngModel name=\"message\" #message=\"ngModel\"></textarea>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn\" [disabled]=\"!contactForm.form.valid\" (click)=\"contactForm.reset()\">Send Message</button>\r\n      </form>\r\n    </div>\r\n\r\n<!--contact info column section-->\r\n    <div class=\"col-lg-4\">\r\n      <ul class=\"contact-info fa-ul\">\r\n        <li class=\"info-list\">\r\n          <span class=\"fa-li\"><i class=\"fas fa-map-marker-alt\"></i></span>\r\n          <p>Address</p>\r\n          <div class=\"info\">\r\n            <a href=\"https://maps.google.com/?q=Nails Spa, North Coit Road, Richardson, TX\" target=\"_blank\">\r\n              420 N Coit Road #2021<br>\r\n              Richardson, TX 75080</a>\r\n          </div>\r\n        </li>\r\n\r\n        <li class=\"info-list\">\r\n          <p>Phone</p>\r\n          <span class=\"fa-li\"><i class=\"fas fa-phone\"></i></span>\r\n          <div class=\"info\">\r\n            <a href=\"tel:(972) 952-0232\">(972) 952-0232</a>\r\n          </div>\r\n        </li>\r\n\r\n        <li class=\"info-list\">\r\n          <span class=\"fa-li\"><i class=\"far fa-envelope\"></i></span>\r\n          <p>E-mail</p>\r\n          <div class=\"info\">\r\n            <a href=\"mailto:info@nailspa.com\">info@nailspa.com</a>\r\n          </div>\r\n        </li>\r\n\r\n        <li class=\"info-list\">\r\n          <span class=\"fa-li\"><i class=\"far fa-clock\"></i></span>\r\n          <p>Opening Hours</p>\r\n          <div class=\"info\">\r\n            <ul class=\"hours\">\r\n              <li>Mon-Fri: 10 am &ndash; 7:30 pm</li>\r\n              <li>Saturday: 9:30 am &ndash; 7:30 pm</li>\r\n              <li>Sunday: 12 pm  &ndash; 6 pm</li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer-bar/footer-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".outer {\r\n  background-color: white;\r\n}\r\n\r\n.inner {\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n#logo {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.links {\r\n  margin: 0 auto;\r\n}\r\n\r\n.nav-item {\r\n  padding: 0 30px;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n@media only screen and (max-width: 812px) {\r\n    /* For mobile phones: */\r\n    .navbar-brand, .nav {\r\n        margin: 0 auto;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer-bar/footer-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"router.url === '/home'\" class=\"text-center\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <h5>Nails & Spa</h5>\n    <h5>Logo</h5>\n  </a>\n</div>\n\n<div class=\"outer\">\n  <div class=\"inner\">\n    <nav class=\"navbar navbar-expand-lg\">\n      <a *ngIf=\"router.url !== '/home'\" class=\"navbar-brand\" routerLink=\"/home\">\n        <img src=\"https://www.nailpolishdirect.co.uk/images/cuccio-red-lights-in-amsterdam-colour-nail-polish-13ml-p9892-88004_zoom.jpg\" class=\"d-inline-block align-top\" id=\"logo\" alt=\"Logo\">\n        Nails & Spa\n      </a>\n      <div class=\"links\">\n        <div class=\"nav row justify-content-center\">\n          <a class=\"nav-item nav-link\" routerLink=\"/home\" routerLinkActive=\"home\">Home</a>\n          <a class=\"nav-item nav-link\" routerLink=\"/services\" routerLinkActive=\"active\">Services</a>\n          <a class=\"nav-item nav-link\" routerLink=\"/gallery\" routerLinkActive=\"active\">Gallery</a>\n          <a class=\"nav-item nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\n        </div>\n      </div>\n    </nav>\n  </div>\n</div>\n\n<div class=\"text-center\">\n  <p class=\"text-muted\">© COPYRIGHT 2018 NAILS&SPA</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer-bar/footer-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterBarComponent = /** @class */ (function () {
    function FooterBarComponent(router) {
        this.router = router;
    }
    FooterBarComponent.prototype.ngOnInit = function () {
    };
    FooterBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-bar',
            template: __webpack_require__("./src/app/components/footer-bar/footer-bar.component.html"),
            styles: [__webpack_require__("./src/app/components/footer-bar/footer-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], FooterBarComponent);
    return FooterBarComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".gallery {\r\n  text-align: center;\r\n}\r\n\r\n.gallery h1 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.gallery img {\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-page-title\">\n  <div class=\"container\">\n    <h1 class=\"page-title\">Gallery</h1>\n  </div>\n</section>\n\n<section class=\"section gallery\">\n  <div class=\"container\">\n    <h1>COMING SOON</h1>\n    <img class=\"w-100\" src=\"https://st2.depositphotos.com/5948652/10832/v/950/depositphotos_108329740-stock-illustration-under-construction-girl.jpg\" alt=\"Under Construction Image\">\n    <p>This page is under construction. We are working very hard to give you a great looking portfolio.</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/*remove this section later, just testing*/\r\n.carousel-item .d-block {\r\n  max-height: 646px;\r\n}\r\n/*remove above section*/\r\n/*Why styles section*/\r\n.block {\r\n  max-width: 475px;\r\n}\r\n.intro {\r\n  margin-bottom: 17px;\r\n}\r\n/*Services styles section*/\r\n.services {\r\n  background-color: whitesmoke;\r\n}\r\n.divider::after {\r\n  content: '';\r\n  display: inline-block;\r\n  background-color: pink;\r\n  width: 60px;\r\n  height: 3px;\r\n}\r\n.service-container {\r\n  margin-top: 35px;\r\n}\r\n.service-box {\r\n  padding: 0;\r\n}\r\n.nails, .pedi, .mani, .wax {\r\n  padding: 50px 25px;\r\n}\r\n.icon-box, .icon-body {\r\n  padding: 0 20px;\r\n}\r\n.icon-box {\r\n  width: 145px;\r\n}\r\n.icon-pic img {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.icon-title h4 {\r\n  margin-top: 15px;\r\n  margin-bottom: 0;\r\n}\r\n.nails, .mani {\r\n  text-align: right;\r\n}\r\n.pedi, .wax {\r\n  text-align: left;\r\n}\r\n.icon-box {\r\n  text-align: center;\r\n}\r\n.nails::before, .pedi::before {\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 0;\r\n  content: '';\r\n  height: 1px;\r\n  width: 85%;\r\n  background: black;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n@media only screen and (min-width: 764px) {\r\n    /* For resolutions larger than mobile phones: */\r\n    .nails::after, .mani::after {\r\n      position: absolute;\r\n      top: 50%;\r\n      right: 0;\r\n      content: '';\r\n      width: 1px;\r\n      height: 75%;\r\n      background: black;\r\n      -webkit-transform: translateY(-50%);\r\n              transform: translateY(-50%);\r\n    }\r\n}\r\n@media only screen and (max-width: 764px) {\r\n    /* For mobile phones: */\r\n    .mani::before, .wax:before {\r\n      position: absolute;\r\n      left: 50%;\r\n      bottom: 0;\r\n      content: '';\r\n      height: 1px;\r\n      width: 85%;\r\n      background: black;\r\n      -webkit-transform: translateX(-50%);\r\n              transform: translateX(-50%);\r\n    }\r\n}\r\n@media only screen and (max-width: 990px) {\r\n    /* For mobile phones: */\r\n    .icon-box {\r\n      margin: 0 auto;\r\n      text-align: center;\r\n    }\r\n\r\n    .icon-body {\r\n      padding-top: 25px;\r\n      text-align: center;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    .why-body {\r\n      margin-bottom: 50px;\r\n    }\r\n\r\n    .nails, .pedi, .mani, .wax {\r\n      padding: 40px 20px;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .service-container {\r\n    margin-top: 60px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Carousel slides section-->\r\n<section class=\"slides\">\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"d-block w-100\" src=\"https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_blizzard_entertainment_03_2560x1080.jpg&height=506\"\r\n         alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/454971-witch-Overwatch-Mercy_Overwatch-Halloween-Blizzard_Entertainment-video_games-748x421.jpg\"\r\n         alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"d-block w-100\" src=\"https://www.desktopbackground.org/download/o/2010/11/21/114349_video-games-pc-blizzard-entertainment-diablo-iii-wallpapers_2560x1600_h.jpg\"\r\n         alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</section>\r\n\r\n<!--Why clients choose us section-->\r\n<section class=\"section why\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"why-body col-lg-6\">\r\n        <div class=\"block\">\r\n          <h2>Why our clients choose us</h2><br>\r\n\r\n          <span class=\"divider\"></span>\r\n\r\n          <p class=\"intro\">We take pride in what we do and believe our work speaks for itself.</p>\r\n          <p>We have a reputation for offering high quality service at a competitive price. </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"why-pic col-lg-6\">\r\n        <img class=\"w-100\" src=\"https://i.pinimg.com/originals/ab/c2/cf/abc2cfa39ee1f8aebba6a605870cccf7.png\" alt=\"why image\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Our Services section-->\r\n<section class=\"section services text-center\">\r\n  <div class=\"container\">\r\n    <h2>Our Services</h2>\r\n\r\n    <div class=\"d-flex justify-content-center\">\r\n      <div class=\"divider-lg\"></div>\r\n    </div>\r\n\r\n    <div class=\"text\">\r\n      <p>We offer a complete range of nail services including dipping powders, gel polish, nail repair and more. You can learn more about each of our services below.</p>\r\n    </div>\r\n\r\n    <div class=\"service-container\">\r\n      <div class=\"row justify-content-md-center\">\r\n        <div class=\"service-box col-md-6\">\r\n          <div class=\"d-flex nails flex-md-row-reverse flex-wrap\">\r\n            <div class=\"icon-box col-lg-4\">\r\n              <a routerLink=\"/services\">\r\n                <div class=\"icon-pic\">\r\n                  <img src=\"https://us.123rf.com/450wm/lineartestpilot/lineartestpilot1603/lineartestpilot160335288/53911604-freehand-textured-cartoon-nail.jpg?ver=6\" alt=\"nail pic\">\r\n                </div>\r\n                <div class=\"icon-title\">\r\n                  <h4>Nails</h4>\r\n                </div>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"icon-body col-lg row align-items-center\">\r\n              <p>Jazz up your nails with some fancy polish or go for an elegant look with white tips. We offer nail services for kids too!</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"service-box col-md-6\">\r\n          <div class=\"d-flex pedi flex-wrap\">\r\n            <div class=\"icon-box col-lg-4\">\r\n              <a routerLink=\"/services\">\r\n                <div class=\"icon-pic\">\r\n                  <img src=\"https://media.istockphoto.com/vectors/female-legs-barefoot-with-hands-holding-the-ankle-side-view-vector-vector-id1005850290\" alt=\"pedi pic\">\r\n                </div>\r\n                <div class=\"icon-title\">\r\n                  <h4>Pedicures</h4>\r\n                </div>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"icon-body col-lg row align-items-center\">\r\n              <p>Enjoy your visit as one of our professionals gives you a foot and leg massage so relaxing you will fall asleep in the chair.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row justify-content-md-center\">\r\n        <div class=\"service-box col-md-6\">\r\n          <div class=\"d-flex flex-md-row-reverse mani flex-wrap\">\r\n            <div class=\"icon-box col-lg-4\">\r\n              <a routerLink=\"/services\">\r\n                <div class=\"icon-pic\">\r\n                  <img src=\"https://images.cdn2.stockunlimited.net/preview1300/female-hand_1319784.jpg\" alt=\"mani pic\">\r\n                </div>\r\n                <div class=\"icon-title\">\r\n                  <h4>Manicures</h4>\r\n                </div>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"icon-body col-lg row align-items-center\">\r\n              <p>We use our hands everyday. Don't take them for granted. Rejuvenate your hands and arms with a spa treatement.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"service-box col-md-6\">\r\n          <div class=\"d-flex wax flex-wrap\">\r\n            <div class=\"icon-box col-md-4\">\r\n              <a routerLink=\"/services\">\r\n                <div class=\"icon-pic\">\r\n                  <img src=\"http://laoblogger.com/images/clip-art-honey-2.jpg\" alt=\"wax pic\">\r\n                </div>\r\n                <div class=\"icon-title\">\r\n                  <h4>Waxing</h4>\r\n                </div>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"icon-body col-lg row align-items-center\">\r\n              <p>Get rid of your unwanted hair. We can remove your unwanted hair from your eyebrows, arms, legs, and more.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Gallery section-->\r\n<section class=\"section gallery\">\r\n  <div class=\"container text-center\">\r\n    <h2>Portfolio</h2>\r\n\r\n    <div class=\"d-flex justify-content-center\">\r\n      <div class=\"divider-lg\"></div>\r\n    </div>\r\n\r\n    <div class=\"text\">\r\n      <!--\r\n      <p>Check out our full portfolio!</p>\r\n    -->\r\n      <p>COMING SOON</p>\r\n    </div>\r\n\r\n    <a routerLink=\"/gallery\">\r\n      <button class=\"btn\">VIEW OUR PORTFOLIO</button>\r\n    </a>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".outer {\r\n  background-color: white;\r\n}\r\n\r\n.inner {\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n#logo {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.navbar {\r\n  padding: 8px 0;\r\n}\r\n\r\n.services {\r\n  padding-right: 0;\r\n}\r\n\r\n.dropdown-toggle {\r\n  padding-left: 6px;\r\n}\r\n\r\n.nav-item {\r\n  margin-left: 45px;\r\n}\r\n\r\n@media only screen and (max-width: 991.5px) {\r\n  .active {\r\n    background: pink;\r\n  }\r\n\r\n  .nav {\r\n    background-color: white;\r\n    height: 100vh;\r\n    display: block;\r\n    position: absolute;\r\n    -webkit-transition: all 1s ease-in-out;\r\n    transition: all 1s ease-in-out;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  .nav-link {\r\n    margin: 0;\r\n  }\r\n\r\n  .dropdown {\r\n    position: absolute;\r\n    -webkit-transform: translate(175px, -40px);\r\n            transform: translate(175px, -40px);\r\n  }\r\n\r\n  .dropdown-menu {\r\n    -webkit-transform: translate(-210px, -3px);\r\n            transform: translate(-210px, -3px);\r\n    padding: 0;\r\n    border: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer sticky-top\">\r\n  <div class=\"inner\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar(toggle)\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/home\">\r\n        <img src=\"https://www.nailpolishdirect.co.uk/images/cuccio-red-lights-in-amsterdam-colour-nail-polish-13ml-p9892-88004_zoom.jpg\" class=\"d-inline-block align-top\" id=\"logo\" alt=\"Logo\">\r\n        Nails & Spa\r\n      </a>\r\n      <div class=\"collapse navbar-collapse justify-content-center show\" id=\"navbarNav\">\r\n        <div class=\"nav\" [style.width]=\"toggle ? '250px' : '0'\">\r\n          <a class=\"nav-item nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"toggleNavbar(toggle)\">Home</a>\r\n          <a class=\"nav-item nav-link services\" routerLink=\"/services\" routerLinkActive=\"active\" (click)=\"toggleNavbar(toggle)\">Services</a>\r\n            <div class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" (click)=\"toggleDropdown(drop)\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                   <a class=\"dropdown-item\" routerLink=\"/pricing\" (click)=\"toggleNavbar(toggle)\">Pricing</a>\r\n                 </div>\r\n             </div>\r\n          <a class=\"nav-item nav-link\" [style.margin-top]=\"drop ? '32px' : '0'\" routerLink=\"/gallery\" routerLinkActive=\"active\" (click)=\"toggleNavbar(toggle)\">Gallery</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\" (click)=\"toggleNavbar(toggle)\">Contact Us</a>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.toggle = false;
        this.drop = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.toggleNavbar = function (toggle) {
        if (toggle === false) {
            this.toggle = true;
        }
        else if (toggle === true) {
            this.toggle = false;
        }
    };
    NavBarComponent.prototype.toggleDropdown = function (drop) {
        if (drop === false) {
            this.drop = true;
        }
        else if (drop === true) {
            this.drop = false;
        }
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/pricing/pricing.component.css":
/***/ (function(module, exports) {

module.exports = "h2, h4, h5, h6, p {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pedicure, .waxing {\r\n  background: whitesmoke;\r\n}\r\n\r\narticle {\r\n  padding: 35px 0;\r\n}\r\n\r\n.pricing-title {\r\n  margin: 0 auto 30px auto;\r\n  position: relative;\r\n}\r\n\r\n.pricing-title::after {\r\n  position: absolute;\r\n  content: '';\r\n  height: 3px;\r\n  width: 70%;\r\n  background: pink;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n  top: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n.pricing-heading span {\r\n  padding-bottom: 6px;\r\n  border-bottom: 2px solid pink;\r\n}\r\n\r\n.pricing-subtitle {\r\n  margin-top: 30px;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.subtitle-text {\r\n  margin: 20px auto 0 auto;\r\n  max-width: 75%;\r\n}\r\n\r\n.pricing-subsction {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.pricing-heading {\r\n  margin-bottom: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.item-name {\r\n  font-size: 22px;\r\n  text-align: left;\r\n  -ms-grid-column-align: start;\r\n      justify-self: start;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n\r\n.pricing-item {\r\n  -webkit-column-gap: 10px;\r\n          column-gap: 10px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 3fr 1fr 1fr;\r\n      grid-template-columns: 3fr 1fr 1fr;\r\n}\r\n\r\n.pricing-item-single {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -webkit-column-gap: 10px;\r\n          column-gap: 10px;\r\n  -ms-grid-columns: 3fr 1fr;\r\n      grid-template-columns: 3fr 1fr;\r\n}\r\n\r\n.header {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -webkit-column-gap: 10px;\r\n          column-gap: 10px;\r\n  -ms-grid-columns: 3fr 1fr 1fr;\r\n      grid-template-columns: 3fr 1fr 1fr;\r\n}\r\n\r\n.kids .header {\r\n  position: relative;\r\n  top: 24px;\r\n}\r\n\r\n.pricing-item, .pricing-item-single, .scents {\r\n  padding: 25px 0;\r\n}\r\n\r\n.price {\r\n  font-size: 24px;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n\r\n.heading-desc {\r\n  font-size: 16px;\r\n  margin-top: 16px;\r\n  color: #999999;\r\n}\r\n\r\n.desc {\r\n  font-size: 16px;\r\n  margin-top: 10px;\r\n  color: #999999;\r\n}\r\n\r\n.divider {\r\n  margin-top: 5px;\r\n  height: 2px;\r\n  width: 3rem;\r\n  background-color: pink;\r\n}\r\n\r\n.nails .pricing-item,\r\n.nails .pricing-item-single,\r\n.manicure .pricing-item-single,\r\n.kids .pricing-item,\r\n.kids .pricing-item-single {\r\n  border-bottom: 1px solid #e7e7e7;\r\n}\r\n\r\n.pedicure .pricing-item-single,\r\n.pedicure .scents,\r\n.waxing .pricing-item-single {\r\n  border-bottom: 1px solid #cecece;\r\n}\r\n\r\n.scent-list {\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.scent-list ul {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* For Widescreens: */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    article {\r\n      padding: 60px 0;\r\n    }\r\n\r\n    .item-name {\r\n      font-size: 24px;\r\n    }\r\n\r\n    .price {\r\n      font-size: 32px;\r\n      font-weight: 450;\r\n    }\r\n}\r\n\r\n/* For screens tablets and smaller\r\n   For the Spa scents section */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .scent-list {\r\n    display: block;\r\n  }\r\n\r\n  .scent-list ul {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -webkit-column-gap: 10px;\r\n            column-gap: 10px;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    padding-left: 0;\r\n  }\r\n\r\n  .scent-list li {\r\n    padding-left: 35%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-page-title\">\n  <div class=\"container\">\n    <h1 class=\"page-title\">Pricing</h1>\n  </div>\n</section>\n\n<section class=\"breadcrumb-section\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/services\">Services</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Pricing</li>\n    </ol>\n  </nav>\n\n</section>\n\n<section class=\"section services text-center\">\n    <h2>Pricing</h2>\n\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"divider-lg\"></div>\n    </div>\n\n    <div class=\"text\">\n      <p>A complete range of services. You can learn more below.</p>\n    </div>\n\n    <article class=\"nails\">\n      <div class=\"container\">\n        <div class=\"pricing-title\">\n          <h4><span>Nail Services</span></h4>\n        </div>\n        <div class=\"pricing-subtitle\">\n          <h5>Nail Enhancements</h5>\n          <div class=\"subtitle-text\">\n            <p>We offer two types of nail enhancements: Artificial Nails and Dipping Powder.</p>\n          </div>\n        </div>\n        <div class=\"pricing-content row justify-content-center\">\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-heading\">\n                <h6><span>Artificial Nails</span></h6>\n                <p class=\"heading-desc\">\n                  A classic system which involves applying a mixture of liquid and powder acrylic to the nails. Once cured,\n                  the nails are filed to the desired shape and thickness. After which, the nails will be buffed smooth and\n                  polish can be applied.\n                </p>\n            </div>\n            <div class=\"header\">\n              <p></p>\n              <p class=\"heading\">Fill</p>\n              <p class=\"heading\">Set</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">Acrylic Nails</p>\n              <p class=\"price\">$17</p>\n              <p class=\"price\">$25</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">White or American Tip</p>\n              <p class=\"price\">$17</p>\n              <p class=\"price\">$27</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">Solar Pink & White</p>\n              <p class=\"price\">$30</p>\n              <p class=\"price\">$35</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">Solar Pink & Color</p>\n              <p class=\"price\">$35</p>\n              <p class=\"price\">$40</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">Whole Nail Color Powder</p>\n              <p class=\"price\">$25</p>\n              <p class=\"price\">$40</p>\n            </div>\n          </div>\n\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-heading\">\n              <h6><span>Dipping Powder (Nexgen)</span></h6>\n              <p class=\"heading-desc\">A nail enhancement system which first begins with an application of resin \"glue\" to the nail. The finger\n                is then dipped into colored acrylic powder and the process is repeated until the desired thickness is achieved.\n              </p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Color Set</p>\n              <p class=\"price\">$35</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">French or American Set</p>\n              <p class=\"price\">$40</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Ombre</p>\n              <p class=\"price\">$45</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"pricing-subtitle\">\n          <h5>Polish</h5>\n          <p class=\"subtitle-text\">Choose from regular polish or gel polish. Both have a variety of colors and designs.</p>\n        </div>\n        <div class=\"pricing-content row justify-content-center\">\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-heading\">\n              <h6><span>Regular Polish</span></h6>\n            </div>\n            <div class=\"header\">\n              <p></p>\n              <p class=\"heading\">Hands</p>\n              <p class=\"heading\">Feet</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">Polish Change</p>\n              <p class=\"price\">$7</p>\n              <p class=\"price\">$8</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">French Polish</p>\n              <p class=\"price\">$9</p>\n              <p class=\"price\">$10</p>\n            </div>\n          </div>\n\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-heading\">\n              <h6><span>Gel Polish</span></h6>\n              <p class=\"desc\">More durable and lasts longer than regular polish. While sometimes referred to as\n                \"no-chip\" polish, proper nail care is still required to maintain the integrity of the polish.\n              </p>\n            </div>\n            <div class=\"header\">\n              <p></p>\n              <p class=\"heading\">Whole Nail</p>\n              <p class=\"heading\">Tip Only</p>\n            </div>\n            <div class=\"pricing-item\">\n              <div class=\"item-name\">\n                <p>Gel Manicure</p>\n                <p class=\"desc\">Basic Spa Manicure with Gel polish</p>\n              </div>\n              <p class=\"price\">$25</p>\n              <p class=\"price\">$30</p>\n            </div>\n            <div class=\"pricing-item\">\n              <div class=\"item-name\">\n                <p>Gel Pedicure</p>\n                <p class=\"desc\">Basic Spa Pedicure with Gel polish</p>\n              </div>\n              <p class=\"price\">$35</p>\n              <p class=\"price\">$40</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">Gel Polish Only</p>\n              <p class=\"price\">$15</p>\n              <p class=\"price\">$20</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"pricing-subtitle\">\n          <h5>Other Services</h5>\n        </div>\n        <div class=\"pricing-content row justify-content-center\">\n          <div class=\"pricing-subsction col-lg-10 align-self-center\">\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Nail Removal</p>\n              <p class=\"price\">$10</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Nail Repair</p>\n              <p class=\"price\">$3</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Nail Designs</p>\n              <p class=\"price\">Price starts at $3</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>\n\n    <article class=\"pedicure\">\n      <div class=\"container\">\n        <div class=\"pricing-title\">\n          <h4><span>Pedicures</span></h4>\n        </div>\n        <div class=\"pricing-content row justify-content-center\">\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Basic Spa Pedicure</p>\n                <p class=\"desc\">Treatment consists of a foot soak, nail clipping and shaping, cuticle work, pumice stone/file scrub,\n                  moisturizer, calf and foot massage, a warm towel wrap, and polish.\n                </p>\n              </div>\n              <p class=\"price\">$25</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Peppermint Spa Pedicure</p>\n                <p class=\"desc\">A Basic Spa Pedicure with a peppermint cream mask.</p>\n              </div>\n              <p class=\"price\">$28</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Paraffin Spa Pedicure</p>\n                <p class=\"desc\">A Basic Spa Pedicure which also includes a paraffin wax treatment.</p>\n              </div>\n              <p class=\"price\">$28</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Deluxe Spa Pedicure</p>\n                <p class=\"desc\">A Paraffin Spa Pedicure which also includes a cream mask.</p>\n              </div>\n              <p class=\"price\">$30</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Hot Stone Pedicure</p>\n                <p class=\"desc\">A Basic Spa Pedicure which also includes a hot stone massage.</p>\n              </div>\n              <p class=\"price\">$28</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Deluxe Hot Stone Pedicure</p>\n                <p class=\"desc\">In addition to a Hot Stone Pedicure, you will also receive a pariffin wax, cream mask, moisturizer,\n                  and a sugar scrub. These four additions will be a scent of your choice.</p>\n              </div>\n              <p class=\"price\">$40</p>\n            </div>\n            <div class=\"scents\">\n              <div class=\"item-name\">\n                <p>Deluxe Hot Stone Scents</p>\n                <p class=\"desc\">Choose only one:</p>\n                <div class=\"scent-list\">\n                  <ul>\n                    <li>Aloe Vera</li>\n                    <li>Cucumber</li>\n                    <li>Lavender</li>\n                    <li>Milk & Honey</li>\n                    <li>Orange</li>\n                    <li>Sensual Rose</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>\n\n    <article class=\"manicure\">\n      <div class=\"container\">\n        <div class=\"pricing-title\">\n          <h4><span>Manicures</span></h4>\n        </div>\n        <div class=\"pricing-content row justify-content-center\">\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Basic Spa Manicure</p>\n                <p class=\"desc\">Treatment consists of a hand soak, nail clipping and shaping, cuticle work, moisturizer,\n                   hand and forearm massage, a warm towel wrap, and polish.\n                </p>\n              </div>\n              <p class=\"price\">$15</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Deluxe Spa Manicure</p>\n                <p class=\"desc\">A Basic Spa Manicure treatment which also includes a sugar scrub and paraffin wax treatment.</p>\n              </div>\n              <p class=\"price\">$20</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>\n\n    <article class=\"waxing\">\n      <div class=\"container\">\n        <div class=\"pricing-title\">\n          <h4><span>Waxing</span></h4>\n        </div>\n        <div class=\"pricing-content row justify-content-center\">\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Eyebrows</p>\n              <p class=\"price\">$8</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Lip</p>\n              <p class=\"price\">$6</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Chin</p>\n              <p class=\"price\">$8</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Face</p>\n                <p class=\"desc\">Forehead, eyebrows, cheeks, sideburns, lip, and chin.</p>\n              </div>\n              <p class=\"price\">$30</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Underarms</p>\n              <p class=\"price\">Price starts at $15</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Half Arms</p>\n              <p class=\"price\">Price starts at $20</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Full Arms</p>\n              <p class=\"price\">Price starts at $35</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Half Legs</p>\n              <p class=\"price\">Price starts at $35</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Full Legs</p>\n              <p class=\"price\">Price starts at $50</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <p class=\"item-name\">Back</p>\n              <p class=\"price\">$35</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>\n\n    <article class=\"kids\">\n      <div class=\"container\">\n        <div class=\"pricing-title\">\n          <h4><span>Just For Kids</span></h4>\n        </div>\n          <p class=\"subtitle-text\">Kids can enjoy a day at the spa too! Must be 10 years of age and under.</p>\n        <div class=\"pricing-content row justify-content-center\">\n          <div class=\"pricing-subsction col-lg-10\">\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Basic Spa Manicure</p>\n              </div>\n              <p class=\"price\">$10</p>\n            </div>\n            <div class=\"pricing-item-single\">\n              <div class=\"item-name\">\n                <p>Basic Spa Pedicure</p>\n              </div>\n              <p class=\"price\">$20</p>\n            </div>\n            <div class=\"header\">\n              <p></p>\n              <p class=\"heading\">Hands</p>\n              <p class=\"heading\">Feet</p>\n            </div>\n            <div class=\"pricing-item\">\n              <p class=\"item-name\">Nail Polish</p>\n              <p class=\"price\">$4</p>\n              <p class=\"price\">$6</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>\n</section>\n"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pricing',
            template: __webpack_require__("./src/app/components/pricing/pricing.component.html"),
            styles: [__webpack_require__("./src/app/components/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/***/ (function(module, exports) {

module.exports = "/*Why styles section*/\r\n.block {\r\n  max-width: 475px;\r\n}\r\n.intro {\r\n  margin-bottom: 17px;\r\n}\r\n/*Services styles section*/\r\n.services {\r\n  background-color: whitesmoke;\r\n}\r\n.icon-pic img {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.icon-title h4 {\r\n  margin-top: 30px;\r\n  margin-bottom: 0;\r\n}\r\narticle p {\r\n  margin-top: 15px;\r\n  margin-bottom: 0;\r\n}\r\na {\r\n  padding: 0;\r\n}\r\n.nails, .pedi {\r\n  border-bottom: .5px solid black;\r\n}\r\n.nails, .mani {\r\n  border-right: .5px solid black;\r\n}\r\n.content {\r\n  margin-top: 35px;\r\n}\r\n.divider {\r\n  margin: 0 auto;\r\n}\r\narticle {\r\n  padding: 40px 32px;\r\n}\r\n.services a > * {\r\nposition: relative;\r\n}\r\n.services a::before {\r\n  position: absolute;\r\n  content: '';\r\n  background: white;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -webkit-box-shadow: 0 0 22px rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 0 22px rgba(0, 0, 0, 0.1);\r\n  opacity: 0;\r\n  -webkit-transition: .5s;\r\n  transition: .5s;\r\n}\r\n.services a:hover {\r\n  z-index: 1;\r\n}\r\n.services a:hover::before {\r\n\twidth: 104%;\r\n\theight: 104%;\r\n\topacity: 1;\r\n}\r\n/* For laptops or smaller: */\r\n@media only screen and (max-width: 767px) {\r\n    article {\r\n        padding: 20px;\r\n    }\r\n\r\n    .nails, .pedi, .mani {\r\n      border: none;\r\n    }\r\n}\r\n/* For desktops: */\r\n@media only screen and (max-width: 990px) {\r\n    .why-body {\r\n      margin-bottom: 50px;\r\n    }\r\n}\r\n/* For widescreens */\r\n@media only screen and (min-width: 1200px) {\r\n  .content {\r\n    margin-top: 60px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-page-title\">\n  <div class=\"container\">\n    <h1 class=\"page-title\">Services</h1>\n  </div>\n</section>\n\n<section class=\"breadcrumb-section\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Services</li>\n    </ol>\n  </nav>\n\n</section>\n\n<!--Why clients choose us section-->\n<section class=\"section why\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"why-body col-lg-6\">\n        <div class=\"block\">\n          <h2>Why our clients choose us</h2><br>\n\n          <span class=\"divider\"></span>\n\n          <p class=\"intro\">We take pride in what we do and believe our work speaks for itself.</p>\n          <p>We have a reputation for offering high quality service at a competitive price. </p>\n        </div>\n      </div>\n\n      <div class=\"why-pic col-lg-6\">\n        <img class=\"w-100\" src=\"https://i.pinimg.com/originals/ab/c2/cf/abc2cfa39ee1f8aebba6a605870cccf7.png\" alt=\"why image\">\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section services text-center\">\n  <div class=\"container\">\n    <h2>Our Services</h2>\n\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"divider-lg\"></div>\n    </div>\n\n    <div class=\"text\">\n      <p>We offer a complete range of nail services including dipping powders, gel polish, nail repair and more. Click the pictures below for additional information and pricing.</p>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"row justify-content-center\">\n        <a class=\"col-md-6 nails\" routerLink=\"/pricing\">\n          <article>\n            <div class=\"icon-pic\">\n              <img src=\"https://us.123rf.com/450wm/lineartestpilot/lineartestpilot1603/lineartestpilot160335288/53911604-freehand-textured-cartoon-nail.jpg?ver=6\" alt=\"nail pic\">\n            </div>\n            <div class=\"icon-title\">\n              <h4>Nails</h4>\n            </div>\n            <p>For nail enhancements we offer artificial nails and dipping powders, with a vast array of polish to choose from.</p>\n          </article>\n        </a>\n\n        <a class=\"col-md-6 pedi\" routerLink=\"/pricing\">\n          <article>\n            <div class=\"icon-pic\">\n              <img src=\"https://media.istockphoto.com/vectors/female-legs-barefoot-with-hands-holding-the-ankle-side-view-vector-vector-id1005850290\" alt=\"pedi pic\">\n            </div>\n            <div class=\"icon-title\">\n              <h4>Pedicures</h4>\n            </div>\n            <p>Choose from a variety of packages. We offer basic pedicures or go all out with our Deluxe Hot Stone Pedicure.</p>\n          </article>\n        </a>\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <a class=\"col-md-6 mani\" routerLink=\"/pricing\">\n          <article>\n            <div class=\"icon-pic\">\n              <img src=\"https://images.cdn2.stockunlimited.net/preview1300/female-hand_1319784.jpg\" alt=\"mani pic\">\n            </div>\n            <div class=\"icon-title\">\n              <h4>Manicures</h4>\n            </div>\n            <p>Manicures include a hand soak, cuticle work, hand and arm massage, a warm towel wrap and nail polish.</p>\n          </article>\n        </a>\n\n        <a class=\"col-md-6 wax\" routerLink=\"/pricing\">\n          <article>\n            <div class=\"icon-pic\">\n              <img src=\"http://laoblogger.com/images/clip-art-honey-2.jpg\" alt=\"wax pic\">\n            </div>\n            <div class=\"icon-title\">\n              <h4>Waxing</h4>\n            </div>\n            <p>Wax any part of your face, arms, legs, or back.</p>\n          </article>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/components/services/services.component.html"),
            styles: [__webpack_require__("./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map