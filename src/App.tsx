import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/api';
import Loader from '@/components/common/Loader';
import ArticleCard from '@/components/articles/ArticleCard';
import { useState } from 'react';
import FilterSelect from './components/articles/FilterSelect';

function App() {
  const [period, setPeriod] = useState(7);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['articles', period],
    queryFn: () => getArticles(period),
  });

  return (
    <Box
      maxWidth={{ base: '1280px', md: '1480px' }}
      mx='auto'
      padding='24px'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
        mb='24px'
      >
        <Text
          as='h1'
          mb='32px'
          fontSize='24px'
          fontWeight='700'
        >
          Most Viewed Articles
        </Text>

        <Box width='300px'>
          <FilterSelect
            onValueChange={({ value }) => {
              setPeriod(Number([value[0]]));
            }}
          />
        </Box>
      </Flex>

      <Box>
        {isLoading && <Loader />}

        <Grid
          gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gridGap={{ base: '24px', md: '32px' }}
        >
          {isSuccess &&
            data?.results?.map((article, index) => {
              return (
                <ArticleCard
                  key={`${article.id}-${index}`}
                  articles={article}
                  filter='mediumThreeByTwo440'
                />
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
