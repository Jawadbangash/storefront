import Image from "next/image";
import styles from "./page.module.css";
import "./app.css"

export default function Home () {
  return(
    <main>
      <div>
        <header class="appHeader">
            <h1 >Hello World</h1>
            <p>Login/Signup</p>
        </header>
        <nav>
          <a href="https://www.google.com">Google</a>
          <a>Women</a>
          <a>Men</a>
          <a>Children</a>
          <a>House</a>
        </nav>
      </div>
    </main>
  )
}
