import { Button } from '@/components/ui/button';
import banner from '@/assets/images/bookBannerImage.png';
import hero from '@/assets/images/hero.jpg';
import { Link } from 'react-router-dom';
import LatestBooks from '@/components/LatestBooks';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-5xl font-black text-primary mb-4">
            Literati Library: <br /> Immerse Yourself in the <br /> Reading World
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Explore our wide selection of books and find your next favorite
            read.
          </p>
          <div className="text-primary mt-14">
            <p>
              Discover a world of literary treasures with Literati, the ultimate
              books catalog web app
            </p>
            <p>
              Immerse yourself in a vast collection of books, from timeless
              <br /> classics to contemporary masterpieces.
            </p>
          </div>
          <Button className="mt-5" asChild>
            <Link to="/books">Explore books</Link>
          </Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mx-auto">
        <h1 className="text-4xl p-28 py-10 font-semibold">Latest Books</h1>
        <LatestBooks />
      </div>
      <div className="mb-52 mt-10">
        <div className="h-1/2 w-1/2 rounded-full mx-auto">
          <img className="mx-auto rounded-full" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-14">
            The future will be created by reading books
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/books">Brows all books</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
