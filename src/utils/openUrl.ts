import { Linking } from "react-native";
import { showError } from "./showError";

export async function openURL(url: string) {
  const canOpen = await Linking.canOpenURL(url);

  if (canOpen) {
    await Linking.openURL(url);
  } else {
    showError("Não foi possível abrir a URL");
  }
}
