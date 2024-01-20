import AsyncStorage from "@react-native-async-storage/async-storage";
import { SIGNUP_STORAGE } from "./storageConfig";

export type StorageSignUpProps = {
  actualStep?: number;
  name?: string;
  nick?: string;
  email?: string;
  password?: string;
  cep?: string;
  neighborhood?: string;
  city?: string;
  number?: number;
};

export async function storageSignUpSave(data: StorageSignUpProps) {
  const existingDataJson = await AsyncStorage.getItem(SIGNUP_STORAGE);
  let newData: StorageSignUpProps = {};

  if (existingDataJson) {
    const existingData: StorageSignUpProps = JSON.parse(existingDataJson);
    newData = { ...existingData, ...data };
  } else {
    newData = data;
  }

  await AsyncStorage.setItem(SIGNUP_STORAGE, JSON.stringify(newData));
}

export async function storageSignUpDataGet(): Promise<StorageSignUpProps> {
  const jsonData = await AsyncStorage.getItem(SIGNUP_STORAGE);

  if (jsonData) {
    return JSON.parse(jsonData);
  }

  return {};
}

export async function storageSignUpDataDelete() {
  await AsyncStorage.removeItem(SIGNUP_STORAGE);
}
