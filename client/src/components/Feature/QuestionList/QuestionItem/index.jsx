import React, { useState } from "react";

const QuestionItem = ({ item }) => {
  const [showAnswer, setShowAnswer] = useState(null);

  return (
    <li>
      <div
        className='border-t py-10 cursor-pointer'
        onClick={() => setShowAnswer(!showAnswer)}>
        <div className='flex items-center justify-between'>
          <p className='text-lg'>{item?.question}</p>
          <p className='uppercase'>View</p>
        </div>
        {showAnswer && <p className='mt-4 text-sm'>{item?.answer}</p>}
      </div>
    </li>
  );
};

export default QuestionItem;
