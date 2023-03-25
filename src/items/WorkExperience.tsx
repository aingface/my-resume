import React from 'react';

function WorkExperience() {
  return (
    <div className="Chapter">
      <h2 className="ExperienceTitle">직무 경험</h2>
      <br />
      <div>
        <h3 className="ItemTitle">그루우</h3>
        <p>식물 관리 서비스 커뮤니티</p>

        <p>Frontend Developer</p>
        <p>2022. 07 - 2022. 01</p>
        <div>
          <h4 className="ProjectTitle">블로그 컨텐츠 개편</h4>
          <p>2022. 12 - 2022. 12</p>
          <h5 className="DetailTitle">설명</h5>
          <p>
            식물 관련 자체 생산 블로그 컨텐츠 글을 앱에서 카테고리 별로 보여줄 수 있도록 개편 작업을
            했습니다. 그 결과 자체 블로그 컨텐츠를 관심사에 따라 한눈에 볼 수 있도록 바꾸었습니다.
          </p>
          <h5 className="DetailTitle">내가 한 일</h5>
          <ul>
            <li>카테고리 별 추천 블로그 컨텐츠 UI 개편</li>
            <li>카테고리 별 블로그 컨텐츠 피드 개발</li>
            <li>블로그 컨텐츠 상세 스크린 개발</li>
          </ul>

          <h5 className="DetailTitle">기술 스택</h5>
          <p>JavaScript, React Native, Redux</p>
          <br />
        </div>

        <div>
          <h4 className="ProjectTitle">유저 게시판</h4>
          <p>2022. 09 - 2022. 11</p>
          <h5 className="DetailTitle">설명</h5>
          <p>
            개인 식물관리 앱에 게시판 기능을 신규로 개발했습니다. 그 결과 유저간 소통할 수 있는 장을
            만들게 되었습니다. 자신의 식물을 자랑거나 질문, 고민을 함께 이야기해볼 수 있게 되어 앱에
            큰 변화를 일으켰습니다.
          </p>
          <h5 className="DetailTitle">내가 한 일</h5>
          <ul>
            <li>커뮤니티 게시글 피드 개발</li>
            <li>커뮤니티 게시판 개발</li>
            <li>커뮤니티 댓글 개발</li>
            <li>커뮤니티 좋아요 개발</li>
          </ul>

          <h5 className="DetailTitle">기술 스택</h5>
          <p>JavaScript, React Native, Redux</p>
          <br />
        </div>

        <div>
          <h4 className="ProjectTitle">식물등록 과정 간소화</h4>
          <p>2022. 09 - 2022. 11</p>
          <h5 className="DetailTitle">설명</h5>
          <p>
            입사 후 처음으로 개발하게 된 업무였습니다. 자신이 관리하고 싶은 식물 프로필을 등록하는
            과정에서 몇가지 과정을 생략할 수 있도록 개선 작업에 참여했습니다. 그 결과 사용자의 식물
            등록률이 80%대로 상승하게 되었습니다.
          </p>
          <h5 className="DetailTitle">내가 한 일</h5>
          <ul>
            <li>닉네임 자동 생성 개발</li>
            <li>기본 식물 사진 개선</li>
            <li>식물검색 후 식물 백과에 있는 식물을 자신의 식물로 등록할 때 경로 단축</li>
          </ul>

          <h5 className="DetailTitle">기술 스택</h5>
          <p>JavaScript, React Native, Redux</p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
