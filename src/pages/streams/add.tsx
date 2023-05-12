import Link from "next/link";

export default function AddLanguageStreams() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Add Language Streams</h1>
      <Link href="/">Back</Link>

      <button className="">Add Stream</button>
    </div>
  );
}
