import React from 'react'
import styled from 'styled-components'
import { useState } from "react";


const InputNav= styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  background-color: #60B3FB;
  padding:15px;
`

const InputItem= styled.div`
  color:white;
  font-size: 1.3vw;
`

const SubmitBtn=styled.div`
  background-color:#A3FFA6;
  padding: 0.8vw 3vw;
  border:none;
  font-size: 1.5vw;
  color:black;
  cursor: pointer;
`

const UserInput= styled.input`
  border:none;
  margin:0.5vw;
  padding: 0.8vw 4vw;
`

const Input = ({submitSource}) => {
  const [newName, setNewName]= useState("");
  const [newEmail, setNewEmail]= useState("");
  console.log(newName, newEmail);


  const onSubmit =(newSource)=>{
    newSource.preventDefault();
    submitSource(newName,newEmail);
  }
  

    return (
        <InputNav>
            <InputItem>
                <label> Source Name:</label>
                <UserInput type="text" placeholder="Name" value={newName} onChange={newSource=>setNewName(newSource.target.value)}></UserInput>
            </InputItem>
        <InputItem>
                <label >Source Email:</label>
                <UserInput type="text" placeholder="Email" value={newEmail} onChange={newSource=>setNewEmail(newSource.target.value)}></UserInput>
        </InputItem>

        <InputItem>
                <SubmitBtn onClick={(newSource)=> onSubmit(newSource)}>Submit</SubmitBtn>
        </InputItem>
        </InputNav>
    )
}

export default Input
