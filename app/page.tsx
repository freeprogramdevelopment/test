import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/logo.png"
        alt="LV Studio"
        width={320}
        height={160}
        priority
        className="h-auto w-full max-w-[320px] object-contain"
      />
    </main>
  );
}
