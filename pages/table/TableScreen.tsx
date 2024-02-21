import {HStack, ScrollView, VStack} from 'native-base';
import React from 'react';
import HeaderView from '../../components/HeaderView';
import Feed from '../../components/Feed';
import MemberItem from '../../components/MemberItem';
import MidiumButton from '../../components/MidiumButton';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function TableScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const {setProfileTarget, setAirTarget, setConvTitle} = route.params;

  return (
    <VStack flex={1} background={'primary.100'}>
      <ScrollView>
        <VStack pl={5} pr={5} mt={5}>
          <HStack justifyContent={'space-around'} mb={5}>
            <MidiumButton
              label="AirDrink"
              callback={() => {
                setAirTarget(`1번 테이블`);
                navigation.navigate('AirDrink');
              }}
            />
            <MidiumButton
              label="채팅하기"
              callback={() => {
                setConvTitle(`1번 테이블`);
                navigation.navigate('Conversation');
              }}
            />
          </HStack>
          <HeaderView label="테이블 멤버" />
          <HStack flex={1} mt={5}>
            <ScrollView horizontal pb={5}>
              {[...Array(5)].map((item, idx) => (
                <MemberItem
                  key={idx}
                  idx={idx}
                  callback={() => {
                    setProfileTarget('김채원');
                    navigation.navigate('Profile');
                  }}
                />
              ))}
            </ScrollView>
          </HStack>
          <HStack mt={10}>
            <HeaderView label="테이블 피드" />
          </HStack>
          <Feed />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
