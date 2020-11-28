import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 8px 16px;
  height: 100%;
  width: 100%;
`;

export const InputWithLabel = styled.View`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: #ddd;
`;

export const Label = styled.Text`
  font-size: 18px;
`;

export const Input = styled.TextInput.attrs({
  editable: false,
})`
  padding: 6px 0px;
  font-size: 16px;
  color: #aaa;
`;
