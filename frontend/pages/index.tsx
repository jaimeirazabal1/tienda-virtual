import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import {get_articles} from '../services/Articles';
import {Article} from '../interfaces/Articles'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    getArticles();
  },[])

  const getArticles = async () => {
    setArticles(await get_articles());
  }


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div >
          {
            articles && articles.length ? articles.map( (article:Article )=> (
              <div key={`article_id_${article.id}`}>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </div>
            )
            ): null
          }
        </div>
      </main>
    </>
  )
}