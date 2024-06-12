import Hero from "./components/Hero";
import mouse from './assets/mouse.png'
import apple from './assets/apple.png'
import keyboard from './assets/keyboard.png'
import mouse2 from './assets/mouse2.png'

const cards = [
  {
    h1: "Logitech MX Master 35",
    img: mouse,
    features: ["8,000 DPI", "5 Programmable Buttons"],
    prise: 12495,
  },
  {
    h1: "Apple Pencil (2nd Gen)",
    img: apple,
    features: ["Intuitive touch surface", "Designed for iPad Pro"],
    prise: 11900,
  },
  {
    h1: "Zebronics Zeb-Transformer",
    img: keyboard,
    features: ["Intuitive touch surface", "Designed for iPad Pro"],
    prise: 1599,
  },
  {
    h1: "Logitech MX Master 35",
    img: mouse2,
    features: ["Wireless Mouse 2.4GHz", "Optical Orientation"],
    prise: 599,
  }
];

function App() {
  return (
    <>
      <Hero card={cards} />
    </>
  );
}

export default App;
