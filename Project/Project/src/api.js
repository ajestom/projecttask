export const register = async ({ first, second, email, password }) => {
    try {
        const response = await fetch("http://localhost:4000/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first, second, email, password
            }),
        });
        return response
    } catch (error) {
        console.log(error)
    }
}

export const login = async (data) => {
    try {
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response
    } catch (error) {
        console.log(error)
    }
}