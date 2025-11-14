import GameCard from "../components/GameCard";
import GameForm from "../components/GameForm";

function Library() {
  return (
    <div>
      <h1>Mi Biblioteca</h1>
      <GameForm onSubmit={(data) => console.log("Agregar", data)} />
    </div>
  );
}

export default Library;