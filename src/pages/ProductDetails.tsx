import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { IBooks } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  //! Temporary code, should be replaced with redux
  const [data, setData] = useState<IBooks[]>([]);
  useEffect(() => {
    fetch('https://books-catalog-server.vercel.app/api/v1/books')
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const book = data?.find((item) => item._id === Number(id));

  //! Temporary code ends here

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
      <ProductReview />
    </>
  );
}
