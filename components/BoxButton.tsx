import {Box, Icon, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';

type BoxType = {
  label: string;
  icon: string;
  callback(): void;
};

export default function BoxButton({
  label,
  icon,
  callback,
}: BoxType): React.JSX.Element {
  const humeBg = {
    linearGradient: {
      colors: ['indigo.600', 'violet.800'],
      start: [0, 0],
      end: [1, 1],
    },
  };

  const humeBgPress = {
    linearGradient: {
      colors: ['violet.800', 'indigo.600'],
      start: [0, 0],
      end: [1, 1],
    },
  };

  const [isPress, setPress] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPress(true)}
      onPressOut={() => {
        setPress(false);
        callback();
      }}>
      <Box
        width={100}
        height={100}
        bg={!isPress ? humeBg : humeBgPress}
        opacity={!isPress ? 1 : 0.8}
        borderRadius={20}
        alignItems={'center'}
        justifyContent={'center'}>
        <Icon
          color={!isPress ? 'white' : 'violet.500'}
          size={'md'}
          mb={2}
          as={<MaterialIcons name={icon} />}
        />
        <Text color={'white'} fontSize={12} fontFamily={'hume'}>
          {label}
        </Text>
      </Box>
    </Pressable>
  );
}
