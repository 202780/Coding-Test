function solution(numbers, direction) {
    if(direction == 'right'){
        // numbers.unshift(numbers.pop());
        numbers = [numbers.pop(), ...numbers]
    } else {
        // numbers.push(numbers.shift());
        numbers = [...numbers.slice(1), numbers.shift()]
    }
    return numbers;
}