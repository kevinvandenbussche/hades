import {Header} from './component/header/Header.js'
import { SectionPrincipal } from './component/sectionPrincipal/SectionPrincipal.js';
import { Bandeau } from './component/bandeau/Bandeau.js';
import './asset/css/generic.css';

function App() { 
  const sectionPrincipal = [
    {
    name: "Zagreus",
    image: "/img/zagreus.png",
    color: 'red',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
    id: 1
    },
    {
    name: "Hades",
    image: "/img/hades.png",
    color: 'yellow',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
    id: 2
    },
    {
    name: "Thanatos",
    image: "/img/Thanatos.png",
    color: 'grey',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
    id: 3
    },
    {
    name: "Zargeus",
    image: "/img/Megaera.png",
    color: 'blue',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
    id: 4
    }
    ];
    
    
  return (
    <div>
      <Header sectionPrincipal = {sectionPrincipal}/> 
      <Bandeau name = "Les personnages"/>
      <SectionPrincipal sectionPrincipal = {sectionPrincipal}/>
      <Bandeau name = "Les dieux de l'olympe"/>
    </div>
  );
}

export default App;
