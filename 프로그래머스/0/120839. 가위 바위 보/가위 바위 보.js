function solution(rsp) {
    // for문 내부의 if 문으로 풀이
    
    // var answer = '';
    // for (let i of rsp){
    //     if (i == '0') {
    //         answer += '5'
    //     } else if (i == '2'){
    //         answer += '0'
    //     } else if (i == '5'){
    //         answer += '2'
    //     }
    // }
    // return answer;
    
    
    // 각 사건에 대응하는 오브젝트 만들기
    
    let answer = {'0':'5', '2':'0', '5':'2'};
    return [...rsp].map(v => answer[v]).join('');
}