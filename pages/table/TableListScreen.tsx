import {Box, HStack, Image, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import avatar from '../../components/AllAvatar';
import SmallButton from '../../components/SmallButton';
import RoundGalaxyBtn2 from '../../components/RoundGalaxyBtn2';
import me from '../../assets/avatar/me.png';
import {Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function TableListScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const {setTabIdx, setConvTitle, setAirTarget} = route.params;

  const getAvatarIdx = idx => {
    return idx % 7;
  };

  return (
    <VStack flex={1} background={'primary.100'}>
      <ScrollView mt={3}>
        <HStack bg={'#030609'} py={3} px={5} mb={5}>
          <Image
            mr={5}
            width={65}
            height={65}
            borderRadius={65}
            source={me}
            alt="avatar"
          />
          <VStack justifyContent={'space-between'}>
            <Text
              color={'white'}
              fontFamily={'hume'}
              fontWeight={'bold'}
              fontSize={12}>
              No.1
            </Text>
            <Text color={'white'} fontFamily={'hume'} fontSize={18}>
              0번 테이블
            </Text>
            <Text color={'white'} fontFamily={'hume'} fontSize={10}>
              하이~ 하이~ ❤
            </Text>
          </VStack>
          <VStack flex={1} />
          <RoundGalaxyBtn2 label="내 테이블" callback={() => {}} />
        </HStack>
        {[...Array(20)].map((item, idx) => {
          return (
            <HStack px={5} py={3} key={idx}>
              <HStack>
                <Image
                  mr={5}
                  width={65}
                  height={65}
                  borderRadius={65}
                  source={avatar[getAvatarIdx(idx)]}
                  alt="avatar"
                />
                <VStack justifyContent={'space-between'}>
                  <Text
                    color={'white'}
                    fontFamily={'hume'}
                    fontWeight={'bold'}
                    fontSize={12}>
                    No.{idx + 1}
                  </Text>
                  <Text color={'white'} fontFamily={'hume'} fontSize={18}>
                    {idx + 1}번 테이블
                  </Text>
                  <Text color={'white'} fontFamily={'hume'} fontSize={10}>
                    반가워요~ 🍻🍺
                  </Text>
                </VStack>
              </HStack>

              <VStack flex={1} />

              <VStack justifyContent={'space-around'}>
                <SmallButton
                  label="입장"
                  callback={() => {
                    setTabIdx(idx + 1);
                    navigation.navigate('TableDetail');
                  }}
                />
              </VStack>
            </HStack>
          );
        })}
      </ScrollView>
    </VStack>
  );
}
