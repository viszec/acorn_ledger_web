import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Acorn Ledger" width={42} height={42} />
      <span className="text-3xl style-script-regular text-purple-600 pt-1 text-gradient">
        Acorn Ledger
      </span>
    </Link>
  );
}
