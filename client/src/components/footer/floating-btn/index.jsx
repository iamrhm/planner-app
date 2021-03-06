import React from 'react';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import ActionBtn from '../../buttons/action';
import { actionBtnConfig } from '../../../configs/footer';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { initiateFormValidation } from '../../../redux/actions/formsActions'
import Spinner from '../../spinner';

import {
  SaveIcon
} from '../../../styles/icon';

import {
  Wrapper,
  Container,
  AnimatableContainer,
  RoundButton
} from './style';

const FloatingBtn = ({history, location}) => {
  const { isFormValidationInitiated } = useSelector(state => state.formsReducer);
  const dispatch = useDispatch();
  const [isActive, toggleActive] = React.useState(null);
  const {ref, isOutside} = useOutsideClick();
  const isFormLoaded =
  location.pathname.includes('/add') ||
  location.pathname.includes('/edit');

  const handleClick = () => {
    toggleActive(!isActive);
  }

  const onNavigation = (itemDetails) => {
    const { path } = itemDetails;
    history.push(path);
    handleClick();
  }

  const handleSaveClick = () => {
    if(!isFormValidationInitiated) {
      dispatch(initiateFormValidation(true))
    }
  }

  React.useEffect(()=>{
    if(isOutside && isActive){
      toggleActive(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOutside]);

  React.useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  if(isFormLoaded) {
    toggleActive(null);
  }
  },[isFormLoaded]);

  return (
    <Wrapper>
      {!isFormLoaded ?
        (
          <AnimatableContainer
          isActive={isActive}
          ref={ref}
          >
            <ActionBtn
              config={actionBtnConfig}
              isActive={isActive}
              onClick={handleClick}
              onMenuItemClick={onNavigation}
            />
          </AnimatableContainer>
        ) : (
          <Container
          isActive={false}
          ref={ref}
          >
            <RoundButton onClick={handleSaveClick}>
              {!isFormValidationInitiated ?
                <SaveIcon /> : <Spinner />
              }
            </RoundButton>
          </Container>
        )
      }
      </Wrapper>
  )
}

export default withRouter(FloatingBtn);