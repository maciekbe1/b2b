import React, { useState } from "react";
import QuestionSafety from "./QuestionSafety";
import QuestionBridge from "./QuestionBridge";
import QuestionType from "./QuestionType";
import QuestionWhatIsPur from "./QuestionWhatIsPur";
const questions = [
  {
    title: "Co to jest piana natryskowa PUR?",
    component: <QuestionWhatIsPur />,
  },
  {
    title: "Jakie występują rodzaje pian PUR?",
    component: <QuestionType />,
  },
  { title: "Czym jest mostek termiczny?", component: <QuestionBridge /> },
  { title: "Czy piana PUR jest bezpieczna?", component: <QuestionSafety /> },
];

export default function Faq2() {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-wrap">
      <nav className="lg:w-2/12 mn:mb-6">
        <ul className="lg:h-full lg:border-r-2 border-navy mn:border-b-2">
          {questions.map((item, i) => (
            <li key={i} className={i > questions.length ? "mb-2" : "mn:mb-2"}>
              <button
                className={`${
                  index === i
                    ? "bg-navy text-white"
                    : "hover:underline hover:text-darkNavy"
                } px-3 py-2 text-sm font-medium mn:w-full focus:outline-none`}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-full lg:w-3/4 nm:w-full">
        <div className="px-4">{questions[index].component}</div>
      </main>
    </div>
  );
}
