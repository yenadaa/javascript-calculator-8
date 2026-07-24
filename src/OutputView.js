import { Console } from '@woowacourse/mission-utils';

class OuputClass{

    constructor(sum){
        this.sum = sum;
    }
    
    output() {
        Console.print(`결과 : ${this.sum}`);
    } 
}

export default OuputClass