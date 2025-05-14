export const caesarCipher = (text: string, shift: number): string => {

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const ls = text.toLowerCase().split("")
  const alphabetList = alphabet.split("")
  let result = ""

  ls.forEach((letter: string) => {
    const letterLocationInAlphabet = alphabetList.findIndex((e) => e === letter)
    let encryptedLetterLocation = ((letterLocationInAlphabet + shift) % 26 + 26) % 26

    //caso o texto for um valor nao encontrado no alfabeto, ele simplesmente adiciona a resposta
    if (letterLocationInAlphabet === -1) result += letter

    else result += alphabetList[encryptedLetterLocation]
  })

  console.log(result)

  return result

 
};

export function caesarDecipher(text: string, shift: number): string {
  //retorna o contrário do turno, ou seja, o ponto original
  return caesarCipher(text, -shift);
}

