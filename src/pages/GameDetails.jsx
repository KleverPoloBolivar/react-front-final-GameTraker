import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function GameDetails({ game }) {
  return (
    <div>
      <h1>{game.name}</h1>
      <ReviewForm onSubmit={(data) => console.log("reseña", data)} />
      <ReviewList reviews={game.reviews || []} />
    </div>
  );
}

export default GameDetails;
