import logger from "@/logger"

import { remark } from 'remark';
import html from 'remark-html';

import styles from './page.module.css';
import Image from "next/image";
import Avatar from "@/components/Avatar";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug) {

  try {

    const post = await db.post.findFirst({
      where: {
        slug,
      },
      include: {
        author: true,
      }
    })

    if (!post) {
      throw new Error(`O post de slug ${slug} não foi encontrado!`)
    }

    const processedContent = await remark()
      .use(html)
      .process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml

    return post;
  } catch (error) {
    logger.error('Error ao buscar post por slug: ', {
      slug,
      error
    })
  }
  redirect('/not-found')
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
    <h3 className={styles.subtitle}>Código:</h3>
    <div className={styles.code}>
      <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
    </div>
  </>
}

export default PagePost;