function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account-form/account-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-form/account-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountFormAccountFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h6>Add a new account to track here.</h6>\n    <div class=\"card my-5\">\n        <div class=\"card-body\">\n            <form (ngSubmit)=\"onSubmit()\" #accountForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"accountName\">Account Name</label>\n                    <input type=\"text\" [(ngModel)]=\"account.accountName\" class=\"form-control\" id=\"accountName\" name=\"accountName\" placeholder=\"Enter a name for your account\" required #accountName=\"ngModel\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"type\">Account Type</label>\n                    <input type=\"text\" [(ngModel)]=\"account.type\" class=\"form-control\" id=\"type\" name=\"type\" placeholder=\"Enter the account type\" required #type=\"ngModel\">\n                </div>\n                <div [hidden]=\"!type.pristine\" class=\"alert alert-danger\">Account Type is required</div>\n                <div class=\"form-group\">\n                    <label for=\"balance\">Initial Balance</label>\n                    <input type=\"text\" [(ngModel)]=\"account.balance\" class=\"form-control\" id=\"balance\" name=\"balance\" placeholder=\"Enter your Initial Balance\" required #balance=\"ngModel\">\n                    <div [hidden]=\"!balance.pristine\" class=\"alert alert-danger\">Initial Balance is required</div>\n                </div>\n                <button type=\"submit\" [disabled]=\"!accountForm.form.valid\" class=\"btn btn-info\">Submit</button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account-list/account-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-list/account-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountListAccountListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-header\">\n    <h1>My Accounts</h1>\n</div>\n<div class=\"container\">\n\n    <br>\n    <br>\n    <div class=\"row\">\n        <a *ngFor=\"let account of accounts\" routerLink=\"/accountsOverview/{{account.accountNumber}}\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\" style=\"width: 14rem;\">\n                    <div class=\"card-header card-header-warning card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\" style=\"background-color:transparent;\">content_copy</i>\n                        </div>\n                        <h3 class=\"card-title\">{{account.accountName}}\n                        </h3>\n                        <p class=\"card-category\">{{account.type}}</p>\n\n                        <small class=\"text\"></small>\n                    </div>\n                    <div class=\"card-footer white\" id=\"card-footer\" style=\"height: 3rem;\">\n\n                        <div id=\"colLeft\">Balance:\n                        </div>\n                        <div id=\"colwrap\">\n                            <div id=\"colRight\">${{account.balance}}</div>\n                            <div id=\"colCenter\" class=\"footText\"></div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </a>\n\n    </div>\n</div>\n<div class=\"container\">\n\n    <button type=\"button\" class=\"btn\" routerLink=\"/addaccounts\">Add Additional Accounts</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account-overview/account-overview.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-overview/account-overview.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountOverviewAccountOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <body>\n        <div *ngIf=\"account\">\n\n            <h2>{{account.accountName | uppercase}} Details</h2>\n            <div class=\"d-flex\">\n                <div>\n                    Account Type:\n                </div>\n                <div class=\"ml-auto\">\n                    <p class=\"font-italic\">\n                        {{account.type}}\n                    </p>\n                </div>\n            </div>\n            <div class=\"d-flex\">\n                <div>\n                    Available Balance:\n                </div>\n                <div class=\"ml-auto\">\n                    {{account.balance}}\n                </div>\n            </div>\n            Transaction History:\n            <app-transaction-list-by-account></app-transaction-list-by-account>\n        </div>\n\n        <div class=\"container\">\n            <!-- Trigger the modal with a button -->\n            <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Remove\n      Account</button>\n\n            <!-- Modal -->\n            <div class=\"modal fade grey\" id=\"myModal\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n\n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n\n                            <h4 class=\"modal-title\">Confirm Account Removal</h4>\n                        </div>\n                        <div class=\"modal-body\">\n                            <p>All records of this account will be removed, and removal cannot be undone. Are you sure you would like to remove this account from your profile? </p>\n                        </div>\n                        <div class=\"modal-footer\">\n\n                            <button type=\"button z-depth-5\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                            <button type=\"button z-depth-5\" class=\"btn btn-default\" (click)=\"remove(account.accountNumber)\" data-dismiss=\"modal\">Remove Account</button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n    </body>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>account works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header *ngIf=\"!displayPreLoginHeader()\"></app-header>\n<app-dashboard *ngIf=\"displayDashboard()\"></app-dashboard>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bill-details/bill-details.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill-details/bill-details.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillDetailsBillDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n\n\n\n    <div class=\"container\">\n        <div *ngIf=\"bill\">\n\n            <table class=\"child\">\n                <thead>\n                    <th>\n                        {{bill.name}} Details\n                    </th>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>Provider: </td>\n                        <td>{{bill.recipient}}</td>\n                    </tr>\n                    <tr>\n                        <td>Service: </td>\n                        <td>{{bill.purpose}}</td>\n                    </tr>\n                    <tr>\n                        <td>Current Balance: </td>\n                        <td>{{bill.amount}}</td>\n                    </tr>\n                    <tr>\n                        <td>Date Due: </td>\n                        <td>{{bill.initialBillDate}}</td>\n                    </tr>\n\n                </tbody>\n\n\n            </table>\n\n        </div>Ï\n    </div>\n</div>\n<div class=\"container\">\n    <!-- Trigger the modal with a button -->\n    <button type=\"button\" id=\"modalButton\" class=\"btn btn-info btn-md\" data-toggle=\"modal\" data-target=\"#myModal\">Remove\n        Bill</button>\n    <button type=\"button\" id=\"payButton\" class=\"btn btn-info btn-md\">Mark bill as paid</button>\n    <button type=\"button\" id=\"payButton\" class=\"btn btn-info btn-md\">Mark paid from acct.</button>\n\n    <!-- Modal -->\n    <div class=\"modal fade grey\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n\n                    <h4 class=\"modal-title\">Confirm Bill Removal</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>All records of this bill will be removed, and removal cannot be undone. Are you sure you would like to remove this bill from your tracking service? </p>\n                </div>\n                <div class=\"modal-footer\">\n\n                    <button type=\"button z-depth-5\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                    <button type=\"button z-depth-5\" class=\"btn btn-default\" (click)=\"remove(bill.billId)\" data-dismiss=\"modal\">Remove Bill</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bill-form/bill-form.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill-form/bill-form.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillFormBillFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bill-list/bill-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill-list/bill-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillListBillListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h4>My Bill Tracker</h4>\n</div>\n\n<div class=\"container\">\n    <div class=\"underHeaderDesign\"></div>\n    <!--Table-->\n    <table id=\"tablePreview\" class=\"table table-hover table-striped\">\n        <!--Table head-->\n        <thead>\n            <tr>\n\n                <th style=\"width: 100px\">Company</th>\n                <th style=\"width: 100px\">Utility</th>\n                <th style=\"width: 100px\">Amount Due</th>\n                <th style=\"width: 100px\">Payment Due Date</th>\n            </tr>\n        </thead>\n        <!--Table head-->\n        <!--Table body-->\n        <tbody>\n            <tr *ngFor=\"let bill of bills\" (click)=\"storeNumber(bill.billId)\" class=\"panel\" [ngStyle]=\"{'background-color': lateCheck(bill.initialBillDate)? 'lightCoral' : ''}\">\n                <td class=\"datarow\" style=\"width: 100px\">{{bill.recipient}}</td>\n                <td class=\"datarow\" style=\"width: 100px\">{{bill.purpose}}</td>\n                <td class=\"datarow\" style=\"width: 100px\">${{bill.amount}}</td>\n                <td class=\"datarow\" style=\"width: 100px\">{{bill.initialBillDate|date}}</td>\n\n            </tr>\n\n\n\n\n        </tbody>\n        <!--Table body-->\n    </table>\n    <button type=\"button\" routerLink=\"/addbill\">Add Bill</button>\n</div>\n<!--Table-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillBillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>bill works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactFormContactFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-group\">\n\n    <div class=\"form-group\">\n      <fieldset class=\"pure-group\">\n        <label for=\"name\">Name: </label>\n        <input id=\"name\" placeholder=\"Full Name\" />\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <label for=\"email\"><em>Your</em> Email Address:</label>\n        <input id=\"email\" type=\"email\" value=\"\"\n        required placeholder=\"your.name@email.com\"/>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <label for=\"message\">Message: </label>\n        <textarea id=\"message\" cols=\"30\" rows=\"10\" class=\"form-control\"\n        placeholder=\"Tell us what's on your mind...\"></textarea>\n      </fieldset>\n\n      <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Send</button>\n    </div>\n\n\n    <div class=\"modal fade grey\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n\n                    <h4 class=\"modal-title\">Thank you for your meesage!</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>We appreciate your feedback. </p>\n                </div>\n                <div class=\"modal-footer\">\n\n                    <button type=\"button z-depth-5\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/deposit-form/deposit-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deposit-form/deposit-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDepositFormDepositFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container'>\n\n    <form [formGroup]=\"depositForm\" (ngSubmit)=\"onSubmit();\">\n        <br>\n        <br>\n        <h5>Select an account for deposit</h5>\n\n        <select class=\"form-control form-control-lg\" formControlName=\"accountId\">\n    \n            <option *ngFor=\"let account of accounts\" [value]=\"account.accountNumber\">{{account.accountName}}  ({{account.type}})\n            </option>\n        </select>\n\n        <div>\n            <label>Amount</label>\n            <input type=\"text\" class=\"form-control\" [value]=0 formControlName=\"amount\">\n        </div>\n\n        <br>\n        <button class=\"btn btn-primary\" [disabled]=\"!depositForm.valid\">Submit</button>\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/info/about-us/about-us.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/about-us/about-us.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInfoAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <h1>About Us</h1>\n    <p>Flip Coin is a money management application developed by four students at Zip Code Wilmington. \n        Flip Coin allows you to manage your money, track spending, and prioritize your bill payments all in one place.\n        If you have any questions, please see our <a href=\"help\">frequently asked questions</a> or <a href=\"contact\">contact us</a> directly.\n    </p>\n    <p>Thank you,</p>\n    <p>Flip Coin Team</p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/info/contact/contact.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/contact/contact.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInfoContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <h1>Contact</h1>\n    <app-contact-form></app-contact-form>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/info/help/help.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/help/help.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInfoHelpHelpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <div class=\"container\">\n    <h1>FAQ</h1>\n    <p>Sorry I can't help you</p>\n</div> -->\n<div class=\"faq\">\n    <h1>Frequently Asked Questions</h1>\n\n    <h3 class=\"question\">Who developed this application?</h3>\n    <div class=\"answer\">Chung Arguello, Brian Patterson, Usha Kunapareddy and Julia Evans.</div>\n\n    <h3 class=\"question\">Is this a banking application?</h3>\n    <div class=\"answer\">No, Flip Coin is a money manangement application.</div>\n\n    <h3 class=\"question\">How does it work?</h3>\n    <div class=\"answer\">Simply register as a user, add any accounts that you would like to manage and Flip Coin will track any deposits, withdrawals, or transfers made.</div>\n\n    <h3 class=\"question\">Can I track upcoming bills?</h3>\n    <div class=\"answer\">Yes, once you are logged in just click bill tracking, and add the bill you would like to track.</div>\n\n    <h3 class=\"question\">Can I manage my spending?</h3>\n    <div class=\"answer\">Yes, under the lists tab you can enter any spending or saving goals you might have.</div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/dashboard/dashboard.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/dashboard/dashboard.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"headerContainer\">\n    <header id=\"header\">\n        <div class=\"container\">\n\n            <div id=\"logo\" class=\"pull-left\">\n                <h1><a href=\"#intro\" class=\"scrollto\">Flip Coin</a></h1>\n                <a href=\"#intro\"><img src=\"img/logo.png\" alt=\"\" title=\"\" /></a>\n            </div>\n\n            <nav id=\"nav-menu-container grey\">\n                <ul class=\"nav-menu\">\n                    <li><a routerLink=\"/login\" (click)=\"logout()\">Log Out</a></li>\n                    <li><a routerLink=\"/notes\">Lists</a></li>\n                    <li><a routerLink=\"/newTransaction\">Transaction</a></li>\n                    <li><a routerLink=\"/accounts\">Account</a></li>\n                    <li><a routerLink=\"/billtracker\">Bill Tracking</a></li>\n                    <li><a routerLink=\"/profile\">Profile</a></li>\n                    <li><a routerLink=\"/logged-in\">Home</a></li>\n                </ul>\n            </nav>\n\n        </div>\n    </header>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/footer/footer.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/footer/footer.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"fixed-bottom font-small pt-4\" id=\"footer-color\">\n\n    <div class=\"container\">\n\n        <!-- Grid row-->\n        <div class=\"row text-center d-flex justify-content-center pt-4 mb-3\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-2 mb-3\">\n                <h6 class=\"text-uppercase font-weight-bold\">\n                    <a href=\"/registration\">Register</a>\n                </h6>\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-2 mb-3\">\n                <h6 class=\"text-uppercase font-weight-bold\">\n                    <a routerLink=\"/about\">About us</a>\n                </h6>\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-2 mb-3\">\n                <h6 class=\"text-uppercase font-weight-bold\">\n                    <a routerLink=\"/help\">Help</a>\n                </h6>\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-2 mb-3\">\n                <h6 class=\"text-uppercase font-weight-bold\">\n                    <a routerLink=\"/contact\">Contact</a>\n                </h6>\n            </div>\n            <!-- Grid column -->\n\n        </div>\n        <!-- Grid row-->\n        <hr style=\"margin: 0 15%; border-top-color: #18d26e;\">\n\n    </div>\n\n    <div class=\"footer-copyright text-center py-3\">&copy; 2020 Copyright:\n        <!-- add href to home page -->\n        <a href=\"\">FlipCoin.com</a>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/header/header.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/header/header.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"headerContainer\">\n    <header id=\"header\">\n        <div class=\"container\">\n\n            <div id=\"logo\" class=\"pull-left\">\n                <img class=\"image\" src=\"https://img.icons8.com/wired/64/000000/money-box.png\">\n                <h1><a href=\"#intro\" class=\"scrollto\">Flip Coin</a></h1>\n                \n            </div>\n\n            <nav id=\"nav-menu-container grey\">\n                <ul class=\"nav-menu\">\n                    <li><a routerLink=\"/login\">Login</a></li>\n                    <li><a routerLink=\"/registration\">Register</a></li>\n                </ul>\n            </nav>\n\n        </div>\n    </header>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <h1><b>User Login</b></h1>\n    <hr style=\"margin: 0 15%; border-top-color: #18d26e;\">\n\n    <form #it=\"ngForm\" (ngSubmit)=\"loginForm()\">\n\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" type=\"username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"login.username\" \n                    #username=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <!-- type password being stupid -->\n            <input type=\"text\" type=\"\" name=\"password\" class=\"form-control\" [(ngModel)]=\"login.password\" \n                    #password=\"ngModel\" required>\n        </div>\n        <button type=\"submit\" class=\"btn\" [disabled]=\"!it.form.valid\">Log in</button>\n\n    </form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/make-transaction/make-transaction.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/make-transaction/make-transaction.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMakeTransactionMakeTransactionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" (click)=\"depositView()\">Deposit</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" (click)=\"withdrawView()\">Withdraw</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" (click)=\"transferView()\">Transfer between Accounts</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" (click)=\"otherView()\">Transfer to User</a>\n        </li>\n\n    </ul>\n</div>\n<div class=\"container\" *ngIf=\"deposit === true\">\n    <app-deposit-form></app-deposit-form>\n</div>\n<div class=\"container\" *ngIf=\"withdraw === true\">\n    <app-withdraw-form></app-withdraw-form>\n</div>\n<div class=\"container\" *ngIf=\"transfer === true\">\n    <app-transfer-form></app-transfer-form>\n</div>\n<div class=\"container\" *ngIf=\"other === true\">\n    <app-transfer-other></app-transfer-other>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/logged-in-container/logged-in-container.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/logged-in-container/logged-in-container.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostLogComponentsLoggedInContainerLoggedInContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" id=\"welcomeBox\">\n    <p class=\"welcome\">Welcome back, {{user.firstName}} {{user.lastName}}</p>\n    <p class=\"lastLogin\">Last login, {{user.lastLogin | date : 'medium' }} </p>\n</div>\n<div class=\"container\">\n    <div class=\"homeHeader\">\n        <h2>{{user.username}} Account Overview</h2>\n    </div>\n    <div class=\"underHeaderDesign\"></div>\n</div>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"bg-light border-right, col-3\" id=\"sidebar-wrapper\">\n            <h3>Accounts</h3>\n            <div class=\"list-group list-group-flush\" *ngFor=\"let account of accounts\">\n                <a (click)=\"getTransactions(account.accountNumber)\"\n                    class=\"list-group-item list-group-item-action bg-light\">\n                    <ul>\n                        <li>{{account.accountName}}</li>\n                        <li>Balance: ${{account.balance}}</li>\n                    </ul>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"col\">\n\n            <table class=\"table table-bordered table-striped\">\n                <thead class=\"head\">\n                    <tr>\n                        <th scope=\"col\">Date</th>\n                        <th scope=\"col\">Description</th>\n                        <th scope=\"col\">Amount</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let transaction of transactions\" >\n                        <td>{{ transaction.transactionDate | date: 'MM/dd/yyy' }}</td>\n                        <td>{{ transaction.type }}</td>\n                        <td>${{ transaction.amount }}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/notes/notes.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/notes/notes.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostLogComponentsNotesNotesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container'>\n\n    <h1>List of Goals</h1>\n\n\n    <table class=\"table table-bordered lightgreen\">\n        <thead>\n            <th>Create Note</th>\n        </thead>\n        <tr>\n            <td>\n                <form #it=\"ngForm\" (ngSubmit)=\"saveNote()\">\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" type=\"text\" rows=\"2\" name=\"note\" [(ngModel)]=\"newNote.note\"\n                            #note=\"ngModel\" placeholder=\"Type note here\" required></textarea>\n                    </div>\n\n                    <button type=\"submit\" [disabled]=\"!it.form.valid\" class=\"btn btn-dark\">Submit</button>\n                </form>\n            </td>\n        </tr>\n\n    </table>\n\n\n\n    <table class=\"table table-bordered\">\n        <thead>\n            <th>Goal</th>\n            <th>Date</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let note of notes\">\n                <td *ngIf=\"note.noteId === editRowId\">\n                    <form #it=\"ngForm\" (ngSubmit)=\"updateNote()\">\n                        <input type=\"text\" name=\"note\" [(ngModel)]=\"updateTheNote.note\" #note=\"ngModel\">\n                        <button class=\"btn btn-sm \" type=\"submit\" style=\"font-size:12px\">Update</button>\n                    </form>\n                </td>\n\n                <td *ngIf=\"note.noteId !== editRowId\" (click)=\"Edit(note.noteId)\">{{note.note}}</td>\n                <td>{{note.noteDate | date : 'mediumDate'}}</td>\n                <td class=\"deleteButton\">\n                    <button class=\"btn btn-sm \" (click)=\"deleteNote(note.noteId)\" type=\"button\"\n                        style=\"font-size:12px\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/user-profile-form/user-profile-form.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/user-profile-form/user-profile-form.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostLogComponentsUserProfileFormUserProfileFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h4><b>Edit Profile</b></h4>\n    <hr style=\"margin: 0 15%; border-top-color: #18d26e;\">\n\n    <form #it=\"ngForm\" (ngSubmit)=\"updateForm()\">\n\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" type=\"username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"profile.username\"\n                #username=\"ngModel\" placeholder=\"{{profile.username}}\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <!-- type password being stupid -->\n            <input type=\"text\" type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"profile.password\"\n                #password=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>First Name</label>\n            <input type=\"text\" type=\"firstName\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"profile.firstName\"\n                #firstName=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" type=\"lastName\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"profile.lastName\"\n                #lastName=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" type=\"userEmail\" name=\"email\" class=\"form-control\" [(ngModel)]=\"profile.email\"\n                #email=\"ngModel\" required>\n        </div>\n        <button type=\"submit\" class=\"btn\" [disabled]=\"!it.form.valid\">Update</button>\n        \n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/user-profile/user-profile.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/user-profile/user-profile.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostLogComponentsUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    \n    <table class=\"child\">\n        <thead>\n            <th>\n                Profile\n            </th>\n        </thead>\n        <tbody>\n            <tr>\n                <td>ID: </td>\n                <td>{{profile.userId}}</td>\n            </tr>\n            <tr>\n                <td>Username: </td>\n                <td>{{profile.username}}</td>\n            </tr>\n            <tr>\n                <td>First Name: </td>\n                <td>{{profile.firstName}}</td>\n            </tr>\n            <tr>\n                <td>Last Name: </td>\n                <td>{{profile.lastName}}</td>\n            </tr>\n            <tr>\n                <td>Email: </td>\n                <td>{{profile.email}}</td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td>\n                  <button (click)=\"editMode()\" type=\"button\" class=\"btn\" >{{editButton}}</button>  \n                </td>\n            </tr>\n        </tfoot>\n\n    </table>\n    <app-user-profile-form *ngIf=\"edit === true\" class=\"child\"></app-user-profile-form>\n    \n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h1><b>User Registration</b></h1>\n    <hr style=\"margin: 0 15%; border-top-color: #18d26e;\">\n\n    <form #it=\"ngForm\" (ngSubmit)=\"registerForm()\">\n\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" type=\"username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"newUser.username\"\n                #username=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <!-- type password being stupid -->\n            <input type=\"text\" type=\"\" name=\"password\" class=\"form-control\" [(ngModel)]=\"newUser.password\"\n                #password=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>First Name</label>\n            <input type=\"text\" type=\"firstName\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"newUser.firstName\"\n                #firstName=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" type=\"lastName\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"newUser.lastName\"\n                #lastName=\"ngModel\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\"  type=\"userEmail\" name=\"email\" class=\"form-control\" [(ngModel)]=\"newUser.email\"\n                #email=\"ngModel\" required>\n        </div>\n        <button type=\"submit\" class=\"btn\" [disabled]=\"!it.form.valid\">register</button>\n\n    </form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-details/transaction-details.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-details/transaction-details.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionDetailsTransactionDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n  <body>\n    <h2>Transaction Details</h2> \n\n    <hr/>\n    \n    <div *ngIf=\"transaction\">\n      <div>\n        <label><b>Transaction ID: </b></label> {{transaction.transactionId}}\n      </div>\n      <div>\n        <label><b>Transaction Date: </b></label> {{transaction.transactionDate | date: 'MM/dd/yyyy'}}\n      </div>\n      <div>\n        <label><b>Description: </b></label> {{transaction.type}}\n      </div>  \n      <div>\n        <label><b>Amount: </b></label> ${{transaction.amount}}\n      </div> \n    </div>\n\n\n<br>\n<br>\n<button (click)=\"list()\" class=\"btn btn-primary\">Back to Accounts</button><br>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list-by-account/transaction-list-by-account.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list-by-account/transaction-list-by-account.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionListByAccountTransactionListByAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-body\">\n    <table class=\"table table-bordered table-striped\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Date</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Amount</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let transaction of transactions\">\n                <td><button (click)=\"onClick2(transaction.transactionId)\" type=\"button\">{{ transaction.transactionId }}</button></td>\n                <td>{{ transaction.transactionDate | date: 'MM/dd/yyy' }}</td>\n                <td>{{ transaction.type }}</td>\n                <td>${{ transaction.amount }}</td>\n\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionListTopByUserTransactionListTopByUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card my-5\">\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-striped\">\n        <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Date</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Amount</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let transaction of transactionsUser\" routerLink=\"transactions-user\">\n          <td>{{ transaction.transactionDate | date: 'MM/dd/yyy' }}</td>\n          <td>{{ transaction.type }}</td>\n          <td>${{ transaction.amount }}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list/transaction-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list/transaction-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionListTransactionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>transaction-list works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionsTransactionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>transactions works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-form/transfer-form.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-form/transfer-form.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransferFormTransferFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container'>\n\n    <form [formGroup]=\"transferForm\" (ngSubmit)=\"onSubmit();\">\n        <br>\n        <br>\n        <h5>Select an account from which to send funds.</h5>\n\n        <select class=\"form-control form-control-lg\" formControlName=\"accountId\">\n        \n                <option *ngFor=\"let account of accounts\" [value]=\"account.accountNumber\">{{account.accountName}}  ({{account.type}})\n                </option>\n            </select>\n\n        <div>\n            <label>How much would you like to transfer?</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"amount\">\n        </div>\n\n        <h5>Select the account you wish to transfer to.</h5>\n        <select class=\"form-control form-control-lg\" formControlName=\"recipientId\">\n                <option *ngFor=\"let account of accounts\" [value]=\"account.accountNumber\">{{account.accountName}}  ({{account.type}})\n                </option>\n        </select>\n\n        <br>\n        <button class=\"btn btn-primary\" [disabled]=\"!transferForm.valid\">Submit</button>\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-other/transfer-other.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-other/transfer-other.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransferOtherTransferOtherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container'>\n\n    <form [formGroup]=\"otherForm\" (ngSubmit)=\"onSubmit();\">\n        <br>\n        <br>\n        <h5>Select an account from which to send funds.</h5>\n\n        <select class=\"form-control form-control-lg\" formControlName=\"accountId\">\n            \n                    <option *ngFor=\"let account of accounts\" [value]=\"account.accountNumber\">{{account.accountName}}  ({{account.type}})\n                    </option>\n                </select>\n\n        <div>\n            <label>How much would you like to transfer?</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"amount\">\n        </div>\n        <div>\n            <label>Enter the account number of the account to receive these funds</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"recipientId\">\n        </div>\n\n        <br>\n        <button class=\"btn btn-primary\" [disabled]=\"!otherForm.valid\">Submit</button>\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw-form/withdraw-form.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw-form/withdraw-form.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWithdrawFormWithdrawFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container'>\n\n    <form [formGroup]=\"withdrawForm\" (ngSubmit)=\"onSubmit();\">\n        <br>\n        <br>\n        <h5>Select an account for withdrawal</h5>\n\n        <select class=\"form-control form-control-lg\" formControlName=\"accountId\">\n        \n                <option *ngFor=\"let account of accounts\" [value]=\"account.accountNumber\">{{account.accountName}}  ({{account.type}})\n                </option>\n            </select>\n\n        <div>\n            <label>Amount</label>\n            <input type=\"text\" class=\"form-control\" [value]=\"\" formControlName=\"amount\" placeholder=\"0\">\n        </div>\n\n        <br>\n        <button class=\"btn btn-primary\" [disabled]=\"!withdrawForm.valid\">Submit</button>\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/account-form/account-form.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/account-form/account-form.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountFormAccountFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtZm9ybS9hY2NvdW50LWZvcm0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account-form/account-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/account-form/account-form.component.ts ***!
    \********************************************************/

  /*! exports provided: AccountFormComponent */

  /***/
  function srcAppAccountFormAccountFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountFormComponent", function () {
      return AccountFormComponent;
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


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../account/account.component */
    "./src/app/account/account.component.ts");

    var AccountFormComponent =
    /*#__PURE__*/
    function () {
      function AccountFormComponent(route, router, accountService) {
        _classCallCheck(this, AccountFormComponent);

        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.account = new _account_account_component__WEBPACK_IMPORTED_MODULE_4__["Account"]();
      }

      _createClass(AccountFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.account.userId = parseInt(sessionStorage.getItem('userId')); //this.account.userId = sessionStorage.getItem('userId');

          this.accountService.save(this.account).subscribe(function (data) {
            return _this.gotoAccountsList();
          });
          console.log(sessionStorage.getItem('userId'));
          console.log(this.account);
        }
      }, {
        key: "gotoAccountsList",
        value: function gotoAccountsList() {
          this.router.navigateByUrl('accounts');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountFormComponent;
    }();

    AccountFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }];
    };

    AccountFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account-form/account-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-form.component.css */
      "./src/app/account-form/account-form.component.css")).default]
    })], AccountFormComponent);
    /***/
  },

  /***/
  "./src/app/account-list/account-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/account-list/account-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountListAccountListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n    display: flex;\n    height: 100%;\n}\n\n.container-header {\n    text-align: center;\n}\n\n.card-footer {\n    padding: 0px 15px 15px;\n}\n\n.card-footer {\n    background: rgb(29, 196, 0);\n    background: linear-gradient(90deg, rgba(29, 196, 0, 1) 0%, rgba(152, 255, 166, 1) 0%, rgba(193, 255, 183, 1) 36%, rgba(139, 255, 156, 1) 79%, rgba(61, 255, 118, 1) 100%);\n    display: inline-block;\n    border-bottom-left-radius: 28px;\n    border-bottom-right-radius: 28px;\n}\n\nhr {\n    margin-top: 10px;\n    margin-bottom: 15px;\n}\n\n.icon-big {\n    font-size: 3em;\n    min-height: 64px;\n}\n\n.icon-big i {\n    line-height: 59px;\n}\n\n#footText {\n    color: rgb(29, 196, 0);\n}\n\n.card {\n    color: #000000;\n    border-color: #696969;\n    font-family: Helvetica, Arial, sans-serif;\n    border-radius: 25px;\n}\n\n.card-header {\n    color: #0f0f0f;\n    font-family: Helvetica, Arial, sans-serif;\n    float: right;\n}\n\n.stats {\n    list-style: none;\n    width: 100%;\n    height: 90px;\n    margin: 0;\n    padding: 0;\n    white-space: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n\n.stats>li {\n    display: inline-block;\n    width: 20%;\n    height: 100%;\n    background-color: rgb(235, 235, 235);\n}\n\n#colLeft {\n    background-color: transparent;\n    height: 20px;\n    float: left;\n    margin-top: 10px;\n}\n\n#colwrap {\n    overflow: hidden;\n    background-color: transparent;\n}\n\n#colCenter {\n    color: transparent;\n    height: 10px;\n    margin-top: 10px;\n    margin-bottom: 0px;\n}\n\n#colRight {\n    background-color: transparent;\n    height: 20px;\n    float: right;\n    margin-top: 10px;\n    margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC1saXN0L2FjY291bnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUtBQXlLO0lBQ3pLLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlDQUF5QztJQUN6QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LWxpc3QvYWNjb3VudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTVweCAxNXB4O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSwgMTk2LCAwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjksIDE5NiwgMCwgMSkgMCUsIHJnYmEoMTUyLCAyNTUsIDE2NiwgMSkgMCUsIHJnYmEoMTkzLCAyNTUsIDE4MywgMSkgMzYlLCByZ2JhKDEzOSwgMjU1LCAxNTYsIDEpIDc5JSwgcmdiYSg2MSwgMjU1LCAxMTgsIDEpIDEwMCUpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyOHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyOHB4O1xufVxuXG5ociB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaWNvbi1iaWcge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5pY29uLWJpZyBpIHtcbiAgICBsaW5lLWhlaWdodDogNTlweDtcbn1cblxuI2Zvb3RUZXh0IHtcbiAgICBjb2xvcjogcmdiKDI5LCAxOTYsIDApO1xufVxuXG4uY2FyZCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjk2OTY5O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgY29sb3I6ICMwZjBmMGY7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3RhdHMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5zdGF0cz5saSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbn1cblxuI2NvbExlZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jY29sd3JhcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2NvbENlbnRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuI2NvbFJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account-list/account-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/account-list/account-list.component.ts ***!
    \********************************************************/

  /*! exports provided: AccountListComponent */

  /***/
  function srcAppAccountListAccountListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountListComponent", function () {
      return AccountListComponent;
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


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AccountListComponent =
    /*#__PURE__*/
    function () {
      function AccountListComponent(accountService, route, router, authService) {
        _classCallCheck(this, AccountListComponent);

        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.overview = 1;
      }

      _createClass(AccountListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserAccounts(); //this.accountService.findAll().subscribe(data => {this.accounts = data; 
          //});
        }
      }, {
        key: "getUserAccounts",
        value: function getUserAccounts() {
          var _this2 = this;

          //const id = +this.route.snapshot.paramMap.get('userId');
          this.accountService.getAccountsByUserId().subscribe(function (data) {
            _this2.accounts = data;
          });
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this3 = this;

          this.accountService.remove(id).subscribe(function (result) {
            _this3.gotoAccountsList();
          });
        }
      }, {
        key: "gotoAccountsList",
        value: function gotoAccountsList() {
          this.router.navigate(['accounts']);
        }
      }, {
        key: "onSelect",
        value: function onSelect(account) {
          this.selectedAccount = account;
        }
      }, {
        key: "storeId",
        value: function storeId(id) {
          this.accountService.setStoredId(id);
          this.router.navigateByUrl('accountsOverview');
        }
      }]);

      return AccountListComponent;
    }();

    AccountListComponent.ctorParameters = function () {
      return [{
        type: _services_account_service_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccountListComponent.prototype, "user", void 0);
    AccountListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account-list/account-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-list.component.css */
      "./src/app/account-list/account-list.component.css")).default]
    })], AccountListComponent);
    /***/
  },

  /***/
  "./src/app/account-overview/account-overview.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/account-overview/account-overview.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountOverviewAccountOverviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal {\n    background-color: #2f4353;\n    background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);\n    ;\n}\n\n.btn {\n    background-color: #2f4353;\n    background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC1vdmVydmlldy9hY2NvdW50LW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0VBQWtFOztBQUV0RTs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrRUFBa0U7QUFDdEUiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LW92ZXJ2aWV3L2FjY291bnQtb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNDM1MztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmY0MzUzIDAlLCAjZDJjY2M0IDc0JSk7XG4gICAgO1xufVxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY0MzUzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyZjQzNTMgMCUsICNkMmNjYzQgNzQlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account-overview/account-overview.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/account-overview/account-overview.component.ts ***!
    \****************************************************************/

  /*! exports provided: AccountOverviewComponent */

  /***/
  function srcAppAccountOverviewAccountOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountOverviewComponent", function () {
      return AccountOverviewComponent;
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


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _transaction_list_by_account_transaction_list_by_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../transaction-list-by-account/transaction-list-by-account.component */
    "./src/app/transaction-list-by-account/transaction-list-by-account.component.ts");
    /* harmony import */


    var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");

    var AccountOverviewComponent =
    /*#__PURE__*/
    function () {
      function AccountOverviewComponent(route, router, accountService, transactionService, transactions) {
        _classCallCheck(this, AccountOverviewComponent);

        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.transactions = transactions;
      }

      _createClass(AccountOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAccount();
        }
      }, {
        key: "getAccount",
        value: function getAccount() {
          var _this4 = this;

          this.transactions.getTransactions();
          var id = +this.route.snapshot.paramMap.get('accountId');
          this.accountService.getAccountById(id).subscribe(function (account) {
            return _this4.account = account;
          });
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this5 = this;

          this.accountService.remove(id).subscribe(function (data) {
            _this5.gotoAccountsList();
          });
        }
      }, {
        key: "gotoAccountsList",
        value: function gotoAccountsList() {
          this.router.navigateByUrl('accounts');
        }
      }]);

      return AccountOverviewComponent;
    }();

    AccountOverviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]
      }, {
        type: _transaction_list_by_account_transaction_list_by_account_component__WEBPACK_IMPORTED_MODULE_4__["TransactionListByAccountComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccountOverviewComponent.prototype, "account", void 0);
    AccountOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account-overview/account-overview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-overview.component.css */
      "./src/app/account-overview/account-overview.component.css")).default]
    })], AccountOverviewComponent);
    /***/
  },

  /***/
  "./src/app/account/account.component.css":
  /*!***********************************************!*\
    !*** ./src/app/account/account.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/account/account.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/account/account.component.ts ***!
    \**********************************************/

  /*! exports provided: Account */

  /***/
  function srcAppAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Account", function () {
      return Account;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Account =
    /*#__PURE__*/
    function () {
      function Account() {
        _classCallCheck(this, Account);
      }

      _createClass(Account, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Account;
    }();

    Account = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.component.css */
      "./src/app/account/account.component.css")).default]
    })], Account);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, RoutingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingComponents", function () {
      return RoutingComponents;
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


    var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account-list/account-list.component */
    "./src/app/account-list/account-list.component.ts");
    /* harmony import */


    var _account_form_account_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./account-form/account-form.component */
    "./src/app/account-form/account-form.component.ts");
    /* harmony import */


    var _account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account-overview/account-overview.component */
    "./src/app/account-overview/account-overview.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _info_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./info/contact/contact.component */
    "./src/app/info/contact/contact.component.ts");
    /* harmony import */


    var _info_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./info/about-us/about-us.component */
    "./src/app/info/about-us/about-us.component.ts");
    /* harmony import */


    var _info_help_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./info/help/help.component */
    "./src/app/info/help/help.component.ts");
    /* harmony import */


    var _postLogComponents_logged_in_container_logged_in_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./postLogComponents/logged-in-container/logged-in-container.component */
    "./src/app/postLogComponents/logged-in-container/logged-in-container.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _transaction_list_by_account_transaction_list_by_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./transaction-list-by-account/transaction-list-by-account.component */
    "./src/app/transaction-list-by-account/transaction-list-by-account.component.ts");
    /* harmony import */


    var _postLogComponents_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./postLogComponents/notes/notes.component */
    "./src/app/postLogComponents/notes/notes.component.ts");
    /* harmony import */


    var _transaction_list_top_by_user_transaction_list_top_by_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./transaction-list-top-by-user/transaction-list-top-by-user.component */
    "./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.ts");
    /* harmony import */


    var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./transaction-details/transaction-details.component */
    "./src/app/transaction-details/transaction-details.component.ts");
    /* harmony import */


    var _postLogComponents_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./postLogComponents/user-profile/user-profile.component */
    "./src/app/postLogComponents/user-profile/user-profile.component.ts");
    /* harmony import */


    var _deposit_form_deposit_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./deposit-form/deposit-form.component */
    "./src/app/deposit-form/deposit-form.component.ts");
    /* harmony import */


    var _make_transaction_make_transaction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./make-transaction/make-transaction.component */
    "./src/app/make-transaction/make-transaction.component.ts");
    /* harmony import */


    var _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./bill-list/bill-list.component */
    "./src/app/bill-list/bill-list.component.ts");
    /* harmony import */


    var _bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./bill-form/bill-form.component */
    "./src/app/bill-form/bill-form.component.ts");
    /* harmony import */


    var _bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./bill-details/bill-details.component */
    "./src/app/bill-details/bill-details.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'logged-in',
      component: _postLogComponents_logged_in_container_logged_in_container_component__WEBPACK_IMPORTED_MODULE_10__["LoggedInContainerComponent"]
    }, {
      path: 'registration',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    }, {
      path: 'notes',
      component: _postLogComponents_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__["NotesComponent"]
    }, {
      path: 'contact',
      component: _info_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }, {
      path: 'about',
      component: _info_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"]
    }, {
      path: 'help',
      component: _info_help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"]
    }, {
      path: 'accounts',
      component: _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"]
    }, {
      path: 'profile',
      component: _postLogComponents_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"]
    }, {
      path: 'user/:userId/accounts',
      component: _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"]
    }, {
      path: 'addaccounts',
      component: _account_form_account_form_component__WEBPACK_IMPORTED_MODULE_4__["AccountFormComponent"]
    }, {
      path: 'deposit',
      component: _deposit_form_deposit_form_component__WEBPACK_IMPORTED_MODULE_17__["DepositFormComponent"]
    }, {
      path: 'newTransaction',
      component: _make_transaction_make_transaction_component__WEBPACK_IMPORTED_MODULE_18__["MakeTransactionComponent"]
    }, {
      path: 'accountsOverview/:accountId',
      component: _account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_5__["AccountOverviewComponent"]
    }, {
      path: 'accounts/:accountId/transactions',
      component: _transaction_list_by_account_transaction_list_by_account_component__WEBPACK_IMPORTED_MODULE_12__["TransactionListByAccountComponent"]
    }, {
      path: 'accountsOverview/:accountId',
      component: _account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_5__["AccountOverviewComponent"]
    }, {
      path: 'billtracker',
      component: _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_19__["BillListComponent"]
    }, {
      path: 'billDetails',
      component: _bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_21__["BillDetailsComponent"]
    }, {
      path: 'addbill',
      component: _bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_20__["BillFormComponent"]
    }, {
      path: 'accountsOverview/:accountId',
      component: _account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_5__["AccountOverviewComponent"]
    }, {
      path: 'accounts/:accountId/transactions',
      component: _transaction_list_by_account_transaction_list_by_account_component__WEBPACK_IMPORTED_MODULE_12__["TransactionListByAccountComponent"]
    }, {
      path: 'user/:userId/transactions-user',
      component: _transaction_list_top_by_user_transaction_list_top_by_user_component__WEBPACK_IMPORTED_MODULE_14__["TransactionListTopByUserComponent"]
    }, {
      path: 'transactionDetails',
      component: _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_15__["TransactionDetailsComponent"]
    }, {
      path: 'accountsOverview/:accountId',
      component: _account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_5__["AccountOverviewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var RoutingComponents = [_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_4__["AccountFormComponent"], _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, authenticate) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticate = authenticate;
      }

      _createClass(AppComponent, [{
        key: "displayDashboard",
        value: function displayDashboard() {
          return this.authenticate.isUserLoggedIn();
        }
      }, {
        key: "displayPreLoginHeader",
        value: function displayPreLoginHeader() {
          return this.authenticate.isUserLoggedIn();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./account-list/account-list.component */
    "./src/app/account-list/account-list.component.ts");
    /* harmony import */


    var _account_form_account_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./account-form/account-form.component */
    "./src/app/account-form/account-form.component.ts");
    /* harmony import */


    var _account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./account-overview/account-overview.component */
    "./src/app/account-overview/account-overview.component.ts");
    /* harmony import */


    var _layoutComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layoutComponents/footer/footer.component */
    "./src/app/layoutComponents/footer/footer.component.ts");
    /* harmony import */


    var _layoutComponents_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layoutComponents/header/header.component */
    "./src/app/layoutComponents/header/header.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bill_bill_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./bill/bill.component */
    "./src/app/bill/bill.component.ts");
    /* harmony import */


    var _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./bill-list/bill-list.component */
    "./src/app/bill-list/bill-list.component.ts");
    /* harmony import */


    var _bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./bill-details/bill-details.component */
    "./src/app/bill-details/bill-details.component.ts");
    /* harmony import */


    var _bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./bill-form/bill-form.component */
    "./src/app/bill-form/bill-form.component.ts");
    /* harmony import */


    var _info_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./info/about-us/about-us.component */
    "./src/app/info/about-us/about-us.component.ts");
    /* harmony import */


    var _info_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./info/contact/contact.component */
    "./src/app/info/contact/contact.component.ts");
    /* harmony import */


    var _info_help_help_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./info/help/help.component */
    "./src/app/info/help/help.component.ts");
    /* harmony import */


    var _layoutComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./layoutComponents/dashboard/dashboard.component */
    "./src/app/layoutComponents/dashboard/dashboard.component.ts");
    /* harmony import */


    var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/http-interceptor.service */
    "./src/app/services/http-interceptor.service.ts");
    /* harmony import */


    var _postLogComponents_logged_in_container_logged_in_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./postLogComponents/logged-in-container/logged-in-container.component */
    "./src/app/postLogComponents/logged-in-container/logged-in-container.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./transaction-list/transaction-list.component */
    "./src/app/transaction-list/transaction-list.component.ts");
    /* harmony import */


    var _postLogComponents_notes_notes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./postLogComponents/notes/notes.component */
    "./src/app/postLogComponents/notes/notes.component.ts");
    /* harmony import */


    var _transaction_list_by_account_transaction_list_by_account_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./transaction-list-by-account/transaction-list-by-account.component */
    "./src/app/transaction-list-by-account/transaction-list-by-account.component.ts");
    /* harmony import */


    var _transaction_list_top_by_user_transaction_list_top_by_user_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./transaction-list-top-by-user/transaction-list-top-by-user.component */
    "./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.ts");
    /* harmony import */


    var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./transaction-details/transaction-details.component */
    "./src/app/transaction-details/transaction-details.component.ts");
    /* harmony import */


    var _postLogComponents_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./postLogComponents/user-profile/user-profile.component */
    "./src/app/postLogComponents/user-profile/user-profile.component.ts");
    /* harmony import */


    var _postLogComponents_user_profile_form_user_profile_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./postLogComponents/user-profile-form/user-profile-form.component */
    "./src/app/postLogComponents/user-profile-form/user-profile-form.component.ts");
    /* harmony import */


    var _deposit_form_deposit_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./deposit-form/deposit-form.component */
    "./src/app/deposit-form/deposit-form.component.ts");
    /* harmony import */


    var _make_transaction_make_transaction_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./make-transaction/make-transaction.component */
    "./src/app/make-transaction/make-transaction.component.ts");
    /* harmony import */


    var _withdraw_form_withdraw_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./withdraw-form/withdraw-form.component */
    "./src/app/withdraw-form/withdraw-form.component.ts");
    /* harmony import */


    var _transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./transfer-form/transfer-form.component */
    "./src/app/transfer-form/transfer-form.component.ts");
    /* harmony import */


    var _transfer_other_transfer_other_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./transfer-other/transfer-other.component */
    "./src/app/transfer-other/transfer-other.component.ts");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./contact-form/contact-form.component */
    "./src/app/contact-form/contact-form.component.ts");
    /* harmony import */


    var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_8__["Account"], _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_9__["AccountListComponent"], _account_form_account_form_component__WEBPACK_IMPORTED_MODULE_10__["AccountFormComponent"], _account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_11__["AccountOverviewComponent"], _layoutComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _layoutComponents_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _bill_bill_component__WEBPACK_IMPORTED_MODULE_16__["BillComponent"], _bill_list_bill_list_component__WEBPACK_IMPORTED_MODULE_17__["BillListComponent"], _bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_18__["BillDetailsComponent"], _bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_19__["BillFormComponent"], _info_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsComponent"], _info_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"], _info_help_help_component__WEBPACK_IMPORTED_MODULE_22__["HelpComponent"], _layoutComponents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"], _postLogComponents_logged_in_container_logged_in_container_component__WEBPACK_IMPORTED_MODULE_25__["LoggedInContainerComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_27__["Transactions"], _transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_28__["TransactionListComponent"], _postLogComponents_notes_notes_component__WEBPACK_IMPORTED_MODULE_29__["NotesComponent"], _transaction_list_by_account_transaction_list_by_account_component__WEBPACK_IMPORTED_MODULE_30__["TransactionListByAccountComponent"], _deposit_form_deposit_form_component__WEBPACK_IMPORTED_MODULE_35__["DepositFormComponent"], _make_transaction_make_transaction_component__WEBPACK_IMPORTED_MODULE_36__["MakeTransactionComponent"], _withdraw_form_withdraw_form_component__WEBPACK_IMPORTED_MODULE_37__["WithdrawFormComponent"], _transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_38__["TransferFormComponent"], _transaction_list_top_by_user_transaction_list_top_by_user_component__WEBPACK_IMPORTED_MODULE_31__["TransactionListTopByUserComponent"], _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_32__["TransactionDetailsComponent"], _postLogComponents_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["UserProfileComponent"], _postLogComponents_user_profile_form_user_profile_form_component__WEBPACK_IMPORTED_MODULE_34__["UserProfileFormComponent"], _deposit_form_deposit_form_component__WEBPACK_IMPORTED_MODULE_35__["DepositFormComponent"], _make_transaction_make_transaction_component__WEBPACK_IMPORTED_MODULE_36__["MakeTransactionComponent"], _withdraw_form_withdraw_form_component__WEBPACK_IMPORTED_MODULE_37__["WithdrawFormComponent"], _transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_38__["TransferFormComponent"], _transfer_other_transfer_other_component__WEBPACK_IMPORTED_MODULE_39__["TransferOtherComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_40__["ContactFormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]],
      providers: [_services_account_service_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_24__["HttpInterceptorService"],
        multi: true
      }, _postLogComponents_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["UserProfileComponent"], _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_41__["TransactionService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bill-details/bill-details.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/bill-details/bill-details.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillDetailsBillDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#modalButton {\n    margin-top: 15px;\n    margin-left: 0px;\n    margin-right: 4px;\n    background: rgb(29, 196, 0);\n    background: linear-gradient(90deg, rgba(29, 196, 0, 1) 0%, rgba(152, 255, 166, 1) 0%, rgba(193, 255, 183, 1) 36%, rgba(139, 255, 156, 1) 79%, rgba(61, 255, 118, 1) 100%);\n    color: black;\n    outline-color: darkgray;\n    box-shadow: darkgray;\n}\n\n#payButton {\n    margin-top: 15px;\n    margin-left: 4px;\n    margin-right: 4px;\n    background: rgb(29, 196, 0);\n    background: linear-gradient(90deg, rgba(29, 196, 0, 1) 0%, rgba(152, 255, 166, 1) 0%, rgba(193, 255, 183, 1) 36%, rgba(139, 255, 156, 1) 79%, rgba(61, 255, 118, 1) 100%);\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC1kZXRhaWxzL2JpbGwtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHlLQUF5SztJQUN6SyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix5S0FBeUs7SUFDekssWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2JpbGwtZGV0YWlscy9iaWxsLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2RhbEJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSwgMTk2LCAwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjksIDE5NiwgMCwgMSkgMCUsIHJnYmEoMTUyLCAyNTUsIDE2NiwgMSkgMCUsIHJnYmEoMTkzLCAyNTUsIDE4MywgMSkgMzYlLCByZ2JhKDEzOSwgMjU1LCAxNTYsIDEpIDc5JSwgcmdiYSg2MSwgMjU1LCAxMTgsIDEpIDEwMCUpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBvdXRsaW5lLWNvbG9yOiBkYXJrZ3JheTtcbiAgICBib3gtc2hhZG93OiBkYXJrZ3JheTtcbn1cblxuI3BheUJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyOSwgMTk2LCAwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjksIDE5NiwgMCwgMSkgMCUsIHJnYmEoMTUyLCAyNTUsIDE2NiwgMSkgMCUsIHJnYmEoMTkzLCAyNTUsIDE4MywgMSkgMzYlLCByZ2JhKDEzOSwgMjU1LCAxNTYsIDEpIDc5JSwgcmdiYSg2MSwgMjU1LCAxMTgsIDEpIDEwMCUpO1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bill-details/bill-details.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/bill-details/bill-details.component.ts ***!
    \********************************************************/

  /*! exports provided: BillDetailsComponent */

  /***/
  function srcAppBillDetailsBillDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillDetailsComponent", function () {
      return BillDetailsComponent;
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


    var _services_bill_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/bill-service.service */
    "./src/app/services/bill-service.service.ts");

    var BillDetailsComponent =
    /*#__PURE__*/
    function () {
      function BillDetailsComponent(route, router, billsService) {
        _classCallCheck(this, BillDetailsComponent);

        this.route = route;
        this.router = router;
        this.billsService = billsService;
      }

      _createClass(BillDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBill();
        }
      }, {
        key: "getBill",
        value: function getBill() {
          var _this6 = this;

          //const id = +this.route.snapshot.paramMap.get('billId');
          this.billsService.getBillById(this.billsService.getStoredId()).subscribe(function (bill) {
            return _this6.bill = bill;
          });
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this7 = this;

          this.billsService.remove(id).subscribe(function (data) {
            _this7.gotoBillsList();
          });
        }
      }, {
        key: "gotoBillsList",
        value: function gotoBillsList() {
          this.router.navigateByUrl('billtracker');
        }
      }]);

      return BillDetailsComponent;
    }();

    BillDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_bill_service_service__WEBPACK_IMPORTED_MODULE_3__["BillService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BillDetailsComponent.prototype, "bill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BillDetailsComponent.prototype, "list", void 0);
    BillDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bill-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bill-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bill-details/bill-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bill-details.component.css */
      "./src/app/bill-details/bill-details.component.css")).default]
    })], BillDetailsComponent);
    /***/
  },

  /***/
  "./src/app/bill-form/bill-form.component.css":
  /*!***************************************************!*\
    !*** ./src/app/bill-form/bill-form.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillFormBillFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGwtZm9ybS9iaWxsLWZvcm0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/bill-form/bill-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/bill-form/bill-form.component.ts ***!
    \**************************************************/

  /*! exports provided: BillFormComponent */

  /***/
  function srcAppBillFormBillFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillFormComponent", function () {
      return BillFormComponent;
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


    var _services_bill_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/bill-service.service */
    "./src/app/services/bill-service.service.ts");
    /* harmony import */


    var _bill_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../bill/bill.component */
    "./src/app/bill/bill.component.ts");

    var BillFormComponent =
    /*#__PURE__*/
    function () {
      function BillFormComponent(route, router, billsService) {
        _classCallCheck(this, BillFormComponent);

        this.route = route;
        this.router = router;
        this.billsService = billsService;
        this.bill = new _bill_bill_component__WEBPACK_IMPORTED_MODULE_4__["BillComponent"]();
      }

      _createClass(BillFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.bill.userId = sessionStorage.getItem('userId');
          this.billsService.save(this.bill).subscribe(function (data) {
            return _this8.gotoBillsList();
          });
        }
      }, {
        key: "gotoBillsList",
        value: function gotoBillsList() {
          this.router.navigateByUrl('bills');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BillFormComponent;
    }();

    BillFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_bill_service_service__WEBPACK_IMPORTED_MODULE_3__["BillService"]
      }];
    };

    BillFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bill-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bill-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bill-form/bill-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bill-form.component.css */
      "./src/app/bill-form/bill-form.component.css")).default]
    })], BillFormComponent);
    /***/
  },

  /***/
  "./src/app/bill-list/bill-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/bill-list/bill-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillListBillListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".underHeaderDesign {\n    width: 100%;\n    height: 20px;\n    background-image: linear-gradient(90deg, rgba(29, 196, 0, 1) 0%, rgba(152, 255, 166, 1) 0%, rgba(193, 255, 183, 1) 36%, rgba(139, 255, 156, 1) 79%, rgba(61, 255, 118, 1) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC1saXN0L2JpbGwtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrS0FBK0s7QUFDbkwiLCJmaWxlIjoic3JjL2FwcC9iaWxsLWxpc3QvYmlsbC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5kZXJIZWFkZXJEZXNpZ24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjksIDE5NiwgMCwgMSkgMCUsIHJnYmEoMTUyLCAyNTUsIDE2NiwgMSkgMCUsIHJnYmEoMTkzLCAyNTUsIDE4MywgMSkgMzYlLCByZ2JhKDEzOSwgMjU1LCAxNTYsIDEpIDc5JSwgcmdiYSg2MSwgMjU1LCAxMTgsIDEpIDEwMCUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/bill-list/bill-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/bill-list/bill-list.component.ts ***!
    \**************************************************/

  /*! exports provided: BillListComponent */

  /***/
  function srcAppBillListBillListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillListComponent", function () {
      return BillListComponent;
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


    var _services_bill_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/bill-service.service */
    "./src/app/services/bill-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var BillListComponent =
    /*#__PURE__*/
    function () {
      function BillListComponent(billService, route, router, userService, authenticate) {
        _classCallCheck(this, BillListComponent);

        this.billService = billService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authenticate = authenticate;
        this.currentDate = new Date();
      }

      _createClass(BillListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.billService.findAll().subscribe(function (data) {
            _this9.bills = data;
          });
          this.userService.getUser(this.authenticate.getUser()).subscribe(function (e) {
            return _this9.user = e;
          });
        }
      }, {
        key: "gotoBillsList",
        value: function gotoBillsList() {
          this.router.navigate(['bills']);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          var _this10 = this;

          this.billService.remove(id).subscribe(function (result) {
            _this10.gotoBillsList();
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(bill) {
          this.selectedBill = bill;
        }
      }, {
        key: "billTotal",
        value: function billTotal() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.bills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var bill = _step.value;
              this.total += bill.amount;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "storeNumber",
        value: function storeNumber(id) {
          this.billService.setStoreId(id);
          this.router.navigateByUrl('billDetails');
          console.log(id);
        }
      }, {
        key: "lateCheck",
        value: function lateCheck(date) {
          if (this.currentDate > new Date(date)) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return BillListComponent;
    }();

    BillListComponent.ctorParameters = function () {
      return [{
        type: _services_bill_service_service__WEBPACK_IMPORTED_MODULE_2__["BillService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    BillListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bill-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bill-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bill-list/bill-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bill-list.component.css */
      "./src/app/bill-list/bill-list.component.css")).default]
    })], BillListComponent);
    /***/
  },

  /***/
  "./src/app/bill/bill.component.css":
  /*!*****************************************!*\
    !*** ./src/app/bill/bill.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillBillComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGwvYmlsbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/bill/bill.component.ts":
  /*!****************************************!*\
    !*** ./src/app/bill/bill.component.ts ***!
    \****************************************/

  /*! exports provided: BillComponent */

  /***/
  function srcAppBillBillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillComponent", function () {
      return BillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BillComponent =
    /*#__PURE__*/
    function () {
      function BillComponent() {
        _classCallCheck(this, BillComponent);
      }

      _createClass(BillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BillComponent;
    }();

    BillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bill.component.css */
      "./src/app/bill/bill.component.css")).default]
    })], BillComponent);
    /***/
  },

  /***/
  "./src/app/contact-form/contact-form.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/contact-form/contact-form.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactFormContactFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fullName {\n    border: 3px solid gray;\n}\n\n.email {\n    border: gray;\n}\n\nbutton {\n    background-color: lightgrey;\n    color: black;\n}\n\nbutton:hover{\n    background-color: lightgrey;\n    color: #18d26e;\n}\n\n.thankyou_message {\n    display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxOYW1lIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xufVxuXG4uZW1haWwge1xuICAgIGJvcmRlcjogZ3JheTtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGNvbG9yOiAjMThkMjZlO1xufVxuXG4udGhhbmt5b3VfbWVzc2FnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact-form/contact-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-form/contact-form.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactFormComponent =
    /*#__PURE__*/
    function () {
      function ContactFormComponent() {
        _classCallCheck(this, ContactFormComponent);
      }

      _createClass(ContactFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactFormComponent;
    }();

    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-form.component.css */
      "./src/app/contact-form/contact-form.component.css")).default]
    })], ContactFormComponent);
    /***/
  },

  /***/
  "./src/app/deposit-form/deposit-form.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/deposit-form/deposit-form.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDepositFormDepositFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card .my-5 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwb3NpdC1mb3JtL2RlcG9zaXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2RlcG9zaXQtZm9ybS9kZXBvc2l0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5teS01IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/deposit-form/deposit-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/deposit-form/deposit-form.component.ts ***!
    \********************************************************/

  /*! exports provided: DepositFormComponent */

  /***/
  function srcAppDepositFormDepositFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepositFormComponent", function () {
      return DepositFormComponent;
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


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DepositFormComponent =
    /*#__PURE__*/
    function () {
      function DepositFormComponent(route, router, accountService, transactionService) {
        _classCallCheck(this, DepositFormComponent);

        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.transaction = new _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["Transactions"]();
        this.depositForm = this.createFormGroup();
      }

      _createClass(DepositFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.accountService.getAccountsByUserId().subscribe(function (data) {
            _this11.accounts = data;
          });
        }
      }, {
        key: "gotoAccountsList",
        value: function gotoAccountsList() {
          this.router.navigateByUrl('accounts');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          this.transaction.accountNumber = this.depositForm.controls['accountId'].value;
          this.transaction.amount = this.depositForm.controls['amount'].value;
          this.accountService.accountDeposit(this.transaction).subscribe(function (data) {
            return _this12.gotoAccountsList();
          });
        }
      }, {
        key: "createFormGroup",
        value: function createFormGroup() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            accountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }
      }]);

      return DepositFormComponent;
    }();

    DepositFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]
      }];
    };

    DepositFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deposit-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deposit-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/deposit-form/deposit-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deposit-form.component.css */
      "./src/app/deposit-form/deposit-form.component.css")).default]
    })], DepositFormComponent);
    /***/
  },

  /***/
  "./src/app/info/about-us/about-us.component.css":
  /*!******************************************************!*\
    !*** ./src/app/info/about-us/about-us.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInfoAboutUsAboutUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    margin: auto;\n    margin-top: 2%;\n    width: 35%;\n    padding: 10px;\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2luZm8vYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/info/about-us/about-us.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/info/about-us/about-us.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppInfoAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutUsComponent =
    /*#__PURE__*/
    function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/info/about-us/about-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.component.css */
      "./src/app/info/about-us/about-us.component.css")).default]
    })], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/info/contact/contact.component.css":
  /*!****************************************************!*\
    !*** ./src/app/info/contact/contact.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInfoContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    margin: auto;\n    margin-top: 3%;\n    width: 40%;\n    padding: 10px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9pbmZvL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/info/contact/contact.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/info/contact/contact.component.ts ***!
    \***************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppInfoContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/info/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/info/contact/contact.component.css")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/info/help/help.component.css":
  /*!**********************************************!*\
    !*** ./src/app/info/help/help.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppInfoHelpHelpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    margin: auto;\n    margin-top: 10%;\n    width: 50%;\n    padding: 10px;\n    text-align: center;\n}\n\n.faq{\n    width: 50%;\n    margin: auto;\n}\n\n.answer{\n    color: gray;\n\n}\n\n.question{\n    cursor: pointer;\n    padding-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhcXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmFuc3dlcntcbiAgICBjb2xvcjogZ3JheTtcblxufVxuXG4ucXVlc3Rpb257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/info/help/help.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/info/help/help.component.ts ***!
    \*********************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcAppInfoHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelpComponent =
    /*#__PURE__*/
    function () {
      function HelpComponent() {
        _classCallCheck(this, HelpComponent);
      }

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpComponent;
    }();

    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-help',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./help.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/info/help/help.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./help.component.css */
      "./src/app/info/help/help.component.css")).default]
    })], HelpComponent);
    /***/
  },

  /***/
  "./src/app/layoutComponents/dashboard/dashboard.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/layoutComponents/dashboard/dashboard.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#header.header-scrolled {\n    background: #fff;\n    padding: 20px 0;\n    height: 72px;\n    transition: all 0.5s;\n}\n.headerContainer{\n    display: inline-block;\n    width: 100%;\n}\nnav{\n    background-color: lightgrey;\n    \n}\nnav.nav-menu{\n    color: black;\n}\n#header {\n    padding: 30px 0;\n    height: 92px;\n    position: fixed, relative;\n    left: 0;\n    top: 0;\n    right: 0;\n    transition: all 0.5s;\n    z-index: 997;\n    background-color: #fff;\n    box-shadow: 5px 0px 15px #c3c3c3;\n}\n#header #logo h1 {\n    font-size: 34px;\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n    font-family: \"Helvetica\", sans-serif;\n    font-weight: 700;\n    letter-spacing: 3px;\n}\n#header #logo h1 a, #header #logo h1 a:hover {\n    color: #000;\n    padding-left: 10px;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n    border-left: 4px solid grey;\n}\n#nav-menu-container {\n    float: right;\n    margin: 0;\n    background-color: grey;\n}\n.nav-menu > li {\n    margin-left: 10px;\n}\n.nav-menu > li {\n    float: right;\n}\n.nav-menu li {\n    position: relative;\n    white-space: nowrap;\n}\n.nav-menu, .nav-menu * {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.header-scrolled .nav-menu li:hover > a, .header-scrolled .nav-menu > .menu-active > a {\n    color: #18d26e;\n}\n.header-scrolled .nav-menu a {\n    color: black;\n}\n.nav-menu li:hover > a, .nav-menu > .menu-active > a {\n    color: #18d26e;\n}\n.nav-menu a {\n    padding: 0 8px 10px 8px;\n    text-decoration: none;\n    display: inline-block;\n    color:black;\n    font-family: \"Helvetica\", sans-serif;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    outline: none;\n}\n.menu-has-children ul\n{display: none;}\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  color:black;\n}\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n.nav-menu ul {\n    margin: 4px 0 0 0;\n    padding: 10px;\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n    background: #fff;\n}\n.nav-menu ul {\n    position: absolute;\n    display: none;\n    top: 100%;\n    left: 0;\n    z-index: 99;\n}\n.sf-arrows .sf-with-ul {\n    padding-right: 30px;\n}\n.nav-menu li {\n    position: relative;\n    white-space: nowrap;\n}\n@media (max-width: 768px){\n#nav-menu-container {\n    display: none;\n}\n\n#mobile-nav-toggle {\n    display: inline;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0Q29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBRUE7Q0FDQyxhQUFhLENBQUM7QUFFZjtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFHQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUdBO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0Q29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyLmhlYWRlci1zY3JvbGxlZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmhlYWRlckNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm5hdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgXG59XG5uYXYubmF2LW1lbnV7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuI2hlYWRlciB7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICAgIGhlaWdodDogOTJweDtcbiAgICBwb3NpdGlvbjogZml4ZWQsIHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIHotaW5kZXg6IDk5NztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDVweCAwcHggMTVweCAjYzNjM2MzO1xufVxuI2hlYWRlciAjbG9nbyBoMSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbiNoZWFkZXIgI2xvZ28gaDEgYSwgI2hlYWRlciAjbG9nbyBoMSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBncmV5O1xufVxuI25hdi1tZW51LWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuLm5hdi1tZW51ID4gbGkge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm5hdi1tZW51ID4gbGkge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5uYXYtbWVudSBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubmF2LW1lbnUsIC5uYXYtbWVudSAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhlYWRlci1zY3JvbGxlZCAubmF2LW1lbnUgbGk6aG92ZXIgPiBhLCAuaGVhZGVyLXNjcm9sbGVkIC5uYXYtbWVudSA+IC5tZW51LWFjdGl2ZSA+IGEge1xuICAgIGNvbG9yOiAjMThkMjZlO1xufVxuLmhlYWRlci1zY3JvbGxlZCAubmF2LW1lbnUgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2LW1lbnUgbGk6aG92ZXIgPiBhLCAubmF2LW1lbnUgPiAubWVudS1hY3RpdmUgPiBhIHtcbiAgICBjb2xvcjogIzE4ZDI2ZTtcbn1cbi5uYXYtbWVudSBhIHtcbiAgICBwYWRkaW5nOiAwIDhweCAxMHB4IDhweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1lbnUtaGFzLWNoaWxkcmVuIHVsXG57ZGlzcGxheTogbm9uZTt9XG5cbi5zZi1hcnJvd3MgLnNmLXdpdGgtdWwge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uc2YtYXJyb3dzIC5zZi13aXRoLXVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOmJsYWNrO1xufVxuXG4uc2YtYXJyb3dzIHVsIC5zZi13aXRoLXVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYxMDVcIjtcbn1cblxuXG4ubmF2LW1lbnUgbGk6aG92ZXIgPiB1bCxcbi5uYXYtbWVudSBsaS5zZkhvdmVyID4gdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXYtbWVudSB1bCB7XG4gICAgbWFyZ2luOiA0cHggMCAwIDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggcmdiYSgxMjcsIDEzNywgMTYxLCAwLjI1KTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm5hdi1tZW51IHVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLnNmLWFycm93cyAuc2Ytd2l0aC11bCB7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi5uYXYtbWVudSBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiNuYXYtbWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtb2JpbGUtbmF2LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layoutComponents/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/layoutComponents/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppLayoutComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(authenticate, route, router) {
        _classCallCheck(this, DashboardComponent);

        this.authenticate = authenticate;
        this.route = route;
        this.router = router;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUserId",
        value: function getUserId() {
          return sessionStorage.getItem('userId');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticate.logOut();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/layoutComponents/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/layoutComponents/footer/footer.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/layoutComponents/footer/footer.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#footer-color {\n    color: black;\n}\n\na {\n    color: black;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n}\n\na:hover {\n    color: #18d26e;\n}\n\nfooter {\n    background-color: lightgray;\n    display: block;\n    height: 6pc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0Q29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRDb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXItY29sb3Ige1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzE4ZDI2ZTtcbn1cblxuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA2cGM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layoutComponents/footer/footer.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layoutComponents/footer/footer.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/layoutComponents/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layoutComponents/header/header.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/layoutComponents/header/header.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#header.header-scrolled {\n    background: #fff;\n    padding: 20px 0;\n    height: 72px;\n    transition: all 0.5s;\n}\n.headerContainer{\n    display: inline-block;\n    width: 100%;\n}\n#logo{\n    display:flex;\n}\n.image{\n    padding-right: 10px;\n}\nnav{\n    background-color: lightgrey;\n    \n}\nnav.nav-menu{\n    color: black;\n}\n#header {\n    padding: 30px 0;\n    height: 92px;\n    position: fixed, relative;\n    left: 0;\n    top: 0;\n    right: 0;\n    transition: all 0.5s;\n    z-index: 997;\n    background-color: #fff;\n    box-shadow: 5px 0px 15px #c3c3c3;\n}\n#header #logo h1 {\n    font-size: 34px;\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n    font-family: \"Helvetica\", sans-serif;\n    font-weight: 700;\n    letter-spacing: 3px;\n}\n#header #logo h1 a, #header #logo h1 a:hover {\n    color: #000;\n    padding-left: 10px;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n    border-left: 4px solid grey;\n}\n#nav-menu-container {\n    float: right;\n    margin: 0;\n    background-color: grey;\n}\n.nav-menu > li {\n    margin-left: 10px;\n}\n.nav-menu > li {\n    float: right;\n}\n.nav-menu li {\n    position: relative;\n    white-space: nowrap;\n}\n.nav-menu, .nav-menu * {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.header-scrolled .nav-menu li:hover > a, .header-scrolled .nav-menu > .menu-active > a {\n    color: #18d26e;\n}\n.header-scrolled .nav-menu a {\n    color: black;\n}\n.nav-menu li:hover > a, .nav-menu > .menu-active > a {\n    color: #18d26e;\n}\n.nav-menu a {\n    padding: 0 8px 10px 8px;\n    text-decoration: none;\n    display: inline-block;\n    color:black;\n    font-family: \"Helvetica\", sans-serif;\n    font-weight: 700;\n    font-size: 14px;\n    text-transform: uppercase;\n    outline: none;\n}\n.menu-has-children ul\n{display: none;}\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  color:black;\n}\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n.nav-menu ul {\n    margin: 4px 0 0 0;\n    padding: 10px;\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n    background: #fff;\n}\n.nav-menu ul {\n    position: absolute;\n    display: none;\n    top: 100%;\n    left: 0;\n    z-index: 99;\n}\n.sf-arrows .sf-with-ul {\n    padding-right: 30px;\n}\n.nav-menu li {\n    position: relative;\n    white-space: nowrap;\n}\n@media (max-width: 768px){\n#nav-menu-container {\n    display: none;\n}\n\n#mobile-nav-toggle {\n    display: inline;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0Q29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUlBO0lBQ0ksMkJBQTJCOztBQUUvQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFFQTtDQUNDLGFBQWEsQ0FBQztBQUVmO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBR0E7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRDb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIuaGVhZGVyLXNjcm9sbGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uaGVhZGVyQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbiNsb2dve1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuLmltYWdle1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cblxuXG5uYXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIFxufVxubmF2Lm5hdi1tZW51e1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNoZWFkZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICBoZWlnaHQ6IDkycHg7XG4gICAgcG9zaXRpb246IGZpeGVkLCByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB6LWluZGV4OiA5OTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDE1cHggI2MzYzNjMztcbn1cbiNoZWFkZXIgI2xvZ28gaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4jaGVhZGVyICNsb2dvIGgxIGEsICNoZWFkZXIgI2xvZ28gaDEgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZ3JleTtcbn1cbiNuYXYtbWVudS1jb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbi5uYXYtbWVudSA+IGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uYXYtbWVudSA+IGxpIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ubmF2LW1lbnUgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm5hdi1tZW51LCAubmF2LW1lbnUgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5oZWFkZXItc2Nyb2xsZWQgLm5hdi1tZW51IGxpOmhvdmVyID4gYSwgLmhlYWRlci1zY3JvbGxlZCAubmF2LW1lbnUgPiAubWVudS1hY3RpdmUgPiBhIHtcbiAgICBjb2xvcjogIzE4ZDI2ZTtcbn1cbi5oZWFkZXItc2Nyb2xsZWQgLm5hdi1tZW51IGEge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdi1tZW51IGxpOmhvdmVyID4gYSwgLm5hdi1tZW51ID4gLm1lbnUtYWN0aXZlID4gYSB7XG4gICAgY29sb3I6ICMxOGQyNmU7XG59XG4ubmF2LW1lbnUgYSB7XG4gICAgcGFkZGluZzogMCA4cHggMTBweCA4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZW51LWhhcy1jaGlsZHJlbiB1bFxue2Rpc3BsYXk6IG5vbmU7fVxuXG4uc2YtYXJyb3dzIC5zZi13aXRoLXVsIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLnNmLWFycm93cyAuc2Ytd2l0aC11bDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjpibGFjaztcbn1cblxuLnNmLWFycm93cyB1bCAuc2Ytd2l0aC11bDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG59XG5cblxuLm5hdi1tZW51IGxpOmhvdmVyID4gdWwsXG4ubmF2LW1lbnUgbGkuc2ZIb3ZlciA+IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2LW1lbnUgdWwge1xuICAgIG1hcmdpbjogNHB4IDAgMCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMTI3LCAxMzcsIDE2MSwgMC4yNSk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5uYXYtbWVudSB1bCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5zZi1hcnJvd3MgLnNmLXdpdGgtdWwge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4ubmF2LW1lbnUgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4jbmF2LW1lbnUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jbW9iaWxlLW5hdi10b2dnbGUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layoutComponents/header/header.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layoutComponents/header/header.component.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layoutComponents/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/layoutComponents/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    margin: auto;\n    margin-top: 10%;\n    width: 50%;\n    padding: 10px;\n    text-align: center;\n}\n.form-control{\n    width: 50%;\n    margin: auto;\n}\n.btn{\n    background-color: lightgrey;\n    font-weight: bold;\n}\n.btn:hover{\n    color: #18d26e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bjpob3ZlcntcbiAgICBjb2xvcjogIzE4ZDI2ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var app_models_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/models/login */
    "./src/app/models/login.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, route, authenticate) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.route = route;
        this.authenticate = authenticate;
        this.login = new app_models_login__WEBPACK_IMPORTED_MODULE_4__["Login"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginForm",
        value: function loginForm() {
          var _this13 = this;

          this.authenticate.authenticate(this.login.username, this.login.password).subscribe(function (result) {
            return _this13.router.navigate(['/logged-in']);
          }); // console.log(this.login.username + "  " + this.login.password)
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/make-transaction/make-transaction.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/make-transaction/make-transaction.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMakeTransactionMakeTransactionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ha2UtdHJhbnNhY3Rpb24vbWFrZS10cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/make-transaction/make-transaction.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/make-transaction/make-transaction.component.ts ***!
    \****************************************************************/

  /*! exports provided: MakeTransactionComponent */

  /***/
  function srcAppMakeTransactionMakeTransactionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MakeTransactionComponent", function () {
      return MakeTransactionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MakeTransactionComponent =
    /*#__PURE__*/
    function () {
      function MakeTransactionComponent() {
        _classCallCheck(this, MakeTransactionComponent);

        this.deposit = true;
        this.withdraw = false;
        this.transfer = false;
        this.other = false;
      }

      _createClass(MakeTransactionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "depositView",
        value: function depositView() {
          this.deposit = true;
          this.withdraw = false;
          this.transfer = false;
          this.other = false;
        }
      }, {
        key: "withdrawView",
        value: function withdrawView() {
          this.deposit = false;
          this.withdraw = true;
          this.transfer = false;
          this.other = false;
        }
      }, {
        key: "transferView",
        value: function transferView() {
          this.deposit = false;
          this.withdraw = false;
          this.transfer = true;
          this.other = false;
        }
      }, {
        key: "otherView",
        value: function otherView() {
          this.deposit = false;
          this.withdraw = false;
          this.transfer = false;
          this.other = true;
        }
      }]);

      return MakeTransactionComponent;
    }();

    MakeTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-make-transaction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./make-transaction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/make-transaction/make-transaction.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./make-transaction.component.css */
      "./src/app/make-transaction/make-transaction.component.css")).default]
    })], MakeTransactionComponent);
    /***/
  },

  /***/
  "./src/app/models/login.ts":
  /*!*********************************!*\
    !*** ./src/app/models/login.ts ***!
    \*********************************/

  /*! exports provided: Login */

  /***/
  function srcAppModelsLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Login = function Login() {
      _classCallCheck(this, Login);
    };
    /***/

  },

  /***/
  "./src/app/models/notes.ts":
  /*!*********************************!*\
    !*** ./src/app/models/notes.ts ***!
    \*********************************/

  /*! exports provided: Notes */

  /***/
  function srcAppModelsNotesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Notes", function () {
      return Notes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Notes = function Notes() {
      _classCallCheck(this, Notes);
    };
    /***/

  },

  /***/
  "./src/app/models/register.ts":
  /*!************************************!*\
    !*** ./src/app/models/register.ts ***!
    \************************************/

  /*! exports provided: Register */

  /***/
  function srcAppModelsRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Register", function () {
      return Register;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Register = function Register() {
      _classCallCheck(this, Register);
    };
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/postLogComponents/logged-in-container/logged-in-container.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/postLogComponents/logged-in-container/logged-in-container.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostLogComponentsLoggedInContainerLoggedInContainerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome{\n    float: left;\n    font-size: smaller;\n}\n.lastLogin{\n    float: right;\n    font-size: smaller;\n}\n#welcomeBox {\n    display: block;\n    width: 100%;\n    height: 20px;\n}\n.container{\n    position: relative;\n    width: 100%;\n}\n.head{\n    background-color: lightgrey;\n}\n.row{\n    margin: 0;\n    width: 100%;\n}\n.col{\n    padding-right: 0px;\n}\napp-account-display{\n    margin-left: 0;\n}\n.homeHeader{\n    text-align: center;\n}\n.underHeaderDesign{\n    width: 100%;\n    height: 20px;\n    background-image: linear-gradient(90deg, rgba(29, 196, 0, 1) 0%, rgba(152, 255, 166, 1) 0%, rgba(193, 255, 183, 1) 36%, rgba(139, 255, 156, 1) 79%, rgba(61, 255, 118, 1) 100%);\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdExvZ0NvbXBvbmVudHMvbG9nZ2VkLWluLWNvbnRhaW5lci9sb2dnZWQtaW4tY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0tBQStLO0FBQ25MIiwiZmlsZSI6InNyYy9hcHAvcG9zdExvZ0NvbXBvbmVudHMvbG9nZ2VkLWluLWNvbnRhaW5lci9sb2dnZWQtaW4tY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG4ubGFzdExvZ2lue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG4jd2VsY29tZUJveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG4ucm93e1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb2x7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuYXBwLWFjY291bnQtZGlzcGxheXtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmhvbWVIZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udW5kZXJIZWFkZXJEZXNpZ257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyOSwgMTk2LCAwLCAxKSAwJSwgcmdiYSgxNTIsIDI1NSwgMTY2LCAxKSAwJSwgcmdiYSgxOTMsIDI1NSwgMTgzLCAxKSAzNiUsIHJnYmEoMTM5LCAyNTUsIDE1NiwgMSkgNzklLCByZ2JhKDYxLCAyNTUsIDExOCwgMSkgMTAwJSk7XG59XG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/postLogComponents/logged-in-container/logged-in-container.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/postLogComponents/logged-in-container/logged-in-container.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: LoggedInContainerComponent */

  /***/
  function srcAppPostLogComponentsLoggedInContainerLoggedInContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedInContainerComponent", function () {
      return LoggedInContainerComponent;
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


    var app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var app_services_account_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");

    var LoggedInContainerComponent =
    /*#__PURE__*/
    function () {
      function LoggedInContainerComponent(userService, authenticate, accountService, transactionService) {
        _classCallCheck(this, LoggedInContainerComponent);

        this.userService = userService;
        this.authenticate = authenticate;
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.user = new app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
      }

      _createClass(LoggedInContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.userService.getUser(this.authenticate.getUser()).subscribe(function (e) {
            return _this14.user = e;
          });
          this.userService.getUserId(this.authenticate.getUser()).subscribe();
          this.getUserAccounts();
        }
      }, {
        key: "getUserAccounts",
        value: function getUserAccounts() {
          var _this15 = this;

          this.accountService.getAccountsByUserId().subscribe(function (data) {
            _this15.accounts = data;
          });
        }
      }, {
        key: "getTransactions",
        value: function getTransactions(id) {
          var _this16 = this;

          this.transactionService.getTransactions(id).subscribe(function (e) {
            return _this16.transactions = e;
          });
        }
      }]);

      return LoggedInContainerComponent;
    }();

    LoggedInContainerComponent.ctorParameters = function () {
      return [{
        type: app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: app_services_account_service_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
      }, {
        type: app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_6__["TransactionService"]
      }];
    };

    LoggedInContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logged-in-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logged-in-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/logged-in-container/logged-in-container.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logged-in-container.component.css */
      "./src/app/postLogComponents/logged-in-container/logged-in-container.component.css")).default]
    })], LoggedInContainerComponent);
    /***/
  },

  /***/
  "./src/app/postLogComponents/notes/notes.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/postLogComponents/notes/notes.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostLogComponentsNotesNotesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button{\n    background-color: lightgrey;\n    color: black;\n}\n\nbutton:hover{\n    background-color: lightgrey;\n    color: #18d26e;\n}\n\n.container{\n    display: block;\n\n}\n\nth{\n    height: 50px;\n    text-align: center;\n    background-image: linear-gradient(90deg, rgba(29, 196, 0, 1) 0%, rgba(152, 255, 166, 1) 0%, rgba(193, 255, 183, 1) 36%, rgba(139, 255, 156, 1) 79%, rgba(61, 255, 118, 1) 100%);\n    color:  black;\n}\n\ntable, th, td {\n    border-color:  #18d26e;\n}\n\n.deleteButton{\n    width: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdExvZ0NvbXBvbmVudHMvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjOztBQUVsQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0tBQStLO0lBQy9LLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wb3N0TG9nQ29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgY29sb3I6ICMxOGQyNmU7XG59XG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG59XG50aHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyOSwgMTk2LCAwLCAxKSAwJSwgcmdiYSgxNTIsIDI1NSwgMTY2LCAxKSAwJSwgcmdiYSgxOTMsIDI1NSwgMTgzLCAxKSAzNiUsIHJnYmEoMTM5LCAyNTUsIDE1NiwgMSkgNzklLCByZ2JhKDYxLCAyNTUsIDExOCwgMSkgMTAwJSk7XG4gICAgY29sb3I6ICBibGFjaztcbn1cblxudGFibGUsIHRoLCB0ZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAgIzE4ZDI2ZTtcbn1cbi5kZWxldGVCdXR0b257XG4gICAgd2lkdGg6IDUwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/postLogComponents/notes/notes.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/postLogComponents/notes/notes.component.ts ***!
    \************************************************************/

  /*! exports provided: NotesComponent */

  /***/
  function srcAppPostLogComponentsNotesNotesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesComponent", function () {
      return NotesComponent;
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


    var app_models_notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/models/notes */
    "./src/app/models/notes.ts");
    /* harmony import */


    var app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/notes.service */
    "./src/app/services/notes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NotesComponent =
    /*#__PURE__*/
    function () {
      function NotesComponent(noteService, route) {
        _classCallCheck(this, NotesComponent);

        this.noteService = noteService;
        this.route = route; // @Input() note : Notes;
        // @Output() focusOut: EventEmitter<Notes> = new EventEmitter<Notes>();

        this.newNote = new app_models_notes__WEBPACK_IMPORTED_MODULE_2__["Notes"]();
        this.updateTheNote = new app_models_notes__WEBPACK_IMPORTED_MODULE_2__["Notes"]();
        this.notes = [];
        this.showEditTable = false;
        this.editRowId = ' ';
      }

      _createClass(NotesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.noteService.getNotes().subscribe(function (data) {
            return _this17.notes = data;
          });
        }
      }, {
        key: "saveNote",
        value: function saveNote() {
          var _this18 = this;

          this.noteService.save(this.newNote).subscribe(function (data) {
            return _this18.ngOnInit();
          });
          this.newNote.note = '';
        }
      }, {
        key: "deleteNote",
        value: function deleteNote(id) {
          var _this19 = this;

          this.noteService.removeNotes(id).subscribe(function (data) {
            return _this19.ngOnInit();
          });
        }
      }, {
        key: "updateNote",
        value: function updateNote() {
          var _this20 = this;

          this.noteService.update(this.editRowId, this.updateTheNote).subscribe(function (data) {
            return _this20.ngOnInit();
          });
          this.updateTheNote.note = ' ';
          this.editRowId = ' ';
        }
      }, {
        key: "Edit",
        value: function Edit(id) {
          this.editRowId = id;
        }
      }]);

      return NotesComponent;
    }();

    NotesComponent.ctorParameters = function () {
      return [{
        type: app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/notes/notes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notes.component.css */
      "./src/app/postLogComponents/notes/notes.component.css")).default]
    })], NotesComponent);
    /***/
  },

  /***/
  "./src/app/postLogComponents/user-profile-form/user-profile-form.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/postLogComponents/user-profile-form/user-profile-form.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostLogComponentsUserProfileFormUserProfileFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button{\n    background-color: lightgrey;\n    color: black;\n}\n\nbutton:hover{\n    background-color: lightgrey;\n    color: #18d26e;\n}\n\n.container{\n    display: block;\n\n}\n\nth{\n    height: 50px;\n    text-align: center;\n    background-color: lightgrey;\n    color:  black;\n}\n\ntable, th, td {\n    border-color:  #18d26e;\n}\n\n.deleteButton{\n    width: 50px;\n}\n\nh4{\n    text-align: center;\n}\n\ninput{\n    border-color: #18d26e;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdExvZ0NvbXBvbmVudHMvdXNlci1wcm9maWxlLWZvcm0vdXNlci1wcm9maWxlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjOztBQUVsQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wb3N0TG9nQ29tcG9uZW50cy91c2VyLXByb2ZpbGUtZm9ybS91c2VyLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgY29sb3I6ICMxOGQyNmU7XG59XG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG59XG50aHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogIGJsYWNrO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXItY29sb3I6ICAjMThkMjZlO1xufVxuLmRlbGV0ZUJ1dHRvbntcbiAgICB3aWR0aDogNTBweDtcbn1cbmg0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlucHV0e1xuICAgIGJvcmRlci1jb2xvcjogIzE4ZDI2ZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/postLogComponents/user-profile-form/user-profile-form.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/postLogComponents/user-profile-form/user-profile-form.component.ts ***!
    \************************************************************************************/

  /*! exports provided: UserProfileFormComponent */

  /***/
  function srcAppPostLogComponentsUserProfileFormUserProfileFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileFormComponent", function () {
      return UserProfileFormComponent;
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


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-profile/user-profile.component */
    "./src/app/postLogComponents/user-profile/user-profile.component.ts");
    /* harmony import */


    var app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var UserProfileFormComponent =
    /*#__PURE__*/
    function () {
      function UserProfileFormComponent(userProfile, userService, route, authenticate) {
        _classCallCheck(this, UserProfileFormComponent);

        this.userProfile = userProfile;
        this.userService = userService;
        this.route = route;
        this.authenticate = authenticate;
        this.profile = userProfile.profile;
      }

      _createClass(UserProfileFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateForm",
        value: function updateForm() {
          var _this21 = this;

          this.userService.updateUser(this.profile).subscribe(function (data) {
            return _this21.userProfile.ngOnInit();
          });
          this.userProfile.edit = false;

          if (this.profile.username != sessionStorage.getItem('username')) {
            alert("Username has been changed, you're being redirected to log in");
            this.route.navigateByUrl('login');
            this.authenticate.logOut();
          }
        }
      }]);

      return UserProfileFormComponent;
    }();

    UserProfileFormComponent.ctorParameters = function () {
      return [{
        type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]
      }, {
        type: app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    UserProfileFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/user-profile-form/user-profile-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile-form.component.css */
      "./src/app/postLogComponents/user-profile-form/user-profile-form.component.css")).default]
    })], UserProfileFormComponent);
    /***/
  },

  /***/
  "./src/app/postLogComponents/user-profile/user-profile.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/postLogComponents/user-profile/user-profile.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostLogComponentsUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    display: flex;\n    justify-content: space-around;\n}\n.child{\n    width:40%;\n}\n.btn{\n    background-color: lightgrey;\n    color: black;\n}\n.btn:hover{\n    background-color: lightgrey;\n    color: #18d26e;\n}\ntr{\n    border-color:  #18d26e; \n}\n.deleteButton{\n    width: 50px;\n}\ntfoot{\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdExvZ0NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wb3N0TG9nQ29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uY2hpbGR7XG4gICAgd2lkdGg6NDAlO1xufVxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogIzE4ZDI2ZTtcbn1cblxudHJ7XG4gICAgYm9yZGVyLWNvbG9yOiAgIzE4ZDI2ZTsgXG59XG4uZGVsZXRlQnV0dG9ue1xuICAgIHdpZHRoOiA1MHB4O1xufVxudGZvb3R7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/postLogComponents/user-profile/user-profile.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/postLogComponents/user-profile/user-profile.component.ts ***!
    \**************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppPostLogComponentsUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
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


    var app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/user.service */
    "./src/app/services/user.service.ts");

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(userService) {
        _classCallCheck(this, UserProfileComponent);

        this.userService = userService;
        this.profile = new app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.edit = false;
        this.editButton = 'Edit Mode';
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.userService.getUser(sessionStorage.getItem('username')).subscribe(function (data) {
            _this22.profile = data;
          });
        }
      }, {
        key: "editMode",
        value: function editMode() {
          if (this.edit == true) {
            this.edit = false;
            this.editButton = "Edit Mode";
          } else {
            this.edit = true;
            this.editButton = "Cancel";
          }
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/postLogComponents/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/postLogComponents/user-profile/user-profile.component.css")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    margin: auto;\n    margin-top: 5%;\n    width: 50%;\n    padding: 10px;\n    text-align: center;\n    \n}\n.form-control{\n    width: 50%;\n    margin: auto;\n}\n.btn{\n    background-color: lightgrey;\n    font-weight: bold;\n}\n.btn:hover{\n    color: #18d26e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuLmZvcm0tY29udHJvbHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bjpob3ZlcntcbiAgICBjb2xvcjogIzE4ZDI2ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var _models_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/register */
    "./src/app/models/register.ts");
    /* harmony import */


    var app_services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(registerService, router) {
        _classCallCheck(this, RegisterComponent);

        this.registerService = registerService;
        this.router = router;
        this.newUser = new _models_register__WEBPACK_IMPORTED_MODULE_2__["Register"]();
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerForm",
        value: function registerForm() {
          var _this23 = this;

          this.registerService.registerUser(this.newUser).subscribe(function (data) {
            return _this23.router.navigate(['/login']);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: app_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/account-service.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/account-service.service.ts ***!
    \*****************************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppServicesAccountServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var AccountService =
    /*#__PURE__*/
    function () {
      function AccountService(http, userService) {
        _classCallCheck(this, AccountService);

        this.http = http;
        this.userService = userService;
        this.accountsUrl = 'https://zipbank-delightful-parrot-qa.cfapps.io/API';
      }

      _createClass(AccountService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get(this.accountsUrl + '/accounts/all_accounts');
        }
      }, {
        key: "getAccountById",
        value: function getAccountById(accountNumber) {
          return this.http.get(this.accountsUrl + '/accounts/' + accountNumber);
        }
      }, {
        key: "save",
        value: function save(account) {
          return this.http.post(this.accountsUrl + '/accounts/dummy_created', account);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return this.http.delete(this.accountsUrl + '/accounts/' + id);
        }
      }, {
        key: "getAccountsByUserId",
        value: function getAccountsByUserId() {
          var id = sessionStorage.getItem('userId');
          return this.http.get(this.accountsUrl + '/user/' + id + '/accounts');
        }
      }, {
        key: "accountDeposit",
        value: function accountDeposit(transaction) {
          return this.http.put(this.accountsUrl + '/accounts/deposit/', transaction);
        }
      }, {
        key: "accountWithdraw",
        value: function accountWithdraw(transaction) {
          return this.http.put(this.accountsUrl + '/accounts/withdraw/', transaction);
        }
      }, {
        key: "transferSender",
        value: function transferSender(transaction) {
          return this.http.put(this.accountsUrl + '/accounts/transferSender/', transaction);
        }
      }, {
        key: "transferRecipient",
        value: function transferRecipient(transaction) {
          return this.http.put(this.accountsUrl + '/accounts/transferRecipient/', transaction);
        }
      }, {
        key: "getStoredId",
        value: function getStoredId() {
          return this.storedId;
        }
      }, {
        key: "setStoredId",
        value: function setStoredId(id) {
          this.storedId = id;
        }
      }]);

      return AccountService;
    }();

    AccountService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AccountService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: User, JwtResponse, AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtResponse", function () {
      return JwtResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var User = function User(status) {
      _classCallCheck(this, User);

      this.status = status;
    };

    var JwtResponse = function JwtResponse(jwtToken) {
      _classCallCheck(this, JwtResponse);

      this.jwtToken = jwtToken;
    };

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
      }

      _createClass(AuthenticationService, [{
        key: "authenticate",
        value: function authenticate(username, password) {
          return this.http.post('https://zipbank-delightful-parrot-qa.cfapps.io/authenticate', {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userData) {
            sessionStorage.setItem('username', username);
            var tokenStr = 'Bearer ' + userData.jwt;
            sessionStorage.setItem('token', tokenStr);
            return userData;
          }));
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('username');
          return !(user === null);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var user = sessionStorage.getItem('username');
          return user;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('userId');
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/bill-service.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/bill-service.service.ts ***!
    \**************************************************/

  /*! exports provided: BillService */

  /***/
  function srcAppServicesBillServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillService", function () {
      return BillService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var BillService =
    /*#__PURE__*/
    function () {
      function BillService(http) {
        _classCallCheck(this, BillService);

        this.http = http;
        this.accountsUrl = 'https://zipbank-delightful-parrot-qa.cfapps.io/API';
      }

      _createClass(BillService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get(this.accountsUrl + '/bills/all_bills');
        }
      }, {
        key: "getBillById",
        value: function getBillById(billId) {
          return this.http.get(this.accountsUrl + '/bills/' + billId);
        }
      }, {
        key: "getBillsByUserId",
        value: function getBillsByUserId(id) {
          return this.http.get(this.accountsUrl + '/bills/user/' + id);
        }
      }, {
        key: "save",
        value: function save(bills) {
          return this.http.post(this.accountsUrl + '/bills/create_bill', bills);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return this.http.delete(this.accountsUrl + '/bills/delete/' + id);
        }
      }, {
        key: "setStoreId",
        value: function setStoreId(id) {
          this.storedId = id;
        }
      }, {
        key: "getStoredId",
        value: function getStoredId() {
          return this.storedId;
        }
      }]);

      return BillService;
    }();

    BillService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BillService);
    /***/
  },

  /***/
  "./src/app/services/http-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/http-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: HttpInterceptorService */

  /***/
  function srcAppServicesHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () {
      return HttpInterceptorService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HttpInterceptorService =
    /*#__PURE__*/
    function () {
      function HttpInterceptorService() {
        _classCallCheck(this, HttpInterceptorService);
      }

      _createClass(HttpInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem('token')
              })
            });
          }

          return next.handle(req);
        }
      }]);

      return HttpInterceptorService;
    }();

    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpInterceptorService);
    /***/
  },

  /***/
  "./src/app/services/notes.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/notes.service.ts ***!
    \*******************************************/

  /*! exports provided: NotesService */

  /***/
  function srcAppServicesNotesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesService", function () {
      return NotesService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/models/user */
    "./src/app/models/user.ts");

    var NotesService =
    /*#__PURE__*/
    function () {
      function NotesService(http, authenticate) {
        _classCallCheck(this, NotesService);

        this.http = http;
        this.authenticate = authenticate;
        this.user = new app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.url = "https://zipbank-delightful-parrot-qa.cfapps.io/user";
      }

      _createClass(NotesService, [{
        key: "getNotes",
        value: function getNotes() {
          return this.http.get(this.url + "/" + sessionStorage.getItem("userId") + "/notes");
        }
      }, {
        key: "removeNotes",
        value: function removeNotes(id) {
          return this.http.delete(this.url + "/notes/" + id + "/delete");
        }
      }, {
        key: "save",
        value: function save(note) {
          return this.http.post(this.url + "/" + sessionStorage.getItem("userId") + "/note", note);
        }
      }, {
        key: "update",
        value: function update(id, note) {
          return this.http.put(this.url + "/notes/" + id, note);
        }
      }]);

      return NotesService;
    }();

    NotesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotesService);
    /***/
  },

  /***/
  "./src/app/services/register.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/register.service.ts ***!
    \**********************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var RegisterService =
    /*#__PURE__*/
    function () {
      function RegisterService(http) {
        _classCallCheck(this, RegisterService);

        this.http = http;
        this.url = "https://zipbank-delightful-parrot-qa.cfapps.io";
      }

      _createClass(RegisterService, [{
        key: "registerUser",
        value: function registerUser(newUser) {
          return this.http.post(this.url + "/register", newUser);
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegisterService);
    /***/
  },

  /***/
  "./src/app/services/transaction-service.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/transaction-service.service.ts ***!
    \*********************************************************/

  /*! exports provided: TransactionService */

  /***/
  function srcAppServicesTransactionServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionService", function () {
      return TransactionService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TransactionService =
    /*#__PURE__*/
    function () {
      function TransactionService(http) {
        _classCallCheck(this, TransactionService);

        this.http = http;
        this.transactionsUrl = 'https://zipbank-delightful-parrot-qa.cfapps.io/API';
      }

      _createClass(TransactionService, [{
        key: "getTransactions",
        value: function getTransactions(accountId) {
          return this.http.get(this.transactionsUrl + '/accounts/' + accountId + '/transactions');
        }
      }, {
        key: "getTop5TransactionsAccount",
        value: function getTop5TransactionsAccount(accountId) {
          return this.http.get(this.transactionsUrl + '/accounts/' + accountId + '/top_5_transactions');
        }
      }, {
        key: "getTop5TransactionsUser",
        value: function getTop5TransactionsUser(userId) {
          return this.http.get(this.transactionsUrl + '/user/' + userId + '/most_recent_transactions');
        }
      }, {
        key: "getTransactionDetails",
        value: function getTransactionDetails(transactionId) {
          return this.http.get(this.transactionsUrl + '/accounts/transactions/' + transactionId);
        }
      }, {
        key: "getStoredId",
        value: function getStoredId() {
          return this.storedId;
        }
      }, {
        key: "setStoredId",
        value: function setStoredId(id) {
          this.storedId = id;
        }
      }]);

      return TransactionService;
    }();

    TransactionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TransactionService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.url = "https://zipbank-delightful-parrot-qa.cfapps.io/";
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser(username) {
          return this.http.get(this.url + "user/get/" + username);
        }
      }, {
        key: "getUserId",
        value: function getUserId(username) {
          return this.http.get(this.url + "user/get/" + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userData) {
            sessionStorage.setItem('userId', userData.userId);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.url + "user/update/" + sessionStorage.getItem('userId'), user);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/transaction-details/transaction-details.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/transaction-details/transaction-details.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionDetailsTransactionDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn {\n    background-color: #2f4353;\n    background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);\n}\n\nhr {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border-style: inset;\n  border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24tZGV0YWlscy90cmFuc2FjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0VBQWtFO0FBQ3RFOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdHJhbnNhY3Rpb24tZGV0YWlscy90cmFuc2FjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY0MzUzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyZjQzNTMgMCUsICNkMmNjYzQgNzQlKTtcbn1cblxuaHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItc3R5bGU6IGluc2V0O1xuICBib3JkZXItd2lkdGg6IDFweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/transaction-details/transaction-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/transaction-details/transaction-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TransactionDetailsComponent */

  /***/
  function srcAppTransactionDetailsTransactionDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function () {
      return TransactionDetailsComponent;
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


    var app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TransactionDetailsComponent =
    /*#__PURE__*/
    function () {
      function TransactionDetailsComponent(transactionService, route, router) {
        _classCallCheck(this, TransactionDetailsComponent);

        this.transactionService = transactionService;
        this.route = route;
        this.router = router;
      }

      _createClass(TransactionDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTransactionetails();
          console.log(this.transaction);
        }
      }, {
        key: "getTransactionetails",
        value: function getTransactionetails() {
          var _this24 = this;

          //const id = + this.route.snapshot.paramMap.get('transactionId');
          this.transactionService.getTransactionDetails(this.transactionService.getStoredId()).subscribe(function (transaction) {
            _this24.transaction = transaction;
          });
        }
      }, {
        key: "list",
        value: function list() {
          var id = +this.route.snapshot.paramMap.get('accountId');
          this.router.navigate(['accounts']);
        }
      }]);

      return TransactionDetailsComponent;
    }();

    TransactionDetailsComponent.ctorParameters = function () {
      return [{
        type: app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransactionDetailsComponent.prototype, "transaction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransactionDetailsComponent.prototype, "tList", void 0);
    TransactionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-details/transaction-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-details.component.css */
      "./src/app/transaction-details/transaction-details.component.css")).default]
    })], TransactionDetailsComponent);
    /***/
  },

  /***/
  "./src/app/transaction-list-by-account/transaction-list-by-account.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/transaction-list-by-account/transaction-list-by-account.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionListByAccountTransactionListByAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".clicker {\n    cursor: pointer;\n}\n\n.hidden {\n    display: none;\n}\n\n.clicker:focus + .hiddendiv{\n    display:block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24tbGlzdC1ieS1hY2NvdW50L3RyYW5zYWN0aW9uLWxpc3QtYnktYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdHJhbnNhY3Rpb24tbGlzdC1ieS1hY2NvdW50L3RyYW5zYWN0aW9uLWxpc3QtYnktYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWNrZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNsaWNrZXI6Zm9jdXMgKyAuaGlkZGVuZGl2e1xuICAgIGRpc3BsYXk6YmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/transaction-list-by-account/transaction-list-by-account.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/transaction-list-by-account/transaction-list-by-account.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: TransactionListByAccountComponent */

  /***/
  function srcAppTransactionListByAccountTransactionListByAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionListByAccountComponent", function () {
      return TransactionListByAccountComponent;
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


    var app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TransactionListByAccountComponent =
    /*#__PURE__*/
    function () {
      function TransactionListByAccountComponent(transactionService, route, router) {
        _classCallCheck(this, TransactionListByAccountComponent);

        this.transactionService = transactionService;
        this.route = route;
        this.router = router;
        this.toggle = true;
      }

      _createClass(TransactionListByAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTransactions();
        }
      }, {
        key: "getTransactions",
        value: function getTransactions() {
          var _this25 = this;

          var id = +this.route.snapshot.paramMap.get('accountId');
          console.log(id);
          this.transactionService.getTransactions(id).subscribe(function (data) {
            return _this25.transactions = data;
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(transaction) {
          this.selectedTransaction = transaction;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.toggle === true) {
            this.toggle = false;
          } else {
            this.toggle = true;
          }

          console.log(this.transactionDetails, event);
        }
      }, {
        key: "onClick2",
        value: function onClick2(id) {
          this.transactionService.setStoredId(id);
          this.router.navigateByUrl('transactionDetails');
        }
      }]);

      return TransactionListByAccountComponent;
    }();

    TransactionListByAccountComponent.ctorParameters = function () {
      return [{
        type: app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransactionListByAccountComponent.prototype, "account", void 0);
    TransactionListByAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-list-by-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-list-by-account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list-by-account/transaction-list-by-account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-list-by-account.component.css */
      "./src/app/transaction-list-by-account/transaction-list-by-account.component.css")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TransactionListByAccountComponent);
    /***/
  },

  /***/
  "./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionListTopByUserTransactionListTopByUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWxpc3QtdG9wLWJ5LXVzZXIvdHJhbnNhY3Rpb24tbGlzdC10b3AtYnktdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: TransactionListTopByUserComponent */

  /***/
  function srcAppTransactionListTopByUserTransactionListTopByUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionListTopByUserComponent", function () {
      return TransactionListTopByUserComponent;
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


    var app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TransactionListTopByUserComponent =
    /*#__PURE__*/
    function () {
      function TransactionListTopByUserComponent(transactionService, route, router) {
        _classCallCheck(this, TransactionListTopByUserComponent);

        this.transactionService = transactionService;
        this.route = route;
        this.router = router;
      }

      _createClass(TransactionListTopByUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTop5TransactionsByUser();
        }
      }, {
        key: "getTop5TransactionsByUser",
        value: function getTop5TransactionsByUser() {
          var _this26 = this;

          var id = +this.route.snapshot.paramMap.get('userId');
          this.transactionService.getTop5TransactionsUser(id).subscribe(function (data) {
            return _this26.transactionsUser = data;
          });
        }
      }]);

      return TransactionListTopByUserComponent;
    }();

    TransactionListTopByUserComponent.ctorParameters = function () {
      return [{
        type: app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransactionListTopByUserComponent.prototype, "user", void 0);
    TransactionListTopByUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-list-top-by-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-list-top-by-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-list-top-by-user.component.css */
      "./src/app/transaction-list-top-by-user/transaction-list-top-by-user.component.css")).default]
    })], TransactionListTopByUserComponent);
    /***/
  },

  /***/
  "./src/app/transaction-list/transaction-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/transaction-list/transaction-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionListTransactionListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWxpc3QvdHJhbnNhY3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/transaction-list/transaction-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/transaction-list/transaction-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: TransactionListComponent */

  /***/
  function srcAppTransactionListTransactionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionListComponent", function () {
      return TransactionListComponent;
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


    var app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TransactionListComponent =
    /*#__PURE__*/
    function () {
      function TransactionListComponent(transactionService, route, router) {
        _classCallCheck(this, TransactionListComponent);

        this.transactionService = transactionService;
        this.route = route;
        this.router = router;
        this.id = +this.route.snapshot.paramMap.get('accountNumber');
      }

      _createClass(TransactionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.goToTransactionsList();
          // this.transactionService.getTransactions(this.id)
          // .subscribe(data => {this.transaction = data});
        }
      }, {
        key: "goToTransactionsList",
        value: function goToTransactionsList() {
          this.router.navigate(['transactions']);
        }
      }]);

      return TransactionListComponent;
    }();

    TransactionListComponent.ctorParameters = function () {
      return [{
        type: app_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TransactionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-list/transaction-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-list.component.css */
      "./src/app/transaction-list/transaction-list.component.css")).default]
    })], TransactionListComponent);
    /***/
  },

  /***/
  "./src/app/transactions/transactions.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/transactions/transactions.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionsTransactionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/transactions/transactions.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/transactions/transactions.component.ts ***!
    \********************************************************/

  /*! exports provided: Transactions */

  /***/
  function srcAppTransactionsTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transactions", function () {
      return Transactions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Transactions =
    /*#__PURE__*/
    function () {
      function Transactions() {
        _classCallCheck(this, Transactions);
      }

      _createClass(Transactions, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAccountNumber",
        value: function getAccountNumber() {
          return this.accountNumber;
        }
      }, {
        key: "getAmount",
        value: function getAmount() {
          return this.amount.toFixed(2);
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }, {
        key: "getType",
        value: function getType() {
          return this.type;
        }
      }]);

      return Transactions;
    }();

    Transactions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transactions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transactions.component.css */
      "./src/app/transactions/transactions.component.css")).default]
    })], Transactions);
    /***/
  },

  /***/
  "./src/app/transfer-form/transfer-form.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/transfer-form/transfer-form.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransferFormTransferFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyLWZvcm0vdHJhbnNmZXItZm9ybS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/transfer-form/transfer-form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/transfer-form/transfer-form.component.ts ***!
    \**********************************************************/

  /*! exports provided: TransferFormComponent */

  /***/
  function srcAppTransferFormTransferFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferFormComponent", function () {
      return TransferFormComponent;
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


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TransferFormComponent =
    /*#__PURE__*/
    function () {
      function TransferFormComponent(route, router, accountService, transactionService) {
        _classCallCheck(this, TransferFormComponent);

        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.transactionSender = new _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["Transactions"]();
        this.transactionRecipient = new _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["Transactions"]();
        this.transferForm = this.createFormGroup();
      }

      _createClass(TransferFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.accountService.getAccountsByUserId().subscribe(function (data) {
            _this27.accounts = data;
          });
        }
      }, {
        key: "gotoAccountsList",
        value: function gotoAccountsList() {
          this.router.navigateByUrl('accounts');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this28 = this;

          this.transactionSender.accountNumber = this.transferForm.controls['accountId'].value;
          this.transactionSender.amount = this.transferForm.controls['amount'].value;
          this.accountService.transferSender(this.transactionSender).subscribe(function (data) {
            return _this28.gotoAccountsList();
          });
          this.transactionRecipient.accountNumber = this.transferForm.controls['recipientId'].value;
          this.transactionRecipient.amount = this.transferForm.controls['amount'].value;
          this.accountService.transferRecipient(this.transactionRecipient).subscribe(function (data) {
            return _this28.gotoAccountsList();
          });
        }
      }, {
        key: "createFormGroup",
        value: function createFormGroup() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            accountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            recipientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }
      }]);

      return TransferFormComponent;
    }();

    TransferFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]
      }];
    };

    TransferFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transfer-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transfer-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-form/transfer-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transfer-form.component.css */
      "./src/app/transfer-form/transfer-form.component.css")).default]
    })], TransferFormComponent);
    /***/
  },

  /***/
  "./src/app/transfer-other/transfer-other.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/transfer-other/transfer-other.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransferOtherTransferOtherComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyLW90aGVyL3RyYW5zZmVyLW90aGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/transfer-other/transfer-other.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/transfer-other/transfer-other.component.ts ***!
    \************************************************************/

  /*! exports provided: TransferOtherComponent */

  /***/
  function srcAppTransferOtherTransferOtherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferOtherComponent", function () {
      return TransferOtherComponent;
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


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TransferOtherComponent =
    /*#__PURE__*/
    function () {
      function TransferOtherComponent(route, router, accountService, transactionService) {
        _classCallCheck(this, TransferOtherComponent);

        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.transactionSender = new _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["Transactions"]();
        this.transactionRecipient = new _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["Transactions"]();
        this.otherForm = this.createFormGroup();
      }

      _createClass(TransferOtherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.accountService.getAccountsByUserId().subscribe(function (data) {
            _this29.accounts = data;
          });
        }
      }, {
        key: "gotoAccountsList",
        value: function gotoAccountsList() {
          this.router.navigateByUrl('accounts');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this30 = this;

          this.transactionSender.accountNumber = this.otherForm.controls['accountId'].value;
          this.transactionSender.amount = this.otherForm.controls['amount'].value;
          this.accountService.transferSender(this.transactionSender).subscribe(function (data) {
            return _this30.gotoAccountsList();
          });
          this.transactionRecipient.accountNumber = this.otherForm.controls['recipientId'].value;
          this.transactionRecipient.amount = this.otherForm.controls['amount'].value;
          this.accountService.transferRecipient(this.transactionRecipient).subscribe(function (data) {
            return _this30.gotoAccountsList();
          });
        }
      }, {
        key: "createFormGroup",
        value: function createFormGroup() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            accountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            recipientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }
      }]);

      return TransferOtherComponent;
    }();

    TransferOtherComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]
      }];
    };

    TransferOtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transfer-other',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transfer-other.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transfer-other/transfer-other.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transfer-other.component.css */
      "./src/app/transfer-other/transfer-other.component.css")).default]
    })], TransferOtherComponent);
    /***/
  },

  /***/
  "./src/app/withdraw-form/withdraw-form.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/withdraw-form/withdraw-form.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWithdrawFormWithdrawFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpdGhkcmF3LWZvcm0vd2l0aGRyYXctZm9ybS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/withdraw-form/withdraw-form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/withdraw-form/withdraw-form.component.ts ***!
    \**********************************************************/

  /*! exports provided: WithdrawFormComponent */

  /***/
  function srcAppWithdrawFormWithdrawFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawFormComponent", function () {
      return WithdrawFormComponent;
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


    var _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/account-service.service */
    "./src/app/services/account-service.service.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/transaction-service.service */
    "./src/app/services/transaction-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var WithdrawFormComponent =
    /*#__PURE__*/
    function () {
      function WithdrawFormComponent(route, router, accountService, transactionService) {
        _classCallCheck(this, WithdrawFormComponent);

        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.transaction = new _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["Transactions"]();
        this.withdrawForm = this.createFormGroup();
      }

      _createClass(WithdrawFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.accountService.getAccountsByUserId().subscribe(function (data) {
            _this31.accounts = data;
          });
        }
      }, {
        key: "gotoAccountsList",
        value: function gotoAccountsList() {
          this.router.navigateByUrl('accounts');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this32 = this;

          this.transaction.accountNumber = this.withdrawForm.controls['accountId'].value;
          this.transaction.amount = this.withdrawForm.controls['amount'].value;
          this.accountService.accountWithdraw(this.transaction).subscribe(function (data) {
            return _this32.gotoAccountsList();
          });
        }
      }, {
        key: "createFormGroup",
        value: function createFormGroup() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            accountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }
      }]);

      return WithdrawFormComponent;
    }();

    WithdrawFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_account_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]
      }];
    };

    WithdrawFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-withdraw-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./withdraw-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/withdraw-form/withdraw-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./withdraw-form.component.css */
      "./src/app/withdraw-form/withdraw-form.component.css")).default]
    })], WithdrawFormComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/brian/dev/FinalProj/FlipCoin-Front-End/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map