import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/features/Product";
import { loadBooking } from '../../redux/features/Booking';

const Products = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsList);
  const loading = useSelector((state) => state.products.loading);


  useEffect(() => {
    dispatch(loadProducts());

  }, [dispatch]);

  const filteredProducts = products.filter((item) => {
    return item.name.toLowerCase().match(input.toLowerCase());
  });

  const handleChange = (e) => {
    if (e.target.value.indexOf('\\') !== -1) {
      return
    }
    setInput(e.target.value);
  };

  return (
    <>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className="container bg-dark text-center">
          <input
            className="w-25 "
            placeholder="Поиск еды ..."
            onChange={handleChange}
            value={input}
          />
          <div className="row justify-content-around">
            {filteredProducts.map((product) => {
              return (
                <Product
                  key={product._id}
                  id={product._id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
