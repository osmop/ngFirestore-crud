webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Users</h1>\n\n<!-- <p>Name:\n    <input type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"addUser.name\">\n</p> -->\n\n<table class=\"table table-bordered\">\n  <thead>\n    <tr style=\"background-color: rgb(194, 187, 187);\">\n      <th>Name</th>\n      <th>Email ID</th>\n      <th>Contact Number</th>\n      <th>Action</th>\n    </tr>\n    <tr>\n      <td>\n        <!-- <p>Name:\n        <input type=\"text\" class=\"form-control\" name=\"item\" placeholder=\"Name\"\n        name=\"name\"\n        [(ngModel)]=\"addUser.name\">\n      </p> -->\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addUser.name\" placeholder=\"Name\">\n      </td>\n      <td>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addUser.email_id\" placeholder=\"Email Id\">\n      </td>\n      <td>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addUser.contact_number\" placeholder=\"Contact Number\">\n      </td>\n      <td>\n      <button class=\"btn btn-success\" (click)=\"insert()\">Insert</button>\n      </td>\n    </tr>\n  </thead>\n\n  <tbody *ngFor=\"let item of user | async\">\n    <tr>\n      <td>\n        {{item.name}}\n        <!-- {{item.name | json}} -->\n      </td>\n      <td>\n        {{item.email_id}}\n      </td>\n      <td>\n        {{item.contact_number}}\n      </td>\n      <td>\n        <button class=\"btn btn-danger\" (click)=\"delete(item)\">\n          <span class=\"glyphicon glyphicon-trash\">Delete</span>\n        </button>\n        <button class=\"btn btn-primary\" (click)=\"edit(item)\">\n          <span class=\"glyphicon glyphicon-pen\">Update</span>\n        </button>\n      </td>\n    </tr>\n\n    <tr *ngIf=\"editState && itemToUpdate.id == item.id\">\n      <td colspan=5>\n        <div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemToUpdate.name\" placeholder=\"Name\">\n            </div>\n            <div class=\"col-md-3\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemToUpdate.email_id\" placeholder=\"Email\">\n            </div>\n            <div class=\"col-md-3\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemToUpdate.contact_number\" placeholder=\"Contact\">\n            </div>\n            <div class=\"col-md-3\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemToUpdate.image\" placeholder=\"Image\">\n            </div>\n            <div class=\"col-md-3\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemToUpdate.id\" placeholder=\"Id\">\n            </div>\n          </div>\n          <p></p>\n          <div class=\"row\">\n            <div class=\"col-md-4\" style=\"text-align:left;\">\n              <button class=\"btn btn-primary\" (click)=\"update()\">Update</button>\n              <button class=\"btn btn-default\" (click)=\"clearState()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </td>\n    </tr>\n\n  </tbody>\n\n</table>\n\n\n<!-- Note test -->\n\n<h1>Notes</h1>\n\n<!-- Note test 1 -->\n<!-- <div *ngFor=\"let note of notes | async\">\n    <h2>{{ note | json }}</h2>\n</div> -->\n\n\n<!-- Note test 2 -->\n<h2>{{ note | async | json }}</h2>\n<input [(ngModel)]=\"newContent\">\n<button (click)=\"updateContent()\">UpdateContentInFireStoreDb</button>\n\n\n\n\n<!-- <script src=\"https://www.gstatic.com/firebasejs/4.8.1/firebase.js\"></script>\n<script>\n  // Initialize Firebase\n  var config = {\n    apiKey: \"AIzaSyDIvNPR-vyRixAeb7izxQ9Wi8ukQBC9WWo\",\n    authDomain: \"osmofirestore.firebaseapp.com\",\n    databaseURL: \"https://osmofirestore.firebaseio.com\",\n    projectId: \"osmofirestore\",\n    storageBucket: \"osmofirestore.appspot.com\",\n    messagingSenderId: \"38598776836\"\n  };\n  firebase.initializeApp(config);\n</script> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // ???
var User = (function () {
    function User(name, email_id, contact_number, image, id) {
        this.name = name;
        this.email_id = email_id;
        this.contact_number = contact_number;
        this.image = image;
        this.id = id;
        // image and id are optional properties
    }
    return User;
}());
var AppComponent = (function () {
    function AppComponent(afs) {
        this.afs = afs;
        this.title = 'app';
        this.editState = false;
        this.addUser = new User('', '', null, null, null);
    }
    AppComponent.prototype.ngOnInit = function () {
        // 'users' below is the reference to UsersCollection
        this.UsersCollection = this.afs.collection('users', function (ref) { return ref.orderBy('name', 'asc'); });
        // this.UsersCollection = this.afs.collection('users', ref => { return ref.where('name', '==', 'n3'); });
        // take snapshot of the changes in UsersCollection
        this.user = this.UsersCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        // Search example with where function:
        // this.UsersCollection = this.afs.collection('users', ref=> {
        //   return ref.where('number', '>', 11).where('number', '<', 21)
        // });
        // this.user = this.UsersCollection.valueChanges()
        // Note test 1
        // this.notesCollection = this.afs.collection('notes');  // reference
        // this.notesCollection = this.afs.collection('notes', ref => {
        //   return ref.orderBy('content');
        // });  // reference
        // this.notes = this.notesCollection.valueChanges();  // observable of notes data
        // Note test 2
        this.noteDoc = this.afs.doc('/notes/eqsrRUoY91SPv4iY2fey');
        this.note = this.noteDoc.valueChanges();
    };
    AppComponent.prototype.insert = function () {
        this.UsersCollection.add({ name: this.addUser.name, email_id: this.addUser.email_id, contact_number: this.addUser.contact_number,
            image: this.addUser.image, id: this.addUser.id });
        // this.addUser = new User('', '', null, null, null);
    };
    AppComponent.prototype.delete = function (item) {
        this.UsersDoc = this.afs.doc("users/" + item.id);
        this.UsersDoc.delete();
    };
    AppComponent.prototype.edit = function (item) {
        this.editState = true;
        this.itemToUpdate = new User(item.name, item.email_id, item.contact_number, item.image, item.id);
    };
    AppComponent.prototype.update = function () {
        this.UsersDoc = this.afs.doc("users/" + this.itemToUpdate.id);
        this.UsersDoc.update({ name: this.itemToUpdate.name, email_id: this.itemToUpdate.email_id,
            contact_number: this.itemToUpdate.contact_number, image: this.itemToUpdate.image, id: this.itemToUpdate.id });
    };
    AppComponent.prototype.clearState = function () {
        this.editState = false;
        this.itemToUpdate = null;
    };
    // Note test 2
    AppComponent.prototype.updateContent = function () {
        this.noteDoc.update({ content: this.newContent });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var firebaseConfig = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebaseConfig;



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */]
                // AngularFirestoreModule.enablePersistence()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyDIvNPR-vyRixAeb7izxQ9Wi8ukQBC9WWo",
        authDomain: "osmofirestore.firebaseapp.com",
        databaseURL: "https://osmofirestore.firebaseio.com",
        projectId: "osmofirestore",
        storageBucket: "osmofirestore.appspot.com",
        messagingSenderId: "38598776836"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map