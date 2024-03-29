import Hero from "@/components/Hero/Hero";
import Section_2 from "@/components/section_2/Section_2";
import Section_3 from "@/components/section_3/Section_3";
import Section_4 from "@/components/section_4/Section_4";
import Section_5 from "@/components/section_5/Section_5";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
    </div>
  );
};

export default page;
