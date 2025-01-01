class BooleanQuestions {
  constructor(description) {
    this.description = description;
  }
  printQuesionChoices() {
    console.log("1. True");
    console.log("2. Flase");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuesionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestions {
  constructor(description) {
    this.description = description;
  }
  printQuesionChoices() {
    console.log("Answer:______________");
  }
}

class RangeQuestions {
  constructor(description) {
    this.description = description;
  }
  printQuesionChoices() {
    console.log("1. 0");
    console.log("2. 1");
    console.log("3. 2");
  }
}

function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description);
        question.printQuesionChoices();
    });
}

const questions = [
    new BooleanQuestions('This video is useful'),
    new MultipleChoiceQuestion('What is your name?', ['John', 'Jane', 'Bob']),
    new TextQuestions('What is your name'),
    new RangeQuestions('How many hours do you sleep?')
]

printQuiz(questions);