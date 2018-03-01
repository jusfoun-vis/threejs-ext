/*!
 * The three.js expansion library v0.89.0
 * Collected by Jusfoun Visualization Department
 * Contact: 
 *   vis@jusfoun.com
 *   http://vis.jusfoun.com
 *   http://jusfoun-vis.github.io
 * 
 * Copyright (c) 2018, Jusfoun Big Data Group Inc.
 * All rights reserved.
 * 
 * LICENSE
 * http://www.jusfoun.com/software/LICENSE.txt
 * 
 * The three.js LICENSE
 * http://threejs.org/license
 */
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controls = __webpack_require__(2);

Object.keys(_controls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _controls[key];
    }
  });
});

var _loaders = __webpack_require__(14);

Object.keys(_loaders).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loaders[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VRControls = exports.TransformControls = exports.TrackballControls = exports.PointerLockControls = exports.OrthographicTrackballControls = exports.OrbitControls = exports.FlyControls = exports.FirstPersonControls = exports.EditorControls = exports.DragControls = exports.DeviceOrientationControls = undefined;

var _DeviceOrientationControls = __webpack_require__(3);

var _DeviceOrientationControls2 = _interopRequireDefault(_DeviceOrientationControls);

var _DragControls = __webpack_require__(4);

var _DragControls2 = _interopRequireDefault(_DragControls);

var _EditorControls = __webpack_require__(5);

var _EditorControls2 = _interopRequireDefault(_EditorControls);

var _FirstPersonControls = __webpack_require__(6);

var _FirstPersonControls2 = _interopRequireDefault(_FirstPersonControls);

var _FlyControls = __webpack_require__(7);

var _FlyControls2 = _interopRequireDefault(_FlyControls);

var _OrbitControls = __webpack_require__(8);

var _OrbitControls2 = _interopRequireDefault(_OrbitControls);

var _OrthographicTrackballControls = __webpack_require__(9);

var _OrthographicTrackballControls2 = _interopRequireDefault(_OrthographicTrackballControls);

var _PointerLockControls = __webpack_require__(10);

var _PointerLockControls2 = _interopRequireDefault(_PointerLockControls);

var _TrackballControls = __webpack_require__(11);

var _TrackballControls2 = _interopRequireDefault(_TrackballControls);

var _TransformControls = __webpack_require__(12);

var _TransformControls2 = _interopRequireDefault(_TransformControls);

var _VRControls = __webpack_require__(13);

var _VRControls2 = _interopRequireDefault(_VRControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DeviceOrientationControls = _DeviceOrientationControls2.default;
exports.DragControls = _DragControls2.default;
exports.EditorControls = _EditorControls2.default;
exports.FirstPersonControls = _FirstPersonControls2.default;
exports.FlyControls = _FlyControls2.default;
exports.OrbitControls = _OrbitControls2.default;
exports.OrthographicTrackballControls = _OrthographicTrackballControls2.default;
exports.PointerLockControls = _PointerLockControls2.default;
exports.TrackballControls = _TrackballControls2.default;
exports.TransformControls = _TransformControls2.default;
exports.VRControls = _VRControls2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author richt / http://richt.me
 * @author WestLangley / http://github.com/WestLangley
 *
 * W3C Device Orientation control (http://w3c.github.io/deviceorientation/spec-source-orientation.html)
 */

THREE.DeviceOrientationControls = function (object) {

	var scope = this;

	this.object = object;
	this.object.rotation.reorder("YXZ");

	this.enabled = true;

	this.deviceOrientation = {};
	this.screenOrientation = 0;

	this.alphaOffset = 0; // radians

	var onDeviceOrientationChangeEvent = function onDeviceOrientationChangeEvent(event) {

		scope.deviceOrientation = event;
	};

	var onScreenOrientationChangeEvent = function onScreenOrientationChangeEvent() {

		scope.screenOrientation = window.orientation || 0;
	};

	// The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	var setObjectQuaternion = function () {

		var zee = new THREE.Vector3(0, 0, 1);

		var euler = new THREE.Euler();

		var q0 = new THREE.Quaternion();

		var q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis

		return function (quaternion, alpha, beta, gamma, orient) {

			euler.set(beta, alpha, -gamma, 'YXZ'); // 'ZXY' for the device, but 'YXZ' for us

			quaternion.setFromEuler(euler); // orient the device

			quaternion.multiply(q1); // camera looks out the back of the device, not the top

			quaternion.multiply(q0.setFromAxisAngle(zee, -orient)); // adjust for screen orientation
		};
	}();

	this.connect = function () {

		onScreenOrientationChangeEvent(); // run once on load

		window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
		window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);

		scope.enabled = true;
	};

	this.disconnect = function () {

		window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
		window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);

		scope.enabled = false;
	};

	this.update = function () {

		if (scope.enabled === false) return;

		var device = scope.deviceOrientation;

		if (device) {

			var alpha = device.alpha ? THREE.Math.degToRad(device.alpha) + scope.alphaOffset : 0; // Z

			var beta = device.beta ? THREE.Math.degToRad(device.beta) : 0; // X'

			var gamma = device.gamma ? THREE.Math.degToRad(device.gamma) : 0; // Y''

			var orient = scope.screenOrientation ? THREE.Math.degToRad(scope.screenOrientation) : 0; // O

			setObjectQuaternion(scope.object.quaternion, alpha, beta, gamma, orient);
		}
	};

	this.dispose = function () {

		scope.disconnect();
	};

	this.connect();
};

exports.default = THREE.DeviceOrientationControls;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * @author zz85 / https://github.com/zz85
 * @author mrdoob / http://mrdoob.com
 * Running this will allow you to drag three.js objects around the screen.
 */

THREE.DragControls = function (_objects, _camera, _domElement) {

	if (_objects instanceof THREE.Camera) {

		console.warn('THREE.DragControls: Constructor now expects ( objects, camera, domElement )');
		var temp = _objects;_objects = _camera;_camera = temp;
	}

	var _plane = new THREE.Plane();
	var _raycaster = new THREE.Raycaster();

	var _mouse = new THREE.Vector2();
	var _offset = new THREE.Vector3();
	var _intersection = new THREE.Vector3();

	var _selected = null,
	    _hovered = null;

	//

	var scope = this;

	function activate() {

		_domElement.addEventListener('mousemove', onDocumentMouseMove, false);
		_domElement.addEventListener('mousedown', onDocumentMouseDown, false);
		_domElement.addEventListener('mouseup', onDocumentMouseCancel, false);
		_domElement.addEventListener('mouseleave', onDocumentMouseCancel, false);
		_domElement.addEventListener('touchmove', onDocumentTouchMove, false);
		_domElement.addEventListener('touchstart', onDocumentTouchStart, false);
		_domElement.addEventListener('touchend', onDocumentTouchEnd, false);
	}

	function deactivate() {

		_domElement.removeEventListener('mousemove', onDocumentMouseMove, false);
		_domElement.removeEventListener('mousedown', onDocumentMouseDown, false);
		_domElement.removeEventListener('mouseup', onDocumentMouseCancel, false);
		_domElement.removeEventListener('mouseleave', onDocumentMouseCancel, false);
		_domElement.removeEventListener('touchmove', onDocumentTouchMove, false);
		_domElement.removeEventListener('touchstart', onDocumentTouchStart, false);
		_domElement.removeEventListener('touchend', onDocumentTouchEnd, false);
	}

	function dispose() {

		deactivate();
	}

	function onDocumentMouseMove(event) {

		event.preventDefault();

		var rect = _domElement.getBoundingClientRect();

		_mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
		_mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

		_raycaster.setFromCamera(_mouse, _camera);

		if (_selected && scope.enabled) {

			if (_raycaster.ray.intersectPlane(_plane, _intersection)) {

				_selected.position.copy(_intersection.sub(_offset));
			}

			scope.dispatchEvent({ type: 'drag', object: _selected });

			return;
		}

		_raycaster.setFromCamera(_mouse, _camera);

		var intersects = _raycaster.intersectObjects(_objects);

		if (intersects.length > 0) {

			var object = intersects[0].object;

			_plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), object.position);

			if (_hovered !== object) {

				scope.dispatchEvent({ type: 'hoveron', object: object });

				_domElement.style.cursor = 'pointer';
				_hovered = object;
			}
		} else {

			if (_hovered !== null) {

				scope.dispatchEvent({ type: 'hoveroff', object: _hovered });

				_domElement.style.cursor = 'auto';
				_hovered = null;
			}
		}
	}

	function onDocumentMouseDown(event) {

		event.preventDefault();

		_raycaster.setFromCamera(_mouse, _camera);

		var intersects = _raycaster.intersectObjects(_objects);

		if (intersects.length > 0) {

			_selected = intersects[0].object;

			if (_raycaster.ray.intersectPlane(_plane, _intersection)) {

				_offset.copy(_intersection).sub(_selected.position);
			}

			_domElement.style.cursor = 'move';

			scope.dispatchEvent({ type: 'dragstart', object: _selected });
		}
	}

	function onDocumentMouseCancel(event) {

		event.preventDefault();

		if (_selected) {

			scope.dispatchEvent({ type: 'dragend', object: _selected });

			_selected = null;
		}

		_domElement.style.cursor = 'auto';
	}

	function onDocumentTouchMove(event) {

		event.preventDefault();
		event = event.changedTouches[0];

		var rect = _domElement.getBoundingClientRect();

		_mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
		_mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

		_raycaster.setFromCamera(_mouse, _camera);

		if (_selected && scope.enabled) {

			if (_raycaster.ray.intersectPlane(_plane, _intersection)) {

				_selected.position.copy(_intersection.sub(_offset));
			}

			scope.dispatchEvent({ type: 'drag', object: _selected });

			return;
		}
	}

	function onDocumentTouchStart(event) {

		event.preventDefault();
		event = event.changedTouches[0];

		var rect = _domElement.getBoundingClientRect();

		_mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
		_mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

		_raycaster.setFromCamera(_mouse, _camera);

		var intersects = _raycaster.intersectObjects(_objects);

		if (intersects.length > 0) {

			_selected = intersects[0].object;

			_plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), _selected.position);

			if (_raycaster.ray.intersectPlane(_plane, _intersection)) {

				_offset.copy(_intersection).sub(_selected.position);
			}

			_domElement.style.cursor = 'move';

			scope.dispatchEvent({ type: 'dragstart', object: _selected });
		}
	}

	function onDocumentTouchEnd(event) {

		event.preventDefault();

		if (_selected) {

			scope.dispatchEvent({ type: 'dragend', object: _selected });

			_selected = null;
		}

		_domElement.style.cursor = 'auto';
	}

	activate();

	// API

	this.enabled = true;

	this.activate = activate;
	this.deactivate = deactivate;
	this.dispose = dispose;

	// Backward compatibility

	this.setObjects = function () {

		console.error('THREE.DragControls: setObjects() has been removed.');
	};

	this.on = function (type, listener) {

		console.warn('THREE.DragControls: on() has been deprecated. Use addEventListener() instead.');
		scope.addEventListener(type, listener);
	};

	this.off = function (type, listener) {

		console.warn('THREE.DragControls: off() has been deprecated. Use removeEventListener() instead.');
		scope.removeEventListener(type, listener);
	};

	this.notify = function (type) {

		console.error('THREE.DragControls: notify() has been deprecated. Use dispatchEvent() instead.');
		scope.dispatchEvent({ type: type });
	};
};

THREE.DragControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.DragControls.prototype.constructor = THREE.DragControls;

exports.default = THREE.DragControls;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.EditorControls = function (object, domElement) {

	domElement = domElement !== undefined ? domElement : document;

	// API

	this.enabled = true;
	this.center = new THREE.Vector3();
	this.panSpeed = 0.001;
	this.zoomSpeed = 0.001;
	this.rotationSpeed = 0.005;

	// internals

	var scope = this;
	var vector = new THREE.Vector3();

	var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };
	var state = STATE.NONE;

	var center = this.center;
	var normalMatrix = new THREE.Matrix3();
	var pointer = new THREE.Vector2();
	var pointerOld = new THREE.Vector2();
	var spherical = new THREE.Spherical();

	// events

	var changeEvent = { type: 'change' };

	this.focus = function (target) {

		var box = new THREE.Box3().setFromObject(target);
		object.lookAt(center.copy(box.getCenter()));
		scope.dispatchEvent(changeEvent);
	};

	this.pan = function (delta) {

		var distance = object.position.distanceTo(center);

		delta.multiplyScalar(distance * scope.panSpeed);
		delta.applyMatrix3(normalMatrix.getNormalMatrix(object.matrix));

		object.position.add(delta);
		center.add(delta);

		scope.dispatchEvent(changeEvent);
	};

	this.zoom = function (delta) {

		var distance = object.position.distanceTo(center);

		delta.multiplyScalar(distance * scope.zoomSpeed);

		if (delta.length() > distance) return;

		delta.applyMatrix3(normalMatrix.getNormalMatrix(object.matrix));

		object.position.add(delta);

		scope.dispatchEvent(changeEvent);
	};

	this.rotate = function (delta) {

		vector.copy(object.position).sub(center);

		spherical.setFromVector3(vector);

		spherical.theta += delta.x;
		spherical.phi += delta.y;

		spherical.makeSafe();

		vector.setFromSpherical(spherical);

		object.position.copy(center).add(vector);

		object.lookAt(center);

		scope.dispatchEvent(changeEvent);
	};

	// mouse

	function onMouseDown(event) {

		if (scope.enabled === false) return;

		if (event.button === 0) {

			state = STATE.ROTATE;
		} else if (event.button === 1) {

			state = STATE.ZOOM;
		} else if (event.button === 2) {

			state = STATE.PAN;
		}

		pointerOld.set(event.clientX, event.clientY);

		domElement.addEventListener('mousemove', onMouseMove, false);
		domElement.addEventListener('mouseup', onMouseUp, false);
		domElement.addEventListener('mouseout', onMouseUp, false);
		domElement.addEventListener('dblclick', onMouseUp, false);
	}

	function onMouseMove(event) {

		if (scope.enabled === false) return;

		pointer.set(event.clientX, event.clientY);

		var movementX = pointer.x - pointerOld.x;
		var movementY = pointer.y - pointerOld.y;

		if (state === STATE.ROTATE) {

			scope.rotate(new THREE.Vector3(-movementX * scope.rotationSpeed, -movementY * scope.rotationSpeed, 0));
		} else if (state === STATE.ZOOM) {

			scope.zoom(new THREE.Vector3(0, 0, movementY));
		} else if (state === STATE.PAN) {

			scope.pan(new THREE.Vector3(-movementX, movementY, 0));
		}

		pointerOld.set(event.clientX, event.clientY);
	}

	function onMouseUp(event) {

		domElement.removeEventListener('mousemove', onMouseMove, false);
		domElement.removeEventListener('mouseup', onMouseUp, false);
		domElement.removeEventListener('mouseout', onMouseUp, false);
		domElement.removeEventListener('dblclick', onMouseUp, false);

		state = STATE.NONE;
	}

	function onMouseWheel(event) {

		event.preventDefault();

		// if ( scope.enabled === false ) return;

		scope.zoom(new THREE.Vector3(0, 0, event.deltaY));
	}

	function contextmenu(event) {

		event.preventDefault();
	}

	this.dispose = function () {

		domElement.removeEventListener('contextmenu', contextmenu, false);
		domElement.removeEventListener('mousedown', onMouseDown, false);
		domElement.removeEventListener('wheel', onMouseWheel, false);

		domElement.removeEventListener('mousemove', onMouseMove, false);
		domElement.removeEventListener('mouseup', onMouseUp, false);
		domElement.removeEventListener('mouseout', onMouseUp, false);
		domElement.removeEventListener('dblclick', onMouseUp, false);

		domElement.removeEventListener('touchstart', touchStart, false);
		domElement.removeEventListener('touchmove', touchMove, false);
	};

	domElement.addEventListener('contextmenu', contextmenu, false);
	domElement.addEventListener('mousedown', onMouseDown, false);
	domElement.addEventListener('wheel', onMouseWheel, false);

	// touch

	var touches = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
	var prevTouches = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];

	var prevDistance = null;

	function touchStart(event) {

		if (scope.enabled === false) return;

		switch (event.touches.length) {

			case 1:
				touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
				touches[1].set(event.touches[0].pageX, event.touches[0].pageY, 0);
				break;

			case 2:
				touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
				touches[1].set(event.touches[1].pageX, event.touches[1].pageY, 0);
				prevDistance = touches[0].distanceTo(touches[1]);
				break;

		}

		prevTouches[0].copy(touches[0]);
		prevTouches[1].copy(touches[1]);
	}

	function touchMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		function getClosest(touch, touches) {

			var closest = touches[0];

			for (var i in touches) {

				if (closest.distanceTo(touch) > touches[i].distanceTo(touch)) closest = touches[i];
			}

			return closest;
		}

		switch (event.touches.length) {

			case 1:
				touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
				touches[1].set(event.touches[0].pageX, event.touches[0].pageY, 0);
				scope.rotate(touches[0].sub(getClosest(touches[0], prevTouches)).multiplyScalar(-scope.rotationSpeed));
				break;

			case 2:
				touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
				touches[1].set(event.touches[1].pageX, event.touches[1].pageY, 0);
				var distance = touches[0].distanceTo(touches[1]);
				scope.zoom(new THREE.Vector3(0, 0, prevDistance - distance));
				prevDistance = distance;

				var offset0 = touches[0].clone().sub(getClosest(touches[0], prevTouches));
				var offset1 = touches[1].clone().sub(getClosest(touches[1], prevTouches));
				offset0.x = -offset0.x;
				offset1.x = -offset1.x;

				scope.pan(offset0.add(offset1).multiplyScalar(0.5));

				break;

		}

		prevTouches[0].copy(touches[0]);
		prevTouches[1].copy(touches[1]);
	}

	domElement.addEventListener('touchstart', touchStart, false);
	domElement.addEventListener('touchmove', touchMove, false);
};

THREE.EditorControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.EditorControls.prototype.constructor = THREE.EditorControls;

exports.default = THREE.EditorControls;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author paulirish / http://paulirish.com/
 */

THREE.FirstPersonControls = function (object, domElement) {

	this.object = object;
	this.target = new THREE.Vector3(0, 0, 0);

	this.domElement = domElement !== undefined ? domElement : document;

	this.enabled = true;

	this.movementSpeed = 1.0;
	this.lookSpeed = 0.005;

	this.lookVertical = true;
	this.autoForward = false;

	this.activeLook = true;

	this.heightSpeed = false;
	this.heightCoef = 1.0;
	this.heightMin = 0.0;
	this.heightMax = 1.0;

	this.constrainVertical = false;
	this.verticalMin = 0;
	this.verticalMax = Math.PI;

	this.autoSpeedFactor = 0.0;

	this.mouseX = 0;
	this.mouseY = 0;

	this.lat = 0;
	this.lon = 0;
	this.phi = 0;
	this.theta = 0;

	this.moveForward = false;
	this.moveBackward = false;
	this.moveLeft = false;
	this.moveRight = false;

	this.mouseDragOn = false;

	this.viewHalfX = 0;
	this.viewHalfY = 0;

	if (this.domElement !== document) {

		this.domElement.setAttribute('tabindex', -1);
	}

	//

	this.handleResize = function () {

		if (this.domElement === document) {

			this.viewHalfX = window.innerWidth / 2;
			this.viewHalfY = window.innerHeight / 2;
		} else {

			this.viewHalfX = this.domElement.offsetWidth / 2;
			this.viewHalfY = this.domElement.offsetHeight / 2;
		}
	};

	this.onMouseDown = function (event) {

		if (this.domElement !== document) {

			this.domElement.focus();
		}

		event.preventDefault();
		event.stopPropagation();

		if (this.activeLook) {

			switch (event.button) {

				case 0:
					this.moveForward = true;break;
				case 2:
					this.moveBackward = true;break;

			}
		}

		this.mouseDragOn = true;
	};

	this.onMouseUp = function (event) {

		event.preventDefault();
		event.stopPropagation();

		if (this.activeLook) {

			switch (event.button) {

				case 0:
					this.moveForward = false;break;
				case 2:
					this.moveBackward = false;break;

			}
		}

		this.mouseDragOn = false;
	};

	this.onMouseMove = function (event) {

		if (this.domElement === document) {

			this.mouseX = event.pageX - this.viewHalfX;
			this.mouseY = event.pageY - this.viewHalfY;
		} else {

			this.mouseX = event.pageX - this.domElement.offsetLeft - this.viewHalfX;
			this.mouseY = event.pageY - this.domElement.offsetTop - this.viewHalfY;
		}
	};

	this.onKeyDown = function (event) {

		//event.preventDefault();

		switch (event.keyCode) {

			case 38: /*up*/
			case 87:
				/*W*/this.moveForward = true;break;

			case 37: /*left*/
			case 65:
				/*A*/this.moveLeft = true;break;

			case 40: /*down*/
			case 83:
				/*S*/this.moveBackward = true;break;

			case 39: /*right*/
			case 68:
				/*D*/this.moveRight = true;break;

			case 82:
				/*R*/this.moveUp = true;break;
			case 70:
				/*F*/this.moveDown = true;break;

		}
	};

	this.onKeyUp = function (event) {

		switch (event.keyCode) {

			case 38: /*up*/
			case 87:
				/*W*/this.moveForward = false;break;

			case 37: /*left*/
			case 65:
				/*A*/this.moveLeft = false;break;

			case 40: /*down*/
			case 83:
				/*S*/this.moveBackward = false;break;

			case 39: /*right*/
			case 68:
				/*D*/this.moveRight = false;break;

			case 82:
				/*R*/this.moveUp = false;break;
			case 70:
				/*F*/this.moveDown = false;break;

		}
	};

	this.update = function (delta) {

		if (this.enabled === false) return;

		if (this.heightSpeed) {

			var y = THREE.Math.clamp(this.object.position.y, this.heightMin, this.heightMax);
			var heightDelta = y - this.heightMin;

			this.autoSpeedFactor = delta * (heightDelta * this.heightCoef);
		} else {

			this.autoSpeedFactor = 0.0;
		}

		var actualMoveSpeed = delta * this.movementSpeed;

		if (this.moveForward || this.autoForward && !this.moveBackward) this.object.translateZ(-(actualMoveSpeed + this.autoSpeedFactor));
		if (this.moveBackward) this.object.translateZ(actualMoveSpeed);

		if (this.moveLeft) this.object.translateX(-actualMoveSpeed);
		if (this.moveRight) this.object.translateX(actualMoveSpeed);

		if (this.moveUp) this.object.translateY(actualMoveSpeed);
		if (this.moveDown) this.object.translateY(-actualMoveSpeed);

		var actualLookSpeed = delta * this.lookSpeed;

		if (!this.activeLook) {

			actualLookSpeed = 0;
		}

		var verticalLookRatio = 1;

		if (this.constrainVertical) {

			verticalLookRatio = Math.PI / (this.verticalMax - this.verticalMin);
		}

		this.lon += this.mouseX * actualLookSpeed;
		if (this.lookVertical) this.lat -= this.mouseY * actualLookSpeed * verticalLookRatio;

		this.lat = Math.max(-85, Math.min(85, this.lat));
		this.phi = THREE.Math.degToRad(90 - this.lat);

		this.theta = THREE.Math.degToRad(this.lon);

		if (this.constrainVertical) {

			this.phi = THREE.Math.mapLinear(this.phi, 0, Math.PI, this.verticalMin, this.verticalMax);
		}

		var targetPosition = this.target,
		    position = this.object.position;

		targetPosition.x = position.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
		targetPosition.y = position.y + 100 * Math.cos(this.phi);
		targetPosition.z = position.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);

		this.object.lookAt(targetPosition);
	};

	function contextmenu(event) {

		event.preventDefault();
	}

	this.dispose = function () {

		this.domElement.removeEventListener('contextmenu', contextmenu, false);
		this.domElement.removeEventListener('mousedown', _onMouseDown, false);
		this.domElement.removeEventListener('mousemove', _onMouseMove, false);
		this.domElement.removeEventListener('mouseup', _onMouseUp, false);

		window.removeEventListener('keydown', _onKeyDown, false);
		window.removeEventListener('keyup', _onKeyUp, false);
	};

	var _onMouseMove = bind(this, this.onMouseMove);
	var _onMouseDown = bind(this, this.onMouseDown);
	var _onMouseUp = bind(this, this.onMouseUp);
	var _onKeyDown = bind(this, this.onKeyDown);
	var _onKeyUp = bind(this, this.onKeyUp);

	this.domElement.addEventListener('contextmenu', contextmenu, false);
	this.domElement.addEventListener('mousemove', _onMouseMove, false);
	this.domElement.addEventListener('mousedown', _onMouseDown, false);
	this.domElement.addEventListener('mouseup', _onMouseUp, false);

	window.addEventListener('keydown', _onKeyDown, false);
	window.addEventListener('keyup', _onKeyUp, false);

	function bind(scope, fn) {

		return function () {

			fn.apply(scope, arguments);
		};
	}

	this.handleResize();
};

exports.default = THREE.FirstPersonControls;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author James Baicoianu / http://www.baicoianu.com/
 */

THREE.FlyControls = function (object, domElement) {

	this.object = object;

	this.domElement = domElement !== undefined ? domElement : document;
	if (domElement) this.domElement.setAttribute('tabindex', -1);

	// API

	this.movementSpeed = 1.0;
	this.rollSpeed = 0.005;

	this.dragToLook = false;
	this.autoForward = false;

	// disable default target object behavior

	// internals

	this.tmpQuaternion = new THREE.Quaternion();

	this.mouseStatus = 0;

	this.moveState = { up: 0, down: 0, left: 0, right: 0, forward: 0, back: 0, pitchUp: 0, pitchDown: 0, yawLeft: 0, yawRight: 0, rollLeft: 0, rollRight: 0 };
	this.moveVector = new THREE.Vector3(0, 0, 0);
	this.rotationVector = new THREE.Vector3(0, 0, 0);

	this.handleEvent = function (event) {

		if (typeof this[event.type] == 'function') {

			this[event.type](event);
		}
	};

	this.keydown = function (event) {

		if (event.altKey) {

			return;
		}

		//event.preventDefault();

		switch (event.keyCode) {

			case 16:
				/* shift */this.movementSpeedMultiplier = .1;break;

			case 87:
				/*W*/this.moveState.forward = 1;break;
			case 83:
				/*S*/this.moveState.back = 1;break;

			case 65:
				/*A*/this.moveState.left = 1;break;
			case 68:
				/*D*/this.moveState.right = 1;break;

			case 82:
				/*R*/this.moveState.up = 1;break;
			case 70:
				/*F*/this.moveState.down = 1;break;

			case 38:
				/*up*/this.moveState.pitchUp = 1;break;
			case 40:
				/*down*/this.moveState.pitchDown = 1;break;

			case 37:
				/*left*/this.moveState.yawLeft = 1;break;
			case 39:
				/*right*/this.moveState.yawRight = 1;break;

			case 81:
				/*Q*/this.moveState.rollLeft = 1;break;
			case 69:
				/*E*/this.moveState.rollRight = 1;break;

		}

		this.updateMovementVector();
		this.updateRotationVector();
	};

	this.keyup = function (event) {

		switch (event.keyCode) {

			case 16:
				/* shift */this.movementSpeedMultiplier = 1;break;

			case 87:
				/*W*/this.moveState.forward = 0;break;
			case 83:
				/*S*/this.moveState.back = 0;break;

			case 65:
				/*A*/this.moveState.left = 0;break;
			case 68:
				/*D*/this.moveState.right = 0;break;

			case 82:
				/*R*/this.moveState.up = 0;break;
			case 70:
				/*F*/this.moveState.down = 0;break;

			case 38:
				/*up*/this.moveState.pitchUp = 0;break;
			case 40:
				/*down*/this.moveState.pitchDown = 0;break;

			case 37:
				/*left*/this.moveState.yawLeft = 0;break;
			case 39:
				/*right*/this.moveState.yawRight = 0;break;

			case 81:
				/*Q*/this.moveState.rollLeft = 0;break;
			case 69:
				/*E*/this.moveState.rollRight = 0;break;

		}

		this.updateMovementVector();
		this.updateRotationVector();
	};

	this.mousedown = function (event) {

		if (this.domElement !== document) {

			this.domElement.focus();
		}

		event.preventDefault();
		event.stopPropagation();

		if (this.dragToLook) {

			this.mouseStatus++;
		} else {

			switch (event.button) {

				case 0:
					this.moveState.forward = 1;break;
				case 2:
					this.moveState.back = 1;break;

			}

			this.updateMovementVector();
		}
	};

	this.mousemove = function (event) {

		if (!this.dragToLook || this.mouseStatus > 0) {

			var container = this.getContainerDimensions();
			var halfWidth = container.size[0] / 2;
			var halfHeight = container.size[1] / 2;

			this.moveState.yawLeft = -(event.pageX - container.offset[0] - halfWidth) / halfWidth;
			this.moveState.pitchDown = (event.pageY - container.offset[1] - halfHeight) / halfHeight;

			this.updateRotationVector();
		}
	};

	this.mouseup = function (event) {

		event.preventDefault();
		event.stopPropagation();

		if (this.dragToLook) {

			this.mouseStatus--;

			this.moveState.yawLeft = this.moveState.pitchDown = 0;
		} else {

			switch (event.button) {

				case 0:
					this.moveState.forward = 0;break;
				case 2:
					this.moveState.back = 0;break;

			}

			this.updateMovementVector();
		}

		this.updateRotationVector();
	};

	this.update = function (delta) {

		var moveMult = delta * this.movementSpeed;
		var rotMult = delta * this.rollSpeed;

		this.object.translateX(this.moveVector.x * moveMult);
		this.object.translateY(this.moveVector.y * moveMult);
		this.object.translateZ(this.moveVector.z * moveMult);

		this.tmpQuaternion.set(this.rotationVector.x * rotMult, this.rotationVector.y * rotMult, this.rotationVector.z * rotMult, 1).normalize();
		this.object.quaternion.multiply(this.tmpQuaternion);

		// expose the rotation vector for convenience
		this.object.rotation.setFromQuaternion(this.object.quaternion, this.object.rotation.order);
	};

	this.updateMovementVector = function () {

		var forward = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;

		this.moveVector.x = -this.moveState.left + this.moveState.right;
		this.moveVector.y = -this.moveState.down + this.moveState.up;
		this.moveVector.z = -forward + this.moveState.back;

		//console.log( 'move:', [ this.moveVector.x, this.moveVector.y, this.moveVector.z ] );
	};

	this.updateRotationVector = function () {

		this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
		this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
		this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft;

		//console.log( 'rotate:', [ this.rotationVector.x, this.rotationVector.y, this.rotationVector.z ] );
	};

	this.getContainerDimensions = function () {

		if (this.domElement != document) {

			return {
				size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
				offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
			};
		} else {

			return {
				size: [window.innerWidth, window.innerHeight],
				offset: [0, 0]
			};
		}
	};

	function bind(scope, fn) {

		return function () {

			fn.apply(scope, arguments);
		};
	}

	function contextmenu(event) {

		event.preventDefault();
	}

	this.dispose = function () {

		this.domElement.removeEventListener('contextmenu', contextmenu, false);
		this.domElement.removeEventListener('mousedown', _mousedown, false);
		this.domElement.removeEventListener('mousemove', _mousemove, false);
		this.domElement.removeEventListener('mouseup', _mouseup, false);

		window.removeEventListener('keydown', _keydown, false);
		window.removeEventListener('keyup', _keyup, false);
	};

	var _mousemove = bind(this, this.mousemove);
	var _mousedown = bind(this, this.mousedown);
	var _mouseup = bind(this, this.mouseup);
	var _keydown = bind(this, this.keydown);
	var _keyup = bind(this, this.keyup);

	this.domElement.addEventListener('contextmenu', contextmenu, false);

	this.domElement.addEventListener('mousemove', _mousemove, false);
	this.domElement.addEventListener('mousedown', _mousedown, false);
	this.domElement.addEventListener('mouseup', _mouseup, false);

	window.addEventListener('keydown', _keydown, false);
	window.addEventListener('keyup', _keyup, false);

	this.updateMovementVector();
	this.updateRotationVector();
};

exports.default = THREE.FlyControls;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

THREE.OrbitControls = function (object, domElement) {

	this.object = object;

	this.domElement = domElement !== undefined ? domElement : document;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new THREE.Vector3();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = -Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.25;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.keyPanSpeed = 7.0; // pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;
	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;
	};

	this.saveState = function () {

		scope.target0.copy(scope.target);
		scope.position0.copy(scope.object.position);
		scope.zoom0 = scope.object.zoom;
	};

	this.reset = function () {

		scope.target.copy(scope.target0);
		scope.object.position.copy(scope.position0);
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent(changeEvent);

		scope.update();

		state = STATE.NONE;
	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function update() {

			var position = scope.object.position;

			offset.copy(position).sub(scope.target);

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion(quat);

			// angle from z-axis around y-axis
			spherical.setFromVector3(offset);

			if (scope.autoRotate && state === STATE.NONE) {

				rotateLeft(getAutoRotationAngle());
			}

			spherical.theta += sphericalDelta.theta;
			spherical.phi += sphericalDelta.phi;

			// restrict theta to be between desired limits
			spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

			// restrict phi to be between desired limits
			spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

			spherical.makeSafe();

			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

			// move target to panned location
			scope.target.add(panOffset);

			offset.setFromSpherical(spherical);

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion(quatInverse);

			position.copy(scope.target).add(offset);

			scope.object.lookAt(scope.target);

			if (scope.enableDamping === true) {

				sphericalDelta.theta *= 1 - scope.dampingFactor;
				sphericalDelta.phi *= 1 - scope.dampingFactor;
			} else {

				sphericalDelta.set(0, 0, 0);
			}

			scale = 1;
			panOffset.set(0, 0, 0);

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

				scope.dispatchEvent(changeEvent);

				lastPosition.copy(scope.object.position);
				lastQuaternion.copy(scope.object.quaternion);
				zoomChanged = false;

				return true;
			}

			return false;
		};
	}();

	this.dispose = function () {

		scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
		scope.domElement.removeEventListener('mousedown', onMouseDown, false);
		scope.domElement.removeEventListener('wheel', onMouseWheel, false);

		scope.domElement.removeEventListener('touchstart', onTouchStart, false);
		scope.domElement.removeEventListener('touchend', onTouchEnd, false);
		scope.domElement.removeEventListener('touchmove', onTouchMove, false);

		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseUp, false);

		window.removeEventListener('keydown', onKeyDown, false);

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new THREE.Spherical();
	var sphericalDelta = new THREE.Spherical();

	var scale = 1;
	var panOffset = new THREE.Vector3();
	var zoomChanged = false;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
	}

	function getZoomScale() {

		return Math.pow(0.95, scope.zoomSpeed);
	}

	function rotateLeft(angle) {

		sphericalDelta.theta -= angle;
	}

	function rotateUp(angle) {

		sphericalDelta.phi -= angle;
	}

	var panLeft = function () {

		var v = new THREE.Vector3();

		return function panLeft(distance, objectMatrix) {

			v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
			v.multiplyScalar(-distance);

			panOffset.add(v);
		};
	}();

	var panUp = function () {

		var v = new THREE.Vector3();

		return function panUp(distance, objectMatrix) {

			v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
			v.multiplyScalar(distance);

			panOffset.add(v);
		};
	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new THREE.Vector3();

		return function pan(deltaX, deltaY) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if (scope.object.isPerspectiveCamera) {

				// perspective
				var position = scope.object.position;
				offset.copy(position).sub(scope.target);
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
				panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
			} else if (scope.object.isOrthographicCamera) {

				// orthographic
				panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
				panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
			} else {

				// camera neither orthographic nor perspective
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
				scope.enablePan = false;
			}
		};
	}();

	function dollyIn(dollyScale) {

		if (scope.object.isPerspectiveCamera) {

			scale /= dollyScale;
		} else if (scope.object.isOrthographicCamera) {

			scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
			scope.object.updateProjectionMatrix();
			zoomChanged = true;
		} else {

			console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
			scope.enableZoom = false;
		}
	}

	function dollyOut(dollyScale) {

		if (scope.object.isPerspectiveCamera) {

			scale *= dollyScale;
		} else if (scope.object.isOrthographicCamera) {

			scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
			scope.object.updateProjectionMatrix();
			zoomChanged = true;
		} else {

			console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
			scope.enableZoom = false;
		}
	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate(event) {

		//console.log( 'handleMouseDownRotate' );

		rotateStart.set(event.clientX, event.clientY);
	}

	function handleMouseDownDolly(event) {

		//console.log( 'handleMouseDownDolly' );

		dollyStart.set(event.clientX, event.clientY);
	}

	function handleMouseDownPan(event) {

		//console.log( 'handleMouseDownPan' );

		panStart.set(event.clientX, event.clientY);
	}

	function handleMouseMoveRotate(event) {

		//console.log( 'handleMouseMoveRotate' );

		rotateEnd.set(event.clientX, event.clientY);
		rotateDelta.subVectors(rotateEnd, rotateStart);

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

		rotateStart.copy(rotateEnd);

		scope.update();
	}

	function handleMouseMoveDolly(event) {

		//console.log( 'handleMouseMoveDolly' );

		dollyEnd.set(event.clientX, event.clientY);

		dollyDelta.subVectors(dollyEnd, dollyStart);

		if (dollyDelta.y > 0) {

			dollyIn(getZoomScale());
		} else if (dollyDelta.y < 0) {

			dollyOut(getZoomScale());
		}

		dollyStart.copy(dollyEnd);

		scope.update();
	}

	function handleMouseMovePan(event) {

		//console.log( 'handleMouseMovePan' );

		panEnd.set(event.clientX, event.clientY);

		panDelta.subVectors(panEnd, panStart);

		pan(panDelta.x, panDelta.y);

		panStart.copy(panEnd);

		scope.update();
	}

	function handleMouseUp(event) {

		// console.log( 'handleMouseUp' );

	}

	function handleMouseWheel(event) {

		// console.log( 'handleMouseWheel' );

		if (event.deltaY < 0) {

			dollyOut(getZoomScale());
		} else if (event.deltaY > 0) {

			dollyIn(getZoomScale());
		}

		scope.update();
	}

	function handleKeyDown(event) {

		//console.log( 'handleKeyDown' );

		switch (event.keyCode) {

			case scope.keys.UP:
				pan(0, scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.BOTTOM:
				pan(0, -scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.LEFT:
				pan(scope.keyPanSpeed, 0);
				scope.update();
				break;

			case scope.keys.RIGHT:
				pan(-scope.keyPanSpeed, 0);
				scope.update();
				break;

		}
	}

	function handleTouchStartRotate(event) {

		//console.log( 'handleTouchStartRotate' );

		rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
	}

	function handleTouchStartDolly(event) {

		//console.log( 'handleTouchStartDolly' );

		var dx = event.touches[0].pageX - event.touches[1].pageX;
		var dy = event.touches[0].pageY - event.touches[1].pageY;

		var distance = Math.sqrt(dx * dx + dy * dy);

		dollyStart.set(0, distance);
	}

	function handleTouchStartPan(event) {

		//console.log( 'handleTouchStartPan' );

		panStart.set(event.touches[0].pageX, event.touches[0].pageY);
	}

	function handleTouchMoveRotate(event) {

		//console.log( 'handleTouchMoveRotate' );

		rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
		rotateDelta.subVectors(rotateEnd, rotateStart);

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

		rotateStart.copy(rotateEnd);

		scope.update();
	}

	function handleTouchMoveDolly(event) {

		//console.log( 'handleTouchMoveDolly' );

		var dx = event.touches[0].pageX - event.touches[1].pageX;
		var dy = event.touches[0].pageY - event.touches[1].pageY;

		var distance = Math.sqrt(dx * dx + dy * dy);

		dollyEnd.set(0, distance);

		dollyDelta.subVectors(dollyEnd, dollyStart);

		if (dollyDelta.y > 0) {

			dollyOut(getZoomScale());
		} else if (dollyDelta.y < 0) {

			dollyIn(getZoomScale());
		}

		dollyStart.copy(dollyEnd);

		scope.update();
	}

	function handleTouchMovePan(event) {

		//console.log( 'handleTouchMovePan' );

		panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

		panDelta.subVectors(panEnd, panStart);

		pan(panDelta.x, panDelta.y);

		panStart.copy(panEnd);

		scope.update();
	}

	function handleTouchEnd(event) {}

	//console.log( 'handleTouchEnd' );

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown(event) {

		if (scope.enabled === false) return;

		event.preventDefault();

		switch (event.button) {

			case scope.mouseButtons.ORBIT:

				if (scope.enableRotate === false) return;

				handleMouseDownRotate(event);

				state = STATE.ROTATE;

				break;

			case scope.mouseButtons.ZOOM:

				if (scope.enableZoom === false) return;

				handleMouseDownDolly(event);

				state = STATE.DOLLY;

				break;

			case scope.mouseButtons.PAN:

				if (scope.enablePan === false) return;

				handleMouseDownPan(event);

				state = STATE.PAN;

				break;

		}

		if (state !== STATE.NONE) {

			document.addEventListener('mousemove', onMouseMove, false);
			document.addEventListener('mouseup', onMouseUp, false);

			scope.dispatchEvent(startEvent);
		}
	}

	function onMouseMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();

		switch (state) {

			case STATE.ROTATE:

				if (scope.enableRotate === false) return;

				handleMouseMoveRotate(event);

				break;

			case STATE.DOLLY:

				if (scope.enableZoom === false) return;

				handleMouseMoveDolly(event);

				break;

			case STATE.PAN:

				if (scope.enablePan === false) return;

				handleMouseMovePan(event);

				break;

		}
	}

	function onMouseUp(event) {

		if (scope.enabled === false) return;

		handleMouseUp(event);

		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseUp, false);

		scope.dispatchEvent(endEvent);

		state = STATE.NONE;
	}

	function onMouseWheel(event) {

		if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

		event.preventDefault();
		event.stopPropagation();

		scope.dispatchEvent(startEvent);

		handleMouseWheel(event);

		scope.dispatchEvent(endEvent);
	}

	function onKeyDown(event) {

		if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

		handleKeyDown(event);
	}

	function onTouchStart(event) {

		if (scope.enabled === false) return;

		switch (event.touches.length) {

			case 1:
				// one-fingered touch: rotate

				if (scope.enableRotate === false) return;

				handleTouchStartRotate(event);

				state = STATE.TOUCH_ROTATE;

				break;

			case 2:
				// two-fingered touch: dolly

				if (scope.enableZoom === false) return;

				handleTouchStartDolly(event);

				state = STATE.TOUCH_DOLLY;

				break;

			case 3:
				// three-fingered touch: pan

				if (scope.enablePan === false) return;

				handleTouchStartPan(event);

				state = STATE.TOUCH_PAN;

				break;

			default:

				state = STATE.NONE;

		}

		if (state !== STATE.NONE) {

			scope.dispatchEvent(startEvent);
		}
	}

	function onTouchMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		switch (event.touches.length) {

			case 1:
				// one-fingered touch: rotate

				if (scope.enableRotate === false) return;
				if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

				handleTouchMoveRotate(event);

				break;

			case 2:
				// two-fingered touch: dolly

				if (scope.enableZoom === false) return;
				if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

				handleTouchMoveDolly(event);

				break;

			case 3:
				// three-fingered touch: pan

				if (scope.enablePan === false) return;
				if (state !== STATE.TOUCH_PAN) return; // is this needed?...

				handleTouchMovePan(event);

				break;

			default:

				state = STATE.NONE;

		}
	}

	function onTouchEnd(event) {

		if (scope.enabled === false) return;

		handleTouchEnd(event);

		scope.dispatchEvent(endEvent);

		state = STATE.NONE;
	}

	function onContextMenu(event) {

		if (scope.enabled === false) return;

		event.preventDefault();
	}

	//

	scope.domElement.addEventListener('contextmenu', onContextMenu, false);

	scope.domElement.addEventListener('mousedown', onMouseDown, false);
	scope.domElement.addEventListener('wheel', onMouseWheel, false);

	scope.domElement.addEventListener('touchstart', onTouchStart, false);
	scope.domElement.addEventListener('touchend', onTouchEnd, false);
	scope.domElement.addEventListener('touchmove', onTouchMove, false);

	window.addEventListener('keydown', onKeyDown, false);

	// force an update at start

	this.update();
};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties(THREE.OrbitControls.prototype, {

	center: {

		get: function get() {

			console.warn('THREE.OrbitControls: .center has been renamed to .target');
			return this.target;
		}

	},

	// backward compatibility

	noZoom: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
			return !this.enableZoom;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
			this.enableZoom = !value;
		}

	},

	noRotate: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
			return !this.enableRotate;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
			this.enableRotate = !value;
		}

	},

	noPan: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
			return !this.enablePan;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
			this.enablePan = !value;
		}

	},

	noKeys: {

		get: function get() {

			console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
			return !this.enableKeys;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
			this.enableKeys = !value;
		}

	},

	staticMoving: {

		get: function get() {

			console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
			return !this.enableDamping;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
			this.enableDamping = !value;
		}

	},

	dynamicDampingFactor: {

		get: function get() {

			console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			return this.dampingFactor;
		},

		set: function set(value) {

			console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			this.dampingFactor = value;
		}

	}

});

exports.default = THREE.OrbitControls;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin 	/ http://mark-lundin.com
 * @author Patrick Fuller / http://patrick-fuller.com
 * @author Max Smolens / https://github.com/msmolens
 */

THREE.OrthographicTrackballControls = function (object, domElement) {

	var _this = this;
	var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

	this.object = object;
	this.domElement = domElement !== undefined ? domElement : document;

	// API

	this.enabled = true;

	this.screen = { left: 0, top: 0, width: 0, height: 0 };

	this.radius = 0;

	this.rotateSpeed = 1.0;
	this.zoomSpeed = 1.2;

	this.noRotate = false;
	this.noZoom = false;
	this.noPan = false;
	this.noRoll = false;

	this.staticMoving = false;
	this.dynamicDampingFactor = 0.2;

	this.keys = [65 /*A*/, 83 /*S*/, 68 /*D*/];

	// internals

	this.target = new THREE.Vector3();

	var EPS = 0.000001;

	var _changed = true;

	var _state = STATE.NONE,
	    _prevState = STATE.NONE,
	    _eye = new THREE.Vector3(),
	    _rotateStart = new THREE.Vector3(),
	    _rotateEnd = new THREE.Vector3(),
	    _zoomStart = new THREE.Vector2(),
	    _zoomEnd = new THREE.Vector2(),
	    _touchZoomDistanceStart = 0,
	    _touchZoomDistanceEnd = 0,
	    _panStart = new THREE.Vector2(),
	    _panEnd = new THREE.Vector2();

	// for reset

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.up0 = this.object.up.clone();

	this.left0 = this.object.left;
	this.right0 = this.object.right;
	this.top0 = this.object.top;
	this.bottom0 = this.object.bottom;

	// events

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	// methods

	this.handleResize = function () {

		if (this.domElement === document) {

			this.screen.left = 0;
			this.screen.top = 0;
			this.screen.width = window.innerWidth;
			this.screen.height = window.innerHeight;
		} else {

			var box = this.domElement.getBoundingClientRect();
			// adjustments come from similar code in the jquery offset() function
			var d = this.domElement.ownerDocument.documentElement;
			this.screen.left = box.left + window.pageXOffset - d.clientLeft;
			this.screen.top = box.top + window.pageYOffset - d.clientTop;
			this.screen.width = box.width;
			this.screen.height = box.height;
		}

		this.radius = 0.5 * Math.min(this.screen.width, this.screen.height);

		this.left0 = this.object.left;
		this.right0 = this.object.right;
		this.top0 = this.object.top;
		this.bottom0 = this.object.bottom;
	};

	this.handleEvent = function (event) {

		if (typeof this[event.type] == 'function') {

			this[event.type](event);
		}
	};

	var getMouseOnScreen = function () {

		var vector = new THREE.Vector2();

		return function getMouseOnScreen(pageX, pageY) {

			vector.set((pageX - _this.screen.left) / _this.screen.width, (pageY - _this.screen.top) / _this.screen.height);

			return vector;
		};
	}();

	var getMouseProjectionOnBall = function () {

		var vector = new THREE.Vector3();
		var objectUp = new THREE.Vector3();
		var mouseOnBall = new THREE.Vector3();

		return function getMouseProjectionOnBall(pageX, pageY) {

			mouseOnBall.set((pageX - _this.screen.width * 0.5 - _this.screen.left) / _this.radius, (_this.screen.height * 0.5 + _this.screen.top - pageY) / _this.radius, 0.0);

			var length = mouseOnBall.length();

			if (_this.noRoll) {

				if (length < Math.SQRT1_2) {

					mouseOnBall.z = Math.sqrt(1.0 - length * length);
				} else {

					mouseOnBall.z = .5 / length;
				}
			} else if (length > 1.0) {

				mouseOnBall.normalize();
			} else {

				mouseOnBall.z = Math.sqrt(1.0 - length * length);
			}

			_eye.copy(_this.object.position).sub(_this.target);

			vector.copy(_this.object.up).setLength(mouseOnBall.y);
			vector.add(objectUp.copy(_this.object.up).cross(_eye).setLength(mouseOnBall.x));
			vector.add(_eye.setLength(mouseOnBall.z));

			return vector;
		};
	}();

	this.rotateCamera = function () {

		var axis = new THREE.Vector3(),
		    quaternion = new THREE.Quaternion();

		return function rotateCamera() {

			var angle = Math.acos(_rotateStart.dot(_rotateEnd) / _rotateStart.length() / _rotateEnd.length());

			if (angle) {

				axis.crossVectors(_rotateStart, _rotateEnd).normalize();

				angle *= _this.rotateSpeed;

				quaternion.setFromAxisAngle(axis, -angle);

				_eye.applyQuaternion(quaternion);
				_this.object.up.applyQuaternion(quaternion);

				_rotateEnd.applyQuaternion(quaternion);

				if (_this.staticMoving) {

					_rotateStart.copy(_rotateEnd);
				} else {

					quaternion.setFromAxisAngle(axis, angle * (_this.dynamicDampingFactor - 1.0));
					_rotateStart.applyQuaternion(quaternion);
				}

				_changed = true;
			}
		};
	}();

	this.zoomCamera = function () {

		if (_state === STATE.TOUCH_ZOOM_PAN) {

			var factor = _touchZoomDistanceEnd / _touchZoomDistanceStart;
			_touchZoomDistanceStart = _touchZoomDistanceEnd;

			_this.object.zoom *= factor;

			_changed = true;
		} else {

			var factor = 1.0 + (_zoomEnd.y - _zoomStart.y) * _this.zoomSpeed;

			if (Math.abs(factor - 1.0) > EPS && factor > 0.0) {

				_this.object.zoom /= factor;

				if (_this.staticMoving) {

					_zoomStart.copy(_zoomEnd);
				} else {

					_zoomStart.y += (_zoomEnd.y - _zoomStart.y) * this.dynamicDampingFactor;
				}

				_changed = true;
			}
		}
	};

	this.panCamera = function () {

		var mouseChange = new THREE.Vector2(),
		    objectUp = new THREE.Vector3(),
		    pan = new THREE.Vector3();

		return function panCamera() {

			mouseChange.copy(_panEnd).sub(_panStart);

			if (mouseChange.lengthSq()) {

				// Scale movement to keep clicked/dragged position under cursor
				var scale_x = (_this.object.right - _this.object.left) / _this.object.zoom;
				var scale_y = (_this.object.top - _this.object.bottom) / _this.object.zoom;
				mouseChange.x *= scale_x;
				mouseChange.y *= scale_y;

				pan.copy(_eye).cross(_this.object.up).setLength(mouseChange.x);
				pan.add(objectUp.copy(_this.object.up).setLength(mouseChange.y));

				_this.object.position.add(pan);
				_this.target.add(pan);

				if (_this.staticMoving) {

					_panStart.copy(_panEnd);
				} else {

					_panStart.add(mouseChange.subVectors(_panEnd, _panStart).multiplyScalar(_this.dynamicDampingFactor));
				}

				_changed = true;
			}
		};
	}();

	this.update = function () {

		_eye.subVectors(_this.object.position, _this.target);

		if (!_this.noRotate) {

			_this.rotateCamera();
		}

		if (!_this.noZoom) {

			_this.zoomCamera();

			if (_changed) {

				_this.object.updateProjectionMatrix();
			}
		}

		if (!_this.noPan) {

			_this.panCamera();
		}

		_this.object.position.addVectors(_this.target, _eye);

		_this.object.lookAt(_this.target);

		if (_changed) {

			_this.dispatchEvent(changeEvent);

			_changed = false;
		}
	};

	this.reset = function () {

		_state = STATE.NONE;
		_prevState = STATE.NONE;

		_this.target.copy(_this.target0);
		_this.object.position.copy(_this.position0);
		_this.object.up.copy(_this.up0);

		_eye.subVectors(_this.object.position, _this.target);

		_this.object.left = _this.left0;
		_this.object.right = _this.right0;
		_this.object.top = _this.top0;
		_this.object.bottom = _this.bottom0;

		_this.object.lookAt(_this.target);

		_this.dispatchEvent(changeEvent);

		_changed = false;
	};

	// listeners

	function keydown(event) {

		if (_this.enabled === false) return;

		window.removeEventListener('keydown', keydown);

		_prevState = _state;

		if (_state !== STATE.NONE) {

			return;
		} else if (event.keyCode === _this.keys[STATE.ROTATE] && !_this.noRotate) {

			_state = STATE.ROTATE;
		} else if (event.keyCode === _this.keys[STATE.ZOOM] && !_this.noZoom) {

			_state = STATE.ZOOM;
		} else if (event.keyCode === _this.keys[STATE.PAN] && !_this.noPan) {

			_state = STATE.PAN;
		}
	}

	function keyup(event) {

		if (_this.enabled === false) return;

		_state = _prevState;

		window.addEventListener('keydown', keydown, false);
	}

	function mousedown(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		if (_state === STATE.NONE) {

			_state = event.button;
		}

		if (_state === STATE.ROTATE && !_this.noRotate) {

			_rotateStart.copy(getMouseProjectionOnBall(event.pageX, event.pageY));
			_rotateEnd.copy(_rotateStart);
		} else if (_state === STATE.ZOOM && !_this.noZoom) {

			_zoomStart.copy(getMouseOnScreen(event.pageX, event.pageY));
			_zoomEnd.copy(_zoomStart);
		} else if (_state === STATE.PAN && !_this.noPan) {

			_panStart.copy(getMouseOnScreen(event.pageX, event.pageY));
			_panEnd.copy(_panStart);
		}

		document.addEventListener('mousemove', mousemove, false);
		document.addEventListener('mouseup', mouseup, false);

		_this.dispatchEvent(startEvent);
	}

	function mousemove(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		if (_state === STATE.ROTATE && !_this.noRotate) {

			_rotateEnd.copy(getMouseProjectionOnBall(event.pageX, event.pageY));
		} else if (_state === STATE.ZOOM && !_this.noZoom) {

			_zoomEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
		} else if (_state === STATE.PAN && !_this.noPan) {

			_panEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
		}
	}

	function mouseup(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		_state = STATE.NONE;

		document.removeEventListener('mousemove', mousemove);
		document.removeEventListener('mouseup', mouseup);
		_this.dispatchEvent(endEvent);
	}

	function mousewheel(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		_zoomStart.y += event.deltaY * 0.01;
		_this.dispatchEvent(startEvent);
		_this.dispatchEvent(endEvent);
	}

	function touchstart(event) {

		if (_this.enabled === false) return;

		switch (event.touches.length) {

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_rotateStart.copy(getMouseProjectionOnBall(event.touches[0].pageX, event.touches[0].pageY));
				_rotateEnd.copy(_rotateStart);
				break;

			case 2:
				_state = STATE.TOUCH_ZOOM_PAN;
				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);

				var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
				var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
				_panStart.copy(getMouseOnScreen(x, y));
				_panEnd.copy(_panStart);
				break;

			default:
				_state = STATE.NONE;

		}
		_this.dispatchEvent(startEvent);
	}

	function touchmove(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		switch (event.touches.length) {

			case 1:
				_rotateEnd.copy(getMouseProjectionOnBall(event.touches[0].pageX, event.touches[0].pageY));
				break;

			case 2:
				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				_touchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);

				var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
				var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
				_panEnd.copy(getMouseOnScreen(x, y));
				break;

			default:
				_state = STATE.NONE;

		}
	}

	function touchend(event) {

		if (_this.enabled === false) return;

		switch (event.touches.length) {

			case 1:
				_rotateEnd.copy(getMouseProjectionOnBall(event.touches[0].pageX, event.touches[0].pageY));
				_rotateStart.copy(_rotateEnd);
				break;

			case 2:
				_touchZoomDistanceStart = _touchZoomDistanceEnd = 0;

				var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
				var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
				_panEnd.copy(getMouseOnScreen(x, y));
				_panStart.copy(_panEnd);
				break;

		}

		_state = STATE.NONE;
		_this.dispatchEvent(endEvent);
	}

	function contextmenu(event) {

		event.preventDefault();
	}

	this.dispose = function () {

		this.domElement.removeEventListener('contextmenu', contextmenu, false);
		this.domElement.removeEventListener('mousedown', mousedown, false);
		this.domElement.removeEventListener('wheel', mousewheel, false);

		this.domElement.removeEventListener('touchstart', touchstart, false);
		this.domElement.removeEventListener('touchend', touchend, false);
		this.domElement.removeEventListener('touchmove', touchmove, false);

		document.removeEventListener('mousemove', mousemove, false);
		document.removeEventListener('mouseup', mouseup, false);

		window.removeEventListener('keydown', keydown, false);
		window.removeEventListener('keyup', keyup, false);
	};

	this.domElement.addEventListener('contextmenu', contextmenu, false);
	this.domElement.addEventListener('mousedown', mousedown, false);
	this.domElement.addEventListener('wheel', mousewheel, false);

	this.domElement.addEventListener('touchstart', touchstart, false);
	this.domElement.addEventListener('touchend', touchend, false);
	this.domElement.addEventListener('touchmove', touchmove, false);

	window.addEventListener('keydown', keydown, false);
	window.addEventListener('keyup', keyup, false);

	this.handleResize();

	// force an update at start
	this.update();
};

THREE.OrthographicTrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.OrthographicTrackballControls.prototype.constructor = THREE.OrthographicTrackballControls;

exports.default = THREE.OrthographicTrackballControls;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.PointerLockControls = function (camera) {

	var scope = this;

	camera.rotation.set(0, 0, 0);

	var pitchObject = new THREE.Object3D();
	pitchObject.add(camera);

	var yawObject = new THREE.Object3D();
	yawObject.position.y = 10;
	yawObject.add(pitchObject);

	var PI_2 = Math.PI / 2;

	var onMouseMove = function onMouseMove(event) {

		if (scope.enabled === false) return;

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		yawObject.rotation.y -= movementX * 0.002;
		pitchObject.rotation.x -= movementY * 0.002;

		pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
	};

	this.dispose = function () {

		document.removeEventListener('mousemove', onMouseMove, false);
	};

	document.addEventListener('mousemove', onMouseMove, false);

	this.enabled = false;

	this.getObject = function () {

		return yawObject;
	};

	this.getDirection = function () {

		// assumes the camera itself is not rotated

		var direction = new THREE.Vector3(0, 0, -1);
		var rotation = new THREE.Euler(0, 0, 0, "YXZ");

		return function (v) {

			rotation.set(pitchObject.rotation.x, yawObject.rotation.y, 0);

			v.copy(direction).applyEuler(rotation);

			return v;
		};
	}();
};

exports.default = THREE.PointerLockControls;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin 	/ http://mark-lundin.com
 * @author Simone Manini / http://daron1337.github.io
 * @author Luca Antiga 	/ http://lantiga.github.io
 */

THREE.TrackballControls = function (object, domElement) {

	var _this = this;
	var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

	this.object = object;
	this.domElement = domElement !== undefined ? domElement : document;

	// API

	this.enabled = true;

	this.screen = { left: 0, top: 0, width: 0, height: 0 };

	this.rotateSpeed = 1.0;
	this.zoomSpeed = 1.2;
	this.panSpeed = 0.3;

	this.noRotate = false;
	this.noZoom = false;
	this.noPan = false;

	this.staticMoving = false;
	this.dynamicDampingFactor = 0.2;

	this.minDistance = 0;
	this.maxDistance = Infinity;

	this.keys = [65 /*A*/, 83 /*S*/, 68 /*D*/];

	// internals

	this.target = new THREE.Vector3();

	var EPS = 0.000001;

	var lastPosition = new THREE.Vector3();

	var _state = STATE.NONE,
	    _prevState = STATE.NONE,
	    _eye = new THREE.Vector3(),
	    _movePrev = new THREE.Vector2(),
	    _moveCurr = new THREE.Vector2(),
	    _lastAxis = new THREE.Vector3(),
	    _lastAngle = 0,
	    _zoomStart = new THREE.Vector2(),
	    _zoomEnd = new THREE.Vector2(),
	    _touchZoomDistanceStart = 0,
	    _touchZoomDistanceEnd = 0,
	    _panStart = new THREE.Vector2(),
	    _panEnd = new THREE.Vector2();

	// for reset

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.up0 = this.object.up.clone();

	// events

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	// methods

	this.handleResize = function () {

		if (this.domElement === document) {

			this.screen.left = 0;
			this.screen.top = 0;
			this.screen.width = window.innerWidth;
			this.screen.height = window.innerHeight;
		} else {

			var box = this.domElement.getBoundingClientRect();
			// adjustments come from similar code in the jquery offset() function
			var d = this.domElement.ownerDocument.documentElement;
			this.screen.left = box.left + window.pageXOffset - d.clientLeft;
			this.screen.top = box.top + window.pageYOffset - d.clientTop;
			this.screen.width = box.width;
			this.screen.height = box.height;
		}
	};

	this.handleEvent = function (event) {

		if (typeof this[event.type] == 'function') {

			this[event.type](event);
		}
	};

	var getMouseOnScreen = function () {

		var vector = new THREE.Vector2();

		return function getMouseOnScreen(pageX, pageY) {

			vector.set((pageX - _this.screen.left) / _this.screen.width, (pageY - _this.screen.top) / _this.screen.height);

			return vector;
		};
	}();

	var getMouseOnCircle = function () {

		var vector = new THREE.Vector2();

		return function getMouseOnCircle(pageX, pageY) {

			vector.set((pageX - _this.screen.width * 0.5 - _this.screen.left) / (_this.screen.width * 0.5), (_this.screen.height + 2 * (_this.screen.top - pageY)) / _this.screen.width // screen.width intentional
			);

			return vector;
		};
	}();

	this.rotateCamera = function () {

		var axis = new THREE.Vector3(),
		    quaternion = new THREE.Quaternion(),
		    eyeDirection = new THREE.Vector3(),
		    objectUpDirection = new THREE.Vector3(),
		    objectSidewaysDirection = new THREE.Vector3(),
		    moveDirection = new THREE.Vector3(),
		    angle;

		return function rotateCamera() {

			moveDirection.set(_moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0);
			angle = moveDirection.length();

			if (angle) {

				_eye.copy(_this.object.position).sub(_this.target);

				eyeDirection.copy(_eye).normalize();
				objectUpDirection.copy(_this.object.up).normalize();
				objectSidewaysDirection.crossVectors(objectUpDirection, eyeDirection).normalize();

				objectUpDirection.setLength(_moveCurr.y - _movePrev.y);
				objectSidewaysDirection.setLength(_moveCurr.x - _movePrev.x);

				moveDirection.copy(objectUpDirection.add(objectSidewaysDirection));

				axis.crossVectors(moveDirection, _eye).normalize();

				angle *= _this.rotateSpeed;
				quaternion.setFromAxisAngle(axis, angle);

				_eye.applyQuaternion(quaternion);
				_this.object.up.applyQuaternion(quaternion);

				_lastAxis.copy(axis);
				_lastAngle = angle;
			} else if (!_this.staticMoving && _lastAngle) {

				_lastAngle *= Math.sqrt(1.0 - _this.dynamicDampingFactor);
				_eye.copy(_this.object.position).sub(_this.target);
				quaternion.setFromAxisAngle(_lastAxis, _lastAngle);
				_eye.applyQuaternion(quaternion);
				_this.object.up.applyQuaternion(quaternion);
			}

			_movePrev.copy(_moveCurr);
		};
	}();

	this.zoomCamera = function () {

		var factor;

		if (_state === STATE.TOUCH_ZOOM_PAN) {

			factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
			_touchZoomDistanceStart = _touchZoomDistanceEnd;
			_eye.multiplyScalar(factor);
		} else {

			factor = 1.0 + (_zoomEnd.y - _zoomStart.y) * _this.zoomSpeed;

			if (factor !== 1.0 && factor > 0.0) {

				_eye.multiplyScalar(factor);
			}

			if (_this.staticMoving) {

				_zoomStart.copy(_zoomEnd);
			} else {

				_zoomStart.y += (_zoomEnd.y - _zoomStart.y) * this.dynamicDampingFactor;
			}
		}
	};

	this.panCamera = function () {

		var mouseChange = new THREE.Vector2(),
		    objectUp = new THREE.Vector3(),
		    pan = new THREE.Vector3();

		return function panCamera() {

			mouseChange.copy(_panEnd).sub(_panStart);

			if (mouseChange.lengthSq()) {

				mouseChange.multiplyScalar(_eye.length() * _this.panSpeed);

				pan.copy(_eye).cross(_this.object.up).setLength(mouseChange.x);
				pan.add(objectUp.copy(_this.object.up).setLength(mouseChange.y));

				_this.object.position.add(pan);
				_this.target.add(pan);

				if (_this.staticMoving) {

					_panStart.copy(_panEnd);
				} else {

					_panStart.add(mouseChange.subVectors(_panEnd, _panStart).multiplyScalar(_this.dynamicDampingFactor));
				}
			}
		};
	}();

	this.checkDistances = function () {

		if (!_this.noZoom || !_this.noPan) {

			if (_eye.lengthSq() > _this.maxDistance * _this.maxDistance) {

				_this.object.position.addVectors(_this.target, _eye.setLength(_this.maxDistance));
				_zoomStart.copy(_zoomEnd);
			}

			if (_eye.lengthSq() < _this.minDistance * _this.minDistance) {

				_this.object.position.addVectors(_this.target, _eye.setLength(_this.minDistance));
				_zoomStart.copy(_zoomEnd);
			}
		}
	};

	this.update = function () {

		_eye.subVectors(_this.object.position, _this.target);

		if (!_this.noRotate) {

			_this.rotateCamera();
		}

		if (!_this.noZoom) {

			_this.zoomCamera();
		}

		if (!_this.noPan) {

			_this.panCamera();
		}

		_this.object.position.addVectors(_this.target, _eye);

		_this.checkDistances();

		_this.object.lookAt(_this.target);

		if (lastPosition.distanceToSquared(_this.object.position) > EPS) {

			_this.dispatchEvent(changeEvent);

			lastPosition.copy(_this.object.position);
		}
	};

	this.reset = function () {

		_state = STATE.NONE;
		_prevState = STATE.NONE;

		_this.target.copy(_this.target0);
		_this.object.position.copy(_this.position0);
		_this.object.up.copy(_this.up0);

		_eye.subVectors(_this.object.position, _this.target);

		_this.object.lookAt(_this.target);

		_this.dispatchEvent(changeEvent);

		lastPosition.copy(_this.object.position);
	};

	// listeners

	function keydown(event) {

		if (_this.enabled === false) return;

		window.removeEventListener('keydown', keydown);

		_prevState = _state;

		if (_state !== STATE.NONE) {

			return;
		} else if (event.keyCode === _this.keys[STATE.ROTATE] && !_this.noRotate) {

			_state = STATE.ROTATE;
		} else if (event.keyCode === _this.keys[STATE.ZOOM] && !_this.noZoom) {

			_state = STATE.ZOOM;
		} else if (event.keyCode === _this.keys[STATE.PAN] && !_this.noPan) {

			_state = STATE.PAN;
		}
	}

	function keyup(event) {

		if (_this.enabled === false) return;

		_state = _prevState;

		window.addEventListener('keydown', keydown, false);
	}

	function mousedown(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		if (_state === STATE.NONE) {

			_state = event.button;
		}

		if (_state === STATE.ROTATE && !_this.noRotate) {

			_moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
			_movePrev.copy(_moveCurr);
		} else if (_state === STATE.ZOOM && !_this.noZoom) {

			_zoomStart.copy(getMouseOnScreen(event.pageX, event.pageY));
			_zoomEnd.copy(_zoomStart);
		} else if (_state === STATE.PAN && !_this.noPan) {

			_panStart.copy(getMouseOnScreen(event.pageX, event.pageY));
			_panEnd.copy(_panStart);
		}

		document.addEventListener('mousemove', mousemove, false);
		document.addEventListener('mouseup', mouseup, false);

		_this.dispatchEvent(startEvent);
	}

	function mousemove(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		if (_state === STATE.ROTATE && !_this.noRotate) {

			_movePrev.copy(_moveCurr);
			_moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
		} else if (_state === STATE.ZOOM && !_this.noZoom) {

			_zoomEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
		} else if (_state === STATE.PAN && !_this.noPan) {

			_panEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
		}
	}

	function mouseup(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		_state = STATE.NONE;

		document.removeEventListener('mousemove', mousemove);
		document.removeEventListener('mouseup', mouseup);
		_this.dispatchEvent(endEvent);
	}

	function mousewheel(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		switch (event.deltaMode) {

			case 2:
				// Zoom in pages
				_zoomStart.y -= event.deltaY * 0.025;
				break;

			case 1:
				// Zoom in lines
				_zoomStart.y -= event.deltaY * 0.01;
				break;

			default:
				// undefined, 0, assume pixels
				_zoomStart.y -= event.deltaY * 0.00025;
				break;

		}

		_this.dispatchEvent(startEvent);
		_this.dispatchEvent(endEvent);
	}

	function touchstart(event) {

		if (_this.enabled === false) return;

		switch (event.touches.length) {

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
				_movePrev.copy(_moveCurr);
				break;

			default:
				// 2 or more
				_state = STATE.TOUCH_ZOOM_PAN;
				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);

				var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
				var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
				_panStart.copy(getMouseOnScreen(x, y));
				_panEnd.copy(_panStart);
				break;

		}

		_this.dispatchEvent(startEvent);
	}

	function touchmove(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		switch (event.touches.length) {

			case 1:
				_movePrev.copy(_moveCurr);
				_moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
				break;

			default:
				// 2 or more
				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				_touchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);

				var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
				var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
				_panEnd.copy(getMouseOnScreen(x, y));
				break;

		}
	}

	function touchend(event) {

		if (_this.enabled === false) return;

		switch (event.touches.length) {

			case 0:
				_state = STATE.NONE;
				break;

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
				_movePrev.copy(_moveCurr);
				break;

		}

		_this.dispatchEvent(endEvent);
	}

	function contextmenu(event) {

		if (_this.enabled === false) return;

		event.preventDefault();
	}

	this.dispose = function () {

		this.domElement.removeEventListener('contextmenu', contextmenu, false);
		this.domElement.removeEventListener('mousedown', mousedown, false);
		this.domElement.removeEventListener('wheel', mousewheel, false);

		this.domElement.removeEventListener('touchstart', touchstart, false);
		this.domElement.removeEventListener('touchend', touchend, false);
		this.domElement.removeEventListener('touchmove', touchmove, false);

		document.removeEventListener('mousemove', mousemove, false);
		document.removeEventListener('mouseup', mouseup, false);

		window.removeEventListener('keydown', keydown, false);
		window.removeEventListener('keyup', keyup, false);
	};

	this.domElement.addEventListener('contextmenu', contextmenu, false);
	this.domElement.addEventListener('mousedown', mousedown, false);
	this.domElement.addEventListener('wheel', mousewheel, false);

	this.domElement.addEventListener('touchstart', touchstart, false);
	this.domElement.addEventListener('touchend', touchend, false);
	this.domElement.addEventListener('touchmove', touchmove, false);

	window.addEventListener('keydown', keydown, false);
	window.addEventListener('keyup', keyup, false);

	this.handleResize();

	// force an update at start
	this.update();
};

THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.TrackballControls.prototype.constructor = THREE.TrackballControls;

exports.default = THREE.TrackballControls;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author arodic / https://github.com/arodic
 */

(function () {

	'use strict';

	var GizmoMaterial = function GizmoMaterial(parameters) {

		THREE.MeshBasicMaterial.call(this);

		this.depthTest = false;
		this.depthWrite = false;
		this.side = THREE.FrontSide;
		this.transparent = true;

		this.setValues(parameters);

		this.oldColor = this.color.clone();
		this.oldOpacity = this.opacity;

		this.highlight = function (highlighted) {

			if (highlighted) {

				this.color.setRGB(1, 1, 0);
				this.opacity = 1;
			} else {

				this.color.copy(this.oldColor);
				this.opacity = this.oldOpacity;
			}
		};
	};

	GizmoMaterial.prototype = Object.create(THREE.MeshBasicMaterial.prototype);
	GizmoMaterial.prototype.constructor = GizmoMaterial;

	var GizmoLineMaterial = function GizmoLineMaterial(parameters) {

		THREE.LineBasicMaterial.call(this);

		this.depthTest = false;
		this.depthWrite = false;
		this.transparent = true;
		this.linewidth = 1;

		this.setValues(parameters);

		this.oldColor = this.color.clone();
		this.oldOpacity = this.opacity;

		this.highlight = function (highlighted) {

			if (highlighted) {

				this.color.setRGB(1, 1, 0);
				this.opacity = 1;
			} else {

				this.color.copy(this.oldColor);
				this.opacity = this.oldOpacity;
			}
		};
	};

	GizmoLineMaterial.prototype = Object.create(THREE.LineBasicMaterial.prototype);
	GizmoLineMaterial.prototype.constructor = GizmoLineMaterial;

	var pickerMaterial = new GizmoMaterial({ visible: false, transparent: false });

	THREE.TransformGizmo = function () {

		this.init = function () {

			THREE.Object3D.call(this);

			this.handles = new THREE.Object3D();
			this.pickers = new THREE.Object3D();
			this.planes = new THREE.Object3D();

			this.add(this.handles);
			this.add(this.pickers);
			this.add(this.planes);

			//// PLANES

			var planeGeometry = new THREE.PlaneBufferGeometry(50, 50, 2, 2);
			var planeMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });

			var planes = {
				"XY": new THREE.Mesh(planeGeometry, planeMaterial),
				"YZ": new THREE.Mesh(planeGeometry, planeMaterial),
				"XZ": new THREE.Mesh(planeGeometry, planeMaterial),
				"XYZE": new THREE.Mesh(planeGeometry, planeMaterial)
			};

			this.activePlane = planes["XYZE"];

			planes["YZ"].rotation.set(0, Math.PI / 2, 0);
			planes["XZ"].rotation.set(-Math.PI / 2, 0, 0);

			for (var i in planes) {

				planes[i].name = i;
				this.planes.add(planes[i]);
				this.planes[i] = planes[i];
			}

			//// HANDLES AND PICKERS

			var setupGizmos = function setupGizmos(gizmoMap, parent) {

				for (var name in gizmoMap) {

					for (i = gizmoMap[name].length; i--;) {

						var object = gizmoMap[name][i][0];
						var position = gizmoMap[name][i][1];
						var rotation = gizmoMap[name][i][2];

						object.name = name;

						if (position) object.position.set(position[0], position[1], position[2]);
						if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);

						parent.add(object);
					}
				}
			};

			setupGizmos(this.handleGizmos, this.handles);
			setupGizmos(this.pickerGizmos, this.pickers);

			// reset Transformations

			this.traverse(function (child) {

				if (child instanceof THREE.Mesh) {

					child.updateMatrix();

					var tempGeometry = child.geometry.clone();
					tempGeometry.applyMatrix(child.matrix);
					child.geometry = tempGeometry;

					child.position.set(0, 0, 0);
					child.rotation.set(0, 0, 0);
					child.scale.set(1, 1, 1);
				}
			});
		};

		this.highlight = function (axis) {

			this.traverse(function (child) {

				if (child.material && child.material.highlight) {

					if (child.name === axis) {

						child.material.highlight(true);
					} else {

						child.material.highlight(false);
					}
				}
			});
		};
	};

	THREE.TransformGizmo.prototype = Object.create(THREE.Object3D.prototype);
	THREE.TransformGizmo.prototype.constructor = THREE.TransformGizmo;

	THREE.TransformGizmo.prototype.update = function (rotation, eye) {

		var vec1 = new THREE.Vector3(0, 0, 0);
		var vec2 = new THREE.Vector3(0, 1, 0);
		var lookAtMatrix = new THREE.Matrix4();

		this.traverse(function (child) {

			if (child.name.search("E") !== -1) {

				child.quaternion.setFromRotationMatrix(lookAtMatrix.lookAt(eye, vec1, vec2));
			} else if (child.name.search("X") !== -1 || child.name.search("Y") !== -1 || child.name.search("Z") !== -1) {

				child.quaternion.setFromEuler(rotation);
			}
		});
	};

	THREE.TransformGizmoTranslate = function () {

		THREE.TransformGizmo.call(this);

		var arrowGeometry = new THREE.Geometry();
		var mesh = new THREE.Mesh(new THREE.CylinderGeometry(0, 0.05, 0.2, 12, 1, false));
		mesh.position.y = 0.5;
		mesh.updateMatrix();

		arrowGeometry.merge(mesh.geometry, mesh.matrix);

		var lineXGeometry = new THREE.BufferGeometry();
		lineXGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));

		var lineYGeometry = new THREE.BufferGeometry();
		lineYGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));

		var lineZGeometry = new THREE.BufferGeometry();
		lineZGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3));

		this.handleGizmos = {

			X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xff0000 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xff0000 }))]],

			Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x00ff00 })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x00ff00 }))]],

			Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x0000ff }))]],

			XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 })), [0, 0, 0], [0, 0, 0]]],

			XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xffff00, opacity: 0.25 })), [0.15, 0.15, 0]]],

			YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 })), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]],

			XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 })), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]]

		};

		this.pickerGizmos = {

			X: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],

			Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0.6, 0]]],

			Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],

			XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), pickerMaterial)]],

			XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), pickerMaterial), [0.2, 0.2, 0]]],

			YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), pickerMaterial), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],

			XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), pickerMaterial), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]

		};

		this.setActivePlane = function (axis, eye) {

			var tempMatrix = new THREE.Matrix4();
			eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

			if (axis === "X") {

				this.activePlane = this.planes["XY"];

				if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
			}

			if (axis === "Y") {

				this.activePlane = this.planes["XY"];

				if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
			}

			if (axis === "Z") {

				this.activePlane = this.planes["XZ"];

				if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
			}

			if (axis === "XYZ") this.activePlane = this.planes["XYZE"];

			if (axis === "XY") this.activePlane = this.planes["XY"];

			if (axis === "YZ") this.activePlane = this.planes["YZ"];

			if (axis === "XZ") this.activePlane = this.planes["XZ"];
		};

		this.init();
	};

	THREE.TransformGizmoTranslate.prototype = Object.create(THREE.TransformGizmo.prototype);
	THREE.TransformGizmoTranslate.prototype.constructor = THREE.TransformGizmoTranslate;

	THREE.TransformGizmoRotate = function () {

		THREE.TransformGizmo.call(this);

		var CircleGeometry = function CircleGeometry(radius, facing, arc) {

			var geometry = new THREE.BufferGeometry();
			var vertices = [];
			arc = arc ? arc : 1;

			for (var i = 0; i <= 64 * arc; ++i) {

				if (facing === 'x') vertices.push(0, Math.cos(i / 32 * Math.PI) * radius, Math.sin(i / 32 * Math.PI) * radius);
				if (facing === 'y') vertices.push(Math.cos(i / 32 * Math.PI) * radius, 0, Math.sin(i / 32 * Math.PI) * radius);
				if (facing === 'z') vertices.push(Math.sin(i / 32 * Math.PI) * radius, Math.cos(i / 32 * Math.PI) * radius, 0);
			}

			geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
			return geometry;
		};

		this.handleGizmos = {

			X: [[new THREE.Line(new CircleGeometry(1, 'x', 0.5), new GizmoLineMaterial({ color: 0xff0000 }))]],

			Y: [[new THREE.Line(new CircleGeometry(1, 'y', 0.5), new GizmoLineMaterial({ color: 0x00ff00 }))]],

			Z: [[new THREE.Line(new CircleGeometry(1, 'z', 0.5), new GizmoLineMaterial({ color: 0x0000ff }))]],

			E: [[new THREE.Line(new CircleGeometry(1.25, 'z', 1), new GizmoLineMaterial({ color: 0xcccc00 }))]],

			XYZE: [[new THREE.Line(new CircleGeometry(1, 'z', 1), new GizmoLineMaterial({ color: 0x787878 }))]]

		};

		this.pickerGizmos = {

			X: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), pickerMaterial), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],

			Y: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), pickerMaterial), [0, 0, 0], [Math.PI / 2, 0, 0]]],

			Z: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), pickerMaterial), [0, 0, 0], [0, 0, -Math.PI / 2]]],

			E: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1.25, 0.12, 2, 24), pickerMaterial)]],

			XYZE: [[new THREE.Mesh()] // TODO
			]

		};

		this.setActivePlane = function (axis) {

			if (axis === "E") this.activePlane = this.planes["XYZE"];

			if (axis === "X") this.activePlane = this.planes["YZ"];

			if (axis === "Y") this.activePlane = this.planes["XZ"];

			if (axis === "Z") this.activePlane = this.planes["XY"];
		};

		this.update = function (rotation, eye2) {

			THREE.TransformGizmo.prototype.update.apply(this, arguments);

			var tempMatrix = new THREE.Matrix4();
			var worldRotation = new THREE.Euler(0, 0, 1);
			var tempQuaternion = new THREE.Quaternion();
			var unitX = new THREE.Vector3(1, 0, 0);
			var unitY = new THREE.Vector3(0, 1, 0);
			var unitZ = new THREE.Vector3(0, 0, 1);
			var quaternionX = new THREE.Quaternion();
			var quaternionY = new THREE.Quaternion();
			var quaternionZ = new THREE.Quaternion();
			var eye = eye2.clone();

			worldRotation.copy(this.planes["XY"].rotation);
			tempQuaternion.setFromEuler(worldRotation);

			tempMatrix.makeRotationFromQuaternion(tempQuaternion).getInverse(tempMatrix);
			eye.applyMatrix4(tempMatrix);

			this.traverse(function (child) {

				tempQuaternion.setFromEuler(worldRotation);

				if (child.name === "X") {

					quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
					child.quaternion.copy(tempQuaternion);
				}

				if (child.name === "Y") {

					quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
					child.quaternion.copy(tempQuaternion);
				}

				if (child.name === "Z") {

					quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
					child.quaternion.copy(tempQuaternion);
				}
			});
		};

		this.init();
	};

	THREE.TransformGizmoRotate.prototype = Object.create(THREE.TransformGizmo.prototype);
	THREE.TransformGizmoRotate.prototype.constructor = THREE.TransformGizmoRotate;

	THREE.TransformGizmoScale = function () {

		THREE.TransformGizmo.call(this);

		var arrowGeometry = new THREE.Geometry();
		var mesh = new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.125, 0.125));
		mesh.position.y = 0.5;
		mesh.updateMatrix();

		arrowGeometry.merge(mesh.geometry, mesh.matrix);

		var lineXGeometry = new THREE.BufferGeometry();
		lineXGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));

		var lineYGeometry = new THREE.BufferGeometry();
		lineYGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));

		var lineZGeometry = new THREE.BufferGeometry();
		lineZGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3));

		this.handleGizmos = {

			X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xff0000 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xff0000 }))]],

			Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x00ff00 })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x00ff00 }))]],

			Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x0000ff }))]],

			XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(0.125, 0.125, 0.125), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]]

		};

		this.pickerGizmos = {

			X: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],

			Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0.6, 0]]],

			Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],

			XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(0.4, 0.4, 0.4), pickerMaterial)]]

		};

		this.setActivePlane = function (axis, eye) {

			var tempMatrix = new THREE.Matrix4();
			eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

			if (axis === "X") {

				this.activePlane = this.planes["XY"];
				if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
			}

			if (axis === "Y") {

				this.activePlane = this.planes["XY"];
				if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
			}

			if (axis === "Z") {

				this.activePlane = this.planes["XZ"];
				if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
			}

			if (axis === "XYZ") this.activePlane = this.planes["XYZE"];
		};

		this.init();
	};

	THREE.TransformGizmoScale.prototype = Object.create(THREE.TransformGizmo.prototype);
	THREE.TransformGizmoScale.prototype.constructor = THREE.TransformGizmoScale;

	THREE.TransformControls = function (camera, domElement) {

		// TODO: Make non-uniform scale and rotate play nice in hierarchies
		// TODO: ADD RXYZ contol

		THREE.Object3D.call(this);

		domElement = domElement !== undefined ? domElement : document;

		this.object = undefined;
		this.visible = false;
		this.translationSnap = null;
		this.rotationSnap = null;
		this.space = "world";
		this.size = 1;
		this.axis = null;

		var scope = this;

		var _mode = "translate";
		var _dragging = false;
		var _gizmo = {

			"translate": new THREE.TransformGizmoTranslate(),
			"rotate": new THREE.TransformGizmoRotate(),
			"scale": new THREE.TransformGizmoScale()
		};

		for (var type in _gizmo) {

			var gizmoObj = _gizmo[type];

			gizmoObj.visible = type === _mode;
			this.add(gizmoObj);
		}

		var changeEvent = { type: "change" };
		var mouseDownEvent = { type: "mouseDown" };
		var mouseUpEvent = { type: "mouseUp", mode: _mode };
		var objectChangeEvent = { type: "objectChange" };

		var ray = new THREE.Raycaster();
		var pointerVector = new THREE.Vector2();

		var point = new THREE.Vector3();
		var offset = new THREE.Vector3();

		var rotation = new THREE.Vector3();
		var offsetRotation = new THREE.Vector3();
		var scale = 1;

		var lookAtMatrix = new THREE.Matrix4();
		var eye = new THREE.Vector3();

		var tempMatrix = new THREE.Matrix4();
		var tempVector = new THREE.Vector3();
		var tempQuaternion = new THREE.Quaternion();
		var unitX = new THREE.Vector3(1, 0, 0);
		var unitY = new THREE.Vector3(0, 1, 0);
		var unitZ = new THREE.Vector3(0, 0, 1);

		var quaternionXYZ = new THREE.Quaternion();
		var quaternionX = new THREE.Quaternion();
		var quaternionY = new THREE.Quaternion();
		var quaternionZ = new THREE.Quaternion();
		var quaternionE = new THREE.Quaternion();

		var oldPosition = new THREE.Vector3();
		var oldScale = new THREE.Vector3();
		var oldRotationMatrix = new THREE.Matrix4();

		var parentRotationMatrix = new THREE.Matrix4();
		var parentScale = new THREE.Vector3();

		var worldPosition = new THREE.Vector3();
		var worldRotation = new THREE.Euler();
		var worldRotationMatrix = new THREE.Matrix4();
		var camPosition = new THREE.Vector3();
		var camRotation = new THREE.Euler();

		domElement.addEventListener("mousedown", onPointerDown, false);
		domElement.addEventListener("touchstart", onPointerDown, false);

		domElement.addEventListener("mousemove", onPointerHover, false);
		domElement.addEventListener("touchmove", onPointerHover, false);

		domElement.addEventListener("mousemove", onPointerMove, false);
		domElement.addEventListener("touchmove", onPointerMove, false);

		domElement.addEventListener("mouseup", onPointerUp, false);
		domElement.addEventListener("mouseout", onPointerUp, false);
		domElement.addEventListener("touchend", onPointerUp, false);
		domElement.addEventListener("touchcancel", onPointerUp, false);
		domElement.addEventListener("touchleave", onPointerUp, false);

		this.dispose = function () {

			domElement.removeEventListener("mousedown", onPointerDown);
			domElement.removeEventListener("touchstart", onPointerDown);

			domElement.removeEventListener("mousemove", onPointerHover);
			domElement.removeEventListener("touchmove", onPointerHover);

			domElement.removeEventListener("mousemove", onPointerMove);
			domElement.removeEventListener("touchmove", onPointerMove);

			domElement.removeEventListener("mouseup", onPointerUp);
			domElement.removeEventListener("mouseout", onPointerUp);
			domElement.removeEventListener("touchend", onPointerUp);
			domElement.removeEventListener("touchcancel", onPointerUp);
			domElement.removeEventListener("touchleave", onPointerUp);
		};

		this.attach = function (object) {

			this.object = object;
			this.visible = true;
			this.update();
		};

		this.detach = function () {

			this.object = undefined;
			this.visible = false;
			this.axis = null;
		};

		this.getMode = function () {

			return _mode;
		};

		this.setMode = function (mode) {

			_mode = mode ? mode : _mode;

			if (_mode === "scale") scope.space = "local";

			for (var type in _gizmo) {
				_gizmo[type].visible = type === _mode;
			}this.update();
			scope.dispatchEvent(changeEvent);
		};

		this.setTranslationSnap = function (translationSnap) {

			scope.translationSnap = translationSnap;
		};

		this.setRotationSnap = function (rotationSnap) {

			scope.rotationSnap = rotationSnap;
		};

		this.setSize = function (size) {

			scope.size = size;
			this.update();
			scope.dispatchEvent(changeEvent);
		};

		this.setSpace = function (space) {

			scope.space = space;
			this.update();
			scope.dispatchEvent(changeEvent);
		};

		this.update = function () {

			if (scope.object === undefined) return;

			scope.object.updateMatrixWorld();
			worldPosition.setFromMatrixPosition(scope.object.matrixWorld);
			worldRotation.setFromRotationMatrix(tempMatrix.extractRotation(scope.object.matrixWorld));

			camera.updateMatrixWorld();
			camPosition.setFromMatrixPosition(camera.matrixWorld);
			camRotation.setFromRotationMatrix(tempMatrix.extractRotation(camera.matrixWorld));

			scale = worldPosition.distanceTo(camPosition) / 6 * scope.size;
			this.position.copy(worldPosition);
			this.scale.set(scale, scale, scale);

			if (camera instanceof THREE.PerspectiveCamera) {

				eye.copy(camPosition).sub(worldPosition).normalize();
			} else if (camera instanceof THREE.OrthographicCamera) {

				eye.copy(camPosition).normalize();
			}

			if (scope.space === "local") {

				_gizmo[_mode].update(worldRotation, eye);
			} else if (scope.space === "world") {

				_gizmo[_mode].update(new THREE.Euler(), eye);
			}

			_gizmo[_mode].highlight(scope.axis);
		};

		function onPointerHover(event) {

			if (scope.object === undefined || _dragging === true || event.button !== undefined && event.button !== 0) return;

			var pointer = event.changedTouches ? event.changedTouches[0] : event;

			var intersect = intersectObjects(pointer, _gizmo[_mode].pickers.children);

			var axis = null;

			if (intersect) {

				axis = intersect.object.name;

				event.preventDefault();
			}

			if (scope.axis !== axis) {

				scope.axis = axis;
				scope.update();
				scope.dispatchEvent(changeEvent);
			}
		}

		function onPointerDown(event) {

			if (scope.object === undefined || _dragging === true || event.button !== undefined && event.button !== 0) return;

			var pointer = event.changedTouches ? event.changedTouches[0] : event;

			if (pointer.button === 0 || pointer.button === undefined) {

				var intersect = intersectObjects(pointer, _gizmo[_mode].pickers.children);

				if (intersect) {

					event.preventDefault();
					event.stopPropagation();

					scope.dispatchEvent(mouseDownEvent);

					scope.axis = intersect.object.name;

					scope.update();

					eye.copy(camPosition).sub(worldPosition).normalize();

					_gizmo[_mode].setActivePlane(scope.axis, eye);

					var planeIntersect = intersectObjects(pointer, [_gizmo[_mode].activePlane]);

					if (planeIntersect) {

						oldPosition.copy(scope.object.position);
						oldScale.copy(scope.object.scale);

						oldRotationMatrix.extractRotation(scope.object.matrix);
						worldRotationMatrix.extractRotation(scope.object.matrixWorld);

						parentRotationMatrix.extractRotation(scope.object.parent.matrixWorld);
						parentScale.setFromMatrixScale(tempMatrix.getInverse(scope.object.parent.matrixWorld));

						offset.copy(planeIntersect.point);
					}
				}
			}

			_dragging = true;
		}

		function onPointerMove(event) {

			if (scope.object === undefined || scope.axis === null || _dragging === false || event.button !== undefined && event.button !== 0) return;

			var pointer = event.changedTouches ? event.changedTouches[0] : event;

			var planeIntersect = intersectObjects(pointer, [_gizmo[_mode].activePlane]);

			if (planeIntersect === false) return;

			event.preventDefault();
			event.stopPropagation();

			point.copy(planeIntersect.point);

			if (_mode === "translate") {

				point.sub(offset);
				point.multiply(parentScale);

				if (scope.space === "local") {

					point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

					if (scope.axis.search("X") === -1) point.x = 0;
					if (scope.axis.search("Y") === -1) point.y = 0;
					if (scope.axis.search("Z") === -1) point.z = 0;

					point.applyMatrix4(oldRotationMatrix);

					scope.object.position.copy(oldPosition);
					scope.object.position.add(point);
				}

				if (scope.space === "world" || scope.axis.search("XYZ") !== -1) {

					if (scope.axis.search("X") === -1) point.x = 0;
					if (scope.axis.search("Y") === -1) point.y = 0;
					if (scope.axis.search("Z") === -1) point.z = 0;

					point.applyMatrix4(tempMatrix.getInverse(parentRotationMatrix));

					scope.object.position.copy(oldPosition);
					scope.object.position.add(point);
				}

				if (scope.translationSnap !== null) {

					if (scope.space === "local") {

						scope.object.position.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));
					}

					if (scope.axis.search("X") !== -1) scope.object.position.x = Math.round(scope.object.position.x / scope.translationSnap) * scope.translationSnap;
					if (scope.axis.search("Y") !== -1) scope.object.position.y = Math.round(scope.object.position.y / scope.translationSnap) * scope.translationSnap;
					if (scope.axis.search("Z") !== -1) scope.object.position.z = Math.round(scope.object.position.z / scope.translationSnap) * scope.translationSnap;

					if (scope.space === "local") {

						scope.object.position.applyMatrix4(worldRotationMatrix);
					}
				}
			} else if (_mode === "scale") {

				point.sub(offset);
				point.multiply(parentScale);

				if (scope.space === "local") {

					if (scope.axis === "XYZ") {

						scale = 1 + point.y / Math.max(oldScale.x, oldScale.y, oldScale.z);

						scope.object.scale.x = oldScale.x * scale;
						scope.object.scale.y = oldScale.y * scale;
						scope.object.scale.z = oldScale.z * scale;
					} else {

						point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

						if (scope.axis === "X") scope.object.scale.x = oldScale.x * (1 + point.x / oldScale.x);
						if (scope.axis === "Y") scope.object.scale.y = oldScale.y * (1 + point.y / oldScale.y);
						if (scope.axis === "Z") scope.object.scale.z = oldScale.z * (1 + point.z / oldScale.z);
					}
				}
			} else if (_mode === "rotate") {

				point.sub(worldPosition);
				point.multiply(parentScale);
				tempVector.copy(offset).sub(worldPosition);
				tempVector.multiply(parentScale);

				if (scope.axis === "E") {

					point.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));
					tempVector.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));

					rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
					offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

					tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));

					quaternionE.setFromAxisAngle(eye, rotation.z - offsetRotation.z);
					quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionE);
					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

					scope.object.quaternion.copy(tempQuaternion);
				} else if (scope.axis === "XYZE") {

					quaternionE.setFromEuler(point.clone().cross(tempVector).normalize()); // rotation axis

					tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));
					quaternionX.setFromAxisAngle(quaternionE, -point.clone().angleTo(tempVector));
					quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

					scope.object.quaternion.copy(tempQuaternion);
				} else if (scope.space === "local") {

					point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

					tempVector.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

					rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
					offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

					quaternionXYZ.setFromRotationMatrix(oldRotationMatrix);

					if (scope.rotationSnap !== null) {

						quaternionX.setFromAxisAngle(unitX, Math.round((rotation.x - offsetRotation.x) / scope.rotationSnap) * scope.rotationSnap);
						quaternionY.setFromAxisAngle(unitY, Math.round((rotation.y - offsetRotation.y) / scope.rotationSnap) * scope.rotationSnap);
						quaternionZ.setFromAxisAngle(unitZ, Math.round((rotation.z - offsetRotation.z) / scope.rotationSnap) * scope.rotationSnap);
					} else {

						quaternionX.setFromAxisAngle(unitX, rotation.x - offsetRotation.x);
						quaternionY.setFromAxisAngle(unitY, rotation.y - offsetRotation.y);
						quaternionZ.setFromAxisAngle(unitZ, rotation.z - offsetRotation.z);
					}

					if (scope.axis === "X") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionX);
					if (scope.axis === "Y") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionY);
					if (scope.axis === "Z") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionZ);

					scope.object.quaternion.copy(quaternionXYZ);
				} else if (scope.space === "world") {

					rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
					offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

					tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));

					if (scope.rotationSnap !== null) {

						quaternionX.setFromAxisAngle(unitX, Math.round((rotation.x - offsetRotation.x) / scope.rotationSnap) * scope.rotationSnap);
						quaternionY.setFromAxisAngle(unitY, Math.round((rotation.y - offsetRotation.y) / scope.rotationSnap) * scope.rotationSnap);
						quaternionZ.setFromAxisAngle(unitZ, Math.round((rotation.z - offsetRotation.z) / scope.rotationSnap) * scope.rotationSnap);
					} else {

						quaternionX.setFromAxisAngle(unitX, rotation.x - offsetRotation.x);
						quaternionY.setFromAxisAngle(unitY, rotation.y - offsetRotation.y);
						quaternionZ.setFromAxisAngle(unitZ, rotation.z - offsetRotation.z);
					}

					quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

					if (scope.axis === "X") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
					if (scope.axis === "Y") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
					if (scope.axis === "Z") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);

					tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

					scope.object.quaternion.copy(tempQuaternion);
				}
			}

			scope.update();
			scope.dispatchEvent(changeEvent);
			scope.dispatchEvent(objectChangeEvent);
		}

		function onPointerUp(event) {

			event.preventDefault(); // Prevent MouseEvent on mobile

			if (event.button !== undefined && event.button !== 0) return;

			if (_dragging && scope.axis !== null) {

				mouseUpEvent.mode = _mode;
				scope.dispatchEvent(mouseUpEvent);
			}

			_dragging = false;

			if ('TouchEvent' in window && event instanceof TouchEvent) {

				// Force "rollover"

				scope.axis = null;
				scope.update();
				scope.dispatchEvent(changeEvent);
			} else {

				onPointerHover(event);
			}
		}

		function intersectObjects(pointer, objects) {

			var rect = domElement.getBoundingClientRect();
			var x = (pointer.clientX - rect.left) / rect.width;
			var y = (pointer.clientY - rect.top) / rect.height;

			pointerVector.set(x * 2 - 1, -(y * 2) + 1);
			ray.setFromCamera(pointerVector, camera);

			var intersections = ray.intersectObjects(objects, true);
			return intersections[0] ? intersections[0] : false;
		}
	};

	THREE.TransformControls.prototype = Object.create(THREE.Object3D.prototype);
	THREE.TransformControls.prototype.constructor = THREE.TransformControls;
})();

exports.default = THREE.TransformControls;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 */

THREE.VRControls = function (object, onError) {

	var scope = this;

	var vrDisplay, vrDisplays;

	var standingMatrix = new THREE.Matrix4();

	var frameData = null;

	if ('VRFrameData' in window) {

		frameData = new VRFrameData();
	}

	function gotVRDisplays(displays) {

		vrDisplays = displays;

		if (displays.length > 0) {

			vrDisplay = displays[0];
		} else {

			if (onError) onError('VR input not available.');
		}
	}

	if (navigator.getVRDisplays) {

		navigator.getVRDisplays().then(gotVRDisplays).catch(function () {

			console.warn('THREE.VRControls: Unable to get VR Displays');
		});
	}

	// the Rift SDK returns the position in meters
	// this scale factor allows the user to define how meters
	// are converted to scene units.

	this.scale = 1;

	// If true will use "standing space" coordinate system where y=0 is the
	// floor and x=0, z=0 is the center of the room.
	this.standing = false;

	// Distance from the users eyes to the floor in meters. Used when
	// standing=true but the VRDisplay doesn't provide stageParameters.
	this.userHeight = 1.6;

	this.getVRDisplay = function () {

		return vrDisplay;
	};

	this.setVRDisplay = function (value) {

		vrDisplay = value;
	};

	this.getVRDisplays = function () {

		console.warn('THREE.VRControls: getVRDisplays() is being deprecated.');
		return vrDisplays;
	};

	this.getStandingMatrix = function () {

		return standingMatrix;
	};

	this.update = function () {

		if (vrDisplay) {

			var pose;

			if (vrDisplay.getFrameData) {

				vrDisplay.getFrameData(frameData);
				pose = frameData.pose;
			} else if (vrDisplay.getPose) {

				pose = vrDisplay.getPose();
			}

			if (pose.orientation !== null) {

				object.quaternion.fromArray(pose.orientation);
			}

			if (pose.position !== null) {

				object.position.fromArray(pose.position);
			} else {

				object.position.set(0, 0, 0);
			}

			if (this.standing) {

				if (vrDisplay.stageParameters) {

					object.updateMatrix();

					standingMatrix.fromArray(vrDisplay.stageParameters.sittingToStandingTransform);
					object.applyMatrix(standingMatrix);
				} else {

					object.position.setY(object.position.y + this.userHeight);
				}
			}

			object.position.multiplyScalar(scope.scale);
		}
	};

	this.dispose = function () {

		vrDisplay = null;
	};
};

exports.default = THREE.VRControls;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XLoader = exports.VTKLoader = exports.VRMLLoader = exports.UTF8Loader = exports.TTFLoader = exports.TGALoader = exports.TDSLoader = exports.SVGLoader = exports.STLLoader = exports.RGBELoader = exports.PVRLoader = exports.PRWMLoader = exports.PLYLoader = exports.PlayCanvasLoader = exports.PDBLoader = exports.PCDLoader = exports.OBJLoader2 = exports.OBJLoader = exports.NRRDLoader = exports.NodeMaterialLoader = exports.MTLLoader = exports.MMDLoader = exports.MD2Loader = exports.LoaderSupport = exports.KTXLoader = exports.KMZLoader = exports.HDRCubeTextureLoader = exports.GLTFLoader = exports.GCodeLoader = exports.FBXLoader = exports.EXRLoader = exports.DDSLoader = exports.ColladaLoader = exports.BVHLoader = exports.BinaryLoader = exports.BabylonLoader = exports.AWDLoader = exports.AssimpLoader = exports.AssimpJSONLoader = exports.AMFLoader = exports.ThreeMFLoader = undefined;

var _MFLoader = __webpack_require__(15);

var _MFLoader2 = _interopRequireDefault(_MFLoader);

var _AMFLoader = __webpack_require__(16);

var _AMFLoader2 = _interopRequireDefault(_AMFLoader);

var _AssimpJSONLoader = __webpack_require__(17);

var _AssimpJSONLoader2 = _interopRequireDefault(_AssimpJSONLoader);

var _AssimpLoader = __webpack_require__(18);

var _AssimpLoader2 = _interopRequireDefault(_AssimpLoader);

var _AWDLoader = __webpack_require__(19);

var _AWDLoader2 = _interopRequireDefault(_AWDLoader);

var _BabylonLoader = __webpack_require__(20);

var _BabylonLoader2 = _interopRequireDefault(_BabylonLoader);

var _BinaryLoader = __webpack_require__(21);

var _BinaryLoader2 = _interopRequireDefault(_BinaryLoader);

var _BVHLoader = __webpack_require__(22);

var _BVHLoader2 = _interopRequireDefault(_BVHLoader);

var _ColladaLoader = __webpack_require__(23);

var _ColladaLoader2 = _interopRequireDefault(_ColladaLoader);

var _DDSLoader = __webpack_require__(24);

var _DDSLoader2 = _interopRequireDefault(_DDSLoader);

var _EXRLoader = __webpack_require__(25);

var _EXRLoader2 = _interopRequireDefault(_EXRLoader);

var _FBXLoader = __webpack_require__(26);

var _FBXLoader2 = _interopRequireDefault(_FBXLoader);

var _GCodeLoader = __webpack_require__(27);

var _GCodeLoader2 = _interopRequireDefault(_GCodeLoader);

var _GLTFLoader = __webpack_require__(28);

var _GLTFLoader2 = _interopRequireDefault(_GLTFLoader);

var _HDRCubeTextureLoader = __webpack_require__(29);

var _HDRCubeTextureLoader2 = _interopRequireDefault(_HDRCubeTextureLoader);

var _KMZLoader = __webpack_require__(30);

var _KMZLoader2 = _interopRequireDefault(_KMZLoader);

var _KTXLoader = __webpack_require__(31);

var _KTXLoader2 = _interopRequireDefault(_KTXLoader);

var _LoaderSupport = __webpack_require__(32);

var _LoaderSupport2 = _interopRequireDefault(_LoaderSupport);

var _MD2Loader = __webpack_require__(33);

var _MD2Loader2 = _interopRequireDefault(_MD2Loader);

var _MMDLoader = __webpack_require__(34);

var _MMDLoader2 = _interopRequireDefault(_MMDLoader);

var _MTLLoader = __webpack_require__(35);

var _MTLLoader2 = _interopRequireDefault(_MTLLoader);

var _NodeMaterialLoader = __webpack_require__(36);

var _NodeMaterialLoader2 = _interopRequireDefault(_NodeMaterialLoader);

var _NRRDLoader = __webpack_require__(37);

var _NRRDLoader2 = _interopRequireDefault(_NRRDLoader);

var _OBJLoader = __webpack_require__(38);

var _OBJLoader2 = _interopRequireDefault(_OBJLoader);

var _OBJLoader3 = __webpack_require__(39);

var _OBJLoader4 = _interopRequireDefault(_OBJLoader3);

var _PCDLoader = __webpack_require__(40);

var _PCDLoader2 = _interopRequireDefault(_PCDLoader);

var _PDBLoader = __webpack_require__(41);

var _PDBLoader2 = _interopRequireDefault(_PDBLoader);

var _PlayCanvasLoader = __webpack_require__(42);

var _PlayCanvasLoader2 = _interopRequireDefault(_PlayCanvasLoader);

var _PLYLoader = __webpack_require__(43);

var _PLYLoader2 = _interopRequireDefault(_PLYLoader);

var _PRWMLoader = __webpack_require__(44);

var _PRWMLoader2 = _interopRequireDefault(_PRWMLoader);

var _PVRLoader = __webpack_require__(45);

var _PVRLoader2 = _interopRequireDefault(_PVRLoader);

var _RGBELoader = __webpack_require__(46);

var _RGBELoader2 = _interopRequireDefault(_RGBELoader);

var _STLLoader = __webpack_require__(47);

var _STLLoader2 = _interopRequireDefault(_STLLoader);

var _SVGLoader = __webpack_require__(48);

var _SVGLoader2 = _interopRequireDefault(_SVGLoader);

var _TDSLoader = __webpack_require__(49);

var _TDSLoader2 = _interopRequireDefault(_TDSLoader);

var _TGALoader = __webpack_require__(50);

var _TGALoader2 = _interopRequireDefault(_TGALoader);

var _TTFLoader = __webpack_require__(51);

var _TTFLoader2 = _interopRequireDefault(_TTFLoader);

var _UTF8Loader = __webpack_require__(52);

var _UTF8Loader2 = _interopRequireDefault(_UTF8Loader);

var _VRMLLoader = __webpack_require__(53);

var _VRMLLoader2 = _interopRequireDefault(_VRMLLoader);

var _VTKLoader = __webpack_require__(54);

var _VTKLoader2 = _interopRequireDefault(_VTKLoader);

var _XLoader = __webpack_require__(55);

var _XLoader2 = _interopRequireDefault(_XLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ThreeMFLoader = _MFLoader2.default;
exports.AMFLoader = _AMFLoader2.default;
exports.AssimpJSONLoader = _AssimpJSONLoader2.default;
exports.AssimpLoader = _AssimpLoader2.default;
exports.AWDLoader = _AWDLoader2.default;
exports.BabylonLoader = _BabylonLoader2.default;
exports.BinaryLoader = _BinaryLoader2.default;
exports.BVHLoader = _BVHLoader2.default;
exports.ColladaLoader = _ColladaLoader2.default;
exports.DDSLoader = _DDSLoader2.default;
exports.EXRLoader = _EXRLoader2.default;
exports.FBXLoader = _FBXLoader2.default;
exports.GCodeLoader = _GCodeLoader2.default;
exports.GLTFLoader = _GLTFLoader2.default;
exports.HDRCubeTextureLoader = _HDRCubeTextureLoader2.default;
exports.KMZLoader = _KMZLoader2.default;
exports.KTXLoader = _KTXLoader2.default;
exports.LoaderSupport = _LoaderSupport2.default;
exports.MD2Loader = _MD2Loader2.default;
exports.MMDLoader = _MMDLoader2.default;
exports.MTLLoader = _MTLLoader2.default;
exports.NodeMaterialLoader = _NodeMaterialLoader2.default;
exports.NRRDLoader = _NRRDLoader2.default;
exports.OBJLoader = _OBJLoader2.default;
exports.OBJLoader2 = _OBJLoader4.default;
exports.PCDLoader = _PCDLoader2.default;
exports.PDBLoader = _PDBLoader2.default;
exports.PlayCanvasLoader = _PlayCanvasLoader2.default;
exports.PLYLoader = _PLYLoader2.default;
exports.PRWMLoader = _PRWMLoader2.default;
exports.PVRLoader = _PVRLoader2.default;
exports.RGBELoader = _RGBELoader2.default;
exports.STLLoader = _STLLoader2.default;
exports.SVGLoader = _SVGLoader2.default;
exports.TDSLoader = _TDSLoader2.default;
exports.TGALoader = _TGALoader2.default;
exports.TTFLoader = _TTFLoader2.default;
exports.UTF8Loader = _UTF8Loader2.default;
exports.VRMLLoader = _VRMLLoader2.default;
exports.VTKLoader = _VTKLoader2.default;
exports.XLoader = _XLoader2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author technohippy / https://github.com/technohippy
 */

THREE.ThreeMFLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	this.availableExtensions = [];
};

THREE.ThreeMFLoader.prototype = {

	constructor: THREE.ThreeMFLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;
		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (buffer) {

			onLoad(scope.parse(buffer));
		}, onProgress, onError);
	},

	parse: function parse(data) {

		var scope = this;

		function loadDocument(data) {

			var zip = null;
			var file = null;

			var relsName;
			var modelPartNames = [];
			var printTicketPartNames = [];
			var texturesPartNames = [];
			var otherPartNames = [];

			var rels;
			var modelParts = {};
			var printTicketParts = {};
			var texturesParts = {};
			var otherParts = {};

			try {

				zip = new JSZip(data); // eslint-disable-line no-undef
			} catch (e) {

				if (e instanceof ReferenceError) {

					console.error('THREE.ThreeMFLoader: jszip missing and file is compressed.');
					return null;
				}
			}

			for (file in zip.files) {

				if (file.match(/\.rels$/)) {

					relsName = file;
				} else if (file.match(/^3D\/.*\.model$/)) {

					modelPartNames.push(file);
				} else if (file.match(/^3D\/Metadata\/.*\.xml$/)) {

					printTicketPartNames.push(file);
				} else if (file.match(/^3D\/Textures\/.*/)) {

					texturesPartNames.push(file);
				} else if (file.match(/^3D\/Other\/.*/)) {

					otherPartNames.push(file);
				}
			}

			var relsView = new Uint8Array(zip.file(relsName).asArrayBuffer());
			var relsFileText = THREE.LoaderUtils.decodeText(relsView);
			rels = parseRelsXml(relsFileText);

			for (var i = 0; i < modelPartNames.length; i++) {

				var modelPart = modelPartNames[i];
				var view = new Uint8Array(zip.file(modelPart).asArrayBuffer());

				var fileText = THREE.LoaderUtils.decodeText(view);
				var xmlData = new DOMParser().parseFromString(fileText, 'application/xml');

				if (xmlData.documentElement.nodeName.toLowerCase() !== 'model') {

					console.error('THREE.ThreeMFLoader: Error loading 3MF - no 3MF document found: ', modelPart);
				}

				var modelNode = xmlData.querySelector('model');
				var extensions = {};

				for (var i = 0; i < modelNode.attributes.length; i++) {

					var attr = modelNode.attributes[i];
					if (attr.name.match(/^xmlns:(.+)$/)) {

						extensions[attr.value] = RegExp.$1;
					}
				}

				var modelData = parseModelNode(modelNode);
				modelData['xml'] = modelNode;

				if (0 < Object.keys(extensions).length) {

					modelData['extensions'] = extensions;
				}

				modelParts[modelPart] = modelData;
			}

			for (var i = 0; i < texturesPartNames.length; i++) {

				var texturesPartName = texturesPartNames[i];
				texturesParts[texturesPartName] = zip.file(texturesPartName).asBinary();
			}

			return {
				rels: rels,
				model: modelParts,
				printTicket: printTicketParts,
				texture: texturesParts,
				other: otherParts
			};
		}

		function parseRelsXml(relsFileText) {

			var relsXmlData = new DOMParser().parseFromString(relsFileText, 'application/xml');
			var relsNode = relsXmlData.querySelector('Relationship');
			var target = relsNode.getAttribute('Target');
			var id = relsNode.getAttribute('Id');
			var type = relsNode.getAttribute('Type');

			return {
				target: target,
				id: id,
				type: type
			};
		}

		function parseMetadataNodes(metadataNodes) {

			var metadataData = {};

			for (var i = 0; i < metadataNodes.length; i++) {

				var metadataNode = metadataNodes[i];
				var name = metadataNode.getAttribute('name');
				var validNames = ['Title', 'Designer', 'Description', 'Copyright', 'LicenseTerms', 'Rating', 'CreationDate', 'ModificationDate'];

				if (0 <= validNames.indexOf(name)) {

					metadataData[name] = metadataNode.textContent;
				}
			}

			return metadataData;
		}

		function parseBasematerialsNode(basematerialsNode) {}

		function parseMeshNode(meshNode, extensions) {

			var meshData = {};

			var vertices = [];
			var vertexNodes = meshNode.querySelectorAll('vertices vertex');

			for (var i = 0; i < vertexNodes.length; i++) {

				var vertexNode = vertexNodes[i];
				var x = vertexNode.getAttribute('x');
				var y = vertexNode.getAttribute('y');
				var z = vertexNode.getAttribute('z');

				vertices.push(parseFloat(x), parseFloat(y), parseFloat(z));
			}

			meshData['vertices'] = new Float32Array(vertices.length);

			for (var i = 0; i < vertices.length; i++) {

				meshData['vertices'][i] = vertices[i];
			}

			var triangleProperties = [];
			var triangles = [];
			var triangleNodes = meshNode.querySelectorAll('triangles triangle');

			for (var i = 0; i < triangleNodes.length; i++) {

				var triangleNode = triangleNodes[i];
				var v1 = triangleNode.getAttribute('v1');
				var v2 = triangleNode.getAttribute('v2');
				var v3 = triangleNode.getAttribute('v3');
				var p1 = triangleNode.getAttribute('p1');
				var p2 = triangleNode.getAttribute('p2');
				var p3 = triangleNode.getAttribute('p3');
				var pid = triangleNode.getAttribute('pid');

				triangles.push(parseInt(v1, 10), parseInt(v2, 10), parseInt(v3, 10));

				var triangleProperty = {};

				if (p1) {

					triangleProperty['p1'] = parseInt(p1, 10);
				}

				if (p2) {

					triangleProperty['p2'] = parseInt(p2, 10);
				}

				if (p3) {

					triangleProperty['p3'] = parseInt(p3, 10);
				}

				if (pid) {

					triangleProperty['pid'] = pid;
				}

				if (0 < Object.keys(triangleProperty).length) {

					triangleProperties.push(triangleProperty);
				}
			}

			meshData['triangleProperties'] = triangleProperties;
			meshData['triangles'] = new Uint32Array(triangles.length);

			for (var i = 0; i < triangles.length; i++) {

				meshData['triangles'][i] = triangles[i];
			}

			return meshData;
		}

		function parseComponentsNode(componentsNode) {}

		function parseObjectNode(objectNode) {

			var objectData = {
				type: objectNode.getAttribute('type')
			};

			var id = objectNode.getAttribute('id');

			if (id) {

				objectData['id'] = id;
			}

			var pid = objectNode.getAttribute('pid');

			if (pid) {

				objectData['pid'] = pid;
			}

			var pindex = objectNode.getAttribute('pindex');

			if (pindex) {

				objectData['pindex'] = pindex;
			}

			var thumbnail = objectNode.getAttribute('thumbnail');

			if (thumbnail) {

				objectData['thumbnail'] = thumbnail;
			}

			var partnumber = objectNode.getAttribute('partnumber');

			if (partnumber) {

				objectData['partnumber'] = partnumber;
			}

			var name = objectNode.getAttribute('name');

			if (name) {

				objectData['name'] = name;
			}

			var meshNode = objectNode.querySelector('mesh');

			if (meshNode) {

				objectData['mesh'] = parseMeshNode(meshNode);
			}

			var componentsNode = objectNode.querySelector('components');

			if (componentsNode) {

				objectData['components'] = parseComponentsNode(componentsNode);
			}

			return objectData;
		}

		function parseResourcesNode(resourcesNode) {

			var resourcesData = {};
			var basematerialsNode = resourcesNode.querySelector('basematerials');

			if (basematerialsNode) {

				resourcesData['basematerial'] = parseBasematerialsNode(basematerialsNode);
			}

			resourcesData['object'] = {};
			var objectNodes = resourcesNode.querySelectorAll('object');

			for (var i = 0; i < objectNodes.length; i++) {

				var objectNode = objectNodes[i];
				var objectData = parseObjectNode(objectNode);
				resourcesData['object'][objectData['id']] = objectData;
			}

			return resourcesData;
		}

		function parseBuildNode(buildNode) {

			var buildData = [];
			var itemNodes = buildNode.querySelectorAll('item');

			for (var i = 0; i < itemNodes.length; i++) {

				var itemNode = itemNodes[i];
				var buildItem = {
					objectid: itemNode.getAttribute('objectid')
				};
				var transform = itemNode.getAttribute('transform');

				if (transform) {

					var t = [];
					transform.split(' ').forEach(function (s) {

						t.push(parseFloat(s));
					});
					var mat4 = new THREE.Matrix4();
					buildItem['transform'] = mat4.set(t[0], t[3], t[6], t[9], t[1], t[4], t[7], t[10], t[2], t[5], t[8], t[11], 0.0, 0.0, 0.0, 1.0);
				}

				buildData.push(buildItem);
			}

			return buildData;
		}

		function parseModelNode(modelNode) {

			var modelData = { unit: modelNode.getAttribute('unit') || 'millimeter' };
			var metadataNodes = modelNode.querySelectorAll('metadata');

			if (metadataNodes) {

				modelData['metadata'] = parseMetadataNodes(metadataNodes);
			}

			var resourcesNode = modelNode.querySelector('resources');

			if (resourcesNode) {

				modelData['resources'] = parseResourcesNode(resourcesNode);
			}

			var buildNode = modelNode.querySelector('build');

			if (buildNode) {

				modelData['build'] = parseBuildNode(buildNode);
			}

			return modelData;
		}

		function buildMesh(meshData, data3mf) {

			var geometry = new THREE.BufferGeometry();
			geometry.setIndex(new THREE.BufferAttribute(meshData['triangles'], 1));
			geometry.addAttribute('position', new THREE.BufferAttribute(meshData['vertices'], 3));

			if (meshData['colors']) {

				geometry.addAttribute('color', new THREE.BufferAttribute(meshData['colors'], 3));
			}

			geometry.computeBoundingSphere();

			var materialOpts = {
				flatShading: true
			};

			if (meshData['colors'] && 0 < meshData['colors'].length) {

				materialOpts['vertexColors'] = THREE.VertexColors;
			} else {

				materialOpts['color'] = 0xaaaaff;
			}

			var material = new THREE.MeshPhongMaterial(materialOpts);
			return new THREE.Mesh(geometry, material);
		}

		function applyExtensions(extensions, meshData, modelXml, data3mf) {

			if (!extensions) {

				return;
			}

			var availableExtensions = [];
			var keys = Object.keys(extensions);

			for (var i = 0; i < keys.length; i++) {

				var ns = keys[i];

				for (var j = 0; j < scope.availableExtensions.length; j++) {

					var extension = scope.availableExtensions[j];

					if (extension.ns === ns) {

						availableExtensions.push(extension);
					}
				}
			}

			for (var i = 0; i < availableExtensions.length; i++) {

				var extension = availableExtensions[i];
				extension.apply(modelXml, extensions[extension['ns']], meshData);
			}
		}

		function buildMeshes(data3mf) {

			var modelsData = data3mf.model;
			var meshes = {};
			var modelsKeys = Object.keys(modelsData);

			for (var i = 0; i < modelsKeys.length; i++) {

				var modelsKey = modelsKeys[i];
				var modelData = modelsData[modelsKey];
				var modelXml = modelData['xml'];
				var extensions = modelData['extensions'];

				var objectIds = Object.keys(modelData['resources']['object']);

				for (var j = 0; j < objectIds.length; j++) {

					var objectId = objectIds[j];
					var objectData = modelData['resources']['object'][objectId];
					var meshData = objectData['mesh'];
					applyExtensions(extensions, meshData, modelXml, data3mf);
					meshes[objectId] = buildMesh(meshData, data3mf);
				}
			}

			return meshes;
		}

		function build(meshes, refs, data3mf) {

			var group = new THREE.Group();
			var buildData = data3mf.model[refs['target'].substring(1)]['build'];

			for (var i = 0; i < buildData.length; i++) {

				var buildItem = buildData[i];
				var mesh = meshes[buildItem['objectid']];

				if (buildItem['transform']) {

					mesh.geometry.applyMatrix(buildItem['transform']);
				}

				group.add(mesh);
			}

			return group;
		}

		var data3mf = loadDocument(data);
		var meshes = buildMeshes(data3mf);

		return build(meshes, data3mf['rels'], data3mf);
	},

	addExtension: function addExtension(extension) {

		this.availableExtensions.push(extension);
	}

};

exports.default = THREE.ThreeMFLoader;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * @author tamarintech / https://tamarintech.com
 *
 * Description: Early release of an AMF Loader following the pattern of the
 * example loaders in the three.js project.
 *
 * More information about the AMF format: http://amf.wikispaces.com
 *
 * Usage:
 *	var loader = new AMFLoader();
 *	loader.load('/path/to/project.amf', function(objecttree) {
 *		scene.add(objecttree);
 *	});
 *
 * Materials now supported, material colors supported
 * Zip support, requires jszip
 * No constellation support (yet)!
 *
 */

THREE.AMFLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.AMFLoader.prototype = {

	constructor: THREE.AMFLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	parse: function parse(data) {

		function loadDocument(data) {

			var view = new DataView(data);
			var magic = String.fromCharCode(view.getUint8(0), view.getUint8(1));

			if (magic === 'PK') {

				var zip = null;
				var file = null;

				console.log('THREE.AMFLoader: Loading Zip');

				try {

					zip = new JSZip(data); // eslint-disable-line no-undef
				} catch (e) {

					if (e instanceof ReferenceError) {

						console.log('THREE.AMFLoader: jszip missing and file is compressed.');
						return null;
					}
				}

				for (file in zip.files) {

					if (file.toLowerCase().substr(-4) === '.amf') {

						break;
					}
				}

				console.log('THREE.AMFLoader: Trying to load file asset: ' + file);
				view = new DataView(zip.file(file).asArrayBuffer());
			}

			var fileText = THREE.LoaderUtils.decodeText(view);
			var xmlData = new DOMParser().parseFromString(fileText, 'application/xml');

			if (xmlData.documentElement.nodeName.toLowerCase() !== 'amf') {

				console.log('THREE.AMFLoader: Error loading AMF - no AMF document found.');
				return null;
			}

			return xmlData;
		}

		function loadDocumentScale(node) {

			var scale = 1.0;
			var unit = 'millimeter';

			if (node.documentElement.attributes.unit !== undefined) {

				unit = node.documentElement.attributes.unit.value.toLowerCase();
			}

			var scaleUnits = {
				millimeter: 1.0,
				inch: 25.4,
				feet: 304.8,
				meter: 1000.0,
				micron: 0.001
			};

			if (scaleUnits[unit] !== undefined) {

				scale = scaleUnits[unit];
			}

			console.log('THREE.AMFLoader: Unit scale: ' + scale);
			return scale;
		}

		function loadMaterials(node) {

			var matName = 'AMF Material';
			var matId = node.attributes.id.textContent;
			var color = { r: 1.0, g: 1.0, b: 1.0, a: 1.0 };

			var loadedMaterial = null;

			for (var i = 0; i < node.childNodes.length; i++) {

				var matChildEl = node.childNodes[i];

				if (matChildEl.nodeName === 'metadata' && matChildEl.attributes.type !== undefined) {

					if (matChildEl.attributes.type.value === 'name') {

						matName = matChildEl.textContent;
					}
				} else if (matChildEl.nodeName === 'color') {

					color = loadColor(matChildEl);
				}
			}

			loadedMaterial = new THREE.MeshPhongMaterial({
				flatShading: true,
				color: new THREE.Color(color.r, color.g, color.b),
				name: matName
			});

			if (color.a !== 1.0) {

				loadedMaterial.transparent = true;
				loadedMaterial.opacity = color.a;
			}

			return { id: matId, material: loadedMaterial };
		}

		function loadColor(node) {

			var color = { r: 1.0, g: 1.0, b: 1.0, a: 1.0 };

			for (var i = 0; i < node.childNodes.length; i++) {

				var matColor = node.childNodes[i];

				if (matColor.nodeName === 'r') {

					color.r = matColor.textContent;
				} else if (matColor.nodeName === 'g') {

					color.g = matColor.textContent;
				} else if (matColor.nodeName === 'b') {

					color.b = matColor.textContent;
				} else if (matColor.nodeName === 'a') {

					color.a = matColor.textContent;
				}
			}

			return color;
		}

		function loadMeshVolume(node) {

			var volume = { name: '', triangles: [], materialid: null };

			var currVolumeNode = node.firstElementChild;

			if (node.attributes.materialid !== undefined) {

				volume.materialId = node.attributes.materialid.nodeValue;
			}

			while (currVolumeNode) {

				if (currVolumeNode.nodeName === 'metadata') {

					if (currVolumeNode.attributes.type !== undefined) {

						if (currVolumeNode.attributes.type.value === 'name') {

							volume.name = currVolumeNode.textContent;
						}
					}
				} else if (currVolumeNode.nodeName === 'triangle') {

					var v1 = currVolumeNode.getElementsByTagName('v1')[0].textContent;
					var v2 = currVolumeNode.getElementsByTagName('v2')[0].textContent;
					var v3 = currVolumeNode.getElementsByTagName('v3')[0].textContent;

					volume.triangles.push(v1, v2, v3);
				}

				currVolumeNode = currVolumeNode.nextElementSibling;
			}

			return volume;
		}

		function loadMeshVertices(node) {

			var vertArray = [];
			var normalArray = [];
			var currVerticesNode = node.firstElementChild;

			while (currVerticesNode) {

				if (currVerticesNode.nodeName === 'vertex') {

					var vNode = currVerticesNode.firstElementChild;

					while (vNode) {

						if (vNode.nodeName === 'coordinates') {

							var x = vNode.getElementsByTagName('x')[0].textContent;
							var y = vNode.getElementsByTagName('y')[0].textContent;
							var z = vNode.getElementsByTagName('z')[0].textContent;

							vertArray.push(x, y, z);
						} else if (vNode.nodeName === 'normal') {

							var nx = vNode.getElementsByTagName('nx')[0].textContent;
							var ny = vNode.getElementsByTagName('ny')[0].textContent;
							var nz = vNode.getElementsByTagName('nz')[0].textContent;

							normalArray.push(nx, ny, nz);
						}

						vNode = vNode.nextElementSibling;
					}
				}
				currVerticesNode = currVerticesNode.nextElementSibling;
			}

			return { 'vertices': vertArray, 'normals': normalArray };
		}

		function loadObject(node) {

			var objId = node.attributes.id.textContent;
			var loadedObject = { name: 'amfobject', meshes: [] };
			var currColor = null;
			var currObjNode = node.firstElementChild;

			while (currObjNode) {

				if (currObjNode.nodeName === 'metadata') {

					if (currObjNode.attributes.type !== undefined) {

						if (currObjNode.attributes.type.value === 'name') {

							loadedObject.name = currObjNode.textContent;
						}
					}
				} else if (currObjNode.nodeName === 'color') {

					currColor = loadColor(currObjNode);
				} else if (currObjNode.nodeName === 'mesh') {

					var currMeshNode = currObjNode.firstElementChild;
					var mesh = { vertices: [], normals: [], volumes: [], color: currColor };

					while (currMeshNode) {

						if (currMeshNode.nodeName === 'vertices') {

							var loadedVertices = loadMeshVertices(currMeshNode);

							mesh.normals = mesh.normals.concat(loadedVertices.normals);
							mesh.vertices = mesh.vertices.concat(loadedVertices.vertices);
						} else if (currMeshNode.nodeName === 'volume') {

							mesh.volumes.push(loadMeshVolume(currMeshNode));
						}

						currMeshNode = currMeshNode.nextElementSibling;
					}

					loadedObject.meshes.push(mesh);
				}

				currObjNode = currObjNode.nextElementSibling;
			}

			return { 'id': objId, 'obj': loadedObject };
		}

		var xmlData = loadDocument(data);
		var amfName = '';
		var amfAuthor = '';
		var amfScale = loadDocumentScale(xmlData);
		var amfMaterials = {};
		var amfObjects = {};
		var childNodes = xmlData.documentElement.childNodes;

		var i, j;

		for (i = 0; i < childNodes.length; i++) {

			var child = childNodes[i];

			if (child.nodeName === 'metadata') {

				if (child.attributes.type !== undefined) {

					if (child.attributes.type.value === 'name') {

						amfName = child.textContent;
					} else if (child.attributes.type.value === 'author') {

						amfAuthor = child.textContent;
					}
				}
			} else if (child.nodeName === 'material') {

				var loadedMaterial = loadMaterials(child);

				amfMaterials[loadedMaterial.id] = loadedMaterial.material;
			} else if (child.nodeName === 'object') {

				var loadedObject = loadObject(child);

				amfObjects[loadedObject.id] = loadedObject.obj;
			}
		}

		var sceneObject = new THREE.Group();
		var defaultMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaff, flatShading: true });

		sceneObject.name = amfName;
		sceneObject.userData.author = amfAuthor;
		sceneObject.userData.loader = 'AMF';

		for (var id in amfObjects) {

			var part = amfObjects[id];
			var meshes = part.meshes;
			var newObject = new THREE.Group();
			newObject.name = part.name || '';

			for (i = 0; i < meshes.length; i++) {

				var objDefaultMaterial = defaultMaterial;
				var mesh = meshes[i];
				var vertices = new THREE.Float32BufferAttribute(mesh.vertices, 3);
				var normals = null;

				if (mesh.normals.length) {

					normals = new THREE.Float32BufferAttribute(mesh.normals, 3);
				}

				if (mesh.color) {

					var color = mesh.color;

					objDefaultMaterial = defaultMaterial.clone();
					objDefaultMaterial.color = new THREE.Color(color.r, color.g, color.b);

					if (color.a !== 1.0) {

						objDefaultMaterial.transparent = true;
						objDefaultMaterial.opacity = color.a;
					}
				}

				var volumes = mesh.volumes;

				for (j = 0; j < volumes.length; j++) {

					var volume = volumes[j];
					var newGeometry = new THREE.BufferGeometry();
					var material = objDefaultMaterial;

					newGeometry.setIndex(volume.triangles);
					newGeometry.addAttribute('position', vertices.clone());

					if (normals) {

						newGeometry.addAttribute('normal', normals.clone());
					}

					if (amfMaterials[volume.materialId] !== undefined) {

						material = amfMaterials[volume.materialId];
					}

					newGeometry.scale(amfScale, amfScale, amfScale);
					newObject.add(new THREE.Mesh(newGeometry, material.clone()));
				}
			}

			sceneObject.add(newObject);
		}

		return sceneObject;
	}

};

exports.default = THREE.AMFLoader;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Alexander Gessler / http://www.greentoken.de/
 * https://github.com/acgessler
 *
 * Loader for models imported with Open Asset Import Library (http://assimp.sf.net)
 * through assimp2json (https://github.com/acgessler/assimp2json).
 *
 * Supports any input format that assimp supports, including 3ds, obj, dae, blend,
 * fbx, x, ms3d, lwo (and many more).
 *
 * See webgl_loader_assimp2json example.
 */

THREE.AssimpJSONLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.AssimpJSONLoader.prototype = {

	constructor: THREE.AssimpJSONLoader,

	crossOrigin: 'Anonymous',

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var path = THREE.LoaderUtils.extractUrlBase(url);

		var loader = new THREE.FileLoader(this.manager);
		loader.load(url, function (text) {

			var json = JSON.parse(text);
			var metadata = json.__metadata__;

			// check if __metadata__ meta header is present
			// this header is used to disambiguate between different JSON-based file formats

			if (typeof metadata !== 'undefined') {

				// check if assimp2json at all

				if (metadata.format !== 'assimp2json') {

					onError('THREE.AssimpJSONLoader: Not an assimp2json scene.');
					return;

					// check major format version
				} else if (metadata.version < 100 && metadata.version >= 200) {

					onError('THREE.AssimpJSONLoader: Unsupported assimp2json file format version.');
					return;
				}
			}

			onLoad(scope.parse(json, path));
		}, onProgress, onError);
	},

	setCrossOrigin: function setCrossOrigin(value) {

		this.crossOrigin = value;
	},

	parse: function parse(json, path) {

		function parseList(json, handler) {

			var meshes = new Array(json.length);

			for (var i = 0; i < json.length; ++i) {

				meshes[i] = handler.call(this, json[i]);
			}

			return meshes;
		}

		function parseMesh(json) {

			var geometry = new THREE.BufferGeometry();

			var i, l, face;

			var indices = [];

			var vertices = json.vertices || [];
			var normals = json.normals || [];
			var uvs = json.texturecoords || [];
			var colors = json.colors || [];

			uvs = uvs[0] || []; // only support for a single set of uvs

			for (i = 0, l = json.faces.length; i < l; i++) {

				face = json.faces[i];
				indices.push(face[0], face[1], face[2]);
			}

			geometry.setIndex(indices);
			geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

			if (normals.length > 0) {

				geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
			}

			if (uvs.length > 0) {

				geometry.addAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
			}

			if (colors.length > 0) {

				geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
			}

			geometry.computeBoundingSphere();

			return geometry;
		}

		function parseMaterial(json) {

			var material = new THREE.MeshPhongMaterial();

			for (var i in json.properties) {

				var property = json.properties[i];
				var key = property.key;
				var value = property.value;

				switch (key) {

					case '$tex.file':
						{

							var semantic = property.semantic;

							// prop.semantic gives the type of the texture
							// 1: diffuse
							// 2: specular mao
							// 5: height map (bumps)
							// 6: normal map
							// more values (i.e. emissive, environment) are known by assimp and may be relevant

							if (semantic === 1 || semantic === 2 || semantic === 5 || semantic === 6) {

								var keyname;

								switch (semantic) {

									case 1:
										keyname = 'map';
										break;
									case 2:
										keyname = 'specularMap';
										break;
									case 5:
										keyname = 'bumpMap';
										break;
									case 6:
										keyname = 'normalMap';
										break;

								}

								var texture = textureLoader.load(value);

								// TODO: read texture settings from assimp.
								// Wrapping is the default, though.

								texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

								material[keyname] = texture;
							}

							break;
						}

					case '?mat.name':
						material.name = value;
						break;

					case '$clr.diffuse':
						material.color.fromArray(value);
						break;

					case '$clr.specular':
						material.specular.fromArray(value);
						break;

					case '$clr.emissive':
						material.emissive.fromArray(value);
						break;

					case '$mat.shininess':
						material.shininess = value;
						break;

					case '$mat.shadingm':
						// aiShadingMode_Flat
						material.flatShading = value === 1 ? true : false;
						break;

					case '$mat.opacity':
						if (value < 1) {
							material.opacity = value;
							material.transparent = true;
						}
						break;

				}
			}

			return material;
		}

		function parseObject(json, node, meshes, materials) {

			var obj = new THREE.Object3D(),
			    i,
			    idx;

			obj.name = node.name || '';
			obj.matrix = new THREE.Matrix4().fromArray(node.transformation).transpose();
			obj.matrix.decompose(obj.position, obj.quaternion, obj.scale);

			for (i = 0; node.meshes && i < node.meshes.length; i++) {

				idx = node.meshes[i];
				obj.add(new THREE.Mesh(meshes[idx], materials[json.meshes[idx].materialindex]));
			}

			for (i = 0; node.children && i < node.children.length; i++) {

				obj.add(parseObject(json, node.children[i], meshes, materials));
			}

			return obj;
		}

		var textureLoader = new THREE.TextureLoader(this.manager);
		textureLoader.setPath(path).setCrossOrigin(this.crossOrigin);

		var meshes = parseList(json.meshes, parseMesh);
		var materials = parseList(json.materials, parseMaterial);
		return parseObject(json, json.rootnode, meshes, materials);
	}

};

exports.default = THREE.AssimpJSONLoader;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Virtulous / https://virtulo.us/
 */

THREE.AssimpLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.AssimpLoader.prototype = {

	constructor: THREE.AssimpLoader,

	crossOrigin: 'Anonymous',

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var path = THREE.LoaderUtils.extractUrlBase(url);

		var loader = new THREE.FileLoader(this.manager);
		loader.setResponseType('arraybuffer');

		loader.load(url, function (buffer) {

			onLoad(scope.parse(buffer, path));
		}, onProgress, onError);
	},

	setCrossOrigin: function setCrossOrigin(value) {

		this.crossOrigin = value;
	},

	parse: function parse(buffer, path) {

		var textureLoader = new THREE.TextureLoader(this.manager);
		textureLoader.setPath(path).setCrossOrigin(this.crossOrigin);

		var Virtulous = {};

		Virtulous.KeyFrame = function (time, matrix) {

			this.time = time;
			this.matrix = matrix.clone();
			this.position = new THREE.Vector3();
			this.quaternion = new THREE.Quaternion();
			this.scale = new THREE.Vector3(1, 1, 1);
			this.matrix.decompose(this.position, this.quaternion, this.scale);
			this.clone = function () {

				var n = new Virtulous.KeyFrame(this.time, this.matrix);
				return n;
			};
			this.lerp = function (nextKey, time) {

				time -= this.time;
				var dist = nextKey.time - this.time;
				var l = time / dist;
				var l2 = 1 - l;
				var keypos = this.position;
				var keyrot = this.quaternion;
				//      var keyscl =  key.parentspaceScl || key.scl;
				var key2pos = nextKey.position;
				var key2rot = nextKey.quaternion;
				//  var key2scl =  key2.parentspaceScl || key2.scl;
				Virtulous.KeyFrame.tempAniPos.x = keypos.x * l2 + key2pos.x * l;
				Virtulous.KeyFrame.tempAniPos.y = keypos.y * l2 + key2pos.y * l;
				Virtulous.KeyFrame.tempAniPos.z = keypos.z * l2 + key2pos.z * l;
				//     tempAniScale.x = keyscl[0] * l2 + key2scl[0] * l;
				//     tempAniScale.y = keyscl[1] * l2 + key2scl[1] * l;
				//     tempAniScale.z = keyscl[2] * l2 + key2scl[2] * l;
				Virtulous.KeyFrame.tempAniQuat.set(keyrot.x, keyrot.y, keyrot.z, keyrot.w);
				Virtulous.KeyFrame.tempAniQuat.slerp(key2rot, l);
				return Virtulous.KeyFrame.tempAniMatrix.compose(Virtulous.KeyFrame.tempAniPos, Virtulous.KeyFrame.tempAniQuat, Virtulous.KeyFrame.tempAniScale);
			};
		};

		Virtulous.KeyFrame.tempAniPos = new THREE.Vector3();
		Virtulous.KeyFrame.tempAniQuat = new THREE.Quaternion();
		Virtulous.KeyFrame.tempAniScale = new THREE.Vector3(1, 1, 1);
		Virtulous.KeyFrame.tempAniMatrix = new THREE.Matrix4();
		Virtulous.KeyFrameTrack = function () {

			this.keys = [];
			this.target = null;
			this.time = 0;
			this.length = 0;
			this._accelTable = {};
			this.fps = 20;
			this.addKey = function (key) {

				this.keys.push(key);
			};
			this.init = function () {

				this.sortKeys();

				if (this.keys.length > 0) this.length = this.keys[this.keys.length - 1].time;else this.length = 0;

				if (!this.fps) return;

				for (var j = 0; j < this.length * this.fps; j++) {

					for (var i = 0; i < this.keys.length; i++) {

						if (this.keys[i].time == j) {

							this._accelTable[j] = i;
							break;
						} else if (this.keys[i].time < j / this.fps && this.keys[i + 1] && this.keys[i + 1].time >= j / this.fps) {

							this._accelTable[j] = i;
							break;
						}
					}
				}
			};

			this.parseFromThree = function (data) {

				var fps = data.fps;
				this.target = data.node;
				var track = data.hierarchy[0].keys;
				for (var i = 0; i < track.length; i++) {

					this.addKey(new Virtulous.KeyFrame(i / fps || track[i].time, track[i].targets[0].data));
				}
				this.init();
			};

			this.parseFromCollada = function (data) {

				var track = data.keys;
				var fps = this.fps;

				for (var i = 0; i < track.length; i++) {

					this.addKey(new Virtulous.KeyFrame(i / fps || track[i].time, track[i].matrix));
				}

				this.init();
			};

			this.sortKeys = function () {

				this.keys.sort(this.keySortFunc);
			};

			this.keySortFunc = function (a, b) {

				return a.time - b.time;
			};

			this.clone = function () {

				var t = new Virtulous.KeyFrameTrack();
				t.target = this.target;
				t.time = this.time;
				t.length = this.length;

				for (var i = 0; i < this.keys.length; i++) {

					t.addKey(this.keys[i].clone());
				}

				t.init();
				return t;
			};

			this.reTarget = function (root, compareitor) {

				if (!compareitor) compareitor = Virtulous.TrackTargetNodeNameCompare;
				this.target = compareitor(root, this.target);
			};

			this.keySearchAccel = function (time) {

				time *= this.fps;
				time = Math.floor(time);
				return this._accelTable[time] || 0;
			};

			this.setTime = function (time) {

				time = Math.abs(time);
				if (this.length) time = time % this.length + .05;
				var key0 = null;
				var key1 = null;

				for (var i = this.keySearchAccel(time); i < this.keys.length; i++) {

					if (this.keys[i].time == time) {

						key0 = this.keys[i];
						key1 = this.keys[i];
						break;
					} else if (this.keys[i].time < time && this.keys[i + 1] && this.keys[i + 1].time > time) {

						key0 = this.keys[i];
						key1 = this.keys[i + 1];
						break;
					} else if (this.keys[i].time < time && i == this.keys.length - 1) {

						key0 = this.keys[i];
						key1 = this.keys[0].clone();
						key1.time += this.length + .05;
						break;
					}
				}

				if (key0 && key1 && key0 !== key1) {

					this.target.matrixAutoUpdate = false;
					this.target.matrix.copy(key0.lerp(key1, time));
					this.target.matrixWorldNeedsUpdate = true;
					return;
				}

				if (key0 && key1 && key0 == key1) {

					this.target.matrixAutoUpdate = false;
					this.target.matrix.copy(key0.matrix);
					this.target.matrixWorldNeedsUpdate = true;
					return;
				}
			};
		};

		Virtulous.TrackTargetNodeNameCompare = function (root, target) {

			function find(node, name) {

				if (node.name == name) return node;

				for (var i = 0; i < node.children.length; i++) {

					var r = find(node.children[i], name);
					if (r) return r;
				}

				return null;
			}

			return find(root, target.name);
		};

		Virtulous.Animation = function () {

			this.tracks = [];
			this.length = 0;

			this.addTrack = function (track) {

				this.tracks.push(track);
				this.length = Math.max(track.length, this.length);
			};

			this.setTime = function (time) {

				this.time = time;

				for (var i = 0; i < this.tracks.length; i++) {
					this.tracks[i].setTime(time);
				}
			};

			this.clone = function (target, compareitor) {

				if (!compareitor) compareitor = Virtulous.TrackTargetNodeNameCompare;
				var n = new Virtulous.Animation();
				n.target = target;
				for (var i = 0; i < this.tracks.length; i++) {

					var track = this.tracks[i].clone();
					track.reTarget(target, compareitor);
					n.addTrack(track);
				}

				return n;
			};
		};

		var ASSBIN_CHUNK_AICAMERA = 0x1234;
		var ASSBIN_CHUNK_AILIGHT = 0x1235;
		var ASSBIN_CHUNK_AITEXTURE = 0x1236;
		var ASSBIN_CHUNK_AIMESH = 0x1237;
		var ASSBIN_CHUNK_AINODEANIM = 0x1238;
		var ASSBIN_CHUNK_AISCENE = 0x1239;
		var ASSBIN_CHUNK_AIBONE = 0x123a;
		var ASSBIN_CHUNK_AIANIMATION = 0x123b;
		var ASSBIN_CHUNK_AINODE = 0x123c;
		var ASSBIN_CHUNK_AIMATERIAL = 0x123d;
		var ASSBIN_CHUNK_AIMATERIALPROPERTY = 0x123e;
		var ASSBIN_MESH_HAS_POSITIONS = 0x1;
		var ASSBIN_MESH_HAS_NORMALS = 0x2;
		var ASSBIN_MESH_HAS_TANGENTS_AND_BITANGENTS = 0x4;
		var ASSBIN_MESH_HAS_TEXCOORD_BASE = 0x100;
		var ASSBIN_MESH_HAS_COLOR_BASE = 0x10000;
		var AI_MAX_NUMBER_OF_COLOR_SETS = 1;
		var AI_MAX_NUMBER_OF_TEXTURECOORDS = 4;
		var aiLightSource_UNDEFINED = 0x0;
		//! A directional light source has a well-defined direction
		//! but is infinitely far away. That's quite a good
		//! approximation for sun light.
		var aiLightSource_DIRECTIONAL = 0x1;
		//! A point light source has a well-defined position
		//! in space but no direction - it emits light in all
		//! directions. A normal bulb is a point light.
		var aiLightSource_POINT = 0x2;
		//! A spot light source emits light in a specific
		//! angle. It has a position and a direction it is pointing to.
		//! A good example for a spot light is a light spot in
		//! sport arenas.
		var aiLightSource_SPOT = 0x3;
		//! The generic light level of the world, including the bounces
		//! of all other lightsources.
		//! Typically, there's at most one ambient light in a scene.
		//! This light type doesn't have a valid position, direction, or
		//! other properties, just a color.
		var aiLightSource_AMBIENT = 0x4;
		/** Flat shading. Shading is done on per-face base,
   *  diffuse only. Also known as 'faceted shading'.
   */
		var aiShadingMode_Flat = 0x1;
		/** Simple Gouraud shading.
   */
		var aiShadingMode_Gouraud = 0x2;
		/** Phong-Shading -
   */
		var aiShadingMode_Phong = 0x3;
		/** Phong-Blinn-Shading
   */
		var aiShadingMode_Blinn = 0x4;
		/** Toon-Shading per pixel
   *
   *  Also known as 'comic' shader.
   */
		var aiShadingMode_Toon = 0x5;
		/** OrenNayar-Shading per pixel
   *
   *  Extension to standard Lambertian shading, taking the
   *  roughness of the material into account
   */
		var aiShadingMode_OrenNayar = 0x6;
		/** Minnaert-Shading per pixel
   *
   *  Extension to standard Lambertian shading, taking the
   *  "darkness" of the material into account
   */
		var aiShadingMode_Minnaert = 0x7;
		/** CookTorrance-Shading per pixel
   *
   *  Special shader for metallic surfaces.
   */
		var aiShadingMode_CookTorrance = 0x8;
		/** No shading at all. Constant light influence of 1.0.
   */
		var aiShadingMode_NoShading = 0x9;
		/** Fresnel shading
   */
		var aiShadingMode_Fresnel = 0xa;
		var aiTextureType_NONE = 0x0;
		/** The texture is combined with the result of the diffuse
   *  lighting equation.
   */
		var aiTextureType_DIFFUSE = 0x1;
		/** The texture is combined with the result of the specular
   *  lighting equation.
   */
		var aiTextureType_SPECULAR = 0x2;
		/** The texture is combined with the result of the ambient
   *  lighting equation.
   */
		var aiTextureType_AMBIENT = 0x3;
		/** The texture is added to the result of the lighting
   *  calculation. It isn't influenced by incoming light.
   */
		var aiTextureType_EMISSIVE = 0x4;
		/** The texture is a height map.
   *
   *  By convention, higher gray-scale values stand for
   *  higher elevations from the base height.
   */
		var aiTextureType_HEIGHT = 0x5;
		/** The texture is a (tangent space) normal-map.
   *
   *  Again, there are several conventions for tangent-space
   *  normal maps. Assimp does (intentionally) not
   *  distinguish here.
   */
		var aiTextureType_NORMALS = 0x6;
		/** The texture defines the glossiness of the material.
   *
   *  The glossiness is in fact the exponent of the specular
   *  (phong) lighting equation. Usually there is a conversion
   *  function defined to map the linear color values in the
   *  texture to a suitable exponent. Have fun.
   */
		var aiTextureType_SHININESS = 0x7;
		/** The texture defines per-pixel opacity.
   *
   *  Usually 'white' means opaque and 'black' means
   *  'transparency'. Or quite the opposite. Have fun.
   */
		var aiTextureType_OPACITY = 0x8;
		/** Displacement texture
   *
   *  The exact purpose and format is application-dependent.
   *  Higher color values stand for higher vertex displacements.
   */
		var aiTextureType_DISPLACEMENT = 0x9;
		/** Lightmap texture (aka Ambient Occlusion)
   *
   *  Both 'Lightmaps' and dedicated 'ambient occlusion maps' are
   *  covered by this material property. The texture contains a
   *  scaling value for the final color value of a pixel. Its
   *  intensity is not affected by incoming light.
   */
		var aiTextureType_LIGHTMAP = 0xA;
		/** Reflection texture
   *
   * Contains the color of a perfect mirror reflection.
   * Rarely used, almost never for real-time applications.
   */
		var aiTextureType_REFLECTION = 0xB;
		/** Unknown texture
   *
   *  A texture reference that does not match any of the definitions
   *  above is considered to be 'unknown'. It is still imported,
   *  but is excluded from any further postprocessing.
   */
		var aiTextureType_UNKNOWN = 0xC;
		var BONESPERVERT = 4;

		function ASSBIN_MESH_HAS_TEXCOORD(n) {

			return ASSBIN_MESH_HAS_TEXCOORD_BASE << n;
		}

		function ASSBIN_MESH_HAS_COLOR(n) {

			return ASSBIN_MESH_HAS_COLOR_BASE << n;
		}

		function markBones(scene) {

			for (var i in scene.mMeshes) {

				var mesh = scene.mMeshes[i];
				for (var k in mesh.mBones) {

					var boneNode = scene.findNode(mesh.mBones[k].mName);
					if (boneNode) boneNode.isBone = true;
				}
			}
		}
		function cloneTreeToBones(root, scene) {

			var rootBone = new THREE.Bone();
			rootBone.matrix.copy(root.matrix);
			rootBone.matrixWorld.copy(root.matrixWorld);
			rootBone.position.copy(root.position);
			rootBone.quaternion.copy(root.quaternion);
			rootBone.scale.copy(root.scale);
			scene.nodeCount++;
			rootBone.name = "bone_" + root.name + scene.nodeCount.toString();

			if (!scene.nodeToBoneMap[root.name]) scene.nodeToBoneMap[root.name] = [];
			scene.nodeToBoneMap[root.name].push(rootBone);
			for (var i in root.children) {

				var child = cloneTreeToBones(root.children[i], scene);
				if (child) rootBone.add(child);
			}

			return rootBone;
		}

		function sortWeights(indexes, weights) {

			var pairs = [];

			for (var i = 0; i < indexes.length; i++) {

				pairs.push({
					i: indexes[i],
					w: weights[i]
				});
			}

			pairs.sort(function (a, b) {

				return b.w - a.w;
			});

			while (pairs.length < 4) {

				pairs.push({
					i: 0,
					w: 0
				});
			}

			if (pairs.length > 4) pairs.length = 4;
			var sum = 0;

			for (var i = 0; i < 4; i++) {

				sum += pairs[i].w * pairs[i].w;
			}

			sum = Math.sqrt(sum);

			for (var i = 0; i < 4; i++) {

				pairs[i].w = pairs[i].w / sum;
				indexes[i] = pairs[i].i;
				weights[i] = pairs[i].w;
			}
		}

		function findMatchingBone(root, name) {

			if (root.name.indexOf("bone_" + name) == 0) return root;

			for (var i in root.children) {

				var ret = findMatchingBone(root.children[i], name);

				if (ret) return ret;
			}

			return undefined;
		}

		function aiMesh() {

			this.mPrimitiveTypes = 0;
			this.mNumVertices = 0;
			this.mNumFaces = 0;
			this.mNumBones = 0;
			this.mMaterialIndex = 0;
			this.mVertices = [];
			this.mNormals = [];
			this.mTangents = [];
			this.mBitangents = [];
			this.mColors = [[]];
			this.mTextureCoords = [[]];
			this.mFaces = [];
			this.mBones = [];
			this.hookupSkeletons = function (scene, threeScene) {

				if (this.mBones.length == 0) return;

				var allBones = [];
				var offsetMatrix = [];
				var skeletonRoot = scene.findNode(this.mBones[0].mName);

				while (skeletonRoot.mParent && skeletonRoot.mParent.isBone) {

					skeletonRoot = skeletonRoot.mParent;
				}

				var threeSkeletonRoot = skeletonRoot.toTHREE(scene);
				var threeSkeletonRootBone = cloneTreeToBones(threeSkeletonRoot, scene);
				this.threeNode.add(threeSkeletonRootBone);

				for (var i = 0; i < this.mBones.length; i++) {

					var bone = findMatchingBone(threeSkeletonRootBone, this.mBones[i].mName);

					if (bone) {

						var tbone = bone;
						allBones.push(tbone);
						//tbone.matrixAutoUpdate = false;
						offsetMatrix.push(this.mBones[i].mOffsetMatrix.toTHREE());
					} else {

						var skeletonRoot = scene.findNode(this.mBones[i].mName);
						if (!skeletonRoot) return;
						var threeSkeletonRoot = skeletonRoot.toTHREE(scene);
						var threeSkeletonRootParent = threeSkeletonRoot.parent;
						var threeSkeletonRootBone = cloneTreeToBones(threeSkeletonRoot, scene);
						this.threeNode.add(threeSkeletonRootBone);
						var bone = findMatchingBone(threeSkeletonRootBone, this.mBones[i].mName);
						var tbone = bone;
						allBones.push(tbone);
						//tbone.matrixAutoUpdate = false;
						offsetMatrix.push(this.mBones[i].mOffsetMatrix.toTHREE());
					}
				}
				var skeleton = new THREE.Skeleton(allBones, offsetMatrix);

				this.threeNode.bind(skeleton, new THREE.Matrix4());
				this.threeNode.material.skinning = true;
			};

			this.toTHREE = function (scene) {

				if (this.threeNode) return this.threeNode;
				var geometry = new THREE.BufferGeometry();
				var mat;
				if (scene.mMaterials[this.mMaterialIndex]) mat = scene.mMaterials[this.mMaterialIndex].toTHREE(scene);else mat = new THREE.MeshLambertMaterial();
				geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(this.mIndexArray), 1));
				geometry.addAttribute('position', new THREE.BufferAttribute(this.mVertexBuffer, 3));
				if (this.mNormalBuffer && this.mNormalBuffer.length > 0) geometry.addAttribute('normal', new THREE.BufferAttribute(this.mNormalBuffer, 3));
				if (this.mColorBuffer && this.mColorBuffer.length > 0) geometry.addAttribute('color', new THREE.BufferAttribute(this.mColorBuffer, 4));
				if (this.mTexCoordsBuffers[0] && this.mTexCoordsBuffers[0].length > 0) geometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(this.mTexCoordsBuffers[0]), 2));
				if (this.mTexCoordsBuffers[1] && this.mTexCoordsBuffers[1].length > 0) geometry.addAttribute('uv1', new THREE.BufferAttribute(new Float32Array(this.mTexCoordsBuffers[1]), 2));
				if (this.mTangentBuffer && this.mTangentBuffer.length > 0) geometry.addAttribute('tangents', new THREE.BufferAttribute(this.mTangentBuffer, 3));
				if (this.mBitangentBuffer && this.mBitangentBuffer.length > 0) geometry.addAttribute('bitangents', new THREE.BufferAttribute(this.mBitangentBuffer, 3));
				if (this.mBones.length > 0) {

					var weights = [];
					var bones = [];

					for (var i = 0; i < this.mBones.length; i++) {

						for (var j = 0; j < this.mBones[i].mWeights.length; j++) {

							var weight = this.mBones[i].mWeights[j];
							if (weight) {

								if (!weights[weight.mVertexId]) weights[weight.mVertexId] = [];
								if (!bones[weight.mVertexId]) bones[weight.mVertexId] = [];
								weights[weight.mVertexId].push(weight.mWeight);
								bones[weight.mVertexId].push(parseInt(i));
							}
						}
					}

					for (var i in bones) {

						sortWeights(bones[i], weights[i]);
					}

					var _weights = [];
					var _bones = [];

					for (var i = 0; i < weights.length; i++) {

						for (var j = 0; j < 4; j++) {

							if (weights[i] && bones[i]) {

								_weights.push(weights[i][j]);
								_bones.push(bones[i][j]);
							} else {

								_weights.push(0);
								_bones.push(0);
							}
						}
					}

					geometry.addAttribute('skinWeight', new THREE.BufferAttribute(new Float32Array(_weights), BONESPERVERT));
					geometry.addAttribute('skinIndex', new THREE.BufferAttribute(new Float32Array(_bones), BONESPERVERT));
				}

				var mesh;

				if (this.mBones.length == 0) mesh = new THREE.Mesh(geometry, mat);

				if (this.mBones.length > 0) mesh = new THREE.SkinnedMesh(geometry, mat);

				this.threeNode = mesh;
				//mesh.matrixAutoUpdate = false;
				return mesh;
			};
		}

		function aiFace() {

			this.mNumIndices = 0;
			this.mIndices = [];
		}

		function aiVector3D() {

			this.x = 0;
			this.y = 0;
			this.z = 0;

			this.toTHREE = function () {

				return new THREE.Vector3(this.x, this.y, this.z);
			};
		}

		function aiVector2D() {

			this.x = 0;
			this.y = 0;
			this.toTHREE = function () {

				return new THREE.Vector2(this.x, this.y);
			};
		}

		function aiVector4D() {

			this.w = 0;
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.toTHREE = function () {

				return new THREE.Vector4(this.w, this.x, this.y, this.z);
			};
		}

		function aiColor4D() {

			this.r = 0;
			this.g = 0;
			this.b = 0;
			this.a = 0;
			this.toTHREE = function () {

				return new THREE.Color(this.r, this.g, this.b, this.a);
			};
		}

		function aiColor3D() {

			this.r = 0;
			this.g = 0;
			this.b = 0;
			this.a = 0;
			this.toTHREE = function () {

				return new THREE.Color(this.r, this.g, this.b, 1);
			};
		}

		function aiQuaternion() {

			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 0;
			this.toTHREE = function () {

				return new THREE.Quaternion(this.x, this.y, this.z, this.w);
			};
		}

		function aiVertexWeight() {

			this.mVertexId = 0;
			this.mWeight = 0;
		}

		function aiString() {

			this.data = [];
			this.toString = function () {

				var str = '';
				this.data.forEach(function (i) {

					str += String.fromCharCode(i);
				});
				return str.replace(/[^\x20-\x7E]+/g, '');
			};
		}

		function aiVectorKey() {

			this.mTime = 0;
			this.mValue = null;
		}

		function aiQuatKey() {

			this.mTime = 0;
			this.mValue = null;
		}

		function aiNode() {

			this.mName = '';
			this.mTransformation = [];
			this.mNumChildren = 0;
			this.mNumMeshes = 0;
			this.mMeshes = [];
			this.mChildren = [];
			this.toTHREE = function (scene) {

				if (this.threeNode) return this.threeNode;
				var o = new THREE.Object3D();
				o.name = this.mName;
				o.matrix = this.mTransformation.toTHREE();

				for (var i = 0; i < this.mChildren.length; i++) {

					o.add(this.mChildren[i].toTHREE(scene));
				}

				for (var i = 0; i < this.mMeshes.length; i++) {

					o.add(scene.mMeshes[this.mMeshes[i]].toTHREE(scene));
				}

				this.threeNode = o;
				//o.matrixAutoUpdate = false;
				o.matrix.decompose(o.position, o.quaternion, o.scale);
				return o;
			};
		}

		function aiBone() {

			this.mName = '';
			this.mNumWeights = 0;
			this.mOffsetMatrix = 0;
		}

		function aiMaterialProperty() {

			this.mKey = "";
			this.mSemantic = 0;
			this.mIndex = 0;
			this.mData = [];
			this.mDataLength = 0;
			this.mType = 0;
			this.dataAsColor = function () {

				var array = new Uint8Array(this.mData).buffer;
				var reader = new DataView(array);
				var r = reader.getFloat32(0, true);
				var g = reader.getFloat32(4, true);
				var b = reader.getFloat32(8, true);
				//var a = reader.getFloat32(12, true);
				return new THREE.Color(r, g, b);
			};

			this.dataAsFloat = function () {

				var array = new Uint8Array(this.mData).buffer;
				var reader = new DataView(array);
				var r = reader.getFloat32(0, true);
				return r;
			};

			this.dataAsBool = function () {

				var array = new Uint8Array(this.mData).buffer;
				var reader = new DataView(array);
				var r = reader.getFloat32(0, true);
				return !!r;
			};

			this.dataAsString = function () {

				var s = new aiString();
				s.data = this.mData;
				return s.toString();
			};

			this.dataAsMap = function () {

				var s = new aiString();
				s.data = this.mData;
				var path = s.toString();
				path = path.replace(/\\/g, '/');

				if (path.indexOf('/') != -1) {

					path = path.substr(path.lastIndexOf('/') + 1);
				}

				return textureLoader.load(path);
			};
		}
		var namePropMapping = {

			"?mat.name": "name",
			"$mat.shadingm": "shading",
			"$mat.twosided": "twoSided",
			"$mat.wireframe": "wireframe",
			"$clr.ambient": "ambient",
			"$clr.diffuse": "color",
			"$clr.specular": "specular",
			"$clr.emissive": "emissive",
			"$clr.transparent": "transparent",
			"$clr.reflective": "reflect",
			"$mat.shininess": "shininess",
			"$mat.reflectivity": "reflectivity",
			"$mat.refracti": "refraction",
			"$tex.file": "map"

		};

		var nameTypeMapping = {

			"?mat.name": "string",
			"$mat.shadingm": "bool",
			"$mat.twosided": "bool",
			"$mat.wireframe": "bool",
			"$clr.ambient": "color",
			"$clr.diffuse": "color",
			"$clr.specular": "color",
			"$clr.emissive": "color",
			"$clr.transparent": "color",
			"$clr.reflective": "color",
			"$mat.shininess": "float",
			"$mat.reflectivity": "float",
			"$mat.refracti": "float",
			"$tex.file": "map"

		};

		function aiMaterial() {

			this.mNumAllocated = 0;
			this.mNumProperties = 0;
			this.mProperties = [];
			this.toTHREE = function (scene) {

				var name = this.mProperties[0].dataAsString();
				var mat = new THREE.MeshPhongMaterial();

				for (var i = 0; i < this.mProperties.length; i++) {

					if (nameTypeMapping[this.mProperties[i].mKey] == 'float') mat[namePropMapping[this.mProperties[i].mKey]] = this.mProperties[i].dataAsFloat();
					if (nameTypeMapping[this.mProperties[i].mKey] == 'color') mat[namePropMapping[this.mProperties[i].mKey]] = this.mProperties[i].dataAsColor();
					if (nameTypeMapping[this.mProperties[i].mKey] == 'bool') mat[namePropMapping[this.mProperties[i].mKey]] = this.mProperties[i].dataAsBool();
					if (nameTypeMapping[this.mProperties[i].mKey] == 'string') mat[namePropMapping[this.mProperties[i].mKey]] = this.mProperties[i].dataAsString();
					if (nameTypeMapping[this.mProperties[i].mKey] == 'map') {

						var prop = this.mProperties[i];
						if (prop.mSemantic == aiTextureType_DIFFUSE) mat.map = this.mProperties[i].dataAsMap();
						if (prop.mSemantic == aiTextureType_NORMALS) mat.normalMap = this.mProperties[i].dataAsMap();
						if (prop.mSemantic == aiTextureType_LIGHTMAP) mat.lightMap = this.mProperties[i].dataAsMap();
						if (prop.mSemantic == aiTextureType_OPACITY) mat.alphaMap = this.mProperties[i].dataAsMap();
					}
				}

				mat.ambient.r = .53;
				mat.ambient.g = .53;
				mat.ambient.b = .53;
				mat.color.r = 1;
				mat.color.g = 1;
				mat.color.b = 1;
				return mat;
			};
		}

		function veclerp(v1, v2, l) {

			var v = new THREE.Vector3();
			var lm1 = 1 - l;
			v.x = v1.x * l + v2.x * lm1;
			v.y = v1.y * l + v2.y * lm1;
			v.z = v1.z * l + v2.z * lm1;
			return v;
		}

		function quatlerp(q1, q2, l) {

			return q1.clone().slerp(q2, 1 - l);
		}

		function sampleTrack(keys, time, lne, lerp) {

			if (keys.length == 1) return keys[0].mValue.toTHREE();

			var dist = Infinity;
			var key = null;
			var nextKey = null;

			for (var i = 0; i < keys.length; i++) {

				var timeDist = Math.abs(keys[i].mTime - time);

				if (timeDist < dist && keys[i].mTime <= time) {

					dist = timeDist;
					key = keys[i];
					nextKey = keys[i + 1];
				}
			}

			if (!key) {

				return null;
			} else if (nextKey) {

				var dT = nextKey.mTime - key.mTime;
				var T = key.mTime - time;
				var l = T / dT;

				return lerp(key.mValue.toTHREE(), nextKey.mValue.toTHREE(), l);
			} else {

				nextKey = keys[0].clone();
				nextKey.mTime += lne;

				var dT = nextKey.mTime - key.mTime;
				var T = key.mTime - time;
				var l = T / dT;

				return lerp(key.mValue.toTHREE(), nextKey.mValue.toTHREE(), l);
			}
		}

		function aiNodeAnim() {

			this.mNodeName = "";
			this.mNumPositionKeys = 0;
			this.mNumRotationKeys = 0;
			this.mNumScalingKeys = 0;
			this.mPositionKeys = [];
			this.mRotationKeys = [];
			this.mScalingKeys = [];
			this.mPreState = "";
			this.mPostState = "";
			this.init = function (tps) {

				if (!tps) tps = 1;

				function t(t) {

					t.mTime /= tps;
				}

				this.mPositionKeys.forEach(t);
				this.mRotationKeys.forEach(t);
				this.mScalingKeys.forEach(t);
			};

			this.sortKeys = function () {

				function comp(a, b) {

					return a.mTime - b.mTime;
				}

				this.mPositionKeys.sort(comp);
				this.mRotationKeys.sort(comp);
				this.mScalingKeys.sort(comp);
			};

			this.getLength = function () {

				return Math.max(Math.max.apply(null, this.mPositionKeys.map(function (a) {

					return a.mTime;
				})), Math.max.apply(null, this.mRotationKeys.map(function (a) {

					return a.mTime;
				})), Math.max.apply(null, this.mScalingKeys.map(function (a) {

					return a.mTime;
				})));
			};

			this.toTHREE = function (o, tps) {

				this.sortKeys();
				var length = this.getLength();
				var track = new Virtulous.KeyFrameTrack();

				for (var i = 0; i < length; i += .05) {

					var matrix = new THREE.Matrix4();
					var time = i;
					var pos = sampleTrack(this.mPositionKeys, time, length, veclerp);
					var scale = sampleTrack(this.mScalingKeys, time, length, veclerp);
					var rotation = sampleTrack(this.mRotationKeys, time, length, quatlerp);
					matrix.compose(pos, rotation, scale);

					var key = new Virtulous.KeyFrame(time, matrix);
					track.addKey(key);
				}

				track.target = o.findNode(this.mNodeName).toTHREE();

				var tracks = [track];

				if (o.nodeToBoneMap[this.mNodeName]) {

					for (var i = 0; i < o.nodeToBoneMap[this.mNodeName].length; i++) {

						var t2 = track.clone();
						t2.target = o.nodeToBoneMap[this.mNodeName][i];
						tracks.push(t2);
					}
				}

				return tracks;
			};
		}

		function aiAnimation() {

			this.mName = "";
			this.mDuration = 0;
			this.mTicksPerSecond = 0;
			this.mNumChannels = 0;
			this.mChannels = [];
			this.toTHREE = function (root) {

				var animationHandle = new Virtulous.Animation();

				for (var i in this.mChannels) {

					this.mChannels[i].init(this.mTicksPerSecond);

					var tracks = this.mChannels[i].toTHREE(root);

					for (var j in tracks) {

						tracks[j].init();
						animationHandle.addTrack(tracks[j]);
					}
				}

				animationHandle.length = Math.max.apply(null, animationHandle.tracks.map(function (e) {

					return e.length;
				}));
				return animationHandle;
			};
		}

		function aiTexture() {

			this.mWidth = 0;
			this.mHeight = 0;
			this.texAchFormatHint = [];
			this.pcData = [];
		}

		function aiLight() {

			this.mName = '';
			this.mType = 0;
			this.mAttenuationConstant = 0;
			this.mAttenuationLinear = 0;
			this.mAttenuationQuadratic = 0;
			this.mAngleInnerCone = 0;
			this.mAngleOuterCone = 0;
			this.mColorDiffuse = null;
			this.mColorSpecular = null;
			this.mColorAmbient = null;
		}

		function aiCamera() {

			this.mName = '';
			this.mPosition = null;
			this.mLookAt = null;
			this.mUp = null;
			this.mHorizontalFOV = 0;
			this.mClipPlaneNear = 0;
			this.mClipPlaneFar = 0;
			this.mAspect = 0;
		}

		function aiScene() {

			this.mFlags = 0;
			this.mNumMeshes = 0;
			this.mNumMaterials = 0;
			this.mNumAnimations = 0;
			this.mNumTextures = 0;
			this.mNumLights = 0;
			this.mNumCameras = 0;
			this.mRootNode = null;
			this.mMeshes = [];
			this.mMaterials = [];
			this.mAnimations = [];
			this.mLights = [];
			this.mCameras = [];
			this.nodeToBoneMap = {};
			this.findNode = function (name, root) {

				if (!root) {

					root = this.mRootNode;
				}

				if (root.mName == name) {

					return root;
				}

				for (var i = 0; i < root.mChildren.length; i++) {

					var ret = this.findNode(name, root.mChildren[i]);
					if (ret) return ret;
				}

				return null;
			};

			this.toTHREE = function () {

				this.nodeCount = 0;

				markBones(this);

				var o = this.mRootNode.toTHREE(this);

				for (var i in this.mMeshes) {
					this.mMeshes[i].hookupSkeletons(this, o);
				}if (this.mAnimations.length > 0) {

					var a = this.mAnimations[0].toTHREE(this);
				}

				return { object: o, animation: a };
			};
		}

		function aiMatrix4() {

			this.elements = [[], [], [], []];
			this.toTHREE = function () {

				var m = new THREE.Matrix4();

				for (var i = 0; i < 4; ++i) {

					for (var i2 = 0; i2 < 4; ++i2) {

						m.elements[i * 4 + i2] = this.elements[i2][i];
					}
				}

				return m;
			};
		}

		var littleEndian = true;

		function readFloat(dataview) {

			var val = dataview.getFloat32(dataview.readOffset, littleEndian);
			dataview.readOffset += 4;
			return val;
		}

		function Read_double(dataview) {

			var val = dataview.getFloat64(dataview.readOffset, littleEndian);
			dataview.readOffset += 8;
			return val;
		}

		function Read_uint8_t(dataview) {

			var val = dataview.getUint8(dataview.readOffset);
			dataview.readOffset += 1;
			return val;
		}

		function Read_uint16_t(dataview) {

			var val = dataview.getUint16(dataview.readOffset, littleEndian);
			dataview.readOffset += 2;
			return val;
		}

		function Read_unsigned_int(dataview) {

			var val = dataview.getUint32(dataview.readOffset, littleEndian);
			dataview.readOffset += 4;
			return val;
		}

		function Read_uint32_t(dataview) {

			var val = dataview.getUint32(dataview.readOffset, littleEndian);
			dataview.readOffset += 4;
			return val;
		}

		function Read_aiVector3D(stream) {

			var v = new aiVector3D();
			v.x = readFloat(stream);
			v.y = readFloat(stream);
			v.z = readFloat(stream);
			return v;
		}

		function Read_aiVector2D(stream) {

			var v = new aiVector2D();
			v.x = readFloat(stream);
			v.y = readFloat(stream);
			return v;
		}

		function Read_aiVector4D(stream) {

			var v = new aiVector4D();
			v.w = readFloat(stream);
			v.x = readFloat(stream);
			v.y = readFloat(stream);
			v.z = readFloat(stream);
			return v;
		}

		function Read_aiColor3D(stream) {

			var c = new aiColor3D();
			c.r = readFloat(stream);
			c.g = readFloat(stream);
			c.b = readFloat(stream);
			return c;
		}

		function Read_aiColor4D(stream) {

			var c = new aiColor4D();
			c.r = readFloat(stream);
			c.g = readFloat(stream);
			c.b = readFloat(stream);
			c.a = readFloat(stream);
			return c;
		}

		function Read_aiQuaternion(stream) {

			var v = new aiQuaternion();
			v.w = readFloat(stream);
			v.x = readFloat(stream);
			v.y = readFloat(stream);
			v.z = readFloat(stream);
			return v;
		}

		function Read_aiString(stream) {

			var s = new aiString();
			var stringlengthbytes = Read_unsigned_int(stream);
			stream.ReadBytes(s.data, 1, stringlengthbytes);
			return s.toString();
		}

		function Read_aiVertexWeight(stream) {

			var w = new aiVertexWeight();
			w.mVertexId = Read_unsigned_int(stream);
			w.mWeight = readFloat(stream);
			return w;
		}

		function Read_aiMatrix4x4(stream) {

			var m = new aiMatrix4();

			for (var i = 0; i < 4; ++i) {

				for (var i2 = 0; i2 < 4; ++i2) {

					m.elements[i][i2] = readFloat(stream);
				}
			}

			return m;
		}

		function Read_aiVectorKey(stream) {

			var v = new aiVectorKey();
			v.mTime = Read_double(stream);
			v.mValue = Read_aiVector3D(stream);
			return v;
		}

		function Read_aiQuatKey(stream) {

			var v = new aiQuatKey();
			v.mTime = Read_double(stream);
			v.mValue = Read_aiQuaternion(stream);
			return v;
		}

		function ReadArray(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read(stream);
			}
		}

		function ReadArray_aiVector2D(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read_aiVector2D(stream);
			}
		}

		function ReadArray_aiVector3D(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read_aiVector3D(stream);
			}
		}

		function ReadArray_aiVector4D(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read_aiVector4D(stream);
			}
		}

		function ReadArray_aiVertexWeight(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read_aiVertexWeight(stream);
			}
		}

		function ReadArray_aiColor4D(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read_aiColor4D(stream);
			}
		}

		function ReadArray_aiVectorKey(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read_aiVectorKey(stream);
			}
		}

		function ReadArray_aiQuatKey(stream, data, size) {

			for (var i = 0; i < size; i++) {
				data[i] = Read_aiQuatKey(stream);
			}
		}

		function ReadBounds(stream, T /*p*/, n) {

			// not sure what to do here, the data isn't really useful.
			return stream.Seek(sizeof(T) * n, aiOrigin_CUR);
		}

		function ai_assert(bool) {

			if (!bool) throw "asset failed";
		}

		function ReadBinaryNode(stream, parent, depth) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AINODE);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			var node = new aiNode();
			node.mParent = parent;
			node.mDepth = depth;
			node.mName = Read_aiString(stream);
			node.mTransformation = Read_aiMatrix4x4(stream);
			node.mNumChildren = Read_unsigned_int(stream);
			node.mNumMeshes = Read_unsigned_int(stream);

			if (node.mNumMeshes) {

				node.mMeshes = [];

				for (var i = 0; i < node.mNumMeshes; ++i) {

					node.mMeshes[i] = Read_unsigned_int(stream);
				}
			}

			if (node.mNumChildren) {

				node.mChildren = [];

				for (var i = 0; i < node.mNumChildren; ++i) {

					var node2 = ReadBinaryNode(stream, node, depth++);
					node.mChildren[i] = node2;
				}
			}

			return node;
		}

		// -----------------------------------------------------------------------------------

		function ReadBinaryBone(stream, b) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AIBONE);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			b.mName = Read_aiString(stream);
			b.mNumWeights = Read_unsigned_int(stream);
			b.mOffsetMatrix = Read_aiMatrix4x4(stream);
			// for the moment we write dumb min/max values for the bones, too.
			// maybe I'll add a better, hash-like solution later
			if (shortened) {

				ReadBounds(stream, b.mWeights, b.mNumWeights);
			} else {

				// else write as usual

				b.mWeights = [];
				ReadArray_aiVertexWeight(stream, b.mWeights, b.mNumWeights);
			}

			return b;
		}

		function ReadBinaryMesh(stream, mesh) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AIMESH);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			mesh.mPrimitiveTypes = Read_unsigned_int(stream);
			mesh.mNumVertices = Read_unsigned_int(stream);
			mesh.mNumFaces = Read_unsigned_int(stream);
			mesh.mNumBones = Read_unsigned_int(stream);
			mesh.mMaterialIndex = Read_unsigned_int(stream);
			mesh.mNumUVComponents = [];
			// first of all, write bits for all existent vertex components
			var c = Read_unsigned_int(stream);

			if (c & ASSBIN_MESH_HAS_POSITIONS) {

				if (shortened) {

					ReadBounds(stream, mesh.mVertices, mesh.mNumVertices);
				} else {

					// else write as usual

					mesh.mVertices = [];
					mesh.mVertexBuffer = stream.subArray32(stream.readOffset, stream.readOffset + mesh.mNumVertices * 3 * 4);
					stream.Seek(mesh.mNumVertices * 3 * 4, aiOrigin_CUR);
				}
			}

			if (c & ASSBIN_MESH_HAS_NORMALS) {

				if (shortened) {

					ReadBounds(stream, mesh.mNormals, mesh.mNumVertices);
				} else {

					// else write as usual

					mesh.mNormals = [];
					mesh.mNormalBuffer = stream.subArray32(stream.readOffset, stream.readOffset + mesh.mNumVertices * 3 * 4);
					stream.Seek(mesh.mNumVertices * 3 * 4, aiOrigin_CUR);
				}
			}

			if (c & ASSBIN_MESH_HAS_TANGENTS_AND_BITANGENTS) {

				if (shortened) {

					ReadBounds(stream, mesh.mTangents, mesh.mNumVertices);
					ReadBounds(stream, mesh.mBitangents, mesh.mNumVertices);
				} else {

					// else write as usual

					mesh.mTangents = [];
					mesh.mTangentBuffer = stream.subArray32(stream.readOffset, stream.readOffset + mesh.mNumVertices * 3 * 4);
					stream.Seek(mesh.mNumVertices * 3 * 4, aiOrigin_CUR);
					mesh.mBitangents = [];
					mesh.mBitangentBuffer = stream.subArray32(stream.readOffset, stream.readOffset + mesh.mNumVertices * 3 * 4);
					stream.Seek(mesh.mNumVertices * 3 * 4, aiOrigin_CUR);
				}
			}

			for (var n = 0; n < AI_MAX_NUMBER_OF_COLOR_SETS; ++n) {

				if (!(c & ASSBIN_MESH_HAS_COLOR(n))) break;

				if (shortened) {

					ReadBounds(stream, mesh.mColors[n], mesh.mNumVertices);
				} else {

					// else write as usual

					mesh.mColors[n] = [];
					mesh.mColorBuffer = stream.subArray32(stream.readOffset, stream.readOffset + mesh.mNumVertices * 4 * 4);
					stream.Seek(mesh.mNumVertices * 4 * 4, aiOrigin_CUR);
				}
			}

			mesh.mTexCoordsBuffers = [];

			for (var n = 0; n < AI_MAX_NUMBER_OF_TEXTURECOORDS; ++n) {

				if (!(c & ASSBIN_MESH_HAS_TEXCOORD(n))) break;

				// write number of UV components
				mesh.mNumUVComponents[n] = Read_unsigned_int(stream);

				if (shortened) {

					ReadBounds(stream, mesh.mTextureCoords[n], mesh.mNumVertices);
				} else {

					// else write as usual

					mesh.mTextureCoords[n] = [];
					//note that assbin always writes 3d texcoords
					mesh.mTexCoordsBuffers[n] = [];

					for (var uv = 0; uv < mesh.mNumVertices; uv++) {

						mesh.mTexCoordsBuffers[n].push(readFloat(stream));
						mesh.mTexCoordsBuffers[n].push(readFloat(stream));
						readFloat(stream);
					}
				}
			}
			// write faces. There are no floating-point calculations involved
			// in these, so we can write a simple hash over the face data
			// to the dump file. We generate a single 32 Bit hash for 512 faces
			// using Assimp's standard hashing function.
			if (shortened) {

				Read_unsigned_int(stream);
			} else {

				// else write as usual

				// if there are less than 2^16 vertices, we can simply use 16 bit integers ...
				mesh.mFaces = [];

				var indexCounter = 0;
				mesh.mIndexArray = [];

				for (var i = 0; i < mesh.mNumFaces; ++i) {

					var f = mesh.mFaces[i] = new aiFace();
					// BOOST_STATIC_ASSERT(AI_MAX_FACE_INDICES <= 0xffff);
					f.mNumIndices = Read_uint16_t(stream);
					f.mIndices = [];

					for (var a = 0; a < f.mNumIndices; ++a) {

						if (mesh.mNumVertices < 1 << 16) {

							f.mIndices[a] = Read_uint16_t(stream);
						} else {

							f.mIndices[a] = Read_unsigned_int(stream);
						}
					}

					if (f.mNumIndices === 3) {

						mesh.mIndexArray.push(f.mIndices[0]);
						mesh.mIndexArray.push(f.mIndices[1]);
						mesh.mIndexArray.push(f.mIndices[2]);
					} else if (f.mNumIndices === 4) {

						mesh.mIndexArray.push(f.mIndices[0]);
						mesh.mIndexArray.push(f.mIndices[1]);
						mesh.mIndexArray.push(f.mIndices[2]);
						mesh.mIndexArray.push(f.mIndices[2]);
						mesh.mIndexArray.push(f.mIndices[3]);
						mesh.mIndexArray.push(f.mIndices[0]);
					} else {

						throw new Error("Sorry, can't currently triangulate polys. Use the triangulate preprocessor in Assimp.");
					}
				}
			}
			// write bones
			if (mesh.mNumBones) {

				mesh.mBones = [];

				for (var a = 0; a < mesh.mNumBones; ++a) {

					mesh.mBones[a] = new aiBone();
					ReadBinaryBone(stream, mesh.mBones[a]);
				}
			}
		}

		function ReadBinaryMaterialProperty(stream, prop) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AIMATERIALPROPERTY);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			prop.mKey = Read_aiString(stream);
			prop.mSemantic = Read_unsigned_int(stream);
			prop.mIndex = Read_unsigned_int(stream);
			prop.mDataLength = Read_unsigned_int(stream);
			prop.mType = Read_unsigned_int(stream);
			prop.mData = [];
			stream.ReadBytes(prop.mData, 1, prop.mDataLength);
		}

		// -----------------------------------------------------------------------------------

		function ReadBinaryMaterial(stream, mat) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AIMATERIAL);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			mat.mNumAllocated = mat.mNumProperties = Read_unsigned_int(stream);

			if (mat.mNumProperties) {

				if (mat.mProperties) {

					delete mat.mProperties;
				}

				mat.mProperties = [];

				for (var i = 0; i < mat.mNumProperties; ++i) {

					mat.mProperties[i] = new aiMaterialProperty();
					ReadBinaryMaterialProperty(stream, mat.mProperties[i]);
				}
			}
		}
		// -----------------------------------------------------------------------------------
		function ReadBinaryNodeAnim(stream, nd) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AINODEANIM);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			nd.mNodeName = Read_aiString(stream);
			nd.mNumPositionKeys = Read_unsigned_int(stream);
			nd.mNumRotationKeys = Read_unsigned_int(stream);
			nd.mNumScalingKeys = Read_unsigned_int(stream);
			nd.mPreState = Read_unsigned_int(stream);
			nd.mPostState = Read_unsigned_int(stream);

			if (nd.mNumPositionKeys) {

				if (shortened) {

					ReadBounds(stream, nd.mPositionKeys, nd.mNumPositionKeys);
				} else {

					// else write as usual

					nd.mPositionKeys = [];
					ReadArray_aiVectorKey(stream, nd.mPositionKeys, nd.mNumPositionKeys);
				}
			}

			if (nd.mNumRotationKeys) {

				if (shortened) {

					ReadBounds(stream, nd.mRotationKeys, nd.mNumRotationKeys);
				} else {

					// else write as usual

					nd.mRotationKeys = [];
					ReadArray_aiQuatKey(stream, nd.mRotationKeys, nd.mNumRotationKeys);
				}
			}

			if (nd.mNumScalingKeys) {

				if (shortened) {

					ReadBounds(stream, nd.mScalingKeys, nd.mNumScalingKeys);
				} else {

					// else write as usual

					nd.mScalingKeys = [];
					ReadArray_aiVectorKey(stream, nd.mScalingKeys, nd.mNumScalingKeys);
				}
			}
		}
		// -----------------------------------------------------------------------------------
		function ReadBinaryAnim(stream, anim) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AIANIMATION);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			anim.mName = Read_aiString(stream);
			anim.mDuration = Read_double(stream);
			anim.mTicksPerSecond = Read_double(stream);
			anim.mNumChannels = Read_unsigned_int(stream);

			if (anim.mNumChannels) {

				anim.mChannels = [];

				for (var a = 0; a < anim.mNumChannels; ++a) {

					anim.mChannels[a] = new aiNodeAnim();
					ReadBinaryNodeAnim(stream, anim.mChannels[a]);
				}
			}
		}

		function ReadBinaryTexture(stream, tex) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AITEXTURE);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			tex.mWidth = Read_unsigned_int(stream);
			tex.mHeight = Read_unsigned_int(stream);
			stream.ReadBytes(tex.achFormatHint, 1, 4);

			if (!shortened) {

				if (!tex.mHeight) {

					tex.pcData = [];
					stream.ReadBytes(tex.pcData, 1, tex.mWidth);
				} else {

					tex.pcData = [];
					stream.ReadBytes(tex.pcData, 1, tex.mWidth * tex.mHeight * 4);
				}
			}
		}
		// -----------------------------------------------------------------------------------
		function ReadBinaryLight(stream, l) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AILIGHT);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			l.mName = Read_aiString(stream);
			l.mType = Read_unsigned_int(stream);

			if (l.mType != aiLightSource_DIRECTIONAL) {

				l.mAttenuationConstant = readFloat(stream);
				l.mAttenuationLinear = readFloat(stream);
				l.mAttenuationQuadratic = readFloat(stream);
			}

			l.mColorDiffuse = Read_aiColor3D(stream);
			l.mColorSpecular = Read_aiColor3D(stream);
			l.mColorAmbient = Read_aiColor3D(stream);

			if (l.mType == aiLightSource_SPOT) {

				l.mAngleInnerCone = readFloat(stream);
				l.mAngleOuterCone = readFloat(stream);
			}
		}
		// -----------------------------------------------------------------------------------
		function ReadBinaryCamera(stream, cam) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AICAMERA);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			cam.mName = Read_aiString(stream);
			cam.mPosition = Read_aiVector3D(stream);
			cam.mLookAt = Read_aiVector3D(stream);
			cam.mUp = Read_aiVector3D(stream);
			cam.mHorizontalFOV = readFloat(stream);
			cam.mClipPlaneNear = readFloat(stream);
			cam.mClipPlaneFar = readFloat(stream);
			cam.mAspect = readFloat(stream);
		}

		function ReadBinaryScene(stream, scene) {

			var chunkID = Read_uint32_t(stream);
			ai_assert(chunkID == ASSBIN_CHUNK_AISCENE);
			/*uint32_t size =*/
			Read_uint32_t(stream);
			scene.mFlags = Read_unsigned_int(stream);
			scene.mNumMeshes = Read_unsigned_int(stream);
			scene.mNumMaterials = Read_unsigned_int(stream);
			scene.mNumAnimations = Read_unsigned_int(stream);
			scene.mNumTextures = Read_unsigned_int(stream);
			scene.mNumLights = Read_unsigned_int(stream);
			scene.mNumCameras = Read_unsigned_int(stream);
			// Read node graph
			scene.mRootNode = new aiNode();
			scene.mRootNode = ReadBinaryNode(stream, null, 0);
			// Read all meshes
			if (scene.mNumMeshes) {

				scene.mMeshes = [];

				for (var i = 0; i < scene.mNumMeshes; ++i) {

					scene.mMeshes[i] = new aiMesh();
					ReadBinaryMesh(stream, scene.mMeshes[i]);
				}
			}
			// Read materials
			if (scene.mNumMaterials) {

				scene.mMaterials = [];

				for (var i = 0; i < scene.mNumMaterials; ++i) {

					scene.mMaterials[i] = new aiMaterial();
					ReadBinaryMaterial(stream, scene.mMaterials[i]);
				}
			}
			// Read all animations
			if (scene.mNumAnimations) {

				scene.mAnimations = [];

				for (var i = 0; i < scene.mNumAnimations; ++i) {

					scene.mAnimations[i] = new aiAnimation();
					ReadBinaryAnim(stream, scene.mAnimations[i]);
				}
			}
			// Read all textures
			if (scene.mNumTextures) {

				scene.mTextures = [];

				for (var i = 0; i < scene.mNumTextures; ++i) {

					scene.mTextures[i] = new aiTexture();
					ReadBinaryTexture(stream, scene.mTextures[i]);
				}
			}
			// Read lights
			if (scene.mNumLights) {

				scene.mLights = [];

				for (var i = 0; i < scene.mNumLights; ++i) {

					scene.mLights[i] = new aiLight();
					ReadBinaryLight(stream, scene.mLights[i]);
				}
			}
			// Read cameras
			if (scene.mNumCameras) {

				scene.mCameras = [];

				for (var i = 0; i < scene.mNumCameras; ++i) {

					scene.mCameras[i] = new aiCamera();
					ReadBinaryCamera(stream, scene.mCameras[i]);
				}
			}
		}
		var aiOrigin_CUR = 0;
		var aiOrigin_BEG = 1;

		function extendStream(stream) {

			stream.readOffset = 0;
			stream.Seek = function (off, ori) {

				if (ori == aiOrigin_CUR) {

					stream.readOffset += off;
				}
				if (ori == aiOrigin_BEG) {

					stream.readOffset = off;
				}
			};

			stream.ReadBytes = function (buff, size, n) {

				var bytes = size * n;
				for (var i = 0; i < bytes; i++) {
					buff[i] = Read_uint8_t(this);
				}
			};

			stream.subArray32 = function (start, end) {

				var buff = this.buffer;
				var newbuff = buff.slice(start, end);
				return new Float32Array(newbuff);
			};

			stream.subArrayUint16 = function (start, end) {

				var buff = this.buffer;
				var newbuff = buff.slice(start, end);
				return new Uint16Array(newbuff);
			};

			stream.subArrayUint8 = function (start, end) {

				var buff = this.buffer;
				var newbuff = buff.slice(start, end);
				return new Uint8Array(newbuff);
			};

			stream.subArrayUint32 = function (start, end) {

				var buff = this.buffer;
				var newbuff = buff.slice(start, end);
				return new Uint32Array(newbuff);
			};
		}

		var shortened, compressed;

		function InternReadFile(pFiledata) {

			var pScene = new aiScene();
			var stream = new DataView(pFiledata);
			extendStream(stream);
			stream.Seek(44, aiOrigin_CUR); // signature
			/*unsigned int versionMajor =*/
			var versionMajor = Read_unsigned_int(stream);
			/*unsigned int versionMinor =*/
			var versionMinor = Read_unsigned_int(stream);
			/*unsigned int versionRevision =*/
			var versionRevision = Read_unsigned_int(stream);
			/*unsigned int compileFlags =*/
			var compileFlags = Read_unsigned_int(stream);
			shortened = Read_uint16_t(stream) > 0;
			compressed = Read_uint16_t(stream) > 0;
			if (shortened) throw "Shortened binaries are not supported!";
			stream.Seek(256, aiOrigin_CUR); // original filename
			stream.Seek(128, aiOrigin_CUR); // options
			stream.Seek(64, aiOrigin_CUR); // padding
			if (compressed) {

				var uncompressedSize = Read_uint32_t(stream);
				var compressedSize = stream.FileSize() - stream.Tell();
				var compressedData = [];
				stream.Read(compressedData, 1, compressedSize);
				var uncompressedData = [];
				uncompress(uncompressedData, uncompressedSize, compressedData, compressedSize);
				var buff = new ArrayBuffer(uncompressedData);
				ReadBinaryScene(buff, pScene);
			} else {

				ReadBinaryScene(stream, pScene);
				return pScene.toTHREE();
			}
		}

		return InternReadFile(buffer);
	}

};

exports.default = THREE.AssimpLoader;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Author: Pierre Lepers
 * Date: 09/12/2013 17:21
 */

(function () {

	var UNCOMPRESSED = 0,
	    DEFLATE = 1,
	    LZMA = 2,
	    AWD_FIELD_INT8 = 1,
	    AWD_FIELD_INT16 = 2,
	    AWD_FIELD_INT32 = 3,
	    AWD_FIELD_UINT8 = 4,
	    AWD_FIELD_UINT16 = 5,
	    AWD_FIELD_UINT32 = 6,
	    AWD_FIELD_FLOAT32 = 7,
	    AWD_FIELD_FLOAT64 = 8,
	    AWD_FIELD_BOOL = 21,
	    AWD_FIELD_COLOR = 22,
	    AWD_FIELD_BADDR = 23,
	    AWD_FIELD_STRING = 31,
	    AWD_FIELD_BYTEARRAY = 32,
	    AWD_FIELD_VECTOR2x1 = 41,
	    AWD_FIELD_VECTOR3x1 = 42,
	    AWD_FIELD_VECTOR4x1 = 43,
	    AWD_FIELD_MTX3x2 = 44,
	    AWD_FIELD_MTX3x3 = 45,
	    AWD_FIELD_MTX4x3 = 46,
	    AWD_FIELD_MTX4x4 = 47,
	    BOOL = 21,
	    COLOR = 22,
	    BADDR = 23,
	    INT8 = 1,
	    INT16 = 2,
	    INT32 = 3,
	    UINT8 = 4,
	    UINT16 = 5,
	    UINT32 = 6,
	    FLOAT32 = 7,
	    FLOAT64 = 8;

	var littleEndian = true;

	function Block() {

		this.id = 0;
		this.data = null;
	}

	function AWDProperties() {}

	AWDProperties.prototype = {
		set: function set(key, value) {

			this[key] = value;
		},

		get: function get(key, fallback) {

			if (this.hasOwnProperty(key)) {

				return this[key];
			} else {

				return fallback;
			}
		}
	};

	THREE.AWDLoader = function (manager) {

		this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

		this.trunk = new THREE.Object3D();

		this.materialFactory = undefined;

		this._url = '';
		this._baseDir = '';

		this._data = undefined;
		this._ptr = 0;

		this._version = [];
		this._streaming = false;
		this._optimized_for_accuracy = false;
		this._compression = 0;
		this._bodylen = 0xFFFFFFFF;

		this._blocks = [new Block()];

		this._accuracyMatrix = false;
		this._accuracyGeo = false;
		this._accuracyProps = false;
	};

	THREE.AWDLoader.prototype = {

		constructor: THREE.AWDLoader,

		load: function load(url, onLoad, onProgress, onError) {

			var scope = this;

			this._url = url;
			this._baseDir = url.substr(0, url.lastIndexOf('/') + 1);

			var loader = new THREE.FileLoader(this.manager);
			loader.setResponseType('arraybuffer');
			loader.load(url, function (text) {

				onLoad(scope.parse(text));
			}, onProgress, onError);
		},

		parse: function parse(data) {

			var blen = data.byteLength;

			this._ptr = 0;
			this._data = new DataView(data);

			this._parseHeader();

			if (this._compression != 0) {

				console.error('compressed AWD not supported');
			}

			if (!this._streaming && this._bodylen != data.byteLength - this._ptr) {

				console.error('AWDLoader: body len does not match file length', this._bodylen, blen - this._ptr);
			}

			while (this._ptr < blen) {

				this.parseNextBlock();
			}

			return this.trunk;
		},

		parseNextBlock: function parseNextBlock() {

			var assetData,
			    ns,
			    type,
			    len,
			    block,
			    blockId = this.readU32(),
			    ns = this.readU8(),
			    type = this.readU8(),
			    flags = this.readU8(),
			    len = this.readU32();

			switch (type) {

				case 1:
					assetData = this.parseMeshData(len);
					break;

				case 22:
					assetData = this.parseContainer(len);
					break;

				case 23:
					assetData = this.parseMeshInstance(len);
					break;

				case 81:
					assetData = this.parseMaterial(len);
					break;

				case 82:
					assetData = this.parseTexture(len);
					break;

				case 101:
					assetData = this.parseSkeleton(len);
					break;

				//  case 111:
				//    assetData = this.parseMeshPoseAnimation(len, true);
				//    break;

				case 112:
					assetData = this.parseMeshPoseAnimation(len, false);
					break;

				case 113:
					assetData = this.parseVertexAnimationSet(len);
					break;

				case 102:
					assetData = this.parseSkeletonPose(len);
					break;

				case 103:
					assetData = this.parseSkeletonAnimation(len);
					break;

				case 122:
					assetData = this.parseAnimatorSet(len);
					break;

				// case 121:
				//  assetData = parseUVAnimation(len);
				//  break;

				default:
					//debug('Ignoring block!',type, len);
					this._ptr += len;
					break;

			}

			// Store block reference for later use
			this._blocks[blockId] = block = new Block();
			block.data = assetData;
			block.id = blockId;
		},

		_parseHeader: function _parseHeader() {

			var version = this._version,
			    awdmagic = this.readU8() << 16 | this.readU8() << 8 | this.readU8();

			if (awdmagic != 4282180) throw new Error("AWDLoader - bad magic");

			version[0] = this.readU8();
			version[1] = this.readU8();

			var flags = this.readU16();

			this._streaming = (flags & 0x1) == 0x1;

			if (version[0] === 2 && version[1] === 1) {

				this._accuracyMatrix = (flags & 0x2) === 0x2;
				this._accuracyGeo = (flags & 0x4) === 0x4;
				this._accuracyProps = (flags & 0x8) === 0x8;
			}

			this._geoNrType = this._accuracyGeo ? FLOAT64 : FLOAT32;
			this._matrixNrType = this._accuracyMatrix ? FLOAT64 : FLOAT32;
			this._propsNrType = this._accuracyProps ? FLOAT64 : FLOAT32;

			this._optimized_for_accuracy = (flags & 0x2) === 0x2;

			this._compression = this.readU8();
			this._bodylen = this.readU32();
		},

		parseContainer: function parseContainer(len) {

			var parent,
			    ctr = new THREE.Object3D(),
			    par_id = this.readU32(),
			    mtx = this.parseMatrix4();

			ctr.name = this.readUTF();
			ctr.applyMatrix(mtx);

			parent = this._blocks[par_id].data || this.trunk;
			parent.add(ctr);

			this.parseProperties({
				1: this._matrixNrType,
				2: this._matrixNrType,
				3: this._matrixNrType,
				4: UINT8
			});

			ctr.extra = this.parseUserAttributes();

			return ctr;
		},

		parseMeshInstance: function parseMeshInstance(len) {

			var name, mesh, geometries, meshLen, meshes, par_id, data_id, mtx, materials, mat, mat_id, num_materials, parent, i;

			par_id = this.readU32();
			mtx = this.parseMatrix4();
			name = this.readUTF();
			data_id = this.readU32();
			num_materials = this.readU16();

			geometries = this.getBlock(data_id);

			materials = [];

			for (i = 0; i < num_materials; i++) {

				mat_id = this.readU32();
				mat = this.getBlock(mat_id);
				materials.push(mat);
			}

			meshLen = geometries.length;
			meshes = [];

			// TODO : BufferGeometry don't support "geometryGroups" for now.
			// so we create sub meshes for each groups
			if (meshLen > 1) {

				mesh = new THREE.Object3D();
				for (i = 0; i < meshLen; i++) {

					var sm = new THREE.Mesh(geometries[i]);
					meshes.push(sm);
					mesh.add(sm);
				}
			} else {

				mesh = new THREE.Mesh(geometries[0]);
				meshes.push(mesh);
			}

			mesh.applyMatrix(mtx);
			mesh.name = name;

			parent = this.getBlock(par_id) || this.trunk;
			parent.add(mesh);

			var matLen = materials.length;
			var maxLen = Math.max(meshLen, matLen);
			for (i = 0; i < maxLen; i++) {
				meshes[i % meshLen].material = materials[i % matLen];
			} // Ignore for now
			this.parseProperties(null);
			mesh.extra = this.parseUserAttributes();

			return mesh;
		},

		parseMaterial: function parseMaterial(len) {

			var name, type, props, mat, attributes, finalize, num_methods, methods_parsed;

			name = this.readUTF();
			type = this.readU8();
			num_methods = this.readU8();

			//log( "AWDLoader parseMaterial ",name )

			// Read material numerical properties
			// (1=color, 2=bitmap url, 11=alpha_blending, 12=alpha_threshold, 13=repeat)
			props = this.parseProperties({
				1: AWD_FIELD_INT32,
				2: AWD_FIELD_BADDR,
				11: AWD_FIELD_BOOL,
				12: AWD_FIELD_FLOAT32,
				13: AWD_FIELD_BOOL
			});

			methods_parsed = 0;

			while (methods_parsed < num_methods) {

				var method_type = this.readU16();
				this.parseProperties(null);
				this.parseUserAttributes();
			}

			attributes = this.parseUserAttributes();

			if (this.materialFactory !== undefined) {

				mat = this.materialFactory(name);
				if (mat) return mat;
			}

			mat = new THREE.MeshPhongMaterial();

			if (type === 1) {

				// Color material
				mat.color.setHex(props.get(1, 0xcccccc));
			} else if (type === 2) {

				// Bitmap material
				var tex_addr = props.get(2, 0);
				mat.map = this.getBlock(tex_addr);
			}

			mat.extra = attributes;
			mat.alphaThreshold = props.get(12, 0.0);
			mat.repeat = props.get(13, false);

			return mat;
		},

		parseTexture: function parseTexture(len) {

			var name = this.readUTF(),
			    type = this.readU8(),
			    asset,
			    data_len;

			// External
			if (type === 0) {

				data_len = this.readU32();
				var url = this.readUTFBytes(data_len);
				console.log(url);

				asset = this.loadTexture(url);
			} else {}
			// embed texture not supported

			// Ignore for now
			this.parseProperties(null);

			this.parseUserAttributes();
			return asset;
		},

		loadTexture: function loadTexture(url) {

			var tex = new THREE.Texture();

			var loader = new THREE.ImageLoader(this.manager);

			loader.load(this._baseDir + url, function (image) {

				tex.image = image;
				tex.needsUpdate = true;
			});

			return tex;
		},

		parseSkeleton: function parseSkeleton(len) {

			// Array<Bone>
			var name = this.readUTF(),
			    num_joints = this.readU16(),
			    skeleton = [],
			    joints_parsed = 0;

			this.parseProperties(null);

			while (joints_parsed < num_joints) {

				var joint, ibp;

				// Ignore joint id
				this.readU16();

				joint = new THREE.Bone();
				joint.parent = this.readU16() - 1; // 0=null in AWD
				joint.name = this.readUTF();

				ibp = this.parseMatrix4();
				joint.skinMatrix = ibp;

				// Ignore joint props/attributes for now
				this.parseProperties(null);
				this.parseUserAttributes();

				skeleton.push(joint);
				joints_parsed++;
			}

			// Discard attributes for now
			this.parseUserAttributes();

			return skeleton;
		},

		parseSkeletonPose: function parseSkeletonPose(blockID) {

			var name = this.readUTF();

			var num_joints = this.readU16();
			this.parseProperties(null);

			// debug( 'parse Skeleton Pose. joints : ' + num_joints);

			var pose = [];

			var joints_parsed = 0;

			while (joints_parsed < num_joints) {

				var joint_pose;

				var has_transform; //:uint;
				var mtx_data;

				has_transform = this.readU8();

				if (has_transform === 1) {

					mtx_data = this.parseMatrix4();
				} else {

					mtx_data = new THREE.Matrix4();
				}
				pose[joints_parsed] = mtx_data;
				joints_parsed++;
			}

			// Skip attributes for now
			this.parseUserAttributes();

			return pose;
		},

		parseSkeletonAnimation: function parseSkeletonAnimation(blockID) {

			var frame_dur;
			var pose_addr;
			var pose;

			var name = this.readUTF();

			var clip = [];

			var num_frames = this.readU16();
			this.parseProperties(null);

			var frames_parsed = 0;
			var returnedArray;

			// debug( 'parse Skeleton Animation. frames : ' + num_frames);

			while (frames_parsed < num_frames) {

				pose_addr = this.readU32();
				frame_dur = this.readU16();

				pose = this._blocks[pose_addr].data;
				// debug( 'pose address ',pose[2].elements[12],pose[2].elements[13],pose[2].elements[14] );
				clip.push({
					pose: pose,
					duration: frame_dur
				});

				frames_parsed++;
			}

			if (clip.length === 0) {

				// debug("Could not this SkeletonClipNode, because no Frames where set.");
				return;
			}
			// Ignore attributes for now
			this.parseUserAttributes();
			return clip;
		},

		parseVertexAnimationSet: function parseVertexAnimationSet(len) {

			var poseBlockAdress,
			    name = this.readUTF(),
			    num_frames = this.readU16(),
			    props = this.parseProperties({ 1: UINT16 }),
			    frames_parsed = 0,
			    skeletonFrames = [];

			while (frames_parsed < num_frames) {

				poseBlockAdress = this.readU32();
				skeletonFrames.push(this._blocks[poseBlockAdress].data);
				frames_parsed++;
			}

			this.parseUserAttributes();

			return skeletonFrames;
		},

		parseAnimatorSet: function parseAnimatorSet(len) {

			var targetMesh;

			var animSetBlockAdress; //:int

			var targetAnimationSet; //:AnimationSetBase;
			var outputString = ""; //:String = "";
			var name = this.readUTF();
			var type = this.readU16();

			var props = this.parseProperties({ 1: BADDR });

			animSetBlockAdress = this.readU32();
			var targetMeshLength = this.readU16();

			var meshAdresses = []; //:Vector.<uint> = new Vector.<uint>;

			for (var i = 0; i < targetMeshLength; i++) {
				meshAdresses.push(this.readU32());
			}var activeState = this.readU16();
			var autoplay = Boolean(this.readU8());
			this.parseUserAttributes();
			this.parseUserAttributes();

			var returnedArray;
			var targetMeshes = []; //:Vector.<Mesh> = new Vector.<Mesh>;

			for (i = 0; i < meshAdresses.length; i++) {

				//      returnedArray = getAssetByID(meshAdresses[i], [AssetType.MESH]);
				//      if (returnedArray[0])
				targetMeshes.push(this._blocks[meshAdresses[i]].data);
			}

			targetAnimationSet = this._blocks[animSetBlockAdress].data;
			var thisAnimator;

			if (type == 1) {

				thisAnimator = {
					animationSet: targetAnimationSet,
					skeleton: this._blocks[props.get(1, 0)].data
				};
			} else if (type == 2) {
				// debug( "vertex Anim???");
			}

			for (i = 0; i < targetMeshes.length; i++) {

				targetMeshes[i].animator = thisAnimator;
			}
			// debug("Parsed a Animator: Name = " + name);

			return thisAnimator;
		},

		parseMeshData: function parseMeshData(len) {

			var name = this.readUTF(),
			    num_subs = this.readU16(),
			    geom,
			    subs_parsed = 0,
			    buffer,
			    skinW,
			    skinI,
			    geometries = [];

			// Ignore for now
			this.parseProperties({ 1: this._geoNrType, 2: this._geoNrType });

			// Loop through sub meshes
			while (subs_parsed < num_subs) {

				var sm_len, sm_end, attrib;

				geom = new THREE.BufferGeometry();
				geom.name = name;
				geometries.push(geom);

				sm_len = this.readU32();
				sm_end = this._ptr + sm_len;

				// Ignore for now
				this.parseProperties({ 1: this._geoNrType, 2: this._geoNrType });

				// Loop through data streams
				while (this._ptr < sm_end) {

					var idx = 0,
					    str_type = this.readU8(),
					    str_ftype = this.readU8(),
					    str_len = this.readU32(),
					    str_end = str_len + this._ptr;

					if (str_type === 1) {

						// VERTICES

						buffer = new Float32Array(str_len / 12 * 3);
						attrib = new THREE.BufferAttribute(buffer, 3);

						geom.addAttribute('position', attrib);
						idx = 0;

						while (this._ptr < str_end) {

							buffer[idx] = -this.readF32();
							buffer[idx + 1] = this.readF32();
							buffer[idx + 2] = this.readF32();
							idx += 3;
						}
					} else if (str_type === 2) {

						// INDICES

						buffer = new Uint16Array(str_len / 2);
						attrib = new THREE.BufferAttribute(buffer, 1);
						geom.setIndex(attrib);

						idx = 0;

						while (this._ptr < str_end) {

							buffer[idx + 1] = this.readU16();
							buffer[idx] = this.readU16();
							buffer[idx + 2] = this.readU16();
							idx += 3;
						}
					} else if (str_type === 3) {

						// UVS

						buffer = new Float32Array(str_len / 8 * 2);
						attrib = new THREE.BufferAttribute(buffer, 2);

						geom.addAttribute('uv', attrib);
						idx = 0;

						while (this._ptr < str_end) {

							buffer[idx] = this.readF32();
							buffer[idx + 1] = 1.0 - this.readF32();
							idx += 2;
						}
					} else if (str_type === 4) {

						// NORMALS

						buffer = new Float32Array(str_len / 12 * 3);
						attrib = new THREE.BufferAttribute(buffer, 3);
						geom.addAttribute('normal', attrib);
						idx = 0;

						while (this._ptr < str_end) {

							buffer[idx] = -this.readF32();
							buffer[idx + 1] = this.readF32();
							buffer[idx + 2] = this.readF32();
							idx += 3;
						}
					} else {

						this._ptr = str_end;
					}
				}

				this.parseUserAttributes();

				geom.computeBoundingSphere();
				subs_parsed++;
			}

			//geom.computeFaceNormals();

			this.parseUserAttributes();
			//finalizeAsset(geom, name);

			return geometries;
		},

		parseMeshPoseAnimation: function parseMeshPoseAnimation(len, poseOnly) {

			var num_frames = 1,
			    num_submeshes,
			    frames_parsed,
			    subMeshParsed,
			    frame_dur,
			    x,
			    y,
			    z,
			    str_len,
			    str_end,
			    geom,
			    subGeom,
			    idx = 0,
			    clip = {},
			    indices,
			    verts,
			    num_Streams,
			    streamsParsed,
			    streamtypes = [],
			    props,
			    thisGeo,
			    name = this.readUTF(),
			    geoAdress = this.readU32();

			var mesh = this.getBlock(geoAdress);

			if (mesh === null) {

				console.log("parseMeshPoseAnimation target mesh not found at:", geoAdress);
				return;
			}

			geom = mesh.geometry;
			geom.morphTargets = [];

			if (!poseOnly) num_frames = this.readU16();

			num_submeshes = this.readU16();
			num_Streams = this.readU16();

			// debug("VA num_frames : ", num_frames );
			// debug("VA num_submeshes : ", num_submeshes );
			// debug("VA numstreams : ", num_Streams );

			streamsParsed = 0;
			while (streamsParsed < num_Streams) {

				streamtypes.push(this.readU16());
				streamsParsed++;
			}
			props = this.parseProperties({ 1: BOOL, 2: BOOL });

			clip.looping = props.get(1, true);
			clip.stitchFinalFrame = props.get(2, false);

			frames_parsed = 0;

			while (frames_parsed < num_frames) {

				frame_dur = this.readU16();
				subMeshParsed = 0;

				while (subMeshParsed < num_submeshes) {

					streamsParsed = 0;
					str_len = this.readU32();
					str_end = this._ptr + str_len;

					while (streamsParsed < num_Streams) {

						if (streamtypes[streamsParsed] === 1) {

							//geom.addAttribute( 'morphTarget'+frames_parsed, Float32Array, str_len/12, 3 );
							var buffer = new Float32Array(str_len / 4);
							geom.morphTargets.push({
								array: buffer
							});

							//buffer = geom.attributes['morphTarget'+frames_parsed].array
							idx = 0;

							while (this._ptr < str_end) {

								buffer[idx] = this.readF32();
								buffer[idx + 1] = this.readF32();
								buffer[idx + 2] = this.readF32();
								idx += 3;
							}

							subMeshParsed++;
						} else this._ptr = str_end;
						streamsParsed++;
					}
				}

				frames_parsed++;
			}

			this.parseUserAttributes();

			return null;
		},

		getBlock: function getBlock(id) {

			return this._blocks[id].data;
		},

		parseMatrix4: function parseMatrix4() {

			var mtx = new THREE.Matrix4();
			var e = mtx.elements;

			e[0] = this.readF32();
			e[1] = this.readF32();
			e[2] = this.readF32();
			e[3] = 0.0;
			//e[3] = 0.0;

			e[4] = this.readF32();
			e[5] = this.readF32();
			e[6] = this.readF32();
			//e[7] = this.readF32();
			e[7] = 0.0;

			e[8] = this.readF32();
			e[9] = this.readF32();
			e[10] = this.readF32();
			//e[11] = this.readF32();
			e[11] = 0.0;

			e[12] = -this.readF32();
			e[13] = this.readF32();
			e[14] = this.readF32();
			//e[15] = this.readF32();
			e[15] = 1.0;
			return mtx;
		},

		parseProperties: function parseProperties(expected) {

			var list_len = this.readU32();
			var list_end = this._ptr + list_len;

			var props = new AWDProperties();

			if (expected) {

				while (this._ptr < list_end) {

					var key = this.readU16();
					var len = this.readU32();
					var type;

					if (expected.hasOwnProperty(key)) {

						type = expected[key];
						props.set(key, this.parseAttrValue(type, len));
					} else {

						this._ptr += len;
					}
				}
			}

			return props;
		},

		parseUserAttributes: function parseUserAttributes() {

			// skip for now
			this._ptr = this.readU32() + this._ptr;
			return null;
		},

		parseAttrValue: function parseAttrValue(type, len) {

			var elem_len;
			var read_func;

			switch (type) {

				case AWD_FIELD_INT8:
					elem_len = 1;
					read_func = this.readI8;
					break;

				case AWD_FIELD_INT16:
					elem_len = 2;
					read_func = this.readI16;
					break;

				case AWD_FIELD_INT32:
					elem_len = 4;
					read_func = this.readI32;
					break;

				case AWD_FIELD_BOOL:
				case AWD_FIELD_UINT8:
					elem_len = 1;
					read_func = this.readU8;
					break;

				case AWD_FIELD_UINT16:
					elem_len = 2;
					read_func = this.readU16;
					break;

				case AWD_FIELD_UINT32:
				case AWD_FIELD_BADDR:
					elem_len = 4;
					read_func = this.readU32;
					break;

				case AWD_FIELD_FLOAT32:
					elem_len = 4;
					read_func = this.readF32;
					break;

				case AWD_FIELD_FLOAT64:
					elem_len = 8;
					read_func = this.readF64;
					break;

				case AWD_FIELD_VECTOR2x1:
				case AWD_FIELD_VECTOR3x1:
				case AWD_FIELD_VECTOR4x1:
				case AWD_FIELD_MTX3x2:
				case AWD_FIELD_MTX3x3:
				case AWD_FIELD_MTX4x3:
				case AWD_FIELD_MTX4x4:
					elem_len = 8;
					read_func = this.readF64;
					break;

			}

			if (elem_len < len) {

				var list;
				var num_read;
				var num_elems;

				list = [];
				num_read = 0;
				num_elems = len / elem_len;

				while (num_read < num_elems) {

					list.push(read_func.call(this));
					num_read++;
				}

				return list;
			} else {

				return read_func.call(this);
			}
		},

		readU8: function readU8() {

			return this._data.getUint8(this._ptr++);
		},
		readI8: function readI8() {

			return this._data.getInt8(this._ptr++);
		},
		readU16: function readU16() {

			var a = this._data.getUint16(this._ptr, littleEndian);
			this._ptr += 2;
			return a;
		},
		readI16: function readI16() {

			var a = this._data.getInt16(this._ptr, littleEndian);
			this._ptr += 2;
			return a;
		},
		readU32: function readU32() {

			var a = this._data.getUint32(this._ptr, littleEndian);
			this._ptr += 4;
			return a;
		},
		readI32: function readI32() {

			var a = this._data.getInt32(this._ptr, littleEndian);
			this._ptr += 4;
			return a;
		},
		readF32: function readF32() {

			var a = this._data.getFloat32(this._ptr, littleEndian);
			this._ptr += 4;
			return a;
		},
		readF64: function readF64() {

			var a = this._data.getFloat64(this._ptr, littleEndian);
			this._ptr += 8;
			return a;
		},

		/**
  * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
  * @param {Array.<number>} bytes UTF-8 byte array.
  * @return {string} 16-bit Unicode string.
  */
		readUTF: function readUTF() {

			var len = this.readU16();
			return this.readUTFBytes(len);
		},

		/**
   * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
   * @param {Array.<number>} bytes UTF-8 byte array.
   * @return {string} 16-bit Unicode string.
   */
		readUTFBytes: function readUTFBytes(len) {

			// TODO(user): Use native implementations if/when available
			var out = [],
			    c = 0;

			while (out.length < len) {

				var c1 = this._data.getUint8(this._ptr++, littleEndian);
				if (c1 < 128) {

					out[c++] = String.fromCharCode(c1);
				} else if (c1 > 191 && c1 < 224) {

					var c2 = this._data.getUint8(this._ptr++, littleEndian);
					out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
				} else {

					var c2 = this._data.getUint8(this._ptr++, littleEndian);
					var c3 = this._data.getUint8(this._ptr++, littleEndian);
					out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
				}
			}
			return out.join('');
		}

	};
})();

exports.default = THREE.AWDLoader;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */

THREE.BabylonLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.BabylonLoader.prototype = {

	constructor: THREE.BabylonLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.load(url, function (text) {

			onLoad(scope.parse(JSON.parse(text)));
		}, onProgress, onError);
	},

	parse: function parse(json) {

		function parseMaterials(json) {

			var materials = {};

			for (var i = 0, l = json.materials.length; i < l; i++) {

				var data = json.materials[i];

				var material = new THREE.MeshPhongMaterial();
				material.name = data.name;
				material.color.fromArray(data.diffuse);
				material.emissive.fromArray(data.emissive);
				material.specular.fromArray(data.specular);
				material.shininess = data.specularPower;
				material.opacity = data.alpha;

				materials[data.id] = material;
			}

			if (json.multiMaterials) {

				for (var i = 0, l = json.multiMaterials.length; i < l; i++) {

					var data = json.multiMaterials[i];

					console.warn('THREE.BabylonLoader: Multi materials not yet supported.');

					materials[data.id] = new THREE.MeshPhongMaterial();
				}
			}

			return materials;
		}

		function parseGeometry(json) {

			var geometry = new THREE.BufferGeometry();

			var indices = json.indices;
			var positions = json.positions;
			var normals = json.normals;
			var uvs = json.uvs;

			// indices

			geometry.setIndex(indices);

			// positions

			for (var j = 2, jl = positions.length; j < jl; j += 3) {

				positions[j] = -positions[j];
			}

			geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

			// normals

			if (normals) {

				for (var j = 2, jl = normals.length; j < jl; j += 3) {

					normals[j] = -normals[j];
				}

				geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
			}

			// uvs

			if (uvs) {

				geometry.addAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
			}

			// offsets

			var subMeshes = json.subMeshes;

			if (subMeshes) {

				for (var j = 0, jl = subMeshes.length; j < jl; j++) {

					var subMesh = subMeshes[j];

					geometry.addGroup(subMesh.indexStart, subMesh.indexCount);
				}
			}

			return geometry;
		}

		function parseObjects(json, materials) {

			var objects = {};
			var scene = new THREE.Scene();

			var cameras = json.cameras;

			for (var i = 0, l = cameras.length; i < l; i++) {

				var data = cameras[i];

				var camera = new THREE.PerspectiveCamera(data.fov / Math.PI * 180, 1.33, data.minZ, data.maxZ);

				camera.name = data.name;
				camera.position.fromArray(data.position);
				if (data.rotation) camera.rotation.fromArray(data.rotation);

				objects[data.id] = camera;
			}

			var lights = json.lights;

			for (var i = 0, l = lights.length; i < l; i++) {

				var data = lights[i];

				var light;

				switch (data.type) {

					case 0:
						light = new THREE.PointLight();
						break;

					case 1:
						light = new THREE.DirectionalLight();
						break;

					case 2:
						light = new THREE.SpotLight();
						break;

					case 3:
						light = new THREE.HemisphereLight();
						break;

				}

				light.name = data.name;
				if (data.position) light.position.set(data.position[0], data.position[1], -data.position[2]);
				light.color.fromArray(data.diffuse);
				if (data.groundColor) light.groundColor.fromArray(data.groundColor);
				if (data.intensity) light.intensity = data.intensity;

				objects[data.id] = light;

				scene.add(light);
			}

			var meshes = json.meshes;

			for (var i = 0, l = meshes.length; i < l; i++) {

				var data = meshes[i];

				var object;

				if (data.indices) {

					var geometry = parseGeometry(data);

					object = new THREE.Mesh(geometry, materials[data.materialId]);
				} else {

					object = new THREE.Group();
				}

				object.name = data.name;
				object.position.set(data.position[0], data.position[1], -data.position[2]);
				object.rotation.fromArray(data.rotation);
				if (data.rotationQuaternion) object.quaternion.fromArray(data.rotationQuaternion);
				object.scale.fromArray(data.scaling);
				// object.visible = data.isVisible;

				if (data.parentId) {

					objects[data.parentId].add(object);
				} else {

					scene.add(object);
				}

				objects[data.id] = object;
			}

			return scene;
		}

		var materials = parseMaterials(json);
		var scene = parseObjects(json, materials);

		return scene;
	}

};

exports.default = THREE.BabylonLoader;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.BinaryLoader = function (manager) {

	if (typeof manager === 'boolean') {

		console.warn('THREE.BinaryLoader: showStatus parameter has been removed from constructor.');
		manager = undefined;
	}

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.BinaryLoader.prototype = {

	constructor: THREE.BinaryLoader,

	crossOrigin: 'Anonymous',

	// Load models generated by slim OBJ converter with BINARY option (converter_obj_three_slim.py -t binary)
	//  - binary models consist of two files: JS and BIN
	//  - parameters
	//		- url (required)
	//		- callback (required)
	//		- texturePath (optional: if not specified, textures will be assumed to be in the same folder as JS model file)
	//		- binaryPath (optional: if not specified, binary file will be assumed to be in the same folder as JS model file)
	load: function load(url, onLoad, onProgress, onError) {

		// todo: unify load API to for easier SceneLoader use

		var texturePath = this.texturePath || THREE.LoaderUtils.extractUrlBase(url);
		var binaryPath = this.binaryPath || THREE.LoaderUtils.extractUrlBase(url);

		// #1 load JS part via web worker

		var scope = this;

		var jsonloader = new THREE.FileLoader(this.manager);
		jsonloader.load(url, function (data) {

			var json = JSON.parse(data);

			var bufferUrl = binaryPath + json.buffers;

			var bufferLoader = new THREE.FileLoader(scope.manager);
			bufferLoader.setResponseType('arraybuffer');
			bufferLoader.load(bufferUrl, function (bufData) {

				// IEWEBGL needs this ???
				//buffer = ( new Uint8Array( xhr.responseBody ) ).buffer;

				//// iOS and other XMLHttpRequest level 1 ???

				scope.parse(bufData, onLoad, texturePath, json.materials);
			}, onProgress, onError);
		}, onProgress, onError);
	},

	setBinaryPath: function setBinaryPath(value) {

		this.binaryPath = value;
	},

	setCrossOrigin: function setCrossOrigin(value) {

		this.crossOrigin = value;
	},

	setTexturePath: function setTexturePath(value) {

		this.texturePath = value;
	},

	parse: function parse(data, callback, texturePath, jsonMaterials) {

		var Model = function Model() {

			var scope = this,
			    currentOffset = 0,
			    md,
			    normals = [],
			    uvs = [],
			    start_tri_flat,
			    start_tri_smooth,
			    start_tri_flat_uv,
			    start_tri_smooth_uv,
			    start_quad_flat,
			    start_quad_smooth,
			    start_quad_flat_uv,
			    start_quad_smooth_uv,
			    tri_size,
			    quad_size,
			    len_tri_flat,
			    len_tri_smooth,
			    len_tri_flat_uv,
			    len_tri_smooth_uv,
			    len_quad_flat,
			    len_quad_smooth,
			    len_quad_flat_uv;

			THREE.Geometry.call(this);

			md = parseMetaData(data, currentOffset);

			currentOffset += md.header_bytes;
			/*
   		md.vertex_index_bytes = Uint32Array.BYTES_PER_ELEMENT;
   		md.material_index_bytes = Uint16Array.BYTES_PER_ELEMENT;
   		md.normal_index_bytes = Uint32Array.BYTES_PER_ELEMENT;
   		md.uv_index_bytes = Uint32Array.BYTES_PER_ELEMENT;
   */
			// buffers sizes

			tri_size = md.vertex_index_bytes * 3 + md.material_index_bytes;
			quad_size = md.vertex_index_bytes * 4 + md.material_index_bytes;

			len_tri_flat = md.ntri_flat * tri_size;
			len_tri_smooth = md.ntri_smooth * (tri_size + md.normal_index_bytes * 3);
			len_tri_flat_uv = md.ntri_flat_uv * (tri_size + md.uv_index_bytes * 3);
			len_tri_smooth_uv = md.ntri_smooth_uv * (tri_size + md.normal_index_bytes * 3 + md.uv_index_bytes * 3);

			len_quad_flat = md.nquad_flat * quad_size;
			len_quad_smooth = md.nquad_smooth * (quad_size + md.normal_index_bytes * 4);
			len_quad_flat_uv = md.nquad_flat_uv * (quad_size + md.uv_index_bytes * 4);

			// read buffers

			currentOffset += init_vertices(currentOffset);

			currentOffset += init_normals(currentOffset);
			currentOffset += handlePadding(md.nnormals * 3);

			currentOffset += init_uvs(currentOffset);

			start_tri_flat = currentOffset;
			start_tri_smooth = start_tri_flat + len_tri_flat + handlePadding(md.ntri_flat * 2);
			start_tri_flat_uv = start_tri_smooth + len_tri_smooth + handlePadding(md.ntri_smooth * 2);
			start_tri_smooth_uv = start_tri_flat_uv + len_tri_flat_uv + handlePadding(md.ntri_flat_uv * 2);

			start_quad_flat = start_tri_smooth_uv + len_tri_smooth_uv + handlePadding(md.ntri_smooth_uv * 2);
			start_quad_smooth = start_quad_flat + len_quad_flat + handlePadding(md.nquad_flat * 2);
			start_quad_flat_uv = start_quad_smooth + len_quad_smooth + handlePadding(md.nquad_smooth * 2);
			start_quad_smooth_uv = start_quad_flat_uv + len_quad_flat_uv + handlePadding(md.nquad_flat_uv * 2);

			// have to first process faces with uvs
			// so that face and uv indices match

			init_triangles_flat_uv(start_tri_flat_uv);
			init_triangles_smooth_uv(start_tri_smooth_uv);

			init_quads_flat_uv(start_quad_flat_uv);
			init_quads_smooth_uv(start_quad_smooth_uv);

			// now we can process untextured faces

			init_triangles_flat(start_tri_flat);
			init_triangles_smooth(start_tri_smooth);

			init_quads_flat(start_quad_flat);
			init_quads_smooth(start_quad_smooth);

			this.computeFaceNormals();

			function handlePadding(n) {

				return n % 4 ? 4 - n % 4 : 0;
			}

			function parseMetaData(data, offset) {

				var metaData = {

					'signature': parseString(data, offset, 12),
					'header_bytes': parseUChar8(data, offset + 12),

					'vertex_coordinate_bytes': parseUChar8(data, offset + 13),
					'normal_coordinate_bytes': parseUChar8(data, offset + 14),
					'uv_coordinate_bytes': parseUChar8(data, offset + 15),

					'vertex_index_bytes': parseUChar8(data, offset + 16),
					'normal_index_bytes': parseUChar8(data, offset + 17),
					'uv_index_bytes': parseUChar8(data, offset + 18),
					'material_index_bytes': parseUChar8(data, offset + 19),

					'nvertices': parseUInt32(data, offset + 20),
					'nnormals': parseUInt32(data, offset + 20 + 4 * 1),
					'nuvs': parseUInt32(data, offset + 20 + 4 * 2),

					'ntri_flat': parseUInt32(data, offset + 20 + 4 * 3),
					'ntri_smooth': parseUInt32(data, offset + 20 + 4 * 4),
					'ntri_flat_uv': parseUInt32(data, offset + 20 + 4 * 5),
					'ntri_smooth_uv': parseUInt32(data, offset + 20 + 4 * 6),

					'nquad_flat': parseUInt32(data, offset + 20 + 4 * 7),
					'nquad_smooth': parseUInt32(data, offset + 20 + 4 * 8),
					'nquad_flat_uv': parseUInt32(data, offset + 20 + 4 * 9),
					'nquad_smooth_uv': parseUInt32(data, offset + 20 + 4 * 10)

				};
				/*
    			console.log( "signature: " + metaData.signature );
    				console.log( "header_bytes: " + metaData.header_bytes );
    			console.log( "vertex_coordinate_bytes: " + metaData.vertex_coordinate_bytes );
    			console.log( "normal_coordinate_bytes: " + metaData.normal_coordinate_bytes );
    			console.log( "uv_coordinate_bytes: " + metaData.uv_coordinate_bytes );
    				console.log( "vertex_index_bytes: " + metaData.vertex_index_bytes );
    			console.log( "normal_index_bytes: " + metaData.normal_index_bytes );
    			console.log( "uv_index_bytes: " + metaData.uv_index_bytes );
    			console.log( "material_index_bytes: " + metaData.material_index_bytes );
    				console.log( "nvertices: " + metaData.nvertices );
    			console.log( "nnormals: " + metaData.nnormals );
    			console.log( "nuvs: " + metaData.nuvs );
    				console.log( "ntri_flat: " + metaData.ntri_flat );
    			console.log( "ntri_smooth: " + metaData.ntri_smooth );
    			console.log( "ntri_flat_uv: " + metaData.ntri_flat_uv );
    			console.log( "ntri_smooth_uv: " + metaData.ntri_smooth_uv );
    				console.log( "nquad_flat: " + metaData.nquad_flat );
    			console.log( "nquad_smooth: " + metaData.nquad_smooth );
    			console.log( "nquad_flat_uv: " + metaData.nquad_flat_uv );
    			console.log( "nquad_smooth_uv: " + metaData.nquad_smooth_uv );
    				var total = metaData.header_bytes
    					  + metaData.nvertices * metaData.vertex_coordinate_bytes * 3
    					  + metaData.nnormals * metaData.normal_coordinate_bytes * 3
    					  + metaData.nuvs * metaData.uv_coordinate_bytes * 2
    					  + metaData.ntri_flat * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes )
    					  + metaData.ntri_smooth * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.normal_index_bytes*3 )
    					  + metaData.ntri_flat_uv * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.uv_index_bytes*3 )
    					  + metaData.ntri_smooth_uv * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.normal_index_bytes*3 + metaData.uv_index_bytes*3 )
    					  + metaData.nquad_flat * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes )
    					  + metaData.nquad_smooth * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.normal_index_bytes*4 )
    					  + metaData.nquad_flat_uv * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.uv_index_bytes*4 )
    					  + metaData.nquad_smooth_uv * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.normal_index_bytes*4 + metaData.uv_index_bytes*4 );
    			console.log( "total bytes: " + total );
    */

				return metaData;
			}

			function parseString(data, offset, length) {

				return THREE.LoaderUtils.decodeText(new Uint8Array(data, offset, length));
			}

			function parseUChar8(data, offset) {

				var charArray = new Uint8Array(data, offset, 1);

				return charArray[0];
			}

			function parseUInt32(data, offset) {

				var intArray = new Uint32Array(data, offset, 1);

				return intArray[0];
			}

			function init_vertices(start) {

				var nElements = md.nvertices;

				var coordArray = new Float32Array(data, start, nElements * 3);

				var i, x, y, z;

				for (i = 0; i < nElements; i++) {

					x = coordArray[i * 3];
					y = coordArray[i * 3 + 1];
					z = coordArray[i * 3 + 2];

					scope.vertices.push(new THREE.Vector3(x, y, z));
				}

				return nElements * 3 * Float32Array.BYTES_PER_ELEMENT;
			}

			function init_normals(start) {

				var nElements = md.nnormals;

				if (nElements) {

					var normalArray = new Int8Array(data, start, nElements * 3);

					var i, x, y, z;

					for (i = 0; i < nElements; i++) {

						x = normalArray[i * 3];
						y = normalArray[i * 3 + 1];
						z = normalArray[i * 3 + 2];

						normals.push(x / 127, y / 127, z / 127);
					}
				}

				return nElements * 3 * Int8Array.BYTES_PER_ELEMENT;
			}

			function init_uvs(start) {

				var nElements = md.nuvs;

				if (nElements) {

					var uvArray = new Float32Array(data, start, nElements * 2);

					var i, u, v;

					for (i = 0; i < nElements; i++) {

						u = uvArray[i * 2];
						v = uvArray[i * 2 + 1];

						uvs.push(u, v);
					}
				}

				return nElements * 2 * Float32Array.BYTES_PER_ELEMENT;
			}

			function init_uvs3(nElements, offset) {

				var i, uva, uvb, uvc, u1, u2, u3, v1, v2, v3;

				var uvIndexBuffer = new Uint32Array(data, offset, 3 * nElements);

				for (i = 0; i < nElements; i++) {

					uva = uvIndexBuffer[i * 3];
					uvb = uvIndexBuffer[i * 3 + 1];
					uvc = uvIndexBuffer[i * 3 + 2];

					u1 = uvs[uva * 2];
					v1 = uvs[uva * 2 + 1];

					u2 = uvs[uvb * 2];
					v2 = uvs[uvb * 2 + 1];

					u3 = uvs[uvc * 2];
					v3 = uvs[uvc * 2 + 1];

					scope.faceVertexUvs[0].push([new THREE.Vector2(u1, v1), new THREE.Vector2(u2, v2), new THREE.Vector2(u3, v3)]);
				}
			}

			function init_uvs4(nElements, offset) {

				var i, uva, uvb, uvc, uvd, u1, u2, u3, u4, v1, v2, v3, v4;

				var uvIndexBuffer = new Uint32Array(data, offset, 4 * nElements);

				for (i = 0; i < nElements; i++) {

					uva = uvIndexBuffer[i * 4];
					uvb = uvIndexBuffer[i * 4 + 1];
					uvc = uvIndexBuffer[i * 4 + 2];
					uvd = uvIndexBuffer[i * 4 + 3];

					u1 = uvs[uva * 2];
					v1 = uvs[uva * 2 + 1];

					u2 = uvs[uvb * 2];
					v2 = uvs[uvb * 2 + 1];

					u3 = uvs[uvc * 2];
					v3 = uvs[uvc * 2 + 1];

					u4 = uvs[uvd * 2];
					v4 = uvs[uvd * 2 + 1];

					scope.faceVertexUvs[0].push([new THREE.Vector2(u1, v1), new THREE.Vector2(u2, v2), new THREE.Vector2(u4, v4)]);

					scope.faceVertexUvs[0].push([new THREE.Vector2(u2, v2), new THREE.Vector2(u3, v3), new THREE.Vector2(u4, v4)]);
				}
			}

			function init_faces3_flat(nElements, offsetVertices, offsetMaterials) {

				var i, a, b, c, m;

				var vertexIndexBuffer = new Uint32Array(data, offsetVertices, 3 * nElements);
				var materialIndexBuffer = new Uint16Array(data, offsetMaterials, nElements);

				for (i = 0; i < nElements; i++) {

					a = vertexIndexBuffer[i * 3];
					b = vertexIndexBuffer[i * 3 + 1];
					c = vertexIndexBuffer[i * 3 + 2];

					m = materialIndexBuffer[i];

					scope.faces.push(new THREE.Face3(a, b, c, null, null, m));
				}
			}

			function init_faces4_flat(nElements, offsetVertices, offsetMaterials) {

				var i, a, b, c, d, m;

				var vertexIndexBuffer = new Uint32Array(data, offsetVertices, 4 * nElements);
				var materialIndexBuffer = new Uint16Array(data, offsetMaterials, nElements);

				for (i = 0; i < nElements; i++) {

					a = vertexIndexBuffer[i * 4];
					b = vertexIndexBuffer[i * 4 + 1];
					c = vertexIndexBuffer[i * 4 + 2];
					d = vertexIndexBuffer[i * 4 + 3];

					m = materialIndexBuffer[i];

					scope.faces.push(new THREE.Face3(a, b, d, null, null, m));
					scope.faces.push(new THREE.Face3(b, c, d, null, null, m));
				}
			}

			function init_faces3_smooth(nElements, offsetVertices, offsetNormals, offsetMaterials) {

				var i, a, b, c, m;
				var na, nb, nc;

				var vertexIndexBuffer = new Uint32Array(data, offsetVertices, 3 * nElements);
				var normalIndexBuffer = new Uint32Array(data, offsetNormals, 3 * nElements);
				var materialIndexBuffer = new Uint16Array(data, offsetMaterials, nElements);

				for (i = 0; i < nElements; i++) {

					a = vertexIndexBuffer[i * 3];
					b = vertexIndexBuffer[i * 3 + 1];
					c = vertexIndexBuffer[i * 3 + 2];

					na = normalIndexBuffer[i * 3];
					nb = normalIndexBuffer[i * 3 + 1];
					nc = normalIndexBuffer[i * 3 + 2];

					m = materialIndexBuffer[i];

					var nax = normals[na * 3],
					    nay = normals[na * 3 + 1],
					    naz = normals[na * 3 + 2],
					    nbx = normals[nb * 3],
					    nby = normals[nb * 3 + 1],
					    nbz = normals[nb * 3 + 2],
					    ncx = normals[nc * 3],
					    ncy = normals[nc * 3 + 1],
					    ncz = normals[nc * 3 + 2];

					scope.faces.push(new THREE.Face3(a, b, c, [new THREE.Vector3(nax, nay, naz), new THREE.Vector3(nbx, nby, nbz), new THREE.Vector3(ncx, ncy, ncz)], null, m));
				}
			}

			function init_faces4_smooth(nElements, offsetVertices, offsetNormals, offsetMaterials) {

				var i, a, b, c, d, m;
				var na, nb, nc, nd;

				var vertexIndexBuffer = new Uint32Array(data, offsetVertices, 4 * nElements);
				var normalIndexBuffer = new Uint32Array(data, offsetNormals, 4 * nElements);
				var materialIndexBuffer = new Uint16Array(data, offsetMaterials, nElements);

				for (i = 0; i < nElements; i++) {

					a = vertexIndexBuffer[i * 4];
					b = vertexIndexBuffer[i * 4 + 1];
					c = vertexIndexBuffer[i * 4 + 2];
					d = vertexIndexBuffer[i * 4 + 3];

					na = normalIndexBuffer[i * 4];
					nb = normalIndexBuffer[i * 4 + 1];
					nc = normalIndexBuffer[i * 4 + 2];
					nd = normalIndexBuffer[i * 4 + 3];

					m = materialIndexBuffer[i];

					var nax = normals[na * 3],
					    nay = normals[na * 3 + 1],
					    naz = normals[na * 3 + 2],
					    nbx = normals[nb * 3],
					    nby = normals[nb * 3 + 1],
					    nbz = normals[nb * 3 + 2],
					    ncx = normals[nc * 3],
					    ncy = normals[nc * 3 + 1],
					    ncz = normals[nc * 3 + 2],
					    ndx = normals[nd * 3],
					    ndy = normals[nd * 3 + 1],
					    ndz = normals[nd * 3 + 2];

					scope.faces.push(new THREE.Face3(a, b, d, [new THREE.Vector3(nax, nay, naz), new THREE.Vector3(nbx, nby, nbz), new THREE.Vector3(ndx, ndy, ndz)], null, m));

					scope.faces.push(new THREE.Face3(b, c, d, [new THREE.Vector3(nbx, nby, nbz), new THREE.Vector3(ncx, ncy, ncz), new THREE.Vector3(ndx, ndy, ndz)], null, m));
				}
			}

			function init_triangles_flat(start) {

				var nElements = md.ntri_flat;

				if (nElements) {

					var offsetMaterials = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
					init_faces3_flat(nElements, start, offsetMaterials);
				}
			}

			function init_triangles_flat_uv(start) {

				var nElements = md.ntri_flat_uv;

				if (nElements) {

					var offsetUvs = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
					var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;

					init_faces3_flat(nElements, start, offsetMaterials);
					init_uvs3(nElements, offsetUvs);
				}
			}

			function init_triangles_smooth(start) {

				var nElements = md.ntri_smooth;

				if (nElements) {

					var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
					var offsetMaterials = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;

					init_faces3_smooth(nElements, start, offsetNormals, offsetMaterials);
				}
			}

			function init_triangles_smooth_uv(start) {

				var nElements = md.ntri_smooth_uv;

				if (nElements) {

					var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
					var offsetUvs = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
					var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;

					init_faces3_smooth(nElements, start, offsetNormals, offsetMaterials);
					init_uvs3(nElements, offsetUvs);
				}
			}

			function init_quads_flat(start) {

				var nElements = md.nquad_flat;

				if (nElements) {

					var offsetMaterials = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
					init_faces4_flat(nElements, start, offsetMaterials);
				}
			}

			function init_quads_flat_uv(start) {

				var nElements = md.nquad_flat_uv;

				if (nElements) {

					var offsetUvs = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
					var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;

					init_faces4_flat(nElements, start, offsetMaterials);
					init_uvs4(nElements, offsetUvs);
				}
			}

			function init_quads_smooth(start) {

				var nElements = md.nquad_smooth;

				if (nElements) {

					var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
					var offsetMaterials = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;

					init_faces4_smooth(nElements, start, offsetNormals, offsetMaterials);
				}
			}

			function init_quads_smooth_uv(start) {

				var nElements = md.nquad_smooth_uv;

				if (nElements) {

					var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
					var offsetUvs = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
					var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;

					init_faces4_smooth(nElements, start, offsetNormals, offsetMaterials);
					init_uvs4(nElements, offsetUvs);
				}
			}
		};

		Model.prototype = Object.create(THREE.Geometry.prototype);
		Model.prototype.constructor = Model;

		var geometry = new Model();
		var materials = THREE.Loader.prototype.initMaterials(jsonMaterials, texturePath, this.crossOrigin);

		callback(geometry, materials);
	}

};

exports.default = THREE.BinaryLoader;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author herzig / http://github.com/herzig
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Description: reads BVH files and outputs a single THREE.Skeleton and an THREE.AnimationClip
 *
 * Currently only supports bvh files containing a single root.
 *
 */

THREE.BVHLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

	this.animateBonePositions = true;
	this.animateBoneRotations = true;
};

THREE.BVHLoader.prototype = {

	constructor: THREE.BVHLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	parse: function parse(text) {

		/*
  	reads a string array (lines) from a BVH file
  	and outputs a skeleton structure including motion data
  		returns thee root node:
  	{ name: '', channels: [], children: [] }
  */
		function readBvh(lines) {

			// read model structure

			if (nextLine(lines) !== 'HIERARCHY') {

				console.error('THREE.BVHLoader: HIERARCHY expected.');
			}

			var list = []; // collects flat array of all bones
			var root = readNode(lines, nextLine(lines), list);

			// read motion data

			if (nextLine(lines) !== 'MOTION') {

				console.error('THREE.BVHLoader: MOTION expected.');
			}

			// number of frames

			var tokens = nextLine(lines).split(/[\s]+/);
			var numFrames = parseInt(tokens[1]);

			if (isNaN(numFrames)) {

				console.error('THREE.BVHLoader: Failed to read number of frames.');
			}

			// frame time

			tokens = nextLine(lines).split(/[\s]+/);
			var frameTime = parseFloat(tokens[2]);

			if (isNaN(frameTime)) {

				console.error('THREE.BVHLoader: Failed to read frame time.');
			}

			// read frame data line by line

			for (var i = 0; i < numFrames; i++) {

				tokens = nextLine(lines).split(/[\s]+/);
				readFrameData(tokens, i * frameTime, root);
			}

			return list;
		}

		/*
  	Recursively reads data from a single frame into the bone hierarchy.
  	The passed bone hierarchy has to be structured in the same order as the BVH file.
  	keyframe data is stored in bone.frames.
  		- data: splitted string array (frame values), values are shift()ed so
  	this should be empty after parsing the whole hierarchy.
  	- frameTime: playback time for this keyframe.
  	- bone: the bone to read frame data from.
  */
		function readFrameData(data, frameTime, bone) {

			// end sites have no motion data

			if (bone.type === 'ENDSITE') return;

			// add keyframe

			var keyframe = {
				time: frameTime,
				position: new THREE.Vector3(),
				rotation: new THREE.Quaternion()
			};

			bone.frames.push(keyframe);

			var quat = new THREE.Quaternion();

			var vx = new THREE.Vector3(1, 0, 0);
			var vy = new THREE.Vector3(0, 1, 0);
			var vz = new THREE.Vector3(0, 0, 1);

			// parse values for each channel in node

			for (var i = 0; i < bone.channels.length; i++) {

				switch (bone.channels[i]) {

					case 'Xposition':
						keyframe.position.x = parseFloat(data.shift().trim());
						break;
					case 'Yposition':
						keyframe.position.y = parseFloat(data.shift().trim());
						break;
					case 'Zposition':
						keyframe.position.z = parseFloat(data.shift().trim());
						break;
					case 'Xrotation':
						quat.setFromAxisAngle(vx, parseFloat(data.shift().trim()) * Math.PI / 180);
						keyframe.rotation.multiply(quat);
						break;
					case 'Yrotation':
						quat.setFromAxisAngle(vy, parseFloat(data.shift().trim()) * Math.PI / 180);
						keyframe.rotation.multiply(quat);
						break;
					case 'Zrotation':
						quat.setFromAxisAngle(vz, parseFloat(data.shift().trim()) * Math.PI / 180);
						keyframe.rotation.multiply(quat);
						break;
					default:
						console.warn('THREE.BVHLoader: Invalid channel type.');

				}
			}

			// parse child nodes

			for (var i = 0; i < bone.children.length; i++) {

				readFrameData(data, frameTime, bone.children[i]);
			}
		}

		/*
   Recursively parses the HIERACHY section of the BVH file
  	 - lines: all lines of the file. lines are consumed as we go along.
   - firstline: line containing the node type and name e.g. 'JOINT hip'
   - list: collects a flat list of nodes
  	 returns: a BVH node including children
  */
		function readNode(lines, firstline, list) {

			var node = { name: '', type: '', frames: [] };
			list.push(node);

			// parse node type and name

			var tokens = firstline.split(/[\s]+/);

			if (tokens[0].toUpperCase() === 'END' && tokens[1].toUpperCase() === 'SITE') {

				node.type = 'ENDSITE';
				node.name = 'ENDSITE'; // bvh end sites have no name
			} else {

				node.name = tokens[1];
				node.type = tokens[0].toUpperCase();
			}

			if (nextLine(lines) !== '{') {

				console.error('THREE.BVHLoader: Expected opening { after type & name');
			}

			// parse OFFSET

			tokens = nextLine(lines).split(/[\s]+/);

			if (tokens[0] !== 'OFFSET') {

				console.error('THREE.BVHLoader: Expected OFFSET but got: ' + tokens[0]);
			}

			if (tokens.length !== 4) {

				console.error('THREE.BVHLoader: Invalid number of values for OFFSET.');
			}

			var offset = new THREE.Vector3(parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3]));

			if (isNaN(offset.x) || isNaN(offset.y) || isNaN(offset.z)) {

				console.error('THREE.BVHLoader: Invalid values of OFFSET.');
			}

			node.offset = offset;

			// parse CHANNELS definitions

			if (node.type !== 'ENDSITE') {

				tokens = nextLine(lines).split(/[\s]+/);

				if (tokens[0] !== 'CHANNELS') {

					console.error('THREE.BVHLoader: Expected CHANNELS definition.');
				}

				var numChannels = parseInt(tokens[1]);
				node.channels = tokens.splice(2, numChannels);
				node.children = [];
			}

			// read children

			while (true) {

				var line = nextLine(lines);

				if (line === '}') {

					return node;
				} else {

					node.children.push(readNode(lines, line, list));
				}
			}
		}

		/*
  	recursively converts the internal bvh node structure to a THREE.Bone hierarchy
  		source: the bvh root node
  	list: pass an empty array, collects a flat list of all converted THREE.Bones
  		returns the root THREE.Bone
  */
		function toTHREEBone(source, list) {

			var bone = new THREE.Bone();
			list.push(bone);

			bone.position.add(source.offset);
			bone.name = source.name;

			if (source.type !== 'ENDSITE') {

				for (var i = 0; i < source.children.length; i++) {

					bone.add(toTHREEBone(source.children[i], list));
				}
			}

			return bone;
		}

		/*
  	builds a THREE.AnimationClip from the keyframe data saved in each bone.
  		bone: bvh root node
  		returns: a THREE.AnimationClip containing position and quaternion tracks
  */
		function toTHREEAnimation(bones) {

			var tracks = [];

			// create a position and quaternion animation track for each node

			for (var i = 0; i < bones.length; i++) {

				var bone = bones[i];

				if (bone.type === 'ENDSITE') continue;

				// track data

				var times = [];
				var positions = [];
				var rotations = [];

				for (var j = 0; j < bone.frames.length; j++) {

					var frame = bone.frames[j];

					times.push(frame.time);

					// the animation system animates the position property,
					// so we have to add the joint offset to all values

					positions.push(frame.position.x + bone.offset.x);
					positions.push(frame.position.y + bone.offset.y);
					positions.push(frame.position.z + bone.offset.z);

					rotations.push(frame.rotation.x);
					rotations.push(frame.rotation.y);
					rotations.push(frame.rotation.z);
					rotations.push(frame.rotation.w);
				}

				if (scope.animateBonePositions) {

					tracks.push(new THREE.VectorKeyframeTrack('.bones[' + bone.name + '].position', times, positions));
				}

				if (scope.animateBoneRotations) {

					tracks.push(new THREE.QuaternionKeyframeTrack('.bones[' + bone.name + '].quaternion', times, rotations));
				}
			}

			return new THREE.AnimationClip('animation', -1, tracks);
		}

		/*
  	returns the next non-empty line in lines
  */
		function nextLine(lines) {

			var line;
			// skip empty lines
			while ((line = lines.shift().trim()).length === 0) {}
			return line;
		}

		var scope = this;

		var lines = text.split(/[\r\n]+/g);

		var bones = readBvh(lines);

		var threeBones = [];
		toTHREEBone(bones[0], threeBones);

		var threeClip = toTHREEAnimation(bones);

		return {
			skeleton: new THREE.Skeleton(threeBones),
			clip: threeClip
		};
	}

};

exports.default = THREE.BVHLoader;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */

THREE.ColladaLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.ColladaLoader.prototype = {

	constructor: THREE.ColladaLoader,

	crossOrigin: 'Anonymous',

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var path = scope.path === undefined ? THREE.LoaderUtils.extractUrlBase(url) : scope.path;

		var loader = new THREE.FileLoader(scope.manager);
		loader.load(url, function (text) {

			onLoad(scope.parse(text, path));
		}, onProgress, onError);
	},

	setPath: function setPath(value) {

		this.path = value;
	},

	options: {

		set convertUpAxis(value) {

			console.warn('THREE.ColladaLoader: options.convertUpAxis() has been removed. Up axis is converted automatically.');
		}

	},

	setCrossOrigin: function setCrossOrigin(value) {

		this.crossOrigin = value;
	},

	parse: function parse(text, path) {

		function getElementsByTagName(xml, name) {

			// Non recursive xml.getElementsByTagName() ...

			var array = [];
			var childNodes = xml.childNodes;

			for (var i = 0, l = childNodes.length; i < l; i++) {

				var child = childNodes[i];

				if (child.nodeName === name) {

					array.push(child);
				}
			}

			return array;
		}

		function parseStrings(text) {

			if (text.length === 0) return [];

			var parts = text.trim().split(/\s+/);
			var array = new Array(parts.length);

			for (var i = 0, l = parts.length; i < l; i++) {

				array[i] = parts[i];
			}

			return array;
		}

		function parseFloats(text) {

			if (text.length === 0) return [];

			var parts = text.trim().split(/\s+/);
			var array = new Array(parts.length);

			for (var i = 0, l = parts.length; i < l; i++) {

				array[i] = parseFloat(parts[i]);
			}

			return array;
		}

		function parseInts(text) {

			if (text.length === 0) return [];

			var parts = text.trim().split(/\s+/);
			var array = new Array(parts.length);

			for (var i = 0, l = parts.length; i < l; i++) {

				array[i] = parseInt(parts[i]);
			}

			return array;
		}

		function parseId(text) {

			return text.substring(1);
		}

		function generateId() {

			return 'three_default_' + count++;
		}

		function isEmpty(object) {

			return Object.keys(object).length === 0;
		}

		// asset

		function parseAsset(xml) {

			return {
				unit: parseAssetUnit(getElementsByTagName(xml, 'unit')[0]),
				upAxis: parseAssetUpAxis(getElementsByTagName(xml, 'up_axis')[0])
			};
		}

		function parseAssetUnit(xml) {

			return xml !== undefined ? parseFloat(xml.getAttribute('meter')) : 1;
		}

		function parseAssetUpAxis(xml) {

			return xml !== undefined ? xml.textContent : 'Y_UP';
		}

		// library

		function parseLibrary(xml, libraryName, nodeName, parser) {

			var library = getElementsByTagName(xml, libraryName)[0];

			if (library !== undefined) {

				var elements = getElementsByTagName(library, nodeName);

				for (var i = 0; i < elements.length; i++) {

					parser(elements[i]);
				}
			}
		}

		function buildLibrary(data, builder) {

			for (var name in data) {

				var object = data[name];
				object.build = builder(data[name]);
			}
		}

		// get

		function getBuild(data, builder) {

			if (data.build !== undefined) return data.build;

			data.build = builder(data);

			return data.build;
		}

		// animation

		function parseAnimation(xml) {

			var data = {
				sources: {},
				samplers: {},
				channels: {}
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				var id;

				switch (child.nodeName) {

					case 'source':
						id = child.getAttribute('id');
						data.sources[id] = parseSource(child);
						break;

					case 'sampler':
						id = child.getAttribute('id');
						data.samplers[id] = parseAnimationSampler(child);
						break;

					case 'channel':
						id = child.getAttribute('target');
						data.channels[id] = parseAnimationChannel(child);
						break;

					default:
						console.log(child);

				}
			}

			library.animations[xml.getAttribute('id')] = data;
		}

		function parseAnimationSampler(xml) {

			var data = {
				inputs: {}
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'input':
						var id = parseId(child.getAttribute('source'));
						var semantic = child.getAttribute('semantic');
						data.inputs[semantic] = id;
						break;

				}
			}

			return data;
		}

		function parseAnimationChannel(xml) {

			var data = {};

			var target = xml.getAttribute('target');

			// parsing SID Addressing Syntax

			var parts = target.split('/');

			var id = parts.shift();
			var sid = parts.shift();

			// check selection syntax

			var arraySyntax = sid.indexOf('(') !== -1;
			var memberSyntax = sid.indexOf('.') !== -1;

			if (memberSyntax) {

				//  member selection access

				parts = sid.split('.');
				sid = parts.shift();
				data.member = parts.shift();
			} else if (arraySyntax) {

				// array-access syntax. can be used to express fields in one-dimensional vectors or two-dimensional matrices.

				var indices = sid.split('(');
				sid = indices.shift();

				for (var i = 0; i < indices.length; i++) {

					indices[i] = parseInt(indices[i].replace(/\)/, ''));
				}

				data.indices = indices;
			}

			data.id = id;
			data.sid = sid;

			data.arraySyntax = arraySyntax;
			data.memberSyntax = memberSyntax;

			data.sampler = parseId(xml.getAttribute('source'));

			return data;
		}

		function buildAnimation(data) {

			var tracks = [];

			var channels = data.channels;
			var samplers = data.samplers;
			var sources = data.sources;

			for (var target in channels) {

				if (channels.hasOwnProperty(target)) {

					var channel = channels[target];
					var sampler = samplers[channel.sampler];

					var inputId = sampler.inputs.INPUT;
					var outputId = sampler.inputs.OUTPUT;

					var inputSource = sources[inputId];
					var outputSource = sources[outputId];

					var animation = buildAnimationChannel(channel, inputSource, outputSource);

					createKeyframeTracks(animation, tracks);
				}
			}

			return tracks;
		}

		function getAnimation(id) {

			return getBuild(library.animations[id], buildAnimation);
		}

		function buildAnimationChannel(channel, inputSource, outputSource) {

			var node = library.nodes[channel.id];
			var object3D = getNode(node.id);

			var transform = node.transforms[channel.sid];
			var defaultMatrix = node.matrix.clone().transpose();

			var time, stride;
			var i, il, j, jl;

			var data = {};

			// the collada spec allows the animation of data in various ways.
			// depending on the transform type (matrix, translate, rotate, scale), we execute different logic

			switch (transform) {

				case 'matrix':

					for (i = 0, il = inputSource.array.length; i < il; i++) {

						time = inputSource.array[i];
						stride = i * outputSource.stride;

						if (data[time] === undefined) data[time] = {};

						if (channel.arraySyntax === true) {

							var value = outputSource.array[stride];
							var index = channel.indices[0] + 4 * channel.indices[1];

							data[time][index] = value;
						} else {

							for (j = 0, jl = outputSource.stride; j < jl; j++) {

								data[time][j] = outputSource.array[stride + j];
							}
						}
					}

					break;

				case 'translate':
					console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', transform);
					break;

				case 'rotate':
					console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', transform);
					break;

				case 'scale':
					console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', transform);
					break;

			}

			var keyframes = prepareAnimationData(data, defaultMatrix);

			var animation = {
				name: object3D.uuid,
				keyframes: keyframes
			};

			return animation;
		}

		function prepareAnimationData(data, defaultMatrix) {

			var keyframes = [];

			// transfer data into a sortable array

			for (var time in data) {

				keyframes.push({ time: parseFloat(time), value: data[time] });
			}

			// ensure keyframes are sorted by time

			keyframes.sort(ascending);

			// now we clean up all animation data, so we can use them for keyframe tracks

			for (var i = 0; i < 16; i++) {

				transformAnimationData(keyframes, i, defaultMatrix.elements[i]);
			}

			return keyframes;

			// array sort function

			function ascending(a, b) {

				return a.time - b.time;
			}
		}

		var position = new THREE.Vector3();
		var scale = new THREE.Vector3();
		var quaternion = new THREE.Quaternion();

		function createKeyframeTracks(animation, tracks) {

			var keyframes = animation.keyframes;
			var name = animation.name;

			var times = [];
			var positionData = [];
			var quaternionData = [];
			var scaleData = [];

			for (var i = 0, l = keyframes.length; i < l; i++) {

				var keyframe = keyframes[i];

				var time = keyframe.time;
				var value = keyframe.value;

				matrix.fromArray(value).transpose();
				matrix.decompose(position, quaternion, scale);

				times.push(time);
				positionData.push(position.x, position.y, position.z);
				quaternionData.push(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
				scaleData.push(scale.x, scale.y, scale.z);
			}

			if (positionData.length > 0) tracks.push(new THREE.VectorKeyframeTrack(name + '.position', times, positionData));
			if (quaternionData.length > 0) tracks.push(new THREE.QuaternionKeyframeTrack(name + '.quaternion', times, quaternionData));
			if (scaleData.length > 0) tracks.push(new THREE.VectorKeyframeTrack(name + '.scale', times, scaleData));

			return tracks;
		}

		function transformAnimationData(keyframes, property, defaultValue) {

			var keyframe;

			var empty = true;
			var i, l;

			// check, if values of a property are missing in our keyframes

			for (i = 0, l = keyframes.length; i < l; i++) {

				keyframe = keyframes[i];

				if (keyframe.value[property] === undefined) {

					keyframe.value[property] = null; // mark as missing
				} else {

					empty = false;
				}
			}

			if (empty === true) {

				// no values at all, so we set a default value

				for (i = 0, l = keyframes.length; i < l; i++) {

					keyframe = keyframes[i];

					keyframe.value[property] = defaultValue;
				}
			} else {

				// filling gaps

				createMissingKeyframes(keyframes, property);
			}
		}

		function createMissingKeyframes(keyframes, property) {

			var prev, next;

			for (var i = 0, l = keyframes.length; i < l; i++) {

				var keyframe = keyframes[i];

				if (keyframe.value[property] === null) {

					prev = getPrev(keyframes, i, property);
					next = getNext(keyframes, i, property);

					if (prev === null) {

						keyframe.value[property] = next.value[property];
						continue;
					}

					if (next === null) {

						keyframe.value[property] = prev.value[property];
						continue;
					}

					interpolate(keyframe, prev, next, property);
				}
			}
		}

		function getPrev(keyframes, i, property) {

			while (i >= 0) {

				var keyframe = keyframes[i];

				if (keyframe.value[property] !== null) return keyframe;

				i--;
			}

			return null;
		}

		function getNext(keyframes, i, property) {

			while (i < keyframes.length) {

				var keyframe = keyframes[i];

				if (keyframe.value[property] !== null) return keyframe;

				i++;
			}

			return null;
		}

		function interpolate(key, prev, next, property) {

			if (next.time - prev.time === 0) {

				key.value[property] = prev.value[property];
				return;
			}

			key.value[property] = (key.time - prev.time) * (next.value[property] - prev.value[property]) / (next.time - prev.time) + prev.value[property];
		}

		// animation clips

		function parseAnimationClip(xml) {

			var data = {
				name: xml.getAttribute('id') || 'default',
				start: parseFloat(xml.getAttribute('start') || 0),
				end: parseFloat(xml.getAttribute('end') || 0),
				animations: []
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'instance_animation':
						data.animations.push(parseId(child.getAttribute('url')));
						break;

				}
			}

			library.clips[xml.getAttribute('id')] = data;
		}

		function buildAnimationClip(data) {

			var tracks = [];

			var name = data.name;
			var duration = data.end - data.start || -1;
			var animations = data.animations;

			for (var i = 0, il = animations.length; i < il; i++) {

				var animationTracks = getAnimation(animations[i]);

				for (var j = 0, jl = animationTracks.length; j < jl; j++) {

					tracks.push(animationTracks[j]);
				}
			}

			return new THREE.AnimationClip(name, duration, tracks);
		}

		function getAnimationClip(id) {

			return getBuild(library.clips[id], buildAnimationClip);
		}

		// controller

		function parseController(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'skin':
						// there is exactly one skin per controller
						data.id = parseId(child.getAttribute('source'));
						data.skin = parseSkin(child);
						break;

					case 'morph':
						data.id = parseId(child.getAttribute('source'));
						console.warn('THREE.ColladaLoader: Morph target animation not supported yet.');
						break;

				}
			}

			library.controllers[xml.getAttribute('id')] = data;
		}

		function parseSkin(xml) {

			var data = {
				sources: {}
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'bind_shape_matrix':
						data.bindShapeMatrix = parseFloats(child.textContent);
						break;

					case 'source':
						var id = child.getAttribute('id');
						data.sources[id] = parseSource(child);
						break;

					case 'joints':
						data.joints = parseJoints(child);
						break;

					case 'vertex_weights':
						data.vertexWeights = parseVertexWeights(child);
						break;

				}
			}

			return data;
		}

		function parseJoints(xml) {

			var data = {
				inputs: {}
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'input':
						var semantic = child.getAttribute('semantic');
						var id = parseId(child.getAttribute('source'));
						data.inputs[semantic] = id;
						break;

				}
			}

			return data;
		}

		function parseVertexWeights(xml) {

			var data = {
				inputs: {}
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'input':
						var semantic = child.getAttribute('semantic');
						var id = parseId(child.getAttribute('source'));
						var offset = parseInt(child.getAttribute('offset'));
						data.inputs[semantic] = { id: id, offset: offset };
						break;

					case 'vcount':
						data.vcount = parseInts(child.textContent);
						break;

					case 'v':
						data.v = parseInts(child.textContent);
						break;

				}
			}

			return data;
		}

		function buildController(data) {

			var build = {
				id: data.id
			};

			var geometry = library.geometries[build.id];

			if (data.skin !== undefined) {

				build.skin = buildSkin(data.skin);

				// we enhance the 'sources' property of the corresponding geometry with our skin data

				geometry.sources.skinIndices = build.skin.indices;
				geometry.sources.skinWeights = build.skin.weights;
			}

			return build;
		}

		function buildSkin(data) {

			var BONE_LIMIT = 4;

			var build = {
				joints: [], // this must be an array to preserve the joint order
				indices: {
					array: [],
					stride: BONE_LIMIT
				},
				weights: {
					array: [],
					stride: BONE_LIMIT
				}
			};

			var sources = data.sources;
			var vertexWeights = data.vertexWeights;

			var vcount = vertexWeights.vcount;
			var v = vertexWeights.v;
			var jointOffset = vertexWeights.inputs.JOINT.offset;
			var weightOffset = vertexWeights.inputs.WEIGHT.offset;

			var jointSource = data.sources[data.joints.inputs.JOINT];
			var inverseSource = data.sources[data.joints.inputs.INV_BIND_MATRIX];

			var weights = sources[vertexWeights.inputs.WEIGHT.id].array;
			var stride = 0;

			var i, j, l;

			// procces skin data for each vertex

			for (i = 0, l = vcount.length; i < l; i++) {

				var jointCount = vcount[i]; // this is the amount of joints that affect a single vertex
				var vertexSkinData = [];

				for (j = 0; j < jointCount; j++) {

					var skinIndex = v[stride + jointOffset];
					var weightId = v[stride + weightOffset];
					var skinWeight = weights[weightId];

					vertexSkinData.push({ index: skinIndex, weight: skinWeight });

					stride += 2;
				}

				// we sort the joints in descending order based on the weights.
				// this ensures, we only procced the most important joints of the vertex

				vertexSkinData.sort(descending);

				// now we provide for each vertex a set of four index and weight values.
				// the order of the skin data matches the order of vertices

				for (j = 0; j < BONE_LIMIT; j++) {

					var d = vertexSkinData[j];

					if (d !== undefined) {

						build.indices.array.push(d.index);
						build.weights.array.push(d.weight);
					} else {

						build.indices.array.push(0);
						build.weights.array.push(0);
					}
				}
			}

			// setup bind matrix

			build.bindMatrix = new THREE.Matrix4().fromArray(data.bindShapeMatrix).transpose();

			// process bones and inverse bind matrix data

			for (i = 0, l = jointSource.array.length; i < l; i++) {

				var name = jointSource.array[i];
				var boneInverse = new THREE.Matrix4().fromArray(inverseSource.array, i * inverseSource.stride).transpose();

				build.joints.push({ name: name, boneInverse: boneInverse });
			}

			return build;

			// array sort function

			function descending(a, b) {

				return b.weight - a.weight;
			}
		}

		function getController(id) {

			return getBuild(library.controllers[id], buildController);
		}

		// image

		function parseImage(xml) {

			var data = {
				init_from: getElementsByTagName(xml, 'init_from')[0].textContent
			};

			library.images[xml.getAttribute('id')] = data;
		}

		function buildImage(data) {

			if (data.build !== undefined) return data.build;

			return data.init_from;
		}

		function getImage(id) {

			return getBuild(library.images[id], buildImage);
		}

		// effect

		function parseEffect(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'profile_COMMON':
						data.profile = parseEffectProfileCOMMON(child);
						break;

				}
			}

			library.effects[xml.getAttribute('id')] = data;
		}

		function parseEffectProfileCOMMON(xml) {

			var data = {
				surfaces: {},
				samplers: {}
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'newparam':
						parseEffectNewparam(child, data);
						break;

					case 'technique':
						data.technique = parseEffectTechnique(child);
						break;

				}
			}

			return data;
		}

		function parseEffectNewparam(xml, data) {

			var sid = xml.getAttribute('sid');

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'surface':
						data.surfaces[sid] = parseEffectSurface(child);
						break;

					case 'sampler2D':
						data.samplers[sid] = parseEffectSampler(child);
						break;

				}
			}
		}

		function parseEffectSurface(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'init_from':
						data.init_from = child.textContent;
						break;

				}
			}

			return data;
		}

		function parseEffectSampler(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'source':
						data.source = child.textContent;
						break;

				}
			}

			return data;
		}

		function parseEffectTechnique(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'constant':
					case 'lambert':
					case 'blinn':
					case 'phong':
						data.type = child.nodeName;
						data.parameters = parseEffectParameters(child);
						break;

				}
			}

			return data;
		}

		function parseEffectParameters(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'emission':
					case 'diffuse':
					case 'specular':
					case 'shininess':
					case 'transparent':
					case 'transparency':
						data[child.nodeName] = parseEffectParameter(child);
						break;

				}
			}

			return data;
		}

		function parseEffectParameter(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'color':
						data[child.nodeName] = parseFloats(child.textContent);
						break;

					case 'float':
						data[child.nodeName] = parseFloat(child.textContent);
						break;

					case 'texture':
						data[child.nodeName] = { id: child.getAttribute('texture'), extra: parseEffectParameterTexture(child) };
						break;

				}
			}

			return data;
		}

		function parseEffectParameterTexture(xml) {

			var data = {
				technique: {}
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'extra':
						parseEffectParameterTextureExtra(child, data);
						break;

				}
			}

			return data;
		}

		function parseEffectParameterTextureExtra(xml, data) {

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'technique':
						parseEffectParameterTextureExtraTechnique(child, data);
						break;

				}
			}
		}

		function parseEffectParameterTextureExtraTechnique(xml, data) {

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'repeatU':
					case 'repeatV':
					case 'offsetU':
					case 'offsetV':
						data.technique[child.nodeName] = parseFloat(child.textContent);
						break;

					case 'wrapU':
					case 'wrapV':

						// some files have values for wrapU/wrapV which become NaN via parseInt

						if (child.textContent.toUpperCase() === 'TRUE') {

							data.technique[child.nodeName] = 1;
						} else if (child.textContent.toUpperCase() === 'FALSE') {

							data.technique[child.nodeName] = 0;
						} else {

							data.technique[child.nodeName] = parseInt(child.textContent);
						}

						break;

				}
			}
		}

		function buildEffect(data) {

			return data;
		}

		function getEffect(id) {

			return getBuild(library.effects[id], buildEffect);
		}

		// material

		function parseMaterial(xml) {

			var data = {
				name: xml.getAttribute('name')
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'instance_effect':
						data.url = parseId(child.getAttribute('url'));
						break;

				}
			}

			library.materials[xml.getAttribute('id')] = data;
		}

		function buildMaterial(data) {

			var effect = getEffect(data.url);
			var technique = effect.profile.technique;

			var material;

			switch (technique.type) {

				case 'phong':
				case 'blinn':
					material = new THREE.MeshPhongMaterial();
					break;

				case 'lambert':
					material = new THREE.MeshLambertMaterial();
					break;

				default:
					material = new THREE.MeshBasicMaterial();
					break;

			}

			material.name = data.name;

			function getTexture(textureObject) {

				var sampler = effect.profile.samplers[textureObject.id];
				var image;

				// get image

				if (sampler !== undefined) {

					var surface = effect.profile.surfaces[sampler.source];
					image = getImage(surface.init_from);
				} else {

					console.warn('THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530).');
					image = getImage(textureObject.id);
				}

				// create texture if image is avaiable

				if (image !== undefined) {

					var texture = textureLoader.load(image);

					var extra = textureObject.extra;

					if (extra !== undefined && extra.technique !== undefined && isEmpty(extra.technique) === false) {

						var technique = extra.technique;

						texture.wrapS = technique.wrapU ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
						texture.wrapT = technique.wrapV ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

						texture.offset.set(technique.offsetU || 0, technique.offsetV || 0);
						texture.repeat.set(technique.repeatU || 1, technique.repeatV || 1);
					} else {

						texture.wrapS = THREE.RepeatWrapping;
						texture.wrapT = THREE.RepeatWrapping;
					}

					return texture;
				} else {

					console.error('THREE.ColladaLoader: Unable to load texture with ID:', textureObject.id);

					return null;
				}
			}

			var parameters = technique.parameters;

			for (var key in parameters) {

				var parameter = parameters[key];

				switch (key) {

					case 'diffuse':
						if (parameter.color) material.color.fromArray(parameter.color);
						if (parameter.texture) material.map = getTexture(parameter.texture);
						break;
					case 'specular':
						if (parameter.color && material.specular) material.specular.fromArray(parameter.color);
						if (parameter.texture) material.specularMap = getTexture(parameter.texture);
						break;
					case 'shininess':
						if (parameter.float && material.shininess) material.shininess = parameter.float;
						break;
					case 'emission':
						if (parameter.color && material.emissive) material.emissive.fromArray(parameter.color);
						break;
					case 'transparent':
						// if ( parameter.texture ) material.alphaMap = getTexture( parameter.texture );
						material.transparent = true;
						break;
					case 'transparency':
						if (parameter.float !== undefined) material.opacity = parameter.float;
						material.transparent = true;
						break;

				}
			}

			return material;
		}

		function getMaterial(id) {

			return getBuild(library.materials[id], buildMaterial);
		}

		// camera

		function parseCamera(xml) {

			var data = {
				name: xml.getAttribute('name')
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'optics':
						data.optics = parseCameraOptics(child);
						break;

				}
			}

			library.cameras[xml.getAttribute('id')] = data;
		}

		function parseCameraOptics(xml) {

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				switch (child.nodeName) {

					case 'technique_common':
						return parseCameraTechnique(child);

				}
			}

			return {};
		}

		function parseCameraTechnique(xml) {

			var data = {};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				switch (child.nodeName) {

					case 'perspective':
					case 'orthographic':

						data.technique = child.nodeName;
						data.parameters = parseCameraParameters(child);

						break;

				}
			}

			return data;
		}

		function parseCameraParameters(xml) {

			var data = {};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				switch (child.nodeName) {

					case 'xfov':
					case 'yfov':
					case 'xmag':
					case 'ymag':
					case 'znear':
					case 'zfar':
					case 'aspect_ratio':
						data[child.nodeName] = parseFloat(child.textContent);
						break;

				}
			}

			return data;
		}

		function buildCamera(data) {

			var camera;

			switch (data.optics.technique) {

				case 'perspective':
					camera = new THREE.PerspectiveCamera(data.optics.parameters.yfov, data.optics.parameters.aspect_ratio, data.optics.parameters.znear, data.optics.parameters.zfar);
					break;

				case 'orthographic':
					var ymag = data.optics.parameters.ymag;
					var xmag = data.optics.parameters.xmag;
					var aspectRatio = data.optics.parameters.aspect_ratio;

					xmag = xmag === undefined ? ymag * aspectRatio : xmag;
					ymag = ymag === undefined ? xmag / aspectRatio : ymag;

					xmag *= 0.5;
					ymag *= 0.5;

					camera = new THREE.OrthographicCamera(-xmag, xmag, ymag, -ymag, // left, right, top, bottom
					data.optics.parameters.znear, data.optics.parameters.zfar);
					break;

				default:
					camera = new THREE.PerspectiveCamera();
					break;

			}

			camera.name = data.name;

			return camera;
		}

		function getCamera(id) {

			var data = library.cameras[id];

			if (data !== undefined) {

				return getBuild(data, buildCamera);
			}

			console.warn('THREE.ColladaLoader: Couldn\'t find camera with ID:', id);

			return null;
		}

		// light

		function parseLight(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'technique_common':
						data = parseLightTechnique(child);
						break;

				}
			}

			library.lights[xml.getAttribute('id')] = data;
		}

		function parseLightTechnique(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'directional':
					case 'point':
					case 'spot':
					case 'ambient':

						data.technique = child.nodeName;
						data.parameters = parseLightParameters(child);

				}
			}

			return data;
		}

		function parseLightParameters(xml) {

			var data = {};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'color':
						var array = parseFloats(child.textContent);
						data.color = new THREE.Color().fromArray(array);
						break;

					case 'falloff_angle':
						data.falloffAngle = parseFloat(child.textContent);
						break;

					case 'quadratic_attenuation':
						var f = parseFloat(child.textContent);
						data.distance = f ? Math.sqrt(1 / f) : 0;
						break;

				}
			}

			return data;
		}

		function buildLight(data) {

			var light;

			switch (data.technique) {

				case 'directional':
					light = new THREE.DirectionalLight();
					break;

				case 'point':
					light = new THREE.PointLight();
					break;

				case 'spot':
					light = new THREE.SpotLight();
					break;

				case 'ambient':
					light = new THREE.AmbientLight();
					break;

			}

			if (data.parameters.color) light.color.copy(data.parameters.color);
			if (data.parameters.distance) light.distance = data.parameters.distance;

			return light;
		}

		function getLight(id) {

			var data = library.lights[id];

			if (data !== undefined) {

				return getBuild(data, buildLight);
			}

			console.warn('THREE.ColladaLoader: Couldn\'t find light with ID:', id);

			return null;
		}

		// geometry

		function parseGeometry(xml) {

			var data = {
				name: xml.getAttribute('name'),
				sources: {},
				vertices: {},
				primitives: []
			};

			var mesh = getElementsByTagName(xml, 'mesh')[0];

			// the following tags inside geometry are not supported yet (see https://github.com/mrdoob/three.js/pull/12606): convex_mesh, spline, brep
			if (mesh === undefined) return;

			for (var i = 0; i < mesh.childNodes.length; i++) {

				var child = mesh.childNodes[i];

				if (child.nodeType !== 1) continue;

				var id = child.getAttribute('id');

				switch (child.nodeName) {

					case 'source':
						data.sources[id] = parseSource(child);
						break;

					case 'vertices':
						// data.sources[ id ] = data.sources[ parseId( getElementsByTagName( child, 'input' )[ 0 ].getAttribute( 'source' ) ) ];
						data.vertices = parseGeometryVertices(child);
						break;

					case 'polygons':
						console.warn('THREE.ColladaLoader: Unsupported primitive type: ', child.nodeName);
						break;

					case 'lines':
					case 'linestrips':
					case 'polylist':
					case 'triangles':
						data.primitives.push(parseGeometryPrimitive(child));
						break;

					default:
						console.log(child);

				}
			}

			library.geometries[xml.getAttribute('id')] = data;
		}

		function parseSource(xml) {

			var data = {
				array: [],
				stride: 3
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'float_array':
						data.array = parseFloats(child.textContent);
						break;

					case 'Name_array':
						data.array = parseStrings(child.textContent);
						break;

					case 'technique_common':
						var accessor = getElementsByTagName(child, 'accessor')[0];

						if (accessor !== undefined) {

							data.stride = parseInt(accessor.getAttribute('stride'));
						}
						break;

				}
			}

			return data;
		}

		function parseGeometryVertices(xml) {

			var data = {};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				data[child.getAttribute('semantic')] = parseId(child.getAttribute('source'));
			}

			return data;
		}

		function parseGeometryPrimitive(xml) {

			var primitive = {
				type: xml.nodeName,
				material: xml.getAttribute('material'),
				count: parseInt(xml.getAttribute('count')),
				inputs: {},
				stride: 0
			};

			for (var i = 0, l = xml.childNodes.length; i < l; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'input':
						var id = parseId(child.getAttribute('source'));
						var semantic = child.getAttribute('semantic');
						var offset = parseInt(child.getAttribute('offset'));
						primitive.inputs[semantic] = { id: id, offset: offset };
						primitive.stride = Math.max(primitive.stride, offset + 1);
						break;

					case 'vcount':
						primitive.vcount = parseInts(child.textContent);
						break;

					case 'p':
						primitive.p = parseInts(child.textContent);
						break;

				}
			}

			return primitive;
		}

		function groupPrimitives(primitives) {

			var build = {};

			for (var i = 0; i < primitives.length; i++) {

				var primitive = primitives[i];

				if (build[primitive.type] === undefined) build[primitive.type] = [];

				build[primitive.type].push(primitive);
			}

			return build;
		}

		function buildGeometry(data) {

			var build = {};

			var sources = data.sources;
			var vertices = data.vertices;
			var primitives = data.primitives;

			if (primitives.length === 0) return {};

			// our goal is to create one buffer geoemtry for a single type of primitives
			// first, we group all primitives by their type

			var groupedPrimitives = groupPrimitives(primitives);

			for (var type in groupedPrimitives) {

				// second, we create for each type of primitives (polylist,triangles or lines) a buffer geometry

				build[type] = buildGeometryType(groupedPrimitives[type], sources, vertices);
			}

			return build;
		}

		function buildGeometryType(primitives, sources, vertices) {

			var build = {};

			var position = { array: [], stride: 0 };
			var normal = { array: [], stride: 0 };
			var uv = { array: [], stride: 0 };
			var color = { array: [], stride: 0 };

			var skinIndex = { array: [], stride: 4 };
			var skinWeight = { array: [], stride: 4 };

			var geometry = new THREE.BufferGeometry();

			var materialKeys = [];

			var start = 0,
			    count = 0;

			for (var p = 0; p < primitives.length; p++) {

				var primitive = primitives[p];
				var inputs = primitive.inputs;
				var triangleCount = 1;

				if (primitive.vcount && primitive.vcount[0] === 4) {

					triangleCount = 2; // one quad -> two triangles
				}

				// groups

				if (primitive.type === 'lines' || primitive.type === 'linestrips') {

					count = primitive.count * 2;
				} else {

					count = primitive.count * 3 * triangleCount;
				}

				geometry.addGroup(start, count, p);
				start += count;

				// material

				if (primitive.material) {

					materialKeys.push(primitive.material);
				}

				// geometry data

				for (var name in inputs) {

					var input = inputs[name];

					switch (name) {

						case 'VERTEX':
							for (var key in vertices) {

								var id = vertices[key];

								switch (key) {

									case 'POSITION':
										buildGeometryData(primitive, sources[id], input.offset, position.array);
										position.stride = sources[id].stride;

										if (sources.skinWeights && sources.skinIndices) {

											buildGeometryData(primitive, sources.skinIndices, input.offset, skinIndex.array);
											buildGeometryData(primitive, sources.skinWeights, input.offset, skinWeight.array);
										}
										break;

									case 'NORMAL':
										buildGeometryData(primitive, sources[id], input.offset, normal.array);
										normal.stride = sources[id].stride;
										break;

									case 'COLOR':
										buildGeometryData(primitive, sources[id], input.offset, color.array);
										color.stride = sources[id].stride;
										break;

									case 'TEXCOORD':
										buildGeometryData(primitive, sources[id], input.offset, uv.array);
										uv.stride = sources[id].stride;
										break;

									default:
										console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.', key);

								}
							}
							break;

						case 'NORMAL':
							buildGeometryData(primitive, sources[input.id], input.offset, normal.array);
							normal.stride = sources[input.id].stride;
							break;

						case 'COLOR':
							buildGeometryData(primitive, sources[input.id], input.offset, color.array);
							color.stride = sources[input.id].stride;
							break;

						case 'TEXCOORD':
							buildGeometryData(primitive, sources[input.id], input.offset, uv.array);
							uv.stride = sources[input.id].stride;
							break;

					}
				}
			}

			// build geometry

			if (position.array.length > 0) geometry.addAttribute('position', new THREE.Float32BufferAttribute(position.array, position.stride));
			if (normal.array.length > 0) geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normal.array, normal.stride));
			if (color.array.length > 0) geometry.addAttribute('color', new THREE.Float32BufferAttribute(color.array, color.stride));
			if (uv.array.length > 0) geometry.addAttribute('uv', new THREE.Float32BufferAttribute(uv.array, uv.stride));

			if (skinIndex.array.length > 0) geometry.addAttribute('skinIndex', new THREE.Float32BufferAttribute(skinIndex.array, skinIndex.stride));
			if (skinWeight.array.length > 0) geometry.addAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeight.array, skinWeight.stride));

			build.data = geometry;
			build.type = primitives[0].type;
			build.materialKeys = materialKeys;

			return build;
		}

		function buildGeometryData(primitive, source, offset, array) {

			var indices = primitive.p;
			var stride = primitive.stride;
			var vcount = primitive.vcount;

			function pushVector(i) {

				var index = indices[i + offset] * sourceStride;
				var length = index + sourceStride;

				for (; index < length; index++) {

					array.push(sourceArray[index]);
				}
			}

			var maxcount = 0;

			var sourceArray = source.array;
			var sourceStride = source.stride;

			if (primitive.vcount !== undefined) {

				var index = 0;

				for (var i = 0, l = vcount.length; i < l; i++) {

					var count = vcount[i];

					if (count === 4) {

						var a = index + stride * 0;
						var b = index + stride * 1;
						var c = index + stride * 2;
						var d = index + stride * 3;

						pushVector(a);pushVector(b);pushVector(d);
						pushVector(b);pushVector(c);pushVector(d);
					} else if (count === 3) {

						var a = index + stride * 0;
						var b = index + stride * 1;
						var c = index + stride * 2;

						pushVector(a);pushVector(b);pushVector(c);
					} else {

						maxcount = Math.max(maxcount, count);
					}

					index += stride * count;
				}

				if (maxcount > 0) {

					console.log('THREE.ColladaLoader: Geometry has faces with more than 4 vertices.');
				}
			} else {

				for (var i = 0, l = indices.length; i < l; i += stride) {

					pushVector(i);
				}
			}
		}

		function getGeometry(id) {

			return getBuild(library.geometries[id], buildGeometry);
		}

		// kinematics

		function parseKinematicsModel(xml) {

			var data = {
				name: xml.getAttribute('name') || '',
				joints: {},
				links: []
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'technique_common':
						parseKinematicsTechniqueCommon(child, data);
						break;

				}
			}

			library.kinematicsModels[xml.getAttribute('id')] = data;
		}

		function buildKinematicsModel(data) {

			if (data.build !== undefined) return data.build;

			return data;
		}

		function getKinematicsModel(id) {

			return getBuild(library.kinematicsModels[id], buildKinematicsModel);
		}

		function parseKinematicsTechniqueCommon(xml, data) {

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'joint':
						data.joints[child.getAttribute('sid')] = parseKinematicsJoint(child);
						break;

					case 'link':
						data.links.push(parseKinematicsLink(child));
						break;

				}
			}
		}

		function parseKinematicsJoint(xml) {

			var data;

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'prismatic':
					case 'revolute':
						data = parseKinematicsJointParameter(child);
						break;

				}
			}

			return data;
		}

		function parseKinematicsJointParameter(xml, data) {

			var data = {
				sid: xml.getAttribute('sid'),
				name: xml.getAttribute('name') || '',
				axis: new THREE.Vector3(),
				limits: {
					min: 0,
					max: 0
				},
				type: xml.nodeName,
				static: false,
				zeroPosition: 0,
				middlePosition: 0
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'axis':
						var array = parseFloats(child.textContent);
						data.axis.fromArray(array);
						break;
					case 'limits':
						var max = child.getElementsByTagName('max')[0];
						var min = child.getElementsByTagName('min')[0];

						data.limits.max = parseFloat(max.textContent);
						data.limits.min = parseFloat(min.textContent);
						break;

				}
			}

			// if min is equal to or greater than max, consider the joint static

			if (data.limits.min >= data.limits.max) {

				data.static = true;
			}

			// calculate middle position

			data.middlePosition = (data.limits.min + data.limits.max) / 2.0;

			return data;
		}

		function parseKinematicsLink(xml) {

			var data = {
				sid: xml.getAttribute('sid'),
				name: xml.getAttribute('name') || '',
				attachments: [],
				transforms: []
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'attachment_full':
						data.attachments.push(parseKinematicsAttachment(child));
						break;

					case 'matrix':
					case 'translate':
					case 'rotate':
						data.transforms.push(parseKinematicsTransform(child));
						break;

				}
			}

			return data;
		}

		function parseKinematicsAttachment(xml) {

			var data = {
				joint: xml.getAttribute('joint').split('/').pop(),
				transforms: [],
				links: []
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'link':
						data.links.push(parseKinematicsLink(child));
						break;

					case 'matrix':
					case 'translate':
					case 'rotate':
						data.transforms.push(parseKinematicsTransform(child));
						break;

				}
			}

			return data;
		}

		function parseKinematicsTransform(xml) {

			var data = {
				type: xml.nodeName
			};

			var array = parseFloats(xml.textContent);

			switch (data.type) {

				case 'matrix':
					data.obj = new THREE.Matrix4();
					data.obj.fromArray(array).transpose();
					break;

				case 'translate':
					data.obj = new THREE.Vector3();
					data.obj.fromArray(array);
					break;

				case 'rotate':
					data.obj = new THREE.Vector3();
					data.obj.fromArray(array);
					data.angle = THREE.Math.degToRad(array[3]);
					break;

			}

			return data;
		}

		function parseKinematicsScene(xml) {

			var data = {
				bindJointAxis: []
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'bind_joint_axis':
						data.bindJointAxis.push(parseKinematicsBindJointAxis(child));
						break;

				}
			}

			library.kinematicsScenes[parseId(xml.getAttribute('url'))] = data;
		}

		function parseKinematicsBindJointAxis(xml) {

			var data = {
				target: xml.getAttribute('target').split('/').pop()
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'axis':
						var param = child.getElementsByTagName('param')[0];
						data.axis = param.textContent;
						var tmpJointIndex = data.axis.split('inst_').pop().split('axis')[0];
						data.jointIndex = tmpJointIndex.substr(0, tmpJointIndex.length - 1);
						break;

				}
			}

			return data;
		}

		function buildKinematicsScene(data) {

			if (data.build !== undefined) return data.build;

			return data;
		}

		function getKinematicsScene(id) {

			return getBuild(library.kinematicsScenes[id], buildKinematicsScene);
		}

		function setupKinematics() {

			var kinematicsModelId = Object.keys(library.kinematicsModels)[0];
			var kinematicsSceneId = Object.keys(library.kinematicsScenes)[0];
			var visualSceneId = Object.keys(library.visualScenes)[0];

			if (kinematicsModelId === undefined || kinematicsSceneId === undefined) return;

			var kinematicsModel = getKinematicsModel(kinematicsModelId);
			var kinematicsScene = getKinematicsScene(kinematicsSceneId);
			var visualScene = getVisualScene(visualSceneId);

			var bindJointAxis = kinematicsScene.bindJointAxis;
			var jointMap = {};

			for (var i = 0, l = bindJointAxis.length; i < l; i++) {

				var axis = bindJointAxis[i];

				// the result of the following query is an element of type 'translate', 'rotate','scale' or 'matrix'

				var targetElement = collada.querySelector('[sid="' + axis.target + '"]');

				if (targetElement) {

					// get the parent of the transfrom element

					var parentVisualElement = targetElement.parentElement;

					// connect the joint of the kinematics model with the element in the visual scene

					connect(axis.jointIndex, parentVisualElement);
				}
			}

			function connect(jointIndex, visualElement) {

				var visualElementName = visualElement.getAttribute('name');
				var joint = kinematicsModel.joints[jointIndex];

				visualScene.traverse(function (object) {

					if (object.name === visualElementName) {

						jointMap[jointIndex] = {
							object: object,
							transforms: buildTransformList(visualElement),
							joint: joint,
							position: joint.zeroPosition
						};
					}
				});
			}

			var m0 = new THREE.Matrix4();

			kinematics = {

				joints: kinematicsModel && kinematicsModel.joints,

				getJointValue: function getJointValue(jointIndex) {

					var jointData = jointMap[jointIndex];

					if (jointData) {

						return jointData.position;
					} else {

						console.warn('THREE.ColladaLoader: Joint ' + jointIndex + ' doesn\'t exist.');
					}
				},

				setJointValue: function setJointValue(jointIndex, value) {

					var jointData = jointMap[jointIndex];

					if (jointData) {

						var joint = jointData.joint;

						if (value > joint.limits.max || value < joint.limits.min) {

							console.warn('THREE.ColladaLoader: Joint ' + jointIndex + ' value ' + value + ' outside of limits (min: ' + joint.limits.min + ', max: ' + joint.limits.max + ').');
						} else if (joint.static) {

							console.warn('THREE.ColladaLoader: Joint ' + jointIndex + ' is static.');
						} else {

							var object = jointData.object;
							var axis = joint.axis;
							var transforms = jointData.transforms;

							matrix.identity();

							// each update, we have to apply all transforms in the correct order

							for (var i = 0; i < transforms.length; i++) {

								var transform = transforms[i];

								// if there is a connection of the transform node with a joint, apply the joint value

								if (transform.sid && transform.sid.indexOf(jointIndex) !== -1) {

									switch (joint.type) {

										case 'revolute':
											matrix.multiply(m0.makeRotationAxis(axis, THREE.Math.degToRad(value)));
											break;

										case 'prismatic':
											matrix.multiply(m0.makeTranslation(axis.x * value, axis.y * value, axis.z * value));
											break;

										default:
											console.warn('THREE.ColladaLoader: Unknown joint type: ' + joint.type);
											break;

									}
								} else {

									switch (transform.type) {

										case 'matrix':
											matrix.multiply(transform.obj);
											break;

										case 'translate':
											matrix.multiply(m0.makeTranslation(transform.obj.x, transform.obj.y, transform.obj.z));
											break;

										case 'scale':
											matrix.scale(transform.obj);
											break;

										case 'rotate':
											matrix.multiply(m0.makeRotationAxis(transform.obj, transform.angle));
											break;

									}
								}
							}

							object.matrix.copy(matrix);
							object.matrix.decompose(object.position, object.quaternion, object.scale);

							jointMap[jointIndex].position = value;
						}
					} else {

						console.log('THREE.ColladaLoader: ' + jointIndex + ' does not exist.');
					}
				}

			};
		}

		function buildTransformList(node) {

			var transforms = [];

			var xml = collada.querySelector('[id="' + node.id + '"]');

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'matrix':
						var array = parseFloats(child.textContent);
						var matrix = new THREE.Matrix4().fromArray(array).transpose();
						transforms.push({
							sid: child.getAttribute('sid'),
							type: child.nodeName,
							obj: matrix
						});
						break;

					case 'translate':
					case 'scale':
						var array = parseFloats(child.textContent);
						var vector = new THREE.Vector3().fromArray(array);
						transforms.push({
							sid: child.getAttribute('sid'),
							type: child.nodeName,
							obj: vector
						});
						break;

					case 'rotate':
						var array = parseFloats(child.textContent);
						var vector = new THREE.Vector3().fromArray(array);
						var angle = THREE.Math.degToRad(array[3]);
						transforms.push({
							sid: child.getAttribute('sid'),
							type: child.nodeName,
							obj: vector,
							angle: angle
						});
						break;

				}
			}

			return transforms;
		}

		// nodes

		function prepareNodes(xml) {

			var elements = xml.getElementsByTagName('node');

			// ensure all node elements have id attributes

			for (var i = 0; i < elements.length; i++) {

				var element = elements[i];

				if (element.hasAttribute('id') === false) {

					element.setAttribute('id', generateId());
				}
			}
		}

		var matrix = new THREE.Matrix4();
		var vector = new THREE.Vector3();

		function parseNode(xml) {

			var data = {
				name: xml.getAttribute('name') || '',
				type: xml.getAttribute('type'),
				id: xml.getAttribute('id'),
				sid: xml.getAttribute('sid'),
				matrix: new THREE.Matrix4(),
				nodes: [],
				instanceCameras: [],
				instanceControllers: [],
				instanceLights: [],
				instanceGeometries: [],
				instanceNodes: [],
				transforms: {}
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				if (child.nodeType !== 1) continue;

				switch (child.nodeName) {

					case 'node':
						data.nodes.push(child.getAttribute('id'));
						parseNode(child);
						break;

					case 'instance_camera':
						data.instanceCameras.push(parseId(child.getAttribute('url')));
						break;

					case 'instance_controller':
						data.instanceControllers.push(parseNodeInstance(child));
						break;

					case 'instance_light':
						data.instanceLights.push(parseId(child.getAttribute('url')));
						break;

					case 'instance_geometry':
						data.instanceGeometries.push(parseNodeInstance(child));
						break;

					case 'instance_node':
						data.instanceNodes.push(parseId(child.getAttribute('url')));
						break;

					case 'matrix':
						var array = parseFloats(child.textContent);
						data.matrix.multiply(matrix.fromArray(array).transpose());
						data.transforms[child.getAttribute('sid')] = child.nodeName;
						break;

					case 'translate':
						var array = parseFloats(child.textContent);
						vector.fromArray(array);
						data.matrix.multiply(matrix.makeTranslation(vector.x, vector.y, vector.z));
						data.transforms[child.getAttribute('sid')] = child.nodeName;
						break;

					case 'rotate':
						var array = parseFloats(child.textContent);
						var angle = THREE.Math.degToRad(array[3]);
						data.matrix.multiply(matrix.makeRotationAxis(vector.fromArray(array), angle));
						data.transforms[child.getAttribute('sid')] = child.nodeName;
						break;

					case 'scale':
						var array = parseFloats(child.textContent);
						data.matrix.scale(vector.fromArray(array));
						data.transforms[child.getAttribute('sid')] = child.nodeName;
						break;

					case 'extra':
						break;

					default:
						console.log(child);

				}
			}

			library.nodes[data.id] = data;

			return data;
		}

		function parseNodeInstance(xml) {

			var data = {
				id: parseId(xml.getAttribute('url')),
				materials: {},
				skeletons: []
			};

			for (var i = 0; i < xml.childNodes.length; i++) {

				var child = xml.childNodes[i];

				switch (child.nodeName) {

					case 'bind_material':
						var instances = child.getElementsByTagName('instance_material');

						for (var j = 0; j < instances.length; j++) {

							var instance = instances[j];
							var symbol = instance.getAttribute('symbol');
							var target = instance.getAttribute('target');

							data.materials[symbol] = parseId(target);
						}

						break;

					case 'skeleton':
						data.skeletons.push(parseId(child.textContent));
						break;

					default:
						break;

				}
			}

			return data;
		}

		function buildSkeleton(skeletons, joints) {

			var boneData = [];
			var sortedBoneData = [];

			var i, j, data;

			// a skeleton can have multiple root bones. collada expresses this
			// situtation with multiple "skeleton" tags per controller instance

			for (i = 0; i < skeletons.length; i++) {

				var skeleton = skeletons[i];
				var root = getNode(skeleton);

				// setup bone data for a single bone hierarchy

				buildBoneHierarchy(root, joints, boneData);
			}

			// sort bone data (the order is defined in the corresponding controller)

			for (i = 0; i < joints.length; i++) {

				for (j = 0; j < boneData.length; j++) {

					data = boneData[j];

					if (data.bone.name === joints[i].name) {

						sortedBoneData[i] = data;
						data.processed = true;
						break;
					}
				}
			}

			// add unprocessed bone data at the end of the list

			for (i = 0; i < boneData.length; i++) {

				data = boneData[i];

				if (data.processed === false) {

					sortedBoneData.push(data);
					data.processed = true;
				}
			}

			// setup arrays for skeleton creation

			var bones = [];
			var boneInverses = [];

			for (i = 0; i < sortedBoneData.length; i++) {

				data = sortedBoneData[i];

				bones.push(data.bone);
				boneInverses.push(data.boneInverse);
			}

			return new THREE.Skeleton(bones, boneInverses);
		}

		function buildBoneHierarchy(root, joints, boneData) {

			// setup bone data from visual scene

			root.traverse(function (object) {

				if (object.isBone === true) {

					var boneInverse;

					// retrieve the boneInverse from the controller data

					for (var i = 0; i < joints.length; i++) {

						var joint = joints[i];

						if (joint.name === object.name) {

							boneInverse = joint.boneInverse;
							break;
						}
					}

					if (boneInverse === undefined) {

						// Unfortunately, there can be joints in the visual scene that are not part of the
						// corresponding controller. In this case, we have to create a dummy boneInverse matrix
						// for the respective bone. This bone won't affect any vertices, because there are no skin indices
						// and weights defined for it. But we still have to add the bone to the sorted bone list in order to
						// ensure a correct animation of the model.

						boneInverse = new THREE.Matrix4();
					}

					boneData.push({ bone: object, boneInverse: boneInverse, processed: false });
				}
			});
		}

		function buildNode(data) {

			var objects = [];

			var matrix = data.matrix;
			var nodes = data.nodes;
			var type = data.type;
			var instanceCameras = data.instanceCameras;
			var instanceControllers = data.instanceControllers;
			var instanceLights = data.instanceLights;
			var instanceGeometries = data.instanceGeometries;
			var instanceNodes = data.instanceNodes;

			// nodes

			for (var i = 0, l = nodes.length; i < l; i++) {

				objects.push(getNode(nodes[i]));
			}

			// instance cameras

			for (var i = 0, l = instanceCameras.length; i < l; i++) {

				var instanceCamera = getCamera(instanceCameras[i]);

				if (instanceCamera !== null) {

					objects.push(instanceCamera.clone());
				}
			}

			// instance controllers

			for (var i = 0, l = instanceControllers.length; i < l; i++) {

				var instance = instanceControllers[i];
				var controller = getController(instance.id);
				var geometries = getGeometry(controller.id);
				var newObjects = buildObjects(geometries, instance.materials);

				var skeletons = instance.skeletons;
				var joints = controller.skin.joints;

				var skeleton = buildSkeleton(skeletons, joints);

				for (var j = 0, jl = newObjects.length; j < jl; j++) {

					var object = newObjects[j];

					if (object.isSkinnedMesh) {

						object.bind(skeleton, controller.skin.bindMatrix);
						object.normalizeSkinWeights();
					}

					objects.push(object);
				}
			}

			// instance lights

			for (var i = 0, l = instanceLights.length; i < l; i++) {

				var instanceLight = getLight(instanceLights[i]);

				if (instanceLight !== null) {

					objects.push(instanceLight.clone());
				}
			}

			// instance geometries

			for (var i = 0, l = instanceGeometries.length; i < l; i++) {

				var instance = instanceGeometries[i];

				// a single geometry instance in collada can lead to multiple object3Ds.
				// this is the case when primitives are combined like triangles and lines

				var geometries = getGeometry(instance.id);
				var newObjects = buildObjects(geometries, instance.materials);

				for (var j = 0, jl = newObjects.length; j < jl; j++) {

					objects.push(newObjects[j]);
				}
			}

			// instance nodes

			for (var i = 0, l = instanceNodes.length; i < l; i++) {

				objects.push(getNode(instanceNodes[i]).clone());
			}

			var object;

			if (nodes.length === 0 && objects.length === 1) {

				object = objects[0];
			} else {

				object = type === 'JOINT' ? new THREE.Bone() : new THREE.Group();

				for (var i = 0; i < objects.length; i++) {

					object.add(objects[i]);
				}
			}

			object.name = type === 'JOINT' ? data.sid : data.name;
			object.matrix.copy(matrix);
			object.matrix.decompose(object.position, object.quaternion, object.scale);

			return object;
		}

		function resolveMaterialBinding(keys, instanceMaterials) {

			var materials = [];

			for (var i = 0, l = keys.length; i < l; i++) {

				var id = instanceMaterials[keys[i]];
				materials.push(getMaterial(id));
			}

			return materials;
		}

		function buildObjects(geometries, instanceMaterials) {

			var objects = [];

			for (var type in geometries) {

				var geometry = geometries[type];

				var materials = resolveMaterialBinding(geometry.materialKeys, instanceMaterials);

				// handle case if no materials are defined

				if (materials.length === 0) {

					if (type === 'lines' || type === 'linestrips') {

						materials.push(new THREE.LineBasicMaterial());
					} else {

						materials.push(new THREE.MeshPhongMaterial());
					}
				}

				// regard skinning

				var skinning = geometry.data.attributes.skinIndex !== undefined;

				if (skinning) {

					for (var i = 0, l = materials.length; i < l; i++) {

						materials[i].skinning = true;
					}
				}

				// choose between a single or multi materials (material array)

				var material = materials.length === 1 ? materials[0] : materials;

				// now create a specific 3D object

				var object;

				switch (type) {

					case 'lines':
						object = new THREE.LineSegments(geometry.data, material);
						break;

					case 'linestrips':
						object = new THREE.Line(geometry.data, material);
						break;

					case 'triangles':
					case 'polylist':
						if (skinning) {

							object = new THREE.SkinnedMesh(geometry.data, material);
						} else {

							object = new THREE.Mesh(geometry.data, material);
						}
						break;

				}

				objects.push(object);
			}

			return objects;
		}

		function getNode(id) {

			return getBuild(library.nodes[id], buildNode);
		}

		// visual scenes

		function parseVisualScene(xml) {

			var data = {
				name: xml.getAttribute('name'),
				children: []
			};

			prepareNodes(xml);

			var elements = getElementsByTagName(xml, 'node');

			for (var i = 0; i < elements.length; i++) {

				data.children.push(parseNode(elements[i]));
			}

			library.visualScenes[xml.getAttribute('id')] = data;
		}

		function buildVisualScene(data) {

			var group = new THREE.Group();
			group.name = data.name;

			var children = data.children;

			for (var i = 0; i < children.length; i++) {

				var child = children[i];

				if (child.id === null) {

					group.add(buildNode(child));
				} else {

					// if there is an ID, let's try to get the finished build (e.g. joints are already build)

					group.add(getNode(child.id));
				}
			}

			return group;
		}

		function getVisualScene(id) {

			return getBuild(library.visualScenes[id], buildVisualScene);
		}

		// scenes

		function parseScene(xml) {

			var instance = getElementsByTagName(xml, 'instance_visual_scene')[0];
			return getVisualScene(parseId(instance.getAttribute('url')));
		}

		function setupAnimations() {

			var clips = library.clips;

			if (isEmpty(clips) === true) {

				if (isEmpty(library.animations) === false) {

					// if there are animations but no clips, we create a default clip for playback

					var tracks = [];

					for (var id in library.animations) {

						var animationTracks = getAnimation(id);

						for (var i = 0, l = animationTracks.length; i < l; i++) {

							tracks.push(animationTracks[i]);
						}
					}

					animations.push(new THREE.AnimationClip('default', -1, tracks));
				}
			} else {

				for (var id in clips) {

					animations.push(getAnimationClip(id));
				}
			}
		}

		console.time('THREE.ColladaLoader');

		if (text.length === 0) {

			return { scene: new THREE.Scene() };
		}

		console.time('THREE.ColladaLoader: DOMParser');

		var xml = new DOMParser().parseFromString(text, 'application/xml');

		console.timeEnd('THREE.ColladaLoader: DOMParser');

		var collada = getElementsByTagName(xml, 'COLLADA')[0];

		// metadata

		var version = collada.getAttribute('version');
		console.log('THREE.ColladaLoader: File version', version);

		var asset = parseAsset(getElementsByTagName(collada, 'asset')[0]);
		var textureLoader = new THREE.TextureLoader(this.manager);
		textureLoader.setPath(path).setCrossOrigin(this.crossOrigin);

		//

		var animations = [];
		var kinematics = {};
		var count = 0;

		//

		var library = {
			animations: {},
			clips: {},
			controllers: {},
			images: {},
			effects: {},
			materials: {},
			cameras: {},
			lights: {},
			geometries: {},
			nodes: {},
			visualScenes: {},
			kinematicsModels: {},
			kinematicsScenes: {}
		};

		console.time('THREE.ColladaLoader: Parse');

		parseLibrary(collada, 'library_animations', 'animation', parseAnimation);
		parseLibrary(collada, 'library_animation_clips', 'animation_clip', parseAnimationClip);
		parseLibrary(collada, 'library_controllers', 'controller', parseController);
		parseLibrary(collada, 'library_images', 'image', parseImage);
		parseLibrary(collada, 'library_effects', 'effect', parseEffect);
		parseLibrary(collada, 'library_materials', 'material', parseMaterial);
		parseLibrary(collada, 'library_cameras', 'camera', parseCamera);
		parseLibrary(collada, 'library_lights', 'light', parseLight);
		parseLibrary(collada, 'library_geometries', 'geometry', parseGeometry);
		parseLibrary(collada, 'library_nodes', 'node', parseNode);
		parseLibrary(collada, 'library_visual_scenes', 'visual_scene', parseVisualScene);
		parseLibrary(collada, 'library_kinematics_models', 'kinematics_model', parseKinematicsModel);
		parseLibrary(collada, 'scene', 'instance_kinematics_scene', parseKinematicsScene);

		console.timeEnd('THREE.ColladaLoader: Parse');

		console.time('THREE.ColladaLoader: Build');

		buildLibrary(library.animations, buildAnimation);
		buildLibrary(library.clips, buildAnimationClip);
		buildLibrary(library.controllers, buildController);
		buildLibrary(library.images, buildImage);
		buildLibrary(library.effects, buildEffect);
		buildLibrary(library.materials, buildMaterial);
		buildLibrary(library.cameras, buildCamera);
		buildLibrary(library.lights, buildLight);
		buildLibrary(library.geometries, buildGeometry);
		buildLibrary(library.visualScenes, buildVisualScene);

		console.timeEnd('THREE.ColladaLoader: Build');

		setupAnimations();
		setupKinematics();

		var scene = parseScene(getElementsByTagName(collada, 'scene')[0]);

		if (asset.upAxis === 'Z_UP') {

			scene.rotation.x = -Math.PI / 2;
		}

		scene.scale.multiplyScalar(asset.unit);

		console.timeEnd('THREE.ColladaLoader');

		return {
			animations: animations,
			kinematics: kinematics,
			library: library,
			scene: scene
		};
	}

};

exports.default = THREE.ColladaLoader;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * @author mrdoob / http://mrdoob.com/
 */

THREE.DDSLoader = function () {

	this._parser = THREE.DDSLoader.parse;
};

THREE.DDSLoader.prototype = Object.create(THREE.CompressedTextureLoader.prototype);
THREE.DDSLoader.prototype.constructor = THREE.DDSLoader;

THREE.DDSLoader.parse = function (buffer, loadMipmaps) {

	var dds = { mipmaps: [], width: 0, height: 0, format: null, mipmapCount: 1 };

	// Adapted from @toji's DDS utils
	// https://github.com/toji/webgl-texture-utils/blob/master/texture-util/dds.js

	// All values and structures referenced from:
	// http://msdn.microsoft.com/en-us/library/bb943991.aspx/

	var DDS_MAGIC = 0x20534444;

	var DDSD_CAPS = 0x1,
	    DDSD_HEIGHT = 0x2,
	    DDSD_WIDTH = 0x4,
	    DDSD_PITCH = 0x8,
	    DDSD_PIXELFORMAT = 0x1000,
	    DDSD_MIPMAPCOUNT = 0x20000,
	    DDSD_LINEARSIZE = 0x80000,
	    DDSD_DEPTH = 0x800000;

	var DDSCAPS_COMPLEX = 0x8,
	    DDSCAPS_MIPMAP = 0x400000,
	    DDSCAPS_TEXTURE = 0x1000;

	var DDSCAPS2_CUBEMAP = 0x200,
	    DDSCAPS2_CUBEMAP_POSITIVEX = 0x400,
	    DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800,
	    DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000,
	    DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000,
	    DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000,
	    DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000,
	    DDSCAPS2_VOLUME = 0x200000;

	var DDPF_ALPHAPIXELS = 0x1,
	    DDPF_ALPHA = 0x2,
	    DDPF_FOURCC = 0x4,
	    DDPF_RGB = 0x40,
	    DDPF_YUV = 0x200,
	    DDPF_LUMINANCE = 0x20000;

	function fourCCToInt32(value) {

		return value.charCodeAt(0) + (value.charCodeAt(1) << 8) + (value.charCodeAt(2) << 16) + (value.charCodeAt(3) << 24);
	}

	function int32ToFourCC(value) {

		return String.fromCharCode(value & 0xff, value >> 8 & 0xff, value >> 16 & 0xff, value >> 24 & 0xff);
	}

	function loadARGBMip(buffer, dataOffset, width, height) {

		var dataLength = width * height * 4;
		var srcBuffer = new Uint8Array(buffer, dataOffset, dataLength);
		var byteArray = new Uint8Array(dataLength);
		var dst = 0;
		var src = 0;
		for (var y = 0; y < height; y++) {

			for (var x = 0; x < width; x++) {

				var b = srcBuffer[src];src++;
				var g = srcBuffer[src];src++;
				var r = srcBuffer[src];src++;
				var a = srcBuffer[src];src++;
				byteArray[dst] = r;dst++; //r
				byteArray[dst] = g;dst++; //g
				byteArray[dst] = b;dst++; //b
				byteArray[dst] = a;dst++; //a
			}
		}
		return byteArray;
	}

	var FOURCC_DXT1 = fourCCToInt32("DXT1");
	var FOURCC_DXT3 = fourCCToInt32("DXT3");
	var FOURCC_DXT5 = fourCCToInt32("DXT5");
	var FOURCC_ETC1 = fourCCToInt32("ETC1");

	var headerLengthInt = 31; // The header length in 32 bit ints

	// Offsets into the header array

	var off_magic = 0;

	var off_size = 1;
	var off_flags = 2;
	var off_height = 3;
	var off_width = 4;

	var off_mipmapCount = 7;

	var off_pfFlags = 20;
	var off_pfFourCC = 21;
	var off_RGBBitCount = 22;
	var off_RBitMask = 23;
	var off_GBitMask = 24;
	var off_BBitMask = 25;
	var off_ABitMask = 26;

	var off_caps = 27;
	var off_caps2 = 28;
	var off_caps3 = 29;
	var off_caps4 = 30;

	// Parse header

	var header = new Int32Array(buffer, 0, headerLengthInt);

	if (header[off_magic] !== DDS_MAGIC) {

		console.error('THREE.DDSLoader.parse: Invalid magic number in DDS header.');
		return dds;
	}

	if (!header[off_pfFlags] & DDPF_FOURCC) {

		console.error('THREE.DDSLoader.parse: Unsupported format, must contain a FourCC code.');
		return dds;
	}

	var blockBytes;

	var fourCC = header[off_pfFourCC];

	var isRGBAUncompressed = false;

	switch (fourCC) {

		case FOURCC_DXT1:

			blockBytes = 8;
			dds.format = THREE.RGB_S3TC_DXT1_Format;
			break;

		case FOURCC_DXT3:

			blockBytes = 16;
			dds.format = THREE.RGBA_S3TC_DXT3_Format;
			break;

		case FOURCC_DXT5:

			blockBytes = 16;
			dds.format = THREE.RGBA_S3TC_DXT5_Format;
			break;

		case FOURCC_ETC1:

			blockBytes = 8;
			dds.format = THREE.RGB_ETC1_Format;
			break;

		default:

			if (header[off_RGBBitCount] === 32 && header[off_RBitMask] & 0xff0000 && header[off_GBitMask] & 0xff00 && header[off_BBitMask] & 0xff && header[off_ABitMask] & 0xff000000) {

				isRGBAUncompressed = true;
				blockBytes = 64;
				dds.format = THREE.RGBAFormat;
			} else {

				console.error('THREE.DDSLoader.parse: Unsupported FourCC code ', int32ToFourCC(fourCC));
				return dds;
			}

	}

	dds.mipmapCount = 1;

	if (header[off_flags] & DDSD_MIPMAPCOUNT && loadMipmaps !== false) {

		dds.mipmapCount = Math.max(1, header[off_mipmapCount]);
	}

	var caps2 = header[off_caps2];
	dds.isCubemap = caps2 & DDSCAPS2_CUBEMAP ? true : false;
	if (dds.isCubemap && (!(caps2 & DDSCAPS2_CUBEMAP_POSITIVEX) || !(caps2 & DDSCAPS2_CUBEMAP_NEGATIVEX) || !(caps2 & DDSCAPS2_CUBEMAP_POSITIVEY) || !(caps2 & DDSCAPS2_CUBEMAP_NEGATIVEY) || !(caps2 & DDSCAPS2_CUBEMAP_POSITIVEZ) || !(caps2 & DDSCAPS2_CUBEMAP_NEGATIVEZ))) {

		console.error('THREE.DDSLoader.parse: Incomplete cubemap faces');
		return dds;
	}

	dds.width = header[off_width];
	dds.height = header[off_height];

	var dataOffset = header[off_size] + 4;

	// Extract mipmaps buffers

	var faces = dds.isCubemap ? 6 : 1;

	for (var face = 0; face < faces; face++) {

		var width = dds.width;
		var height = dds.height;

		for (var i = 0; i < dds.mipmapCount; i++) {

			if (isRGBAUncompressed) {

				var byteArray = loadARGBMip(buffer, dataOffset, width, height);
				var dataLength = byteArray.length;
			} else {

				var dataLength = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockBytes;
				var byteArray = new Uint8Array(buffer, dataOffset, dataLength);
			}

			var mipmap = { "data": byteArray, "width": width, "height": height };
			dds.mipmaps.push(mipmap);

			dataOffset += dataLength;

			width = Math.max(width >> 1, 1);
			height = Math.max(height >> 1, 1);
		}
	}

	return dds;
};

exports.default = THREE.DDSLoader;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Richard M. / https://github.com/richardmonette
 */

// https://github.com/mrdoob/three.js/issues/10652
// https://en.wikipedia.org/wiki/OpenEXR

THREE.EXRLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.EXRLoader.prototype = Object.create(THREE.DataTextureLoader.prototype);

THREE.EXRLoader.prototype._parser = function (buffer) {

	function parseNullTerminatedString(buffer, offset) {

		var uintBuffer = new Uint8Array(buffer);
		var endOffset = 0;

		while (uintBuffer[offset.value + endOffset] != 0) {

			endOffset += 1;
		}

		var stringValue = new TextDecoder().decode(new Uint8Array(buffer).slice(offset.value, offset.value + endOffset));

		offset.value = offset.value + endOffset + 1;

		return stringValue;
	}

	function parseFixedLengthString(buffer, offset, size) {

		var stringValue = new TextDecoder().decode(new Uint8Array(buffer).slice(offset.value, offset.value + size));

		offset.value = offset.value + size;

		return stringValue;
	}

	function parseUlong(buffer, offset) {

		var uLong = new DataView(buffer.slice(offset.value, offset.value + 4)).getUint32(0, true);

		offset.value = offset.value + 8;

		return uLong;
	}

	function parseUint32(buffer, offset) {

		var Uint32 = new DataView(buffer.slice(offset.value, offset.value + 4)).getUint32(0, true);

		offset.value = offset.value + 4;

		return Uint32;
	}

	function parseUint8(buffer, offset) {

		var Uint8 = new DataView(buffer.slice(offset.value, offset.value + 1)).getUint8(0, true);

		offset.value = offset.value + 1;

		return Uint8;
	}

	function parseFloat32(buffer, offset) {

		var float = new DataView(buffer.slice(offset.value, offset.value + 4)).getFloat32(0, true);

		offset.value += 4;

		return float;
	}

	// https://stackoverflow.com/questions/5678432/decompressing-half-precision-floats-in-javascript
	function decodeFloat16(binary) {

		var exponent = (binary & 0x7C00) >> 10,
		    fraction = binary & 0x03FF;

		return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 0x1F ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 0x400) : 6.103515625e-5 * (fraction / 0x400));
	}

	function parseFloat16(buffer, offset) {

		var float = new DataView(buffer.slice(offset.value, offset.value + 2)).getUint16(0, true);

		offset.value += 2;

		return decodeFloat16(float);
	}

	function parseChlist(buffer, offset, size) {

		var startOffset = offset.value;
		var channels = [];

		while (offset.value < startOffset + size - 1) {

			var name = parseNullTerminatedString(buffer, offset);
			var pixelType = parseUint32(buffer, offset); // TODO: Cast this to UINT, HALF or FLOAT
			var pLinear = parseUint8(buffer, offset);
			offset.value += 3; // reserved, three chars
			var xSampling = parseUint32(buffer, offset);
			var ySampling = parseUint32(buffer, offset);

			channels.push({
				name: name,
				pixelType: pixelType,
				pLinear: pLinear,
				xSampling: xSampling,
				ySampling: ySampling
			});
		}

		offset.value += 1;

		return channels;
	}

	function parseChromaticities(buffer, offset) {

		var redX = parseFloat32(buffer, offset);
		var redY = parseFloat32(buffer, offset);
		var greenX = parseFloat32(buffer, offset);
		var greenY = parseFloat32(buffer, offset);
		var blueX = parseFloat32(buffer, offset);
		var blueY = parseFloat32(buffer, offset);
		var whiteX = parseFloat32(buffer, offset);
		var whiteY = parseFloat32(buffer, offset);

		return { redX: redX, redY: redY, greenX: greenX, greenY: greenY, blueX: blueX, blueY: blueY, whiteX: whiteX, whiteY: whiteY };
	}

	function parseCompression(buffer, offset) {

		var compressionCodes = ['NO_COMPRESSION', 'PIZ_COMPRESSION'];

		var compression = parseUint8(buffer, offset);

		return compressionCodes[compression];
	}

	function parseBox2i(buffer, offset) {

		var xMin = parseUint32(buffer, offset);
		var yMin = parseUint32(buffer, offset);
		var xMax = parseUint32(buffer, offset);
		var yMax = parseUint32(buffer, offset);

		return { xMin: xMin, yMin: yMin, xMax: xMax, yMax: yMax };
	}

	function parseLineOrder(buffer, offset) {

		var lineOrders = ['INCREASING_Y'];

		var lineOrder = parseUint8(buffer, offset);

		return lineOrders[lineOrder];
	}

	function parseV2f(buffer, offset) {

		var x = parseFloat32(buffer, offset);
		var y = parseFloat32(buffer, offset);

		return [x, y];
	}

	function parseValue(buffer, offset, type, size) {

		if (type == 'string' || type == 'iccProfile') {

			return parseFixedLengthString(buffer, offset, size);
		} else if (type == 'chlist') {

			return parseChlist(buffer, offset, size);
		} else if (type == 'chromaticities') {

			return parseChromaticities(buffer, offset);
		} else if (type == 'compression') {

			return parseCompression(buffer, offset);
		} else if (type == 'box2i') {

			return parseBox2i(buffer, offset);
		} else if (type == 'lineOrder') {

			return parseLineOrder(buffer, offset);
		} else if (type == 'float') {

			return parseFloat32(buffer, offset);
		} else if (type == 'v2f') {

			return parseV2f(buffer, offset);
		} else {

			throw 'Cannot parse value for unsupported type: ' + type;
		}
	}

	var EXRHeader = {};

	var magic = new DataView(buffer).getUint32(0, true);
	var versionByteZero = new DataView(buffer).getUint8(4, true);
	var fullMask = new DataView(buffer).getUint8(5, true);

	// start of header

	var offset = { value: 8 }; // start at 8, after magic stuff

	var keepReading = true;

	while (keepReading) {

		var attributeName = parseNullTerminatedString(buffer, offset);

		if (attributeName == 0) {

			keepReading = false;
		} else {

			var attributeType = parseNullTerminatedString(buffer, offset);
			var attributeSize = parseUint32(buffer, offset);
			var attributeValue = parseValue(buffer, offset, attributeType, attributeSize);

			EXRHeader[attributeName] = attributeValue;
		}
	}

	// offsets

	var dataWindowHeight = EXRHeader.dataWindow.yMax + 1;
	var scanlineBlockSize = 1; // 1 for no compression, 32 for PIZ
	var numBlocks = dataWindowHeight / scanlineBlockSize;

	for (var i = 0; i < numBlocks; i++) {

		var scanlineOffset = parseUlong(buffer, offset);
	}

	// we should be passed the scanline offset table, start reading pixel data

	var width = EXRHeader.dataWindow.xMax - EXRHeader.dataWindow.xMin + 1;
	var height = EXRHeader.dataWindow.yMax - EXRHeader.dataWindow.yMin + 1;
	var numChannels = EXRHeader.channels.length;

	var byteArray = new Float32Array(width * height * numChannels);

	var channelOffsets = {
		R: 0,
		G: 1,
		B: 2,
		A: 3
	};

	for (var y = 0; y < height; y++) {

		var y_scanline = parseUint32(buffer, offset);
		var dataSize = parseUint32(buffer, offset);

		for (var channelID = 0; channelID < EXRHeader.channels.length; channelID++) {

			if (EXRHeader.channels[channelID].pixelType == 1) {

				// HALF
				for (var x = 0; x < width; x++) {

					var val = parseFloat16(buffer, offset);
					var cOff = channelOffsets[EXRHeader.channels[channelID].name];

					byteArray[(width - y_scanline) * (height * numChannels) + x * numChannels + cOff] = val;
				}
			} else {

				throw 'Only supported pixel format is HALF';
			}
		}
	}

	return {
		header: EXRHeader,
		width: width,
		height: height,
		data: byteArray,
		format: THREE.RGBAFormat,
		type: THREE.FloatType
	};
};

exports.default = THREE.EXRLoader;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Kyle-Larson https://github.com/Kyle-Larson
 * @author Takahiro https://github.com/takahirox
 * @author Lewy Blue https://github.com/looeee
 *
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or to be any version in Binary format.
 *
 * Supports:
 * 	Mesh Generation (Positional Data)
 * 	Normal Data (Per Vertex Drawing Instance)
 *	UV Data (Per Vertex Drawing Instance)
 *	Skinning
 *	Animation
 * 	- Separated Animations based on stacks.
 * 	- Skeletal & Non-Skeletal Animations
 *	NURBS (Open, Closed and Periodic forms)
 *
 * Needs Support:
 *	Euler rotation order
 *
 *
 * FBX format references:
 * 	https://wiki.blender.org/index.php/User:Mont29/Foundation/FBX_File_Structure
 *
 * 	Binary format specification:
 *		https://code.blender.org/2013/08/fbx-binary-file-format-specification/
 *		https://wiki.rogiken.org/specifications/file-format/fbx/ (more detail but Japanese)
 */

(function () {

	THREE.FBXLoader = function (manager) {

		this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	};

	Object.assign(THREE.FBXLoader.prototype, {

		load: function load(url, onLoad, onProgress, onError) {

			var self = this;

			var resourceDirectory = THREE.LoaderUtils.extractUrlBase(url);

			var loader = new THREE.FileLoader(this.manager);
			loader.setResponseType('arraybuffer');
			loader.load(url, function (buffer) {

				try {

					var scene = self.parse(buffer, resourceDirectory);
					onLoad(scene);
				} catch (error) {

					window.setTimeout(function () {

						if (onError) onError(error);

						self.manager.itemError(url);
					}, 0);
				}
			}, onProgress, onError);
		},

		parse: function parse(FBXBuffer, resourceDirectory) {

			var FBXTree;

			if (isFbxFormatBinary(FBXBuffer)) {

				FBXTree = new BinaryParser().parse(FBXBuffer);
			} else {

				var FBXText = convertArrayBufferToString(FBXBuffer);

				if (!isFbxFormatASCII(FBXText)) {

					throw new Error('THREE.FBXLoader: Unknown format.');
				}

				if (getFbxVersion(FBXText) < 7000) {

					throw new Error('THREE.FBXLoader: FBX version not supported, FileVersion: ' + getFbxVersion(FBXText));
				}

				FBXTree = new TextParser().parse(FBXText);
			}

			// console.log( FBXTree );

			var connections = parseConnections(FBXTree);
			var images = parseImages(FBXTree);
			var textures = parseTextures(FBXTree, new THREE.TextureLoader(this.manager).setPath(resourceDirectory), images, connections);
			var materials = parseMaterials(FBXTree, textures, connections);
			var skeletons = parseDeformers(FBXTree, connections);
			var geometryMap = parseGeometries(FBXTree, connections, skeletons);
			var sceneGraph = parseScene(FBXTree, connections, skeletons, geometryMap, materials);

			return sceneGraph;
		}

	});

	// Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
	// and details the connection type
	function parseConnections(FBXTree) {

		var connectionMap = new Map();

		if ('Connections' in FBXTree) {

			var rawConnections = FBXTree.Connections.connections;

			rawConnections.forEach(function (rawConnection) {

				var fromID = rawConnection[0];
				var toID = rawConnection[1];
				var relationship = rawConnection[2];

				if (!connectionMap.has(fromID)) {

					connectionMap.set(fromID, {
						parents: [],
						children: []
					});
				}

				var parentRelationship = { ID: toID, relationship: relationship };
				connectionMap.get(fromID).parents.push(parentRelationship);

				if (!connectionMap.has(toID)) {

					connectionMap.set(toID, {
						parents: [],
						children: []
					});
				}

				var childRelationship = { ID: fromID, relationship: relationship };
				connectionMap.get(toID).children.push(childRelationship);
			});
		}

		return connectionMap;
	}

	// Parse FBXTree.Objects.Video for embedded image data
	// These images are connected to textures in FBXTree.Objects.Textures
	// via FBXTree.Connections.
	function parseImages(FBXTree) {

		var images = {};
		var blobs = {};

		if ('Video' in FBXTree.Objects) {

			var videoNodes = FBXTree.Objects.Video;

			for (var nodeID in videoNodes) {

				var videoNode = videoNodes[nodeID];

				var id = parseInt(nodeID);

				images[id] = videoNode.Filename;

				// raw image data is in videoNode.Content
				if ('Content' in videoNode) {

					var arrayBufferContent = videoNode.Content instanceof ArrayBuffer && videoNode.Content.byteLength > 0;
					var base64Content = typeof videoNode.Content === 'string' && videoNode.Content !== '';

					if (arrayBufferContent || base64Content) {

						var image = parseImage(videoNodes[nodeID]);

						blobs[videoNode.Filename] = image;
					}
				}
			}
		}

		for (var id in images) {

			var filename = images[id];

			if (blobs[filename] !== undefined) images[id] = blobs[filename];else images[id] = images[id].split('\\').pop();
		}

		return images;
	}

	// Parse embedded image data in FBXTree.Video.Content
	function parseImage(videoNode) {

		var content = videoNode.Content;
		var fileName = videoNode.RelativeFilename || videoNode.Filename;
		var extension = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();

		var type;

		switch (extension) {

			case 'bmp':

				type = 'image/bmp';
				break;

			case 'jpg':
			case 'jpeg':

				type = 'image/jpeg';
				break;

			case 'png':

				type = 'image/png';
				break;

			case 'tif':

				type = 'image/tiff';
				break;

			default:

				console.warn('FBXLoader: Image type "' + extension + '" is not supported.');
				return;

		}

		if (typeof content === 'string') {
			// ASCII format

			return 'data:' + type + ';base64,' + content;
		} else {
			// Binary Format

			var array = new Uint8Array(content);
			return window.URL.createObjectURL(new Blob([array], { type: type }));
		}
	}

	// Parse nodes in FBXTree.Objects.Texture
	// These contain details such as UV scaling, cropping, rotation etc and are connected
	// to images in FBXTree.Objects.Video
	function parseTextures(FBXTree, loader, images, connections) {

		var textureMap = new Map();

		if ('Texture' in FBXTree.Objects) {

			var textureNodes = FBXTree.Objects.Texture;
			for (var nodeID in textureNodes) {

				var texture = parseTexture(textureNodes[nodeID], loader, images, connections);
				textureMap.set(parseInt(nodeID), texture);
			}
		}

		return textureMap;
	}

	// Parse individual node in FBXTree.Objects.Texture
	function parseTexture(textureNode, loader, images, connections) {

		var texture = loadTexture(textureNode, loader, images, connections);

		texture.ID = textureNode.id;

		texture.name = textureNode.attrName;

		var wrapModeU = textureNode.WrapModeU;
		var wrapModeV = textureNode.WrapModeV;

		var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
		var valueV = wrapModeV !== undefined ? wrapModeV.value : 0;

		// http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
		// 0: repeat(default), 1: clamp

		texture.wrapS = valueU === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
		texture.wrapT = valueV === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

		if ('Scaling' in textureNode) {

			var values = textureNode.Scaling.value;

			texture.repeat.x = values[0];
			texture.repeat.y = values[1];
		}

		return texture;
	}

	// load a texture specified as a blob or data URI, or via an external URL using THREE.TextureLoader
	function loadTexture(textureNode, loader, images, connections) {

		var fileName;

		var children = connections.get(textureNode.id).children;

		if (children !== undefined && children.length > 0 && images[children[0].ID] !== undefined) {

			fileName = images[children[0].ID];
		}

		var currentPath = loader.path;

		if (fileName.indexOf('blob:') === 0 || fileName.indexOf('data:') === 0) {

			loader.setPath(undefined);
		}

		var texture = loader.load(fileName);

		loader.setPath(currentPath);

		return texture;
	}

	// Parse nodes in FBXTree.Objects.Material
	function parseMaterials(FBXTree, textureMap, connections) {

		var materialMap = new Map();

		if ('Material' in FBXTree.Objects) {

			var materialNodes = FBXTree.Objects.Material;

			for (var nodeID in materialNodes) {

				var material = parseMaterial(FBXTree, materialNodes[nodeID], textureMap, connections);

				if (material !== null) materialMap.set(parseInt(nodeID), material);
			}
		}

		return materialMap;
	}

	// Parse single node in FBXTree.Objects.Material
	// Materials are connected to texture maps in FBXTree.Objects.Textures
	// FBX format currently only supports Lambert and Phong shading models
	function parseMaterial(FBXTree, materialNode, textureMap, connections) {

		var ID = materialNode.id;
		var name = materialNode.attrName;
		var type = materialNode.ShadingModel;

		//Case where FBX wraps shading model in property object.
		if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {

			type = type.value;
		}

		// Ignore unused materials which don't have any connections.
		if (!connections.has(ID)) return null;

		var parameters = parseParameters(FBXTree, materialNode, textureMap, ID, connections);

		var material;

		switch (type.toLowerCase()) {

			case 'phong':
				material = new THREE.MeshPhongMaterial();
				break;
			case 'lambert':
				material = new THREE.MeshLambertMaterial();
				break;
			default:
				console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type);
				material = new THREE.MeshPhongMaterial({ color: 0x3300ff });
				break;

		}

		material.setValues(parameters);
		material.name = name;

		return material;
	}

	// Parse FBX material and return parameters suitable for a three.js material
	// Also parse the texture map and return any textures associated with the material
	function parseParameters(FBXTree, properties, textureMap, ID, connections) {

		var parameters = {};

		if (properties.BumpFactor) {

			parameters.bumpScale = properties.BumpFactor.value;
		}
		if (properties.Diffuse) {

			parameters.color = parseColor(properties.Diffuse);
		}
		if (properties.DisplacementFactor) {

			parameters.displacementScale = properties.DisplacementFactor.value;
		}
		if (properties.ReflectionFactor) {

			parameters.reflectivity = properties.ReflectionFactor.value;
		}
		if (properties.Specular) {

			parameters.specular = parseColor(properties.Specular);
		}
		if (properties.Shininess) {

			parameters.shininess = properties.Shininess.value;
		}
		if (properties.Emissive) {

			parameters.emissive = parseColor(properties.Emissive);
		}
		if (properties.EmissiveFactor) {

			parameters.emissiveIntensity = parseFloat(properties.EmissiveFactor.value);
		}
		if (properties.Opacity) {

			parameters.opacity = parseFloat(properties.Opacity.value);
		}
		if (parameters.opacity < 1.0) {

			parameters.transparent = true;
		}

		connections.get(ID).children.forEach(function (child) {

			var type = child.relationship;

			switch (type) {

				case 'Bump':
					parameters.bumpMap = textureMap.get(child.ID);
					break;

				case 'DiffuseColor':
					parameters.map = getTexture(FBXTree, textureMap, child.ID, connections);
					break;

				case 'DisplacementColor':
					parameters.displacementMap = getTexture(FBXTree, textureMap, child.ID, connections);
					break;

				case 'EmissiveColor':
					parameters.emissiveMap = getTexture(FBXTree, textureMap, child.ID, connections);
					break;

				case 'NormalMap':
					parameters.normalMap = getTexture(FBXTree, textureMap, child.ID, connections);
					break;

				case 'ReflectionColor':
					parameters.envMap = getTexture(FBXTree, textureMap, child.ID, connections);
					parameters.envMap.mapping = THREE.EquirectangularReflectionMapping;
					break;

				case 'SpecularColor':
					parameters.specularMap = getTexture(FBXTree, textureMap, child.ID, connections);
					break;

				case 'TransparentColor':
					parameters.alphaMap = getTexture(FBXTree, textureMap, child.ID, connections);
					parameters.transparent = true;
					break;

				case 'AmbientColor':
				case 'ShininessExponent': // AKA glossiness map
				case 'SpecularFactor': // AKA specularLevel
				case 'VectorDisplacementColor': // NOTE: Seems to be a copy of DisplacementColor
				default:
					console.warn('THREE.FBXLoader: %s map is not supported in three.js, skipping texture.', type);
					break;

			}
		});

		return parameters;
	}

	// get a texture from the textureMap for use by a material.
	function getTexture(FBXTree, textureMap, id, connections) {

		// if the texture is a layered texture, just use the first layer and issue a warning
		if ('LayeredTexture' in FBXTree.Objects && id in FBXTree.Objects.LayeredTexture) {

			console.warn('THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.');
			id = connections.get(id).children[0].ID;
		}

		return textureMap.get(id);
	}

	// Parse nodes in FBXTree.Objects.Deformer
	// Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
	// Generates map of Skeleton-like objects for use later when generating and binding skeletons.
	function parseDeformers(FBXTree, connections) {

		var skeletons = {};

		if ('Deformer' in FBXTree.Objects) {

			var DeformerNodes = FBXTree.Objects.Deformer;

			for (var nodeID in DeformerNodes) {

				var deformerNode = DeformerNodes[nodeID];

				if (deformerNode.attrType === 'Skin') {

					var relationships = connections.get(parseInt(nodeID));

					var skeleton = parseSkeleton(relationships, DeformerNodes);
					skeleton.ID = nodeID;

					if (relationships.parents.length > 1) console.warn('THREE.FBXLoader: skeleton attached to more than one geometry is not supported.');
					skeleton.geometryID = relationships.parents[0].ID;

					skeletons[nodeID] = skeleton;
				}
			}
		}

		return skeletons;
	}

	// Parse single nodes in FBXTree.Objects.Deformer
	// The top level deformer nodes have type 'Skin' and subDeformer nodes have type 'Cluster'
	// Each skin node represents a skeleton and each cluster node represents a bone
	function parseSkeleton(connections, deformerNodes) {

		var rawBones = [];

		connections.children.forEach(function (child) {

			var subDeformerNode = deformerNodes[child.ID];

			if (subDeformerNode.attrType !== 'Cluster') return;

			var rawBone = {

				ID: child.ID,
				indices: [],
				weights: [],
				transform: new THREE.Matrix4().fromArray(subDeformerNode.Transform.a),
				transformLink: new THREE.Matrix4().fromArray(subDeformerNode.TransformLink.a),
				linkMode: subDeformerNode.Mode

			};

			if ('Indexes' in subDeformerNode) {

				rawBone.indices = subDeformerNode.Indexes.a;
				rawBone.weights = subDeformerNode.Weights.a;
			}

			rawBones.push(rawBone);
		});

		return {

			rawBones: rawBones,
			bones: []

		};
	}

	// Parse nodes in FBXTree.Objects.Geometry
	function parseGeometries(FBXTree, connections, skeletons) {

		var geometryMap = new Map();

		if ('Geometry' in FBXTree.Objects) {

			var geometryNodes = FBXTree.Objects.Geometry;

			for (var nodeID in geometryNodes) {

				var relationships = connections.get(parseInt(nodeID));
				var geo = parseGeometry(FBXTree, relationships, geometryNodes[nodeID], skeletons);

				geometryMap.set(parseInt(nodeID), geo);
			}
		}

		return geometryMap;
	}

	// Parse single node in FBXTree.Objects.Geometry
	function parseGeometry(FBXTree, relationships, geometryNode, skeletons) {

		switch (geometryNode.attrType) {

			case 'Mesh':
				return parseMeshGeometry(FBXTree, relationships, geometryNode, skeletons);
				break;

			case 'NurbsCurve':
				return parseNurbsGeometry(geometryNode);
				break;

		}
	}

	// Parse single node mesh geometry in FBXTree.Objects.Geometry
	function parseMeshGeometry(FBXTree, relationships, geometryNode, skeletons) {

		var modelNodes = relationships.parents.map(function (parent) {

			return FBXTree.Objects.Model[parent.ID];
		});

		// don't create geometry if it is not associated with any models
		if (modelNodes.length === 0) return;

		var skeleton = relationships.children.reduce(function (skeleton, child) {

			if (skeletons[child.ID] !== undefined) skeleton = skeletons[child.ID];

			return skeleton;
		}, null);

		var preTransform = new THREE.Matrix4();

		// TODO: if there is more than one model associated with the geometry, AND the models have
		// different geometric transforms, then this will cause problems
		// if ( modelNodes.length > 1 ) { }

		// For now just assume one model and get the preRotations from that
		var modelNode = modelNodes[0];

		if ('GeometricRotation' in modelNode) {

			var array = modelNode.GeometricRotation.value.map(THREE.Math.degToRad);
			array[3] = 'ZYX';

			preTransform.makeRotationFromEuler(new THREE.Euler().fromArray(array));
		}

		if ('GeometricTranslation' in modelNode) {

			preTransform.setPosition(new THREE.Vector3().fromArray(modelNode.GeometricTranslation.value));
		}

		return genGeometry(FBXTree, relationships, geometryNode, skeleton, preTransform);
	}

	// Generate a THREE.BufferGeometry from a node in FBXTree.Objects.Geometry
	function genGeometry(FBXTree, relationships, geometryNode, skeleton, preTransform) {

		var vertexPositions = geometryNode.Vertices.a;
		var vertexIndices = geometryNode.PolygonVertexIndex.a;

		// create arrays to hold the final data used to build the buffergeometry
		var vertexBuffer = [];
		var normalBuffer = [];
		var colorsBuffer = [];
		var uvsBuffer = [];
		var materialIndexBuffer = [];
		var vertexWeightsBuffer = [];
		var weightsIndicesBuffer = [];

		if (geometryNode.LayerElementColor) {

			var colorInfo = getColors(geometryNode.LayerElementColor[0]);
		}

		if (geometryNode.LayerElementMaterial) {

			var materialInfo = getMaterials(geometryNode.LayerElementMaterial[0]);
		}

		if (geometryNode.LayerElementNormal) {

			var normalInfo = getNormals(geometryNode.LayerElementNormal[0]);
		}

		if (geometryNode.LayerElementUV) {

			var uvInfo = [];
			var i = 0;
			while (geometryNode.LayerElementUV[i]) {

				uvInfo.push(getUVs(geometryNode.LayerElementUV[i]));
				i++;
			}
		}

		var weightTable = {};

		if (skeleton !== null) {

			skeleton.rawBones.forEach(function (rawBone, i) {

				// loop over the bone's vertex indices and weights
				rawBone.indices.forEach(function (index, j) {

					if (weightTable[index] === undefined) weightTable[index] = [];

					weightTable[index].push({

						id: i,
						weight: rawBone.weights[j]

					});
				});
			});
		}

		var polygonIndex = 0;
		var faceLength = 0;
		var displayedWeightsWarning = false;

		// these will hold data for a single face
		var vertexPositionIndexes = [];
		var faceNormals = [];
		var faceColors = [];
		var faceUVs = [];
		var faceWeights = [];
		var faceWeightIndices = [];

		vertexIndices.forEach(function (vertexIndex, polygonVertexIndex) {

			var endOfFace = false;

			// Face index and vertex index arrays are combined in a single array
			// A cube with quad faces looks like this:
			// PolygonVertexIndex: *24 {
			//  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
			//  }
			// Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
			// to find index of last vertex multiply by -1 and subtract 1: -3 * - 1 - 1 = 2
			if (vertexIndex < 0) {

				vertexIndex = vertexIndex ^ -1; // equivalent to ( x * -1 ) - 1
				vertexIndices[polygonVertexIndex] = vertexIndex;
				endOfFace = true;
			}

			var weightIndices = [];
			var weights = [];

			vertexPositionIndexes.push(vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2);

			if (colorInfo) {

				var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, colorInfo);

				faceColors.push(data[0], data[1], data[2]);
			}

			if (skeleton) {

				if (weightTable[vertexIndex] !== undefined) {

					weightTable[vertexIndex].forEach(function (wt) {

						weights.push(wt.weight);
						weightIndices.push(wt.id);
					});
				}

				if (weights.length > 4) {

					if (!displayedWeightsWarning) {

						console.warn('THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.');
						displayedWeightsWarning = true;
					}

					var wIndex = [0, 0, 0, 0];
					var Weight = [0, 0, 0, 0];

					weights.forEach(function (weight, weightIndex) {

						var currentWeight = weight;
						var currentIndex = weightIndices[weightIndex];

						Weight.forEach(function (comparedWeight, comparedWeightIndex, comparedWeightArray) {

							if (currentWeight > comparedWeight) {

								comparedWeightArray[comparedWeightIndex] = currentWeight;
								currentWeight = comparedWeight;

								var tmp = wIndex[comparedWeightIndex];
								wIndex[comparedWeightIndex] = currentIndex;
								currentIndex = tmp;
							}
						});
					});

					weightIndices = wIndex;
					weights = Weight;
				}

				// if the weight array is shorter than 4 pad with 0s
				while (weights.length < 4) {

					weights.push(0);
					weightIndices.push(0);
				}

				for (var i = 0; i < 4; ++i) {

					faceWeights.push(weights[i]);
					faceWeightIndices.push(weightIndices[i]);
				}
			}

			if (normalInfo) {

				var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, normalInfo);

				faceNormals.push(data[0], data[1], data[2]);
			}

			if (materialInfo && materialInfo.mappingType !== 'AllSame') {

				var materialIndex = getData(polygonVertexIndex, polygonIndex, vertexIndex, materialInfo)[0];
			}

			if (uvInfo) {

				uvInfo.forEach(function (uv, i) {

					var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, uv);

					if (faceUVs[i] === undefined) {

						faceUVs[i] = [];
					}

					faceUVs[i].push(data[0]);
					faceUVs[i].push(data[1]);
				});
			}

			faceLength++;

			// we have reached the end of a face - it may have 4 sides though
			// in which case the data is split to represent two 3 sided faces
			if (endOfFace) {

				for (var i = 2; i < faceLength; i++) {

					vertexBuffer.push(vertexPositions[vertexPositionIndexes[0]]);
					vertexBuffer.push(vertexPositions[vertexPositionIndexes[1]]);
					vertexBuffer.push(vertexPositions[vertexPositionIndexes[2]]);

					vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i - 1) * 3]]);
					vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i - 1) * 3 + 1]]);
					vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i - 1) * 3 + 2]]);

					vertexBuffer.push(vertexPositions[vertexPositionIndexes[i * 3]]);
					vertexBuffer.push(vertexPositions[vertexPositionIndexes[i * 3 + 1]]);
					vertexBuffer.push(vertexPositions[vertexPositionIndexes[i * 3 + 2]]);

					if (skeleton) {

						vertexWeightsBuffer.push(faceWeights[0]);
						vertexWeightsBuffer.push(faceWeights[1]);
						vertexWeightsBuffer.push(faceWeights[2]);
						vertexWeightsBuffer.push(faceWeights[3]);

						vertexWeightsBuffer.push(faceWeights[(i - 1) * 4]);
						vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 1]);
						vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 2]);
						vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 3]);

						vertexWeightsBuffer.push(faceWeights[i * 4]);
						vertexWeightsBuffer.push(faceWeights[i * 4 + 1]);
						vertexWeightsBuffer.push(faceWeights[i * 4 + 2]);
						vertexWeightsBuffer.push(faceWeights[i * 4 + 3]);

						weightsIndicesBuffer.push(faceWeightIndices[0]);
						weightsIndicesBuffer.push(faceWeightIndices[1]);
						weightsIndicesBuffer.push(faceWeightIndices[2]);
						weightsIndicesBuffer.push(faceWeightIndices[3]);

						weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4]);
						weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 1]);
						weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 2]);
						weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 3]);

						weightsIndicesBuffer.push(faceWeightIndices[i * 4]);
						weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 1]);
						weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 2]);
						weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 3]);
					}

					if (colorInfo) {

						colorsBuffer.push(faceColors[0]);
						colorsBuffer.push(faceColors[1]);
						colorsBuffer.push(faceColors[2]);

						colorsBuffer.push(faceColors[(i - 1) * 3]);
						colorsBuffer.push(faceColors[(i - 1) * 3 + 1]);
						colorsBuffer.push(faceColors[(i - 1) * 3 + 2]);

						colorsBuffer.push(faceColors[i * 3]);
						colorsBuffer.push(faceColors[i * 3 + 1]);
						colorsBuffer.push(faceColors[i * 3 + 2]);
					}

					if (materialInfo && materialInfo.mappingType !== 'AllSame') {

						materialIndexBuffer.push(materialIndex);
						materialIndexBuffer.push(materialIndex);
						materialIndexBuffer.push(materialIndex);
					}

					if (normalInfo) {

						normalBuffer.push(faceNormals[0]);
						normalBuffer.push(faceNormals[1]);
						normalBuffer.push(faceNormals[2]);

						normalBuffer.push(faceNormals[(i - 1) * 3]);
						normalBuffer.push(faceNormals[(i - 1) * 3 + 1]);
						normalBuffer.push(faceNormals[(i - 1) * 3 + 2]);

						normalBuffer.push(faceNormals[i * 3]);
						normalBuffer.push(faceNormals[i * 3 + 1]);
						normalBuffer.push(faceNormals[i * 3 + 2]);
					}

					if (uvInfo) {

						uvInfo.forEach(function (uv, j) {

							if (uvsBuffer[j] === undefined) uvsBuffer[j] = [];

							uvsBuffer[j].push(faceUVs[j][0]);
							uvsBuffer[j].push(faceUVs[j][1]);

							uvsBuffer[j].push(faceUVs[j][(i - 1) * 2]);
							uvsBuffer[j].push(faceUVs[j][(i - 1) * 2 + 1]);

							uvsBuffer[j].push(faceUVs[j][i * 2]);
							uvsBuffer[j].push(faceUVs[j][i * 2 + 1]);
						});
					}
				}

				polygonIndex++;
				faceLength = 0;

				// reset arrays for the next face
				vertexPositionIndexes = [];
				faceNormals = [];
				faceColors = [];
				faceUVs = [];
				faceWeights = [];
				faceWeightIndices = [];
			}
		});

		var geo = new THREE.BufferGeometry();
		geo.name = geometryNode.name;

		var positionAttribute = new THREE.Float32BufferAttribute(vertexBuffer, 3);

		preTransform.applyToBufferAttribute(positionAttribute);

		geo.addAttribute('position', positionAttribute);

		if (colorsBuffer.length > 0) {

			geo.addAttribute('color', new THREE.Float32BufferAttribute(colorsBuffer, 3));
		}

		if (skeleton) {

			geo.addAttribute('skinIndex', new THREE.Float32BufferAttribute(weightsIndicesBuffer, 4));

			geo.addAttribute('skinWeight', new THREE.Float32BufferAttribute(vertexWeightsBuffer, 4));

			// used later to bind the skeleton to the model
			geo.FBX_Deformer = skeleton;
		}

		if (normalBuffer.length > 0) {

			geo.addAttribute('normal', new THREE.Float32BufferAttribute(normalBuffer, 3));
		}

		uvsBuffer.forEach(function (uvBuffer, i) {

			// subsequent uv buffers are called 'uv1', 'uv2', ...
			var name = 'uv' + (i + 1).toString();

			// the first uv buffer is just called 'uv'
			if (i === 0) {

				name = 'uv';
			}

			geo.addAttribute(name, new THREE.Float32BufferAttribute(uvsBuffer[i], 2));
		});

		if (materialInfo && materialInfo.mappingType !== 'AllSame') {

			// Convert the material indices of each vertex into rendering groups on the geometry.
			var prevMaterialIndex = materialIndexBuffer[0];
			var startIndex = 0;

			materialIndexBuffer.forEach(function (currentIndex, i) {

				if (currentIndex !== prevMaterialIndex) {

					geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);

					prevMaterialIndex = currentIndex;
					startIndex = i;
				}
			});

			// the loop above doesn't add the last group, do that here.
			if (geo.groups.length > 0) {

				var lastGroup = geo.groups[geo.groups.length - 1];
				var lastIndex = lastGroup.start + lastGroup.count;

				if (lastIndex !== materialIndexBuffer.length) {

					geo.addGroup(lastIndex, materialIndexBuffer.length - lastIndex, prevMaterialIndex);
				}
			}

			// case where there are multiple materials but the whole geometry is only
			// using one of them
			if (geo.groups.length === 0) {

				geo.addGroup(0, materialIndexBuffer.length, materialIndexBuffer[0]);
			}
		}

		return geo;
	}

	// Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
	function getNormals(NormalNode) {

		var mappingType = NormalNode.MappingInformationType;
		var referenceType = NormalNode.ReferenceInformationType;
		var buffer = NormalNode.Normals.a;
		var indexBuffer = [];
		if (referenceType === 'IndexToDirect') {

			if ('NormalIndex' in NormalNode) {

				indexBuffer = NormalNode.NormalIndex.a;
			} else if ('NormalsIndex' in NormalNode) {

				indexBuffer = NormalNode.NormalsIndex.a;
			}
		}

		return {
			dataSize: 3,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};
	}

	// Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
	function getUVs(UVNode) {

		var mappingType = UVNode.MappingInformationType;
		var referenceType = UVNode.ReferenceInformationType;
		var buffer = UVNode.UV.a;
		var indexBuffer = [];
		if (referenceType === 'IndexToDirect') {

			indexBuffer = UVNode.UVIndex.a;
		}

		return {
			dataSize: 2,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};
	}

	// Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
	function getColors(ColorNode) {

		var mappingType = ColorNode.MappingInformationType;
		var referenceType = ColorNode.ReferenceInformationType;
		var buffer = ColorNode.Colors.a;
		var indexBuffer = [];
		if (referenceType === 'IndexToDirect') {

			indexBuffer = ColorNode.ColorIndex.a;
		}

		return {
			dataSize: 4,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};
	}

	// Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
	function getMaterials(MaterialNode) {

		var mappingType = MaterialNode.MappingInformationType;
		var referenceType = MaterialNode.ReferenceInformationType;

		if (mappingType === 'NoMappingInformation') {

			return {
				dataSize: 1,
				buffer: [0],
				indices: [0],
				mappingType: 'AllSame',
				referenceType: referenceType
			};
		}

		var materialIndexBuffer = MaterialNode.Materials.a;

		// Since materials are stored as indices, there's a bit of a mismatch between FBX and what
		// we expect.So we create an intermediate buffer that points to the index in the buffer,
		// for conforming with the other functions we've written for other data.
		var materialIndices = [];

		for (var i = 0; i < materialIndexBuffer.length; ++i) {

			materialIndices.push(i);
		}

		return {
			dataSize: 1,
			buffer: materialIndexBuffer,
			indices: materialIndices,
			mappingType: mappingType,
			referenceType: referenceType
		};
	}

	// Functions use the infoObject and given indices to return value array of geometry.
	// Parameters:
	// 	- polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
	// 	- polygonIndex - Index of polygon in geometry.
	// 	- vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
	// 	- infoObject: can be materialInfo, normalInfo, UVInfo or colorInfo
	// Index type:
	//	- Direct: index is same as polygonVertexIndex
	//	- IndexToDirect: infoObject has it's own set of indices
	var dataArray = [];

	var GetData = {

		ByPolygonVertex: {

			Direct: function Direct(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

				var from = polygonVertexIndex * infoObject.dataSize;
				var to = polygonVertexIndex * infoObject.dataSize + infoObject.dataSize;

				return slice(dataArray, infoObject.buffer, from, to);
			},

			IndexToDirect: function IndexToDirect(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

				var index = infoObject.indices[polygonVertexIndex];
				var from = index * infoObject.dataSize;
				var to = index * infoObject.dataSize + infoObject.dataSize;

				return slice(dataArray, infoObject.buffer, from, to);
			}

		},

		ByPolygon: {

			Direct: function Direct(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

				var from = polygonIndex * infoObject.dataSize;
				var to = polygonIndex * infoObject.dataSize + infoObject.dataSize;

				return slice(dataArray, infoObject.buffer, from, to);
			},

			IndexToDirect: function IndexToDirect(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

				var index = infoObject.indices[polygonIndex];
				var from = index * infoObject.dataSize;
				var to = index * infoObject.dataSize + infoObject.dataSize;

				return slice(dataArray, infoObject.buffer, from, to);
			}

		},

		ByVertice: {

			Direct: function Direct(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

				var from = vertexIndex * infoObject.dataSize;
				var to = vertexIndex * infoObject.dataSize + infoObject.dataSize;

				return slice(dataArray, infoObject.buffer, from, to);
			}

		},

		AllSame: {

			IndexToDirect: function IndexToDirect(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

				var from = infoObject.indices[0] * infoObject.dataSize;
				var to = infoObject.indices[0] * infoObject.dataSize + infoObject.dataSize;

				return slice(dataArray, infoObject.buffer, from, to);
			}

		}

	};

	function getData(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

		return GetData[infoObject.mappingType][infoObject.referenceType](polygonVertexIndex, polygonIndex, vertexIndex, infoObject);
	}

	// Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
	function parseNurbsGeometry(geometryNode) {

		if (THREE.NURBSCurve === undefined) {

			console.error('THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.');
			return new THREE.BufferGeometry();
		}

		var order = parseInt(geometryNode.Order);

		if (isNaN(order)) {

			console.error('THREE.FBXLoader: Invalid Order %s given for geometry ID: %s', geometryNode.Order, geometryNode.id);
			return new THREE.BufferGeometry();
		}

		var degree = order - 1;

		var knots = geometryNode.KnotVector.a;
		var controlPoints = [];
		var pointsValues = geometryNode.Points.a;

		for (var i = 0, l = pointsValues.length; i < l; i += 4) {

			controlPoints.push(new THREE.Vector4().fromArray(pointsValues, i));
		}

		var startKnot, endKnot;

		if (geometryNode.Form === 'Closed') {

			controlPoints.push(controlPoints[0]);
		} else if (geometryNode.Form === 'Periodic') {

			startKnot = degree;
			endKnot = knots.length - 1 - startKnot;

			for (var i = 0; i < degree; ++i) {

				controlPoints.push(controlPoints[i]);
			}
		}

		var curve = new THREE.NURBSCurve(degree, knots, controlPoints, startKnot, endKnot);
		var vertices = curve.getPoints(controlPoints.length * 7);

		var positions = new Float32Array(vertices.length * 3);

		vertices.forEach(function (vertex, i) {

			vertex.toArray(positions, i * 3);
		});

		var geometry = new THREE.BufferGeometry();
		geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

		return geometry;
	}

	// create the main THREE.Group() to be returned by the loader
	function parseScene(FBXTree, connections, skeletons, geometryMap, materialMap) {

		var sceneGraph = new THREE.Group();

		var modelMap = parseModels(FBXTree, skeletons, geometryMap, materialMap, connections);

		var modelNodes = FBXTree.Objects.Model;

		modelMap.forEach(function (model) {

			var modelNode = modelNodes[model.ID];
			setLookAtProperties(FBXTree, model, modelNode, connections, sceneGraph);

			var parentConnections = connections.get(model.ID).parents;

			parentConnections.forEach(function (connection) {

				var parent = modelMap.get(connection.ID);
				if (parent !== undefined) parent.add(model);
			});

			if (model.parent === null) {

				sceneGraph.add(model);
			}
		});

		bindSkeleton(FBXTree, skeletons, geometryMap, modelMap, connections);

		addAnimations(FBXTree, connections, sceneGraph);

		createAmbientLight(FBXTree, sceneGraph);

		return sceneGraph;
	}

	// parse nodes in FBXTree.Objects.Model
	function parseModels(FBXTree, skeletons, geometryMap, materialMap, connections) {

		var modelMap = new Map();
		var modelNodes = FBXTree.Objects.Model;

		for (var nodeID in modelNodes) {

			var id = parseInt(nodeID);
			var node = modelNodes[nodeID];
			var relationships = connections.get(id);

			var model = buildSkeleton(relationships, skeletons, id, node.attrName);

			if (!model) {

				switch (node.attrType) {

					case 'Camera':
						model = createCamera(FBXTree, relationships);
						break;
					case 'Light':
						model = createLight(FBXTree, relationships);
						break;
					case 'Mesh':
						model = createMesh(FBXTree, relationships, geometryMap, materialMap);
						break;
					case 'NurbsCurve':
						model = createCurve(relationships, geometryMap);
						break;
					case 'LimbNode': // usually associated with a Bone, however if a Bone was not created we'll make a Group instead
					case 'Null':
					default:
						model = new THREE.Group();
						break;

				}

				model.name = THREE.PropertyBinding.sanitizeNodeName(node.attrName);
				model.ID = id;
			}

			setModelTransforms(FBXTree, model, node);
			modelMap.set(id, model);
		}

		return modelMap;
	}

	function buildSkeleton(relationships, skeletons, id, name) {

		var bone = null;

		relationships.parents.forEach(function (parent) {

			for (var ID in skeletons) {

				var skeleton = skeletons[ID];

				skeleton.rawBones.forEach(function (rawBone, i) {

					if (rawBone.ID === parent.ID) {

						var subBone = bone;
						bone = new THREE.Bone();
						bone.matrixWorld.copy(rawBone.transformLink);

						// set name and id here - otherwise in cases where "subBone" is created it will not have a name / id
						bone.name = THREE.PropertyBinding.sanitizeNodeName(name);
						bone.ID = id;

						skeleton.bones[i] = bone;

						// In cases where a bone is shared between multiple meshes
						// duplicate the bone here and and it as a child of the first bone
						if (subBone !== null) {

							bone.add(subBone);
						}
					}
				});
			}
		});

		return bone;
	}

	// create a THREE.PerspectiveCamera or THREE.OrthographicCamera
	function createCamera(FBXTree, relationships) {

		var model;
		var cameraAttribute;

		relationships.children.forEach(function (child) {

			var attr = FBXTree.Objects.NodeAttribute[child.ID];

			if (attr !== undefined) {

				cameraAttribute = attr;
			}
		});

		if (cameraAttribute === undefined) {

			model = new THREE.Object3D();
		} else {

			var type = 0;
			if (cameraAttribute.CameraProjectionType !== undefined && cameraAttribute.CameraProjectionType.value === 1) {

				type = 1;
			}

			var nearClippingPlane = 1;
			if (cameraAttribute.NearPlane !== undefined) {

				nearClippingPlane = cameraAttribute.NearPlane.value / 1000;
			}

			var farClippingPlane = 1000;
			if (cameraAttribute.FarPlane !== undefined) {

				farClippingPlane = cameraAttribute.FarPlane.value / 1000;
			}

			var width = window.innerWidth;
			var height = window.innerHeight;

			if (cameraAttribute.AspectWidth !== undefined && cameraAttribute.AspectHeight !== undefined) {

				width = cameraAttribute.AspectWidth.value;
				height = cameraAttribute.AspectHeight.value;
			}

			var aspect = width / height;

			var fov = 45;
			if (cameraAttribute.FieldOfView !== undefined) {

				fov = cameraAttribute.FieldOfView.value;
			}

			switch (type) {

				case 0:
					// Perspective
					model = new THREE.PerspectiveCamera(fov, aspect, nearClippingPlane, farClippingPlane);
					break;

				case 1:
					// Orthographic
					model = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, nearClippingPlane, farClippingPlane);
					break;

				default:
					console.warn('THREE.FBXLoader: Unknown camera type ' + type + '.');
					model = new THREE.Object3D();
					break;

			}
		}

		return model;
	}

	// Create a THREE.DirectionalLight, THREE.PointLight or THREE.SpotLight
	function createLight(FBXTree, relationships) {

		var model;
		var lightAttribute;

		relationships.children.forEach(function (child) {

			var attr = FBXTree.Objects.NodeAttribute[child.ID];

			if (attr !== undefined) {

				lightAttribute = attr;
			}
		});

		if (lightAttribute === undefined) {

			model = new THREE.Object3D();
		} else {

			var type;

			// LightType can be undefined for Point lights
			if (lightAttribute.LightType === undefined) {

				type = 0;
			} else {

				type = lightAttribute.LightType.value;
			}

			var color = 0xffffff;

			if (lightAttribute.Color !== undefined) {

				color = parseColor(lightAttribute.Color);
			}

			var intensity = lightAttribute.Intensity === undefined ? 1 : lightAttribute.Intensity.value / 100;

			// light disabled
			if (lightAttribute.CastLightOnObject !== undefined && lightAttribute.CastLightOnObject.value === 0) {

				intensity = 0;
			}

			var distance = 0;
			if (lightAttribute.FarAttenuationEnd !== undefined) {

				if (lightAttribute.EnableFarAttenuation !== undefined && lightAttribute.EnableFarAttenuation.value === 0) {

					distance = 0;
				} else {

					distance = lightAttribute.FarAttenuationEnd.value / 1000;
				}
			}

			// TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?
			var decay = 1;

			switch (type) {

				case 0:
					// Point
					model = new THREE.PointLight(color, intensity, distance, decay);
					break;

				case 1:
					// Directional
					model = new THREE.DirectionalLight(color, intensity);
					break;

				case 2:
					// Spot
					var angle = Math.PI / 3;

					if (lightAttribute.InnerAngle !== undefined) {

						angle = THREE.Math.degToRad(lightAttribute.InnerAngle.value);
					}

					var penumbra = 0;
					if (lightAttribute.OuterAngle !== undefined) {

						// TODO: this is not correct - FBX calculates outer and inner angle in degrees
						// with OuterAngle > InnerAngle && OuterAngle <= Math.PI
						// while three.js uses a penumbra between (0, 1) to attenuate the inner angle
						penumbra = THREE.Math.degToRad(lightAttribute.OuterAngle.value);
						penumbra = Math.max(penumbra, 1);
					}

					model = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
					break;

				default:
					console.warn('THREE.FBXLoader: Unknown light type ' + lightAttribute.LightType.value + ', defaulting to a THREE.PointLight.');
					model = new THREE.PointLight(color, intensity);
					break;

			}

			if (lightAttribute.CastShadows !== undefined && lightAttribute.CastShadows.value === 1) {

				model.castShadow = true;
			}
		}

		return model;
	}

	function createMesh(FBXTree, relationships, geometryMap, materialMap) {

		var model;
		var geometry = null;
		var material = null;
		var materials = [];

		// get geometry and materials(s) from connections
		relationships.children.forEach(function (child) {

			if (geometryMap.has(child.ID)) {

				geometry = geometryMap.get(child.ID);
			}

			if (materialMap.has(child.ID)) {

				materials.push(materialMap.get(child.ID));
			}
		});

		if (materials.length > 1) {

			material = materials;
		} else if (materials.length > 0) {

			material = materials[0];
		} else {

			material = new THREE.MeshPhongMaterial({ color: 0xcccccc });
			materials.push(material);
		}

		if ('color' in geometry.attributes) {

			materials.forEach(function (material) {

				material.vertexColors = THREE.VertexColors;
			});
		}

		if (geometry.FBX_Deformer) {

			materials.forEach(function (material) {

				material.skinning = true;
			});

			model = new THREE.SkinnedMesh(geometry, material);
		} else {

			model = new THREE.Mesh(geometry, material);
		}

		return model;
	}

	function createCurve(relationships, geometryMap) {

		var geometry = relationships.children.reduce(function (geo, child) {

			if (geometryMap.has(child.ID)) geo = geometryMap.get(child.ID);

			return geo;
		}, null);

		// FBX does not list materials for Nurbs lines, so we'll just put our own in here.
		var material = new THREE.LineBasicMaterial({ color: 0x3300ff, linewidth: 1 });
		return new THREE.Line(geometry, material);
	}

	// Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
	function createAmbientLight(FBXTree, sceneGraph) {

		if ('GlobalSettings' in FBXTree && 'AmbientColor' in FBXTree.GlobalSettings) {

			var ambientColor = FBXTree.GlobalSettings.AmbientColor.value;
			var r = ambientColor[0];
			var g = ambientColor[1];
			var b = ambientColor[2];

			if (r !== 0 || g !== 0 || b !== 0) {

				var color = new THREE.Color(r, g, b);
				sceneGraph.add(new THREE.AmbientLight(color, 1));
			}
		}
	}

	function setLookAtProperties(FBXTree, model, modelNode, connections, sceneGraph) {

		if ('LookAtProperty' in modelNode) {

			var children = connections.get(model.ID).children;

			children.forEach(function (child) {

				if (child.relationship === 'LookAtProperty') {

					var lookAtTarget = FBXTree.Objects.Model[child.ID];

					if ('Lcl_Translation' in lookAtTarget) {

						var pos = lookAtTarget.Lcl_Translation.value;

						// DirectionalLight, SpotLight
						if (model.target !== undefined) {

							model.target.position.fromArray(pos);
							sceneGraph.add(model.target);
						} else {
							// Cameras and other Object3Ds

							model.lookAt(new THREE.Vector3().fromArray(pos));
						}
					}
				}
			});
		}
	}

	// parse the model node for transform details and apply them to the model
	function setModelTransforms(FBXTree, model, modelNode) {

		// http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_class_fbx_euler_html
		if ('RotationOrder' in modelNode) {

			var enums = ['XYZ', // default
			'XZY', 'YZX', 'ZXY', 'YXZ', 'ZYX', 'SphericXYZ'];

			var value = parseInt(modelNode.RotationOrder.value, 10);

			if (value > 0 && value < 6) {

				// model.rotation.order = enums[ value ];

				// Note: Euler order other than XYZ is currently not supported, so just display a warning for now
				console.warn('THREE.FBXLoader: unsupported Euler Order: %s. Currently only XYZ order is supported. Animations and rotations may be incorrect.', enums[value]);
			} else if (value === 6) {

				console.warn('THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.');
			}
		}

		if ('Lcl_Translation' in modelNode) {

			model.position.fromArray(modelNode.Lcl_Translation.value);
		}

		if ('Lcl_Rotation' in modelNode) {

			var rotation = modelNode.Lcl_Rotation.value.map(THREE.Math.degToRad);
			rotation.push('ZYX');
			model.rotation.fromArray(rotation);
		}

		if ('Lcl_Scaling' in modelNode) {

			model.scale.fromArray(modelNode.Lcl_Scaling.value);
		}

		if ('PreRotation' in modelNode) {

			var array = modelNode.PreRotation.value.map(THREE.Math.degToRad);
			array[3] = 'ZYX';

			var preRotations = new THREE.Euler().fromArray(array);

			preRotations = new THREE.Quaternion().setFromEuler(preRotations);
			var currentRotation = new THREE.Quaternion().setFromEuler(model.rotation);
			preRotations.multiply(currentRotation);
			model.rotation.setFromQuaternion(preRotations, 'ZYX');
		}
	}

	function bindSkeleton(FBXTree, skeletons, geometryMap, modelMap, connections) {

		var bindMatrices = parsePoseNodes(FBXTree);

		for (var ID in skeletons) {

			var skeleton = skeletons[ID];

			var parents = connections.get(parseInt(skeleton.ID)).parents;

			parents.forEach(function (parent) {

				if (geometryMap.has(parent.ID)) {

					var geoID = parent.ID;
					var geoRelationships = connections.get(geoID);

					geoRelationships.parents.forEach(function (geoConnParent) {

						if (modelMap.has(geoConnParent.ID)) {

							var model = modelMap.get(geoConnParent.ID);

							model.bind(new THREE.Skeleton(skeleton.bones), bindMatrices[geoConnParent.ID]);
						}
					});
				}
			});
		}
	}

	function parsePoseNodes(FBXTree) {

		var bindMatrices = {};

		if ('Pose' in FBXTree.Objects) {

			var BindPoseNode = FBXTree.Objects.Pose;

			for (var nodeID in BindPoseNode) {

				if (BindPoseNode[nodeID].attrType === 'BindPose') {

					var poseNodes = BindPoseNode[nodeID].PoseNode;

					if (Array.isArray(poseNodes)) {

						poseNodes.forEach(function (poseNode) {

							bindMatrices[poseNode.Node] = new THREE.Matrix4().fromArray(poseNode.Matrix.a);
						});
					} else {

						bindMatrices[poseNodes.Node] = new THREE.Matrix4().fromArray(poseNodes.Matrix.a);
					}
				}
			}
		}

		return bindMatrices;
	}

	function parseAnimations(FBXTree, connections) {

		// since the actual transformation data is stored in FBXTree.Objects.AnimationCurve,
		// if this is undefined we can safely assume there are no animations
		if (FBXTree.Objects.AnimationCurve === undefined) return undefined;

		var curveNodesMap = parseAnimationCurveNodes(FBXTree);

		parseAnimationCurves(FBXTree, connections, curveNodesMap);

		var layersMap = parseAnimationLayers(FBXTree, connections, curveNodesMap);
		var rawClips = parseAnimStacks(FBXTree, connections, layersMap);

		return rawClips;
	}

	// parse nodes in FBXTree.Objects.AnimationCurveNode
	// each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
	// and is referenced by an AnimationLayer
	function parseAnimationCurveNodes(FBXTree) {

		var rawCurveNodes = FBXTree.Objects.AnimationCurveNode;

		var curveNodesMap = new Map();

		for (var nodeID in rawCurveNodes) {

			var rawCurveNode = rawCurveNodes[nodeID];

			if (rawCurveNode.attrName.match(/S|R|T/) !== null) {

				var curveNode = {

					id: rawCurveNode.id,
					attr: rawCurveNode.attrName,
					curves: {}

				};

				curveNodesMap.set(curveNode.id, curveNode);
			}
		}

		return curveNodesMap;
	}

	// parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
	// previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
	// axis ( e.g. times and values of x rotation)
	function parseAnimationCurves(FBXTree, connections, curveNodesMap) {

		var rawCurves = FBXTree.Objects.AnimationCurve;

		for (var nodeID in rawCurves) {

			var animationCurve = {

				id: rawCurves[nodeID].id,
				times: rawCurves[nodeID].KeyTime.a.map(convertFBXTimeToSeconds),
				values: rawCurves[nodeID].KeyValueFloat.a

			};

			var relationships = connections.get(animationCurve.id);

			if (relationships !== undefined) {

				var animationCurveID = relationships.parents[0].ID;
				var animationCurveRelationship = relationships.parents[0].relationship;
				var axis = '';

				if (animationCurveRelationship.match(/X/)) {

					axis = 'x';
				} else if (animationCurveRelationship.match(/Y/)) {

					axis = 'y';
				} else if (animationCurveRelationship.match(/Z/)) {

					axis = 'z';
				} else {

					continue;
				}

				curveNodesMap.get(animationCurveID).curves[axis] = animationCurve;
			}
		}
	}

	// parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
	// to various AnimationCurveNodes and is referenced by an AnimationStack node
	// note: theoretically a stack can multiple layers, however in practice there always seems to be one per stack
	function parseAnimationLayers(FBXTree, connections, curveNodesMap) {

		var rawLayers = FBXTree.Objects.AnimationLayer;

		var layersMap = new Map();

		for (var nodeID in rawLayers) {

			var layerCurveNodes = [];

			var connection = connections.get(parseInt(nodeID));

			if (connection !== undefined) {

				// all the animationCurveNodes used in the layer
				var children = connection.children;

				children.forEach(function (child, i) {

					if (curveNodesMap.has(child.ID)) {

						var curveNode = curveNodesMap.get(child.ID);

						if (layerCurveNodes[i] === undefined) {

							var modelID;

							connections.get(child.ID).parents.forEach(function (parent) {

								if (parent.relationship !== undefined) modelID = parent.ID;
							});

							var rawModel = FBXTree.Objects.Model[modelID.toString()];

							var node = {

								modelName: THREE.PropertyBinding.sanitizeNodeName(rawModel.attrName),
								initialPosition: [0, 0, 0],
								initialRotation: [0, 0, 0],
								initialScale: [1, 1, 1]

							};

							if ('Lcl_Translation' in rawModel) node.initialPosition = rawModel.Lcl_Translation.value;

							if ('Lcl_Rotation' in rawModel) node.initialRotation = rawModel.Lcl_Rotation.value;

							if ('Lcl_Scaling' in rawModel) node.initialScale = rawModel.Lcl_Scaling.value;

							// if the animated model is pre rotated, we'll have to apply the pre rotations to every
							// animation value as well
							if ('PreRotation' in rawModel) node.preRotations = rawModel.PreRotation.value;

							layerCurveNodes[i] = node;
						}

						layerCurveNodes[i][curveNode.attr] = curveNode;
					}
				});

				layersMap.set(parseInt(nodeID), layerCurveNodes);
			}
		}

		return layersMap;
	}

	// parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
	// hierarchy. Each Stack node will be used to create a THREE.AnimationClip
	function parseAnimStacks(FBXTree, connections, layersMap) {

		var rawStacks = FBXTree.Objects.AnimationStack;

		// connect the stacks (clips) up to the layers
		var rawClips = {};

		for (var nodeID in rawStacks) {

			var children = connections.get(parseInt(nodeID)).children;

			if (children.length > 1) {

				// it seems like stacks will always be associated with a single layer. But just in case there are files
				// where there are multiple layers per stack, we'll display a warning
				console.warn('THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.');
			}

			var layer = layersMap.get(children[0].ID);

			rawClips[nodeID] = {

				name: rawStacks[nodeID].attrName,
				layer: layer

			};
		}

		return rawClips;
	}

	// take raw animation data from parseAnimations and connect it up to the loaded models
	function addAnimations(FBXTree, connections, sceneGraph) {

		sceneGraph.animations = [];

		var rawClips = parseAnimations(FBXTree, connections);

		if (rawClips === undefined) return;

		for (var key in rawClips) {

			var rawClip = rawClips[key];

			var clip = addClip(rawClip);

			sceneGraph.animations.push(clip);
		}
	}

	function addClip(rawClip) {

		var tracks = [];

		rawClip.layer.forEach(function (rawTracks) {

			tracks = tracks.concat(generateTracks(rawTracks));
		});

		return new THREE.AnimationClip(rawClip.name, -1, tracks);
	}

	function generateTracks(rawTracks) {

		var tracks = [];

		if (rawTracks.T !== undefined && Object.keys(rawTracks.T.curves).length > 0) {

			var positionTrack = generateVectorTrack(rawTracks.modelName, rawTracks.T.curves, rawTracks.initialPosition, 'position');
			if (positionTrack !== undefined) tracks.push(positionTrack);
		}

		if (rawTracks.R !== undefined && Object.keys(rawTracks.R.curves).length > 0) {

			var rotationTrack = generateRotationTrack(rawTracks.modelName, rawTracks.R.curves, rawTracks.initialRotation, rawTracks.preRotations);
			if (rotationTrack !== undefined) tracks.push(rotationTrack);
		}

		if (rawTracks.S !== undefined && Object.keys(rawTracks.S.curves).length > 0) {

			var scaleTrack = generateVectorTrack(rawTracks.modelName, rawTracks.S.curves, rawTracks.initialScale, 'scale');
			if (scaleTrack !== undefined) tracks.push(scaleTrack);
		}

		return tracks;
	}

	function generateVectorTrack(modelName, curves, initialValue, type) {

		var times = getTimesForAllAxes(curves);
		var values = getKeyframeTrackValues(times, curves, initialValue);

		return new THREE.VectorKeyframeTrack(modelName + '.' + type, times, values);
	}

	function generateRotationTrack(modelName, curves, initialValue, preRotations) {

		if (curves.x !== undefined) curves.x.values = curves.x.values.map(THREE.Math.degToRad);
		if (curves.y !== undefined) curves.y.values = curves.y.values.map(THREE.Math.degToRad);
		if (curves.z !== undefined) curves.z.values = curves.z.values.map(THREE.Math.degToRad);

		var times = getTimesForAllAxes(curves);
		var values = getKeyframeTrackValues(times, curves, initialValue);

		if (preRotations !== undefined) {

			preRotations = preRotations.map(THREE.Math.degToRad);
			preRotations.push('ZYX');

			preRotations = new THREE.Euler().fromArray(preRotations);
			preRotations = new THREE.Quaternion().setFromEuler(preRotations);
		}

		var quaternion = new THREE.Quaternion();
		var euler = new THREE.Euler();

		var quaternionValues = [];

		for (var i = 0; i < values.length; i += 3) {

			euler.set(values[i], values[i + 1], values[i + 2], 'ZYX');

			quaternion.setFromEuler(euler);

			if (preRotations !== undefined) quaternion.premultiply(preRotations);

			quaternion.toArray(quaternionValues, i / 3 * 4);
		}

		return new THREE.QuaternionKeyframeTrack(modelName + '.quaternion', times, quaternionValues);
	}

	function getKeyframeTrackValues(times, curves, initialValue) {

		var prevValue = initialValue;

		var values = [];

		var xIndex = -1;
		var yIndex = -1;
		var zIndex = -1;

		times.forEach(function (time) {

			if (curves.x) xIndex = curves.x.times.indexOf(time);
			if (curves.y) yIndex = curves.y.times.indexOf(time);
			if (curves.z) zIndex = curves.z.times.indexOf(time);

			// if there is an x value defined for this frame, use that
			if (xIndex !== -1) {

				var xValue = curves.x.values[xIndex];
				values.push(xValue);
				prevValue[0] = xValue;
			} else {

				// otherwise use the x value from the previous frame
				values.push(prevValue[0]);
			}

			if (yIndex !== -1) {

				var yValue = curves.y.values[yIndex];
				values.push(yValue);
				prevValue[1] = yValue;
			} else {

				values.push(prevValue[1]);
			}

			if (zIndex !== -1) {

				var zValue = curves.z.values[zIndex];
				values.push(zValue);
				prevValue[2] = zValue;
			} else {

				values.push(prevValue[2]);
			}
		});

		return values;
	}

	// For all animated objects, times are defined separately for each axis
	// Here we'll combine the times into one sorted array without duplicates
	function getTimesForAllAxes(curves) {

		var times = [];

		// first join together the times for each axis, if defined
		if (curves.x !== undefined) times = times.concat(curves.x.times);
		if (curves.y !== undefined) times = times.concat(curves.y.times);
		if (curves.z !== undefined) times = times.concat(curves.z.times);

		// then sort them and remove duplicates
		times = times.sort(function (a, b) {

			return a - b;
		}).filter(function (elem, index, array) {

			return array.indexOf(elem) == index;
		});

		return times;
	}

	// parse an FBX file in ASCII format
	function TextParser() {}

	Object.assign(TextParser.prototype, {

		getPrevNode: function getPrevNode() {

			return this.nodeStack[this.currentIndent - 2];
		},

		getCurrentNode: function getCurrentNode() {

			return this.nodeStack[this.currentIndent - 1];
		},

		getCurrentProp: function getCurrentProp() {

			return this.currentProp;
		},

		pushStack: function pushStack(node) {

			this.nodeStack.push(node);
			this.currentIndent += 1;
		},

		popStack: function popStack() {

			this.nodeStack.pop();
			this.currentIndent -= 1;
		},

		setCurrentProp: function setCurrentProp(val, name) {

			this.currentProp = val;
			this.currentPropName = name;
		},

		parse: function parse(text) {

			this.currentIndent = 0;
			this.allNodes = new FBXTree();
			this.nodeStack = [];
			this.currentProp = [];
			this.currentPropName = '';

			var self = this;

			var split = text.split('\n');

			split.forEach(function (line, i) {

				var matchComment = line.match(/^[\s\t]*;/);
				var matchEmpty = line.match(/^[\s\t]*$/);

				if (matchComment || matchEmpty) return;

				var matchBeginning = line.match('^\\t{' + self.currentIndent + '}(\\w+):(.*){', '');
				var matchProperty = line.match('^\\t{' + self.currentIndent + '}(\\w+):[\\s\\t\\r\\n](.*)');
				var matchEnd = line.match('^\\t{' + (self.currentIndent - 1) + '}}');

				if (matchBeginning) {

					self.parseNodeBegin(line, matchBeginning);
				} else if (matchProperty) {

					self.parseNodeProperty(line, matchProperty, split[++i]);
				} else if (matchEnd) {

					self.popStack();
				} else if (line.match(/^[^\s\t}]/)) {

					// large arrays are split over multiple lines terminated with a ',' character
					// if this is encountered the line needs to be joined to the previous line
					self.parseNodePropertyContinued(line);
				}
			});

			return this.allNodes;
		},

		parseNodeBegin: function parseNodeBegin(line, property) {

			var nodeName = property[1].trim().replace(/^"/, '').replace(/"$/, '');

			var nodeAttrs = property[2].split(',').map(function (attr) {

				return attr.trim().replace(/^"/, '').replace(/"$/, '');
			});

			var node = { name: nodeName };
			var attrs = this.parseNodeAttr(nodeAttrs);

			var currentNode = this.getCurrentNode();

			// a top node
			if (this.currentIndent === 0) {

				this.allNodes.add(nodeName, node);
			} else {
				// a subnode

				// if the subnode already exists, append it
				if (nodeName in currentNode) {

					// special case Pose needs PoseNodes as an array
					if (nodeName === 'PoseNode') {

						currentNode.PoseNode.push(node);
					} else if (currentNode[nodeName].id !== undefined) {

						currentNode[nodeName] = {};
						currentNode[nodeName][currentNode[nodeName].id] = currentNode[nodeName];
					}

					if (attrs.id !== '') currentNode[nodeName][attrs.id] = node;
				} else if (typeof attrs.id === 'number') {

					currentNode[nodeName] = {};
					currentNode[nodeName][attrs.id] = node;
				} else if (nodeName !== 'Properties70') {

					if (nodeName === 'PoseNode') currentNode[nodeName] = [node];else currentNode[nodeName] = node;
				}
			}

			if (typeof attrs.id === 'number') node.id = attrs.id;
			if (attrs.name !== '') node.attrName = attrs.name;
			if (attrs.type !== '') node.attrType = attrs.type;

			this.pushStack(node);
		},

		parseNodeAttr: function parseNodeAttr(attrs) {

			var id = attrs[0];

			if (attrs[0] !== '') {

				id = parseInt(attrs[0]);

				if (isNaN(id)) {

					id = attrs[0];
				}
			}

			var name = '',
			    type = '';

			if (attrs.length > 1) {

				name = attrs[1].replace(/^(\w+)::/, '');
				type = attrs[2];
			}

			return { id: id, name: name, type: type };
		},

		parseNodeProperty: function parseNodeProperty(line, property, contentLine) {

			var propName = property[1].replace(/^"/, '').replace(/"$/, '').trim();
			var propValue = property[2].replace(/^"/, '').replace(/"$/, '').trim();

			// for special case: base64 image data follows "Content: ," line
			//	Content: ,
			//	 "/9j/4RDaRXhpZgAATU0A..."
			if (propName === 'Content' && propValue === ',') {

				propValue = contentLine.replace(/"/g, '').replace(/,$/, '').trim();
			}

			var currentNode = this.getCurrentNode();
			var parentName = currentNode.name;

			if (parentName === 'Properties70') {

				this.parseNodeSpecialProperty(line, propName, propValue);
				return;
			}

			// Connections
			if (propName === 'C') {

				var connProps = propValue.split(',').slice(1);
				var from = parseInt(connProps[0]);
				var to = parseInt(connProps[1]);

				var rest = propValue.split(',').slice(3);

				rest = rest.map(function (elem) {

					return elem.trim().replace(/^"/, '');
				});

				propName = 'connections';
				propValue = [from, to];
				append(propValue, rest);

				if (currentNode[propName] === undefined) {

					currentNode[propName] = [];
				}
			}

			// Node
			if (propName === 'Node') currentNode.id = propValue;

			// connections
			if (propName in currentNode && Array.isArray(currentNode[propName])) {

				currentNode[propName].push(propValue);
			} else {

				if (propName !== 'a') currentNode[propName] = propValue;else currentNode.a = propValue;
			}

			this.setCurrentProp(currentNode, propName);

			// convert string to array, unless it ends in ',' in which case more will be added to it
			if (propName === 'a' && propValue.slice(-1) !== ',') {

				currentNode.a = parseNumberArray(propValue);
			}
		},

		parseNodePropertyContinued: function parseNodePropertyContinued(line) {

			var currentNode = this.getCurrentNode();

			currentNode.a += line;

			// if the line doesn't end in ',' we have reached the end of the property value
			// so convert the string to an array
			if (line.slice(-1) !== ',') {

				currentNode.a = parseNumberArray(currentNode.a);
			}
		},

		// parse "Property70"
		parseNodeSpecialProperty: function parseNodeSpecialProperty(line, propName, propValue) {

			// split this
			// P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
			// into array like below
			// ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
			var props = propValue.split('",').map(function (prop) {

				return prop.trim().replace(/^\"/, '').replace(/\s/, '_');
			});

			var innerPropName = props[0];
			var innerPropType1 = props[1];
			var innerPropType2 = props[2];
			var innerPropFlag = props[3];
			var innerPropValue = props[4];

			// cast values where needed, otherwise leave as strings
			switch (innerPropType1) {

				case 'int':
				case 'enum':
				case 'bool':
				case 'ULongLong':
				case 'double':
				case 'Number':
				case 'FieldOfView':
					innerPropValue = parseFloat(innerPropValue);
					break;

				case 'ColorRGB':
				case 'Vector3D':
				case 'Lcl_Translation':
				case 'Lcl_Rotation':
				case 'Lcl_Scaling':
					innerPropValue = parseNumberArray(innerPropValue);
					break;

			}

			// CAUTION: these props must append to parent's parent
			this.getPrevNode()[innerPropName] = {

				'type': innerPropType1,
				'type2': innerPropType2,
				'flag': innerPropFlag,
				'value': innerPropValue

			};

			this.setCurrentProp(this.getPrevNode(), innerPropName);
		}

	});

	// Parse an FBX file in Binary format
	function BinaryParser() {}

	Object.assign(BinaryParser.prototype, {

		parse: function parse(buffer) {

			var reader = new BinaryReader(buffer);
			reader.skip(23); // skip magic 23 bytes

			var version = reader.getUint32();

			console.log('THREE.FBXLoader: FBX binary version: ' + version);

			var allNodes = new FBXTree();

			while (!this.endOfContent(reader)) {

				var node = this.parseNode(reader, version);
				if (node !== null) allNodes.add(node.name, node);
			}

			return allNodes;
		},

		// Check if reader has reached the end of content.
		endOfContent: function endOfContent(reader) {

			// footer size: 160bytes + 16-byte alignment padding
			// - 16bytes: magic
			// - padding til 16-byte alignment (at least 1byte?)
			//	(seems like some exporters embed fixed 15 or 16bytes?)
			// - 4bytes: magic
			// - 4bytes: version
			// - 120bytes: zero
			// - 16bytes: magic
			if (reader.size() % 16 === 0) {

				return (reader.getOffset() + 160 + 16 & ~0xf) >= reader.size();
			} else {

				return reader.getOffset() + 160 + 16 >= reader.size();
			}
		},

		// recursively parse nodes until the end of the file is reached
		parseNode: function parseNode(reader, version) {

			var node = {};

			// The first three data sizes depends on version.
			var endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
			var numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32();

			// note: do not remove this even if you get a linter warning as it moves the buffer forward
			var propertyListLen = version >= 7500 ? reader.getUint64() : reader.getUint32();

			var nameLen = reader.getUint8();
			var name = reader.getString(nameLen);

			// Regards this node as NULL-record if endOffset is zero
			if (endOffset === 0) return null;

			var propertyList = [];

			for (var i = 0; i < numProperties; i++) {

				propertyList.push(this.parseProperty(reader));
			}

			// Regards the first three elements in propertyList as id, attrName, and attrType
			var id = propertyList.length > 0 ? propertyList[0] : '';
			var attrName = propertyList.length > 1 ? propertyList[1] : '';
			var attrType = propertyList.length > 2 ? propertyList[2] : '';

			// check if this node represents just a single property
			// like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
			node.singleProperty = numProperties === 1 && reader.getOffset() === endOffset ? true : false;

			while (endOffset > reader.getOffset()) {

				var subNode = this.parseNode(reader, version);

				if (subNode !== null) this.parseSubNode(name, node, subNode);
			}

			node.propertyList = propertyList; // raw property list used by parent

			if (typeof id === 'number') node.id = id;
			if (attrName !== '') node.attrName = attrName;
			if (attrType !== '') node.attrType = attrType;
			if (name !== '') node.name = name;

			return node;
		},

		parseSubNode: function parseSubNode(name, node, subNode) {

			// special case: child node is single property
			if (subNode.singleProperty === true) {

				var value = subNode.propertyList[0];

				if (Array.isArray(value)) {

					node[subNode.name] = subNode;

					subNode.a = value;
				} else {

					node[subNode.name] = value;
				}
			} else if (name === 'Connections' && subNode.name === 'C') {

				var array = [];

				subNode.propertyList.forEach(function (property, i) {

					// first Connection is FBX type (OO, OP, etc.). We'll discard these
					if (i !== 0) array.push(property);
				});

				if (node.connections === undefined) {

					node.connections = [];
				}

				node.connections.push(array);
			} else if (subNode.name === 'Properties70') {

				var keys = Object.keys(subNode);

				keys.forEach(function (key) {

					node[key] = subNode[key];
				});
			} else if (name === 'Properties70' && subNode.name === 'P') {

				var innerPropName = subNode.propertyList[0];
				var innerPropType1 = subNode.propertyList[1];
				var innerPropType2 = subNode.propertyList[2];
				var innerPropFlag = subNode.propertyList[3];
				var innerPropValue;

				if (innerPropName.indexOf('Lcl ') === 0) innerPropName = innerPropName.replace('Lcl ', 'Lcl_');
				if (innerPropType1.indexOf('Lcl ') === 0) innerPropType1 = innerPropType1.replace('Lcl ', 'Lcl_');

				if (innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' || innerPropType1 === 'Vector3D' || innerPropType1.indexOf('Lcl_') === 0) {

					innerPropValue = [subNode.propertyList[4], subNode.propertyList[5], subNode.propertyList[6]];
				} else {

					innerPropValue = subNode.propertyList[4];
				}

				// this will be copied to parent, see above
				node[innerPropName] = {

					'type': innerPropType1,
					'type2': innerPropType2,
					'flag': innerPropFlag,
					'value': innerPropValue

				};
			} else if (node[subNode.name] === undefined) {

				if (typeof subNode.id === 'number') {

					node[subNode.name] = {};
					node[subNode.name][subNode.id] = subNode;
				} else {

					node[subNode.name] = subNode;
				}
			} else {

				if (subNode.name === 'PoseNode') {

					if (!Array.isArray(node[subNode.name])) {

						node[subNode.name] = [node[subNode.name]];
					}

					node[subNode.name].push(subNode);
				} else if (node[subNode.name][subNode.id] === undefined) {

					node[subNode.name][subNode.id] = subNode;
				}
			}
		},

		parseProperty: function parseProperty(reader) {

			var type = reader.getString(1);

			switch (type) {

				case 'C':
					return reader.getBoolean();

				case 'D':
					return reader.getFloat64();

				case 'F':
					return reader.getFloat32();

				case 'I':
					return reader.getInt32();

				case 'L':
					return reader.getInt64();

				case 'R':
					var length = reader.getUint32();
					return reader.getArrayBuffer(length);

				case 'S':
					var length = reader.getUint32();
					return reader.getString(length);

				case 'Y':
					return reader.getInt16();

				case 'b':
				case 'c':
				case 'd':
				case 'f':
				case 'i':
				case 'l':

					var arrayLength = reader.getUint32();
					var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
					var compressedLength = reader.getUint32();

					if (encoding === 0) {

						switch (type) {

							case 'b':
							case 'c':
								return reader.getBooleanArray(arrayLength);

							case 'd':
								return reader.getFloat64Array(arrayLength);

							case 'f':
								return reader.getFloat32Array(arrayLength);

							case 'i':
								return reader.getInt32Array(arrayLength);

							case 'l':
								return reader.getInt64Array(arrayLength);

						}
					}

					if (window.Zlib === undefined) {

						throw new Error('THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js');
					}

					var inflate = new Zlib.Inflate(new Uint8Array(reader.getArrayBuffer(compressedLength))); // eslint-disable-line no-undef
					var reader2 = new BinaryReader(inflate.decompress().buffer);

					switch (type) {

						case 'b':
						case 'c':
							return reader2.getBooleanArray(arrayLength);

						case 'd':
							return reader2.getFloat64Array(arrayLength);

						case 'f':
							return reader2.getFloat32Array(arrayLength);

						case 'i':
							return reader2.getInt32Array(arrayLength);

						case 'l':
							return reader2.getInt64Array(arrayLength);

					}

				default:
					throw new Error('THREE.FBXLoader: Unknown property type ' + type);

			}
		}

	});

	function BinaryReader(buffer, littleEndian) {

		this.dv = new DataView(buffer);
		this.offset = 0;
		this.littleEndian = littleEndian !== undefined ? littleEndian : true;
	}

	Object.assign(BinaryReader.prototype, {

		getOffset: function getOffset() {

			return this.offset;
		},

		size: function size() {

			return this.dv.buffer.byteLength;
		},

		skip: function skip(length) {

			this.offset += length;
		},

		// seems like true/false representation depends on exporter.
		// true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
		// then sees LSB.
		getBoolean: function getBoolean() {

			return (this.getUint8() & 1) === 1;
		},

		getBooleanArray: function getBooleanArray(size) {

			var a = [];

			for (var i = 0; i < size; i++) {

				a.push(this.getBoolean());
			}

			return a;
		},

		getUint8: function getUint8() {

			var value = this.dv.getUint8(this.offset);
			this.offset += 1;
			return value;
		},

		getInt16: function getInt16() {

			var value = this.dv.getInt16(this.offset, this.littleEndian);
			this.offset += 2;
			return value;
		},

		getInt32: function getInt32() {

			var value = this.dv.getInt32(this.offset, this.littleEndian);
			this.offset += 4;
			return value;
		},

		getInt32Array: function getInt32Array(size) {

			var a = [];

			for (var i = 0; i < size; i++) {

				a.push(this.getInt32());
			}

			return a;
		},

		getUint32: function getUint32() {

			var value = this.dv.getUint32(this.offset, this.littleEndian);
			this.offset += 4;
			return value;
		},

		// JavaScript doesn't support 64-bit integer so calculate this here
		// 1 << 32 will return 1 so using multiply operation instead here.
		// There's a possibility that this method returns wrong value if the value
		// is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
		// TODO: safely handle 64-bit integer
		getInt64: function getInt64() {

			var low, high;

			if (this.littleEndian) {

				low = this.getUint32();
				high = this.getUint32();
			} else {

				high = this.getUint32();
				low = this.getUint32();
			}

			// calculate negative value
			if (high & 0x80000000) {

				high = ~high & 0xFFFFFFFF;
				low = ~low & 0xFFFFFFFF;

				if (low === 0xFFFFFFFF) high = high + 1 & 0xFFFFFFFF;

				low = low + 1 & 0xFFFFFFFF;

				return -(high * 0x100000000 + low);
			}

			return high * 0x100000000 + low;
		},

		getInt64Array: function getInt64Array(size) {

			var a = [];

			for (var i = 0; i < size; i++) {

				a.push(this.getInt64());
			}

			return a;
		},

		// Note: see getInt64() comment
		getUint64: function getUint64() {

			var low, high;

			if (this.littleEndian) {

				low = this.getUint32();
				high = this.getUint32();
			} else {

				high = this.getUint32();
				low = this.getUint32();
			}

			return high * 0x100000000 + low;
		},

		getFloat32: function getFloat32() {

			var value = this.dv.getFloat32(this.offset, this.littleEndian);
			this.offset += 4;
			return value;
		},

		getFloat32Array: function getFloat32Array(size) {

			var a = [];

			for (var i = 0; i < size; i++) {

				a.push(this.getFloat32());
			}

			return a;
		},

		getFloat64: function getFloat64() {

			var value = this.dv.getFloat64(this.offset, this.littleEndian);
			this.offset += 8;
			return value;
		},

		getFloat64Array: function getFloat64Array(size) {

			var a = [];

			for (var i = 0; i < size; i++) {

				a.push(this.getFloat64());
			}

			return a;
		},

		getArrayBuffer: function getArrayBuffer(size) {

			var value = this.dv.buffer.slice(this.offset, this.offset + size);
			this.offset += size;
			return value;
		},

		getString: function getString(size) {

			var a = new Uint8Array(size);

			for (var i = 0; i < size; i++) {

				a[i] = this.getUint8();
			}

			var nullByte = a.indexOf(0);
			if (nullByte >= 0) a = a.slice(0, nullByte);

			return THREE.LoaderUtils.decodeText(a);
		}

	});

	// FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
	// and BinaryParser( FBX Binary format)
	function FBXTree() {}

	Object.assign(FBXTree.prototype, {

		add: function add(key, val) {

			this[key] = val;
		}

	});

	function isFbxFormatBinary(buffer) {

		var CORRECT = 'Kaydara FBX Binary  \0';

		return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length);
	}

	function isFbxFormatASCII(text) {

		var CORRECT = ['K', 'a', 'y', 'd', 'a', 'r', 'a', '\\', 'F', 'B', 'X', '\\', 'B', 'i', 'n', 'a', 'r', 'y', '\\', '\\'];

		var cursor = 0;

		function read(offset) {

			var result = text[offset - 1];
			text = text.slice(cursor + offset);
			cursor++;
			return result;
		}

		for (var i = 0; i < CORRECT.length; ++i) {

			var num = read(1);
			if (num === CORRECT[i]) {

				return false;
			}
		}

		return true;
	}

	function getFbxVersion(text) {

		var versionRegExp = /FBXVersion: (\d+)/;
		var match = text.match(versionRegExp);
		if (match) {

			var version = parseInt(match[1]);
			return version;
		}
		throw new Error('THREE.FBXLoader: Cannot find the version number for the file given.');
	}

	// Converts FBX ticks into real time seconds.
	function convertFBXTimeToSeconds(time) {

		return time / 46186158000;
	}

	// Parses comma separated list of numbers and returns them an array.
	// Used internally by the TextParser
	function parseNumberArray(value) {

		var array = value.split(',').map(function (val) {

			return parseFloat(val);
		});

		return array;
	}

	function parseColor(property) {

		var color = new THREE.Color();

		if (property.type === 'Color') {

			return color.setScalar(property.value);
		}

		return color.fromArray(property.value);
	}

	function convertArrayBufferToString(buffer, from, to) {

		if (from === undefined) from = 0;
		if (to === undefined) to = buffer.byteLength;

		return THREE.LoaderUtils.decodeText(new Uint8Array(buffer, from, to));
	}

	function append(a, b) {

		for (var i = 0, j = a.length, l = b.length; i < l; i++, j++) {

			a[j] = b[i];
		}
	}

	function slice(a, b, from, to) {

		for (var i = from, j = 0; i < to; i++, j++) {

			a[j] = b[i];
		}

		return a;
	}
})();

exports.default = THREE.FBXLoader;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * THREE.GCodeLoader is used to load gcode files usually used for 3D printing or CNC applications.
 *
 * Gcode files are composed by commands used by machines to create objects.
 *
 * @class THREE.GCodeLoader
 * @param {Manager} manager Loading manager.
 * @author tentone
 * @author joewalnes
 */
THREE.GCodeLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

	this.splitLayer = false;
};

THREE.GCodeLoader.prototype.load = function (url, onLoad, onProgress, onError) {

	var self = this;

	var loader = new THREE.FileLoader(self.manager);
	loader.load(url, function (text) {

		onLoad(self.parse(text));
	}, onProgress, onError);
};

THREE.GCodeLoader.prototype.parse = function (data) {

	var state = { x: 0, y: 0, z: 0, e: 0, f: 0, extruding: false, relative: false };
	var layers = [];

	var currentLayer = undefined;

	var pathMaterial = new THREE.LineBasicMaterial({ color: 0xFF0000 });
	pathMaterial.name = 'path';

	var extrudingMaterial = new THREE.LineBasicMaterial({ color: 0x00FF00 });
	extrudingMaterial.name = 'extruded';

	function newLayer(line) {

		currentLayer = { vertex: [], pathVertex: [], z: line.z };
		layers.push(currentLayer);
	}

	//Create lie segment between p1 and p2
	function addSegment(p1, p2) {

		if (currentLayer === undefined) {

			newLayer(p1);
		}

		if (line.extruding) {

			currentLayer.vertex.push(p1.x, p1.y, p1.z);
			currentLayer.vertex.push(p2.x, p2.y, p2.z);
		} else {

			currentLayer.pathVertex.push(p1.x, p1.y, p1.z);
			currentLayer.pathVertex.push(p2.x, p2.y, p2.z);
		}
	}

	function delta(v1, v2) {

		return state.relative ? v2 : v2 - v1;
	}

	function absolute(v1, v2) {

		return state.relative ? v1 + v2 : v2;
	}

	var lines = data.replace(/;.+/g, '').split('\n');

	for (var i = 0; i < lines.length; i++) {

		var tokens = lines[i].split(' ');
		var cmd = tokens[0].toUpperCase();

		//Argumments
		var args = {};
		tokens.splice(1).forEach(function (token) {

			if (token[0] !== undefined) {

				var key = token[0].toLowerCase();
				var value = parseFloat(token.substring(1));
				args[key] = value;
			}
		});

		//Process commands
		//G0/G1 – Linear Movement
		if (cmd === 'G0' || cmd === 'G1') {

			var line = {
				x: args.x !== undefined ? absolute(state.x, args.x) : state.x,
				y: args.y !== undefined ? absolute(state.y, args.y) : state.y,
				z: args.z !== undefined ? absolute(state.z, args.z) : state.z,
				e: args.e !== undefined ? absolute(state.e, args.e) : state.e,
				f: args.f !== undefined ? absolute(state.f, args.f) : state.f
			};

			//Layer change detection is or made by watching Z, it's made by watching when we extrude at a new Z position
			if (delta(state.e, line.e) > 0) {

				line.extruding = delta(state.e, line.e) > 0;

				if (currentLayer == undefined || line.z != currentLayer.z) {

					newLayer(line);
				}
			}

			addSegment(state, line);
			state = line;
		} else if (cmd === 'G2' || cmd === 'G3') {

			//G2/G3 - Arc Movement ( G2 clock wise and G3 counter clock wise )
			console.warn('THREE.GCodeLoader: Arc command not supported');
		} else if (cmd === 'G90') {

			//G90: Set to Absolute Positioning
			state.relative = false;
		} else if (cmd === 'G91') {

			//G91: Set to state.relative Positioning
			state.relative = true;
		} else if (cmd === 'G92') {

			//G92: Set Position
			var line = state;
			line.x = args.x !== undefined ? args.x : line.x;
			line.y = args.y !== undefined ? args.y : line.y;
			line.z = args.z !== undefined ? args.z : line.z;
			line.e = args.e !== undefined ? args.e : line.e;
			state = line;
		} else {

			console.warn('THREE.GCodeLoader: Command not supported:' + cmd);
		}
	}

	function addObject(vertex, extruding) {

		var geometry = new THREE.BufferGeometry();
		geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertex, 3));

		var segments = new THREE.LineSegments(geometry, extruding ? extrudingMaterial : pathMaterial);
		segments.name = 'layer' + i;
		object.add(segments);
	}

	var object = new THREE.Group();
	object.name = 'gcode';

	if (this.splitLayer) {

		for (var i = 0; i < layers.length; i++) {

			var layer = layers[i];
			addObject(layer.vertex, true);
			addObject(layer.pathVertex, false);
		}
	} else {

		var vertex = [],
		    pathVertex = [];

		for (var i = 0; i < layers.length; i++) {

			var layer = layers[i];

			vertex = vertex.concat(layer.vertex);
			pathVertex = pathVertex.concat(layer.pathVertex);
		}

		addObject(vertex, true);
		addObject(pathVertex, false);
	}

	object.rotation.set(-Math.PI / 2, 0, 0);

	return object;
};

exports.default = THREE.GCodeLoader;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Rich Tibbett / https://github.com/richtr
 * @author mrdoob / http://mrdoob.com/
 * @author Tony Parisi / http://www.tonyparisi.com/
 * @author Takahiro / https://github.com/takahirox
 * @author Don McCurdy / https://www.donmccurdy.com
 */

THREE.GLTFLoader = function () {

	function GLTFLoader(manager) {

		this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	}

	GLTFLoader.prototype = {

		constructor: GLTFLoader,

		crossOrigin: 'Anonymous',

		load: function load(url, onLoad, onProgress, onError) {

			var scope = this;

			var path = this.path !== undefined ? this.path : THREE.LoaderUtils.extractUrlBase(url);

			var loader = new THREE.FileLoader(scope.manager);

			loader.setResponseType('arraybuffer');

			loader.load(url, function (data) {

				try {

					scope.parse(data, path, onLoad, onError);
				} catch (e) {

					if (onError !== undefined) {

						onError(e);
					} else {

						throw e;
					}
				}
			}, onProgress, onError);
		},

		setCrossOrigin: function setCrossOrigin(value) {

			this.crossOrigin = value;
			return this;
		},

		setPath: function setPath(value) {

			this.path = value;
			return this;
		},

		parse: function parse(data, path, onLoad, onError) {

			var content;
			var extensions = {};

			if (typeof data === 'string') {

				content = data;
			} else {

				var magic = THREE.LoaderUtils.decodeText(new Uint8Array(data, 0, 4));

				if (magic === BINARY_EXTENSION_HEADER_MAGIC) {

					try {

						extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
					} catch (error) {

						if (onError) onError(error);
						return;
					}

					content = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
				} else {

					content = THREE.LoaderUtils.decodeText(new Uint8Array(data));
				}
			}

			var json = JSON.parse(content);

			if (json.asset === undefined || json.asset.version[0] < 2) {

				if (onError) onError(new Error('THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead.'));
				return;
			}

			if (json.extensionsUsed) {

				if (json.extensionsUsed.indexOf(EXTENSIONS.KHR_LIGHTS) >= 0) {

					extensions[EXTENSIONS.KHR_LIGHTS] = new GLTFLightsExtension(json);
				}

				if (json.extensionsUsed.indexOf(EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS) >= 0) {

					extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS] = new GLTFMaterialsPbrSpecularGlossinessExtension();
				}
			}

			console.time('GLTFLoader');

			var parser = new GLTFParser(json, extensions, {

				path: path || this.path || '',
				crossOrigin: this.crossOrigin,
				manager: this.manager

			});

			parser.parse(function (scene, scenes, cameras, animations, asset) {

				console.timeEnd('GLTFLoader');

				var glTF = {
					scene: scene,
					scenes: scenes,
					cameras: cameras,
					animations: animations,
					asset: asset
				};

				onLoad(glTF);
			}, onError);
		}

	};

	/* GLTFREGISTRY */

	function GLTFRegistry() {

		var objects = {};

		return {

			get: function get(key) {

				return objects[key];
			},

			add: function add(key, object) {

				objects[key] = object;
			},

			remove: function remove(key) {

				delete objects[key];
			},

			removeAll: function removeAll() {

				objects = {};
			}

		};
	}

	/*********************************/
	/********** EXTENSIONS ***********/
	/*********************************/

	var EXTENSIONS = {
		KHR_BINARY_GLTF: 'KHR_binary_glTF',
		KHR_LIGHTS: 'KHR_lights',
		KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness'
	};

	/**
  * Lights Extension
  *
  * Specification: PENDING
  */
	function GLTFLightsExtension(json) {

		this.name = EXTENSIONS.KHR_LIGHTS;

		this.lights = {};

		var extension = json.extensions && json.extensions[EXTENSIONS.KHR_LIGHTS] || {};
		var lights = extension.lights || {};

		for (var lightId in lights) {

			var light = lights[lightId];
			var lightNode;

			var color = new THREE.Color().fromArray(light.color);

			switch (light.type) {

				case 'directional':
					lightNode = new THREE.DirectionalLight(color);
					lightNode.position.set(0, 0, 1);
					break;

				case 'point':
					lightNode = new THREE.PointLight(color);
					break;

				case 'spot':
					lightNode = new THREE.SpotLight(color);
					lightNode.position.set(0, 0, 1);
					break;

				case 'ambient':
					lightNode = new THREE.AmbientLight(color);
					break;

			}

			if (lightNode) {

				if (light.constantAttenuation !== undefined) {

					lightNode.intensity = light.constantAttenuation;
				}

				if (light.linearAttenuation !== undefined) {

					lightNode.distance = 1 / light.linearAttenuation;
				}

				if (light.quadraticAttenuation !== undefined) {

					lightNode.decay = light.quadraticAttenuation;
				}

				if (light.fallOffAngle !== undefined) {

					lightNode.angle = light.fallOffAngle;
				}

				if (light.fallOffExponent !== undefined) {

					console.warn('THREE.GLTFLoader:: light.fallOffExponent not currently supported.');
				}

				lightNode.name = light.name || 'light_' + lightId;
				this.lights[lightId] = lightNode;
			}
		}
	}

	/* BINARY EXTENSION */

	var BINARY_EXTENSION_BUFFER_NAME = 'binary_glTF';
	var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
	var BINARY_EXTENSION_HEADER_LENGTH = 12;
	var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

	function GLTFBinaryExtension(data) {

		this.name = EXTENSIONS.KHR_BINARY_GLTF;
		this.content = null;
		this.body = null;

		var headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);

		this.header = {
			magic: THREE.LoaderUtils.decodeText(new Uint8Array(data.slice(0, 4))),
			version: headerView.getUint32(4, true),
			length: headerView.getUint32(8, true)
		};

		if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {

			throw new Error('THREE.GLTFLoader: Unsupported glTF-Binary header.');
		} else if (this.header.version < 2.0) {

			throw new Error('THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.');
		}

		var chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
		var chunkIndex = 0;

		while (chunkIndex < chunkView.byteLength) {

			var chunkLength = chunkView.getUint32(chunkIndex, true);
			chunkIndex += 4;

			var chunkType = chunkView.getUint32(chunkIndex, true);
			chunkIndex += 4;

			if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {

				var contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
				this.content = THREE.LoaderUtils.decodeText(contentArray);
			} else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {

				var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
				this.body = data.slice(byteOffset, byteOffset + chunkLength);
			}

			// Clients must ignore chunks with unknown types.

			chunkIndex += chunkLength;
		}

		if (this.content === null) {

			throw new Error('THREE.GLTFLoader: JSON content not found.');
		}
	}

	/**
  * Specular-Glossiness Extension
  *
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
  */
	function GLTFMaterialsPbrSpecularGlossinessExtension() {

		return {

			name: EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,

			specularGlossinessParams: ['color', 'map', 'lightMap', 'lightMapIntensity', 'aoMap', 'aoMapIntensity', 'emissive', 'emissiveIntensity', 'emissiveMap', 'bumpMap', 'bumpScale', 'normalMap', 'displacementMap', 'displacementScale', 'displacementBias', 'specularMap', 'specular', 'glossinessMap', 'glossiness', 'alphaMap', 'envMap', 'envMapIntensity', 'refractionRatio'],

			getMaterialType: function getMaterialType() {

				return THREE.ShaderMaterial;
			},

			extendParams: function extendParams(params, material, parser) {

				var pbrSpecularGlossiness = material.extensions[this.name];

				var shader = THREE.ShaderLib['standard'];

				var uniforms = THREE.UniformsUtils.clone(shader.uniforms);

				var specularMapParsFragmentChunk = ['#ifdef USE_SPECULARMAP', '	uniform sampler2D specularMap;', '#endif'].join('\n');

				var glossinessMapParsFragmentChunk = ['#ifdef USE_GLOSSINESSMAP', '	uniform sampler2D glossinessMap;', '#endif'].join('\n');

				var specularMapFragmentChunk = ['vec3 specularFactor = specular;', '#ifdef USE_SPECULARMAP', '	vec4 texelSpecular = texture2D( specularMap, vUv );', '	texelSpecular = sRGBToLinear( texelSpecular );', '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture', '	specularFactor *= texelSpecular.rgb;', '#endif'].join('\n');

				var glossinessMapFragmentChunk = ['float glossinessFactor = glossiness;', '#ifdef USE_GLOSSINESSMAP', '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );', '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture', '	glossinessFactor *= texelGlossiness.a;', '#endif'].join('\n');

				var lightPhysicalFragmentChunk = ['PhysicalMaterial material;', 'material.diffuseColor = diffuseColor.rgb;', 'material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );', 'material.specularColor = specularFactor.rgb;'].join('\n');

				var fragmentShader = shader.fragmentShader.replace('#include <specularmap_fragment>', '').replace('uniform float roughness;', 'uniform vec3 specular;').replace('uniform float metalness;', 'uniform float glossiness;').replace('#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk).replace('#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk).replace('#include <roughnessmap_fragment>', specularMapFragmentChunk).replace('#include <metalnessmap_fragment>', glossinessMapFragmentChunk).replace('#include <lights_physical_fragment>', lightPhysicalFragmentChunk);

				delete uniforms.roughness;
				delete uniforms.metalness;
				delete uniforms.roughnessMap;
				delete uniforms.metalnessMap;

				uniforms.specular = { value: new THREE.Color().setHex(0x111111) };
				uniforms.glossiness = { value: 0.5 };
				uniforms.specularMap = { value: null };
				uniforms.glossinessMap = { value: null };

				params.vertexShader = shader.vertexShader;
				params.fragmentShader = fragmentShader;
				params.uniforms = uniforms;
				params.defines = { 'STANDARD': '' };

				params.color = new THREE.Color(1.0, 1.0, 1.0);
				params.opacity = 1.0;

				var pending = [];

				if (Array.isArray(pbrSpecularGlossiness.diffuseFactor)) {

					var array = pbrSpecularGlossiness.diffuseFactor;

					params.color.fromArray(array);
					params.opacity = array[3];
				}

				if (pbrSpecularGlossiness.diffuseTexture !== undefined) {

					pending.push(parser.assignTexture(params, 'map', pbrSpecularGlossiness.diffuseTexture.index));
				}

				params.emissive = new THREE.Color(0.0, 0.0, 0.0);
				params.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
				params.specular = new THREE.Color(1.0, 1.0, 1.0);

				if (Array.isArray(pbrSpecularGlossiness.specularFactor)) {

					params.specular.fromArray(pbrSpecularGlossiness.specularFactor);
				}

				if (pbrSpecularGlossiness.specularGlossinessTexture !== undefined) {

					var specGlossIndex = pbrSpecularGlossiness.specularGlossinessTexture.index;
					pending.push(parser.assignTexture(params, 'glossinessMap', specGlossIndex));
					pending.push(parser.assignTexture(params, 'specularMap', specGlossIndex));
				}

				return Promise.all(pending);
			},

			createMaterial: function createMaterial(params) {

				// setup material properties based on MeshStandardMaterial for Specular-Glossiness

				var material = new THREE.ShaderMaterial({
					defines: params.defines,
					vertexShader: params.vertexShader,
					fragmentShader: params.fragmentShader,
					uniforms: params.uniforms,
					fog: true,
					lights: true,
					opacity: params.opacity,
					transparent: params.transparent
				});

				material.isGLTFSpecularGlossinessMaterial = true;

				material.color = params.color;

				material.map = params.map === undefined ? null : params.map;

				material.lightMap = null;
				material.lightMapIntensity = 1.0;

				material.aoMap = params.aoMap === undefined ? null : params.aoMap;
				material.aoMapIntensity = 1.0;

				material.emissive = params.emissive;
				material.emissiveIntensity = 1.0;
				material.emissiveMap = params.emissiveMap === undefined ? null : params.emissiveMap;

				material.bumpMap = params.bumpMap === undefined ? null : params.bumpMap;
				material.bumpScale = 1;

				material.normalMap = params.normalMap === undefined ? null : params.normalMap;
				if (params.normalScale) material.normalScale = params.normalScale;

				material.displacementMap = null;
				material.displacementScale = 1;
				material.displacementBias = 0;

				material.specularMap = params.specularMap === undefined ? null : params.specularMap;
				material.specular = params.specular;

				material.glossinessMap = params.glossinessMap === undefined ? null : params.glossinessMap;
				material.glossiness = params.glossiness;

				material.alphaMap = null;

				material.envMap = params.envMap === undefined ? null : params.envMap;
				material.envMapIntensity = 1.0;

				material.refractionRatio = 0.98;

				material.extensions.derivatives = true;

				return material;
			},

			/**
    * Clones a GLTFSpecularGlossinessMaterial instance. The ShaderMaterial.copy() method can
    * copy only properties it knows about or inherits, and misses many properties that would
    * normally be defined by MeshStandardMaterial.
    *
    * This method allows GLTFSpecularGlossinessMaterials to be cloned in the process of
    * loading a glTF model, but cloning later (e.g. by the user) would require these changes
    * AND also updating `.onBeforeRender` on the parent mesh.
    *
    * @param  {THREE.ShaderMaterial} source
    * @return {THREE.ShaderMaterial}
    */
			cloneMaterial: function cloneMaterial(source) {

				var target = source.clone();

				target.isGLTFSpecularGlossinessMaterial = true;

				var params = this.specularGlossinessParams;

				for (var i = 0, il = params.length; i < il; i++) {

					target[params[i]] = source[params[i]];
				}

				return target;
			},

			// Here's based on refreshUniformsCommon() and refreshUniformsStandard() in WebGLRenderer.
			refreshUniforms: function refreshUniforms(renderer, scene, camera, geometry, material, group) {

				if (material.isGLTFSpecularGlossinessMaterial !== true) {

					return;
				}

				var uniforms = material.uniforms;
				var defines = material.defines;

				uniforms.opacity.value = material.opacity;

				uniforms.diffuse.value.copy(material.color);
				uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);

				uniforms.map.value = material.map;
				uniforms.specularMap.value = material.specularMap;
				uniforms.alphaMap.value = material.alphaMap;

				uniforms.lightMap.value = material.lightMap;
				uniforms.lightMapIntensity.value = material.lightMapIntensity;

				uniforms.aoMap.value = material.aoMap;
				uniforms.aoMapIntensity.value = material.aoMapIntensity;

				// uv repeat and offset setting priorities
				// 1. color map
				// 2. specular map
				// 3. normal map
				// 4. bump map
				// 5. alpha map
				// 6. emissive map

				var uvScaleMap;

				if (material.map) {

					uvScaleMap = material.map;
				} else if (material.specularMap) {

					uvScaleMap = material.specularMap;
				} else if (material.displacementMap) {

					uvScaleMap = material.displacementMap;
				} else if (material.normalMap) {

					uvScaleMap = material.normalMap;
				} else if (material.bumpMap) {

					uvScaleMap = material.bumpMap;
				} else if (material.glossinessMap) {

					uvScaleMap = material.glossinessMap;
				} else if (material.alphaMap) {

					uvScaleMap = material.alphaMap;
				} else if (material.emissiveMap) {

					uvScaleMap = material.emissiveMap;
				}

				if (uvScaleMap !== undefined) {

					// backwards compatibility
					if (uvScaleMap.isWebGLRenderTarget) {

						uvScaleMap = uvScaleMap.texture;
					}

					var offset;
					var repeat;

					if (uvScaleMap.matrix !== undefined) {

						// > r88.

						if (uvScaleMap.matrixAutoUpdate === true) {

							offset = uvScaleMap.offset;
							repeat = uvScaleMap.repeat;
							var rotation = uvScaleMap.rotation;
							var center = uvScaleMap.center;

							uvScaleMap.matrix.setUvTransform(offset.x, offset.y, repeat.x, repeat.y, rotation, center.x, center.y);
						}

						uniforms.uvTransform.value.copy(uvScaleMap.matrix);
					} else {

						// <= r87. Remove when reasonable.

						offset = uvScaleMap.offset;
						repeat = uvScaleMap.repeat;

						uniforms.offsetRepeat.value.set(offset.x, offset.y, repeat.x, repeat.y);
					}
				}

				uniforms.envMap.value = material.envMap;
				uniforms.envMapIntensity.value = material.envMapIntensity;
				uniforms.flipEnvMap.value = material.envMap && material.envMap.isCubeTexture ? -1 : 1;

				uniforms.refractionRatio.value = material.refractionRatio;

				uniforms.specular.value.copy(material.specular);
				uniforms.glossiness.value = material.glossiness;

				uniforms.glossinessMap.value = material.glossinessMap;

				uniforms.emissiveMap.value = material.emissiveMap;
				uniforms.bumpMap.value = material.bumpMap;
				uniforms.normalMap.value = material.normalMap;

				uniforms.displacementMap.value = material.displacementMap;
				uniforms.displacementScale.value = material.displacementScale;
				uniforms.displacementBias.value = material.displacementBias;

				if (uniforms.glossinessMap.value !== null && defines.USE_GLOSSINESSMAP === undefined) {

					defines.USE_GLOSSINESSMAP = '';
					// set USE_ROUGHNESSMAP to enable vUv
					defines.USE_ROUGHNESSMAP = '';
				}

				if (uniforms.glossinessMap.value === null && defines.USE_GLOSSINESSMAP !== undefined) {

					delete defines.USE_GLOSSINESSMAP;
					delete defines.USE_ROUGHNESSMAP;
				}
			}

		};
	}

	/*********************************/
	/********** INTERPOLATION ********/
	/*********************************/

	// Spline Interpolation
	// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
	function GLTFCubicSplineInterpolant(parameterPositions, sampleValues, sampleSize, resultBuffer) {

		THREE.Interpolant.call(this, parameterPositions, sampleValues, sampleSize, resultBuffer);
	};

	GLTFCubicSplineInterpolant.prototype = Object.create(THREE.Interpolant.prototype);
	GLTFCubicSplineInterpolant.prototype.constructor = GLTFCubicSplineInterpolant;

	GLTFCubicSplineInterpolant.prototype.interpolate_ = function (i1, t0, t, t1) {

		var result = this.resultBuffer;
		var values = this.sampleValues;
		var stride = this.valueSize;

		var stride2 = stride * 2;
		var stride3 = stride * 3;

		var td = t1 - t0;

		var p = (t - t0) / td;
		var pp = p * p;
		var ppp = pp * p;

		var offset1 = i1 * stride3;
		var offset0 = offset1 - stride3;

		var s0 = 2 * ppp - 3 * pp + 1;
		var s1 = ppp - 2 * pp + p;
		var s2 = -2 * ppp + 3 * pp;
		var s3 = ppp - pp;

		// Layout of keyframe output values for CUBICSPLINE animations:
		//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
		for (var i = 0; i !== stride; i++) {

			var p0 = values[offset0 + i + stride]; // splineVertex_k
			var m0 = values[offset0 + i + stride2] * td; // outTangent_k * (t_k+1 - t_k)
			var p1 = values[offset1 + i + stride]; // splineVertex_k+1
			var m1 = values[offset1 + i] * td; // inTangent_k+1 * (t_k+1 - t_k)

			result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
		}

		return result;
	};

	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS = {
		FLOAT: 5126,
		//FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		POINTS: 0,
		LINES: 1,
		LINE_LOOP: 2,
		LINE_STRIP: 3,
		TRIANGLES: 4,
		TRIANGLE_STRIP: 5,
		TRIANGLE_FAN: 6,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123
	};

	var WEBGL_TYPE = {
		5126: Number,
		//35674: THREE.Matrix2,
		35675: THREE.Matrix3,
		35676: THREE.Matrix4,
		35664: THREE.Vector2,
		35665: THREE.Vector3,
		35666: THREE.Vector4,
		35678: THREE.Texture
	};

	var WEBGL_COMPONENT_TYPES = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	};

	var WEBGL_FILTERS = {
		9728: THREE.NearestFilter,
		9729: THREE.LinearFilter,
		9984: THREE.NearestMipMapNearestFilter,
		9985: THREE.LinearMipMapNearestFilter,
		9986: THREE.NearestMipMapLinearFilter,
		9987: THREE.LinearMipMapLinearFilter
	};

	var WEBGL_WRAPPINGS = {
		33071: THREE.ClampToEdgeWrapping,
		33648: THREE.MirroredRepeatWrapping,
		10497: THREE.RepeatWrapping
	};

	var WEBGL_TEXTURE_FORMATS = {
		6406: THREE.AlphaFormat,
		6407: THREE.RGBFormat,
		6408: THREE.RGBAFormat,
		6409: THREE.LuminanceFormat,
		6410: THREE.LuminanceAlphaFormat
	};

	var WEBGL_TEXTURE_DATATYPES = {
		5121: THREE.UnsignedByteType,
		32819: THREE.UnsignedShort4444Type,
		32820: THREE.UnsignedShort5551Type,
		33635: THREE.UnsignedShort565Type
	};

	var WEBGL_SIDES = {
		1028: THREE.BackSide, // Culling front
		1029: THREE.FrontSide // Culling back
		//1032: THREE.NoSide   // Culling front and back, what to do?
	};

	var WEBGL_DEPTH_FUNCS = {
		512: THREE.NeverDepth,
		513: THREE.LessDepth,
		514: THREE.EqualDepth,
		515: THREE.LessEqualDepth,
		516: THREE.GreaterEqualDepth,
		517: THREE.NotEqualDepth,
		518: THREE.GreaterEqualDepth,
		519: THREE.AlwaysDepth
	};

	var WEBGL_BLEND_EQUATIONS = {
		32774: THREE.AddEquation,
		32778: THREE.SubtractEquation,
		32779: THREE.ReverseSubtractEquation
	};

	var WEBGL_BLEND_FUNCS = {
		0: THREE.ZeroFactor,
		1: THREE.OneFactor,
		768: THREE.SrcColorFactor,
		769: THREE.OneMinusSrcColorFactor,
		770: THREE.SrcAlphaFactor,
		771: THREE.OneMinusSrcAlphaFactor,
		772: THREE.DstAlphaFactor,
		773: THREE.OneMinusDstAlphaFactor,
		774: THREE.DstColorFactor,
		775: THREE.OneMinusDstColorFactor,
		776: THREE.SrcAlphaSaturateFactor
		// The followings are not supported by Three.js yet
		//32769: CONSTANT_COLOR,
		//32770: ONE_MINUS_CONSTANT_COLOR,
		//32771: CONSTANT_ALPHA,
		//32772: ONE_MINUS_CONSTANT_COLOR
	};

	var WEBGL_TYPE_SIZES = {
		'SCALAR': 1,
		'VEC2': 2,
		'VEC3': 3,
		'VEC4': 4,
		'MAT2': 4,
		'MAT3': 9,
		'MAT4': 16
	};

	var PATH_PROPERTIES = {
		scale: 'scale',
		translation: 'position',
		rotation: 'quaternion',
		weights: 'morphTargetInfluences'
	};

	var INTERPOLATION = {
		CUBICSPLINE: THREE.InterpolateSmooth, // We use custom interpolation GLTFCubicSplineInterpolation for CUBICSPLINE.
		// KeyframeTrack.optimize() can't handle glTF Cubic Spline output values layout,
		// using THREE.InterpolateSmooth for KeyframeTrack instantiation to prevent optimization.
		// See KeyframeTrack.optimize() for the detail.
		LINEAR: THREE.InterpolateLinear,
		STEP: THREE.InterpolateDiscrete
	};

	var STATES_ENABLES = {
		2884: 'CULL_FACE',
		2929: 'DEPTH_TEST',
		3042: 'BLEND',
		3089: 'SCISSOR_TEST',
		32823: 'POLYGON_OFFSET_FILL',
		32926: 'SAMPLE_ALPHA_TO_COVERAGE'
	};

	var ALPHA_MODES = {
		OPAQUE: 'OPAQUE',
		MASK: 'MASK',
		BLEND: 'BLEND'
	};

	/* UTILITY FUNCTIONS */

	function resolveURL(url, path) {

		// Invalid URL
		if (typeof url !== 'string' || url === '') return '';

		// Absolute URL http://,https://,//
		if (/^(https?:)?\/\//i.test(url)) return url;

		// Data URI
		if (/^data:.*,.*$/i.test(url)) return url;

		// Blob URL
		if (/^blob:.*$/i.test(url)) return url;

		// Relative URL
		return path + url;
	}

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
  */
	function createDefaultMaterial() {

		return new THREE.MeshStandardMaterial({
			color: 0xFFFFFF,
			emissive: 0x000000,
			metalness: 1,
			roughness: 1,
			transparent: false,
			depthTest: true,
			side: THREE.FrontSide
		});
	}

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
  *
  * TODO: Implement support for morph targets on TANGENT attribute.
  *
  * @param {THREE.Mesh} mesh
  * @param {GLTF.Mesh} meshDef
  * @param {GLTF.Primitive} primitiveDef
  * @param {Array<THREE.BufferAttribute>} accessors
  */
	function addMorphTargets(mesh, meshDef, primitiveDef, accessors) {

		var geometry = mesh.geometry;
		var material = mesh.material;

		var targets = primitiveDef.targets;
		var morphAttributes = geometry.morphAttributes;

		morphAttributes.position = [];
		morphAttributes.normal = [];

		material.morphTargets = true;

		for (var i = 0, il = targets.length; i < il; i++) {

			var target = targets[i];
			var attributeName = 'morphTarget' + i;

			var positionAttribute, normalAttribute;

			if (target.POSITION !== undefined) {

				// Three.js morph formula is
				//   position
				//     + weight0 * ( morphTarget0 - position )
				//     + weight1 * ( morphTarget1 - position )
				//     ...
				// while the glTF one is
				//   position
				//     + weight0 * morphTarget0
				//     + weight1 * morphTarget1
				//     ...
				// then adding position to morphTarget.
				// So morphTarget value will depend on mesh's position, then cloning attribute
				// for the case if attribute is shared among two or more meshes.

				positionAttribute = cloneBufferAttribute(accessors[target.POSITION]);
				var position = geometry.attributes.position;

				for (var j = 0, jl = positionAttribute.count; j < jl; j++) {

					positionAttribute.setXYZ(j, positionAttribute.getX(j) + position.getX(j), positionAttribute.getY(j) + position.getY(j), positionAttribute.getZ(j) + position.getZ(j));
				}
			} else if (geometry.attributes.position) {

				// Copying the original position not to affect the final position.
				// See the formula above.
				positionAttribute = cloneBufferAttribute(geometry.attributes.position);
			}

			if (positionAttribute !== undefined) {

				positionAttribute.name = attributeName;
				morphAttributes.position.push(positionAttribute);
			}

			if (target.NORMAL !== undefined) {

				material.morphNormals = true;

				// see target.POSITION's comment

				normalAttribute = cloneBufferAttribute(accessors[target.NORMAL]);
				var normal = geometry.attributes.normal;

				for (var j = 0, jl = normalAttribute.count; j < jl; j++) {

					normalAttribute.setXYZ(j, normalAttribute.getX(j) + normal.getX(j), normalAttribute.getY(j) + normal.getY(j), normalAttribute.getZ(j) + normal.getZ(j));
				}
			} else if (geometry.attributes.normal !== undefined) {

				normalAttribute = cloneBufferAttribute(geometry.attributes.normal);
			}

			if (normalAttribute !== undefined) {

				normalAttribute.name = attributeName;
				morphAttributes.normal.push(normalAttribute);
			}
		}

		mesh.updateMorphTargets();

		if (meshDef.weights !== undefined) {

			for (var i = 0, il = meshDef.weights.length; i < il; i++) {

				mesh.morphTargetInfluences[i] = meshDef.weights[i];
			}
		}
	}

	function isPrimitiveEqual(a, b) {

		if (a.indices !== b.indices) {

			return false;
		}

		var attribA = a.attributes || {};
		var attribB = b.attributes || {};
		var keysA = Object.keys(attribA);
		var keysB = Object.keys(attribB);

		if (keysA.length !== keysB.length) {

			return false;
		}

		for (var i = 0, il = keysA.length; i < il; i++) {

			var key = keysA[i];

			if (attribA[key] !== attribB[key]) {

				return false;
			}
		}

		return true;
	}

	function getCachedGeometry(cache, newPrimitive) {

		for (var i = 0, il = cache.length; i < il; i++) {

			var cached = cache[i];

			if (isPrimitiveEqual(cached.primitive, newPrimitive)) {

				return cached.geometry;
			}
		}

		return null;
	}

	function cloneBufferAttribute(attribute) {

		if (attribute.isInterleavedBufferAttribute) {

			var count = attribute.count;
			var itemSize = attribute.itemSize;
			var array = attribute.array.slice(0, count * itemSize);

			for (var i = 0; i < count; ++i) {

				array[i] = attribute.getX(i);
				if (itemSize >= 2) array[i + 1] = attribute.getY(i);
				if (itemSize >= 3) array[i + 2] = attribute.getZ(i);
				if (itemSize >= 4) array[i + 3] = attribute.getW(i);
			}

			return new THREE.BufferAttribute(array, itemSize, attribute.normalized);
		}

		return attribute.clone();
	}

	/* GLTF PARSER */

	function GLTFParser(json, extensions, options) {

		this.json = json || {};
		this.extensions = extensions || {};
		this.options = options || {};

		// loader object cache
		this.cache = new GLTFRegistry();

		// BufferGeometry caching
		this.primitiveCache = [];

		this.textureLoader = new THREE.TextureLoader(this.options.manager);
		this.textureLoader.setCrossOrigin(this.options.crossOrigin);

		this.fileLoader = new THREE.FileLoader(this.options.manager);
		this.fileLoader.setResponseType('arraybuffer');
	}

	GLTFParser.prototype.parse = function (onLoad, onError) {

		var json = this.json;

		// Clear the loader cache
		this.cache.removeAll();

		// Mark the special nodes/meshes in json for efficient parse
		this.markDefs();

		// Fire the callback on complete
		this.getMultiDependencies(['scene', 'animation', 'camera']).then(function (dependencies) {

			var scenes = dependencies.scenes || [];
			var scene = scenes[json.scene || 0];
			var animations = dependencies.animations || [];
			var asset = json.asset;
			var cameras = dependencies.cameras || [];

			onLoad(scene, scenes, cameras, animations, asset);
		}).catch(onError);
	};

	/**
  * Marks the special nodes/meshes in json for efficient parse.
  */
	GLTFParser.prototype.markDefs = function () {

		var nodeDefs = this.json.nodes || [];
		var skinDefs = this.json.skins || [];
		var meshDefs = this.json.meshes || [];

		var meshReferences = {};
		var meshUses = {};

		// Nothing in the node definition indicates whether it is a Bone or an
		// Object3D. Use the skins' joint references to mark bones.
		for (var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {

			var joints = skinDefs[skinIndex].joints;

			for (var i = 0, il = joints.length; i < il; i++) {

				nodeDefs[joints[i]].isBone = true;
			}
		}

		// Meshes can (and should) be reused by multiple nodes in a glTF asset. To
		// avoid having more than one THREE.Mesh with the same name, count
		// references and rename instances below.
		//
		// Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
		for (var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {

			var nodeDef = nodeDefs[nodeIndex];

			if (nodeDef.mesh !== undefined) {

				if (meshReferences[nodeDef.mesh] === undefined) {

					meshReferences[nodeDef.mesh] = meshUses[nodeDef.mesh] = 0;
				}

				meshReferences[nodeDef.mesh]++;

				// Nothing in the mesh definition indicates whether it is
				// a SkinnedMesh or Mesh. Use the node's mesh reference
				// to mark SkinnedMesh if node has skin.
				if (nodeDef.skin !== undefined) {

					meshDefs[nodeDef.mesh].isSkinnedMesh = true;
				}
			}
		}

		this.json.meshReferences = meshReferences;
		this.json.meshUses = meshUses;
	};

	/**
  * Requests the specified dependency asynchronously, with caching.
  * @param {string} type
  * @param {number} index
  * @return {Promise<Object>}
  */
	GLTFParser.prototype.getDependency = function (type, index) {

		var cacheKey = type + ':' + index;
		var dependency = this.cache.get(cacheKey);

		if (!dependency) {

			var fnName = 'load' + type.charAt(0).toUpperCase() + type.slice(1);
			dependency = this[fnName](index);
			this.cache.add(cacheKey, dependency);
		}

		return dependency;
	};

	/**
  * Requests all dependencies of the specified type asynchronously, with caching.
  * @param {string} type
  * @return {Promise<Array<Object>>}
  */
	GLTFParser.prototype.getDependencies = function (type) {

		var dependencies = this.cache.get(type);

		if (!dependencies) {

			var parser = this;
			var defs = this.json[type + (type === 'mesh' ? 'es' : 's')] || [];

			dependencies = Promise.all(defs.map(function (def, index) {

				return parser.getDependency(type, index);
			}));

			this.cache.add(type, dependencies);
		}

		return dependencies;
	};

	/**
  * Requests all multiple dependencies of the specified types asynchronously, with caching.
  * @param {Array<string>} types
  * @return {Promise<Object<Array<Object>>>}
  */
	GLTFParser.prototype.getMultiDependencies = function (types) {

		var results = {};
		var pendings = [];

		for (var i = 0, il = types.length; i < il; i++) {

			var type = types[i];
			var value = this.getDependencies(type);

			value = value.then(function (key, value) {

				results[key] = value;
			}.bind(this, type + (type === 'mesh' ? 'es' : 's')));

			pendings.push(value);
		}

		return Promise.all(pendings).then(function () {

			return results;
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
  * @param {number} bufferIndex
  * @return {Promise<ArrayBuffer>}
  */
	GLTFParser.prototype.loadBuffer = function (bufferIndex) {

		var bufferDef = this.json.buffers[bufferIndex];
		var loader = this.fileLoader;

		if (bufferDef.type && bufferDef.type !== 'arraybuffer') {

			throw new Error('THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.');
		}

		// If present, GLB container is required to be the first buffer.
		if (bufferDef.uri === undefined && bufferIndex === 0) {

			return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
		}

		var options = this.options;

		return new Promise(function (resolve, reject) {

			loader.load(resolveURL(bufferDef.uri, options.path), resolve, undefined, function () {

				reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
			});
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
  * @param {number} bufferViewIndex
  * @return {Promise<ArrayBuffer>}
  */
	GLTFParser.prototype.loadBufferView = function (bufferViewIndex) {

		var bufferViewDef = this.json.bufferViews[bufferViewIndex];

		return this.getDependency('buffer', bufferViewDef.buffer).then(function (buffer) {

			var byteLength = bufferViewDef.byteLength || 0;
			var byteOffset = bufferViewDef.byteOffset || 0;
			return buffer.slice(byteOffset, byteOffset + byteLength);
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
  * @param {number} accessorIndex
  * @return {Promise<THREE.BufferAttribute|THREE.InterleavedBufferAttribute>}
  */
	GLTFParser.prototype.loadAccessor = function (accessorIndex) {

		var parser = this;
		var json = this.json;

		var accessorDef = this.json.accessors[accessorIndex];

		var pendingBufferViews = [];

		if (accessorDef.bufferView !== undefined) {

			pendingBufferViews.push(this.getDependency('bufferView', accessorDef.bufferView));
		} else {

			pendingBufferViews.push(null);
		}

		if (accessorDef.sparse !== undefined) {

			pendingBufferViews.push(this.getDependency('bufferView', accessorDef.sparse.indices.bufferView));
			pendingBufferViews.push(this.getDependency('bufferView', accessorDef.sparse.values.bufferView));
		}

		return Promise.all(pendingBufferViews).then(function (bufferViews) {

			var bufferView = bufferViews[0];

			var itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
			var TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];

			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
			var elementBytes = TypedArray.BYTES_PER_ELEMENT;
			var itemBytes = elementBytes * itemSize;
			var byteOffset = accessorDef.byteOffset || 0;
			var byteStride = json.bufferViews[accessorDef.bufferView].byteStride;
			var normalized = accessorDef.normalized === true;
			var array, bufferAttribute;

			// The buffer is not interleaved if the stride is the item size in bytes.
			if (byteStride && byteStride !== itemBytes) {

				var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType;
				var ib = parser.cache.get(ibCacheKey);

				if (!ib) {

					// Use the full buffer if it's interleaved.
					array = new TypedArray(bufferView);

					// Integer parameters to IB/IBA are in array elements, not bytes.
					ib = new THREE.InterleavedBuffer(array, byteStride / elementBytes);

					parser.cache.add(ibCacheKey, ib);
				}

				bufferAttribute = new THREE.InterleavedBufferAttribute(ib, itemSize, byteOffset / elementBytes, normalized);
			} else {

				if (bufferView === null) {

					array = new TypedArray(accessorDef.count * itemSize);
				} else {

					array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
				}

				bufferAttribute = new THREE.BufferAttribute(array, itemSize, normalized);
			}

			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
			if (accessorDef.sparse !== undefined) {

				var itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
				var TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];

				var byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
				var byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

				var sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
				var sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);

				if (bufferView !== null) {

					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
					bufferAttribute.setArray(bufferAttribute.array.slice());
				}

				for (var i = 0, il = sparseIndices.length; i < il; i++) {

					var index = sparseIndices[i];

					bufferAttribute.setX(index, sparseValues[i * itemSize]);
					if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
					if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
					if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
					if (itemSize >= 5) throw new Error('THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.');
				}
			}

			return bufferAttribute;
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
  * @param {number} textureIndex
  * @return {Promise<THREE.Texture>}
  */
	GLTFParser.prototype.loadTexture = function (textureIndex) {

		var parser = this;
		var json = this.json;
		var options = this.options;
		var textureLoader = this.textureLoader;

		var URL = window.URL || window.webkitURL;

		var textureDef = json.textures[textureIndex];
		var source = json.images[textureDef.source];
		var sourceURI = source.uri;
		var isObjectURL = false;

		if (source.bufferView !== undefined) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency('bufferView', source.bufferView).then(function (bufferView) {

				isObjectURL = true;
				var blob = new Blob([bufferView], { type: source.mimeType });
				sourceURI = URL.createObjectURL(blob);
				return sourceURI;
			});
		}

		return Promise.resolve(sourceURI).then(function (sourceURI) {

			// Load Texture resource.

			var loader = THREE.Loader.Handlers.get(sourceURI) || textureLoader;

			return new Promise(function (resolve, reject) {

				loader.load(resolveURL(sourceURI, options.path), resolve, undefined, reject);
			});
		}).then(function (texture) {

			// Clean up resources and configure Texture.

			if (isObjectURL === true) {

				URL.revokeObjectURL(sourceURI);
			}

			texture.flipY = false;

			if (textureDef.name !== undefined) texture.name = textureDef.name;

			texture.format = textureDef.format !== undefined ? WEBGL_TEXTURE_FORMATS[textureDef.format] : THREE.RGBAFormat;

			if (textureDef.internalFormat !== undefined && texture.format !== WEBGL_TEXTURE_FORMATS[textureDef.internalFormat]) {

				console.warn('THREE.GLTFLoader: Three.js does not support texture internalFormat which is different from texture format. ' + 'internalFormat will be forced to be the same value as format.');
			}

			texture.type = textureDef.type !== undefined ? WEBGL_TEXTURE_DATATYPES[textureDef.type] : THREE.UnsignedByteType;

			var samplers = json.samplers || {};
			var sampler = samplers[textureDef.sampler] || {};

			texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || THREE.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || THREE.LinearMipMapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || THREE.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || THREE.RepeatWrapping;

			return texture;
		});
	};

	/**
  * Asynchronously assigns a texture to the given material parameters.
  * @param {Object} materialParams
  * @param {string} textureName
  * @param {number} textureIndex
  * @return {Promise}
  */
	GLTFParser.prototype.assignTexture = function (materialParams, textureName, textureIndex) {

		return this.getDependency('texture', textureIndex).then(function (texture) {

			materialParams[textureName] = texture;
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
  * @param {number} materialIndex
  * @return {Promise<THREE.Material>}
  */
	GLTFParser.prototype.loadMaterial = function (materialIndex) {

		var parser = this;
		var json = this.json;
		var extensions = this.extensions;
		var materialDef = this.json.materials[materialIndex];

		var materialType;
		var materialParams = {};
		var materialExtensions = materialDef.extensions || {};

		var pending = [];

		if (materialExtensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {

			var sgExtension = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
			materialType = sgExtension.getMaterialType(materialDef);
			pending.push(sgExtension.extendParams(materialParams, materialDef, parser));
		} else if (materialDef.pbrMetallicRoughness !== undefined) {

			// Specification:
			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

			materialType = THREE.MeshStandardMaterial;

			var metallicRoughness = materialDef.pbrMetallicRoughness;

			materialParams.color = new THREE.Color(1.0, 1.0, 1.0);
			materialParams.opacity = 1.0;

			if (Array.isArray(metallicRoughness.baseColorFactor)) {

				var array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray(array);
				materialParams.opacity = array[3];
			}

			if (metallicRoughness.baseColorTexture !== undefined) {

				pending.push(parser.assignTexture(materialParams, 'map', metallicRoughness.baseColorTexture.index));
			}

			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

			if (metallicRoughness.metallicRoughnessTexture !== undefined) {

				var textureIndex = metallicRoughness.metallicRoughnessTexture.index;
				pending.push(parser.assignTexture(materialParams, 'metalnessMap', textureIndex));
				pending.push(parser.assignTexture(materialParams, 'roughnessMap', textureIndex));
			}
		} else {

			materialType = THREE.MeshPhongMaterial;
		}

		if (materialDef.doubleSided === true) {

			materialParams.side = THREE.DoubleSide;
		}

		var alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

		if (alphaMode === ALPHA_MODES.BLEND) {

			materialParams.transparent = true;
		} else {

			materialParams.transparent = false;

			if (alphaMode === ALPHA_MODES.MASK) {

				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;
			}
		}

		if (materialDef.normalTexture !== undefined) {

			pending.push(parser.assignTexture(materialParams, 'normalMap', materialDef.normalTexture.index));

			materialParams.normalScale = new THREE.Vector2(1, 1);

			if (materialDef.normalTexture.scale !== undefined) {

				materialParams.normalScale.set(materialDef.normalTexture.scale, materialDef.normalTexture.scale);
			}
		}

		if (materialDef.occlusionTexture !== undefined) {

			pending.push(parser.assignTexture(materialParams, 'aoMap', materialDef.occlusionTexture.index));

			if (materialDef.occlusionTexture.strength !== undefined) {

				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
			}
		}

		if (materialDef.emissiveFactor !== undefined) {

			if (materialType === THREE.MeshBasicMaterial) {

				materialParams.color = new THREE.Color().fromArray(materialDef.emissiveFactor);
			} else {

				materialParams.emissive = new THREE.Color().fromArray(materialDef.emissiveFactor);
			}
		}

		if (materialDef.emissiveTexture !== undefined) {

			if (materialType === THREE.MeshBasicMaterial) {

				pending.push(parser.assignTexture(materialParams, 'map', materialDef.emissiveTexture.index));
			} else {

				pending.push(parser.assignTexture(materialParams, 'emissiveMap', materialDef.emissiveTexture.index));
			}
		}

		return Promise.all(pending).then(function () {

			var material;

			if (materialType === THREE.ShaderMaterial) {

				material = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(materialParams);
			} else {

				material = new materialType(materialParams);
			}

			if (materialDef.name !== undefined) material.name = materialDef.name;

			// Normal map textures use OpenGL conventions:
			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#materialnormaltexture
			if (material.normalScale) {

				material.normalScale.x = -material.normalScale.x;
			}

			// emissiveTexture and baseColorTexture use sRGB encoding.
			if (material.map) material.map.encoding = THREE.sRGBEncoding;
			if (material.emissiveMap) material.emissiveMap.encoding = THREE.sRGBEncoding;

			if (materialDef.extras) material.userData = materialDef.extras;

			return material;
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
  * @param {Array<Object>} primitives
  * @return {Promise<Array<THREE.BufferGeometry>>}
  */
	GLTFParser.prototype.loadGeometries = function (primitives) {

		var cache = this.primitiveCache;

		return this.getDependencies('accessor').then(function (accessors) {

			var geometries = [];

			for (var i = 0, il = primitives.length; i < il; i++) {

				var primitive = primitives[i];

				// See if we've already created this geometry
				var cached = getCachedGeometry(cache, primitive);

				if (cached) {

					// Use the cached geometry if it exists
					geometries.push(cached);
				} else {

					// Otherwise create a new geometry
					var geometry = new THREE.BufferGeometry();

					var attributes = primitive.attributes;

					for (var attributeId in attributes) {

						var attributeEntry = attributes[attributeId];

						var bufferAttribute = accessors[attributeEntry];

						switch (attributeId) {

							case 'POSITION':

								geometry.addAttribute('position', bufferAttribute);
								break;

							case 'NORMAL':

								geometry.addAttribute('normal', bufferAttribute);
								break;

							case 'TEXCOORD_0':
							case 'TEXCOORD0':
							case 'TEXCOORD':

								geometry.addAttribute('uv', bufferAttribute);
								break;

							case 'TEXCOORD_1':

								geometry.addAttribute('uv2', bufferAttribute);
								break;

							case 'COLOR_0':
							case 'COLOR0':
							case 'COLOR':

								geometry.addAttribute('color', bufferAttribute);
								break;

							case 'WEIGHTS_0':
							case 'WEIGHT':
								// WEIGHT semantic deprecated.

								geometry.addAttribute('skinWeight', bufferAttribute);
								break;

							case 'JOINTS_0':
							case 'JOINT':
								// JOINT semantic deprecated.

								geometry.addAttribute('skinIndex', bufferAttribute);
								break;

						}
					}

					if (primitive.indices !== undefined) {

						geometry.setIndex(accessors[primitive.indices]);
					}

					// Cache this geometry
					cache.push({

						primitive: primitive,
						geometry: geometry

					});

					geometries.push(geometry);
				}
			}

			return geometries;
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
  * @param {number} meshIndex
  * @return {Promise<THREE.Group|THREE.Mesh|THREE.SkinnedMesh>}
  */
	GLTFParser.prototype.loadMesh = function (meshIndex) {

		var scope = this;
		var json = this.json;
		var extensions = this.extensions;

		var meshDef = this.json.meshes[meshIndex];

		return this.getMultiDependencies(['accessor', 'material']).then(function (dependencies) {

			var group = new THREE.Group();

			var primitives = meshDef.primitives;

			return scope.loadGeometries(primitives).then(function (geometries) {

				for (var i = 0, il = primitives.length; i < il; i++) {

					var primitive = primitives[i];
					var geometry = geometries[i];

					var material = primitive.material === undefined ? createDefaultMaterial() : dependencies.materials[primitive.material];

					if (material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined) {

						console.log('THREE.GLTFLoader: Duplicating UVs to support aoMap.');
						geometry.addAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
					}

					// If the material will be modified later on, clone it now.
					var useVertexColors = geometry.attributes.color !== undefined;
					var useFlatShading = geometry.attributes.normal === undefined;
					var useSkinning = meshDef.isSkinnedMesh === true;
					var useMorphTargets = primitive.targets !== undefined;

					if (useVertexColors || useFlatShading || useSkinning || useMorphTargets) {

						if (material.isGLTFSpecularGlossinessMaterial) {

							var specGlossExtension = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
							material = specGlossExtension.cloneMaterial(material);
						} else {

							material = material.clone();
						}
					}

					if (useVertexColors) {

						material.vertexColors = THREE.VertexColors;
						material.needsUpdate = true;
					}

					if (useFlatShading) {

						material.flatShading = true;
					}

					var mesh;

					if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === undefined) {

						if (useSkinning) {

							mesh = new THREE.SkinnedMesh(geometry, material);
							material.skinning = true;
						} else {

							mesh = new THREE.Mesh(geometry, material);
						}

						if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) {

							mesh.drawMode = THREE.TriangleStripDrawMode;
						} else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) {

							mesh.drawMode = THREE.TriangleFanDrawMode;
						}
					} else if (primitive.mode === WEBGL_CONSTANTS.LINES || primitive.mode === WEBGL_CONSTANTS.LINE_STRIP || primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) {

						var cacheKey = 'LineBasicMaterial:' + material.uuid;

						var lineMaterial = scope.cache.get(cacheKey);

						if (!lineMaterial) {

							lineMaterial = new THREE.LineBasicMaterial();
							THREE.Material.prototype.copy.call(lineMaterial, material);
							lineMaterial.color.copy(material.color);
							lineMaterial.lights = false; // LineBasicMaterial doesn't support lights yet

							scope.cache.add(cacheKey, lineMaterial);
						}

						material = lineMaterial;

						if (primitive.mode === WEBGL_CONSTANTS.LINES) {

							mesh = new THREE.LineSegments(geometry, material);
						} else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) {

							mesh = new THREE.Line(geometry, material);
						} else {

							mesh = new THREE.LineLoop(geometry, material);
						}
					} else if (primitive.mode === WEBGL_CONSTANTS.POINTS) {

						var cacheKey = 'PointsMaterial:' + material.uuid;

						var pointsMaterial = scope.cache.get(cacheKey);

						if (!pointsMaterial) {

							pointsMaterial = new THREE.PointsMaterial();
							THREE.Material.prototype.copy.call(pointsMaterial, material);
							pointsMaterial.color.copy(material.color);
							pointsMaterial.map = material.map;
							pointsMaterial.lights = false; // PointsMaterial doesn't support lights yet

							scope.cache.add(cacheKey, pointsMaterial);
						}

						material = pointsMaterial;

						mesh = new THREE.Points(geometry, material);
					} else {

						throw new Error('THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode);
					}

					mesh.name = meshDef.name || 'mesh_' + meshIndex;

					if (useMorphTargets) {

						addMorphTargets(mesh, meshDef, primitive, dependencies.accessors);
					}

					if (meshDef.extras !== undefined) mesh.userData = meshDef.extras;
					if (primitive.extras !== undefined) mesh.geometry.userData = primitive.extras;

					// for Specular-Glossiness.
					if (material.isGLTFSpecularGlossinessMaterial === true) {

						mesh.onBeforeRender = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms;
					}

					if (primitives.length > 1) {

						mesh.name += '_' + i;

						group.add(mesh);
					} else {

						return mesh;
					}
				}

				return group;
			});
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
  * @param {number} cameraIndex
  * @return {Promise<THREE.Camera>}
  */
	GLTFParser.prototype.loadCamera = function (cameraIndex) {

		var camera;
		var cameraDef = this.json.cameras[cameraIndex];
		var params = cameraDef[cameraDef.type];

		if (!params) {

			console.warn('THREE.GLTFLoader: Missing camera parameters.');
			return;
		}

		if (cameraDef.type === 'perspective') {

			var aspectRatio = params.aspectRatio || 1;
			var xfov = params.yfov * aspectRatio;

			camera = new THREE.PerspectiveCamera(THREE.Math.radToDeg(xfov), aspectRatio, params.znear || 1, params.zfar || 2e6);
		} else if (cameraDef.type === 'orthographic') {

			camera = new THREE.OrthographicCamera(params.xmag / -2, params.xmag / 2, params.ymag / 2, params.ymag / -2, params.znear, params.zfar);
		}

		if (cameraDef.name !== undefined) camera.name = cameraDef.name;
		if (cameraDef.extras) camera.userData = cameraDef.extras;

		return Promise.resolve(camera);
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
  * @param {number} skinIndex
  * @return {Promise<Object>}
  */
	GLTFParser.prototype.loadSkin = function (skinIndex) {

		var skinDef = this.json.skins[skinIndex];

		var skinEntry = { joints: skinDef.joints };

		if (skinDef.inverseBindMatrices === undefined) {

			return Promise.resolve(skinEntry);
		}

		return this.getDependency('accessor', skinDef.inverseBindMatrices).then(function (accessor) {

			skinEntry.inverseBindMatrices = accessor;

			return skinEntry;
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
  * @param {number} animationIndex
  * @return {Promise<THREE.AnimationClip>}
  */
	GLTFParser.prototype.loadAnimation = function (animationIndex) {

		var json = this.json;

		var animationDef = this.json.animations[animationIndex];

		return this.getMultiDependencies(['accessor', 'node']).then(function (dependencies) {

			var tracks = [];

			for (var i = 0, il = animationDef.channels.length; i < il; i++) {

				var channel = animationDef.channels[i];
				var sampler = animationDef.samplers[channel.sampler];

				if (sampler) {

					var target = channel.target;
					var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
					var input = animationDef.parameters !== undefined ? animationDef.parameters[sampler.input] : sampler.input;
					var output = animationDef.parameters !== undefined ? animationDef.parameters[sampler.output] : sampler.output;

					var inputAccessor = dependencies.accessors[input];
					var outputAccessor = dependencies.accessors[output];

					var node = dependencies.nodes[name];

					if (node) {

						node.updateMatrix();
						node.matrixAutoUpdate = true;

						var TypedKeyframeTrack;

						switch (PATH_PROPERTIES[target.path]) {

							case PATH_PROPERTIES.weights:

								TypedKeyframeTrack = THREE.NumberKeyframeTrack;
								break;

							case PATH_PROPERTIES.rotation:

								TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
								break;

							case PATH_PROPERTIES.position:
							case PATH_PROPERTIES.scale:
							default:

								TypedKeyframeTrack = THREE.VectorKeyframeTrack;
								break;

						}

						var targetName = node.name ? node.name : node.uuid;

						var interpolation = sampler.interpolation !== undefined ? INTERPOLATION[sampler.interpolation] : THREE.InterpolateLinear;

						var targetNames = [];

						if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {

							// node should be THREE.Group here but
							// PATH_PROPERTIES.weights(morphTargetInfluences) should be
							// the property of a mesh object under node.
							// So finding targets here.

							node.traverse(function (object) {

								if (object.isMesh === true && object.material.morphTargets === true) {

									targetNames.push(object.name ? object.name : object.uuid);
								}
							});
						} else {

							targetNames.push(targetName);
						}

						// KeyframeTrack.optimize() will modify given 'times' and 'values'
						// buffers before creating a truncated copy to keep. Because buffers may
						// be reused by other tracks, make copies here.
						for (var j = 0, jl = targetNames.length; j < jl; j++) {

							var track = new TypedKeyframeTrack(targetNames[j] + '.' + PATH_PROPERTIES[target.path], THREE.AnimationUtils.arraySlice(inputAccessor.array, 0), THREE.AnimationUtils.arraySlice(outputAccessor.array, 0), interpolation);

							// Here is the trick to enable custom interpolation.
							// Overrides .createInterpolant in a factory method which creates custom interpolation.
							if (sampler.interpolation === 'CUBICSPLINE') {

								track.createInterpolant = function (result) {

									// A CUBICSPLINE keyframe in glTF has three output values for each input value,
									// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
									// must be divided by three to get the interpolant's sampleSize argument.

									return new GLTFCubicSplineInterpolant(this.times, this.values, this.getValueSize() / 3, result);
								};
							}

							tracks.push(track);
						}
					}
				}
			}

			var name = animationDef.name !== undefined ? animationDef.name : 'animation_' + animationIndex;

			return new THREE.AnimationClip(name, undefined, tracks);
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
  * @param {number} nodeIndex
  * @return {Promise<THREE.Object3D>}
  */
	GLTFParser.prototype.loadNode = function (nodeIndex) {

		var json = this.json;
		var extensions = this.extensions;

		var meshReferences = this.json.meshReferences;
		var meshUses = this.json.meshUses;

		var nodeDef = this.json.nodes[nodeIndex];

		return this.getMultiDependencies(['mesh', 'skin', 'camera']).then(function (dependencies) {

			var node;

			if (nodeDef.isBone === true) {

				node = new THREE.Bone();
			} else if (nodeDef.mesh !== undefined) {

				var mesh = dependencies.meshes[nodeDef.mesh];

				node = mesh.clone();

				// for Specular-Glossiness
				if (mesh.isGroup === true) {

					for (var i = 0, il = mesh.children.length; i < il; i++) {

						var child = mesh.children[i];

						if (child.material && child.material.isGLTFSpecularGlossinessMaterial === true) {

							node.children[i].onBeforeRender = child.onBeforeRender;
						}
					}
				} else {

					if (mesh.material && mesh.material.isGLTFSpecularGlossinessMaterial === true) {

						node.onBeforeRender = mesh.onBeforeRender;
					}
				}

				if (meshReferences[nodeDef.mesh] > 1) {

					node.name += '_instance_' + meshUses[nodeDef.mesh]++;
				}
			} else if (nodeDef.camera !== undefined) {

				node = dependencies.cameras[nodeDef.camera];
			} else if (nodeDef.extensions && nodeDef.extensions[EXTENSIONS.KHR_LIGHTS] && nodeDef.extensions[EXTENSIONS.KHR_LIGHTS].light !== undefined) {

				var lights = extensions[EXTENSIONS.KHR_LIGHTS].lights;
				node = lights[nodeDef.extensions[EXTENSIONS.KHR_LIGHTS].light];
			} else {

				node = new THREE.Object3D();
			}

			if (nodeDef.name !== undefined) {

				node.name = THREE.PropertyBinding.sanitizeNodeName(nodeDef.name);
			}

			if (nodeDef.extras) node.userData = nodeDef.extras;

			if (nodeDef.matrix !== undefined) {

				var matrix = new THREE.Matrix4();
				matrix.fromArray(nodeDef.matrix);
				node.applyMatrix(matrix);
			} else {

				if (nodeDef.translation !== undefined) {

					node.position.fromArray(nodeDef.translation);
				}

				if (nodeDef.rotation !== undefined) {

					node.quaternion.fromArray(nodeDef.rotation);
				}

				if (nodeDef.scale !== undefined) {

					node.scale.fromArray(nodeDef.scale);
				}
			}

			return node;
		});
	};

	/**
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
  * @param {number} sceneIndex
  * @return {Promise<THREE.Scene>}
  */
	GLTFParser.prototype.loadScene = function () {

		// scene node hierachy builder

		function buildNodeHierachy(nodeId, parentObject, json, allNodes, skins) {

			var node = allNodes[nodeId];
			var nodeDef = json.nodes[nodeId];

			// build skeleton here as well

			if (nodeDef.skin !== undefined) {

				var meshes = node.isGroup === true ? node.children : [node];

				for (var i = 0, il = meshes.length; i < il; i++) {

					var mesh = meshes[i];
					var skinEntry = skins[nodeDef.skin];

					var bones = [];
					var boneInverses = [];

					for (var j = 0, jl = skinEntry.joints.length; j < jl; j++) {

						var jointId = skinEntry.joints[j];
						var jointNode = allNodes[jointId];

						if (jointNode) {

							bones.push(jointNode);

							var mat = new THREE.Matrix4();

							if (skinEntry.inverseBindMatrices !== undefined) {

								mat.fromArray(skinEntry.inverseBindMatrices.array, j * 16);
							}

							boneInverses.push(mat);
						} else {

							console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', jointId);
						}
					}

					mesh.bind(new THREE.Skeleton(bones, boneInverses), mesh.matrixWorld);
				}
			}

			// build node hierachy

			parentObject.add(node);

			if (nodeDef.children) {

				var children = nodeDef.children;

				for (var i = 0, il = children.length; i < il; i++) {

					var child = children[i];
					buildNodeHierachy(child, node, json, allNodes, skins);
				}
			}
		}

		return function loadScene(sceneIndex) {

			var json = this.json;
			var extensions = this.extensions;
			var sceneDef = this.json.scenes[sceneIndex];

			return this.getMultiDependencies(['node', 'skin']).then(function (dependencies) {

				var scene = new THREE.Scene();
				if (sceneDef.name !== undefined) scene.name = sceneDef.name;

				if (sceneDef.extras) scene.userData = sceneDef.extras;

				var nodeIds = sceneDef.nodes || [];

				for (var i = 0, il = nodeIds.length; i < il; i++) {

					buildNodeHierachy(nodeIds[i], scene, json, dependencies.nodes, dependencies.skins);
				}

				// Ambient lighting, if present, is always attached to the scene root.
				if (sceneDef.extensions && sceneDef.extensions[EXTENSIONS.KHR_LIGHTS] && sceneDef.extensions[EXTENSIONS.KHR_LIGHTS].light !== undefined) {

					var lights = extensions[EXTENSIONS.KHR_LIGHTS].lights;
					scene.add(lights[sceneDef.extensions[EXTENSIONS.KHR_LIGHTS].light]);
				}

				return scene;
			});
		};
	}();

	return GLTFLoader;
}();

exports.default = THREE.GLTFLoader;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* @author Prashant Sharma / spidersharma03
* @author Ben Houston / http://clara.io / bhouston
*/

THREE.HDRCubeTextureLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	// override in sub classes
	this.hdrLoader = new THREE.RGBELoader();
};

THREE.HDRCubeTextureLoader.prototype.load = function (type, urls, onLoad, onProgress, onError) {

	var RGBEByteToRGBFloat = function RGBEByteToRGBFloat(sourceArray, sourceOffset, destArray, destOffset) {

		var e = sourceArray[sourceOffset + 3];
		var scale = Math.pow(2.0, e - 128.0) / 255.0;

		destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
		destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
		destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
	};

	var RGBEByteToRGBHalf = function () {

		// Source: http://gamedev.stackexchange.com/questions/17326/conversion-of-a-number-from-single-precision-floating-point-representation-to-a/17410#17410

		var floatView = new Float32Array(1);
		var int32View = new Int32Array(floatView.buffer);

		/* This method is faster than the OpenEXR implementation (very often
   * used, eg. in Ogre), with the additional benefit of rounding, inspired
   * by James Tursa?s half-precision code. */
		function toHalf(val) {

			floatView[0] = val;
			var x = int32View[0];

			var bits = x >> 16 & 0x8000; /* Get the sign */
			var m = x >> 12 & 0x07ff; /* Keep one extra bit for rounding */
			var e = x >> 23 & 0xff; /* Using int is faster here */

			/* If zero, or denormal, or exponent underflows too much for a denormal
    * half, return signed zero. */
			if (e < 103) return bits;

			/* If NaN, return NaN. If Inf or exponent overflow, return Inf. */
			if (e > 142) {

				bits |= 0x7c00;
				/* If exponent was 0xff and one mantissa bit was set, it means NaN,
    		 * not Inf, so make sure we set one mantissa bit too. */
				bits |= (e == 255 ? 0 : 1) && x & 0x007fffff;
				return bits;
			}

			/* If exponent underflows but not too much, return a denormal */
			if (e < 113) {

				m |= 0x0800;
				/* Extra rounding may overflow and set mantissa to 0 and exponent
     * to 1, which is OK. */
				bits |= (m >> 114 - e) + (m >> 113 - e & 1);
				return bits;
			}

			bits |= e - 112 << 10 | m >> 1;
			/* Extra rounding. An overflow will set mantissa to 0 and increment
    * the exponent, which is OK. */
			bits += m & 1;
			return bits;
		}

		return function (sourceArray, sourceOffset, destArray, destOffset) {

			var e = sourceArray[sourceOffset + 3];
			var scale = Math.pow(2.0, e - 128.0) / 255.0;

			destArray[destOffset + 0] = toHalf(sourceArray[sourceOffset + 0] * scale);
			destArray[destOffset + 1] = toHalf(sourceArray[sourceOffset + 1] * scale);
			destArray[destOffset + 2] = toHalf(sourceArray[sourceOffset + 2] * scale);
		};
	}();

	//

	var texture = new THREE.CubeTexture();

	texture.type = type;
	texture.encoding = type === THREE.UnsignedByteType ? THREE.RGBEEncoding : THREE.LinearEncoding;
	texture.format = type === THREE.UnsignedByteType ? THREE.RGBAFormat : THREE.RGBFormat;
	texture.minFilter = texture.encoding === THREE.RGBEEncoding ? THREE.NearestFilter : THREE.LinearFilter;
	texture.magFilter = texture.encoding === THREE.RGBEEncoding ? THREE.NearestFilter : THREE.LinearFilter;
	texture.generateMipmaps = texture.encoding !== THREE.RGBEEncoding;
	texture.anisotropy = 0;

	var scope = this.hdrLoader;

	var loaded = 0;

	function loadHDRData(i, onLoad, onProgress, onError) {

		var loader = new THREE.FileLoader(this.manager);
		loader.setResponseType('arraybuffer');
		loader.load(urls[i], function (buffer) {

			loaded++;

			var texData = scope._parser(buffer);

			if (!texData) return;

			if (type === THREE.FloatType) {

				var numElements = texData.data.length / 4 * 3;
				var floatdata = new Float32Array(numElements);

				for (var j = 0; j < numElements; j++) {

					RGBEByteToRGBFloat(texData.data, j * 4, floatdata, j * 3);
				}

				texData.data = floatdata;
			} else if (type === THREE.HalfFloatType) {

				var numElements = texData.data.length / 4 * 3;
				var halfdata = new Uint16Array(numElements);

				for (var j = 0; j < numElements; j++) {

					RGBEByteToRGBHalf(texData.data, j * 4, halfdata, j * 3);
				}

				texData.data = halfdata;
			}

			if (undefined !== texData.image) {

				texture[i].images = texData.image;
			} else if (undefined !== texData.data) {

				var dataTexture = new THREE.DataTexture(texData.data, texData.width, texData.height);
				dataTexture.format = texture.format;
				dataTexture.type = texture.type;
				dataTexture.encoding = texture.encoding;
				dataTexture.minFilter = texture.minFilter;
				dataTexture.magFilter = texture.magFilter;
				dataTexture.generateMipmaps = texture.generateMipmaps;

				texture.images[i] = dataTexture;
			}

			if (loaded === 6) {

				texture.needsUpdate = true;
				if (onLoad) onLoad(texture);
			}
		}, onProgress, onError);
	}

	for (var i = 0; i < urls.length; i++) {

		loadHDRData(i, onLoad, onProgress, onError);
	}

	return texture;
};

exports.default = THREE.HDRCubeTextureLoader;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.KMZLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.KMZLoader.prototype = {

	constructor: THREE.KMZLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	parse: function parse(data) {

		var zip = new JSZip(data); // eslint-disable-line no-undef

		// console.log( zip );

		// var xml = new DOMParser().parseFromString( zip.file( 'doc.kml' ).asText(), 'application/xml' );

		function loadImage(image) {

			var path = decodeURI(image.init_from);

			// Hack to support relative paths
			path = path.replace('../', '');

			var regex = new RegExp(path + '$');
			var files = zip.file(regex);

			// console.log( image, files );

			if (files.length) {

				var file = files[0];
				var blob = new Blob([file.asArrayBuffer()], { type: 'application/octet-binary' });
				image.build.src = URL.createObjectURL(blob);
			}
		}

		// load collada

		var files = zip.file(/dae$/i);

		if (files.length) {

			var file = files[0];

			var collada = new THREE.ColladaLoader().parse(file.asText());

			// fix images

			var images = collada.library.images;

			for (var name in images) {

				loadImage(images[name]);
			}

			return collada;
		}

		console.error('KMZLoader: Couldn\'t find .dae file.');

		return {
			scene: new THREE.Group()
		};
	}

};

exports.default = THREE.KMZLoader;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author amakaseev / https://github.com/amakaseev
 *
 * for description see https://www.khronos.org/opengles/sdk/tools/KTX/
 * for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/
 *
 * ported from https://github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.khronosTextureContainer.ts
 */

THREE.KTXLoader = function () {

	this._parser = THREE.KTXLoader.parse;
};

THREE.KTXLoader.prototype = Object.create(THREE.CompressedTextureLoader.prototype);
THREE.KTXLoader.prototype.constructor = THREE.KTXLoader;

THREE.KTXLoader.parse = function (buffer, loadMipmaps) {

	var ktx = new KhronosTextureContainer(buffer, 1);

	return {
		mipmaps: ktx.mipmaps(loadMipmaps),
		width: ktx.pixelWidth,
		height: ktx.pixelHeight,
		format: ktx.glInternalFormat,
		isCubemap: ktx.numberOfFaces === 6,
		mipmapCount: ktx.numberOfMipmapLevels
	};
};

var KhronosTextureContainer = function () {

	/**
  * @param {ArrayBuffer} arrayBuffer- contents of the KTX container file
  * @param {number} facesExpected- should be either 1 or 6, based whether a cube texture or or
  * @param {boolean} threeDExpected- provision for indicating that data should be a 3D texture, not implemented
  * @param {boolean} textureArrayExpected- provision for indicating that data should be a texture array, not implemented
  */
	function KhronosTextureContainer(arrayBuffer, facesExpected, threeDExpected, textureArrayExpected) {

		this.arrayBuffer = arrayBuffer;

		// Test that it is a ktx formatted file, based on the first 12 bytes, character representation is:
		// '´', 'K', 'T', 'X', ' ', '1', '1', 'ª', '\r', '\n', '\x1A', '\n'
		// 0xAB, 0x4B, 0x54, 0x58, 0x20, 0x31, 0x31, 0xBB, 0x0D, 0x0A, 0x1A, 0x0A
		var identifier = new Uint8Array(this.arrayBuffer, 0, 12);
		if (identifier[0] !== 0xAB || identifier[1] !== 0x4B || identifier[2] !== 0x54 || identifier[3] !== 0x58 || identifier[4] !== 0x20 || identifier[5] !== 0x31 || identifier[6] !== 0x31 || identifier[7] !== 0xBB || identifier[8] !== 0x0D || identifier[9] !== 0x0A || identifier[10] !== 0x1A || identifier[11] !== 0x0A) {

			console.error('texture missing KTX identifier');
			return;
		}

		// load the reset of the header in native 32 bit int
		var header = new Int32Array(this.arrayBuffer, 12, 13);
		// determine of the remaining header values are recorded in the opposite endianness & require conversion
		var oppositeEndianess = header[0] === 0x01020304;
		// read all the header elements in order they exist in the file, without modification (sans endainness)
		this.glType = oppositeEndianess ? this.switchEndainness(header[1]) : header[1]; // must be 0 for compressed textures
		this.glTypeSize = oppositeEndianess ? this.switchEndainness(header[2]) : header[2]; // must be 1 for compressed textures
		this.glFormat = oppositeEndianess ? this.switchEndainness(header[3]) : header[3]; // must be 0 for compressed textures
		this.glInternalFormat = oppositeEndianess ? this.switchEndainness(header[4]) : header[4]; // the value of arg passed to gl.compressedTexImage2D(,,x,,,,)
		this.glBaseInternalFormat = oppositeEndianess ? this.switchEndainness(header[5]) : header[5]; // specify GL_RGB, GL_RGBA, GL_ALPHA, etc (un-compressed only)
		this.pixelWidth = oppositeEndianess ? this.switchEndainness(header[6]) : header[6]; // level 0 value of arg passed to gl.compressedTexImage2D(,,,x,,,)
		this.pixelHeight = oppositeEndianess ? this.switchEndainness(header[7]) : header[7]; // level 0 value of arg passed to gl.compressedTexImage2D(,,,,x,,)
		this.pixelDepth = oppositeEndianess ? this.switchEndainness(header[8]) : header[8]; // level 0 value of arg passed to gl.compressedTexImage3D(,,,,,x,,)
		this.numberOfArrayElements = oppositeEndianess ? this.switchEndainness(header[9]) : header[9]; // used for texture arrays
		this.numberOfFaces = oppositeEndianess ? this.switchEndainness(header[10]) : header[10]; // used for cubemap textures, should either be 1 or 6
		this.numberOfMipmapLevels = oppositeEndianess ? this.switchEndainness(header[11]) : header[11]; // number of levels; disregard possibility of 0 for compressed textures
		this.bytesOfKeyValueData = oppositeEndianess ? this.switchEndainness(header[12]) : header[12]; // the amount of space after the header for meta-data

		// Make sure we have a compressed type.  Not only reduces work, but probably better to let dev know they are not compressing.
		if (this.glType !== 0) {

			console.warn('only compressed formats currently supported');
			return;
		} else {

			// value of zero is an indication to generate mipmaps @ runtime.  Not usually allowed for compressed, so disregard.
			this.numberOfMipmapLevels = Math.max(1, this.numberOfMipmapLevels);
		}
		if (this.pixelHeight === 0 || this.pixelDepth !== 0) {

			console.warn('only 2D textures currently supported');
			return;
		}
		if (this.numberOfArrayElements !== 0) {

			console.warn('texture arrays not currently supported');
			return;
		}
		if (this.numberOfFaces !== facesExpected) {

			console.warn('number of faces expected' + facesExpected + ', but found ' + this.numberOfFaces);
			return;
		}
		// we now have a completely validated file, so could use existence of loadType as success
		// would need to make this more elaborate & adjust checks above to support more than one load type
		this.loadType = KhronosTextureContainer.COMPRESSED_2D;
	}

	// not as fast hardware based, but will probably never need to use
	KhronosTextureContainer.prototype.switchEndainness = function (val) {

		return (val & 0xFF) << 24 | (val & 0xFF00) << 8 | val >> 8 & 0xFF00 | val >> 24 & 0xFF;
	};

	// return mipmaps for THREE.js
	KhronosTextureContainer.prototype.mipmaps = function (loadMipmaps) {

		var mipmaps = [];

		// initialize width & height for level 1
		var dataOffset = KhronosTextureContainer.HEADER_LEN + this.bytesOfKeyValueData;
		var width = this.pixelWidth;
		var height = this.pixelHeight;
		var mipmapCount = loadMipmaps ? this.numberOfMipmapLevels : 1;

		for (var level = 0; level < mipmapCount; level++) {

			var imageSize = new Int32Array(this.arrayBuffer, dataOffset, 1)[0]; // size per face, since not supporting array cubemaps
			for (var face = 0; face < this.numberOfFaces; face++) {

				var byteArray = new Uint8Array(this.arrayBuffer, dataOffset + 4, imageSize);

				mipmaps.push({ "data": byteArray, "width": width, "height": height });

				dataOffset += imageSize + 4; // size of the image + 4 for the imageSize field
				dataOffset += 3 - (imageSize + 3) % 4; // add padding for odd sized image
			}
			width = Math.max(1.0, width * 0.5);
			height = Math.max(1.0, height * 0.5);
		}

		return mipmaps;
	};

	KhronosTextureContainer.HEADER_LEN = 12 + 13 * 4; // identifier + header elements (not including key value meta-data pairs)
	// load types
	KhronosTextureContainer.COMPRESSED_2D = 0; // uses a gl.compressedTexImage2D()
	KhronosTextureContainer.COMPRESSED_3D = 1; // uses a gl.compressedTexImage3D()
	KhronosTextureContainer.TEX_2D = 2; // uses a gl.texImage2D()
	KhronosTextureContainer.TEX_3D = 3; // uses a gl.texImage3D()

	return KhronosTextureContainer;
}();

exports.default = THREE.KTXLoader();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * @author Kai Salmen / https://kaisalmen.de
  * Development repository: https://github.com/kaisalmen/WWOBJLoader
  */



Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (THREE.LoaderSupport === undefined) {
	THREE.LoaderSupport = {};
}

/**
 * Validation functions.
 * @class
 */
THREE.LoaderSupport.Validator = {
	/**
  * If given input is null or undefined, false is returned otherwise true.
  *
  * @param input Can be anything
  * @returns {boolean}
  */
	isValid: function isValid(input) {
		return input !== null && input !== undefined;
	},
	/**
  * If given input is null or undefined, the defaultValue is returned otherwise the given input.
  *
  * @param input Can be anything
  * @param defaultValue Can be anything
  * @returns {*}
  */
	verifyInput: function verifyInput(input, defaultValue) {
		return input === null || input === undefined ? defaultValue : input;
	}
};

/**
 * Logging wrapper for console.
 * @class
 *
 * @param {boolean} enabled=true Tell if logger is enabled.
 * @param {boolean} debug=false Toggle debug logging.
 */
THREE.LoaderSupport.ConsoleLogger = function () {

	function ConsoleLogger(enabled, debug) {
		this.enabled = enabled !== false;
		this.debug = debug === true;
	}

	/**
  * Enable or disable debug logging.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {boolean} debug True or False
  */
	ConsoleLogger.prototype.setDebug = function (debug) {
		this.debug = debug === true;
	};

	/**
  * Returns if is enabled and debug.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @returns {boolean}
  */
	ConsoleLogger.prototype.isDebug = function () {
		return this.isEnabled() && this.debug;
	};

	/**
  * Enable or disable info, debug and time logging.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {boolean} enabled True or False
  */
	ConsoleLogger.prototype.setEnabled = function (enabled) {
		this.enabled = enabled === true;
	};

	/**
  * Returns if is enabled.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @returns {boolean}
  */
	ConsoleLogger.prototype.isEnabled = function () {
		return this.enabled;
	};

	/**
  * Log a debug message if enabled and debug is set.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {string} message Message to log
  */
	ConsoleLogger.prototype.logDebug = function (message) {
		if (this.enabled && this.debug) console.info(message);
	};

	/**
  * Log an info message if enabled.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {string} message Message to log
  */
	ConsoleLogger.prototype.logInfo = function (message) {
		if (this.enabled) console.info(message);
	};

	/**
  * Log a warn message (always).
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {string} message Message to log
  */
	ConsoleLogger.prototype.logWarn = function (message) {
		console.warn(message);
	};

	/**
  * Log an error message (always).
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {string} message Message to log
  */
	ConsoleLogger.prototype.logError = function (message) {
		console.error(message);
	};

	/**
  * Start time measurement with provided id.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {string} id Time identification
  */
	ConsoleLogger.prototype.logTimeStart = function (id) {
		if (this.enabled) console.time(id);
	};

	/**
  * Stop time measurement started with provided id.
  * @memberOf THREE.LoaderSupport.ConsoleLogger
  *
  * @param {string} id Time identification
  */
	ConsoleLogger.prototype.logTimeEnd = function (id) {
		if (this.enabled) console.timeEnd(id);
	};

	return ConsoleLogger;
}();

/**
 * Callbacks utilized by loaders and builder.
 * @class
 */
THREE.LoaderSupport.Callbacks = function () {

	var Validator = THREE.LoaderSupport.Validator;

	function Callbacks() {
		this.onProgress = null;
		this.onMeshAlter = null;
		this.onLoad = null;
		this.onLoadMaterials = null;
	}

	/**
  * Register callback function that is invoked by internal function "announceProgress" to print feedback.
  * @memberOf THREE.LoaderSupport.Callbacks
  *
  * @param {callback} callbackOnProgress Callback function for described functionality
  */
	Callbacks.prototype.setCallbackOnProgress = function (callbackOnProgress) {
		this.onProgress = Validator.verifyInput(callbackOnProgress, this.onProgress);
	};

	/**
  * Register callback function that is called every time a mesh was loaded.
  * Use {@link THREE.LoaderSupport.LoadedMeshUserOverride} for alteration instructions (geometry, material or disregard mesh).
  * @memberOf THREE.LoaderSupport.Callbacks
  *
  * @param {callback} callbackOnMeshAlter Callback function for described functionality
  */
	Callbacks.prototype.setCallbackOnMeshAlter = function (callbackOnMeshAlter) {
		this.onMeshAlter = Validator.verifyInput(callbackOnMeshAlter, this.onMeshAlter);
	};

	/**
  * Register callback function that is called once loading of the complete OBJ file is completed.
  * @memberOf THREE.LoaderSupport.Callbacks
  *
  * @param {callback} callbackOnLoad Callback function for described functionality
  */
	Callbacks.prototype.setCallbackOnLoad = function (callbackOnLoad) {
		this.onLoad = Validator.verifyInput(callbackOnLoad, this.onLoad);
	};

	/**
  * Register callback function that is called when materials have been loaded.
  * @memberOf THREE.LoaderSupport.Callbacks
  *
  * @param {callback} callbackOnLoadMaterials Callback function for described functionality
  */
	Callbacks.prototype.setCallbackOnLoadMaterials = function (callbackOnLoadMaterials) {
		this.onLoadMaterials = Validator.verifyInput(callbackOnLoadMaterials, this.onLoadMaterials);
	};

	return Callbacks;
}();

/**
 * Object to return by callback onMeshAlter. Used to disregard a certain mesh or to return one to many meshes.
 * @class
 *
 * @param {boolean} disregardMesh=false Tell implementation to completely disregard this mesh
 * @param {boolean} disregardMesh=false Tell implementation that mesh(es) have been altered or added
 */
THREE.LoaderSupport.LoadedMeshUserOverride = function () {

	function LoadedMeshUserOverride(disregardMesh, alteredMesh) {
		this.disregardMesh = disregardMesh === true;
		this.alteredMesh = alteredMesh === true;
		this.meshes = [];
	}

	/**
  * Add a mesh created within callback.
  *
  * @memberOf THREE.OBJLoader2.LoadedMeshUserOverride
  *
  * @param {THREE.Mesh} mesh
  */
	LoadedMeshUserOverride.prototype.addMesh = function (mesh) {
		this.meshes.push(mesh);
		this.alteredMesh = true;
	};

	/**
  * Answers if mesh shall be disregarded completely.
  *
  * @returns {boolean}
  */
	LoadedMeshUserOverride.prototype.isDisregardMesh = function () {
		return this.disregardMesh;
	};

	/**
  * Answers if new mesh(es) were created.
  *
  * @returns {boolean}
  */
	LoadedMeshUserOverride.prototype.providesAlteredMeshes = function () {
		return this.alteredMesh;
	};

	return LoadedMeshUserOverride;
}();

/**
 * A resource description used by {@link THREE.LoaderSupport.PrepData} and others.
 * @class
 *
 * @param {string} url URL to the file
 * @param {string} extension The file extension (type)
 */
THREE.LoaderSupport.ResourceDescriptor = function () {

	var Validator = THREE.LoaderSupport.Validator;

	function ResourceDescriptor(url, extension) {
		var urlParts = url.split('/');

		if (urlParts.length < 2) {

			this.path = null;
			this.name = url;
			this.url = url;
		} else {

			this.path = Validator.verifyInput(urlParts.slice(0, urlParts.length - 1).join('/') + '/', null);
			this.name = Validator.verifyInput(urlParts[urlParts.length - 1], null);
			this.url = url;
		}
		this.extension = Validator.verifyInput(extension, "default");
		this.extension = this.extension.trim();
		this.content = null;
	}

	/**
  * Set the content of this resource (String)
  * @memberOf THREE.LoaderSupport.ResourceDescriptor
  *
  * @param {Object} content The file content as arraybuffer or text
  */
	ResourceDescriptor.prototype.setContent = function (content) {
		this.content = Validator.verifyInput(content, null);
	};

	return ResourceDescriptor;
}();

/**
 * Configuration instructions to be used by run method.
 * @class
 */
THREE.LoaderSupport.PrepData = function () {

	var Validator = THREE.LoaderSupport.Validator;

	function PrepData(modelName) {
		this.modelName = Validator.verifyInput(modelName, '');
		this.resources = [];
		this.streamMeshesTo = null;
		this.materialPerSmoothingGroup = false;
		this.useIndices = false;
		this.disregardNormals = false;
		this.callbacks = new THREE.LoaderSupport.Callbacks();
		this.crossOrigin;
		this.useAsync = false;
	}

	/**
  * Set the node where the loaded objects will be attached directly.
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @param {THREE.Object3D} streamMeshesTo Object already attached to scenegraph where new meshes will be attached to
  */
	PrepData.prototype.setStreamMeshesTo = function (streamMeshesTo) {
		this.streamMeshesTo = Validator.verifyInput(streamMeshesTo, null);
	};

	/**
  * Tells whether a material shall be created per smoothing group.
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @param {boolean} materialPerSmoothingGroup=false
  */
	PrepData.prototype.setMaterialPerSmoothingGroup = function (materialPerSmoothingGroup) {
		this.materialPerSmoothingGroup = materialPerSmoothingGroup === true;
	};

	/**
  * Tells whether indices should be used
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @param {boolean} useIndices=false
  */
	PrepData.prototype.setUseIndices = function (useIndices) {
		this.useIndices = useIndices === true;
	};

	/**
  * Tells whether normals should be completely disregarded and regenerated.
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @param {boolean} disregardNormals=false
  */
	PrepData.prototype.setDisregardNormals = function (disregardNormals) {
		this.disregardNormals = disregardNormals === true;
	};

	/**
  * Returns all callbacks as {@link THREE.LoaderSupport.Callbacks}
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @returns {THREE.LoaderSupport.Callbacks}
  */
	PrepData.prototype.getCallbacks = function () {
		return this.callbacks;
	};

	/**
  * Sets the CORS string to be used.
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @param {string} crossOrigin CORS value
  */
	PrepData.prototype.setCrossOrigin = function (crossOrigin) {
		this.crossOrigin = crossOrigin;
	};

	/**
  * Add a resource description.
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @param {THREE.LoaderSupport.ResourceDescriptor}
  */
	PrepData.prototype.addResource = function (resource) {
		this.resources.push(resource);
	};

	/**
  * If true uses async loading with worker, if false loads data synchronously.
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @param {boolean} useAsync
  */
	PrepData.prototype.setUseAsync = function (useAsync) {
		this.useAsync = useAsync === true;
	};

	/**
  * Clones this object and returns it afterwards.
  * @memberOf THREE.LoaderSupport.PrepData
  *
  * @returns {@link THREE.LoaderSupport.PrepData}
  */
	PrepData.prototype.clone = function () {
		var clone = new THREE.LoaderSupport.PrepData(this.modelName);
		clone.resources = this.resources;
		clone.streamMeshesTo = this.streamMeshesTo;
		clone.materialPerSmoothingGroup = this.materialPerSmoothingGroup;
		clone.useIndices = this.useIndices;
		clone.disregardNormals = this.disregardNormals;
		clone.callbacks = this.callbacks;
		clone.crossOrigin = this.crossOrigin;
		clone.useAsync = this.useAsync;
		return clone;
	};

	return PrepData;
}();

/**
 * Builds one or many THREE.Mesh from one raw set of Arraybuffers, materialGroup descriptions and further parameters.
 * Supports vertex, vertexColor, normal, uv and index buffers.
 * @class
 */
THREE.LoaderSupport.Builder = function () {

	var LOADER_BUILDER_VERSION = '1.1.1';

	var Validator = THREE.LoaderSupport.Validator;
	var ConsoleLogger = THREE.LoaderSupport.ConsoleLogger;

	function Builder(logger) {
		this.logger = Validator.verifyInput(logger, new ConsoleLogger());
		this.logger.logInfo('Using THREE.LoaderSupport.Builder version: ' + LOADER_BUILDER_VERSION);
		this.callbacks = new THREE.LoaderSupport.Callbacks();
		this.materials = [];
	}

	/**
  * Set materials loaded by any supplier of an Array of {@link THREE.Material}.
  * @memberOf THREE.LoaderSupport.Builder
  *
  * @param {THREE.Material[]} materials Array of {@link THREE.Material}
  */
	Builder.prototype.setMaterials = function (materials) {
		var payload = {
			cmd: 'materialData',
			materials: {
				materialCloneInstructions: null,
				serializedMaterials: null,
				runtimeMaterials: Validator.isValid(this.callbacks.onLoadMaterials) ? this.callbacks.onLoadMaterials(materials) : materials
			}
		};
		this.updateMaterials(payload);
	};

	Builder.prototype._setCallbacks = function (callbacks) {
		if (Validator.isValid(callbacks.onProgress)) this.callbacks.setCallbackOnProgress(callbacks.onProgress);
		if (Validator.isValid(callbacks.onMeshAlter)) this.callbacks.setCallbackOnMeshAlter(callbacks.onMeshAlter);
		if (Validator.isValid(callbacks.onLoad)) this.callbacks.setCallbackOnLoad(callbacks.onLoad);
		if (Validator.isValid(callbacks.onLoadMaterials)) this.callbacks.setCallbackOnLoadMaterials(callbacks.onLoadMaterials);
	};

	/**
  * Delegates processing of the payload (mesh building or material update) to the corresponding functions (BW-compatibility).
  * @memberOf THREE.LoaderSupport.Builder
  *
  * @param {Object} payload Raw Mesh or Material descriptions.
  * @returns {THREE.Mesh[]} mesh Array of {@link THREE.Mesh} or null in case of material update
  */
	Builder.prototype.processPayload = function (payload) {
		if (payload.cmd === 'meshData') {

			return this.buildMeshes(payload);
		} else if (payload.cmd === 'materialData') {

			this.updateMaterials(payload);
			return null;
		}
	};

	/**
  * Builds one or multiple meshes from the data described in the payload (buffers, params, material info).
  * @memberOf THREE.LoaderSupport.Builder
  *
  * @param {Object} meshPayload Raw mesh description (buffers, params, materials) used to build one to many meshes.
  * @returns {THREE.Mesh[]} mesh Array of {@link THREE.Mesh}
  */
	Builder.prototype.buildMeshes = function (meshPayload) {
		var meshName = meshPayload.params.meshName;

		var bufferGeometry = new THREE.BufferGeometry();
		bufferGeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.vertices), 3));
		if (Validator.isValid(meshPayload.buffers.indices)) {

			bufferGeometry.setIndex(new THREE.BufferAttribute(new Uint32Array(meshPayload.buffers.indices), 1));
		}
		var haveVertexColors = Validator.isValid(meshPayload.buffers.colors);
		if (haveVertexColors) {

			bufferGeometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.colors), 3));
		}
		if (Validator.isValid(meshPayload.buffers.normals)) {

			bufferGeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.normals), 3));
		} else {

			bufferGeometry.computeVertexNormals();
		}
		if (Validator.isValid(meshPayload.buffers.uvs)) {

			bufferGeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.uvs), 2));
		}

		var material, materialName, key;
		var materialNames = meshPayload.materials.materialNames;
		var createMultiMaterial = meshPayload.materials.multiMaterial;
		var multiMaterials = [];
		for (key in materialNames) {

			materialName = materialNames[key];
			material = this.materials[materialName];
			if (createMultiMaterial) multiMaterials.push(material);
		}
		if (createMultiMaterial) {

			material = multiMaterials;
			var materialGroups = meshPayload.materials.materialGroups;
			var materialGroup;
			for (key in materialGroups) {

				materialGroup = materialGroups[key];
				bufferGeometry.addGroup(materialGroup.start, materialGroup.count, materialGroup.index);
			}
		}

		var meshes = [];
		var mesh;
		var callbackOnMeshAlter = this.callbacks.onMeshAlter;
		var callbackOnMeshAlterResult;
		var useOrgMesh = true;
		if (Validator.isValid(callbackOnMeshAlter)) {

			callbackOnMeshAlterResult = callbackOnMeshAlter({
				detail: {
					meshName: meshName,
					bufferGeometry: bufferGeometry,
					material: material
				}
			});
			if (Validator.isValid(callbackOnMeshAlterResult)) {

				if (!callbackOnMeshAlterResult.isDisregardMesh() && callbackOnMeshAlterResult.providesAlteredMeshes()) {

					for (var i in callbackOnMeshAlterResult.meshes) {

						meshes.push(callbackOnMeshAlterResult.meshes[i]);
					}
				}
				useOrgMesh = false;
			}
		}
		if (useOrgMesh) {

			mesh = new THREE.Mesh(bufferGeometry, material);
			mesh.name = meshName;
			meshes.push(mesh);
		}

		var progressMessage;
		if (Validator.isValid(meshes) && meshes.length > 0) {

			var meshNames = [];
			for (var i in meshes) {

				mesh = meshes[i];
				meshNames[i] = mesh.name;
			}
			progressMessage = 'Adding mesh(es) (' + meshNames.length + ': ' + meshNames + ') from input mesh: ' + meshName;
			progressMessage += ' (' + (meshPayload.progress.numericalValue * 100).toFixed(2) + '%)';
		} else {

			progressMessage = 'Not adding mesh: ' + meshName;
			progressMessage += ' (' + (meshPayload.progress.numericalValue * 100).toFixed(2) + '%)';
		}
		var callbackOnProgress = this.callbacks.onProgress;
		if (Validator.isValid(callbackOnProgress)) {

			var event = new CustomEvent('BuilderEvent', {
				detail: {
					type: 'progress',
					modelName: meshPayload.params.meshName,
					text: progressMessage,
					numericalValue: meshPayload.progress.numericalValue
				}
			});
			callbackOnProgress(event);
		}

		return meshes;
	};

	/**
  * Updates the materials with contained material objects (sync) or from alteration instructions (async).
  * @memberOf THREE.LoaderSupport.Builder
  *
  * @param {Object} materialPayload Material update instructions
  */
	Builder.prototype.updateMaterials = function (materialPayload) {
		var material, materialName;
		var materialCloneInstructions = materialPayload.materials.materialCloneInstructions;
		if (Validator.isValid(materialCloneInstructions)) {

			var materialNameOrg = materialCloneInstructions.materialNameOrg;
			var materialOrg = this.materials[materialNameOrg];
			material = materialOrg.clone();

			materialName = materialCloneInstructions.materialName;
			material.name = materialName;

			var materialProperties = materialCloneInstructions.materialProperties;
			for (var key in materialProperties) {

				if (material.hasOwnProperty(key) && materialProperties.hasOwnProperty(key)) material[key] = materialProperties[key];
			}
			this.materials[materialName] = material;
		}

		var materials = materialPayload.materials.serializedMaterials;
		if (Validator.isValid(materials) && Object.keys(materials).length > 0) {

			var loader = new THREE.MaterialLoader();
			var materialJson;
			for (materialName in materials) {

				materialJson = materials[materialName];
				if (Validator.isValid(materialJson)) {

					material = loader.parse(materialJson);
					this.logger.logInfo('De-serialized material with name "' + materialName + '" will be added.');
					this.materials[materialName] = material;
				}
			}
		}

		materials = materialPayload.materials.runtimeMaterials;
		if (Validator.isValid(materials) && Object.keys(materials).length > 0) {

			for (materialName in materials) {

				material = materials[materialName];
				this.logger.logInfo('Material with name "' + materialName + '" will be added.');
				this.materials[materialName] = material;
			}
		}
	};

	/**
  * Returns the mapping object of material name and corresponding jsonified material.
  *
  * @returns {Object} Map of Materials in JSON representation
  */
	Builder.prototype.getMaterialsJSON = function () {
		var materialsJSON = {};
		var material;
		for (var materialName in this.materials) {

			material = this.materials[materialName];
			materialsJSON[materialName] = material.toJSON();
		}

		return materialsJSON;
	};

	/**
  * Returns the mapping object of material name and corresponding material.
  *
  * @returns {Object} Map of {@link THREE.Material}
  */
	Builder.prototype.getMaterials = function () {
		return this.materials;
	};

	return Builder;
}();

/**
 * Base class to be used by loaders.
 * @class
 *
 * @param {THREE.DefaultLoadingManager} [manager] The loadingManager for the loader to use. Default is {@link THREE.DefaultLoadingManager}
 * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
 */
THREE.LoaderSupport.LoaderBase = function () {

	var Validator = THREE.LoaderSupport.Validator;
	var ConsoleLogger = THREE.LoaderSupport.ConsoleLogger;

	function LoaderBase(manager, logger) {
		this.manager = Validator.verifyInput(manager, THREE.DefaultLoadingManager);
		this.logger = Validator.verifyInput(logger, new ConsoleLogger());

		this.modelName = '';
		this.instanceNo = 0;
		this.path = '';
		this.useIndices = false;
		this.disregardNormals = false;

		this.loaderRootNode = new THREE.Group();
		this.builder = new THREE.LoaderSupport.Builder(this.logger);
		this._createDefaultMaterials();
		this.callbacks = new THREE.LoaderSupport.Callbacks();
	};

	LoaderBase.prototype._createDefaultMaterials = function () {
		var defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xDCF1FF });
		defaultMaterial.name = 'defaultMaterial';

		var vertexColorMaterial = new THREE.MeshStandardMaterial({ color: 0xDCF1FF });
		vertexColorMaterial.name = 'vertexColorMaterial';
		vertexColorMaterial.vertexColors = THREE.VertexColors;

		var runtimeMaterials = {};
		runtimeMaterials[defaultMaterial.name] = defaultMaterial;
		runtimeMaterials[vertexColorMaterial.name] = vertexColorMaterial;

		this.builder.updateMaterials({
			cmd: 'materialData',
			materials: {
				materialCloneInstructions: null,
				serializedMaterials: null,
				runtimeMaterials: runtimeMaterials
			}
		});
	};

	LoaderBase.prototype._applyPrepData = function (prepData) {
		if (Validator.isValid(prepData)) {

			this.setModelName(prepData.modelName);
			this.setStreamMeshesTo(prepData.streamMeshesTo);
			this.builder.setMaterials(prepData.materials);
			this.setUseIndices(prepData.useIndices);
			this.setDisregardNormals(prepData.disregardNormals);

			this._setCallbacks(prepData.getCallbacks());
		}
	};

	LoaderBase.prototype._setCallbacks = function (callbacks) {
		if (Validator.isValid(callbacks.onProgress)) this.callbacks.setCallbackOnProgress(callbacks.onProgress);
		if (Validator.isValid(callbacks.onMeshAlter)) this.callbacks.setCallbackOnMeshAlter(callbacks.onMeshAlter);
		if (Validator.isValid(callbacks.onLoad)) this.callbacks.setCallbackOnLoad(callbacks.onLoad);
		if (Validator.isValid(callbacks.onLoadMaterials)) this.callbacks.setCallbackOnLoadMaterials(callbacks.onLoadMaterials);

		this.builder._setCallbacks(this.callbacks);
	};

	/**
  * Provides access to console logging wrapper.
  *
  * @returns {THREE.LoaderSupport.ConsoleLogger}
  */
	LoaderBase.prototype.getLogger = function () {
		return this.logger;
	};

	/**
  * Set the name of the model.
  * @memberOf THREE.LoaderSupport.LoaderBase
  *
  * @param {string} modelName
  */
	LoaderBase.prototype.setModelName = function (modelName) {
		this.modelName = Validator.verifyInput(modelName, this.modelName);
	};

	/**
  * The URL of the base path.
  * @memberOf THREE.LoaderSupport.LoaderBase
  *
  * @param {string} path URL
  */
	LoaderBase.prototype.setPath = function (path) {
		this.path = Validator.verifyInput(path, this.path);
	};

	/**
  * Set the node where the loaded objects will be attached directly.
  * @memberOf THREE.LoaderSupport.LoaderBase
  *
  * @param {THREE.Object3D} streamMeshesTo Object already attached to scenegraph where new meshes will be attached to
  */
	LoaderBase.prototype.setStreamMeshesTo = function (streamMeshesTo) {
		this.loaderRootNode = Validator.verifyInput(streamMeshesTo, this.loaderRootNode);
	};

	/**
  * Set materials loaded by MTLLoader or any other supplier of an Array of {@link THREE.Material}.
  * @memberOf THREE.LoaderSupport.LoaderBase
  *
  * @param {THREE.Material[]} materials Array of {@link THREE.Material}
  */
	LoaderBase.prototype.setMaterials = function (materials) {
		this.builder.setMaterials(materials);
	};

	/**
  * Instructs loaders to create indexed {@link THREE.BufferGeometry}.
  * @memberOf THREE.LoaderSupport.LoaderBase
  *
  * @param {boolean} useIndices=false
  */
	LoaderBase.prototype.setUseIndices = function (useIndices) {
		this.useIndices = useIndices === true;
	};

	/**
  * Tells whether normals should be completely disregarded and regenerated.
  * @memberOf THREE.LoaderSupport.LoaderBase
  *
  * @param {boolean} disregardNormals=false
  */
	LoaderBase.prototype.setDisregardNormals = function (disregardNormals) {
		this.disregardNormals = disregardNormals === true;
	};

	/**
  * Announce feedback which is give to the registered callbacks.
  * @memberOf THREE.LoaderSupport.LoaderBase
  * @private
  *
  * @param {string} type The type of event
  * @param {string} text Textual description of the event
  * @param {number} numericalValue Numerical value describing the progress
  */
	LoaderBase.prototype.onProgress = function (type, text, numericalValue) {
		var content = Validator.isValid(text) ? text : '';
		var event = {
			detail: {
				type: type,
				modelName: this.modelName,
				instanceNo: this.instanceNo,
				text: content,
				numericalValue: numericalValue
			}
		};

		if (Validator.isValid(this.callbacks.onProgress)) this.callbacks.onProgress(event);

		this.logger.logDebug(content);
	};

	return LoaderBase;
}();

/**
 * Default implementation of the WorkerRunner responsible for creation and configuration of the parser within the worker.
 *
 * @class
 */
THREE.LoaderSupport.WorkerRunnerRefImpl = function () {

	function WorkerRunnerRefImpl() {
		var scope = this;
		var scopedRunner = function scopedRunner(event) {
			scope.processMessage(event.data);
		};
		self.addEventListener('message', scopedRunner, false);
	}

	/**
  * Applies values from parameter object via set functions or via direct assignment.
  * @memberOf THREE.LoaderSupport.WorkerRunnerRefImpl
  *
  * @param {Object} parser The parser instance
  * @param {Object} params The parameter object
  */
	WorkerRunnerRefImpl.prototype.applyProperties = function (parser, params) {
		var property, funcName, values;
		for (property in params) {
			funcName = 'set' + property.substring(0, 1).toLocaleUpperCase() + property.substring(1);
			values = params[property];

			if (typeof parser[funcName] === 'function') {

				parser[funcName](values);
			} else if (parser.hasOwnProperty(property)) {

				parser[property] = values;
			}
		}
	};

	/**
  * Configures the Parser implementation according the supplied configuration object.
  * @memberOf THREE.LoaderSupport.WorkerRunnerRefImpl
  *
  * @param {Object} payload Raw mesh description (buffers, params, materials) used to build one to many meshes.
  */
	WorkerRunnerRefImpl.prototype.processMessage = function (payload) {
		var logEnabled = payload.logger.enabled;
		var logDebug = payload.logger.enabled;
		if (payload.cmd === 'run') {

			var callbacks = {
				callbackBuilder: function callbackBuilder(payload) {
					self.postMessage(payload);
				},
				callbackProgress: function callbackProgress(text) {
					if (logEnabled && logDebug) console.debug('WorkerRunner: progress: ' + text);
				}
			};

			// Parser is expected to be named as such
			var parser = new Parser();
			if (typeof parser['setLogConfig'] === 'function') parser.setLogConfig(logEnabled, logDebug);
			this.applyProperties(parser, payload.params);
			this.applyProperties(parser, payload.materials);
			this.applyProperties(parser, callbacks);
			parser.workerScope = self;
			parser.parse(payload.data.input, payload.data.options);

			if (logEnabled) console.log('WorkerRunner: Run complete!');

			callbacks.callbackBuilder({
				cmd: 'complete',
				msg: 'WorkerRunner completed run.'
			});
		} else {

			console.error('WorkerRunner: Received unknown command: ' + payload.cmd);
		}
	};

	return WorkerRunnerRefImpl;
}();

/**
 * This class provides means to transform existing parser code into a web worker. It defines a simple communication protocol
 * which allows to configure the worker and receive raw mesh data during execution.
 * @class
 *
 * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
 */
THREE.LoaderSupport.WorkerSupport = function () {

	var WORKER_SUPPORT_VERSION = '2.0.1';

	var Validator = THREE.LoaderSupport.Validator;

	var LoaderWorker = function () {

		function LoaderWorker(logger) {
			this.logger = Validator.verifyInput(logger, new THREE.LoaderSupport.ConsoleLogger());
			this._reset();
		}

		LoaderWorker.prototype._reset = function () {
			this.worker = null;
			this.runnerImplName = null;
			this.callbacks = {
				builder: null,
				onLoad: null
			};
			this.terminateRequested = false;
			this.queuedMessage = null;
			this.started = false;
		};

		LoaderWorker.prototype.initWorker = function (code, runnerImplName) {
			this.runnerImplName = runnerImplName;
			var blob = new Blob([code], { type: 'application/javascript' });
			this.worker = new Worker(window.URL.createObjectURL(blob));
			this.worker.onmessage = this._receiveWorkerMessage;

			// set referemce to this, then processing in worker scope within "_receiveWorkerMessage" can access members
			this.worker.runtimeRef = this;

			// process stored queuedMessage
			this._postMessage();
		};

		/**
   * Executed in worker scope
  	 */
		LoaderWorker.prototype._receiveWorkerMessage = function (e) {
			var payload = e.data;
			switch (payload.cmd) {
				case 'meshData':
				case 'materialData':
				case 'imageData':
					this.runtimeRef.callbacks.builder(payload);
					break;

				case 'complete':
					this.runtimeRef.queuedMessage = null;
					this.started = false;
					this.runtimeRef.callbacks.onLoad(payload.msg);

					if (this.runtimeRef.terminateRequested) {

						this.runtimeRef.logger.logInfo('WorkerSupport [' + this.runtimeRef.runnerImplName + ']: Run is complete. Terminating application on request!');
						this.runtimeRef._terminate();
					}
					break;

				case 'error':
					this.runtimeRef.logger.logError('WorkerSupport [' + this.runtimeRef.runnerImplName + ']: Reported error: ' + payload.msg);
					this.runtimeRef.queuedMessage = null;
					this.started = false;
					this.runtimeRef.callbacks.onLoad(payload.msg);

					if (this.runtimeRef.terminateRequested) {

						this.runtimeRef.logger.logInfo('WorkerSupport [' + this.runtimeRef.runnerImplName + ']: Run reported error. Terminating application on request!');
						this.runtimeRef._terminate();
					}
					break;

				default:
					this.runtimeRef.logger.logError('WorkerSupport [' + this.runtimeRef.runnerImplName + ']: Received unknown command: ' + payload.cmd);
					break;

			}
		};

		LoaderWorker.prototype.setCallbacks = function (builder, onLoad) {
			this.callbacks.builder = Validator.verifyInput(builder, this.callbacks.builder);
			this.callbacks.onLoad = Validator.verifyInput(onLoad, this.callbacks.onLoad);
		};

		LoaderWorker.prototype.run = function (payload) {
			if (Validator.isValid(this.queuedMessage)) {

				console.warn('Already processing message. Rejecting new run instruction');
				return;
			} else {

				this.queuedMessage = payload;
				this.started = true;
			}
			if (!Validator.isValid(this.callbacks.builder)) throw 'Unable to run as no "builder" callback is set.';
			if (!Validator.isValid(this.callbacks.onLoad)) throw 'Unable to run as no "onLoad" callback is set.';
			if (payload.cmd !== 'run') payload.cmd = 'run';
			if (Validator.isValid(payload.logger)) {

				payload.logger.enabled = Validator.verifyInput(payload.logger.enabled, true);
				payload.logger.debug = Validator.verifyInput(payload.logger.debug, false);
			} else {

				payload.logger = {
					enabled: true,
					debug: false
				};
			}
			this._postMessage();
		};

		LoaderWorker.prototype._postMessage = function () {
			if (Validator.isValid(this.queuedMessage) && Validator.isValid(this.worker)) {

				if (this.queuedMessage.data.input instanceof ArrayBuffer) {

					this.worker.postMessage(this.queuedMessage, [this.queuedMessage.data.input]);
				} else {

					this.worker.postMessage(this.queuedMessage);
				}
			}
		};

		LoaderWorker.prototype.setTerminateRequested = function (terminateRequested) {
			this.terminateRequested = terminateRequested === true;
			if (this.terminateRequested && Validator.isValid(this.worker) && !Validator.isValid(this.queuedMessage) && this.started) {

				this.logger.logInfo('Worker is terminated immediately as it is not running!');
				this._terminate();
			}
		};

		LoaderWorker.prototype._terminate = function () {
			this.worker.terminate();
			this._reset();
		};

		return LoaderWorker;
	}();

	function WorkerSupport(logger) {
		this.logger = Validator.verifyInput(logger, new THREE.LoaderSupport.ConsoleLogger());
		this.logger.logInfo('Using THREE.LoaderSupport.WorkerSupport version: ' + WORKER_SUPPORT_VERSION);

		// check worker support first
		if (window.Worker === undefined) throw "This browser does not support web workers!";
		if (window.Blob === undefined) throw "This browser does not support Blob!";
		if (typeof window.URL.createObjectURL !== 'function') throw "This browser does not support Object creation from URL!";

		this.loaderWorker = new LoaderWorker(this.logger);
	}

	/**
  * Validate the status of worker code and the derived worker.
  * @memberOf THREE.LoaderSupport.WorkerSupport
  *
  * @param {Function} functionCodeBuilder Function that is invoked with funcBuildObject and funcBuildSingelton that allows stringification of objects and singletons.
  * @param {String[]} libLocations URL of libraries that shall be added to worker code relative to libPath
  * @param {String} libPath Base path used for loading libraries
  * @param {THREE.LoaderSupport.WorkerRunnerRefImpl} runnerImpl The default worker parser wrapper implementation (communication and execution). An extended class could be passed here.
  */
	WorkerSupport.prototype.validate = function (functionCodeBuilder, libLocations, libPath, runnerImpl) {
		if (Validator.isValid(this.loaderWorker.worker)) return;

		this.logger.logInfo('WorkerSupport: Building worker code...');
		this.logger.logTimeStart('buildWebWorkerCode');

		if (Validator.isValid(runnerImpl)) {

			this.logger.logInfo('WorkerSupport: Using "' + runnerImpl.name + '" as Runncer class for worker.');
		} else {

			runnerImpl = THREE.LoaderSupport.WorkerRunnerRefImpl;
			this.logger.logInfo('WorkerSupport: Using DEFAULT "THREE.LoaderSupport.WorkerRunnerRefImpl" as Runncer class for worker.');
		}

		var userWorkerCode = functionCodeBuilder(buildObject, buildSingelton);
		userWorkerCode += buildSingelton(runnerImpl.name, runnerImpl.name, runnerImpl);
		userWorkerCode += 'new ' + runnerImpl.name + '();\n\n';

		var scope = this;
		if (Validator.isValid(libLocations) && libLocations.length > 0) {

			var libsContent = '';
			var loadAllLibraries = function loadAllLibraries(path, locations) {
				if (locations.length === 0) {

					scope.loaderWorker.initWorker(libsContent + userWorkerCode, scope.logger, runnerImpl.name);
					scope.logger.logTimeEnd('buildWebWorkerCode');
				} else {

					var loadedLib = function loadedLib(contentAsString) {
						libsContent += contentAsString;
						loadAllLibraries(path, locations);
					};

					var fileLoader = new THREE.FileLoader();
					fileLoader.setPath(path);
					fileLoader.setResponseType('text');
					fileLoader.load(locations[0], loadedLib);
					locations.shift();
				}
			};
			loadAllLibraries(libPath, libLocations);
		} else {

			this.loaderWorker.initWorker(userWorkerCode, this.logger, runnerImpl.name);
			this.logger.logTimeEnd('buildWebWorkerCode');
		}
	};

	/**
  * Specify functions that should be build when new raw mesh data becomes available and when the parser is finished.
  * @memberOf THREE.LoaderSupport.WorkerSupport
  *
  * @param {Function} builder The builder function. Default is {@link THREE.LoaderSupport.Builder}.
  * @param {Function} onLoad The function that is called when parsing is complete.
  */
	WorkerSupport.prototype.setCallbacks = function (builder, onLoad) {
		this.loaderWorker.setCallbacks(builder, onLoad);
	};

	/**
  * Runs the parser with the provided configuration.
  * @memberOf THREE.LoaderSupport.WorkerSupport
  *
  * @param {Object} payload Raw mesh description (buffers, params, materials) used to build one to many meshes.
  */
	WorkerSupport.prototype.run = function (payload) {
		this.loaderWorker.run(payload);
	};

	/**
  * Request termination of worker once parser is finished.
  * @memberOf THREE.LoaderSupport.WorkerSupport
  *
  * @param {boolean} terminateRequested True or false.
  */
	WorkerSupport.prototype.setTerminateRequested = function (terminateRequested) {
		this.loaderWorker.setTerminateRequested(terminateRequested);
	};

	var buildObject = function buildObject(fullName, object) {
		var objectString = fullName + ' = {\n';
		var part;
		for (var name in object) {

			part = object[name];
			if (typeof part === 'string' || part instanceof String) {

				part = part.replace('\n', '\\n');
				part = part.replace('\r', '\\r');
				objectString += '\t' + name + ': "' + part + '",\n';
			} else if (part instanceof Array) {

				objectString += '\t' + name + ': [' + part + '],\n';
			} else if (Number.isInteger(part)) {

				objectString += '\t' + name + ': ' + part + ',\n';
			} else if (typeof part === 'function') {

				objectString += '\t' + name + ': ' + part + ',\n';
			}
		}
		objectString += '}\n\n';

		return objectString;
	};

	var buildSingelton = function buildSingelton(fullName, internalName, object) {
		var objectString = fullName + ' = (function () {\n\n';
		objectString += '\t' + object.prototype.constructor.toString() + '\n\n';
		objectString = objectString.replace(object.name, internalName);

		var funcString;
		var objectPart;
		for (var name in object.prototype) {

			objectPart = object.prototype[name];
			if (typeof objectPart === 'function') {

				funcString = objectPart.toString();
				objectString += '\t' + internalName + '.prototype.' + name + ' = ' + funcString + ';\n\n';
			}
		}
		objectString += '\treturn ' + internalName + ';\n';
		objectString += '})();\n\n';

		return objectString;
	};

	return WorkerSupport;
}();

/**
 * Orchestrate loading of multiple OBJ files/data from an instruction queue with a configurable amount of workers (1-16).
 * Workflow:
 *   prepareWorkers
 *   enqueueForRun
 *   processQueue
 *   tearDown (to force stop)
 *
 * @class
 *
 * @param {string} classDef Class definition to be used for construction
 * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
 */
THREE.LoaderSupport.WorkerDirector = function () {

	var LOADER_WORKER_DIRECTOR_VERSION = '2.1.0';

	var Validator = THREE.LoaderSupport.Validator;

	var MAX_WEB_WORKER = 16;
	var MAX_QUEUE_SIZE = 8192;

	function WorkerDirector(classDef, logger) {
		this.logger = Validator.verifyInput(logger, new THREE.LoaderSupport.ConsoleLogger());
		this.logger.logInfo('Using THREE.LoaderSupport.WorkerDirector version: ' + LOADER_WORKER_DIRECTOR_VERSION);

		this.maxQueueSize = MAX_QUEUE_SIZE;
		this.maxWebWorkers = MAX_WEB_WORKER;
		this.crossOrigin = null;

		if (!Validator.isValid(classDef)) throw 'Provided invalid classDef: ' + classDef;

		this.workerDescription = {
			classDef: classDef,
			globalCallbacks: {},
			workerSupports: {}
		};
		this.objectsCompleted = 0;
		this.instructionQueue = [];
		this.instructionQueuePointer = 0;

		this.callbackOnFinishedProcessing = null;
	}

	/**
  * Returns the maximum length of the instruction queue.
  * @memberOf THREE.LoaderSupport.WorkerDirector
  *
  * @returns {number}
  */
	WorkerDirector.prototype.getMaxQueueSize = function () {
		return this.maxQueueSize;
	};

	/**
  * Returns the maximum number of workers.
  * @memberOf THREE.LoaderSupport.WorkerDirector
  *
  * @returns {number}
  */
	WorkerDirector.prototype.getMaxWebWorkers = function () {
		return this.maxWebWorkers;
	};

	/**
  * Sets the CORS string to be used.
  * @memberOf THREE.LoaderSupport.WorkerDirector
  *
  * @param {string} crossOrigin CORS value
  */
	WorkerDirector.prototype.setCrossOrigin = function (crossOrigin) {
		this.crossOrigin = crossOrigin;
	};

	/**
  * Create or destroy workers according limits. Set the name and register callbacks for dynamically created web workers.
  * @memberOf THREE.LoaderSupport.WorkerDirector
  *
  * @param {THREE.OBJLoader2.WWOBJLoader2.PrepDataCallbacks} globalCallbacks  Register global callbacks used by all web workers
  * @param {number} maxQueueSize Set the maximum size of the instruction queue (1-1024)
  * @param {number} maxWebWorkers Set the maximum amount of workers (1-16)
  */
	WorkerDirector.prototype.prepareWorkers = function (globalCallbacks, maxQueueSize, maxWebWorkers) {
		if (Validator.isValid(globalCallbacks)) this.workerDescription.globalCallbacks = globalCallbacks;
		this.maxQueueSize = Math.min(maxQueueSize, MAX_QUEUE_SIZE);
		this.maxWebWorkers = Math.min(maxWebWorkers, MAX_WEB_WORKER);
		this.maxWebWorkers = Math.min(this.maxWebWorkers, this.maxQueueSize);
		this.objectsCompleted = 0;
		this.instructionQueue = [];
		this.instructionQueuePointer = 0;

		for (var instanceNo = 0; instanceNo < this.maxWebWorkers; instanceNo++) {

			this.workerDescription.workerSupports[instanceNo] = {
				instanceNo: instanceNo,
				inUse: false,
				terminateRequested: false,
				workerSupport: new THREE.LoaderSupport.WorkerSupport(this.logger),
				loader: null
			};
		}
	};

	/**
  * Store run instructions in internal instructionQueue.
  * @memberOf THREE.LoaderSupport.WorkerDirector
  *
  * @param {THREE.LoaderSupport.PrepData} prepData
  */
	WorkerDirector.prototype.enqueueForRun = function (prepData) {
		if (this.instructionQueue.length < this.maxQueueSize) {
			this.instructionQueue.push(prepData);
		}
	};

	/**
  * Returns if any workers are running.
  *
  * @memberOf THREE.LoaderSupport.WorkerDirector
  * @returns {boolean}
  */
	WorkerDirector.prototype.isRunning = function () {
		var wsKeys = Object.keys(this.workerDescription.workerSupports);
		return this.instructionQueue.length > 0 && this.instructionQueuePointer < this.instructionQueue.length || wsKeys.length > 0;
	};

	/**
  * Process the instructionQueue until it is depleted.
  * @memberOf THREE.LoaderSupport.WorkerDirector
  */
	WorkerDirector.prototype.processQueue = function () {
		var prepData, supportDesc;
		for (var instanceNo in this.workerDescription.workerSupports) {

			supportDesc = this.workerDescription.workerSupports[instanceNo];
			if (!supportDesc.inUse) {

				if (this.instructionQueuePointer < this.instructionQueue.length) {

					prepData = this.instructionQueue[this.instructionQueuePointer];
					this._kickWorkerRun(prepData, supportDesc);
					this.instructionQueuePointer++;
				} else {

					this._deregister(supportDesc);
				}
			}
		}

		if (!this.isRunning() && this.callbackOnFinishedProcessing !== null) {

			this.callbackOnFinishedProcessing();
			this.callbackOnFinishedProcessing = null;
		}
	};

	WorkerDirector.prototype._kickWorkerRun = function (prepData, supportDesc) {
		supportDesc.inUse = true;
		supportDesc.workerSupport.setTerminateRequested(supportDesc.terminateRequested);

		this.logger.logInfo('\nAssigning next item from queue to worker (queue length: ' + this.instructionQueue.length + ')\n\n');

		var scope = this;
		var prepDataCallbacks = prepData.getCallbacks();
		var globalCallbacks = this.workerDescription.globalCallbacks;
		var wrapperOnLoad = function wrapperOnLoad(event) {
			if (Validator.isValid(globalCallbacks.onLoad)) globalCallbacks.onLoad(event);
			if (Validator.isValid(prepDataCallbacks.onLoad)) prepDataCallbacks.onLoad(event);
			scope.objectsCompleted++;
			supportDesc.inUse = false;

			scope.processQueue();
		};

		var wrapperOnProgress = function wrapperOnProgress(event) {
			if (Validator.isValid(globalCallbacks.onProgress)) globalCallbacks.onProgress(event);
			if (Validator.isValid(prepDataCallbacks.onProgress)) prepDataCallbacks.onProgress(event);
		};

		var wrapperOnMeshAlter = function wrapperOnMeshAlter(event) {
			if (Validator.isValid(globalCallbacks.onMeshAlter)) globalCallbacks.onMeshAlter(event);
			if (Validator.isValid(prepDataCallbacks.onMeshAlter)) prepDataCallbacks.onMeshAlter(event);
		};

		supportDesc.loader = this._buildLoader(supportDesc.instanceNo);

		var updatedCallbacks = new THREE.LoaderSupport.Callbacks();
		updatedCallbacks.setCallbackOnLoad(wrapperOnLoad);
		updatedCallbacks.setCallbackOnProgress(wrapperOnProgress);
		updatedCallbacks.setCallbackOnMeshAlter(wrapperOnMeshAlter);
		prepData.callbacks = updatedCallbacks;

		supportDesc.loader.run(prepData, supportDesc.workerSupport);
	};

	WorkerDirector.prototype._buildLoader = function (instanceNo) {
		var classDef = this.workerDescription.classDef;
		var loader = Object.create(classDef.prototype);
		this.workerDescription.classDef.call(loader, THREE.DefaultLoadingManager, this.logger);

		// verify that all required functions are implemented
		if (!loader.hasOwnProperty('instanceNo')) throw classDef.name + ' has no property "instanceNo".';
		loader.instanceNo = instanceNo;

		if (!loader.hasOwnProperty('workerSupport')) {

			throw classDef.name + ' has no property "workerSupport".';
		}
		if (typeof loader.run !== 'function') throw classDef.name + ' has no function "run".';
		if (!loader.hasOwnProperty('callbacks') || !Validator.isValid(loader.callbacks)) {

			this.logger.logWarn(classDef.name + ' has an invalid property "callbacks". Will change to "THREE.LoaderSupport.Callbacks"');
			loader.callbacks = new THREE.LoaderSupport.Callbacks();
		}
		return loader;
	};

	WorkerDirector.prototype._deregister = function (supportDesc) {
		if (Validator.isValid(supportDesc)) {

			supportDesc.workerSupport.setTerminateRequested(true);
			this.logger.logInfo('Requested termination of worker #' + supportDesc.instanceNo + '.');

			var loaderCallbacks = supportDesc.loader.callbacks;
			if (Validator.isValid(loaderCallbacks.onProgress)) loaderCallbacks.onProgress({ detail: { text: '' } });
			delete this.workerDescription.workerSupports[supportDesc.instanceNo];
		}
	};

	/**
  * Terminate all workers.
  * @memberOf THREE.LoaderSupport.WorkerDirector
  *
  * @param {callback} callbackOnFinishedProcessing Function called once all workers finished processing.
  */
	WorkerDirector.prototype.tearDown = function (callbackOnFinishedProcessing) {
		this.logger.logInfo('WorkerDirector received the deregister call. Terminating all workers!');

		this.instructionQueuePointer = this.instructionQueue.length;
		this.callbackOnFinishedProcessing = Validator.verifyInput(callbackOnFinishedProcessing, null);

		for (var name in this.workerDescription.workerSupports) {

			this.workerDescription.workerSupports[name].terminateRequested = true;
		}
	};

	return WorkerDirector;
}();

exports.default = THREE.LoaderSupport;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.MD2Loader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.MD2Loader.prototype = {

	constructor: THREE.MD2Loader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (buffer) {

			onLoad(scope.parse(buffer));
		}, onProgress, onError);
	},

	parse: function () {

		var normals = [[-0.525731, 0.000000, 0.850651], [-0.442863, 0.238856, 0.864188], [-0.295242, 0.000000, 0.955423], [-0.309017, 0.500000, 0.809017], [-0.162460, 0.262866, 0.951056], [0.000000, 0.000000, 1.000000], [0.000000, 0.850651, 0.525731], [-0.147621, 0.716567, 0.681718], [0.147621, 0.716567, 0.681718], [0.000000, 0.525731, 0.850651], [0.309017, 0.500000, 0.809017], [0.525731, 0.000000, 0.850651], [0.295242, 0.000000, 0.955423], [0.442863, 0.238856, 0.864188], [0.162460, 0.262866, 0.951056], [-0.681718, 0.147621, 0.716567], [-0.809017, 0.309017, 0.500000], [-0.587785, 0.425325, 0.688191], [-0.850651, 0.525731, 0.000000], [-0.864188, 0.442863, 0.238856], [-0.716567, 0.681718, 0.147621], [-0.688191, 0.587785, 0.425325], [-0.500000, 0.809017, 0.309017], [-0.238856, 0.864188, 0.442863], [-0.425325, 0.688191, 0.587785], [-0.716567, 0.681718, -0.147621], [-0.500000, 0.809017, -0.309017], [-0.525731, 0.850651, 0.000000], [0.000000, 0.850651, -0.525731], [-0.238856, 0.864188, -0.442863], [0.000000, 0.955423, -0.295242], [-0.262866, 0.951056, -0.162460], [0.000000, 1.000000, 0.000000], [0.000000, 0.955423, 0.295242], [-0.262866, 0.951056, 0.162460], [0.238856, 0.864188, 0.442863], [0.262866, 0.951056, 0.162460], [0.500000, 0.809017, 0.309017], [0.238856, 0.864188, -0.442863], [0.262866, 0.951056, -0.162460], [0.500000, 0.809017, -0.309017], [0.850651, 0.525731, 0.000000], [0.716567, 0.681718, 0.147621], [0.716567, 0.681718, -0.147621], [0.525731, 0.850651, 0.000000], [0.425325, 0.688191, 0.587785], [0.864188, 0.442863, 0.238856], [0.688191, 0.587785, 0.425325], [0.809017, 0.309017, 0.500000], [0.681718, 0.147621, 0.716567], [0.587785, 0.425325, 0.688191], [0.955423, 0.295242, 0.000000], [1.000000, 0.000000, 0.000000], [0.951056, 0.162460, 0.262866], [0.850651, -0.525731, 0.000000], [0.955423, -0.295242, 0.000000], [0.864188, -0.442863, 0.238856], [0.951056, -0.162460, 0.262866], [0.809017, -0.309017, 0.500000], [0.681718, -0.147621, 0.716567], [0.850651, 0.000000, 0.525731], [0.864188, 0.442863, -0.238856], [0.809017, 0.309017, -0.500000], [0.951056, 0.162460, -0.262866], [0.525731, 0.000000, -0.850651], [0.681718, 0.147621, -0.716567], [0.681718, -0.147621, -0.716567], [0.850651, 0.000000, -0.525731], [0.809017, -0.309017, -0.500000], [0.864188, -0.442863, -0.238856], [0.951056, -0.162460, -0.262866], [0.147621, 0.716567, -0.681718], [0.309017, 0.500000, -0.809017], [0.425325, 0.688191, -0.587785], [0.442863, 0.238856, -0.864188], [0.587785, 0.425325, -0.688191], [0.688191, 0.587785, -0.425325], [-0.147621, 0.716567, -0.681718], [-0.309017, 0.500000, -0.809017], [0.000000, 0.525731, -0.850651], [-0.525731, 0.000000, -0.850651], [-0.442863, 0.238856, -0.864188], [-0.295242, 0.000000, -0.955423], [-0.162460, 0.262866, -0.951056], [0.000000, 0.000000, -1.000000], [0.295242, 0.000000, -0.955423], [0.162460, 0.262866, -0.951056], [-0.442863, -0.238856, -0.864188], [-0.309017, -0.500000, -0.809017], [-0.162460, -0.262866, -0.951056], [0.000000, -0.850651, -0.525731], [-0.147621, -0.716567, -0.681718], [0.147621, -0.716567, -0.681718], [0.000000, -0.525731, -0.850651], [0.309017, -0.500000, -0.809017], [0.442863, -0.238856, -0.864188], [0.162460, -0.262866, -0.951056], [0.238856, -0.864188, -0.442863], [0.500000, -0.809017, -0.309017], [0.425325, -0.688191, -0.587785], [0.716567, -0.681718, -0.147621], [0.688191, -0.587785, -0.425325], [0.587785, -0.425325, -0.688191], [0.000000, -0.955423, -0.295242], [0.000000, -1.000000, 0.000000], [0.262866, -0.951056, -0.162460], [0.000000, -0.850651, 0.525731], [0.000000, -0.955423, 0.295242], [0.238856, -0.864188, 0.442863], [0.262866, -0.951056, 0.162460], [0.500000, -0.809017, 0.309017], [0.716567, -0.681718, 0.147621], [0.525731, -0.850651, 0.000000], [-0.238856, -0.864188, -0.442863], [-0.500000, -0.809017, -0.309017], [-0.262866, -0.951056, -0.162460], [-0.850651, -0.525731, 0.000000], [-0.716567, -0.681718, -0.147621], [-0.716567, -0.681718, 0.147621], [-0.525731, -0.850651, 0.000000], [-0.500000, -0.809017, 0.309017], [-0.238856, -0.864188, 0.442863], [-0.262866, -0.951056, 0.162460], [-0.864188, -0.442863, 0.238856], [-0.809017, -0.309017, 0.500000], [-0.688191, -0.587785, 0.425325], [-0.681718, -0.147621, 0.716567], [-0.442863, -0.238856, 0.864188], [-0.587785, -0.425325, 0.688191], [-0.309017, -0.500000, 0.809017], [-0.147621, -0.716567, 0.681718], [-0.425325, -0.688191, 0.587785], [-0.162460, -0.262866, 0.951056], [0.442863, -0.238856, 0.864188], [0.162460, -0.262866, 0.951056], [0.309017, -0.500000, 0.809017], [0.147621, -0.716567, 0.681718], [0.000000, -0.525731, 0.850651], [0.425325, -0.688191, 0.587785], [0.587785, -0.425325, 0.688191], [0.688191, -0.587785, 0.425325], [-0.955423, 0.295242, 0.000000], [-0.951056, 0.162460, 0.262866], [-1.000000, 0.000000, 0.000000], [-0.850651, 0.000000, 0.525731], [-0.955423, -0.295242, 0.000000], [-0.951056, -0.162460, 0.262866], [-0.864188, 0.442863, -0.238856], [-0.951056, 0.162460, -0.262866], [-0.809017, 0.309017, -0.500000], [-0.864188, -0.442863, -0.238856], [-0.951056, -0.162460, -0.262866], [-0.809017, -0.309017, -0.500000], [-0.681718, 0.147621, -0.716567], [-0.681718, -0.147621, -0.716567], [-0.850651, 0.000000, -0.525731], [-0.688191, 0.587785, -0.425325], [-0.587785, 0.425325, -0.688191], [-0.425325, 0.688191, -0.587785], [-0.425325, -0.688191, -0.587785], [-0.587785, -0.425325, -0.688191], [-0.688191, -0.587785, -0.425325]];

		return function (buffer) {

			console.time('MD2Loader');

			var data = new DataView(buffer);

			// http://tfc.duke.free.fr/coding/md2-specs-en.html

			var header = {};
			var headerNames = ['ident', 'version', 'skinwidth', 'skinheight', 'framesize', 'num_skins', 'num_vertices', 'num_st', 'num_tris', 'num_glcmds', 'num_frames', 'offset_skins', 'offset_st', 'offset_tris', 'offset_frames', 'offset_glcmds', 'offset_end'];

			for (var i = 0; i < headerNames.length; i++) {

				header[headerNames[i]] = data.getInt32(i * 4, true);
			}

			if (header.ident !== 844121161 || header.version !== 8) {

				console.error('Not a valid MD2 file');
				return;
			}

			if (header.offset_end !== data.byteLength) {

				console.error('Corrupted MD2 file');
				return;
			}

			//

			var geometry = new THREE.Geometry();

			// uvs

			var uvs = [];
			var offset = header.offset_st;

			for (var i = 0, l = header.num_st; i < l; i++) {

				var u = data.getInt16(offset + 0, true);
				var v = data.getInt16(offset + 2, true);

				uvs.push(new THREE.Vector2(u / header.skinwidth, 1 - v / header.skinheight));

				offset += 4;
			}

			// triangles

			var offset = header.offset_tris;

			for (var i = 0, l = header.num_tris; i < l; i++) {

				var a = data.getUint16(offset + 0, true);
				var b = data.getUint16(offset + 2, true);
				var c = data.getUint16(offset + 4, true);

				geometry.faces.push(new THREE.Face3(a, b, c));

				geometry.faceVertexUvs[0].push([uvs[data.getUint16(offset + 6, true)], uvs[data.getUint16(offset + 8, true)], uvs[data.getUint16(offset + 10, true)]]);

				offset += 12;
			}

			// frames

			var translation = new THREE.Vector3();
			var scale = new THREE.Vector3();
			var string = [];

			var offset = header.offset_frames;

			for (var i = 0, l = header.num_frames; i < l; i++) {

				scale.set(data.getFloat32(offset + 0, true), data.getFloat32(offset + 4, true), data.getFloat32(offset + 8, true));

				translation.set(data.getFloat32(offset + 12, true), data.getFloat32(offset + 16, true), data.getFloat32(offset + 20, true));

				offset += 24;

				for (var j = 0; j < 16; j++) {

					var character = data.getUint8(offset + j, true);
					if (character === 0) break;

					string[j] = character;
				}

				var frame = {
					name: String.fromCharCode.apply(null, string),
					vertices: [],
					normals: []
				};

				offset += 16;

				for (var j = 0; j < header.num_vertices; j++) {

					var x = data.getUint8(offset++, true);
					var y = data.getUint8(offset++, true);
					var z = data.getUint8(offset++, true);
					var n = normals[data.getUint8(offset++, true)];

					var vertex = new THREE.Vector3(x * scale.x + translation.x, z * scale.z + translation.z, y * scale.y + translation.y);

					var normal = new THREE.Vector3(n[0], n[2], n[1]);

					frame.vertices.push(vertex);
					frame.normals.push(normal);
				}

				geometry.morphTargets.push(frame);
			}

			// Static

			geometry.vertices = geometry.morphTargets[0].vertices;

			var morphTarget = geometry.morphTargets[0];

			for (var j = 0, jl = geometry.faces.length; j < jl; j++) {

				var face = geometry.faces[j];

				face.vertexNormals = [morphTarget.normals[face.a], morphTarget.normals[face.b], morphTarget.normals[face.c]];
			}

			// Convert to geometry.morphNormals

			for (var i = 0, l = geometry.morphTargets.length; i < l; i++) {

				var morphTarget = geometry.morphTargets[i];
				var vertexNormals = [];

				for (var j = 0, jl = geometry.faces.length; j < jl; j++) {

					var face = geometry.faces[j];

					vertexNormals.push({
						a: morphTarget.normals[face.a],
						b: morphTarget.normals[face.b],
						c: morphTarget.normals[face.c]
					});
				}

				geometry.morphNormals.push({ vertexNormals: vertexNormals });
			}

			geometry.animations = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(geometry.morphTargets, 10);

			console.timeEnd('MD2Loader');

			return geometry;
		};
	}()

};

exports.default = THREE.MD2Loader;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author takahiro / https://github.com/takahirox
 *
 * Dependencies
 *  - mmd-parser https://github.com/takahirox/mmd-parser
 *  - ammo.js https://github.com/kripken/ammo.js
 *  - THREE.TGALoader
 *  - THREE.MMDPhysics
 *  - THREE.CCDIKSolver
 *  - THREE.OutlineEffect
 *
 *
 * This loader loads and parses PMD/PMX and VMD binary files
 * then creates mesh for Three.js.
 *
 * PMD/PMX is a model data format and VMD is a motion data format
 * used in MMD(Miku Miku Dance).
 *
 * MMD is a 3D CG animation tool which is popular in Japan.
 *
 *
 * MMD official site
 *  http://www.geocities.jp/higuchuu4/index_e.htm
 *
 * PMD, VMD format
 *  http://blog.goo.ne.jp/torisu_tetosuki/e/209ad341d3ece2b1b4df24abf619d6e4
 *
 * PMX format
 *  http://gulshan-i-raz.geo.jp/labs/2012/10/17/pmx-format1/
 *
 *
 * TODO
 *  - light motion in vmd support.
 *  - SDEF support.
 *  - uv/material/bone morphing support.
 *  - more precise grant skinning support.
 *  - shadow support.
 */

THREE.MMDLoader = function (manager) {

	THREE.Loader.call(this);
	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	this.parser = new MMDParser.Parser();
	this.textureCrossOrigin = null;
};

THREE.MMDLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.MMDLoader.prototype.constructor = THREE.MMDLoader;

/*
 * base64 encoded defalut toon textures toon00.bmp - toon10.bmp
 * Users don't need to prepare default texture files.
 *
 * This idea is from http://www20.atpages.jp/katwat/three.js_r58/examples/mytest37/mmd.three.js
 */
THREE.MMDLoader.prototype.defaultToonTextures = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII='];

/*
 * Set 'anonymous' for the the texture image file in other domain
 * even if server responds with "Access-Control-Allow-Origin: *"
 * because some image operation fails in MMDLoader.
 */
THREE.MMDLoader.prototype.setTextureCrossOrigin = function (value) {

	this.textureCrossOrigin = value;
};

THREE.MMDLoader.prototype.load = function (modelUrl, vmdUrls, callback, onProgress, onError) {

	var scope = this;

	this.loadModel(modelUrl, function (mesh) {

		scope.loadVmds(vmdUrls, function (vmd) {

			scope.pourVmdIntoModel(mesh, vmd);
			callback(mesh);
		}, onProgress, onError);
	}, onProgress, onError);
};

THREE.MMDLoader.prototype.loadModel = function (url, callback, onProgress, onError) {

	var scope = this;

	var texturePath = THREE.LoaderUtils.extractUrlBase(url);
	var modelExtension = this.extractExtension(url);

	this.loadFileAsBuffer(url, function (buffer) {

		callback(scope.createModel(buffer, modelExtension, texturePath, onProgress, onError));
	}, onProgress, onError);
};

THREE.MMDLoader.prototype.createModel = function (buffer, modelExtension, texturePath, onProgress, onError) {

	return this.createMesh(this.parseModel(buffer, modelExtension), texturePath, onProgress, onError);
};

THREE.MMDLoader.prototype.loadVmd = function (url, callback, onProgress, onError) {

	var scope = this;

	this.loadFileAsBuffer(url, function (buffer) {

		callback(scope.parseVmd(buffer));
	}, onProgress, onError);
};

THREE.MMDLoader.prototype.loadVmds = function (urls, callback, onProgress, onError) {

	var scope = this;

	var vmds = [];
	urls = urls.slice();

	function run() {

		var url = urls.shift();

		scope.loadVmd(url, function (vmd) {

			vmds.push(vmd);

			if (urls.length > 0) {

				run();
			} else {

				callback(scope.mergeVmds(vmds));
			}
		}, onProgress, onError);
	}

	run();
};

THREE.MMDLoader.prototype.loadAudio = function (url, callback, onProgress, onError) {

	var listener = new THREE.AudioListener();
	var audio = new THREE.Audio(listener);
	var loader = new THREE.AudioLoader(this.manager);

	loader.load(url, function (buffer) {

		audio.setBuffer(buffer);
		callback(audio, listener);
	}, onProgress, onError);
};

THREE.MMDLoader.prototype.loadVpd = function (url, callback, onProgress, onError, params) {

	var scope = this;

	var func = (params && params.charcode === 'unicode' ? this.loadFileAsText : this.loadFileAsShiftJISText).bind(this);

	func(url, function (text) {

		callback(scope.parseVpd(text));
	}, onProgress, onError);
};

THREE.MMDLoader.prototype.parseModel = function (buffer, modelExtension) {

	// Should I judge from model data header?
	switch (modelExtension.toLowerCase()) {

		case 'pmd':
			return this.parsePmd(buffer);

		case 'pmx':
			return this.parsePmx(buffer);

		default:
			throw 'extension ' + modelExtension + ' is not supported.';

	}
};

THREE.MMDLoader.prototype.parsePmd = function (buffer) {

	return this.parser.parsePmd(buffer, true);
};

THREE.MMDLoader.prototype.parsePmx = function (buffer) {

	return this.parser.parsePmx(buffer, true);
};

THREE.MMDLoader.prototype.parseVmd = function (buffer) {

	return this.parser.parseVmd(buffer, true);
};

THREE.MMDLoader.prototype.parseVpd = function (text) {

	return this.parser.parseVpd(text, true);
};

THREE.MMDLoader.prototype.mergeVmds = function (vmds) {

	return this.parser.mergeVmds(vmds);
};

THREE.MMDLoader.prototype.pourVmdIntoModel = function (mesh, vmd, name) {

	this.createAnimation(mesh, vmd, name);
};

THREE.MMDLoader.prototype.pourVmdIntoCamera = function (camera, vmd, name) {

	var helper = new THREE.MMDLoader.DataCreationHelper();

	var initAnimation = function initAnimation() {

		var orderedMotions = helper.createOrderedMotionArray(vmd.cameras);

		var times = [];
		var centers = [];
		var quaternions = [];
		var positions = [];
		var fovs = [];

		var cInterpolations = [];
		var qInterpolations = [];
		var pInterpolations = [];
		var fInterpolations = [];

		var quaternion = new THREE.Quaternion();
		var euler = new THREE.Euler();
		var position = new THREE.Vector3();
		var center = new THREE.Vector3();

		var pushVector3 = function pushVector3(array, vec) {

			array.push(vec.x);
			array.push(vec.y);
			array.push(vec.z);
		};

		var pushQuaternion = function pushQuaternion(array, q) {

			array.push(q.x);
			array.push(q.y);
			array.push(q.z);
			array.push(q.w);
		};

		var pushInterpolation = function pushInterpolation(array, interpolation, index) {

			array.push(interpolation[index * 4 + 0] / 127); // x1
			array.push(interpolation[index * 4 + 1] / 127); // x2
			array.push(interpolation[index * 4 + 2] / 127); // y1
			array.push(interpolation[index * 4 + 3] / 127); // y2
		};

		var createTrack = function createTrack(node, type, times, values, interpolations) {

			/*
    * optimizes here not to let KeyframeTrackPrototype optimize
    * because KeyframeTrackPrototype optimizes times and values but
    * doesn't optimize interpolations.
    */
			if (times.length > 2) {

				times = times.slice();
				values = values.slice();
				interpolations = interpolations.slice();

				var stride = values.length / times.length;
				var interpolateStride = stride === 3 ? 12 : 4; // 3: Vector3, others: Quaternion or Number

				var index = 1;

				for (var aheadIndex = 2, endIndex = times.length; aheadIndex < endIndex; aheadIndex++) {

					for (var i = 0; i < stride; i++) {

						if (values[index * stride + i] !== values[(index - 1) * stride + i] || values[index * stride + i] !== values[aheadIndex * stride + i]) {

							index++;
							break;
						}
					}

					if (aheadIndex > index) {

						times[index] = times[aheadIndex];

						for (var i = 0; i < stride; i++) {

							values[index * stride + i] = values[aheadIndex * stride + i];
						}

						for (var i = 0; i < interpolateStride; i++) {

							interpolations[index * interpolateStride + i] = interpolations[aheadIndex * interpolateStride + i];
						}
					}
				}

				times.length = index + 1;
				values.length = (index + 1) * stride;
				interpolations.length = (index + 1) * interpolateStride;
			}

			return new THREE.MMDLoader[type](node, times, values, interpolations);
		};

		for (var i = 0; i < orderedMotions.length; i++) {

			var m = orderedMotions[i];

			var time = m.frameNum / 30;
			var pos = m.position;
			var rot = m.rotation;
			var distance = m.distance;
			var fov = m.fov;
			var interpolation = m.interpolation;

			position.set(0, 0, -distance);
			center.set(pos[0], pos[1], pos[2]);

			euler.set(-rot[0], -rot[1], -rot[2]);
			quaternion.setFromEuler(euler);

			position.add(center);
			position.applyQuaternion(quaternion);

			/*
    * Note: This is a workaround not to make Animation system calculate lerp
    *       if the diff from the last frame is 1 frame (in 30fps).
    */
			if (times.length > 0 && time < times[times.length - 1] + 1 / 30 * 1.5) {

				times[times.length - 1] = time - 1e-13;
			}

			times.push(time);

			pushVector3(centers, center);
			pushQuaternion(quaternions, quaternion);
			pushVector3(positions, position);

			fovs.push(fov);

			for (var j = 0; j < 3; j++) {

				pushInterpolation(cInterpolations, interpolation, j);
			}

			pushInterpolation(qInterpolations, interpolation, 3);

			// use same one parameter for x, y, z axis.
			for (var j = 0; j < 3; j++) {

				pushInterpolation(pInterpolations, interpolation, 4);
			}

			pushInterpolation(fInterpolations, interpolation, 5);
		}

		if (times.length === 0) return;

		var tracks = [];

		tracks.push(createTrack('.center', 'VectorKeyframeTrackEx', times, centers, cInterpolations));
		tracks.push(createTrack('.quaternion', 'QuaternionKeyframeTrackEx', times, quaternions, qInterpolations));
		tracks.push(createTrack('.position', 'VectorKeyframeTrackEx', times, positions, pInterpolations));
		tracks.push(createTrack('.fov', 'NumberKeyframeTrackEx', times, fovs, fInterpolations));

		var clip = new THREE.AnimationClip(name === undefined ? THREE.Math.generateUUID() : name, -1, tracks);

		if (camera.center === undefined) camera.center = new THREE.Vector3(0, 0, 0);
		if (camera.animations === undefined) camera.animations = [];
		camera.animations.push(clip);
	};

	initAnimation();
};

THREE.MMDLoader.prototype.extractExtension = function (url) {

	var index = url.lastIndexOf('.');

	if (index < 0) {

		return null;
	}

	return url.slice(index + 1);
};

THREE.MMDLoader.prototype.loadFile = function (url, onLoad, onProgress, onError, responseType, mimeType) {

	var loader = new THREE.FileLoader(this.manager);

	if (mimeType !== undefined) loader.setMimeType(mimeType);

	loader.setResponseType(responseType);

	var request = loader.load(url, function (result) {

		onLoad(result);
	}, onProgress, onError);

	return request;
};

THREE.MMDLoader.prototype.loadFileAsBuffer = function (url, onLoad, onProgress, onError) {

	this.loadFile(url, onLoad, onProgress, onError, 'arraybuffer');
};

THREE.MMDLoader.prototype.loadFileAsText = function (url, onLoad, onProgress, onError) {

	this.loadFile(url, onLoad, onProgress, onError, 'text');
};

THREE.MMDLoader.prototype.loadFileAsShiftJISText = function (url, onLoad, onProgress, onError) {

	this.loadFile(url, onLoad, onProgress, onError, 'text', 'text/plain; charset=shift_jis');
};

THREE.MMDLoader.prototype.createMesh = function (model, texturePath, onProgress, onError) {

	var scope = this;
	var geometry = new THREE.BufferGeometry();
	var materials = [];

	var buffer = {};

	buffer.vertices = [];
	buffer.uvs = [];
	buffer.normals = [];
	buffer.skinIndices = [];
	buffer.skinWeights = [];
	buffer.indices = [];

	var initVartices = function initVartices() {

		for (var i = 0; i < model.metadata.vertexCount; i++) {

			var v = model.vertices[i];

			for (var j = 0, jl = v.position.length; j < jl; j++) {

				buffer.vertices.push(v.position[j]);
			}

			for (var j = 0, jl = v.normal.length; j < jl; j++) {

				buffer.normals.push(v.normal[j]);
			}

			for (var j = 0, jl = v.uv.length; j < jl; j++) {

				buffer.uvs.push(v.uv[j]);
			}

			for (var j = 0; j < 4; j++) {

				buffer.skinIndices.push(v.skinIndices.length - 1 >= j ? v.skinIndices[j] : 0.0);
			}

			for (var j = 0; j < 4; j++) {

				buffer.skinWeights.push(v.skinWeights.length - 1 >= j ? v.skinWeights[j] : 0.0);
			}
		}
	};

	var initFaces = function initFaces() {

		for (var i = 0; i < model.metadata.faceCount; i++) {

			var f = model.faces[i];

			for (var j = 0, jl = f.indices.length; j < jl; j++) {

				buffer.indices.push(f.indices[j]);
			}
		}
	};

	var initBones = function initBones() {

		var bones = [];

		var rigidBodies = model.rigidBodies;
		var dictionary = {};

		for (var i = 0, il = rigidBodies.length; i < il; i++) {

			var body = rigidBodies[i];
			var value = dictionary[body.boneIndex];

			// keeps greater number if already value is set without any special reasons
			value = value === undefined ? body.type : Math.max(body.type, value);

			dictionary[body.boneIndex] = value;
		}

		for (var i = 0; i < model.metadata.boneCount; i++) {

			var bone = {};
			var b = model.bones[i];

			bone.parent = b.parentIndex;
			bone.name = b.name;
			bone.pos = [b.position[0], b.position[1], b.position[2]];
			bone.rotq = [0, 0, 0, 1];
			bone.scl = [1, 1, 1];

			if (bone.parent !== -1) {

				bone.pos[0] -= model.bones[bone.parent].position[0];
				bone.pos[1] -= model.bones[bone.parent].position[1];
				bone.pos[2] -= model.bones[bone.parent].position[2];
			}

			bone.rigidBodyType = dictionary[i] !== undefined ? dictionary[i] : -1;

			bones.push(bone);
		}

		geometry.bones = bones;
	};

	var initIKs = function initIKs() {

		var iks = [];

		// TODO: remove duplicated codes between PMD and PMX
		if (model.metadata.format === 'pmd') {

			for (var i = 0; i < model.metadata.ikCount; i++) {

				var ik = model.iks[i];
				var param = {};

				param.target = ik.target;
				param.effector = ik.effector;
				param.iteration = ik.iteration;
				param.maxAngle = ik.maxAngle * 4;
				param.links = [];

				for (var j = 0; j < ik.links.length; j++) {

					var link = {};
					link.index = ik.links[j].index;

					if (model.bones[link.index].name.indexOf('ひざ') >= 0) {

						link.limitation = new THREE.Vector3(1.0, 0.0, 0.0);
					}

					param.links.push(link);
				}

				iks.push(param);
			}
		} else {

			for (var i = 0; i < model.metadata.boneCount; i++) {

				var b = model.bones[i];
				var ik = b.ik;

				if (ik === undefined) {

					continue;
				}

				var param = {};

				param.target = i;
				param.effector = ik.effector;
				param.iteration = ik.iteration;
				param.maxAngle = ik.maxAngle;
				param.links = [];

				for (var j = 0; j < ik.links.length; j++) {

					var link = {};
					link.index = ik.links[j].index;
					link.enabled = true;

					if (ik.links[j].angleLimitation === 1) {

						link.limitation = new THREE.Vector3(1.0, 0.0, 0.0);
						// TODO: use limitation angles
						// link.lowerLimitationAngle;
						// link.upperLimitationAngle;
					}

					param.links.push(link);
				}

				iks.push(param);
			}
		}

		geometry.iks = iks;
	};

	var initGrants = function initGrants() {

		if (model.metadata.format === 'pmd') {

			return;
		}

		var grants = [];

		for (var i = 0; i < model.metadata.boneCount; i++) {

			var b = model.bones[i];
			var grant = b.grant;

			if (grant === undefined) {

				continue;
			}

			var param = {};

			param.index = i;
			param.parentIndex = grant.parentIndex;
			param.ratio = grant.ratio;
			param.isLocal = grant.isLocal;
			param.affectRotation = grant.affectRotation;
			param.affectPosition = grant.affectPosition;
			param.transformationClass = b.transformationClass;

			grants.push(param);
		}

		grants.sort(function (a, b) {

			return a.transformationClass - b.transformationClass;
		});

		geometry.grants = grants;
	};

	var initMorphs = function initMorphs() {

		function updateVertex(attribute, index, v, ratio) {

			attribute.array[index * 3 + 0] += v.position[0] * ratio;
			attribute.array[index * 3 + 1] += v.position[1] * ratio;
			attribute.array[index * 3 + 2] += v.position[2] * ratio;
		}

		function updateVertices(attribute, m, ratio) {

			for (var i = 0; i < m.elementCount; i++) {

				var v = m.elements[i];

				var index;

				if (model.metadata.format === 'pmd') {

					index = model.morphs[0].elements[v.index].index;
				} else {

					index = v.index;
				}

				updateVertex(attribute, index, v, ratio);
			}
		}

		var morphTargets = [];
		var attributes = [];

		for (var i = 0; i < model.metadata.morphCount; i++) {

			var m = model.morphs[i];
			var params = { name: m.name };

			var attribute = new THREE.Float32BufferAttribute(model.metadata.vertexCount * 3, 3);
			attribute.name = m.name;

			for (var j = 0; j < model.metadata.vertexCount * 3; j++) {

				attribute.array[j] = buffer.vertices[j];
			}

			if (model.metadata.format === 'pmd') {

				if (i !== 0) {

					updateVertices(attribute, m, 1.0);
				}
			} else {

				if (m.type === 0) {
					// group

					for (var j = 0; j < m.elementCount; j++) {

						var m2 = model.morphs[m.elements[j].index];
						var ratio = m.elements[j].ratio;

						if (m2.type === 1) {

							updateVertices(attribute, m2, ratio);
						} else {

							// TODO: implement

						}
					}
				} else if (m.type === 1) {
					// vertex

					updateVertices(attribute, m, 1.0);
				} else if (m.type === 2) {// bone

					// TODO: implement

				} else if (m.type === 3) {// uv

					// TODO: implement

				} else if (m.type === 4) {// additional uv1

					// TODO: implement

				} else if (m.type === 5) {// additional uv2

					// TODO: implement

				} else if (m.type === 6) {// additional uv3

					// TODO: implement

				} else if (m.type === 7) {// additional uv4

					// TODO: implement

				} else if (m.type === 8) {// material

					// TODO: implement

				}
			}

			morphTargets.push(params);
			attributes.push(attribute);
		}

		geometry.morphTargets = morphTargets;
		geometry.morphAttributes.position = attributes;
	};

	var initMaterials = function initMaterials() {

		var textures = {};
		var textureLoader = new THREE.TextureLoader(scope.manager);
		var tgaLoader = new THREE.TGALoader(scope.manager);
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		var offset = 0;
		var materialParams = [];

		if (scope.textureCrossOrigin !== null) textureLoader.setCrossOrigin(scope.textureCrossOrigin);

		function loadTexture(filePath, params) {

			if (params === undefined) {

				params = {};
			}

			var fullPath;

			if (params.defaultTexturePath === true) {

				try {

					fullPath = scope.defaultToonTextures[parseInt(filePath.match('toon([0-9]{2})\.bmp$')[1])];
				} catch (e) {

					console.warn('THREE.MMDLoader: ' + filePath + ' seems like not right default texture path. Using toon00.bmp instead.');
					fullPath = scope.defaultToonTextures[0];
				}
			} else {

				fullPath = texturePath + filePath;
			}

			if (textures[fullPath] !== undefined) return fullPath;

			var loader = THREE.Loader.Handlers.get(fullPath);

			if (loader === null) {

				loader = filePath.indexOf('.tga') >= 0 ? tgaLoader : textureLoader;
			}

			var texture = loader.load(fullPath, function (t) {

				// MMD toon texture is Axis-Y oriented
				// but Three.js gradient map is Axis-X oriented.
				// So here replaces the toon texture image with the rotated one.
				if (params.isToonTexture === true) {

					var image = t.image;
					var width = image.width;
					var height = image.height;

					canvas.width = width;
					canvas.height = height;

					context.clearRect(0, 0, width, height);
					context.translate(width / 2.0, height / 2.0);
					context.rotate(0.5 * Math.PI); // 90.0 * Math.PI / 180.0
					context.translate(-width / 2.0, -height / 2.0);
					context.drawImage(image, 0, 0);

					t.image = context.getImageData(0, 0, width, height);
				}

				t.flipY = false;
				t.wrapS = THREE.RepeatWrapping;
				t.wrapT = THREE.RepeatWrapping;

				for (var i = 0; i < texture.readyCallbacks.length; i++) {

					texture.readyCallbacks[i](texture);
				}

				delete texture.readyCallbacks;
			}, onProgress, onError);

			if (params.sphericalReflectionMapping === true) {

				texture.mapping = THREE.SphericalReflectionMapping;
			}

			texture.readyCallbacks = [];

			textures[fullPath] = texture;

			return fullPath;
		}

		function getTexture(name, textures) {

			if (textures[name] === undefined) {

				console.warn('THREE.MMDLoader: Undefined texture', name);
			}

			return textures[name];
		}

		for (var i = 0; i < model.metadata.materialCount; i++) {

			var m = model.materials[i];
			var params = {};

			params.faceOffset = offset;
			params.faceNum = m.faceCount;

			offset += m.faceCount;

			params.name = m.name;

			/*
    * Color
    *
    * MMD         MeshToonMaterial
    * diffuse  -  color
    * specular -  specular
    * ambient  -  emissive * a
    *               (a = 1.0 without map texture or 0.2 with map texture)
    *
    * MeshToonMaterial doesn't have ambient. Set it to emissive instead.
    * It'll be too bright if material has map texture so using coef 0.2.
    */
			params.color = new THREE.Color(m.diffuse[0], m.diffuse[1], m.diffuse[2]);
			params.opacity = m.diffuse[3];
			params.specular = new THREE.Color(m.specular[0], m.specular[1], m.specular[2]);
			params.shininess = m.shininess;

			if (params.opacity === 1.0) {

				params.side = THREE.FrontSide;
				params.transparent = false;
			} else {

				params.side = THREE.DoubleSide;
				params.transparent = true;
			}

			if (model.metadata.format === 'pmd') {

				if (m.fileName) {

					var fileName = m.fileName;
					var fileNames = [];

					var index = fileName.lastIndexOf('*');

					if (index >= 0) {

						fileNames.push(fileName.slice(0, index));
						fileNames.push(fileName.slice(index + 1));
					} else {

						fileNames.push(fileName);
					}

					for (var j = 0; j < fileNames.length; j++) {

						var n = fileNames[j];

						if (n.indexOf('.sph') >= 0 || n.indexOf('.spa') >= 0) {

							params.envMap = loadTexture(n, { sphericalReflectionMapping: true });

							if (n.indexOf('.sph') >= 0) {

								params.envMapType = THREE.MultiplyOperation;
							} else {

								params.envMapType = THREE.AddOperation;
							}
						} else {

							params.map = loadTexture(n);
						}
					}
				}
			} else {

				if (m.textureIndex !== -1) {

					var n = model.textures[m.textureIndex];
					params.map = loadTexture(n);
				}

				// TODO: support m.envFlag === 3
				if (m.envTextureIndex !== -1 && (m.envFlag === 1 || m.envFlag == 2)) {

					var n = model.textures[m.envTextureIndex];
					params.envMap = loadTexture(n, { sphericalReflectionMapping: true });

					if (m.envFlag === 1) {

						params.envMapType = THREE.MultiplyOperation;
					} else {

						params.envMapType = THREE.AddOperation;
					}
				}
			}

			var coef = params.map === undefined ? 1.0 : 0.2;
			params.emissive = new THREE.Color(m.ambient[0] * coef, m.ambient[1] * coef, m.ambient[2] * coef);

			materialParams.push(params);
		}

		for (var i = 0; i < materialParams.length; i++) {

			var p = materialParams[i];
			var p2 = model.materials[i];
			var m = new THREE.MeshToonMaterial();

			geometry.addGroup(p.faceOffset * 3, p.faceNum * 3, i);

			if (p.name !== undefined) m.name = p.name;

			m.skinning = geometry.bones.length > 0 ? true : false;
			m.morphTargets = geometry.morphTargets.length > 0 ? true : false;
			m.lights = true;
			m.side = model.metadata.format === 'pmx' && (p2.flag & 0x1) === 1 ? THREE.DoubleSide : p.side;
			m.transparent = p.transparent;
			m.fog = true;

			m.blending = THREE.CustomBlending;
			m.blendSrc = THREE.SrcAlphaFactor;
			m.blendDst = THREE.OneMinusSrcAlphaFactor;
			m.blendSrcAlpha = THREE.SrcAlphaFactor;
			m.blendDstAlpha = THREE.DstAlphaFactor;

			if (p.map !== undefined) {

				// Check if this part of the texture image the material uses requires transparency
				var checkTextureTransparency = function checkTextureTransparency(m) {

					m.map.readyCallbacks.push(function (t) {

						// Is there any efficient ways?
						function createImageData(image) {

							var c = document.createElement('canvas');
							c.width = image.width;
							c.height = image.height;

							var ctx = c.getContext('2d');
							ctx.drawImage(image, 0, 0);

							return ctx.getImageData(0, 0, c.width, c.height);
						}

						function detectTextureTransparency(image, uvs, indices) {

							var width = image.width;
							var height = image.height;
							var data = image.data;
							var threshold = 253;

							if (data.length / (width * height) !== 4) {

								return false;
							}

							for (var i = 0; i < indices.length; i += 3) {

								var centerUV = { x: 0.0, y: 0.0 };

								for (var j = 0; j < 3; j++) {

									var index = indices[i * 3 + j];
									var uv = { x: uvs[index * 2 + 0], y: uvs[index * 2 + 1] };

									if (getAlphaByUv(image, uv) < threshold) {

										return true;
									}

									centerUV.x += uv.x;
									centerUV.y += uv.y;
								}

								centerUV.x /= 3;
								centerUV.y /= 3;

								if (getAlphaByUv(image, centerUV) < threshold) {

									return true;
								}
							}

							return false;
						}

						/*
       * This method expects
       *   t.flipY = false
       *   t.wrapS = THREE.RepeatWrapping
       *   t.wrapT = THREE.RepeatWrapping
       * TODO: more precise
       */
						function getAlphaByUv(image, uv) {

							var width = image.width;
							var height = image.height;

							var x = Math.round(uv.x * width) % width;
							var y = Math.round(uv.y * height) % height;

							if (x < 0) {

								x += width;
							}

							if (y < 0) {

								y += height;
							}

							var index = y * width + x;

							return image.data[index * 4 + 3];
						}

						var imageData = t.image.data !== undefined ? t.image : createImageData(t.image);
						var indices = geometry.index.array.slice(m.faceOffset * 3, m.faceOffset * 3 + m.faceNum * 3);

						if (detectTextureTransparency(imageData, geometry.attributes.uv.array, indices)) m.transparent = true;

						delete m.faceOffset;
						delete m.faceNum;
					});
				};

				m.faceOffset = p.faceOffset;
				m.faceNum = p.faceNum;

				m.map = getTexture(p.map, textures);
				checkTextureTransparency(m);
			}

			if (p.envMap !== undefined) {

				m.envMap = getTexture(p.envMap, textures);
				m.combine = p.envMapType;
			}

			m.opacity = p.opacity;
			m.color = p.color;

			if (p.emissive !== undefined) {

				m.emissive = p.emissive;
			}

			m.specular = p.specular;
			m.shininess = Math.max(p.shininess, 1e-4); // to prevent pow( 0.0, 0.0 )

			if (model.metadata.format === 'pmd') {
				var isDefaultToonTexture = function isDefaultToonTexture(n) {

					if (n.length !== 10) {

						return false;
					}

					return n.match(/toon(10|0[0-9]).bmp/) === null ? false : true;
				};

				// parameters for OutlineEffect


				m.outlineParameters = {
					thickness: p2.edgeFlag === 1 ? 0.003 : 0.0,
					color: new THREE.Color(0.0, 0.0, 0.0),
					alpha: 1.0
				};

				if (m.outlineParameters.thickness === 0.0) m.outlineParameters.visible = false;

				var toonFileName = p2.toonIndex === -1 ? 'toon00.bmp' : model.toonTextures[p2.toonIndex].fileName;
				var uuid = loadTexture(toonFileName, { isToonTexture: true, defaultTexturePath: isDefaultToonTexture(toonFileName) });
				m.gradientMap = getTexture(uuid, textures);
			} else {

				// parameters for OutlineEffect
				m.outlineParameters = {
					thickness: p2.edgeSize / 300,
					color: new THREE.Color(p2.edgeColor[0], p2.edgeColor[1], p2.edgeColor[2]),
					alpha: p2.edgeColor[3]
				};

				if ((p2.flag & 0x10) === 0 || m.outlineParameters.thickness === 0.0) m.outlineParameters.visible = false;

				var toonFileName, isDefaultToon;

				if (p2.toonIndex === -1 || p2.toonFlag !== 0) {

					var num = p2.toonIndex + 1;
					toonFileName = 'toon' + (num < 10 ? '0' + num : num) + '.bmp';
					isDefaultToon = true;
				} else {

					toonFileName = model.textures[p2.toonIndex];
					isDefaultToon = false;
				}

				var uuid = loadTexture(toonFileName, { isToonTexture: true, defaultTexturePath: isDefaultToon });
				m.gradientMap = getTexture(uuid, textures);
			}

			materials.push(m);
		}

		if (model.metadata.format === 'pmx') {
			var checkAlphaMorph = function checkAlphaMorph(morph, elements) {

				if (morph.type !== 8) {

					return;
				}

				for (var i = 0; i < elements.length; i++) {

					var e = elements[i];

					if (e.index === -1) {

						continue;
					}

					var m = materials[e.index];

					if (m.opacity !== e.diffuse[3]) {

						m.transparent = true;
					}
				}
			};

			for (var i = 0; i < model.morphs.length; i++) {

				var morph = model.morphs[i];
				var elements = morph.elements;

				if (morph.type === 0) {

					for (var j = 0; j < elements.length; j++) {

						var morph2 = model.morphs[elements[j].index];
						var elements2 = morph2.elements;

						checkAlphaMorph(morph2, elements2);
					}
				} else {

					checkAlphaMorph(morph, elements);
				}
			}
		}
	};

	var initPhysics = function initPhysics() {

		var rigidBodies = [];
		var constraints = [];

		for (var i = 0; i < model.metadata.rigidBodyCount; i++) {

			var b = model.rigidBodies[i];
			var keys = Object.keys(b);

			var p = {};

			for (var j = 0; j < keys.length; j++) {

				var key = keys[j];
				p[key] = b[key];
			}

			/*
    * RigidBody position parameter in PMX seems global position
    * while the one in PMD seems offset from corresponding bone.
    * So unify being offset.
    */
			if (model.metadata.format === 'pmx') {

				if (p.boneIndex !== -1) {

					var bone = model.bones[p.boneIndex];
					p.position[0] -= bone.position[0];
					p.position[1] -= bone.position[1];
					p.position[2] -= bone.position[2];
				}
			}

			rigidBodies.push(p);
		}

		for (var i = 0; i < model.metadata.constraintCount; i++) {

			var c = model.constraints[i];
			var keys = Object.keys(c);

			var p = {};

			for (var j = 0; j < keys.length; j++) {

				var key = keys[j];
				p[key] = c[key];
			}

			var bodyA = rigidBodies[p.rigidBodyIndex1];
			var bodyB = rigidBodies[p.rigidBodyIndex2];

			/*
    * Refer to http://www20.atpages.jp/katwat/wp/?p=4135
    */
			if (bodyA.type !== 0 && bodyB.type === 2) {

				if (bodyA.boneIndex !== -1 && bodyB.boneIndex !== -1 && model.bones[bodyB.boneIndex].parentIndex === bodyA.boneIndex) {

					bodyB.type = 1;
				}
			}

			constraints.push(p);
		}

		geometry.rigidBodies = rigidBodies;
		geometry.constraints = constraints;
	};

	var initGeometry = function initGeometry() {

		geometry.setIndex(buffer.indices);
		geometry.addAttribute('position', new THREE.Float32BufferAttribute(buffer.vertices, 3));
		geometry.addAttribute('normal', new THREE.Float32BufferAttribute(buffer.normals, 3));
		geometry.addAttribute('uv', new THREE.Float32BufferAttribute(buffer.uvs, 2));
		geometry.addAttribute('skinIndex', new THREE.Float32BufferAttribute(buffer.skinIndices, 4));
		geometry.addAttribute('skinWeight', new THREE.Float32BufferAttribute(buffer.skinWeights, 4));

		geometry.computeBoundingSphere();
		geometry.mmdFormat = model.metadata.format;
	};

	initVartices();
	initFaces();
	initBones();
	initIKs();
	initGrants();
	initMorphs();
	initMaterials();
	initPhysics();
	initGeometry();

	var mesh = new THREE.SkinnedMesh(geometry, materials);

	// console.log( mesh ); // for console debug

	return mesh;
};

THREE.MMDLoader.prototype.createAnimation = function (mesh, vmd, name) {

	var helper = new THREE.MMDLoader.DataCreationHelper();

	var initMotionAnimations = function initMotionAnimations() {

		if (vmd.metadata.motionCount === 0) {

			return;
		}

		var bones = mesh.geometry.bones;
		var orderedMotions = helper.createOrderedMotionArrays(bones, vmd.motions, 'boneName');

		var tracks = [];

		var pushInterpolation = function pushInterpolation(array, interpolation, index) {

			array.push(interpolation[index + 0] / 127); // x1
			array.push(interpolation[index + 8] / 127); // x2
			array.push(interpolation[index + 4] / 127); // y1
			array.push(interpolation[index + 12] / 127); // y2
		};

		for (var i = 0; i < orderedMotions.length; i++) {

			var times = [];
			var positions = [];
			var rotations = [];
			var pInterpolations = [];
			var rInterpolations = [];

			var bone = bones[i];
			var array = orderedMotions[i];

			for (var j = 0; j < array.length; j++) {

				var time = array[j].frameNum / 30;
				var pos = array[j].position;
				var rot = array[j].rotation;
				var interpolation = array[j].interpolation;

				times.push(time);

				for (var k = 0; k < 3; k++) {

					positions.push(bone.pos[k] + pos[k]);
				}

				for (var k = 0; k < 4; k++) {

					rotations.push(rot[k]);
				}

				for (var k = 0; k < 3; k++) {

					pushInterpolation(pInterpolations, interpolation, k);
				}

				pushInterpolation(rInterpolations, interpolation, 3);
			}

			if (times.length === 0) continue;

			var boneName = '.bones[' + bone.name + ']';

			tracks.push(new THREE.MMDLoader.VectorKeyframeTrackEx(boneName + '.position', times, positions, pInterpolations));
			tracks.push(new THREE.MMDLoader.QuaternionKeyframeTrackEx(boneName + '.quaternion', times, rotations, rInterpolations));
		}

		var clip = new THREE.AnimationClip(name === undefined ? THREE.Math.generateUUID() : name, -1, tracks);

		if (mesh.geometry.animations === undefined) mesh.geometry.animations = [];
		mesh.geometry.animations.push(clip);
	};

	var initMorphAnimations = function initMorphAnimations() {

		if (vmd.metadata.morphCount === 0) {

			return;
		}

		var orderedMorphs = helper.createOrderedMotionArrays(mesh.geometry.morphTargets, vmd.morphs, 'morphName');

		var tracks = [];

		for (var i = 0; i < orderedMorphs.length; i++) {

			var times = [];
			var values = [];
			var array = orderedMorphs[i];

			for (var j = 0; j < array.length; j++) {

				times.push(array[j].frameNum / 30);
				values.push(array[j].weight);
			}

			if (times.length === 0) continue;

			tracks.push(new THREE.NumberKeyframeTrack('.morphTargetInfluences[' + i + ']', times, values));
		}

		var clip = new THREE.AnimationClip(name === undefined ? THREE.Math.generateUUID() : name + 'Morph', -1, tracks);

		if (mesh.geometry.animations === undefined) mesh.geometry.animations = [];
		mesh.geometry.animations.push(clip);
	};

	initMotionAnimations();
	initMorphAnimations();
};

THREE.MMDLoader.DataCreationHelper = function () {};

THREE.MMDLoader.DataCreationHelper.prototype = {

	constructor: THREE.MMDLoader.DataCreationHelper,

	/*
  * Note: Sometimes to use Japanese Unicode characters runs into problems in Three.js.
  *       In such a case, use this method to convert it to Unicode hex charcode strings,
  *       like 'あいう' -> '0x30420x30440x3046'
  */

	toCharcodeStrings: function toCharcodeStrings(s) {

		var str = '';

		for (var i = 0; i < s.length; i++) {

			str += '0x' + ('0000' + s[i].charCodeAt().toString(16)).substr(-4);
		}

		return str;
	},

	createDictionary: function createDictionary(array) {

		var dict = {};

		for (var i = 0; i < array.length; i++) {

			dict[array[i].name] = i;
		}

		return dict;
	},

	initializeMotionArrays: function initializeMotionArrays(array) {

		var result = [];

		for (var i = 0; i < array.length; i++) {

			result[i] = [];
		}

		return result;
	},

	sortMotionArray: function sortMotionArray(array) {

		array.sort(function (a, b) {

			return a.frameNum - b.frameNum;
		});
	},

	sortMotionArrays: function sortMotionArrays(arrays) {

		for (var i = 0; i < arrays.length; i++) {

			this.sortMotionArray(arrays[i]);
		}
	},

	createMotionArray: function createMotionArray(array) {

		var result = [];

		for (var i = 0; i < array.length; i++) {

			result.push(array[i]);
		}

		return result;
	},

	createMotionArrays: function createMotionArrays(array, result, dict, key) {

		for (var i = 0; i < array.length; i++) {

			var a = array[i];
			var num = dict[a[key]];

			if (num === undefined) {

				continue;
			}

			result[num].push(a);
		}
	},

	createOrderedMotionArray: function createOrderedMotionArray(array) {

		var result = this.createMotionArray(array);
		this.sortMotionArray(result);
		return result;
	},

	createOrderedMotionArrays: function createOrderedMotionArrays(targetArray, motionArray, key) {

		var dict = this.createDictionary(targetArray);
		var result = this.initializeMotionArrays(targetArray);
		this.createMotionArrays(motionArray, result, dict, key);
		this.sortMotionArrays(result);

		return result;
	}

};

/*
 * extends existing KeyframeTrack for bone and camera animation.
 *   - use Float64Array for times
 *   - use Cubic Bezier curves interpolation
 */
THREE.MMDLoader.VectorKeyframeTrackEx = function (name, times, values, interpolationParameterArray) {

	this.interpolationParameters = new Float32Array(interpolationParameterArray);

	THREE.VectorKeyframeTrack.call(this, name, times, values);
};

THREE.MMDLoader.VectorKeyframeTrackEx.prototype = Object.create(THREE.VectorKeyframeTrack.prototype);
THREE.MMDLoader.VectorKeyframeTrackEx.prototype.constructor = THREE.MMDLoader.VectorKeyframeTrackEx;
THREE.MMDLoader.VectorKeyframeTrackEx.prototype.TimeBufferType = Float64Array;

THREE.MMDLoader.VectorKeyframeTrackEx.prototype.InterpolantFactoryMethodCubicBezier = function (result) {

	return new THREE.MMDLoader.CubicBezierInterpolation(this.times, this.values, this.getValueSize(), result, this.interpolationParameters);
};

THREE.MMDLoader.VectorKeyframeTrackEx.prototype.setInterpolation = function (interpolation) {

	this.createInterpolant = this.InterpolantFactoryMethodCubicBezier;
};

THREE.MMDLoader.QuaternionKeyframeTrackEx = function (name, times, values, interpolationParameterArray) {

	this.interpolationParameters = new Float32Array(interpolationParameterArray);

	THREE.QuaternionKeyframeTrack.call(this, name, times, values);
};

THREE.MMDLoader.QuaternionKeyframeTrackEx.prototype = Object.create(THREE.QuaternionKeyframeTrack.prototype);
THREE.MMDLoader.QuaternionKeyframeTrackEx.prototype.constructor = THREE.MMDLoader.QuaternionKeyframeTrackEx;
THREE.MMDLoader.QuaternionKeyframeTrackEx.prototype.TimeBufferType = Float64Array;

THREE.MMDLoader.QuaternionKeyframeTrackEx.prototype.InterpolantFactoryMethodCubicBezier = function (result) {

	return new THREE.MMDLoader.CubicBezierInterpolation(this.times, this.values, this.getValueSize(), result, this.interpolationParameters);
};

THREE.MMDLoader.QuaternionKeyframeTrackEx.prototype.setInterpolation = function (interpolation) {

	this.createInterpolant = this.InterpolantFactoryMethodCubicBezier;
};

THREE.MMDLoader.NumberKeyframeTrackEx = function (name, times, values, interpolationParameterArray) {

	this.interpolationParameters = new Float32Array(interpolationParameterArray);

	THREE.NumberKeyframeTrack.call(this, name, times, values);
};

THREE.MMDLoader.NumberKeyframeTrackEx.prototype = Object.create(THREE.NumberKeyframeTrack.prototype);
THREE.MMDLoader.NumberKeyframeTrackEx.prototype.constructor = THREE.MMDLoader.NumberKeyframeTrackEx;
THREE.MMDLoader.NumberKeyframeTrackEx.prototype.TimeBufferType = Float64Array;

THREE.MMDLoader.NumberKeyframeTrackEx.prototype.InterpolantFactoryMethodCubicBezier = function (result) {

	return new THREE.MMDLoader.CubicBezierInterpolation(this.times, this.values, this.getValueSize(), result, this.interpolationParameters);
};

THREE.MMDLoader.NumberKeyframeTrackEx.prototype.setInterpolation = function (interpolation) {

	this.createInterpolant = this.InterpolantFactoryMethodCubicBezier;
};

THREE.MMDLoader.CubicBezierInterpolation = function (parameterPositions, sampleValues, sampleSize, resultBuffer, params) {

	THREE.Interpolant.call(this, parameterPositions, sampleValues, sampleSize, resultBuffer);

	this.params = params;
};

THREE.MMDLoader.CubicBezierInterpolation.prototype = Object.create(THREE.LinearInterpolant.prototype);
THREE.MMDLoader.CubicBezierInterpolation.prototype.constructor = THREE.MMDLoader.CubicBezierInterpolation;

THREE.MMDLoader.CubicBezierInterpolation.prototype.interpolate_ = function (i1, t0, t, t1) {

	var result = this.resultBuffer;
	var values = this.sampleValues;
	var stride = this.valueSize;

	var offset1 = i1 * stride;
	var offset0 = offset1 - stride;

	var weight1 = (t - t0) / (t1 - t0);

	if (stride === 4) {
		// Quaternion

		var x1 = this.params[i1 * 4 + 0];
		var x2 = this.params[i1 * 4 + 1];
		var y1 = this.params[i1 * 4 + 2];
		var y2 = this.params[i1 * 4 + 3];

		var ratio = this._calculate(x1, x2, y1, y2, weight1);

		THREE.Quaternion.slerpFlat(result, 0, values, offset0, values, offset1, ratio);
	} else if (stride === 3) {
		// Vector3

		for (var i = 0; i !== stride; ++i) {

			var x1 = this.params[i1 * 12 + i * 4 + 0];
			var x2 = this.params[i1 * 12 + i * 4 + 1];
			var y1 = this.params[i1 * 12 + i * 4 + 2];
			var y2 = this.params[i1 * 12 + i * 4 + 3];

			var ratio = this._calculate(x1, x2, y1, y2, weight1);

			result[i] = values[offset0 + i] * (1 - ratio) + values[offset1 + i] * ratio;
		}
	} else {
		// Number

		var x1 = this.params[i1 * 4 + 0];
		var x2 = this.params[i1 * 4 + 1];
		var y1 = this.params[i1 * 4 + 2];
		var y2 = this.params[i1 * 4 + 3];

		var ratio = this._calculate(x1, x2, y1, y2, weight1);

		result[0] = values[offset0] * (1 - ratio) + values[offset1] * ratio;
	}

	return result;
};

THREE.MMDLoader.CubicBezierInterpolation.prototype._calculate = function (x1, x2, y1, y2, x) {

	/*
  * Cubic Bezier curves
  *   https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves
  *
  * B(t) = ( 1 - t ) ^ 3 * P0
  *      + 3 * ( 1 - t ) ^ 2 * t * P1
  *      + 3 * ( 1 - t ) * t^2 * P2
  *      + t ^ 3 * P3
  *      ( 0 <= t <= 1 )
  *
  * MMD uses Cubic Bezier curves for bone and camera animation interpolation.
  *   http://d.hatena.ne.jp/edvakf/20111016/1318716097
  *
  *    x = ( 1 - t ) ^ 3 * x0
  *      + 3 * ( 1 - t ) ^ 2 * t * x1
  *      + 3 * ( 1 - t ) * t^2 * x2
  *      + t ^ 3 * x3
  *    y = ( 1 - t ) ^ 3 * y0
  *      + 3 * ( 1 - t ) ^ 2 * t * y1
  *      + 3 * ( 1 - t ) * t^2 * y2
  *      + t ^ 3 * y3
  *      ( x0 = 0, y0 = 0 )
  *      ( x3 = 1, y3 = 1 )
  *      ( 0 <= t, x1, x2, y1, y2 <= 1 )
  *
  * Here solves this equation with Bisection method,
  *   https://en.wikipedia.org/wiki/Bisection_method
  * gets t, and then calculate y.
  *
  * f(t) = 3 * ( 1 - t ) ^ 2 * t * x1
  *      + 3 * ( 1 - t ) * t^2 * x2
  *      + t ^ 3 - x = 0
  *
  * (Another option: Newton's method
  *    https://en.wikipedia.org/wiki/Newton%27s_method)
  */

	var c = 0.5;
	var t = c;
	var s = 1.0 - t;
	var loop = 15;
	var eps = 1e-5;
	var math = Math;

	var sst3, stt3, ttt;

	for (var i = 0; i < loop; i++) {

		sst3 = 3.0 * s * s * t;
		stt3 = 3.0 * s * t * t;
		ttt = t * t * t;

		var ft = sst3 * x1 + stt3 * x2 + ttt - x;

		if (math.abs(ft) < eps) break;

		c /= 2.0;

		t += ft < 0 ? c : -c;
		s = 1.0 - t;
	}

	return sst3 * y1 + stt3 * y2 + ttt;
};

THREE.MMDAudioManager = function (audio, listener, p) {

	var params = p === null || p === undefined ? {} : p;

	this.audio = audio;
	this.listener = listener;

	this.elapsedTime = 0.0;
	this.currentTime = 0.0;
	this.delayTime = params.delayTime !== undefined ? params.delayTime : 0.0;

	this.audioDuration = this.audio.buffer.duration;
	this.duration = this.audioDuration + this.delayTime;
};

THREE.MMDAudioManager.prototype = {

	constructor: THREE.MMDAudioManager,

	control: function control(delta) {

		this.elapsed += delta;
		this.currentTime += delta;

		if (this.checkIfStopAudio()) {

			this.audio.stop();
		}

		if (this.checkIfStartAudio()) {

			this.audio.play();
		}
	},

	checkIfStartAudio: function checkIfStartAudio() {

		if (this.audio.isPlaying) {

			return false;
		}

		while (this.currentTime >= this.duration) {

			this.currentTime -= this.duration;
		}

		if (this.currentTime < this.delayTime) {

			return false;
		}

		this.audio.startTime = this.currentTime - this.delayTime;

		return true;
	},

	checkIfStopAudio: function checkIfStopAudio() {

		if (!this.audio.isPlaying) {

			return false;
		}

		if (this.currentTime >= this.duration) {

			return true;
		}

		return false;
	}

};

THREE.MMDGrantSolver = function (mesh) {

	this.mesh = mesh;
};

THREE.MMDGrantSolver.prototype = {

	constructor: THREE.MMDGrantSolver,

	update: function () {

		var q = new THREE.Quaternion();

		return function () {

			for (var i = 0; i < this.mesh.geometry.grants.length; i++) {

				var g = this.mesh.geometry.grants[i];
				var b = this.mesh.skeleton.bones[g.index];
				var pb = this.mesh.skeleton.bones[g.parentIndex];

				if (g.isLocal) {

					// TODO: implement
					if (g.affectPosition) {}

					// TODO: implement
					if (g.affectRotation) {}
				} else {

					// TODO: implement
					if (g.affectPosition) {}

					if (g.affectRotation) {

						q.set(0, 0, 0, 1);
						q.slerp(pb.quaternion, g.ratio);
						b.quaternion.multiply(q);
					}
				}
			}
		};
	}()

};

THREE.MMDHelper = function () {

	this.meshes = [];

	this.doAnimation = true;
	this.doIk = true;
	this.doGrant = true;
	this.doPhysics = true;
	this.doCameraAnimation = true;

	this.sharedPhysics = false;
	this.masterPhysics = null;

	this.audioManager = null;
	this.camera = null;
};

THREE.MMDHelper.prototype = {

	constructor: THREE.MMDHelper,

	add: function add(mesh) {

		if (!(mesh instanceof THREE.SkinnedMesh)) {

			throw new Error('THREE.MMDHelper.add() accepts only THREE.SkinnedMesh instance.');
		}

		if (mesh.mixer === undefined) mesh.mixer = null;
		if (mesh.ikSolver === undefined) mesh.ikSolver = null;
		if (mesh.grantSolver === undefined) mesh.grantSolver = null;
		if (mesh.physics === undefined) mesh.physics = null;
		if (mesh.looped === undefined) mesh.looped = false;

		this.meshes.push(mesh);

		// workaround until I make IK and Physics Animation plugin
		this.initBackupBones(mesh);
	},

	setAudio: function setAudio(audio, listener, params) {

		this.audioManager = new THREE.MMDAudioManager(audio, listener, params);
	},

	setCamera: function setCamera(camera) {

		camera.mixer = null;
		this.camera = camera;
	},

	setPhysicses: function setPhysicses(params) {

		for (var i = 0; i < this.meshes.length; i++) {

			this.setPhysics(this.meshes[i], params);
		}
	},

	setPhysics: function setPhysics(mesh, params) {

		params = params === undefined ? {} : Object.assign({}, params);

		if (params.world === undefined && this.sharedPhysics) {

			var masterPhysics = this.getMasterPhysics();

			if (masterPhysics !== null) params.world = masterPhysics.world;
		}

		var warmup = params.warmup !== undefined ? params.warmup : 60;

		var physics = new THREE.MMDPhysics(mesh, params);

		if (mesh.mixer !== null && mesh.mixer !== undefined && params.preventAnimationWarmup !== true) {

			this.animateOneMesh(0, mesh);
			physics.reset();
		}

		physics.warmup(warmup);

		this.updateIKParametersDependingOnPhysicsEnabled(mesh, true);

		mesh.physics = physics;
	},

	getMasterPhysics: function getMasterPhysics() {

		if (this.masterPhysics !== null) return this.masterPhysics;

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			var physics = this.meshes[i].physics;

			if (physics !== undefined && physics !== null) {

				this.masterPhysics = physics;
				return this.masterPhysics;
			}
		}

		return null;
	},

	enablePhysics: function enablePhysics(enabled) {

		if (enabled === true) {

			this.doPhysics = true;
		} else {

			this.doPhysics = false;
		}

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			this.updateIKParametersDependingOnPhysicsEnabled(this.meshes[i], enabled);
		}
	},

	updateIKParametersDependingOnPhysicsEnabled: function updateIKParametersDependingOnPhysicsEnabled(mesh, physicsEnabled) {

		var iks = mesh.geometry.iks;
		var bones = mesh.geometry.bones;

		for (var j = 0, jl = iks.length; j < jl; j++) {

			var ik = iks[j];
			var links = ik.links;

			for (var k = 0, kl = links.length; k < kl; k++) {

				var link = links[k];

				if (physicsEnabled === true) {

					// disable IK of the bone the corresponding rigidBody type of which is 1 or 2
					// because its rotation will be overriden by physics
					link.enabled = bones[link.index].rigidBodyType > 0 ? false : true;
				} else {

					link.enabled = true;
				}
			}
		}
	},

	setAnimations: function setAnimations() {

		for (var i = 0; i < this.meshes.length; i++) {

			this.setAnimation(this.meshes[i]);
		}
	},

	setAnimation: function setAnimation(mesh) {

		if (mesh.geometry.animations !== undefined) {

			mesh.mixer = new THREE.AnimationMixer(mesh);

			// TODO: find a workaround not to access (seems like) private properties
			//       the name of them begins with "_".
			mesh.mixer.addEventListener('loop', function (e) {

				if (e.action._clip.tracks.length > 0 && e.action._clip.tracks[0].name.indexOf('.bones') !== 0) return;

				var mesh = e.target._root;
				mesh.looped = true;
			});

			var foundAnimation = false;
			var foundMorphAnimation = false;

			for (var i = 0; i < mesh.geometry.animations.length; i++) {

				var clip = mesh.geometry.animations[i];

				var action = mesh.mixer.clipAction(clip);

				if (clip.tracks.length > 0 && clip.tracks[0].name.indexOf('.morphTargetInfluences') === 0) {

					if (!foundMorphAnimation) {

						action.play();
						foundMorphAnimation = true;
					}
				} else {

					if (!foundAnimation) {

						action.play();
						foundAnimation = true;
					}
				}
			}

			if (foundAnimation) {

				mesh.ikSolver = new THREE.CCDIKSolver(mesh);

				if (mesh.geometry.grants !== undefined) {

					mesh.grantSolver = new THREE.MMDGrantSolver(mesh);
				}
			}
		}
	},

	setCameraAnimation: function setCameraAnimation(camera) {

		if (camera.animations !== undefined) {

			camera.mixer = new THREE.AnimationMixer(camera);
			camera.mixer.clipAction(camera.animations[0]).play();
		}
	},

	/*
  * detect the longest duration among model, camera, and audio animations and then
  * set it to them to sync.
  * TODO: touching private properties ( ._actions and ._clip ) so consider better way
  *       to access them for safe and modularity.
  */
	unifyAnimationDuration: function unifyAnimationDuration(params) {

		params = params === undefined ? {} : params;

		var max = 0.0;

		var camera = this.camera;
		var audioManager = this.audioManager;

		// check the longest duration
		for (var i = 0; i < this.meshes.length; i++) {

			var mesh = this.meshes[i];
			var mixer = mesh.mixer;

			if (mixer === null) {

				continue;
			}

			for (var j = 0; j < mixer._actions.length; j++) {

				var action = mixer._actions[j];
				max = Math.max(max, action._clip.duration);
			}
		}

		if (camera !== null && camera.mixer !== null) {

			var mixer = camera.mixer;

			for (var i = 0; i < mixer._actions.length; i++) {

				var action = mixer._actions[i];
				max = Math.max(max, action._clip.duration);
			}
		}

		if (audioManager !== null) {

			max = Math.max(max, audioManager.duration);
		}

		if (params.afterglow !== undefined) {

			max += params.afterglow;
		}

		// set the duration
		for (var i = 0; i < this.meshes.length; i++) {

			var mesh = this.meshes[i];
			var mixer = mesh.mixer;

			if (mixer === null) {

				continue;
			}

			for (var j = 0; j < mixer._actions.length; j++) {

				var action = mixer._actions[j];
				action._clip.duration = max;
			}
		}

		if (camera !== null && camera.mixer !== null) {

			var mixer = camera.mixer;

			for (var i = 0; i < mixer._actions.length; i++) {

				var action = mixer._actions[i];
				action._clip.duration = max;
			}
		}

		if (audioManager !== null) {

			audioManager.duration = max;
		}
	},

	controlAudio: function controlAudio(delta) {

		if (this.audioManager === null) {

			return;
		}

		this.audioManager.control(delta);
	},

	animate: function animate(delta) {

		this.controlAudio(delta);

		for (var i = 0; i < this.meshes.length; i++) {

			this.animateOneMesh(delta, this.meshes[i]);
		}

		if (this.sharedPhysics) this.updateSharedPhysics(delta);

		this.animateCamera(delta);
	},

	animateOneMesh: function animateOneMesh(delta, mesh) {

		var mixer = mesh.mixer;
		var ikSolver = mesh.ikSolver;
		var grantSolver = mesh.grantSolver;
		var physics = mesh.physics;

		if (mixer !== null && this.doAnimation === true) {

			// restore/backupBones are workaround
			// until I make IK, Grant, and Physics Animation plugin
			this.restoreBones(mesh);

			mixer.update(delta);

			this.backupBones(mesh);
		}

		if (ikSolver !== null && this.doIk === true) {

			ikSolver.update();
		}

		if (grantSolver !== null && this.doGrant === true) {

			grantSolver.update();
		}

		if (mesh.looped === true) {

			if (physics !== null) physics.reset();

			mesh.looped = false;
		}

		if (physics !== null && this.doPhysics && !this.sharedPhysics) {

			physics.update(delta);
		}
	},

	updateSharedPhysics: function updateSharedPhysics(delta) {

		if (this.meshes.length === 0 || !this.doPhysics || !this.sharedPhysics) return;

		var physics = this.getMasterPhysics();

		if (physics === null) return;

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			var p = this.meshes[i].physics;

			if (p !== null && p !== undefined) {

				p.updateRigidBodies();
			}
		}

		physics.stepSimulation(delta);

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			var p = this.meshes[i].physics;

			if (p !== null && p !== undefined) {

				p.updateBones();
			}
		}
	},

	animateCamera: function animateCamera(delta) {

		if (this.camera === null) {

			return;
		}

		var mixer = this.camera.mixer;

		if (mixer !== null && this.camera.center !== undefined && this.doCameraAnimation === true) {

			mixer.update(delta);

			// TODO: Let PerspectiveCamera automatically update?
			this.camera.updateProjectionMatrix();

			this.camera.up.set(0, 1, 0);
			this.camera.up.applyQuaternion(this.camera.quaternion);
			this.camera.lookAt(this.camera.center);
		}
	},

	poseAsVpd: function poseAsVpd(mesh, vpd, params) {

		if (params === undefined) params = {};

		if (params.preventResetPose !== true) mesh.pose();

		var bones = mesh.skeleton.bones;
		var bones2 = vpd.bones;

		var table = {};

		for (var i = 0; i < bones.length; i++) {

			table[bones[i].name] = i;
		}

		var thV = new THREE.Vector3();
		var thQ = new THREE.Quaternion();

		for (var i = 0; i < bones2.length; i++) {

			var b = bones2[i];
			var index = table[b.name];

			if (index === undefined) continue;

			var b2 = bones[index];
			var t = b.translation;
			var q = b.quaternion;

			thV.set(t[0], t[1], t[2]);
			thQ.set(q[0], q[1], q[2], q[3]);

			b2.position.add(thV);
			b2.quaternion.multiply(thQ);
		}

		mesh.updateMatrixWorld(true);

		if (params.preventIk !== true) {

			var solver = new THREE.CCDIKSolver(mesh);
			solver.update(params.saveOriginalBonesBeforeIK);
		}

		if (params.preventGrant !== true && mesh.geometry.grants !== undefined) {

			var solver = new THREE.MMDGrantSolver(mesh);
			solver.update();
		}
	},

	/*
  * Note: These following three functions are workaround for r74dev.
  *       THREE.PropertyMixer.apply() seems to save values into buffer cache
  *       when mixer.update() is called.
  *       ikSolver.update() and physics.update() change bone position/quaternion
  *       without mixer.update() then buffer cache will be inconsistent.
  *       So trying to avoid buffer cache inconsistency by doing
  *       backup bones position/quaternion right after mixer.update() call
  *       and then restore them after rendering.
  */
	initBackupBones: function initBackupBones(mesh) {

		mesh.skeleton.backupBones = [];

		for (var i = 0; i < mesh.skeleton.bones.length; i++) {

			mesh.skeleton.backupBones.push(mesh.skeleton.bones[i].clone());
		}
	},

	backupBones: function backupBones(mesh) {

		mesh.skeleton.backupBoneIsSaved = true;

		for (var i = 0; i < mesh.skeleton.bones.length; i++) {

			var b = mesh.skeleton.backupBones[i];
			var b2 = mesh.skeleton.bones[i];
			b.position.copy(b2.position);
			b.quaternion.copy(b2.quaternion);
		}
	},

	restoreBones: function restoreBones(mesh) {

		if (mesh.skeleton.backupBoneIsSaved !== true) {

			return;
		}

		mesh.skeleton.backupBoneIsSaved = false;

		for (var i = 0; i < mesh.skeleton.bones.length; i++) {

			var b = mesh.skeleton.bones[i];
			var b2 = mesh.skeleton.backupBones[i];
			b.position.copy(b2.position);
			b.quaternion.copy(b2.quaternion);
		}
	}

};

exports.default = THREE.MMDLoader;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */

THREE.MTLLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.MTLLoader.prototype = {

	constructor: THREE.MTLLoader,

	/**
  * Loads and parses a MTL asset from a URL.
  *
  * @param {String} url - URL to the MTL file.
  * @param {Function} [onLoad] - Callback invoked with the loaded object.
  * @param {Function} [onProgress] - Callback for download progress.
  * @param {Function} [onError] - Callback for download errors.
  *
  * @see setPath setTexturePath
  *
  * @note In order for relative texture references to resolve correctly
  * you must call setPath and/or setTexturePath explicitly prior to load.
  */
	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(this.manager);
		loader.setPath(this.path);
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	/**
  * Set base path for resolving references.
  * If set this path will be prepended to each loaded and found reference.
  *
  * @see setTexturePath
  * @param {String} path
  *
  * @example
  *     mtlLoader.setPath( 'assets/obj/' );
  *     mtlLoader.load( 'my.mtl', ... );
  */
	setPath: function setPath(path) {

		this.path = path;
	},

	/**
  * Set base path for resolving texture references.
  * If set this path will be prepended found texture reference.
  * If not set and setPath is, it will be used as texture base path.
  *
  * @see setPath
  * @param {String} path
  *
  * @example
  *     mtlLoader.setPath( 'assets/obj/' );
  *     mtlLoader.setTexturePath( 'assets/textures/' );
  *     mtlLoader.load( 'my.mtl', ... );
  */
	setTexturePath: function setTexturePath(path) {

		this.texturePath = path;
	},

	setBaseUrl: function setBaseUrl(path) {

		console.warn('THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.');

		this.setTexturePath(path);
	},

	setCrossOrigin: function setCrossOrigin(value) {

		this.crossOrigin = value;
	},

	setMaterialOptions: function setMaterialOptions(value) {

		this.materialOptions = value;
	},

	/**
  * Parses a MTL file.
  *
  * @param {String} text - Content of MTL file
  * @return {THREE.MTLLoader.MaterialCreator}
  *
  * @see setPath setTexturePath
  *
  * @note In order for relative texture references to resolve correctly
  * you must call setPath and/or setTexturePath explicitly prior to parse.
  */
	parse: function parse(text) {

		var lines = text.split('\n');
		var info = {};
		var delimiter_pattern = /\s+/;
		var materialsInfo = {};

		for (var i = 0; i < lines.length; i++) {

			var line = lines[i];
			line = line.trim();

			if (line.length === 0 || line.charAt(0) === '#') {

				// Blank line or comment ignore
				continue;
			}

			var pos = line.indexOf(' ');

			var key = pos >= 0 ? line.substring(0, pos) : line;
			key = key.toLowerCase();

			var value = pos >= 0 ? line.substring(pos + 1) : '';
			value = value.trim();

			if (key === 'newmtl') {

				// New material

				info = { name: value };
				materialsInfo[value] = info;
			} else if (info) {

				if (key === 'ka' || key === 'kd' || key === 'ks') {

					var ss = value.split(delimiter_pattern, 3);
					info[key] = [parseFloat(ss[0]), parseFloat(ss[1]), parseFloat(ss[2])];
				} else {

					info[key] = value;
				}
			}
		}

		var materialCreator = new THREE.MTLLoader.MaterialCreator(this.texturePath || this.path, this.materialOptions);
		materialCreator.setCrossOrigin(this.crossOrigin);
		materialCreator.setManager(this.manager);
		materialCreator.setMaterials(materialsInfo);
		return materialCreator;
	}

};

/**
 * Create a new THREE-MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 * @constructor
 */

THREE.MTLLoader.MaterialCreator = function (baseUrl, options) {

	this.baseUrl = baseUrl || '';
	this.options = options;
	this.materialsInfo = {};
	this.materials = {};
	this.materialsArray = [];
	this.nameLookup = {};

	this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide;
	this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping;
};

THREE.MTLLoader.MaterialCreator.prototype = {

	constructor: THREE.MTLLoader.MaterialCreator,

	crossOrigin: 'Anonymous',

	setCrossOrigin: function setCrossOrigin(value) {

		this.crossOrigin = value;
	},

	setManager: function setManager(value) {

		this.manager = value;
	},

	setMaterials: function setMaterials(materialsInfo) {

		this.materialsInfo = this.convert(materialsInfo);
		this.materials = {};
		this.materialsArray = [];
		this.nameLookup = {};
	},

	convert: function convert(materialsInfo) {

		if (!this.options) return materialsInfo;

		var converted = {};

		for (var mn in materialsInfo) {

			// Convert materials info into normalized form based on options

			var mat = materialsInfo[mn];

			var covmat = {};

			converted[mn] = covmat;

			for (var prop in mat) {

				var save = true;
				var value = mat[prop];
				var lprop = prop.toLowerCase();

				switch (lprop) {

					case 'kd':
					case 'ka':
					case 'ks':

						// Diffuse color (color under white light) using RGB values

						if (this.options && this.options.normalizeRGB) {

							value = [value[0] / 255, value[1] / 255, value[2] / 255];
						}

						if (this.options && this.options.ignoreZeroRGBs) {

							if (value[0] === 0 && value[1] === 0 && value[2] === 0) {

								// ignore

								save = false;
							}
						}

						break;

					default:

						break;

				}

				if (save) {

					covmat[lprop] = value;
				}
			}
		}

		return converted;
	},

	preload: function preload() {

		for (var mn in this.materialsInfo) {

			this.create(mn);
		}
	},

	getIndex: function getIndex(materialName) {

		return this.nameLookup[materialName];
	},

	getAsArray: function getAsArray() {

		var index = 0;

		for (var mn in this.materialsInfo) {

			this.materialsArray[index] = this.create(mn);
			this.nameLookup[mn] = index;
			index++;
		}

		return this.materialsArray;
	},

	create: function create(materialName) {

		if (this.materials[materialName] === undefined) {

			this.createMaterial_(materialName);
		}

		return this.materials[materialName];
	},

	createMaterial_: function createMaterial_(materialName) {

		// Create material

		var scope = this;
		var mat = this.materialsInfo[materialName];
		var params = {

			name: materialName,
			side: this.side

		};

		function resolveURL(baseUrl, url) {

			if (typeof url !== 'string' || url === '') return '';

			// Absolute URL
			if (/^https?:\/\//i.test(url)) return url;

			return baseUrl + url;
		}

		function setMapForType(mapType, value) {

			if (params[mapType]) return; // Keep the first encountered texture

			var texParams = scope.getTextureParams(value, params);
			var map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));

			map.repeat.copy(texParams.scale);
			map.offset.copy(texParams.offset);

			map.wrapS = scope.wrap;
			map.wrapT = scope.wrap;

			params[mapType] = map;
		}

		for (var prop in mat) {

			var value = mat[prop];
			var n;

			if (value === '') continue;

			switch (prop.toLowerCase()) {

				// Ns is material specular exponent

				case 'kd':

					// Diffuse color (color under white light) using RGB values

					params.color = new THREE.Color().fromArray(value);

					break;

				case 'ks':

					// Specular color (color when light is reflected from shiny surface) using RGB values
					params.specular = new THREE.Color().fromArray(value);

					break;

				case 'map_kd':

					// Diffuse texture map

					setMapForType("map", value);

					break;

				case 'map_ks':

					// Specular map

					setMapForType("specularMap", value);

					break;

				case 'norm':

					setMapForType("normalMap", value);

					break;

				case 'map_bump':
				case 'bump':

					// Bump texture map

					setMapForType("bumpMap", value);

					break;

				case 'ns':

					// The specular exponent (defines the focus of the specular highlight)
					// A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

					params.shininess = parseFloat(value);

					break;

				case 'd':
					n = parseFloat(value);

					if (n < 1) {

						params.opacity = n;
						params.transparent = true;
					}

					break;

				case 'tr':
					n = parseFloat(value);

					if (this.options && this.options.invertTrProperty) n = 1 - n;

					if (n < 1) {

						params.opacity = n;
						params.transparent = true;
					}

					break;

				default:
					break;

			}
		}

		this.materials[materialName] = new THREE.MeshPhongMaterial(params);
		return this.materials[materialName];
	},

	getTextureParams: function getTextureParams(value, matParams) {

		var texParams = {

			scale: new THREE.Vector2(1, 1),
			offset: new THREE.Vector2(0, 0)

		};

		var items = value.split(/\s+/);
		var pos;

		pos = items.indexOf('-bm');

		if (pos >= 0) {

			matParams.bumpScale = parseFloat(items[pos + 1]);
			items.splice(pos, 2);
		}

		pos = items.indexOf('-s');

		if (pos >= 0) {

			texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
			items.splice(pos, 4); // we expect 3 parameters here!
		}

		pos = items.indexOf('-o');

		if (pos >= 0) {

			texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
			items.splice(pos, 4); // we expect 3 parameters here!
		}

		texParams.url = items.join(' ').trim();
		return texParams;
	},

	loadTexture: function loadTexture(url, mapping, onLoad, onProgress, onError) {

		var texture;
		var loader = THREE.Loader.Handlers.get(url);
		var manager = this.manager !== undefined ? this.manager : THREE.DefaultLoadingManager;

		if (loader === null) {

			loader = new THREE.TextureLoader(manager);
		}

		if (loader.setCrossOrigin) loader.setCrossOrigin(this.crossOrigin);
		texture = loader.load(url, onLoad, onProgress, onError);

		if (mapping !== undefined) texture.mapping = mapping;

		return texture;
	}

};

exports.default = THREE.MTLLoader;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.NodeMaterialLoader = function (manager, library) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

	this.nodes = {};
	this.materials = {};
	this.passes = {};
	this.names = {};
	this.library = library || {};
};

THREE.NodeMaterialLoaderUtils = {

	replaceUUIDObject: function replaceUUIDObject(object, uuid, value, recursive) {

		recursive = recursive !== undefined ? recursive : true;

		if ((typeof uuid === "undefined" ? "undefined" : _typeof(uuid)) === "object") uuid = uuid.uuid;

		if ((typeof object === "undefined" ? "undefined" : _typeof(object)) === "object") {

			var keys = Object.keys(object);

			for (var i = 0; i < keys.length; i++) {

				var key = keys[i];

				if (recursive) {

					object[key] = this.replaceUUIDObject(object[key], uuid, value);
				}

				if (key === uuid) {

					object[uuid] = object[key];

					delete object[key];
				}
			}
		}

		return object === uuid ? value : object;
	},

	replaceUUID: function replaceUUID(json, uuid, value) {

		this.replaceUUIDObject(json, uuid, value, false);
		this.replaceUUIDObject(json.nodes, uuid, value);
		this.replaceUUIDObject(json.materials, uuid, value);
		this.replaceUUIDObject(json.passes, uuid, value);
		this.replaceUUIDObject(json.library, uuid, value, false);

		return json;
	}

};

Object.assign(THREE.NodeMaterialLoader.prototype, {

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.load(url, function (text) {

			onLoad(scope.parse(JSON.parse(text)));
		}, onProgress, onError);

		return this;
	},

	getObjectByName: function getObjectByName(uuid) {

		return this.names[uuid];
	},

	getObjectById: function getObjectById(uuid) {

		return this.library[uuid] || this.nodes[uuid] || this.names[uuid];
	},

	getNode: function getNode(uuid) {

		var object = this.getObjectById(uuid);

		if (!object) {

			console.warn("Node \"" + uuid + "\" not found.");
		}

		return object;
	},

	parse: function parse(json) {

		var uuid, node, object, prop, i;

		for (uuid in json.nodes) {

			node = json.nodes[uuid];

			object = new THREE[node.type]();

			if (node.name) {

				object.name = node.name;

				this.names[object.name] = object;
			}

			this.nodes[uuid] = object;
		}

		for (uuid in json.materials) {

			node = json.materials[uuid];

			object = new THREE[node.type]();

			if (node.name) {

				object.name = node.name;

				this.names[object.name] = object;
			}

			this.materials[uuid] = object;
		}

		for (uuid in json.passes) {

			node = json.passes[uuid];

			object = new THREE[node.type]();

			if (node.name) {

				object.name = node.name;

				this.names[object.name] = object;
			}

			this.passes[uuid] = object;
		}

		if (json.material) this.material = this.materials[uuid];
		if (json.pass) this.pass = this.passes[uuid];

		for (uuid in json.nodes) {

			node = json.nodes[uuid];
			object = this.nodes[uuid];

			switch (node.type) {

				case "FloatNode":

					object.number = node.number;

					break;

				case "ColorNode":

					object.value.copy(node);

					break;

				case "Vector2Node":

					object.x = node.x;
					object.y = node.y;

					break;

				case "Vector3Node":

					object.x = node.x;
					object.y = node.y;
					object.z = node.z;

					break;

				case "Vector4Node":

					object.x = node.x;
					object.y = node.y;
					object.z = node.z;
					object.w = node.w;

					break;

				case "Matrix3Node":
				case "Matrix4Node":

					object.value.fromArray(node.elements);

					break;

				case "OperatorNode":

					object.a = this.getNode(node.a);
					object.b = this.getNode(node.b);
					object.op = node.op;

					break;

				case "Math1Node":

					object.a = this.getNode(node.a);
					object.method = node.method;

					break;

				case "Math2Node":

					object.a = this.getNode(node.a);
					object.b = this.getNode(node.b);
					object.method = node.method;

					break;

				case "Math3Node":

					object.a = this.getNode(node.a);
					object.b = this.getNode(node.b);
					object.c = this.getNode(node.c);
					object.method = node.method;

					break;

				case "UVNode":
				case "ColorsNode":

					object.index = node.index;

					break;

				case "LuminanceNode":

					object.rgb = this.getNode(node.rgb);

					break;

				case "PositionNode":
				case "NormalNode":
				case "ReflectNode":

					object.scope = node.scope;

					break;

				case "SwitchNode":

					object.node = this.getNode(node.node);
					object.components = node.components;

					break;

				case "JoinNode":

					for (prop in node.inputs) {

						object[prop] = this.getNode(node.inputs[prop]);
					}

					break;

				case "CameraNode":

					object.setScope(node.scope);

					if (node.camera) object.setCamera(this.getNode(node.camera));

					switch (node.scope) {

						case THREE.CameraNode.DEPTH:

							object.near.number = node.near;
							object.far.number = node.far;

							break;

					}

					break;

				case "ColorAdjustmentNode":

					object.rgb = this.getNode(node.rgb);
					object.adjustment = this.getNode(node.adjustment);
					object.method = node.method;

					break;

				case "UVTransformNode":

					object.uv = this.getNode(node.uv);
					object.transform = this.getNode(node.transform);

					break;

				case "BumpNode":

					object.value = this.getNode(node.value);
					object.coord = this.getNode(node.coord);
					object.scale = this.getNode(node.scale);

					break;

				case "BlurNode":

					object.value = this.getNode(node.value);
					object.coord = this.getNode(node.coord);
					object.scale = this.getNode(node.scale);

					object.value = this.getNode(node.value);
					object.coord = this.getNode(node.coord);
					object.radius = this.getNode(node.radius);

					if (node.size !== undefined) object.size = new THREE.Vector2(node.size.x, node.size.y);

					object.blurX = node.blurX;
					object.blurY = node.blurY;

					break;

				case "ResolutionNode":

					object.renderer = this.getNode(node.renderer);

					break;

				case "ScreenUVNode":

					object.resolution = this.getNode(node.resolution);

					break;

				case "VelocityNode":

					if (node.target) object.setTarget(this.getNode(node.target));
					object.setParams(node.params);

					break;

				case "TimerNode":

					object.scale = node.scale;

					break;

				case "ConstNode":

					object.name = node.name;
					object.type = node.out;
					object.value = node.value;
					object.useDefine = node.useDefine === true;

					break;

				case "AttributeNode":
				case "VarNode":

					object.type = node.out;

					break;

				case "ReflectorNode":

					object.setMirror(this.getNode(node.mirror));

					if (node.offset) object.offset = this.getNode(node.offset);

					break;

				case "NoiseNode":

					object.coord = this.getNode(node.coord);

					break;

				case "FunctionNode":

					object.isMethod = node.isMethod;
					object.useKeywords = node.useKeywords;

					object.extensions = node.extensions;
					object.keywords = {};

					for (prop in node.keywords) {

						object.keywords[prop] = this.getNode(node.keywords[prop]);
					}

					if (node.includes) {

						for (i = 0; i < node.includes.length; i++) {

							object.includes.push(this.getNode(node.includes[i]));
						}
					}

					object.eval(node.src, object.includes, object.extensions, object.keywords);

					if (!object.isMethod) object.type = node.out;

					break;

				case "FunctionCallNode":

					for (prop in node.inputs) {

						object.inputs[prop] = this.getNode(node.inputs[prop]);
					}

					object.value = this.getNode(node.value);

					break;

				case "TextureNode":
				case "CubeTextureNode":
				case "ScreenNode":

					if (node.value) object.value = this.getNode(node.value);

					object.coord = this.getNode(node.coord);

					if (node.bias) object.bias = this.getNode(node.bias);
					if (object.project !== undefined) object.project = node.project;

					break;

				case "LightNode":
				case "RoughnessToBlinnExponentNode":
					break;

				case "RawNode":

					object.value = this.getNode(node.value);

					break;

				case "StandardNode":
				case "PhongNode":
				case "SpriteNode":

					object.color = this.getNode(node.color);

					if (node.alpha) object.alpha = this.getNode(node.alpha);

					if (node.specular) object.specular = this.getNode(node.specular);
					if (node.shininess) object.shininess = this.getNode(node.shininess);

					if (node.roughness) object.roughness = this.getNode(node.roughness);
					if (node.metalness) object.metalness = this.getNode(node.metalness);

					if (node.reflectivity) object.reflectivity = this.getNode(node.reflectivity);

					if (node.clearCoat) object.clearCoat = this.getNode(node.clearCoat);
					if (node.clearCoatRoughness) object.clearCoatRoughness = this.getNode(node.clearCoatRoughness);

					if (node.normal) object.normal = this.getNode(node.normal);
					if (node.normalScale) object.normalScale = this.getNode(node.normalScale);

					if (node.emissive) object.emissive = this.getNode(node.emissive);
					if (node.ambient) object.ambient = this.getNode(node.ambient);

					if (node.shadow) object.shadow = this.getNode(node.shadow);
					if (node.light) object.light = this.getNode(node.light);

					if (node.ao) object.ao = this.getNode(node.ao);

					if (node.environment) object.environment = this.getNode(node.environment);
					if (node.environmentAlpha) object.environmentAlpha = this.getNode(node.environmentAlpha);

					if (node.transform) object.transform = this.getNode(node.transform);

					if (node.spherical === false) object.spherical = false;

					break;

				default:

					console.warn(node.type, "not supported.");

			}
		}

		for (uuid in json.materials) {

			node = json.materials[uuid];
			object = this.materials[uuid];

			if (node.name !== undefined) object.name = node.name;

			if (node.blending !== undefined) object.blending = node.blending;
			if (node.flatShading !== undefined) object.flatShading = node.flatShading;
			if (node.side !== undefined) object.side = node.side;

			object.depthFunc = node.depthFunc;
			object.depthTest = node.depthTest;
			object.depthWrite = node.depthWrite;

			if (node.wireframe !== undefined) object.wireframe = node.wireframe;
			if (node.wireframeLinewidth !== undefined) object.wireframeLinewidth = node.wireframeLinewidth;
			if (node.wireframeLinecap !== undefined) object.wireframeLinecap = node.wireframeLinecap;
			if (node.wireframeLinejoin !== undefined) object.wireframeLinejoin = node.wireframeLinejoin;

			if (node.skinning !== undefined) object.skinning = node.skinning;
			if (node.morphTargets !== undefined) object.morphTargets = node.morphTargets;

			if (node.visible !== undefined) object.visible = node.visible;
			if (node.userData !== undefined) object.userData = node.userData;

			object.vertex = this.getNode(node.vertex);
			object.fragment = this.getNode(node.fragment);

			if (object.vertex === object.fragment) {

				// replace main node

				object.node = object.vertex;
			}

			object.build();

			if (node.fog !== undefined) object.fog = node.fog;
			if (node.lights !== undefined) object.lights = node.lights;

			if (node.transparent !== undefined) object.transparent = node.transparent;
		}

		for (uuid in json.passes) {

			node = json.passes[uuid];
			object = this.passes[uuid];

			object.value = this.getNode(node.value);

			object.build();
		}

		return this.material || this.pass || this;
	}

});

exports.default = THREE.NodeMaterialLoader;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

THREE.NRRDLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.NRRDLoader.prototype = {

	constructor: THREE.NRRDLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (data) {

			onLoad(scope.parse(data));
		}, onProgress, onError);
	},

	parse: function parse(data) {

		// this parser is largely inspired from the XTK NRRD parser : https://github.com/xtk/X

		var _data = data;

		var _dataPointer = 0;

		var _nativeLittleEndian = new Int8Array(new Int16Array([1]).buffer)[0] > 0;

		var _littleEndian = true;

		var headerObject = {};

		function scan(type, chunks) {

			if (chunks === undefined || chunks === null) {

				chunks = 1;
			}

			var _chunkSize = 1;
			var _array_type = Uint8Array;

			switch (type) {

				// 1 byte data types
				case 'uchar':
					break;
				case 'schar':
					_array_type = Int8Array;
					break;
				// 2 byte data types
				case 'ushort':
					_array_type = Uint16Array;
					_chunkSize = 2;
					break;
				case 'sshort':
					_array_type = Int16Array;
					_chunkSize = 2;
					break;
				// 4 byte data types
				case 'uint':
					_array_type = Uint32Array;
					_chunkSize = 4;
					break;
				case 'sint':
					_array_type = Int32Array;
					_chunkSize = 4;
					break;
				case 'float':
					_array_type = Float32Array;
					_chunkSize = 4;
					break;
				case 'complex':
					_array_type = Float64Array;
					_chunkSize = 8;
					break;
				case 'double':
					_array_type = Float64Array;
					_chunkSize = 8;
					break;

			}

			// increase the data pointer in-place
			var _bytes = new _array_type(_data.slice(_dataPointer, _dataPointer += chunks * _chunkSize));

			// if required, flip the endianness of the bytes
			if (_nativeLittleEndian != _littleEndian) {

				// we need to flip here since the format doesn't match the native endianness
				_bytes = flipEndianness(_bytes, _chunkSize);
			}

			if (chunks == 1) {

				// if only one chunk was requested, just return one value
				return _bytes[0];
			}

			// return the byte array
			return _bytes;
		}

		//Flips typed array endianness in-place. Based on https://github.com/kig/DataStream.js/blob/master/DataStream.js.

		function flipEndianness(array, chunkSize) {

			var u8 = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
			for (var i = 0; i < array.byteLength; i += chunkSize) {

				for (var j = i + chunkSize - 1, k = i; j > k; j--, k++) {

					var tmp = u8[k];
					u8[k] = u8[j];
					u8[j] = tmp;
				}
			}

			return array;
		}

		//parse the header
		function parseHeader(header) {

			var data, field, fn, i, l, lines, m, _i, _len;
			lines = header.split(/\r?\n/);
			for (_i = 0, _len = lines.length; _i < _len; _i++) {

				l = lines[_i];
				if (l.match(/NRRD\d+/)) {

					headerObject.isNrrd = true;
				} else if (l.match(/^#/)) {} else if (m = l.match(/(.*):(.*)/)) {

					field = m[1].trim();
					data = m[2].trim();
					fn = THREE.NRRDLoader.prototype.fieldFunctions[field];
					if (fn) {

						fn.call(headerObject, data);
					} else {

						headerObject[field] = data;
					}
				}
			}
			if (!headerObject.isNrrd) {

				throw new Error('Not an NRRD file');
			}
			if (headerObject.encoding === 'bz2' || headerObject.encoding === 'bzip2') {

				throw new Error('Bzip is not supported');
			}
			if (!headerObject.vectors) {

				//if no space direction is set, let's use the identity
				headerObject.vectors = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)];
				//apply spacing if defined
				if (headerObject.spacings) {

					for (i = 0; i <= 2; i++) {

						if (!isNaN(headerObject.spacings[i])) {

							headerObject.vectors[i].multiplyScalar(headerObject.spacings[i]);
						}
					}
				}
			}
		}

		//parse the data when registred as one of this type : 'text', 'ascii', 'txt'
		function parseDataAsText(data, start, end) {

			var number = '';
			start = start || 0;
			end = end || data.length;
			var value;
			//length of the result is the product of the sizes
			var lengthOfTheResult = headerObject.sizes.reduce(function (previous, current) {

				return previous * current;
			}, 1);

			var base = 10;
			if (headerObject.encoding === 'hex') {

				base = 16;
			}

			var result = new headerObject.__array(lengthOfTheResult);
			var resultIndex = 0;
			var parsingFunction = parseInt;
			if (headerObject.__array === Float32Array || headerObject.__array === Float64Array) {

				parsingFunction = parseFloat;
			}
			for (var i = start; i < end; i++) {

				value = data[i];
				//if value is not a space
				if ((value < 9 || value > 13) && value !== 32) {

					number += String.fromCharCode(value);
				} else {

					if (number !== '') {

						result[resultIndex] = parsingFunction(number, base);
						resultIndex++;
					}
					number = '';
				}
			}
			if (number !== '') {

				result[resultIndex] = parsingFunction(number, base);
				resultIndex++;
			}
			return result;
		}

		var _bytes = scan('uchar', data.byteLength);
		var _length = _bytes.length;
		var _header = null;
		var _data_start = 0;
		var i;
		for (i = 1; i < _length; i++) {

			if (_bytes[i - 1] == 10 && _bytes[i] == 10) {

				// we found two line breaks in a row
				// now we know what the header is
				_header = this.parseChars(_bytes, 0, i - 2);
				// this is were the data starts
				_data_start = i + 1;
				break;
			}
		}
		// parse the header
		parseHeader(_header);

		var _data = _bytes.subarray(_data_start); // the data without header
		if (headerObject.encoding === 'gzip' || headerObject.encoding === 'gz') {

			// we need to decompress the datastream
			// here we start the unzipping and get a typed Uint8Array back
			var inflate = new Zlib.Gunzip(new Uint8Array(_data)); // eslint-disable-line no-undef
			_data = inflate.decompress();
		} else if (headerObject.encoding === 'ascii' || headerObject.encoding === 'text' || headerObject.encoding === 'txt' || headerObject.encoding === 'hex') {

			_data = parseDataAsText(_data);
		} else if (headerObject.encoding === 'raw') {

			//we need to copy the array to create a new array buffer, else we retrieve the original arraybuffer with the header
			var _copy = new Uint8Array(_data.length);

			for (var i = 0; i < _data.length; i++) {

				_copy[i] = _data[i];
			}

			_data = _copy;
		}
		// .. let's use the underlying array buffer
		_data = _data.buffer;

		var volume = new THREE.Volume();
		volume.header = headerObject;
		//
		// parse the (unzipped) data to a datastream of the correct type
		//
		volume.data = new headerObject.__array(_data);
		// get the min and max intensities
		var min_max = volume.computeMinMax();
		var min = min_max[0];
		var max = min_max[1];
		// attach the scalar range to the volume
		volume.windowLow = min;
		volume.windowHigh = max;

		// get the image dimensions
		volume.dimensions = [headerObject.sizes[0], headerObject.sizes[1], headerObject.sizes[2]];
		volume.xLength = volume.dimensions[0];
		volume.yLength = volume.dimensions[1];
		volume.zLength = volume.dimensions[2];
		// spacing
		var spacingX = new THREE.Vector3(headerObject.vectors[0][0], headerObject.vectors[0][1], headerObject.vectors[0][2]).length();
		var spacingY = new THREE.Vector3(headerObject.vectors[1][0], headerObject.vectors[1][1], headerObject.vectors[1][2]).length();
		var spacingZ = new THREE.Vector3(headerObject.vectors[2][0], headerObject.vectors[2][1], headerObject.vectors[2][2]).length();
		volume.spacing = [spacingX, spacingY, spacingZ];

		// Create IJKtoRAS matrix
		volume.matrix = new THREE.Matrix4();

		var _spaceX = 1;
		var _spaceY = 1;
		var _spaceZ = 1;

		if (headerObject.space == "left-posterior-superior") {

			_spaceX = -1;
			_spaceY = -1;
		} else if (headerObject.space === 'left-anterior-superior') {

			_spaceX = -1;
		}

		if (!headerObject.vectors) {

			volume.matrix.set(_spaceX, 0, 0, 0, 0, _spaceY, 0, 0, 0, 0, _spaceZ, 0, 0, 0, 0, 1);
		} else {

			var v = headerObject.vectors;

			volume.matrix.set(_spaceX * v[0][0], _spaceX * v[1][0], _spaceX * v[2][0], 0, _spaceY * v[0][1], _spaceY * v[1][1], _spaceY * v[2][1], 0, _spaceZ * v[0][2], _spaceZ * v[1][2], _spaceZ * v[2][2], 0, 0, 0, 0, 1);
		}

		volume.inverseMatrix = new THREE.Matrix4();
		volume.inverseMatrix.getInverse(volume.matrix);
		volume.RASDimensions = new THREE.Vector3(volume.xLength, volume.yLength, volume.zLength).applyMatrix4(volume.matrix).round().toArray().map(Math.abs);

		// .. and set the default threshold
		// only if the threshold was not already set
		if (volume.lowerThreshold === -Infinity) {

			volume.lowerThreshold = min;
		}
		if (volume.upperThreshold === Infinity) {

			volume.upperThreshold = max;
		}

		return volume;
	},

	parseChars: function parseChars(array, start, end) {

		// without borders, use the whole array
		if (start === undefined) {

			start = 0;
		}
		if (end === undefined) {

			end = array.length;
		}

		var output = '';
		// create and append the chars
		var i = 0;
		for (i = start; i < end; ++i) {

			output += String.fromCharCode(array[i]);
		}

		return output;
	},

	fieldFunctions: {

		type: function type(data) {

			switch (data) {

				case 'uchar':
				case 'unsigned char':
				case 'uint8':
				case 'uint8_t':
					this.__array = Uint8Array;
					break;
				case 'signed char':
				case 'int8':
				case 'int8_t':
					this.__array = Int8Array;
					break;
				case 'short':
				case 'short int':
				case 'signed short':
				case 'signed short int':
				case 'int16':
				case 'int16_t':
					this.__array = Int16Array;
					break;
				case 'ushort':
				case 'unsigned short':
				case 'unsigned short int':
				case 'uint16':
				case 'uint16_t':
					this.__array = Uint16Array;
					break;
				case 'int':
				case 'signed int':
				case 'int32':
				case 'int32_t':
					this.__array = Int32Array;
					break;
				case 'uint':
				case 'unsigned int':
				case 'uint32':
				case 'uint32_t':
					this.__array = Uint32Array;
					break;
				case 'float':
					this.__array = Float32Array;
					break;
				case 'double':
					this.__array = Float64Array;
					break;
				default:
					throw new Error('Unsupported NRRD data type: ' + data);

			}

			return this.type = data;
		},

		endian: function endian(data) {

			return this.endian = data;
		},

		encoding: function encoding(data) {

			return this.encoding = data;
		},

		dimension: function dimension(data) {

			return this.dim = parseInt(data, 10);
		},

		sizes: function sizes(data) {

			var i;
			return this.sizes = function () {

				var _i, _len, _ref, _results;
				_ref = data.split(/\s+/);
				_results = [];
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {

					i = _ref[_i];
					_results.push(parseInt(i, 10));
				}
				return _results;
			}();
		},

		space: function space(data) {

			return this.space = data;
		},

		'space origin': function spaceOrigin(data) {

			return this.space_origin = data.split("(")[1].split(")")[0].split(",");
		},

		'space directions': function spaceDirections(data) {

			var f, parts, v;
			parts = data.match(/\(.*?\)/g);
			return this.vectors = function () {

				var _i, _len, _results;
				_results = [];
				for (_i = 0, _len = parts.length; _i < _len; _i++) {

					v = parts[_i];
					_results.push(function () {

						var _j, _len2, _ref, _results2;
						_ref = v.slice(1, -1).split(/,/);
						_results2 = [];
						for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {

							f = _ref[_j];
							_results2.push(parseFloat(f));
						}
						return _results2;
					}());
				}
				return _results;
			}();
		},

		spacings: function spacings(data) {

			var f, parts;
			parts = data.split(/\s+/);
			return this.spacings = function () {

				var _i,
				    _len,
				    _results = [];

				for (_i = 0, _len = parts.length; _i < _len; _i++) {

					f = parts[_i];
					_results.push(parseFloat(f));
				}
				return _results;
			}();
		}
	}

};

exports.default = THREE.NRRDLoader;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.OBJLoader = function () {

	// o object_name | g group_name
	var object_pattern = /^[og]\s*(.+)?/;
	// mtllib file_reference
	var material_library_pattern = /^mtllib /;
	// usemtl material_name
	var material_use_pattern = /^usemtl /;

	function ParserState() {

		var state = {
			objects: [],
			object: {},

			vertices: [],
			normals: [],
			colors: [],
			uvs: [],

			materialLibraries: [],

			startObject: function startObject(name, fromDeclaration) {

				// If the current object (initial from reset) is not from a g/o declaration in the parsed
				// file. We need to use it for the first parsed g/o to keep things in sync.
				if (this.object && this.object.fromDeclaration === false) {

					this.object.name = name;
					this.object.fromDeclaration = fromDeclaration !== false;
					return;
				}

				var previousMaterial = this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined;

				if (this.object && typeof this.object._finalize === 'function') {

					this.object._finalize(true);
				}

				this.object = {
					name: name || '',
					fromDeclaration: fromDeclaration !== false,

					geometry: {
						vertices: [],
						normals: [],
						colors: [],
						uvs: []
					},
					materials: [],
					smooth: true,

					startMaterial: function startMaterial(name, libraries) {

						var previous = this._finalize(false);

						// New usemtl declaration overwrites an inherited material, except if faces were declared
						// after the material, then it must be preserved for proper MultiMaterial continuation.
						if (previous && (previous.inherited || previous.groupCount <= 0)) {

							this.materials.splice(previous.index, 1);
						}

						var material = {
							index: this.materials.length,
							name: name || '',
							mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : '',
							smooth: previous !== undefined ? previous.smooth : this.smooth,
							groupStart: previous !== undefined ? previous.groupEnd : 0,
							groupEnd: -1,
							groupCount: -1,
							inherited: false,

							clone: function clone(index) {

								var cloned = {
									index: typeof index === 'number' ? index : this.index,
									name: this.name,
									mtllib: this.mtllib,
									smooth: this.smooth,
									groupStart: 0,
									groupEnd: -1,
									groupCount: -1,
									inherited: false
								};
								cloned.clone = this.clone.bind(cloned);
								return cloned;
							}
						};

						this.materials.push(material);

						return material;
					},

					currentMaterial: function currentMaterial() {

						if (this.materials.length > 0) {

							return this.materials[this.materials.length - 1];
						}

						return undefined;
					},

					_finalize: function _finalize(end) {

						var lastMultiMaterial = this.currentMaterial();
						if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {

							lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
							lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
							lastMultiMaterial.inherited = false;
						}

						// Ignore objects tail materials if no face declarations followed them before a new o/g started.
						if (end && this.materials.length > 1) {

							for (var mi = this.materials.length - 1; mi >= 0; mi--) {

								if (this.materials[mi].groupCount <= 0) {

									this.materials.splice(mi, 1);
								}
							}
						}

						// Guarantee at least one empty material, this makes the creation later more straight forward.
						if (end && this.materials.length === 0) {

							this.materials.push({
								name: '',
								smooth: this.smooth
							});
						}

						return lastMultiMaterial;
					}
				};

				// Inherit previous objects material.
				// Spec tells us that a declared material must be set to all objects until a new material is declared.
				// If a usemtl declaration is encountered while this new object is being parsed, it will
				// overwrite the inherited material. Exception being that there was already face declarations
				// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

				if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === 'function') {

					var declared = previousMaterial.clone(0);
					declared.inherited = true;
					this.object.materials.push(declared);
				}

				this.objects.push(this.object);
			},

			finalize: function finalize() {

				if (this.object && typeof this.object._finalize === 'function') {

					this.object._finalize(true);
				}
			},

			parseVertexIndex: function parseVertexIndex(value, len) {

				var index = parseInt(value, 10);
				return (index >= 0 ? index - 1 : index + len / 3) * 3;
			},

			parseNormalIndex: function parseNormalIndex(value, len) {

				var index = parseInt(value, 10);
				return (index >= 0 ? index - 1 : index + len / 3) * 3;
			},

			parseUVIndex: function parseUVIndex(value, len) {

				var index = parseInt(value, 10);
				return (index >= 0 ? index - 1 : index + len / 2) * 2;
			},

			addVertex: function addVertex(a, b, c) {

				var src = this.vertices;
				var dst = this.object.geometry.vertices;

				dst.push(src[a + 0], src[a + 1], src[a + 2]);
				dst.push(src[b + 0], src[b + 1], src[b + 2]);
				dst.push(src[c + 0], src[c + 1], src[c + 2]);
			},

			addVertexPoint: function addVertexPoint(a) {

				var src = this.vertices;
				var dst = this.object.geometry.vertices;

				dst.push(src[a + 0], src[a + 1], src[a + 2]);
			},

			addVertexLine: function addVertexLine(a) {

				var src = this.vertices;
				var dst = this.object.geometry.vertices;

				dst.push(src[a + 0], src[a + 1], src[a + 2]);
			},

			addNormal: function addNormal(a, b, c) {

				var src = this.normals;
				var dst = this.object.geometry.normals;

				dst.push(src[a + 0], src[a + 1], src[a + 2]);
				dst.push(src[b + 0], src[b + 1], src[b + 2]);
				dst.push(src[c + 0], src[c + 1], src[c + 2]);
			},

			addColor: function addColor(a, b, c) {

				var src = this.colors;
				var dst = this.object.geometry.colors;

				dst.push(src[a + 0], src[a + 1], src[a + 2]);
				dst.push(src[b + 0], src[b + 1], src[b + 2]);
				dst.push(src[c + 0], src[c + 1], src[c + 2]);
			},

			addUV: function addUV(a, b, c) {

				var src = this.uvs;
				var dst = this.object.geometry.uvs;

				dst.push(src[a + 0], src[a + 1]);
				dst.push(src[b + 0], src[b + 1]);
				dst.push(src[c + 0], src[c + 1]);
			},

			addUVLine: function addUVLine(a) {

				var src = this.uvs;
				var dst = this.object.geometry.uvs;

				dst.push(src[a + 0], src[a + 1]);
			},

			addFace: function addFace(a, b, c, ua, ub, uc, na, nb, nc) {

				var vLen = this.vertices.length;

				var ia = this.parseVertexIndex(a, vLen);
				var ib = this.parseVertexIndex(b, vLen);
				var ic = this.parseVertexIndex(c, vLen);

				this.addVertex(ia, ib, ic);

				if (ua !== undefined) {

					var uvLen = this.uvs.length;

					ia = this.parseUVIndex(ua, uvLen);
					ib = this.parseUVIndex(ub, uvLen);
					ic = this.parseUVIndex(uc, uvLen);

					this.addUV(ia, ib, ic);
				}

				if (na !== undefined) {

					// Normals are many times the same. If so, skip function call and parseInt.
					var nLen = this.normals.length;
					ia = this.parseNormalIndex(na, nLen);

					ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
					ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

					this.addNormal(ia, ib, ic);
				}

				if (this.colors.length > 0) {

					this.addColor(ia, ib, ic);
				}
			},

			addPointGeometry: function addPointGeometry(vertices) {

				this.object.geometry.type = 'Points';

				var vLen = this.vertices.length;

				for (var vi = 0, l = vertices.length; vi < l; vi++) {

					this.addVertexPoint(this.parseVertexIndex(vertices[vi], vLen));
				}
			},

			addLineGeometry: function addLineGeometry(vertices, uvs) {

				this.object.geometry.type = 'Line';

				var vLen = this.vertices.length;
				var uvLen = this.uvs.length;

				for (var vi = 0, l = vertices.length; vi < l; vi++) {

					this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
				}

				for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {

					this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
				}
			}

		};

		state.startObject('', false);

		return state;
	}

	//

	function OBJLoader(manager) {

		this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

		this.materials = null;
	}

	OBJLoader.prototype = {

		constructor: OBJLoader,

		load: function load(url, onLoad, onProgress, onError) {

			var scope = this;

			var loader = new THREE.FileLoader(scope.manager);
			loader.setPath(this.path);
			loader.load(url, function (text) {

				onLoad(scope.parse(text));
			}, onProgress, onError);
		},

		setPath: function setPath(value) {

			this.path = value;
		},

		setMaterials: function setMaterials(materials) {

			this.materials = materials;

			return this;
		},

		parse: function parse(text) {

			console.time('OBJLoader');

			var state = new ParserState();

			if (text.indexOf('\r\n') !== -1) {

				// This is faster than String.split with regex that splits on both
				text = text.replace(/\r\n/g, '\n');
			}

			if (text.indexOf('\\\n') !== -1) {

				// join lines separated by a line continuation character (\)
				text = text.replace(/\\\n/g, '');
			}

			var lines = text.split('\n');
			var line = '',
			    lineFirstChar = '';
			var lineLength = 0;
			var result = [];

			// Faster to just trim left side of the line. Use if available.
			var trimLeft = typeof ''.trimLeft === 'function';

			for (var i = 0, l = lines.length; i < l; i++) {

				line = lines[i];

				line = trimLeft ? line.trimLeft() : line.trim();

				lineLength = line.length;

				if (lineLength === 0) continue;

				lineFirstChar = line.charAt(0);

				// @todo invoke passed in handler if any
				if (lineFirstChar === '#') continue;

				if (lineFirstChar === 'v') {

					var data = line.split(/\s+/);

					switch (data[0]) {

						case 'v':
							state.vertices.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
							if (data.length === 8) {

								state.colors.push(parseFloat(data[4]), parseFloat(data[5]), parseFloat(data[6]));
							}
							break;
						case 'vn':
							state.normals.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
							break;
						case 'vt':
							state.uvs.push(parseFloat(data[1]), parseFloat(data[2]));
							break;

					}
				} else if (lineFirstChar === 'f') {

					var lineData = line.substr(1).trim();
					var vertexData = lineData.split(/\s+/);
					var faceVertices = [];

					// Parse the face vertex data into an easy to work with format

					for (var j = 0, jl = vertexData.length; j < jl; j++) {

						var vertex = vertexData[j];

						if (vertex.length > 0) {

							var vertexParts = vertex.split('/');
							faceVertices.push(vertexParts);
						}
					}

					// Draw an edge between the first vertex and all subsequent vertices to form an n-gon

					var v1 = faceVertices[0];

					for (var j = 1, jl = faceVertices.length - 1; j < jl; j++) {

						var v2 = faceVertices[j];
						var v3 = faceVertices[j + 1];

						state.addFace(v1[0], v2[0], v3[0], v1[1], v2[1], v3[1], v1[2], v2[2], v3[2]);
					}
				} else if (lineFirstChar === 'l') {

					var lineParts = line.substring(1).trim().split(" ");
					var lineVertices = [],
					    lineUVs = [];

					if (line.indexOf("/") === -1) {

						lineVertices = lineParts;
					} else {

						for (var li = 0, llen = lineParts.length; li < llen; li++) {

							var parts = lineParts[li].split("/");

							if (parts[0] !== "") lineVertices.push(parts[0]);
							if (parts[1] !== "") lineUVs.push(parts[1]);
						}
					}
					state.addLineGeometry(lineVertices, lineUVs);
				} else if (lineFirstChar === 'p') {

					var lineData = line.substr(1).trim();
					var pointData = lineData.split(" ");

					state.addPointGeometry(pointData);
				} else if ((result = object_pattern.exec(line)) !== null) {

					// o object_name
					// or
					// g group_name

					// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
					// var name = result[ 0 ].substr( 1 ).trim();
					var name = (" " + result[0].substr(1).trim()).substr(1);

					state.startObject(name);
				} else if (material_use_pattern.test(line)) {

					// material

					state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
				} else if (material_library_pattern.test(line)) {

					// mtl file

					state.materialLibraries.push(line.substring(7).trim());
				} else if (lineFirstChar === 's') {

					result = line.split(' ');

					// smooth shading

					// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
					// but does not define a usemtl for each face set.
					// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
					// This requires some care to not create extra material on each smooth value for "normal" obj files.
					// where explicit usemtl defines geometry groups.
					// Example asset: examples/models/obj/cerberus/Cerberus.obj

					/*
      * http://paulbourke.net/dataformats/obj/
      * or
      * http://www.cs.utah.edu/~boulos/cs3505/obj_spec.pdf
      *
      * From chapter "Grouping" Syntax explanation "s group_number":
      * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
      * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
      * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
      * than 0."
      */
					if (result.length > 1) {

						var value = result[1].trim().toLowerCase();
						state.object.smooth = value !== '0' && value !== 'off';
					} else {

						// ZBrush can produce "s" lines #11707
						state.object.smooth = true;
					}
					var material = state.object.currentMaterial();
					if (material) material.smooth = state.object.smooth;
				} else {

					// Handle null terminated files without exception
					if (line === '\0') continue;

					throw new Error('THREE.OBJLoader: Unexpected line: "' + line + '"');
				}
			}

			state.finalize();

			var container = new THREE.Group();
			container.materialLibraries = [].concat(state.materialLibraries);

			for (var i = 0, l = state.objects.length; i < l; i++) {

				var object = state.objects[i];
				var geometry = object.geometry;
				var materials = object.materials;
				var isLine = geometry.type === 'Line';
				var isPoints = geometry.type === 'Points';
				var hasVertexColors = false;

				// Skip o/g line declarations that did not follow with any faces
				if (geometry.vertices.length === 0) continue;

				var buffergeometry = new THREE.BufferGeometry();

				buffergeometry.addAttribute('position', new THREE.Float32BufferAttribute(geometry.vertices, 3));

				if (geometry.normals.length > 0) {

					buffergeometry.addAttribute('normal', new THREE.Float32BufferAttribute(geometry.normals, 3));
				} else {

					buffergeometry.computeVertexNormals();
				}

				if (geometry.colors.length > 0) {

					hasVertexColors = true;
					buffergeometry.addAttribute('color', new THREE.Float32BufferAttribute(geometry.colors, 3));
				}

				if (geometry.uvs.length > 0) {

					buffergeometry.addAttribute('uv', new THREE.Float32BufferAttribute(geometry.uvs, 2));
				}

				// Create materials

				var createdMaterials = [];

				for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

					var sourceMaterial = materials[mi];
					var material = undefined;

					if (this.materials !== null) {

						material = this.materials.create(sourceMaterial.name);

						// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
						if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {

							var materialLine = new THREE.LineBasicMaterial();
							materialLine.copy(material);
							materialLine.lights = false; // TOFIX
							material = materialLine;
						} else if (isPoints && material && !(material instanceof THREE.PointsMaterial)) {

							var materialPoints = new THREE.PointsMaterial({ size: 10, sizeAttenuation: false });
							materialLine.copy(material);
							material = materialPoints;
						}
					}

					if (!material) {

						if (isLine) {

							material = new THREE.LineBasicMaterial();
						} else if (isPoints) {

							material = new THREE.PointsMaterial({ size: 1, sizeAttenuation: false });
						} else {

							material = new THREE.MeshPhongMaterial();
						}

						material.name = sourceMaterial.name;
					}

					material.flatShading = sourceMaterial.smooth ? false : true;
					material.vertexColors = hasVertexColors ? THREE.VertexColors : THREE.NoColors;

					createdMaterials.push(material);
				}

				// Create mesh

				var mesh;

				if (createdMaterials.length > 1) {

					for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

						var sourceMaterial = materials[mi];
						buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
					}

					if (isLine) {

						mesh = new THREE.LineSegments(buffergeometry, createdMaterials);
					} else if (isPoints) {

						mesh = new THREE.Points(buffergeometry, createdMaterials);
					} else {

						mesh = new THREE.Mesh(buffergeometry, createdMaterials);
					}
				} else {

					if (isLine) {

						mesh = new THREE.LineSegments(buffergeometry, createdMaterials[0]);
					} else if (isPoints) {

						mesh = new THREE.Points(buffergeometry, createdMaterials[0]);
					} else {

						mesh = new THREE.Mesh(buffergeometry, createdMaterials[0]);
					}
				}

				mesh.name = object.name;

				container.add(mesh);
			}

			console.timeEnd('OBJLoader');

			return container;
		}

	};

	return OBJLoader;
}();

exports.default = THREE.OBJLoader;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
  * @author Kai Salmen / https://kaisalmen.de
  * Development repository: https://github.com/kaisalmen/WWOBJLoader
  */

'use strict';

if (THREE.OBJLoader2 === undefined) {
	THREE.OBJLoader2 = {};
}

if (THREE.LoaderSupport === undefined) console.error('"THREE.LoaderSupport" is not available. "THREE.OBJLoader2" requires it. Please include "LoaderSupport.js" in your HTML.');

/**
 * Use this class to load OBJ data from files or to parse OBJ data from an arraybuffer
 * @class
 *
 * @param {THREE.DefaultLoadingManager} [manager] The loadingManager for the loader to use. Default is {@link THREE.DefaultLoadingManager}
 * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
 */
THREE.OBJLoader2 = function () {

	var OBJLOADER2_VERSION = '2.2.1';
	var LoaderBase = THREE.LoaderSupport.LoaderBase;
	var Validator = THREE.LoaderSupport.Validator;
	var ConsoleLogger = THREE.LoaderSupport.ConsoleLogger;

	OBJLoader2.prototype = Object.create(THREE.LoaderSupport.LoaderBase.prototype);
	OBJLoader2.prototype.constructor = OBJLoader2;

	function OBJLoader2(manager, logger) {
		THREE.LoaderSupport.LoaderBase.call(this, manager, logger);
		this.logger.logInfo('Using THREE.OBJLoader2 version: ' + OBJLOADER2_VERSION);

		this.materialPerSmoothingGroup = false;
		this.fileLoader = Validator.verifyInput(this.fileLoader, new THREE.FileLoader(this.manager));

		this.workerSupport = null;
		this.terminateWorkerOnLoad = true;
	};

	/**
  * Tells whether a material shall be created per smoothing group.
  * @memberOf THREE.OBJLoader2
  *
  * @param {boolean} materialPerSmoothingGroup=false
  */
	OBJLoader2.prototype.setMaterialPerSmoothingGroup = function (materialPerSmoothingGroup) {
		this.materialPerSmoothingGroup = materialPerSmoothingGroup === true;
	};

	/**
  * Use this convenient method to load an OBJ file at the given URL. By default the fileLoader uses an arraybuffer.
  * @memberOf THREE.OBJLoader2
  *
  * @param {string}  url A string containing the path/URL of the .obj file.
  * @param {callback} onLoad A function to be called after loading is successfully completed. The function receives loaded Object3D as an argument.
  * @param {callback} [onProgress] A function to be called while the loading is in progress. The argument will be the XMLHttpRequest instance, which contains total and Integer bytes.
  * @param {callback} [onError] A function to be called if an error occurs during loading. The function receives the error as an argument.
  * @param {callback} [onMeshAlter] A function to be called after a new mesh raw data becomes available for alteration.
  * @param {boolean} [useAsync] If true, uses async loading with worker, if false loads data synchronously.
  */
	OBJLoader2.prototype.load = function (url, onLoad, onProgress, onError, onMeshAlter, useAsync) {
		var scope = this;
		if (!Validator.isValid(onProgress)) {
			var numericalValueRef = 0;
			var numericalValue = 0;
			onProgress = function onProgress(event) {
				if (!event.lengthComputable) return;

				numericalValue = event.loaded / event.total;
				if (numericalValue > numericalValueRef) {

					numericalValueRef = numericalValue;
					var output = 'Download of "' + url + '": ' + (numericalValue * 100).toFixed(2) + '%';
					scope.onProgress('progressLoad', output, numericalValue);
				}
			};
		}

		if (!Validator.isValid(onError)) {
			onError = function onError(event) {
				var output = 'Error occurred while downloading "' + url + '"';
				scope.logger.logError(output + ': ' + event);
				scope.onProgress('error', output, -1);
			};
		}

		this.fileLoader.setPath(this.path);
		this.fileLoader.setResponseType('arraybuffer');
		this.fileLoader.load(url, function (content) {
			if (useAsync) {

				scope.parseAsync(content, onLoad);
			} else {

				var callbacks = new THREE.LoaderSupport.Callbacks();
				callbacks.setCallbackOnMeshAlter(onMeshAlter);
				scope._setCallbacks(callbacks);
				onLoad({
					detail: {
						loaderRootNode: scope.parse(content),
						modelName: scope.modelName,
						instanceNo: scope.instanceNo
					}
				});
			}
		}, onProgress, onError);
	};

	/**
  * Run the loader according the provided instructions.
  * @memberOf THREE.OBJLoader2
  *
  * @param {THREE.LoaderSupport.PrepData} prepData All parameters and resources required for execution
  * @param {THREE.LoaderSupport.WorkerSupport} [workerSupportExternal] Use pre-existing WorkerSupport
  */
	OBJLoader2.prototype.run = function (prepData, workerSupportExternal) {
		this._applyPrepData(prepData);
		var available = this._checkFiles(prepData.resources);
		if (Validator.isValid(workerSupportExternal)) {

			this.terminateWorkerOnLoad = false;
			this.workerSupport = workerSupportExternal;
			this.logger = workerSupportExternal.logger;
		}
		var scope = this;
		var onMaterialsLoaded = function onMaterialsLoaded(materials) {
			scope.builder.setMaterials(materials);

			if (Validator.isValid(available.obj.content)) {

				if (prepData.useAsync) {

					scope.parseAsync(available.obj.content, scope.callbacks.onLoad);
				} else {

					scope.parse(available.obj.content);
				}
			} else {

				scope.setPath(available.obj.path);
				scope.load(available.obj.name, scope.callbacks.onLoad, null, null, scope.callbacks.onMeshAlter, prepData.useAsync);
			}
		};

		this._loadMtl(available.mtl, onMaterialsLoaded, prepData.crossOrigin);
	};

	OBJLoader2.prototype._applyPrepData = function (prepData) {
		THREE.LoaderSupport.LoaderBase.prototype._applyPrepData.call(this, prepData);

		if (Validator.isValid(prepData)) {

			this.setMaterialPerSmoothingGroup(prepData.materialPerSmoothingGroup);
		}
	};

	/**
  * Parses OBJ data synchronously from arraybuffer or string.
  * @memberOf THREE.OBJLoader2
  *
  * @param {arraybuffer|string} content OBJ data as Uint8Array or String
  */
	OBJLoader2.prototype.parse = function (content) {
		this.logger.logTimeStart('OBJLoader2 parse: ' + this.modelName);

		var parser = new Parser();
		parser.setLogConfig(this.logger.enabled, this.logger.debug);
		parser.setMaterialPerSmoothingGroup(this.materialPerSmoothingGroup);
		parser.setUseIndices(this.useIndices);
		parser.setDisregardNormals(this.disregardNormals);
		// sync code works directly on the material references
		parser.setMaterials(this.builder.getMaterials());

		var scope = this;
		var onMeshLoaded = function onMeshLoaded(payload) {
			var meshes = scope.builder.processPayload(payload);
			var mesh;
			for (var i in meshes) {
				mesh = meshes[i];
				scope.loaderRootNode.add(mesh);
			}
		};
		parser.setCallbackBuilder(onMeshLoaded);
		var onProgressScoped = function onProgressScoped(text, numericalValue) {
			scope.onProgress('progressParse', text, numericalValue);
		};
		parser.setCallbackProgress(onProgressScoped);

		if (content instanceof ArrayBuffer || content instanceof Uint8Array) {

			this.logger.logInfo('Parsing arrayBuffer...');
			parser.parse(content);
		} else if (typeof content === 'string' || content instanceof String) {

			this.logger.logInfo('Parsing text...');
			parser.parseText(content);
		} else {

			throw 'Provided content was neither of type String nor Uint8Array! Aborting...';
		}
		this.logger.logTimeEnd('OBJLoader2 parse: ' + this.modelName);

		return this.loaderRootNode;
	};

	/**
  * Parses OBJ content asynchronously from arraybuffer.
  * @memberOf THREE.OBJLoader2
  *
  * @param {arraybuffer} content OBJ data as Uint8Array
  * @param {callback} onLoad Called after worker successfully completed loading
  */
	OBJLoader2.prototype.parseAsync = function (content, onLoad) {
		this.logger.logTimeStart('OBJLoader2 parseAsync: ' + this.modelName);

		var scope = this;
		var scopedOnLoad = function scopedOnLoad() {
			onLoad({
				detail: {
					loaderRootNode: scope.loaderRootNode,
					modelName: scope.modelName,
					instanceNo: scope.instanceNo
				}
			});
			scope.logger.logTimeEnd('OBJLoader2 parseAsync: ' + scope.modelName);
		};
		var scopedOnMeshLoaded = function scopedOnMeshLoaded(payload) {
			var meshes = scope.builder.processPayload(payload);
			var mesh;
			for (var i in meshes) {
				mesh = meshes[i];
				scope.loaderRootNode.add(mesh);
			}
		};

		this.workerSupport = Validator.verifyInput(this.workerSupport, new THREE.LoaderSupport.WorkerSupport(this.logger));
		var buildCode = function buildCode(funcBuildObject, funcBuildSingelton) {
			var workerCode = '';
			workerCode += '/**\n';
			workerCode += '  * This code was constructed by OBJLoader2 buildCode.\n';
			workerCode += '  */\n\n';
			workerCode += funcBuildObject('Validator', Validator);
			workerCode += funcBuildSingelton('ConsoleLogger', 'ConsoleLogger', ConsoleLogger);
			workerCode += funcBuildSingelton('LoaderBase', 'LoaderBase', LoaderBase);
			workerCode += funcBuildObject('Consts', Consts);
			workerCode += funcBuildSingelton('Parser', 'Parser', Parser);
			workerCode += funcBuildSingelton('RawMesh', 'RawMesh', RawMesh);
			workerCode += funcBuildSingelton('RawMeshSubGroup', 'RawMeshSubGroup', RawMeshSubGroup);

			return workerCode;
		};
		this.workerSupport.validate(buildCode, false);
		this.workerSupport.setCallbacks(scopedOnMeshLoaded, scopedOnLoad);
		if (scope.terminateWorkerOnLoad) this.workerSupport.setTerminateRequested(true);

		var materialNames = {};
		var materials = this.builder.getMaterials();
		for (var materialName in materials) {

			materialNames[materialName] = materialName;
		}
		this.workerSupport.run({
			params: {
				useAsync: true,
				materialPerSmoothingGroup: this.materialPerSmoothingGroup,
				useIndices: this.useIndices,
				disregardNormals: this.disregardNormals
			},
			logger: {
				debug: this.logger.debug,
				enabled: this.logger.enabled
			},
			materials: {
				// in async case only material names are supplied to parser
				materials: materialNames
			},
			data: {
				input: content,
				options: null
			}
		});
	};

	/**
  * Constants used by THREE.OBJLoader2
  */
	var Consts = {
		CODE_LF: 10,
		CODE_CR: 13,
		CODE_SPACE: 32,
		CODE_SLASH: 47,
		STRING_LF: '\n',
		STRING_CR: '\r',
		STRING_SPACE: ' ',
		STRING_SLASH: '/',
		LINE_F: 'f',
		LINE_G: 'g',
		LINE_L: 'l',
		LINE_O: 'o',
		LINE_S: 's',
		LINE_V: 'v',
		LINE_VT: 'vt',
		LINE_VN: 'vn',
		LINE_MTLLIB: 'mtllib',
		LINE_USEMTL: 'usemtl'
	};

	/**
  * Parse OBJ data either from ArrayBuffer or string
  * @class
  */
	var Parser = function () {

		var ConsoleLogger = THREE.LoaderSupport.ConsoleLogger;

		function Parser() {
			this.callbackProgress = null;
			this.callbackBuilder = null;

			this.materials = {};
			this.rawMesh = null;
			this.useAsync = false;
			this.materialPerSmoothingGroup = false;
			this.useIndices = false;
			this.disregardNormals = false;

			this.inputObjectCount = 1;
			this.outputObjectCount = 1;
			this.counts = {
				vertices: 0,
				faces: 0,
				doubleIndicesCount: 0
			};
			this.logger = new ConsoleLogger();
			this.totalBytes = 0;
		};

		Parser.prototype.setUseAsync = function (useAsync) {
			this.useAsync = useAsync;
		};

		Parser.prototype.setMaterialPerSmoothingGroup = function (materialPerSmoothingGroup) {
			this.materialPerSmoothingGroup = materialPerSmoothingGroup;
		};

		Parser.prototype.setUseIndices = function (useIndices) {
			this.useIndices = useIndices;
		};

		Parser.prototype.setDisregardNormals = function (disregardNormals) {
			this.disregardNormals = disregardNormals;
		};

		Parser.prototype.setMaterials = function (materials) {
			this.materials = Validator.verifyInput(materials, this.materials);
			this.materials = Validator.verifyInput(this.materials, {});
		};

		Parser.prototype.setCallbackBuilder = function (callbackBuilder) {
			this.callbackBuilder = callbackBuilder;
			if (!Validator.isValid(this.callbackBuilder)) throw 'Unable to run as no "builder" callback is set.';
		};

		Parser.prototype.setCallbackProgress = function (callbackProgress) {
			this.callbackProgress = callbackProgress;
		};

		Parser.prototype.setLogConfig = function (enabled, debug) {
			this.logger.setEnabled(enabled);
			this.logger.setDebug(debug);
		};

		Parser.prototype.configure = function () {
			this.rawMesh = new RawMesh(this.materialPerSmoothingGroup, this.useIndices, this.disregardNormals);

			if (this.logger.isEnabled()) {

				var matKeys = Object.keys(this.materials);
				var matNames = matKeys.length > 0 ? '\n\tmaterialNames:\n\t\t- ' + matKeys.join('\n\t\t- ') : '\n\tmaterialNames: None';
				var printedConfig = 'OBJLoader2.Parser configuration:' + matNames + '\n\tuseAsync: ' + this.useAsync + '\n\tmaterialPerSmoothingGroup: ' + this.materialPerSmoothingGroup + '\n\tuseIndices: ' + this.useIndices + '\n\tdisregardNormals: ' + this.disregardNormals + '\n\tcallbackBuilderName: ' + this.callbackBuilder.name + '\n\tcallbackProgressName: ' + this.callbackProgress.name;
				this.logger.logInfo(printedConfig);
			}
		};

		/**
   * Parse the provided arraybuffer
   * @memberOf Parser
   *
   * @param {Uint8Array} arrayBuffer OBJ data as Uint8Array
   */
		Parser.prototype.parse = function (arrayBuffer) {
			this.logger.logTimeStart('OBJLoader2.Parser.parse');
			this.configure();

			var arrayBufferView = new Uint8Array(arrayBuffer);
			var length = arrayBufferView.byteLength;
			this.totalBytes = length;
			var buffer = new Array(128);
			var bufferPointer = 0;
			var slashSpacePattern = new Array(16);
			var slashSpacePatternPointer = 0;
			var code;
			var word = '';
			var i = 0;
			for (; i < length; i++) {

				code = arrayBufferView[i];
				switch (code) {
					case Consts.CODE_SPACE:
						if (word.length > 0) buffer[bufferPointer++] = word;
						slashSpacePattern[slashSpacePatternPointer++] = 0;
						word = '';
						break;

					case Consts.CODE_SLASH:
						if (word.length > 0) buffer[bufferPointer++] = word;
						slashSpacePattern[slashSpacePatternPointer++] = 1;
						word = '';
						break;

					case Consts.CODE_LF:
						if (word.length > 0) buffer[bufferPointer++] = word;
						word = '';
						this.processLine(buffer, bufferPointer, slashSpacePattern, slashSpacePatternPointer, i);
						bufferPointer = 0;
						slashSpacePatternPointer = 0;
						break;

					case Consts.CODE_CR:
						break;

					default:
						word += String.fromCharCode(code);
						break;
				}
			}
			this.finalize(i);
			this.logger.logTimeEnd('OBJLoader2.Parser.parse');
		};

		/**
   * Parse the provided text
   * @memberOf Parser
   *
   * @param {string} text OBJ data as string
   */
		Parser.prototype.parseText = function (text) {
			this.logger.logTimeStart('OBJLoader2.Parser.parseText');
			this.configure();

			var length = text.length;
			this.totalBytes = length;
			var buffer = new Array(128);
			var bufferPointer = 0;
			var slashSpacePattern = new Array(16);
			var slashSpacePatternPointer = 0;
			var char;
			var word = '';
			var i = 0;
			for (; i < length; i++) {

				char = text[i];
				switch (char) {
					case Consts.STRING_SPACE:
						if (word.length > 0) buffer[bufferPointer++] = word;
						slashSpacePattern[slashSpacePatternPointer++] = 0;
						word = '';
						break;

					case Consts.STRING_SLASH:
						if (word.length > 0) buffer[bufferPointer++] = word;
						slashSpacePattern[slashSpacePatternPointer++] = 1;
						word = '';
						break;

					case Consts.STRING_LF:
						if (word.length > 0) buffer[bufferPointer++] = word;
						word = '';
						this.processLine(buffer, bufferPointer, slashSpacePattern, slashSpacePatternPointer, i);
						bufferPointer = 0;
						slashSpacePatternPointer = 0;
						break;

					case Consts.STRING_CR:
						break;

					default:
						word += char;
				}
			}
			this.finalize(i);
			this.logger.logTimeEnd('OBJLoader2.Parser.parseText');
		};

		Parser.prototype.processLine = function (buffer, bufferPointer, slashSpacePattern, slashSpacePatternPointer, currentByte) {
			if (bufferPointer < 1) return;

			var countSlashes = function countSlashes(slashSpacePattern, slashSpacePatternPointer) {
				var slashesCount = 0;
				for (var i = 0; i < slashSpacePatternPointer; i++) {
					slashesCount += slashSpacePattern[i];
				}
				return slashesCount;
			};

			var concatStringBuffer = function concatStringBuffer(buffer, bufferPointer, slashSpacePattern) {
				var concatBuffer = '';
				if (bufferPointer === 2) {

					concatBuffer = buffer[1];
				} else {

					var bufferLength = bufferPointer - 1;
					for (var i = 1; i < bufferLength; i++) {

						concatBuffer += buffer[i] + (slashSpacePattern[i] === 0 ? ' ' : '/');
					}
					concatBuffer += buffer[bufferLength];
				}
				return concatBuffer;
			};

			var flushStringBuffer = function flushStringBuffer(buffer, bufferPointer) {
				for (var i = 0; i < bufferPointer; i++) {
					buffer[i] = '';
				}
			};

			switch (buffer[0]) {
				case Consts.LINE_V:
					this.rawMesh.pushVertex(buffer, bufferPointer > 4);
					break;

				case Consts.LINE_VT:
					this.rawMesh.pushUv(buffer);
					break;

				case Consts.LINE_VN:
					this.rawMesh.pushNormal(buffer);
					break;

				case Consts.LINE_F:
					this.rawMesh.processFaces(buffer, bufferPointer, countSlashes(slashSpacePattern, slashSpacePatternPointer));
					break;

				case Consts.LINE_L:
					this.rawMesh.processLines(buffer, bufferPointer, countSlashes(slashSpacePattern, slashSpacePatternPointer));
					break;

				case Consts.LINE_S:
					this.rawMesh.pushSmoothingGroup(buffer[1]);
					flushStringBuffer(buffer, bufferPointer);
					break;

				case Consts.LINE_G:
					// 'g' leads to creation of mesh if valid data (faces declaration was done before), otherwise only groupName gets set
					this.processCompletedMesh(currentByte);
					this.rawMesh.pushGroup(concatStringBuffer(buffer, bufferPointer, slashSpacePattern));
					flushStringBuffer(buffer, bufferPointer);
					break;

				case Consts.LINE_O:
					// 'o' is pure meta-information and does not result in creation of new meshes
					this.rawMesh.pushObject(concatStringBuffer(buffer, bufferPointer, slashSpacePattern));
					flushStringBuffer(buffer, bufferPointer);
					break;

				case Consts.LINE_MTLLIB:
					this.rawMesh.pushMtllib(concatStringBuffer(buffer, bufferPointer, slashSpacePattern));
					flushStringBuffer(buffer, bufferPointer);
					break;

				case Consts.LINE_USEMTL:
					this.rawMesh.pushUsemtl(concatStringBuffer(buffer, bufferPointer, slashSpacePattern));
					flushStringBuffer(buffer, bufferPointer);
					break;

				default:
					break;
			}
		};

		Parser.prototype.createRawMeshReport = function (rawMesh, inputObjectCount) {
			var report = rawMesh.createReport(inputObjectCount);
			return 'Input Object number: ' + inputObjectCount + '\n\tObject name: ' + report.objectName + '\n\tGroup name: ' + report.groupName + '\n\tMtllib name: ' + report.mtllibName + '\n\tVertex count: ' + report.vertexCount + '\n\tNormal count: ' + report.normalCount + '\n\tUV count: ' + report.uvCount + '\n\tSmoothingGroup count: ' + report.smoothingGroupCount + '\n\tMaterial count: ' + report.mtlCount + '\n\tReal RawMeshSubGroup count: ' + report.subGroups;
		};

		Parser.prototype.processCompletedMesh = function (currentByte) {
			var result = this.rawMesh.finalize();
			if (Validator.isValid(result)) {

				if (this.rawMesh.colors.length > 0 && this.rawMesh.colors.length !== this.rawMesh.vertices.length) {

					throw 'Vertex Colors were detected, but vertex count and color count do not match!';
				}
				if (this.logger.isDebug()) this.logger.logDebug(this.createRawMeshReport(this.rawMesh, this.inputObjectCount));
				this.inputObjectCount++;

				this.buildMesh(result, currentByte);
				var progressBytesPercent = currentByte / this.totalBytes;
				this.callbackProgress('Completed [o: ' + this.rawMesh.objectName + ' g:' + this.rawMesh.groupName + '] Total progress: ' + (progressBytesPercent * 100).toFixed(2) + '%', progressBytesPercent);
				this.rawMesh.reset(this.rawMesh.smoothingGroup.splitMaterials);

				return true;
			} else {

				return false;
			}
		};

		Parser.prototype.finalize = function (currentByte) {
			this.logger.logInfo('Global output object count: ' + this.outputObjectCount);
			if (this.processCompletedMesh(currentByte) && this.logger.isEnabled()) {

				var parserFinalReport = 'Overall counts: ' + '\n\tVertices: ' + this.counts.vertices + '\n\tFaces: ' + this.counts.faces + '\n\tMultiple definitions: ' + this.counts.doubleIndicesCount;
				this.logger.logInfo(parserFinalReport);
			}
		};

		/**
   * RawObjectDescriptions are transformed to too intermediate format that is forwarded to the Builder.
   * It is ensured that rawObjectDescriptions only contain objects with vertices (no need to check).
   *
   * @param result
   */
		Parser.prototype.buildMesh = function (result, currentByte) {
			var rawObjectDescriptions = result.subGroups;

			var vertexFA = new Float32Array(result.absoluteVertexCount);
			this.counts.vertices += result.absoluteVertexCount / 3;
			this.counts.faces += result.faceCount;
			this.counts.doubleIndicesCount += result.doubleIndicesCount;
			var indexUA = result.absoluteIndexCount > 0 ? new Uint32Array(result.absoluteIndexCount) : null;
			var colorFA = result.absoluteColorCount > 0 ? new Float32Array(result.absoluteColorCount) : null;
			var normalFA = result.absoluteNormalCount > 0 ? new Float32Array(result.absoluteNormalCount) : null;
			var uvFA = result.absoluteUvCount > 0 ? new Float32Array(result.absoluteUvCount) : null;
			var haveVertexColors = Validator.isValid(colorFA);

			var rawObjectDescription;
			var materialNames = [];

			var createMultiMaterial = rawObjectDescriptions.length > 1;
			var materialIndex = 0;
			var materialIndexMapping = [];
			var selectedMaterialIndex;
			var materialGroup;
			var materialGroups = [];

			var vertexFAOffset = 0;
			var indexUAOffset = 0;
			var colorFAOffset = 0;
			var normalFAOffset = 0;
			var uvFAOffset = 0;
			var materialGroupOffset = 0;
			var materialGroupLength = 0;

			var materialOrg, material, materialName, materialNameOrg;
			for (var oodIndex in rawObjectDescriptions) {

				if (!rawObjectDescriptions.hasOwnProperty(oodIndex)) continue;
				rawObjectDescription = rawObjectDescriptions[oodIndex];

				materialNameOrg = rawObjectDescription.materialName;
				materialName = materialNameOrg + (haveVertexColors ? '_vertexColor' : '') + (rawObjectDescription.smoothingGroup === 0 ? '_flat' : '');
				materialOrg = this.materials[materialNameOrg];
				material = this.materials[materialName];

				// both original and derived names do not lead to an existing material => need to use a default material
				if (!Validator.isValid(materialOrg) && !Validator.isValid(material)) {

					var defaultMaterialName = haveVertexColors ? 'vertexColorMaterial' : 'defaultMaterial';
					materialOrg = this.materials[defaultMaterialName];
					this.logger.logWarn('object_group "' + rawObjectDescription.objectName + '_' + rawObjectDescription.groupName + '" was defined with unresolvable material "' + materialNameOrg + '"! Assigning "' + defaultMaterialName + '".');
					materialNameOrg = defaultMaterialName;

					// if names are identical then there is no need for later manipulation
					if (materialNameOrg === materialName) {

						material = materialOrg;
						materialName = defaultMaterialName;
					}
				}
				if (!Validator.isValid(material)) {

					var materialCloneInstructions = {
						materialNameOrg: materialNameOrg,
						materialName: materialName,
						materialProperties: {
							vertexColors: haveVertexColors ? 2 : 0,
							flatShading: rawObjectDescription.smoothingGroup === 0
						}
					};
					var payload = {
						cmd: 'materialData',
						materials: {
							materialCloneInstructions: materialCloneInstructions
						}
					};
					this.callbackBuilder(payload);

					// fake entry for async; sync Parser always works on material references (Builder update directly visible here)
					if (this.useAsync) this.materials[materialName] = materialCloneInstructions;
				}

				if (createMultiMaterial) {

					// re-use material if already used before. Reduces materials array size and eliminates duplicates
					selectedMaterialIndex = materialIndexMapping[materialName];
					if (!selectedMaterialIndex) {

						selectedMaterialIndex = materialIndex;
						materialIndexMapping[materialName] = materialIndex;
						materialNames.push(materialName);
						materialIndex++;
					}
					materialGroupLength = this.useIndices ? rawObjectDescription.indices.length : rawObjectDescription.vertices.length / 3;
					materialGroup = {
						start: materialGroupOffset,
						count: materialGroupLength,
						index: selectedMaterialIndex
					};
					materialGroups.push(materialGroup);
					materialGroupOffset += materialGroupLength;
				} else {

					materialNames.push(materialName);
				}

				vertexFA.set(rawObjectDescription.vertices, vertexFAOffset);
				vertexFAOffset += rawObjectDescription.vertices.length;

				if (indexUA) {

					indexUA.set(rawObjectDescription.indices, indexUAOffset);
					indexUAOffset += rawObjectDescription.indices.length;
				}

				if (colorFA) {

					colorFA.set(rawObjectDescription.colors, colorFAOffset);
					colorFAOffset += rawObjectDescription.colors.length;
				}

				if (normalFA) {

					normalFA.set(rawObjectDescription.normals, normalFAOffset);
					normalFAOffset += rawObjectDescription.normals.length;
				}
				if (uvFA) {

					uvFA.set(rawObjectDescription.uvs, uvFAOffset);
					uvFAOffset += rawObjectDescription.uvs.length;
				}

				if (this.logger.isDebug()) {
					var materialIndexLine = Validator.isValid(selectedMaterialIndex) ? '\n\t\tmaterialIndex: ' + selectedMaterialIndex : '';
					var createdReport = 'Output Object no.: ' + this.outputObjectCount + '\n\t\tgroupName: ' + rawObjectDescription.groupName + materialIndexLine + '\n\t\tmaterialName: ' + rawObjectDescription.materialName + '\n\t\tsmoothingGroup: ' + rawObjectDescription.smoothingGroup + '\n\t\tobjectName: ' + rawObjectDescription.objectName + '\n\t\t#vertices: ' + rawObjectDescription.vertices.length / 3 + '\n\t\t#indices: ' + rawObjectDescription.indices.length + '\n\t\t#colors: ' + rawObjectDescription.colors.length / 3 + '\n\t\t#uvs: ' + rawObjectDescription.uvs.length / 2 + '\n\t\t#normals: ' + rawObjectDescription.normals.length / 3;
					this.logger.logDebug(createdReport);
				}
			}

			this.outputObjectCount++;
			this.callbackBuilder({
				cmd: 'meshData',
				progress: {
					numericalValue: currentByte / this.totalBytes
				},
				params: {
					meshName: result.name
				},
				materials: {
					multiMaterial: createMultiMaterial,
					materialNames: materialNames,
					materialGroups: materialGroups
				},
				buffers: {
					vertices: vertexFA,
					indices: indexUA,
					colors: colorFA,
					normals: normalFA,
					uvs: uvFA
				}
			}, [vertexFA.buffer], Validator.isValid(indexUA) ? [indexUA.buffer] : null, Validator.isValid(colorFA) ? [colorFA.buffer] : null, Validator.isValid(normalFA) ? [normalFA.buffer] : null, Validator.isValid(uvFA) ? [uvFA.buffer] : null);
		};

		return Parser;
	}();

	/**
  * {@link RawMesh} is only used by {@link Parser}.
  * The user of OBJLoader2 does not need to care about this class.
  * It is defined publicly for inclusion in web worker based OBJ loader ({@link THREE.OBJLoader2.WWOBJLoader2})
  */
	var RawMesh = function () {

		function RawMesh(materialPerSmoothingGroup, useIndices, disregardNormals) {
			this.vertices = [];
			this.colors = [];
			this.normals = [];
			this.uvs = [];

			this.useIndices = useIndices === true;
			this.disregardNormals = disregardNormals === true;

			this.objectName = '';
			this.groupName = '';
			this.activeMtlName = '';
			this.mtllibName = '';
			this.reset(materialPerSmoothingGroup);
		}

		RawMesh.prototype.reset = function (materialPerSmoothingGroup) {
			// faces are stored according combined index of group, material and smoothingGroup (0 or not)
			this.subGroups = [];
			this.subGroupInUse = null;
			this.smoothingGroup = {
				splitMaterials: materialPerSmoothingGroup === true,
				normalized: -1,
				real: -1
			};
			// this default index is required as it is possible to define faces without 'g' or 'usemtl'
			this.pushSmoothingGroup(1);

			this.doubleIndicesCount = 0;
			this.faceCount = 0;
			this.mtlCount = 0;
			this.smoothingGroupCount = 0;
		};

		RawMesh.prototype.pushVertex = function (buffer, haveVertexColors) {
			this.vertices.push(parseFloat(buffer[1]));
			this.vertices.push(parseFloat(buffer[2]));
			this.vertices.push(parseFloat(buffer[3]));
			if (haveVertexColors) {

				this.colors.push(parseFloat(buffer[4]));
				this.colors.push(parseFloat(buffer[5]));
				this.colors.push(parseFloat(buffer[6]));
			}
		};

		RawMesh.prototype.pushUv = function (buffer) {
			this.uvs.push(parseFloat(buffer[1]));
			this.uvs.push(parseFloat(buffer[2]));
		};

		RawMesh.prototype.pushNormal = function (buffer) {
			this.normals.push(parseFloat(buffer[1]));
			this.normals.push(parseFloat(buffer[2]));
			this.normals.push(parseFloat(buffer[3]));
		};

		RawMesh.prototype.pushGroup = function (groupName) {
			this.groupName = Validator.verifyInput(groupName, '');
		};

		RawMesh.prototype.pushObject = function (objectName) {
			this.objectName = Validator.verifyInput(objectName, '');
		};

		RawMesh.prototype.pushMtllib = function (mtllibName) {
			this.mtllibName = Validator.verifyInput(mtllibName, '');
		};

		RawMesh.prototype.pushUsemtl = function (mtlName) {
			if (this.activeMtlName === mtlName || !Validator.isValid(mtlName)) return;
			this.activeMtlName = mtlName;
			this.mtlCount++;

			this.verifyIndex();
		};

		RawMesh.prototype.pushSmoothingGroup = function (smoothingGroup) {
			var smoothingGroupInt = parseInt(smoothingGroup);
			if (isNaN(smoothingGroupInt)) {
				smoothingGroupInt = smoothingGroup === "off" ? 0 : 1;
			}

			var smoothCheck = this.smoothingGroup.normalized;
			this.smoothingGroup.normalized = this.smoothingGroup.splitMaterials ? smoothingGroupInt : smoothingGroupInt === 0 ? 0 : 1;
			this.smoothingGroup.real = smoothingGroupInt;

			if (smoothCheck !== smoothingGroupInt) {

				this.smoothingGroupCount++;
				this.verifyIndex();
			}
		};

		RawMesh.prototype.verifyIndex = function () {
			var index = this.activeMtlName + '|' + this.smoothingGroup.normalized;
			this.subGroupInUse = this.subGroups[index];
			if (!Validator.isValid(this.subGroupInUse)) {

				this.subGroupInUse = new RawMeshSubGroup(this.objectName, this.groupName, this.activeMtlName, this.smoothingGroup.normalized);
				this.subGroups[index] = this.subGroupInUse;
			}
		};

		RawMesh.prototype.processFaces = function (buffer, bufferPointer, slashesCount) {
			var bufferLength = bufferPointer - 1;
			var i, length;

			// "f vertex ..."
			if (slashesCount === 0) {

				for (i = 2, length = bufferLength; i < length; i++) {

					this.buildFace(buffer[1]);
					this.buildFace(buffer[i]);
					this.buildFace(buffer[i + 1]);
				}

				// "f vertex/uv ..."
			} else if (bufferLength === slashesCount * 2) {

				for (i = 3, length = bufferLength - 2; i < length; i += 2) {

					this.buildFace(buffer[1], buffer[2]);
					this.buildFace(buffer[i], buffer[i + 1]);
					this.buildFace(buffer[i + 2], buffer[i + 3]);
				}

				// "f vertex/uv/normal ..."
			} else if (bufferLength * 2 === slashesCount * 3) {

				for (i = 4, length = bufferLength - 3; i < length; i += 3) {

					this.buildFace(buffer[1], buffer[2], buffer[3]);
					this.buildFace(buffer[i], buffer[i + 1], buffer[i + 2]);
					this.buildFace(buffer[i + 3], buffer[i + 4], buffer[i + 5]);
				}

				// "f vertex//normal ..."
			} else {

				for (i = 3, length = bufferLength - 2; i < length; i += 2) {

					this.buildFace(buffer[1], undefined, buffer[2]);
					this.buildFace(buffer[i], undefined, buffer[i + 1]);
					this.buildFace(buffer[i + 2], undefined, buffer[i + 3]);
				}
			}
		};

		RawMesh.prototype.buildFace = function (faceIndexV, faceIndexU, faceIndexN) {
			var sgiu = this.subGroupInUse;
			if (this.disregardNormals) faceIndexN = undefined;
			var scope = this;
			var updateRawObjectDescriptionInUse = function updateRawObjectDescriptionInUse() {

				var faceIndexVi = parseInt(faceIndexV);
				var indexPointerV = 3 * (faceIndexVi > 0 ? faceIndexVi - 1 : faceIndexVi + scope.vertices.length / 3);

				var vertices = sgiu.vertices;
				vertices.push(scope.vertices[indexPointerV++]);
				vertices.push(scope.vertices[indexPointerV++]);
				vertices.push(scope.vertices[indexPointerV]);

				var indexPointerC = scope.colors.length > 0 ? indexPointerV : null;
				if (indexPointerC !== null) {

					var colors = sgiu.colors;
					colors.push(scope.colors[indexPointerC++]);
					colors.push(scope.colors[indexPointerC++]);
					colors.push(scope.colors[indexPointerC]);
				}

				if (faceIndexU) {

					var faceIndexUi = parseInt(faceIndexU);
					var indexPointerU = 2 * (faceIndexUi > 0 ? faceIndexUi - 1 : faceIndexUi + scope.uvs.length / 2);
					var uvs = sgiu.uvs;
					uvs.push(scope.uvs[indexPointerU++]);
					uvs.push(scope.uvs[indexPointerU]);
				}
				if (faceIndexN) {

					var faceIndexNi = parseInt(faceIndexN);
					var indexPointerN = 3 * (faceIndexNi > 0 ? faceIndexNi - 1 : faceIndexNi + scope.normals.length / 3);
					var normals = sgiu.normals;
					normals.push(scope.normals[indexPointerN++]);
					normals.push(scope.normals[indexPointerN++]);
					normals.push(scope.normals[indexPointerN]);
				}
			};

			if (this.useIndices) {

				var mappingName = faceIndexV + (faceIndexU ? '_' + faceIndexU : '_n') + (faceIndexN ? '_' + faceIndexN : '_n');
				var indicesPointer = sgiu.indexMappings[mappingName];
				if (Validator.isValid(indicesPointer)) {

					this.doubleIndicesCount++;
				} else {

					indicesPointer = sgiu.vertices.length / 3;
					updateRawObjectDescriptionInUse();
					sgiu.indexMappings[mappingName] = indicesPointer;
					sgiu.indexMappingsCount++;
				}
				sgiu.indices.push(indicesPointer);
			} else {

				updateRawObjectDescriptionInUse();
			}
			this.faceCount++;
		};

		/*
   * Support for lines with or without texture. First element in indexArray is the line identification
   * 0: "f vertex/uv		vertex/uv 		..."
   * 1: "f vertex			vertex 			..."
   */
		RawMesh.prototype.processLines = function (buffer, bufferPointer, slashCount) {
			var i = 1;
			var length;
			var bufferLength = bufferPointer - 1;

			if (bufferLength === slashCount * 2) {

				for (length = bufferLength - 2; i < length; i += 2) {

					this.vertices.push(parseInt(buffer[i]));
					this.uvs.push(parseInt(buffer[i + 1]));
				}
			} else {

				for (length = bufferLength - 1; i < length; i++) {

					this.vertices.push(parseInt(buffer[i]));
				}
			}
		};

		/**
   * Clear any empty rawObjectDescription and calculate absolute vertex, normal and uv counts
   */
		RawMesh.prototype.finalize = function () {
			var rawObjectDescriptionsTemp = [];
			var rawObjectDescription;
			var absoluteVertexCount = 0;
			var absoluteIndexMappingsCount = 0;
			var absoluteIndexCount = 0;
			var absoluteColorCount = 0;
			var absoluteNormalCount = 0;
			var absoluteUvCount = 0;
			var indices;
			for (var name in this.subGroups) {

				rawObjectDescription = this.subGroups[name];
				if (rawObjectDescription.vertices.length > 0) {

					indices = rawObjectDescription.indices;
					if (indices.length > 0 && absoluteIndexMappingsCount > 0) {

						for (var i in indices) {
							indices[i] = indices[i] + absoluteIndexMappingsCount;
						}
					}
					rawObjectDescriptionsTemp.push(rawObjectDescription);
					absoluteVertexCount += rawObjectDescription.vertices.length;
					absoluteIndexMappingsCount += rawObjectDescription.indexMappingsCount;
					absoluteIndexCount += rawObjectDescription.indices.length;
					absoluteColorCount += rawObjectDescription.colors.length;
					absoluteUvCount += rawObjectDescription.uvs.length;
					absoluteNormalCount += rawObjectDescription.normals.length;
				}
			}

			// do not continue if no result
			var result = null;
			if (rawObjectDescriptionsTemp.length > 0) {

				result = {
					name: this.groupName !== '' ? this.groupName : this.objectName,
					subGroups: rawObjectDescriptionsTemp,
					absoluteVertexCount: absoluteVertexCount,
					absoluteIndexCount: absoluteIndexCount,
					absoluteColorCount: absoluteColorCount,
					absoluteNormalCount: absoluteNormalCount,
					absoluteUvCount: absoluteUvCount,
					faceCount: this.faceCount,
					doubleIndicesCount: this.doubleIndicesCount
				};
			}
			return result;
		};

		RawMesh.prototype.createReport = function () {
			var report = {
				objectName: this.objectName,
				groupName: this.groupName,
				mtllibName: this.mtllibName,
				vertexCount: this.vertices.length / 3,
				normalCount: this.normals.length / 3,
				uvCount: this.uvs.length / 2,
				smoothingGroupCount: this.smoothingGroupCount,
				mtlCount: this.mtlCount,
				subGroups: this.subGroups.length
			};

			return report;
		};

		return RawMesh;
	}();

	/**
  * Descriptive information and data (vertices, normals, uvs) to passed on to mesh building function.
  * @class
  *
  * @param {string} objectName Name of the mesh
  * @param {string} groupName Name of the group
  * @param {string} materialName Name of the material
  * @param {number} smoothingGroup Normalized smoothingGroup (0: flat shading, 1: smooth shading)
  */
	var RawMeshSubGroup = function () {

		function RawMeshSubGroup(objectName, groupName, materialName, smoothingGroup) {
			this.objectName = objectName;
			this.groupName = groupName;
			this.materialName = materialName;
			this.smoothingGroup = smoothingGroup;
			this._init();
		}

		RawMeshSubGroup.prototype._init = function () {
			this.vertices = [];
			this.indexMappingsCount = 0;
			this.indexMappings = [];
			this.indices = [];
			this.colors = [];
			this.uvs = [];
			this.normals = [];
		};

		return RawMeshSubGroup;
	}();

	OBJLoader2.prototype._checkFiles = function (resources) {
		var resource;
		var result = {
			mtl: null,
			obj: null
		};
		for (var index in resources) {

			resource = resources[index];
			if (!Validator.isValid(resource.name)) continue;
			if (Validator.isValid(resource.content)) {

				if (resource.extension === 'OBJ') {

					// fast-fail on bad type
					if (!(resource.content instanceof Uint8Array)) throw 'Provided content is not of type arraybuffer! Aborting...';
					result.obj = resource;
				} else if (resource.extension === 'MTL' && Validator.isValid(resource.name)) {

					if (!(typeof resource.content === 'string' || resource.content instanceof String)) throw 'Provided  content is not of type String! Aborting...';
					result.mtl = resource;
				} else if (resource.extension === "ZIP") {
					// ignore

				} else {

					throw 'Unidentified resource "' + resource.name + '": ' + resource.url;
				}
			} else {

				// fast-fail on bad type
				if (!(typeof resource.name === 'string' || resource.name instanceof String)) throw 'Provided file is not properly defined! Aborting...';
				if (resource.extension === 'OBJ') {

					result.obj = resource;
				} else if (resource.extension === 'MTL') {

					result.mtl = resource;
				} else if (resource.extension === "ZIP") {
					// ignore

				} else {

					throw 'Unidentified resource "' + resource.name + '": ' + resource.url;
				}
			}
		}

		return result;
	};

	/**
  * Utility method for loading an mtl file according resource description.
  * @memberOf THREE.OBJLoader2
  *
  * @param {string} url URL to the file
  * @param {Object} content The file content as arraybuffer or text
  * @param {function} callbackOnLoad
  * @param {string} [crossOrigin] CORS value
  */
	OBJLoader2.prototype.loadMtl = function (url, content, callbackOnLoad, crossOrigin) {
		var resource = new THREE.LoaderSupport.ResourceDescriptor(url, 'MTL');
		resource.setContent(content);
		this._loadMtl(resource, callbackOnLoad, crossOrigin);
	};

	/**
  * Utility method for loading an mtl file according resource description.
  * @memberOf THREE.OBJLoader2
  *
  * @param {THREE.LoaderSupport.ResourceDescriptor} resource
  * @param {function} callbackOnLoad
  * @param {string} [crossOrigin] CORS value
  */
	OBJLoader2.prototype._loadMtl = function (resource, callbackOnLoad, crossOrigin) {
		if (THREE.MTLLoader === undefined) console.error('"THREE.MTLLoader" is not available. "THREE.OBJLoader2" requires it for loading MTL files.');
		if (Validator.isValid(resource)) this.logger.logTimeStart('Loading MTL: ' + resource.name);

		var materials = [];
		var scope = this;
		var processMaterials = function processMaterials(materialCreator) {
			var materialCreatorMaterials = [];
			if (Validator.isValid(materialCreator)) {

				materialCreator.preload();
				materialCreatorMaterials = materialCreator.materials;
				for (var materialName in materialCreatorMaterials) {

					if (materialCreatorMaterials.hasOwnProperty(materialName)) {

						materials[materialName] = materialCreatorMaterials[materialName];
					}
				}
			}

			if (Validator.isValid(resource)) scope.logger.logTimeEnd('Loading MTL: ' + resource.name);
			callbackOnLoad(materials);
		};

		var mtlLoader = new THREE.MTLLoader(this.manager);
		crossOrigin = Validator.verifyInput(crossOrigin, 'anonymous');
		mtlLoader.setCrossOrigin(crossOrigin);

		// fast-fail
		if (!Validator.isValid(resource) || !Validator.isValid(resource.content) && !Validator.isValid(resource.url)) {

			processMaterials();
		} else {

			mtlLoader.setPath(resource.path);
			if (Validator.isValid(resource.content)) {

				processMaterials(Validator.isValid(resource.content) ? mtlLoader.parse(resource.content) : null);
			} else if (Validator.isValid(resource.url)) {

				var onError = function onError(event) {
					var output = 'Error occurred while downloading "' + resource.url + '"';
					scope.logger.logError(output + ': ' + event);
					throw output;
				};

				mtlLoader.load(resource.name, processMaterials, undefined, onError);
			}
		}
	};

	return OBJLoader2;
}();

exports.default = THREE.OBJLoader2;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Filipe Caixeta / http://filipecaixeta.com.br
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Description: A THREE loader for PCD ascii and binary files.
 *
 * Limitations: Compressed binary files are not supported.
 *
 */

THREE.PCDLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	this.littleEndian = true;
};

THREE.PCDLoader.prototype = {

	constructor: THREE.PCDLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (data) {

			onLoad(scope.parse(data, url));
		}, onProgress, onError);
	},

	parse: function parse(data, url) {

		function parseHeader(data) {

			var PCDheader = {};
			var result1 = data.search(/[\r\n]DATA\s(\S*)\s/i);
			var result2 = /[\r\n]DATA\s(\S*)\s/i.exec(data.substr(result1 - 1));

			PCDheader.data = result2[1];
			PCDheader.headerLen = result2[0].length + result1;
			PCDheader.str = data.substr(0, PCDheader.headerLen);

			// remove comments

			PCDheader.str = PCDheader.str.replace(/\#.*/gi, '');

			// parse

			PCDheader.version = /VERSION (.*)/i.exec(PCDheader.str);
			PCDheader.fields = /FIELDS (.*)/i.exec(PCDheader.str);
			PCDheader.size = /SIZE (.*)/i.exec(PCDheader.str);
			PCDheader.type = /TYPE (.*)/i.exec(PCDheader.str);
			PCDheader.count = /COUNT (.*)/i.exec(PCDheader.str);
			PCDheader.width = /WIDTH (.*)/i.exec(PCDheader.str);
			PCDheader.height = /HEIGHT (.*)/i.exec(PCDheader.str);
			PCDheader.viewpoint = /VIEWPOINT (.*)/i.exec(PCDheader.str);
			PCDheader.points = /POINTS (.*)/i.exec(PCDheader.str);

			// evaluate

			if (PCDheader.version !== null) PCDheader.version = parseFloat(PCDheader.version[1]);

			if (PCDheader.fields !== null) PCDheader.fields = PCDheader.fields[1].split(' ');

			if (PCDheader.type !== null) PCDheader.type = PCDheader.type[1].split(' ');

			if (PCDheader.width !== null) PCDheader.width = parseInt(PCDheader.width[1]);

			if (PCDheader.height !== null) PCDheader.height = parseInt(PCDheader.height[1]);

			if (PCDheader.viewpoint !== null) PCDheader.viewpoint = PCDheader.viewpoint[1];

			if (PCDheader.points !== null) PCDheader.points = parseInt(PCDheader.points[1], 10);

			if (PCDheader.points === null) PCDheader.points = PCDheader.width * PCDheader.height;

			if (PCDheader.size !== null) {

				PCDheader.size = PCDheader.size[1].split(' ').map(function (x) {

					return parseInt(x, 10);
				});
			}

			if (PCDheader.count !== null) {

				PCDheader.count = PCDheader.count[1].split(' ').map(function (x) {

					return parseInt(x, 10);
				});
			} else {

				PCDheader.count = [];

				for (var i = 0, l = PCDheader.fields.length; i < l; i++) {

					PCDheader.count.push(1);
				}
			}

			PCDheader.offset = {};

			var sizeSum = 0;

			for (var i = 0, l = PCDheader.fields.length; i < l; i++) {

				if (PCDheader.data === 'ascii') {

					PCDheader.offset[PCDheader.fields[i]] = i;
				} else {

					PCDheader.offset[PCDheader.fields[i]] = sizeSum;
					sizeSum += PCDheader.size[i];
				}
			}

			// for binary only

			PCDheader.rowSize = sizeSum;

			return PCDheader;
		}

		var textData = THREE.LoaderUtils.decodeText(data);

		// parse header (always ascii format)

		var PCDheader = parseHeader(textData);

		// parse data

		var position = [];
		var normal = [];
		var color = [];

		// ascii

		if (PCDheader.data === 'ascii') {

			var offset = PCDheader.offset;
			var pcdData = textData.substr(PCDheader.headerLen);
			var lines = pcdData.split('\n');

			for (var i = 0, l = lines.length; i < l; i++) {

				var line = lines[i].split(' ');

				if (offset.x !== undefined) {

					position.push(parseFloat(line[offset.x]));
					position.push(parseFloat(line[offset.y]));
					position.push(parseFloat(line[offset.z]));
				}

				if (offset.rgb !== undefined) {

					var c = new Float32Array([parseFloat(line[offset.rgb])]);
					var dataview = new DataView(c.buffer, 0);
					color.push(dataview.getUint8(0) / 255.0);
					color.push(dataview.getUint8(1) / 255.0);
					color.push(dataview.getUint8(2) / 255.0);
				}

				if (offset.normal_x !== undefined) {

					normal.push(parseFloat(line[offset.normal_x]));
					normal.push(parseFloat(line[offset.normal_y]));
					normal.push(parseFloat(line[offset.normal_z]));
				}
			}
		}

		// binary

		if (PCDheader.data === 'binary_compressed') {

			console.error('THREE.PCDLoader: binary_compressed files are not supported');
			return;
		}

		if (PCDheader.data === 'binary') {

			var dataview = new DataView(data, PCDheader.headerLen);
			var offset = PCDheader.offset;

			for (var i = 0, row = 0; i < PCDheader.points; i++, row += PCDheader.rowSize) {

				if (offset.x !== undefined) {

					position.push(dataview.getFloat32(row + offset.x, this.littleEndian));
					position.push(dataview.getFloat32(row + offset.y, this.littleEndian));
					position.push(dataview.getFloat32(row + offset.z, this.littleEndian));
				}

				if (offset.rgb !== undefined) {

					color.push(dataview.getUint8(row + offset.rgb + 0) / 255.0);
					color.push(dataview.getUint8(row + offset.rgb + 1) / 255.0);
					color.push(dataview.getUint8(row + offset.rgb + 2) / 255.0);
				}

				if (offset.normal_x !== undefined) {

					normal.push(dataview.getFloat32(row + offset.normal_x, this.littleEndian));
					normal.push(dataview.getFloat32(row + offset.normal_y, this.littleEndian));
					normal.push(dataview.getFloat32(row + offset.normal_z, this.littleEndian));
				}
			}
		}

		// build geometry

		var geometry = new THREE.BufferGeometry();

		if (position.length > 0) geometry.addAttribute('position', new THREE.Float32BufferAttribute(position, 3));
		if (normal.length > 0) geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normal, 3));
		if (color.length > 0) geometry.addAttribute('color', new THREE.Float32BufferAttribute(color, 3));

		geometry.computeBoundingSphere();

		// build material

		var material = new THREE.PointsMaterial({ size: 0.005 });

		if (color.length > 0) {

			material.vertexColors = true;
		} else {

			material.color.setHex(Math.random() * 0xffffff);
		}

		// build mesh

		var mesh = new THREE.Points(geometry, material);
		var name = url.split('').reverse().join('');
		name = /([^\/]*)/.exec(name);
		name = name[1].split('').reverse().join('');
		mesh.name = name;

		return mesh;
	}

};

exports.default = THREE.PCDLoader;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author alteredq / http://alteredqualia.com/
 * @author Mugen87 / https://github.com/Mugen87
 */

THREE.PDBLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.PDBLoader.prototype = {

	constructor: THREE.PDBLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	// Based on CanvasMol PDB parser

	parse: function parse(text) {

		function trim(text) {

			return text.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		}

		function capitalize(text) {

			return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
		}

		function hash(s, e) {

			return 's' + Math.min(s, e) + 'e' + Math.max(s, e);
		}

		function parseBond(start, length) {

			var eatom = parseInt(lines[i].substr(start, length));

			if (eatom) {

				var h = hash(satom, eatom);

				if (bhash[h] === undefined) {

					bonds.push([satom - 1, eatom - 1, 1]);
					bhash[h] = bonds.length - 1;
				} else {

					// doesn't really work as almost all PDBs
					// have just normal bonds appearing multiple
					// times instead of being double/triple bonds
					// bonds[bhash[h]][2] += 1;

				}
			}
		}

		function buildGeometry() {

			var build = {
				geometryAtoms: new THREE.BufferGeometry(),
				geometryBonds: new THREE.BufferGeometry(),
				json: {
					atoms: atoms,
					bonds: bonds
				}
			};

			var geometryAtoms = build.geometryAtoms;
			var geometryBonds = build.geometryBonds;

			var i, l;

			var verticesAtoms = [];
			var colorsAtoms = [];
			var verticesBonds = [];

			// atoms

			for (i = 0, l = atoms.length; i < l; i++) {

				var atom = atoms[i];

				var x = atom[0];
				var y = atom[1];
				var z = atom[2];

				verticesAtoms.push(x, y, z);

				var r = atom[3][0] / 255;
				var g = atom[3][1] / 255;
				var b = atom[3][2] / 255;

				colorsAtoms.push(r, g, b);
			}

			// bonds

			for (i = 0, l = bonds.length; i < l; i++) {

				var bond = bonds[i];

				var start = bond[0];
				var end = bond[1];

				verticesBonds.push(verticesAtoms[start * 3 + 0]);
				verticesBonds.push(verticesAtoms[start * 3 + 1]);
				verticesBonds.push(verticesAtoms[start * 3 + 2]);

				verticesBonds.push(verticesAtoms[end * 3 + 0]);
				verticesBonds.push(verticesAtoms[end * 3 + 1]);
				verticesBonds.push(verticesAtoms[end * 3 + 2]);
			}

			// build geometry

			geometryAtoms.addAttribute('position', new THREE.Float32BufferAttribute(verticesAtoms, 3));
			geometryAtoms.addAttribute('color', new THREE.Float32BufferAttribute(colorsAtoms, 3));

			geometryBonds.addAttribute('position', new THREE.Float32BufferAttribute(verticesBonds, 3));

			return build;
		}

		var CPK = { h: [255, 255, 255], he: [217, 255, 255], li: [204, 128, 255], be: [194, 255, 0], b: [255, 181, 181], c: [144, 144, 144], n: [48, 80, 248], o: [255, 13, 13], f: [144, 224, 80], ne: [179, 227, 245], na: [171, 92, 242], mg: [138, 255, 0], al: [191, 166, 166], si: [240, 200, 160], p: [255, 128, 0], s: [255, 255, 48], cl: [31, 240, 31], ar: [128, 209, 227], k: [143, 64, 212], ca: [61, 255, 0], sc: [230, 230, 230], ti: [191, 194, 199], v: [166, 166, 171], cr: [138, 153, 199], mn: [156, 122, 199], fe: [224, 102, 51], co: [240, 144, 160], ni: [80, 208, 80], cu: [200, 128, 51], zn: [125, 128, 176], ga: [194, 143, 143], ge: [102, 143, 143], as: [189, 128, 227], se: [255, 161, 0], br: [166, 41, 41], kr: [92, 184, 209], rb: [112, 46, 176], sr: [0, 255, 0], y: [148, 255, 255], zr: [148, 224, 224], nb: [115, 194, 201], mo: [84, 181, 181], tc: [59, 158, 158], ru: [36, 143, 143], rh: [10, 125, 140], pd: [0, 105, 133], ag: [192, 192, 192], cd: [255, 217, 143], in: [166, 117, 115], sn: [102, 128, 128], sb: [158, 99, 181], te: [212, 122, 0], i: [148, 0, 148], xe: [66, 158, 176], cs: [87, 23, 143], ba: [0, 201, 0], la: [112, 212, 255], ce: [255, 255, 199], pr: [217, 255, 199], nd: [199, 255, 199], pm: [163, 255, 199], sm: [143, 255, 199], eu: [97, 255, 199], gd: [69, 255, 199], tb: [48, 255, 199], dy: [31, 255, 199], ho: [0, 255, 156], er: [0, 230, 117], tm: [0, 212, 82], yb: [0, 191, 56], lu: [0, 171, 36], hf: [77, 194, 255], ta: [77, 166, 255], w: [33, 148, 214], re: [38, 125, 171], os: [38, 102, 150], ir: [23, 84, 135], pt: [208, 208, 224], au: [255, 209, 35], hg: [184, 184, 208], tl: [166, 84, 77], pb: [87, 89, 97], bi: [158, 79, 181], po: [171, 92, 0], at: [117, 79, 69], rn: [66, 130, 150], fr: [66, 0, 102], ra: [0, 125, 0], ac: [112, 171, 250], th: [0, 186, 255], pa: [0, 161, 255], u: [0, 143, 255], np: [0, 128, 255], pu: [0, 107, 255], am: [84, 92, 242], cm: [120, 92, 227], bk: [138, 79, 227], cf: [161, 54, 212], es: [179, 31, 212], fm: [179, 31, 186], md: [179, 13, 166], no: [189, 13, 135], lr: [199, 0, 102], rf: [204, 0, 89], db: [209, 0, 79], sg: [217, 0, 69], bh: [224, 0, 56], hs: [230, 0, 46], mt: [235, 0, 38], ds: [235, 0, 38], rg: [235, 0, 38], cn: [235, 0, 38], uut: [235, 0, 38], uuq: [235, 0, 38], uup: [235, 0, 38], uuh: [235, 0, 38], uus: [235, 0, 38], uuo: [235, 0, 38] };

		var atoms = [];
		var bonds = [];
		var histogram = {};

		var bhash = {};

		var x, y, z, index, e;

		// parse

		var lines = text.split('\n');

		for (var i = 0, l = lines.length; i < l; i++) {

			if (lines[i].substr(0, 4) === 'ATOM' || lines[i].substr(0, 6) === 'HETATM') {

				x = parseFloat(lines[i].substr(30, 7));
				y = parseFloat(lines[i].substr(38, 7));
				z = parseFloat(lines[i].substr(46, 7));
				index = parseInt(lines[i].substr(6, 5)) - 1;

				e = trim(lines[i].substr(76, 2)).toLowerCase();

				if (e === '') {

					e = trim(lines[i].substr(12, 2)).toLowerCase();
				}

				atoms[index] = [x, y, z, CPK[e], capitalize(e)];

				if (histogram[e] === undefined) {

					histogram[e] = 1;
				} else {

					histogram[e] += 1;
				}
			} else if (lines[i].substr(0, 6) === 'CONECT') {

				var satom = parseInt(lines[i].substr(6, 5));

				parseBond(11, 5);
				parseBond(16, 5);
				parseBond(21, 5);
				parseBond(26, 5);
			}
		}

		// build and return geometry

		return buildGeometry();
	}

};

exports.default = THREE.PDBLoader;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */

THREE.PlayCanvasLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.PlayCanvasLoader.prototype = {

	constructor: THREE.PlayCanvasLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.load(url, function (text) {

			onLoad(scope.parse(JSON.parse(text)));
		}, onProgress, onError);
	},

	parse: function parse(json) {

		function parseVertices(data) {

			var attributes = {};

			// create a buffer attribute for each array that contains vertex information

			for (var name in data) {

				var array = data[name];

				var type = array.type;
				var size = array.components;

				var attribute;

				switch (type) {

					case 'float32':
						attribute = new THREE.Float32BufferAttribute(array.data, size);
						break;

					case 'uint8':
						attribute = new THREE.Uint8BufferAttribute(array.data, size);
						break;

					case 'uint16':
						attribute = new THREE.Uint16BufferAttribute(array.data, size);
						break;

					default:
						console.log('THREE.PlayCanvasLoader: Array type "%s" not yet supported.', type);

				}

				attributes[name] = attribute;
			}

			data._attributes = attributes;
		}

		function parseMeshes(data) {

			// create buffer geometry

			var geometry = new THREE.BufferGeometry();

			geometry.setIndex(data.indices);

			var attributes = model.vertices[data.vertices]._attributes;

			for (var name in attributes) {

				var attribute = attributes[name];

				if (name === 'texCoord0') name = 'uv';

				geometry.addAttribute(name, attribute);
			}

			data._geometry = geometry;
		}

		function parseMeshInstances(data) {

			var node = model.nodes[data.node];
			var mesh = model.meshes[data.mesh];

			if (node._geometries === undefined) {

				node._geometries = [];
			}

			node._geometries.push(mesh._geometry);
		}

		function parseNodes(data) {

			var object = new THREE.Group();

			var geometries = data._geometries;

			if (geometries !== undefined) {

				var material = new THREE.MeshPhongMaterial();

				for (var i = 0, l = geometries.length; i < l; i++) {

					var geometry = geometries[i];

					object.add(new THREE.Mesh(geometry, material));
				}
			}

			for (var i = 0, l = data.rotation.length; i < l; i++) {

				data.rotation[i] *= Math.PI / 180;
			}

			//

			object.name = data.name;

			object.position.fromArray(data.position);
			object.rotation.fromArray(data.rotation);
			object.scale.fromArray(data.scale);

			data._object = object;
		}

		//

		var model = json.model;

		for (var i = 0, l = model.vertices.length; i < l; i++) {

			parseVertices(model.vertices[i]);
		}

		for (var i = 0, l = model.meshes.length; i < l; i++) {

			parseMeshes(model.meshes[i]);
		}

		for (var i = 0, l = model.meshInstances.length; i < l; i++) {

			parseMeshInstances(model.meshInstances[i]);
		}

		for (var i = 0, l = model.nodes.length; i < l; i++) {

			parseNodes(model.nodes[i]);
		}

		// setup scene hierarchy

		for (var i = 0, l = model.parents.length; i < l; i++) {

			var parent = model.parents[i];

			if (parent === -1) continue;

			model.nodes[parent]._object.add(model.nodes[i]._object);
		}

		return model.nodes[0]._object;
	}

};

exports.default = THREE.PlayCanvasLoader;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Wei Meng / http://about.me/menway
 *
 * Description: A THREE loader for PLY ASCII files (known as the Polygon
 * File Format or the Stanford Triangle Format).
 *
 * Limitations: ASCII decoding assumes file is UTF-8.
 *
 * Usage:
 *	var loader = new THREE.PLYLoader();
 *	loader.load('./models/ply/ascii/dolphins.ply', function (geometry) {
 *
 *		scene.add( new THREE.Mesh( geometry ) );
 *
 *	} );
 *
 * If the PLY file uses non standard property names, they can be mapped while
 * loading. For example, the following maps the properties
 * “diffuse_(red|green|blue)” in the file to standard color names.
 *
 * loader.setPropertyNameMapping( {
 *	diffuse_red: 'red',
 *	diffuse_green: 'green',
 *	diffuse_blue: 'blue'
 * } );
 *
 */

THREE.PLYLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

	this.propertyNameMapping = {};
};

THREE.PLYLoader.prototype = {

	constructor: THREE.PLYLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(this.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	setPropertyNameMapping: function setPropertyNameMapping(mapping) {

		this.propertyNameMapping = mapping;
	},

	parse: function parse(data) {

		function parseHeader(data) {

			var patternHeader = /ply([\s\S]*)end_header\s/;
			var headerText = '';
			var headerLength = 0;
			var result = patternHeader.exec(data);

			if (result !== null) {

				headerText = result[1];
				headerLength = result[0].length;
			}

			var header = {
				comments: [],
				elements: [],
				headerLength: headerLength
			};

			var lines = headerText.split('\n');
			var currentElement;
			var lineType, lineValues;

			function make_ply_element_property(propertValues, propertyNameMapping) {

				var property = { type: propertValues[0] };

				if (property.type === 'list') {

					property.name = propertValues[3];
					property.countType = propertValues[1];
					property.itemType = propertValues[2];
				} else {

					property.name = propertValues[1];
				}

				if (property.name in propertyNameMapping) {

					property.name = propertyNameMapping[property.name];
				}

				return property;
			}

			for (var i = 0; i < lines.length; i++) {

				var line = lines[i];
				line = line.trim();

				if (line === '') continue;

				lineValues = line.split(/\s+/);
				lineType = lineValues.shift();
				line = lineValues.join(' ');

				switch (lineType) {

					case 'format':

						header.format = lineValues[0];
						header.version = lineValues[1];

						break;

					case 'comment':

						header.comments.push(line);

						break;

					case 'element':

						if (currentElement !== undefined) {

							header.elements.push(currentElement);
						}

						currentElement = {};
						currentElement.name = lineValues[0];
						currentElement.count = parseInt(lineValues[1]);
						currentElement.properties = [];

						break;

					case 'property':

						currentElement.properties.push(make_ply_element_property(lineValues, scope.propertyNameMapping));

						break;

					default:

						console.log('unhandled', lineType, lineValues);

				}
			}

			if (currentElement !== undefined) {

				header.elements.push(currentElement);
			}

			return header;
		}

		function parseASCIINumber(n, type) {

			switch (type) {

				case 'char':case 'uchar':case 'short':case 'ushort':case 'int':case 'uint':
				case 'int8':case 'uint8':case 'int16':case 'uint16':case 'int32':case 'uint32':

					return parseInt(n);

				case 'float':case 'double':case 'float32':case 'float64':

					return parseFloat(n);

			}
		}

		function parseASCIIElement(properties, line) {

			var values = line.split(/\s+/);

			var element = {};

			for (var i = 0; i < properties.length; i++) {

				if (properties[i].type === 'list') {

					var list = [];
					var n = parseASCIINumber(values.shift(), properties[i].countType);

					for (var j = 0; j < n; j++) {

						list.push(parseASCIINumber(values.shift(), properties[i].itemType));
					}

					element[properties[i].name] = list;
				} else {

					element[properties[i].name] = parseASCIINumber(values.shift(), properties[i].type);
				}
			}

			return element;
		}

		function parseASCII(data, header) {

			// PLY ascii format specification, as per http://en.wikipedia.org/wiki/PLY_(file_format)

			var buffer = {
				indices: [],
				vertices: [],
				normals: [],
				uvs: [],
				colors: []
			};

			var result;

			var patternBody = /end_header\s([\s\S]*)$/;
			var body = '';
			if ((result = patternBody.exec(data)) !== null) {

				body = result[1];
			}

			var lines = body.split('\n');
			var currentElement = 0;
			var currentElementCount = 0;

			for (var i = 0; i < lines.length; i++) {

				var line = lines[i];
				line = line.trim();
				if (line === '') {

					continue;
				}

				if (currentElementCount >= header.elements[currentElement].count) {

					currentElement++;
					currentElementCount = 0;
				}

				var element = parseASCIIElement(header.elements[currentElement].properties, line);

				handleElement(buffer, header.elements[currentElement].name, element);

				currentElementCount++;
			}

			return postProcess(buffer);
		}

		function postProcess(buffer) {

			var geometry = new THREE.BufferGeometry();

			// mandatory buffer data

			if (buffer.indices.length > 0) {

				geometry.setIndex(buffer.indices);
			}

			geometry.addAttribute('position', new THREE.Float32BufferAttribute(buffer.vertices, 3));

			// optional buffer data

			if (buffer.normals.length > 0) {

				geometry.addAttribute('normal', new THREE.Float32BufferAttribute(buffer.normals, 3));
			}

			if (buffer.uvs.length > 0) {

				geometry.addAttribute('uv', new THREE.Float32BufferAttribute(buffer.uvs, 2));
			}

			if (buffer.colors.length > 0) {

				geometry.addAttribute('color', new THREE.Float32BufferAttribute(buffer.colors, 3));
			}

			geometry.computeBoundingSphere();

			return geometry;
		}

		function handleElement(buffer, elementName, element) {

			if (elementName === 'vertex') {

				buffer.vertices.push(element.x, element.y, element.z);

				if ('nx' in element && 'ny' in element && 'nz' in element) {

					buffer.normals.push(element.nx, element.ny, element.nz);
				}

				if ('s' in element && 't' in element) {

					buffer.uvs.push(element.s, element.t);
				}

				if ('red' in element && 'green' in element && 'blue' in element) {

					buffer.colors.push(element.red / 255.0, element.green / 255.0, element.blue / 255.0);
				}
			} else if (elementName === 'face') {

				var vertex_indices = element.vertex_indices || element.vertex_index; // issue #9338

				if (vertex_indices.length === 3) {

					buffer.indices.push(vertex_indices[0], vertex_indices[1], vertex_indices[2]);
				} else if (vertex_indices.length === 4) {

					buffer.indices.push(vertex_indices[0], vertex_indices[1], vertex_indices[3]);
					buffer.indices.push(vertex_indices[1], vertex_indices[2], vertex_indices[3]);
				}
			}
		}

		function binaryRead(dataview, at, type, little_endian) {

			switch (type) {

				// corespondences for non-specific length types here match rply:
				case 'int8':case 'char':
					return [dataview.getInt8(at), 1];
				case 'uint8':case 'uchar':
					return [dataview.getUint8(at), 1];
				case 'int16':case 'short':
					return [dataview.getInt16(at, little_endian), 2];
				case 'uint16':case 'ushort':
					return [dataview.getUint16(at, little_endian), 2];
				case 'int32':case 'int':
					return [dataview.getInt32(at, little_endian), 4];
				case 'uint32':case 'uint':
					return [dataview.getUint32(at, little_endian), 4];
				case 'float32':case 'float':
					return [dataview.getFloat32(at, little_endian), 4];
				case 'float64':case 'double':
					return [dataview.getFloat64(at, little_endian), 8];

			}
		}

		function binaryReadElement(dataview, at, properties, little_endian) {

			var element = {};
			var result,
			    read = 0;

			for (var i = 0; i < properties.length; i++) {

				if (properties[i].type === 'list') {

					var list = [];

					result = binaryRead(dataview, at + read, properties[i].countType, little_endian);
					var n = result[0];
					read += result[1];

					for (var j = 0; j < n; j++) {

						result = binaryRead(dataview, at + read, properties[i].itemType, little_endian);
						list.push(result[0]);
						read += result[1];
					}

					element[properties[i].name] = list;
				} else {

					result = binaryRead(dataview, at + read, properties[i].type, little_endian);
					element[properties[i].name] = result[0];
					read += result[1];
				}
			}

			return [element, read];
		}

		function parseBinary(data, header) {

			var buffer = {
				indices: [],
				vertices: [],
				normals: [],
				uvs: [],
				colors: []
			};

			var little_endian = header.format === 'binary_little_endian';
			var body = new DataView(data, header.headerLength);
			var result,
			    loc = 0;

			for (var currentElement = 0; currentElement < header.elements.length; currentElement++) {

				for (var currentElementCount = 0; currentElementCount < header.elements[currentElement].count; currentElementCount++) {

					result = binaryReadElement(body, loc, header.elements[currentElement].properties, little_endian);
					loc += result[1];
					var element = result[0];

					handleElement(buffer, header.elements[currentElement].name, element);
				}
			}

			return postProcess(buffer);
		}

		//

		var geometry;
		var scope = this;

		if (data instanceof ArrayBuffer) {

			var text = THREE.LoaderUtils.decodeText(new Uint8Array(data));
			var header = parseHeader(text);

			geometry = header.format === 'ascii' ? parseASCII(text, header) : parseBinary(data, header);
		} else {

			geometry = parseASCII(data, parseHeader(data));
		}

		return geometry;
	}

};

exports.default = THREE.PLYLoader;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Kevin Chapelier / https://github.com/kchapelier
 * See https://github.com/kchapelier/PRWM for more informations about this file format
 */

(function (THREE) {

	'use strict';

	var bigEndianPlatform = null;

	/**
  * Check if the endianness of the platform is big-endian (most significant bit first)
  * @returns {boolean} True if big-endian, false if little-endian
  */
	function isBigEndianPlatform() {

		if (bigEndianPlatform === null) {

			var buffer = new ArrayBuffer(2),
			    uint8Array = new Uint8Array(buffer),
			    uint16Array = new Uint16Array(buffer);

			uint8Array[0] = 0xAA; // set first byte
			uint8Array[1] = 0xBB; // set second byte
			bigEndianPlatform = uint16Array[0] === 0xAABB;
		}

		return bigEndianPlatform;
	}

	// match the values defined in the spec to the TypedArray types
	var InvertedEncodingTypes = [null, Float32Array, null, Int8Array, Int16Array, null, Int32Array, Uint8Array, Uint16Array, null, Uint32Array];

	// define the method to use on a DataView, corresponding the TypedArray type
	var getMethods = {
		Uint16Array: 'getUint16',
		Uint32Array: 'getUint32',
		Int16Array: 'getInt16',
		Int32Array: 'getInt32',
		Float32Array: 'getFloat32',
		Float64Array: 'getFloat64'
	};

	function copyFromBuffer(sourceArrayBuffer, viewType, position, length, fromBigEndian) {

		var bytesPerElement = viewType.BYTES_PER_ELEMENT,
		    result;

		if (fromBigEndian === isBigEndianPlatform() || bytesPerElement === 1) {

			result = new viewType(sourceArrayBuffer, position, length);
		} else {

			var readView = new DataView(sourceArrayBuffer, position, length * bytesPerElement),
			    getMethod = getMethods[viewType.name],
			    littleEndian = !fromBigEndian,
			    i = 0;

			result = new viewType(length);

			for (; i < length; i++) {

				result[i] = readView[getMethod](i * bytesPerElement, littleEndian);
			}
		}

		return result;
	}

	function decodePrwm(buffer) {

		var array = new Uint8Array(buffer),
		    version = array[0],
		    flags = array[1],
		    indexedGeometry = !!(flags >> 7 & 0x01),
		    indicesType = flags >> 6 & 0x01,
		    bigEndian = (flags >> 5 & 0x01) === 1,
		    attributesNumber = flags & 0x1F,
		    valuesNumber = 0,
		    indicesNumber = 0;

		if (bigEndian) {

			valuesNumber = (array[2] << 16) + (array[3] << 8) + array[4];
			indicesNumber = (array[5] << 16) + (array[6] << 8) + array[7];
		} else {

			valuesNumber = array[2] + (array[3] << 8) + (array[4] << 16);
			indicesNumber = array[5] + (array[6] << 8) + (array[7] << 16);
		}

		/** PRELIMINARY CHECKS **/

		if (version === 0) {

			throw new Error('PRWM decoder: Invalid format version: 0');
		} else if (version !== 1) {

			throw new Error('PRWM decoder: Unsupported format version: ' + version);
		}

		if (!indexedGeometry) {

			if (indicesType !== 0) {

				throw new Error('PRWM decoder: Indices type must be set to 0 for non-indexed geometries');
			} else if (indicesNumber !== 0) {

				throw new Error('PRWM decoder: Number of indices must be set to 0 for non-indexed geometries');
			}
		}

		/** PARSING **/

		var pos = 8;

		var attributes = {},
		    attributeName,
		    char,
		    attributeType,
		    cardinality,
		    encodingType,
		    arrayType,
		    values,
		    indices,
		    i;

		for (i = 0; i < attributesNumber; i++) {

			attributeName = '';

			while (pos < array.length) {

				char = array[pos];
				pos++;

				if (char === 0) {

					break;
				} else {

					attributeName += String.fromCharCode(char);
				}
			}

			flags = array[pos];

			attributeType = flags >> 7 & 0x01;
			cardinality = (flags >> 4 & 0x03) + 1;
			encodingType = flags & 0x0F;
			arrayType = InvertedEncodingTypes[encodingType];

			pos++;

			// padding to next multiple of 4
			pos = Math.ceil(pos / 4) * 4;

			values = copyFromBuffer(buffer, arrayType, pos, cardinality * valuesNumber, bigEndian);

			pos += arrayType.BYTES_PER_ELEMENT * cardinality * valuesNumber;

			attributes[attributeName] = {
				type: attributeType,
				cardinality: cardinality,
				values: values
			};
		}

		pos = Math.ceil(pos / 4) * 4;

		indices = null;

		if (indexedGeometry) {

			indices = copyFromBuffer(buffer, indicesType === 1 ? Uint32Array : Uint16Array, pos, indicesNumber, bigEndian);
		}

		return {
			version: version,
			attributes: attributes,
			indices: indices
		};
	}

	// Define the public interface

	THREE.PRWMLoader = function PRWMLoader(manager) {

		this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	};

	THREE.PRWMLoader.prototype = {

		constructor: THREE.PRWMLoader,

		load: function load(url, onLoad, onProgress, onError) {

			var scope = this;

			var loader = new THREE.FileLoader(scope.manager);
			loader.setResponseType('arraybuffer');

			url = url.replace(/\*/g, isBigEndianPlatform() ? 'be' : 'le');

			loader.load(url, function (arrayBuffer) {

				onLoad(scope.parse(arrayBuffer));
			}, onProgress, onError);
		},

		parse: function parse(arrayBuffer) {

			console.time('PRWMLoader');

			var data = decodePrwm(arrayBuffer),
			    attributesKey = Object.keys(data.attributes),
			    bufferGeometry = new THREE.BufferGeometry(),
			    attribute,
			    i;

			for (i = 0; i < attributesKey.length; i++) {

				attribute = data.attributes[attributesKey[i]];
				bufferGeometry.addAttribute(attributesKey[i], new THREE.BufferAttribute(attribute.values, attribute.cardinality, attribute.normalized));
			}

			if (data.indices !== null) {

				bufferGeometry.setIndex(new THREE.BufferAttribute(data.indices, 1));
			}

			console.timeEnd('PRWMLoader');

			return bufferGeometry;
		}

	};

	THREE.PRWMLoader.isBigEndianPlatform = function () {

		return isBigEndianPlatform();
	};
})(THREE);

exports.default = THREE.PRWMLoader;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 *	 PVRLoader
 *   Author: pierre lepers
 *   Date: 17/09/2014 11:09
 *
 *	 PVR v2 (legacy) parser
 *   TODO : Add Support for PVR v3 format
 *   TODO : implement loadMipmaps option
 */

THREE.PVRLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

	this._parser = THREE.PVRLoader.parse;
};

THREE.PVRLoader.prototype = Object.create(THREE.CompressedTextureLoader.prototype);
THREE.PVRLoader.prototype.constructor = THREE.PVRLoader;

THREE.PVRLoader.parse = function (buffer, loadMipmaps) {

	var headerLengthInt = 13;
	var header = new Uint32Array(buffer, 0, headerLengthInt);

	var pvrDatas = {
		buffer: buffer,
		header: header,
		loadMipmaps: loadMipmaps
	};

	if (header[0] === 0x03525650) {

		// PVR v3

		return THREE.PVRLoader._parseV3(pvrDatas);
	} else if (header[11] === 0x21525650) {

		// PVR v2

		return THREE.PVRLoader._parseV2(pvrDatas);
	} else {

		console.error('THREE.PVRLoader: Unknown PVR format.');
	}
};

THREE.PVRLoader._parseV3 = function (pvrDatas) {

	var header = pvrDatas.header;
	var bpp, format;

	var metaLen = header[12],
	    pixelFormat = header[2],
	    height = header[6],
	    width = header[7],

	// numSurfs = header[ 9 ],
	numFaces = header[10],
	    numMipmaps = header[11];

	switch (pixelFormat) {

		case 0:
			// PVRTC 2bpp RGB
			bpp = 2;
			format = THREE.RGB_PVRTC_2BPPV1_Format;
			break;

		case 1:
			// PVRTC 2bpp RGBA
			bpp = 2;
			format = THREE.RGBA_PVRTC_2BPPV1_Format;
			break;

		case 2:
			// PVRTC 4bpp RGB
			bpp = 4;
			format = THREE.RGB_PVRTC_4BPPV1_Format;
			break;

		case 3:
			// PVRTC 4bpp RGBA
			bpp = 4;
			format = THREE.RGBA_PVRTC_4BPPV1_Format;
			break;

		default:
			console.error('THREE.PVRLoader: Unsupported PVR format:', pixelFormat);

	}

	pvrDatas.dataPtr = 52 + metaLen;
	pvrDatas.bpp = bpp;
	pvrDatas.format = format;
	pvrDatas.width = width;
	pvrDatas.height = height;
	pvrDatas.numSurfaces = numFaces;
	pvrDatas.numMipmaps = numMipmaps;
	pvrDatas.isCubemap = numFaces === 6;

	return THREE.PVRLoader._extract(pvrDatas);
};

THREE.PVRLoader._parseV2 = function (pvrDatas) {

	var header = pvrDatas.header;

	var headerLength = header[0],
	    height = header[1],
	    width = header[2],
	    numMipmaps = header[3],
	    flags = header[4],

	// dataLength = header[ 5 ],
	// bpp =  header[ 6 ],
	// bitmaskRed = header[ 7 ],
	// bitmaskGreen = header[ 8 ],
	// bitmaskBlue = header[ 9 ],
	bitmaskAlpha = header[10],

	// pvrTag = header[ 11 ],
	numSurfs = header[12];

	var TYPE_MASK = 0xff;
	var PVRTC_2 = 24,
	    PVRTC_4 = 25;

	var formatFlags = flags & TYPE_MASK;

	var bpp, format;
	var _hasAlpha = bitmaskAlpha > 0;

	if (formatFlags === PVRTC_4) {

		format = _hasAlpha ? THREE.RGBA_PVRTC_4BPPV1_Format : THREE.RGB_PVRTC_4BPPV1_Format;
		bpp = 4;
	} else if (formatFlags === PVRTC_2) {

		format = _hasAlpha ? THREE.RGBA_PVRTC_2BPPV1_Format : THREE.RGB_PVRTC_2BPPV1_Format;
		bpp = 2;
	} else {

		console.error('THREE.PVRLoader: Unknown PVR format:', formatFlags);
	}

	pvrDatas.dataPtr = headerLength;
	pvrDatas.bpp = bpp;
	pvrDatas.format = format;
	pvrDatas.width = width;
	pvrDatas.height = height;
	pvrDatas.numSurfaces = numSurfs;
	pvrDatas.numMipmaps = numMipmaps + 1;

	// guess cubemap type seems tricky in v2
	// it juste a pvr containing 6 surface (no explicit cubemap type)
	pvrDatas.isCubemap = numSurfs === 6;

	return THREE.PVRLoader._extract(pvrDatas);
};

THREE.PVRLoader._extract = function (pvrDatas) {

	var pvr = {
		mipmaps: [],
		width: pvrDatas.width,
		height: pvrDatas.height,
		format: pvrDatas.format,
		mipmapCount: pvrDatas.numMipmaps,
		isCubemap: pvrDatas.isCubemap
	};

	var buffer = pvrDatas.buffer;

	var dataOffset = pvrDatas.dataPtr,
	    bpp = pvrDatas.bpp,
	    numSurfs = pvrDatas.numSurfaces,
	    dataSize = 0,
	    blockSize = 0,
	    blockWidth = 0,
	    blockHeight = 0,
	    widthBlocks = 0,
	    heightBlocks = 0;

	if (bpp === 2) {

		blockWidth = 8;
		blockHeight = 4;
	} else {

		blockWidth = 4;
		blockHeight = 4;
	}

	blockSize = blockWidth * blockHeight * bpp / 8;

	pvr.mipmaps.length = pvrDatas.numMipmaps * numSurfs;

	var mipLevel = 0;

	while (mipLevel < pvrDatas.numMipmaps) {

		var sWidth = pvrDatas.width >> mipLevel,
		    sHeight = pvrDatas.height >> mipLevel;

		widthBlocks = sWidth / blockWidth;
		heightBlocks = sHeight / blockHeight;

		// Clamp to minimum number of blocks
		if (widthBlocks < 2) widthBlocks = 2;
		if (heightBlocks < 2) heightBlocks = 2;

		dataSize = widthBlocks * heightBlocks * blockSize;

		for (var surfIndex = 0; surfIndex < numSurfs; surfIndex++) {

			var byteArray = new Uint8Array(buffer, dataOffset, dataSize);

			var mipmap = {
				data: byteArray,
				width: sWidth,
				height: sHeight
			};

			pvr.mipmaps[surfIndex * pvrDatas.numMipmaps + mipLevel] = mipmap;

			dataOffset += dataSize;
		}

		mipLevel++;
	}

	return pvr;
};

exports.default = THREE.PVRLoader;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author Nikos M. / https://github.com/foo123/
 */

// https://github.com/mrdoob/three.js/issues/5552
// http://en.wikipedia.org/wiki/RGBE_image_format

THREE.HDRLoader = THREE.RGBELoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

// extend THREE.DataTextureLoader
THREE.RGBELoader.prototype = Object.create(THREE.DataTextureLoader.prototype);

// adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
THREE.RGBELoader.prototype._parser = function (buffer) {

	var
	/* return codes for rgbe routines */
	RGBE_RETURN_SUCCESS = 0,
	    RGBE_RETURN_FAILURE = -1,


	/* default error routine.  change this to change error handling */
	rgbe_read_error = 1,
	    rgbe_write_error = 2,
	    rgbe_format_error = 3,
	    rgbe_memory_error = 4,
	    rgbe_error = function rgbe_error(rgbe_error_code, msg) {

		switch (rgbe_error_code) {

			case rgbe_read_error:
				console.error("THREE.RGBELoader Read Error: " + (msg || ''));
				break;
			case rgbe_write_error:
				console.error("THREE.RGBELoader Write Error: " + (msg || ''));
				break;
			case rgbe_format_error:
				console.error("THREE.RGBELoader Bad File Format: " + (msg || ''));
				break;
			default:
			case rgbe_memory_error:
				console.error("THREE.RGBELoader: Error: " + (msg || ''));

		}
		return RGBE_RETURN_FAILURE;
	},


	/* offsets to red, green, and blue components in a data (float) pixel */
	RGBE_DATA_RED = 0,
	    RGBE_DATA_GREEN = 1,
	    RGBE_DATA_BLUE = 2,


	/* number of floats per pixel, use 4 since stored in rgba image format */
	RGBE_DATA_SIZE = 4,


	/* flags indicating which fields in an rgbe_header_info are valid */
	RGBE_VALID_PROGRAMTYPE = 1,
	    RGBE_VALID_FORMAT = 2,
	    RGBE_VALID_DIMENSIONS = 4,
	    NEWLINE = "\n",
	    fgets = function fgets(buffer, lineLimit, consume) {

		lineLimit = !lineLimit ? 1024 : lineLimit;
		var p = buffer.pos,
		    i = -1,
		    len = 0,
		    s = '',
		    chunkSize = 128,
		    chunk = String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
		while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer.byteLength) {

			s += chunk;len += chunk.length;
			p += chunkSize;
			chunk += String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
		}

		if (-1 < i) {

			/*for (i=l-1; i>=0; i--) {
   	byteCode = m.charCodeAt(i);
   	if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
   	else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
   	if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
   }*/
			if (false !== consume) buffer.pos += len + i + 1;
			return s + chunk.slice(0, i);
		}
		return false;
	},


	/* minimal header reading.  modify if you want to parse more information */
	RGBE_ReadHeader = function RGBE_ReadHeader(buffer) {

		var line,
		    match,


		// regexes to parse header info fields
		magic_token_re = /^#\?(\S+)$/,
		    gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
		    exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
		    format_re = /^\s*FORMAT=(\S+)\s*$/,
		    dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,


		// RGBE format header struct
		header = {

			valid: 0, /* indicate which fields are valid */

			string: '', /* the actual header string */

			comments: '', /* comments found in header */

			programtype: 'RGBE', /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */

			format: '', /* RGBE format, default 32-bit_rle_rgbe */

			gamma: 1.0, /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */

			exposure: 1.0, /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */

			width: 0, height: 0 /* image dimensions, width/height */

		};

		if (buffer.pos >= buffer.byteLength || !(line = fgets(buffer))) {

			return rgbe_error(rgbe_read_error, "no header found");
		}
		/* if you want to require the magic token then uncomment the next line */
		if (!(match = line.match(magic_token_re))) {

			return rgbe_error(rgbe_format_error, "bad initial token");
		}
		header.valid |= RGBE_VALID_PROGRAMTYPE;
		header.programtype = match[1];
		header.string += line + "\n";

		while (true) {

			line = fgets(buffer);
			if (false === line) break;
			header.string += line + "\n";

			if ('#' === line.charAt(0)) {

				header.comments += line + "\n";
				continue; // comment line
			}

			if (match = line.match(gamma_re)) {

				header.gamma = parseFloat(match[1], 10);
			}
			if (match = line.match(exposure_re)) {

				header.exposure = parseFloat(match[1], 10);
			}
			if (match = line.match(format_re)) {

				header.valid |= RGBE_VALID_FORMAT;
				header.format = match[1]; //'32-bit_rle_rgbe';
			}
			if (match = line.match(dimensions_re)) {

				header.valid |= RGBE_VALID_DIMENSIONS;
				header.height = parseInt(match[1], 10);
				header.width = parseInt(match[2], 10);
			}

			if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
		}

		if (!(header.valid & RGBE_VALID_FORMAT)) {

			return rgbe_error(rgbe_format_error, "missing format specifier");
		}
		if (!(header.valid & RGBE_VALID_DIMENSIONS)) {

			return rgbe_error(rgbe_format_error, "missing image size specifier");
		}

		return header;
	},
	    RGBE_ReadPixels_RLE = function RGBE_ReadPixels_RLE(buffer, w, h) {

		var data_rgba,
		    offset,
		    pos,
		    count,
		    byteValue,
		    scanline_buffer,
		    ptr,
		    ptr_end,
		    i,
		    l,
		    off,
		    isEncodedRun,
		    scanline_width = w,
		    num_scanlines = h,
		    rgbeStart;

		if (
		// run length encoding is not allowed so read flat
		scanline_width < 8 || scanline_width > 0x7fff ||
		// this file is not run length encoded
		2 !== buffer[0] || 2 !== buffer[1] || buffer[2] & 0x80) {

			// return the flat buffer
			return new Uint8Array(buffer);
		}

		if (scanline_width !== (buffer[2] << 8 | buffer[3])) {

			return rgbe_error(rgbe_format_error, "wrong scanline width");
		}

		data_rgba = new Uint8Array(4 * w * h);

		if (!data_rgba || !data_rgba.length) {

			return rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
		}

		offset = 0;pos = 0;ptr_end = 4 * scanline_width;
		rgbeStart = new Uint8Array(4);
		scanline_buffer = new Uint8Array(ptr_end);

		// read in each successive scanline
		while (num_scanlines > 0 && pos < buffer.byteLength) {

			if (pos + 4 > buffer.byteLength) {

				return rgbe_error(rgbe_read_error);
			}

			rgbeStart[0] = buffer[pos++];
			rgbeStart[1] = buffer[pos++];
			rgbeStart[2] = buffer[pos++];
			rgbeStart[3] = buffer[pos++];

			if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {

				return rgbe_error(rgbe_format_error, "bad rgbe scanline format");
			}

			// read each of the four channels for the scanline into the buffer
			// first red, then green, then blue, then exponent
			ptr = 0;
			while (ptr < ptr_end && pos < buffer.byteLength) {

				count = buffer[pos++];
				isEncodedRun = count > 128;
				if (isEncodedRun) count -= 128;

				if (0 === count || ptr + count > ptr_end) {

					return rgbe_error(rgbe_format_error, "bad scanline data");
				}

				if (isEncodedRun) {

					// a (encoded) run of the same value
					byteValue = buffer[pos++];
					for (i = 0; i < count; i++) {

						scanline_buffer[ptr++] = byteValue;
					}
					//ptr += count;
				} else {

					// a literal-run
					scanline_buffer.set(buffer.subarray(pos, pos + count), ptr);
					ptr += count;pos += count;
				}
			}

			// now convert data from buffer into rgba
			// first red, then green, then blue, then exponent (alpha)
			l = scanline_width; //scanline_buffer.byteLength;
			for (i = 0; i < l; i++) {

				off = 0;
				data_rgba[offset] = scanline_buffer[i + off];
				off += scanline_width; //1;
				data_rgba[offset + 1] = scanline_buffer[i + off];
				off += scanline_width; //1;
				data_rgba[offset + 2] = scanline_buffer[i + off];
				off += scanline_width; //1;
				data_rgba[offset + 3] = scanline_buffer[i + off];
				offset += 4;
			}

			num_scanlines--;
		}

		return data_rgba;
	};

	var byteArray = new Uint8Array(buffer),
	    byteLength = byteArray.byteLength;
	byteArray.pos = 0;
	var rgbe_header_info = RGBE_ReadHeader(byteArray);

	if (RGBE_RETURN_FAILURE !== rgbe_header_info) {

		var w = rgbe_header_info.width,
		    h = rgbe_header_info.height,
		    image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
		if (RGBE_RETURN_FAILURE !== image_rgba_data) {

			return {
				width: w, height: h,
				data: image_rgba_data,
				header: rgbe_header_info.string,
				gamma: rgbe_header_info.gamma,
				exposure: rgbe_header_info.exposure,
				format: THREE.RGBEFormat, // handled as THREE.RGBAFormat in shaders
				type: THREE.UnsignedByteType
			};
		}
	}
	return null;
};

exports.default = THREE.RGBELoader;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author aleeper / http://adamleeper.com/
 * @author mrdoob / http://mrdoob.com/
 * @author gero3 / https://github.com/gero3
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.
 *
 * Supports both binary and ASCII encoded files, with automatic detection of type.
 *
 * The loader returns a non-indexed buffer geometry.
 *
 * Limitations:
 *  Binary decoding supports "Magics" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).
 *  There is perhaps some question as to how valid it is to always assume little-endian-ness.
 *  ASCII decoding assumes file is UTF-8.
 *
 * Usage:
 *  var loader = new THREE.STLLoader();
 *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
 *    scene.add( new THREE.Mesh( geometry ) );
 *  });
 *
 * For binary STLs geometry might contain colors for vertices. To use it:
 *  // use the same code to load STL as above
 *  if (geometry.hasColors) {
 *    material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
 *  } else { .... }
 *  var mesh = new THREE.Mesh( geometry, material );
 */

THREE.STLLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.STLLoader.prototype = {

	constructor: THREE.STLLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (text) {

			try {

				onLoad(scope.parse(text));
			} catch (exception) {

				if (onError) {

					onError(exception);
				}
			}
		}, onProgress, onError);
	},

	parse: function parse(data) {

		function isBinary(data) {

			var expect, face_size, n_faces, reader;
			reader = new DataView(data);
			face_size = 32 / 8 * 3 + 32 / 8 * 3 * 3 + 16 / 8;
			n_faces = reader.getUint32(80, true);
			expect = 80 + 32 / 8 + n_faces * face_size;

			if (expect === reader.byteLength) {

				return true;
			}

			// An ASCII STL data must begin with 'solid ' as the first six bytes.
			// However, ASCII STLs lacking the SPACE after the 'd' are known to be
			// plentiful.  So, check the first 5 bytes for 'solid'.

			// US-ASCII ordinal values for 's', 'o', 'l', 'i', 'd'

			var solid = [115, 111, 108, 105, 100];

			for (var i = 0; i < 5; i++) {

				// If solid[ i ] does not match the i-th byte, then it is not an
				// ASCII STL; hence, it is binary and return true.

				if (solid[i] != reader.getUint8(i, false)) return true;
			}

			// First 5 bytes read "solid"; declare it to be an ASCII STL

			return false;
		}

		function parseBinary(data) {

			var reader = new DataView(data);
			var faces = reader.getUint32(80, true);

			var r,
			    g,
			    b,
			    hasColors = false,
			    colors;
			var defaultR, defaultG, defaultB, alpha;

			// process STL header
			// check for default color in header ("COLOR=rgba" sequence).

			for (var index = 0; index < 80 - 10; index++) {

				if (reader.getUint32(index, false) == 0x434F4C4F /*COLO*/ && reader.getUint8(index + 4) == 0x52 /*'R'*/ && reader.getUint8(index + 5) == 0x3D /*'='*/) {

					hasColors = true;
					colors = [];

					defaultR = reader.getUint8(index + 6) / 255;
					defaultG = reader.getUint8(index + 7) / 255;
					defaultB = reader.getUint8(index + 8) / 255;
					alpha = reader.getUint8(index + 9) / 255;
				}
			}

			var dataOffset = 84;
			var faceLength = 12 * 4 + 2;

			var geometry = new THREE.BufferGeometry();

			var vertices = [];
			var normals = [];

			for (var face = 0; face < faces; face++) {

				var start = dataOffset + face * faceLength;
				var normalX = reader.getFloat32(start, true);
				var normalY = reader.getFloat32(start + 4, true);
				var normalZ = reader.getFloat32(start + 8, true);

				if (hasColors) {

					var packedColor = reader.getUint16(start + 48, true);

					if ((packedColor & 0x8000) === 0) {

						// facet has its own unique color

						r = (packedColor & 0x1F) / 31;
						g = (packedColor >> 5 & 0x1F) / 31;
						b = (packedColor >> 10 & 0x1F) / 31;
					} else {

						r = defaultR;
						g = defaultG;
						b = defaultB;
					}
				}

				for (var i = 1; i <= 3; i++) {

					var vertexstart = start + i * 12;

					vertices.push(reader.getFloat32(vertexstart, true));
					vertices.push(reader.getFloat32(vertexstart + 4, true));
					vertices.push(reader.getFloat32(vertexstart + 8, true));

					normals.push(normalX, normalY, normalZ);

					if (hasColors) {

						colors.push(r, g, b);
					}
				}
			}

			geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
			geometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));

			if (hasColors) {

				geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
				geometry.hasColors = true;
				geometry.alpha = alpha;
			}

			return geometry;
		}

		function parseASCII(data) {

			var geometry = new THREE.BufferGeometry();
			var patternFace = /facet([\s\S]*?)endfacet/g;
			var faceCounter = 0;

			var patternFloat = /[\s]+([+-]?(?:\d+.\d+|\d+.|\d+|.\d+)(?:[eE][+-]?\d+)?)/.source;
			var patternVertex = new RegExp('vertex' + patternFloat + patternFloat + patternFloat, 'g');
			var patternNormal = new RegExp('normal' + patternFloat + patternFloat + patternFloat, 'g');

			var vertices = [];
			var normals = [];

			var normal = new THREE.Vector3();

			var result;

			while ((result = patternFace.exec(data)) !== null) {

				var vertexCountPerFace = 0;
				var normalCountPerFace = 0;

				var text = result[0];

				while ((result = patternNormal.exec(text)) !== null) {

					normal.x = parseFloat(result[1]);
					normal.y = parseFloat(result[2]);
					normal.z = parseFloat(result[3]);
					normalCountPerFace++;
				}

				while ((result = patternVertex.exec(text)) !== null) {

					vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
					normals.push(normal.x, normal.y, normal.z);
					vertexCountPerFace++;
				}

				// every face have to own ONE valid normal

				if (normalCountPerFace !== 1) {

					console.error('THREE.STLLoader: Something isn\'t right with the normal of face number ' + faceCounter);
				}

				// each face have to own THREE valid vertices

				if (vertexCountPerFace !== 3) {

					console.error('THREE.STLLoader: Something isn\'t right with the vertices of face number ' + faceCounter);
				}

				faceCounter++;
			}

			geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
			geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));

			return geometry;
		}

		function ensureString(buffer) {

			if (typeof buffer !== 'string') {

				return THREE.LoaderUtils.decodeText(new Uint8Array(buffer));
			}

			return buffer;
		}

		function ensureBinary(buffer) {

			if (typeof buffer === 'string') {

				var array_buffer = new Uint8Array(buffer.length);
				for (var i = 0; i < buffer.length; i++) {

					array_buffer[i] = buffer.charCodeAt(i) & 0xff; // implicitly assumes little-endian
				}
				return array_buffer.buffer || array_buffer;
			} else {

				return buffer;
			}
		}

		// start

		var binData = ensureBinary(data);

		return isBinary(binData) ? parseBinary(binData) : parseASCII(ensureString(data));
	}

};

exports.default = THREE.STLLoader;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 * @author zz85 / http://joshuakoo.com/
 */

THREE.SVGLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.SVGLoader.prototype = {

	constructor: THREE.SVGLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var parser = new DOMParser();

		var loader = new THREE.FileLoader(scope.manager);
		loader.load(url, function (svgString) {

			var doc = parser.parseFromString(svgString, 'image/svg+xml'); // application/xml

			onLoad(doc.documentElement);
		}, onProgress, onError);
	}

};

exports.default = THREE.SVGLoader;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Autodesk 3DS threee.js file loader, based on lib3ds.
 *
 * Loads geometry with uv and materials basic properties with texture support.
 *
 * @author @tentone
 * @author @timknip
 * @class TDSLoader
 * @constructor
 */



Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

THREE.TDSLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	this.debug = false;

	this.group = null;
	this.position = 0;

	this.materials = [];
	this.meshes = [];
};

THREE.TDSLoader.prototype = {

	constructor: THREE.TDSLoader,

	/**
  * Load 3ds file from url.
  *
  * @method load
  * @param {[type]} url URL for the file.
  * @param {Function} onLoad onLoad callback, receives group Object3D as argument.
  * @param {Function} onProgress onProgress callback.
  * @param {Function} onError onError callback.
  */
	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var path = this.path !== undefined ? this.path : THREE.LoaderUtils.extractUrlBase(url);

		var loader = new THREE.FileLoader(this.manager);

		loader.setResponseType('arraybuffer');

		loader.load(url, function (data) {

			onLoad(scope.parse(data, path));
		}, onProgress, onError);
	},

	/**
  * Parse arraybuffer data and load 3ds file.
  *
  * @method parse
  * @param {ArrayBuffer} arraybuffer Arraybuffer data to be loaded.
  * @param {String} path Path for external resources.
  * @return {Object3D} Group loaded from 3ds file.
  */
	parse: function parse(arraybuffer, path) {

		this.group = new THREE.Group();
		this.position = 0;
		this.materials = [];
		this.meshes = [];

		this.readFile(arraybuffer, path);

		for (var i = 0; i < this.meshes.length; i++) {

			this.group.add(this.meshes[i]);
		}

		return this.group;
	},

	/**
  * Decode file content to read 3ds data.
  *
  * @method readFile
  * @param {ArrayBuffer} arraybuffer Arraybuffer data to be loaded.
  */
	readFile: function readFile(arraybuffer, path) {

		var data = new DataView(arraybuffer);
		var chunk = this.readChunk(data);

		if (chunk.id === MLIBMAGIC || chunk.id === CMAGIC || chunk.id === M3DMAGIC) {

			var next = this.nextChunk(data, chunk);

			while (next !== 0) {

				if (next === M3D_VERSION) {

					var version = this.readDWord(data);
					this.debugMessage('3DS file version: ' + version);
				} else if (next === MDATA) {

					this.resetPosition(data);
					this.readMeshData(data, path);
				} else {

					this.debugMessage('Unknown main chunk: ' + next.toString(16));
				}

				next = this.nextChunk(data, chunk);
			}
		}

		this.debugMessage('Parsed ' + this.meshes.length + ' meshes');
	},

	/**
  * Read mesh data chunk.
  *
  * @method readMeshData
  * @param {Dataview} data Dataview in use.
  */
	readMeshData: function readMeshData(data, path) {

		var chunk = this.readChunk(data);
		var next = this.nextChunk(data, chunk);

		while (next !== 0) {

			if (next === MESH_VERSION) {

				var version = +this.readDWord(data);
				this.debugMessage('Mesh Version: ' + version);
			} else if (next === MASTER_SCALE) {

				var scale = this.readFloat(data);
				this.debugMessage('Master scale: ' + scale);
				this.group.scale.set(scale, scale, scale);
			} else if (next === NAMED_OBJECT) {

				this.debugMessage('Named Object');
				this.resetPosition(data);
				this.readNamedObject(data);
			} else if (next === MAT_ENTRY) {

				this.debugMessage('Material');
				this.resetPosition(data);
				this.readMaterialEntry(data, path);
			} else {

				this.debugMessage('Unknown MDATA chunk: ' + next.toString(16));
			}

			next = this.nextChunk(data, chunk);
		}
	},

	/**
  * Read named object chunk.
  *
  * @method readNamedObject
  * @param {Dataview} data Dataview in use.
  */
	readNamedObject: function readNamedObject(data) {

		var chunk = this.readChunk(data);
		var name = this.readString(data, 64);
		chunk.cur = this.position;

		var next = this.nextChunk(data, chunk);
		while (next !== 0) {

			if (next === N_TRI_OBJECT) {

				this.resetPosition(data);
				var mesh = this.readMesh(data);
				mesh.name = name;
				this.meshes.push(mesh);
			} else {

				this.debugMessage('Unknown named object chunk: ' + next.toString(16));
			}

			next = this.nextChunk(data, chunk);
		}

		this.endChunk(chunk);
	},

	/**
  * Read material data chunk and add it to the material list.
  *
  * @method readMaterialEntry
  * @param {Dataview} data Dataview in use.
  */
	readMaterialEntry: function readMaterialEntry(data, path) {

		var chunk = this.readChunk(data);
		var next = this.nextChunk(data, chunk);
		var material = new THREE.MeshPhongMaterial();

		while (next !== 0) {

			if (next === MAT_NAME) {

				material.name = this.readString(data, 64);
				this.debugMessage('   Name: ' + material.name);
			} else if (next === MAT_WIRE) {

				this.debugMessage('   Wireframe');
				material.wireframe = true;
			} else if (next === MAT_WIRE_SIZE) {

				var value = this.readByte(data);
				material.wireframeLinewidth = value;
				this.debugMessage('   Wireframe Thickness: ' + value);
			} else if (next === MAT_TWO_SIDE) {

				material.side = THREE.DoubleSide;
				this.debugMessage('   DoubleSided');
			} else if (next === MAT_ADDITIVE) {

				this.debugMessage('   Additive Blending');
				material.blending = THREE.AdditiveBlending;
			} else if (next === MAT_DIFFUSE) {

				this.debugMessage('   Diffuse Color');
				material.color = this.readColor(data);
			} else if (next === MAT_SPECULAR) {

				this.debugMessage('   Specular Color');
				material.specular = this.readColor(data);
			} else if (next === MAT_AMBIENT) {

				this.debugMessage('   Ambient color');
				material.color = this.readColor(data);
			} else if (next === MAT_SHININESS) {

				var shininess = this.readWord(data);
				material.shininess = shininess;
				this.debugMessage('   Shininess : ' + shininess);
			} else if (next === MAT_TEXMAP) {

				this.debugMessage('   ColorMap');
				this.resetPosition(data);
				material.map = this.readMap(data, path);
			} else if (next === MAT_BUMPMAP) {

				this.debugMessage('   BumpMap');
				this.resetPosition(data);
				material.bumpMap = this.readMap(data, path);
			} else if (next === MAT_OPACMAP) {

				this.debugMessage('   OpacityMap');
				this.resetPosition(data);
				material.alphaMap = this.readMap(data, path);
			} else if (next === MAT_SPECMAP) {

				this.debugMessage('   SpecularMap');
				this.resetPosition(data);
				material.specularMap = this.readMap(data, path);
			} else {

				this.debugMessage('   Unknown material chunk: ' + next.toString(16));
			}

			next = this.nextChunk(data, chunk);
		}

		this.endChunk(chunk);

		this.materials[material.name] = material;
	},

	/**
  * Read mesh data chunk.
  *
  * @method readMesh
  * @param {Dataview} data Dataview in use.
  */
	readMesh: function readMesh(data) {

		var chunk = this.readChunk(data);
		var next = this.nextChunk(data, chunk);

		var useBufferGeometry = false;
		var geometry = null;
		var uvs = [];

		if (useBufferGeometry) {

			geometry = new THREE.BufferGeometry();
		} else {

			geometry = new THREE.Geometry();
		}

		var material = new THREE.MeshPhongMaterial();
		var mesh = new THREE.Mesh(geometry, material);
		mesh.name = 'mesh';

		while (next !== 0) {

			if (next === POINT_ARRAY) {

				var points = this.readWord(data);

				this.debugMessage('   Vertex: ' + points);

				//BufferGeometry

				if (useBufferGeometry) {

					var vertices = [];
					for (var i = 0; i < points; i++) {

						vertices.push(this.readFloat(data));
						vertices.push(this.readFloat(data));
						vertices.push(this.readFloat(data));
					}

					geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
				} else {
					//Geometry

					for (var i = 0; i < points; i++) {

						geometry.vertices.push(new THREE.Vector3(this.readFloat(data), this.readFloat(data), this.readFloat(data)));
					}
				}
			} else if (next === FACE_ARRAY) {

				this.resetPosition(data);
				this.readFaceArray(data, mesh);
			} else if (next === TEX_VERTS) {

				var texels = this.readWord(data);

				this.debugMessage('   UV: ' + texels);

				//BufferGeometry

				if (useBufferGeometry) {

					var uvs = [];
					for (var i = 0; i < texels; i++) {

						uvs.push(this.readFloat(data));
						uvs.push(this.readFloat(data));
					}
					geometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
				} else {
					//Geometry

					uvs = [];
					for (var i = 0; i < texels; i++) {

						uvs.push(new THREE.Vector2(this.readFloat(data), this.readFloat(data)));
					}
				}
			} else if (next === MESH_MATRIX) {

				this.debugMessage('   Tranformation Matrix (TODO)');

				var values = [];
				for (var i = 0; i < 12; i++) {

					values[i] = this.readFloat(data);
				}

				var matrix = new THREE.Matrix4();

				//X Line
				matrix.elements[0] = values[0];
				matrix.elements[1] = values[6];
				matrix.elements[2] = values[3];
				matrix.elements[3] = values[9];

				//Y Line
				matrix.elements[4] = values[2];
				matrix.elements[5] = values[8];
				matrix.elements[6] = values[5];
				matrix.elements[7] = values[11];

				//Z Line
				matrix.elements[8] = values[1];
				matrix.elements[9] = values[7];
				matrix.elements[10] = values[4];
				matrix.elements[11] = values[10];

				//W Line
				matrix.elements[12] = 0;
				matrix.elements[13] = 0;
				matrix.elements[14] = 0;
				matrix.elements[15] = 1;

				matrix.transpose();

				var inverse = new THREE.Matrix4();
				inverse.getInverse(matrix, true);
				geometry.applyMatrix(inverse);

				matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
			} else {

				this.debugMessage('   Unknown mesh chunk: ' + next.toString(16));
			}

			next = this.nextChunk(data, chunk);
		}

		this.endChunk(chunk);

		if (!useBufferGeometry) {

			//geometry.faceVertexUvs[0][faceIndex][vertexIndex]

			if (uvs.length > 0) {

				var faceUV = [];

				for (var i = 0; i < geometry.faces.length; i++) {

					faceUV.push([uvs[geometry.faces[i].a], uvs[geometry.faces[i].b], uvs[geometry.faces[i].c]]);
				}

				geometry.faceVertexUvs[0] = faceUV;
			}

			geometry.computeVertexNormals();
		}

		return mesh;
	},

	/**
  * Read face array data chunk.
  *
  * @method readFaceArray
  * @param {Dataview} data Dataview in use.
  * @param {Mesh} mesh Mesh to be filled with the data read.
  */
	readFaceArray: function readFaceArray(data, mesh) {

		var chunk = this.readChunk(data);
		var faces = this.readWord(data);

		this.debugMessage('   Faces: ' + faces);

		for (var i = 0; i < faces; ++i) {

			mesh.geometry.faces.push(new THREE.Face3(this.readWord(data), this.readWord(data), this.readWord(data)));

			var visibility = this.readWord(data);
		}

		//The rest of the FACE_ARRAY chunk is subchunks

		while (this.position < chunk.end) {

			var chunk = this.readChunk(data);

			if (chunk.id === MSH_MAT_GROUP) {

				this.debugMessage('      Material Group');

				this.resetPosition(data);

				var group = this.readMaterialGroup(data);

				var material = this.materials[group.name];

				if (material !== undefined) {

					mesh.material = material;

					if (material.name === '') {

						material.name = mesh.name;
					}
				}
			} else {

				this.debugMessage('      Unknown face array chunk: ' + chunk.toString(16));
			}

			this.endChunk(chunk);
		}

		this.endChunk(chunk);
	},

	/**
  * Read texture map data chunk.
  *
  * @method readMap
  * @param {Dataview} data Dataview in use.
  * @return {Texture} Texture read from this data chunk.
  */
	readMap: function readMap(data, path) {

		var chunk = this.readChunk(data);
		var next = this.nextChunk(data, chunk);
		var texture = {};

		var loader = new THREE.TextureLoader(this.manager);
		loader.setPath(path);

		while (next !== 0) {

			if (next === MAT_MAPNAME) {

				var name = this.readString(data, 128);
				texture = loader.load(name);

				this.debugMessage('      File: ' + path + name);
			} else if (next === MAT_MAP_UOFFSET) {

				texture.offset.x = this.readFloat(data);
				this.debugMessage('      OffsetX: ' + texture.offset.x);
			} else if (next === MAT_MAP_VOFFSET) {

				texture.offset.y = this.readFloat(data);
				this.debugMessage('      OffsetY: ' + texture.offset.y);
			} else if (next === MAT_MAP_USCALE) {

				texture.repeat.x = this.readFloat(data);
				this.debugMessage('      RepeatX: ' + texture.repeat.x);
			} else if (next === MAT_MAP_VSCALE) {

				texture.repeat.y = this.readFloat(data);
				this.debugMessage('      RepeatY: ' + texture.repeat.y);
			} else {

				this.debugMessage('      Unknown map chunk: ' + next.toString(16));
			}

			next = this.nextChunk(data, chunk);
		}

		this.endChunk(chunk);

		return texture;
	},

	/**
  * Read material group data chunk.
  *
  * @method readMaterialGroup
  * @param {Dataview} data Dataview in use.
  * @return {Object} Object with name and index of the object.
  */
	readMaterialGroup: function readMaterialGroup(data) {

		var chunk = this.readChunk(data);
		var name = this.readString(data, 64);
		var numFaces = this.readWord(data);

		this.debugMessage('         Name: ' + name);
		this.debugMessage('         Faces: ' + numFaces);

		var index = [];
		for (var i = 0; i < numFaces; ++i) {

			index.push(this.readWord(data));
		}

		return { name: name, index: index };
	},

	/**
  * Read a color value.
  *
  * @method readColor
  * @param {DataView} data Dataview.
  * @return {Color} Color value read..
  */
	readColor: function readColor(data) {

		var chunk = this.readChunk(data);
		var color = new THREE.Color();

		if (chunk.id === COLOR_24 || chunk.id === LIN_COLOR_24) {

			var r = this.readByte(data);
			var g = this.readByte(data);
			var b = this.readByte(data);

			color.setRGB(r / 255, g / 255, b / 255);

			this.debugMessage('      Color: ' + color.r + ', ' + color.g + ', ' + color.b);
		} else if (chunk.id === COLOR_F || chunk.id === LIN_COLOR_F) {

			var r = this.readFloat(data);
			var g = this.readFloat(data);
			var b = this.readFloat(data);

			color.setRGB(r, g, b);

			this.debugMessage('      Color: ' + color.r + ', ' + color.g + ', ' + color.b);
		} else {

			this.debugMessage('      Unknown color chunk: ' + chunk.toString(16));
		}

		this.endChunk(chunk);
		return color;
	},

	/**
  * Read next chunk of data.
  *
  * @method readChunk
  * @param {DataView} data Dataview.
  * @return {Object} Chunk of data read.
  */
	readChunk: function readChunk(data) {

		var chunk = {};

		chunk.cur = this.position;
		chunk.id = this.readWord(data);
		chunk.size = this.readDWord(data);
		chunk.end = chunk.cur + chunk.size;
		chunk.cur += 6;

		return chunk;
	},

	/**
  * Set position to the end of the current chunk of data.
  *
  * @method endChunk
  * @param {Object} chunk Data chunk.
  */
	endChunk: function endChunk(chunk) {

		this.position = chunk.end;
	},

	/**
  * Move to the next data chunk.
  *
  * @method nextChunk
  * @param {DataView} data Dataview.
  * @param {Object} chunk Data chunk.
  */
	nextChunk: function nextChunk(data, chunk) {

		if (chunk.cur >= chunk.end) {

			return 0;
		}

		this.position = chunk.cur;

		try {

			var next = this.readChunk(data);
			chunk.cur += next.size;
			return next.id;
		} catch (e) {

			this.debugMessage('Unable to read chunk at ' + this.position);
			return 0;
		}
	},

	/**
  * Reset dataview position.
  *
  * @method resetPosition
  * @param {DataView} data Dataview.
  */
	resetPosition: function resetPosition() {

		this.position -= 6;
	},

	/**
  * Read byte value.
  *
  * @method readByte
  * @param {DataView} data Dataview to read data from.
  * @return {Number} Data read from the dataview.
  */
	readByte: function readByte(data) {

		var v = data.getUint8(this.position, true);
		this.position += 1;
		return v;
	},

	/**
  * Read 32 bit float value.
  *
  * @method readFloat
  * @param {DataView} data Dataview to read data from.
  * @return {Number} Data read from the dataview.
  */
	readFloat: function readFloat(data) {

		try {

			var v = data.getFloat32(this.position, true);
			this.position += 4;
			return v;
		} catch (e) {

			this.debugMessage(e + ' ' + this.position + ' ' + data.byteLength);
		}
	},

	/**
  * Read 32 bit signed integer value.
  *
  * @method readInt
  * @param {DataView} data Dataview to read data from.
  * @return {Number} Data read from the dataview.
  */
	readInt: function readInt(data) {

		var v = data.getInt32(this.position, true);
		this.position += 4;
		return v;
	},

	/**
  * Read 16 bit signed integer value.
  *
  * @method readShort
  * @param {DataView} data Dataview to read data from.
  * @return {Number} Data read from the dataview.
  */
	readShort: function readShort(data) {

		var v = data.getInt16(this.position, true);
		this.position += 2;
		return v;
	},

	/**
  * Read 64 bit unsigned integer value.
  *
  * @method readDWord
  * @param {DataView} data Dataview to read data from.
  * @return {Number} Data read from the dataview.
  */
	readDWord: function readDWord(data) {

		var v = data.getUint32(this.position, true);
		this.position += 4;
		return v;
	},

	/**
  * Read 32 bit unsigned integer value.
  *
  * @method readWord
  * @param {DataView} data Dataview to read data from.
  * @return {Number} Data read from the dataview.
  */
	readWord: function readWord(data) {

		var v = data.getUint16(this.position, true);
		this.position += 2;
		return v;
	},

	/**
  * Read string value.
  *
  * @method readString
  * @param {DataView} data Dataview to read data from.
  * @param {Number} maxLength Max size of the string to be read.
  * @return {String} Data read from the dataview.
  */
	readString: function readString(data, maxLength) {

		var s = '';

		for (var i = 0; i < maxLength; i++) {

			var c = this.readByte(data);
			if (!c) {

				break;
			}

			s += String.fromCharCode(c);
		}

		return s;
	},

	/**
  * Set resource path used to determine the file path to attached resources.
  *
  * @method setPath
  * @param {String} path Path to resources.
  * @return Self for chaining.
  */
	setPath: function setPath(path) {

		this.path = path;

		return this;
	},

	/**
  * Print debug message to the console.
  *
  * Is controlled by a flag to show or hide debug messages.
  *
  * @method debugMessage
  * @param {Object} message Debug message to print to the console.
  */
	debugMessage: function debugMessage(message) {

		if (this.debug) {

			console.log(message);
		}
	}
};

var NULL_CHUNK = 0x0000;
var M3DMAGIC = 0x4D4D;
var SMAGIC = 0x2D2D;
var LMAGIC = 0x2D3D;
var MLIBMAGIC = 0x3DAA;
var MATMAGIC = 0x3DFF;
var CMAGIC = 0xC23D;
var M3D_VERSION = 0x0002;
var M3D_KFVERSION = 0x0005;
var COLOR_F = 0x0010;
var COLOR_24 = 0x0011;
var LIN_COLOR_24 = 0x0012;
var LIN_COLOR_F = 0x0013;
var INT_PERCENTAGE = 0x0030;
var FLOAT_PERCENTAGE = 0x0031;
var MDATA = 0x3D3D;
var MESH_VERSION = 0x3D3E;
var MASTER_SCALE = 0x0100;
var LO_SHADOW_BIAS = 0x1400;
var HI_SHADOW_BIAS = 0x1410;
var SHADOW_MAP_SIZE = 0x1420;
var SHADOW_SAMPLES = 0x1430;
var SHADOW_RANGE = 0x1440;
var SHADOW_FILTER = 0x1450;
var RAY_BIAS = 0x1460;
var O_CONSTS = 0x1500;
var AMBIENT_LIGHT = 0x2100;
var BIT_MAP = 0x1100;
var SOLID_BGND = 0x1200;
var V_GRADIENT = 0x1300;
var USE_BIT_MAP = 0x1101;
var USE_SOLID_BGND = 0x1201;
var USE_V_GRADIENT = 0x1301;
var FOG = 0x2200;
var FOG_BGND = 0x2210;
var LAYER_FOG = 0x2302;
var DISTANCE_CUE = 0x2300;
var DCUE_BGND = 0x2310;
var USE_FOG = 0x2201;
var USE_LAYER_FOG = 0x2303;
var USE_DISTANCE_CUE = 0x2301;
var MAT_ENTRY = 0xAFFF;
var MAT_NAME = 0xA000;
var MAT_AMBIENT = 0xA010;
var MAT_DIFFUSE = 0xA020;
var MAT_SPECULAR = 0xA030;
var MAT_SHININESS = 0xA040;
var MAT_SHIN2PCT = 0xA041;
var MAT_TRANSPARENCY = 0xA050;
var MAT_XPFALL = 0xA052;
var MAT_USE_XPFALL = 0xA240;
var MAT_REFBLUR = 0xA053;
var MAT_SHADING = 0xA100;
var MAT_USE_REFBLUR = 0xA250;
var MAT_SELF_ILLUM = 0xA084;
var MAT_TWO_SIDE = 0xA081;
var MAT_DECAL = 0xA082;
var MAT_ADDITIVE = 0xA083;
var MAT_WIRE = 0xA085;
var MAT_FACEMAP = 0xA088;
var MAT_TRANSFALLOFF_IN = 0xA08A;
var MAT_PHONGSOFT = 0xA08C;
var MAT_WIREABS = 0xA08E;
var MAT_WIRE_SIZE = 0xA087;
var MAT_TEXMAP = 0xA200;
var MAT_SXP_TEXT_DATA = 0xA320;
var MAT_TEXMASK = 0xA33E;
var MAT_SXP_TEXTMASK_DATA = 0xA32A;
var MAT_TEX2MAP = 0xA33A;
var MAT_SXP_TEXT2_DATA = 0xA321;
var MAT_TEX2MASK = 0xA340;
var MAT_SXP_TEXT2MASK_DATA = 0xA32C;
var MAT_OPACMAP = 0xA210;
var MAT_SXP_OPAC_DATA = 0xA322;
var MAT_OPACMASK = 0xA342;
var MAT_SXP_OPACMASK_DATA = 0xA32E;
var MAT_BUMPMAP = 0xA230;
var MAT_SXP_BUMP_DATA = 0xA324;
var MAT_BUMPMASK = 0xA344;
var MAT_SXP_BUMPMASK_DATA = 0xA330;
var MAT_SPECMAP = 0xA204;
var MAT_SXP_SPEC_DATA = 0xA325;
var MAT_SPECMASK = 0xA348;
var MAT_SXP_SPECMASK_DATA = 0xA332;
var MAT_SHINMAP = 0xA33C;
var MAT_SXP_SHIN_DATA = 0xA326;
var MAT_SHINMASK = 0xA346;
var MAT_SXP_SHINMASK_DATA = 0xA334;
var MAT_SELFIMAP = 0xA33D;
var MAT_SXP_SELFI_DATA = 0xA328;
var MAT_SELFIMASK = 0xA34A;
var MAT_SXP_SELFIMASK_DATA = 0xA336;
var MAT_REFLMAP = 0xA220;
var MAT_REFLMASK = 0xA34C;
var MAT_SXP_REFLMASK_DATA = 0xA338;
var MAT_ACUBIC = 0xA310;
var MAT_MAPNAME = 0xA300;
var MAT_MAP_TILING = 0xA351;
var MAT_MAP_TEXBLUR = 0xA353;
var MAT_MAP_USCALE = 0xA354;
var MAT_MAP_VSCALE = 0xA356;
var MAT_MAP_UOFFSET = 0xA358;
var MAT_MAP_VOFFSET = 0xA35A;
var MAT_MAP_ANG = 0xA35C;
var MAT_MAP_COL1 = 0xA360;
var MAT_MAP_COL2 = 0xA362;
var MAT_MAP_RCOL = 0xA364;
var MAT_MAP_GCOL = 0xA366;
var MAT_MAP_BCOL = 0xA368;
var NAMED_OBJECT = 0x4000;
var N_DIRECT_LIGHT = 0x4600;
var DL_OFF = 0x4620;
var DL_OUTER_RANGE = 0x465A;
var DL_INNER_RANGE = 0x4659;
var DL_MULTIPLIER = 0x465B;
var DL_EXCLUDE = 0x4654;
var DL_ATTENUATE = 0x4625;
var DL_SPOTLIGHT = 0x4610;
var DL_SPOT_ROLL = 0x4656;
var DL_SHADOWED = 0x4630;
var DL_LOCAL_SHADOW2 = 0x4641;
var DL_SEE_CONE = 0x4650;
var DL_SPOT_RECTANGULAR = 0x4651;
var DL_SPOT_ASPECT = 0x4657;
var DL_SPOT_PROJECTOR = 0x4653;
var DL_SPOT_OVERSHOOT = 0x4652;
var DL_RAY_BIAS = 0x4658;
var DL_RAYSHAD = 0x4627;
var N_CAMERA = 0x4700;
var CAM_SEE_CONE = 0x4710;
var CAM_RANGES = 0x4720;
var OBJ_HIDDEN = 0x4010;
var OBJ_VIS_LOFTER = 0x4011;
var OBJ_DOESNT_CAST = 0x4012;
var OBJ_DONT_RECVSHADOW = 0x4017;
var OBJ_MATTE = 0x4013;
var OBJ_FAST = 0x4014;
var OBJ_PROCEDURAL = 0x4015;
var OBJ_FROZEN = 0x4016;
var N_TRI_OBJECT = 0x4100;
var POINT_ARRAY = 0x4110;
var POINT_FLAG_ARRAY = 0x4111;
var FACE_ARRAY = 0x4120;
var MSH_MAT_GROUP = 0x4130;
var SMOOTH_GROUP = 0x4150;
var MSH_BOXMAP = 0x4190;
var TEX_VERTS = 0x4140;
var MESH_MATRIX = 0x4160;
var MESH_COLOR = 0x4165;
var MESH_TEXTURE_INFO = 0x4170;
var KFDATA = 0xB000;
var KFHDR = 0xB00A;
var KFSEG = 0xB008;
var KFCURTIME = 0xB009;
var AMBIENT_NODE_TAG = 0xB001;
var OBJECT_NODE_TAG = 0xB002;
var CAMERA_NODE_TAG = 0xB003;
var TARGET_NODE_TAG = 0xB004;
var LIGHT_NODE_TAG = 0xB005;
var L_TARGET_NODE_TAG = 0xB006;
var SPOTLIGHT_NODE_TAG = 0xB007;
var NODE_ID = 0xB030;
var NODE_HDR = 0xB010;
var PIVOT = 0xB013;
var INSTANCE_NAME = 0xB011;
var MORPH_SMOOTH = 0xB015;
var BOUNDBOX = 0xB014;
var POS_TRACK_TAG = 0xB020;
var COL_TRACK_TAG = 0xB025;
var ROT_TRACK_TAG = 0xB021;
var SCL_TRACK_TAG = 0xB022;
var MORPH_TRACK_TAG = 0xB026;
var FOV_TRACK_TAG = 0xB023;
var ROLL_TRACK_TAG = 0xB024;
var HOT_TRACK_TAG = 0xB027;
var FALL_TRACK_TAG = 0xB028;
var HIDE_TRACK_TAG = 0xB029;
var POLY_2D = 0x5000;
var SHAPE_OK = 0x5010;
var SHAPE_NOT_OK = 0x5011;
var SHAPE_HOOK = 0x5020;
var PATH_3D = 0x6000;
var PATH_MATRIX = 0x6005;
var SHAPE_2D = 0x6010;
var M_SCALE = 0x6020;
var M_TWIST = 0x6030;
var M_TEETER = 0x6040;
var M_FIT = 0x6050;
var M_BEVEL = 0x6060;
var XZ_CURVE = 0x6070;
var YZ_CURVE = 0x6080;
var INTERPCT = 0x6090;
var DEFORM_LIMIT = 0x60A0;
var USE_CONTOUR = 0x6100;
var USE_TWEEN = 0x6110;
var USE_SCALE = 0x6120;
var USE_TWIST = 0x6130;
var USE_TEETER = 0x6140;
var USE_FIT = 0x6150;
var USE_BEVEL = 0x6160;
var DEFAULT_VIEW = 0x3000;
var VIEW_TOP = 0x3010;
var VIEW_BOTTOM = 0x3020;
var VIEW_LEFT = 0x3030;
var VIEW_RIGHT = 0x3040;
var VIEW_FRONT = 0x3050;
var VIEW_BACK = 0x3060;
var VIEW_USER = 0x3070;
var VIEW_CAMERA = 0x3080;
var VIEW_WINDOW = 0x3090;
var VIEWPORT_LAYOUT_OLD = 0x7000;
var VIEWPORT_DATA_OLD = 0x7010;
var VIEWPORT_LAYOUT = 0x7001;
var VIEWPORT_DATA = 0x7011;
var VIEWPORT_DATA_3 = 0x7012;
var VIEWPORT_SIZE = 0x7020;
var NETWORK_VIEW = 0x7030;

exports.default = THREE.TDSLoader;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * @author Daosheng Mu / https://github.com/DaoshengMu/
 * @author mrdoob / http://mrdoob.com/
 * @author takahirox / https://github.com/takahirox/
 */

THREE.TGALoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.TGALoader.prototype = {

	constructor: THREE.TGALoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var texture = new THREE.Texture();

		var loader = new THREE.FileLoader(this.manager);
		loader.setResponseType('arraybuffer');

		loader.load(url, function (buffer) {

			texture.image = scope.parse(buffer);
			texture.needsUpdate = true;

			if (onLoad !== undefined) {

				onLoad(texture);
			}
		}, onProgress, onError);

		return texture;
	},

	parse: function parse(buffer) {

		// reference from vthibault, https://github.com/vthibault/roBrowser/blob/master/src/Loaders/Targa.js

		function tgaCheckHeader(header) {

			switch (header.image_type) {

				// check indexed type

				case TGA_TYPE_INDEXED:
				case TGA_TYPE_RLE_INDEXED:
					if (header.colormap_length > 256 || header.colormap_size !== 24 || header.colormap_type !== 1) {

						console.error('THREE.TGALoader: Invalid type colormap data for indexed type.');
					}
					break;

				// check colormap type

				case TGA_TYPE_RGB:
				case TGA_TYPE_GREY:
				case TGA_TYPE_RLE_RGB:
				case TGA_TYPE_RLE_GREY:
					if (header.colormap_type) {

						console.error('THREE.TGALoader: Invalid type colormap data for colormap type.');
					}
					break;

				// What the need of a file without data ?

				case TGA_TYPE_NO_DATA:
					console.error('THREE.TGALoader: No data.');

				// Invalid type ?

				default:
					console.error('THREE.TGALoader: Invalid type "%s".', header.image_type);

			}

			// check image width and height

			if (header.width <= 0 || header.height <= 0) {

				console.error('THREE.TGALoader: Invalid image size.');
			}

			// check image pixel size

			if (header.pixel_size !== 8 && header.pixel_size !== 16 && header.pixel_size !== 24 && header.pixel_size !== 32) {

				console.error('THREE.TGALoader: Invalid pixel size "%s".', header.pixel_size);
			}
		}

		// parse tga image buffer

		function tgaParse(use_rle, use_pal, header, offset, data) {

			var pixel_data, pixel_size, pixel_total, palettes;

			pixel_size = header.pixel_size >> 3;
			pixel_total = header.width * header.height * pixel_size;

			// read palettes

			if (use_pal) {

				palettes = data.subarray(offset, offset += header.colormap_length * (header.colormap_size >> 3));
			}

			// read RLE

			if (use_rle) {

				pixel_data = new Uint8Array(pixel_total);

				var c, count, i;
				var shift = 0;
				var pixels = new Uint8Array(pixel_size);

				while (shift < pixel_total) {

					c = data[offset++];
					count = (c & 0x7f) + 1;

					// RLE pixels

					if (c & 0x80) {

						// bind pixel tmp array

						for (i = 0; i < pixel_size; ++i) {

							pixels[i] = data[offset++];
						}

						// copy pixel array

						for (i = 0; i < count; ++i) {

							pixel_data.set(pixels, shift + i * pixel_size);
						}

						shift += pixel_size * count;
					} else {

						// raw pixels

						count *= pixel_size;
						for (i = 0; i < count; ++i) {

							pixel_data[shift + i] = data[offset++];
						}
						shift += count;
					}
				}
			} else {

				// raw pixels

				pixel_data = data.subarray(offset, offset += use_pal ? header.width * header.height : pixel_total);
			}

			return {
				pixel_data: pixel_data,
				palettes: palettes
			};
		}

		function tgaGetImageData8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image, palettes) {

			var colormap = palettes;
			var color,
			    i = 0,
			    x,
			    y;
			var width = header.width;

			for (y = y_start; y !== y_end; y += y_step) {

				for (x = x_start; x !== x_end; x += x_step, i++) {

					color = image[i];
					imageData[(x + width * y) * 4 + 3] = 255;
					imageData[(x + width * y) * 4 + 2] = colormap[color * 3 + 0];
					imageData[(x + width * y) * 4 + 1] = colormap[color * 3 + 1];
					imageData[(x + width * y) * 4 + 0] = colormap[color * 3 + 2];
				}
			}

			return imageData;
		}

		function tgaGetImageData16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {

			var color,
			    i = 0,
			    x,
			    y;
			var width = header.width;

			for (y = y_start; y !== y_end; y += y_step) {

				for (x = x_start; x !== x_end; x += x_step, i += 2) {

					color = image[i + 0] + (image[i + 1] << 8); // Inversed ?
					imageData[(x + width * y) * 4 + 0] = (color & 0x7C00) >> 7;
					imageData[(x + width * y) * 4 + 1] = (color & 0x03E0) >> 2;
					imageData[(x + width * y) * 4 + 2] = (color & 0x001F) >> 3;
					imageData[(x + width * y) * 4 + 3] = color & 0x8000 ? 0 : 255;
				}
			}

			return imageData;
		}

		function tgaGetImageData24bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {

			var i = 0,
			    x,
			    y;
			var width = header.width;

			for (y = y_start; y !== y_end; y += y_step) {

				for (x = x_start; x !== x_end; x += x_step, i += 3) {

					imageData[(x + width * y) * 4 + 3] = 255;
					imageData[(x + width * y) * 4 + 2] = image[i + 0];
					imageData[(x + width * y) * 4 + 1] = image[i + 1];
					imageData[(x + width * y) * 4 + 0] = image[i + 2];
				}
			}

			return imageData;
		}

		function tgaGetImageData32bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {

			var i = 0,
			    x,
			    y;
			var width = header.width;

			for (y = y_start; y !== y_end; y += y_step) {

				for (x = x_start; x !== x_end; x += x_step, i += 4) {

					imageData[(x + width * y) * 4 + 2] = image[i + 0];
					imageData[(x + width * y) * 4 + 1] = image[i + 1];
					imageData[(x + width * y) * 4 + 0] = image[i + 2];
					imageData[(x + width * y) * 4 + 3] = image[i + 3];
				}
			}

			return imageData;
		}

		function tgaGetImageDataGrey8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {

			var color,
			    i = 0,
			    x,
			    y;
			var width = header.width;

			for (y = y_start; y !== y_end; y += y_step) {

				for (x = x_start; x !== x_end; x += x_step, i++) {

					color = image[i];
					imageData[(x + width * y) * 4 + 0] = color;
					imageData[(x + width * y) * 4 + 1] = color;
					imageData[(x + width * y) * 4 + 2] = color;
					imageData[(x + width * y) * 4 + 3] = 255;
				}
			}

			return imageData;
		}

		function tgaGetImageDataGrey16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {

			var i = 0,
			    x,
			    y;
			var width = header.width;

			for (y = y_start; y !== y_end; y += y_step) {

				for (x = x_start; x !== x_end; x += x_step, i += 2) {

					imageData[(x + width * y) * 4 + 0] = image[i + 0];
					imageData[(x + width * y) * 4 + 1] = image[i + 0];
					imageData[(x + width * y) * 4 + 2] = image[i + 0];
					imageData[(x + width * y) * 4 + 3] = image[i + 1];
				}
			}

			return imageData;
		}

		function getTgaRGBA(data, width, height, image, palette) {

			var x_start, y_start, x_step, y_step, x_end, y_end;

			switch ((header.flags & TGA_ORIGIN_MASK) >> TGA_ORIGIN_SHIFT) {

				default:
				case TGA_ORIGIN_UL:
					x_start = 0;
					x_step = 1;
					x_end = width;
					y_start = 0;
					y_step = 1;
					y_end = height;
					break;

				case TGA_ORIGIN_BL:
					x_start = 0;
					x_step = 1;
					x_end = width;
					y_start = height - 1;
					y_step = -1;
					y_end = -1;
					break;

				case TGA_ORIGIN_UR:
					x_start = width - 1;
					x_step = -1;
					x_end = -1;
					y_start = 0;
					y_step = 1;
					y_end = height;
					break;

				case TGA_ORIGIN_BR:
					x_start = width - 1;
					x_step = -1;
					x_end = -1;
					y_start = height - 1;
					y_step = -1;
					y_end = -1;
					break;

			}

			if (use_grey) {

				switch (header.pixel_size) {

					case 8:
						tgaGetImageDataGrey8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
						break;

					case 16:
						tgaGetImageDataGrey16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
						break;

					default:
						console.error('THREE.TGALoader: Format not supported.');
						break;

				}
			} else {

				switch (header.pixel_size) {

					case 8:
						tgaGetImageData8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image, palette);
						break;

					case 16:
						tgaGetImageData16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
						break;

					case 24:
						tgaGetImageData24bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
						break;

					case 32:
						tgaGetImageData32bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
						break;

					default:
						console.error('THREE.TGALoader: Format not supported.');
						break;

				}
			}

			// Load image data according to specific method
			// var func = 'tgaGetImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
			// func(data, y_start, y_step, y_end, x_start, x_step, x_end, width, image, palette );
			return data;
		}

		// TGA constants

		var TGA_TYPE_NO_DATA = 0,
		    TGA_TYPE_INDEXED = 1,
		    TGA_TYPE_RGB = 2,
		    TGA_TYPE_GREY = 3,
		    TGA_TYPE_RLE_INDEXED = 9,
		    TGA_TYPE_RLE_RGB = 10,
		    TGA_TYPE_RLE_GREY = 11,
		    TGA_ORIGIN_MASK = 0x30,
		    TGA_ORIGIN_SHIFT = 0x04,
		    TGA_ORIGIN_BL = 0x00,
		    TGA_ORIGIN_BR = 0x01,
		    TGA_ORIGIN_UL = 0x02,
		    TGA_ORIGIN_UR = 0x03;

		if (buffer.length < 19) console.error('THREE.TGALoader: Not enough data to contain header.');

		var content = new Uint8Array(buffer),
		    offset = 0,
		    header = {
			id_length: content[offset++],
			colormap_type: content[offset++],
			image_type: content[offset++],
			colormap_index: content[offset++] | content[offset++] << 8,
			colormap_length: content[offset++] | content[offset++] << 8,
			colormap_size: content[offset++],
			origin: [content[offset++] | content[offset++] << 8, content[offset++] | content[offset++] << 8],
			width: content[offset++] | content[offset++] << 8,
			height: content[offset++] | content[offset++] << 8,
			pixel_size: content[offset++],
			flags: content[offset++]
		};

		// check tga if it is valid format

		tgaCheckHeader(header);

		if (header.id_length + offset > buffer.length) {

			console.error('THREE.TGALoader: No data.');
		}

		// skip the needn't data

		offset += header.id_length;

		// get targa information about RLE compression and palette

		var use_rle = false,
		    use_pal = false,
		    use_grey = false;

		switch (header.image_type) {

			case TGA_TYPE_RLE_INDEXED:
				use_rle = true;
				use_pal = true;
				break;

			case TGA_TYPE_INDEXED:
				use_pal = true;
				break;

			case TGA_TYPE_RLE_RGB:
				use_rle = true;
				break;

			case TGA_TYPE_RGB:
				break;

			case TGA_TYPE_RLE_GREY:
				use_rle = true;
				use_grey = true;
				break;

			case TGA_TYPE_GREY:
				use_grey = true;
				break;

		}

		//

		var canvas = document.createElement('canvas');
		canvas.width = header.width;
		canvas.height = header.height;

		var context = canvas.getContext('2d');
		var imageData = context.createImageData(header.width, header.height);

		var result = tgaParse(use_rle, use_pal, header, offset, content);
		var rgbaData = getTgaRGBA(imageData.data, header.width, header.height, result.pixel_data, result.palettes);

		context.putImageData(imageData, 0, 0);

		return canvas;
	}

};

exports.default = THREE.TGALoader;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author gero3 / https://github.com/gero3
 * @author tentone / https://github.com/tentone
 *
 * Requires opentype.js to be included in the project.
 * Loads TTF files and converts them into typeface JSON that can be used directly
 * to create THREE.Font objects.
 */

THREE.TTFLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
	this.reversed = false;
};

THREE.TTFLoader.prototype = {

	constructor: THREE.TTFLoader,

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(this.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (buffer) {

			onLoad(scope.parse(buffer));
		}, onProgress, onError);
	},

	parse: function parse(arraybuffer) {

		function convert(font, reversed) {

			var round = Math.round;

			var glyphs = {};
			var scale = 100000 / ((font.unitsPerEm || 2048) * 72);

			for (var i = 0; i < font.glyphs.length; i++) {

				var glyph = font.glyphs.glyphs[i];

				if (glyph.unicode !== undefined) {

					var token = {
						ha: round(glyph.advanceWidth * scale),
						x_min: round(glyph.xMin * scale),
						x_max: round(glyph.xMax * scale),
						o: ''
					};

					if (reversed) {

						glyph.path.commands = reverseCommands(glyph.path.commands);
					}

					glyph.path.commands.forEach(function (command, i) {

						if (command.type.toLowerCase() === 'c') {

							command.type = 'b';
						}

						token.o += command.type.toLowerCase() + ' ';

						if (command.x !== undefined && command.y !== undefined) {

							token.o += round(command.x * scale) + ' ' + round(command.y * scale) + ' ';
						}

						if (command.x1 !== undefined && command.y1 !== undefined) {

							token.o += round(command.x1 * scale) + ' ' + round(command.y1 * scale) + ' ';
						}

						if (command.x2 !== undefined && command.y2 !== undefined) {

							token.o += round(command.x2 * scale) + ' ' + round(command.y2 * scale) + ' ';
						}
					});

					glyphs[String.fromCharCode(glyph.unicode)] = token;
				}
			}

			return {
				glyphs: glyphs,
				familyName: font.familyName,
				ascender: round(font.ascender * scale),
				descender: round(font.descender * scale),
				underlinePosition: font.tables.post.underlinePosition,
				underlineThickness: font.tables.post.underlineThickness,
				boundingBox: {
					xMin: font.tables.head.xMin,
					xMax: font.tables.head.xMax,
					yMin: font.tables.head.yMin,
					yMax: font.tables.head.yMax
				},
				resolution: 1000,
				original_font_information: font.tables.name
			};
		}

		function reverseCommands(commands) {

			var paths = [];
			var path;

			commands.forEach(function (c) {

				if (c.type.toLowerCase() === 'm') {

					path = [c];
					paths.push(path);
				} else if (c.type.toLowerCase() !== 'z') {

					path.push(c);
				}
			});

			var reversed = [];

			paths.forEach(function (p) {

				var result = {
					type: 'm',
					x: p[p.length - 1].x,
					y: p[p.length - 1].y
				};

				reversed.push(result);

				for (var i = p.length - 1; i > 0; i--) {

					var command = p[i];
					var result = { type: command.type };

					if (command.x2 !== undefined && command.y2 !== undefined) {

						result.x1 = command.x2;
						result.y1 = command.y2;
						result.x2 = command.x1;
						result.y2 = command.y1;
					} else if (command.x1 !== undefined && command.y1 !== undefined) {

						result.x1 = command.x1;
						result.y1 = command.y1;
					}

					result.x = p[i - 1].x;
					result.y = p[i - 1].y;
					reversed.push(result);
				}
			});

			return reversed;
		}

		if (typeof opentype === 'undefined') {

			console.warn('THREE.TTFLoader: The loader requires opentype.js. Make sure it\'s included before using the loader.');
			return null;
		}

		return convert(opentype.parse(arraybuffer), this.reversed);
	}

};

exports.default = THREE.TTFLoader;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Loader for UTF8 version2 (after r51) encoded models generated by:
 *	http://code.google.com/p/webgl-loader/
 *
 * Code to load/decompress mesh is taken from r100 of this webgl-loader
 */

THREE.UTF8Loader = function () {};

/**
 * Load UTF8 encoded model
 * @param jsonUrl - URL from which to load json containing information about model
 * @param callback - Callback(THREE.Object3D) on successful loading of model
 * @param options - options on how to load model (see THREE.MTLLoader.MaterialCreator for basic options)
 *                  Additional options include
 *                   geometryBase: Base url from which to load referenced geometries
 *                   materialBase: Base url from which to load referenced textures
 */

THREE.UTF8Loader.prototype.load = function (jsonUrl, callback, options) {

	this.downloadModelJson(jsonUrl, callback, options);
};

// BufferGeometryCreator

THREE.UTF8Loader.BufferGeometryCreator = function () {};

THREE.UTF8Loader.BufferGeometryCreator.prototype.create = function (attribArray, indices) {

	var ntris = indices.length / 3;

	var geometry = new THREE.BufferGeometry();

	var positions = new Float32Array(ntris * 3 * 3);
	var normals = new Float32Array(ntris * 3 * 3);
	var uvs = new Float32Array(ntris * 3 * 2);

	var i, j, offset;

	var end = attribArray.length;
	var stride = 8;

	// extract positions

	j = 0;
	offset = 0;

	for (i = offset; i < end; i += stride) {

		positions[j++] = attribArray[i];
		positions[j++] = attribArray[i + 1];
		positions[j++] = attribArray[i + 2];
	}

	// extract uvs

	j = 0;
	offset = 3;

	for (i = offset; i < end; i += stride) {

		uvs[j++] = attribArray[i];
		uvs[j++] = attribArray[i + 1];
	}

	// extract normals

	j = 0;
	offset = 5;

	for (i = offset; i < end; i += stride) {

		normals[j++] = attribArray[i];
		normals[j++] = attribArray[i + 1];
		normals[j++] = attribArray[i + 2];
	}

	geometry.setIndex(new THREE.BufferAttribute(indices, 1));
	geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
	geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));
	geometry.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));

	geometry.computeBoundingSphere();

	return geometry;
};

// UTF-8 decoder from webgl-loader (r100)
// http://code.google.com/p/webgl-loader/

// Model manifest description. Contains objects like:
// name: {
//   materials: { 'material_name': { ... } ... },
//   decodeParams: {
//     decodeOffsets: [ ... ],
//     decodeScales: [ ... ],
//   },
//   urls: {
//     'url': [
//       { material: 'material_name',
//         attribRange: [#, #],
//         indexRange: [#, #],
//         names: [ 'object names' ... ],
//         lengths: [#, #, # ... ]
//       }
//     ],
//     ...
//   }
// }

var DEFAULT_DECODE_PARAMS = {

	decodeOffsets: [-4095, -4095, -4095, 0, 0, -511, -511, -511],
	decodeScales: [1 / 8191, 1 / 8191, 1 / 8191, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023]

	// TODO: normal decoding? (see walt.js)
	// needs to know: input, output (from vertex format!)
	//
	// Should split attrib/index.
	// 1) Decode position and non-normal attributes.
	// 2) Decode indices, computing normals
	// 3) Maybe normalize normals? Only necessary for refinement, or fixed?
	// 4) Maybe refine normals? Should this be part of regular refinement?
	// 5) Morphing

};

// Triangle strips!

// TODO: will it be an optimization to specialize this method at
// runtime for different combinations of stride, decodeOffset and
// decodeScale?

THREE.UTF8Loader.prototype.decompressAttribsInner_ = function (str, inputStart, inputEnd, output, outputStart, stride, decodeOffset, decodeScale) {

	var prev = 0;

	for (var j = inputStart; j < inputEnd; j++) {

		var code = str.charCodeAt(j);
		prev += code >> 1 ^ -(code & 1);

		output[outputStart] = decodeScale * (prev + decodeOffset);
		outputStart += stride;
	}
};

THREE.UTF8Loader.prototype.decompressIndices_ = function (str, inputStart, numIndices, output, outputStart) {

	var highest = 0;

	for (var i = 0; i < numIndices; i++) {

		var code = str.charCodeAt(inputStart++);

		output[outputStart++] = highest - code;

		if (code === 0) {

			highest++;
		}
	}
};

THREE.UTF8Loader.prototype.decompressAABBs_ = function (str, inputStart, numBBoxen, decodeOffsets, decodeScales) {

	var numFloats = 6 * numBBoxen;

	var inputEnd = inputStart + numFloats;
	var outputStart = 0;

	var bboxen = new Float32Array(numFloats);

	for (var i = inputStart; i < inputEnd; i += 6) {

		var minX = str.charCodeAt(i + 0) + decodeOffsets[0];
		var minY = str.charCodeAt(i + 1) + decodeOffsets[1];
		var minZ = str.charCodeAt(i + 2) + decodeOffsets[2];

		var radiusX = str.charCodeAt(i + 3) + 1 >> 1;
		var radiusY = str.charCodeAt(i + 4) + 1 >> 1;
		var radiusZ = str.charCodeAt(i + 5) + 1 >> 1;

		bboxen[outputStart++] = decodeScales[0] * (minX + radiusX);
		bboxen[outputStart++] = decodeScales[1] * (minY + radiusY);
		bboxen[outputStart++] = decodeScales[2] * (minZ + radiusZ);

		bboxen[outputStart++] = decodeScales[0] * radiusX;
		bboxen[outputStart++] = decodeScales[1] * radiusY;
		bboxen[outputStart++] = decodeScales[2] * radiusZ;
	}

	return bboxen;
};

THREE.UTF8Loader.prototype.decompressMesh = function (str, meshParams, decodeParams, name, idx, callback) {

	// Extract conversion parameters from attribArrays.

	var stride = decodeParams.decodeScales.length;

	var decodeOffsets = decodeParams.decodeOffsets;
	var decodeScales = decodeParams.decodeScales;

	var attribStart = meshParams.attribRange[0];
	var numVerts = meshParams.attribRange[1];

	// Decode attributes.

	var inputOffset = attribStart;
	var attribsOut = new Float32Array(stride * numVerts);

	for (var j = 0; j < stride; j++) {

		var end = inputOffset + numVerts;

		var decodeScale = decodeScales[j];

		if (decodeScale) {

			// Assume if decodeScale is never set, simply ignore the
			// attribute.

			this.decompressAttribsInner_(str, inputOffset, end, attribsOut, j, stride, decodeOffsets[j], decodeScale);
		}

		inputOffset = end;
	}

	var numIndices = 3 * meshParams.indexRange[1];

	var indicesOut = new Uint16Array(numIndices);

	this.decompressIndices_(str, inputOffset, numIndices, indicesOut, 0);

	// Decode bboxen.

	var bboxen = undefined;
	var bboxOffset = meshParams.bboxes;

	if (bboxOffset) {

		bboxen = this.decompressAABBs_(str, bboxOffset, meshParams.names.length, decodeOffsets, decodeScales);
	}

	callback(name, idx, attribsOut, indicesOut, bboxen, meshParams);
};

THREE.UTF8Loader.prototype.copyAttrib = function (stride, attribsOutFixed, lastAttrib, index) {

	for (var j = 0; j < stride; j++) {

		lastAttrib[j] = attribsOutFixed[stride * index + j];
	}
};

THREE.UTF8Loader.prototype.decodeAttrib2 = function (str, stride, decodeOffsets, decodeScales, deltaStart, numVerts, attribsOut, attribsOutFixed, lastAttrib, index) {

	for (var j = 0; j < 5; j++) {

		var code = str.charCodeAt(deltaStart + numVerts * j + index);
		var delta = code >> 1 ^ -(code & 1);

		lastAttrib[j] += delta;
		attribsOutFixed[stride * index + j] = lastAttrib[j];
		attribsOut[stride * index + j] = decodeScales[j] * (lastAttrib[j] + decodeOffsets[j]);
	}
};

THREE.UTF8Loader.prototype.accumulateNormal = function (i0, i1, i2, attribsOutFixed, crosses) {

	var p0x = attribsOutFixed[8 * i0];
	var p0y = attribsOutFixed[8 * i0 + 1];
	var p0z = attribsOutFixed[8 * i0 + 2];

	var p1x = attribsOutFixed[8 * i1];
	var p1y = attribsOutFixed[8 * i1 + 1];
	var p1z = attribsOutFixed[8 * i1 + 2];

	var p2x = attribsOutFixed[8 * i2];
	var p2y = attribsOutFixed[8 * i2 + 1];
	var p2z = attribsOutFixed[8 * i2 + 2];

	p1x -= p0x;
	p1y -= p0y;
	p1z -= p0z;

	p2x -= p0x;
	p2y -= p0y;
	p2z -= p0z;

	p0x = p1y * p2z - p1z * p2y;
	p0y = p1z * p2x - p1x * p2z;
	p0z = p1x * p2y - p1y * p2x;

	crosses[3 * i0] += p0x;
	crosses[3 * i0 + 1] += p0y;
	crosses[3 * i0 + 2] += p0z;

	crosses[3 * i1] += p0x;
	crosses[3 * i1 + 1] += p0y;
	crosses[3 * i1 + 2] += p0z;

	crosses[3 * i2] += p0x;
	crosses[3 * i2 + 1] += p0y;
	crosses[3 * i2 + 2] += p0z;
};

THREE.UTF8Loader.prototype.decompressMesh2 = function (str, meshParams, decodeParams, name, idx, callback) {

	var MAX_BACKREF = 96;

	// Extract conversion parameters from attribArrays.

	var stride = decodeParams.decodeScales.length;

	var decodeOffsets = decodeParams.decodeOffsets;
	var decodeScales = decodeParams.decodeScales;

	var deltaStart = meshParams.attribRange[0];
	var numVerts = meshParams.attribRange[1];

	var codeStart = meshParams.codeRange[0];

	var numIndices = 3 * meshParams.codeRange[2];

	var indicesOut = new Uint16Array(numIndices);

	var crosses = new Int32Array(3 * numVerts);

	var lastAttrib = new Uint16Array(stride);

	var attribsOutFixed = new Uint16Array(stride * numVerts);
	var attribsOut = new Float32Array(stride * numVerts);

	var highest = 0;
	var outputStart = 0;

	for (var i = 0; i < numIndices; i += 3) {

		var code = str.charCodeAt(codeStart++);

		var max_backref = Math.min(i, MAX_BACKREF);

		if (code < max_backref) {

			// Parallelogram

			var winding = code % 3;
			var backref = i - (code - winding);
			var i0, i1, i2;

			switch (winding) {

				case 0:

					i0 = indicesOut[backref + 2];
					i1 = indicesOut[backref + 1];
					i2 = indicesOut[backref + 0];
					break;

				case 1:

					i0 = indicesOut[backref + 0];
					i1 = indicesOut[backref + 2];
					i2 = indicesOut[backref + 1];
					break;

				case 2:

					i0 = indicesOut[backref + 1];
					i1 = indicesOut[backref + 0];
					i2 = indicesOut[backref + 2];
					break;

			}

			indicesOut[outputStart++] = i0;
			indicesOut[outputStart++] = i1;

			code = str.charCodeAt(codeStart++);

			var index = highest - code;
			indicesOut[outputStart++] = index;

			if (code === 0) {

				for (var j = 0; j < 5; j++) {

					var deltaCode = str.charCodeAt(deltaStart + numVerts * j + highest);

					var prediction = (deltaCode >> 1 ^ -(deltaCode & 1)) + attribsOutFixed[stride * i0 + j] + attribsOutFixed[stride * i1 + j] - attribsOutFixed[stride * i2 + j];

					lastAttrib[j] = prediction;

					attribsOutFixed[stride * highest + j] = prediction;
					attribsOut[stride * highest + j] = decodeScales[j] * (prediction + decodeOffsets[j]);
				}

				highest++;
			} else {

				this.copyAttrib(stride, attribsOutFixed, lastAttrib, index);
			}

			this.accumulateNormal(i0, i1, index, attribsOutFixed, crosses);
		} else {

			// Simple

			var index0 = highest - (code - max_backref);

			indicesOut[outputStart++] = index0;

			if (code === max_backref) {

				this.decodeAttrib2(str, stride, decodeOffsets, decodeScales, deltaStart, numVerts, attribsOut, attribsOutFixed, lastAttrib, highest++);
			} else {

				this.copyAttrib(stride, attribsOutFixed, lastAttrib, index0);
			}

			code = str.charCodeAt(codeStart++);

			var index1 = highest - code;
			indicesOut[outputStart++] = index1;

			if (code === 0) {

				this.decodeAttrib2(str, stride, decodeOffsets, decodeScales, deltaStart, numVerts, attribsOut, attribsOutFixed, lastAttrib, highest++);
			} else {

				this.copyAttrib(stride, attribsOutFixed, lastAttrib, index1);
			}

			code = str.charCodeAt(codeStart++);

			var index2 = highest - code;
			indicesOut[outputStart++] = index2;

			if (code === 0) {

				for (var j = 0; j < 5; j++) {

					lastAttrib[j] = (attribsOutFixed[stride * index0 + j] + attribsOutFixed[stride * index1 + j]) / 2;
				}

				this.decodeAttrib2(str, stride, decodeOffsets, decodeScales, deltaStart, numVerts, attribsOut, attribsOutFixed, lastAttrib, highest++);
			} else {

				this.copyAttrib(stride, attribsOutFixed, lastAttrib, index2);
			}

			this.accumulateNormal(index0, index1, index2, attribsOutFixed, crosses);
		}
	}

	for (var i = 0; i < numVerts; i++) {

		var nx = crosses[3 * i];
		var ny = crosses[3 * i + 1];
		var nz = crosses[3 * i + 2];

		var norm = 511.0 / Math.sqrt(nx * nx + ny * ny + nz * nz);

		var cx = str.charCodeAt(deltaStart + 5 * numVerts + i);
		var cy = str.charCodeAt(deltaStart + 6 * numVerts + i);
		var cz = str.charCodeAt(deltaStart + 7 * numVerts + i);

		attribsOut[stride * i + 5] = norm * nx + (cx >> 1 ^ -(cx & 1));
		attribsOut[stride * i + 6] = norm * ny + (cy >> 1 ^ -(cy & 1));
		attribsOut[stride * i + 7] = norm * nz + (cz >> 1 ^ -(cz & 1));
	}

	callback(name, idx, attribsOut, indicesOut, undefined, meshParams);
};

THREE.UTF8Loader.prototype.downloadMesh = function (path, name, meshEntry, decodeParams, callback) {

	var loader = this;
	var idx = 0;

	function onprogress(data) {

		while (idx < meshEntry.length) {

			var meshParams = meshEntry[idx];
			var indexRange = meshParams.indexRange;

			if (indexRange) {

				var meshEnd = indexRange[0] + 3 * indexRange[1];

				if (data.length < meshEnd) break;

				loader.decompressMesh(data, meshParams, decodeParams, name, idx, callback);
			} else {

				var codeRange = meshParams.codeRange;
				var meshEnd = codeRange[0] + codeRange[1];

				if (data.length < meshEnd) break;

				loader.decompressMesh2(data, meshParams, decodeParams, name, idx, callback);
			}

			++idx;
		}
	}

	getHttpRequest(path, function (data) {

		onprogress(data);

		// TODO: handle errors.
	});
};

THREE.UTF8Loader.prototype.downloadMeshes = function (path, meshUrlMap, decodeParams, callback) {

	for (var url in meshUrlMap) {

		var meshEntry = meshUrlMap[url];
		this.downloadMesh(path + url, url, meshEntry, decodeParams, callback);
	}
};

THREE.UTF8Loader.prototype.createMeshCallback = function (materialBaseUrl, loadModelInfo, allDoneCallback) {

	var nCompletedUrls = 0;
	var nExpectedUrls = 0;

	var expectedMeshesPerUrl = {};
	var decodedMeshesPerUrl = {};

	var modelParts = {};

	var meshUrlMap = loadModelInfo.urls;

	for (var url in meshUrlMap) {

		expectedMeshesPerUrl[url] = meshUrlMap[url].length;
		decodedMeshesPerUrl[url] = 0;

		nExpectedUrls++;

		modelParts[url] = new THREE.Object3D();
	}

	var model = new THREE.Object3D();

	// Prepare materials first...

	var materialCreator = new THREE.MTLLoader.MaterialCreator(materialBaseUrl, loadModelInfo.options);
	materialCreator.setMaterials(loadModelInfo.materials);

	materialCreator.preload();

	// Create callback for creating mesh parts

	var bufferGeometryCreator = new THREE.UTF8Loader.BufferGeometryCreator();

	var meshCallback = function meshCallback(name, idx, attribArray, indexArray, bboxen, meshParams) {

		// Got ourselves a new mesh

		// name identifies this part of the model (url)
		// idx is the mesh index of this mesh of the part
		// attribArray defines the vertices
		// indexArray defines the faces
		// bboxen defines the bounding box
		// meshParams contains the material info

		var geometry = bufferGeometryCreator.create(attribArray, indexArray);
		var material = materialCreator.create(meshParams.material);

		var mesh = new THREE.Mesh(geometry, material);
		modelParts[name].add(mesh);

		//model.add(new THREE.Mesh(geometry, material));

		decodedMeshesPerUrl[name]++;

		if (decodedMeshesPerUrl[name] === expectedMeshesPerUrl[name]) {

			nCompletedUrls++;

			model.add(modelParts[name]);

			if (nCompletedUrls === nExpectedUrls) {

				// ALL DONE!!!

				allDoneCallback(model);
			}
		}
	};

	return meshCallback;
};

THREE.UTF8Loader.prototype.downloadModel = function (geometryBase, materialBase, model, callback) {

	var meshCallback = this.createMeshCallback(materialBase, model, callback);
	this.downloadMeshes(geometryBase, model.urls, model.decodeParams, meshCallback);
};

THREE.UTF8Loader.prototype.downloadModelJson = function (jsonUrl, callback, options) {

	getJsonRequest(jsonUrl, function (loaded) {

		if (!loaded.decodeParams) {

			if (options && options.decodeParams) {

				loaded.decodeParams = options.decodeParams;
			} else {

				loaded.decodeParams = DEFAULT_DECODE_PARAMS;
			}
		}

		loaded.options = options;

		var geometryBase = jsonUrl.substr(0, jsonUrl.lastIndexOf("/") + 1);
		var materialBase = geometryBase;

		if (options && options.geometryBase) {

			geometryBase = options.geometryBase;

			if (geometryBase.charAt(geometryBase.length - 1) !== "/") {

				geometryBase = geometryBase + "/";
			}
		}

		if (options && options.materialBase) {

			materialBase = options.materialBase;

			if (materialBase.charAt(materialBase.length - 1) !== "/") {

				materialBase = materialBase + "/";
			}
		}

		this.downloadModel(geometryBase, materialBase, loaded, callback);
	}.bind(this));
};

// XMLHttpRequest stuff

function getHttpRequest(url, onload, opt_onprogress) {

	var req = new THREE.FileLoader();
	req.load(url, onload, opt_onprogress);
}

function getJsonRequest(url, onjson) {

	getHttpRequest(url, function (e) {

		onjson(JSON.parse(e));
	}, function () {});
}

function addListeners(dom, listeners) {

	// TODO: handle event capture, object binding.

	for (var key in listeners) {

		dom.addEventListener(key, listeners[key]);
	}
}

exports.default = THREE.UTF8Loader;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.VRMLLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.VRMLLoader.prototype = {

	constructor: THREE.VRMLLoader,

	// for IndexedFaceSet support
	isRecordingPoints: false,
	isRecordingFaces: false,
	points: [],
	indexes: [],

	// for Background support
	isRecordingAngles: false,
	isRecordingColors: false,
	angles: [],
	colors: [],

	recordingFieldname: null,

	crossOrigin: 'Anonymous',

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(this.manager);
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	setCrossOrigin: function setCrossOrigin(value) {

		this.crossOrigin = value;
	},

	parse: function parse(data) {

		var texturePath = this.texturePath || '';

		var textureLoader = new THREE.TextureLoader(this.manager);
		textureLoader.setCrossOrigin(this.crossOrigin);

		function parseV1() {

			console.warn('THREE.VRMLLoader: V1.0 not supported yet.');
		}

		function parseV2(lines, scene) {

			var defines = {};
			var float_pattern = /(\b|\-|\+)([\d\.e]+)/;
			var float2_pattern = /([\d\.\+\-e]+)\s+([\d\.\+\-e]+)/g;
			var float3_pattern = /([\d\.\+\-e]+)\s+([\d\.\+\-e]+)\s+([\d\.\+\-e]+)/g;

			/**
    * Vertically paints the faces interpolating between the
    * specified colors at the specified angels. This is used for the Background
    * node, but could be applied to other nodes with multiple faces as well.
    *
    * When used with the Background node, default is directionIsDown is true if
    * interpolating the skyColor down from the Zenith. When interpolationg up from
    * the Nadir i.e. interpolating the groundColor, the directionIsDown is false.
    *
    * The first angle is never specified, it is the Zenith (0 rad). Angles are specified
    * in radians. The geometry is thought a sphere, but could be anything. The color interpolation
    * is linear along the Y axis in any case.
    *
    * You must specify one more color than you have angles at the beginning of the colors array.
    * This is the color of the Zenith (the top of the shape).
    *
    * @param geometry
    * @param radius
    * @param angles
    * @param colors
    * @param boolean topDown Whether to work top down or bottom up.
    */
			function paintFaces(geometry, radius, angles, colors, topDown) {

				var direction = topDown === true ? 1 : -1;

				var coord = [],
				    A = {},
				    B = {},
				    applyColor = false;

				for (var k = 0; k < angles.length; k++) {

					// push the vector at which the color changes

					var vec = {
						x: direction * (Math.cos(angles[k]) * radius),
						y: direction * (Math.sin(angles[k]) * radius)
					};

					coord.push(vec);
				}

				var index = geometry.index;
				var positionAttribute = geometry.attributes.position;
				var colorAttribute = new THREE.BufferAttribute(new Float32Array(geometry.attributes.position.count * 3), 3);

				var position = new THREE.Vector3();
				var color = new THREE.Color();

				for (var i = 0; i < index.count; i++) {

					var vertexIndex = index.getX(i);

					position.fromBufferAttribute(positionAttribute, vertexIndex);

					for (var j = 0; j < colors.length; j++) {

						// linear interpolation between aColor and bColor, calculate proportion
						// A is previous point (angle)

						if (j === 0) {

							A.x = 0;
							A.y = topDown === true ? radius : -1 * radius;
						} else {

							A.x = coord[j - 1].x;
							A.y = coord[j - 1].y;
						}

						// B is current point (angle)

						B = coord[j];

						if (B !== undefined) {

							// p has to be between the points A and B which we interpolate

							applyColor = topDown === true ? position.y <= A.y && position.y > B.y : position.y >= A.y && position.y < B.y;

							if (applyColor === true) {

								var aColor = colors[j];
								var bColor = colors[j + 1];

								// below is simple linear interpolation

								var t = Math.abs(position.y - A.y) / (A.y - B.y);

								// to make it faster, you can only calculate this if the y coord changes, the color is the same for points with the same y

								color.copy(aColor).lerp(bColor, t);

								colorAttribute.setXYZ(vertexIndex, color.r, color.g, color.b);
							} else {

								var colorIndex = topDown === true ? colors.length - 1 : 0;
								var c = colors[colorIndex];
								colorAttribute.setXYZ(vertexIndex, c.r, c.g, c.b);
							}
						}
					}
				}

				geometry.addAttribute('color', colorAttribute);
			}

			var index = [];

			function parseProperty(node, line) {

				var parts = [],
				    part,
				    property = {},
				    fieldName;

				/**
     * Expression for matching relevant information, such as a name or value, but not the separators
     * @type {RegExp}
     */
				var regex = /[^\s,\[\]]+/g;

				var point;

				while (null !== (part = regex.exec(line))) {

					parts.push(part[0]);
				}

				fieldName = parts[0];

				// trigger several recorders
				switch (fieldName) {

					case 'skyAngle':
					case 'groundAngle':
						this.recordingFieldname = fieldName;
						this.isRecordingAngles = true;
						this.angles = [];
						break;

					case 'skyColor':
					case 'groundColor':
						this.recordingFieldname = fieldName;
						this.isRecordingColors = true;
						this.colors = [];
						break;

					case 'point':
						this.recordingFieldname = fieldName;
						this.isRecordingPoints = true;
						this.points = [];
						break;

					case 'coordIndex':
					case 'texCoordIndex':
						this.recordingFieldname = fieldName;
						this.isRecordingFaces = true;
						this.indexes = [];
						break;

				}

				if (this.isRecordingFaces) {

					// the parts hold the indexes as strings
					if (parts.length > 0) {

						for (var ind = 0; ind < parts.length; ind++) {

							// the part should either be positive integer or -1
							if (!/(-?\d+)/.test(parts[ind])) {

								continue;
							}

							// end of current face
							if (parts[ind] === '-1') {

								if (index.length > 0) {

									this.indexes.push(index);
								}

								// start new one
								index = [];
							} else {

								index.push(parseInt(parts[ind]));
							}
						}
					}

					// end
					if (/]/.exec(line)) {

						if (index.length > 0) {

							this.indexes.push(index);
						}

						// start new one
						index = [];

						this.isRecordingFaces = false;
						node[this.recordingFieldname] = this.indexes;
					}
				} else if (this.isRecordingPoints) {

					if (node.nodeType == 'Coordinate') {

						while (null !== (parts = float3_pattern.exec(line))) {

							point = {
								x: parseFloat(parts[1]),
								y: parseFloat(parts[2]),
								z: parseFloat(parts[3])
							};

							this.points.push(point);
						}
					}

					if (node.nodeType == 'TextureCoordinate') {

						while (null !== (parts = float2_pattern.exec(line))) {

							point = {
								x: parseFloat(parts[1]),
								y: parseFloat(parts[2])
							};

							this.points.push(point);
						}
					}

					// end
					if (/]/.exec(line)) {

						this.isRecordingPoints = false;
						node.points = this.points;
					}
				} else if (this.isRecordingAngles) {

					// the parts hold the angles as strings
					if (parts.length > 0) {

						for (var ind = 0; ind < parts.length; ind++) {

							// the part should be a float
							if (!float_pattern.test(parts[ind])) {

								continue;
							}

							this.angles.push(parseFloat(parts[ind]));
						}
					}

					// end
					if (/]/.exec(line)) {

						this.isRecordingAngles = false;
						node[this.recordingFieldname] = this.angles;
					}
				} else if (this.isRecordingColors) {

					while (null !== (parts = float3_pattern.exec(line))) {

						var color = {
							r: parseFloat(parts[1]),
							g: parseFloat(parts[2]),
							b: parseFloat(parts[3])
						};

						this.colors.push(color);
					}

					// end
					if (/]/.exec(line)) {

						this.isRecordingColors = false;
						node[this.recordingFieldname] = this.colors;
					}
				} else if (parts[parts.length - 1] !== 'NULL' && fieldName !== 'children') {

					switch (fieldName) {

						case 'diffuseColor':
						case 'emissiveColor':
						case 'specularColor':
						case 'color':

							if (parts.length !== 4) {

								console.warn('THREE.VRMLLoader: Invalid color format detected for %s.', fieldName);
								break;
							}

							property = {
								r: parseFloat(parts[1]),
								g: parseFloat(parts[2]),
								b: parseFloat(parts[3])
							};

							break;

						case 'location':
						case 'direction':
						case 'translation':
						case 'scale':
						case 'size':
							if (parts.length !== 4) {

								console.warn('THREE.VRMLLoader: Invalid vector format detected for %s.', fieldName);
								break;
							}

							property = {
								x: parseFloat(parts[1]),
								y: parseFloat(parts[2]),
								z: parseFloat(parts[3])
							};

							break;

						case 'intensity':
						case 'cutOffAngle':
						case 'radius':
						case 'topRadius':
						case 'bottomRadius':
						case 'height':
						case 'transparency':
						case 'shininess':
						case 'ambientIntensity':
							if (parts.length !== 2) {

								console.warn('THREE.VRMLLoader: Invalid single float value specification detected for %s.', fieldName);
								break;
							}

							property = parseFloat(parts[1]);

							break;

						case 'rotation':
							if (parts.length !== 5) {

								console.warn('THREE.VRMLLoader: Invalid quaternion format detected for %s.', fieldName);
								break;
							}

							property = {
								x: parseFloat(parts[1]),
								y: parseFloat(parts[2]),
								z: parseFloat(parts[3]),
								w: parseFloat(parts[4])
							};

							break;

						case 'on':
						case 'ccw':
						case 'solid':
						case 'colorPerVertex':
						case 'convex':
							if (parts.length !== 2) {

								console.warn('THREE.VRMLLoader: Invalid format detected for %s.', fieldName);
								break;
							}

							property = parts[1] === 'TRUE' ? true : false;

							break;

					}

					node[fieldName] = property;
				}

				return property;
			}

			function getTree(lines) {

				var tree = { 'string': 'Scene', children: [] };
				var current = tree;
				var matches;
				var specification;

				for (var i = 0; i < lines.length; i++) {

					var comment = '';

					var line = lines[i];

					// omit whitespace only lines
					if (null !== /^\s+?$/g.exec(line)) {

						continue;
					}

					line = line.trim();

					// skip empty lines
					if (line === '') {

						continue;
					}

					if (/#/.exec(line)) {

						var parts = line.split('#');

						// discard everything after the #, it is a comment
						line = parts[0];

						// well, let's also keep the comment
						comment = parts[1];
					}

					if (matches = /([^\s]*){1}(?:\s+)?{/.exec(line)) {

						// first subpattern should match the Node name

						var block = { 'nodeType': matches[1], 'string': line, 'parent': current, 'children': [], 'comment': comment };
						current.children.push(block);
						current = block;

						if (/}/.exec(line)) {

							// example: geometry Box { size 1 1 1 } # all on the same line
							specification = /{(.*)}/.exec(line)[1];

							// todo: remove once new parsing is complete?
							block.children.push(specification);

							parseProperty(current, specification);

							current = current.parent;
						}
					} else if (/}/.exec(line)) {

						current = current.parent;
					} else if (line !== '') {

						parseProperty(current, line);
						// todo: remove once new parsing is complete? we still do not parse geometry and appearance the new way
						current.children.push(line);
					}
				}

				return tree;
			}

			function parseNode(data, parent) {

				var object;

				if (typeof data === 'string') {

					if (/USE/.exec(data)) {

						var defineKey = /USE\s+?([^\s]+)/.exec(data)[1];

						if (undefined == defines[defineKey]) {

							console.warn('THREE.VRMLLoader: %s is not defined.', defineKey);
						} else {

							if (/appearance/.exec(data) && defineKey) {

								parent.material = defines[defineKey].clone();
							} else if (/geometry/.exec(data) && defineKey) {

								parent.geometry = defines[defineKey].clone();

								// the solid property is not cloned with clone(), is only needed for VRML loading, so we need to transfer it
								if (undefined !== defines[defineKey].solid && defines[defineKey].solid === false) {

									parent.geometry.solid = false;
									parent.material.side = THREE.DoubleSide;
								}
							} else if (defineKey) {

								object = defines[defineKey].clone();
								parent.add(object);
							}
						}
					}

					return;
				}

				object = parent;

				if (data.string.indexOf('AmbientLight') > -1 && data.nodeType === 'PointLight') {

					data.nodeType = 'AmbientLight';
				}

				var l_visible = data.on !== undefined ? data.on : true;
				var l_intensity = data.intensity !== undefined ? data.intensity : 1;
				var l_color = new THREE.Color();

				if (data.color) {

					l_color.copy(data.color);
				}

				if (data.nodeType === 'AmbientLight') {

					object = new THREE.AmbientLight(l_color, l_intensity);
					object.visible = l_visible;

					parent.add(object);
				} else if (data.nodeType === 'PointLight') {

					var l_distance = 0;

					if (data.radius !== undefined && data.radius < 1000) {

						l_distance = data.radius;
					}

					object = new THREE.PointLight(l_color, l_intensity, l_distance);
					object.visible = l_visible;

					parent.add(object);
				} else if (data.nodeType === 'SpotLight') {

					var l_intensity = 1;
					var l_distance = 0;
					var l_angle = Math.PI / 3;
					var l_penumbra = 0;
					var l_visible = true;

					if (data.radius !== undefined && data.radius < 1000) {

						l_distance = data.radius;
					}

					if (data.cutOffAngle !== undefined) {

						l_angle = data.cutOffAngle;
					}

					object = new THREE.SpotLight(l_color, l_intensity, l_distance, l_angle, l_penumbra);
					object.visible = l_visible;

					parent.add(object);
				} else if (data.nodeType === 'Transform' || data.nodeType === 'Group') {

					object = new THREE.Object3D();

					if (/DEF/.exec(data.string)) {

						object.name = /DEF\s+([^\s]+)/.exec(data.string)[1];
						defines[object.name] = object;
					}

					if (data.translation !== undefined) {

						var t = data.translation;

						object.position.set(t.x, t.y, t.z);
					}

					if (data.rotation !== undefined) {

						var r = data.rotation;

						object.quaternion.setFromAxisAngle(new THREE.Vector3(r.x, r.y, r.z), r.w);
					}

					if (data.scale !== undefined) {

						var s = data.scale;

						object.scale.set(s.x, s.y, s.z);
					}

					parent.add(object);
				} else if (data.nodeType === 'Shape') {

					object = new THREE.Mesh();

					if (/DEF/.exec(data.string)) {

						object.name = /DEF\s+([^\s]+)/.exec(data.string)[1];

						defines[object.name] = object;
					}

					parent.add(object);
				} else if (data.nodeType === 'Background') {

					var segments = 20;

					// sky (full sphere):

					var radius = 2e4;

					var skyGeometry = new THREE.SphereBufferGeometry(radius, segments, segments);
					var skyMaterial = new THREE.MeshBasicMaterial({ fog: false, side: THREE.BackSide });

					if (data.skyColor.length > 1) {

						paintFaces(skyGeometry, radius, data.skyAngle, data.skyColor, true);

						skyMaterial.vertexColors = THREE.VertexColors;
					} else {

						var color = data.skyColor[0];
						skyMaterial.color.setRGB(color.r, color.b, color.g);
					}

					scene.add(new THREE.Mesh(skyGeometry, skyMaterial));

					// ground (half sphere):

					if (data.groundColor !== undefined) {

						radius = 1.2e4;

						var groundGeometry = new THREE.SphereBufferGeometry(radius, segments, segments, 0, 2 * Math.PI, 0.5 * Math.PI, 1.5 * Math.PI);
						var groundMaterial = new THREE.MeshBasicMaterial({ fog: false, side: THREE.BackSide, vertexColors: THREE.VertexColors });

						paintFaces(groundGeometry, radius, data.groundAngle, data.groundColor, false);

						scene.add(new THREE.Mesh(groundGeometry, groundMaterial));
					}
				} else if (/geometry/.exec(data.string)) {

					if (data.nodeType === 'Box') {

						var s = data.size;

						parent.geometry = new THREE.BoxBufferGeometry(s.x, s.y, s.z);
					} else if (data.nodeType === 'Cylinder') {

						parent.geometry = new THREE.CylinderBufferGeometry(data.radius, data.radius, data.height);
					} else if (data.nodeType === 'Cone') {

						parent.geometry = new THREE.CylinderBufferGeometry(data.topRadius, data.bottomRadius, data.height);
					} else if (data.nodeType === 'Sphere') {

						parent.geometry = new THREE.SphereBufferGeometry(data.radius);
					} else if (data.nodeType === 'IndexedFaceSet') {

						var geometry = new THREE.BufferGeometry();

						var positions = [];
						var uvs = [];

						var position, uv;

						var i, il, j, jl;

						for (i = 0, il = data.children.length; i < il; i++) {

							var child = data.children[i];

							// uvs

							if (child.nodeType === 'TextureCoordinate') {

								if (child.points) {

									for (j = 0, jl = child.points.length; j < jl; j++) {

										uv = child.points[j];
										uvs.push(uv.x, uv.y);
									}
								}
							}

							// positions

							if (child.nodeType === 'Coordinate') {

								if (child.points) {

									for (j = 0, jl = child.points.length; j < jl; j++) {

										position = child.points[j];
										positions.push(position.x, position.y, position.z);
									}
								}

								if (child.string.indexOf('DEF') > -1) {

									var name = /DEF\s+([^\s]+)/.exec(child.string)[1];

									defines[name] = positions.slice(0);
								}

								if (child.string.indexOf('USE') > -1) {

									var defineKey = /USE\s+([^\s]+)/.exec(child.string)[1];

									positions = defines[defineKey];
								}
							}
						}

						var skip = 0;

						// some shapes only have vertices for use in other shapes

						if (data.coordIndex) {

							var newPositions = [];
							var newUvs = [];

							position = new THREE.Vector3();
							uv = new THREE.Vector2();

							for (i = 0, il = data.coordIndex.length; i < il; i++) {

								var indexes = data.coordIndex[i];

								// VRML support multipoint indexed face sets (more then 3 vertices). You must calculate the composing triangles here

								skip = 0;

								while (indexes.length >= 3 && skip < indexes.length - 2) {

									if (data.ccw === undefined) data.ccw = true; // ccw is true by default

									var i1 = indexes[0];
									var i2 = indexes[skip + (data.ccw ? 1 : 2)];
									var i3 = indexes[skip + (data.ccw ? 2 : 1)];

									// create non indexed geometry, necessary for face normal generation

									position.fromArray(positions, i1 * 3);
									uv.fromArray(uvs, i1 * 2);
									newPositions.push(position.x, position.y, position.z);
									newUvs.push(uv.x, uv.y);

									position.fromArray(positions, i2 * 3);
									uv.fromArray(uvs, i2 * 2);
									newPositions.push(position.x, position.y, position.z);
									newUvs.push(uv.x, uv.y);

									position.fromArray(positions, i3 * 3);
									uv.fromArray(uvs, i3 * 2);
									newPositions.push(position.x, position.y, position.z);
									newUvs.push(uv.x, uv.y);

									skip++;
								}
							}

							positions = newPositions;
							uvs = newUvs;
						} else {

							// do not add dummy mesh to the scene

							parent.parent.remove(parent);
						}

						if (false === data.solid) {

							parent.material.side = THREE.DoubleSide;
						}

						// we need to store it on the geometry for use with defines
						geometry.solid = data.solid;

						geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

						if (uvs.length > 0) {

							geometry.addAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
						}

						geometry.computeVertexNormals();
						geometry.computeBoundingSphere();

						// see if it's a define
						if (/DEF/.exec(data.string)) {

							geometry.name = /DEF ([^\s]+)/.exec(data.string)[1];
							defines[geometry.name] = geometry;
						}

						parent.geometry = geometry;
					}

					return;
				} else if (/appearance/.exec(data.string)) {

					for (var i = 0; i < data.children.length; i++) {

						var child = data.children[i];

						if (child.nodeType === 'Material') {

							var material = new THREE.MeshPhongMaterial();

							if (child.diffuseColor !== undefined) {

								var d = child.diffuseColor;

								material.color.setRGB(d.r, d.g, d.b);
							}

							if (child.emissiveColor !== undefined) {

								var e = child.emissiveColor;

								material.emissive.setRGB(e.r, e.g, e.b);
							}

							if (child.specularColor !== undefined) {

								var s = child.specularColor;

								material.specular.setRGB(s.r, s.g, s.b);
							}

							if (child.transparency !== undefined) {

								var t = child.transparency;

								// transparency is opposite of opacity
								material.opacity = Math.abs(1 - t);

								material.transparent = true;
							}

							if (/DEF/.exec(data.string)) {

								material.name = /DEF ([^\s]+)/.exec(data.string)[1];

								defines[material.name] = material;
							}

							parent.material = material;
						}

						if (child.nodeType === 'ImageTexture') {

							var textureName = /"([^"]+)"/.exec(child.children[0]);

							if (textureName) {

								parent.material.name = textureName[1];

								parent.material.map = textureLoader.load(texturePath + textureName[1]);
							}
						}
					}

					return;
				}

				for (var i = 0, l = data.children.length; i < l; i++) {

					parseNode(data.children[i], object);
				}
			}

			parseNode(getTree(lines), scene);
		}

		var scene = new THREE.Scene();

		var lines = data.split('\n');

		// some lines do not have breaks

		for (var i = lines.length - 1; i > -1; i--) {

			var line = lines[i];

			// split lines with {..{ or {..[ - some have both
			if (/{.*[{\[]/.test(line)) {

				var parts = line.split('{').join('{\n').split('\n');
				parts.unshift(1);
				parts.unshift(i);
				lines.splice.apply(lines, parts);
			} else if (/\].*}/.test(line)) {

				// split lines with ]..}
				var parts = line.split(']').join(']\n').split('\n');
				parts.unshift(1);
				parts.unshift(i);
				lines.splice.apply(lines, parts);
			}

			if (/}.*}/.test(line)) {

				// split lines with }..}
				var parts = line.split('}').join('}\n').split('\n');
				parts.unshift(1);
				parts.unshift(i);
				lines.splice.apply(lines, parts);
			}

			if (/^\b[^\s]+\b$/.test(line.trim())) {

				// prevent lines with single words like "coord" or "geometry", see #12209
				lines[i + 1] = line + ' ' + lines[i + 1].trim();
				lines.splice(i, 1);
			} else if (line.indexOf('coord') > -1 && line.indexOf('[') < 0 && line.indexOf('{') < 0) {

				// force the parser to create Coordinate node for empty coords
				// coord USE something -> coord USE something Coordinate {}

				lines[i] += ' Coordinate {}';
			}
		}

		var header = lines.shift();

		if (/V1.0/.exec(header)) {

			parseV1(lines, scene);
		} else if (/V2.0/.exec(header)) {

			parseV2(lines, scene);
		}

		return scene;
	}

};

exports.default = THREE.VRMLLoader;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @author mrdoob / http://mrdoob.com/
 * @author Alex Pletzer
 *
 * Updated on 22.03.2017
 * VTK header is now parsed and used to extract all the compressed data
 * @author Andrii Iudin https://github.com/andreyyudin
 * @author Paul Kibet Korir https://github.com/polarise
 * @author Sriram Somasundharam https://github.com/raamssundar
 */

THREE.VTKLoader = function (manager) {

	this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

Object.assign(THREE.VTKLoader.prototype, THREE.EventDispatcher.prototype, {

	load: function load(url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setResponseType('arraybuffer');
		loader.load(url, function (text) {

			onLoad(scope.parse(text));
		}, onProgress, onError);
	},

	parse: function parse(data) {

		function parseASCII(data) {

			// connectivity of the triangles
			var indices = [];

			// triangles vertices
			var positions = [];

			// red, green, blue colors in the range 0 to 1
			var colors = [];

			// normal vector, one per vertex
			var normals = [];

			var result;

			// pattern for reading vertices, 3 floats or integers
			var pat3Floats = /(\-?\d+\.?[\d\-\+e]*)\s+(\-?\d+\.?[\d\-\+e]*)\s+(\-?\d+\.?[\d\-\+e]*)/g;

			// pattern for connectivity, an integer followed by any number of ints
			// the first integer is the number of polygon nodes
			var patConnectivity = /^(\d+)\s+([\s\d]*)/;

			// indicates start of vertex data section
			var patPOINTS = /^POINTS /;

			// indicates start of polygon connectivity section
			var patPOLYGONS = /^POLYGONS /;

			// indicates start of triangle strips section
			var patTRIANGLE_STRIPS = /^TRIANGLE_STRIPS /;

			// POINT_DATA number_of_values
			var patPOINT_DATA = /^POINT_DATA[ ]+(\d+)/;

			// CELL_DATA number_of_polys
			var patCELL_DATA = /^CELL_DATA[ ]+(\d+)/;

			// Start of color section
			var patCOLOR_SCALARS = /^COLOR_SCALARS[ ]+(\w+)[ ]+3/;

			// NORMALS Normals float
			var patNORMALS = /^NORMALS[ ]+(\w+)[ ]+(\w+)/;

			var inPointsSection = false;
			var inPolygonsSection = false;
			var inTriangleStripSection = false;
			var inPointDataSection = false;
			var inCellDataSection = false;
			var inColorSection = false;
			var inNormalsSection = false;

			var lines = data.split('\n');

			for (var i in lines) {

				var line = lines[i];

				if (inPointsSection) {

					// get the vertices
					while ((result = pat3Floats.exec(line)) !== null) {

						var x = parseFloat(result[1]);
						var y = parseFloat(result[2]);
						var z = parseFloat(result[3]);
						positions.push(x, y, z);
					}
				} else if (inPolygonsSection) {

					if ((result = patConnectivity.exec(line)) !== null) {

						// numVertices i0 i1 i2 ...
						var numVertices = parseInt(result[1]);
						var inds = result[2].split(/\s+/);

						if (numVertices >= 3) {

							var i0 = parseInt(inds[0]);
							var i1, i2;
							var k = 1;
							// split the polygon in numVertices - 2 triangles
							for (var j = 0; j < numVertices - 2; ++j) {

								i1 = parseInt(inds[k]);
								i2 = parseInt(inds[k + 1]);
								indices.push(i0, i1, i2);
								k++;
							}
						}
					}
				} else if (inTriangleStripSection) {

					if ((result = patConnectivity.exec(line)) !== null) {

						// numVertices i0 i1 i2 ...
						var numVertices = parseInt(result[1]);
						var inds = result[2].split(/\s+/);

						if (numVertices >= 3) {

							var i0, i1, i2;
							// split the polygon in numVertices - 2 triangles
							for (var j = 0; j < numVertices - 2; j++) {

								if (j % 2 === 1) {

									i0 = parseInt(inds[j]);
									i1 = parseInt(inds[j + 2]);
									i2 = parseInt(inds[j + 1]);
									indices.push(i0, i1, i2);
								} else {

									i0 = parseInt(inds[j]);
									i1 = parseInt(inds[j + 1]);
									i2 = parseInt(inds[j + 2]);
									indices.push(i0, i1, i2);
								}
							}
						}
					}
				} else if (inPointDataSection || inCellDataSection) {

					if (inColorSection) {

						// Get the colors

						while ((result = pat3Floats.exec(line)) !== null) {

							var r = parseFloat(result[1]);
							var g = parseFloat(result[2]);
							var b = parseFloat(result[3]);
							colors.push(r, g, b);
						}
					} else if (inNormalsSection) {

						// Get the normal vectors

						while ((result = pat3Floats.exec(line)) !== null) {

							var nx = parseFloat(result[1]);
							var ny = parseFloat(result[2]);
							var nz = parseFloat(result[3]);
							normals.push(nx, ny, nz);
						}
					}
				}

				if (patPOLYGONS.exec(line) !== null) {

					inPolygonsSection = true;
					inPointsSection = false;
					inTriangleStripSection = false;
				} else if (patPOINTS.exec(line) !== null) {

					inPolygonsSection = false;
					inPointsSection = true;
					inTriangleStripSection = false;
				} else if (patTRIANGLE_STRIPS.exec(line) !== null) {

					inPolygonsSection = false;
					inPointsSection = false;
					inTriangleStripSection = true;
				} else if (patPOINT_DATA.exec(line) !== null) {

					inPointDataSection = true;
					inPointsSection = false;
					inPolygonsSection = false;
					inTriangleStripSection = false;
				} else if (patCELL_DATA.exec(line) !== null) {

					inCellDataSection = true;
					inPointsSection = false;
					inPolygonsSection = false;
					inTriangleStripSection = false;
				} else if (patCOLOR_SCALARS.exec(line) !== null) {

					inColorSection = true;
					inNormalsSection = false;
					inPointsSection = false;
					inPolygonsSection = false;
					inTriangleStripSection = false;
				} else if (patNORMALS.exec(line) !== null) {

					inNormalsSection = true;
					inColorSection = false;
					inPointsSection = false;
					inPolygonsSection = false;
					inTriangleStripSection = false;
				}
			}

			var geometry;
			var stagger = 'point';

			if (colors.length === indices.length) {

				stagger = 'cell';
			}

			if (stagger === 'point') {

				// Nodal. Use BufferGeometry
				geometry = new THREE.BufferGeometry();
				geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
				geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));

				if (colors.length === positions.length) {

					geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
				}

				if (normals.length === positions.length) {

					geometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
				}
			} else {

				// Cell centered colors. The only way to attach a solid color to each triangle
				// is to use Geometry, which is less efficient than BufferGeometry
				geometry = new THREE.Geometry();

				var numTriangles = indices.length / 3;
				var numPoints = positions.length / 3;
				var face;
				var ia, ib, ic;
				var x, y, z;
				var r, g, b;

				for (var j = 0; j < numPoints; ++j) {

					x = positions[3 * j + 0];
					y = positions[3 * j + 1];
					z = positions[3 * j + 2];
					geometry.vertices.push(new THREE.Vector3(x, y, z));
				}

				for (var i = 0; i < numTriangles; ++i) {

					ia = indices[3 * i + 0];
					ib = indices[3 * i + 1];
					ic = indices[3 * i + 2];
					geometry.faces.push(new THREE.Face3(ia, ib, ic));
				}

				if (colors.length === numTriangles * 3) {

					for (var i = 0; i < numTriangles; ++i) {

						face = geometry.faces[i];
						r = colors[3 * i + 0];
						g = colors[3 * i + 1];
						b = colors[3 * i + 2];
						face.color = new THREE.Color().setRGB(r, g, b);
					}
				}
			}

			return geometry;
		}

		function parseBinary(data) {

			var count, pointIndex, i, numberOfPoints, s;
			var buffer = new Uint8Array(data);
			var dataView = new DataView(data);

			// Points and normals, by default, are empty
			var points = [];
			var normals = [];
			var indices = [];

			// Going to make a big array of strings
			var vtk = [];
			var index = 0;

			function findString(buffer, start) {

				var index = start;
				var c = buffer[index];
				var s = [];
				while (c !== 10) {

					s.push(String.fromCharCode(c));
					index++;
					c = buffer[index];
				}

				return { start: start,
					end: index,
					next: index + 1,
					parsedString: s.join('') };
			}

			var state, line;

			while (true) {

				// Get a string
				state = findString(buffer, index);
				line = state.parsedString;

				if (line.indexOf('POINTS') === 0) {

					vtk.push(line);
					// Add the points
					numberOfPoints = parseInt(line.split(' ')[1], 10);

					// Each point is 3 4-byte floats
					count = numberOfPoints * 4 * 3;

					points = new Float32Array(numberOfPoints * 3);

					pointIndex = state.next;
					for (i = 0; i < numberOfPoints; i++) {

						points[3 * i] = dataView.getFloat32(pointIndex, false);
						points[3 * i + 1] = dataView.getFloat32(pointIndex + 4, false);
						points[3 * i + 2] = dataView.getFloat32(pointIndex + 8, false);
						pointIndex = pointIndex + 12;
					}
					// increment our next pointer
					state.next = state.next + count + 1;
				} else if (line.indexOf('TRIANGLE_STRIPS') === 0) {

					var numberOfStrips = parseInt(line.split(' ')[1], 10);
					var size = parseInt(line.split(' ')[2], 10);
					// 4 byte integers
					count = size * 4;

					indices = new Uint32Array(3 * size - 9 * numberOfStrips);
					var indicesIndex = 0;

					pointIndex = state.next;
					for (i = 0; i < numberOfStrips; i++) {

						// For each strip, read the first value, then record that many more points
						var indexCount = dataView.getInt32(pointIndex, false);
						var strip = [];
						pointIndex += 4;
						for (s = 0; s < indexCount; s++) {

							strip.push(dataView.getInt32(pointIndex, false));
							pointIndex += 4;
						}

						// retrieves the n-2 triangles from the triangle strip
						for (var j = 0; j < indexCount - 2; j++) {

							if (j % 2) {

								indices[indicesIndex++] = strip[j];
								indices[indicesIndex++] = strip[j + 2];
								indices[indicesIndex++] = strip[j + 1];
							} else {

								indices[indicesIndex++] = strip[j];
								indices[indicesIndex++] = strip[j + 1];
								indices[indicesIndex++] = strip[j + 2];
							}
						}
					}
					// increment our next pointer
					state.next = state.next + count + 1;
				} else if (line.indexOf('POLYGONS') === 0) {

					var numberOfStrips = parseInt(line.split(' ')[1], 10);
					var size = parseInt(line.split(' ')[2], 10);
					// 4 byte integers
					count = size * 4;

					indices = new Uint32Array(3 * size - 9 * numberOfStrips);
					var indicesIndex = 0;

					pointIndex = state.next;
					for (i = 0; i < numberOfStrips; i++) {

						// For each strip, read the first value, then record that many more points
						var indexCount = dataView.getInt32(pointIndex, false);
						var strip = [];
						pointIndex += 4;
						for (s = 0; s < indexCount; s++) {

							strip.push(dataView.getInt32(pointIndex, false));
							pointIndex += 4;
						}

						// divide the polygon in n-2 triangle
						for (var j = 1; j < indexCount - 1; j++) {

							indices[indicesIndex++] = strip[0];
							indices[indicesIndex++] = strip[j];
							indices[indicesIndex++] = strip[j + 1];
						}
					}
					// increment our next pointer
					state.next = state.next + count + 1;
				} else if (line.indexOf('POINT_DATA') === 0) {

					numberOfPoints = parseInt(line.split(' ')[1], 10);

					// Grab the next line
					state = findString(buffer, state.next);

					// Now grab the binary data
					count = numberOfPoints * 4 * 3;

					normals = new Float32Array(numberOfPoints * 3);
					pointIndex = state.next;
					for (i = 0; i < numberOfPoints; i++) {

						normals[3 * i] = dataView.getFloat32(pointIndex, false);
						normals[3 * i + 1] = dataView.getFloat32(pointIndex + 4, false);
						normals[3 * i + 2] = dataView.getFloat32(pointIndex + 8, false);
						pointIndex += 12;
					}

					// Increment past our data
					state.next = state.next + count;
				}

				// Increment index
				index = state.next;

				if (index >= buffer.byteLength) {

					break;
				}
			}

			var geometry = new THREE.BufferGeometry();
			geometry.setIndex(new THREE.BufferAttribute(indices, 1));
			geometry.addAttribute('position', new THREE.BufferAttribute(points, 3));

			if (normals.length === points.length) {

				geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));
			}

			return geometry;
		}

		function Float32Concat(first, second) {

			var firstLength = first.length,
			    result = new Float32Array(firstLength + second.length);

			result.set(first);
			result.set(second, firstLength);

			return result;
		}

		function Int32Concat(first, second) {

			var firstLength = first.length,
			    result = new Int32Array(firstLength + second.length);

			result.set(first);
			result.set(second, firstLength);

			return result;
		}

		function parseXML(stringFile) {

			// Changes XML to JSON, based on https://davidwalsh.name/convert-xml-json

			function xmlToJson(xml) {

				// Create the return object
				var obj = {};

				if (xml.nodeType === 1) {
					// element

					// do attributes

					if (xml.attributes) {

						if (xml.attributes.length > 0) {

							obj['attributes'] = {};

							for (var j = 0; j < xml.attributes.length; j++) {

								var attribute = xml.attributes.item(j);
								obj['attributes'][attribute.nodeName] = attribute.nodeValue.trim();
							}
						}
					}
				} else if (xml.nodeType === 3) {
					// text

					obj = xml.nodeValue.trim();
				}

				// do children
				if (xml.hasChildNodes()) {

					for (var i = 0; i < xml.childNodes.length; i++) {

						var item = xml.childNodes.item(i);
						var nodeName = item.nodeName;

						if (typeof obj[nodeName] === 'undefined') {

							var tmp = xmlToJson(item);

							if (tmp !== '') obj[nodeName] = tmp;
						} else {

							if (typeof obj[nodeName].push === 'undefined') {

								var old = obj[nodeName];
								obj[nodeName] = [old];
							}

							var tmp = xmlToJson(item);

							if (tmp !== '') obj[nodeName].push(tmp);
						}
					}
				}

				return obj;
			}

			// Taken from Base64-js
			function Base64toByteArray(b64) {

				var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
				var i;
				var lookup = [];
				var revLookup = [];
				var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
				var len = code.length;

				for (i = 0; i < len; i++) {

					lookup[i] = code[i];
				}

				for (i = 0; i < len; ++i) {

					revLookup[code.charCodeAt(i)] = i;
				}

				revLookup['-'.charCodeAt(0)] = 62;
				revLookup['_'.charCodeAt(0)] = 63;

				var j, l, tmp, placeHolders, arr;
				var len = b64.length;

				if (len % 4 > 0) {

					throw new Error('Invalid string. Length must be a multiple of 4');
				}

				placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
				arr = new Arr(len * 3 / 4 - placeHolders);
				l = placeHolders > 0 ? len - 4 : len;

				var L = 0;

				for (i = 0, j = 0; i < l; i += 4, j += 3) {

					tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
					arr[L++] = (tmp & 0xFF0000) >> 16;
					arr[L++] = (tmp & 0xFF00) >> 8;
					arr[L++] = tmp & 0xFF;
				}

				if (placeHolders === 2) {

					tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
					arr[L++] = tmp & 0xFF;
				} else if (placeHolders === 1) {

					tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
					arr[L++] = tmp >> 8 & 0xFF;
					arr[L++] = tmp & 0xFF;
				}

				return arr;
			}

			function parseDataArray(ele, compressed) {

				var numBytes = 0;

				if (json.attributes.header_type === 'UInt64') {

					numBytes = 8;
				} else if (json.attributes.header_type === 'UInt32') {

					numBytes = 4;
				}

				// Check the format
				if (ele.attributes.format === 'binary' && compressed) {

					var rawData, content, byteData, blocks, cSizeStart, headerSize, padding, dataOffsets, currentOffset;

					if (ele.attributes.type === 'Float32') {

						var txt = new Float32Array();
					} else if (ele.attributes.type === 'Int64') {

						var txt = new Int32Array();
					}

					// VTP data with the header has the following structure:
					// [#blocks][#u-size][#p-size][#c-size-1][#c-size-2]...[#c-size-#blocks][DATA]
					//
					// Each token is an integer value whose type is specified by "header_type" at the top of the file (UInt32 if no type specified). The token meanings are:
					// [#blocks] = Number of blocks
					// [#u-size] = Block size before compression
					// [#p-size] = Size of last partial block (zero if it not needed)
					// [#c-size-i] = Size in bytes of block i after compression
					//
					// The [DATA] portion stores contiguously every block appended together. The offset from the beginning of the data section to the beginning of a block is
					// computed by summing the compressed block sizes from preceding blocks according to the header.

					rawData = ele['#text'];

					byteData = Base64toByteArray(rawData);

					blocks = byteData[0];
					for (var i = 1; i < numBytes - 1; i++) {

						blocks = blocks | byteData[i] << i * numBytes;
					}

					headerSize = (blocks + 3) * numBytes;
					padding = headerSize % 3 > 0 ? 3 - headerSize % 3 : 0;
					headerSize = headerSize + padding;

					dataOffsets = [];
					currentOffset = headerSize;
					dataOffsets.push(currentOffset);

					// Get the blocks sizes after the compression.
					// There are three blocks before c-size-i, so we skip 3*numBytes
					cSizeStart = 3 * numBytes;

					for (var i = 0; i < blocks; i++) {

						var currentBlockSize = byteData[i * numBytes + cSizeStart];

						for (var j = 1; j < numBytes - 1; j++) {

							// Each data point consists of 8 bytes regardless of the header type
							currentBlockSize = currentBlockSize | byteData[i * numBytes + cSizeStart + j] << j * 8;
						}

						currentOffset = currentOffset + currentBlockSize;
						dataOffsets.push(currentOffset);
					}

					for (var i = 0; i < dataOffsets.length - 1; i++) {

						var inflate = new Zlib.Inflate(byteData.slice(dataOffsets[i], dataOffsets[i + 1]), { resize: true, verify: true }); // eslint-disable-line no-undef
						content = inflate.decompress();
						content = content.buffer;

						if (ele.attributes.type === 'Float32') {

							content = new Float32Array(content);
							txt = Float32Concat(txt, content);
						} else if (ele.attributes.type === 'Int64') {

							content = new Int32Array(content);
							txt = Int32Concat(txt, content);
						}
					}

					delete ele['#text'];

					// Get the content and optimize it
					if (ele.attributes.type === 'Float32') {

						if (ele.attributes.format === 'binary') {

							if (!compressed) {

								txt = txt.filter(function (el, idx) {

									if (idx !== 0) return true;
								});
							}
						}
					} else if (ele.attributes.type === 'Int64') {

						if (ele.attributes.format === 'binary') {

							if (!compressed) {

								txt = txt.filter(function (el, idx) {

									if (idx !== 0) return true;
								});
							}

							txt = txt.filter(function (el, idx) {

								if (idx % 2 !== 1) return true;
							});
						}
					}
				} else {

					if (ele.attributes.format === 'binary' && !compressed) {

						var content = Base64toByteArray(ele['#text']);

						//  VTP data for the uncompressed case has the following structure:
						// [#bytes][DATA]
						// where "[#bytes]" is an integer value specifying the number of bytes in the block of data following it.
						content = content.slice(numBytes).buffer;
					} else {

						if (ele['#text']) {

							var content = ele['#text'].split(/\s+/).filter(function (el) {

								if (el !== '') return el;
							});
						} else {

							var content = new Int32Array(0).buffer;
						}
					}

					delete ele['#text'];

					// Get the content and optimize it
					if (ele.attributes.type === 'Float32') {

						var txt = new Float32Array(content);
					} else if (ele.attributes.type === 'Int32') {

						var txt = new Int32Array(content);
					} else if (ele.attributes.type === 'Int64') {

						var txt = new Int32Array(content);

						if (ele.attributes.format === 'binary') {

							txt = txt.filter(function (el, idx) {

								if (idx % 2 !== 1) return true;
							});
						}
					}
				} // endif ( ele.attributes.format === 'binary' && compressed )

				return txt;
			}

			// Main part
			// Get Dom
			var dom = null;

			if (window.DOMParser) {

				try {

					dom = new DOMParser().parseFromString(stringFile, 'text/xml');
				} catch (e) {

					dom = null;
				}
			} else if (window.ActiveXObject) {

				try {

					dom = new ActiveXObject('Microsoft.XMLDOM'); // eslint-disable-line no-undef
					dom.async = false;

					if (!dom.loadXML()) {

						throw new Error(dom.parseError.reason + dom.parseError.srcText);
					}
				} catch (e) {

					dom = null;
				}
			} else {

				throw new Error('Cannot parse xml string!');
			}

			// Get the doc
			var doc = dom.documentElement;
			// Convert to json
			var json = xmlToJson(doc);
			var points = [];
			var normals = [];
			var indices = [];

			if (json.PolyData) {

				var piece = json.PolyData.Piece;
				var compressed = json.attributes.hasOwnProperty('compressor');

				// Can be optimized
				// Loop through the sections
				var sections = ['PointData', 'Points', 'Strips', 'Polys']; // +['CellData', 'Verts', 'Lines'];
				var sectionIndex = 0,
				    numberOfSections = sections.length;

				while (sectionIndex < numberOfSections) {

					var section = piece[sections[sectionIndex]];

					// If it has a DataArray in it

					if (section && section.DataArray) {

						// Depending on the number of DataArrays

						if (Object.prototype.toString.call(section.DataArray) === '[object Array]') {

							var arr = section.DataArray;
						} else {

							var arr = [section.DataArray];
						}

						var dataArrayIndex = 0,
						    numberOfDataArrays = arr.length;

						while (dataArrayIndex < numberOfDataArrays) {

							// Parse the DataArray
							if ('#text' in arr[dataArrayIndex] && arr[dataArrayIndex]['#text'].length > 0) {

								arr[dataArrayIndex].text = parseDataArray(arr[dataArrayIndex], compressed);
							}

							dataArrayIndex++;
						}

						switch (sections[sectionIndex]) {

							// if iti is point data
							case 'PointData':

								var numberOfPoints = parseInt(piece.attributes.NumberOfPoints);
								var normalsName = section.attributes.Normals;

								if (numberOfPoints > 0) {

									for (var i = 0, len = arr.length; i < len; i++) {

										if (normalsName === arr[i].attributes.Name) {

											var components = arr[i].attributes.NumberOfComponents;
											normals = new Float32Array(numberOfPoints * components);
											normals.set(arr[i].text, 0);
										}
									}
								}

								break;

							// if it is points
							case 'Points':

								var numberOfPoints = parseInt(piece.attributes.NumberOfPoints);

								if (numberOfPoints > 0) {

									var components = section.DataArray.attributes.NumberOfComponents;
									points = new Float32Array(numberOfPoints * components);
									points.set(section.DataArray.text, 0);
								}

								break;

							// if it is strips
							case 'Strips':

								var numberOfStrips = parseInt(piece.attributes.NumberOfStrips);

								if (numberOfStrips > 0) {

									var connectivity = new Int32Array(section.DataArray[0].text.length);
									var offset = new Int32Array(section.DataArray[1].text.length);
									connectivity.set(section.DataArray[0].text, 0);
									offset.set(section.DataArray[1].text, 0);

									var size = numberOfStrips + connectivity.length;
									indices = new Uint32Array(3 * size - 9 * numberOfStrips);

									var indicesIndex = 0;

									for (var i = 0, len = numberOfStrips; i < len; i++) {

										var strip = [];

										for (var s = 0, len1 = offset[i], len0 = 0; s < len1 - len0; s++) {

											strip.push(connectivity[s]);

											if (i > 0) len0 = offset[i - 1];
										}

										for (var j = 0, len1 = offset[i], len0 = 0; j < len1 - len0 - 2; j++) {

											if (j % 2) {

												indices[indicesIndex++] = strip[j];
												indices[indicesIndex++] = strip[j + 2];
												indices[indicesIndex++] = strip[j + 1];
											} else {

												indices[indicesIndex++] = strip[j];
												indices[indicesIndex++] = strip[j + 1];
												indices[indicesIndex++] = strip[j + 2];
											}

											if (i > 0) len0 = offset[i - 1];
										}
									}
								}

								break;

							// if it is polys
							case 'Polys':

								var numberOfPolys = parseInt(piece.attributes.NumberOfPolys);

								if (numberOfPolys > 0) {

									var connectivity = new Int32Array(section.DataArray[0].text.length);
									var offset = new Int32Array(section.DataArray[1].text.length);
									connectivity.set(section.DataArray[0].text, 0);
									offset.set(section.DataArray[1].text, 0);

									var size = numberOfPolys + connectivity.length;
									indices = new Uint32Array(3 * size - 9 * numberOfPolys);
									var indicesIndex = 0,
									    connectivityIndex = 0;
									var i = 0,
									    len = numberOfPolys,
									    len0 = 0;

									while (i < len) {

										var poly = [];
										var s = 0,
										    len1 = offset[i];

										while (s < len1 - len0) {

											poly.push(connectivity[connectivityIndex++]);
											s++;
										}

										var j = 1;

										while (j < len1 - len0 - 1) {

											indices[indicesIndex++] = poly[0];
											indices[indicesIndex++] = poly[j];
											indices[indicesIndex++] = poly[j + 1];
											j++;
										}

										i++;
										len0 = offset[i - 1];
									}
								}

								break;

							default:
								break;

						}
					}

					sectionIndex++;
				}

				var geometry = new THREE.BufferGeometry();
				geometry.setIndex(new THREE.BufferAttribute(indices, 1));
				geometry.addAttribute('position', new THREE.BufferAttribute(points, 3));

				if (normals.length === points.length) {

					geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));
				}

				return geometry;
			} else {

				// TODO for vtu,vti,and other xml formats

			}
		}

		function getStringFile(data) {

			var stringFile = '';
			var charArray = new Uint8Array(data);
			var i = 0;
			var len = charArray.length;

			while (len--) {

				stringFile += String.fromCharCode(charArray[i++]);
			}

			return stringFile;
		}

		// get the 5 first lines of the files to check if there is the key word binary
		var meta = THREE.LoaderUtils.decodeText(new Uint8Array(data, 0, 250)).split('\n');

		if (meta[0].indexOf('xml') !== -1) {

			return parseXML(getStringFile(data));
		} else if (meta[2].includes('ASCII')) {

			return parseASCII(getStringFile(data));
		} else {

			return parseBinary(data);
		}
	}

});

exports.default = THREE.VTKLoader;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _three = __webpack_require__(0);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function (global, factory) {

	( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global.THREE = global.THREE || {}, global.THREE.XLoader = factory());
})(undefined, function () {

	'use strict';

	var classCallCheck = function classCallCheck(instance, Constructor) {

		if (!(instance instanceof Constructor)) {

			throw new TypeError("Cannot call a class as a function");
		}
	};

	var createClass = function () {

		function defineProperties(target, props) {

			for (var i = 0; i < props.length; i++) {

				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {

			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var XboneInf = function XboneInf() {

		classCallCheck(this, XboneInf);

		this.boneName = "";
		this.BoneIndex = 0;
		this.Indeces = [];
		this.Weights = [];
		this.initMatrix = null;
		this.OffsetMatrix = null;
	};

	var XAnimationInfo = function XAnimationInfo() {

		classCallCheck(this, XAnimationInfo);

		this.animeName = "";
		this.boneName = "";
		this.targetBone = null;
		this.keyType = 4;
		this.frameStartLv = 0;
		this.keyFrames = [];
		this.InverseMx = null;
	};

	var XAnimationObj = function () {

		function XAnimationObj(_flags) {

			classCallCheck(this, XAnimationObj);

			this.fps = 30;
			this.name = 'xanimation';
			this.length = 0;
			this.hierarchy = [];
			this.putFlags = _flags;
			if (this.putFlags.putPos === undefined) {

				this.putFlags.putPos = true;
			}
			if (this.putFlags.putRot === undefined) {

				this.putFlags.putRot = true;
			}
			if (this.putFlags.putScl === undefined) {

				this.putFlags.putScl = true;
			}
		}

		createClass(XAnimationObj, [{
			key: "make",
			value: function make(XAnimationInfoArray) {

				for (var i = 0; i < XAnimationInfoArray.length; i++) {

					this.hierarchy.push(this.makeBonekeys(XAnimationInfoArray[i]));
				}
				this.length = this.hierarchy[0].keys[this.hierarchy[0].keys.length - 1].time;
			}
		}, {
			key: "clone",
			value: function clone() {

				return Object.assign({}, this);
			}
		}, {
			key: "makeBonekeys",
			value: function makeBonekeys(XAnimationInfo) {

				var refObj = {};
				refObj.name = XAnimationInfo.boneName;
				refObj.parent = "";
				refObj.keys = this.keyFrameRefactor(XAnimationInfo);
				refObj.copy = function () {

					return Object.assign({}, this);
				};
				return refObj;
			}
		}, {
			key: "keyFrameRefactor",
			value: function keyFrameRefactor(XAnimationInfo) {

				var keys = [];
				for (var i = 0; i < XAnimationInfo.keyFrames.length; i++) {

					var keyframe = {};
					keyframe.time = XAnimationInfo.keyFrames[i].time * this.fps;
					if (XAnimationInfo.keyFrames[i].pos && this.putFlags.putPos) {

						keyframe.pos = XAnimationInfo.keyFrames[i].pos;
					}
					if (XAnimationInfo.keyFrames[i].rot && this.putFlags.putRot) {

						keyframe.rot = XAnimationInfo.keyFrames[i].rot;
					}
					if (XAnimationInfo.keyFrames[i].scl && this.putFlags.putScl) {

						keyframe.scl = XAnimationInfo.keyFrames[i].scl;
					}
					if (XAnimationInfo.keyFrames[i].matrix) {

						keyframe.matrix = XAnimationInfo.keyFrames[i].matrix;
						if (this.putFlags.putPos) {

							keyframe.pos = new THREE.Vector3().setFromMatrixPosition(keyframe.matrix);
						}
						if (this.putFlags.putRot) {

							keyframe.rot = new THREE.Quaternion().setFromRotationMatrix(keyframe.matrix);
						}
						if (this.putFlags.putScl) {

							keyframe.scl = new THREE.Vector3().setFromMatrixScale(keyframe.matrix);
						}
					}
					keys.push(keyframe);
				}
				return keys;
			}
		}]);
		return XAnimationObj;
	}();

	var XKeyFrameInfo = function XKeyFrameInfo() {

		classCallCheck(this, XKeyFrameInfo);

		this.index = 0;
		this.Frame = 0;
		this.time = 0.0;
		this.matrix = null;
	};

	var XLoader = function () {

		function XLoader(manager, texloader) {

			classCallCheck(this, XLoader);

			this.debug = false;
			this.manager = manager !== undefined ? manager : new THREE.DefaultLoadingManager();
			this.texloader = texloader !== undefined ? texloader : new THREE.TextureLoader();
			this.url = "";
			this.baseDir = "";
			this._putMatLength = 0;
			this._nowMat = null;
			this._tmpUvArray = [];
			this._facesNormal = [];
			this._nowFrameName = "";
			this.frameHierarchie = [];
			this.Hierarchies = {};
			this.HieStack = [];
			this._currentObject = {};
			this._currentFrame = {};
			this._data = null;
			this.onLoad = null;
			this.IsUvYReverse = true;
			this.Meshes = [];
			this.animations = [];
			this.animTicksPerSecond = 30;
			this._currentGeo = null;
			this._currentAnime = null;
			this._currentAnimeFrames = null;
		}

		createClass(XLoader, [{
			key: '_setArgOption',
			value: function _setArgOption(_arg) {

				var _start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

				if (!_arg) {

					return;
				}
				for (var i = _start; i < _arg.length; i++) {

					switch (i) {

						case 0:
							this.url = _arg[i];
							break;
						case 1:
							this.options = _arg[i];
							break;

					}
				}
				if (this.options === undefined) {

					this.options = {};
				}
			}
		}, {
			key: 'load',
			value: function load(_arg, onLoad, onProgress, onError) {

				var _this = this;

				this._setArgOption(_arg);
				var loader = new THREE.FileLoader(this.manager);
				loader.setResponseType('arraybuffer');
				loader.load(this.url, function (response) {

					_this._parse(response, onLoad);
				}, onProgress, onError);
			}
		}, {
			key: 'fromResponsedData',
			value: function fromResponsedData(_data, _arg, onLoad) {

				this._setArgOption(_arg);
				this._parse(_data, onLoad);
			}
		}, {
			key: '_readLine',
			value: function _readLine(line) {

				var readed = 0;
				while (true) {

					var find = -1;
					find = line.indexOf('//', readed);
					if (find === -1) {

						find = line.indexOf('#', readed);
					}
					if (find > -1 && find < 2) {

						var foundNewLine = -1;
						foundNewLine = line.indexOf("\r\n", readed);
						if (foundNewLine > 0) {

							readed = foundNewLine + 2;
						} else {

							foundNewLine = line.indexOf("\r", readed);
							if (foundNewLine > 0) {

								readed = foundNewLine + 1;
							} else {

								readed = line.indexOf("\n", readed) + 1;
							}
						}
					} else {

						break;
					}
				}
				return line.substr(readed);
			}
		}, {
			key: '_readLine',
			value: function _readLine(line) {

				var readed = 0;
				while (true) {

					var find = -1;
					find = line.indexOf('//', readed);
					if (find === -1) {

						find = line.indexOf('#', readed);
					}
					if (find > -1 && find < 2) {

						var foundNewLine = -1;
						foundNewLine = line.indexOf("\r\n", readed);
						if (foundNewLine > 0) {

							readed = foundNewLine + 2;
						} else {

							foundNewLine = line.indexOf("\r", readed);
							if (foundNewLine > 0) {

								readed = foundNewLine + 1;
							} else {

								readed = line.indexOf("\n", readed) + 1;
							}
						}
					} else {

						break;
					}
				}
				return line.substr(readed);
			}
		}, {
			key: '_isBinary',
			value: function _isBinary(binData) {

				var reader = new DataView(binData);
				var face_size = 32 / 8 * 3 + 32 / 8 * 3 * 3 + 16 / 8;
				var n_faces = reader.getUint32(80, true);
				var expect = 80 + 32 / 8 + n_faces * face_size;
				if (expect === reader.byteLength) {

					return true;
				}
				var fileLength = reader.byteLength;
				for (var index = 0; index < fileLength; index++) {

					if (reader.getUint8(index, false) > 127) {

						return true;
					}
				}
				return false;
			}
		}, {
			key: 'ensureBinary',
			value: function ensureBinary(buf) {

				if (typeof buf === "string") {

					var array_buffer = new Uint8Array(buf.length);
					for (var i = 0; i < buf.length; i++) {

						array_buffer[i] = buf.charCodeAt(i) & 0xff;
					}
					return array_buffer.buffer || array_buffer;
				} else {

					return buf;
				}
			}
		}, {
			key: 'ensureString',
			value: function ensureString(buf) {

				if (typeof buf !== "string") {

					return THREE.LoaderUtils.decodeText(new Uint8Array(buf));
				} else {

					return buf;
				}
			}
		}, {
			key: '_parse',
			value: function _parse(data, onLoad) {

				var binData = this.ensureBinary(data);
				this._data = this.ensureString(data);
				this.onLoad = onLoad;
				return this._isBinary(binData) ? this._parseBinary(binData) : this._parseASCII();
			}
		}, {
			key: '_parseBinary',
			value: function _parseBinary(data) {

				return this._parseASCII(THREE.LoaderUtils.decodeText(new Uint8Array(data)));
			}
		}, {
			key: '_parseASCII',
			value: function _parseASCII() {

				if (this.url.lastIndexOf("/") > 0) {

					this.baseDir = this.url.substr(0, this.url.lastIndexOf("/") + 1);
				}
				var endRead = 16;
				this.Hierarchies.children = [];
				this._hierarchieParse(this.Hierarchies, endRead);
				this._changeRoot();
				this._currentObject = this.Hierarchies.children.shift();
				this.mainloop();
			}
		}, {
			key: '_hierarchieParse',
			value: function _hierarchieParse(_parent, _end) {

				var endRead = _end;
				while (true) {

					var find1 = this._data.indexOf('{', endRead) + 1;
					var findEnd = this._data.indexOf('}', endRead);
					var findNext = this._data.indexOf('{', find1) + 1;
					if (find1 > 0 && findEnd > find1) {

						var _currentObject = {};
						_currentObject.children = [];
						var nameData = this._readLine(this._data.substr(endRead, find1 - endRead - 1)).trim();
						var word = nameData.split(/ /g);
						if (word.length > 0) {

							_currentObject.type = word[0];
							if (word.length >= 2) {

								_currentObject.name = word[1];
							} else {

								_currentObject.name = word[0] + this.Hierarchies.children.length;
							}
						} else {

							_currentObject.name = nameData;
							_currentObject.type = "";
						}
						if (_currentObject.type === "Animation") {

							_currentObject.data = this._data.substr(findNext, findEnd - findNext).trim();
							var refs = this._hierarchieParse(_currentObject, findEnd + 1);
							endRead = refs.end;
							_currentObject.children = refs.parent.children;
						} else {

							var DataEnder = this._data.lastIndexOf(';', findNext > 0 ? Math.min(findNext, findEnd) : findEnd);
							_currentObject.data = this._data.substr(find1, DataEnder - find1).trim();
							if (findNext <= 0 || findEnd < findNext) {

								endRead = findEnd + 1;
							} else {

								var nextStart = Math.max(DataEnder + 1, find1);
								var _refs = this._hierarchieParse(_currentObject, nextStart);
								endRead = _refs.end;
								_currentObject.children = _refs.parent.children;
							}
						}
						_currentObject.parent = _parent;
						if (_currentObject.type != "template") {

							_parent.children.push(_currentObject);
						}
					} else {

						endRead = find1 === -1 ? this._data.length : findEnd + 1;
						break;
					}
				}
				return {
					parent: _parent,
					end: endRead
				};
			}
		}, {
			key: 'mainloop',
			value: function mainloop() {

				var _this2 = this;

				this.mainProc();
				if (this._currentObject.parent || this._currentObject.children.length > 0 || !this._currentObject.worked) {

					setTimeout(function () {

						_this2.mainloop();
					}, 1);
				} else {

					setTimeout(function () {

						_this2.onLoad({
							models: _this2.Meshes,
							animations: _this2.animations
						});
					}, 1);
				}
			}
		}, {
			key: 'mainProc',
			value: function mainProc() {

				var breakFlag = false;
				while (true) {

					if (!this._currentObject.worked) {

						switch (this._currentObject.type) {

							case "template":
								break;
							case "AnimTicksPerSecond":
								this.animTicksPerSecond = parseInt(this._currentObject.data);
								break;
							case "Frame":
								this._setFrame();
								break;
							case "FrameTransformMatrix":
								this._setFrameTransformMatrix();
								break;
							case "Mesh":
								this._changeRoot();
								this._currentGeo = {};
								this._currentGeo.name = this._currentObject.name.trim();
								this._currentGeo.parentName = this._getParentName(this._currentObject).trim();
								this._currentGeo.VertexSetedBoneCount = [];
								this._currentGeo.Geometry = new THREE.Geometry();
								this._currentGeo.Materials = [];
								this._currentGeo.normalVectors = [];
								this._currentGeo.BoneInfs = [];
								this._currentGeo.baseFrame = this._currentFrame;
								this._makeBoneFrom_CurrentFrame();
								this._readVertexDatas();
								breakFlag = true;
								break;
							case "MeshNormals":
								this._readVertexDatas();
								break;
							case "MeshTextureCoords":
								this._setMeshTextureCoords();
								break;
							case "VertexDuplicationIndices":
								break;
							case "MeshMaterialList":
								this._setMeshMaterialList();
								break;
							case "Material":
								this._setMaterial();
								break;
							case "SkinWeights":
								this._setSkinWeights();
								break;
							case "AnimationSet":
								this._changeRoot();
								this._currentAnime = {};
								this._currentAnime.name = this._currentObject.name.trim();
								this._currentAnime.AnimeFrames = [];
								break;
							case "Animation":
								if (this._currentAnimeFrames) {

									this._currentAnime.AnimeFrames.push(this._currentAnimeFrames);
								}
								this._currentAnimeFrames = new XAnimationInfo();
								this._currentAnimeFrames.boneName = this._currentObject.data.trim();
								break;
							case "AnimationKey":
								this._readAnimationKey();
								breakFlag = true;
								break;

						}
						this._currentObject.worked = true;
					}
					if (this._currentObject.children.length > 0) {

						this._currentObject = this._currentObject.children.shift();
						if (this.debug) {

							console.log('processing ' + this._currentObject.name);
						}
						if (breakFlag) break;
					} else {

						if (this._currentObject.worked) {

							if (this._currentObject.parent && !this._currentObject.parent.parent) {

								this._changeRoot();
							}
						}
						if (this._currentObject.parent) {

							this._currentObject = this._currentObject.parent;
						} else {

							breakFlag = true;
						}
						if (breakFlag) break;
					}
				}
				return;
			}
		}, {
			key: '_changeRoot',
			value: function _changeRoot() {

				if (this._currentGeo != null && this._currentGeo.name) {

					this._makeOutputGeometry();
				}
				this._currentGeo = {};
				if (this._currentAnime != null && this._currentAnime.name) {

					if (this._currentAnimeFrames) {

						this._currentAnime.AnimeFrames.push(this._currentAnimeFrames);
						this._currentAnimeFrames = null;
					}
					this._makeOutputAnimation();
				}
				this._currentAnime = {};
			}
		}, {
			key: '_getParentName',
			value: function _getParentName(_obj) {

				if (_obj.parent) {

					if (_obj.parent.name) {

						return _obj.parent.name;
					} else {

						return this._getParentName(_obj.parent);
					}
				} else {

					return "";
				}
			}
		}, {
			key: '_setFrame',
			value: function _setFrame() {

				this._nowFrameName = this._currentObject.name.trim();
				this._currentFrame = {};
				this._currentFrame.name = this._nowFrameName;
				this._currentFrame.children = [];
				if (this._currentObject.parent && this._currentObject.parent.name) {

					this._currentFrame.parentName = this._currentObject.parent.name;
				}
				this.frameHierarchie.push(this._nowFrameName);
				this.HieStack[this._nowFrameName] = this._currentFrame;
			}
		}, {
			key: '_setFrameTransformMatrix',
			value: function _setFrameTransformMatrix() {

				this._currentFrame.FrameTransformMatrix = new THREE.Matrix4();
				var data = this._currentObject.data.split(",");
				this._ParseMatrixData(this._currentFrame.FrameTransformMatrix, data);
				this._makeBoneFrom_CurrentFrame();
			}
		}, {
			key: '_makeBoneFrom_CurrentFrame',
			value: function _makeBoneFrom_CurrentFrame() {

				if (!this._currentFrame.FrameTransformMatrix) {

					return;
				}
				var b = new THREE.Bone();
				b.name = this._currentFrame.name;
				b.applyMatrix(this._currentFrame.FrameTransformMatrix);
				b.matrixWorld = b.matrix;
				b.FrameTransformMatrix = this._currentFrame.FrameTransformMatrix;
				this._currentFrame.putBone = b;
				if (this._currentFrame.parentName) {

					for (var frame in this.HieStack) {

						if (this.HieStack[frame].name === this._currentFrame.parentName) {

							this.HieStack[frame].putBone.add(this._currentFrame.putBone);
						}
					}
				}
			}
		}, {
			key: '_readVertexDatas',
			value: function _readVertexDatas() {

				var endRead = 0;
				var mode = 0;
				var mode_local = 0;
				var maxLength = 0;
				var nowReadedLine = 0;
				while (true) {

					var changeMode = false;
					if (mode_local === 0) {

						var refO = this._readInt1(endRead);
						endRead = refO.endRead;
						mode_local = 1;
						nowReadedLine = 0;
						maxLength = this._currentObject.data.indexOf(';;', endRead) + 1;
						if (maxLength <= 0) {

							maxLength = this._currentObject.data.length;
						}
					} else {

						var find = 0;
						switch (mode) {

							case 0:
								find = this._currentObject.data.indexOf(',', endRead) + 1;
								break;
							case 1:
								find = this._currentObject.data.indexOf(';,', endRead) + 1;
								break;

						}
						if (find === 0 || find > maxLength) {

							find = maxLength;
							mode_local = 0;
							changeMode = true;
						}
						switch (this._currentObject.type) {

							case "Mesh":
								switch (mode) {

									case 0:
										this._readVertex1(this._currentObject.data.substr(endRead, find - endRead));
										break;
									case 1:
										this._readFace1(this._currentObject.data.substr(endRead, find - endRead));
										break;

								}
								break;
							case "MeshNormals":
								switch (mode) {

									case 0:
										this._readNormalVector1(this._currentObject.data.substr(endRead, find - endRead));
										break;
									case 1:
										this._readNormalFace1(this._currentObject.data.substr(endRead, find - endRead), nowReadedLine);
										break;

								}
								break;

						}
						endRead = find + 1;
						nowReadedLine++;
						if (changeMode) {

							mode++;
						}
					}
					if (endRead >= this._currentObject.data.length) {

						break;
					}
				}
			}
		}, {
			key: '_readInt1',
			value: function _readInt1(start) {

				var find = this._currentObject.data.indexOf(';', start);
				return {
					refI: parseInt(this._currentObject.data.substr(start, find - start)),
					endRead: find + 1
				};
			}
		}, {
			key: '_readVertex1',
			value: function _readVertex1(line) {

				var data = this._readLine(line.trim()).substr(0, line.length - 2).split(";");
				this._currentGeo.Geometry.vertices.push(new THREE.Vector3(parseFloat(data[0]), parseFloat(data[1]), parseFloat(data[2])));
				this._currentGeo.Geometry.skinIndices.push(new THREE.Vector4(0, 0, 0, 0));
				this._currentGeo.Geometry.skinWeights.push(new THREE.Vector4(1, 0, 0, 0));
				this._currentGeo.VertexSetedBoneCount.push(0);
			}
		}, {
			key: '_readFace1',
			value: function _readFace1(line) {

				var data = this._readLine(line.trim()).substr(2, line.length - 4).split(",");
				this._currentGeo.Geometry.faces.push(new THREE.Face3(parseInt(data[0], 10), parseInt(data[1], 10), parseInt(data[2], 10), new THREE.Vector3(1, 1, 1).normalize()));
			}
		}, {
			key: '_readNormalVector1',
			value: function _readNormalVector1(line) {

				var data = this._readLine(line.trim()).substr(0, line.length - 2).split(";");
				this._currentGeo.normalVectors.push(new THREE.Vector3(parseFloat(data[0]), parseFloat(data[1]), parseFloat(data[2])));
			}
		}, {
			key: '_readNormalFace1',
			value: function _readNormalFace1(line, nowReaded) {

				var data = this._readLine(line.trim()).substr(2, line.length - 4).split(",");
				var nowID = parseInt(data[0], 10);
				var v1 = this._currentGeo.normalVectors[nowID];
				nowID = parseInt(data[1], 10);
				var v2 = this._currentGeo.normalVectors[nowID];
				nowID = parseInt(data[2], 10);
				var v3 = this._currentGeo.normalVectors[nowID];
				this._currentGeo.Geometry.faces[nowReaded].vertexNormals = [v1, v2, v3];
			}
		}, {
			key: '_setMeshNormals',
			value: function _setMeshNormals() {

				var endRead = 0;
				var mode = 0;
				var mode_local = 0;
				while (true) {

					switch (mode) {

						case 0:
							if (mode_local === 0) {

								var refO = this._readInt1(0);
								endRead = refO.endRead;
								mode_local = 1;
							} else {

								var find = this._currentObject.data.indexOf(',', endRead) + 1;
								if (find === -1) {

									find = this._currentObject.data.indexOf(';;', endRead) + 1;
									mode = 2;
									mode_local = 0;
								}
								var line = this._currentObject.data.substr(endRead, find - endRead);
								var data = this._readLine(line.trim()).split(";");
								this._currentGeo.normalVectors.push([parseFloat(data[0]), parseFloat(data[1]), parseFloat(data[2])]);
								endRead = find + 1;
							}
							break;

					}
					if (endRead >= this._currentObject.data.length) {

						break;
					}
				}
			}
		}, {
			key: '_setMeshTextureCoords',
			value: function _setMeshTextureCoords() {

				this._tmpUvArray = [];
				this._currentGeo.Geometry.faceVertexUvs = [];
				this._currentGeo.Geometry.faceVertexUvs.push([]);
				var endRead = 0;
				var mode = 0;
				var mode_local = 0;
				while (true) {

					switch (mode) {

						case 0:
							if (mode_local === 0) {

								var refO = this._readInt1(0);
								endRead = refO.endRead;
								mode_local = 1;
							} else {

								var find = this._currentObject.data.indexOf(',', endRead) + 1;
								if (find === 0) {

									find = this._currentObject.data.length;
									mode = 2;
									mode_local = 0;
								}
								var line = this._currentObject.data.substr(endRead, find - endRead);
								var data = this._readLine(line.trim()).split(";");
								if (this.IsUvYReverse) {

									this._tmpUvArray.push(new THREE.Vector2(parseFloat(data[0]), 1 - parseFloat(data[1])));
								} else {

									this._tmpUvArray.push(new THREE.Vector2(parseFloat(data[0]), parseFloat(data[1])));
								}
								endRead = find + 1;
							}
							break;

					}
					if (endRead >= this._currentObject.data.length) {

						break;
					}
				}
				this._currentGeo.Geometry.faceVertexUvs[0] = [];
				for (var m = 0; m < this._currentGeo.Geometry.faces.length; m++) {

					this._currentGeo.Geometry.faceVertexUvs[0][m] = [];
					this._currentGeo.Geometry.faceVertexUvs[0][m].push(this._tmpUvArray[this._currentGeo.Geometry.faces[m].a]);
					this._currentGeo.Geometry.faceVertexUvs[0][m].push(this._tmpUvArray[this._currentGeo.Geometry.faces[m].b]);
					this._currentGeo.Geometry.faceVertexUvs[0][m].push(this._tmpUvArray[this._currentGeo.Geometry.faces[m].c]);
				}
				this._currentGeo.Geometry.uvsNeedUpdate = true;
			}
		}, {
			key: '_setMeshMaterialList',
			value: function _setMeshMaterialList() {

				var endRead = 0;
				var mode = 0;
				var mode_local = 0;
				while (true) {

					if (mode_local < 2) {

						var refO = this._readInt1(endRead);
						endRead = refO.endRead;
						mode_local++;
					} else {

						var find = this._currentObject.data.indexOf(';', endRead);
						if (find === -1) {

							find = this._currentObject.data.length;
							mode = 3;
							mode_local = 0;
						}
						var line = this._currentObject.data.substr(endRead, find - endRead);
						var data = this._readLine(line.trim()).split(",");
						for (var i = 0; i < data.length; i++) {

							this._currentGeo.Geometry.faces[i].materialIndex = parseInt(data[i]);
						}
						endRead = this._currentObject.data.length;
					}
					if (endRead >= this._currentObject.data.length || mode >= 3) {

						break;
					}
				}
			}
		}, {
			key: '_setMaterial',
			value: function _setMaterial() {

				var _nowMat = new THREE.MeshPhongMaterial({
					color: Math.random() * 0xffffff
				});
				_nowMat.side = THREE.FrontSide;
				_nowMat.name = this._currentObject.name;
				var endRead = 0;
				var find = this._currentObject.data.indexOf(';;', endRead);
				var line = this._currentObject.data.substr(endRead, find - endRead);
				var data = this._readLine(line.trim()).split(";");
				_nowMat.color.r = parseFloat(data[0]);
				_nowMat.color.g = parseFloat(data[1]);
				_nowMat.color.b = parseFloat(data[2]);
				endRead = find + 2;
				find = this._currentObject.data.indexOf(';', endRead);
				line = this._currentObject.data.substr(endRead, find - endRead);
				_nowMat.shininess = parseFloat(this._readLine(line));
				endRead = find + 1;
				find = this._currentObject.data.indexOf(';;', endRead);
				line = this._currentObject.data.substr(endRead, find - endRead);
				var data2 = this._readLine(line.trim()).split(";");
				_nowMat.specular.r = parseFloat(data2[0]);
				_nowMat.specular.g = parseFloat(data2[1]);
				_nowMat.specular.b = parseFloat(data2[2]);
				endRead = find + 2;
				find = this._currentObject.data.indexOf(';;', endRead);
				if (find === -1) {

					find = this._currentObject.data.length;
				}
				line = this._currentObject.data.substr(endRead, find - endRead);
				var data3 = this._readLine(line.trim()).split(";");
				_nowMat.emissive.r = parseFloat(data3[0]);
				_nowMat.emissive.g = parseFloat(data3[1]);
				_nowMat.emissive.b = parseFloat(data3[2]);
				var localObject = null;
				while (true) {

					if (this._currentObject.children.length > 0) {

						localObject = this._currentObject.children.shift();
						if (this.debug) {

							console.log('processing ' + localObject.name);
						}
						var fileName = localObject.data.substr(1, localObject.data.length - 2);
						switch (localObject.type) {

							case "TextureFilename":
								_nowMat.map = this.texloader.load(this.baseDir + fileName);
								break;
							case "BumpMapFilename":
								_nowMat.bumpMap = this.texloader.load(this.baseDir + fileName);
								_nowMat.bumpScale = 0.05;
								break;
							case "NormalMapFilename":
								_nowMat.normalMap = this.texloader.load(this.baseDir + fileName);
								_nowMat.normalScale = new THREE.Vector2(2, 2);
								break;
							case "EmissiveMapFilename":
								_nowMat.emissiveMap = this.texloader.load(this.baseDir + fileName);
								break;
							case "LightMapFilename":
								_nowMat.lightMap = this.texloader.load(this.baseDir + fileName);
								break;

						}
					} else {

						break;
					}
				}
				this._currentGeo.Materials.push(_nowMat);
			}
		}, {
			key: '_setSkinWeights',
			value: function _setSkinWeights() {

				var boneInf = new XboneInf();
				var endRead = 0;
				var find = this._currentObject.data.indexOf(';', endRead);
				var line = this._currentObject.data.substr(endRead, find - endRead);
				endRead = find + 1;
				boneInf.boneName = line.substr(1, line.length - 2);
				boneInf.BoneIndex = this._currentGeo.BoneInfs.length;
				find = this._currentObject.data.indexOf(';', endRead);
				endRead = find + 1;
				find = this._currentObject.data.indexOf(';', endRead);
				line = this._currentObject.data.substr(endRead, find - endRead);
				var data = this._readLine(line.trim()).split(",");
				for (var i = 0; i < data.length; i++) {

					boneInf.Indeces.push(parseInt(data[i]));
				}
				endRead = find + 1;
				find = this._currentObject.data.indexOf(';', endRead);
				line = this._currentObject.data.substr(endRead, find - endRead);
				var data2 = this._readLine(line.trim()).split(",");
				for (var _i = 0; _i < data2.length; _i++) {

					boneInf.Weights.push(parseFloat(data2[_i]));
				}
				endRead = find + 1;
				find = this._currentObject.data.indexOf(';', endRead);
				if (find <= 0) {

					find = this._currentObject.data.length;
				}
				line = this._currentObject.data.substr(endRead, find - endRead);
				var data3 = this._readLine(line.trim()).split(",");
				boneInf.OffsetMatrix = new THREE.Matrix4();
				this._ParseMatrixData(boneInf.OffsetMatrix, data3);
				this._currentGeo.BoneInfs.push(boneInf);
			}
		}, {
			key: '_makePutBoneList',
			value: function _makePutBoneList(_RootName, _bones) {

				var putting = false;
				for (var frame in this.HieStack) {

					if (this.HieStack[frame].name === _RootName || putting) {

						putting = true;
						var b = new THREE.Bone();
						b.name = this.HieStack[frame].name;
						b.applyMatrix(this.HieStack[frame].FrameTransformMatrix);
						b.matrixWorld = b.matrix;
						b.FrameTransformMatrix = this.HieStack[frame].FrameTransformMatrix;
						b.pos = new THREE.Vector3().setFromMatrixPosition(b.FrameTransformMatrix).toArray();
						b.rotq = new THREE.Quaternion().setFromRotationMatrix(b.FrameTransformMatrix).toArray();
						b.scl = new THREE.Vector3().setFromMatrixScale(b.FrameTransformMatrix).toArray();
						if (this.HieStack[frame].parentName && this.HieStack[frame].parentName.length > 0) {

							for (var i = 0; i < _bones.length; i++) {

								if (this.HieStack[frame].parentName === _bones[i].name) {

									_bones[i].add(b);
									b.parent = i;
									break;
								}
							}
						}
						_bones.push(b);
					}
				}
			}
		}, {
			key: '_makeOutputGeometry',
			value: function _makeOutputGeometry() {

				this._currentGeo.Geometry.computeBoundingBox();
				this._currentGeo.Geometry.computeBoundingSphere();
				this._currentGeo.Geometry.verticesNeedUpdate = true;
				this._currentGeo.Geometry.normalsNeedUpdate = true;
				this._currentGeo.Geometry.colorsNeedUpdate = true;
				this._currentGeo.Geometry.uvsNeedUpdate = true;
				this._currentGeo.Geometry.groupsNeedUpdate = true;
				var mesh = null;
				if (this._currentGeo.BoneInfs.length > 0) {

					var putBones = [];
					this._makePutBoneList(this._currentGeo.baseFrame.parentName, putBones);
					for (var bi = 0; bi < this._currentGeo.BoneInfs.length; bi++) {

						var boneIndex = 0;
						for (var bb = 0; bb < putBones.length; bb++) {

							if (putBones[bb].name === this._currentGeo.BoneInfs[bi].boneName) {

								boneIndex = bb;
								putBones[bb].OffsetMatrix = new THREE.Matrix4();
								putBones[bb].OffsetMatrix.copy(this._currentGeo.BoneInfs[bi].OffsetMatrix);
								break;
							}
						}
						for (var vi = 0; vi < this._currentGeo.BoneInfs[bi].Indeces.length; vi++) {

							var nowVertexID = this._currentGeo.BoneInfs[bi].Indeces[vi];
							var nowVal = this._currentGeo.BoneInfs[bi].Weights[vi];
							switch (this._currentGeo.VertexSetedBoneCount[nowVertexID]) {

								case 0:
									this._currentGeo.Geometry.skinIndices[nowVertexID].x = boneIndex;
									this._currentGeo.Geometry.skinWeights[nowVertexID].x = nowVal;
									break;
								case 1:
									this._currentGeo.Geometry.skinIndices[nowVertexID].y = boneIndex;
									this._currentGeo.Geometry.skinWeights[nowVertexID].y = nowVal;
									break;
								case 2:
									this._currentGeo.Geometry.skinIndices[nowVertexID].z = boneIndex;
									this._currentGeo.Geometry.skinWeights[nowVertexID].z = nowVal;
									break;
								case 3:
									this._currentGeo.Geometry.skinIndices[nowVertexID].w = boneIndex;
									this._currentGeo.Geometry.skinWeights[nowVertexID].w = nowVal;
									break;

							}
							this._currentGeo.VertexSetedBoneCount[nowVertexID]++;
							if (this._currentGeo.VertexSetedBoneCount[nowVertexID] > 4) {

								console.log('warn! over 4 bone weight! :' + nowVertexID);
							}
						}
					}
					for (var sk = 0; sk < this._currentGeo.Materials.length; sk++) {

						this._currentGeo.Materials[sk].skinning = true;
					}
					var offsetList = [];
					for (var _bi = 0; _bi < putBones.length; _bi++) {

						if (putBones[_bi].OffsetMatrix) {

							offsetList.push(putBones[_bi].OffsetMatrix);
						} else {

							offsetList.push(new THREE.Matrix4());
						}
					}
					var bufferGeometry = new THREE.BufferGeometry().fromGeometry(this._currentGeo.Geometry);
					bufferGeometry.bones = putBones;
					mesh = new THREE.SkinnedMesh(bufferGeometry, this._currentGeo.Materials.length === 1 ? this._currentGeo.Materials[0] : this._currentGeo.Materials);
					mesh.skeleton.boneInverses = offsetList;
				} else {

					var _bufferGeometry = new THREE.BufferGeometry().fromGeometry(this._currentGeo.Geometry);
					mesh = new THREE.Mesh(_bufferGeometry, this._currentGeo.Materials.length === 1 ? this._currentGeo.Materials[0] : this._currentGeo.Materials);
				}
				mesh.name = this._currentGeo.name;
				var worldBaseMx = new THREE.Matrix4();
				var currentMxFrame = this._currentGeo.baseFrame.putBone;
				if (currentMxFrame && currentMxFrame.parent) {

					while (true) {

						currentMxFrame = currentMxFrame.parent;
						if (currentMxFrame) {

							worldBaseMx.multiply(currentMxFrame.FrameTransformMatrix);
						} else {

							break;
						}
					}
					mesh.applyMatrix(worldBaseMx);
				}
				this.Meshes.push(mesh);
			}
		}, {
			key: '_readAnimationKey',
			value: function _readAnimationKey() {

				var endRead = 0;
				var find = this._currentObject.data.indexOf(';', endRead);
				var line = this._currentObject.data.substr(endRead, find - endRead);
				endRead = find + 1;
				var nowKeyType = parseInt(this._readLine(line));
				find = this._currentObject.data.indexOf(';', endRead);
				endRead = find + 1;
				line = this._currentObject.data.substr(endRead);
				var data = this._readLine(line.trim()).split(";;,");
				for (var i = 0; i < data.length; i++) {

					var data2 = data[i].split(";");
					var keyInfo = new XKeyFrameInfo();
					keyInfo.type = nowKeyType;
					keyInfo.Frame = parseInt(data2[0]);
					keyInfo.index = this._currentAnimeFrames.keyFrames.length;
					keyInfo.time = keyInfo.Frame;
					if (nowKeyType != 4) {

						var frameFound = false;
						for (var mm = 0; mm < this._currentAnimeFrames.keyFrames.length; mm++) {

							if (this._currentAnimeFrames.keyFrames[mm].Frame === keyInfo.Frame) {

								keyInfo = this._currentAnimeFrames.keyFrames[mm];
								frameFound = true;
								break;
							}
						}
						var frameValue = data2[2].split(",");
						switch (nowKeyType) {

							case 0:
								keyInfo.rot = new THREE.Quaternion(parseFloat(frameValue[1]), parseFloat(frameValue[2]), parseFloat(frameValue[3]), parseFloat(frameValue[0]) * -1);
								break;
							case 1:
								keyInfo.scl = new THREE.Vector3(parseFloat(frameValue[0]), parseFloat(frameValue[1]), parseFloat(frameValue[2]));
								break;
							case 2:
								keyInfo.pos = new THREE.Vector3(parseFloat(frameValue[0]), parseFloat(frameValue[1]), parseFloat(frameValue[2]));
								break;

						}
						if (!frameFound) {

							this._currentAnimeFrames.keyFrames.push(keyInfo);
						}
					} else {

						keyInfo.matrix = new THREE.Matrix4();
						this._ParseMatrixData(keyInfo.matrix, data2[2].split(","));
						this._currentAnimeFrames.keyFrames.push(keyInfo);
					}
				}
			}
		}, {
			key: '_makeOutputAnimation',
			value: function _makeOutputAnimation() {

				var animationObj = new XAnimationObj(this.options);
				animationObj.fps = this.animTicksPerSecond;
				animationObj.name = this._currentAnime.name;
				animationObj.make(this._currentAnime.AnimeFrames);
				this.animations.push(animationObj);
			}
		}, {
			key: 'assignAnimation',
			value: function assignAnimation(_model, _animation, _isBind) {

				var model = _model;
				var animation = _animation;
				if (!model) {

					model = this.Meshes[0];
				}
				if (!animation) {

					animation = this.animations[0];
				}
				if (!model || !animation) {

					return null;
				}
				var put = {};
				put.fps = animation.fps;
				put.name = animation.name;
				put.length = animation.length;
				put.hierarchy = [];
				for (var b = 0; b < model.skeleton.bones.length; b++) {

					var findAnimation = false;
					for (var i = 0; i < animation.hierarchy.length; i++) {

						if (model.skeleton.bones[b].name === animation.hierarchy[i].name) {

							findAnimation = true;
							var c_key = animation.hierarchy[i].copy();
							c_key.parent = -1;
							if (model.skeleton.bones[b].parent && model.skeleton.bones[b].parent.type === "Bone") {

								for (var bb = 0; bb < put.hierarchy.length; bb++) {

									if (put.hierarchy[bb].name === model.skeleton.bones[b].parent.name) {

										c_key.parent = bb;
										c_key.parentName = model.skeleton.bones[b].parent.name;
									}
								}
							}
							put.hierarchy.push(c_key);
							break;
						}
					}
					if (!findAnimation) {

						var _c_key = animation.hierarchy[0].copy();
						_c_key.name = model.skeleton.bones[b].name;
						_c_key.parent = -1;
						for (var k = 0; k < _c_key.keys.length; k++) {

							if (_c_key.keys[k].pos) {

								_c_key.keys[k].pos.set(0, 0, 0);
							}
							if (_c_key.keys[k].scl) {

								_c_key.keys[k].scl.set(1, 1, 1);
							}
							if (_c_key.keys[k].rot) {

								_c_key.keys[k].rot.set(0, 0, 0, 1);
							}
						}
						put.hierarchy.push(_c_key);
					}
				}
				if (!model.geometry.animations) {

					model.geometry.animations = [];
				}

				model.geometry.animations.push(THREE.AnimationClip.parseAnimation(put, model.skeleton.bones));
				if (!model.animationMixer) {

					model.animationMixer = new THREE.AnimationMixer(model);
				}

				return put;
			}
		}, {
			key: '_ParseMatrixData',
			value: function _ParseMatrixData(targetMatrix, data) {

				targetMatrix.set(parseFloat(data[0]), parseFloat(data[4]), parseFloat(data[8]), parseFloat(data[12]), parseFloat(data[1]), parseFloat(data[5]), parseFloat(data[9]), parseFloat(data[13]), parseFloat(data[2]), parseFloat(data[6]), parseFloat(data[10]), parseFloat(data[14]), parseFloat(data[3]), parseFloat(data[7]), parseFloat(data[11]), parseFloat(data[15]));
			}
		}]);
		return XLoader;
	}();

	return XLoader;
});

exports.default = THREE.XLoader;

/***/ })
/******/ ])));