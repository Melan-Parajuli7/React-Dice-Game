import styled from 'styled-components';
import { Button } from '../styled/Buttons';

const StartGame = ({ toggle }) => {
  return ( 
    <Container>
      <div className='image'>
      <img src="/images/d.png" alt="Dice" />
      </div>
      <div className='content'>
        <h1>
          DICE GAME
        </h1>
        <Button 
        onClick={toggle}
        >Play Now</Button>  
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display : flex; 
  height : 100vh;
  margin: 0 auto;
  padding: 20px;
  align-items : center;
  gap : 20px;


  .content {
  h1 {
        font-size : 96px;
        white-space :  nowrap;
  }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  
`;

