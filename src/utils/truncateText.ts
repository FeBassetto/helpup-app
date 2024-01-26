export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.substring(0, maxLength);

  if (
    text.charAt(maxLength) !== " " &&
    truncated.charAt(maxLength - 1) !== " "
  ) {
    const lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace === -1) {
      return truncated + "...";
    }
    return truncated.substring(0, lastSpace) + "...";
  }

  return truncated + "...";
}
