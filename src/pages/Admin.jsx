import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdminProducts, getAdminProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { openModalFunc } from "../redux/generalSlice";
import Modal from "../components/Modal";
import Input from "../components/Input";

const Admin = () => {
  const dispatch = useDispatch();
  const { adminProducts } = useSelector((state) => state.products);
  const { openModal } = useSelector((state) => state.general);
  const [data, setData] = useState({
    name: "",
    description: "",
    rating: null,
    price: null,
    stock: null,
    category: "",
    images: [],
  });

  useEffect(() => {
    dispatch(getAdminProducts());
  }, [dispatch]);

  const addProduct = () => {
    dispatch(openModalFunc());
  };

  const productHandle = (e) => {
    if (e.target.name === "images") {
      const files = Array.from(e.target.files);
      const imagesArray = [];

      files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            imagesArray.push(reader.result);
            setData((prev) => ({ ...prev, images: imagesArray }));
          }
        };
        reader.readAsDataURL(file);
      });
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const modalAddFunc = () => {
    dispatch(addAdminProducts(data));
    dispatch(openModalFunc());
  };

  const content = (
    <div className="my-3">
      <Input
        onChange={productHandle}
        name={"name"}
        id={""}
        placeholder={"product name"}
        type={"text"}
        value={""}
      />
      <Input
        onChange={productHandle}
        name={"description"}
        id={""}
        placeholder={"description"}
        type={"text"}
        value={""}
      />
      <Input
        onChange={productHandle}
        name={"price"}
        id={""}
        placeholder={"price"}
        type={"number"}
        value={""}
      />
      <Input
        onChange={productHandle}
        name={"stock"}
        id={""}
        placeholder={"stock"}
        type={"number"}
        value={""}
      />
      <Input
        onChange={productHandle}
        name={"rating"}
        id={""}
        placeholder={"rating"}
        type={"number"}
        value={""}
      />
      <Input
        onChange={productHandle}
        name={"category"}
        id={""}
        placeholder={"category"}
        type={"text"}
        value={""}
      />
      <Input onChange={productHandle} name={"avatar"} id={""} type={"file"} />
    </div>
  );

  return (
    <div className="min-h-screen">
      <Button name={"add product"} onClick={addProduct} />
      {adminProducts?.products && (
        <div className="flex items-center justify-center gap-5 my-5 flex-wrap">
          {adminProducts?.products?.map((product, index) => (
            <ProductCard edit={true} product={product} key={index} />
          ))}
        </div>
      )}
      {openModal && (
        <Modal
          title={"add product"}
          content={content}
          btnName={"add product"}
          onClick={modalAddFunc}
        />
      )}
    </div>
  );
};

export default Admin;
