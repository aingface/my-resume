import React from 'react';
import { Element } from 'react-scroll';

function Greetings() {
  return (
    <Element name="introduce">
      <div>
        <h1>
          안녕하세요 <br /> FE 개발자 배대철입니다.
        </h1>
        <p className="big-p">
          기술로 세상을 이롭게 만들고 싶은 개발자가 되고 싶습니다. <br />
          아이디어 내는 것을 좋아하고 모든 일에 적극적입니다. <br />
          아름답고 직관적인 UI를 구현하기 위해 고민하고 노력합니다.
          <br />
        </p>
      </div>
    </Element>
  );
}

export default Greetings;
