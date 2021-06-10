
const userName = () =>{
    const form = document.querySelector("form");
    const error = document.querySelector('.error');

    const checkUserName = (e) =>{
        e.preventDefault();
        const name = document.querySelector('input').value;
        if(name === ''){
            return error.innerHTML = `<small> Precisa preencher campo com nome </small>`
        }else{
          localStorage.setItem("name", JSON.stringify(name))
          return window.location.href= "../pages/hotel.html"
        }
    
    }
    form.addEventListener('submit',checkUserName)
}
userName()


