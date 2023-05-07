import React from 'react';
import photogrid from '../images/airbnb-pics.png';
import '../styles/navbar.css'

export default function Grid(){

    return(
        <section className='grid'>
            <img src={photogrid} alt='' className="grid--photo"/>
            <h1 className="grid--header">Online Experiences</h1>
            <p className="grid--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}