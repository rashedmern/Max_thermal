export interface VideoSource {
  src: string;
  type: string;
}

export interface VideoConfig {
  sources: VideoSource[];
  poster?: string;
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
  intersectionThreshold: number;
}

export const HERO_VIDEO_CONFIG: VideoConfig = {
  sources: [
    { src: "/videos/ugc_video.mp4", type: "video/mp4" },
    { src: "/video/ugc_video.mp4", type: "video/mp4" },
    {
      src: "https://assets.mixkit.co/videos/preview/mixkit-factory-conveyor-belt-in-a-production-line-43890-large.mp4",
      type: "video/mp4",
    },
  ],
  autoplay: true,
  muted: true,
  loop: true,
  intersectionThreshold: 0.2,
};
