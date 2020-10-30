import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  min-height: 80px;
  width: 100%;

  background: #eee;
  margin: 8px 0px;
  padding: 8px 4px;
  border-radius: 8px;

  justify-content: space-around;
  align-items: center;
`;

export const ImageItem = styled.View`
  height: 48px;
  width: 48px;
  background: black;
  border-radius: 24px;
`;

export const TitleItem = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const ContainerInfoItem = styled.View`
  margin-left: 16px;
`;

export const DescriptionItem = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: gray;
`;
