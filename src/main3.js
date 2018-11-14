///importando arq de api; o './' indica q o arq está nos diretorios do seu projeto, se ele nao for usado 
///a busca pelo arquivo sera feita dentro da pasta node_modules
import api from './api'

class App {
    constructor(){
        //array q vai guardar os repositorios
        this.repositories = []
        //recuperando form do html
        this.formElem = document.getElementById('repo-form')
        //recuperando lista ul
        this.listElem = document.getElementById('repo-list')
        //recuperando o input
        this.inputElem = document.querySelector('input[name=repository]')
        //metodo q registra os eventos do html
        this.registerEvents()
    }

    registerEvents(){
        //registrando evento de submit do form com uma funcao q add um novo repositorio
        this.formElem.onsubmit = (event) => this.addRepository(event)
    }

    //metodo para mostrar span enquanto está carregando a requisicao
    setLoading(loading = true){
        if (loading === true){
            let spanElem = document.createElement('span')
            spanElem.appendChild(document.createTextNode('Carregando...'))
            spanElem.setAttribute('id', 'loading')
            this.listElem.appendChild(spanElem)
        } else{
            let loading = document.getElementById('loading')
            if(loading){
                document.getElementById('loading').remove()
            }
        }
    }

    async addRepository(event){
        //pra evitar q html faça o efeito de carregamento de pagina
        event.preventDefault()
        
        //recuperando o valor do input 
        let username = this.inputElem.value;
        if (username.length === 0)
            return;     //funciona como um exit
        
        this.setLoading()
        try {
            
            //faz requisicao à api
            const response = await api.get(`/users/${username}`)
            
            //desestruturacao para atribuir alguns dos valores da resposta para variaveis
            const { login, id, avatar_url, html_url } = response.data 
            
            //usando object short sintax nao precisa fazer login:login
            this.repositories.push({
                login,
                id,
                avatar_url,
                html_url
            })

            console.log(this.repositories)
            //metodo q cria os elementos da lista na tela
            this.render()
        } catch(err) {
            alert('Usuário não encontrado')
        }
        
        this.setLoading(false)
    }

    render(){
       //limpa a lista
       this.listElem.innerHTML = '';

        //percorre o array de dados ////map(): percorre e modifica elementos; forEach(): apenas percorre os elementos
       this.repositories.forEach((item) => {     

          //cria <li>
          let liElem = document.createElement('li')
          
          //cria img
          let imgElem = document.createElement('img')
          imgElem.setAttribute('src', item.avatar_url)

          //cria strong
          let strongElem = document.createElement('strong')
          strongElem.appendChild(document.createTextNode(item.login))  

          //cria p
          let pElem = document.createElement('p')
          pElem.appendChild(document.createTextNode(item.id))  

          //cria a
          let aElem = document.createElement('a')
          aElem.setAttribute('target', '_blank')
          aElem.setAttribute('href', item.html_url)
          aElem.appendChild(document.createTextNode('Acessar'))

          //add as tags à <li>
          liElem.appendChild(imgElem)
          liElem.appendChild(strongElem)
          liElem.appendChild(pElem)
          liElem.appendChild(aElem)
          
          //add a li à <ul>
          this.listElem.appendChild(liElem)

       })
    }

    
} //fim class

new App()

//https://api/github.com/repos/rocketseat/rocketseat.com.br