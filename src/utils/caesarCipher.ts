export const caesarCipher = (text: string, shift: number): string => {

  const list = text.toLowerCase().split("")
  const alphabetStr = "abcdefghijklmnopqrstuvwxyz"
  const alphabetList = alphabetStr.split("")
  let result = ""

  list.forEach((letter: string) => {
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

