
export default function validateLogin(){
    var url = 'http://localhost:8080/api/validate/login'
    fetch(url, { mode: 'cors', credentials: 'include' })
      .then((response) => {
        // console.log(response.url)

        if (response.url != url) {
            window.location.href = "/login";
        }
       
      }) 
      .catch((error) => {
        console.error(error)
      });
    
}
