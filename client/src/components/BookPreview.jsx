const BookPreview = ({ book }) => {
    return (
        <div key={book.key} className="flex">
            {book.isbn && (
                <img
                    src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-S.jpg`}
                    alt=""
                />
            )}
            {book.isbn && typeof book.isbn[0] !== "string" && (
                <img src="https://placehold.co/180x240" />
            )}
            <h3>{book.title}</h3>
            {book.author_name && <p>{book.author_name[0]}</p>}
        </div>
    );
};

export default BookPreview;
