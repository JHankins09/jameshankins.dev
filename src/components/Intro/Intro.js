import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'
import Me from './photo.jpg'
import './Intro.css'

const text = '♫B)🎶♬'

// <p className='introDescription'>
// I hope you enjoy a few of my favorite tunes
// while getting to know a bit about me!
// <br/>
// <br/>
// I’m a Seattle based Software Developer
// with a true passion for creating outstanding content online. How I managed
// to find that passion (or end up in Seattle!) are a bit of a long story,
// but don't worry! &mdash; You can read all about it on the 'My Story' section!
// <br/>
// <br/>
// To give a quick overview of some of my driving philosophies, I believe no
// individual is greater than the sum of their tribe, everything should be
// built for mobile, and that so called "Dad Jokes" are the pinical of
// hilarity. I hope your time on my site allows me to proove these things.
// <br/>
// <br/>
// Now then... Let's get rockin' {ReactEmoji.emojify(text)}</p>

const Intro = () => (
  <Fragment>
    <div className='introWrapper'>
      <div className='imageWrapper'>
        <img className='introPhoto' src={Me} alt='James B. Hankins' />
        <h1 className='introTitle'>Hi, i'm James {ReactEmoji.emojify('👋')}<br/>
        <br/>
        I'm a Seattle based Software Developer / Marketer.
        <br/>
        <br/>
        Thanks for visiting my page!</h1>
      </div>
      <div className='textWrapper'>
      </div>
    </div>
  </Fragment>
)

export default Intro
