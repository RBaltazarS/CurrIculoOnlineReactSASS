import React from 'react'

import '../styles/components/informationcontainer.sass'
import { AiFillPhone, MdOutlineMail, AiFillEnvironment } from "react-icons/ai";


const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(71)99278-1219</p>
        </div>
      </div>
      <div className="info-card">
        <MdOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>rodolpho.baltazar@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Salvador / BA</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;