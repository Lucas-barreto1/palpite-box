import React from "react"
import Link from "next/link"
import useSWR from "swr"
import Head from 'next/head'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <Head>
        <title>Seja Bem-vindo</title>
      </Head>
      <p className='text-lg mt-12 text-center pt-20 pb-3'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
      Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='pt-10 pb-5 text-center my-12'>
        <Link href='/pesquisa'>
          <a className='md:w-96 h-16 bg-blue-400 px-20 py-6 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {data && data.showCoupon &&
        <p className='mt-12 text-center pt-20 pb-24 font-bold'>
          {data.message}
        </p>
      }
    </div >
  )
}

export default Index