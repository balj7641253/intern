import React from 'react'
import Smallcard from './Smallcard'


export default function Header() {
    return (
        <div>
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="mt-5 flex space-between min-w-0 flex-1">
                    <input className='inp-hed' type='text' placeholder='script' />
                    <input className='inp-hed' type='text' placeholder='Exp' />
                    <div>
                        <Smallcard title={"Spot"} price={"18,245.3"} change={"0.35%"} />
                        <Smallcard title={"Fut"} price={"18,251.3"} change={"0.35%"} />
                    </div>
                    <div>
                        <Smallcard title={"Max Pain"} price={"18,245.3"} />
                        <Smallcard title={"PCR"} price={"0.92"} />
                        <Smallcard title={"Support"} price={"18100"} />
                        <Smallcard title={"Resistance"} price={"18500"} />
                    </div>
                    <div class="mt-5 flex lg:ml-4 lg:mt-0">
                        <span class="hidden sm:block">
                        <button type="button" class="btn btn-primary bg-white text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Filters
                            </button>
                        </span>
                        <span class="hidden sm:block">
                            <button type="button" class="btn btn-primary bg-white text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Basket
                            </button>
                        </span>
                    </div>

                </div>
                <div class="mt-5 flex lg:ml-4 lg:mt-0">
                    <span class="hidden sm:block">
                        <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                            </svg>
                            Edit
                        </button>
                    </span>



                    <span class="sm:ml-3">
                        <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                            Greeks
                        </button>
                    </span>



                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 " id="exampleModalLabel">Max Profit</h1>
              <h1 class="modal-title fs-5" id="exampleModalLabel">Max Profit</h1>
              
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              CSS STYLING PART
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary bg-white text-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary bg-white text-dark">Place orders</button>
            </div>
          </div>
        </div>
      </div>


        </div>
    )
}
