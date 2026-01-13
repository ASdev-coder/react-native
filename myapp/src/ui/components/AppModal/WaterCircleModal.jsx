import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import styles from "./stylesCircle.js";
import Button from "../Button/Button.jsx";

const WaterCircleModal = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.ovarlay} onPress={onClose}>
        <Pressable style={styles.modal}>{children}</Pressable>
      </Pressable>
    </Modal>
  );
};

export default WaterCircleModal;
