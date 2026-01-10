import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../ui/components/Button/Button';
import Separator from '../ui/components/Separator/Separator';

const ProductForm = ({addProduct}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [nameError, setNameError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const handleNameChange = (value) => {
        setName(value);

        if (value.trim().length === 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const handlePriceChange = (value) => {
      setPrice(value);

      if (value.trim().length === 0) {
        setPriceError(true);
      } else {
        setPriceError(false);
      }
    };

    const addHandler = () => {
       if(name.trim().length === 0) {
           setNameError(true);
           return;
       }

       if(price.trim().length === 0) {
           setPriceError(true);
           return;
       }

       addProduct(name.trim(), price);
       setPrice('');
       setName('');
       setNameError(true);
       setPriceError(true);
       Keyboard.dismiss();
    }

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter name"
          value={name}
          onChangeText={handleNameChange}
          style={[styles.input, nameError && styles.inputError]}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter price"
          value={price}
          onChangeText={handlePriceChange}
          style={[styles.input, priceError && styles.inputError]}
        />
        {nameError && <Text style={styles.textError}>Name is required</Text> }
        {priceError && <Text style={styles.textError}>Price is required</Text> }
        <Button text="Add Product" onPress={addHandler} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: '#ccc',
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    textError: {
        color: 'red',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center'
    },
    inputError: {
        borderColor: 'red',
    }
})

export default ProductForm;
