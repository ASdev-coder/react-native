import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import styles from './styles.js'
import Button from '../Button/Button.jsx';

const AppModel = ({visible, onClose, children}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}
      >
        <Pressable style={styles.ovarlay} onPress={onClose}>
          <Pressable style={styles.modal}>
            {children}
            <Button
              text="Close"
              onPress={onClose}
              variant="danger"
            />
          </Pressable>
        </Pressable>
      </Modal>
    );
}



export default AppModel;
