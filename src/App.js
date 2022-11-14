import {Header} from './component/header/Header.js'
import { SectionPrincipal } from './component/sectionPrincipal/SectionPrincipal.js';
import { Bandeau } from './component/bandeau/Bandeau.js';
import { Carousel } from './component/carousel/Carousel.js';
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
    name: "Megaera",
    image: "/img/Megaera.png",
    color: 'blue',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
    id: 4
    }
    ];
    const itemsCarousel=
    [
      {
      name: "Athena",
      image: "/img/Athena.png",
      color: 'blue',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
      id: 1
      },
      {
      name: "Zeus",
      image: "/img/Zeus.png",
      color: 'yellow',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
      id: 2
      },
      {
      name: "Artemis",
      image: "/img/Artemis.png",
      color: 'green',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
      id: 3
      },
      {
      name: "Demeter",
      image: "/img/Demeter.png",
      color: 'cian',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
      id: 4
      },
      {
      name: "Poseidon",
      image: "/img/Poseidon.png",
      color: 'cian',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
      id: 5
      },
      {
      name: "Ares",
      image: "/img/Ares.png",
      color: 'red',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio ea enim quibusdam minus ex exercitationem expedita odit placeat, corporis voluptatum ut vero voluptates quidem ab culpa, iusto accusamus eaque fuga id perspiciatis! Accusamus hic dignissimos consectetur quis aspernatur placeat magni vitae numquam ex! Laborum molestiae itaque blanditiis officiis quis hic expedita, fugiat fugit exercitationem veniam autem nam repellat quos mollitia sit enim, ea inventore voluptas rem labore qui tempore earum obcaecati explicabo. Laborum obcaecati aliquam placeat neque non eos! Soluta libero corporis exercitationem quo doloribus, maxime possimus illum eum officia nostrum impedit sapiente dolore vero beatae ut. Ex, consequuntur?',
      id: 6
      }
      ];
    
    
  return (
    <div>
      <Header sectionPrincipal = {sectionPrincipal}/> 
      <Bandeau name = "Les personnages"/>
      <SectionPrincipal sectionPrincipal = {sectionPrincipal}/>
      <Bandeau name = "Les dieux de l'olympe"/>
      <Carousel itemsCarousel = {itemsCarousel}/>
    </div>
  );
}

export default App;
