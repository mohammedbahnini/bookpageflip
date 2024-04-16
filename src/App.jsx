import React, { Component, forwardRef, useState } from 'react'
import HTMLFlipBook from "react-pageflip";
import './index.css';


const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}> /* ref required */
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

const cover = '/pages/1.webp';
const end = '/pages/25.webp';
const images = [
  '/pages/2.webp',
  '/pages/3.webp',
  '/pages/4.webp',
  '/pages/5.webp',
  '/pages/6.webp',
  '/pages/7.webp',
  '/pages/8.webp',
  '/pages/9.webp',
  '/pages/10.webp',
  '/pages/11.webp',
  '/pages/12.webp',
  '/pages/13.webp',
  '/pages/14.webp',
  '/pages/15.webp',
  '/pages/16.webp',
  '/pages/17.webp',
  '/pages/18.webp',
  '/pages/19.webp',
  '/pages/20.webp',
  '/pages/21.webp',
  '/pages/22.webp',
  '/pages/23.webp',
  '/pages/24.webp',
];


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0
    };
  }




  nextButtonClick = () => {

    this.flipBook.pageFlip().flipNext('bottom');


  };

  prevButtonClick = () => {
    this.flipBook.pageFlip().flipPrev();
  };

  render() {

    return (
      <>
        <div className='container' style={{ overflow: 'hidden', width: '65vw' }}>

          <div className='book' >
            <HTMLFlipBook
              width={700}
              height={980}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              ref={(el) => (this.flipBook = el)}
            >
              <div className="page page-cover" data-density="hard">
                <div className='page-content'>
                  <img src={cover} alt="" />
                </div>
              </div>
              {
                images.map((item, index) => {
                  return (
                    <div className="page" key={index}>
                      <div className="page-content">
                        <img src={item} alt="" />
                      </div>
                    </div>

                  )
                })
              }

              <div className="page" >
                <div className="page-content" style={{width : '100%' , height : '100%' ,  backgroundColor : 'white'}}>
                  
                </div>
              </div>

              <div className="page page-cover" data-density="hard">
                <div className='page-content'>
                  <img src={end} alt="" />
                </div>
              </div>


            </HTMLFlipBook>
          </div>


          <div className="controls">
            
            <button type="button" onClick={this.prevButtonClick}>
            الصفحة السابقة
            </button>

            <button type="button" onClick={this.nextButtonClick}>
            الصفحة الموالية
            </button>
          </div>

        </div>



      </>
    )
  }

}

export default App
