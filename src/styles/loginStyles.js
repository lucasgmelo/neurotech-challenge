import styled from 'styled-components';

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: .9fr 1fr;

  background: var(--bg-dark);
  min-height: 80vh;
  
  padding: 5rem 3rem;
  margin: 2rem 0 0;
  border-radius: 8px;

  strong {
    font-size: 4rem;
  }

  & > img {
    grid-column: 2;
    grid-row: 1/3;

    margin: 0 auto;
    
    align-self: center;
  }

  & > form {
    display: flex;
    flex-direction: column;
  }


@media (max-width: 720px) {
  & > img {
    grid-column: 2;
    grid-row: 1;
    
    align-self: flex-start;
  }

  & > form {
    grid-column: 1/3;
  }
}

`;

export default LoginContainer;
