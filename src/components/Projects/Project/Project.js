import React from "react";

import "./project.css";

const Project = () => {
  return (
    <figure className="portfolio-item featured">
      <img src="//unsplash.it/801" alt="portfolio item" />
      <figcaption>
        <h2 className="portfolio-title">RAMM Technologies (Pty) Ltd.</h2>
        <p className="portfolio-desc">GIS Developer/Civil Engineer</p>
        <button className="portfolio-link">More info</button>
      </figcaption>

      <div className="portfolio-modal">
        <button className="modal-close">
          <svg x="0px" y="0px" viewBox="0 0 30 17" height="17" width="30">
            <g transform="translate(-15 -15)">
              <polygon
                className="st0"
                points="31.2,23.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 28.8,23.5 23,17.7 24.2,16.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 35.8,16.5 37,17.7"
              />
            </g>
          </svg>
        </button>
        <div className="portfolio-header header-1">
          <div className="portfolio-title-box">
            <h2 className="portfolio-title">GIS Developer/Civil Engineer</h2>
            <p className="portfolio-subtitle">Projects</p>
          </div>
        </div>

        <div className="portfolio-content">
          <p>
            A web mapping application that I wrote in react.js aimed at giving
            simple geo-spatial data manipulation and management capability to
            non-GIS personnel. It includes common map controls and some custom
            controls and a Layertree for layer management. It uses Geoserver as
            the map server and Postgis as the spatial database. The
            functionality of the app includes the following:
          </p>
          <img
            className="portfolio-full-width"
            src="//unsplash.it/1000"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            quibusdam deleniti quidem recusandae? Veritatis aliquid ea, labore
            ipsa quaerat eaque eum possimus unde, ullam, quibusdam at enim non
            tempore facilis eveniet? Provident iste fuga autem eaque fugiat.
            Animi dolor ipsa voluptatum. Ducimus, in exercitationem vitae,
            pariatur, voluptatum omnis ab at libero molestiae quos doloremque.
            Doloremque est eius ducimus impedit nulla earum qui enim sunt
            asperiores accusantium dolorem laudantium dignissimos fugiat
            possimus, fugit incidunt officiis illum ipsa provident, sequi fuga.
            Dolore reprehenderit minus repellat! Eum optio nihil dignissimos
            nemo mollitia. Beatae asperiores explicabo sunt rerum. Assumenda,
            obcaecati repudiandae. Ea, magnam impedit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            quibusdam deleniti quidem recusandae? Veritatis aliquid ea, labore
            ipsa quaerat eaque eum possimus unde, ullam, quibusdam at enim non
            tempore facilis eveniet? Provident iste fuga autem eaque fugiat.
            Animi dolor ipsa voluptatum. Ducimus, in exercitationem vitae,
            pariatur, voluptatum omnis ab at libero molestiae quos doloremque.
            Doloremque est eius ducimus impedit nulla earum qui enim sunt
            asperiores accusantium dolorem laudantium dignissimos fugiat
            possimus, fugit incidunt officiis illum ipsa provident, sequi fuga.
            Dolore reprehenderit minus repellat! Eum optio nihil dignissimos
            nemo mollitia. Beatae asperiores explicabo sunt rerum. Assumenda,
            obcaecati repudiandae. Ea, magnam impedit?
          </p>
          <img className="portfolio-pull-left" src="//unsplash.it/400" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            quibusdam deleniti quidem recusandae? Veritatis aliquid ea, labore
            ipsa quaerat eaque eum possimus unde, ullam, quibusdam at enim non
            tempore facilis eveniet? Provident iste fuga autem eaque fugiat.
            Animi dolor ipsa voluptatum. Ducimus, in exercitationem vitae,
            pariatur, voluptatum omnis ab at libero molestiae quos doloremque.
            Doloremque est eius ducimus impedit nulla earum qui enim sunt
            asperiores accusantium dolorem laudantium dignissimos fugiat
            possimus, fugit incidunt officiis illum ipsa provident, sequi fuga.
            Dolore reprehenderit minus repellat! Eum optio nihil dignissimos
            nemo mollitia. Beatae asperiores explicabo sunt rerum. Assumenda,
            obcaecati repudiandae. Ea, magnam impedit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            quibusdam deleniti quidem recusandae? Veritatis aliquid ea, labore
            ipsa quaerat eaque eum possimus unde, ullam, quibusdam at enim non
            tempore facilis eveniet? Provident iste fuga autem eaque fugiat.
            Animi dolor ipsa voluptatum. Ducimus, in exercitationem vitae,
            pariatur, voluptatum omnis ab at libero molestiae quos doloremque.
            Doloremque est eius ducimus impedit nulla earum qui enim sunt
            asperiores accusantium dolorem laudantium dignissimos fugiat
            possimus, fugit incidunt officiis illum ipsa provident, sequi fuga.
            Dolore reprehenderit minus repellat! Eum optio nihil dignissimos
            nemo mollitia. Beatae asperiores explicabo sunt rerum. Assumenda,
            obcaecati repudiandae. Ea, magnam impedit?
          </p>
          <img
            className="portfolio-pull-right"
            src="//unsplash.it/400"
            alt=""
          />
        </div>
      </div>
    </figure>
  );
};

export default Project;
