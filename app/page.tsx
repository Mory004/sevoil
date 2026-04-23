import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Salut Je suis un nouveau sur Next.js!
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Je viens darriver merci.
      </p>
      <Image
        src="/nextjs-logo.png"
        alt="Next.js Logo"
        width={200}
        height={200}
        className="mt-6"
      />
    </div>
  );
}
