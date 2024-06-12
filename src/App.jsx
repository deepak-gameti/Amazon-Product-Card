import Hero from './components/Hero'

const headings = ["Logitech MX Master 3S", "Apple Pencil (2nd Gen)", "Zebronics Zeb-Transformer", "Portronics Toad 23 Wireless Mouse"]
const images = []
// const description = {["8,000 DPI", "5 Programmale Buttons"], ["Intuitive touch surface","Designed for iPad Pro"],["Intuitive touch surface","Designed for iPad Pro"],["Wireless Mouse 2.4GHz","Optical Orientation"]}

function App() {

  return (
    <>
      <Hero heading={headings} />
    </>
  )
}

export default App
