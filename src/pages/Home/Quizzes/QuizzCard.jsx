import { useState, useEffect, useRef } from "react";

const QuizzCard = ({ idx, quiz, onAnswer }) => {
  const { questionText, options, correctOption } = quiz;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const prevAnswerIsCorrect = useRef(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (selectedOption !== null) {
      const answerIsCorrect = selectedOption === correctOption;
      setIsCorrect(answerIsCorrect);

      if (
        answerIsCorrect !== null &&
        answerIsCorrect !== prevAnswerIsCorrect.current
      ) {
        prevAnswerIsCorrect.current = answerIsCorrect;
        onAnswer(answerIsCorrect);
      }
    }
  }, [selectedOption, correctOption, onAnswer]);

  return (
    <div>
      <h3>
        {idx + 1}. {questionText}
      </h3>
      <div>
        {options.map((o, index) => (
          <div
            key={index}
            className={`flex items-center m-3 p-2 ${
              selectedOption === o
                ? isCorrect
                  ? "bg-green-200"
                  : "bg-red-200"
                : ""
            }`}
          >
            <input
              type="radio"
              value={o}
              name="option"
              checked={selectedOption === o}
              onChange={handleOptionChange}
              className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
              disabled={selectedOption !== null}
            />
            <p className="ml-2 text-sm font-medium text-gray-900">{o}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizzCard;
