import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({product}) => {
    return (
        <div class="w-1/2 md:w-1/2 xl:w-1/3 px-4">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
          <div className='h-[300px]'>
          <img
              src={product.image}
              alt="image"
              class="w-full h-full object-cover"
              />
          </div>
           <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h3>
                 <a
                    href="javascript:void(0)"
                    class="
                    font-semibold
                    text-dark text-xl
                    sm:text-[22px]
                    md:text-xl
                    lg:text-[22px]
                    xl:text-xl
                    2xl:text-[22px]
                    mb-4
                    block
                    hover:text-primary
                    "
                    >
                 Creative Card Component designs graphic elements
                 </a>
              </h3>
              <p class="text-base text-body-color leading-relaxed mb-7">
                 Lorem ipsum dolor sit amet pretium consectetur adipiscing
                 elit. Lorem consectetur adipiscing elit.
              </p>
             

              <NavLink to="/details" className ="
               inline-block
                 py-2
                 px-7
                 border border-[#E5E7EB]
                 rounded-full
                 text-base text-body-color
                 font-medium
                 hover:border-primary hover:bg-primary hover:text-white
                 transition
              " >
            
            View details
            
            </NavLink>
           </div>
        </div>
     </div>
    )
}

export default Card