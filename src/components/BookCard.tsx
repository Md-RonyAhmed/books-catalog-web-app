import { IBooks } from '@/types/globalTypes';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface IProps {
  book: IBooks;
}

export default function BookCard({ book }: IProps) {
  // const dispatch = useAppDispatch();
  // const handleAddbook = (book: Ibook) => {
  //   dispatch(addToCart(book));
  //   toast({
  //     description: `book added successfully!`,
  //   });
  // };
  return (
    <>
      <div className="rounded-xl h-full flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:scale-[102%] transition-all gap-3">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img
            className="h-[280px] mx-auto w-full mb-2"
            src={book?.thumbnail}
            alt="book"
          />
          <h1 className="text-lg font-semibold">{book?.title}</h1>
        </Link>
        <p className="text-sm">
          Author: <span className="text-gray-500">{book?.author}</span>
        </p>
        <p className="text-sm">
          Genre:{' '}
          <span className="text-sm font-semibold text-red-600">
            {book?.genre}
          </span>
        </p>
        <p className="text-sm">
          Published:{' '}
          <span className="text-gray-500">
            {book?.published instanceof Date
              ? book?.published.toLocaleDateString()
              : new Date(book?.published).toLocaleDateString()}
          </span>
        </p>
        <p className="text-sm">Rating: {book?.rating}</p>
        <Button variant="default" className="w-full">
          Add to wishlist
        </Button>
      </div>
    </>
  );
}
