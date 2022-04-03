import Head from 'next/head'
import FAQs from '../components/FAQs/FAQs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import InfoBox from '../components/InfoBox/InfoBox'


export default function Home() {
  const l1 = [
    {
      id:1,
      data:"FAQ",
    },
    {
      id:2,
      data:"Investor Relations",
    },
    {
      id:3,
      data:"Privacy",
    },
    {
      id:4,
      data:"Speed Test",
    },
  ]
  const l2 = [
    {
      id:1,
      data:"Help Centre",
    },
    {
      id:2,
      data:"Jobs",
    },
    {
      id:3,
      data:"Cookie Preferences",
    },
    {
      id:4,
      data:"Legal Notices",
    },
  ]
  const l3 = [
    {
      id:1,
      data:"Account",
    },
    {
      id:2,
      data:"Ways to Watch",
    },
    {
      id:3,
      data:"Corporate Information",
    },
    {
      id:4,
      data:"Only on Netflix",
    },
  ]
  const l4 = [
    {
      id:1,
      data:"Media Centre",
    },
    {
      id:2,
      data:"Terms of Use",
    },
    {
      id:3,
      data:"Contact Us",
    },
  ]
  const infoBox = [
    {
      id:1,
      heading:"Enjoy on your TV.",
      text:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      imgSrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    },
    {
      id:2,
      heading:"Download your shows to watch offline.",
      text:"Save your favourties easily and always have something to watch.",
      imgSrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    },
    {
      id:3,
      heading:"Watch everywhere.",
      text:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imgSrc:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
    },
    {
      id:4,
      heading:"Create profiles for children.",
      text:"Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
      imgSrc:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
    }
  ]
  return (
    <>
      <Head>
        <title>Netfix India - Watch TV Shows Online, Watch Movies Online</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <link rel="icon" type="image/x-icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"></link>
      </Head>
      <Header/>
      {infoBox.map((item)=>(
        <InfoBox
        heading={item.heading}
        text={item.text}
        imgSrc={item.imgSrc}
        />
      ))}
      <FAQs/>
      <Footer
      l1={l1}
      l2={l2}
      l3={l3}
      l4={l4}
      />
    </>
  )
}