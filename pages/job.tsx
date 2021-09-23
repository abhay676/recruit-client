import type { NextPage } from 'next';
import Head from 'next/head';
import {
  GrLinkedinOption,
  GrTwitter,
  GrFacebook,
  GrInstagram,
  GrMail,
  GrLink,
  GrWaypoint,
} from 'react-icons/gr';
import { Button, Tooltip } from '@chakra-ui/react';
import Description from './components/Job/Description/Description';
import job from '../json/jobInfo.json';
import Company from './components/Job/Company/Company';
import Banner from './components/Job/Banner/Banner';

const Job: NextPage = () => {
  return (
    <div className="h-full">
      <Head>
        <title>Company Name</title>
      </Head>
      <div>
        <div>
          <div className=" flex justify-between fixed w-full top-0 bg-red-300 items-center">
            <h3 className="font-bold text-2xl text-center p-2  text-white ">
              Teamzo
            </h3>
            <Button
              className="mr-2"
              colorScheme="gray"
              onClick={() => alert('Thanks for applying')}
            >
              Apply Now
            </Button>
          </div>
          <div className="flex justify-between mt-14">
            <div className="ml-2 inline-flex">
              <p className="text-gray-600 mx-2 font-semibold">Job Id:</p> 123XYZ
            </div>
          </div>
          <div className="mt-4 border p-2 mx-4">
            <p className="text-center mb-2 font-semibold">Share this job</p>
            <div className="flex justify-evenly ">
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
              <Tooltip label="Facebook">
                <div className="bg-red-200 p-2 text-black rounded-full">
                  <GrFacebook
                    className="cursor-pointer"
                    onClick={() =>
                      window.open('https://twitter.com/nikk_xyz', '__blank')
                    }
                  />
                </div>
              </Tooltip>
              <Tooltip label="Instagram">
                <div className="bg-red-200 p-2 text-black rounded-full">
                  <GrInstagram
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
        </div>
        {job.job &&
          job.job.map((j, i) => (
            <Description
              title={j.title}
              tags={j.tags}
              description={j.description}
              key={i}
            />
          ))}
        <div>
          <Company
            name="Teamzo"
            description="Tempor dolore qui anim commodo exercitation Lorem anim sit consectetur non irure. Velit eiusmod ut ipsum laborum est sunt consequat amet. Qui consequat laborum pariatur eiusmod aliqua magna magna proident magna. Proident nisi Lorem voluptate voluptate incididunt amet fugiat consequat nisi. Labore ad Lorem dolore occaecat sunt dolor in Lorem est."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAb23XtNcLB3QpIKVdxe22fj1_NmOXrfYuojNifeCzOgyi0APp9W_qOxgHQ_0RDMzAc8Y&usqp=CAU"
            links={[
              {
                name: 'Website',
                url: 'https://bit.ly/nikk_xyz',
                icon: <GrWaypoint />,
              },
            ]}
            headCount="10-20"
            location="India"
          />
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Job;
