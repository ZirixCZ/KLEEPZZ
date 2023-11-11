import { gql } from "@apollo/client";

export const GET_VIDEOS = gql`
  query getVideos {
    getVideos {
      id
      title
      url
      youTubeId
      status
      thumbnail
      clips {
        Id
        VideoId
        thumbnail
        url
      }
    }
  }
`;
