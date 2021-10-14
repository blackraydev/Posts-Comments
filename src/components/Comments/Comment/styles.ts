import styled from 'styled-components/native';
import COLORS from '../../../constants/colors';

export const Comment = styled.View`
  borderRadius: 15px;
  padding: 15px;
  backgroundColor: ${COLORS.SECONDARY};
  marginBottom: 15px;
`;

export const Text = styled.Text`
  fontSize: 20px;
  color: ${COLORS.TEXT_MAIN};
  fontWeight: 500;
`;

export const ButtonsWrapper = styled.View`
  flexDirection: row;
  marginTop: 25px;
  justifyContent: space-between;
`;