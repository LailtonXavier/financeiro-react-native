
import { Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
  background-color: #fafafa;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 14px;
`;

export const ContainerFlatList = styled.FlatList`
  margin-left: 14px;
  margin-right: 14px;
`;
