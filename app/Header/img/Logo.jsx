import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/lws-kitchen.png"
        width={100}
        height={100}
        alt="Logo"
        className="h-10"
      />
    </>
  );
}
