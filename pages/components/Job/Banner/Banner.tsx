import React from 'react';
type BannerType = {
  classes?: string;
};
const Banner: React.FunctionComponent<BannerType> = ({ classes }) => {
  return (
    <div
      className={`${classes} bg-red-300 text-black text-base font-medium text-center p-2 `}
    >
      <p>
        Hiring powered by{' '}
        <a
          href="https://google.com"
          className="underline text-white font-semibold"
        >
          Recurit
        </a>
      </p>
    </div>
  );
};

export default Banner;
