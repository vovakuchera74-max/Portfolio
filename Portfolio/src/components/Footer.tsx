import s from "../style/Footer.module.scss"
import { Link } from "react-router-dom"
import { MdFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTelegram2Line } from "react-icons/ri";
import { useState,useEffect } from "react";
import { Clock } from 'lucide-react';
export const Footer = ()=>{
const [time, setTime] = useState(new Date())

useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date())
  }, 1000)
  
  return () => clearInterval(interval)
}, [])

    return(
        <footer className={s.Footer}>
            <div className={s.footerBox}>
                <div className={s.NameBlock}>
                    <div className={s.name}>Kuchera Volodymyr</div>
                    <div className={s.dotandwork}>
                    <div className={s.dot}></div>
                    <span className={s.work}>Open for work</span>
                    </div>
                    
                </div>
                <div className={s.socialFooter}>
                    <div className={s.links}>
  <Link className={s.AA} to={"/"}>main</Link>
  <span className={s.dot2}>·</span>
  <Link className={s.AA} to={"/feat/skills"}>feat/skills</Link>
  <span className={s.dot3}>·</span>
  <Link className={s.AA} to={"/release/projects"}>release/projects</Link>
  <span className={s.dot2}>·</span>
  <div className={s.resume}><span className={s.soctag}><MdFileDownload size={21} /></span> <a href="">resume</a></div>
</div>
                    <div className={s.anyLinks}>
                         <a href="https://github.com/vovakuchera74-max" className={s.aa}><span><FaGithub className={s.soctag} size={22}/></span><span className={s.spantext}>GitHub</span></a>
                         <a href="mailto:vovakuchera74@gmail.com" className={s.aa}><span><MdEmail className={s.soctag} size={22}/></span><span className={s.spantext}>Email</span></a>
                         <a href="https://t.me/Darkdszxc" className={s.aa}><span><RiTelegram2Line className={s.soctag} size={22}/></span><span className={s.spantext}>Telegram</span></a>
                    </div>
                </div>
                <div className={s.time}>
                    <div className={s.TimeCountry}><span className={s.icon}> <Clock  size={20}/></span><span className={s.Country}>Time in Ukraine</span></div>
                    <div className={s.gg}>{time.toLocaleTimeString('uk-UA', { timeZone: 'Europe/Kyiv' })}</div>
                </div>
            </div>

        </footer>
    )
}