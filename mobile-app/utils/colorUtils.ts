export const darkenColor = (color: string, amount: number): string => {
  const hex = color.replace("#", ""); // Remove the "#" symbol

  // Convert hex to RGB values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Calculate the darkened RGB values
  const darkenedR = Math.max(r - amount, 0);
  const darkenedG = Math.max(g - amount, 0);
  const darkenedB = Math.max(b - amount, 0);

  // Convert the darkened RGB values back to hex
  const darkenedHex = [darkenedR, darkenedG, darkenedB]
    .map((value) => Math.min(value, 255).toString(16).padStart(2, "0"))
    .join("");

  // Prepend the "#" symbol and return the darkened color
  return `#${darkenedHex}`;
};



