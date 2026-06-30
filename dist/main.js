/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js"
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
(module) {

eval("{!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",c=\"month\",f=\"quarter\",h=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=\"$isDayjsObject\",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=f+\"Date\",n[d]=f+\"Date\",n[c]=f+\"Month\",n[h]=f+\"FullYear\",n[u]=f+\"Hours\",n[s]=f+\"Minutes\",n[i]=f+\"Seconds\",n[r]=f+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,\"0\")},$=f||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return b.s(e.$y,4,\"0\");case\"M\":return a+1;case\"MM\":return b.s(a+1,2,\"0\");case\"MMM\":return h(n.monthsShort,a,c,3);case\"MMMM\":return h(c,a);case\"D\":return e.$D;case\"DD\":return b.s(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return h(n.weekdaysMin,e.$W,o,2);case\"ddd\":return h(n.weekdaysShort,e.$W,o,3);case\"dddd\":return o[e.$W];case\"H\":return String(s);case\"HH\":return b.s(s,2,\"0\");case\"h\":return d(1);case\"hh\":return d(2);case\"a\":return $(s,u,!0);case\"A\":return $(s,u,!1);case\"m\":return String(u);case\"mm\":return b.s(u,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return b.s(e.$s,2,\"0\");case\"SSS\":return b.s(e.$ms,3,\"0\");case\"Z\":return i}return null}(t)||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),Y=_.prototype;return O.prototype=Y,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",c],[\"$y\",h],[\"$D\",d]].forEach((function(t){Y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));\n\n//# sourceURL=webpack:///./node_modules/dayjs/dayjs.min.js?\n}");

/***/ },

/***/ "./src/styles/index.css"
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/index.css?\n}");

/***/ },

/***/ "./src/scripts/main.js"
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _switch_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-screen.js */ \"./src/scripts/switch-screen.js\");\n/* harmony import */ var _verify_empty_msg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-empty-msg.js */ \"./src/scripts/verify-empty-msg.js\");\n/* harmony import */ var _schedule_operations_inputs_value_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-operations/inputs-value-default.js */ \"./src/scripts/schedule-operations/inputs-value-default.js\");\n/* harmony import */ var _schedule_operations_submit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-operations/submit.js */ \"./src/scripts/schedule-operations/submit.js\");\n/* harmony import */ var _schedule_operations_att_schedules_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-operations/att-schedules-list.js */ \"./src/scripts/schedule-operations/att-schedules-list.js\");\n/* harmony import */ var _onload_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onload.js */ \"./src/scripts/onload.js\");\n// CSS\r\n\r\n\r\n// JavaScript\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?\n}");

/***/ },

/***/ "./src/scripts/onload.js"
/*!*******************************!*\
  !*** ./src/scripts/onload.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _schedule_operations_att_schedules_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-operations/att-schedules-list.js */ \"./src/scripts/schedule-operations/att-schedules-list.js\");\n/* harmony import */ var _schedule_operations_inputs_value_default_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-operations/inputs-value-default.js */ \"./src/scripts/schedule-operations/inputs-value-default.js\");\n\r\n\r\n\r\n(0,_schedule_operations_att_schedules_list_js__WEBPACK_IMPORTED_MODULE_0__.attListSchedule)();\r\n(0,_schedule_operations_inputs_value_default_js__WEBPACK_IMPORTED_MODULE_1__.verifyHourOption)();\n\n//# sourceURL=webpack:///./src/scripts/onload.js?\n}");

/***/ },

/***/ "./src/scripts/schedule-operations/att-schedules-list.js"
/*!***************************************************************!*\
  !*** ./src/scripts/schedule-operations/att-schedules-list.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attListSchedule: () => (/* binding */ attListSchedule)\n/* harmony export */ });\n/* harmony import */ var _schedules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedules.js */ \"./src/scripts/schedule-operations/schedules.js\");\n/* harmony import */ var _create_schedules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-schedules.js */ \"./src/scripts/schedule-operations/create-schedules.js\");\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.js */ \"./src/scripts/schedule-operations/delete.js\");\n/* harmony import */ var _inputs_value_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputs-value-default.js */ \"./src/scripts/schedule-operations/inputs-value-default.js\");\n/* harmony import */ var _verify_empty_msg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../verify-empty-msg.js */ \"./src/scripts/verify-empty-msg.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n_inputs_value_default_js__WEBPACK_IMPORTED_MODULE_3__.scheduleDateFilter.onchange = () => attListSchedule();\r\n\r\nfunction attListSchedule() {\r\n    _create_schedules_js__WEBPACK_IMPORTED_MODULE_1__.listsPeriodSchedule.forEach(list => list.replaceChildren());\r\n    _schedules_js__WEBPACK_IMPORTED_MODULE_0__.schedules.forEach(scheduleObj => {\r\n        (0,_create_schedules_js__WEBPACK_IMPORTED_MODULE_1__.addScheduleElement)(scheduleObj);\r\n    });\r\n    (0,_delete_js__WEBPACK_IMPORTED_MODULE_2__.addEventScheduleCancel)();\r\n    (0,_verify_empty_msg_js__WEBPACK_IMPORTED_MODULE_4__.verifyEmptyMsg)();\r\n};\n\n//# sourceURL=webpack:///./src/scripts/schedule-operations/att-schedules-list.js?\n}");

/***/ },

/***/ "./src/scripts/schedule-operations/create-schedules.js"
/*!*************************************************************!*\
  !*** ./src/scripts/schedule-operations/create-schedules.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addScheduleElement: () => (/* binding */ addScheduleElement),\n/* harmony export */   listsPeriodSchedule: () => (/* binding */ listsPeriodSchedule)\n/* harmony export */ });\n/* harmony import */ var _verify_empty_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../verify-empty-msg */ \"./src/scripts/verify-empty-msg.js\");\n\r\n\r\nconst listScheduleMorning = document.querySelector('.morning');\r\nconst listScheduleAfternoon = document.querySelector('.afternoon');\r\nconst listScheduleNight = document.querySelector('.night');\r\nconst listsPeriodSchedule = [listScheduleMorning, listScheduleAfternoon, listScheduleNight];\r\n\r\n// função que insere o agendamento na página de acordo com sua data e horário\r\nfunction addScheduleElement(scheduleObj) {\r\n    const dateFilter = document.querySelector('#schedule-date-filter').value;\r\n    const dateSchedule = scheduleObj.date;\r\n    const stop = dateFilter !== dateSchedule ? true : false;\r\n    console.log(dateFilter , 'vs.', dateSchedule)\r\n    if (stop) {\r\n        return;\r\n    };\r\n    const schedule = createScheduleElement(scheduleObj);\r\n    const hour = scheduleObj.hour;\r\n\r\n    if (hour < 13) {\r\n        listScheduleMorning.append(schedule);\r\n    } else if (hour > 18) {\r\n        listScheduleNight.append(schedule);\r\n    } else if (13 < hour < 18) {\r\n        listScheduleAfternoon.append(schedule);\r\n    }\r\n    (0,_verify_empty_msg__WEBPACK_IMPORTED_MODULE_0__.verifyEmptyMsg)();\r\n}\r\n\r\n// função que recebe o objeto com info do agendamento e retorna o elemento HTML\r\nfunction createScheduleElement(scheduleObj) {\r\n    const li = document.createElement('li');\r\n    const article = document.createElement('article');\r\n    const div = document.createElement('div');\r\n    const time = document.createElement('time');\r\n    const pIn = document.createElement('p');\r\n    const strong = document.createElement('strong');\r\n    const span = document.createElement('span');\r\n    const pOut = document.createElement('p');\r\n    const btn = document.createElement('button');\r\n\r\n    const hourFormat = scheduleObj.hour.toString().padStart(2, '0') + ':00';\r\n    time.innerText = hourFormat;\r\n    strong.innerText = scheduleObj.pet;\r\n    span.innerText = '/ ' + scheduleObj.client;\r\n    pOut.innerText = scheduleObj.description;\r\n    btn.dataset.id = scheduleObj.id;\r\n    btn.classList.add('schedule-cancel');\r\n\r\n    pIn.append(strong, span);\r\n    div.append(time, pIn);\r\n    article.append(div, pOut, btn);\r\n    li.append(article);\r\n\r\n    return li;\r\n};\n\n//# sourceURL=webpack:///./src/scripts/schedule-operations/create-schedules.js?\n}");

/***/ },

/***/ "./src/scripts/schedule-operations/delete.js"
/*!***************************************************!*\
  !*** ./src/scripts/schedule-operations/delete.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventScheduleCancel: () => (/* binding */ addEventScheduleCancel)\n/* harmony export */ });\n/* harmony import */ var _verify_empty_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../verify-empty-msg */ \"./src/scripts/verify-empty-msg.js\");\n\r\n\r\nfunction addEventScheduleCancel() {\r\n    const listBtnScheduleCancel = document.querySelectorAll('.schedule-cancel');\r\n    listBtnScheduleCancel.forEach((btn) => {\r\n        btn.onclick = (event) => {\r\n            event.target.closest('li').remove();\r\n            (0,_verify_empty_msg__WEBPACK_IMPORTED_MODULE_0__.verifyEmptyMsg)();\r\n        };\r\n    });\r\n};\n\n//# sourceURL=webpack:///./src/scripts/schedule-operations/delete.js?\n}");

/***/ },

/***/ "./src/scripts/schedule-operations/inputs-value-default.js"
/*!*****************************************************************!*\
  !*** ./src/scripts/schedule-operations/inputs-value-default.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scheduleDateFilter: () => (/* binding */ scheduleDateFilter),\n/* harmony export */   verifyHourOption: () => (/* binding */ verifyHourOption)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst scheduleDateFilter = document.querySelector('#schedule-date-filter');\r\nconst scheduleDate = document.querySelector('#date');\r\n\r\nconst dataDayjsNow = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\r\nconst dataNow = dataDayjsNow.format('YYYY-MM-DD');\r\nconst hourNow = dataDayjsNow.format('H');\r\n\r\nscheduleDateFilter.value = dataNow;\r\n\r\nscheduleDate.value = dataNow;\r\nscheduleDate.min = dataNow;\r\n\r\nscheduleDate.onchange = () => verifyHourOption();\r\n\r\nfunction verifyHourOption() {\r\n    const scheduleDate = document.querySelector('#date');\r\n    const scheduleListHours = document.querySelectorAll('#hour option');\r\n    if (scheduleDate.value === dataNow) {\r\n        scheduleListHours.forEach((hourOption) => {\r\n            if (Number(hourOption.value) <= hourNow) {\r\n                hourOption.disabled = true;\r\n            }\r\n        });\r\n    } else {\r\n        scheduleListHours.forEach((hourOption, index) => {\r\n            if (index != 0) {\r\n                hourOption.disabled = false;\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n// tratamento da entrada do input telefone\r\nconst phone = document.querySelector('#telephone');\r\nphone.maxLength = 15;\r\nphone.oninput = (event) => {\r\n    regexPhone(event.target)\r\n}\r\nfunction regexPhone(phoneElement) {\r\n    phoneElement.value = phoneElement.value.replace(/\\D/g, \"\").replace(/^(\\d{2})(\\d)/, \"($1) $2\").replace(/(\\d{5})(\\d)/, \"$1-$2\");\r\n}\n\n//# sourceURL=webpack:///./src/scripts/schedule-operations/inputs-value-default.js?\n}");

/***/ },

/***/ "./src/scripts/schedule-operations/schedules.js"
/*!******************************************************!*\
  !*** ./src/scripts/schedule-operations/schedules.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   schedules: () => (/* binding */ schedules)\n/* harmony export */ });\nconst schedules = [\r\n    {\r\n        id: Date.now(),\r\n        client: 'Marcos Leonan',\r\n        pet: 'Lessie',\r\n        phone: '(86) 99538-6030',\r\n        description: 'Sacrificar',\r\n        date: '2026-06-29',\r\n        hour: 9\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Maria Eduarda',\r\n        pet: 'Lua',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-27',\r\n        hour: 10\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Maria Eduarda',\r\n        pet: 'Rex',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-26',\r\n        hour: 10\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Maria Eduarda',\r\n        pet: 'Naja',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-28',\r\n        hour: 10\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Mariazinha',\r\n        pet: 'Cuzinho',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-29',\r\n        hour: 15\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Dudinha',\r\n        pet: 'Naja',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-28',\r\n        hour: 10\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Maria Eduarda',\r\n        pet: 'Naja',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-28',\r\n        hour: 10\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Maria Eduarda',\r\n        pet: 'Naja',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-28',\r\n        hour: 10\r\n    },\r\n    {\r\n        id: Date.now() + 1235,\r\n        client: 'Maria Eduarda',\r\n        pet: 'Naja',\r\n        phone: '(86) 55555-5555',\r\n        description: 'Castrar',\r\n        date: '2026-06-28',\r\n        hour: 10\r\n    }\r\n];\n\n//# sourceURL=webpack:///./src/scripts/schedule-operations/schedules.js?\n}");

/***/ },

/***/ "./src/scripts/schedule-operations/submit.js"
/*!***************************************************!*\
  !*** ./src/scripts/schedule-operations/submit.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verify_empty_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../verify-empty-msg */ \"./src/scripts/verify-empty-msg.js\");\n/* harmony import */ var _switch_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch-screen.js */ \"./src/scripts/switch-screen.js\");\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.js */ \"./src/scripts/schedule-operations/delete.js\");\n/* harmony import */ var _create_schedules_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-schedules.js */ \"./src/scripts/schedule-operations/create-schedules.js\");\n\r\n\r\n\r\n\r\n\r\nconst form = document.querySelector('.schedule-form');\r\n\r\nform.onsubmit = (event) => {\r\n    event.preventDefault();\r\n    \r\n    // obtendo os elemento do DOM\r\n    const client = document.querySelector('#name-client');\r\n    const pet = document.querySelector('#name-pet');\r\n    const phone = document.querySelector('#telephone');\r\n    const description = document.querySelector('#service-description');\r\n    const date = document.querySelector('#date');\r\n    const hour = document.querySelector('#hour');\r\n\r\n    // Tratando os valores dos inputs\r\n    if (!client.value.trim()) {\r\n        client.value = '';\r\n        return alert('Identifique o tutor do pet');\r\n    }\r\n    if (!pet.value.trim()) {\r\n        pet.value = '';\r\n        return alert('Insira o nome do pet');\r\n    }\r\n    if (phone.value.length < 15) {\r\n        return alert('Insira o número de telefone válido');\r\n    }\r\n    if (!description.value.trim()) {\r\n        return alert('Insira a descrição do serviço');\r\n    }\r\n    if (!hour.value) {\r\n        return alert('Selecione um horário')\r\n    }\r\n\r\n    // objeto que armazena dados do agendamento\r\n    const scheduleObj = {\r\n        id: Date.now(),\r\n        client: client.value.trim(),\r\n        pet: pet.value.trim(),\r\n        phone: phone.value,\r\n        description: description.value.trim(),\r\n        date: date.value,\r\n        hour: Number(hour.value)\r\n    };\r\n    \r\n    (0,_create_schedules_js__WEBPACK_IMPORTED_MODULE_3__.addScheduleElement)(scheduleObj);\r\n    (0,_switch_screen_js__WEBPACK_IMPORTED_MODULE_1__.openScheduleForm)(false);\r\n    (0,_delete_js__WEBPACK_IMPORTED_MODULE_2__.addEventScheduleCancel)();\r\n\r\n    form.reset()\r\n    date.value = scheduleObj.date;\r\n};\n\n//# sourceURL=webpack:///./src/scripts/schedule-operations/submit.js?\n}");

/***/ },

/***/ "./src/scripts/switch-screen.js"
/*!**************************************!*\
  !*** ./src/scripts/switch-screen.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openScheduleForm: () => (/* binding */ openScheduleForm)\n/* harmony export */ });\nconst scheduleDOM = document.querySelector('.schedule');\r\nconst scheduleFormContainer = document.querySelector('.schedule-form-container');\r\nconst backgroundFormContainer = document.querySelector('.background');\r\nconst btnOpenScheduleForm = document.querySelector('.open-schedule-form');\r\nconst btnCloseScheduleForm = document.querySelector('.close-schedule-form');\r\n\r\nbtnCloseScheduleForm.onclick = () => {\r\n    openScheduleForm(false);\r\n}\r\n\r\nbtnOpenScheduleForm.onclick = () => {\r\n    openScheduleForm(true);\r\n}\r\n\r\nscheduleFormContainer.onclick = () => {\r\n    console.log('clicou pra sair')\r\n}\r\n\r\nfunction openScheduleForm(bool) {\r\n    if (bool) {\r\n        scheduleDOM.classList.add('blur');\r\n    } else {\r\n        scheduleDOM.classList.remove('blur');\r\n    }\r\n    scheduleFormContainer.hidden = !bool;\r\n    backgroundFormContainer.hidden = !bool;\r\n    btnOpenScheduleForm.hidden = bool;\r\n    window.scrollTo({\r\n        top: 0,\r\n        behavior: 'smooth'\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/scripts/switch-screen.js?\n}");

/***/ },

/***/ "./src/scripts/verify-empty-msg.js"
/*!*****************************************!*\
  !*** ./src/scripts/verify-empty-msg.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   verifyEmptyMsg: () => (/* binding */ verifyEmptyMsg)\n/* harmony export */ });\nfunction verifyEmptyMsg() {\r\n    const scheduleListsDOM = document.querySelectorAll('.schedule-list');\r\n    scheduleListsDOM.forEach((list) => {\r\n        const emptyMsg = list.previousElementSibling;\r\n        if (list.children.length == 0) {\r\n            list.hidden = true;\r\n            emptyMsg.hidden = false;\r\n        } else {\r\n            list.hidden = false;\r\n            emptyMsg.hidden = true;\r\n        };\r\n    });\r\n};\n\n//# sourceURL=webpack:///./src/scripts/verify-empty-msg.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;