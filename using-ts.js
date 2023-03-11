var _a, _b, _c;
var Indicator = /** @class */ (function () {
    function Indicator(number) {
        if (number >= 0) {
            this.inputNumber = number;
        }
        else {
            throw ('number is not correct');
        }
    }
    return Indicator;
}());
var listNumber = [];
var ListNumber = /** @class */ (function () {
    function ListNumber(inputNumber) {
        this.alert = document.getElementById('alert');
        if (inputNumber >= 0 && !!inputNumber) {
            listNumber.push(inputNumber);
        }
    }
    Object.defineProperty(ListNumber.prototype, "getlistNumber", {
        get: function () {
            return listNumber;
        },
        enumerable: false,
        configurable: true
    });
    ListNumber.prototype.add = function (addNumber) {
        if (addNumber >= 0 && !!addNumber) {
            this.alert.innerHTML += "   \n        <div class=\"alert alert-success alert-dismissible fade show \"  role=\"alert\">\n          <strong class=\"p-2\">".concat(listNumber.length, "</strong> ").concat(addNumber, "\n         <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n       </div>");
        }
        else {
            throw ('number is not correct');
        }
    };
    return ListNumber;
}());
var listOnlyNumber = [];
var listCount = [];
var listSum = [];
var Ui = /** @class */ (function () {
    function Ui(AddNumber) {
        this.TableBody = document.getElementById('a');
        if (AddNumber != null) {
            if (listOnlyNumber.some(function (element) { return element == AddNumber; })) {
            }
            else {
                listOnlyNumber.push(AddNumber);
            }
        }
    }
    Ui.prototype.generate = function () {
        listOnlyNumber.sort();
        console.log(listOnlyNumber);
        for (var index = 0; index < listOnlyNumber.length; index++) {
            this.TableBody.innerHTML += "     \n            <tr class=\"table-primary\" id=\"table-primary\" >\n            <td>".concat(listOnlyNumber[index], "</td>\n            <td>").concat(this.Fi(listOnlyNumber[index]), "</td>\n            <td>").concat(this.Ri(listCount[index]), "</td>\n            <td>").concat(this.gi(index), "</td>\n            <td>").concat(this.si(index), "</td>\n                    </tr>");
        }
    };
    Ui.prototype.Fi = function (SearchNumber) {
        var count = 0;
        for (var j = 0; j < listNumber.length; j++) {
            if (SearchNumber === listNumber[j]) {
                count += 1;
            }
            else { }
        }
        listCount.push(count);
        return count;
    };
    Ui.prototype.Ri = function (Division) {
        return Division / listNumber.length;
    };
    Ui.prototype.gi = function (index) {
        var sum = 0;
        if (index === 0) {
            sum = listCount[0];
            listSum.push(sum);
            return sum;
        }
        else {
            for (var i = 0; i <= index; i++) {
                sum += listCount[i];
            }
            listSum.push(sum);
            return sum;
        }
    };
    Ui.prototype.si = function (index) {
        return listSum[index] / listNumber.length;
    };
    Ui.prototype["delete"] = function () {
        var alert = document.getElementById('alert');
        this.TableBody.innerHTML = "";
        alert.innerHTML = "";
        listOnlyNumber = [];
        listCount = [];
        listSum = [];
        listNumber = [];
    };
    return Ui;
}());
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    var form = document.getElementById('form');
    var objListNumber = new ListNumber(form[0].value);
    objListNumber.add(form[0].value);
    var objIndicator = new Indicator(form[0].value);
    var objUi = new Ui(objIndicator.inputNumber);
});
(_b = document.getElementById("generate")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) {
    e.preventDefault();
    var submit = document.getElementById('submit');
    var generate = document.getElementById('generate');
    submit.classList.add('disabled');
    generate.classList.add('disabled');
    var objUi = new Ui(null);
    objUi.generate();
});
(_c = document.getElementById("clear")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (e) {
    e.preventDefault();
    var objUi = new Ui(null);
    objUi["delete"]();
    var submit = document.getElementById('submit');
    var generate = document.getElementById('generate');
    submit.classList.remove('disabled');
    generate.classList.remove('disabled');
});
