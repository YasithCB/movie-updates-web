import moviesList from "../db/db";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import MovieCard from "./MovieCard";

export default function MoviesList() {
    return (
        <MDBContainer className="mb-5 text-center">
            <MDBRow className="justify-content-center">
                {moviesList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </MDBRow>
        </MDBContainer>
    );

}