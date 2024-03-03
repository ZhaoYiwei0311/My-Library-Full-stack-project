"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rectanle = void 0;
var Shape_1 = require("./Shape");
var Rectanle = /** @class */ (function (_super) {
    __extends(Rectanle, _super);
    function Rectanle(theX, theY, _width, _length) {
        var _this = _super.call(this, theX, theY) || this;
        _this._width = _width;
        _this._length = _length;
        return _this;
    }
    Object.defineProperty(Rectanle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectanle.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectanle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", width = ".concat(this._width, ", length = ").concat(this._length);
    };
    return Rectanle;
}(Shape_1.Shape));
exports.Rectanle = Rectanle;
