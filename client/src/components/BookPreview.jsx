import { useEffect, useState, useRef } from "react";

const BookPreview = ({ book }) => {
    return (
        <div
            key={book.key}
            className="mb-3 grid grid-cols-12 gap-3 rounded-lg bg-white p-2"
        >
            {book.isbn && (
                <div className="col-span-3">
                    <img
                        className="h-auto w-full"
                        src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false`}
                        alt={`Cover for ${book.title}`}
                        onError={(e) => {
                            e.target.src = "https://placehold.co/180x240";
                        }}
                    />
                </div>
            )}
            <div className="col-span-9">
                <h3 className="text-2xl">{book.title}</h3>
                {book.author_name && <span>{book.author_name.join(", ")}</span>}
            </div>
        </div>
    );
};

export default BookPreview;
