import React, { useEffect, useState } from "react";
import { Box, Wrap, Center, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductsScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((responce) => {
        setData(responce.data.products);
      })
      .catch((error) => console.error("Error fetching:", error));
  }, []);

  return (
    <>
      {data?.length > 0 && (
        <Box>
          <Wrap
            spacing="30px"
            justify="center"
            minHeight="80vh"
            mx={{ base: "12", md: "20", lg: "32" }}>
            {data?.map((product) => (
              <WrapItem key={product._id}>
                <Center w="250px" h="450px">
                  <ProductCard product={product} loading={false} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
};

export default ProductsScreen;
