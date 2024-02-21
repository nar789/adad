import {
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import MidiumButton from '../../components/MidiumButton';
import me from '../../assets/avatar/me.png';
import Feed from '../../components/Feed';
import HeaderView from '../../components/HeaderView';
import avatar from '../../components/AllAvatar';

export default function ProfileScreen(): React.JSX.Element {
  const getAvatarIdx = idx => {
    return idx % 7;
  };

  return (
    <VStack flex={1} background={'primary.100'}>
      <ScrollView px={5} mt={3}>
        <VStack>
          <HStack justifyContent={'space-around'}>
            <MidiumButton label="AirDrink" callback={() => {}} />
            <MidiumButton label="채팅하기" callback={() => {}} />
          </HStack>
          <HStack justifyContent={'center'} my={3}>
            <Image
              alt="my-profile"
              source={avatar[getAvatarIdx(4)]}
              w={150}
              h={150}
              borderRadius={100}
              borderColor={'white'}
              borderWidth={1}
            />
          </HStack>
          <HStack>
            <VStack>
              <Text
                color={'white'}
                fontWeight={'bold'}
                fontFamily={'hume'}
                mb={1}>
                한줄메시지
              </Text>
              <Text color={'white'} fontFamily={'hume'}>
                하이~. 같이 놀아요 ❤
              </Text>
            </VStack>
          </HStack>
          <HStack mt={5}>
            <HeaderView label="피드" />
          </HStack>
        </VStack>
        <HStack justifyContent={'center'} mb={3}>
          <Feed />
        </HStack>
      </ScrollView>
    </VStack>
  );
}
