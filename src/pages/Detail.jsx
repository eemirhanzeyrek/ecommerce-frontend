import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productSlice";
import Slider from "react-slick";
import { BsFillStarFill } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.products);

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
            <div>
              <div className="text-3xl">{product?.product?.name}</div>
              <div className="text-xl">{product?.product?.description}</div>
              {product?.product?.stock > 0 ? (
                <div className="text-xl text-green-500">
                  stock quantity : {product?.product?.stock}
                </div>
              ) : (
                <div>product is out of stock</div>
              )}
              <div className="text-xl">
                category : {product?.product?.category}
              </div>
              <div className="text-xl flex items-center gap-3">
                rating : {product?.product?.rating}
                <BsFillStarFill />{" "}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl cursor-pointer">-</div>
                <div className="text-2xl">1</div>
                <div className="text-3xl cursor-pointer">+</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
