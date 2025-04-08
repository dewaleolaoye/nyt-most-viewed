import { IArticles, IFormat } from '@/types';
import { Avatar, AvatarGroup, Box, Flex, Image, Text } from '@chakra-ui/react';
import SectionTag from './SectionTag';
import { mediaMetaData, formatDate } from '@/utils';

interface Props {
  filter: IFormat;
  articles: IArticles;
}
const ArticleCard = ({ filter, articles }: Props) => {
  const { title, section, subsection, abstract, published_date, byline, url } = articles;
  const { metadata, caption } = mediaMetaData({ articles, filter });

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Box
        width='100%'
        maxW={{ base: 'auto', md: '420px' }}
        border='1px solid #efefef'
        borderRadius='8px'
        p={{ base: '8px', md: '16px' }}
        minH={{ base: 'auto', md: '585px' }}
      >
        <Flex
          flexDir='column'
          justifyContent='space-between'
          height='100%'
        >
          <Box>
            <Image
              width={{ base: 'auto', md: '400px' }}
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
                {byline ? byline : 'N/A'}
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
      </Box>
    </a>
  );
};

export default ArticleCard;
