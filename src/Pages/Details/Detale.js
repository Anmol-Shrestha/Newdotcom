import React from "react";
import { useParams } from "react-router-dom";
export default function Detale() {
  const { title } = useParams();

  return (
    <>
      <div className="container">
        <h1 className="Display-5">{title}</h1>
        <div className="articlecon d-flex gap-5 border-bottom border-dark-subtle">
          
          <article style={{maxWidth:"50ch"}} className="col-6 border-dark-subtle"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iusto labore, quasi a vero inventore ducimus voluptatum esse. Rem, voluptatibus! Explicabo, fugit asperiores autem necessitatibus aliquid dicta sequi laboriosam est.</p> 
          <p>ducimus.  sit amet consectetur adipisicing elit. Reprehenderit, cupiditate dolores quod rerum natus optio harum, temporibus culpa nesciunt dolorem ab ratione est autem facere officia, laudantium ex placeat ipsum.</p>
          </article>
         
         
          <article style={{maxWidth:"50ch"}} className="col-6">
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sed ipsum distinctio ad non delectus ipsam commodi quasi hic. Vel architecto nesciunt esse dignissimos corrupti at a facilis sed voluptatum.</p>

            <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur, deserunt accusamus cupiditate error esse obcaecati ipsa veritatis, itaque repellat sunt maiores temporibus. Fugiat sed voluptatum sint dicta optio quo.</p>
          </article>
        </div>
      </div>
    </>
  );
}
