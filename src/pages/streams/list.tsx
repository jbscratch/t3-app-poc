import Link from "next/link";

export default function AddLanguageStreams() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Available Language Streams</h1>
      <Link href="/">Back</Link>

      <ul>
        <li>English (Mock)</li>
        <li>French (Mock)</li>
        <li>Russian (Mock)</li>
      </ul>
    </div>
  );
}
