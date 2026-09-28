import { Artigo } from "@/types/artigo";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

type Props = {
  artigo: Artigo;
};

const CardArtigo = ({ artigo }: Props) => {
  const { titulo, descricao, imagem } = artigo;

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{titulo}</h1>
      <p className={styles.description}>{descricao}</p>
      <Image
        className={styles.cardImg}
        src={imagem}
        alt={titulo}
        width={600}
        height={400}
      />
      <Link className={styles.button} href={`/artigos/${artigo.slug}`}>
        Ler artigo
      </Link>
    </div>
  );
};

export default CardArtigo; 