import BookReview from '@/components/BookReview';
import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import { Button } from '@/components/ui/button';
import { useGetBookQuery } from '@/redux/features/books/booksApi';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { _id } = useParams();

  const { data, isLoading, isError } = useGetBookQuery(_id);

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
        <Error error="Error fetching book" />
      </div>
    );
  }

  return (
    <>
      <div className="flex max-w-5xl mx-auto items-center justify-center border rounded-md border-gray-300 mt-20 mb-6 p-5">
        <div className="w-[40%]">
          <img src={data?.data?.thumbnail} alt="" className="h-[350px] rounded-md mx-auto" />
        </div>
        <div className="w-[50%] space-y-5">
          <h1 className="text-3xl font-semibold">{data?.data?.title}</h1>
          <p className="text-sm">
            Author: <span className="text-gray-500">{data?.data?.author}</span>
          </p>
          <p className="text-sm">
            Genre:{' '}
            <span className="text-sm font-semibold text-red-600">
              {data?.data?.genre}
            </span>
          </p>
          <p className="text-sm">
            Published:{' '}
            <span className="text-gray-500">
              {data?.data?.published instanceof Date
                ? data?.data?.published.toLocaleDateString()
                : new Date(data?.data?.published).toLocaleDateString()}
            </span>
          </p>
          <p className="text-md">Rating: {data?.data?.rating}</p>
          <Button>Add to wishlist</Button>
        </div>
      </div>
      <BookReview />
    </>
  );
}
