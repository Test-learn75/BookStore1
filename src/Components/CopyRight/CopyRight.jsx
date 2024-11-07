// import CopyRight.css................
import './CopyRight.css'

// import Footer Social Data............
import { FootersLinksData } from '../../Data/Data'

export default function CopyRight() {
  return (
    <div className='footer-copyright'>
        <div className="container copyright-container">
            <p>© copyright 2024 All rights reserved || Made with ❤️ by Qualihom</p>
            <div className="footer-socials">
                {
                    FootersLinksData.socials.map((item,index)=>{
                       return(
                        <a href={item.link} key={index}>
                           <item.icon />
                        </a>
                       )
                    })
                }
            </div>            
        </div>
    </div>
  )
}
