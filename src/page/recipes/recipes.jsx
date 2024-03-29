import React from 'react'
import { Footer } from "../../common/footer";


export const Recipes = () => {
  return (
    <>
    <div className='max-w-[1100px] mx-auto'>
      <div>
      <h2 className='text-5xl  text-[#3d081b] ' >Recipes</h2>
      </div>
      <div className='pt-5'>
        <img src="https://theme-crave-demo.myshopify.com/cdn/shop/articles/fried-shrimps-_2_720x.jpg?v=1641343454" 
        className='w-[1100px] h-[560px] border-2 border-[#3d081b] border-b-4 rounded-xl hover:scale-105 duration-500 transition-transform'/>
        </div>
    </div>
    <div>
      <div className='flex flex-col justify-center items-center text-[#3d081b] pt-5 leading-7 cursor-pointer'>
        <h2 className='text-4xl italic hover:underline'>Krapow Shrimp rice paper wraps</h2>
        <p className='text-xs pt-3'>DECEMBER 15, 2021</p>
        <p className='pt-2'>Spicy salty and oh-so-flavourful,these shrimp rice paper wraps make the perfect lil's snack.</p>
        <p className='pt-4'>2 comments</p>
      </div>
    </div>
    <div className='max-w-[1100px] mx-auto'>
      <div className='flex gap-3 pt-4'>
        <div >
          <img src="https://theme-crave-demo.myshopify.com/cdn/shop/articles/veggie_rolls_720x.jpg?v=1641343249" 
          className='w-[600px] h-[320px] rounded-xl border-2 border-b-4 border-[#3d081b]'/>
          <div className='pt-3 text-[#3d081b]'>
            <h4 className='text-3xl  hover:underline'>
            Veggie Rice Paper Dumplings
            </h4>
            <p className='text-xs pt-3'>DECEMBER 15, 2021</p>
            <p className='pt-2'>Serve these flavour bombs on their own as an appetizer,
              or as a meal with your favorite grains!</p>
        <p className='pt-4'>1 comment</p>

          </div>
          
        </div>
        <div>
        <img src="https://theme-crave-demo.myshopify.com/cdn/shop/articles/images.accentuate-1_720x.jpg?v=1641343211" 
          className='w-[600px] h-[320px] rounded-xl border-2 border-b-4 border-[#3d081b]'/>
          <div className='pt-3 text-[#3d081b]'>
            <h4 className='text-3xl  hover:underline'>
            Ground Meat Krapow
            </h4>
            <p className='text-xs pt-3'>DECEMBER 2, 2021</p>
            <p className='pt-2'>Serve these flavour fire up this beloved for chill basil stir-fry
              under 20 minutes.</p>
        <p className='pt-4'>2 comments</p>

          </div>
          
        </div>
      </div>

    </div>

    <div className='max-w-[1100px] mx-auto'>
    <div className='pt-8'>
        <img src="https://theme-crave-demo.myshopify.com/cdn/shop/articles/krapowfriedrice-horizontal-_1_720x.jpg?v=1641343334" 
        className='w-[1100px] h-[560px] border-2 border-[#3d081b] border-b-4 rounded-xl hover:scale-105 duration-500 transition-transform'/>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center text-[#3d081b] pt-5 leading-7 cursor-pointer'>
        <h2 className='text-4xl italic hover:underline'>Thai krapow Fried rice</h2>
        <p className='text-xs pt-3'>DECEMBER 2, 2021</p>
        <p className='pt-2'>Heart and aromatic,this classic fried rice will spice up any weekend dinner.</p>
      </div>
      <div className='max-w-[1100px] mx-auto'>
    <div className='pt-10'>
        <img src="https://theme-crave-demo.myshopify.com/cdn/shop/articles/whiskey-and-booch-roasted-pork-belly-2-_1_-_1_720x.jpg?v=1641343284" 
        className='w-[1100px] h-[560px] border-2 border-[#3d081b] border-b-4 rounded-xl hover:scale-105 duration-500 transition-transform'/>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center text-[#3d081b] pt-5 leading-7 cursor-pointer '>
        <h2 className='text-4xl italic hover:underline'>Crispy Spicy Bulgogi Pork Belly</h2>
        <p className='text-xs pt-3'>DECEMBER 2, 2021</p>
        <p className='pt-2'>Spicy pork with sesame oil and a generous amount of coarse salt.</p>
        <p className='pt-4'>1 comment</p>
      </div>
      <div className='border-[#3d081b] border-[1px] mt-10'></div>

      {/* inbox */}
      <div className="text-center px-4  mt-6 max-w-[1100px] mx-auto text-[#513121]  flex flex-col items-center justify-center rounded-xl ">
        <h2 className="text-3xl  sm:text-5xl ">Spice up your inbox</h2>
        <p className="pt-6 tracking-wide">
           Sign up for our newsletter to get exclusive recipes, cooking tips, and
          more.
        </p>
        <div className="flex text-[#512131] mt-6 items-center  pr-3 pb-12">
          <input
            type="email"
            placeholder="Email "
            className="border-[3px] rounded-xl sm:w-[22rem] pl-2 text-md  py-3 border-[#513121] focus:border-[3.5px] "
          />
          {/* Apply Right arrow */}
          <i className="fa-solid fa-arrow-right absolute left-[56rem] "></i>
        </div>
      </div>
      <div className='border-t-8 border-[#3d081b] mt-10'>
       </div>
       <div className='-mt-20'>
       <Footer/>

       </div>

    </>
  )
}
