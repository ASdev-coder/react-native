import React, { useReducer, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "../src/components/ProductItem";
import productReduer from "../reducers/productReducer";
import ProductForm from "../src/components/ProductForm";

const initialData = [
  { id: 1, name: "Product 1", price: 10, buy: false },
  { id: 2, name: "Product 2", price: 20, buy: false },
  { id: 3, name: "Product 3", price: 30, buy: false },
  { id: 4, name: "Product 4", price: 40, buy: false },
  { id: 5, name: "Product 5", price: 50, buy: false },
  { id: 6, name: "Product 6", price: 60, buy: false },
  { id: 7, name: "Product 7", price: 70, buy: false },
  { id: 8, name: "Product 8", price: 80, buy: false },
  { id: 9, name: "Product 9", price: 90, buy: false },
  { id: 10, name: "Product 10", price: 100, buy: false },
];

const ProductList = () => {
  const [products, dispatch] = useReducer(productReduer, initialData);

  return (
    <View style={styles.container}>

      <ProductForm addProduct={(name, price) => dispatch({ type: "ADD_PRODUCT", payload: { name, price } })}/>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            buyProduct={() =>
              dispatch({ type: "BUY_PRODUCT", payload: { id: item.id } })
            }
            removeProduct={() =>
              dispatch({ type: "REMOVE_PRODUCT", payload: { id: item.id } })
            }

          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;
