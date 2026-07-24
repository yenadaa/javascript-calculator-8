import { Console } from '@woowacourse/mission-utils';

class InputClass {

    async input() { //클래스 안에서는 function 빼야힘
        const inputText =  await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        return inputText;
    }
}

export default InputClass
