import Link from 'next/link';

export default function Services() {
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">🛠 Our Services</h1>
      <ul className="mt-4 list-disc list-inside">
        <li>Web Design / Development</li>
        <li>UI/UX Design</li>
      </ul>
      <Link href="/" className="mt-8 block text-blue-500 underline">Back Home</Link>
    </main>
  );
}