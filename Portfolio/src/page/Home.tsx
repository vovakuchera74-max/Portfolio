import s from "../style/Home.module.scss"
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TypeWriter } from "../components/TypeWriter";
export const Home = ()=>{

    return(
       <div className={s.Container}>

        <div className={s.left}>
            <div className={s.leftBlock}>
                <div className={s.name}>Hi,I'm Volodymyr</div>
                <div className={s.info}>I'm a 18 year old web developer from Ukraine, Ivano-Frankivsk.I Specializing in building modern, accessible, and high-performing web applications with <span className={s.tehno}>
  <FaReact color="#61DAFB" size={35} className={s.icon} />
  React 
</span>
 & 
<span className={s.tehno}>
  <SiTypescript color="#3178C6" size={28} className={s.icon1} />
  TypeScript
</span></div>
                <div className={s.lansuages}><div className={s.lansuagesWord}>Languages: </div> <div className={s.lansuage}><span className={s.words}>English</span></div> <div className={s.lansuage}><span className={s.words}>Ukraine</span></div></div>

                <div className={s.status}>
                    <div className={s.statusBox}>
                        <div className={s.stats1}>
                            <div className={s.s}><div className={s.dot1} ></div></div>
                            <div className={s.Block}>
                                <div className={s.infotop}>status</div>
                                <div className={s.infoBottom}>Open for work</div>
                            </div>
                        </div>
                         <div className={s.stats1}>
                            <div className={s.s}><div className={s.dot} ></div></div>
                            <div className={s.Block}>
                                <div className={s.infotop}>coding</div>
                            <div className={s.infoBottom}>1 year</div>
                            </div>
                            
                        </div>
                         <div className={s.stats1}>
                            <div className={s.s}><div className={s.dot} ></div></div>
                            <div className={s.Block}>
                                <div className={s.infotop}>work</div>
                            <div className={s.infoBottom}>0 years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.right}>
            <div className={s.rightblock}>
             <div className={s.righttop}><span className={s.dot2}></span><span className={s.dot3}></span><span className={s.dot4}></span></div>
            <div className={s.rightbottom}><TypeWriter></TypeWriter></div>
            </div>
        </div>


       </div>
    )
}