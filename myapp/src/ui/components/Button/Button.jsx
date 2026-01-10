import { Pressable, StyleSheet, View, Text } from "react-native";

import styles from "./styles";

const Button = ({ text, onPress, variant = "primary", disabled, icon, style={} }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <View style={styles.content}>
        {text && <Text style={styles.text}>{text}</Text>}
        {icon && icon}
      </View>
    </Pressable>
  );
};

export default Button;
