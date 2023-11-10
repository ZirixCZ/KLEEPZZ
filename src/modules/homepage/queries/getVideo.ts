import { gql } from "@apollo/client";

export const GET_VIDEO = gql`
  query getVideo {
    video {
      id
      title
      url
      youTubeId
      status
    }
  }
`;
