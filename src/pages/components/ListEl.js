import { useState } from "react";
import styled from "styled-components";
import Delete from "./Delete";

const ToDoLi = styled.li`
display: flex;
align-items: center;
justify-content:space-between;
width: 100%;
padding: 2%;
margin-bottom: 2%;

background: #FFF084;
> div {
  flex:1;
  display:flex;
  flex-direction: column;
  align-items: center;
  > p {
      margin: 1% 0px;
      > button {
        margin: 2px;
        padding: 4px;
        border: none;
        border-radius: 5px;
        background: white;
      }
      button:last-child {
        background: #C73B12;
        color: white;
      }
    }
  }
  p:nth-child(2) {
    font-size: 0.8em
  } 
  
`

function ListEl({ el, url, otherUrl, setReload, reload }) {

  const [delAlert, setDelAlert] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [changingContent, setChangingContent] = useState(el.content)

  function handleChangeContent() {
    if (isChanging) {
      changeContent(el.id)
    }
    setIsChanging(!isChanging)
  }

  // 투두 완료
  function completeContent(id) {
    fetch(`http://localhost:3001/${url}/${id}`)
      .then(res => res.json())
      .then(data => {
        fetch(`http://localhost:3001/${otherUrl}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(() => fetch(`http://localhost:3001/${url}/${id}`, {
            method: "DELETE",
          }))
          .then(() => setReload(!reload))
      })
  }

  // 투두 수정
  function changeContent(id) {
    fetch(`http://localhost:3001/${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: changingContent })
    })
    .then(() => setReload(!reload))
  }

  // 투두 삭제
  function deleteContent(id) {
    fetch(`http://localhost:3001/${url}/${id}`, {
      method: "DELETE",
    })
    .then(() => setReload(!reload))
  }

  return (
    <ToDoLi>
      {delAlert && <Delete deletefunction={deleteContent} id={el.id} setDelAlert={setDelAlert} />}
      <input type="checkbox" onClick={() => completeContent(el.id)} defaultChecked={url === 'completed' ? 'checked' : null} />
      <div>
        <p>
          {isChanging ? <input onChange={(e) => setChangingContent(e.target.value)} defaultValue={el.content}></input> : <span>{el.content}</span>}
        </p>
        <p>
          {el.date}
        </p>
        <p>
          <button onClick={handleChangeContent}>{isChanging ? "완료" : "수정"}</button>
          <button onClick={() => setDelAlert(true)}>삭제</button>
        </p>
      </div>
    </ToDoLi>
  )
}


export default ListEl;