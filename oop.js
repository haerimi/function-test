// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
var Employee = /** @class */ (function () {
    function Employee(_empName, age, empJob) {
        var _this = this;
        this._empName = _empName;
        this.age = age;
        this.empJob = empJob;
        this.printEmp = function () {
            console.log(_this.empName + "의 나이는 " + _this.age + "이고, 직업은 " + _this.empJob + "입니다.");
        };
        this.empName = _empName;
        this.age = age;
        this.empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee('kim', 20, '개발자');
employee.empName = "lee";
employee.printEmp();
