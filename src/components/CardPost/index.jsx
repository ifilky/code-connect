import Image from "next/image";
import Avatar from "../Avatar";

import styles from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card}>
        <header className={styles.header}>
          <figure>
            <Image
              width={438}
              height={133}
              src={post.cover}
              alt={`Capa do post de titulo: ${post.title}`}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar name={post.author.username} imageSrc={post.author.avatar} />
        </footer>
      </article>
    </Link>
  );
};

export default CardPost;
