import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/features/Product";
import cl from "./menu.module.css";

const Menu = () => {
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
        <div className={cl.menuBody}>
          <div className="container text-center">
            <input
              className="w-25 mt-4"
              placeholder=" Поиск еды ..."
              onChange={handleChange}
            />
            <div className="row justify-content-around">
              {filteredProducts.map((product) => {
                return (
                  <div className="card border-0 bg-transparent col-md-3 col-sm-5 m-2 ">
                    <img
                      src={product.img}
                      className="card-img-top rounded-circle h-100 mt-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-light">{product.name}</h5>
                      <p className="card-text  text-light text-center">
                        Цена:{product.price}₽
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
