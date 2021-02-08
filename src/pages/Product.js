import React from "react";

export default class Product extends React.Component{
    

    constructor(props){
        super(props);
        var str = 'http://localhost:3000/products/';
        this.state = {
            error : null,
            isLoaded : false,
            
            product : []          
        };
    }

    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        var str = 'http://localhost:3000/products/';
        var i=document.URL.substr(str.length);
        
        fetch("http://localhost:3001/postskurs",{
            method:"POST",
            body: i
        })

        .then( response => response.json())
        
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    products : result
                    
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    render() {
        const {error, isLoaded, products} = this.state;
        var str = 'http://localhost:3000/products/';
        console.log(document.URL.substr(str.length));
        // products.IndexOf(document.URL.substr(str.length))
    
        if(error){
            return <div>{error + " Error in loading"}</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            
            return(
                <div>
                    
                    {
                        products.map(function (product) {
                                return (

                                    <div>
                                        <div className={'row ' + document.URL.substr(str.length)}>
                                            <div className="col-6">
                                                <video src={product.video} width={'100%'} autoPlay={'true'} />
                                            </div>
                                            <div className="col-6">
                                                <h1>{error}</h1>

                                                <p>Points: {product.point}★</p>

                                                <p>{product.description}</p>

                                                <br /><br />

                                                <p>{product.sub1order}</p>
                                                <br /><br />

                                                <button className="btn btn-primary">
                                                Add to Cart
                                                </button>

                                            </div>
                                            <div className="col-6">
                                                <ul className="ul-sub">
                                                    <li className="list-sub">
                                                        <span className="subname">{product.sub1name}</span> <span className="suborder"> #{product.sub1order}</span><span className="subpoint">  {product.sub1point}★ </span> <a className="1" href={product.sub1link}><span className="sublink"> Learn </span> </a>
                                                    </li><li className="list-sub">
                                                        <span className="subname">{product.sub2name}</span> <span className="suborder"> #{product.sub2order}</span><span className="subpoint">  {product.sub2point}★ </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                    }
                    
                </div>
            );
        }
      
    }
    // render(){
        
    //     const {error, isLoaded, product} = this.state;


    //     return (
            
    //         <div>
                
    //             <div className={'row'}>
    //                 <div className="col-6">
    //                 <video src={product.video} width={'100%'} autoPlay="true" />
    //                 </div>
    //                 <div className="col-6">
    //                 <h1>{error}</h1>

    //                     <p>Points: {product.point}★</p>

    //                     <p>{product.description}</p>

    //                     <br/><br/>
                                        
    //                     <p>{product.sub1order}</p>
    //                     <br /><br />

    //                     <button className="btn btn-primary">
    //                         Add to Cart
    //                     </button>

    //                 </div>
    //                 <div className="col-6">
    //                     <ul className="ul-sub">
    //                     <li className="list-sub">
    //                             <span className="subname">{product.sub1name}</span> <span className="suborder"> #{product.sub1order}</span><span className="subpoint">  {product.sub1point}★ </span> <a className="1" href={product.sub1link}  ><span className="sublink"> Learn </span> </a>
    //                         </li><li className="list-sub">
    //                             <span className="subname">{product.sub2name}</span> <span className="suborder"> #{product.sub2order}</span><span className="subpoint">  {product.sub2point}★ </span>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
}
