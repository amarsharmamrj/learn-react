import { useEffect } from "react"
import { useState } from "react"

const useGetTodos = (url) => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log
                setData(data)
            })
    }, [url])

    return data
}

export default useGetTodos