import React from 'react'
import TalentsHeader from './talentsComponents/TalentsHeader';
import TalentsFilter from './talentsComponents/TalentsFilter';
import TalentsList from './talentsComponents/TalentsList';

const Talents = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div>
      <div className="talents-container">
        <TalentsHeader />
        <TalentsFilter />
        <TalentsList />
      </div>
    </div>
  );
}

export default Talents
