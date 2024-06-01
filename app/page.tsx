import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-row items-center justify-around gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={300}
            src="https://nextui.org/images/hero-card.jpeg"
            width={300}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">El alcohol desnaturaliza las proteinas de los alimentos</p>
          </CardFooter>
        </Card>
      </div>
      <div className="inline-block max-w-lg text-center justify-center">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={300}
            src="https://nextui.org/images/hero-card.jpeg"
            width={300}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Este es algún consejo sobre alergias alimentarias</p>
          </CardFooter>
        </Card>
      </div>
      <div className="inline-block max-w-lg text-center justify-center">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={300}
            src="https://nextui.org/images/hero-card.jpeg"
            width={300}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Este es algún consejo sobre alergias alimentarias</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
