function solution(my_string) {
    return [...new Set(my_string)].join('');
}

/*
자바스크립트에서 Set은 중복된 문자열을 순서를 보장받으며 지울 수 있다! 파이썬의 Set은 순서를 보장하지 않는다.
*/