import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(users)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
         if(!res.ok) {
          throw new Error("Error fetching users");
         }
         const data = await res.json()
         setUsers(data)
      } catch (err) {
        setError(err.message)
      }finally {
        setLoading(false)
      }
     
    }
    
   
    fetchData()
  }, [])

if(loading) return <Loader />
if(error) return <div className='text-center mt-14 text-2xl sm:text-4xl font-semibold'>{error}</div>

  return (

    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {users.map(user => (
        <div key={user.id} className='border p-4 m-2 rounded-lg shadow-lg text-center'>
          <h2 className='text-xl font-semibold mb-8'>{user.name}</h2>
          <Link to={`/details/${user.id}`} className='bg-blue-500 text-white text-sm px-4 py-2 rounded-lg font-semibold'>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default HomePage