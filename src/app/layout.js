import { Prompt } from 'next/font/google'
import { Aside } from '@/components/Aside'
import './globals.css'
import { SearchForm } from '@/components/SearchForm'

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para devs!',
}

const prompt = Prompt({
  weight: ['400', '400', '600'],
  subsets: ['latin'],
  display: 'swap', //O valor swap é um truque mágico que diz ao navegador: "Ei, use a fonte de fallback primeiro e depois troque pela fonte do Google assim que ela estiver pronta!" Isso evita que os usuários vejam aquele efeito desagradável de texto invisível enquanto a fonte está carregando.
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className="main-content">
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
