export const caesarCipher = (text: string, shift: number): string => {
  if (typeof text !== 'string') {
    throw new TypeError('O texto fornecido deve ser uma string.');
  }

  return text.replace(/[a-z]/gi, (char) => {
    const base = char >= 'a' && char <= 'z' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
  });
};

export function caesarDecipher(text: string, shift: number): string {
  return caesarCipher(text, -shift);
}
