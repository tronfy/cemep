import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho CEMEP 2022</h1>
        <h2>
          Inscrições indeferidas:{' '}
          <a href="Indeferidas.pdf">
            veja aqui
          </a>
          <p>
          Inscrições de 15/09 a 15/10/2021 (encerradas)
        </h2>
        <h2>
          Veja o Edital completo{' '}
          <a href="Edital Vestibulinho 2022.pdf">
            aqui
          </a>
        </h2>
        <h4>(a partir da página 3)</h4>
      </main>
    </>
  )
}

export default Vestibulinho
