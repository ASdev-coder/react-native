import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const useStorage = (key, data, dispatch, type) => {

useEffect(() => {
  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        dispatch({ type: type, payload: JSON.parse(data) });
      }
    } catch (error) {
      console.log(error);
    }
  };
  loadData();
}, []);

useEffect(() => {
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  saveData();
}, [data]);


}

export default useStorage