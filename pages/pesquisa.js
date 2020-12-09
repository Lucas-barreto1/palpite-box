import React, { useState } from 'react'
import { formatWithValidation } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'


const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    WhatsApp: '',
    Nota: 5,
    Sugestao: ''
  })
  const notas = [0, 1, 2, 3, 4, 5]

  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)

    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <Head>
        <title>Pesquisa</title>
      </Head>
      <h1 className='text-center my-5 font-bold text-2xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes. <br />
Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!sucess && <div className='w-1/5 mx-auto '>
        <label className='font-bold'>Seu Nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Digite seu nome:' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>E-mail:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='example@gmail.com' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='(44)9.9999-9999' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
        <label className='font-bold'>Sua crítica ou sugestão:</label>
        <textarea type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Deixe aqui sua crítica ou sugestão' onChange={onChange} name='Sugestão' value={form.Sugestão} />
        <label className='font-bold'>Nota:</label>
        <div className='flex py-6'>
          {notas.map(nota => {
            return (
              <label className='text-center block w-1/6'>
                {nota} <br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} />
              </label>)
          })}
        </div>
        <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow my-3' onClick={save}>Salvar</button>
      </div>}
      {
        sucess &&
        <div className='w-1/5 mx-auto'>
          <div className='text-center mb-6 bg-green-300 border-t border-b border-green-700 text-green-800 px-4 py-3'>
            <p className='font-bold'>Obrigado por contribuir com sua sugestão ou crítica!. <br /> </p>
            <a>Como agradecimento temos um cupom especial para você!.</a>
          </div>
          {
            retorno.showCoupon && <div className='bg-blue-400 bg-opacity-90  text-center border p-3 mb-4'>
              Seu Cupom <br />
              <span className='font-bold text-2xl'>{retorno.Cupom}</span>
            </div>
          }
          {
            retorno.showCoupon && <div className='bg-yellow-500 bg-opacity-80 text-center border p-3 mb-4'>
              <span className='font-bold block mb-2'>{retorno.Promo}</span>
              <br />
              <span className='italic'>Tire uma foto ou print desta tela e apresente ao garçom!.</span>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Pesquisa