import {default as Key} from 'react-native-keychain';

const setItem = async (key: any, value: any) => {
  const jsonValue = JSON.stringify(value);
  const result = await Key.setGenericPassword(key, jsonValue, {service: key});
  return result;
};

const getItem = async (key: any) => {
  const result = await Key.getGenericPassword({service: key});
  return result;
};

const removeItem = async (key: any) => {
  const result = await Key.resetGenericPassword({service: key});
  return result;
};

const Keychain = {
  setItem,
  getItem,
  removeItem,
};

export {Keychain};
