import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Video, X } from "lucide-react";

interface TrainingVideo {
  id: string;
  title: string;
  description: string;
  driveFileId: string;
  thumbnail?: string;
}

const trainingVideos: TrainingVideo[] = [
  {
    id: "1",
    title: "Introduction",
    description: "Get started with SAP Business Technology Platform basics",
    driveFileId: "1GYMDvvqbkoieJvLWc81B82iOAeWzT9y0",
  },
  {
    id: "2",
    title: "What is CAPM",
    description: "Cloud Application Programming Model - SAP BTP Training",
    driveFileId: "1Pucb3K1MBBAoLWiuHcEEm-4SJFgZBApM",
  },
  {
    id: "3",
    title: "Create First Project",
    description: "Build your first project in Cloud Application Programming Model",
    driveFileId: "1EkGiVMu69s07wtC4VbalUy53XGhaZoO1",
  },
];

const TrainingVideosSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlayVideo = (driveFileId: string) => {
    setActiveVideo(driveFileId);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="training-videos" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4" />
            Free Training Samples
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sample Training Videos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a preview of our comprehensive SAP training content. Watch these free samples to experience our teaching style.
          </p>
        </div>

        {/* Embedded Video Player */}
        {activeVideo && (
          <div className="mb-8 animate-fade-in">
            <div className="relative max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl">
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video">
                <iframe
                  src={`https://drive.google.com/file/d/${activeVideo}/preview`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Training Video"
                />
              </div>
            </div>
          </div>
        )}

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {trainingVideos.map((video) => (
              <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className={`bg-card border-border/50 overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 ${
                    activeVideo === video.driveFileId ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    {/* Video Thumbnail / Preview Area */}
                    <div 
                      className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                      onClick={() => handlePlayVideo(video.driveFileId)}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="relative z-10 w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        {activeVideo === video.driveFileId ? 'Playing' : 'Preview'}
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {activeVideo ? 'Click another video to switch, or close the player above' : 'Swipe or use arrows to explore more videos'}
        </p>
      </div>
    </section>
  );
};

export default TrainingVideosSection;
