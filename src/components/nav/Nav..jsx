import React from 'react'

const Nav = () => {
  return (
    <header className='header' id='header'>
        <nav className='nav'>

            <div className='nav-left'>
                <p className='full-name h1'>
                    <a href='#header'>
                        <span className='first-name'>S</span>
                        <span className='last-name'>A</span>
                    </a>
                </p>
            </div>

            <div className='nav-right'>
                <ul>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Projects</li>
                </ul>
                <button className='contact-btn' data-toggle='modal' data-target='#myModal'>
                    <span className='copy'>Contact Me</span>
                    <span className='icons'>
                        <span className='mail fas fa-envelope'></span>
                        <span className='phone fas fa-mobile-alt'></span>
                    </span>
                </button>
            </div>

        </nav>

        <div className='modal fade contact-modal' id='myModal'>
            <button type='button' className='close contact-modal-close' data-dismiss='modal'>&times;</button>
            <div className='modal-dialog contact-modal-container modal-md'>
                <div className='modal-contact contact-modal-wrapper'>
                   
                   <div className='modal-body contact-modal-body'>
                        <div className='modal-body--wrapper'>

                            <div className='left'>
                                <p className='h1'>Sagid Anowar</p>
                            </div>

                            <div className='right'>
                                <div>
                                    <a href='mailto:sagidanowar@gmail.com'>
                                        <span className='mail fas fa-envelope'></span>
                                    </a>
                                </div>
                                <div>
                                    <a href='tel:3475302078'>
                                        <span className='phone fas fa-mobile-alt'></span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div> 

                </div>
            </div>
        </div>
    </header>
  )
}

export default Nav