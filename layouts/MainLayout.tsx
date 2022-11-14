import { Header } from "../components/header/Header";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.photoSchool}>
        <img src="/img/PhotoSchool.jpg" alt="PhotoSchool" />
      </div>
      <>{children}</>
    </div>
  );
};
