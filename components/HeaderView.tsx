import {Box, HStack, Icon, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';

type HeaderType = {
  label: string;
};

export default function HeaderView({label}: HeaderType): React.JSX.Element {
  return (
    <HStack flex={1} justifyContent={'space-between'}>
      <Text
        fontFamily={'hume'}
        color={'white'}
        fontSize={14}
        fontWeight={'bold'}>
        {label}
      </Text>
      <Box
        borderColor={'white'}
        bg={'primary.100'}
        borderWidth={0.5}
        borderRadius={5}
        paddingTop={0.5}
        paddingBottom={0.5}
        paddingLeft={1}
        paddingRight={1}>
        <Text fontFamily={'hume'} color={'white'} fontSize={10}>
          더보기
        </Text>
      </Box>
    </HStack>
  );
}
