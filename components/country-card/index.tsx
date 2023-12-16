import Image from 'next/image';
import Link from 'next/link';

export default function CountryCard({
  name,
  ptName,
  flag,
  flagAlt,
}: {
  name: string;
  ptName: string;
  flag: string;
  flagAlt: string;
}) {
  return (
    <Link href={`/pais/${name}`}>
      <article
        key={name}
        className="h-64 min-w-full p-2 bg-white border-2 rounded-lg hover:border-indigo-200 transition-all hover:shadow-lg cursor-pointer"
      >
        <div className="relative w-full h-32 p-2 overflow-hidden rounded-lg">
          <Image src={flag} alt={flagAlt} fill className="object-cover" />
        </div>
        <p className="font-bold text-lg text-center mt-2">{ptName}</p>
      </article>
    </Link>
  );
}
