import { Col, Row } from 'antd'
import React, { useCallback, useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const AccordionContents = ({question, answer}) => {
    const [containerHeight, setContainerHeight] = useState("0px"),
        containerRef = useRef("")


    const changeHeight = useCallback(()=>{
        var newHeight = "0px";

        if(containerHeight === "0px"){

            newHeight = `${containerRef.current.scrollHeight + 40}px`

        }

        setContainerHeight(newHeight)

    }, [containerHeight])


  return (
    <>

        <Row justify="center" style={{borderBottom:  containerHeight !== "0px"? "2px solid #EBC9EA": "none", width: "100%"}}>

            <Col span={24}>
                <Row justify="space-between" style={{width: "100%", cursor: "pointer", background: containerHeight !== "0px"? "#EBC9EA": "transparent", alignItems: "center", padding: "20px 25px"}} onClick={changeHeight}>
                    <h2 style={{fontWeight: "bold", margin: "0px"}}>
                        
                        {question? question : "How does this works?"}
                        
                    </h2>

                    {containerHeight !== "0px"? <FaAngleUp /> : <FaAngleDown />}
                </Row>
            </Col>

            <Col span={24} ref={containerRef} style={{height: containerHeight, transition: "0.5s ease all", overflow: "hidden", padding: containerHeight !== "0px"? "20px 40px" : "0px 40px"}}>

                <p>{answer? answer : "Lorem this iainais jbsaiufbbvk buisbdiuboiu ibsi"}</p>

            </Col>

        </Row>
    
    </>
  )
}

export default AccordionContents
