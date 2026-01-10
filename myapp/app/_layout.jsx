import { Link, Slot, Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const RootLayout = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#bf2626ff" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="about"
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => <Feather name="info" size={26} color="white" />,
            headerLeft: () => {
              return (
                <Pressable
                  onPress={() => {
                    router.back();
                  }}
                >
                  <EvilIcons name="arrow-left" size={35} color="white" />;
                </Pressable>
              );
            },
          }}
        />
        <Stack.Screen name="ProductList" options={{ title: "Product List" }} />
      </Stack>

      <View>
        <Text style={styles.footer}>Root Layout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: "#ddceceff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
});

export default RootLayout;
