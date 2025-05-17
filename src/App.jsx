import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import FooterSection from './components/FooterSection'

function App() {
 
  return (
    <>
      <Navbar />
      <AppRoutes />
      <FooterSection/>
    </>
  )
}

export default App
