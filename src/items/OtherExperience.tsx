import React from 'react';
import { Element } from 'react-scroll';

function OtherExperience() {
  return (
    <Element name="otherExperience">
      <div>
        <h2>그 외 경험</h2>

        <div className="other">
          <h3>Elice SW 엔지니어트랙</h3>
          <p>2021. 10 - 2022.02</p>
          <p>
            4달동안 웹 프론트엔드 개발자 과정 특강 및 팀프로젝트를 두 차례 진행했습니다. 프로젝트를
            진행하며 각각 vanilaJS, React 기반으로 개발했습니다. vanilaJS로 프로젝트 개발을 하면서
            JS를 실제로 사용해 볼 수 있었으며, React를 사용하면서 컴포넌트 단위로 코드를 작성해
            재사용과 수정할 때 용이함을 느낄 수 있었습니다.
          </p>

          <h5>기술 스택</h5>
          <p>javascript, GitLab, React</p>
        </div>

        <div className="other">
          <h3>삼성 SDS 하계 대학생 알고리즘 특강</h3>
          <p>2021. 07 - 2021. 07</p>
          <p>
            삼성SDS에서 방학동안 2주간 진행하는 알고리즘 특강을 수강하고 삼성 SW 역량평가 PRO 등급에
            응시하였습니다. 학부 알고리즘 수업 시간에도 배웠지만 재밌는건 2배로 즐기자는 생각에
            참여했고 문제풀이 및 활발한 질의 응답을 통해 컴퓨팅 사고를 훈련할 수 있었습니다.
          </p>

          <h5>기술 스택</h5>
          <p>Java, C++</p>
        </div>

        <div className="other">
          <h3>한국외국어대학교 교내 AI/SW 창업프로젝트</h3>
          <h4>모바일 러닝 액션 게임 Thinpossible 제작</h4>
          <p>2021. 03 - 2021. 07</p>

          <p>
            학부 재학 중 교내 창업 프로젝트 대회에 참여했습니다. 4개월간 팀원이 의기투합하여
            작업했습니다. 유니티를 사용해 게임을 개발을 했고 캐릭터가 장애물을 피하는 게임을
            기획하여 개발했습니다. 이때 asset 및 애니메이션, 캐릭터 이동 로직 개발을 담당하였습니다.
            아쉽게도 스토어에 출시하진 못했지만 게임개발 과정을 경험할 수 있었던 좋은
            경험이었습니다.
          </p>

          <h5>기술 스택</h5>
          <p>Unity,Unity Skeleton Animation, C#</p>
        </div>

        <div className="other">
          <h3>한국외국어대학교 글로벌캠퍼스</h3>
          <p>태국어통번역학과/AI융합(Software&AI)학부 졸업, 학점 4.07</p>

          <p>2014. 03 - 2022.02</p>
          <p>
            대학생 때 컴퓨터공학 수업을 전공보다 흥미롭게 학습하면서 개발자가 되고싶다고
            확신했습니다. 가장 인상적인 수업은 OS 였습니다. OS가 자원을 관리하고 응용프로그램을 지원
            하는 방식이 흥미로웠기 때문입니다. 특히 mutex와 semaphore를 shell에서 c언어로 구현하는
            시스템프로그래밍 실습이 재밌었습니다. 휴학 후 교환학생 비용을 벌기 위해 1년 반동안 일을
            해서 졸업이 늦어졌습니다. 여담이지만 Covid 19으로 인해 모든 조건을 충족하였으나 유학은
            가지 못했습니다.
          </p>
        </div>
      </div>
    </Element>
  );
}

export default OtherExperience;
