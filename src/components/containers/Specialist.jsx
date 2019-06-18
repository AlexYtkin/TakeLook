import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "../../style.css";
import PackagePhotos from "../ui/molecules/PackagePhotos";

const GET_SPECIALIST = gql`
 query($id: ID!, $index: SpecialistServiceIndex, $serviceType: SpecialistServiceType) { specialistServices(id: $id, index: $index, type: $serviceType) { id uri name price type rating duration description languages city lat lon quantity reviews { id } results { photos } specialist { uri id type name description avatar { url_thumbnail } } images { id url_original url_thumbnail url_crop } periods { since, to } } }
`;

const id = "0a12291d-340e-4998-8c72-f979656317c4";
const index = "id";
const serviceType = "package";

const Specialist = () => (
   <Query query={GET_SPECIALIST} variables={{id: id, index: index, serviceType: serviceType}}>
     {({loading, error, data}) => {
       if (loading) return "Loading...";
       if (error) return `Error! ${error.message}`;
       const { specialistServices } = data;
       console.log(specialistServices);
       return (
           <div className="row">
              <PackagePhotos images={specialistServices[0].images}/>
           </div>
       );
     }}
   </Query>
);
export default Specialist;
/*
city: ""
description: "asdasd"
duration: 3600
id: "0a12291d-340e-4998-8c72-f979656317c4"
images: (3) [{…}, {…}, {…}]
languages: ["Русский"]
lat: "55.72514853"
lon: "37.64686642"
name: "семейная фотосессия"
periods: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
price: 333
quantity: 1
rating: null
results: {photos: -1, __typename: "SpecialistServiceResults"}
reviews: []
specialist: {uri: "valeriya-mantulenko", id: "92618c9c-7dcc-4284-a08a-876cf1c0f445", type: "photographer", name: "Krivchunasdasd Artemdasd", description: "ввввsadasd", …}
type: "package"
uri: "semeinaya-fotosessiya"
 */
