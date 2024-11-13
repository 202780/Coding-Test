function solution(s1, s2) {
    // return s1.filter(v => s2.includes(v)).length;
    
    // 교집합의 개수로 풀이하기(집합 내부에 전개하면서 중복된 값은 1번만 카운트)
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
}