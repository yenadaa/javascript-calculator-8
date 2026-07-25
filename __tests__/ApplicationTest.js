import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("문자열 계산기", () => {
  test("1. 커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("2. 쉼표와 콜론 구분자 혼합 사용", async () => {
    // 1. 테스트할 입력값 넣기
    const inputs = ["1,2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    // 2. 나와야 하는 예상 결과 적기
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    // 3. 결과 검증 (그대로 유지)
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("3. 빈 문자열 사용", async () => {
  // 1. 테스트할 입력값 넣기
  const inputs = [""];
  mockQuestions(inputs);

  const logSpy = getLogSpy();
  // 2. 나와야 하는 예상 결과 적기
  const outputs = ["결과 : 0"];

  const app = new App();
  await app.run();

  // 3. 결과 검증 (그대로 유지)
  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test("4. 숫자만 사용", async () => {
  // 1. 테스트할 입력값 넣기
  const inputs = ["123"];
  mockQuestions(inputs);

  const logSpy = getLogSpy();
  // 2. 나와야 하는 예상 결과 적기
  const outputs = ["결과 : 123"];

  const app = new App();
  await app.run();

  // 3. 결과 검증 (그대로 유지)
  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test("5. 커스텀 구분자 사용", async () => {
  // 1. 테스트할 입력값 넣기
  const inputs = ["//*\\n1*2*3"];
  mockQuestions(inputs);

  const logSpy = getLogSpy();
  // 2. 나와야 하는 예상 결과 적기
  const outputs = ["결과 : 6"];

  const app = new App();
  await app.run();

  // 3. 결과 검증 (그대로 유지)
  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test("쉼표와 콜론 구분자 혼합 사용", async () => {
  // 1. 테스트할 입력값 넣기
  const inputs = ["1,2:3"];
  mockQuestions(inputs);

  const logSpy = getLogSpy();
  // 2. 나와야 하는 예상 결과 적기
  const outputs = ["결과 : 6"];

  const app = new App();
  await app.run();

  // 3. 결과 검증 (그대로 유지)
  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
  test("(음수) 예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("(문자 존재) 예외 테스트", async () => {
    const inputs = ["hi"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("(구분자만 존재) 예외 테스트", async () => {
    const inputs = ["::::"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

});