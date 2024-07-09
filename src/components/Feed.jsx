import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchApi } from "../utils/fetchapi";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;







// import React, { useEffect, useState } from "react";
// import { Box, Stack, Typography } from "@mui/material";

// import fetchApi from "../utils/fetchApi";
// import Videos from "./Videos";
// import Sidebar from "./sidebar";

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState("New");
//   const [videos, setVideos] = useState([]);


//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setVideos(null);
//         const data = await fetchApi(selectedCategory);
//         setVideos(data.items);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, [selectedCategory]);

//   return (
//     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
//       <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
//         <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
//         <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
//           Copyright © 2022 JSM Media
//         </Typography>
//       </Box>

//       <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
//         <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
//           {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
//         </Typography>

//         <Videos videos={videos} />
//       </Box>
//     </Stack>
//   );
// };

// export default Feed;
