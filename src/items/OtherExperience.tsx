import React from 'react';
import { Element } from 'react-scroll';

function OtherExperience() {
  return (
    <Element name="otherExperience">
      <div>
        <h2>Other Experience</h2>

        <div className="other">
          <h3>Elice SW 엔지니어트랙</h3>
          <p>2021. 10 - 2022.02</p>
          <p>JavaScript, Github, React</p>
        </div>

        <div className="other">
          <h3>삼성 SDS 하계 대학생 알고리즘 특강</h3>
          <p>2021. 07 - 2021. 07</p>

          <h5>기술 스택</h5>
          <p>Java, C++</p>
        </div>

        <div className="other">
          <h3>한국외국어대학교 교내 AI/SW 창업경진대회</h3>
          <h4>모바일 러닝 액션 게임 Thinpossible 제작</h4>
          <p>2021. 03 - 2021. 07</p>

          <p>
            - 캐릭터가 장애물을 피하는 게임 개발 <br />- asset 및 애니메이션, 캐릭터이동 로직 개발
            담당
          </p>

          <h5>기술 스택</h5>
          <p>Unity, Unity Skeleton Animation, C#</p>
        </div>

        <div className="other">
          <h3>한국외국어대학교 글로벌캠퍼스</h3>
          <p>2014. 03 - 2022.02</p>
          <p>태국어통번역학과/AI융합(Software&AI)학부 졸업, 학점 4.07</p>
        </div>
      </div>
    </Element>
  );
}

export default OtherExperience;
