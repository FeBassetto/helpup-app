import { LogoText } from "./styles";

interface LogoProps {
  type: "primary" | "secondary";
}

export function Logo({ type }: LogoProps) {
  return <LogoText type={type}>Help up</LogoText>;
}
