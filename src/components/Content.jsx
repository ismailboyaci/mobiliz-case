import React from 'react'
import ContentCard from './ContentCard'
import e1 from '../assets/egea.png'
import e2 from '../assets/egea1.png'
import e3 from '../assets/citroen.png'
import k1 from '../assets/focus.png'
import k2 from '../assets/dacia.png'
import k3 from '../assets/ecosport.png'
import p1 from '../assets/audi.png'
import p2 from '../assets/merco1.png'
import p3 from '../assets/merco2.png'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Content() {
    const navigate = useNavigate()
    const click = () => {
      navigate("/adminlogin")
    }
  return (
    <>
    <Header click={click} />
    <div className="container">
        <div className="row mt-5">
            <div className="col-4">
                <ContentCard image1={e1} image2={e2} image3={e3} id={1} title={"Economic Cars"} />
            </div>
            <div className="col-4">
                <ContentCard image1={k1} image2={k2} image3={k3} id={2} title={"Comfort Cars"} />
            </div>
            <div className="col-4">
                <ContentCard image1={p1} image2={p2} image3={p3} id={3} title={"Premium Cars"} />
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Content