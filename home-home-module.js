(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/routes/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/routes/home/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/routes/home/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/routes/home/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">The Support Wheel of Fate\r\n    <small>Select one of your teams and find the schedules below!!!</small>\r\n</div>\r\n<!-- START row-->\r\n<div class=\"calendar-app\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Team\" [matAutocomplete]=\"auto\" [formControl]=\"teamCtrl\">\r\n                    </mat-form-field>\r\n                    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayTeamInAutoComplete\" (optionSelected)='teamChanged($event.option.value)'>\r\n                        <mat-option *ngFor=\"let team of filteredTeams | async\" [value]=\"team\">\r\n                            {{ team.name }}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n                    <div #fullcalendar class=\"calendar\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/home/home/home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/routes/home/home/home.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n.home-container {\n  margin: 0 auto;\n  max-width: 970px; }\n.home-container .home-logo {\n    width: 240px; }\n@media only screen and (max-width: 768px) {\n    .home-container .home-text {\n      text-align: center; } }\n"

/***/ }),

/***/ "./src/app/routes/home/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/home/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs-compat/_esm5/add/operator/startWith.js");
/* harmony import */ var _services_teams_teams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/teams/teams.service */ "./src/app/services/teams/teams.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(usersService, teamsService) {
        this.usersService = usersService;
        this.teamsService = teamsService;
        this.calendarOptions = {
            // isRTL: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            buttonIcons: {
                prev: ' fa fa-caret-left',
                next: ' fa fa-caret-right'
            },
            buttonText: {
                today: 'Today',
                month: 'Month',
                week: 'Week',
                day: 'Day'
            },
            editable: false,
            droppable: false,
            eventOrder: 'order',
            viewRender: this.calendarDateChanged.bind(this)
        };
        this.selectedEvent = null;
        // Component - Autocomplete
        this.teamCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.loadTeams();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.$calendar = $(this.fullcalendar.nativeElement);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        // init calendar plugin
        this.$calendar.fullCalendar(this.calendarOptions);
    };
    HomeComponent.prototype.calendarDateChanged = function () {
        this.loadShiftsByTeam();
    };
    HomeComponent.prototype.displayTeamInAutoComplete = function (team) {
        return team ? team.name : undefined;
    };
    HomeComponent.prototype.filterTeams = function (val) {
        return val ? this.teams.filter(function (team) { return new RegExp(val, 'gi').test(team.name); }) : this.teams;
    };
    HomeComponent.prototype.loadShiftsByTeam = function () {
        var _this = this;
        if (this.selectedTeam == undefined)
            return;
        var date = this.$calendar.fullCalendar('getDate');
        var month = date.month();
        var year = date.year();
        this.calendarOptions.events = [];
        this.$calendar.fullCalendar('removeEvents');
        this.teamsService.getShifts(this.selectedTeam.id, month, year).subscribe(function (shifts) {
            console.log(shifts);
            var events = shifts.map(function (shift) {
                return {
                    title: shift.engineer,
                    start: new Date(shift.date),
                    order: shift.order,
                    allDay: true,
                    backgroundColor: '#0073b7',
                    borderColor: '#0073b7' //Blue
                };
            });
            // display events in calendar
            _this.$calendar.fullCalendar('renderEvents', events);
        });
    };
    HomeComponent.prototype.loadTeams = function () {
        var _this = this;
        this.usersService.getTeams().subscribe(function (teams) {
            _this.teams = teams;
            _this.filteredTeams = _this.teamCtrl.valueChanges
                .startWith(null)
                .map(function (team) { return _this.filterTeams(team); });
        });
    };
    HomeComponent.prototype.teamChanged = function (team) {
        this.selectedTeam = team;
        this.loadShiftsByTeam();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.$calendar.fullCalendar('destroy');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fullcalendar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "fullcalendar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"])
    ], HomeComponent.prototype, "matAutocomplete", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/routes/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/routes/home/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_teams_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/teams/teams.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/teams/teams.service.ts ***!
  \*************************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamsService = /** @class */ (function () {
    function TeamsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'teams';
    }
    TeamsService.prototype.getShifts = function (teamId, month, year) {
        var data = {
            TeamId: teamId,
            Month: month,
            Year: year
        };
        return this.http.post(this.apiUrl + '/shifts', data);
    };
    TeamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamsService);
    return TeamsService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map