import React from 'react';

import {  LineChart } from '../../components';

import { Header } from '../../components'

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <div className='w-full'>
        <div><LineChart /></div>
      </div>
    </div>
  );
}

export default Line 