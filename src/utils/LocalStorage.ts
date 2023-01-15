import AsyncStorage from '@react-native-async-storage/async-storage';

export enum KeyChainType {
  USER_INFO = 'USER_INFO',
  TOKEN = 'TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
}

const setItem = async (key: KeyChainType, value: any) => {
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
