import React from 'react';
import Advantage from '../../components/Advantage/Advantage.jsx';
import Connection from '../../components/Connection/index.jsx';
import Opener from '../../components/Opener/Opener.jsx';
import Owner from '../../components/Owner/Owner.jsx';
import Question from '../../components/Question/index.jsx';
import Students from '../../components/Students/Students.jsx';

export const Home = () => {
  return (
    <div>
      <Opener />
      <Advantage />
      <Students />
      <Owner />
      <Question />
      <Connection />
    </div>
  );
};

export default Home;
