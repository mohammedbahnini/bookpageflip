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

const cover = '/book/cover.PNG';
const images = [
  '/book/page1.PNG',
  '/book/page2.PNG',
  '/book/page3.PNG',
  '/book/page4.PNG',
  '/book/page5.PNG',
  '/book/page6.PNG',
  '/book/page7.PNG',
  '/book/page8.PNG'
];


export class App extends Component {
  constructor(props) {
    super(props);
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
        <div className='container' style={{ overflow: 'hidden' , width : '900px' }}>
          
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
                <img src={cover} alt="" />
              </div>
              {images.map(item => {
                return (
                  <div className="page">
                    <img src={item} alt="" />
                  </div>

                )
              })}
              



              <div className="page page-cover" data-density="hard">
                <div className='page-content'>

                </div>
              </div>

            </HTMLFlipBook>
          </div>


          <div className="controls">
            <button type="button" onClick={this.prevButtonClick}>
              Previous page
            </button>


            <button type="button" onClick={this.nextButtonClick}>
              Next page
            </button>
          </div>

        </div>



      </>
    )
  }

}

export default App
