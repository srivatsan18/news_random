import React from 'react'

class news extends React.Component {
constructor(props){
    super(props);
    this.state={
        articles:[]
    }

}
async componentDidMount() {
    const url='http://newsapi.org/v2/top-headlines?country=in&apiKey=e8924b92124f4eb2840dc0b84729ec01';
    // const response=await fetch(url);
    // const data=response.json()
    // console.log(data.artiles);*/
 fetch(url)
 .then((response)=> {
     return response.json();

 })
 .then((data)=> {
     this.setState({
         articles:data.articles
     });
 });
}
render() {
    console.log(this.state);
    return(
    <div>
        {this.state.articles.map((item,index) => {
        return (
        <div>
        <h2>
        <a href= {item.url} target="_blank"> {item.title} </a>
    </h2>
    <img src={item.urlToImage} alt="news" style={{width:'30vw'}} />
    <div>
     </div>
    <p>{item.description}</p>
    </div>
        );
    })}
    
    </div>
    );
}
}
export default news