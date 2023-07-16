import ProductCard from '@/components/BookCard';
import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useGetBooksQuery } from '@/redux/features/books/booksApi';
import { IBooks } from '@/types/globalTypes';
import { useState } from 'react';

export default function Books() {
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT_PER_PAGE = 6;
  const { data, isLoading, isError } = useGetBooksQuery({
    page: currentPage,
    limit: LIMIT_PER_PAGE,
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

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

  if (!isLoading && !isError && data?.data?.length <= 0) {
    return (
      <div>
        <Error error="No books were found!" />
      </div>
    );
  }

  const totalPages = Math.ceil(data?.meta?.count / LIMIT_PER_PAGE); // Assuming 10 books per page

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative py-6 pt-4">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div className="flex items-center space-x-2 mt-3">
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider defaultValue={[150]} max={150} min={0} step={1} />
          </div>
          <div>From 0$ To $</div>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10">
        {data?.data?.map((book: IBooks) => (
          <ProductCard book={book} />
        ))}
      </div>
      {/* Pagination */}
      <div className="col-span-12 flex justify-center mt-5">
        {currentPage > 1 && (
          <button
            onClick={handlePrevPage}
            className="px-4 py-2 border rounded-md mr-2"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={handleNextPage}
            className="px-4 py-2 border rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
