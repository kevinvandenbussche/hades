import '../../asset/css/generic.css';
import './sectionPrincipal.css'


export function SectionPrincipal(props){
    return(
        <section>
            {props.sectionPrincipal.map((item)=>{
                let textColor = ' ';
                //changer la couleur du texte selon le personnage de la .map
                switch(item.name){
                    case 'Zagreus':
                        textColor = 'yellow';
                        break;
                    case 'Hades':
                        textColor = 'brown';
                        break;
                    case 'Thanatos':
                        textColor = 'purple';
                        break;
                    default:
                        textColor = 'white'
                }
              return(
                <article key={item.id} className="flex space-between article-principal" style={{backgroundColor: item.color}}>
                    <div className="img-section-principal">
                        <img className='img-fluid' src={item.image} alt={item.name}/>
                    </div>
                    <div>
                        <h3 style={{color:`${textColor}`}}>{item.name}</h3>
                        <p style={{color:`${textColor}`}}>{item.text}</p>
                    </div>
                    
                </article>
              )
            })}
        </section>          
    )
}