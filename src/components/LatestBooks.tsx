import { useGetBooksQuery } from '@/redux/features/books/booksApi';
import Loading from './ui/Loading';
import Error from './ui/Error';
import BookCard from './BookCard';
import { IBooks } from '@/types/globalTypes';

const LatestBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);

  if (isLoading && !data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!isLoading && isError) {
    return (
      <div>
        <Error error="Error fetching books" />
      </div>
    );
  }

  if (!isLoading && !isError && data?.data?.length <= 0) {
    return (
      <div>
        <Error error="No books were found!" />
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-rows-1 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-4 gap-7 pb-20">
          {data?.data?.map((book: IBooks) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestBooks;
