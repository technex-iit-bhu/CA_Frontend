
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
    {/* add <Navbar /> here */}
    <main>{children}</main>
    <Footer />
    </>
  )
}