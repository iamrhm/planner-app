import styled from 'styled-components'
import { styleTokens } from '../../../styles/variable';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 2px solid ${styleTokens.borderColor};
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const Header = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: ${styleTokens.darkTextColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CompletionDetails = styled.div`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.isCompleted ?
  `
  background-color: ${styleTokens.activeColor};
  color: ${styleTokens.whiteTextColor};
  padding: 4px 8px;
  ` : `
  padding: 8px 0;
  color: ${styleTokens.lightIconColor};
  `}
`

export const SubText = styled.div`
  font-size: 12px;
  color: inherit;
`

export const CategoryBox = styled.div`
  position: relative;
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 12px 4px 4px 12px;
  color: ${styleTokens.darkTextColor};
  border: 1px solid rgb(0 0 0 / 15%);
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  font-weight: 400;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`