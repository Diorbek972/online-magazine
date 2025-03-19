// or less ideally
import 'bootstrap/dist/css/bootstrap.min.css';
// css
import './App.css'
// componentalar
import NavbarSection from './components/NavbarSection'
import HeaderSection from './components/HeaderSection';
import FlashSales from './components/FlashSales';

function App() {

  return (
    <>
    {/* navbar sektion */}
      <NavbarSection/>
      {/* header section */}
      <HeaderSection/>
      {/* flash sales */}
      <FlashSales/>
    </>
  )
}

export default App
