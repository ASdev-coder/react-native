import React from "react";
import { View, Text, Pressable, Switch } from "react-native";
import styles from "./styles";
import Button from "../ui/components/Button/Button";

const ProductItem = ({ product, buyProduct, removeProduct }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.name,
            {
              textDecorationLine: product.buy ? "line-through" : "none",
              color: product.buy ? "gray" : "black",
            },
          ]}
        >
          {product.name}``
        </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.actions}>
        <Switch value={product.buy} onValueChange={buyProduct} style={styles.switch}/>
        <Button
          text="Buy"
          variant="danger"
          onPress={() => removeProduct(product.id)}
        />
      </View>
    </View>
  );
};

export default ProductItem;
