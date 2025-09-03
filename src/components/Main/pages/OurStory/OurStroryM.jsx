import useTitle from "../../../hooks/useTitle";
import OurStory from "./OurStory";

function OurStoryM() {
  useTitle("Our Shop");
  return (
    <>
      <main>
        <OurStory />
      </main>
    </>
  );
}

export default OurStoryM;
