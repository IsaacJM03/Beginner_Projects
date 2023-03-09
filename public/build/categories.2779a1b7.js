"use strict";
(self["webpackChunkexpennies"] = self["webpackChunkexpennies"] || []).push([["categories"],{

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

/***/ "./resources/js/categories.js":
/*!************************************!*\
  !*** ./resources/js/categories.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");





window.addEventListener('DOMContentLoaded', function () {
  var editCategoryModal = new bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal(document.getElementById('editCategoryModal'));
  var table = new datatables_net__WEBPACK_IMPORTED_MODULE_4__["default"]('#categoriesTable', {
    serverSide: true,
    ajax: '/categories/load',
    orderMulti: false,
    columns: [{
      data: "name"
    }, {
      data: "createdAt"
    }, {
      data: "updatedAt"
    }, {
      sortable: false,
      data: function data(row) {
        return "\n                    <div class=\"d-flex flex-\">\n                        <button type=\"submit\" class=\"btn btn-outline-primary delete-category-btn\" data-id=\"".concat(row.id, "\">\n                            <i class=\"bi bi-trash3-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary edit-category-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-pencil-fill\"></i>\n                        </button>\n                    </div>\n                ");
      }
    }]
  });
  document.querySelector('#categoriesTable').addEventListener('click', function (event) {
    var editBtn = event.target.closest('.edit-category-btn');
    var deleteBtn = event.target.closest('.delete-category-btn');

    if (editBtn) {
      var categoryId = editBtn.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_3__.get)("/categories/".concat(categoryId)).then(function (response) {
        return response.json();
      }).then(function (response) {
        return openEditCategoryModal(editCategoryModal, response);
      });
    } else {
      var _categoryId = deleteBtn.getAttribute('data-id');

      if (confirm('Are you sure you want to delete this category?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_3__.del)("/categories/".concat(_categoryId)).then(function (response) {
          if (response.ok) {
            table.draw();
          }
        });
      }
    }
  });
  document.querySelector('.save-category-btn').addEventListener('click', function (event) {
    var categoryId = event.currentTarget.getAttribute('data-id');
    (0,_ajax__WEBPACK_IMPORTED_MODULE_3__.post)("/categories/".concat(categoryId), {
      name: editCategoryModal._element.querySelector('input[name="name"]').value
    }, editCategoryModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        editCategoryModal.hide();
      }
    });
  });
});

function openEditCategoryModal(modal, _ref) {
  var id = _ref.id,
      name = _ref.name;

  var nameInput = modal._element.querySelector('input[name="name"]');

  nameInput.value = name;

  modal._element.querySelector('.save-category-btn').setAttribute('data-id', id);

  modal.show();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-977750"], () => (__webpack_exec__("./resources/js/categories.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDUyxhQUFOLENBQW9CM0IsWUFBcEIsQ0FBaUMsU0FBakMsQ0FBbkI7SUFFQW5CLDJDQUFJLHVCQUFpQjBDLFVBQWpCLEdBQWdDO01BQ2hDeEMsSUFBSSxFQUFFMEIsaUJBQWlCLENBQUNtQixRQUFsQixDQUEyQjNDLGFBQTNCLENBQXlDLG9CQUF6QyxFQUErRDRDO0lBRHJDLENBQWhDLEVBRURwQixpQkFBaUIsQ0FBQ21CLFFBRmpCLENBQUosQ0FFK0J4RCxJQUYvQixDQUVvQyxVQUFBQyxRQUFRLEVBQUk7TUFDNUMsSUFBSUEsUUFBUSxDQUFDRSxFQUFiLEVBQWlCO1FBQ2JvQyxLQUFLLENBQUNlLElBQU47UUFDQWpCLGlCQUFpQixDQUFDcUIsSUFBbEI7TUFDSDtJQUNKLENBUEQ7RUFRSCxDQVhEO0FBWUgsQ0E5REQ7O0FBZ0VBLFNBQVNOLHFCQUFULENBQStCTyxLQUEvQixRQUFrRDtFQUFBLElBQVhkLEVBQVcsUUFBWEEsRUFBVztFQUFBLElBQVBsQyxJQUFPLFFBQVBBLElBQU87O0VBQzlDLElBQU1pRCxTQUFTLEdBQUdELEtBQUssQ0FBQ0gsUUFBTixDQUFlM0MsYUFBZixDQUE2QixvQkFBN0IsQ0FBbEI7O0VBRUErQyxTQUFTLENBQUNILEtBQVYsR0FBa0I5QyxJQUFsQjs7RUFFQWdELEtBQUssQ0FBQ0gsUUFBTixDQUFlM0MsYUFBZixDQUE2QixvQkFBN0IsRUFBbURnRCxZQUFuRCxDQUFnRSxTQUFoRSxFQUEyRWhCLEVBQTNFOztFQUVBYyxLQUFLLENBQUNHLElBQU47QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVubmllcy8uL3Jlc291cmNlcy9qcy9hamF4LmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL3Jlc291cmNlcy9qcy9jYXRlZ29yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFqYXggPSAodXJsLCBtZXRob2QgPSAnZ2V0JywgZGF0YSA9IHt9LCBkb21FbGVtZW50ID0gbnVsbCkgPT4ge1xuICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpXG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjc3JmTWV0aG9kcyA9IG5ldyBTZXQoWydwb3N0JywgJ3B1dCcsICdkZWxldGUnLCAncGF0Y2gnXSlcblxuICAgIGlmIChjc3JmTWV0aG9kcy5oYXMobWV0aG9kKSkge1xuICAgICAgICBsZXQgYWRkaXRpb25hbEZpZWxkcyA9IHsuLi5nZXRDc3JmRmllbGRzKCl9XG5cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdwb3N0J1xuXG4gICAgICAgICAgICBhZGRpdGlvbmFsRmllbGRzLl9NRVRIT0QgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRpdGlvbmFsRmllbGQgaW4gYWRkaXRpb25hbEZpZWxkcykge1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGFkZGl0aW9uYWxGaWVsZCwgYWRkaXRpb25hbEZpZWxkc1thZGRpdGlvbmFsRmllbGRdKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXTtcblxuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gZGF0YVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoey4uLmRhdGEsIC4uLmFkZGl0aW9uYWxGaWVsZHN9KVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG4gICAgICAgIHVybCArPSAnPycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKSkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsZWFyVmFsaWRhdGlvbkVycm9ycyhkb21FbGVtZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZhbGlkYXRpb25FcnJvcnMoZXJyb3JzLCBkb21FbGVtZW50KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9KVxufVxuXG5jb25zdCBnZXQgID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdnZXQnLCBkYXRhKVxuY29uc3QgcG9zdCA9ICh1cmwsIGRhdGEsIGRvbUVsZW1lbnQpID0+IGFqYXgodXJsLCAncG9zdCcsIGRhdGEsIGRvbUVsZW1lbnQpXG5jb25zdCBkZWwgID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdkZWxldGUnLCBkYXRhKVxuXG5mdW5jdGlvbiBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudCkge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBlcnJvcnMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIkeyBuYW1lIH1cIl1gKVxuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpXG5cbiAgICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yc1tuYW1lXVswXVxuXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmQoZXJyb3JEaXYpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudCkge1xuICAgIGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlzLWludmFsaWQnKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpXG5cbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZhbGlkLWZlZWRiYWNrJykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5yZW1vdmUoKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldENzcmZGaWVsZHMoKSB7XG4gICAgY29uc3QgY3NyZk5hbWVGaWVsZCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZk5hbWUnKVxuICAgIGNvbnN0IGNzcmZWYWx1ZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzcmZWYWx1ZScpXG4gICAgY29uc3QgY3NyZk5hbWVLZXkgICAgPSBjc3JmTmFtZUZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgY29uc3QgY3NyZk5hbWUgICAgICAgPSBjc3JmTmFtZUZpZWxkLmNvbnRlbnRcbiAgICBjb25zdCBjc3JmVmFsdWVLZXkgICA9IGNzcmZWYWx1ZUZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgY29uc3QgY3NyZlZhbHVlICAgICAgPSBjc3JmVmFsdWVGaWVsZC5jb250ZW50XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBbY3NyZk5hbWVLZXldOiBjc3JmTmFtZSxcbiAgICAgICAgW2NzcmZWYWx1ZUtleV06IGNzcmZWYWx1ZVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBhamF4LFxuICAgIGdldCxcbiAgICBwb3N0LFxuICAgIGRlbFxufVxuIiwiaW1wb3J0IHsgTW9kYWwgfSAgICAgICAgICBmcm9tIFwiYm9vdHN0cmFwXCJcbmltcG9ydCB7IGdldCwgcG9zdCwgZGVsIH0gZnJvbSBcIi4vYWpheFwiXG5pbXBvcnQgRGF0YVRhYmxlICAgICAgICAgIGZyb20gXCJkYXRhdGFibGVzLm5ldFwiXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGVkaXRDYXRlZ29yeU1vZGFsID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2F0ZWdvcnlNb2RhbCcpKVxuXG4gICAgY29uc3QgdGFibGUgPSBuZXcgRGF0YVRhYmxlKCcjY2F0ZWdvcmllc1RhYmxlJywge1xuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBhamF4OiAnL2NhdGVnb3JpZXMvbG9hZCcsXG4gICAgICAgIG9yZGVyTXVsdGk6IGZhbHNlLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICB7ZGF0YTogXCJuYW1lXCJ9LFxuICAgICAgICAgICAge2RhdGE6IFwiY3JlYXRlZEF0XCJ9LFxuICAgICAgICAgICAge2RhdGE6IFwidXBkYXRlZEF0XCJ9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGRlbGV0ZS1jYXRlZ29yeS1idG5cIiBkYXRhLWlkPVwiJHsgcm93LmlkIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXRyYXNoMy1maWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibXMtMiBidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBlZGl0LWNhdGVnb3J5LWJ0blwiIGRhdGEtaWQ9XCIkeyByb3cuaWQgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLWZpbGxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcmllc1RhYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZWRpdEJ0biAgID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LWNhdGVnb3J5LWJ0bicpXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLWNhdGVnb3J5LWJ0bicpXG5cbiAgICAgICAgaWYgKGVkaXRCdG4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBlZGl0QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG5cbiAgICAgICAgICAgIGdldChgL2NhdGVnb3JpZXMvJHsgY2F0ZWdvcnlJZCB9YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gb3BlbkVkaXRDYXRlZ29yeU1vZGFsKGVkaXRDYXRlZ29yeU1vZGFsLCByZXNwb25zZSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gZGVsZXRlQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG5cbiAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2F0ZWdvcnk/JykpIHtcbiAgICAgICAgICAgICAgICBkZWwoYC9jYXRlZ29yaWVzLyR7IGNhdGVnb3J5SWQgfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmRyYXcoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jYXRlZ29yeS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuXG4gICAgICAgIHBvc3QoYC9jYXRlZ29yaWVzLyR7IGNhdGVnb3J5SWQgfWAsIHtcbiAgICAgICAgICAgIG5hbWU6IGVkaXRDYXRlZ29yeU1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykudmFsdWVcbiAgICAgICAgfSwgZWRpdENhdGVnb3J5TW9kYWwuX2VsZW1lbnQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXG4gICAgICAgICAgICAgICAgZWRpdENhdGVnb3J5TW9kYWwuaGlkZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5FZGl0Q2F0ZWdvcnlNb2RhbChtb2RhbCwge2lkLCBuYW1lfSkge1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJylcblxuICAgIG5hbWVJbnB1dC52YWx1ZSA9IG5hbWVcblxuICAgIG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNhdGVnb3J5LWJ0bicpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxuXG4gICAgbW9kYWwuc2hvdygpXG59XG4iXSwibmFtZXMiOlsiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJkb21FbGVtZW50IiwidG9Mb3dlckNhc2UiLCJvcHRpb25zIiwiaGVhZGVycyIsImNzcmZNZXRob2RzIiwiU2V0IiwiaGFzIiwiYWRkaXRpb25hbEZpZWxkcyIsImdldENzcmZGaWVsZHMiLCJfTUVUSE9EIiwidG9VcHBlckNhc2UiLCJGb3JtRGF0YSIsImFkZGl0aW9uYWxGaWVsZCIsImFwcGVuZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNsZWFyVmFsaWRhdGlvbkVycm9ycyIsIm9rIiwic3RhdHVzIiwianNvbiIsImVycm9ycyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJnZXQiLCJwb3N0IiwiZGVsIiwibmFtZSIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXJyb3JEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInBhcmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImUiLCJjc3JmTmFtZUZpZWxkIiwiY3NyZlZhbHVlRmllbGQiLCJjc3JmTmFtZUtleSIsImdldEF0dHJpYnV0ZSIsImNzcmZOYW1lIiwiY29udGVudCIsImNzcmZWYWx1ZUtleSIsImNzcmZWYWx1ZSIsIk1vZGFsIiwiRGF0YVRhYmxlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVkaXRDYXRlZ29yeU1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YWJsZSIsInNlcnZlclNpZGUiLCJvcmRlck11bHRpIiwiY29sdW1ucyIsInNvcnRhYmxlIiwicm93IiwiaWQiLCJldmVudCIsImVkaXRCdG4iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZGVsZXRlQnRuIiwiY2F0ZWdvcnlJZCIsIm9wZW5FZGl0Q2F0ZWdvcnlNb2RhbCIsImNvbmZpcm0iLCJkcmF3IiwiY3VycmVudFRhcmdldCIsIl9lbGVtZW50IiwidmFsdWUiLCJoaWRlIiwibW9kYWwiLCJuYW1lSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==