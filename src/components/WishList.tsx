/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import {
  HiMinus,
  HiOutlineHeart,
  HiOutlinePlus,
  HiOutlineTrash,
} from 'react-icons/hi';
import { Button } from './ui/button';
import { IBooks } from '@/types/globalTypes';

export default function WishList() {
  //! Dummy data

  const books: IBooks[] = [];
  const total = 0;

  //! **

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <HiOutlineHeart size="25" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto relative">
        <SheetHeader>
          <SheetTitle>Wishlist</SheetTitle>
          <h1>Total: {total}</h1>
        </SheetHeader>
        <div className="space-y-5">
          {books.map((book) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={book?.title}
            >
              <div className="border-r pr-5 shrink-0">
                <img src={book?.thumbnail} alt="" className="h-full" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{book?.title}</h1>
                <p>Author: {book?.author}</p>
                <p className="text-sm">
                  Genre:{' '}
                  <span className="text-sm font-semibold text-red-600">
                    {book?.genre}
                  </span>
                </p>
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button>
                  <HiOutlinePlus size="20" />
                </Button>
                <Button>
                  <HiMinus size="20" />
                </Button>
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                >
                  <HiOutlineTrash size="20" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
