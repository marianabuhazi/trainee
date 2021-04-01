import styled from 'styled-components'
import React from 'react'

const SourceCol= styled.div`
    width:25%;
    text-align:center;
`

const SourceRow= styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction:row;
  justify-content: space-between;
  padding:1vw;
  margin: 0.5vw 0 0.5vw 0;
  align-items: center;
  font-size: 1.5vw;
  border-top:1px solid #E5E5E5; 
  border-bottom:1px solid #E5E5E5;
`

const DeleteBtn= styled.button`
    background-color:#FF7676;
    padding: 0.8vw 3vw;
    border:none;
    font-size: 1.5vw;
    cursor: pointer;
    `


const Source = ({deleteSource, source}) => {
    return (
        <>
        <SourceRow>
           <SourceCol>{source.num}:</SourceCol> 
           <SourceCol>{source.name}</SourceCol> 
           <SourceCol>{source.email}</SourceCol> 
           <DeleteBtn onClick={()=> deleteSource(source.num)}>Delete</DeleteBtn>
        </SourceRow>
        </>
    )
}

export default Source
