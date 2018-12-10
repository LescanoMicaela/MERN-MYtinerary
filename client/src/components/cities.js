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
          <div className="cityList" >
            <Filter />
             <List class="citiesList" cities={this.state.cities} />
          </div>
        );
      }
    }
  
    export function List(props) {
        return  (
          <div className={props.class}>
            {props.cities.map((city,index) =>
              <p key={index}>
                {city.name}
              </p>
            )}
          </div>
        );
      }
      
      export function Filter(props){
          return(
              <div>
                <p>Filter current cities</p> 
                <input type="text"></input>
              </div>
          )
      }