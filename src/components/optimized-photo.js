import { FiChevronDown, FiShare, FiMoreHorizontal } from "react-icons/fi";
import { Button } from "./ui/button";

export const OptimizedPhoto = ({ src }) => (
  <div className="relative group rounded-lg overflow-hidden">
    <div className="hidden group-hover:flex absolute inset-0 flex-col justify-between bg-black bg-opacity-50 p-6">
      <div className="flex justify-between">
        <Button
          variant="ghost"
          className="flex gap-2 items-center text-white text-md font-semibold"
        >
          Profile
          <FiChevronDown />
        </Button>
        <Button className="rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold">
          Save
        </Button>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" className="rounded-full size-10 p-0">
          <FiShare className="size-4" />
        </Button>
        <Button variant="secondary" className="rounded-full size-10 p-0">
          <FiMoreHorizontal className="size-4" />
        </Button>
      </div>
    </div>
    <picture className="[content-visibility:auto]">
      <source type="image/avif" srcSet={`/optimized/${src}.avif`} />
      <img alt="A photo" src={`/optimized/${src}.webp`} loading="lazy" />
    </picture>
  </div>
);
