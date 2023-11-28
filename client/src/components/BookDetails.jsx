import { useEffect, useState } from "react";

const BookDetails = ({ book }) => {
    const [fColor, setFColor] = useState("border-l-red-500");

    useEffect(() => {
        if (book.finished) {
            setFColor("border-l-green-500");
        }
    }, [book.finished]);

    return (
        <div className="mb-4">
            <div
                className={`flex items-center border-l-8 bg-white p-3 ${fColor}`}
            >
                <div className="grow">
                    <h4 className="text-2xl">
                        <strong>{book.title}</strong>
                    </h4>
                    <p>{book.author}</p>
                </div>
                <p className="">{book.rating}/5</p>
            </div>
            <span className="block text-right text-xs">{book.createdAt}</span>
        </div>
    );
};

export default BookDetails;
