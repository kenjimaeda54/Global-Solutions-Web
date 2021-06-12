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
   Ao selecionar a imagem, serão apresentadas as seguintes informações:</br>  
   Breve descrição;</br>  
   Localização enfatizando a região e a distância em relação a Avenida Paulista;</br>  
   Localização com mapa e como chegar;</br>  
   Preços taxas aplicadas e;</br>  
   Link de acesso ao site oficial.</br>  

## Construção
  - CSS
  - FlexBox
  - GRID
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
 
 Para adicionar elemento no HTML após o usuario não atender aos requisitos exigidos, usamos querySelector, assim conseguimos pegar a classe</br>
 Então adicionamos elemento filho com a mensagem de erro</br>
 Apos o usuario resolver o erro em questão o elmento é desttruido  com remove.parentNode.removeChild</br>

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
 
 
 # Feature
  - DOM
  - Objetos
  - Responsividade


