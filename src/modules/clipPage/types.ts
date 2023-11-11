export interface ClipInterface {
  id: number;
  VideoId: number;
  thumbnail: string;
  url: string;
}

export interface SelectedClipsInterface {
  id: number;
  checked: boolean;
}


export interface VideoInterface {
  id: string;
  url: string;
  title: string;
  youtubeId: string;
  status: string;
  description: string;
  thumbnailUrl: string;
  Clips: ClipInterface[];
}
