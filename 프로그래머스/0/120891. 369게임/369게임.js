function solution(order) {
    // 1. 정규표현식 풀이법
    // let value = order.toString().match(/[369]/g) ?? []
    // return value.length;
    
    // 2. Set 풀이법
    const s = new Set('369');
    return order.toString().split('').filter(v => s.has(v)).length;
}

/* 
Nullish(널 병합) 연산자
왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환한다.
*/