import styled from 'styled-components/native';
import COLORS from '../../constants/colors';

export const Layout = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}))`
  flex: 1;
  paddingVertical: 75px;
  backgroundColor: ${COLORS.MAIN};
`;