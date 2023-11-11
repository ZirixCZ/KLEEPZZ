import { gql } from "@apollo/client";

export const PROCESS_YOUTUBE_VIDEO = gql`
  mutation processYoutubeVideo($req: VideoRequest!) {
    processYoutubeVideo(req: $req) {
      id
      title
      url
    }
  }
`;
