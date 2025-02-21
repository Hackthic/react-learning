import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(null); // Initialize as null

    useEffect(() => {
        fetch('https://api.github.com/users/Hackthic')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching GitHub data:", error));
    }, []);

    if (!data) return <p>Loading...</p>; // Handle the initial loading state

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github;
