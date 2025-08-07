import React from 'react'
import "../../css/searchmarriage.css"

const SearchMarriage = () => {
  return (
    <>
      <div class="container-input3">
  <input type="text" placeholder="SEARCH MEMBER" name="text" class="input" />
  <svg fill="#000000ff" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path  fill-rule="evenodd"></path>
</svg>
</div>
 <div class="table-wrapper">
    

    <div class="member-box">
      <h2 class="member-title">Groom Details</h2>
      <div class="table-scroll">
        <table class="member-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Blood</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alex Thomas</td>
              <td>Male</td>
              <td>1998-01-15</td>
              <td>27</td>
              <td>9876543210</td>
              <td>O+</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Alex Thomas</td>
              <td>Male</td>
              <td>1998-01-15</td>
              <td>27</td>
              <td>9876543210</td>
              <td>O+</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Alex Thomas</td>
              <td>Male</td>
              <td>1998-01-15</td>
              <td>27</td>
              <td>9876543210</td>
              <td>O+</td>
            </tr>
            
            


          </tbody>
        </table>
      </div>
    </div>



    <div class="member-box">
      <h2 class="member-title">Bride Details</h2>
      <div class="table-scroll">
        <table class="member-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Blood</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Maria Joseph</td>
              <td>Female</td>
              <td>2000-06-21</td>
              <td>25</td>
              <td>9876543211</td>
              <td>A+</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria Joseph</td>
              <td>Female</td>
              <td>2000-06-21</td>
              <td>25</td>
              <td>9876543211</td>
              <td>A+</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria Joseph</td>
              <td>Female</td>
              <td>2000-06-21</td>
              <td>25</td>
              <td>9876543211</td>
              <td>A+</td>
            </tr>
            

          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
  )
}

export default SearchMarriage
