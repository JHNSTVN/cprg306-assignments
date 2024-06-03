import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <button>Page 2</button>
      </Link>
    </div>
  );
};

export default Home;


