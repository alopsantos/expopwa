import styled from "styled-components/native";

export const WrapperTopModal = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const BodyModal = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const ImagemModalLogo = styled.Image`
  flex: 1;
  width: 332px;
  height: 332px;
  margin:0 auto;
`;

export const ImagemList = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 16px;
  border-radius: 8px;
`;

export const Detalhes = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 10px;
`;

export const DetalheTxt = styled.Text`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: center;
`;

export const DetalheName = styled.Text`
  margin-bottom: 8px;
  color: #4b5c6b;
  font-size: 24;
`;
