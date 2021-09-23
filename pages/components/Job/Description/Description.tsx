import React from 'react';
import { Tag } from '../Tag/Tag';

type DescriptionType = {
  title: string;
  tags?: Array<{ title: string; tagId: string }>;
  description: string;
};

const Description: React.FunctionComponent<DescriptionType> = ({
  title,
  tags,
  description,
}) => {
  return (
    <div className="mt-4 p-4">
      <p className="font-bold mb-2 text-xl">{title}</p>
      {tags && <Tag tags={tags} />}
      <div
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default Description;
