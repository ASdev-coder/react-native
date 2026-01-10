import { StyleSheet } from "react-native";

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

  name: {
    fontSize: 20,
    fontWeight: "600",
  },

  price: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
    marginTop: 4,
  },
  actions:  {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  }
});

export default styles;
