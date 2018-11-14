class BaseClass{
    constructor(){
        this.life = 100;
        this.alive = true;
    }
}


class Wizard extends BaseClass{
    constructor(){
        super()
        this.className = 'wizard'
        this.atk = 20;
    }

    print(){
        console.log(`Vida: ${this.life} Vivo: ${this.alive} Classe: ${this.className} `)
    }

    static printAtk(){
        console.log(`Atacou com espada`)
    }
}

const w = new Wizard()
w.print()
Wizard.printAtk()

///operação com vetores
const arr = [1, 2, 3, 4, 5, 6]

//MAP: percorre o vetor e retorna operações com cada item; recebe uma funcao anonima como param e
//nessa func anonima um param q serve para indicar o item atual da iteracao e um param q indica o index do item;
//Ex: retorna o dobro de cada item do array original para dentro de um novo array 
newArr = arr.map(function(item, index){
    return item * 2;
})
newArr = arr.map((item, index) => {
    return item * 2;
})
console.log(newArr)

//REDUCE: transforma todos os elementos de um array em um unico elemento
//Ex: soma todos os elementos do array
newArr = arr.reduce(function(total, next) {
    total + next
})
//usando arrow function
newArr = arr.reduce((total, next) => total + next)
console.log(newArr)


//FILTER: remove os elementos que nao se adequarem ao filtro informado no return
newArr = arr.filter((item) => item % 2 === 0)
console.log(newArr)

//FIND: return  undefined se o item do return nao for encontrado dentro do array, se for encontrado retorna o proprio item
newArr = arr.find(item => item === 7)
console.log(newArr)
newArr = arr.find(item => item === 4)
console.log(newArr)

///DESESTRUTURAÇÃO DE OBJETOS: forma mais enxuta de pegar campos de objetos e atribuí-los para outras variaveis
//obj exemplo
const user = {
    name:'Sanatiel',
    age: 28,
    address: {
        city: 'Fortaleza',
        state: 'CE'
    }
}

//Exem. de uso antigo
const nameAnt = user.name; 
console.log(nameAnt)
const cityAnt = user.address.city; 
console.log(cityAnt)

//com a nova desestruturação, vc pode atribuir os campos de um obj para variaveis atraves da sintaxe: 
//{ var1, var2, var3 } = obj 
//sendo q o nome das var precisam ser iguais as prop do obj
/*const { name, age } = user;
console.log(name)
console.log(age)*/

//para acessar objetos dentro de objetos, usar a sintaxe
const { name, age, address: { city } } = user;
console.log(name)
console.log(age)
console.log(city)

//pode-se usar a desestruturacao tbm como parametros de funcoes
function mostraNome({ name, age }){
    console.log(`${name} tem ${age} anos`)
}
mostraNome(user)

////////////////
///REST: usa o operador ... para pegar o 'resto' dos atributos de um obj e colocar numa var separada
guerreiro = {
    atk: 100,
    vida: 300,
    skills : 'ataq poderoso'
}
//a var atk vai receber a prop atk do guerreiro e a var resto, devido o operador ..., vai receber todo
//o restante das prop do guerreiro (vida e skills)
const { atk, ...resto } = guerreiro; 
console.log('REST')
console.log(atk)
console.log(resto)

///usando REST em vetores
const vet = [1, 2, 3, 4, 5, 6]
//cada elemento vai respectivamente pras var a,b,c e o resto (numeros 4,5,6) vao pra restoVet 
const [a, b, c, ...restoVet] = vet 
console.log(restoVet)







