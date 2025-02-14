import React from "react";
import features from "./features";
import FeatureItem from "./FeatureItem";

const FeatureList = () => {
  return (
    <ul className='grid grid-cols-2 gap-16'>
      {features.map((featureItem, index) => (
        <FeatureItem key={index} item={featureItem} />
      ))}
    </ul>
  );
};

export default FeatureList;
