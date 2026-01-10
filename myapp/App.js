import {
  StyleSheet,
  Text,
  View,
  Button as ButtonRN,
  Pressable,
  Image,
  ImageBackground,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Button from "./src/ui/components/Button/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import Separator from "./src/ui/components/Separator/Separator";
import { useState } from "react";
import AppModal from "./src/ui/components/AppModal/AppModel";
import { products } from "./src/data/products";

function Main() {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    alert("You clickes the button!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My App</Text>
      <ButtonRN title="Button" onPress={handlePress} color="red" disabled />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={handlePress}
        hitSlop={20}
      >
        <Text style={{ color: "white" }}>Press me</Text>
      </Pressable>
      <Separator size={30} />

      <Button
        // text="click me"
        onPress={() => setVisible(true)}
        variant="primary"
        disabled={true}
        icon={<AntDesign name="alert" size={24} color="black" />}
        // style={{alignSelf: 'flex-start'}}
      />
      <Separator size={30} />

      <AppModal visible={visible} onClose={() => setVisible(false)}>
        <Text>Hello</Text>
      </AppModal>

      <FlatList data={products} renderItem={({item}) => <Text>{item.name}</Text>}/>

      {/* <Image
        source={{
          uri: "https://storage.bankoboev.ru/thumbnail/7/thumb324629.jpg",
        }}
        style={{ width: 200, height: 200 }}
        resizeMode="cover"
      />

      <Separator size={30} />
      <Image source={require("./assets/favicon.png")} />

      <Separator size={30} />
      <ImageBackground
        source={{
          uri: "https://storage.bankoboev.ru/thumbnail/7/thumb324629.jpg",
        }}
      >
        <Text style={{color: 'white'}}>Power of artem </Text>
      </ImageBackground> */}
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    padding: 16,
    backgroundColor: "green",
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default App;
