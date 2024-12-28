import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const client = axios.create({
    baseURL: "http://localhost:8080/spring-db-app" 
  });

const UserCreate = () => {

    const [userData, setUserData] = useState({
        name: "",
        age: "",
        address: ""
    });


    function handle(e){
        const newUserData = { ...userData }
        newUserData[e.target.id] = e.target.value
        setUserData(newUserData);
        console.log(newUserData);
    }


    function submit(e){
        e.preventDefault();
        client.post('/users', {
            name: userData.name,
            age: userData.age,
            address: userData.address
        }).then((res) => {
            console.log(res.data)
        })

    }

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={(e) => submit(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input id="name" value={userData.name} type="text" onChange={(e) => handle(e)}/></td>
                            </tr>
                        <tr>
                            <td>Age</td>
                            <td><input id="age" value={userData.age} type="text" onChange={(e) => handle(e)}/></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td><input id="address" value={userData.address} type="text" onChange={(e) => handle(e)}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button>Submitt</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default UserCreate;