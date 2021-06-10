
const funcNameUser = () =>{
    const emoji = ['😃','😊','😍','🙂','🤩','😎'];
    const numberEmoji  =  Math.floor(Math.random()* emoji.length);
    const userEmoji =  emoji[numberEmoji];
    const getNameStorage = localStorage.getItem("name");
    const nameUser = JSON.parse(getNameStorage);
    const showName =  document.querySelector(".name");
    const showEmoji = document.querySelector(".user-emoji");
    showName.innerHTML = `<span>Ola <span>  <h3>  ${nameUser} <h3>`;
    showEmoji.innerHTML = `<span> ${userEmoji} </span>`;
}
funcNameUser()