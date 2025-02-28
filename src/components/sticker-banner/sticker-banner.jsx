/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k9zPjDjzsmz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function StickerBanner() {
  return (
    <section className="w-full container bg-white py-8 md:py-10 lg:py-16 relative overflow-hidden">
      <Image
        src="/sticker-1.png"
        width={150}
        height={150}
        alt="Sticker 1"
        className="absolute top-0 right-0 transform -rotate-12"
      />
      <Image
        src="/sticker-2.png"
        width={200}
        height={200}
        alt="Sticker 2"
        className="absolute right-44 -bottom-5"
      />
      <Image
        src="/sticker-3.png"
        width={300}
        height={300}
        alt="Sticker 3"
        className="absolute -top-6 transform rotate-12 hidden sm:block"
      />

      <div className="container px-4 md:px-6 z-20 relative">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl w-fit m-auto font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl rounded-md bg-[#ffffff8c] shadow-[0_0_10px_#00000033] shadow-white">
            Submit Your Sticker Idea!
          </h2>
          <p className="text-lg text-secondary md:text-xl rounded-md bg-[#ffffff8c] shadow-[0_0_10px_#00000033] shadow-white">
            Enter our sticker contest for a chance to win a one month
            subscription to Frontend Masters! Submit your entry by September
            30th, 2024.
          </p>

          <Link
            href="https://forms.gle/AaUHsmVZ9q7ZPKCj7"
            target="_blank"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-secondary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Submit Entry
          </Link>
        </div>
      </div>
    </section>
  );
}
