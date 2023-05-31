import Image from 'next/image'
import styles from './page.module.css'
import AddToDoForm from './addToDoForm'

export default function Home() {
  return (
    <div className="container">
      <AddToDoForm></AddToDoForm>
      <section className="todosContainer">

      </section>
    </div>
  )
}
