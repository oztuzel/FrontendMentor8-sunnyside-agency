import './index.css';
import Navbar from './components/Navbar';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import images from './images/images';
import React, {Fragment} from 'react';
import Client from './components/Client';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment >
      <div className='header'>
        <Navbar />
        <img src={images.header} className='img' alt='header'/>
        <h1 className='header__h1'>WE ARE CREATIVES</h1>
        <img src={images.arrowDown} className='arrowDown' alt='arrow' />
      </div>
      <div className='cards'>
        <Card1 
          title={'Transform your brand'} 
          parag={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'} 
          p={'LEARN MORE'}
        />
        <Card2 img={images.transform} />
      </div>
      <div className='cards'>
        <Card2 img={images.standout}/>
        <Card1 
          title={'Stand out to the right audience'} 
          parag={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'} 
          p={'LEARN MORE'}/>
      </div>
      <div className='cards3'>
        <Card1 />
        <Card1 />
      </div>
      <div className='cards'>
        <Card3 
          img={images.design} 
          title={'Graphic Design'} 
          parag={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'}
          clas={'green'}
        />
        <Card3 
          img={images.photography}
          title={'Photography'}
          parag={'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'}
          clas={'blue'}
        />
      </div>
      <div className='testimonial__container' >
        <h1 className='client__header'> CLIENT TESTIMONIALS</h1>
        <div className='testimonial'>
          <Client 
            img={images.emily} 
            p={'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'} 
            name={'Emily R.'} 
            job={'Marketing Director'} 
          />
          <Client 
            img={images.thomas} 
            p={'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'} 
            name={'Thomas S.'} 
            job={'Chief Operating Officer'} 
          />
          <Client 
            img={images.jennie} 
            p={'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'} 
            name={'Jennie F.'} 
            job={'Business Owner'} 
          />
        </div>
      </div>
      <div className='photos'>
        <img src={images.milkbottles} alt='milk' className='photos__image'/>
        <img src={images.orange} alt='orange' className='photos__image'/>
        <img src={images.cone} alt='cone' className='photos__image'/>
        <img src={images.sugarcubes} alt='sugar' className='photos__image'/>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
