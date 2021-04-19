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

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    height: 43rem;
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

  @media (max-width: 720px) {
    height: auto;
    padding: 0 1rem;
    background: var(--bg-dark);
  }
`;

export const Main = styled.main`
  padding: 2rem 1rem;
  flex: 1;

  & > div {
    display: flex;
    justify-content: space-between;

    h1 {
      margin-bottom: 1rem;
    }

    button {
      font-weight: 600;
      font-size: 1.375rem;
      line-height: 2rem;

      border: 0;
      border-radius: 50%;
      outline: none;

      width: 30px;
      height: 30px;

      background: var(--gradient);
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media (max-width: 720px) {
    padding: 0 1rem;
    max-height: 32rem;

    h1 {
      text-transform: uppercase;
      font-size: 1.125rem;
      font-weight: 400;
    }

    div button {
      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;

      height: 40px;
      width: 40px;

      font-size: 1.625rem;
    }
  }
`;

export const Tasklist = styled.ul`
  flex: 1;
  max-height: 95%;
  overflow-y: auto;
`;
