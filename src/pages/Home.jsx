import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../HeroSection'
import GenreCard from '../Components/GenreCard'
export default function Home() {
  return (
    <div className='bg-[#030637]'>
<Header/>
<HeroSection  

title ="Movie Ranking site"

description ="Welcome to our curated collection of top-rated films, where every movie lover can find something to cherish. our comprehensive rankings and reviews are here to guide you through the mesmerizing world of cinema."

image="https://movie-ranking-platform.netlify.app/images/starwars-scifi1.webp"


/>
<h1 className='font-sans text-white text-5xl text-center p-8 font-Bold mb-4'>Movie Genres</h1>
<section className='w-[70%] m-auto pb-8 flex justify-around '>   
<GenreCard  genre='Action'

image='https://movie-ranking-platform.netlify.app/action'
/>

<GenreCard  genre='Adventure'

image='https://movie-ranking-platform.netlify.app/images/star-wars-scifi-post.webp'
/>
<GenreCard  genre='Sci-fiction'

image='https://movie-ranking-platform.netlify.app/images/sting-poster-scifi.webp'
/>
<GenreCard  genre='Romance '

image='https://movie-ranking-platform.netlify.app/images/the-wild-robot-scifi.webp'
/>


</section>




    </div>
  )
}
