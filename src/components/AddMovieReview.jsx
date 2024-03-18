import Button from "./Button";
import Input from "./Input";

export default function AddMovieReview() {
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="hover:bg-stone-200 px-8 py-2">Cancel</button></li>
                <li><Button text='Add Review' /></li>
            </menu>
            <div>
                <Input label='Movie Name' />
                <Input label='Review' textarea={true} />
            </div>
        </div>
    )
}