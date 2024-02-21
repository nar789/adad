import {
  Button,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import avatar from '../../components/AllAvatar';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function ConversationListScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const {setConvTitle} = route.params;

  const getAvatarIdx = idx => {
    return idx % 7;
  };

  const names = idx => {
    const arr = ['김채원님', '아이유님', '비비님'];
    return arr[idx % 3];
  };

  const msg = idx => {
    const arr = ['뭐하고 있어ㅋㅋ', '저희 테이블로 오세요ㅋㅋ', '안녕하세요~'];
    return arr[idx % 3];
  };

  return (
    <VStack flex={1} background={'primary.100'}>
      <ScrollView mt={3}>
        {[...Array(20)].map((item, idx) => {
          return (
            <Pressable
              key={idx}
              onPress={() => {
                setConvTitle(names(idx));
                navigation.navigate('Conversation');
              }}>
              <HStack px={5} py={3} key={idx}>
                <Image
                  mr={5}
                  width={65}
                  height={65}
                  borderRadius={65}
                  source={avatar[getAvatarIdx(idx)]}
                  alt="avatar"
                />
                <VStack justifyContent={'space-around'}>
                  <Text
                    color={'white'}
                    fontFamily={'hume'}
                    fontSize={15}
                    fontWeight={'bold'}>
                    {names(idx)}
                  </Text>
                  <Text color={'white'} fontFamily={'hume'} fontSize={12}>
                    {msg(idx)}
                  </Text>
                </VStack>
                <VStack flex={1} />
                <Text color={'white'} fontFamily={'hume'} fontSize={12} mt={2}>
                  {(idx + 1) * 2}분전
                </Text>
              </HStack>
            </Pressable>
          );
        })}
      </ScrollView>
    </VStack>
  );
}
