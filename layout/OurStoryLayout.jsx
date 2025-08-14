import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import useTitle from "../src/components/hooks/useTitle";
import OurStory from "../src/components/Main/pages/OurStory/OurStory";

function OurStoryLayout() {
  useTitle("Our Shop")
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