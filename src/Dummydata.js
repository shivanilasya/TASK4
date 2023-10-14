import React, { useEffect, useState } from 'react';

function Dummydata() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    // Fetch user data from the API
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{backgroundColor:'black', color:"white"}}>
      <center><h1><b>Dummy data</b></h1></center>
      
      <table style={{border: '1px solid white', borderCollapse:'collapse', margin:'5px'}}>
        <thead>
          <tr style={{border: '1px solid white',borderCollapse:'collapse'}}>
            <th>Sno</th>
            <th>ProfilePic</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} >
              <td><center>{user.id}</center></td>
              <center><td><img src={user.image} style={{width:'50px'}}/></td></center>
              <td>{user.firstName} </td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dummydata;