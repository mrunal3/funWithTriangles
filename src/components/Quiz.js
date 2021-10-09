import { useState } from "react";
const quizDatabase = [
  {
    name: "que1",
    answer: "yes",
    question:
      "If a triangle has angles 125°, 25°, 30°. Is it an obtuse triangle?",
    options: ["yes", "no"],
  },
  {
    name: "que2",
    answer: "Right",
    question: "This type of triangle has one 90 degree angle.",
    options: ["Acute", "Right", "Obtuse"],
  },
  {
    name: "que3",
    answer: "Both",
    question:
      "If a triangle has 2 sides with equal lengths and 60 degree angle between them. What is the type of triangle?",
    options: ["Equilateral", "Isosceles", "Both"],
  },
  {
    name: "que4",
    answer: "Scalene",
    question:
      "If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?",
    options: ["Equilateral", "Isosceles", "Scalene"],
  },
  {
    name: "que5",
    answer: "90°",
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    options: ["40°", "60°", "90°"],
  },
  {
    name: "que6",
    answer: "one right angle",
    question: "A triangle can have",
    options: ["two right angle", "one right angle"],
  },
  {
    name: "que7",
    answer: "a + b + c",
    question: "The perimeter of scalene triangle with sides a, b, c is",
    options: ["a + b + c", "2a", "None of these"],
  },
  {
    name: "que8",
    answer: "Acute",
    question:
      "Which triangle is one where all 3 angles measure less than 90 degrees.",
    options: ["Acute", "Right", "Obtuse"],
  },
  {
    name: "que9",
    answer: "Equilateral",
    question: "A triangle where all sides are congruent is called",
    options: ["Scalene", "Isosceles", "Equilateral"],
  },
  {
    name: "que10",
    answer: "2 congruent sides",
    question: "An isosceles triangle has",
    options: ["No congruent sides", "2 congruent sides", "3 congruent sides"],
  },
];

const initialAnswers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

const Quiz = () => {
  const [answers, setAnswers] = useState({ ...initialAnswers });
  const [output, setOutput] = useState("");
  const handleAnswerSubmit = () => {
    let score = 0;
    quizDatabase.forEach((obj, index) => {
      if (obj.answer === answers[index]) {
        score += 1;
      }
    });
    setOutput(`The score is ${score}`);
  };
  return (
    <main className="quiz-main">
      <h1>Quiz on triangles</h1>
      <h3>For each correct answer you will get 1 point</h3>
      {quizDatabase.map((obj, index) => (
        <div className="question-container" key={index}>
          <p>{`${index + 1}. ${obj.question}`}</p>
          <div
            onChange={(e) => {
              setOutput("");
              setAnswers({
                ...answers,
                [index]: e.target.value,
              });
            }}
            className="answer-container"
          >
            Options:
            {obj.options.map((option, ind) => (
              <label key={ind} style={{ paddingRight: "20px" }}>
                <input
                  type="radio"
                  name={obj.name}
                  value={option}
                  defaultChecked={answers[index] === option}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        className="submit_answer"
        onClick={() => {
          handleAnswerSubmit();
        }}
      >
        Submit Answers
      </button>
      <h2 className="output">{output}</h2>
    </main>
  );
};
export default Quiz;
