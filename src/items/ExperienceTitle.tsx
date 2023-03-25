import React from 'react';
import styled from 'styled-components';

type ExperienceTitleProps = {
  title: string;
};

function ExperienceTitle(props: ExperienceTitleProps) {
  return <Title>{props.title}</Title>;
}

export default ExperienceTitle;

const Title = styled.h1`
  font-size: 50px;
`;
