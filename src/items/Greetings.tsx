import React from 'react';
import styled from 'styled-components';

function Greetings() {
  return (
    <Container>
      <h1>
        안녕하세요
        <br />
        FE 개발자 배대철입니다.
        <br />
      </h1>
      <Desc>
        컴퓨터 앞에 앉아 있는 것을 좋아해서 개발자가 되었습니다.
        <br />
        아이디어 내는 것을 좋아하고 모든 일에 적극적입니다.
        <br />
        아름답고 쓰기편한 UI를 만들기 위해 고민합니다.
        <br />
      </Desc>
    </Container>
  );
}

export default Greetings;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

const Desc = styled.p`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 500;
`;
