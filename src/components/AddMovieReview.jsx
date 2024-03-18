import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./modal";

export default function AddMovieReview({onAdd}) {
    const modal = useRef();

    const movieName = useRef();
    const review = useRef();

    function handleAddReview() {
        const enteredMovieName = movieName.current.value
        const enteredReview = review.current.value

        // validation...
        if (enteredMovieName.trim() === '' || enteredReview.trim() === '') {
            modal.current.open()
            return;
        }

        onAdd({
            movieName : enteredMovieName,
            review : enteredReview
        })
    }

    return (
        <>
        <Modal ref={modal} buttonCaption='Close' >
            <h2 className="text-xl text-stone-800 my-4 font-bold">Invalid Input</h2>
            <p className="text-stone-600">Oops! Looks like you fogot to enter values</p>
            <p className="mb-4 text-stone-600">Please make sure you entered data in every field.</p>
        </Modal >
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="hover:bg-stone-200 px-8 py-2">Cancel</button></li>
                <li><Button onClick={handleAddReview}> Add Review</Button></li>
            </menu>
            <div>
                <Input ref={movieName} label='Movie Name' />
                <Input ref={review} label='Review' textarea={true} />
            </div>
        </div>
        </>
    )
}