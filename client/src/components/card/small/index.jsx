import React from 'react';
import {
  ListIcon,
  IconWrapper
} from '../../../styles/icon';

import {
  Wrapper,
  Container,
  Header,
  Title,
  SubTitle,
  ImageContainer,
  NumberText
} from './style'

const SmallCard = ({label, asset, list, type, clickHandle = () => {}}) => {
  return (
    <Wrapper
      onClick={(e) => clickHandle(type)}
    >
      <ImageContainer asset={asset}/>
      <Container>
        <Header>
          <Title>
            {label}
          </Title>
          <SubTitle>
            <IconWrapper>
              <ListIcon />
            </IconWrapper>
            <NumberText>
              {list.length}
            </NumberText>
          </SubTitle>
        </Header>
      </Container>
    </Wrapper>
  )
}

export default SmallCard;