import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center p-5 my-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="w-64">
        <Link href="/week-2">
          <button className="w-full h-12 bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">week-2</button>
        </Link>
      </div>
      <div className="w-64">
        <Link href="/week-3">
          <button className="w-full h-12 bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">week-3</button>
        </Link>
      </div>
      <div className="w-64">
        <Link href="/week-4">
          <button className="w-full h-12 bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">week-4</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;





