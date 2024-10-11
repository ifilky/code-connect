import Image from "next/image";
import Avatar from "../Avatar";

import styles from "./cardpost.module.css";
import Link from "next/link";
import { incrementThumbsUp } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";

export const CardPost = ({ post }) => {

  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
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
        <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
          </form>
          <p>
            {post.likes}
          </p>
        </div>
        <Avatar name={post.author.username} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
};

export default CardPost;
