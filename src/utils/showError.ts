import Toast from "react-native-toast-message";

export const showError = (title: string) => {
  return Toast.show({
    text1: title,
    type: "info",
  });
};
