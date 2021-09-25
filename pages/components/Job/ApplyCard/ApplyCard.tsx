import React from 'react';
import { Button } from '@chakra-ui/react';

const ApplyCard = () => {
  return (
    <div className="lg:border-2 lg:p-4 ">
      <p className="font-medium">Sounds like a match?</p>
      <div className="flex justify-between flex-col mt-2 ">
        <Button onClick={() => alert('Applied successfully')}>Apply</Button>
        <Button
          className="mt-4"
          onClick={() => alert('Subscribe successfully')}
        >
          Subscribe for updates
        </Button>
      </div>
    </div>
  );
};

export default ApplyCard;
