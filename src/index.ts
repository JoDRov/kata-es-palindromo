const numeroPalindromo: number = 123321
const stringPalindromo: string = "arrozzorra"

function esPalindromo(arg: number | string){
    let stringArray: string[] = []

    if (typeof arg == "number"){
        const stringFromNum = arg.toString() // convertimos el numero a string

        for (let i = 0; i < stringFromNum.length; i++){ // convetimos el string a array
            stringArray.push(stringFromNum[i])
        }
    
        const cutArray: string [] = stringArray.splice(stringArray.length / 2).reverse() // cortamos el array por la mitad y le damos la vuelta a la ultima mitad
        const reversedNumber: number = Number(cutArray.join(""))  // transformamos el array revertido en un numero
        const firstPartOfNumber: number = Number(stringArray.join("")) // transformamos la primera parte del array en un numero
        return result(reversedNumber, firstPartOfNumber) // comprobamos si los numeros coinciden 
    }

    for (let i = 0; i < arg.length; i++){ // convetimos el string a array
        stringArray.push(arg[i])
    }

    const cutArray: string [] = stringArray.splice(stringArray.length / 2).reverse() // cortamos el array por la mitad y le damos la vuelta a la ultima mitad
    const reversedString: string = cutArray.join("") // transformamos el array revertido en un string
    const firstPartOfString: string = stringArray.join("")// transformamos la primera parte del array en un string
    return result(reversedString, firstPartOfString) // comprobamos si los strings coinciden 
} 

function result(firstArg: number | string, secondArg: number | string){
    if (firstArg === secondArg){
        console.log("Es palindromo")
        return true
    }
    else{
        console.log("No es palindromo")
        return false
    }
}

console.log(esPalindromo(numeroPalindromo))
console.log(esPalindromo(stringPalindromo))