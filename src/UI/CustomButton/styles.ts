import { CSSObject } from 'styled-components';
import styled, { css } from 'styled-components/native';
import COLORS from '../../constants/colors';

interface IButtonStyleProps {
  backgroundColor: string;
  styles?: CSSObject;
  pressed?: boolean;
  disabled?: boolean;
}

export const Button = styled.Pressable<IButtonStyleProps>`
  width: 80%;
  alignItems: center;
  justifyContent: center;
  height: 50px;
  borderRadius: 15px;
  backgroundColor: ${props => props.backgroundColor};

  ${props => props.disabled && css`
    backgroundColor: ${COLORS.DISABLED};
  `}

  ${props => props.styles}
`;

export const Text = styled.Text`
  color: ${COLORS.TEXT_MAIN};
  fontSize: 18px;
`;