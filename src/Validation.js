export class ValidationError {
    check(parseNumbers, inputText) {
        if(inputText === "") return;
        const isOnlySeparators = parseNumbers.every(num => num === 0);
        if(isOnlySeparators) {// 문자열에 숫자 없이 구분자만 존재할 경우
            throw new Error('[ERROR] 구분자만 입력할 수 없습니다!');
        }
        for(const num of parseNumbers) {
            if(Number.isNaN(num)) {// 문자열에 커스텀구분자가 아닌 문자가 존재할 경우
                throw new Error('[ERROR] 문자열에 올바른 숫자가 존재하지 않습니다!');
            }
            if(num < 0) {// 문자열에 음수가 존재할 경우
                throw new Error('[ERROR] 음수는 입력할 수 없습니다!');
            }
        }
    }
}
