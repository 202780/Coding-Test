function solution(age) {
    let chr = 'abcdefghij'
    return Array.from(age.toString()).map(v=>chr[v]).join('');
}

/*
Array.from() 은 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드

let age = 23일 때, age.toString() == '23'이고
1. Array(age.toString()) == ['23']
2. Array.from(age.toString()) == ['2', '3']
*/