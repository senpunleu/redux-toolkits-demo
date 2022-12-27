import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key: any, value: any) => {
  const jsonValue = JSON.stringify(value);
  const result = await AsyncStorage.setItem(key, jsonValue);
  return result;
};

const getItem = async (key: any) => {
  const result = await AsyncStorage.getItem(key);
  return result;
};

const removeItem = async (key: any) => {
  const result = await AsyncStorage.removeItem(key);
  return result;
};

const LocalStorage = {
  setItem,
  getItem,
  removeItem,
};

export {LocalStorage};
