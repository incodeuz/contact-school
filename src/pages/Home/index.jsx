import React from 'react';
import Advantage from '../../components/Advantage/Advantage.jsx';
import Connection from '../../components/Connection/index.jsx';
import Owner from '../../components/Owner/Owner.jsx';
import Question from '../../components/Question/index.jsx';

export const Home = () => {
  return (
    <div>
      <Advantage />
      <Owner />
      <Question />
      <Connection />
    </div>
  );
};

export default Home;
