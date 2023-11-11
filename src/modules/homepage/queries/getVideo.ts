import { gql } from "@apollo/client";

export const GET_VIDEO = gql`
  query getVideo($internalId: ID!) {
    getVideo(internalId: $internalId) {
      id
      title
      url
      youTubeId
      status
      clips {
        Id
        VideoId
        thumbnail
        url
      }
    }
  }
`;
