import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import OurStory from "../src/components/Main/pages/OurStory/OurStory";
import Section from "../src/components/Main/pages/OurStory/Section";
function OurStoryLayout() {
  return (
    
     <>
        <Header />
            <main>
                <OurStory />
            </main>
        <Footer />
     </>
  )
}

export default OurStoryLayout