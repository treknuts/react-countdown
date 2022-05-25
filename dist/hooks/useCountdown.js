"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCountdown = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useCountdown = targetDate => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = (0, _react.useState)(countDownDate - new Date().getTime());
  (0, _react.useEffect)(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};

exports.useCountdown = useCountdown;

const getReturnValues = countDown => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(countDown % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(countDown % (1000 * 60) / 1000);
  return [days, hours, minutes, seconds];
};