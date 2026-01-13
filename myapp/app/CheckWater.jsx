import React, { useState, useReducer, useMemo } from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import ProgressCircle from "../src/ui/components/CircleBar/ProgressCircle";
import WaterCircleModal from "../src/ui/components/AppModal/WaterCircleModal";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import WaterItem from "../src/components/WaterItem.jsx";
import Separator from "../src/ui/components/Separator/Separator.jsx";
import waterReducer from "../reducers/WaterReducer";
import { water } from "../src/data/water.js";
import useStorage from "../hooks/useStorage.js";

const CheckWater = () => {
  const [visible, setVisible] = useState(false);
  const [waterInfo, dispatch] = useReducer(waterReducer, water);
  const [selectedValue, setSelectedValue] = useState(null);

  useStorage("water", waterInfo, dispatch, "LOAD_WATER");

  const currentTotal = useMemo(() => {
    return waterInfo.reduce((total, item) => total + item.value, 0);
  }, [waterInfo]);

  const onPressed = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setSelectedValue(null);
  };

  const onChoose = (amount) => {
    setSelectedValue(amount);
  };

  const onSave = () => {
    if (selectedValue === null) {
      return;
    }

    dispatch({
      type: "ADD_WATER",
      payload: {
        value: selectedValue,
        time: Date.now(),
      },
    });
    onClose();
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE_WATER",
      payload: id,
    });
  };

  return (
    <View style={styles.container}>
      <ProgressCircle size={200} value={currentTotal} max={1500} />

      <Pressable style={styles.button} onPress={onPressed}>
        <Text style={styles.btnText}>Check water</Text>
      </Pressable>

      <View style={{ maxHeight: 200, width: "100%" }}>
        <FlatList
          data={waterInfo}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <WaterItem item={item} onDelete={onDelete} />}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 10 }}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>
              U haven`t drunk any water today
            </Text>
          }
        />
      </View>

      <WaterCircleModal visible={visible} onClose={onClose}>
        <Text style={styles.headerText}>Choose water</Text>

        <View style={styles.icons}>
          <Pressable
            style={[styles.icon, selectedValue === 100 && styles.selected]}
            onPress={() => onChoose(100)}
          >
            <Entypo name="cup" size={24} color="black" />
            <Text style={styles.text}>100 ml</Text>
          </Pressable>
          <Pressable
            style={[styles.icon, selectedValue === 300 && styles.selected]}
            onPress={() => onChoose(300)}
          >
            <MaterialCommunityIcons
              name="bottle-soda"
              size={24}
              color="black"
            />
            <Text style={styles.text}>300 ml</Text>
          </Pressable>
          <Pressable
            style={[styles.icon, selectedValue === 500 && styles.selected]}
            onPress={() => onChoose(500)}
          >
            <FontAwesome6 name="bottle-water" size={24} color="black" />
            <Text style={styles.text}>500 ml</Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.button, { backgroundColor: "gray" }]}
            onPress={onClose}
          >
            <Text style={styles.btnText}>Exit</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onSave}>
            <Text style={styles.btnText}>Save</Text>
          </Pressable>
        </View>
      </WaterCircleModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
    width: "40%",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "black",
    alignSelf: "center",
  },
  icon: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    width: "30%",
    gap: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginBottom: 10,
  },
  selected: {
    borderColor: "dodgerblue",
    backgroundColor: "#e6f2ff",
  },
});

export default CheckWater;
