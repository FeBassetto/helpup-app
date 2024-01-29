import Toast from "react-native-toast-message";

export const showSuccess = (title: string) => {
  return Toast.show({
    text1: title,
    type: "success",
  });
};
