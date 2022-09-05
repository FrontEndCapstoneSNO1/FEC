/* eslint-disable react/function-component-definition */
import React from 'react';
import { useEffect, useState } from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ question }) => {
  const [count, setCount] = useState(2);

  const arrayOfAnswers = Object.entries(question.answers).map((answers) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    ({ [answers[0]]: answers[1] }));

  const accordian = (e) => {
    if (e.target.innerHTML === 'LOAD MORE ANSWERS') {
      e.target.innerHTML = 'COLLAPSE ANSWERS';
    } else {
      e.target.innerHTML = 'LOAD MORE ANSWERS';
    }

    if (count > 2) {
      setCount(2);
    } else {
      setCount(arrayOfAnswers.length);
    }
  };

  return (
    <div id="answer-container">
      <div id="A">
        A:
      </div>
      {arrayOfAnswers?.slice(0, count).map((answer) => {
        for (let i in answer) {
          return <AnswerListEntry key={i} answer={answer[i]} />
        }
      })}
      {arrayOfAnswers.length > 2 ?
        <div>
          <button id="more-answers" type="button" onClick={(e) => accordian(e)}>
            LOAD MORE ANSWERS
          </button>
        </div>
      :null
      }
    </div>
  );
};

export default AnswerList;