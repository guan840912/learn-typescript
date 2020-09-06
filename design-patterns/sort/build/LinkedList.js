"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikedList = void 0;
var LikedList = /** @class */ (function () {
    function LikedList(data) {
        this.data = data;
    }
    Object.defineProperty(LikedList.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    LikedList.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    LikedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return LikedList;
}());
exports.LikedList = LikedList;
