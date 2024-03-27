// import LogoTitle from '../../assets/images/logo-s.png'
import LogoD from '../../MyImages/LogoD.png'
import {Link} from "react-router-dom"
import './index.scss'
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D', 'i', 'e', 'g', 'o']
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r',' ', 'E', 'n', 'g','i', 'n','e', 'e','r']
    useEffect(() => {
         setTimeout(() => {
             return setLetterClass('text-animate-hover')
            }, 4000)
    }, []);

    return (
        <>
        <div className={"container home-page"}>
            <div className={"text-zone"}>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={'${letterClass} _12'}>i,</span>
                    <br/>
                    <span className={'${letterClass} _13'}>I</span>
                    <span className={'${letterClass} _14'}>'m </span>
                    {/*<img src={LogoD} alt={"developer"}/>/!* Change with own logo and name *!/*/}
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={nameArray}
                                     idx={15}/>
                    <br/>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={15}/>
                </h1>
                <h2>Firmware Engineer</h2>
                <Link to={"/Contact"} className={'flat-button'}> CONTACT ME</Link>
            </div>
            <Logo />
        </div>
            <Loader type={"pacman"} />
        </>
    )
}

export default Home