import { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import ListEl from "./components/ListEl";
import starrabbit from "../images/starrabbit.png"

const Main = styled.main`
flex:1;
display: flex;
flex-direction: column;
`

const BasicHr = styled.hr`
  border-color: black;
  margin: 2%;
  `

const ToDoUL = styled.ul`
  padding: 2%;
  padding-bottom: 13.5vh;
  flex:1;
  overflow: auto;

  background-color: white;
  background-image: url(${starrabbit});
  background-repeat: no-repeat;
  background-size: auto 13.5vh;
  background-position: right 5% bottom;
  `

function ToDoList({ url }) {
  const [toDoData, setToDoData] = useState([])
  const [otherUrl, setOtherUrl] = useState('')
  const [reload, setReload] = useState(false)

  const getData = () => {
    fetch(`http://localhost:3001/${url}`)
      .then(res => res.json())
      .then(json => setToDoData(json))
  }

  useEffect(() => {
    getData()
    url === "todo" ? setOtherUrl('completed') : setOtherUrl('todo')
  }, [url, reload])

  const todo = toDoData.slice().reverse()

  return (
    <Main>
      {url === 'todo'
        && <Form setReload={setReload} reload={reload} />}
      <BasicHr />
      <ToDoUL>
        {todo.map((el) =>
          <ListEl key={el.id}
            el={el}
            url={url}
            otherUrl={otherUrl}
            setReload={setReload}
            reload={reload}
          />
        )}
      </ToDoUL>
    </Main>
  )
}


export default ToDoList;