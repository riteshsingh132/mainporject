import React from 'react'
import { Accordion } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'

function Accordian({ storeData }) {
    console.log(storeData);
    const rite=storeData
    return (
        <div>
            {rite.map((item,d) => {
                return <Accordian>
                    <AccordionItem eventKey={d}>
                        <AccordionHeader>{item.header}</AccordionHeader>
                        <AccordionBody>
                        {item.discription}
                        </AccordionBody>
                    </AccordionItem>
                </Accordian>
            })}
            {/* <Accordion>
                <AccordionItem eventKey='0'>
                    <AccordionHeader>header1</AccordionHeader>
                    <AccordionBody>
                        This is first according which is created by me
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="1">
                    <AccordionHeader>Header 2</AccordionHeader>
                    <AccordionBody>
                        This is first according which is created by me
                    </AccordionBody>
                </AccordionItem>
                
                
                
            </Accordion> */}
        </div>
    )
}

export default Accordian