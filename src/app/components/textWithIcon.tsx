import React from 'react';

interface FeatureProps {

  text: string;
  color: string;
}

const FeatureItem: React.FC<FeatureProps> = ({ text, color }) => (
  <li className="flex items-center space-x-2">
 <div className="w-1 h-1 bg-black rounded-full"></div>

    <span className='text-xs font-thin text-gray-600'>{text}</span>
  </li>
);

interface TextWithIconsProps {
  features: {  text: string; color: string }[];
}

const TextWithIcons: React.FC<TextWithIconsProps> = ({ features }) => {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
         
          text={feature.text}
          color={feature.color}
        />
      ))}
    </ul>
  );
};

export default TextWithIcons;
