import React from 'react';
import { Stack, Box } from '@mui/material';
import { Videocard, Channelcard } from './';

const Videos = ({ videos,direction }) => {
  // Ensure videos is always an array, defaulting to an empty array
  const videosArray = Array.isArray(videos) ? videos : [];
  if(!videos?.length) return 'loading..';

  return (
    <Stack direction={direction || "row"}  flexWrap="wrap" justifyContent="start" gap={2}>
    
      {videosArray.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <Videocard video={item} />}
          {item.id.videoId && <Channelcard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;





// import React from 'react'
// import { Stack,Box } from '@mui/material'
// import {Videocard,Channelcard} from './'

// const Videos = ({videos}) => {
  
//   return (
   
//     <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
//       {videos.map((item, idx) => (
//         <Box key={idx}>
//           {item.id.videoId && <Videocard video={item} /> }
//           {item.id.channelId && <Channelcard channelDetail={item} />}
//         </Box>
//       ))}
//     </Stack>
//   )
// }

// export default Videos
