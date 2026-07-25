class ParsingClass {
    inputText;

    constructor(inputText){
        this.inputText = inputText;
    }
    parse() {
        if(this.inputText === "") return [0];
        // 빈 문자열 입력 시 0을 반환

        if(/^\d+$/.test(this.inputText)) return [this.inputText].map(Number);
        // 숫자만 존재할 경우 해당 숫자 그대로 반환 (배열의 문자를 숫자로 변환한 상태 반환)
        
        if(this.inputText.startsWith('//')){
            // 문자열이 '//'로 시작하는지 확인
            
            const newlineIndex = this.inputText.indexOf('\n');
            // 커스텀구분자가 한글자 이상일 수 있으므로 미리 '\n'의 인덱스를 변수에 저장
            
            const custom = this.inputText.substring(2, newlineIndex);
            // '//'와 '\n'사이에 있는 구분자 추출
            
            const customInput = this.inputText.substring(newlineIndex+1);
            // '\n'에서 n 다음에 해당하는 인덱스부터 끝까지 추출 
            
            const customArr = customInput.split(custom);
            // 추출한 문자열에서 커스텀구분자를 기준으로 분리하여 숫자 추출
            
            return customArr.map(Number);
            // 배열의 문자를 숫자로 변환한 상태 반환
        
        }// else 최대한 쓰지 않고 작성
        
        const arr = this.inputText.split(/[,:]/);
        // 정규식을 사용하여 기본 구분자 쉼표와 콜론을 기준으로 분리하여 숫자 추출
        
        return arr.map(Number);
        // 배열의 문자를 숫자로 변환한 상태 반환

    }
}

class CalculatorClass {
    arrayReturn;

    constructor(arrayReturn) {
        this.arrayReturn = arrayReturn;
    }

    plus() {
        let sum = 0; // 배열 합을 담을 변수 초기화
        for(let i = 0; i < this.arrayReturn.length; i++){ // for 반복문 이용하여 배열에 접근
            sum += this.arrayReturn[i]; // 인덱스 순서대로 숫자를 가져와서 sum 변수에 더하고 저장
        }
        return sum; // 배열의 합 반환
    }
}

export {ParsingClass, CalculatorClass};