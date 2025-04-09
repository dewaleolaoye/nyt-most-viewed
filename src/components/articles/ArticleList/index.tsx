import { Box, Center, Grid, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/api';
import Loader from '@/components/common/Loader';
import ArticleCard from '@/components/articles/ArticleCard';
import { IPeriod } from '@/types';

interface Props {
  period: IPeriod;
}
const ArticleList = ({ period }: Props) => {
  const { data, isLoading, isSuccess, error, isError } = useQuery({
    queryKey: ['articles', period],
    queryFn: () => getArticles(period),
  });

  return (
    <Box>
      {isLoading && <Loader />}

      {isError && (
        <Center flexDir='column'>
          <Text
            fontSize='20px'
            textAlign='center'
          >
            {String(error)}{' '}
          </Text>
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
};

export default ArticleList;
