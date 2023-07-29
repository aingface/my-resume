import React from 'react';
import { Element } from 'react-scroll';
import styles from '../styles/Grid.module.css';
import elice from '../assets/Images/elice.png';
import hufs from '../assets/Images/hufs.svg';
import sds from '../assets/Images/sds.png';
import game from '../assets/Images/game.png';
const otherExperienceData = [
  {
    title: 'Elice SW 엔지니어트랙',
    period: '2021. 10 - 2022.02',
    techStacks: ['JavaScript', 'Github', 'React'],
    description: ['프론트엔드 엔지니어 교육 과정'],
    isSummary: false,
    backgroundImage: elice,
  },
  {
    title: '삼성 SDS 하계 대학생 알고리즘 특강',
    period: '2021. 07 - 2021. 07',
    techStacks: ['Java', 'C++'],
    description: ['알고리즘 문제 풀이', '삼성 SW 역량테스트 PRO 등급 응시'],
    isSummary: false,
    backgroundImage: sds,
  },
  {
    title: '한국외대 AI/SW 창업경진대회',
    period: '2021. 03 - 2021. 07',
    techStacks: ['C#', 'Unity', 'Unity Skeleton Animation'],
    description: [
      '모바일 러닝 액션 게임 Thinpossible 제작',
      '캐릭터가 장애물을 피하는 게임 개발',
      'asset 및 애니메이션, 캐릭터이동 로직 개발 담당',
    ],
    isSummary: false,
    backgroundImage: game,
  },
  {
    title: '한국외국어대학교 글로벌캠퍼스',
    period: '2014. 03 - 2022.02',
    techStacks: [],
    description: ['태국어통번역학과', 'AI융합(Software&AI)학부', '졸업 학점 4.07'],
    isSummary: true,
    backgroundImage: hufs,
  },
];

function OtherExperience() {
  const gridItemList = otherExperienceData.map((item, index) => {
    console.log(item.backgroundImage);

    return (
      <div className={styles.gridItem} key={index}>
        <h3>{item.title}</h3>
        <div className={styles.gridItemWrapper}>
          <div className={styles.imgWrapper}>
            <img src={item.backgroundImage} alt="" />
          </div>
          <div className={styles.description}>
            <p>{item.period}</p>

            {item.techStacks.length > 0 ? (
              <>
                <h5>기술 스택</h5>
                <p>{item.techStacks.join(', ')}</p>
              </>
            ) : (
              <></>
            )}
            {item.isSummary ? (
              <p>
                {item.description[0]}
                <br />
                {item.description[1]}
                <br />
                {item.description[2]}
                <br />
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <Element name="otherExperience">
      <div>
        <h2>Other Experience</h2>
        <div className={styles.gridContainer}>{gridItemList}</div>
      </div>
    </Element>
  );
}

export default OtherExperience;
