import  Image  from 'next/image';
import { Carousel } from 'antd'
import React, { useEffect, useState, useRef } from "react";
import clock from '../public/clock.png';
import slider1 from '../public/slide1.jpg'
import slider2 from '../public/slide2.jpg'
import slider3 from '../public/slide3.jpg'
import slider4 from '../public/slide4.jpg'
import bish from '../public/bish.png'
import nomad from '../public/nomad.jpg'
import isyklake from '../public/isyklake.jpg'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';



// export async function getInitialProps(){
    // return {
    //     props: { faq: null)}
    // }
//  }

export function getStaticProps({locale}){
    return {
      props: {
        messages: require(`../lang/${locale}.json`)
      }
    }
  }
  



const  allTours = (props) => {
    const router = useRouter(),
    {search, tag} = router.query

    const t = useTranslations('header')


    const [tours, setTours] = useState()
    useEffect(()=>{
        const fetchdata = async () => {
            const req = await fetch(`http://127.0.0.1:8000/ru/api/v1/tours/?is_draft=false&search=${search}&tags__name=${tag || ''}`)
            const res = await req.json()
            setTours(res.data)
        }
        fetchdata()
    },[search])
    

    const videoBg = '/ktour.mp4'

    return(
        <>

        

        <section className='banner'>
            <div id="banner" style={{height: '340px',}}>
                <Carousel autoplay='6.6'  dotPosition={'right'} easing >
                    <div className='home_slider1'>
                        <Image className='slideimg1' src={slider1} alt='asa' unoptimized priority style={{width:'100%', height: '400px', objectFit: 'cover'}} />
                    </div>
                    <div className={'home_slider1'}>
                        <Image className={'slideimg1'} src={slider2} alt='asa' unoptimized priority style={{width:'100%', height: '400px', objectFit: 'cover'}} />
                    </div>
                    <div className={'home_slider1'}>
                        <Image className={'slideimg1'} src={slider3} alt='asa' unoptimized style={{width:'100%', height: '400px', objectFit: 'cover'}} />
                    </div>
                    <div className={'home_slider1'}>
                        <Image className={'slideimg1'} src={slider4} alt='asa' unoptimized style={{width:'100%', height: '400px', objectFit: 'cover'}} />
                    </div>

                </Carousel>
                
            </div>
        </section>
       <br/>


        <section className=" sectionservice works">
            <h2 className="section_title">Все туры</h2>

        </section>
        <div className="container">
            
         
            <div className="prc card-blur"> 
                
                {
                tours?.map(t => {
                    const src = t.image
                    return (
                        <Link href={{ pathname: '/tours',  query: { id: t.id, comment: 'asdsa'}}}
                        key={t?.id} class="alltours__card card">
                        <div class="images-block" style={{height:'100%'}}>
                        <Image className='alltours__cardBg'  width={300} height={350} loader={() => src} src={src} alt="bish"/>
                            <span class="images-block__info">
                            <span class="icon icon-logo hidden-sm"></span>
                            <span class="images-block__info-bottom">
                                <span class="alltours__card-text">{t.name}</span>
                                <span class="images-block__amount"></span>
                                <span className="card__tags">
                                    {
                                        t.tags.map((str , idx)=> (
                                            <Link href={{pathname:'/gallery', query: {tag:str}}} key={idx}> #{str} </Link>
                                        ))
                                    }
                                </span>
                            </span>
                            </span>
                        </div>
                    </Link>
                )})
            }
              {
                tours?.map(t => {
                    const src = t.image
                    return (
                        <Link href={{ pathname: '/tours',  query: { id: t.id, comment: 'asdsa'}}}
                        key={t?.id} class="alltours__card card">
                        <div class="images-block" style={{height:'100%'}}>
                        <Image className='alltours__cardBg'  width={300} height={50} loader={() => src} src={src} alt="bish"/>
                            <span class="images-block__info">
                            <span class="icon icon-logo hidden-sm"></span>
                            <span class="images-block__info-bottom">
                                <span class="alltours__card-text">{t.name}</span>
                                <span class="images-block__amount"></span>
                                <span className="card__tags">
                                    {
                                        t.tags.map((str , idx)=> (
                                            <Link href={{pathname:'/gallery', query: {tag:str}}} key={idx}> #{str} </Link>
                                        ))
                                    }
                                </span>
                            </span>
                            </span>
                        </div>
                    </Link>
                )})
            }
            {
                tours?.map(t => {
                    const src = t.image
                    return (
                        <Link href={{ pathname: '/tours',  query: { id: t.id, comment: 'asdsa'}}}
                        key={t?.id} className="alltours__card card">
                        <div className="images-block" style={{height:'100%'}}>
                        <Image className='alltours__cardBg' width={300} height={50} loader={() => src} src={src} alt="bish"/>
                            <span className="images-block__info">
                            <span className="icon icon-logo hidden-sm"></span>
                            <span className="images-block__info-bottom">
                                <span className="alltours__card-text">{t.name}</span>
                                <span className="images-block__amount"></span>
                                <span className="card__tags">
                                    {
                                        t.tags.map((str , idx)=> (
                                            <Link href={{pathname:'/gallery', query: {tag:str}}} key={idx}> #{str} </Link>
                                        ))
                                    }
                                </span>
                            </span>
                            </span>
                        </div>
                    </Link>
                )})
            }
            {/* {
                tours?.map(t => {
                    const src = t.image
                    return (
                    <Link href={{ pathname: '/tours',  query: { id: t.id, comment: 'asdsa'}}}
                         key={t?.id} class="alltours__card card">
                        <div class="images-block" >
                        <Image className='altours__card-bg' fill loader={() => src} src={src} alt="bish"/>
                            <span class="images-block__info">
                            <span class="icon icon-logo hidden-sm"></span>
                            <span class="images-block__info-bottom">
                            <span class="alltours__card-text">{t.name}</span>
                                <span class="images-block__amount"></span>
                                <span  className="card__icon altours__card-geo" data-title={t.tags.join(', ')}>
                                    <img className="card__icon" src={'/gps.png'}/>
                                </span>
                            </span>
                            </span>
                        </div>
                    </Link>
                )})
            } */}
           
           
            <div >
                
            </div>
                
                
                

                

            </div>
        </div>

      

            <div className='home__parallax'/>

        </>
    )
}



 export default allTours;


