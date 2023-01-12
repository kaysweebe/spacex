import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Badge, Button } from '@chakra-ui/react';
import { RocketData } from './Rockets';

const RocketCard: React.FC<{ rocket: RocketData }> = ({ rocket }) => {
  return (
    <div key={rocket.id}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" backgroundColor={'purple.800'} m="5">
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <a href={rocket.wikipedia}>
              <Badge borderRadius="full" px="5" colorScheme="teal">
                {rocket.name}
              </Badge>
            </a>
          </Box>

          <Box>
            <Box as="span" color="gray.300" fontSize="sm">
              {rocket.description}
            </Box>

            <Button colorScheme="teal" variant="outline" rightIcon={<ArrowForwardIcon />} formAction={rocket.wikipedia}>
              Read more
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default RocketCard;
