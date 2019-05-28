import {
  selectImageLanguage,
  getItemFromLocalStorage,
  saveItemInLocalStorage
} from "./utils";

describe("Utils Images functions", () => {
  it("must return javascript image path", () => {
    const expectedAction = "js.png";
    expect(selectImageLanguage("JavaScript")).toEqual(expectedAction);
  });
  it("must return Java image path", () => {
    const expectedAction = "java.jpg";
    expect(selectImageLanguage("Java")).toEqual(expectedAction);
  });
  it("must return CoffeeScript image path", () => {
    const expectedAction = "coffe.png";
    expect(selectImageLanguage("CoffeeScript")).toEqual(expectedAction);
  });
  it("must return Scala image path", () => {
    const expectedAction = "scala.png";
    expect(selectImageLanguage("Scala")).toEqual(expectedAction);
  });
  it("must return Kotlin image path", () => {
    const expectedAction = "kotlin.png";
    expect(selectImageLanguage("Kotlin")).toEqual(expectedAction);
  });
  it("must return Ruby image path", () => {
    const expectedAction = "ruby.jpg";
    expect(selectImageLanguage("Ruby")).toEqual(expectedAction);
  });
  it("must return TypeScript image path", () => {
    const expectedAction = "ts.png";
    expect(selectImageLanguage("TypeScript")).toEqual(expectedAction);
  });
  it("must return Erlang image path", () => {
    const expectedAction = "Erlang_logo.svg.png";
    expect(selectImageLanguage("Erlang")).toEqual(expectedAction);
  });
  it("must return CSS image path", () => {
    const expectedAction = "CSS.3.png";
    expect(selectImageLanguage("CSS")).toEqual(expectedAction);
  });
  it("must return Arduino image path", () => {
    const expectedAction = "arduino.png";
    expect(selectImageLanguage("Arduino")).toEqual(expectedAction);
  });
  it("must return Python image path", () => {
    const expectedAction = "python.png";
    expect(selectImageLanguage("Python")).toEqual(expectedAction);
  });
  it("must return Objective-C image path", () => {
    const expectedAction = "iOS_Objective_C.png";
    expect(selectImageLanguage("Objective-C")).toEqual(expectedAction);
  });
  it("must return Objective-C++ image path", () => {
    const expectedAction = "iOS_Objective_C.png";
    expect(selectImageLanguage("Objective-C++")).toEqual(expectedAction);
  });
  it("must return C++ image path", () => {
    const expectedAction = "c++.png";
    expect(selectImageLanguage("C++")).toEqual(expectedAction);
  });
  it("must return C image path", () => {
    const expectedAction = "c-programming.png";
    expect(selectImageLanguage("C")).toEqual(expectedAction);
  });
  it("must return HTML image path", () => {
    const expectedAction = "html.png";
    expect(selectImageLanguage("HTML")).toEqual(expectedAction);
  });
  it("must return Dart image path", () => {
    const expectedAction = "dart.jpg";
    expect(selectImageLanguage("Dart")).toEqual(expectedAction);
  });
  it("must return Go image path", () => {
    const expectedAction = "go.jpg";
    expect(selectImageLanguage("Go")).toEqual(expectedAction);
  });
  it("must return PHP image path", () => {
    const expectedAction = "php_PNG50.png";
    expect(selectImageLanguage("PHP")).toEqual(expectedAction);
  });
  it("must return Swift image path", () => {
    const expectedAction = "Swift_logo.png";
    expect(selectImageLanguage("Swift")).toEqual(expectedAction);
  });
  it("must return Elixir image path", () => {
    const expectedAction = "-MWyJCb1.png";
    expect(selectImageLanguage("Elixir")).toEqual(expectedAction);
  });
  it("must return Shell image path", () => {
    const expectedAction = "shell.png";
    expect(selectImageLanguage("Shell")).toEqual(expectedAction);
  });
  it("must return R image path", () => {
    const expectedAction = "r.jpg";
    expect(selectImageLanguage("R")).toEqual(expectedAction);
  });
  it("must return C# image path", () => {
    const expectedAction = "c#.jpg";
    expect(selectImageLanguage("C#")).toEqual(expectedAction);
  });
  it("must return Vue image path", () => {
    const expectedAction = "vue.png";
    expect(selectImageLanguage("Vue")).toEqual(expectedAction);
  });
  it("must return Angular image path", () => {
    const expectedAction = "angular.png";
    expect(selectImageLanguage("Angular")).toEqual(expectedAction);
  });
  it("must return React image path", () => {
    const expectedAction = "react.png";
    expect(selectImageLanguage("React")).toEqual(expectedAction);
  });
  it("must return PowerShell image path", () => {
    const expectedAction = "shell.png";
    expect(selectImageLanguage("PowerShell")).toEqual(expectedAction);
  });

  it("must return not found image path", () => {
    const expectedAction = "not-found.png";
    expect(selectImageLanguage("anything")).toEqual(expectedAction);
  });
});

describe("Utils Storage functions", () => {
  it("must set a item in localStorage", () => {
    const expectedAction = undefined;
    expect(saveItemInLocalStorage("user", {})).toEqual(expectedAction);
  });
  it("must get a item in localStorage", () => {
    const expectedAction = {};
    expect(getItemFromLocalStorage("user")).toEqual(expectedAction);
  });
});
