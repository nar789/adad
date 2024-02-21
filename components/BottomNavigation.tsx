import {Center, HStack, Icon, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

export default function BottomNavigation({
  state,
  navigation,
}): React.JSX.Element {
  return (
    <HStack
      bg={{
        linearGradient: {
          colors: ['indigo.600', 'violet.800'],
          start: [0, 0],
          end: [1, 1],
        },
      }}
      alignItems="center"
      safeAreaBottom
      shadow={6}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const labelList = ['공간', '테이블', '채팅', '내 정보'];

        const iconList = ['local-bar', 'liquor', 'chat-bubble', 'person'];

        return (
          <Pressable
            key={index}
            opacity={isFocused ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name={iconList[index]} />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12" fontFamily={'hume'}>
                {labelList[index]}
              </Text>
            </Center>
          </Pressable>
        );
      })}
    </HStack>
  );
}
