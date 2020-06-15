import React, { useState } from "react";

import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";

const App = () => {
  const [formData, setFormData] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: `<API KEY>`,
        q: formData,
      },
    });
    console.log(response.data.items);

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <Grid container justify="center" spacing={12}>
      <Grid item xs={11}>
        <Grid container spacing={6}>
          <Grid item md={12} sm={12}>
            {/* Search Bar */}
            <SearchBar
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
              setFormData={formData}
            />
          </Grid>

          <Grid item md={8} sm={12}>
            {/* Video detail */}
            <VideoDetail video={selectedVideo} />
          </Grid>

          <Grid item md={4} sm={12}>
            {/* video list */}
            <VideoList videos={videos} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
