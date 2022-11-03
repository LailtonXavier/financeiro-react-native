import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons'

const Header = ({ name }) => {
  return (
    <View style={styles.container}>
      <MotiView 
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          duration: 700,
          delay: 200,
        }}
      >
        <MotiText
          style={styles.userName}
          from={{
            translateX: -300
          }}
          animate={{
            translateX: 0
          }}
          transition={{
            type: 'timing',
            duration: 700,
            delay: 600
          }}
         >
          {name}
        </MotiText>

        <TouchableOpacity
         activeOpacity={0.6}
         style={styles.buttonUser}
         >
          <Feather name='user' size={27} color='#fff' />
        </TouchableOpacity>
      </MotiView>
    </View>
  )
}

export default Header;
