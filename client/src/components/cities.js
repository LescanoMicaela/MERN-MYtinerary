import React from 'react';



export default class Cities extends React.Component{
    state = {
        cities: [],
      };
      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ cities: res}))
          .then(res => console.log(this.state.cities[0]))
          .catch(err => console.log(err));
         
      }
      callApi = async () => {
        const response = await fetch('/cities');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({ response: body})
        return body;
      };
 
      
      render() {
        return (
          <div >
             <h1>Cities page</h1> 
             <List  cities={this.state.cities} />
          </div>
        );
      }
    }
  
    export function List(props) {
        const sidebar = (
          <ul>
            {props.cities.map((city,index) =>
              <li key={index}>
                {city.name}
              </li>
            )}
          </ul>
        );
        return (
          <div>
            {sidebar}
          </div>
        );
      }
      