import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <main className="">
      <div className="flex gap-6">
        <div>
          <h1>Home</h1>
          <Button>This is a Shadcn button</Button>
        </div>
        <div>
          <div className="w-[450px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/nasa-header.jpg"
                alt="Image"
                className="rounded-md object-cover"
                width={1200}
                height={800}
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </main>
  );
}
