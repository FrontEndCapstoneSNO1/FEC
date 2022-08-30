/* eslint-disable react/function-component-definition */
import React from 'react';

const QuestionsListEntry = ({ question }) => {
  const arrayOfAnswers = Object.entries(question.answers).map((answers) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    ({ [answers[0]]: answers[1] }));

  return (
    <div id="qaEntry">
      <div id="question">
        Q: {question.question_body}
      </div>
      {arrayOfAnswers?.map((answer) => {
        for (let i in answer) {
          return (
            <div id="answer">
              A: {answer[i].body}
            </div>
          )
        }
      })}
    </div>
  );
};

export default QuestionsListEntry;