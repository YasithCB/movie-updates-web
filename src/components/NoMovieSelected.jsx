import Button from "./Button";

export default function NoMovieSelected({onStartAddReview}) {
    return(
        <div className="mt-24 text-center w-2/3">
            <img className="mx-auto w-16 h-16 object-contain" src="assets\images\tempImage.png" alt="add a review"/>
            <h2 className="text-xl text-stone-500 my-4 font-bold">No Movie Selected</h2>
            <p className="mb-4 text-stone-600">select a movie or add a review for a movie</p>
            <p>
                <Button onClick={onStartAddReview}>Add a Review</Button>
            </p>
        </div>
    )
}