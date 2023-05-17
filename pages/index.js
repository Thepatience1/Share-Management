import Heator from "../components/shareholder/Heator"
import Aboutus from "../components/Aboutus"
import Contact from "../components/Contact"
import Section from "../components/Section"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PostedNews from "../components/PostedNews"

function Index() {
  
    return <>
    <>
    <div>
    <Heator>
    <Section/>
    <Aboutus/>
    <Contact/>
    <PostedNews />
    </Heator>
    </div>
     </>         
    </>
}
export default Index

Index.getLayout = function pageLayout(page)
{
  return(
    <>
   
    {page}
    
    </>
  )
}