"use strict";
// generic은 타입스크립트에서 function, class, interace, type을 사용하게 될 때 여러 종류의
// 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법이다.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// * function 에서 generic 사용
// 
// 
// 객체 A와 객체 B를 합쳐주는 함수를 만들때 A와 B가 어떤 타입이 올지 모르기 때문에 any 타입을 쓴다.
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 2 });
// 하지만 이런식으로 사용할 경우 타입 추론이 깨진 것과 다름 없다.
// 따라서 generic은 다음과 같이 사용해야 한다.
function newMerge(a, b) {
    return __assign(__assign({}, a), b);
}
//const newMerged = newMerge<object, string >({ foo: 1 }, { bar: 2 });
// -> 에러 발생한다, 지정한 타입과 { bar: 2 }의 타입이 다르기 때문
var newnewMerged = newMerge({ foo: 1 }, { bar: 2 });
var items = {
    list: ['a', 'b', 'c']
};
// * class 에서 generic 사용
// 
// 
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
