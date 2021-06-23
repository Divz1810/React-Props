import React from "react";
import contact from "../contacts";
function Card(props){
  return (<div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className ="circle-img" src= {props.img} alt="immg" />
      </div>
      <div className= "bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.mail}</p>
      </div>
  </div>
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
      name= "Beyonce"
      img=
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel= "+123 456 789"
      mail= "b@beyonce.com"
      />

      <Card
      name= "Jack Bauer"
      img=
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel= "+987 654 321"
      mail= "jack@nowhere.com"
      />

      <Card
      name= "Chuck Norris"
      img=
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel= "+918 372 574"
      mail= "gmail@chucknorris.com"
      />

      <Card
      name= {contact[0].name}
      img= {contact[0].imgURL}
      tel= {contact[0].phone}
      mail= {contact[0].email}
      />

      <Card
      name= {contact[1].name}
      img= {contact[1].imgURL}
      tel= {contact[1].phone}
      mail= {contact[1].email}
      />

     <Card
      name= {contact[2].name}
      img= {contact[2].imgURL}
      tel= {contact[2].phone}
      mail= {contact[2].email}
      />
    </div>
  );
}

export default App;
