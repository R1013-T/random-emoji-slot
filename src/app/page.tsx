import Image from "next/image";
import Slot from "./components/slot";

export default function Home() {
  return (
    <main className="h-screen w-full border border-red-300 flex items-center justify-center gap-5 flex-col">
      <h1>Random Emoji Slot</h1>
      <Slot />
    </main>
  );
}
