import styled from 'styled-components'
import shocked from '../../images/shockrabbit.png'

const DelDiv = styled.div`
z-index:999;
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
display:flex;
justify-content:center;
align-items:center;

background: rgba(0, 0, 0, 0.5);
`
const Alert = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;

width: 95%;
height: 15vh;
border-radius: 7px;

padding: 2%;
background-color: white;
background-image: url(${shocked});
background-size: auto 13.5vh;
background-repeat: no-repeat;
background-position: right;

  > p {
    margin: 1% 0px;
    > button {
      margin: 2px;
      padding: 4px;
      border: none;
      border-radius: 5px;
      background: #D9D9D9;
    }
    button:last-child {
      background: #C73B12;
      color: white;
    }
  }
`

function Delete({ deletefunction, id, setDelAlert }) {

  return (
    <DelDiv onClick={() => setDelAlert(false)}>
      <Alert>
        <p>정말 삭제하실 건가요?</p>
        <p>
          <button onClick={() => setDelAlert(false)}>취소</button>
          <button onClick={() => deletefunction(id)}>삭제</button>
        </p>
      </Alert>
    </DelDiv>
  )
}

export default Delete;
