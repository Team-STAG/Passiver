import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import AccordionContents from './innerComps/AccordionContents'

const Accordion = ({data, style, ...props}) => {

    const [sentData, setSentData] = useState([])

    useEffect(()=>{

        if(Array.isArray(data)){
    
            setSentData(data)
    
        }
    }, [data])


  return (
    
    <>

        <Row justify="center" style={{border: "2px solid #EBC9EA", borderRadius: "10px", overflow: "hidden"}} {...props}>

            {sentData.map(data => {

                return(
                    <AccordionContents question={data.question} answer={data.answer}/>
                )
            })}

        </Row>


    </>
  )
}

export default Accordion
