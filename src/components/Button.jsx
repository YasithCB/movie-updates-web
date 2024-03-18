
export default function Button({text , ...props}) {
    return (
        <button className="rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2" {...props}>
            {text}
        </button>
    )
}