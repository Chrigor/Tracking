import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 8px 16px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ContainerInput = styled.View`
  width: 100%;

  padding: 4px 8px;
  border: 1px solid #ddd;

  margin-top: 8px;
`;

export const ContainerGroupInput = styled.View`
  margin: 8px 0px;
`;

export const Label = styled.Text`
  font-size: 14px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 46px;
`;

export const ButtonEnviar = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  max-width: 300px;
  background: #f2dc00;

  align-items: center;
  justify-content: center;

  border-radius: 20px;

  align-self: center;

  margin-bottom: 16px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: white;
`;
