import Link from "next/link";
import { PHONE_NUMBER, PHONE_NUMBER_URI } from "@/lib/config";
import { PhoneIcon } from "../icons";

export function StickyCTA() {
  return (
    <Link
      href={`tel:${PHONE_NUMBER_URI}`}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-mansion-gold text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition hover:bg-mansion-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mansion-gold sm:hidden"
      aria-label={`Call a Phoenix 1031 exchange expert at ${PHONE_NUMBER}`}
    >
      <PhoneIcon className="h-6 w-6" aria-hidden="true" />
    </Link>
  );
}
