import styled from 'styled-components/native';
import COLORS from '../../constants/colors';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Layout = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
  }
}))`
  backgroundColor: ${COLORS.MAIN};
`;