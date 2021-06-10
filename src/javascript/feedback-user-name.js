const feedBackUserName = () =>{  
  const getNameStorage = localStorage.getItem("name");
  const nameUser = JSON.parse(getNameStorage);  
  const showNameFeedback = document.querySelector(".nameFeedback");  
  showNameFeedback.innerHTML = ` <h3> ${nameUser} </h3> `;
}

feedBackUserName()
