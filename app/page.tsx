import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Forward, Heart, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-3xl space-y-12 p-6">
        <Menu />
        <header className="text-center space-y-4">
          <section>
            <h1 className="font-semibold text-xl sm:text-5xl">Threadle</h1>
            <p className="sm:text-xl">¡Share what you want with the world!</p>
          </section>
          <section className="flex justify-center space-x-4">
            <Button>Login</Button>
            <Button className="bg-neogreen">Register</Button>
          </section>
        </header>
        <section className="space-y-4">
          <h2 className="text-center sm:text-xl">Post your threadle.</h2>
          <form className=" space-y-3">
            <Textarea placeholder="Write your threadle..."></Textarea>
            <Input placeholder="Add hashtags..."></Input>
            <Input placeholder="Complete your nickname..."></Input>
            <Button className="w-full">Publicar</Button>
          </form>
        </section>
        <section className="space-y-4">
          <h2 className="text-center sm:text-xl">Threadles from the people.</h2>
          <article className="space-y-3 rounded-md p-4 bg-lightneoblue text-black border-2 border-black shadow-neobrutal">
            <header className="flex gap-1 items-baseline border-b pb-2">
              <h3 className="text-lg font-medium">@Rodriks</h3>
            </header>
            <main>
              ¿Qué opinan sobre la última tendencia en redes sociales?
            </main>
            <footer className="flex justify-end gap-2">
              <Button
                size={"icon"}
                className="rounded-full h-8 w-8 p-1 bg-lightneoyellow"
              >
                <Heart />
              </Button>
              <Button
                size={"icon"}
                className="rounded-full h-8 w-8 p-1 bg-lightneoyellow"
              >
                <MessageCircle />
              </Button>
              <Button
                size={"icon"}
                className="rounded-full h-8 w-8 p-1 bg-lightneoyellow"
              >
                <Forward />
              </Button>
            </footer>
          </article>
        </section>
      </main>
      <footer className="text-center p-6 border-t-4 border-black bg-neoblack text-white">
        <p>Developed by @rodrigoleonel</p>
      </footer>
    </>
  );
}
