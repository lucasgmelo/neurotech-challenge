import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --bg: #1e1e26;
  --bg-light: #1a1a21;
  --bg-dark: #16161c;
  --gradient: linear-gradient(249.73deg, #f29682 0%, #ee69ac 50%, #cb4bcf 100%);
  --gray: #D7D7D7;
  --info: #BBB;
}

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 20px (var(--bg));
    margin-left: 5px;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 10px;
  }

}

@media (max-width: 1080px) {
  html {
      font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
      font-size: 87.5%;
  }
}


body {
  font: 16px "Inter", sans-serif;
  color: #f9f9f9;
  background: var(--bg);

  max-height: 100vh;
  overflow: hidden;
}

body, input, textarea, select, button {
  font: 400 1rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, label {
    font-size: 1.5rem;
    font-weight: 600;
}

`;

export const Container = styled.div`
  max-width: 1120px;
  height: 100%;

  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Input = styled.input`
  border: 0;

  height: 40px;
  max-width: 375px;
  border-radius: 4px;

  background: var(--bg);
  color: white;

  margin: 0.8rem 0;
  padding: 0 1rem;
`;

export const Button = styled.button`
  border: 0;

  height: 40px;
  max-width: 375px;
  border-radius: 4px;

  background: var(--gradient);
  color: var(--bg-dark);

  margin: 0.8rem 0;
  padding: 0 1rem;

  font-size: 0.9rem;
  font-weight: 500;
`;

export const Todo = styled.li`
  width: 100%;
  min-height: 40px;
  border-radius: 4px;

  padding: 0.7rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--bg);

  & + li {
    margin-top: 1rem;
  }

  & > div {
    h2 {
      font-size: 1rem;
      color: #ee69ac;
    }

    p {
      color: var(--gray);
      font-size: 0.9rem;

      margin: 0.5rem 0 0.2rem;
    }

    span {
      color: var(--info);
      font-size: 0.7rem;
    }
  }

  button {
    background: transparent;
    border: 0;

    &:hover {
      svg {
        filter: brightness(0.8);
      }
    }
  }
`;
