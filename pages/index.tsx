import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function result (x: number, y:number): string {
  return (
    `${x + y} é o valor`
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  )
}
