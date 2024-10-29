// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드

class Employee {

    constructor(
        private _empName: string, 
        private age?: number, 
        private empJob?:string) {
        this.empName = _empName
        this.age = age;
        this.empJob = empJob;
    }

    get empName() {
        return this._empName;
    }

    set empName(val: string) {
        this._empName = val;
    }
    printEmp = (): void => {
        console.log(this.empName + "의 나이는 " + this.age+"이고, 직업은 " + this.empJob+"입니다.");
    } 
}

let employee = new Employee('kim', 20, '개발자');
employee.empName = "lee";
employee.printEmp();