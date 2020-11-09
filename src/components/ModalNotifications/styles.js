import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0px 8px;
`;

export const ContainerSwipe = styled.View`
  width: 100%;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: #eee;
`;

export const ButtonSwipe = styled.TouchableWithoutFeedback`
  padding: 2px 8px;
  width: 40px;
  border-width: 1px;
  border-color: #eee;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: red;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;

  height: 80px;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 8px;

  border-top-width: 1px;
  border-color: #eee;
`;
