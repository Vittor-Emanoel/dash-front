export function getNameInitialLetters(name: string) {
  const trimmedName = name.trim();
  return trimmedName.slice(0, 2).toUpperCase();
}
