import Button from "./Button";

export default function Sidebar({onStartAddReview, moviesList}) {
    return (
        <aside className="px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>FilMania</h2>
            <div>
                <Button onClick={onStartAddReview}>Visit Youtube Channel</Button>
            </div>
            <ul className="mt-8">
                {moviesList.map((movie) => (
                    <li key={movie.id}>
                        <button className="w-full px-2 py-1 my-1 text-left rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                            {movie.movieName}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}