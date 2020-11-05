import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;

  height: ${height};
  width: ${width};

  flex: 1;

  justify-content: center;
  align-items: center;

  z-index: 3;

  background: rgba(120, 120, 120, 0.5);
`;
