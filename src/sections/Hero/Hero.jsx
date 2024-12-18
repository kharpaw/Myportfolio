import styles from './HeroStyle.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg'; 
import githubDark from '../../assets/github-dark.svg'; 
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from'../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const{theme, toggleTheme}= useTheme(); 

    const themeIcon  = theme === 'light' ? sun : moon;
    const twitterIcon  = theme === 'light' ? twitterLight : 
    twitterDark;
    const githubIcon  = theme === 'light' ? githubLight : 
    githubDark;
    const linkedinIcon  = theme === 'light' ? linkedinLight: 
    linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero}
          src={heroImg} 
          alt="Profile Picture of Mr: Pawan Kharel" 
        />
        <img 
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Pawan <br /> Kharel
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter logo" />
          </a>
          <a href="https://github.com/" target="_blank" >
            <img src={githubIcon} alt="Github logo" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn logo" />
          </a>
        </span>
        <p className={styles.description}>I am a software developer student. 
        At the moment I am learning modern javascript. I have a solid understanding of WordPress, including theme customization, plugin integration, and website optimization.
        </p>
        <a href={CV} download>
            <button className='hover'>
            Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
