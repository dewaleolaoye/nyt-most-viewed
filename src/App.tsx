import { useState } from 'react';
import { Box, Button, Center, Flex, Grid, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/api';
import Loader from '@/components/common/Loader';
import ArticleCard from '@/components/articles/ArticleCard';
import FilterSelect from '@/components/articles/FilterSelect';

function App() {
  const [period, setPeriod] = useState(1);
  const { data, isLoading, isSuccess, error, isError } = useQuery({
    queryKey: ['articles', period],
    queryFn: () => getArticles(period),
  });

  console.log(data, 'THE DATA');

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
              setPeriod(Number([value[0]]));
            }}
          />
        </Box>
      </Flex>

      {isLoading && <Loader />}

      {isError && (
        <Center flexDir='column'>
          <Text
            fontSize='20px'
            textAlign='center'
          >
            {String(error)}{' '}
          </Text>

          <Button>Refresh</Button>
        </Center>
      )}

      {isSuccess && (
        <>
          <Grid
            gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gridGap={{ base: '24px', md: '32px' }}
          >
            {data?.results?.map((article, index) => {
              return (
                <ArticleCard
                  key={`${article.id}-${index}`}
                  articles={article}
                  filter='mediumThreeByTwo440'
                />
              );
            })}
          </Grid>

          <Text
            fontSize='14px'
            color='#797A7A'
            textAlign='center'
            mt='48px'
            fontWeight='500'
          >
            {data?.copyright}
          </Text>
        </>
      )}
    </Box>
  );
}

export default App;
