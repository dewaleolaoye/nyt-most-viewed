import { Box, Text } from '@chakra-ui/react';

interface Props {
  title: string;
}
const SectionTag = ({ title }: Props) => {
  return (
    <Box
      bg='#131316'
      width='fit-content'
      padding='8px 16px'
      borderRadius='100px'
      my='16px'
    >
      <Text
        fontWeight='500'
        fontSize='14px'
        textAlign='center'
        color='#F0F0F0'
      >
        {title}
      </Text>
    </Box>
  );
};

export default SectionTag;
