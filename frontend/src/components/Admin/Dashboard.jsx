import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction";
import { getAllUsers } from "../../actions/userAction";
import OrderList from "./OrderList";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  // const lineState = {
  //   labels: ["Initial Amount", "Amount Earned"],
  //   datasets: [
  //     {
  //       label: "TOTAL AMOUNT",
  //       backgroundColor: ["tomato"],
  //       hoverBackgroundColor: ["rgb(197, 72, 49)"],
  //       data: [0, totalAmount],
  //     },
  //   ],
  // };

  // const doughnutState = {
  //   labels: ["Out of Stock", "InStock"],
  //   datasets: [
  //     {
  //       backgroundColor: ["#00A6B4", "#6800B4"],
  //       hoverBackgroundColor: ["#4B5000", "#35014F"],
  //       data: [outOfStock, products.length - outOfStock],
  //     },
  //   ],
  // };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-4">
        <Text as="h1" fontSize="2xl" mb="4">
          Dashboard
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Box p="4" bg="white" borderRadius="md">
            <Text>Total Amount</Text>
            <Text fontSize="2xl">₹{totalAmount}</Text>
          </Box>

          <Link to="/admin/products">
            <Box p="4" bg="white" borderRadius="md" cursor="pointer">
              <Text>Product</Text>
              <Text fontSize="2xl">{products && products.length}</Text>
            </Box>
          </Link>

          <Link to="/admin/orders">
            <Box p="4" bg="white" borderRadius="md" cursor="pointer">
              <Text>Orders</Text>
              <Text fontSize="2xl">{orders && orders.length}</Text>
            </Box>
          </Link>

          <Link to="/admin/users">
            <Box p="4" bg="white" borderRadius="md" cursor="pointer">
              <Text>Users</Text>
              <Text fontSize="2xl">{users && users.length}</Text>
            </Box>
          </Link>
        </div>

        {/* <div className="mt-8">
          <Box bg="white" p="4" borderRadius="md">
            <Line data={lineState} />
          </Box>
        </div> */}

        {/* <div className="mt-8">
          <Box bg="white" p="4" borderRadius="md">
            <Doughnut data={doughnutState} />
          </Box>
        </div> */}
      </div>
      <OrderList/>
    </div>
  );
};

export default Dashboard;
