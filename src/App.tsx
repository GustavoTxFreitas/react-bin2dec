import styles from "./styles/App.module.scss"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Content } from "./components/Content"

export function App() {
  return (
    <main className="container">
      <Header />
      <Content />     
      <Footer />
    </main>
  )
}
