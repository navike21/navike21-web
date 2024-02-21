export const mapToPercentage = (valueInRangeZeroToOne: number): number => {
  const clampedValue = Math.min(1, Math.max(0, valueInRangeZeroToOne))
  return parseFloat((clampedValue * 100).toFixed(0))
}
