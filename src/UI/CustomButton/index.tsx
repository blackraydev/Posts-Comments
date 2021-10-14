import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { CSSObject } from 'styled-components';
import * as UI from './styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor: string;
  disabled?: boolean;
  styles?: CSSObject;
}

const CustomButton: React.FC<IButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  disabled,
  styles
}) => {
  const [pressed, setPressed] = useState(false);

  const pressInHandler = () => setPressed(true);
  const pressOutHandler = () => setPressed(false);

  return (
    <UI.Button
      onPress={onPress}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      pressed={pressed}
      disabled={disabled}
      styles={styles}
      backgroundColor={backgroundColor}
    >
      <UI.Text>{title}</UI.Text>
    </UI.Button>
  )
}

export default CustomButton;
