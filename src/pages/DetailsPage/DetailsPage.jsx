import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader';

const DetailsPage = () => {
  const {id} = useParams()
   const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

console.log(user)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
         if(!res.ok) {
          throw new Error("Error fetching users");
         }
         const data = await res.json()
         setUser(data)
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
    <div className='shadow-lg p-3 flex flex-col justify-center gap-3 md:w-[350px] mx-auto'>
      <h2 className='mb-4 py-3 rounded-lg text-white text-center bg-blue-500 font-semibold sm:text-xl text-lg'>User Details</h2>
      <p className='text-base sm:text-lg'><span className='font-semibold'>Name:</span> {user.name}</p>
      <p className='text-base sm:text-lg'><span className='font-semibold'>Username:</span> {user.username}</p>
      <p className='text-base sm:text-lg'><span className='font-semibold'>Email:</span> {user.email}</p>
      <p className='text-base sm:text-lg'><span className='font-semibold'>Phone:</span> {user.phone}</p>
      <p className='text-base sm:text-lg'><span className='font-semibold'>Company:</span> {user.company?.name}</p>
      <p className='text-base sm:text-lg'><span className='font-semibold'>Address:</span> {user.address?.street} {user.address?.suite}, {user.address?.city}</p>
      <p className='text-base sm:text-lg mb-3'><span className='font-semibold'>Website:</span> {user.website}</p>
       <Link to='/' className='bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-center'>Back</Link>
    </div>
  )
}

export default DetailsPage