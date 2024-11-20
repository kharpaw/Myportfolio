import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
 
function Skills() {
  return (
    <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
  <div><SkillList src={checkMarkIcon} skill="HTML" /></div>
  <div><SkillList src={checkMarkIcon} skill="CSS" /></div>
  <div><SkillList src={checkMarkIcon} skill="JavaScript" /></div>
  <div><SkillList src={checkMarkIcon} skill="Tailwind CSS" /></div>
  <div><SkillList src={checkMarkIcon} skill="PHP" /></div>
  <div><SkillList src={checkMarkIcon} skill="C" /></div>
  <div><SkillList src={checkMarkIcon} skill="React" /></div>
  <div><SkillList src={checkMarkIcon} skill="MySQL" /></div>
</div>


    </section>
  )
}

export default Skills