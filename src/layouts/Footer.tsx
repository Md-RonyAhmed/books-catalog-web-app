import logo from '@/assets/images/logo.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-gray-800 text-secondary p-20">
      <div className="flex justify-between">
        <div className="flex gap-3 justify-center items-center">
          <img className="h-8" src={logo} alt="log" />
          <h1 className="text-3xl font-semibold text-yellow-400">
            Lite<span className="text-red-500">rati</span>
          </h1>
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Read More</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Wish List</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; Literati {year}</p>
      </div>
    </div>
  );
}
