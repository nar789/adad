import {
  Box,
  Center,
  HStack,
  NativeBaseProvider,
  Pressable,
  Text,
  Icon,
  extendTheme,
  Container,
  VStack,
  ScrollView,
  Heading,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SystemNavigationBar from 'react-native-system-navigation-bar';

function App(): React.JSX.Element {
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  };

  const theme = extendTheme({
    colors: {
      primary: {
        100: '#09121c',
      },
    },
  });

  const [press, setPress] = useState(false);
  const [selected, setSelected] = React.useState(1);

  useEffect(() => {
    SystemNavigationBar.setNavigationColor('#09121c', 'dark', 'navigation');
  }, []);

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#09121c'} />
      <VStack
        background={'primary.100'}
        w="100%"
        maxW="100%"
        flex={'1'}
        safeAreaTop>
        <ScrollView>
          <Pressable
            onPressIn={() => setPress(true)}
            onPressOut={() => setPress(false)}>
            <Box
              bg={{
                linearGradient: {
                  colors: [
                    !press ? 'lightBlue.300' : 'violet.800',
                    !press ? 'violet.800' : 'lightBlue.300',
                  ],
                  start: [0, 0],
                  end: [1, 0],
                },
              }}
              p="12"
              rounded="xl"
              _text={{
                fontFamily: 'hume',
                fontSize: 'xl',
                color: !press ? 'warmGray.50' : 'primary.300',
                textAlign: 'center',
              }}>
              에어드링크1
            </Box>
          </Pressable>
        </ScrollView>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}>
            <Center>
              <Icon
                mb="1"
                as={<Icon name={selected === 0 ? 'home' : 'home-outline'} />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}>
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}>
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? 'cart' : 'cart-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}>
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? 'account' : 'account-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
}

export default App;
