function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

/* 이때 양쪽에서 .join('')을 삭제하면 오답임. 왤까??

1. join('')을 삭제하면 배열끼리 비교하므로 기댓값과 결괏값이 다를 수 있다.
2. join('')을 사용하면 문자열끼리 비교하므로 값이 같으면 true, 즉 1을 반환한다.
*/