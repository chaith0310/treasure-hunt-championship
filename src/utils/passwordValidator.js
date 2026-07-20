export function isPasswordAccepted(input, acceptedPasswords = []) {
  const normalizedInput = String(input || "").trim().toLowerCase();
  return acceptedPasswords.some((password) => String(password).trim().toLowerCase() === normalizedInput);
}

export function getLevelById(levels, levelId) {
  return levels.find((level) => Number(level.id) === Number(levelId));
}
