import './liste.css'
import '../../asset/css/generic.css';

export function Liste(props){
    let classNameUl = 'list-content flex';
    let statusList = ' list-close';
    
    //apparition du menu en jaune suite a l'appui sur le menu burger
    if(props.menuBurger === true){
        statusList = ' list-open'
        classNameUl += statusList;
    }else{
        classNameUl += statusList
    }

    const contenuLi = [];
    props.sectionPrincipal.forEach(item => {
        contenuLi.push(
            <li className="li-burger font-hades flex" key={item.id}>
                <div className='content-picture-menu' >
                    <img className='img-fluid' src={item.image} alt={item.name}/>
                </div>
                <a href={'#'+item.name}>{item.name}</a>
            </li>
            )
    });
    
    return(
        <ul className={classNameUl}>
            {contenuLi}
        </ul>
    )
}