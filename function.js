
// 1. 함수 선언문
function add(a, b) {
    return a + b;
}
console.log("함수 선언문:", add(3, 4));  // 출력: 7

// 2. 익명 함수 표현식
const multiply = function(a, b) {
    return a * b;
};
console.log("익명 함수 표현식:", multiply(3, 4));  // 출력: 12

// 3. 기명 함수 표현식
const divide = function divideNumbers(a, b) {
    return a / b;
};
console.log("기명 함수 표현식:", divide(8, 2));  // 출력: 4

// 4. Function 생성자
const subtract = new Function('a', 'b', 'return a - b;');
console.log("Function 생성자:", subtract(10, 4));  // 출력: 6

// 5. 화살표 함수
const square = (x) => x * x;
console.log("화살표 함수:", square(5));  // 출력: 25

// 1. IIFE (즉시 실행 함수)
(function() {
    console.log("즉시 실행 함수(IIFE) 실행");
})();

// 2. 재귀함수 (Recursion)
// 팩토리얼을 구하는 재귀 함수
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("재귀 함수 (5!):", factorial(5));  // 출력: 120

// 3. 중첩함수 (Nested Function)
function outerFunction(outerVar) {
    console.log("외부 함수:", outerVar);
    
    function innerFunction(innerVar) {
        console.log("내부 함수:", innerVar);
    }
    
    innerFunction(outerVar * 2);
}
outerFunction(5);  // 출력: 외부 함수: 5, 내부 함수: 10

// 4. 콜백함수 (Callback Function)
function greeting(name) {
    console.log("안녕하세요, " + name + "님!");
}

function processUserInput(callback) {
    const name = "해림";  // 예시로 고정된 이름 사용
    callback(name);
}

processUserInput(greeting);  // 출력: 안녕하세요, 해림님!

