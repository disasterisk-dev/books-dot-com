const usePost = async (url, obj) => {
    let error = null;

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await response.json();

    if (!response.ok) {
        error = json.error;
    }

    return { error, json };
};

export default usePost;
