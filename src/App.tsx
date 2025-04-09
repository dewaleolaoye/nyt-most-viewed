import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import FilterSelect from '@/components/articles/FilterSelect';
import ArticleList from '@/components/articles/ArticleList';
import { IPeriod } from '@/types';

function App() {
  const [period, setPeriod] = useState<IPeriod>(1);

  return (
    <Box
      maxWidth={{ base: '1280px', md: '1480px' }}
      mx='auto'
      padding={{ base: '24px 16px 0px', md: '24px 24px 0px' }}
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
        mb='24px'
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Text
          as='h1'
          mb='32px'
          fontSize='24px'
          fontWeight='700'
        >
          Most Viewed Articles
        </Text>

        <Box width={{ base: '100%', md: '300px' }}>
          <FilterSelect
            onValueChange={({ value }) => {
              setPeriod(Number([value[0]]) as IPeriod);
            }}
          />
        </Box>
      </Flex>

      <ArticleList period={period} />
    </Box>
  );
}

export default App;
