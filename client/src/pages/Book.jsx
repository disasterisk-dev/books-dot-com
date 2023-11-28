import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

function Book() {
    const { id } = useParams();

    const { data, isPending, error } = useFetch(
        `http://localhost:4000/api/books/${id}`,
    );

    return <>{data && <h1>{data.title}</h1>}</>;
}

export default Book;
