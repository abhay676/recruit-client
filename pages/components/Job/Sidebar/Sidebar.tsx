import React from 'react';
import Banner from '../Banner/Banner';

const jobOption = [
  {
    name: 'Intro',
    id: '#intro',
    index: 1,
  },
  {
    name: 'Job Overview',
    id: '#job_overview',
    index: 2,
  },
  {
    name: 'Responsibilities',
    id: '#responsibilities',
    index: 3,
  },
  {
    name: 'Requirements',
    id: '#requirements',
    index: 4,
  },
  {
    name: 'Company',
    id: '#company',
    index: 11,
  },
  {
    name: 'Benefits',
    id: '#benefits',
    index: 22,
  },
  {
    name: 'Culture & Values',
    id: '#culture_values',
    index: 33,
  },
];

type SideBarType = {
  classes?: string;
};

const Sidebar: React.FunctionComponent<SideBarType> = ({ classes }) => {
  const handleScroll = (id: string) => {
    document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={`${classes} hidden lg:block lg:h-screen `}>
      {jobOption &&
        jobOption.map((option) => (
          <a
            key={option.index}
            className="text-center text-black font-semibold p-4 block hover:bg-red-200 hover:text-black rounded-full "
            href={option.id}
            onClick={() => handleScroll(option.id)}
          >
            {option.name}
          </a>
        ))}
      {/* Need to fixed it */}
      {/* <Banner classes="fixed bottom-0 " /> */}
    </div>
  );
};

export default Sidebar;
