import React, { useEffect, useState } from "react";
import Section from "./Section";

function OurStory() {
  const [sectionsData, setSectionsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../../../../public/Data/SectionData.json")
      .then((res) => res.json())
      .then((data) => {
        setSectionsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sections data yüklənmədi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Yüklənir...</p>;
  }

  if (!Array.isArray(sectionsData) || sectionsData.length === 0) {
    return <p>Data tapılmadı!</p>;
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

