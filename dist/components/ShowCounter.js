"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const ShowCounter = _ref => {
  let {
    days,
    hours,
    minutes,
    seconds
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement("h6", null, "Time remaining"), /*#__PURE__*/React.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border p-1"
  }, /*#__PURE__*/React.createElement("p", null, "days"), /*#__PURE__*/React.createElement("code", null, days)), /*#__PURE__*/React.createElement("div", {
    className: "border p-1"
  }, /*#__PURE__*/React.createElement("p", null, "hours"), /*#__PURE__*/React.createElement("code", null, hours)), /*#__PURE__*/React.createElement("div", {
    className: "border p-1"
  }, /*#__PURE__*/React.createElement("p", null, "min"), /*#__PURE__*/React.createElement("code", null, minutes)), /*#__PURE__*/React.createElement("div", {
    className: "border p-1"
  }, /*#__PURE__*/React.createElement("p", null, "sec"), /*#__PURE__*/React.createElement("code", null, seconds))));
};

var _default = ShowCounter;
exports.default = _default;