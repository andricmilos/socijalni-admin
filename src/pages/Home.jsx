import React from 'react';
import Table from '../Table';

function Home() {
  var urlUser = "http://localhost:8080/api/user/svi";
  var urlPost = "http://localhost:8080/api/post/svi";
  var urlUserDel = "http://localhost:8080/api/user/delete";
  var urlPostDel = "http://localhost:8080/api/post/delete";
  var urlUserAktiviraj = "http://localhost:8080/api/user/aktiviraj";

  return (<>
    <h1>User</h1>
    <Table url={urlUser} delUrl={urlUserDel} aktivirajUrl={urlUserAktiviraj}/>
    <h1>Post</h1>
    <Table url={urlPost} delUrl={urlPostDel}/>
  </>);
}

export default Home;