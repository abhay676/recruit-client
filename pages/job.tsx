import type { NextPage } from 'next';
import Head from 'next/head';
import { GrWaypoint } from 'react-icons/gr';
import { Button } from '@chakra-ui/react';
import Description from './components/Job/Description/Description';
import job from '../json/jobInfo.json';
import company from '../json/companyInfo.json';
import Company from './components/Job/Company/Company';
import Banner from './components/Job/Banner/Banner';
import Sidebar from './components/Job/Sidebar/Sidebar';
import ApplyCard from './components/Job/ApplyCard/ApplyCard';
import ShareCard from './components/Job/ShareCard/ShareCard';

const Job: NextPage = () => {
  return (
    <div className="h-full">
      <Head>
        <title>Company Name</title>
      </Head>
      <div className="lg:hidden">
        <div>
          <div className="flex justify-between fixed w-full top-0 bg-red-200 items-center lg:hidden">
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
          <div className="flex justify-between mt-14 lg:hidden">
            <div className="ml-2 inline-flex">
              <p className="text-gray-600 mx-2 font-semibold">Job Id:</p> 123XYZ
            </div>
          </div>
          <ShareCard classes="lg:hidden mx-4" />
        </div>
        {job.job &&
          job.job.map((j, i) => (
            <Description
              classes="lg:hidden"
              title={j.title}
              tags={j.tags}
              description={j.description}
              key={i}
            />
          ))}
        <div>
          <Company
            classes="lg:hidden"
            name="Teamzo"
            description="<p>SalesHandy is a sales engagement platform that enables sales teams to scale their email outreach operations seamlessly.</p><p>Campaigns on SalesHandy are the easiest way to schedule and send hundreds (or thousands) of multi-stage automated follow-up emails to your leads at once. You can personalize your email campaign using merge tags, and have automated follow-ups sent based on engagement (open or clicks) on the last email. You can schedule these emails to go out in your recipient’s time zone too, so your emails don’t get buried in their inbox. </p><p>Complete with add-ons like email verification and real-time notifications on email opens and clicks, along with customizable tracking links, it’s the most robust platform for sending out bulk sales emails. Two-key template shortcuts, along with team-wide template sharing and analytics help improve productivity and track results.</p><p>SalesHandy has one-click integrations with Outlook and Gmail, along with SMTP connections to all other email services. You can also automate your sales operations by connecting SalesHandy with Zapier via a webhook and integrate with 3000+ apps and services, including Hubspot, Salesforce, Slack, etc.</p><p>With over 200,000 users from companies like Amazon, Uber, Verizon, Conde Nast, Dell, Lacoste, Walmart and more — SalesHandy makes for the most trusted solution for your sales productivity and growth. </p><p>- Have a question? Shoot an email at hello@saleshandy.com</p>"
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
        <Banner classes="lg:hidden w-full" />
      </div>
      {/* ---------------------- Desktop ------------------ */}
      <div>
        <div
          className="lg:fixed lg:flex lg:flex-row lg:justify-around lg:mt-7 
        lg:top-0 hidden"
        >
          <h3
            className="lg:font-bold lg:text-2xl lg:p-2 
          lg:ml-6"
          >
            Teamzo
          </h3>
          {/* <p className="text-gray-600 font-semibold">Job Id: 123XYZ</p> */}
        </div>
        <div className="lg:grid lg:grid-flow-col hidden  lg:overflow-auto justify-items-center">
          <Sidebar classes="lg:fixed lg:top-1/4 lg:col-span-3 left-0 lg:ml-4" />
          <div className="col-span-2 mt-14 mr-72 ml-40 xl:mr-96 xl:ml-72">
            {job.job &&
              job.job.map((j, i) => (
                <Description
                  classes="ml-2"
                  title={j.title}
                  tags={j.tags}
                  description={j.description}
                  key={i}
                  id={j.id}
                />
              ))}
            {company.company &&
              company.company.map((j, i) => (
                <Description
                  classes="ml-2"
                  title={j.title}
                  description={j.description}
                  key={i}
                  id={j.id}
                />
              ))}
          </div>
          <div className="lg:fixed lg:items-center lg:top-1/4 lg:grid-col-4 lg:right-0 lg:mr-4 lg:flex lg:flex-col lg:justify-items-center lg:mt-10 xl:mr- hidden">
            <ApplyCard />
            <ShareCard classes="p-2 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
