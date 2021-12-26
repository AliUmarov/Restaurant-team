import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { loadTables } from "../../redux/features/Table";

const Tables = () => {
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables.items);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    console.log(userId);
    dispatch(loadTables(userId));
  }, [dispatch]);

  return (
    <div className="container bg-dark " id="reserved">
      <div className="row justify-content-around ">
        {tables.map((item) => {
          return (
            <Table
              key={item._id}
              id={item._id}
              tableNumber={item.tableNumber}
              tableCapacity={item.tableCapacity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tables;
