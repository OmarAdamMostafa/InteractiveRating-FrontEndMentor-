import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import image from './assets/thankYou.svg'

function App() {
  const ratings = [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
  ]

  const [clickedRating, setClickedRating] = useState(0)
  const [ratingSubmitted, setRatingSubmitted] = useState(false)

  const checkSubmittedRating = () => {
    if(clickedRating != 0){
      setRatingSubmitted(true)
    }
  }

  return (
    <main className='flex items-center justify-center h-screen'>
      {/* BOX */}
      <div className='border rounded-[30px] border-none bg-gradient-to-b from-boxColorUp to-boxColorDown w-[450px] h-[450px]'>
        {
          !ratingSubmitted ? (
            // FIRST PAGE 
            <section>
              {/* TOP LEFT CIRCLE */}
              <div className='border border-none rounded-full bg-[#3e3e40] w-[50px] h-[50px] mt-10 ml-10'>
                {/* STAR */}
                <div className='flex items-center justify-center text-2xl text-orange-400 w-[50px] h-[50px]'>
                  <button>
                    <AiFillStar />
                  </button>
                </div>
              </div>
              {/* QUESTION */}
              <div className='text-3xl font-semibold text-white mt-10 ml-10 w-4/5'>
                How did we do?
              </div>
              {/* TEXT */}
              <div className='text-sm leading-6 text-gray-400 mt-4 ml-10 w-4/5'>
                Please let us know how we did with your support request. All feedback is 
                appreciated to help us improve our offering!
              </div>
              {/* RATINGS */}
              <div className='flex justify-between items-center mt-7 ml-10 w-4/5'>
                {
                  ratings.map((rating)=>(
                    <button 
                      key={rating.id} 
                      className={`border border-none rounded-full ${clickedRating === rating.value ? 'bg-gray-500' : 'bg-[#3e3e40]' }  w-[50px] h-[50px] hover:bg-orange-500 font-semibold`}
                      onClick={()=>setClickedRating(rating.value)}  
                    >
                      {rating.value}
                    </button>
                  ))
                }
              </div>
              {/* SUBMIT BUTTON */}
              <div className='flex justify-center items-center mt-8 ml-10 w-4/5'>
                <button 
                  className='border border-none rounded-full w-full py-3 bg-orange-500 hover:bg-white hover:text-orange-500 font-semibold'
                  onClick={checkSubmittedRating}
                >
                  SUBMIT
                </button>
              </div>
            </section>
          ) : (
            // SECOND PAGE
            <section>
              <div className='flex flex-col justify-center items-center gap-8 mt-16 mr-2'>
                {/* IMAGE */}
                <div>
                  <img alt='picture' src={image}/>
                </div>
                {/* CHOSEN RATING */}
                <div className='flex justify-center border border-none rounded-full bg-[#3e3e40] w-[40%] py-1'>
                  <p className='text-sm text-orange-400'>
                    You selected {clickedRating} out of 5
                  </p>
                </div>
                {/* THANKS AND TEXT */}
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-2xl font-bold'>
                    Thank you!
                  </p>
                  <p className='text-sm leading-6 font-semibold text-center w-[74%] mt-4 text-gray-400'>
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!
                  </p>
                </div>
              </div>
            </section>
          )
        }
        
        
        
      </div>
    </main>
  )
}

export default App
