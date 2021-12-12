function add(n1: number, n2: number){
    console.log('Tipo do número 1: ',typeof(n1), '.');
    console.log('Tipo do número 2: ', typeof(n2), '.');
    return n1 + n2;
}

const number1 = 50; 
const number2 = 2.8; 

const result = add(number1, number2);
console.log(result);