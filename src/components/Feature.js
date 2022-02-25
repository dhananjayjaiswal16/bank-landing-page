import FeatureCard from "./FeatureCard";
import styled from 'styled-components';
import { useState } from "react";

const Feature = () => {
  const [tab, setTab] = useState("month");
  return (
    <>
      <div id="features">
        <TabGrp>
          <Tab isActive={tab === 'month'} onClick={() => {
            if (tab !== 'month') setTab("month");
          }}>Month</Tab>
          <Tab isActive={tab === 'annual'} onClick={() => {
            if (tab !== 'annual') setTab("annual");
          }}>Annual</Tab>
        </TabGrp>
        <div className="a-container">
          <FeatureCard title='Solo' price={tab === 'month' ? '$10' : '$100'} />
          <FeatureCard title='Startup' price={tab === 'month' ? '$20' : '$200'} />
          <FeatureCard title='Mega' price={tab === 'month' ? '$30' : '$300'} />
        </div>
      </div>
    </>
  )
}
export const TabGrp = styled.div`
margin-top: 0.5rem;
margin-bottom: 0.5rem;
display: flex;
border-radius: 1rem;
background-color: whitesmoke;
box-shadow: 0px 1px 9px 1px rgb(100 102 117 / 24%);
user-select: none;
:hover {
  box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 25%);
  }
`;

export const Tab = styled.div`
 padding: 0.2rem 1rem;
 font-size: 0.9rem;
 font-weight: 600;
 color: ${({ isActive }) => isActive && "white" || "#989898"};
 min-height: 20px;
 display: flex;
 text-align: center;
 justify-content: center;
 align-items: center;
 background-color:  ${({ isActive }) => isActive && "#00b7ff" || "transparent"};
 border-radius: ${({ isActive }) => isActive && "1rem" || "0px"};
 box-shadow: ${({ isActive }) => isActive && "0px 2px 9px 1px rgb(37 44 97 / 15%)" || "none"};
 cursor: pointer;
 position: relative;
`;
export default Feature;
