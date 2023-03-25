import React from 'react';
import styled from 'styled-components';

function Greetings() {
  return (
    <Container>
      <Title>
        안녕하세요 🦊 <br />
        프론트엔드 개발자 배대철입니다.
        <br />
      </Title>
      <Desc>
        컴퓨터 앞에 앉아 있는 것을 좋아해서 개발자가 되었습니다.
        <br />
        아이디어 내는 것을 좋아하고 모든 일에 적극적입니다.
        <br />
        사용자가 편리하게 쓸 수 있는 인터페이스를 만들고 싶습니다.
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

  width: 80%;
`;

const Title = styled.p`
  font-size: 60px;
`;
const Desc = styled.p`
  font-size: 30px;
`;
