import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import hero from '../assets/images/div.jpg';
import Figure from 'react-bootstrap/Figure';
import care from "../assets/images/carousel.png";
export const Herosection = ()=>{

    
    return(
        <>
            <div className="container-fluid mt-5 mb-5 pb-5">
                <div className="row mt-5 mb-5 sm-mb-5 ">
                    <div className="ml-5  col-md-6 col-lg-6 col-sm-12">
                    <p className='fs-1 fw-bold mb-0' style={{
                      backgroundImage: 'linear-gradient(to right, #494AAA, #EB7A65, #D9DEED)',WebkitBackgroundClip: 'text',color: 'transparent',}}>Brainstorm</p>
                        <h1 style={{fontSize:"3rem"}}> your book</h1>
                        <h1 style={{fontSize:"3rem"}}>easily.</h1>
                        <p>World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book.</p>
                        <button style={{borderRadius:"30px",padding:"10px",marginLeft:"15px",border:"2px solid black",width:"170px"}}>Request a demo</button> 
                        <button style={{backgroundColor:"#EB7A65", borderRadius:"30px",padding:"10px",marginLeft:"20px",border:"2px solid black",width:"170px"}}>Try for free</button>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 ">
                        <Figure>
                            <Figure.Image
                            src={hero} className="img-fluid rounded"
                         />
                        <Figure.Caption className="text-center">
                            Watch the product overview 3 min.
                        </Figure.Caption>
                        </Figure>
                    
                        
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#EB7A65"}}>
                   <img src={care} className="img-fluid" style={{backgroundColor:"#EB7A65",height:"300px"}}/>
                </div>
            </div>
        </>
    )

}