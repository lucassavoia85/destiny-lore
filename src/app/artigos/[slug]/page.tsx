import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Artigo } from "@/types/artigo";
import artigosJson from "@/data/artigos.json";


type Props = {
  params: {
    slug: string;
  };
};

const artigos: Artigo[] = artigosJson;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
  };
}

export async function generateStaticParams() {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <article>
      <h1>{artigo.titulo}</h1>
      <p>{artigo.descricao}</p>
      <Image src={artigo.imagem} alt={artigo.titulo} width={800} height={450} />
      <div>
        <p>
          <strong>Autor:</strong> {artigo.autor}
        </p>
        <p>
          <strong>Data:</strong> {artigo.data}
        </p>
      </div>
      <p>{artigo.conteudo}</p>
      <Link href="/artigos">Voltar para artigos</Link>
    </article>
  );
}
