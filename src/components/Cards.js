import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Card Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='(props.text) Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='(props.label)'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Customers that we have worked for'
              label='Testimonials'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='OrtegaScape Services Description'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='(props.text.) Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='(props.label)'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='(props.text.) Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='(props.label)'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
