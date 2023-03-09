"use strict";
(self["webpackChunkexpennies"] = self["webpackChunkexpennies"] || []).push([["transactions"],{

/***/ "./resources/js/ajax.js":
/*!******************************!*\
  !*** ./resources/js/ajax.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















var ajax = function ajax(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var domElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  method = method.toLowerCase();
  var options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  };
  var csrfMethods = new Set(['post', 'put', 'delete', 'patch']);

  if (csrfMethods.has(method)) {
    var additionalFields = _objectSpread({}, getCsrfFields());

    if (method !== 'post') {
      options.method = 'post';
      additionalFields._METHOD = method.toUpperCase();
    }

    if (data instanceof FormData) {
      for (var additionalField in additionalFields) {
        data.append(additionalField, additionalFields[additionalField]);
      }

      delete options.headers['Content-Type'];
      options.body = data;
    } else {
      options.body = JSON.stringify(_objectSpread(_objectSpread({}, data), additionalFields));
    }
  } else if (method === 'get') {
    url += '?' + new URLSearchParams(data).toString();
  }

  return fetch(url, options).then(function (response) {
    if (domElement) {
      clearValidationErrors(domElement);
    }

    if (!response.ok) {
      if (response.status === 422) {
        response.json().then(function (errors) {
          handleValidationErrors(errors, domElement);
        });
      }
    }

    return response;
  });
};

var get = function get(url, data) {
  return ajax(url, 'get', data);
};

var post = function post(url, data, domElement) {
  return ajax(url, 'post', data, domElement);
};

var del = function del(url, data) {
  return ajax(url, 'delete', data);
};

function handleValidationErrors(errors, domElement) {
  for (var name in errors) {
    var element = domElement.querySelector("[name=\"".concat(name, "\"]"));
    element.classList.add('is-invalid');
    var errorDiv = document.createElement('div');
    errorDiv.classList.add('invalid-feedback');
    errorDiv.textContent = errors[name][0];
    element.parentNode.append(errorDiv);
  }
}

function clearValidationErrors(domElement) {
  domElement.querySelectorAll('.is-invalid').forEach(function (element) {
    element.classList.remove('is-invalid');
    element.parentNode.querySelectorAll('.invalid-feedback').forEach(function (e) {
      e.remove();
    });
  });
}

function getCsrfFields() {
  var _ref;

  var csrfNameField = document.querySelector('#csrfName');
  var csrfValueField = document.querySelector('#csrfValue');
  var csrfNameKey = csrfNameField.getAttribute('name');
  var csrfName = csrfNameField.content;
  var csrfValueKey = csrfValueField.getAttribute('name');
  var csrfValue = csrfValueField.content;
  return _ref = {}, _defineProperty(_ref, csrfNameKey, csrfName), _defineProperty(_ref, csrfValueKey, csrfValue), _ref;
}



/***/ }),

/***/ "./resources/js/transactions.js":
/*!**************************************!*\
  !*** ./resources/js/transactions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/* harmony import */ var _css_transactions_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../css/transactions.scss */ "./resources/css/transactions.scss");












var _excluded = ["id"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











window.addEventListener('DOMContentLoaded', function () {
  var newTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_18__.Modal(document.getElementById('newTransactionModal'));
  var editTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_18__.Modal(document.getElementById('editTransactionModal'));
  var uploadReceiptModal = new bootstrap__WEBPACK_IMPORTED_MODULE_18__.Modal(document.getElementById('uploadReceiptModal'));
  var importTransactionsModal = new bootstrap__WEBPACK_IMPORTED_MODULE_18__.Modal(document.getElementById('importTransactionsModal'));
  var table = new datatables_net__WEBPACK_IMPORTED_MODULE_20__["default"]('#transactionsTable', {
    serverSide: true,
    ajax: '/transactions/load',
    orderMulti: false,
    columns: [{
      data: "description"
    }, {
      data: function data(row) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting'
        }).format(row.amount);
      }
    }, {
      data: "category"
    }, {
      data: function data(row) {
        var icons = [];

        for (var i = 0; i < row.receipts.length; i++) {
          var receipt = row.receipts[i];
          var span = document.createElement('span');
          var anchor = document.createElement('a');
          var icon = document.createElement('i');
          var deleteIcon = document.createElement('i');
          deleteIcon.role = 'button';
          span.classList.add('position-relative');
          icon.classList.add('bi', 'bi-file-earmark-text', 'download-receipt', 'text-primary', 'fs-4');
          deleteIcon.classList.add('bi', 'bi-x-circle-fill', 'delete-receipt', 'text-danger', 'position-absolute');
          anchor.href = "/transactions/".concat(row.id, "/receipts/").concat(receipt.id);
          anchor.target = 'blank';
          anchor.title = receipt.name;
          deleteIcon.setAttribute('data-id', receipt.id);
          deleteIcon.setAttribute('data-transactionId', row.id);
          anchor.append(icon);
          span.append(anchor);
          span.append(deleteIcon);
          icons.push(span.outerHTML);
        }

        return icons.join('');
      }
    }, {
      data: "date"
    }, {
      sortable: false,
      data: function data(row) {
        return "\n                    <div class=\"d-flex flex-\">\n                        <button type=\"submit\" class=\"btn btn-outline-primary delete-transaction-btn\" data-id=\"".concat(row.id, "\">\n                            <i class=\"bi bi-trash3-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary edit-transaction-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-pencil-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary open-receipt-upload-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-upload\"></i>\n                        </button>\n                    </div>\n                ");
      }
    }]
  });
  document.querySelector('#transactionsTable').addEventListener('click', function (event) {
    var editBtn = event.target.closest('.edit-transaction-btn');
    var deleteBtn = event.target.closest('.delete-transaction-btn');
    var uploadReceiptBtn = event.target.closest('.open-receipt-upload-btn');
    var deleteReceiptBtn = event.target.closest('.delete-receipt');

    if (editBtn) {
      var transactionId = editBtn.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_19__.get)("/transactions/".concat(transactionId)).then(function (response) {
        return response.json();
      }).then(function (response) {
        return openEditTransactionModal(editTransactionModal, response);
      });
    } else if (deleteBtn) {
      var _transactionId = deleteBtn.getAttribute('data-id');

      if (confirm('Are you sure you want to delete this transaction?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_19__.del)("/transactions/".concat(_transactionId)).then(function (response) {
          if (response.ok) {
            table.draw();
          }
        });
      }
    } else if (uploadReceiptBtn) {
      var _transactionId2 = uploadReceiptBtn.getAttribute('data-id');

      uploadReceiptModal._element.querySelector('.upload-receipt-btn').setAttribute('data-id', _transactionId2);

      uploadReceiptModal.show();
    } else if (deleteReceiptBtn) {
      var receiptId = deleteReceiptBtn.getAttribute('data-id');

      var _transactionId3 = deleteReceiptBtn.getAttribute('data-transactionid');

      if (confirm('Are you sure you want to delete this receipt?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_19__.del)("/transactions/".concat(_transactionId3, "/receipts/").concat(receiptId)).then(function (response) {
          if (response.ok) {
            table.draw();
          }
        });
      }
    }
  });
  document.querySelector('.create-transaction-btn').addEventListener('click', function (event) {
    (0,_ajax__WEBPACK_IMPORTED_MODULE_19__.post)("/transactions", getTransactionFormData(newTransactionModal), newTransactionModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        newTransactionModal.hide();
      }
    });
  });
  document.querySelector('.save-transaction-btn').addEventListener('click', function (event) {
    var transactionId = event.currentTarget.getAttribute('data-id');
    (0,_ajax__WEBPACK_IMPORTED_MODULE_19__.post)("/transactions/".concat(transactionId), getTransactionFormData(editTransactionModal), editTransactionModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        editTransactionModal.hide();
      }
    });
  });
  document.querySelector('.upload-receipt-btn').addEventListener('click', function (event) {
    var transactionId = event.currentTarget.getAttribute('data-id');
    var formData = new FormData();

    var files = uploadReceiptModal._element.querySelector('input[type="file"]').files;

    for (var i = 0; i < files.length; i++) {
      formData.append('receipt', files[i]);
    }

    (0,_ajax__WEBPACK_IMPORTED_MODULE_19__.post)("/transactions/".concat(transactionId, "/receipts"), formData, uploadReceiptModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        uploadReceiptModal.hide();
      }
    });
  });
  document.querySelector('.import-transactions-btn').addEventListener('click', function (event) {
    var formData = new FormData();
    var button = event.currentTarget;

    var files = importTransactionsModal._element.querySelector('input[type="file"]').files;

    for (var i = 0; i < files.length; i++) {
      formData.append('importFile', files[i]);
    }

    button.setAttribute('disabled', true);
    var btnHtml = button.innerHTML;
    button.innerHTML = "\n            <div class=\"spinner-grow spinner-grow-sm text-light\" role=\"status\">\n              <span class=\"visually-hidden\">Loading...</span>\n            </div>\n            <div class=\"spinner-grow spinner-grow-sm text-light\" role=\"status\">\n              <span class=\"visually-hidden\">Loading...</span>\n            </div>\n            <div class=\"spinner-grow spinner-grow-sm text-light\" role=\"status\">\n              <span class=\"visually-hidden\">Loading...</span>\n            </div>\n        ";
    (0,_ajax__WEBPACK_IMPORTED_MODULE_19__.post)("/transactions/import", formData, importTransactionsModal._element).then(function (response) {
      button.removeAttribute('disabled');
      button.innerHTML = btnHtml;

      if (response.ok) {
        table.draw();
        importTransactionsModal.hide();
      }
    });
  });
});

function getTransactionFormData(modal) {
  var data = {};
  var fields = [].concat(_toConsumableArray(modal._element.getElementsByTagName('input')), _toConsumableArray(modal._element.getElementsByTagName('select')));
  fields.forEach(function (select) {
    data[select.name] = select.value;
  });
  return data;
}

function openEditTransactionModal(modal, _ref) {
  var id = _ref.id,
      data = _objectWithoutProperties(_ref, _excluded);

  for (var name in data) {
    var nameInput = modal._element.querySelector("[name=\"".concat(name, "\"]"));

    nameInput.value = data[name];
  }

  modal._element.querySelector('.save-transaction-btn').setAttribute('data-id', id);

  modal.show();
}

/***/ }),

/***/ "./resources/css/transactions.scss":
/*!*****************************************!*\
  !*** ./resources/css/transactions.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-977750","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-0823b6"], () => (__webpack_exec__("./resources/js/transactions.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBYixFQUFpQjtRQUNidUMsS0FBSyxDQUFDd0MsSUFBTjtRQUVBekMsdUJBQXVCLENBQUM4QyxJQUF4QjtNQUNIO0lBQ0osQ0FWTDtFQVdILENBcENEO0FBcUNILENBeE1EOztBQTBNQSxTQUFTRCxzQkFBVCxDQUFnQ1MsS0FBaEMsRUFBdUM7RUFDbkMsSUFBSXBILElBQUksR0FBTyxFQUFmO0VBQ0EsSUFBTXFILE1BQU0sZ0NBQ0xELEtBQUssQ0FBQ1osUUFBTixDQUFlYyxvQkFBZixDQUFvQyxPQUFwQyxDQURLLHNCQUVMRixLQUFLLENBQUNaLFFBQU4sQ0FBZWMsb0JBQWYsQ0FBb0MsUUFBcEMsQ0FGSyxFQUFaO0VBS0FELE1BQU0sQ0FBQzFFLE9BQVAsQ0FBZSxVQUFBNEUsTUFBTSxFQUFJO0lBQ3JCdkgsSUFBSSxDQUFDdUgsTUFBTSxDQUFDdkYsSUFBUixDQUFKLEdBQW9CdUYsTUFBTSxDQUFDQyxLQUEzQjtFQUNILENBRkQ7RUFJQSxPQUFPeEgsSUFBUDtBQUNIOztBQUVELFNBQVNxRyx3QkFBVCxDQUFrQ2UsS0FBbEMsUUFBd0Q7RUFBQSxJQUFkOUIsRUFBYyxRQUFkQSxFQUFjO0VBQUEsSUFBUHRGLElBQU87O0VBQ3BELEtBQUssSUFBSWdDLElBQVQsSUFBaUJoQyxJQUFqQixFQUF1QjtJQUNuQixJQUFNeUgsU0FBUyxHQUFHTCxLQUFLLENBQUNaLFFBQU4sQ0FBZXRFLGFBQWYsbUJBQXdDRixJQUF4QyxTQUFsQjs7SUFFQXlGLFNBQVMsQ0FBQ0QsS0FBVixHQUFrQnhILElBQUksQ0FBQ2dDLElBQUQsQ0FBdEI7RUFDSDs7RUFFRG9GLEtBQUssQ0FBQ1osUUFBTixDQUFldEUsYUFBZixDQUE2Qix1QkFBN0IsRUFBc0R1RCxZQUF0RCxDQUFtRSxTQUFuRSxFQUE4RUgsRUFBOUU7O0VBRUE4QixLQUFLLENBQUNYLElBQU47QUFDSDs7Ozs7Ozs7Ozs7QUN4T0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvYWpheC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvdHJhbnNhY3Rpb25zLmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL3Jlc291cmNlcy9jc3MvdHJhbnNhY3Rpb25zLnNjc3M/YmFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhamF4ID0gKHVybCwgbWV0aG9kID0gJ2dldCcsIGRhdGEgPSB7fSwgZG9tRWxlbWVudCA9IG51bGwpID0+IHtcbiAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKVxuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3NyZk1ldGhvZHMgPSBuZXcgU2V0KFsncG9zdCcsICdwdXQnLCAnZGVsZXRlJywgJ3BhdGNoJ10pXG5cbiAgICBpZiAoY3NyZk1ldGhvZHMuaGFzKG1ldGhvZCkpIHtcbiAgICAgICAgbGV0IGFkZGl0aW9uYWxGaWVsZHMgPSB7Li4uZ2V0Q3NyZkZpZWxkcygpfVxuXG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwb3N0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAncG9zdCdcblxuICAgICAgICAgICAgYWRkaXRpb25hbEZpZWxkcy5fTUVUSE9EID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkaXRpb25hbEZpZWxkIGluIGFkZGl0aW9uYWxGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChhZGRpdGlvbmFsRmllbGQsIGFkZGl0aW9uYWxGaWVsZHNbYWRkaXRpb25hbEZpZWxkXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ107XG5cbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IGRhdGFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5hZGRpdGlvbmFsRmllbGRzfSlcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuICAgICAgICB1cmwgKz0gJz8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgICAgICBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSlcbn1cblxuY29uc3QgZ2V0ICA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZ2V0JywgZGF0YSlcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhLCBkb21FbGVtZW50KSA9PiBhamF4KHVybCwgJ3Bvc3QnLCBkYXRhLCBkb21FbGVtZW50KVxuY29uc3QgZGVsICA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZGVsZXRlJywgZGF0YSlcblxuZnVuY3Rpb24gaGFuZGxlVmFsaWRhdGlvbkVycm9ycyhlcnJvcnMsIGRvbUVsZW1lbnQpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZXJyb3JzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHsgbmFtZSB9XCJdYClcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKVxuXG4gICAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvcnNbbmFtZV1bMF1cblxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kKGVycm9yRGl2KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJWYWxpZGF0aW9uRXJyb3JzKGRvbUVsZW1lbnQpIHtcbiAgICBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcy1pbnZhbGlkJykuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKVxuXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuaW52YWxpZC1mZWVkYmFjaycpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRDc3JmRmllbGRzKCkge1xuICAgIGNvbnN0IGNzcmZOYW1lRmllbGQgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzcmZOYW1lJylcbiAgICBjb25zdCBjc3JmVmFsdWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmVmFsdWUnKVxuICAgIGNvbnN0IGNzcmZOYW1lS2V5ICAgID0gY3NyZk5hbWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICAgIGNvbnN0IGNzcmZOYW1lICAgICAgID0gY3NyZk5hbWVGaWVsZC5jb250ZW50XG4gICAgY29uc3QgY3NyZlZhbHVlS2V5ICAgPSBjc3JmVmFsdWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICAgIGNvbnN0IGNzcmZWYWx1ZSAgICAgID0gY3NyZlZhbHVlRmllbGQuY29udGVudFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgW2NzcmZOYW1lS2V5XTogY3NyZk5hbWUsXG4gICAgICAgIFtjc3JmVmFsdWVLZXldOiBjc3JmVmFsdWVcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgYWpheCxcbiAgICBnZXQsXG4gICAgcG9zdCxcbiAgICBkZWxcbn1cbiIsImltcG9ydCB7IE1vZGFsIH0gICAgICAgICAgZnJvbSBcImJvb3RzdHJhcFwiXHJcbmltcG9ydCB7IGdldCwgcG9zdCwgZGVsIH0gZnJvbSBcIi4vYWpheFwiXHJcbmltcG9ydCBEYXRhVGFibGUgICAgICAgICAgZnJvbSBcImRhdGF0YWJsZXMubmV0XCJcclxuXHJcbmltcG9ydCBcIi4uL2Nzcy90cmFuc2FjdGlvbnMuc2Nzc1wiXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5ld1RyYW5zYWN0aW9uTW9kYWwgICAgID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUcmFuc2FjdGlvbk1vZGFsJykpXHJcbiAgICBjb25zdCBlZGl0VHJhbnNhY3Rpb25Nb2RhbCAgICA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRyYW5zYWN0aW9uTW9kYWwnKSlcclxuICAgIGNvbnN0IHVwbG9hZFJlY2VpcHRNb2RhbCAgICAgID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRSZWNlaXB0TW9kYWwnKSlcclxuICAgIGNvbnN0IGltcG9ydFRyYW5zYWN0aW9uc01vZGFsID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRUcmFuc2FjdGlvbnNNb2RhbCcpKVxyXG5cclxuICAgIGNvbnN0IHRhYmxlID0gbmV3IERhdGFUYWJsZSgnI3RyYW5zYWN0aW9uc1RhYmxlJywge1xyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgYWpheDogJy90cmFuc2FjdGlvbnMvbG9hZCcsXHJcbiAgICAgICAgb3JkZXJNdWx0aTogZmFsc2UsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICB7ZGF0YTogXCJkZXNjcmlwdGlvblwifSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcm93ID0+IG5ldyBJbnRsLk51bWJlckZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAnZW4tVVMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTaWduOiAnYWNjb3VudGluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLmZvcm1hdChyb3cuYW1vdW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7ZGF0YTogXCJjYXRlZ29yeVwifSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbnMgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5yZWNlaXB0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNlaXB0ID0gcm93LnJlY2VpcHRzW2ldXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvciAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJY29uLnJvbGUgPSAnYnV0dG9uJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbi1yZWxhdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYmknLCAnYmktZmlsZS1lYXJtYXJrLXRleHQnLCAnZG93bmxvYWQtcmVjZWlwdCcsICd0ZXh0LXByaW1hcnknLCAnZnMtNCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnYmknLCAnYmkteC1jaXJjbGUtZmlsbCcsICdkZWxldGUtcmVjZWlwdCcsICd0ZXh0LWRhbmdlcicsICdwb3NpdGlvbi1hYnNvbHV0ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IuaHJlZiAgID0gYC90cmFuc2FjdGlvbnMvJHsgcm93LmlkIH0vcmVjZWlwdHMvJHsgcmVjZWlwdC5pZCB9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGFyZ2V0ID0gJ2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGl0bGUgID0gcmVjZWlwdC5uYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHJlY2VpcHQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zYWN0aW9uSWQnLCByb3cuaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IuYXBwZW5kKGljb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uYXBwZW5kKGFuY2hvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5hcHBlbmQoZGVsZXRlSWNvbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25zLnB1c2goc3Bhbi5vdXRlckhUTUwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWNvbnMuam9pbignJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge2RhdGE6IFwiZGF0ZVwifSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcm93ID0+IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZGVsZXRlLXRyYW5zYWN0aW9uLWJ0blwiIGRhdGEtaWQ9XCIkeyByb3cuaWQgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaDMtZmlsbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtcy0yIGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGVkaXQtdHJhbnNhY3Rpb24tYnRuXCIgZGF0YS1pZD1cIiR7IHJvdy5pZCB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXBlbmNpbC1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1zLTIgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgb3Blbi1yZWNlaXB0LXVwbG9hZC1idG5cIiBkYXRhLWlkPVwiJHsgcm93LmlkIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktdXBsb2FkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uc1RhYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBlZGl0QnRuICAgICAgICAgID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRyYW5zYWN0aW9uLWJ0bicpXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuICAgICAgICA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXRyYW5zYWN0aW9uLWJ0bicpXHJcbiAgICAgICAgY29uc3QgdXBsb2FkUmVjZWlwdEJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcub3Blbi1yZWNlaXB0LXVwbG9hZC1idG4nKVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVJlY2VpcHRCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS1yZWNlaXB0JylcclxuXHJcbiAgICAgICAgaWYgKGVkaXRCdG4pIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGVkaXRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuXHJcbiAgICAgICAgICAgIGdldChgL3RyYW5zYWN0aW9ucy8keyB0cmFuc2FjdGlvbklkIH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gb3BlbkVkaXRUcmFuc2FjdGlvbk1vZGFsKGVkaXRUcmFuc2FjdGlvbk1vZGFsLCByZXNwb25zZSkpXHJcbiAgICAgICAgfSBlbHNlIGlmIChkZWxldGVCdG4pIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGRlbGV0ZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0cmFuc2FjdGlvbj8nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsKGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cGxvYWRSZWNlaXB0QnRuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSB1cGxvYWRSZWNlaXB0QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblxyXG4gICAgICAgICAgICB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudXBsb2FkLXJlY2VpcHQtYnRuJylcclxuICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0cmFuc2FjdGlvbklkKVxyXG5cclxuICAgICAgICAgICAgdXBsb2FkUmVjZWlwdE1vZGFsLnNob3coKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGVsZXRlUmVjZWlwdEJ0bikge1xyXG4gICAgICAgICAgICBjb25zdCByZWNlaXB0SWQgICAgID0gZGVsZXRlUmVjZWlwdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZGVsZXRlUmVjZWlwdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNhY3Rpb25pZCcpXHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY2VpcHQ/JykpIHtcclxuICAgICAgICAgICAgICAgIGRlbChgL3RyYW5zYWN0aW9ucy8keyB0cmFuc2FjdGlvbklkIH0vcmVjZWlwdHMvJHsgcmVjZWlwdElkIH1gKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10cmFuc2FjdGlvbi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHBvc3QoYC90cmFuc2FjdGlvbnNgLCBnZXRUcmFuc2FjdGlvbkZvcm1EYXRhKG5ld1RyYW5zYWN0aW9uTW9kYWwpLCBuZXdUcmFuc2FjdGlvbk1vZGFsLl9lbGVtZW50KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJhbnNhY3Rpb25Nb2RhbC5oaWRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdHJhbnNhY3Rpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWAsIGdldFRyYW5zYWN0aW9uRm9ybURhdGEoZWRpdFRyYW5zYWN0aW9uTW9kYWwpLCBlZGl0VHJhbnNhY3Rpb25Nb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRyYW5zYWN0aW9uTW9kYWwuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGxvYWQtcmVjZWlwdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgICAgICA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgY29uc3QgZmlsZXMgICAgICAgICA9IHVwbG9hZFJlY2VpcHRNb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmZpbGVzXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZWNlaXB0JywgZmlsZXNbaV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfS9yZWNlaXB0c2AsIGZvcm1EYXRhLCB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZFJlY2VpcHRNb2RhbC5oaWRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydC10cmFuc2FjdGlvbnMtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgY29uc3QgYnV0dG9uICAgPSBldmVudC5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgY29uc3QgZmlsZXMgICAgPSBpbXBvcnRUcmFuc2FjdGlvbnNNb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmZpbGVzXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbXBvcnRGaWxlJywgZmlsZXNbaV0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpXHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkh0bWwgPSBidXR0b24uaW5uZXJIVE1MXHJcblxyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWdyb3cgc3Bpbm5lci1ncm93LXNtIHRleHQtbGlnaHRcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc20gdGV4dC1saWdodFwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ncm93IHNwaW5uZXItZ3Jvdy1zbSB0ZXh0LWxpZ2h0XCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG5cclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zL2ltcG9ydGAsIGZvcm1EYXRhLCBpbXBvcnRUcmFuc2FjdGlvbnNNb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGJ0bkh0bWxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0VHJhbnNhY3Rpb25zTW9kYWwuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KVxyXG59KVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNhY3Rpb25Gb3JtRGF0YShtb2RhbCkge1xyXG4gICAgbGV0IGRhdGEgICAgID0ge31cclxuICAgIGNvbnN0IGZpZWxkcyA9IFtcclxuICAgICAgICAuLi5tb2RhbC5fZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSxcclxuICAgICAgICAuLi5tb2RhbC5fZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JylcclxuICAgIF1cclxuXHJcbiAgICBmaWVsZHMuZm9yRWFjaChzZWxlY3QgPT4ge1xyXG4gICAgICAgIGRhdGFbc2VsZWN0Lm5hbWVdID0gc2VsZWN0LnZhbHVlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5FZGl0VHJhbnNhY3Rpb25Nb2RhbChtb2RhbCwge2lkLCAuLi5kYXRhfSkge1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gbW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIkeyBuYW1lIH1cIl1gKVxyXG5cclxuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBkYXRhW25hbWVdXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdHJhbnNhY3Rpb24tYnRuJykuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXHJcblxyXG4gICAgbW9kYWwuc2hvdygpXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJkb21FbGVtZW50IiwidG9Mb3dlckNhc2UiLCJvcHRpb25zIiwiaGVhZGVycyIsImNzcmZNZXRob2RzIiwiU2V0IiwiaGFzIiwiYWRkaXRpb25hbEZpZWxkcyIsImdldENzcmZGaWVsZHMiLCJfTUVUSE9EIiwidG9VcHBlckNhc2UiLCJGb3JtRGF0YSIsImFkZGl0aW9uYWxGaWVsZCIsImFwcGVuZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNsZWFyVmFsaWRhdGlvbkVycm9ycyIsIm9rIiwic3RhdHVzIiwianNvbiIsImVycm9ycyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJnZXQiLCJwb3N0IiwiZGVsIiwibmFtZSIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXJyb3JEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInBhcmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImUiLCJjc3JmTmFtZUZpZWxkIiwiY3NyZlZhbHVlRmllbGQiLCJjc3JmTmFtZUtleSIsImdldEF0dHJpYnV0ZSIsImNzcmZOYW1lIiwiY29udGVudCIsImNzcmZWYWx1ZUtleSIsImNzcmZWYWx1ZSIsIk1vZGFsIiwiRGF0YVRhYmxlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld1RyYW5zYWN0aW9uTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImVkaXRUcmFuc2FjdGlvbk1vZGFsIiwidXBsb2FkUmVjZWlwdE1vZGFsIiwiaW1wb3J0VHJhbnNhY3Rpb25zTW9kYWwiLCJ0YWJsZSIsInNlcnZlclNpZGUiLCJvcmRlck11bHRpIiwiY29sdW1ucyIsInJvdyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiY3VycmVuY3lTaWduIiwiZm9ybWF0IiwiYW1vdW50IiwiaWNvbnMiLCJpIiwicmVjZWlwdHMiLCJsZW5ndGgiLCJyZWNlaXB0Iiwic3BhbiIsImFuY2hvciIsImljb24iLCJkZWxldGVJY29uIiwicm9sZSIsImhyZWYiLCJpZCIsInRhcmdldCIsInRpdGxlIiwic2V0QXR0cmlidXRlIiwicHVzaCIsIm91dGVySFRNTCIsImpvaW4iLCJzb3J0YWJsZSIsImV2ZW50IiwiZWRpdEJ0biIsImNsb3Nlc3QiLCJkZWxldGVCdG4iLCJ1cGxvYWRSZWNlaXB0QnRuIiwiZGVsZXRlUmVjZWlwdEJ0biIsInRyYW5zYWN0aW9uSWQiLCJvcGVuRWRpdFRyYW5zYWN0aW9uTW9kYWwiLCJjb25maXJtIiwiZHJhdyIsIl9lbGVtZW50Iiwic2hvdyIsInJlY2VpcHRJZCIsImdldFRyYW5zYWN0aW9uRm9ybURhdGEiLCJoaWRlIiwiY3VycmVudFRhcmdldCIsImZvcm1EYXRhIiwiZmlsZXMiLCJidXR0b24iLCJidG5IdG1sIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibW9kYWwiLCJmaWVsZHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsInZhbHVlIiwibmFtZUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==