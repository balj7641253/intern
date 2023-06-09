import React from 'react'
import New from './New'
import Header from './Header'
import Contents from './Contents'
import Strike from './Strike'




export default function Home() {
  return (
    <div>

      <New />
      <Header />
      <br></br>
      <div className='str'>
        <Contents title={"CALLS"} />
        <br>
        </br>
        <Strike />


        <Contents title={"PUTS"} />
      </div>
      <br></br>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 " id="exampleModalLabel">Max Profit</h1>
              <h1 class="modal-title fs-5" id="exampleModalLabel">Max Profit</h1>
              <h1 class="modal-title fs-5" id="exampleModalLabel">Max Profit</h1>
              <h1 class="modal-title fs-5" id="exampleModalLabel">Max Profit</h1>
              <h1 class="modal-title fs-5" id="exampleModalLabel">Max Profit</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      



    </div>
  )
}
