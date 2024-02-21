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

export default function MyInfoScreen(): React.JSX.Element {
  return (
    <VStack flex={1} background={'primary.100'}>
      <ScrollView px={5} mt={3}>
        <VStack>
          <HStack justifyContent={'space-around'}>
            <MidiumButton label="내 테이블" callback={() => {}} />
            <MidiumButton label="내 주문" callback={() => {}} />
          </HStack>
          <HStack justifyContent={'center'} my={3}>
            <Image
              source={me}
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
                하이~. 반가워요 😂
              </Text>
            </VStack>
            <VStack flex={1} />
            <VStack justifyContent={'center'}>
              <Text
                color={'white'}
                fontFamily={'hume'}
                borderWidth={1}
                borderColor={'white'}
                px={3}
                py={0.5}
                h={7}
                borderRadius={10}>
                수정
              </Text>
            </VStack>
          </HStack>

          <HStack my={5}>
            <VStack>
              <Text
                color={'white'}
                fontWeight={'bold'}
                fontFamily={'hume'}
                mb={1}>
                내 포인트
              </Text>
              <Text color={'white'} fontFamily={'hume'}>
                30,000 P
              </Text>
            </VStack>
            <VStack flex={1} />
            <VStack justifyContent={'center'}>
              <Text
                color={'white'}
                fontFamily={'hume'}
                borderWidth={1}
                borderColor={'white'}
                px={3}
                py={0.5}
                h={7}
                borderRadius={10}>
                내역보기
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <HStack justifyContent={'center'} mb={3}>
          <Feed />
        </HStack>
      </ScrollView>
    </VStack>
  );
}
