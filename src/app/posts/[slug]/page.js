import logger from "@/logger"

import { remark } from 'remark';
import html from 'remark-html';

import styles from './page.module.css';
import Image from "next/image";
import Avatar from "@/components/Avatar";

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`
  const response = await fetch(url)
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
    return {}
  }
  logger.info('Posts obtidos com sucesso')
  const data = await response.json()
  if (data.length == 0) {
    return {}
  }

  const post = data[0];

  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();
  post.markdown = contentHtml

  return post;
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug) //pega o param [slug] no diretório posts
  return <>
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
  </>
}

export default PagePost;