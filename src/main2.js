//promisse
const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('AL') },2000)
})

/*metodo comum de usar promisse
myPromise().then(response => {
    console.log(response)
}).catch(() => {
    console.log('erro')
})
*/

//usando async await, a sintaxe da promisse fica bem mais enxuta, sem precisar usar o then() e catch()
//basicamente a funcao q vai usar uma promisse recebe a palavra async pra indicar q é uma funcao assincrona
//e o resultado da promisse pode ser obtido com a palavra await; podem ser acessadas varias promisses
//por meio do await dentro de um async
async function execPromise(){
    //const response = await myPromise();
    //console.log(response)
    
    //acessamdo varias vezes
    console.log(await myPromise())
    console.log(await myPromise())
    console.log(await myPromise())

    ////fazendo a msm coisa, mas sem async await
    myPromise().then(response => {
        console.log(response)

        myPromise().then(response => {
            console.log(response)

            myPromise().then(response => {
                console.log(response)
            })

        })
    })
    ////////
}

////usando arrow func
const execPromise2 = async () => {
    console.log(await myPromise())
    console.log(await myPromise())
    console.log(await myPromise()) 
}

//execPromise()
//execPromise2()

//////////////////////
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
/*transformando em async await
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}*/

async function umPorSegundo(){
    await delay()
    console.log('1s');
    await delay()
    console.log('2s');
    await delay()
    console.log('3s'); 
}


umPorSegundo();


