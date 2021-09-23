import type { NextPage } from 'next';
import Head from 'next/head';
import {
  GrLinkedin,
  GrTwitter,
  GrFacebook,
  GrInstagram,
  GrMail,
  GrLink,
} from 'react-icons/gr';
import { Button, Tooltip } from '@chakra-ui/react';

const job = [
  {
    title: 'Product Designer',
    tags: ['Engineering', 'Full-time', 'India/Remote'],
    description:
      'Esse enim exercitation eiusmod labore consectetur amet est excepteur aliquip deserunt. Et excepteur eu minim ullamco sint. Officia elit elit ut elit deserunt consectetur quis est sint sunt ipsum qui eiusmod nisi.',
  },
  {
    title: 'Job Overview',
    description:
      'Tempor commodo sint non non dolor esse eiusmod non irure dolor labore exercitation consectetur. Et voluptate exercitation nulla sit. Dolor nostrud nostrud reprehenderit aute aute aliqua eiusmod fugiat sint deserunt laboris aliquip ipsum excepteur. Occaecat adipisicing voluptate officia officia magna et ut officia tempor. Laboris proident velit nostrud ut culpa deserunt consectetur in. Anim esse nulla magna aute amet ut culpa eiusmod eu proident duis ex.',
  },
  {
    title: 'Responsibility',
    description:
      'Anim aliquip proident ex ut incididunt cupidatat laborum est dolor. Fugiat consectetur sunt do tempor ut. Do elit culpa irure ipsum ad eu qui anim voluptate ullamco. Consectetur est consequat ullamco aute minim veniam sint et nisi.',
  },
];

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
              <p className="text-gray-600 mx-2">Job Id:</p> 1998231
            </div>
          </div>
          <div className="mt-4 border p-2">
            <p className="text-center mb-2 font-semibold">Share this job</p>
            <div className="flex justify-evenly ">
              <Tooltip label="Linkedin">
                <div className="bg-red-200 p-2 text-black rounded-full">
                  <GrLinkedin
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
              <div className="bg-red-200 p-2 text-black rounded-full">
                <GrInstagram
                  className="cursor-pointer"
                  onClick={() =>
                    window.open('https://twitter.com/nikk_xyz', '__blank')
                  }
                />
              </div>
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
        {job &&
          job.map((j, i) => (
            <div className="mt-4 p-2" key={i}>
              <p className="font-bold mb-2 text-xl">{j.title}</p>
              <div className="flex flex-row justify-around mb-1">
                {j.tags &&
                  j.tags.map((t, ii) => (
                    <p
                      key={ii}
                      className="bg-red-100 text-black p-2 rounded text-sm font-semibold"
                    >
                      {t}
                    </p>
                  ))}
              </div>
              <div>{j.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Job;
