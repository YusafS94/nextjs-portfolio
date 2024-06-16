import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeaderImage from "@/components/ui/header-img";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto my-12">
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Heading
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Subtitle
          </h2>
          <Button>This is a Shadcn button</Button>
        </div>
        <div>
          <div className="">
            <div className="hidden md:block">
              <HeaderImage />
            </div>
            <div className="md:hidden block">
              <Image
                src="/trees.jpg"
                alt="Image"
                className="rounded-md object-cover w-4/5 mx-auto"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/nasa-header.jpg"
                alt="Image"
                className="rounded-md object-cover"
                width={1200}
                height={800}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/nasa-header.jpg"
                alt="Image"
                className="rounded-md object-cover"
                width={1200}
                height={800}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/nasa-header.jpg"
                alt="Image"
                className="rounded-md object-cover"
                width={1200}
                height={800}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
