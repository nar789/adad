import {HStack, Icon, Image, Pressable, Text, VStack} from 'native-base';
import avatar from './AllAvatar';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type StarTableItemType = {
  idx: number;
  callback(): void;
};

const getAvatarIdx = idx => {
  return idx % 7;
};

export default function StarTableItem({idx, callback}: StarTableItemType) {
  return (
    <Pressable onPress={() => callback()}>
      <VStack>
        <Image
          ml={3}
          mr={3}
          width={65}
          height={65}
          borderRadius={65}
          source={avatar[getAvatarIdx(idx)]}
          alt="avatar"
        />
        <Text
          color={'white'}
          fontSize={12}
          fontFamily={'hume'}
          width={85}
          textAlign={'center'}>
          {idx + 1}번 테이블
        </Text>
        <HStack
          alignItems={'center'}
          opacity={0.8}
          width={85}
          justifyContent={'center'}>
          <Icon
            size={3}
            color={'#ff334b'}
            as={<MaterialIcons name="favorite" />}
          />
          <Text
            mb={0.5}
            mr={1}
            fontFamily={'hume'}
            fontWeight={'bold'}
            fontSize={9}
            color={'#ff334b'}>
            100
          </Text>
          <Icon
            size={3}
            color={'#02cb8f'}
            as={<MaterialIcons name="local-bar" />}
          />
          <Text
            mb={0.5}
            fontFamily={'hume'}
            fontWeight={'bold'}
            fontSize={9}
            color={'#02cb8f'}>
            10+
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  );
}
