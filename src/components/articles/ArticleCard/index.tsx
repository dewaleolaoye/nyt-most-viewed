import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { mediaMetaData, formatDate, formatByline } from '@/utils';
import SectionTag from '@/components/articles/SectionTag';
import Avatar from '@/components/articles/Avatar';
import { IArticles, IFormat } from '@/types';
interface Props {
  filter: IFormat;
  articles: IArticles;
}
const ArticleCard = ({ filter, articles }: Props) => {
  const { title, section, subsection, abstract, published_date, byline, url } = articles;
  const { metadata, caption } = mediaMetaData({ media: articles.media, filter });

  return (
    <Box
      width='100%'
      border='1px solid #efefef'
      borderRadius='8px'
      p={{ base: '8px', md: '16px' }}
      minH={{ base: 'auto', md: '585px' }}
    >
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Flex
          flexDir='column'
          justifyContent='space-between'
          height='100%'
        >
          <Box>
            <Image
              width={{ base: 'auto', md: '100%' }}
              height='auto'
              src={metadata?.url}
              alt={caption}
              borderRadius='8px'
              border='1px solid #efefef'
            />

            <Box my={{ base: '16px' }}>
              <SectionTag title={`${section} ${subsection ? `- ${subsection}` : ''}`} />

              <Text
                fontWeight='600'
                fontSize={{ base: '20px', md: '20px' }}
                mb='8px'
              >
                {title}
              </Text>

              <Text
                fontWeight='400'
                fontSize='14px'
              >
                {abstract}
              </Text>
            </Box>
          </Box>

          <Flex
            alignItems='center'
            gap='8px'
            pb='16px'
          >
            <Avatar name={byline ? formatByline(byline) : ''} />

            <Box>
              <Text
                fontWeight='500'
                fontSize='14px'
              >
                {byline ? formatByline(byline) : 'N/A'}
              </Text>

              <Text
                fontWeight='400'
                fontSize='12px'
              >
                {formatDate(published_date)}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </a>
    </Box>
  );
};

export default ArticleCard;
