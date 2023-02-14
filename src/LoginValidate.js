
export default function validateLogin() {
  var url = 'http://localhost:8080/api/validate/login'
  fetch(url, { mode: 'cors', credentials: 'include' })
    .then((response) => {
      if (response.url != url) {
        window.location.href = "/login";
      }
      return response.text()
    }).then((text)=>{
      if(text != "admin"){
        window.location.href = "/login";
      }
    })
    .catch((error) => {
      console.error(error)
    });

}
