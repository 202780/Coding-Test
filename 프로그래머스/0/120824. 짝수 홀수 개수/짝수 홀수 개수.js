function solution(num_list) {
    var answer = [0, 0];
    for(item of num_list){
        // if(item % 2 == 0){
        //     answer[item % 2] += 1;
        // } else {
        //     answer[1] += 1;
        // }
        
        answer[item % 2] += 1;
    }
    return answer;
}