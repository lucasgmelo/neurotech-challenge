import styled from 'styled-components';

export const MyHeader = styled.header`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--bg-light);

  padding: 0 2rem;

  border-radius: 8px 8px 0 0;

  button {
    cursor: pointer;
    background: transparent;
    border: none;

    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
      color: #f9f9f9;
      font-family: "Inter", sans-serif;
    }
  }
`;

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-rows: auto 31rem;
  grid-template-columns: 30% 70%;

  background: var(--bg-dark);
  height: 35rem;

  margin: 2rem;
  border-radius: 8px;

  & > header {
    grid-row: 1;
    grid-column: 1/3;
  }
`;

export const MyAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: var(--bg-light);

  height: 100%;

  padding: 2rem 1rem;

  border-radius: 0 0 0 8px;

  & > header {
    h1 {
      margin: 1.5rem 0;
    }
  }

  & > footer {
    display: flex;
    align-items: flex-end;

    div {
      margin-left: 1rem;
    }
  }
`;

export const Main = styled.main`
  padding: 2rem 1rem;
  flex: 1;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Tasklist = styled.ul`
  max-height: 95%;
  overflow-y: auto;
`;
