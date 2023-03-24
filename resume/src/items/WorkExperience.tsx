import React from 'react';

function WorkExperience() {
  return (
    <div className="Chapter">
      <h2 className="ExperienceTitle">직무 경험</h2>
      <br />
      <h3 className="ItemTitle">그루우</h3>
      <h4>Frontend Developer</h4>
      <p>2022. 07 - 2022. 01</p>

      <h5 className="DetailTitle">설명</h5>
      <p>
        스타트업에 신입 개발자로 합류하여 React-Native 기반 앱인 식물관리 서비스인 그루우 앱을
        유지보수 했습니다. 개인 사용성 앱에서 다른 사용자와 소통할 수 있는 앱으로 각종 개편하면서
        새로운 기능 개발을 맡아서 진행했습니다.
      </p>
      <h5 className="DetailTitle">내가 한 일</h5>
      <ul>
        <li>커뮤니티 게시글 기능 및 피드 개발</li>
        <li>블로그 컨텐츠 개편</li>
        <li>식물 등록 과정 간편화</li>
      </ul>
    </div>
  );
}

export default WorkExperience;
