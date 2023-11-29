import { useEffect, useState, useRef } from "react";

const BookPreview = ({ book }) => {

    return (
        <div key={book.key} className="grid grid-cols-12 gap-3 mb-3 bg-white p-2">
            {book.isbn && (
                <div className="col-span-3">
                    
                    <img 
                    className="bg-[url(https://placehold.co/180x240)] bg-fit min-w-full aspect-[9/12]"
                    src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`}
                    onerror="this.onerror=null;this.src='https://placehold.co/180x240'"
                    alt=""
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
