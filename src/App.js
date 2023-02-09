import './App.css';
import Nav from './pages/components/Nav';
import ToDoList from './pages/ToDoList';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const HeadDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  background: #FFBAB5;
  min-height: 100vh;
`
function App() {

  return (
    <HeadDiv className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<ToDoList url='todo' />} />
        <Route path="/complete" element={<ToDoList url='completed'/>} />
      </Routes>
    </HeadDiv>
  );
}

export default App;
