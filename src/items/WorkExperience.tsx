import React from 'react';
import { Element } from 'react-scroll';
import styles from '../styles/WorkExperience.module.css';
function WorkExperience() {
  return (
    <Element name="projectExperience">
      <section className={styles.workExperienceContainer}>
        <h2>Work Experience</h2>
        <div className="row">
          <div className="row-left">
            <h3>그루우</h3>
            <p>식물 관리 서비스 커뮤니티</p>
            <span className="role">Frontend Developer</span>
            <span className="time">
              <time dateTime="2022-07">2022. 07</time> - <time dateTime="2022-01">2022. 01</time>
            </span>
          </div>

          <div className="row-right">
            <div className="project">
              <h4>블로그 컨텐츠 개편</h4>
              <span className="time">
                <time dateTime="2022-12">2022. 12</time> - <time dateTime="2022-12">2022. 12</time>
              </span>
              <p>
                자체 블로그 컨텐츠 글을 앱에서 카테고리 별로 보여줄 수 있도록 개편 작업을 했습니다.
                블로그 컨텐츠를 관심사에 따라 한눈에 볼 수 있도록 개선했습니다.
              </p>
              <h5>작업 내역</h5>
              <ul>
                <li>카테고리 별 추천 블로그 컨텐츠 UI 개편</li>
                <li>카테고리 별 블로그 컨텐츠 피드 개발</li>
                <li>블로그 컨텐츠 상세 스크린 개발</li>
              </ul>

              <h5 className="DetailTitle">기술 스택</h5>
              <p>JavaScript, React Native, Redux</p>
              <br />
            </div>

            <div className="project">
              <h4 className="ProjectTitle">커뮤니티 게시판</h4>
              <span className="time">
                <time dateTime="2022-09">2022. 09</time> - <time dateTime="2022-11">2022. 11</time>
              </span>

              <p>
                개인 식물관리가 주요 기능이었던 기존 앱에 게시판 신규로 개발했습니다. 게시판을 통해
                사용자들이 자신의 식물을 자랑하거나 질문, 고민을 공유할 수 있게 되었습니다.
              </p>
              <h5>작업 내역</h5>
              <ul>
                <li>커뮤니티 게시글 피드</li>
                <li>커뮤니티 게시판</li>
                <li>커뮤니티 댓글</li>
                <li>커뮤니티 게시물 like</li>
              </ul>

              <h5>기술 스택</h5>
              <p>JavaScript, React Native, Redux</p>
              <br />
            </div>

            <div className="project">
              <h4>식물등록 과정 간소화</h4>
              <span className="time">
                <time dateTime="2022-08">2022. 08</time> - <time dateTime="2022-08">2022. 08</time>
              </span>
              <p>
                앱에서 관리할 식물 프로필을 등록할 때 불필요한 과정을 단축했고, 이후 사용자의 식물
                등록률이 80%대로 상승하게 되었습니다.
              </p>
              <h5 className="DetailTitle">작업 내역</h5>
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
      </section>
    </Element>
  );
}

export default WorkExperience;
