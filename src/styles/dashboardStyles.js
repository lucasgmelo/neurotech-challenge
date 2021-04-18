import styled from "styled-components";

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
