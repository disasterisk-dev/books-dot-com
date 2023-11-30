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
                        className="bg-fit aspect-[9/12] min-w-full bg-[url(https://placehold.co/180x240)] bg-contain"
                        src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`}
                        alt={`Cover for ${book.title}`}
                    />
                </div>
            )}
            <div className="col-span-9">
                <h3 className="text-2xl">{book.title}</h3>
                {book.author_name && <p>{book.author_name[0]}</p>}
            </div>
        </div>
    );
};

export default BookPreview;
