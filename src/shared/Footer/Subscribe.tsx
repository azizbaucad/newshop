import React from 'react';

import { newsletter } from '@/data/content';


const Subscribe = () => {
  return (
    <div className="items-stretch justify-between space-y-5 rounded-2xl p-0 md:flex md:space-y-0">
      <div className="basis-[52%] space-y-5">
        <h3 className="text-2xl font-medium">{newsletter.heading}</h3>
      </div>
    </div>
  );
};

export default Subscribe;
