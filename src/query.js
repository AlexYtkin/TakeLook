import gql from "graphql-tag";

export const GET_SPECIALIST = gql`
 query($id: ID!, $index: SpecialistServiceIndex, $serviceType: SpecialistServiceType) { specialistServices(id: $id, index: $index, type: $serviceType) { id uri name price type rating duration description languages city lat lon quantity reviews { id } results { photos } specialist { uri id type name description avatar { url_thumbnail } } images { id url_original url_thumbnail url_crop } periods { since, to } } }
`;