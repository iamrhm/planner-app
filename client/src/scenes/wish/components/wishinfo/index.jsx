import React from 'react'

import { styleTokens } from '../../../../styles/variable';
import { getDetailedListCount } from '../../../../helper';

import Button from '../../../../components/buttons/generic';
import WishCard from '../../../../components/card/wish';
import DescriptionCard from '../../../../components/card/description';

import {
  IconWrapper,
  CheckListIcon,
  DateIcon,
  CheckedIcon,
  UncheckedIcon
} from '../../../../styles/icon';

import{
  WishWrapper,
  Slot,
  Row,
  ListSection,
  TitleText,
  DateTimeText,
  ListCount,
  SubText,
  TaskInfoText
} from './style';

const WishInfo = ({wishDetails}) => {
  const {
    isCompleted,
    createdDate,
    hasBucket,
    list = [],
    description
  } = wishDetails;

  const getTitleText = () => hasBucket? "Your Wishes" : "Your Wish Detail";

  const getListCount = () => (
    <>
      {hasBucket ?
        (
          <ListCount isCompleted={isCompleted}>
            <IconWrapper
              iconColor={isCompleted ?
                styleTokens.greenActiveColor :
                styleTokens.lightIconColor
              }
              iconSize={16}
            >
              <CheckListIcon />
            </IconWrapper>
            <SubText>
              {getDetailedListCount(list)}
            </SubText>
          </ListCount>
        ) : null
      }
    </>
  )

  const getCompletionStatus = () => {
    const taskInfoText = isCompleted ? "completed" : "not completed yet";
    return(
      <Slot>
        <Row>
          <IconWrapper
          iconColor={
            isCompleted ?
            styleTokens.greenActiveColor :
            styleTokens.lightIconColor
          }
          iconSize={14}
        >
          {isCompleted ? <CheckedIcon /> : <UncheckedIcon />}
        </IconWrapper>
        <TaskInfoText isCompleted={isCompleted}>
          {hasBucket ?
            `All task are ${taskInfoText}` :
            `This task is ${taskInfoText}`
          }
        </TaskInfoText>
      </Row>
    </Slot>
    )
  }

  return (
    <ListSection>
      <Row>
        <TitleText>
          {getTitleText()}
        </TitleText>
        {getListCount()}
      </Row>
      <Slot>
        <Row>
          <IconWrapper
            iconColor={ styleTokens.lightIconColor}
            iconSize={14}
          >
            <DateIcon />
          </IconWrapper>
          <DateTimeText>
            {createdDate}
          </DateTimeText>
        </Row>
        {getCompletionStatus()}
      </Slot>
      <WishWrapper>
        {hasBucket ? (
          <>
          {list.map((data, idx)=>(
            <WishCard {...data} key={idx}/>
          ))}
          <Button>
            Add More Wish
          </Button>
        </>
        ) : <DescriptionCard description={description} /> }
      </WishWrapper>
    </ListSection>
  )
}

export default WishInfo;
