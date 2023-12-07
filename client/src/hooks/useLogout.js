import { useAuthContext } from "./useAuthContext";
import { useBooksContext } from "./useBooksContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: booksDispatch } = useBooksContext();

    const logout = () => {
        //remove use from storage
        localStorage.removeItem("user");

        //dispatch logout action
        dispatch({ type: "LOGOUT" });

        bookDispatch({ type: "SET_BOOKS", payload: null });
    };

    return { logout };
};
