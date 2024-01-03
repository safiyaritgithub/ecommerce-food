import React from 'react'
import { Picsection } from './1picsection'
import { BestSellers } from './bestSellers'
import { Fire } from './fire'
import { Flavour } from './flavour'
import { Inbox } from './inbox'
import { Maker } from './maker'
import {ThreeCards} from './threeCards'
import { Footer } from '../../common/footer'










export const Home = () => {
  return (
    <div>
      
      <Picsection/>
      <BestSellers/>
      <Flavour/>
      <Fire/>
      <Inbox/>
      <Maker/>
      <ThreeCards/>
      <Footer/>

      
      
    </div>
  )
}
