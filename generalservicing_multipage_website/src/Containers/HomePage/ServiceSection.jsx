import React,{ useState, useEffect} from 'react'
import styled from "styled-components";
import CardComp from "../../components/CardComp";
import axios from 'axios'
const InnerWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
const CardConatiner = styled.div`
  display: flex;
  width: 100%;
  margin-top:30px;
  height: 90%;
  justify-content:space-evenly ;
  background-color:beige;
`;
const Title = styled.div`
  font-size: 50px;
  color: #df5c5c;
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
          
        </InnerWrapper> 
        </>
    )
}

export default ServiceSection
