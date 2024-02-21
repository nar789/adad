import {HStack, Image, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import avatar from './../components/AllAvatar';

export default function Feed() {
  const test = Array(30);

  const getAvatarIdx = idx => {
    return idx % 7;
  };

  const getTestCol = (row: number) => {
    const end = test.length < row * 4 + 4 ? test.length : row * 4 + 4;
    return test.slice(row * 4, end);
  };

  const getTestRowSize = arr => {
    const left = arr.length % 4 === 0 ? 0 : 1;
    return ((arr.length / 4) | 0) + left;
  };

  return (
    <ScrollView pt={2}>
      {[...Array(getTestRowSize(test))].map((item, idx) => {
        return (
          <VStack key={idx}>
            <HStack my={1}>
              {[...getTestCol(idx)].map((item2, idx2) => {
                return (
                  <Image
                    key={idx * 4 + idx2}
                    source={avatar[getAvatarIdx(idx * 4 + idx2)]}
                    mx={1.5}
                    w={20}
                    borderRadius={10}
                    alt="feed"
                  />
                );
              })}
            </HStack>
          </VStack>
        );
      })}
    </ScrollView>
  );
}
