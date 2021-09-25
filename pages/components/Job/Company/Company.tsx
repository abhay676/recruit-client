import React from 'react';
import { GrFormLocation, GrGroup } from 'react-icons/gr';
import Image from 'next/image';
type Link = {
  name: string;
  url: string;
  icon?: React.ReactNode;
};
type CompanyType = {
  image?: string;
  name: string;
  description: string;
  links: Array<Link>;
  location?: string;
  headCount: string;
  classes?: string;
};
const Company: React.FunctionComponent<CompanyType> = ({
  image,
  name,
  description,
  links,
  location,
  headCount,
  classes,
}) => {
  return (
    <div className={`${classes} p-4 mt-2`}>
      <p className="font-bold mb-4 text-xl">About Company</p>
      {image && (
        <div className="text-center">
          <Image src={image} alt={name} width={500} height={500} />
        </div>
      )}
      <div>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div className="flex justify-evenly mt-4">
          {links &&
            links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="__blank__"
                className="bg-red-200 p-1 rounded underline font-semibold inline-flex items-center"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          {headCount && (
            <p className="bg-red-200 p-1 rounded  font-semibold inline-flex items-center">
              <GrGroup />
              {headCount}
            </p>
          )}
          {location && (
            <p className="bg-red-200 p-1 rounded  font-semibold inline-flex items-center ">
              <GrFormLocation />
              {location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Company;
