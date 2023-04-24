/*
일반 함수는 하나의 값 또는 0개의 값을 반환합니다

하지만 제너레이터를 사용하면 여러개의 값을 필요에 따라서
하나씩 반환(yield) 할 수 있습니다
즉 원하는 시점에서 순차적으로, 동기적으로 호출하면서 반환하는게 가능합니다

제너레이터를 사용하는 환경은 대규모프로젝트입니다

제너레이터 함수는 제너레이터 객체를 생성합니다
결과값이 { value: 'test1, done : false } 이런 객체형태로 나오게 됩니다
이 결과값의 객체를 "inerable object" 기존의 객체와 아주 살짝 다릅니다

next()는 제너레이터의 주요 메소드입니다
next()로 제너레이터를 호출하면 가장 가까이 있는 yield를 만날때까지
실행하다가 yield를 만나면 실행을 멈추고 산출하고자 하는 값을 반환합니다
{ value: 'test1, done : false } <--  이런 식으로 yield로 불러온 함수와 벨류와
함수실행의 여부를 도출합니다
value 산출값, 해당함수의 결과값
done 함수의 코드가 실행되었는지의 여부

결과적으로 제너레이터는 함수의 동기적 호출이 주요 목적입니다(호이스팅으로 부터 자유)
*/

//js 함수처럼 생각하지말고 아예 다른 문법이라고 생각할것

function test1(){
    return "test1";
}
function test2(){
    return "test2";
}
function test3(){
    return "test3";
}

//function *genrator 아래와 같음
function* generator(){
    yield test1();
    yield test2();
    yield test3();
}

const result = generator();
//바로 사용하지않고 제너레이터를 변수에 담아서 사용

const a = result.next();
//제너레이터를 호출할때 .next 메소드를 사용

console.log(a);
// { value: 'test1, done : false } 

const b = result.next();
console.log(b);

const c = result.next();
console.log(c);

const d = result.next();
console.log(d);