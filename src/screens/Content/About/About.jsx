import './About.css';
import { Carousel } from '../../../components/Carousel/Carousel';

export const About = () => {
  return (
    <>
      <div className='about-wrapper font-body-regular about-txt'>
        <div className='carousel-wrapper'>
          <Carousel />
        </div>
        <div className='text-wrapper'>
          <p>Hi there 👋🏻</p>
          <p>I’m Ale, a Product Designer based in Madrid.</p>
          <br />
          <p>I’ve always been a creative person, but I’ve also had a love for the logic of math and the thrill of solving problems.</p>
          <p className='section-title'>Creativity</p>
          <p>As a kid, I loved watching a craft show for children with my mom called Art Attack. I was obsessed with making things, especially when it involved the show’s famous “Art Attack mixture” – a gooey blend of white glue, water, and newspaper or paper towels. In my free time, I’d often draw in a comic or manga style, letting my imagination run wild.</p>
          <br />
          <p>Nowadays I really enjoy taking pictures with my Fujifilm camera (Astrophotography and Street photography)</p>
          <p className='section-title'>Problem-solving</p>
          <p>Math was always one of my strengths, and for a long time, I dreamed of becoming an architect. I had a knack for technical drawing and spatial reasoning. But life had other plans – I ended up enrolling in an arts-focused high school and later pursued a degree in Graphic Design.</p>
          <br />
          <p>During my studies, I took a programming course where I learned the basics of HTML, CSS, and Java. It was a revelation. I loved coding so much that I landed an internship as a front-end developer for a digital fashion magazine for iPads, where my teammate and I dabbled in JavaScript (while I was still studying).</p>
          <br />
          <p>Thanks to programming, I discovered web design, which led to my first job as a web designer at a well-known printing company in Madrid. I worked on proposals for national museums, banks, and other big clients. Looking back, I can’t believe we designed everything in Adobe Photoshop. It’s funny – and a little horrifying – to think about now!</p>
          <p className='section-title'>Why UX Design?</p>
          <p>My second job was the turning point. I joined a startup as a Visual Designer, working across both Marketing and Product. It was there that Carlos, the Lead Product Designer, introduced me to the world of UX design.</p>
          <br />
          <p>I’ll never forget the first time I showed him a small mobile flow I’d designed. I thought it was awesome and super intuitive. His response? “Make a prototype and test it with five users.”</p>
          <br />
          <p>So, I rolled up my sleeves, whipped up a prototype using Sketch and Adobe XD, and tested it with five people. To my surprise, parts of the flow didn’t make sense to them at all. Instead of being discouraged, I was hooked. When I told Carlos what I’d learned, he said, “Now fix what doesn’t work and test it again.” That was the moment I truly understood what it meant to iterate.</p>
          <br />
          <p>That day, I decided I wanted to be a Digital Product Designer.</p>
        </div>
      </div>
    </>
  )
}