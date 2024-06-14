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

// colorUtils.ts

export const adjustColorIntensity = (color: string, targetIntensity: number): string => {
  // Extract RGB components from the selected color
  const hex = color.replace("#", ""); // Remove the "#" symbol
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Calculate the average intensity of the RGB components
  const averageIntensity = (r + g + b) / 3;

  // Check if any of the RGB components are close to their maximum value (255)
  const isBrightColor = r > 200 || g > 200 || b > 200;

  // Define the target opacity based on whether the color is considered faded or not
  const opacity = isBrightColor ? 1 : 0.5;

  // Adjust the color intensity based on the difference between the target intensity and the average intensity
  const adjustmentFactor = targetIntensity / averageIntensity;
  const adjustedR = Math.min(Math.floor(r * adjustmentFactor), 255);
  const adjustedG = Math.min(Math.floor(g * adjustmentFactor), 255);
  const adjustedB = Math.min(Math.floor(b * adjustmentFactor), 255);

  // Convert the adjusted RGB values back to hex
  const adjustedHex = [adjustedR, adjustedG, adjustedB]
    .map((value) => Math.max(value, 0).toString(16).padStart(2, "0"))
    .join("");

  // Prepend the "#" symbol and return the adjusted color with opacity if needed
  return opacity === 1 ? `#${adjustedHex}` : adjustOpacityHex(`#${adjustedHex}`, opacity);
};

const adjustOpacityHex = (hex: string, opacity: number): string => {
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, "0");
  return `${hex}${alpha}`;
};
