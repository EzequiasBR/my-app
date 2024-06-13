import React from "react";

import { Article } from "../Article/Article";
import "./style.css";


export class Articles extends React.Component{
   render() {
      return (
         <section id="articles">
          <Article
            thumbnail={"https://img.freepik.com/fotos-premium/analista-trabalhando-com-business-analytics-no-computador-para-fazer-relatorio-com-geracao-de-kpi-ai_201606-3823.jpg?w=740"}
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            omnis eos quasi fugiat magnam cupiditate deserunt veritatis neque
            dolor facere error mollitia ea minus, quis ipsa eveniet ut, iure
            debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Article
            thumbnail={"https://img.freepik.com/fotos-gratis/arte-digital-para-a-celebracao-do-dia-internacional-da-mulher-e-os-direitos-das-mulheres_23-2151368479.jpg?w=740&t=st=1718255928~exp=1718256528~hmac=593e9a9cbb226d64b3919d551b6b12085b29ec581aafbe9c9c0789336a9c9050"}
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            omnis eos quasi fugiat magnam cupiditate deserunt veritatis neque
            dolor facere error mollitia ea minus, quis ipsa eveniet ut, iure
            debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Article
            thumbnail={"https://melhoresmomentosdavida.com/wp-content/webp-express/webp-images/uploads/2022/03/Curiosidades-sobre-a-India-23-1170x730.jpg.webp"}
            title="36 Days Malayalam type"
            provider="SpaceFlight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            omnis eos quasi fugiat magnam cupiditate deserunt veritatis neque
            dolor facere error mollitia ea minus, quis ipsa eveniet ut, iure
            debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />

          <Article
            thumbnail={"https://dmarilia.com.br/wp-content/uploads/2023/08/NasaNextProject-1536x864.jpg"}
            title="News Now"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            omnis eos quasi fugiat magnam cupiditate deserunt veritatis neque
            dolor facere error mollitia ea minus, quis ipsa eveniet ut, iure
            debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </section>
      );
   }
}