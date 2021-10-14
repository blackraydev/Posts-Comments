import React from 'react'
import { CSSObject } from 'styled-components';
import * as UI from './styles';

interface ICustomInputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  styles?: CSSObject;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  value,
  onChangeText,
  placeholder,
  multiline,
  numberOfLines,
  styles
}) => {
  return (
    <UI.Input
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={numberOfLines}
      styles={styles}
    />
  )
}

export default CustomInput;
