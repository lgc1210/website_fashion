import React from "react";
import QuestionItem from "./QuestionItem";
import questions from "./questions";

const QuestionList = () => {
  return (
    <ul>
      {questions.map((questionItem, index) => (
        <QuestionItem key={index} item={questionItem} />
      ))}
    </ul>
  );
};

export default QuestionList;
