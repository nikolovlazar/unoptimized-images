import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>next/image</h1>
      <Image
        width={1184}
        height={1184}
        alt="Lazar's portrait"
        src="/lazar.jpg"
      />
    </main>
  );
}
