export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Optimized</h1>
      <picture>
        <source
          type="image/avif"
          width="1184"
          height="1184"
          srcSet="/lazar-optimized.avif"
        />
        <source
          type="image/webp"
          width="1184"
          height="1184"
          srcSet="/lazar-optimized.webp"
        />
        <img width="1184" height="1184" src="/lazar-optimized.jpg" />
      </picture>
    </main>
  );
}
