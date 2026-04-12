import React from "react";
import { Accordion, AccordionItem } from "./Accordion";
import { AccordionTrigger } from "./AccordionTrigger";
import { AccordionContent } from "./AccordionContent";

export default { title: "Components/Data Display/Accordion" };

export const Default = () => (
  <Accordion type="single" variant="bordered">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>Yes. It comes with default styles that match your theme.</AccordionContent>
    </AccordionItem>
  </Accordion>
);