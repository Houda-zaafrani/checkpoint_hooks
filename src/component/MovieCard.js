import React from 'react'
import Card from "react-bootstrap/Card";// import style Card of movie after installing bootstrap 
import StarRatingComponent from "react-star-rating-component";
//install package react-star-rating-component that make us insert star in website 

const MovieCard = ({movie}) => {
  return (
    
    <div>
      {/* we choose style of card then we copy past code */}
      <Card
        style={{
          backgroundColor: "rgb(63, 165, 165)",
          width: "18rem",
          borderRadius: 40,
        }}
      >
        <Card.Img
          variant="top"
          src={movie.url}
          style={{ height: 300, borderRadius: 40 }}
        />
        <Card.Body>
          <Card.Title>
            <b> {movie.title}</b>
          </Card.Title>
          <Card.Text>
            <b>Discription : </b>
            {movie.description}
            <br></br>
            <StarRatingComponent name="rate" starCount={5} value={movie.rate} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard
