parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var i=document.querySelector("body"),c=document.querySelector("thead"),l=document.querySelector("tbody");function s(n){var t=n.cellIndex,r=e(l.children);switch(n.innerText.toLowerCase()){case"name":case"position":case"office":r.sort(function(e,n){var r=e.children[t].innerText,a=n.children[t].innerText;return r.localeCompare(a)});break;case"salary":case"age":r.sort(function(e,n){var r=e.children[t].innerText,a=n.children[t].innerText,o=new RegExp(/[^0-9]/g);return(r=r.replace(o,""))-(a=a.replace(o,""))})}return r}e(c.firstElementChild.children).forEach(function(e){e.dataset.clickedTitle=!1});var d,u=function(n){var t=n.target.closest("th");"false"===t.dataset.clickedTitle?(l.append.apply(l,e(s(t))),t.dataset.clickedTitle=!0):(l.append.apply(l,e(s(t).reverse())),t.dataset.clickedTitle=!1)};c.addEventListener("click",u),l.addEventListener("click",function(e){var n=e.target.closest("tr");d&&d.classList.remove("active"),d=n,n.classList.add("active")}),i.insertAdjacentHTML("beforeend",'\n  <form class="new-employee-form">\n    <label>Name:\n    <input\n      name="name"\n      data-qa="name"\n      type="text"\n      required\n    >\n    </label>\n    <label>Position:\n      <input\n        name="position"\n        data-qa="position"\n        type="text"\n      >\n    </label>\n    <label>Office:\n      <select\n        name="office"\n        data-qa="office"\n        required\n      >\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n    <label>Age:\n      <input\n        name="age"\n        data-qa="age"\n        type="number"\n        required\n      >\n    </label>\n    <label>Salary:\n      <input\n        name="salary"\n        data-qa="salary"\n        type="number"\n        required\n      >\n    </label>\n    <button>\n      Save to table\n    </button>\n  </form>\n');var p=document.querySelector(".new-employee-form"),m=p.querySelectorAll("input");function f(n){n.preventDefault();var t=new FormData(p),r=Object.fromEntries(t.entries());return r.name.length>=4&&r.age>=18&&r.age<=90&&r.position.length&&(l.insertAdjacentHTML("beforeend","\n      <tr>\n        <td>".concat(r.name,"</td>\n        <td>").concat(r.position,"</td>\n        <td>").concat(r.office,"</td>\n        <td>").concat(r.age,"</td>\n        <td>$").concat(Number(r.salary).toLocaleString("en"),"</td>\n      </tr>\n  ")),y(30,10,"Succsess","Add new employee","success"),e(m).forEach(function(e){e.value=""})),r.name.length<4?y(30,10,"Error","Name length must be more than ".concat(4," charecters"),"error"):r.position.length?r.age<18||r.age>90?y(200,10,"Error","Age must be more than ".concat(18," and less than ").concat(90),"error"):void 0:y(370,10,"Error","Should contain correct position","error")}p.addEventListener("submit",f);var y=function(e,n,t,r,a){var o=document.createElement("div"),c=document.createElement("h2"),l=document.createElement("p");o.dataset.qa="notification",o.classList.add("notification",a),o.style.top=e+"px",o.style.right=n+"px",c.classList.add("title"),c.textContent="".concat(t),l.textContent="".concat(r),i.append(o),o.append(c,l),setTimeout(function(){o.remove()},4e3)};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e44603fc.js.map