import ShareholderTable from '../components/Shareholder_table';

const shareholders = [
  { id: 1,No:'1', name: 'John Smith', numberOfShares: 100, percentageOfOwnership: '25%', dividend: '$500' },
  { id: 2,No:'2', name: 'Jane Doe', numberOfShares: 50, percentageOfOwnership: '12.5%', dividend: '$250' },
  { id: 3,No:'3', name: 'Tom Johnson', numberOfShares: 150, percentageOfOwnership: '37.5%', dividend: '$750' },
  { id: 4,No:'4', name: 'Ami Lee', numberOfShares: 100, percentageOfOwnership: '25%', dividend: '$500' },
  { id: 5,No:'5', name: 'John Smith', numberOfShares: 100, percentageOfOwnership: '25%', dividend: '$500' },
  { id: 6,No:'6', name: 'Jane Doe', numberOfShares: 50, percentageOfOwnership: '12.5%', dividend: '$250' },
  { id: 7,No:'7', name: 'Tom Johnson', numberOfShares: 150, percentageOfOwnership: '37.5%', dividend: '$750' },
  { id: 8,No:'8', name: 'Sarah Lee', numberOfShares: 100, percentageOfOwnership: '25%', dividend: '$500' }
];

const Home = () => {
  return (
    <>
    <div className='min-w-full border p-4 bg-slate-100'>

    
    <div className="container mx-auto py-2">
      <h1 className="text-2xl font-bold mb-4 text-center">Shareholder List</h1>
      <ShareholderTable shareholders={shareholders}
       />
    </div>
   
    </div>
    <div className=''>
       <footer className='min-w-full h-16 mt-7 mb-2 p-4 border border-gray-700 sm:mt-14 fixed flex'>
     <div>
     <p>Copyright @ Warkaw Aksion 2023</p>
     </div>
      <div className='sm:ml-96'>
      <p className='sm:ml-56'>All rights reserved</p>
      </div>
    </footer>
    </div>
    </>
  );
};

export default Home;