import React from 'react';
import {
  GrLinkedinOption,
  GrTwitter,
  GrFacebook,
  GrInstagram,
  GrMail,
  GrLink,
  GrWaypoint,
} from 'react-icons/gr';
import { Tooltip } from '@chakra-ui/react';

type ShareCardType = {
  classes?: string;
};

const ShareCard: React.FunctionComponent<ShareCardType> = ({ classes }) => {
  return (
    <div className={`${classes} mt-4 border p-2 `}>
      <p className="text-center mb-2 font-semibold">Share this job</p>
      <div className="flex justify-around">
        <Tooltip label="Linkedin">
          <div className="bg-red-200 p-2 text-black rounded-full">
            <GrLinkedinOption
              className="cursor-pointer"
              onClick={() =>
                window.open('https://twitter.com/nikk_xyz', '__blank')
              }
            />
          </div>
        </Tooltip>
        <Tooltip label="Twitter">
          <div className="bg-red-200 p-2 text-black rounded-full">
            <GrTwitter
              className="cursor-pointer"
              onClick={() =>
                window.open('https://twitter.com/nikk_xyz', '__blank')
              }
            />
          </div>
        </Tooltip>

        <Tooltip label="Email">
          <div className="bg-red-200 p-2 text-black rounded-full">
            <GrMail
              className="cursor-pointer"
              onClick={() =>
                window.open('https://twitter.com/nikk_xyz', '__blank')
              }
            />
          </div>
        </Tooltip>
        <Tooltip label="Link">
          <div className="bg-red-200 p-2 text-black rounded-full">
            <GrLink
              className="cursor-pointer"
              onClick={() =>
                window.open('https://twitter.com/nikk_xyz', '__blank')
              }
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default ShareCard;
