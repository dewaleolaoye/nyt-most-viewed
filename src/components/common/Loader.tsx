import { Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Spinner
      size='sm'
      role='loader'
      color='#fff'
      css={{ '--spinner-track-color': '#131316' }}
    />
  );
};

export default Loader;
