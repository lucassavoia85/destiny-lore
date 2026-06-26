import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Este é um projeto acadêmico sem fins lucrativos. Destiny, Destiny 2 e Bungie são marcas registradas
        e de propriedade intelectual da Bungie, Inc. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;