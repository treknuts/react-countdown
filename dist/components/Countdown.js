"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Countdown = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _useCountdown = require("../hooks/useCountdown");

var _ShowCounter = _interopRequireDefault(require("./ShowCounter"));

var _ExpiredNotice = _interopRequireDefault(require("./ExpiredNotice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Countdown = _ref => {
  let {
    targetDate
  } = _ref;
  const [days, hours, minutes, seconds] = (0, _useCountdown.useCountdown)(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return /*#__PURE__*/React.createElement(_ExpiredNotice.default, null);
  } else {
    return /*#__PURE__*/React.createElement(_ShowCounter.default, {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }
};

exports.Countdown = Countdown;