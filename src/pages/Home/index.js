import { StatusBar } from 'expo-status-bar';
// import { Text, View, FlatList, StyleSheet } from 'react-native';
// import { FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';
import { Container, Title, ContainerFlatList } from './styles';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,00',
    date: '20/10/2022',
    type: 0 // dispensa
  },
  {
    id: 2,
    label: 'Pix Leticia',
    value: '20,00',
    date: '15/10/2022', 
    type: 1// dis
  },
  {
    id: 3,
    label: 'Salario',
    value: '20,00',
    date: '10/10/2022', 
    type: 1// dis
  },
]

export default function Home() {  
  return (
    <Container>
      <Header name='Lailton xavier' />
      <Balance saldo="2.0000,00" gastos="-300,00" />
      <Actions />
      <Title>Ultimas movimentacoes</Title>
      <ContainerFlatList
        data={list}
        extraData={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
      
      <StatusBar style="auto" />
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: #fafafa
//   },
//   title: {
//     fontSize: 18;
//     fontWeight: bold;
//     margin: 14;
//   }, 
//   list: {
//     marginLeft: 14,
//     marginRight: 14,
//   }

// });

