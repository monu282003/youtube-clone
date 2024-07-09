import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, Channelcard } from './';
import fetchApi from "../utils/fetchapi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch channel details
        const channelData = await fetchApi(`channels?part=snippet,statistics&id=${id}`);
        console.log('Channel Detail API response:', channelData); // Log API response
        if (channelData?.items && channelData.items.length > 0) {
          setChannelDetail(channelData.items[0]);
        } else {
          console.error('No channel detail found');
        }

        // Fetch videos
        const videosData = await fetchApi(`search?channelId=${id}&part=snippet&order=date`);
        console.log('Videos API response:', videosData); // Log API response
        if (videosData?.items) {
          setVideos(videosData.items);
        } else {
          console.error('No videos found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <Channelcard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};


export default ChannelDetail;
