/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from '@/components/BookCard';
import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
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

  // Function to get unique genres from the book data
  const getUniqueGenres = (data: any) => {
    const genres = new Set();
    data?.forEach((book: IBooks) => {
      genres.add(book.genre);
    });
    return Array.from(genres);
  };

  // Function to get unique publication years from the book data
  const getUniquePublicationYears = (data: any) => {
    const years = new Set();
    data?.forEach((book: IBooks) => {
      const year = new Date(book.published).getFullYear();
      years.add(year);
    });
    return Array.from(years);
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
  // Get unique genres and publication years from the book data
  const uniqueGenres = getUniqueGenres(data?.data || []) as string[];
  const uniquePublicationYears = getUniquePublicationYears(
    data?.data || []
  ) as number[];

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative py-6 pt-4">
      <div className="col-span-3 mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Genre</h1>
          <select className="w-full mt-3 border rounded-md p-2">
            <option value="">All Genres</option>
            {uniqueGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        {/* Publication Year Select */}
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Publication Year</h1>
          <select className="w-full mt-3 border rounded-md p-2">
            <option value="">All Years</option>
            {uniquePublicationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
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
