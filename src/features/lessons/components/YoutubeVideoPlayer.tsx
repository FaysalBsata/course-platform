'use client';
import YouTube from 'react-youtube';
export default function YoutubeVideoPlayer({
  videoId,
  onFinishedVideo,
}: {
  videoId: string;
  onFinishedVideo?: () => void;
}) {
  return (
    <YouTube
      videoId={videoId}
      className="h-full w-full"
      opts={{ width: '100%', height: '100%' }}
      onEnd={onFinishedVideo}
    />
  );
}
