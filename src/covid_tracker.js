import React from 'react'


class tracker extends React.Component {
constructor(props){
    super(props)
    this.state={
        cases:[]
    }
}    
async componentDidMount() {

const url="https://api.covid19india.org/state_district_wise.json";
fetch(url)
.then((response)=>{
    return response.json()
    })
.then((covid)=>{
    this.setState({
        cases:covid.cases
    });
});
}
render(){
    console.log(this.state)
    return(
        <div>
        
        
            </div>
    )};
}
export default tracker;
