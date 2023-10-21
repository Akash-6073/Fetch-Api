import React, { useEffect, useState } from 'react'
import axios from "axios"


function Fetch() {
    const[Data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/users")
        .then(res =>  setData(res.data.users))
        .catch(err => console.log(err.data));
  console.log(Data);
    },[])
  return (
    <div className='container'>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th className='id'>id</th>
                        <th>Profile</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th className='un'>University</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((element,index)=>{
                          return  <tr key={index}>
                                <td className='id'>{element.id}</td>
                                <td><img src={element.image} style={{height:"55px"}} alt="" /></td>
                                <td>{element.firstName}</td>
                                <td>{element.lastName}</td>
                                <td>{element.gender}</td>
                                <td>{element.email}</td>
                                <td>{element.username}</td>
                                <td>{element.domain}</td>
                                <td>{element.ip}</td>
                                <td className='un'>{element.university}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className="foot">
         Copyright &copy; All Rights Reserved - Akash 21BCE5812
        </div>
    </div>
  
  )

}

export default Fetch
