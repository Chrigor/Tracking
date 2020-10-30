import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  width: 100%;
  padding: 8px 16px;
  margin: 16px 8px 0px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 600;
`;

export const ContainerNotification = styled.TouchableOpacity`
  position: relative;
  padding: 12px;
`;

export const BallNotification = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 24px;
  background: #f2dc00;
  right: 0px;
  top: 0px;
  position: absolute;

  border: 2px solid #fff;
`;
