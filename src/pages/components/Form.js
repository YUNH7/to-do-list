import styled from "styled-components";
import think from '../../images/thinkingrabbit.png'
import { useState} from "react";


const FormDiv = styled.div`
display:flex;
align-items: center;
justify-content:center;
width: 100%;
height: 20vh;
border-top: 1px solid black;
padding: 2%;

background: #FFFFFF;

background-image: url(${think});
background-size: auto 13.5vh;
background-repeat: no-repeat;
background-position: right;

> button {
      margin: 2%;
      padding: 4px;
      border: none;
      border-radius: 5px;
      background: #D9D9D9;
    }
`

const AddContentInput = styled.input`
  border:none;
  border-bottom: 3px solid black;
`

function Form({ reload, setReload}) {
  const [content, setContent] = useState('')

  function addContent() {
    if (content === '') return
    const newToDoList = {
      id: new Date(),
      date: new Date().toLocaleString(),
      content
    }
    setContent('')
    addData(newToDoList)
  }

  const addData = (data) => {
    fetch(`http://localhost:3001/todo/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(() => setReload(!reload))
  }

  return (
    <FormDiv>
      <AddContentInput type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>
      <button onClick={addContent}>등록</button>
    </FormDiv>
  )
}


export default Form;