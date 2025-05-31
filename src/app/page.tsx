import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return (
    <div className={`justify-self-center w-full pt-[25vh]`}>
      <main className="text-center">
        <h1 className="text-3xl font-bold">Daniel Ochoa</h1>
        Software Engineer
      </main>
    </div>
  );
}
