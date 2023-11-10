import { gql } from "@apollo/client";

export const GET_VIDEOS = gql`
  query getVideos {
    videos {
      id
      title
      url
      youTubeId
      status
    }
  }
`;
