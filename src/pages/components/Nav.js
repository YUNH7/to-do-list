import { Link } from "react-router-dom";
import { useState } from 'react';
import Des from './Des';
import styled from "styled-components";

const TabNav = styled.nav`
  display: flex;
  > a {
    text-decoration: none;
    color:black;
    font-size: 0.8em;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #EDB88E;
    width: 50%;
    height: 7.2vh;
    padding: 2%;
  }
  .selected {
    background-color: #FFF084
  }
`


function Nav() {
  function changeLink(boolean) {
    setSelectedList(boolean)
  }
  const [selectedList, setSelectedList] = useState(true)

  return (
    <>
      <TabNav>
        <Link className={selectedList ? "selected" : null} to="/" onClick={() => changeLink(true)}>할 일 목록</Link>
        <Link className={selectedList ? null : "selected"} to="/complete" onClick={() => changeLink(false)}>완료 목록</Link>
      </TabNav>
      <Des selectedList={selectedList} />
    </>

  )
}


export default Nav;