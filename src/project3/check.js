import React from 'react'
import {Accordion} from "react-bootstrap"
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
function Check() {
    return (
        <>
                <Accordion>
                    <AccordionItem eventKey='0'>
                        <AccordionHeader>Header 1</AccordionHeader>
                        <AccordionBody>
                            This is first according which is created by me
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader>Header 2</AccordionHeader>
                        <AccordionBody>
                            This is first according which is created by me
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>

          

        </>
    )
}

export default Check