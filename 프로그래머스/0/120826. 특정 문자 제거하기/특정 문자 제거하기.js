function solution(my_string, letter) {
    // return my_string.replaceAll(letter, '');
    
    // 아래는 정규 표현식 풀이
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
}


// my_string.replace(/letter/g, '')처럼 안에 변수를 집어넣을 수 없음

// 참고 링크 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_expressions