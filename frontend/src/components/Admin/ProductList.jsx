import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from '../../actions/productAction';
import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';



const ProductList = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
    useEffect(() => {
      dispatch(getAdminProduct())
    },[dispatch]);

const { products } = useSelector((state) => state.products);
console.log(products)
const onEdit = (product) => {
  Navigate(`/admin/product/${product._id}`);
};

const onDelete = (product) => {
  dispatch(deleteProduct(product._id));
};

  return (
    <div>
      <Sidebar/>
        <div>
      {products.map((product) => (
        <Box
          key={product._id}
          p={3}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          mb={3}
          display="flex"
          alignItems="center"
        >
          <Image
            src={product.images[0]?.url || ""}
            alt={product.name}
            boxSize="100px"
            objectFit="cover"
            mr={4}
          />
          <Flex direction="column">
            <Text fontWeight="bold">{product.name}</Text>
            <Text>${product.price}</Text>
          </Flex>
          <Spacer />
          <Button
            icon={<i className="fas fa-edit"></i>}
            colorScheme="teal"
            onClick={() => onEdit(product)}
            
            mr={2}
          >edit</Button>
          <Button
            icon={<i className="fas fa-trash-alt"></i>}
            colorScheme="red"
            onClick={() => onDelete(product)}
          >delete</Button>
        </Box>
      ))}
    </div>
    </div>
  )
}

export default ProductList
