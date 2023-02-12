import React from 'react';
import Table from '../Table';

function Home() {
  var urlUser = "http://localhost:8080/api/user/svi";
  var urlPost = "http://localhost:8080/api/post/svi";
  var urlGroup = "http://localhost:8080/api/group/svi";
  var urlUserDel = "http://localhost:8080/api/user/delete";
  var urlPostDel = "http://localhost:8080/api/post/delete";
  var urlGroupDel = "http://localhost:8080/api/group/delete";
  var urlUserAktiviraj = "http://localhost:8080/api/user/aktiviraj";

  return (<>
    <h1>User</h1>
    <Table url={urlUser} delUrl={urlUserDel} aktivirajUrl={urlUserAktiviraj} editP={"/user/izmeni"} />
    <h1>Post</h1>
    <Table url={urlPost} delUrl={urlPostDel} editP={"/post/izmeni"} />
    <h1>Grupe</h1>
    <Table url={urlGroup} delUrl={urlGroupDel} editP={"/group/izmeni"} />
  </>);
}

export default Home;