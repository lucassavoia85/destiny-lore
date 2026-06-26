import styles from "./header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
<Image src="/images/logo.png" alt="Destiny Lore" width={200} height={80} priority/>
        <p className={styles.description}><strong>
          Bem-vindo ao Destiny Lore! Aqui você encontrará informações detalhadas
          sobre o universo do jogo Destiny.
        </strong></p>
      </div>
    </header>
  );
};

export default Header;