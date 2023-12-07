const usePost = async (url, token, obj, callback) => {
    let error = null;

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        error = json.error;
    }

    callback(error, json);
};

export default usePost;
