import React from "react";
import FeatureList from "./FeatureList";
import QuestionList from "./QuestionList";

const Feature = () => {
  return (
    <div className='py-44'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-16'>
        <div>
          <p className='text-4xl md:text-start font-serif mb-16 text-[#274b60]'>
            Features & Facility
          </p>
          <FeatureList />
        </div>
        <div>
          <p className='text-4xl font-serif mb-16 text-[#274b60]'>Question</p>
          <QuestionList />
        </div>
      </div>
    </div>
  );
};

export default Feature;
