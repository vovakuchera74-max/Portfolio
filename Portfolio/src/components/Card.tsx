
import s from "../style/Card.module.scss"


export const Card = ()=>{


    return(
        <div className={s.Card}>
            <div className={s.Cardtop}>
                <div className={s.some}></div>
                <div className={s.name}></div>
                <div className={s.Linkword}></div>
                <div className={s.Linkk}></div>

            </div>
            <div className={s.cardbottom}>

            </div>

        </div>
    )
}