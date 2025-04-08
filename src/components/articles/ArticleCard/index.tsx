import { IArticles, IFormat } from '@/types';
import { Avatar, AvatarGroup, Box, Flex, Image, Text } from '@chakra-ui/react';
import SectionTag from './SectionTag';
import { mediaMetaData, formatDate } from '@/utils';

interface Props {
  filter: IFormat;
  articles: IArticles;
}
const ArticleCard = ({ filter, articles }: Props) => {
  const { title, section, subsection, abstract, published_date, byline } = articles;
  const { metadata, caption } = mediaMetaData({ articles, filter });

  return (
    <Box
      width='100%'
      maxW={{ base: 'auto', md: '420px' }}
      border='1px solid #efefef'
      borderRadius='8px'
      p={{ base: '8px', md: '16px' }}
    >
      <Box>
        <Box>
          <Image
            width={{ base: 'auto', md: '400px' }}
            height='auto'
            src={metadata?.url}
            alt={caption}
            borderRadius='8px'
          />
        </Box>

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

        <Flex
          alignItems='center'
          gap='8px'
          pb='16px'
        >
          <AvatarGroup>
            <Avatar.Root>
              <Avatar.Fallback name={byline} />
              <Avatar.Image />
            </Avatar.Root>
          </AvatarGroup>

          <Box>
            <Text
              fontWeight='500'
              fontSize='14px'
            >
              {byline}
            </Text>

            <Text
              fontWeight='400'
              fontSize='12px'
            >
              {formatDate(published_date)}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ArticleCard;
