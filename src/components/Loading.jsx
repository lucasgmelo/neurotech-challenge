import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import loading from '../assets/loading.json';

const Loading = () => {
  const Container = styled.div`
    grid-column: 1/3;
    grid-row: 1/3;

    max-height: 60vh;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    `;

  const options = {
    loop: true,
    autoplay: true,
    animationData: loading,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice',
    // },
  };
  return (
    <Container>
      <Lottie options={options} />
    </Container>
  );
};

export default Loading;
