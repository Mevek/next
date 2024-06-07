import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className=" text-blue-400 text-5xl font-bold">Mikołaj Łysio</p>
      <p className="text-green-300 text-3xl font-bold" >Nr albumu: 87203</p>

      <Link href="/strona">Przejdź na drugą stronę</Link>
      <div className="mt-2">
        <Button className="bg-white hover:bg-red-700">Kliknij</Button>
      </div>

    </div>
  );
}
