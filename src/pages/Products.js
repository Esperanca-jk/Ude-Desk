import React from "react";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../api/products";

export default class Products extends React.Component{

    // state = {
    //     products: [],
    // };

    // componentDidMount(){
    //     ProductsApi.getAll()
    //         .then( data => {
    //             this.setState({
    //                 products: data
    //             })
    //         });
    // }
    
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            products : []          
        };
    }

    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        
        fetch("http://localhost:3001/posts")
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

    render(){
        return (
            <div>
                <h1>Courses</h1>

                <div className="row courses">
                    {this.state.products.map(product => 
                        <div className={'col-4'} key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
