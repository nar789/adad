import {Button, HStack, ScrollView, VStack} from 'native-base';
import React from 'react';
import RoundGalaxyBtn2 from '../../components/RoundGalaxyBtn2';

export default function AirDrinkScreen(): React.JSX.Element {
  return (
    <VStack flex={1} background={'primary.100'}>
      <ScrollView>
        <HStack bg={'#030609'} py={3} justifyContent={'center'}>
          <RoundGalaxyBtn2 label="AirDrink" callback={() => {}} />
        </HStack>
      </ScrollView>
    </VStack>
  );
}
