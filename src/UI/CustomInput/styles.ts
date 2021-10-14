import { CSSObject } from 'styled-components';
import styled from 'styled-components/native';
import COLORS from '../../constants/colors';

interface IInputStyleProps {
  styles?: CSSObject;
}

export const Input = styled.TextInput<IInputStyleProps>`
  width: 80%;
  height: 50px;
  padding: 10px;
  marginBottom: 15px;
  borderRadius: 15px;
  backgroundColor: ${COLORS.SECONDARY};
  fontSize: 18px;
  color: ${COLORS.TEXT_MAIN};

  ${props => props.styles}
`;