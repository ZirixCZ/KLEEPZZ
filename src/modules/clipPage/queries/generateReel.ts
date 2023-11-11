import { gql } from "@apollo/client";

export const GENERATE_REEL = gql`
  mutation generateReel($req: ReelRequest!) {
    generateReel(req: $req) {
      id
      videoId
      URL
    }
  }
`;
