import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading
        ? "Loading..."
        : products?.products && (
            <div className="">
              {products?.products?.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          )}
    </>
  );
};

export default Home;
