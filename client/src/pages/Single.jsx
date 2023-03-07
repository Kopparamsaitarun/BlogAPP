import React from 'react'
import Tarun from "../img/tarun.png"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="http://destinationksa.com/wp-content/uploads/2015/08/optimized-art-in-our-lives-abstract-art-2.jpg" alt="" />
        <div className="user">
          <img src={Tarun} alt="" />
          <div className="info">
            <span>Tarun</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/Write?edt=2`}>
            <img src={Edit}alt=""/>
            </Link>
            <img src={Delete}alt=""/>
          </div>
        </div>
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
          The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et malorum'.
            The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today.
            <br />
            <br/>
            
             The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at Hampden Sydney College. McClintock connected Lorem ipsum to Cicero's writing sometime before 1982 while searching for instances of the Latin word consectetur, which was rarely used in classical literature.
             McClintock first published his discovery in a 1994 letter to the editor of Before & After magazine, contesting the editor's earlier claim that Lorem ipsum held no meaning.
       </p>
     </div>
     <Menu/>   
    </div>
  )
}

export default Single