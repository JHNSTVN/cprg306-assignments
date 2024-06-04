import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href="/week-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Week-2 Page 2</button>
        </Link>
      </div>
      <div>
        <Link href="/week-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Week-3 Shopping list</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;




