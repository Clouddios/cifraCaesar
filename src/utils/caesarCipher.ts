export function caesarCipher(text: string, shift: number): string {
    return text.replace(/[a-z]/gi, (char) => {
      const base = char === char.toUpperCase() ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
    });
  }
  
  export function caesarDecipher(text: string, shift: number): string {
    return caesarCipher(text, -shift);
  }
  