"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _src = require("../src");

var _src2 = _interopRequireDefault(_src);

var _amen = require("amen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var p, pct, rem, render, s, scale;

({ s, p, render, rem, pct, scale } = _src2.default);

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("VCSS", [(0, _amen.test)("helpers and nested selectors", function () {
    var _rec = new _powerAssertRecorder();

    var css, rhythm;
    rhythm = function (lineHeight, fontSize) {
      return [p("font-size", scale(lineHeight, fontSize)), p("line-height", lineHeight)];
    };
    css = render(s("article", [s("& > h1", [rhythm(rem(4), pct(90))]), s("& > p", [p("font-face", "Montserrat")])]));
    return _powerAssert2.default.equal(_rec._expr(_rec._capt(css, "arguments/0"), {
      content: "assert.equal(css, \"article > h1 { font-size: 3.6rem; line-height: 4rem; }\\narticle > p { font-face: Montserrat; }\")",
      filepath: "index.coffee",
      line: 27
    }), "article > h1 { font-size: 3.6rem; line-height: 4rem; }\narticle > p { font-face: Montserrat; }");
  })])));
})();