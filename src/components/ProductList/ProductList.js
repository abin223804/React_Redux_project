import React from "react";
import products from "../../api/product.json";
import BeforeCart from "./CartButtons/BeforeCart";
import AfterCart from "./CartButtons/AfterCart";
import { useSelector } from "react-redux";
import "./ProductList.css";

const ProductList = () => {
  const { cartCount,cartList } = useSelector((state) => state.cart);
  console.log(cartList);

  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>

          {cartCount > 0 ? <AfterCart /> : <BeforeCart product={product} />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
