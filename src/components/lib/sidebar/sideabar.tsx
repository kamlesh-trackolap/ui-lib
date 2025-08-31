import React from 'react'
import './sidebar.css'
import Link from 'next/link'
const Sidebar = ({ style, search = true }) => {
    return (
        <div className='sb-container' style={style}>
            {
                search && <div className='sb-header'>
                    <input type="text" placeholder='Search something .....' className='sb-header__search' />
                </div>
            }
            <div className='sb-body__container'>
                <div className='sb-body'>
                    {/* headign is optional */}
                    <span className='body-heading'>heading</span>
                    <div className='sb-items'>
                        <Link href={"/"} className='active'>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                    </div>
                </div>


                <div className='sb-body'>
                    <div className='sb-items'>
                        <Link href={"/"} className='active'>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                    </div>
                </div>

                <div className='sb-body'>
                    {/* headign is optional */}
                    <span className='body-heading'>heading</span>
                    <div className='sb-items'>
                        <Link href={"/"} className='active'>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                        <Link href={"/"}>
                            <button>icons</button>
                            <span>2.2</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
