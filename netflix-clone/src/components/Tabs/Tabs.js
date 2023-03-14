import React from 'react';
import { tabLabels } from './Constant';
import { Link } from 'react-router-dom';
import "./Tabs.css";

const Tabs = ({activeTabName, onClickTab}) => {
    const {CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE} = tabLabels;

    const renderTabTitle = (tabTitle, isActive, icon, id) => (
        <div onClick={()=>onClickTab(tabTitle)} id={id} className={`tab-item ${isActive && "tab-border"}`}>
            <i className={icon}></i>
            <p>{tabTitle}</p>
        </div>
    )
  return (
    <>
      <section className='tabs'>
        <div className="container">
            {renderTabTitle(CANCEL_AT_ANY_TIME, activeTabName===CANCEL_AT_ANY_TIME, "fas fa-door-open fa-3x","tab-1")}
            {renderTabTitle(WATCH_ANYWHERE, activeTabName===WATCH_ANYWHERE, "fas fa-tablet-alt fa-3x","tab-2")}
            {renderTabTitle(PICK_YOUR_PRICE, activeTabName===PICK_YOUR_PRICE, "fas fa-tags fa-3x","tab-3")}
        </div>
      </section>
      {activeTabName===CANCEL_AT_ANY_TIME &&(
        <section className='tab-content'>
            <div className='container'>
                <div id="tab-1-content" className={`tab-content-item ${activeTabName===CANCEL_AT_ANY_TIME && "show"}`}>
                    <div className='tab-1-content-inner'>
                        <div>
                            <p className='text-lg'>
                                If you decide NetFlix isn't for you - no problem. No Commitment. Cancel Anytime
                            </p>
                            <Link to="/netflix-show" className='btn btn-lg'>
                                Watch Free for 30 days
                            </Link>
                        </div>
                        <img src='https://i.ibb.co/J2xDJV7/tab-content-1.png' alt='' />
                    </div>
                </div>
            </div>
        </section>
      )}
      {activeTabName===WATCH_ANYWHERE &&(
        <section className='tab-content'>
            <div className='container'>
                <div id="tab-2-content" className={`tab-content-item ${activeTabName===WATCH_ANYWHERE && "show"}`}>
                    <div className='tab-2-content-top'>
                        <div>
                            <p className='text-lg'>
                                Watch Tv shows anytime anywhere - personlized for you
                            </p>
                            <div>
                            <Link to="/netflix-show" className='btn btn-lg'>
                                Watch Free for 30 days
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className='tab-2-content-bottom'>
                        <div>
                            <img src='https://i.ibb.co/DpdN7Gn/tab-content-2-1.png' alt='' />
                            <p className='text-md'>Watch on your TV</p>
                            <p className='text-dark'>
                            Smart TVs, PlayStation, Xbox, ChromeCast, Apple TV, Blue-ray players and more
                            </p>
                        </div>
                        <div>
                            <img src='https://i.ibb.co/R3r1SPX/tab-content-2-2.png' alt='' />
                            <p className='text-md'>
                                Watch instantly or download for later
                            </p>
                            <p className='text-dark'>
                                Available on phone and tablet, whereever you go
                            </p>
                        </div>
                        <div>
                            <img src='https://i.ibb.co/gDhnwWn/tab-content-2-3.png' alt=''></img>
                            <p className='text-md'>
                                Use any computer
                            </p>
                            <p className='text-dark'>
                               Watch right now only on Netflix.com
                            </p>
                        </div>
                        </div>

                </div>
            </div>
        </section>
      )}
    </>
  )
}

export default Tabs
