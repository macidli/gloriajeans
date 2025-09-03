import React, { useEffect, useState } from "react";
import Section from "./Section";
import CoffeeAPI from "../../../Services/CoffeeAPI";
import OurStorySkeleton from "./OurStorySkeleton";

function OurStory() {
  const [sectionsData, setSectionsData] = useState([]);
  const coffeeAPI = new CoffeeAPI();

  useEffect(() => {
    const fetchSections = async () => {
      const data = await coffeeAPI.getSectionsData();
      setSectionsData(data);
    };
    fetchSections();
  }, []);

  if (!sectionsData.length) {
    return <OurStorySkeleton reverse={false} paragraphsCount={4}  />; 
  }

  return (
    <>
      {sectionsData.map((sec, i) => (
        <Section
          key={i}
          title={sec.title}
          paragraphs={sec.paragraphs}
          image={sec.image}
          reverse={sec.reverse}
          isLast={i === sectionsData.length - 1}
        />
      ))}
    </>
  );
}

export default OurStory;
