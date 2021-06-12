# Global-Solutions-Web
Global Solutions
## Global Solutions- Web Responsive
Esta é a solução para o trabalho global solutions</br> 

 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
* Meus processos
  * <a href='#Construção' >  Construção </a>   
  * <a href='#o-que-nos-aprendemos' >  Aprendizado </a>
  * <a href='#Feature' >  Feature </a>
* Iniciar o projeto
  * <a href='#Inicio' >  Iniciar </a>   

## Visão Geral
## Trabalho
-  Caso de uso Gulever</br>
   Saite precisa simular dois cassos de uso do Gulever,selecionado foi Hoteis e Locadoras de carro.</br>
   Em cada opção deverá haver uma imagem, com a legenda do respectivo local e avaliação dos usuários.</br> 
   As opções sugeridas, devem ser apresentadas, conforme avaliação, em ordem decrescente.</br>  
   Ao selecionar a imagem, serão apresentadas as seguintes informações:  
   Breve descrição;  
   Localização enfatizando a região e a distância em relação a Avenida Paulista;
   Localização com mapa e como chegar;  
   Preços taxas aplicadas e;  
   Link de acesso ao site oficial.

-  Em relaçaõ ao usuario:</br>
   Aplicação deve ser responsiva ou seja atender a mobiles e desktop.</br>
   Precisa possuir uma aba de feedback e uma aba dos integrantes do grupo,cada função cada um exerceu.
 

## Construção
  - CSS
  - FlexBox
  - GRID Layout
  - Java script
  - HTML
  


## O que nos aprendemos

Nos aprendemos usar Grid Layout,melhorar as tecnicas em flexbox,utilizar java script e manipular DOM.</br>
As maiores dificuldades foram nas construções do layout adpatavel para desktop e mobile,manipulação de dom e logica progamação.</br>

Codigo abaixo estamos usando local storage para persistir nome do usuario na aplicação toda.

~~~javascript 
    const getNameStorage = localStorage.getItem("name");
    const nameUser = JSON.parse(getNameStorage);
    localStorage.clear();
 ~~~
 
 Para adicionar elemento no HTML , usamos querySelector, assim conseguimos pegar a classe.</br>
 Então adicionamos elemento filho com a mensagem de erro,caso o usuario não atenda aos requisitos.</br>
 Apos o usuario resolver o erro em questão o elmento é destruido  com remove.parentNode.removeChild.</br>

 ~~~javascript
   const errorFeedback = document.querySelector('.error-feedback');
   const error = errorFeedback.innerHTML = `<span class="error-span" > Você precisa preencher todos campos e colocar foto </span>`
   const remove = document.querySelector(".error-span");
   remove.parentNode.removeChild(remove)
 ~~~
 
 Para adiconar as estrelas que representa a classificação do usuario, de forma dinamica,construimos um objeto.</br>
 Dentro do objeto precisa estar o campo que e caputurado com o usuario selecionou é o caminho correto das imagens.</br>
 Depois apenas com a função filter você retorna o campo correpondente.
 
 ```html
<div class="select2">   
            <label for="fselect" > Classificação </label>  
            <select class="selected-opinion"  > 
                <option value=0 label="escolha"/>   
                <option value=1 label=1 />
                <option value=2 label=2 />
                <option value=3 label=3 />
                <option value=4 label=4 />
                <option value=5 label=5 />
            </select>
          </div>  
 ```
 ~~~javascript
 const valueSelectedOpinion = document.querySelector(".selected-opinion").value;
  const opinionSelected = [
         {value:0,label:"escolha"},
         {
          value:1, 
          star:[
          "../assests/img/star.svg",
          "../assests/img/star-empty.svg",
          "../assests/img/star-empty.svg",
          "../assests/img/star-empty.svg",
          "../assests/img/star-empty.svg",
         ]},
         {
          value:2, 
          star:[
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star-empty.svg",
          "../assests/img/star-empty.svg",
          "../assests/img/star-empty.svg",
         ]},
         {
          value:3, 
          star:[
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star-empty.svg",
          "../assests/img/star-empty.svg",
         ]},
         {
          value:4, 
          star:[
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star-empty.svg",
         ]},
         {
          value:5, 
          star:[
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star.svg",
          "../assests/img/star.svg",
         ]}

    ]
    
     const labelSelectedOpinion = opinionSelected.filter(item=>{
       if(Number(valueSelectedOpinion) === item.value) return item.star   
     })
    
     starDiv.innerHTML = `<img src=${labelSelectedOpinion[0].star[0]} alt="imagem estrelas feedback" />   
                               <img src=${labelSelectedOpinion[0].star[1]} alt="imagem estrelas feedback" />                       
                               <img src=${labelSelectedOpinion[0].star[2]} alt="imagem estrelas feedback" /> 
                               <img src=${labelSelectedOpinion[0].star[3]} alt="imagem estrelas feedback" /> 
                               <img src=${labelSelectedOpinion[0].star[4]} alt="imagem estrelas feedback" /> 
    
 
 ~~~
 Logo apos o usuario enviar as fotos e as classificações</br>
 Os campos voltam ao estado inicial,gerando assim uma </br>
 sensação melhor ao usuario 
 ```javascript
  document.querySelector('.hotel-selected').value = 0;
     document.querySelector('.selected-opinion').value = 0;
     document.querySelector('textarea').value = '';
     document.querySelector('input').value = '';
 
 ```
 
 
 
 Com html puro e css construimos modais para aplicação do Menu mobile é descrições dos hoteis e carros.</br> 
  No html é necessário colocar  href="#" , para referenciar o id do modal 
  
 ```html
  <li><span>Descrição:<a href="#locadora-movida" > <small text >clique aqui!</small>  </a>  </span></li>
    
   <div id="locadora-movida" class="modal">
              <div class="modal-container" >
                <a href="#fechar" title="Fechar" class="fechar">x</a>
              <div class="modal-content" >
                   aqui e contteudo do modal
              </div> 
             </div> 
 
 ```
 
 ```css
 .modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  opacity: 0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
}
.modal:target {
  opacity: 1;
  pointer-events: auto;
}
.modal-container {
  width: 80vw;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  background: #fa7f72;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    "MDCT   MDCT"
    "MDCI   MDCC";
  height: 300px;
  overflow-y: hidden;
  overflow-x: hidden;
}


.fechar {
  position: absolute;
  width: 30px;
  right: 5px;
  top: 5px;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  background: #ff4545;
  border-radius: 50%;
  font-size: 16px;
  color: #8d0000;
}
 
```

 
 Essa tecnica abaixo é excelente para construimos fundos sobre salentes,gerando  efeito bacana em cards e abas de login.
 
 ```css
  background: rgb(230, 63, 42, 0.2);
  box-shadow: 0px 20px 30px -5px #7f89b927;
  border-radius: 8px;
  filter: drop-shadow(0px 20px 30px -5px #7f89b927);
 ```
 
Essa tecnica  usamos nos cards para dar efeito legal de transição ao passar mouse.
 
 ```css
 
 .card:hover {
  transform: translateY(10px);
  opacity: 0.8;
}
 
 
 ```
 
 Por fim é não menos importante.Com codigo abaixo  posibilitamos descer apenas os conteudos do card,restante da tela fica fixo,assim os menus</br>
 e o asside fica sempre na mesma posição,gerando um conforto ao usuario.</br>
 O calculo e levado em consideração ao tamanho do seu header.</br>
 Webkit e para estilizar o scrool,gerando efeito bacana no scroll interno.
 
 ```css
   height: calc(100vh - 70px);
  overflow-y: scroll;
}
 ::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(63, 46, 78);
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background-color: rgb(148, 140, 155);
}
 
 ```
 
 # Feature
  - DOM
  - Objetos java script
  - Responsividade

# Inicio
- Você precisa apenas clonar o repositorio,para iniciar.</br>
- Recomendamos subir direto no local host.</br>
  Alguns links externos não funcionaram bem com os testes em servidores externos, como plugin live server do Vscode.</br>
  Mesmo problema se aprensetou usando Mozila . Com chorme sem nenhum servidor externo e sucesso.</br>
  Para otima naveção inicia na tela de login,seu nome vai perseitir ao longo da aplicação e para sair utiliza o botão de sair.</br> 
  :wave: :wave: :wave:
  

