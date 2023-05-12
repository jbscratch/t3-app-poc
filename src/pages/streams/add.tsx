import Link from "next/link";
import { useState } from "react";

export default function AddLanguageStreams() {
  const [counter, setCounter] = useState(0);
  const [name, hugo] = useState("Bob");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Add Language Streams</h1>
      <Link href="/">Back</Link>

      <button
        onClick={() => {
          hugo("Hugo");
          setCounter(counter + 1);
        }}
        className="rounded-full border-2 border-indigo-500 bg-gradient-to-b from-[#2e026d] to-[#15162c] p-3 text-indigo-100"
      >
        Add Stream for {name} - {counter}
      </button>
    </div>
  );
}
