import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold p-5">Johan Nunez</h1>
      <Link className="w-64 h-12 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded text-center" href="https://github.com/JHNSTVN/cprg306-assignments">MY GITHUB</Link>
    </div>
  );
};

export default StudentInfo;

