import styled, { css } from 'styled-components/native';
import COLORS from '../../constants/colors';

export const CommentsWrapper = styled.View`
  width: 80%;
`;

export const Text = styled.Text`
  fontSize: 24px;
  fontWeight: 500;
  color: ${COLORS.TEXT_MAIN};
  marginTop: 25px;
  marginBottom: 15px;
`;

export const LoadingText = styled.Text`
  color: ${COLORS.TEXT_MAIN};
  fontSize: 20px;
  fontWeight: 500;
`;