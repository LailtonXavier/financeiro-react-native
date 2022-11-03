
### App financeiro estudar e depois refazer

# Start app `expo start`
 
# Iniciando
  - expo init nomeDoApp
    - bland = iniciar com app limpo
  - Utilizamos Styled-components para test em Home
    - expo install styled-components
  - Moti para animacoes
    - expo install moti
      - Ela precisa de 
        - expo install react-native-reanimated
        - em `babel.config.js` color o plugin
         ** plugins: [
          'react-native-reanimated/plugin',
          ],**

# Linux deu erro de limit
    ` 
    insert the new value into the system config
     echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

    # check that the new value was applied
    cat /proc/sys/fs/inotify/max_user_watches

    # config variable name (not runnable)
    fs.inotify.max_user_watches=524288
    `

# Rules
  - Iniciar o desenvolvimento de cima pra baixo

# Libs usada
  - icons.expo [https://icons.expo.fyi/]
  - Moti [https://moti.fyi/]
  - Reacnimated [https://docs.swmansion.com/react-native-reanimated/]

