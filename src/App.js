import InputClass from "./InputView";

import { ParsingClass, CalculatorClass } from "./Calculator";
import { ValidationError } from "./Validation";

import OuputClass from "./OutputView";


class App {
  async run() {
    const str = await new InputClass().input();
    // 사용자 입력 받기

    const arr = new ParsingClass(str).parse();
    // 입력값을 구분자 기준으로 숫자형 배열로 전환

    new ValidationError().check(arr, str); 
    // 잘못된 값이면 여기서 에러 throw, 이후 로직 중단

    const sum = new CalculatorClass(arr).plus();
    // 숫자 배열 합산

    new OuputClass(sum).output();
    // 결과 출력
  }
}

export default App;
