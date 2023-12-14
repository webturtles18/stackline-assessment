import React, { useEffect } from "react";
import ProductDetails from "./ProductDetails";
import Saleschart from "./SalesChart";
import SalesTable from "./SalesTable";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchProduct } from "../services/products";
import ErrorCard from "./ErrorCard";

export default function Home() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.product.error);

  const params = useParams();

  useEffect(() => {
    const productId = params?.id || "B007TIE0GQ";
    dispatch(fetchProduct(productId));
  }, [dispatch, params]);

  return (
    <div className="md:pt-24 pt-20 w-full">
      {error ? (
        <ErrorCard message={error} />
      ) : (
        <>
          <div className="grid grid-cols-12 gap-6">
            <div className="md:col-span-3 col-span-12">
              <ProductDetails />
            </div>
            <div className="md:col-span-9 col-span-12">
              <div className="col-span-12 mb-4">
                <Saleschart />
              </div>
              <div className="col-span-12">
                <SalesTable />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
