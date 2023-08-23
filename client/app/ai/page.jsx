"use client"
import React, {useState} from 'react'
import Link from 'next/link';
import AppBar from '@/components/AppBar'

const page = () => {

    const img = "http://localhost:5000/imgs/ai/"
    const url = "/ai/"
    
    const [categories, setCategories] = useState([
    {
        category: "Tomato",
        img: 'tomato.jpg',
        url: 'tomato'
    },
    {
        category: "Cotton",
        img: 'cotton.jpg',
        url: 'cotton'
    },
    {
        category: "Grape",
        img: 'grape.jpg',
        url: 'grape'
    },
    {
        category: "Apple",
        img: 'apple.jpeg',
        url: 'apple'
    },
    ])
    


    return (
        <>
        <AppBar link={'/home'}/>
        <div style={{padding: '35px 10px 35px 10px', maxHeight: 'calc(100vh - 48px)'}} className='bg-gradientbg'>
       
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
        {
            categories.map((category, index)=>(
                <Link href={`/ai/${category.url}`}>
                <div
                style={{
                    cursor: 'pointer',
                    height: '150px',
                    width: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 25px #000',
                    borderRadius: '20px',
                    margin: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s' 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} 
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} 
                >
                <img
                    src={`http://localhost:5000/imgs/ai/${category.img}`}
                    alt="Not Found"
                    style={{ position: 'absolute', height: '100%', width: '100%' }}
                />
                <span
                    style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    background: 'linear-gradient(rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.589), #000)'
                    }}
                ></span>
                <p
                    style={{
                    color: '#fff',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    zIndex: '2',
                    transform: 'translateY(25px)',
                    letterSpacing: '2px'
                    }}
                >
                    {category.category}
                </p>
                </div>
                </Link>


            ))
        }
            
           

            

        </div>

        </div>
        </>
    )
}

export default page
