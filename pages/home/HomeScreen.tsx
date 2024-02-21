import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Box,
  Pressable,
  VStack,
  ScrollView,
  Button,
  HStack,
  Text,
  Icon,
  Image,
  Flex,
  Container,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BoxButton from '../../components/BoxButton';
import HeaderView from '../../components/HeaderView';
import StarTableItem from '../../components/StarTableItem';
import avatar from '../../components/AllAvatar';
import Feed from '../../components/Feed';

export default function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const {setConvTitle, setTabIdx, setAirTarget} = route.params;

  const getAvatarIdx = idx => {
    return idx % 7;
  };

  const test = Array(30);

  const getTestCol = (row: number) => {
    const end = test.length < row * 4 + 4 ? test.length : row * 4 + 4;
    return test.slice(row * 4, end);
  };

  const getTestRowSize = arr => {
    const left = arr.length % 4 === 0 ? 0 : 1;
    return ((arr.length / 4) | 0) + left;
  };

  return (
    <VStack
      background={'primary.100'}
      w="100%"
      maxW="100%"
      flex={'1'}
      safeAreaTop>
      <ScrollView>
        <HStack space={3} flex={1} justifyContent={'center'} mt={10}>
          <BoxButton
            label="주문하기"
            icon="restaurant-menu"
            callback={() => navigation.navigate('Order')}
          />
          <BoxButton
            label="오픈채팅방"
            icon="chat"
            callback={() => {
              setConvTitle('open-chat');
              navigation.navigate('Conversation');
            }}
          />
        </HStack>
        <VStack pl={5} pr={5} mt={10}>
          <HeaderView label="인기 테이블" />
          <HStack flex={1} mt={5}>
            <ScrollView horizontal pb={5}>
              {[...Array(10)].map((item, idx) => (
                <StarTableItem
                  key={idx}
                  idx={idx}
                  callback={() => {
                    setTabIdx(idx + 1);
                    navigation.navigate('TableDetail');
                  }}
                />
              ))}
            </ScrollView>
          </HStack>
          <HStack mt={10}>
            <HeaderView label="내 근처 피드" />
          </HStack>
          <Feed />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
