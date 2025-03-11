import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ProductCard = ({ product, edit }) => {
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
      className="w-[250px] bg-gray-100 relative"
    >
      <Slider {...settings}>
        {product?.images?.map((image, index) => (
          <img key={index} src={image.url} alt="" />
        ))}
      </Slider>
      <div className="text-xl px-3">{product?.name}</div>
      <div className="text-2xl px-3">{product?.price} $</div>
      {edit && (
        <div className="absolute top-1 right-1 flex items-center gap-2">
          <AiFillEdit size={20} />
          <AiFillDelete size={20} />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
