const button = document.querySelector("button")
button.onclick = function(){submitData()}


const submitData = () =>{
     const hotelSelected= [
          {value:0,  label:"escolha"},
          {value:1,  label:"Locadora Movida"},
          {value:2,  label:"Locadora Localiza"},
          {value:3,  label:"Locadora Unidas"},
          {value:4,  label:"Locadora Alcar"},
          {value:5,  label:"Locadora Avis"},
          {value:6,  label:"Ibis Style São Paulo Anhembi"},
          {value:7,  label:"Confort Ibirapuera"},
          {value:8,  label:"Blue Tree Premium Morumbi"},
          {value:9,  label:"Mercure São Paulo Pamplona"},
          {value:10,  label:"Sheraton São Paulo WTC Hotel"},
          {value:11,  label:"Bourbon Convention Ibirapuera"},
          {value:12,  label:"Blue Tree Premium Paulista"},
          {value:13,  label:"Golden Tulip Paulista Plaza"},
          {value:14,  label:"Renaissance São Paulo Hotel"},
    ]  
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
       
     let checkComment = false;
     const getName =  localStorage.getItem("name");
     const name =  JSON.parse(getName);
     const imgUserSelected = document.querySelector('input').files[0];
     const valueHotelSelected = document.querySelector('.hotel-selected').value;
     const valueSelectedOpinion = document.querySelector(".selected-opinion").value;
     const imgDiv = document.querySelector(".img-user1");
     const starDiv = document.querySelector('.star');
     const nameUser = document.querySelector('.name-comment1');
     const textUser = document.querySelector('.text-user1');
     const textAreaUser = document.querySelector('textarea').value;
     const titleFeedback = document.querySelector('.title-user');
     const errorFeedback = document.querySelector('.error-feedback');
     const error = errorFeedback.innerHTML = `<span class="error-span" > Você precisa preencher todos campos e colocar foto </span>`
     const labelSelectedHotel = hotelSelected.filter(item =>{
       if( Number(valueHotelSelected) === item.value) return item.label
     });
     const labelSelectedOpinion = opinionSelected.filter(item=>{
       if(Number(valueSelectedOpinion) === item.value) return item.star   
     })
     if(typeof imgUserSelected === 'undefined' || Number(valueHotelSelected) === 0 || Number(valueSelectedOpinion) === 0){
          return error;
     }
     const formatedImg = URL.createObjectURL(imgUserSelected);
     imgDiv.innerHTML = `<img src=${formatedImg}  alt="imagem do usuario " />`
     starDiv.innerHTML = `<img src=${labelSelectedOpinion[0].star[0]} alt="imagem estrelas feedback" />   
                               <img src=${labelSelectedOpinion[0].star[1]} alt="imagem estrelas feedback" />                       
                               <img src=${labelSelectedOpinion[0].star[2]} alt="imagem estrelas feedback" /> 
                               <img src=${labelSelectedOpinion[0].star[3]} alt="imagem estrelas feedback" /> 
                               <img src=${labelSelectedOpinion[0].star[4]} alt="imagem estrelas feedback" /> 
                               `
     nameUser.innerHTML = `${name}`;
     textUser.innerHTML =  `${textAreaUser}  `;                   
     titleFeedback.innerHTML = `${labelSelectedHotel[0].label}`;
     const remove = document.querySelector(".error-span");
     remove.parentNode.removeChild(remove)
     checkComment = true;
     if( checkComment)   {            
     document.querySelector('.hotel-selected').value = 0;
     document.querySelector('.selected-opinion').value = 0;
     document.querySelector('textarea').value = '';
     document.querySelector('input').value = '';
     
     }    
                       
}    