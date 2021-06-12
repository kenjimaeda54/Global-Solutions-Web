# Global-Solutions-Web
Global Solutions
## Global Solutions- Web Responsive
Esta é a solução para o trabalho global solutions</br> 

 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
* Meus processos
  * <a href='#Construção' >  Construção </a>   
  * <a href='#o-que-eu-aprendi' >  Aprendizado </a>
  * <a href='#Feature' >  Feature </a>

## Visão Geral
## Trabalho
-  Caso de uso Gulever</br>
   Saite precisa simular dois cassos de uso do Gulever,selecionado foi Hoteis e Locadoras de carro</br>
   Em cada opção deverá haver uma imagem, com a legenda do respectivo local e avaliação dos usuários.</br> 
   As opções sugeridas, devem ser apresentadas, conforme avaliação, em ordem decrescente.</br>  
   Ao selecionar a imagem, serão apresentadas as seguintes informações:  
   Breve descrição;  
   Localização enfatizando a região e a distância em relação a Avenida Paulista;
   Localização com mapa e como chegar;  
   Preços taxas aplicadas e;  
   Link de acesso ao site oficial.

-  Em relaçaõ ao usuario:</br>
   Aplicação deve ser responsiva ou seja atender a mobiles e desktop</br>
   Precisa possuir uma aba de feedback e uma aba dos integrantes do grupo,cada função cada um exerceu
 

## Construção
  - CSS
  - FlexBox
  - GRID Layout
  - Java script
  - HTML
  


## O que eu aprendi

Nos aprendemos usar Grid Layout,melhorar as tecnicas em flexbox,utilizar java script e manipular DOM</br>
As maiores dificuldades foram nas construções do layout adpatavel para desktop e mobile,manipulação de dom e logica progamação</br

Codigo abaixo estamos usando local storage para persistir nome do usuario na aplicação toda

~~~javascript 
    const getNameStorage = localStorage.getItem("name");
    const nameUser = JSON.parse(getNameStorage);
    localStorage.clear();
 ~~~
 
 Para adicionar elemento no HTML , usamos querySelector, assim conseguimos pegar a classe</br>
 Então adicionamos elemento filho com a mensagem de erro,caso o usuario não atenda aos requisitos</br>
 Apos o usuario resolver o erro em questão o elmento é destruido  com remove.parentNode.removeChild</br>

 ~~~javascript
   const errorFeedback = document.querySelector('.error-feedback');
   const error = errorFeedback.innerHTML = `<span class="error-span" > Você precisa preencher todos campos e colocar foto </span>`
   const remove = document.querySelector(".error-span");
   remove.parentNode.removeChild(remove)
 ~~~
 
 Com html puro e css construimos modais para menu mobile é nas descrições dos hoteis e carros 
 
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
 No html é necessario colcolar  href="#" , para referenciar o id do modal 
 
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
 
 Essa tecnica abaixo é excelente para construimos fundos sobresalentes,gerando  efeito bacana em cards e abas de login
 
 ` ``css
  background: rgb(230, 63, 42, 0.2);
  box-shadow: 0px 20px 30px -5px #7f89b927;
  border-radius: 8px;
  filter: drop-shadow(0px 20px 30px -5px #7f89b927);
 
 
 ```
Essa tecnica abaixo usamos nos cards para dar efeito legal de transição ao passar mouse
 
 ```css
 
 .card:hover {
  transform: translateY(10px);
  opacity: 0.8;
}
 
 
 ```
 
 Por fim é não menos importante foi o efeito de posibilitar descer apenas os conteudos do card,restante da tela fica fixo,assim os menus</br>
 e o asside fica sempre na mesma posiçaõ da tela para o usuario.</br>
 O calculo e levado em consideração ao tamanho do seu header</br>
 Webkit e para estilizar o scrool,gerando efeito bacana no scroll interno
 
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
  - Objetos
  - Responsividade



