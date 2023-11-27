import React, { useEffect } from "react";
import {
  Box,
  Wrap,
  Center,
  WrapItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { getProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products, pagination, favoritesToggled } =
    useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  const paginationButtonClick = (page) => {
    dispatch(getProducts(page));
  };

  return (
    <>
      {products?.length >= 1 && (
        <Box>
          <Wrap
            spacing="30px"
            justify="center"
            minHeight="80vh"
            mx={{ base: "12", md: "20", lg: "32" }}>
            {products?.map((product) => (
              <WrapItem key={product._id}>
                <Center w="250px" h="450px">
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
          {!favoritesToggled && (
            <Wrap spacing="10px" justify="center" p="5">
              <IconButton
                colorScheme="cyan"
                onClick={() => paginationButtonClick(1)}
                icon={<AiOutlineArrowLeft size="20px" />}
              />
              {Array.from(Array(pagination.totalPages), (e, i) => {
                return (
                  <Button
                    key={i}
                    colorScheme={
                      pagination.currentPage === i + 1 ? "cyan" : "gray"
                    }
                    onClick={() => paginationButtonClick(i + 1)}>
                    {i + 1}
                  </Button>
                );
              })}
              <IconButton
                colorScheme="cyan"
                onClick={() => paginationButtonClick(pagination.totalPages)}
                icon={<AiOutlineArrowRight size="20px" />}
              />
            </Wrap>
          )}
        </Box>
      )}
    </>
  );
};

export default ProductsScreen;
