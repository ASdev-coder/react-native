import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../ui/components/Button/Button";

const TimeItem = ({ item, onDelete }) => {
  const timeString = new Date(item.time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      <Text>{item.value} ml</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10}}>
        <Text>{timeString}</Text>
        <Button text="Delete" variant="danger" onPress={() => onDelete(item.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
    borderRadius: 16,
    backgroundColor: "white",
    margin: 8,
  },
});

export default TimeItem;
