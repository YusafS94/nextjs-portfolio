import Image from "next/image";

export default function HeaderImage() {
  return (
    <>
      <Image
        src="/mountain-scenery.jpg"
        alt="Image"
        className="rounded-md object-cover"
        width={1200}
        height={800}
      />
    </>
  );
}
