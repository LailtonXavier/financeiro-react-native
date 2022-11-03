import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'; 
import { AntDesign } from '@expo/vector-icons';

const Actions = () => {
  return (
    <ScrollView
      style={styles.containerAction}
      horizontal={true}
       showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
           name='addfolder'
           size={26}
           color='#000'
          />
        </View>
        <Text style={styles.labelButton}>
            Entradas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
           name='tagso'
           size={26}
           color='#000'
          />
        </View>
        <Text style={styles.labelButton}>
            Compras
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
           name='creditcard'
           size={26}
           color='#000'
          />
        </View>
        <Text style={styles.labelButton}>
            Carteiras
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
           name='barcode'
           size={26}
           color='#000'
          />
        </View>
        <Text style={styles.labelButton}>
            Boletos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
           name='setting'
           size={26}
           color='#000'
          />
        </View>
        <Text style={styles.labelButton}>
            Contas
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Actions;