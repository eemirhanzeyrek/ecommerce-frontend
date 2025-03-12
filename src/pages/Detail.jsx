import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productSlice";
import Slider from "react-slick";
import { BsFillStarFill } from "react-icons/bs";
import Button from "../components/Button";
import { addToCard } from "../redux/cartSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const addCart = () => {
    const data = {
      id: product?.product?._id,
      name: product?.product?.name,
      image: product?.product?.images?.[0],
      price: product?.product?.price,
      quantity: quantity,
    };
    dispatch(addToCard(data));
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < product?.product?.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="">
          <div className="flex mt-4 justify-center gap-5">
            {product?.product && (
              <div className="w-[500px]">
                <Slider className="" {...settings}>
                  {product?.product?.images?.map((image, index) => (
                    <img key={index} src={image.url} alt="" />
                  ))}
                </Slider>
              </div>
            )}
            <div className="space-y-3">
              <div className="text-3xl">{product?.product?.name}</div>
              <div className="text-xl">{product?.product?.description}</div>
              {product?.product?.stock > 0 ? (
                <div className="text-xl text-green-500">
                  Stock quantity : {product?.product?.stock}
                </div>
              ) : (
                <div>Product is out of stock</div>
              )}
              <div className="text-xl">
                Category : {product?.product?.category}
              </div>
              <div className="text-xl flex items-center gap-3">
                Rating : {product?.product?.rating}
                <BsFillStarFill />{" "}
              </div>
              <div className="flex items-center gap-4">
                <div onClick={decrement} className="text-3xl cursor-pointer">
                  -
                </div>
                <div className="text-2xl">{quantity}</div>
                <div onClick={increment} className="text-3xl cursor-pointer">
                  +
                </div>
              </div>
              <Button text={"Add to cart"} onClick={addCart} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
