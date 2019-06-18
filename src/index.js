import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "https://gql.st.devjs.ru/graphql"
});

const GET_SPECIALIST = gql`
 query($id: ID!, $index: SpecialistServiceIndex, $serviceType: SpecialistServiceType) { specialistServices(id: $id, index: $index, type: $serviceType) { id uri name price type rating duration description languages city lat lon quantity reviews { id } results { photos } specialist { uri id type name description avatar { url_thumbnail } } images { id url_original url_thumbnail url_crop } periods { since, to } } }
`;

client.query({
  query: GET_SPECIALIST,
  variables: {id: "0a12291d-340e-4998-8c72-f979656317c4", index: "id", serviceType: "package"}
}).then(result => console.log(result))

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
