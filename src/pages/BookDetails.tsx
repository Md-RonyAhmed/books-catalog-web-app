import BookReview from '@/components/BookReview';
import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import { Button } from '@/components/ui/button';
import { useGetBookQuery } from '@/redux/features/books/booksApi';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  const { data: book, isLoading, isError } = useGetBookQuery(id);

  if (isLoading && !book) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!isLoading && isError) {
    return (
      <div>
        <Error error="Error fetching book" />
      </div>
    );
  }

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.thumbnail} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Rating: {book?.rating}</p>
          <p className="text-sm">
            Genre:{' '}
            <span className="text-sm font-semibold text-red-600">
              {book?.genre}
            </span>
          </p>
          <Button>Add to wishlist</Button>
        </div>
      </div>
      <BookReview />
    </>
  );
}
