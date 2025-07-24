
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import { UploadDialog } from "./_components/upload-dialog";

async function Images() {

  const mockUrls = [
    "https://picsum.photos/seed/picsum/800/600",
    "https://picsum.photos/seed/picsum2/800/600",
    "https://picsum.photos/seed/picsum3/800/900",

  ];

  const images = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <div>
      <div className="flex justify-center p-4">
        <UploadDialog />
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <div className="relative aspect-video bg-zinc-900">
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                className="h-full w-full object-contain object-top"
              />
            </div>
            <div className="text-center">{image.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Plesea sign in or sign up to continue
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center text-2xl">
          Welcome to the app! You are signed in.
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
