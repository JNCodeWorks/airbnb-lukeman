import React from 'react'
import ExperienceData from '@/pages/data/experience-data.json'
import Image from 'next/image'
import cleanImg from '../../../../public/images/8.jpeg'

export default function Experience() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
                      <div className='grid lg:grid-cols-2 lg:gap-8 xl:space-y-0 space-y-4'>
                    <div className='h-full w-full'>
                        <div className='flex-shrink-0 relative' style={{height: '480px'}}>
                        <Image src={cleanImg} alt='cleaner' className='object-cover rounded-md' fill/>
                        </div>
                    </div>
                    <div className='h-full space-y-4 justify-center items-center'>
                      <div>
                        <h2 className='text-neutral-700 font-semibold text-4xl capitalize tracking-wide py-4'>why choose us</h2>
                        <p className='text-neutral-600'>Behind our commitment to excellence are few key attributes that define who we are and what makes us different from any other.</p>
                        <p className='text-neutral-600'>We pride ourselves on a high standard of friendly cheerful service which caters for the needs of the whole family.</p>
                      </div>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='space-y-6 md:py-6 md:pt-0 pt-6'>
                              <p className='flex flex-row items-center text-neutral-600 text-sm uppercase font-semibold space-x-4'>
                                <span className='text-[#53afe5]'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-6 h-6' version="1.1" id="Capa_1" viewBox="0 0 365.892 365.892">
                                        <g>
	                                          <circle cx="182.945" cy="286.681" r="41.494"/>
	                                          <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726   c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954   c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726   C252.285,193.373,218.606,176.029,182.946,176.029z"/>
	                                          <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044   c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439   s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043   C282.641,128.621,233.883,106.873,182.946,106.873z"/>
	                                          <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579   c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522   c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242   C367.637,131.238,367.745,119.562,360.611,112.293z"/>
                                        </g>
                                </svg></span>
                                <span className='hover:text-[#53afe5] cursor-pointer ease-in-out duration-300'>free high speed wifi</span>
                              </p>
                              <p className='flex flex-row items-center text-neutral-600 text-sm uppercase font-semibold space-x-4'>
                                <span className='text-[#53afe5]'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-8 h-8' version="1.1" id="Capa_1" viewBox="0 0 472.053 472.053">
                                        <g>
                                        	<g>
                                        		<path d="M181.423,12.772l-1.805,85.74c0,3.381-2.292,7.755-6.6,7.755l0,0h-2.309l0,0l0,0    c-4.308,0-6.6-4.804-6.6-8.275l-6.893-85.895c-1.764,0.008-3.568,0.008-5.454,0.008c-3.292,0-6.373-0.016-9.291-0.016    l-6.893,87.081c0.024,3.146-2.276,7.096-6.584,7.096l0,0h-2.309l0,0l0,0c-4.308,0-6.6-4.804-6.6-8.275l-1.788-84.879    c-22.866,3.601-22.858,19.647-22.858,89.935c0,23.711,9.421,44.358,26.247,55.453c2.3,1.52,4.731,2.861,7.308,4.007    c2.552,1.13,5.251,2.04,8.064,2.764l-7.73,295.571c0,6.17,13.136,11.209,19.305,11.209h10.161c6.17,0,19.305-5.023,19.305-11.193    l-7.755-296.677c2.837-0.967,5.495-2.211,8.039-3.609c3.13-1.715,6.023-3.739,8.689-6.04    c13.526-11.681,21.021-30.36,21.021-51.478C208.093,30.151,206.686,15.609,181.423,12.772z"/>
                                        		<path d="M314.642,193.194v45.764c0,4.845,1.39,9.332,3.682,13.176c3.869-3.503,9.34-3.552,12.063-3.552    c1.967,0,4.113,0.122,6.381,0.244c2.398,0.13,4.934,0.268,7.584,0.268h2.552c2.642,0,5.186-0.146,7.584-0.268    c2.268-0.13,4.414-0.244,6.381-0.244c2.731,0,8.194,0.049,12.063,3.552c2.292-3.845,3.682-8.324,3.682-13.176V0.002    C323.787-0.713,314.642,179.278,314.642,193.194z"/>
                                        		<path d="M360.869,256.711c-1.837,0-3.829,0.114-5.934,0.228c-2.536,0.146-5.235,0.285-8.023,0.285h-2.561    c-2.796,0-5.495-0.146-8.023-0.285c-2.113-0.122-4.105-0.228-5.934-0.228c-3.471,0-5.576,0.325-6.804,1.609    c-1.032,1.081-1.447,2.829-1.447,5.739v180.836c0,12.729,9.966,23.093,22.207,23.093h2.552c12.25,0,22.207-10.356,22.207-23.093    V264.059c0-2.91-0.423-4.658-1.447-5.739C366.445,257.036,364.348,256.711,360.869,256.711z"/>
                                        	</g>
                                        </g>
                                  </svg></span>
                                <span className='hover:text-[#53afe5] cursor-pointer ease-in-out duration-300'>well equipped kitchen</span>
                              </p>
                              <p className='flex flex-row items-center text-neutral-600 text-sm uppercase font-semibold space-x-4'>
                                <span className='text-[#53afe5]'><svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10'  viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12.0002C5.00024 8.66068 7.35944 5.78639 10.6348 5.1351C13.9102 4.48382 17.1895 6.23693 18.4673 9.32231C19.7451 12.4077 18.6655 15.966 15.8887 17.8212C13.1119 19.6764 9.41127 19.3117 7.05 16.9502C5.73728 15.6373 4.99987 13.8568 5 12.0002Z" stroke="#53afe5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 9.92018C13.923 8.78975 12.949 7.93278 11.818 8.00018H10V11.8402H11.818C12.949 11.9076 13.923 11.0506 14 9.92018Z" stroke="#53afe5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 11.8402V16.0002" stroke="#53afe5" stroke-width="1.5" stroke-linecap="round"/>
                                </svg></span>
                                <span className='hover:text-[#53afe5] cursor-pointer ease-in-out duration-300'>ample parking spaces</span>
                              </p>
                            </div>
                            <div className='space-y-6 md:py-6 md:pt-0 pt-6'>
                              <p className='flex flex-row items-center text-neutral-600 text-sm uppercase font-semibold space-x-4'>
                               <span className='text-[#53afe5]'>
                               <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' fill="currentColor" version="1.1" id="Capa_1" viewBox="0 0 512.001 512.001">
<g>
	<g>
		<path d="M491.679,171.904h-30.432c-2.176,0-4.269,0.352-6.236,0.989v-38.435c0-23.179-18.858-42.037-42.037-42.037H163.806    c-4.199,0-7.604,3.404-7.604,7.604s3.405,7.604,7.604,7.604h249.169c14.793,0,26.829,12.036,26.829,26.829v107.458H327.13    l23.983-23.983c2.97-2.971,2.97-7.784,0-10.754c-2.97-2.969-7.784-2.969-10.753,0l-34.738,34.738h-42.629v-13.812    c0-4.2-3.405-7.604-7.604-7.604c-4.199,0-7.604,3.404-7.604,7.604v13.812H203.92l-34.738-34.738c-2.97-2.969-7.784-2.969-10.753,0    c-2.97,2.971-2.97,7.784,0,10.754l23.983,23.983h-34.493c-4.199,0-7.604,3.404-7.604,7.604c0,4.2,3.405,7.604,7.604,7.604h295.866    c2.473,0,4.562,2.09,4.562,4.562v29.113c0,2.473-2.09,4.562-4.562,4.562H66.467c-2.473,0-4.562-2.09-4.562-4.562v-29.113    c0-2.473,2.09-4.562,4.562-4.562h32.559c4.199,0,7.604-3.404,7.604-7.604c0-4.2-3.405-7.604-7.604-7.604H72.197V134.457    c0-14.793,12.036-26.829,26.829-26.829c4.199,0,7.604-3.404,7.604-7.604c0-4.2-3.405-7.604-7.604-7.604    c-23.179,0-42.037,18.858-42.037,42.037v38.434c-1.967-0.636-4.06-0.989-6.236-0.989H20.321C9.116,171.904,0,181.02,0,192.225    V383.36c0,4.2,3.405,7.604,7.604,7.604h15.145v21.01c0,4.2,3.405,7.604,7.604,7.604h66.236c4.199,0,7.604-3.404,7.604-7.604    v-21.01H406.69v21.013c0,4.2,3.405,7.604,7.604,7.604h66.236c4.199,0,7.604-3.404,7.604-7.604v-21.013h16.263    c4.199,0,7.604-3.404,7.604-7.604V192.225C512,181.02,502.884,171.904,491.679,171.904z M15.208,375.757L15.208,375.757V192.225    c0-2.771,2.342-5.113,5.113-5.113h30.432c2.772,0,5.113,2.342,5.113,5.113v52.801c-5.503,3.514-9.169,9.661-9.169,16.66v29.113    c0,7,3.667,13.146,9.169,16.66v68.298H30.353H15.208z M88.985,404.371H37.957v-13.406h25.514h25.514V404.371z M96.589,375.756    H71.075v-64.127h369.852v64.127H96.589z M472.924,404.374h-51.028v-13.406h51.028V404.374z M496.791,375.755h-40.658v-69.543    c4.517-3.627,7.42-9.184,7.42-15.414v-29.113c0-6.23-2.904-11.787-7.42-15.414v-54.048c0-2.771,2.342-5.113,5.113-5.113h30.432    c2.772,0,5.113,2.342,5.113,5.113V375.755z"/>
	</g>
</g>
<g>
	<g>
		<path d="M255.017,176.874c-4.199,0-7.604,3.404-7.604,7.604v19.999c0,4.199,3.405,7.604,7.604,7.604    c4.199,0,7.604-3.404,7.604-7.604v-19.999C262.621,180.278,259.216,176.874,255.017,176.874z"/>
	</g>
</g>
<g>
	<g>
		<path d="M147.918,123.199h-33.776c-13.873,0-25.158,11.286-25.158,25.158v48.009c0,4.2,3.405,7.604,7.604,7.604    c4.199,0,7.604-3.404,7.604-7.604v-48.009c0-5.487,4.464-9.95,9.95-9.95h33.776c4.199,0,7.604-3.404,7.604-7.604    S152.118,123.199,147.918,123.199z"/>
	</g>
</g>
</svg>
                               </span>
                                <span className='hover:text-[#53afe5] cursor-pointer ease-in-out duration-300'>well furnished rooms</span>
                              </p>
                              <p className='flex flex-row items-center text-neutral-600 text-sm uppercase font-semibold space-x-4'>
                                <span className='text-[#53afe5]'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='h-10 w-10' viewBox="0 0 48 48"><path d="M25.476562 1.9785156 A 1.50015 1.50015 0 0 0 23.998047 3.5C23.998047 5.5 23.3125 5.828125 22.0625 6.828125C20.8125 7.828125 18.998047 9.5 18.998047 12.5 A 1.50015 1.50015 0 1 0 21.998047 12.5C21.998047 10.5 22.685547 10.171875 23.935547 9.171875C25.185547 8.171875 26.998047 6.5 26.998047 3.5 A 1.50015 1.50015 0 0 0 25.476562 1.9785156 z M 31.476562 3.9785156 A 1.50015 1.50015 0 0 0 29.998047 5.5C29.998047 6.25 29.852963 6.5637711 29.648438 6.8535156C29.443911 7.1432601 29.099609 7.4257812 28.599609 7.8007812C28.099609 8.1757812 27.443911 8.6432601 26.898438 9.4160156C26.352963 10.188771 25.998047 11.25 25.998047 12.5 A 1.50015 1.50015 0 1 0 28.998047 12.5C28.998047 11.75 29.145084 11.436229 29.349609 11.146484C29.554135 10.85674 29.898437 10.574219 30.398438 10.199219C30.898438 9.8242185 31.554135 9.3567399 32.099609 8.5839844C32.645084 7.8112289 32.998047 6.75 32.998047 5.5 A 1.50015 1.50015 0 0 0 31.476562 3.9785156 z M 14.544922 16C13.600922 16 12.713781 16.371875 12.050781 17.046875C11.383781 17.725875 11.026969 18.623219 11.042969 19.574219C11.274969 32.808219 13.724063 39.642109 15.164062 42.537109C15.907063 44.033109 17.482734 45 19.177734 45L28.783203 45C30.494203 45 32.028109 44.062688 32.787109 42.554688C33.390225 41.355497 34.166696 39.430316 34.888672 36.703125C35.077886 35.943081 35.473278 35.442934 36.160156 34.917969C36.881841 34.366401 37.908309 33.868125 39.005859 33.318359C40.10341 32.768594 41.285968 32.166276 42.279297 31.181641C43.272626 30.197005 44 28.741909 44 27C44 24.256343 41.743657 22 39 22C38.252002 22 37.533393 22.167194 36.865234 22.447266C36.906965 21.521462 36.939341 20.571674 36.957031 19.574219C36.974031 18.622219 36.616219 17.725875 35.949219 17.046875C35.286219 16.371875 34.399078 16 33.455078 16L23 16L23 27C24.105 27 25 27.895 25 29L25 32C25 33.105 24.105 34 23 34L20 34C18.895 34 18 33.105 18 32L18 29C18 27.895 18.895 27 20 27L20 16L14.544922 16 z M 39 25C40.122343 25 41 25.877657 41 27C41 28.008091 40.718718 28.502917 40.166016 29.050781C39.613314 29.598646 38.712684 30.110484 37.662109 30.636719C37.125301 30.905607 36.552771 31.179066 35.976562 31.492188C36.211268 30.021946 36.421371 28.420132 36.583984 26.640625C36.678427 26.308944 36.899632 25.972258 37.255859 25.671875C37.742062 25.261892 38.438829 25 39 25 z"/></svg></span>
                                <span className='hover:text-[#53afe5] cursor-pointer ease-in-out duration-300'>free breakfast</span>
                              </p>

                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
