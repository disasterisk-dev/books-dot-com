import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import BookCard from "../components/BookCard";
import { useEffect } from "react";

function Book() {
    const { id } = useParams();
    const { data, isPending, error, fetchData } = useFetch();

    useEffect(() => {
        fetchData(`http://localhost:4000/api/books/${id}`);
    }, []);

    useEffect(() => {
        if (data) {
            document.title = data.title;
            console.log(typeof data.createdAt);
        }
    }, [data]);

    return (
        <>
            {data && (
                <div className="book grid grid-cols-12 gap-3">
                    <BookCard book={data} />
                    <p className="col-span-8 whitespace-pre-wrap">
                        {data.thoughts}
                    </p>
                </div>
            )}
        </>
    );
}

export default Book;
