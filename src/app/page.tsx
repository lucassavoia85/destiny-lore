
import { Artigo } from "@/types/artigo";
import CardArtigo from "./components/Card";
import artigosJson from "@/data/artigos.json";

const artigos: Artigo[] = artigosJson;

export default async function Home() {
  const artigos_ordenados = [...artigos].sort((a, b) => a.ordem - b.ordem);

  return (
    <>
      <section>
        {artigos_ordenados.map((artigo) => (
          <CardArtigo key={artigo.slug} artigo={artigo} />
        ))}
      </section>
    </>
  );
}
