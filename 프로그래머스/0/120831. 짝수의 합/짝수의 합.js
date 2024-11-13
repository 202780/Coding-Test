function solution(n) {
    return Array(n).fill().map((_, i) => i+1).filter(v => v % 2 === 0).reduce((a,c) => a + c, 0);
}

// 참고 링크 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// n == 1일 때 빈 배열을 reduce하면 오류가 발생하므로, 0으로 초기값을 준다.