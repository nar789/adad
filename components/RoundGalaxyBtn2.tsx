import {Box, HStack, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

type BtnType = {
  label: string;
  callback(): void;
};

export default function RoundGalaxyBtn2({label, callback}: BtnType) {
  const [isPress, setIsPress] = useState(false);

  return (
    <HStack>
      <Pressable
        onPressIn={() => setIsPress(true)}
        onPressOut={() => {
          setIsPress(false);
          callback();
        }}>
        <Box
          bg={{
            linearGradient: {
              colors: [
                !isPress ? 'pink.700' : 'lightBlue.800',
                !isPress ? 'lightBlue.800' : 'pink.600',
              ],
              start: [0, 0],
              end: [1, 1],
            },
          }}
          shadow="3"
          py={5}
          px={10}
          borderRadius={20}
          style={{
            shadowColor: '#65CCFF',
          }}>
          <Text fontSize={12} color={'white'} fontFamily={'hume'}>
            {label}
          </Text>
        </Box>
      </Pressable>
    </HStack>
  );
}
