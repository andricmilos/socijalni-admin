import axios from 'axios'

export default function requestPost(url, json) {


  axios.get(
    url + json,
    { withCredentials: true },
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
  ).then(response => {
    alert(response.data);
  })
    .catch(error => {
      alert(error);
    }
    )
}
