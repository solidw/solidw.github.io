import { frontMatterParser } from "./frontMatterParser";

describe("머리글을 파싱한다.", () => {
  test("키의 종류에 상관없이 파싱할 수 있다.", () => {
    const parsed = frontMatterParser(
      `---\ntitle: 타이틀\ndescription: 디스크립션\n---\n#h1`
    );
    expect(parsed).toEqual({ title: "타이틀", description: "디스크립션" });
  });
  test("내용과 상관없이 '---'가 2번째 나올 때 파싱을 종료한다.", () => {
    const parsed = frontMatterParser(
      `---\n---title: 타이틀\ndescription: 디스크립션\n---`
    );
    expect(parsed).toEqual({});
  });
  test("같은 라인에 작성한 key: value는 하나의 value로 취급한다.", () => {
    const parsed = frontMatterParser(
      `---\ntitle: 타이틀 description: 디스크립션\n---`
    );
    expect(parsed).toEqual({ title: "타이틀 description: 디스크립션" });
  });
});
