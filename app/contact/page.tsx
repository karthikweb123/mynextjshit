import Link from 'next/link';

export default function Contact() {
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">ℹ️ Contact Us</h1>
      <p className="mt-4 text-gray-600">This is the contact route.</p>
      <Link href="/" className="mt-8 block text-blue-500 underline">Back Home</Link>
    </main>
  );
}