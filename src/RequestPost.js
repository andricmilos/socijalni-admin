
export default function requestPost(url,json){
    fetch(url, {  method: 'POST', mode: 'cors', credentials: 'include', body: json })
      .then((response) => {
        // console.log(response.url)
        alert(response)
        console.log(response)
      }) 
      .catch((error) => {
        //console.error(error)
        alert("test")
      });
    
}
