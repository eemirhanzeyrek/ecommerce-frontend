import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      onClick={() => navigate(`/product/${product?._id}`)}
      className="w-[250px] bg-gray-100"
    >
      <Slider {...settings}>
        {product?.images?.map((image, index) => (
          <img key={index} src={image.url} alt="" />
        ))}
      </Slider>
      <div className="text-xl px-3">{product?.name}</div>
      <div className="text-2xl px-3">{product?.price} $</div>
    </div>
  );
};

export default ProductCard;
