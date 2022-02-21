import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./styles.module.css"
import CustomInput from '../CustomInput/CustomInput'
import ButtonRed from '../ButtonRed/ButtonRed'

function FAQs({heading, content}) {
  const faq = [
    {
      id:1,
      heading:"What is Netflix?",
      content:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      id:2,
      heading:"How much does Netflix cost?",
      content:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      id:3,
      heading:"Where can I watch?",
      content:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id:4,
      heading:"How do I cancel?",
      content:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id:5,
      heading:"What can I watch on Netflix",
      content:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id:6,
      heading:"Is Netlfix good for kids?",
      content:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    }

  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Frequently Asked Questions</h1>
        {faq.map((item)=>(
          <Accordion key={item.id} sx={{
            backgroundColor:"rgb(52, 52, 52)",
            color:"white",
            marginBottom:"0.5rem",
            padding:"0.2rem",
            marginLeft:"1rem",
            marginRight:"1rem",
            }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
        ))}
        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className={styles.inputBox}>
          <CustomInput
          type={"text"}
          placeholder={"Email address"}
          />
          <div style={{marginTop:"1rem"}}><ButtonRed input={"Get Started"}/></div>
        </div>
      </div>
    </div>
  )
}

export default FAQs