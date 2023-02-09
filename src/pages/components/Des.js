import styled from "styled-components";
import destodo from '../../images/destodo.png'
import cheerrabbit from '../../images/cheerrabbit.png'

const DesDiv = styled.div`
display:flex;
height: 13.5vh;
font-size: 1em;
padding: 2%;
justify-content:center;
/* padding-right:20%; */
align-items:center;

background-color: white;

background-image: url(${props => props.selected});
background-size: contain;
background-repeat: no-repeat;
background-position: right;

`

function Des({ selectedList }) {
  return (
    <DesDiv selected={selectedList ? destodo : cheerrabbit}>
      {selectedList ? "할 일을 완료해 볼까요?" : "완료 목록입니다"}
    </DesDiv>
  )
}


export default Des;