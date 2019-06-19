import React from "react";
import { Query } from "react-apollo";
import "../../style.css";
import PackagePhotos from "../ui/molecules/PackagePhotos";
import SpinnerMain from "../ui/atoms/SpinnerMain";
import {id, index, serviceType } from "../../variables";
import { GET_SPECIALIST } from "../../query";
import Info from "../ui/molecules/Info";


const Packed = () => (
   <Query query={GET_SPECIALIST} variables={{id: id, index: index, serviceType: serviceType}}>
     {({loading, error, data}) => {
       if (loading) return <SpinnerMain/>;
       if (error) return `Error! ${error.message}`;
       const { specialistServices } = data;
       console.log(specialistServices);
       return (
           <div>
              <PackagePhotos images={specialistServices[0].images}/>
              <Info specialist={specialistServices[0].specialist}/>
           </div>
       );
     }}
   </Query>
);
export default Packed;

