export function saveItemInLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getItemFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function selectImageLanguage(language) {
  if (language === "JavaScript") {
    return require("./../assets/img/languages/js.png");
  }
  if (language === "Java") {
    return require("./../assets/img/languages/java.jpg");
  }
  if (language === "CoffeeScript") {
    return require("./../assets/img/languages/coffe.png");
  }
  if (language === "Scala") {
    return require("./../assets/img/languages/scala.png");
  }
  if (language === "Kotlin") {
    return require("./../assets/img/languages/kotlin.png");
  }
  if (language === "Ruby") {
    return require("./../assets/img/languages/ruby.jpg");
  }
  if (language === "TypeScript") {
    return require("./../assets/img/languages/ts.png");
  }
  if (language === "Erlang") {
    return require("./../assets/img/languages/Erlang_logo.svg.png");
  }
  if (language === "CSS") {
    return require("./../assets/img/languages/CSS.3.svg.png");
  }
  if (language === "Arduino") {
    return require("./../assets/img/languages/arduino.png");
  }
  if (language === "Python") {
    return require("./../assets/img/languages/python.png");
  }
  if (language === "Objective-C" || language === "Objective-C++") {
    return require("./../assets/img/languages/iOS_Objective_C.png");
  }
  if (language === "C++") {
    return require("./../assets/img/languages/c++.png");
  }
  if (language === "C") {
    return require("./../assets/img/languages/c-programming.png");
  }
  if (language === "HTML") {
    return require("./../assets/img/languages/html.png");
  }
  if (language === "Dart") {
    return require("./../assets/img/languages/dart.jpg");
  }
  if (language === "Go") {
    return require("./../assets/img/languages/go.jpg");
  }
  if (language === "PHP") {
    return require("./../assets/img/languages/php_PNG50.png");
  }
  if (language === "Swift") {
    return require("./../assets/img/languages/Swift_logo.png");
  }
  if (language === "Elixir") {
    return require("./../assets/img/languages/-MWyJCb1.png");
  }
  if (language === "Shell" || language === 'PowerShell') {
    return require("./../assets/img/languages/shell.png");
  }
  if (language === "R") {
    return require("./../assets/img/languages/r.jpg");
  }
  if (language === "C#") {
    return require("./../assets/img/languages/c#.jpg");
  }
  if (language === "Vue") {
    return require("./../assets/img/languages/vue.png");
  }
  if (language === "Angular") {
    return require("./../assets/img/languages/angular.png");
  }
  if (language === "React") {
    return require("./../assets/img/languages/react.png");
  }

  console.log(language);

  return require("./../assets/img/languages/not-found.png");
}
