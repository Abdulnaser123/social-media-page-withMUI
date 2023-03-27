import {Box} from '@mui/system';
import React from 'react';
import Post from './Post';

const Feed = () => {
  return (
    <Box flex="3" p={1} sx={{display: {xs: 'block', sm: 'block'}}}>
      {[1, 2, 3, 4].map(() => (
        <Post />
      ))}
    </Box>
  );
};

export default Feed;
