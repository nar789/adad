import {NativeBaseProvider, View, extendTheme} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigation from './components/BottomNavigation';
import HomeScreen from './pages/home/HomeScreen';
import OrderScreen from './pages/order/OrderScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConversationScreen from './pages/chat/ConversationScreen';
import ConversationListScreen from './pages/chat/ConversationListScreen';
import MyInfoScreen from './pages/myinfo/MyInfoScreen';
import TableListScreen from './pages/table/TableListScreen';
import TableScreen from './pages/table/TableScreen';
import AirDrinkScreen from './pages/airdrink/AirDrinkScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProfileScreen from './pages/profile/ProfileScreen';

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

  const getTitle = (idx: number) => {
    if (idx === 0) {
      return '주문하기';
    } else if (idx === 1) {
      if (convTitle === 'open-chat') {
        return '전체 오픈채팅방';
      } else {
        return `${convTitle}과의 대화`;
      }
    } else if (idx === 2) {
      return `${tabIdx}번 테이블`;
    } else if (idx === 3) {
      return `${airTarget}에게 AirDrink`;
    } else if (idx === 4) {
      return `${profileTarget}님`;
    }
    return 'test';
  };

  const stackScreenStyle = (idx: number) => {
    return {
      title: getTitle(idx),
      headerStyle: {
        backgroundColor: '#09121c',
      },
      headerTintColor: '#fff',
    };
  };

  useEffect(() => {
    SystemNavigationBar.setNavigationColor('#09121c', 'dark', 'navigation');
  }, []);

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const [convTitle, setConvTitle] = useState('');
  const [tabIdx, setTabIdx] = useState(0);
  const [airTarget, setAirTarget] = useState('');
  const [profileTarget, setProfileTarget] = useState('');

  function Root() {
    return (
      <Tab.Navigator
        tabBar={props => <BottomNavigation {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{
            setConvTitle: setConvTitle,
            setTabIdx: setTabIdx,
            setAirTarget: setAirTarget,
          }}
        />
        <Tab.Screen
          name="Table"
          component={TableListScreen}
          initialParams={{
            setTabIdx: setTabIdx,
            setConvTitle: setConvTitle,
            setAirTarget: setAirTarget,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ConversationListScreen}
          initialParams={{
            setConvTitle: setConvTitle,
          }}
        />
        <Tab.Screen name="MyInfo" component={MyInfoScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider style={{backgroundColor: '#09121c'}}>
      <NativeBaseProvider config={config} theme={theme}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#09121c'} />

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Root">
            <Stack.Screen
              name="Root"
              component={Root}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Order"
              component={OrderScreen}
              options={stackScreenStyle(0)}
            />
            <Stack.Screen
              name="Conversation"
              component={ConversationScreen}
              options={stackScreenStyle(1)}
            />
            <Stack.Screen
              name="TableDetail"
              component={TableScreen}
              initialParams={{
                setProfileTarget: setProfileTarget,
                setAirTarget: setAirTarget,
                setConvTitle: setConvTitle,
              }}
              options={stackScreenStyle(2)}
            />
            <Stack.Screen
              name="AirDrink"
              component={AirDrinkScreen}
              options={stackScreenStyle(3)}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={stackScreenStyle(4)}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default App;
