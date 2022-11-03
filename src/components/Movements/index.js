import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {MotiView, AnimatePresence, MotiText} from 'moti';
import { styles } from './styles';

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false);

  return (
      <TouchableOpacity
       style={styles.container}
       onPress={() => setShowValue(!showValue)}
       >
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
          <Text style={styles.label}>
            {data.label}
          </Text>

          {showValue ? (
            <AnimatePresence exitBeforeEnter>
              <MotiText
                style={data.type === 0 ? styles.expenses : styles.value}
                from={{
                  translateX: 100,
                }}
                animate={{
                  translateX: 0
                }}
                transition={{
                  type: 'timing',
                  duration: 400,
                }}
                >
              {data.type === 0 ? `RS -${data.value}`: `RS ${data.value}`}
              </MotiText>
            </AnimatePresence>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <MotiView 
                style={styles.skeleton}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'timing' }}
                >
              </MotiView> 
            </AnimatePresence>
          )}
          
        </View>
      </TouchableOpacity>
  )
}

export default Movements;