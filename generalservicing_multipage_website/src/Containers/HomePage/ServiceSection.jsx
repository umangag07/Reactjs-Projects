import React,{ useState, useEffect} from 'react'
import styled from "styled-components";
import CardComp from "../../components/CardComp";
import axios from 'axios'
import '../../index.css'
import { Button } from "react-bootstrap";
import Marginer from '../../components/Marginer';
const InnerWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Cabin';
  
`;
const CardConatiner = styled.div`
  display: flex;
  width: 100%;
  margin-top:30px;
  height: 90%;
  justify-content:space-evenly ;
  /* background-color:beige; */
`;
const Title = styled.div`
  font-size: 50px;
  color: #df5c5c;
  font-family: 'Cabin';
`;

const More = styled.div`

`;

function ServiceSection() {
   const [services, Setservices] = useState([]);
    const fetchData = async()=>{
        const response= await axios.get("http://localhost:5000/services")
        .catch(err=>console.log(err))
        if(response){
            Setservices(response.data)
            console.log(response.data[0].title+response.data[0].rating+response.data[0].rate+ response.data[0].thumbnailUrl+ response.data[0].specialist.fullname)
        }
 
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <InnerWrapper>
          <Title>OUR MOST USED SERVICES</Title>
          <CardConatiner>
             {services.map((service,id)=>(
                 <CardComp key={id} {...service}/>
    ))}
          </CardConatiner>
          <Marginer direction="vertical" margin="4em"/>
          <More><Button variant="danger" > VIEW MORE</Button></More>
          
        </InnerWrapper> 
        </>
    )
}

export default ServiceSection
