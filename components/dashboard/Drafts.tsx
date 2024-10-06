import React from 'react'
import DraftsHeader from './draftsComponent/DraftsHeader';
import DraftsFilterBar from './draftsComponent/DraftsFilterBar';
import DraftsTable from './draftsComponent/DraftsTable';


const Drafts = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="h-screen bg-white">
      <DraftsHeader />
      <DraftsFilterBar />
      <DraftsTable />
    </div>
  );
}

export default Drafts
