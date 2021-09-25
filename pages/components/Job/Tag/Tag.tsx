import React from 'react';

type TagType = {
  tags: Array<{ title: string; tagId: string }>;
};

const Tag: React.FunctionComponent<TagType> = ({ tags }) => {
  return (
    <div className="mt-4 flex flex-row justify-evenly mb-1">
      {tags &&
        tags.map((tag) => (
          <p
            key={tag.tagId}
            className="bg-red-100 text-black p-2 rounded text-sm font-semibold"
          >
            {tag.title}
          </p>
        ))}
    </div>
  );
};

export default Tag;
