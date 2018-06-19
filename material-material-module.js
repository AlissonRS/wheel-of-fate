(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-material-module"],{

/***/ "./node_modules/@agm/core/core.module.js":
/*!***********************************************!*\
  !*** ./node_modules/@agm/core/core.module.js ***!
  \***********************************************/
/*! exports provided: coreDirectives, AgmCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");














/**
 * @internal
 */
function coreDirectives() {
    return [
        _directives_map__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _directives_marker__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"], _directives_info_window__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"], _directives_circle__WEBPACK_IMPORTED_MODULE_2__["AgmCircle"],
        _directives_polygon__WEBPACK_IMPORTED_MODULE_5__["AgmPolygon"], _directives_polyline__WEBPACK_IMPORTED_MODULE_6__["AgmPolyline"], _directives_polyline_point__WEBPACK_IMPORTED_MODULE_7__["AgmPolylinePoint"], _directives_kml_layer__WEBPACK_IMPORTED_MODULE_8__["AgmKmlLayer"],
        _directives_data_layer__WEBPACK_IMPORTED_MODULE_9__["AgmDataLayer"]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_12__["BROWSER_GLOBALS_PROVIDERS"].concat([
                { provide: _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["MapsAPILoader"], useClass: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["LazyMapsAPILoader"] },
                { provide: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["LAZY_MAPS_API_CONFIG"], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    return AgmCoreModule;
}());

AgmCoreModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
];
/** @nocollapse */
AgmCoreModule.ctorParameters = function () { return []; };
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives.js":
/*!**********************************************!*\
  !*** ./node_modules/@agm/core/directives.js ***!
  \**********************************************/
/*! exports provided: AgmMap, AgmCircle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives_map__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives_circle__WEBPACK_IMPORTED_MODULE_1__["AgmCircle"]; });

/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives_info_window__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"]; });

/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives_kml_layer__WEBPACK_IMPORTED_MODULE_3__["AgmKmlLayer"]; });

/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives_data_layer__WEBPACK_IMPORTED_MODULE_4__["AgmDataLayer"]; });

/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives_marker__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"]; });

/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives_polygon__WEBPACK_IMPORTED_MODULE_6__["AgmPolygon"]; });

/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives_polyline__WEBPACK_IMPORTED_MODULE_7__["AgmPolyline"]; });

/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__["AgmPolylinePoint"]; });










//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/circle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/circle.js ***!
  \*****************************************************/
/*! exports provided: AgmCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");


var AgmCircle = (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    AgmCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    AgmCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    return AgmCircle;
}());

AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex', 'clickable'
];
AgmCircle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'agm-circle'
            },] },
];
/** @nocollapse */
AgmCircle.ctorParameters = function () { return [
    { type: _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"], },
]; };
AgmCircle.propDecorators = {
    'latitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'longitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'clickable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'draggable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['circleDraggable',] },],
    'editable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fillColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fillOpacity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'radius': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeOpacity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokePosition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeWeight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'visible': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'centerChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'circleClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'circleDblClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'drag': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'dragEnd': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'dragStart': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mouseDown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mouseMove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mouseOut': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mouseOver': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mouseUp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'radiusChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'rightClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/data-layer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/data-layer.js ***!
  \*********************************************************/
/*! exports provided: AgmDataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmDataLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmDataLayer.prototype.toString = function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    return AgmDataLayer;
}());

AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'agm-data-layer'
            },] },
];
/** @nocollapse */
AgmDataLayer.ctorParameters = function () { return [
    { type: _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"], },
]; };
AgmDataLayer.propDecorators = {
    'layerClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'geoJson': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'style': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    AgmInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    AgmInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    return AgmInfoWindow;
}());

AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'agm-info-window',
                template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmInfoWindow.ctorParameters = function () { return [
    { type: _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
AgmInfoWindow.propDecorators = {
    'latitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'longitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disableAutoPan': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'maxWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'isOpen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'infoWindowClose': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/kml-layer.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/kml-layer.js ***!
  \********************************************************/
/*! exports provided: AgmKmlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");


var layerId = 0;
var AgmKmlLayer = (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmKmlLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmKmlLayer;
}());

AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'agm-kml-layer'
            },] },
];
/** @nocollapse */
AgmKmlLayer.ctorParameters = function () { return [
    { type: _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"], },
]; };
AgmKmlLayer.propDecorators = {
    'clickable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'preserveViewport': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'screenOverlays': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'suppressInfoWindows': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'url': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'layerClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'defaultViewportChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'statusChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");









/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = (function () {
    function AgmMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    AgmMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleIdleEvent();
    };
    /** @internal */
    AgmMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    AgmMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    AgmMap.prototype.triggerResize = function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    return AgmMap;
}());

/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
    'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
    'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
    'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
    'mapTypeId', 'clickableIcons', 'gestureHandling'
];
AgmMap.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'agm-map',
                providers: [
                    _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__["PolylineManager"],
                    _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__["DataLayerManager"]
                ],
                host: {
                    // todo: deprecated - we will remove it with the next version
                    '[class.sebm-google-map-container]': 'true'
                },
                styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmMap.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
]; };
AgmMap.propDecorators = {
    'longitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'latitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zoom': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'minZoom': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'maxZoom': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'draggable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
    'disableDoubleClickZoom': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disableDefaultUI': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'scrollwheel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'backgroundColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'draggableCursor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'draggingCursor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'keyboardShortcuts': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zoomControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zoomControlOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'styles': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'usePanning': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'streetViewControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'streetViewControlOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fitBounds': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'scaleControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'scaleControlOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'mapTypeControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'mapTypeControlOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'panControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'panControlOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'rotateControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'rotateControlOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fullscreenControl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fullscreenControlOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'mapTypeId': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'clickableIcons': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'gestureHandling': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'mapClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mapRightClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mapDblClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'centerChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'boundsChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'idle': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'zoomChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mapReady': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/marker.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/marker.js ***!
  \*****************************************************/
/*! exports provided: AgmMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");



var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @internal
         */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    AgmMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    AgmMarker.prototype.id = function () { return this._id; };
    /** @internal */
    AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmMarker;
}());

AgmMarker.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'agm-marker'
            },] },
];
/** @nocollapse */
AgmMarker.ctorParameters = function () { return [
    { type: _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"], },
]; };
AgmMarker.propDecorators = {
    'latitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'longitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'label': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'draggable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerDraggable',] },],
    'iconUrl': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'visible': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'openInfoWindow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'opacity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'clickable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerClickable',] },],
    'markerClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'dragEnd': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mouseOver': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'mouseOut': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'infoWindow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_info_window__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"],] },],
};
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polygon.js":
/*!******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polygon.js ***!
  \******************************************************/
/*! exports provided: AgmPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This even is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    AgmPolygon.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolygon;
}());

AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible'
];
AgmPolygon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'agm-polygon'
            },] },
];
/** @nocollapse */
AgmPolygon.ctorParameters = function () { return [
    { type: _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"], },
]; };
AgmPolygon.propDecorators = {
    'clickable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'draggable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polyDraggable',] },],
    'editable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fillColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fillOpacity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'geodesic': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'paths': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeOpacity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeWeight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'visible': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'polyClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyDblClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyDrag': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyDragEnd': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyDragStart': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyMouseDown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyMouseMove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyMouseOut': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyMouseOver': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyMouseUp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'polyRightClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-point.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline-point.js ***!
  \*************************************************************/
/*! exports provided: AgmPolylinePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = (function () {
    function AgmPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    return AgmPolylinePoint;
}());

AgmPolylinePoint.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
];
/** @nocollapse */
AgmPolylinePoint.ctorParameters = function () { return []; };
AgmPolylinePoint.propDecorators = {
    'latitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'longitude': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'positionChanged': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline.js ***!
  \*******************************************************/
/*! exports provided: AgmPolyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _polyline_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmPolyline.prototype._getPoints = function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    AgmPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolyline;
}());

AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex'
];
AgmPolyline.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'agm-polyline'
            },] },
];
/** @nocollapse */
AgmPolyline.ctorParameters = function () { return [
    { type: _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"], },
]; };
AgmPolyline.propDecorators = {
    'clickable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'draggable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polylineDraggable',] },],
    'editable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'geodesic': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeOpacity': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'strokeWeight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'visible': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'zIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'lineClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineDblClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineDrag': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineDragEnd': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineDragStart': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineMouseDown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineMouseMove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineMouseOut': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineMouseOver': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineMouseUp': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'lineRightClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'points': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_polyline_point__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"],] },],
};
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "./node_modules/@agm/core/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@agm/core/index.js ***!
  \*****************************************/
/*! exports provided: AgmCoreModule, AgmMap, AgmCircle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, GoogleMapsAPIWrapper, CircleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/@agm/core/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmCircle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmInfoWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmKmlLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmDataLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolylinePoint"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/@agm/core/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LazyMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["NoOpMapsAPILoader"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.module */ "./node_modules/@agm/core/core.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]; });

// main modules


// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services.js":
/*!********************************************!*\
  !*** ./node_modules/@agm/core/services.js ***!
  \********************************************/
/*! exports provided: GoogleMapsAPIWrapper, CircleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsAPIWrapper"]; });

/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_2__["InfoWindowManager"]; });

/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"]; });

/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_4__["PolygonManager"]; });

/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_5__["PolylineManager"]; });

/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_6__["KmlLayerManager"]; });

/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_7__["DataLayerManager"]; });

/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_8__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_8__["LazyMapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["MapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/maps-api-loader/noop-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["NoOpMapsAPILoader"]; });












//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._loader.load().then(function () {
            var map = new google.maps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    GoogleMapsAPIWrapper.prototype.createDataLayer = function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    return GoogleMapsAPIWrapper;
}());

GoogleMapsAPIWrapper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
GoogleMapsAPIWrapper.ctorParameters = function () { return [
    { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    return CircleManager;
}());

CircleManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
CircleManager.ctorParameters = function () { return [
    { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    DataLayerManager.prototype.addDataLayer = function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    DataLayerManager.prototype.getDataFeatures = function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    return DataLayerManager;
}());

DataLayerManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
DataLayerManager.ctorParameters = function () { return [
    { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return InfoWindowManager;
}());

InfoWindowManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
InfoWindowManager.ctorParameters = function () { return [
    { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
]; };
//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    KmlLayerManager.prototype.addKmlLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return KmlLayerManager;
}());

KmlLayerManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
KmlLayerManager.ctorParameters = function () { return [
    { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return MarkerManager;
}());

MarkerManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
MarkerManager.ctorParameters = function () { return [
    { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolygonManager;
}());

PolygonManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
PolygonManager.ctorParameters = function () { return [
    { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolylineManager;
}());

PolylineManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
PolylineManager.ctorParameters = function () { return [
    { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        var _this = _super.call(this) || this;
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        script.src = this._getScriptSrc(callbackName);
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[callbackName] = function () {
                resolve();
            };
            script.onerror = function (error) {
                reject(error);
            };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    return LazyMapsAPILoader;
}(_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]));

LazyMapsAPILoader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
LazyMapsAPILoader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
    { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["WindowRef"], },
    { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["DocumentRef"], },
]; };
//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MapsAPILoader = (function () {
    function MapsAPILoader() {
    }
    return MapsAPILoader;
}());

MapsAPILoader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
MapsAPILoader.ctorParameters = function () { return []; };
//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/browser-globals.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/utils/browser-globals.js ***!
  \*********************************************************/
/*! exports provided: WindowRef, DocumentRef, BROWSER_GLOBALS_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_GLOBALS_PROVIDERS", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ "./src/app/routes/material/cards/cards.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/material/cards/cards.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Cards\r\n   <small>A card is a piece of paper with unique related</small>\r\n</div>\r\n<div class=\"container container-md\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg4.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-primary btn-circle btn-lg\" type=\"button\">\r\n                        <em class=\"icon-heart\"></em>\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Eva Marshall</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg5.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-info btn-circle btn-lg\" type=\"button\">15</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Alvin Perry</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg7.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-danger btn-circle btn-lg\" type=\"button\">\r\n                        <em class=\"fa fa-retweet\"></em>\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Janice James</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg8.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-success btn-circle btn-lg\" type=\"button\">3</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Roberta Wallace</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg10.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-primary btn-circle btn-lg\" type=\"button\">\r\n                        <em class=\"icon-star\"></em>\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Hector Stewart</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg4.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-purple btn-circle btn-lg\" type=\"button\">\r\n                        <em class=\"icon-bubble\"></em>\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Johnny</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg5.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-primary btn-circle btn-lg\" type=\"button\">25</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Alyssa</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg7.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-green btn-circle btn-lg\" type=\"button\">50</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Eileen</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-item\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg4.jpg\" alt=\"MaterialImg\" />\r\n                    <p class=\"p text-white\">Paracosm</p>\r\n                </div>\r\n                <div class=\"card-offset pull-right\">\r\n                    <button class=\"btn btn-pink btn-circle btn-lg\" type=\"button\">\r\n                        <em class=\"icon-share\"></em>\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"m0\">Aenean</h4>\r\n                    <p class=\"m0\"><a class=\"mr-sm\" href=\"\">malesuada</a>\r\n                        <span class=\"mr-sm text-muted\">by</span><a href=\"\">Kay</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/cards/cards.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/material/cards/cards.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/material/cards/cards.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/cards/cards.component.ts ***!
  \**********************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/routes/material/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/routes/material/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/colors/colors.component.html":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/colors/colors.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-md\">\r\n    <div class=\"card\">\r\n        <div class=\"card-heading bg-primary\">\r\n            <div class=\"card-title\">Material Design Color Palette</div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row mb-lg\">\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-red-500\">\r\n                        <div class=\"mb-lg\">Red</div>.bg-red-500</div>\r\n                    <div class=\"p bg-red-50\">.bg-red-50</div>\r\n                    <div class=\"p bg-red-100\">.bg-red-100</div>\r\n                    <div class=\"p bg-red-200\">.bg-red-200</div>\r\n                    <div class=\"p bg-red-300\">.bg-red-300</div>\r\n                    <div class=\"p bg-red-400\">.bg-red-400</div>\r\n                    <div class=\"p bg-red-500\">.bg-red-500</div>\r\n                    <div class=\"p bg-red-600\">.bg-red-600</div>\r\n                    <div class=\"p bg-red-700\">.bg-red-700</div>\r\n                    <div class=\"p bg-red-800\">.bg-red-800</div>\r\n                    <div class=\"p bg-red-900\">.bg-red-900</div>\r\n                    <div class=\"p bg-red-A100\">.bg-red-A100</div>\r\n                    <div class=\"p bg-red-A200\">.bg-red-A200</div>\r\n                    <div class=\"p bg-red-A400\">.bg-red-A400</div>\r\n                    <div class=\"p bg-red-A700\">.bg-red-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-pink-500\">\r\n                        <div class=\"mb-lg\">pink</div>.bg-pink-500</div>\r\n                    <div class=\"p bg-pink-50\">.bg-pink-50</div>\r\n                    <div class=\"p bg-pink-100\">.bg-pink-100</div>\r\n                    <div class=\"p bg-pink-200\">.bg-pink-200</div>\r\n                    <div class=\"p bg-pink-300\">.bg-pink-300</div>\r\n                    <div class=\"p bg-pink-400\">.bg-pink-400</div>\r\n                    <div class=\"p bg-pink-500\">.bg-pink-500</div>\r\n                    <div class=\"p bg-pink-600\">.bg-pink-600</div>\r\n                    <div class=\"p bg-pink-700\">.bg-pink-700</div>\r\n                    <div class=\"p bg-pink-800\">.bg-pink-800</div>\r\n                    <div class=\"p bg-pink-900\">.bg-pink-900</div>\r\n                    <div class=\"p bg-pink-A100\">.bg-pink-A100</div>\r\n                    <div class=\"p bg-pink-A200\">.bg-pink-A200</div>\r\n                    <div class=\"p bg-pink-A400\">.bg-pink-A400</div>\r\n                    <div class=\"p bg-pink-A700\">.bg-pink-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-purple-500\">\r\n                        <div class=\"mb-lg\">purple</div>.bg-purple-500</div>\r\n                    <div class=\"p bg-purple-50\">.bg-purple-50</div>\r\n                    <div class=\"p bg-purple-100\">.bg-purple-100</div>\r\n                    <div class=\"p bg-purple-200\">.bg-purple-200</div>\r\n                    <div class=\"p bg-purple-300\">.bg-purple-300</div>\r\n                    <div class=\"p bg-purple-400\">.bg-purple-400</div>\r\n                    <div class=\"p bg-purple-500\">.bg-purple-500</div>\r\n                    <div class=\"p bg-purple-600\">.bg-purple-600</div>\r\n                    <div class=\"p bg-purple-700\">.bg-purple-700</div>\r\n                    <div class=\"p bg-purple-800\">.bg-purple-800</div>\r\n                    <div class=\"p bg-purple-900\">.bg-purple-900</div>\r\n                    <div class=\"p bg-purple-A100\">.bg-purple-A100</div>\r\n                    <div class=\"p bg-purple-A200\">.bg-purple-A200</div>\r\n                    <div class=\"p bg-purple-A400\">.bg-purple-A400</div>\r\n                    <div class=\"p bg-purple-A700\">.bg-purple-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-deep-purple-500\">\r\n                        <div class=\"mb-lg\">deep-purple</div>.bg-deep-purple-500</div>\r\n                    <div class=\"p bg-deep-purple-50\">.bg-deep-purple-50</div>\r\n                    <div class=\"p bg-deep-purple-100\">.bg-deep-purple-100</div>\r\n                    <div class=\"p bg-deep-purple-200\">.bg-deep-purple-200</div>\r\n                    <div class=\"p bg-deep-purple-300\">.bg-deep-purple-300</div>\r\n                    <div class=\"p bg-deep-purple-400\">.bg-deep-purple-400</div>\r\n                    <div class=\"p bg-deep-purple-500\">.bg-deep-purple-500</div>\r\n                    <div class=\"p bg-deep-purple-600\">.bg-deep-purple-600</div>\r\n                    <div class=\"p bg-deep-purple-700\">.bg-deep-purple-700</div>\r\n                    <div class=\"p bg-deep-purple-800\">.bg-deep-purple-800</div>\r\n                    <div class=\"p bg-deep-purple-900\">.bg-deep-purple-900</div>\r\n                    <div class=\"p bg-deep-purple-A100\">.bg-deep-purple-A100</div>\r\n                    <div class=\"p bg-deep-purple-A200\">.bg-deep-purple-A200</div>\r\n                    <div class=\"p bg-deep-purple-A400\">.bg-deep-purple-A400</div>\r\n                    <div class=\"p bg-deep-purple-A700\">.bg-deep-purple-A700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-lg\">\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-indigo-500\">\r\n                        <div class=\"mb-lg\">indigo</div>.bg-indigo-500</div>\r\n                    <div class=\"p bg-indigo-50\">.bg-indigo-50</div>\r\n                    <div class=\"p bg-indigo-100\">.bg-indigo-100</div>\r\n                    <div class=\"p bg-indigo-200\">.bg-indigo-200</div>\r\n                    <div class=\"p bg-indigo-300\">.bg-indigo-300</div>\r\n                    <div class=\"p bg-indigo-400\">.bg-indigo-400</div>\r\n                    <div class=\"p bg-indigo-500\">.bg-indigo-500</div>\r\n                    <div class=\"p bg-indigo-600\">.bg-indigo-600</div>\r\n                    <div class=\"p bg-indigo-700\">.bg-indigo-700</div>\r\n                    <div class=\"p bg-indigo-800\">.bg-indigo-800</div>\r\n                    <div class=\"p bg-indigo-900\">.bg-indigo-900</div>\r\n                    <div class=\"p bg-indigo-A100\">.bg-indigo-A100</div>\r\n                    <div class=\"p bg-indigo-A200\">.bg-indigo-A200</div>\r\n                    <div class=\"p bg-indigo-A400\">.bg-indigo-A400</div>\r\n                    <div class=\"p bg-indigo-A700\">.bg-indigo-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-blue-500\">\r\n                        <div class=\"mb-lg\">blue</div>.bg-blue-500</div>\r\n                    <div class=\"p bg-blue-50\">.bg-blue-50</div>\r\n                    <div class=\"p bg-blue-100\">.bg-blue-100</div>\r\n                    <div class=\"p bg-blue-200\">.bg-blue-200</div>\r\n                    <div class=\"p bg-blue-300\">.bg-blue-300</div>\r\n                    <div class=\"p bg-blue-400\">.bg-blue-400</div>\r\n                    <div class=\"p bg-blue-500\">.bg-blue-500</div>\r\n                    <div class=\"p bg-blue-600\">.bg-blue-600</div>\r\n                    <div class=\"p bg-blue-700\">.bg-blue-700</div>\r\n                    <div class=\"p bg-blue-800\">.bg-blue-800</div>\r\n                    <div class=\"p bg-blue-900\">.bg-blue-900</div>\r\n                    <div class=\"p bg-blue-A100\">.bg-blue-A100</div>\r\n                    <div class=\"p bg-blue-A200\">.bg-blue-A200</div>\r\n                    <div class=\"p bg-blue-A400\">.bg-blue-A400</div>\r\n                    <div class=\"p bg-blue-A700\">.bg-blue-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-light-blue-500\">\r\n                        <div class=\"mb-lg\">light-blue</div>.bg-light-blue-500</div>\r\n                    <div class=\"p bg-light-blue-50\">.bg-light-blue-50</div>\r\n                    <div class=\"p bg-light-blue-100\">.bg-light-blue-100</div>\r\n                    <div class=\"p bg-light-blue-200\">.bg-light-blue-200</div>\r\n                    <div class=\"p bg-light-blue-300\">.bg-light-blue-300</div>\r\n                    <div class=\"p bg-light-blue-400\">.bg-light-blue-400</div>\r\n                    <div class=\"p bg-light-blue-500\">.bg-light-blue-500</div>\r\n                    <div class=\"p bg-light-blue-600\">.bg-light-blue-600</div>\r\n                    <div class=\"p bg-light-blue-700\">.bg-light-blue-700</div>\r\n                    <div class=\"p bg-light-blue-800\">.bg-light-blue-800</div>\r\n                    <div class=\"p bg-light-blue-900\">.bg-light-blue-900</div>\r\n                    <div class=\"p bg-light-blue-A100\">.bg-light-blue-A100</div>\r\n                    <div class=\"p bg-light-blue-A200\">.bg-light-blue-A200</div>\r\n                    <div class=\"p bg-light-blue-A400\">.bg-light-blue-A400</div>\r\n                    <div class=\"p bg-light-blue-A700\">.bg-light-blue-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-cyan-500\">\r\n                        <div class=\"mb-lg\">cyan</div>.bg-cyan-500</div>\r\n                    <div class=\"p bg-cyan-50\">.bg-cyan-50</div>\r\n                    <div class=\"p bg-cyan-100\">.bg-cyan-100</div>\r\n                    <div class=\"p bg-cyan-200\">.bg-cyan-200</div>\r\n                    <div class=\"p bg-cyan-300\">.bg-cyan-300</div>\r\n                    <div class=\"p bg-cyan-400\">.bg-cyan-400</div>\r\n                    <div class=\"p bg-cyan-500\">.bg-cyan-500</div>\r\n                    <div class=\"p bg-cyan-600\">.bg-cyan-600</div>\r\n                    <div class=\"p bg-cyan-700\">.bg-cyan-700</div>\r\n                    <div class=\"p bg-cyan-800\">.bg-cyan-800</div>\r\n                    <div class=\"p bg-cyan-900\">.bg-cyan-900</div>\r\n                    <div class=\"p bg-cyan-A100\">.bg-cyan-A100</div>\r\n                    <div class=\"p bg-cyan-A200\">.bg-cyan-A200</div>\r\n                    <div class=\"p bg-cyan-A400\">.bg-cyan-A400</div>\r\n                    <div class=\"p bg-cyan-A700\">.bg-cyan-A700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-lg\">\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-teal-500\">\r\n                        <div class=\"mb-lg\">teal</div>.bg-teal-500</div>\r\n                    <div class=\"p bg-teal-50\">.bg-teal-50</div>\r\n                    <div class=\"p bg-teal-100\">.bg-teal-100</div>\r\n                    <div class=\"p bg-teal-200\">.bg-teal-200</div>\r\n                    <div class=\"p bg-teal-300\">.bg-teal-300</div>\r\n                    <div class=\"p bg-teal-400\">.bg-teal-400</div>\r\n                    <div class=\"p bg-teal-500\">.bg-teal-500</div>\r\n                    <div class=\"p bg-teal-600\">.bg-teal-600</div>\r\n                    <div class=\"p bg-teal-700\">.bg-teal-700</div>\r\n                    <div class=\"p bg-teal-800\">.bg-teal-800</div>\r\n                    <div class=\"p bg-teal-900\">.bg-teal-900</div>\r\n                    <div class=\"p bg-teal-A100\">.bg-teal-A100</div>\r\n                    <div class=\"p bg-teal-A200\">.bg-teal-A200</div>\r\n                    <div class=\"p bg-teal-A400\">.bg-teal-A400</div>\r\n                    <div class=\"p bg-teal-A700\">.bg-teal-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-green-500\">\r\n                        <div class=\"mb-lg\">green</div>.bg-green-500</div>\r\n                    <div class=\"p bg-green-50\">.bg-green-50</div>\r\n                    <div class=\"p bg-green-100\">.bg-green-100</div>\r\n                    <div class=\"p bg-green-200\">.bg-green-200</div>\r\n                    <div class=\"p bg-green-300\">.bg-green-300</div>\r\n                    <div class=\"p bg-green-400\">.bg-green-400</div>\r\n                    <div class=\"p bg-green-500\">.bg-green-500</div>\r\n                    <div class=\"p bg-green-600\">.bg-green-600</div>\r\n                    <div class=\"p bg-green-700\">.bg-green-700</div>\r\n                    <div class=\"p bg-green-800\">.bg-green-800</div>\r\n                    <div class=\"p bg-green-900\">.bg-green-900</div>\r\n                    <div class=\"p bg-green-A100\">.bg-green-A100</div>\r\n                    <div class=\"p bg-green-A200\">.bg-green-A200</div>\r\n                    <div class=\"p bg-green-A400\">.bg-green-A400</div>\r\n                    <div class=\"p bg-green-A700\">.bg-green-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-light-green-500\">\r\n                        <div class=\"mb-lg\">light-green</div>.bg-light-green-500</div>\r\n                    <div class=\"p bg-light-green-50\">.bg-light-green-50</div>\r\n                    <div class=\"p bg-light-green-100\">.bg-light-green-100</div>\r\n                    <div class=\"p bg-light-green-200\">.bg-light-green-200</div>\r\n                    <div class=\"p bg-light-green-300\">.bg-light-green-300</div>\r\n                    <div class=\"p bg-light-green-400\">.bg-light-green-400</div>\r\n                    <div class=\"p bg-light-green-500\">.bg-light-green-500</div>\r\n                    <div class=\"p bg-light-green-600\">.bg-light-green-600</div>\r\n                    <div class=\"p bg-light-green-700\">.bg-light-green-700</div>\r\n                    <div class=\"p bg-light-green-800\">.bg-light-green-800</div>\r\n                    <div class=\"p bg-light-green-900\">.bg-light-green-900</div>\r\n                    <div class=\"p bg-light-green-A100\">.bg-light-green-A100</div>\r\n                    <div class=\"p bg-light-green-A200\">.bg-light-green-A200</div>\r\n                    <div class=\"p bg-light-green-A400\">.bg-light-green-A400</div>\r\n                    <div class=\"p bg-light-green-A700\">.bg-light-green-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-lime-500\">\r\n                        <div class=\"mb-lg\">lime</div>.bg-lime-500</div>\r\n                    <div class=\"p bg-lime-50\">.bg-lime-50</div>\r\n                    <div class=\"p bg-lime-100\">.bg-lime-100</div>\r\n                    <div class=\"p bg-lime-200\">.bg-lime-200</div>\r\n                    <div class=\"p bg-lime-300\">.bg-lime-300</div>\r\n                    <div class=\"p bg-lime-400\">.bg-lime-400</div>\r\n                    <div class=\"p bg-lime-500\">.bg-lime-500</div>\r\n                    <div class=\"p bg-lime-600\">.bg-lime-600</div>\r\n                    <div class=\"p bg-lime-700\">.bg-lime-700</div>\r\n                    <div class=\"p bg-lime-800\">.bg-lime-800</div>\r\n                    <div class=\"p bg-lime-900\">.bg-lime-900</div>\r\n                    <div class=\"p bg-lime-A100\">.bg-lime-A100</div>\r\n                    <div class=\"p bg-lime-A200\">.bg-lime-A200</div>\r\n                    <div class=\"p bg-lime-A400\">.bg-lime-A400</div>\r\n                    <div class=\"p bg-lime-A700\">.bg-lime-A700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-lg\">\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-yellow-500\">\r\n                        <div class=\"mb-lg\">yellow</div>.bg-yellow-500</div>\r\n                    <div class=\"p bg-yellow-50\">.bg-yellow-50</div>\r\n                    <div class=\"p bg-yellow-100\">.bg-yellow-100</div>\r\n                    <div class=\"p bg-yellow-200\">.bg-yellow-200</div>\r\n                    <div class=\"p bg-yellow-300\">.bg-yellow-300</div>\r\n                    <div class=\"p bg-yellow-400\">.bg-yellow-400</div>\r\n                    <div class=\"p bg-yellow-500\">.bg-yellow-500</div>\r\n                    <div class=\"p bg-yellow-600\">.bg-yellow-600</div>\r\n                    <div class=\"p bg-yellow-700\">.bg-yellow-700</div>\r\n                    <div class=\"p bg-yellow-800\">.bg-yellow-800</div>\r\n                    <div class=\"p bg-yellow-900\">.bg-yellow-900</div>\r\n                    <div class=\"p bg-yellow-A100\">.bg-yellow-A100</div>\r\n                    <div class=\"p bg-yellow-A200\">.bg-yellow-A200</div>\r\n                    <div class=\"p bg-yellow-A400\">.bg-yellow-A400</div>\r\n                    <div class=\"p bg-yellow-A700\">.bg-yellow-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-amber-500\">\r\n                        <div class=\"mb-lg\">amber</div>.bg-amber-500</div>\r\n                    <div class=\"p bg-amber-50\">.bg-amber-50</div>\r\n                    <div class=\"p bg-amber-100\">.bg-amber-100</div>\r\n                    <div class=\"p bg-amber-200\">.bg-amber-200</div>\r\n                    <div class=\"p bg-amber-300\">.bg-amber-300</div>\r\n                    <div class=\"p bg-amber-400\">.bg-amber-400</div>\r\n                    <div class=\"p bg-amber-500\">.bg-amber-500</div>\r\n                    <div class=\"p bg-amber-600\">.bg-amber-600</div>\r\n                    <div class=\"p bg-amber-700\">.bg-amber-700</div>\r\n                    <div class=\"p bg-amber-800\">.bg-amber-800</div>\r\n                    <div class=\"p bg-amber-900\">.bg-amber-900</div>\r\n                    <div class=\"p bg-amber-A100\">.bg-amber-A100</div>\r\n                    <div class=\"p bg-amber-A200\">.bg-amber-A200</div>\r\n                    <div class=\"p bg-amber-A400\">.bg-amber-A400</div>\r\n                    <div class=\"p bg-amber-A700\">.bg-amber-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-orange-500\">\r\n                        <div class=\"mb-lg\">orange</div>.bg-orange-500</div>\r\n                    <div class=\"p bg-orange-50\">.bg-orange-50</div>\r\n                    <div class=\"p bg-orange-100\">.bg-orange-100</div>\r\n                    <div class=\"p bg-orange-200\">.bg-orange-200</div>\r\n                    <div class=\"p bg-orange-300\">.bg-orange-300</div>\r\n                    <div class=\"p bg-orange-400\">.bg-orange-400</div>\r\n                    <div class=\"p bg-orange-500\">.bg-orange-500</div>\r\n                    <div class=\"p bg-orange-600\">.bg-orange-600</div>\r\n                    <div class=\"p bg-orange-700\">.bg-orange-700</div>\r\n                    <div class=\"p bg-orange-800\">.bg-orange-800</div>\r\n                    <div class=\"p bg-orange-900\">.bg-orange-900</div>\r\n                    <div class=\"p bg-orange-A100\">.bg-orange-A100</div>\r\n                    <div class=\"p bg-orange-A200\">.bg-orange-A200</div>\r\n                    <div class=\"p bg-orange-A400\">.bg-orange-A400</div>\r\n                    <div class=\"p bg-orange-A700\">.bg-orange-A700</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-deep-orange-500\">\r\n                        <div class=\"mb-lg\">deep-orange</div>.bg-deep-orange-500</div>\r\n                    <div class=\"p bg-deep-orange-50\">.bg-deep-orange-50</div>\r\n                    <div class=\"p bg-deep-orange-100\">.bg-deep-orange-100</div>\r\n                    <div class=\"p bg-deep-orange-200\">.bg-deep-orange-200</div>\r\n                    <div class=\"p bg-deep-orange-300\">.bg-deep-orange-300</div>\r\n                    <div class=\"p bg-deep-orange-400\">.bg-deep-orange-400</div>\r\n                    <div class=\"p bg-deep-orange-500\">.bg-deep-orange-500</div>\r\n                    <div class=\"p bg-deep-orange-600\">.bg-deep-orange-600</div>\r\n                    <div class=\"p bg-deep-orange-700\">.bg-deep-orange-700</div>\r\n                    <div class=\"p bg-deep-orange-800\">.bg-deep-orange-800</div>\r\n                    <div class=\"p bg-deep-orange-900\">.bg-deep-orange-900</div>\r\n                    <div class=\"p bg-deep-orange-A100\">.bg-deep-orange-A100</div>\r\n                    <div class=\"p bg-deep-orange-A200\">.bg-deep-orange-A200</div>\r\n                    <div class=\"p bg-deep-orange-A400\">.bg-deep-orange-A400</div>\r\n                    <div class=\"p bg-deep-orange-A700\">.bg-deep-orange-A700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-brown-500\">\r\n                        <div class=\"mb-lg\">brown</div>.bg-brown-500</div>\r\n                    <div class=\"p bg-brown-50\">.bg-brown-50</div>\r\n                    <div class=\"p bg-brown-100\">.bg-brown-100</div>\r\n                    <div class=\"p bg-brown-200\">.bg-brown-200</div>\r\n                    <div class=\"p bg-brown-300\">.bg-brown-300</div>\r\n                    <div class=\"p bg-brown-400\">.bg-brown-400</div>\r\n                    <div class=\"p bg-brown-500\">.bg-brown-500</div>\r\n                    <div class=\"p bg-brown-600\">.bg-brown-600</div>\r\n                    <div class=\"p bg-brown-700\">.bg-brown-700</div>\r\n                    <div class=\"p bg-brown-800\">.bg-brown-800</div>\r\n                    <div class=\"p bg-brown-900\">.bg-brown-900</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-blue-grey-500\">\r\n                        <div class=\"mb-lg\">blue-grey</div>.bg-blue-grey-500</div>\r\n                    <div class=\"p bg-blue-grey-50\">.bg-blue-grey-50</div>\r\n                    <div class=\"p bg-blue-grey-100\">.bg-blue-grey-100</div>\r\n                    <div class=\"p bg-blue-grey-200\">.bg-blue-grey-200</div>\r\n                    <div class=\"p bg-blue-grey-300\">.bg-blue-grey-300</div>\r\n                    <div class=\"p bg-blue-grey-400\">.bg-blue-grey-400</div>\r\n                    <div class=\"p bg-blue-grey-500\">.bg-blue-grey-500</div>\r\n                    <div class=\"p bg-blue-grey-600\">.bg-blue-grey-600</div>\r\n                    <div class=\"p bg-blue-grey-700\">.bg-blue-grey-700</div>\r\n                    <div class=\"p bg-blue-grey-800\">.bg-blue-grey-800</div>\r\n                    <div class=\"p bg-blue-grey-900\">.bg-blue-grey-900</div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"p bg-grey-500\">\r\n                        <div class=\"mb-lg\">grey</div>.bg-grey-500</div>\r\n                    <div class=\"p bg-grey-50\">.bg-grey-50</div>\r\n                    <div class=\"p bg-grey-100\">.bg-grey-100</div>\r\n                    <div class=\"p bg-grey-200\">.bg-grey-200</div>\r\n                    <div class=\"p bg-grey-300\">.bg-grey-300</div>\r\n                    <div class=\"p bg-grey-400\">.bg-grey-400</div>\r\n                    <div class=\"p bg-grey-500\">.bg-grey-500</div>\r\n                    <div class=\"p bg-grey-600\">.bg-grey-600</div>\r\n                    <div class=\"p bg-grey-700\">.bg-grey-700</div>\r\n                    <div class=\"p bg-grey-800\">.bg-grey-800</div>\r\n                    <div class=\"p bg-grey-900\">.bg-grey-900</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/colors/colors.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/colors/colors.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/material/colors/colors.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/colors/colors.component.ts ***!
  \************************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/routes/material/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/routes/material/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/forms/forms.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/material/forms/forms.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-md\">\r\n    <div class=\"card\">\r\n        <div class=\"card-heading\">\r\n            <div class=\"card-title\">Material Forms</div>\r\n        </div>\r\n        <div class=\"card-body bg-inverse\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control mda-form-light\" [(ngModel)]=\"user.title\" name=\"title\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>Title</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control mda-form-light\" [(ngModel)]=\"user.email\" name=\"email\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>Email</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control\" disabled=\"\" [(ngModel)]=\"user.company\" name=\"company\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>Company(disabled)</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"mda-form-group float-label\">\r\n                        <input class=\"mda-form-control\" [(ngModel)]=\"user.firstName\" name=\"firstName\" required=\"\" tabindex=\"0\" aria-required=\"true\" aria-invalid=\"true\" />\r\n                        <label>First Name</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"mda-form-group float-label\">\r\n                        <input class=\"mda-form-control\" [(ngModel)]=\"user.lastName\" name=\"lastName\" required=\"\" tabindex=\"0\" aria-required=\"true\" aria-invalid=\"true\" />\r\n                        <label>Last Name</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control\" [(ngModel)]=\"user.address\" name=\"address\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>Address</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control\" [(ngModel)]=\"user.address2\" name=\"address2\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>Address 2</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control\" [(ngModel)]=\"user.city\" name=\"city\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>City</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control\" [(ngModel)]=\"user.state\" name=\"state\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>State</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"mda-form-group\">\r\n                        <input class=\"mda-form-control\" [(ngModel)]=\"user.postalCode\" name=\"postalCode\" tabindex=\"0\" aria-invalid=\"false\" />\r\n                        <label>Postal Code</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"mda-form-group\">\r\n                        <textarea class=\"mda-form-control\" [(ngModel)]=\"user.biography\" name=\"biography\" rows=\"4\" aria-multiline=\"true\" tabindex=\"0\" aria-invalid=\"false\"></textarea>\r\n                        <label>Biography</label>\r\n                        <span class=\"mda-form-msg right\">Any message here</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"mda-form-group\">\r\n                        <select class=\"mda-form-control\" [(ngModel)]=\"user.select\" name=\"select\">\r\n                            <option value=\"1\">Option 1</option>\r\n                            <option value=\"2\">Option 2</option>\r\n                            <option value=\"3\">Option 3</option>\r\n                            <option value=\"4\">Option 4</option>\r\n                            <option value=\"5\">Option 5</option>\r\n                        </select>\r\n                        <label>Select</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-heading bg-primary\">\r\n            <div class=\"pull-right\">\r\n                <em class=\"icon-layers fa-2x\"></em>\r\n            </div>\r\n            <div class=\"card-title\">Material Forms</div>\r\n        </div>\r\n        <div class=\"card-toolbar bg-primary\">Errors</div>\r\n        <div class=\"card-body\">\r\n            <form class=\"form-validate\">\r\n                <div class=\"mda-form-group float-label mb\">\r\n                    <input class=\"mda-form-control\" [(ngModel)]=\"user.clientName\" name=\"clientName\" required=\"\" tabindex=\"0\" aria-required=\"true\" aria-invalid=\"true\" />\r\n                    <label>Client Name</label>\r\n                    <span class=\"mda-form-msg\">This input is required</span>\r\n                </div>\r\n                <div class=\"mda-form-group\">\r\n                    <input class=\"mda-form-control\" [(ngModel)]=\"user.salary\" name=\"salary\" tabindex=\"0\" aria-invalid=\"true\" />\r\n                    <label>Salary</label>\r\n                    <span class=\"mda-form-msg\">Your salary must be at least 6 digits</span>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-heading bg-primary\">\r\n            <div class=\"card-title\">Icons</div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"mda-form-group float-label mb mda-input-group\">\r\n                <input class=\"mda-form-control\" type=\"text\" [(ngModel)]=\"username\" />\r\n                <label>Username</label>\r\n                <span class=\"mda-input-group-addon\">\r\n               <em class=\"icon-user-follow fa-lg\"></em>\r\n            </span>\r\n            </div>\r\n            <div class=\"mda-form-group mb mda-input-group\">\r\n                <input class=\"mda-form-control\" type=\"text\" [(ngModel)]=\"phone\" />\r\n                <label>Phone</label>\r\n                <span class=\"mda-input-group-addon\">\r\n               <em class=\"fa fa-phone text-primary fa-lg\"></em>\r\n            </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/forms/forms.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/material/forms/forms.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/material/forms/forms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/forms/forms.component.ts ***!
  \**********************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.user = {};
        this.username = '';
        this.phone = '';
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/routes/material/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/routes/material/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/inputs/inputs.component.html":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/inputs/inputs.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-md\">\r\n    <div class=\"card\">\r\n        <div class=\"card-heading bg-primary\">\r\n            <div class=\"card-title\">Checkboxes</div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" />\r\n                            <em class=\"bg-indigo-500\"></em>This is a Checkbox</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-purple-500\"></em>This is a Checkbox checked</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" disabled=\"\" />\r\n                            <em class=\"bg-indigo-500\"></em>This is a Checkbox disabled</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" disabled=\"\" />\r\n                            <em class=\"bg-indigo-500\"></em>This is a Checkbox checked and disabled</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-blue-500 empty\"></em>This is a Checkbox empty</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-red-500\"></em>This a checkbox red</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-pink-500\"></em>This a checkbox pink</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-purple-500\"></em>This a checkbox purple</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-deep-purple-500\"></em>This a checkbox purple</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-indigo-500\"></em>This a checkbox indigo</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-blue-500\"></em>This a checkbox blue</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-cyan-500\"></em>This a checkbox cyan</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-teal-500\"></em>This a checkbox teal</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-green-500\"></em>This a checkbox green</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-lime-500\"></em>This a checkbox lime</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-yellow-500\"></em>This a checkbox yellow</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-amber-500\"></em>This a checkbox amber</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-orange-500\"></em>This a checkbox orange</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-checkbox\">\r\n                            <input type=\"checkbox\" checked=\"\" />\r\n                            <em class=\"bg-brown-500\"></em>This a checkbox brown</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Radios-->\r\n    <div class=\"card\">\r\n        <div class=\"card-heading bg-primary\">\r\n            <div class=\"card-title\">Radios</div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"oneradio\" />\r\n                            <em class=\"bg-indigo-500\"></em>This is a radio</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"oneradio\" checked=\"\" />\r\n                            <em class=\"bg-purple-500\"></em>This is a radio checked</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"otherradio\" disabled=\"\" />\r\n                            <em class=\"bg-indigo-500\"></em>This is a radio disabled</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"otherradio\" checked=\"\" disabled=\"\" />\r\n                            <em class=\"bg-indigo-500\"></em>This is a radio checked and disabled</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"emptyradio\" checked=\"\" />\r\n                            <em class=\"bg-blue-500 empty\"></em>This is a radio empty</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-red\" checked=\"\" />\r\n                            <em class=\"bg-red-500\"></em>This a radio red</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-pink\" checked=\"\" />\r\n                            <em class=\"bg-pink-500\"></em>This a radio pink</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-purple\" checked=\"\" />\r\n                            <em class=\"bg-purple-500\"></em>This a radio purple</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-deep-purple\" checked=\"\" />\r\n                            <em class=\"bg-deep-purple-500\"></em>This a radio purple</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-indigo\" checked=\"\" />\r\n                            <em class=\"bg-indigo-500\"></em>This a radio indigo</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-blue\" checked=\"\" />\r\n                            <em class=\"bg-blue-500\"></em>This a radio blue</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-cyan\" checked=\"\" />\r\n                            <em class=\"bg-cyan-500\"></em>This a radio cyan</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-teal\" checked=\"\" />\r\n                            <em class=\"bg-teal-500\"></em>This a radio teal</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-green\" checked=\"\" />\r\n                            <em class=\"bg-green-500\"></em>This a radio green</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-lime\" checked=\"\" />\r\n                            <em class=\"bg-lime-500\"></em>This a radio lime</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-yellow\" checked=\"\" />\r\n                            <em class=\"bg-yellow-500\"></em>This a radio yellow</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-amber\" checked=\"\" />\r\n                            <em class=\"bg-amber-500\"></em>This a radio amber</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-orange\" checked=\"\" />\r\n                            <em class=\"bg-orange-500\"></em>This a radio orange</label>\r\n                    </div>\r\n                    <div class=\"mb\">\r\n                        <label class=\"mda-radio\">\r\n                            <input type=\"radio\" name=\"someradio-brown\" checked=\"\" />\r\n                            <em class=\"bg-brown-500\"></em>This a radio brown</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/inputs/inputs.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/inputs/inputs.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/material/inputs/inputs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/inputs/inputs.component.ts ***!
  \************************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputsComponent = /** @class */ (function () {
    function InputsComponent() {
    }
    InputsComponent.prototype.ngOnInit = function () {
    };
    InputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__(/*! ./inputs.component.html */ "./src/app/routes/material/inputs/inputs.component.html"),
            styles: [__webpack_require__(/*! ./inputs.component.scss */ "./src/app/routes/material/inputs/inputs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputsComponent);
    return InputsComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/lists/lists.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/material/lists/lists.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Lists</div>\r\n<div class=\"container-md\">\r\n    <div class=\"card\">\r\n        <div class=\"card-subheader\">Text tems</div>\r\n        <ul class=\"mda-list\">\r\n            <li class=\"mda-list-item\">\r\n                <div class=\"mda-list-item-text\">\r\n                    <h3>Min Li Chan</h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                    <p>I&apos;ll be in your neighborhood doing errands</p>\r\n                </div>\r\n            </li>\r\n            <li class=\"mda-list-item\">\r\n                <div class=\"mda-list-item-text\">\r\n                    <h3><a href=\"#\">Min Li Chan</a>\r\n               </h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                    <p>I&apos;ll be in your neighborhood doing errands</p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <div class=\"card-divider\"></div>\r\n        <div class=\"card-subheader\">Image with text items</div>\r\n        <div class=\"mda-list\">\r\n            <div class=\"mda-list-item\">\r\n                <img class=\"mda-list-item-img\" src=\"assets/img/user/01.jpg\" alt=\"List user\" />\r\n                <div class=\"mda-list-item-text\">\r\n                    <h3>Min Li Chan</h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                    <p>I&apos;ll be in your neighborhood doing errands</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"mda-list-item\">\r\n                <img class=\"mda-list-item-img\" src=\"assets/img/user/02.jpg\" alt=\"List user\" />\r\n                <div class=\"mda-list-item-text\">\r\n                    <h3><a href=\"#\">Min Li Chan</a>\r\n               </h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                    <p>I&apos;ll be in your neighborhood doing errands</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"mda-list-item\">\r\n                <img class=\"mda-list-item-img\" src=\"assets/img/user/03.jpg\" alt=\"List user\" />\r\n                <div class=\"mda-list-item-text\">\r\n                    <h3>Min Li Chan</h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                    <p>I&apos;ll be in your neighborhood doing errands</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-divider\"></div>\r\n        <div class=\"card-subheader\">Icons with text items</div>\r\n        <div class=\"mda-list\">\r\n            <div class=\"mda-list-item\">\r\n                <div class=\"mda-list-item-icon bg-primary\">\r\n                    <em class=\"fa fa-star fa-lg\"></em>\r\n                </div>\r\n                <div class=\"mda-list-item-text mda-2-line\">\r\n                    <h3>Min Li Chan</h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"mda-list-item\">\r\n                <div class=\"mda-list-item-icon bg-info\">\r\n                    <em class=\"fa fa-coffee fa-lg\"></em>\r\n                </div>\r\n                <div class=\"mda-list-item-text mda-2-line\">\r\n                    <h3>Min Li Chan</h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"mda-list-item\">\r\n                <div class=\"mda-list-item-icon bg-purple\">\r\n                    <em class=\"fa fa-cloud fa-lg\"></em>\r\n                </div>\r\n                <div class=\"mda-list-item-text mda-2-line\">\r\n                    <h3>Min Li Chan</h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"mda-list-item\">\r\n                <div class=\"mda-list-item-initial bg-pink\">M</div>\r\n                <div class=\"mda-list-item-text mda-2-line\">\r\n                    <h3>Min Li Chan</h3>\r\n                    <h4>Brunch this weekend?</h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/lists/lists.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/material/lists/lists.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/material/lists/lists.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/lists/lists.component.ts ***!
  \**********************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
    }
    ListsComponent.prototype.ngOnInit = function () {
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/routes/material/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/routes/material/lists/lists.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/widgets.component */ "./src/app/routes/material/widgets/widgets.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/routes/material/cards/cards.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/routes/material/forms/forms.component.ts");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputs/inputs.component */ "./src/app/routes/material/inputs/inputs.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/routes/material/lists/lists.component.ts");
/* harmony import */ var _whiteframe_whiteframe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whiteframe/whiteframe.component */ "./src/app/routes/material/whiteframe/whiteframe.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/material/colors/colors.component.ts");
/* harmony import */ var _ngmaterial_ngmaterial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngmaterial/ngmaterial.component */ "./src/app/routes/material/ngmaterial/ngmaterial.component.ts");
/* harmony import */ var _ngmaterial_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ngmaterial/dialog.component */ "./src/app/routes/material/ngmaterial/dialog.component.ts");
/* harmony import */ var _ngmaterial_snackbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ngmaterial/snackbar.component */ "./src/app/routes/material/ngmaterial/snackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'widgets', component: _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"] },
    { path: 'cards', component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"] },
    { path: 'forms', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"] },
    { path: 'inputs', component: _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"] },
    { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__["ListsComponent"] },
    { path: 'whiteframe', component: _whiteframe_whiteframe_component__WEBPACK_IMPORTED_MODULE_9__["WhiteframeComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_10__["ColorsComponent"] },
    { path: 'ngmaterial', component: _ngmaterial_ngmaterial_component__WEBPACK_IMPORTED_MODULE_11__["NgmaterialComponent"] }
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
                })
            ],
            declarations: [
                _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"],
                _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__["ListsComponent"],
                _whiteframe_whiteframe_component__WEBPACK_IMPORTED_MODULE_9__["WhiteframeComponent"],
                _colors_colors_component__WEBPACK_IMPORTED_MODULE_10__["ColorsComponent"],
                _ngmaterial_ngmaterial_component__WEBPACK_IMPORTED_MODULE_11__["NgmaterialComponent"],
                _ngmaterial_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogResultExampleDialog"],
                _ngmaterial_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["PizzaPartyComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            entryComponents: [
                _ngmaterial_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogResultExampleDialog"],
                _ngmaterial_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["PizzaPartyComponent"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routes/material/ngmaterial/dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/ngmaterial/dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: DialogResultExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogResultExampleDialog", function() { return DialogResultExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogResultExampleDialog = /** @class */ (function () {
    function DialogResultExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogResultExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-result-example-dialog',
            template: "\n        <h1 mat-dialog-title>Dialog</h1>\n        <div mat-dialog-content>What would you like to do?</div>\n        <div mat-dialog-actions>\n          <button mat-button (click)=\"dialogRef.close('Option 1')\">Option 1</button>\n          <button mat-button (click)=\"dialogRef.close('Option 2')\">Option 2</button>\n        </div>\n    ",
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DialogResultExampleDialog);
    return DialogResultExampleDialog;
}());



/***/ }),

/***/ "./src/app/routes/material/ngmaterial/ngmaterial.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routes/material/ngmaterial/ngmaterial.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    Angular Material\r\n    <small>Material Design components for Angular apps</small>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Autocomplete</div>\r\n    <div class=\"panel-body\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n        </mat-form-field>\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\r\n                {{ state }}\r\n            </mat-option>\r\n        </mat-autocomplete>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Checkbox</div>\r\n    <div class=\"panel-body\">\r\n        <h5>Checkbox configuration</h5>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n        </section>\r\n        <h5>Result</h5>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [checked]=\"checked\" [indeterminate]=\"indeterminate\" [disabled]=\"disabled\">\r\n                I'm a checkbox\r\n            </mat-checkbox>\r\n        </section>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Input</div>\r\n    <div class=\"panel-body\">\r\n        <form class=\"example-form\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n            </mat-form-field>\r\n            <table class=\"example-full-width\" cellspacing=\"0\">\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"First name\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <p>\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Address 2\"></textarea>\r\n                </mat-form-field>\r\n            </p>\r\n            <table class=\"example-full-width\" cellspacing=\"0\">\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"City\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"State\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n                            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                        </mat-form-field>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Radio Button</div>\r\n    <div class=\"panel-body\">\r\n        <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\">\r\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\r\n                {{season}}\r\n            </mat-radio-button>\r\n        </mat-radio-group>\r\n        <div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Select</div>\r\n    <div class=\"panel-body\">\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Favorite food\">\r\n                <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                  {{ food.viewValue }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Slider</div>\r\n    <div class=\"panel-body\">\r\n        <h5>Slider configuration</h5>\r\n        <section>\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-margin\">\r\n                <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n            </mat-form-field>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\r\n                Auto ticks\r\n            </mat-checkbox>\r\n            <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\r\n                <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n            </mat-form-field>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabledSlider\">Disabled</mat-checkbox>\r\n        </section>\r\n        <h5>Result</h5>\r\n        <mat-slider class=\"example-margin\" [disabled]=\"disabledSlider\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumbLabel]=\"thumbLabel\" [tickInterval]=\"tickInterval\" [value]=\"value\" [vertical]=\"vertical\">\r\n        </mat-slider>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Slider Toggle</div>\r\n    <div class=\"panel-body\">\r\n        <h5>Slider configuration</h5>\r\n        <section class=\"example-section\">\r\n            <label class=\"example-margin\">Color:</label>\r\n            <mat-radio-group [(ngModel)]=\"color\">\r\n                <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n                    Primary\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n                    Accent\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n                    Warn\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checkedSliderToggle\">Checked</mat-checkbox>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabledSliderToggle\">Disabled</mat-checkbox>\r\n        </section>\r\n        <h5>Result</h5>\r\n        <section class=\"example-section\">\r\n            <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checkedSliderToggle\" [disabled]=\"disabledSliderToggle\">\r\n                Slide me!\r\n            </mat-slide-toggle>\r\n        </section>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Menu</div>\r\n    <div class=\"panel-body\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>\r\n                <mat-icon>dialpad</mat-icon>\r\n                <span>Redial</span>\r\n            </button>\r\n            <button mat-menu-item disabled>\r\n                <mat-icon>voicemail</mat-icon>\r\n                <span>Check voicemail</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n                <mat-icon>notifications_off</mat-icon>\r\n                <span>Disable alerts</span>\r\n            </button>\r\n        </mat-menu>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Sidenav</div>\r\n    <div class=\"panel-body\">\r\n        <mat-sidenav-container class=\"example-sidenav-fab-container\">\r\n            <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\r\n                <button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n                    <mat-icon>add</mat-icon>\r\n                </button>\r\n                <div class=\"example-scrolling-content\">\r\n                    Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.\r\n                </div>\r\n            </mat-sidenav>\r\n            <button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n                <mat-icon>add</mat-icon>\r\n            </button>\r\n            <div class=\"example-scrolling-content\">\r\n                Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.\r\n            </div>\r\n        </mat-sidenav-container>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Toolbar</div>\r\n    <div class=\"panel-body\">\r\n        <span>Custom Toolbar</span>\r\n        <mat-toolbar color=\"primary\">\r\n            <mat-toolbar-row>\r\n                <span>Second Line</span>\r\n                <span class=\"example-spacer\"></span>\r\n                <mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n            </mat-toolbar-row>\r\n            <mat-toolbar-row>\r\n                <span>Third Line</span>\r\n                <span class=\"example-spacer\"></span>\r\n                <mat-icon class=\"example-icon\">favorite</mat-icon>\r\n                <mat-icon class=\"example-icon\">delete</mat-icon>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">List</div>\r\n    <div class=\"panel-body\">\r\n        <mat-list>\r\n            <h3 mat-subheader>Folders</h3>\r\n            <mat-list-item *ngFor=\"let folder of folders\">\r\n                <mat-icon mat-list-avatar>folder</mat-icon>\r\n                <h4 mat-line>{{folder.name}}</h4>\r\n                <p mat-line> {{folder.updated | date}} </p>\r\n            </mat-list-item>\r\n            <mat-divider></mat-divider>\r\n            <h3 mat-subheader>Notes</h3>\r\n            <mat-list-item *ngFor=\"let note of notes\">\r\n                <mat-icon mat-list-avatar>note</mat-icon>\r\n                <h4 mat-line>{{note.name}}</h4>\r\n                <p mat-line> {{note.updated | date}} </p>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Grid list</div>\r\n    <div class=\"panel-body\">\r\n        <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n            <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n                {{tile.text}}\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </div>\r\n</div>\r\n<mat-card class=\"example-card mb-lg\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shiba Inu</mat-card-title>\r\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"/assets/img/welcome.jpg\">\r\n    <mat-card-content>\r\n        <p>\r\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n        </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Buttons</div>\r\n    <div class=\"panel-body\">\r\n        <h5>Normal Buttons</h5>\r\n        <div class=\"example-button-row\">\r\n            <button mat-button>Flat button</button>\r\n            <button mat-raised-button>Raised button</button>\r\n            <button mat-fab>\r\n                <mat-icon>check</mat-icon>\r\n            </button>\r\n            <button mat-mini-fab>\r\n                <mat-icon>check</mat-icon>\r\n            </button>\r\n        </div>\r\n        <h5>Link Buttons</h5>\r\n        <div class=\"example-button-row\">\r\n            <a mat-button routerLink=\".\">Flat button</a>\r\n            <a mat-raised-button routerLink=\".\">Raised button</a>\r\n            <a mat-fab routerLink=\".\">\r\n                <mat-icon>check</mat-icon>\r\n            </a>\r\n            <a mat-mini-fab routerLink=\".\">\r\n                <mat-icon>check</mat-icon>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Button Toggle</div>\r\n    <div class=\"panel-body\">\r\n        <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n            <mat-button-toggle value=\"left\">\r\n                <mat-icon>format_align_left</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"center\">\r\n                <mat-icon>format_align_center</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"right\">\r\n                <mat-icon>format_align_right</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"justify\" disabled>\r\n                <mat-icon>format_align_justify</mat-icon>\r\n            </mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n        <div class=\"example-selected-value\">Selected value: {{group.value}}</div>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Chips</div>\r\n    <div class=\"panel-body\">\r\n        <mat-chip-list class=\"mat-chip-list-stacked\">\r\n            <mat-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\">\r\n                {{chipColor.name}}\r\n            </mat-chip>\r\n        </mat-chip-list>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Progress Spinner</div>\r\n    <div class=\"panel-body\">\r\n        <h5>Progress circle configuration</h5>\r\n        <section class=\"example-section\">\r\n            <label class=\"example-margin\">Color:</label>\r\n            <mat-radio-group [(ngModel)]=\"colorProgressSpinner\">\r\n                <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n                    Primary\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n                    Accent\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n                    Warn\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </section>\r\n        <section class=\"example-section\">\r\n            <label class=\"example-margin\">Mode:</label>\r\n            <mat-radio-group [(ngModel)]=\"modeProgressSpinner\">\r\n                <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n                    Determinate\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n                    Indeterminate\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </section>\r\n        <section class=\"example-section\" *ngIf=\"modeProgressSpinner == 'determinate'\">\r\n            <label class=\"example-margin\">Progress:</label>\r\n            <mat-slider class=\"example-margin\" [(ngModel)]=\"valueProgressSpinner\"></mat-slider>\r\n        </section>\r\n        <h5>Result</h5>\r\n        <mat-progress-spinner class=\"example-margin\" [color]=\"colorProgressSpinner\" [mode]=\"modeProgressSpinner\" [value]=\"valueProgressSpinner\">\r\n        </mat-progress-spinner>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Progress Bar</div>\r\n    <div class=\"panel-body\">\r\n        <h5>Progress bar configuration</h5>\r\n        <section class=\"example-section \">\r\n            <label class=\"example-margin \">Color:</label>\r\n            <mat-radio-group [(ngModel)]=\"colorProgressBar\">\r\n                <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n                    Primary\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n                    Accent\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n                    Warn\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </section>\r\n        <section class=\"example-section \">\r\n            <label class=\"example-margin \">Mode:</label>\r\n            <mat-radio-group [(ngModel)]=\"modeProgressBar\">\r\n                <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n                    Determinate\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n                    Indeterminate\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"buffer\">\r\n                    Buffer\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"example-margin\" value=\"query\">\r\n                    Query\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </section>\r\n        <section class=\"example-section \" *ngIf=\"modeProgressBar=='determinate' || modeProgressBar=='buffer' \">\r\n            <label class=\"example-margin \">Progress:</label>\r\n            <mat-slider class=\"example-margin \" [(ngModel)]=\"valueProgressBar\"></mat-slider>\r\n        </section>\r\n        <section class=\"example-section \" *ngIf=\"modeProgressBar=='buffer' \">\r\n            <label class=\"example-margin \">Buffer:</label>\r\n            <mat-slider class=\"example-margin \" [(ngModel)]=\"bufferValue\"></mat-slider>\r\n        </section>\r\n        <h5>Result</h5>\r\n        <section class=\"example-section\">\r\n            <mat-progress-bar class=\"example-margin\" [color]=\"colorProgressBar\" [mode]=\"modeProgressBar\" [value]=\"valueProgressBar\" [bufferValue]=\"bufferValue\">\r\n            </mat-progress-bar>\r\n        </section>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Dialog</div>\r\n    <div class=\"panel-body\">\r\n        <button mat-button (click)=\"openDialog()\">Launch dialog</button>\r\n        You chose: {{selectedOption}}\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Tooltip</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n            <div>Show tooltip</div>\r\n            <mat-form-field>\r\n                <mat-select class=\"example-select\" [(ngModel)]=\"position\">\r\n                    <mat-option value=\"before\">Before</mat-option>\r\n                    <mat-option value=\"after\">After</mat-option>\r\n                    <mat-option value=\"above\">Above</mat-option>\r\n                    <mat-option value=\"below\">Below</mat-option>\r\n                    <mat-option value=\"left\">Left</mat-option>\r\n                    <mat-option value=\"right\">Right</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Snackbar</div>\r\n    <div class=\"panel-body\">\r\n        <button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\r\n            Pizza party\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/ngmaterial/ngmaterial.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/routes/material/ngmaterial/ngmaterial.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-section {\n  height: 60px;\n  line-height: 60px; }\n\n.example-form {\n  max-width: 500px; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.example-radio-button {\n  margin: 5px; }\n\n.example-selected-value {\n  margin: 15px 0; }\n\n.example-margin {\n  margin: 10px; }\n\n.mat-slider-horizontal {\n  max-width: 300px; }\n\n.mat-slider-vertical {\n  height: 300px; }\n\n.example-sidenav-fab-container {\n  max-width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.example-sidenav-fab-container mat-sidenav {\n  max-width: 200px; }\n\n.example-sidenav-fab-container .mat-sidenav-content,\n.example-sidenav-fab-container mat-sidenav {\n  display: flex;\n  overflow: visible; }\n\n.example-scrolling-content {\n  overflow: auto; }\n\n.example-fab {\n  position: absolute;\n  right: 20px;\n  bottom: 10px; }\n\n.example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.example-card {\n  width: 100%;\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://alissonrs.github.io/wheel-of-fate/assets/img/welcome.jpg\");\n  background-size: cover; }\n\n.example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.example-tooltip-host {\n  display: inline-flex;\n  align-items: center;\n  margin: 50px; }\n\n.example-select {\n  margin: 0 10px; }\n\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/routes/material/ngmaterial/ngmaterial.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/material/ngmaterial/ngmaterial.component.ts ***!
  \********************************************************************/
/*! exports provided: NgmaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmaterialComponent", function() { return NgmaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs-compat/_esm5/add/operator/startWith.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.component */ "./src/app/routes/material/ngmaterial/dialog.component.ts");
/* harmony import */ var _snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snackbar.component */ "./src/app/routes/material/ngmaterial/snackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NgmaterialComponent = /** @class */ (function () {
    function NgmaterialComponent(dialog, snackBar) {
        var _this = this;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        // Component - Checkbox
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        // Component - Slider
        this.autoTicks = false;
        this.disabledSlider = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        // Component - Slide toggle
        this.color = 'accent';
        this.checkedSliderToggle = false;
        this.disabledSliderToggle = false;
        // Component - List
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
        // Component - Grid list
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
        // Component - Progress spinner
        this.colorProgressSpinner = 'praimry';
        this.modeProgressSpinner = 'determinate';
        this.valueProgressSpinner = 50;
        // Component - Progress bar
        this.colorProgressBar = 'primary';
        this.modeProgressBar = 'determinate';
        this.valueProgressBar = 50;
        this.bufferValue = 75;
        // Component - Slider
        this._tickInterval = 1;
        // Component - Tooltip
        this.position = 'before';
        // Component - Autocomplete
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    // Component - Autocomplete
    NgmaterialComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.states;
    };
    Object.defineProperty(NgmaterialComponent.prototype, "tickInterval", {
        // Component - Slider
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    // Component - Dialog
    NgmaterialComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogResultExampleDialog"]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    // Component - Snackbar
    NgmaterialComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["PizzaPartyComponent"], {
            duration: 500,
        });
    };
    NgmaterialComponent.prototype.ngOnInit = function () { };
    NgmaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngmaterial',
            template: __webpack_require__(/*! ./ngmaterial.component.html */ "./src/app/routes/material/ngmaterial/ngmaterial.component.html"),
            styles: [__webpack_require__(/*! ./ngmaterial.component.scss */ "./src/app/routes/material/ngmaterial/ngmaterial.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NgmaterialComponent);
    return NgmaterialComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/ngmaterial/snackbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/material/ngmaterial/snackbar.component.ts ***!
  \******************************************************************/
/*! exports provided: PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'snack-bar-component-example-snack',
            template: "\n        <span class=\"example-pizza-party\">\n          \uD83C\uDF55\uD83C\uDF55\uD83C\uDF55\uD83C\uDF55\uD83C\uDF55 Pizza party!!! \uD83C\uDF55\uD83C\uDF55\uD83C\uDF55\uD83C\uDF55\uD83C\uDF55\n        </span>\n  ",
            styles: ['.example-pizza-party { color: hotpink;}'],
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/whiteframe/whiteframe.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routes/material/whiteframe/whiteframe.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-md\">\r\n    <div class=\"card\">\r\n        <div class=\"card-heading bg-primary\">\r\n            <div class=\"card-title\">Whiteframe</div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"panel shadow-z1\">\r\n                <div class=\"panel-body\">\r\n                    <p class=\"mv-lg text-center\">.shadow-z1</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel shadow-z2\">\r\n                <div class=\"panel-body\">\r\n                    <p class=\"mv-lg text-center\">.shadow-z2</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel shadow-z3\">\r\n                <div class=\"panel-body\">\r\n                    <p class=\"mv-lg text-center\">.shadow-z3</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel shadow-z4\">\r\n                <div class=\"panel-body\">\r\n                    <p class=\"mv-lg text-center\">.shadow-z4</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel shadow-z5\">\r\n                <div class=\"panel-body\">\r\n                    <p class=\"mv-lg text-center\">.shadow-z5</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/whiteframe/whiteframe.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/routes/material/whiteframe/whiteframe.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/material/whiteframe/whiteframe.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/material/whiteframe/whiteframe.component.ts ***!
  \********************************************************************/
/*! exports provided: WhiteframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteframeComponent", function() { return WhiteframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhiteframeComponent = /** @class */ (function () {
    function WhiteframeComponent() {
    }
    WhiteframeComponent.prototype.ngOnInit = function () {
    };
    WhiteframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whiteframe',
            template: __webpack_require__(/*! ./whiteframe.component.html */ "./src/app/routes/material/whiteframe/whiteframe.component.html"),
            styles: [__webpack_require__(/*! ./whiteframe.component.scss */ "./src/app/routes/material/whiteframe/whiteframe.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhiteframeComponent);
    return WhiteframeComponent;
}());



/***/ }),

/***/ "./src/app/routes/material/widgets/widgets.component.html":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/widgets/widgets.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\r\n   <div class=\"h3 mv\">\r\n      <!-- Breadcrumb right aligned-->\r\n      <ul class=\"breadcrumb pull-right text-sm bg-transparent\">\r\n         <li><a href=\"#\">Dashboard</a>\r\n         </li>\r\n         <li class=\"active\">\r\n            <span>Material Widgets</span>\r\n         </li>\r\n      </ul>Widgets</div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading bg-info shadow-z1\">\r\n                    <div class=\"pull-right\">\r\n                        <h3 class=\"m0 text-lg\">11:05</h3>\r\n                    </div>\r\n                    <div class=\"card-title\">Paris</div>\r\n                    <small>Sunny day</small>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"pull-left\">\r\n                            <p>Humidity 60%</p>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <h3 class=\"m0\">23&deg;C</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center pv-lg\">\r\n                        <em class=\"wi wi-day-sunny-overcast fa-4x\"></em>\r\n                    </div>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"pull-left\">\r\n                            <p class=\"m0\">Max 23&deg;C</p>\r\n                            <p>Min 16&deg;C</p>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <h4 class=\"mt-lg mb0\">26 aug 2015</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading bg-purple\">\r\n                    <div class=\"card-icon\">\r\n                        <em class=\"icon-calendar\"></em>\r\n                    </div>\r\n                    <div class=\"card-title\">June</div>\r\n                </div>\r\n                <datepicker class=\"ui-datepicker\" [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\"></datepicker>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading bg-primary shadow-z1\">\r\n                    <div class=\"pull-right\">\r\n                        <h3 class=\"m0 text-lg\">47%</h3>\r\n                    </div>\r\n                    <div class=\"card-title\">Workload</div>\r\n                    <small>Stable</small>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"pull-left\">\r\n                            <p>Sessions 199</p>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <h3 class=\"m0\">Sys 10%</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center pv-lg\">\r\n                        <div class=\"text-lg\">70\r\n                            <small>%</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"pull-left\">\r\n                            <p class=\"m0\">\r\n                                <em class=\"icon-cloud-upload mr\"></em>\r\n                                <span>1.3 Gb</span>\r\n                            </p>\r\n                            <p class=\"m0\">\r\n                                <em class=\"icon-cloud-download mr\"></em>\r\n                                <span>2.8 Gb</span>\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <h4 class=\"mt-lg mb0\">26 aug 2015</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table m0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Members</th>\r\n                                <th class=\"col-sm-5\">Project</th>\r\n                                <th class=\"col-sm-1\">Progress</th>\r\n                                <th class=\"text-right\">Due date</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>30</td>\r\n                                <td>Maquinarium</td>\r\n                                <td class=\"text-center\">\r\n                                    <span [sparkline]=\"sparkOptionPie\" values=\"3,7\"></span>\r\n                                </td>\r\n                                <td class=\"text-right\">01 Jun 2015</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>502</td>\r\n                                <td>Material Design</td>\r\n                                <td class=\"text-center\">\r\n                                    <span [sparkline]=\"sparkOptionPie\" values=\"2,8\"></span>\r\n                                </td>\r\n                                <td class=\"text-right\">01 Aug 2015</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>870</td>\r\n                                <td>ReactJS Migration</td>\r\n                                <td class=\"text-center\">\r\n                                    <span [sparkline]=\"sparkOptionPie\" values=\"5,5\"></span>\r\n                                </td>\r\n                                <td class=\"text-right\">20 Sep 2015</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>10</td>\r\n                                <td>Internal Update</td>\r\n                                <td class=\"text-center\">\r\n                                    <span [sparkline]=\"sparkOptionPie\" values=\"7,3\"></span>\r\n                                </td>\r\n                                <td class=\"text-right\">01 Jun 2016</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\">\r\n                        <em class=\"icon-game-controller fa-fw mr\"></em>\r\n                        <span>Projects</span>\r\n                        <span class=\"badge badge-xs bg-purple\">15</span>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <em class=\"icon-bubbles fa-fw mr\"></em>\r\n                        <span>Messages</span>\r\n                        <span class=\"badge badge-xs bg-info\">+10</span>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <em class=\"icon-bell fa-fw mr\"></em>\r\n                        <span>Notifications</span>\r\n                        <span class=\"badge badge-xs bg-success\">110</span>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <em class=\"icon-cloud-upload fa-fw mr\"></em>\r\n                        <span>File Uploaded</span>\r\n                        <span class=\"badge badge-xs bg-primary\">60</span>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <em class=\"icon-graph fa-fw mr\"></em>\r\n                        <span>Bandwidth</span>\r\n                        <span class=\"badge badge-xs bg-danger\">75%</span>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <em class=\"icon-support fa-fw mr\"></em>\r\n                        <span>Opened Tickets</span>\r\n                        <span class=\"badge badge-xs bg-info\">10</span>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <em class=\"icon-check fa-fw mr\"></em>\r\n                        <span>Closed Tickets</span>\r\n                        <span class=\"badge badge-xs bg-danger\">26</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card card-map\">\r\n                <div class=\"card-heading bg-pink shadow-z1\">\r\n                    <div class=\"card-icon\">\r\n                        <em class=\"icon-map\"></em>\r\n                    </div>\r\n                    <div class=\"card-title\">Close to me</div>\r\n                </div>\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                </agm-map>\r\n                <div class=\"card-footer\">\r\n                    <input class=\"form-control shadow-z1\" type=\"text\" placeholder=\"Search places\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body bg-info shadow-z1\">\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-6\">\r\n                            <h2 class=\"mt0 mb\">7</h2>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <a class=\"mb text-white\" href=\"\">\r\n                                <em class=\"fa fa-envelope fa-2x\"></em>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-6\">\r\n                            <p class=\"m0\">New messages</p>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <p class=\"m0\">Inbox</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-subheader\">Recent messages</div>\r\n                <div class=\"mda-list\">\r\n                    <div class=\"mda-list-item\">\r\n                        <div class=\"mda-list-item-initial bg-pink\">M</div>\r\n                        <div class=\"mda-list-item-text mda-2-line\">\r\n                            <h3>Min Li Chan</h3>\r\n                            <h4>Brunch this weekend?</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mda-list-item\">\r\n                        <div class=\"mda-list-item-initial bg-purple\">A</div>\r\n                        <div class=\"mda-list-item-text mda-2-line\">\r\n                            <h3>Alan Vasquez</h3>\r\n                            <h4>Brunch this weekend?</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mda-list-item\">\r\n                        <div class=\"mda-list-item-initial bg-info\">S</div>\r\n                        <div class=\"mda-list-item-text mda-2-line\">\r\n                            <h3>Shane Campbell</h3>\r\n                            <h4>Brunch this weekend?</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body bg-yellow-500 shadow-z1\">\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-6\">\r\n                            <h2 class=\"mt0 mb\">5</h2>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <a class=\"mb text-inherit\" href=\"\">\r\n                                <em class=\"fa fa-bell fa-2x\"></em>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-6\">\r\n                            <p class=\"m0\">New alerts</p>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <p class=\"m0\">View all</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-subheader\">Recent messages</div>\r\n                <div class=\"card-body pt0\">\r\n                    <div class=\"alert alert-info\">Lorem ipsum dolor sit amet, consectetur adipisicing elit..</div>\r\n                    <div class=\"alert alert-success\">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>\r\n                    <div class=\"alert alert-danger m0\">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>\r\n                </div>\r\n                <div class=\"card-footer text-right\"><a class=\"btn btn-link text-success\" href=\"\">View all</a><a class=\"btn btn-link text-warning\" href=\"\">Dicard all</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading\">\r\n                    <div class=\"card-title\">Visits</div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div [sparkline]=\"sparkOption1\" values=\"1,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row row-table text-center\">\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Uniques</p>\r\n                            <h3 class=\"m0\">700</h3>\r\n                        </div>\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Recurrents</p>\r\n                            <h3 class=\"m0\">1500</h3>\r\n                        </div>\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Total</p>\r\n                            <h3 class=\"m0\">300</h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading\">\r\n                    <div class=\"card-title\">Blog activity</div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div [sparkline]=\"sparkOption2\" values=\"3,1,2,4,2,6,3,1\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row row-table text-center\">\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Posts</p>\r\n                            <h3 class=\"m0\">70</h3>\r\n                        </div>\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Published</p>\r\n                            <h3 class=\"m0\">30</h3>\r\n                        </div>\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Pendings</p>\r\n                            <h3 class=\"m0\">40</h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading bg-info\">\r\n                    <div class=\"card-title\">Stats</div>\r\n                </div>\r\n                <div class=\"card-body bg-info\">\r\n                    <div [sparkline]=\"sparkOption3\" values=\"3,1,2,4,2,6,3,1\"></div>\r\n                </div>\r\n                <div class=\"card-body bg-info\">\r\n                    <div class=\"row row-table text-center\">\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Storage</p>\r\n                            <h3 class=\"m0\">66%</h3>\r\n                        </div>\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Server</p>\r\n                            <h3 class=\"m0\">35%</h3>\r\n                        </div>\r\n                        <div class=\"col-xs-4\">\r\n                            <p class=\"m0\">Bandwidth</p>\r\n                            <h3 class=\"m0\">40%</h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/material/widgets/widgets.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/widgets/widgets.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/material/widgets/widgets.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/widgets/widgets.component.ts ***!
  \**************************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/colors/colors.service */ "./src/app/shared/colors/colors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent(colors) {
        this.colors = colors;
        this.dt = new Date();
        this.minDate = void 0;
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        this.sparkOption1 = {
            type: 'line',
            width: '100%',
            height: '140px',
            tooltipOffsetX: -20,
            tooltipOffsetY: 20,
            spotColor: 'rgba(0,0,0,.26)',
            minSpotColor: 'rgba(0,0,0,.26)',
            maxSpotColor: 'rgba(0,0,0,.26)',
            highlightSpotColor: 'rgba(0,0,0,.26)',
            highlightLineColor: 'rgba(0,0,0,.26)',
            spotRadius: 2,
            tooltipPrefix: '',
            tooltipSuffix: ' Visits',
            tooltipFormat: '{{prefix}}{{y}}{{suffix}}',
            chartRangeMin: 0,
            resize: true,
            lineColor: this.colors.byName('success'),
            fillColor: this.colors.byName('success')
        };
        this.sparkOption2 = {
            type: 'line',
            width: '100%',
            height: '140px',
            tooltipOffsetX: -20,
            tooltipOffsetY: 20,
            spotColor: 'rgba(0,0,0,.26)',
            minSpotColor: 'rgba(0,0,0,.26)',
            maxSpotColor: 'rgba(0,0,0,.26)',
            highlightSpotColor: 'rgba(0,0,0,.26)',
            highlightLineColor: 'rgba(0,0,0,.26)',
            spotRadius: 2,
            tooltipPrefix: '',
            tooltipSuffix: ' Visits',
            tooltipFormat: '{{prefix}}{{y}}{{suffix}}',
            chartRangeMin: 0,
            resize: true,
            lineColor: this.colors.byName('info'),
            fillColor: this.colors.byName('info')
        };
        this.sparkOption3 = {
            type: 'line',
            width: '100%',
            height: '140px',
            tooltipOffsetX: -20,
            tooltipOffsetY: 20,
            spotColor: 'rgba(0,0,0,.26)',
            minSpotColor: 'rgba(0,0,0,.26)',
            maxSpotColor: 'rgba(0,0,0,.26)',
            highlightSpotColor: 'rgba(0,0,0,.26)',
            highlightLineColor: 'rgba(0,0,0,.26)',
            spotRadius: 2,
            tooltipPrefix: '',
            tooltipSuffix: ' Visits',
            tooltipFormat: '{{prefix}}{{y}}{{suffix}}',
            chartRangeMin: 0,
            resize: true,
            lineColor: "#fff",
            fillColor: "#fff"
        };
        this.sparkOptionPie = {
            type: 'pie',
            width: '2em',
            height: '2em',
            sliceColors: [this.colors.byName('success'), this.colors.byName('gray-light')]
        };
    }
    WidgetsComponent.prototype.ngOnInit = function () {
    };
    WidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widgets',
            template: __webpack_require__(/*! ./widgets.component.html */ "./src/app/routes/material/widgets/widgets.component.html"),
            styles: [__webpack_require__(/*! ./widgets.component.scss */ "./src/app/routes/material/widgets/widgets.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_colors_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"]])
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=material-material-module.js.map