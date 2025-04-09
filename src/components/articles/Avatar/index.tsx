import { Avatar as ChakraAvatar, AvatarGroup } from '@chakra-ui/react';

interface Props {
  name: string;
}
const Avatar = ({ name }: Props) => {
  return (
    <AvatarGroup>
      <ChakraAvatar.Root>
        <ChakraAvatar.Fallback name={name} />
        <ChakraAvatar.Image />
      </ChakraAvatar.Root>
    </AvatarGroup>
  );
};

export default Avatar;
