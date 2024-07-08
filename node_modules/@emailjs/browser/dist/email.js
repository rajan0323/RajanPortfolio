/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ es),
  init: () => (/* reexport */ init),
  send: () => (/* reexport */ send),
  sendForm: () => (/* reexport */ sendForm)
});

;// CONCATENATED MODULE: ./es/store/store.js
const store = {
  _origin: 'https://api.emailjs.com'
};
;// CONCATENATED MODULE: ./es/methods/init/init.js

/**
 * Initiation
 * @param {string} publicKey - set the EmailJS public key
 * @param {string} origin - set the EmailJS origin
 */
const init = function (publicKey) {
  let origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://api.emailjs.com';
  store._userID = publicKey;
  store._origin = origin;
};
;// CONCATENATED MODULE: ./es/utils/validateParams.js
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey) {
    throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
  }
  if (!serviceID) {
    throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
  }
  if (!templateID) {
    throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
  }
  return true;
};
;// CONCATENATED MODULE: ./es/models/EmailJSResponseStatus.js
class EmailJSResponseStatus {
  constructor(httpResponse) {
    this.status = httpResponse ? httpResponse.status : 0;
    this.text = httpResponse ? httpResponse.responseText : 'Network Error';
  }
}
;// CONCATENATED MODULE: ./es/api/sendPost.js


const sendPost = function (url, data) {
  let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', _ref => {
      let {
        target
      } = _ref;
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === 'OK') {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener('error', _ref2 => {
      let {
        target
      } = _ref2;
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open('POST', store._origin + url, true);
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};
;// CONCATENATED MODULE: ./es/methods/send/send.js



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, publicKey) => {
  const uID = publicKey || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: '3.12.1',
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost('/api/v1.0/email/send', JSON.stringify(params), {
    'Content-type': 'application/json'
  });
};
;// CONCATENATED MODULE: ./es/methods/sendForm/sendForm.js



const findHTMLForm = form => {
  let currentForm;
  if (typeof form === 'string') {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== 'FORM') {
    throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
  }
  return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, publicKey) => {
  const uID = publicKey || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append('lib_version', '3.12.1');
  formData.append('service_id', serviceID);
  formData.append('template_id', templateID);
  formData.append('user_id', uID);
  return sendPost('/api/v1.0/email/send-form', formData);
};
;// CONCATENATED MODULE: ./es/index.js




/* harmony default export */ const es = ({
  init: init,
  send: send,
  sendForm: sendForm
});
self.emailjs = __webpack_exports__;
/******/ })()
;