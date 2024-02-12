import { PerfObserver } from "@/components/perf-observer";
import { Photo } from "@/components/photo";

const photos = Array.from(new Array(23))
  .map((_, i) => i + 1)
  .map((i) => `/optimized/${i}.webp`);

export default function Home() {
  return (
    <main className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-6 space-y-6 overflow-x-hidden overflow-y-auto px-6">
      <PerfObserver type="largest-contentful-paint" />
      {photos.map((photo) => (
        <Photo key={photo} src={photo} />
      ))}
    </main>
  );
}
