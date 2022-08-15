import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MyTab from '../tab/tab';
import React from 'react';

const default_accordion_name = "Item #1";
export const AccordionContext = React.createContext(default_accordion_name);

export const Dashboard = () => {

  const [accordionData, setAccordionData] = useState(default_accordion_name); 

  const handleOnClick = (name) => {
    setAccordionData(name);
  } 

  return (
    <AccordionContext.Provider value={{ value: accordionData }}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" onClick={() => handleOnClick('Item #1')}>
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <MyTab accordionData="Item #1" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" onClick={ () => handleOnClick('Item #2')}>
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <MyTab accordionData="Item #2" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </AccordionContext.Provider >

  );
}