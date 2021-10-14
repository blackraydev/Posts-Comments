import styled, { css } from 'styled-components/native';
import COLORS from '../../constants/colors';

export const Post = styled.View`
  flex: 1;
  backgroundColor: ${COLORS.SECONDARY};
  padding: 15px;
  borderRadius: 15px;
  width: 80%;
  marginBottom: 15px;
`;

export const TextWrapper = styled.View``;

export const Title = styled.Text`
  fontSize: 30px;
  fontWeight: 500;
  color: ${COLORS.TEXT_MAIN};
  marginBottom: 15px;
`;

export const Body = styled.Text`
  fontSize: 16px;
  color: ${COLORS.TEXT_SECONDARY};
`;

export const ButtonsWrapper = styled.View`
  flexDirection: row;
  marginTop: 25px;
  justifyContent: space-between;
`;