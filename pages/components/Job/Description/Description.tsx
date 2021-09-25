import React from 'react';
import Tag from '../Tag/Tag';

type DescriptionType = {
  title: string;
  tags?: Array<{ title: string; tagId: string }>;
  description: string;
  classes?: string;
  id?: string;
};

const Description: React.FunctionComponent<DescriptionType> = ({
  title,
  tags,
  description,
  classes,
  id,
}) => {
  return (
    <div className={`${classes} mt-4 p-4`} id={id}>
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
