import imgURL from "../Globe.png"
export default function Header() {
  return (
    <header>
      <img src={imgURL} alt="globe" />
      <h1>Header</h1>
    </header>
  )
}