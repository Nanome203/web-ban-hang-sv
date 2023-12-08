import React from 'react'
import NavigationHeader from '../components/NavigationHeader.js';
import ProductsDisplay from '../components/ProductsDisplay.js';
import SideBar from '../components/SideBar.js';
import SlideShow from '../components/SlideShow.js';
function HomePage() {
    return (
        <>
            <NavigationHeader />
            <div id='pageBody' style={{ height: '200vh', display: 'flex' }}>
                <SideBar />
                <div id='contentBody' style={{ width: '80%', height: '100%' }}>
                    <SlideShow />
                    <ProductsDisplay />
                </div>
            </div>
        </>
    )
}

export default HomePage