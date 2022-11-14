import './liste.css'
import '../../asset/css/generic.css';

export function Liste(props){
    let classNameUl = 'list-content flex';
    let statusList = ' list-close';
    let liBurger = 'li-burger font-hades flex';
   
    //apparition du menu en jaune suite a l'appui sur le menu burger
    if(props.menuBurger === true){
        statusList = ' list-open'
        classNameUl += statusList;
    }else{
        classNameUl += statusList
        liBurger += ' li-close'
    }
    
    return(
        <ul className={classNameUl}>
            {props.sectionPrincipal.map((item)=>{
                return<li className={liBurger} key={item.id}>
                    {item.name}
                    <div className='content-picture-menu' >
                        <img className='img-fluid' src={item.image} alt={item.name}/>
                    </div>
                </li>
            })}
        </ul>
    )
}