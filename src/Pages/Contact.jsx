import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const Contact = () => {
  const [lang]=useContext(LangContext);
  return (
    <section className="contact">
      <div className="hero">
        <div className="text-con">
          <h1>{lang=="az"?"We’re here for you":"Biz sizin üçün buradayıq"}</h1>
          <p>{lang=="az"?"Our friendly team is always here to chat.":"Bizim mehriban komandamız həmişə söhbət etmək üçün buradadır."}</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d303.3375158978963!2d49.8153657!3d40.3794232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzQ1LjkiTiA0OcKwNDgnNTIuOCJF!5e0!3m2!1sen!2s!4v1688224986697!5m2!1sen!2s"
            height="500"
            width="100%"
            title="Iframe Example"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
      <div className=" row message-con">
        <div className="left col-md-6">
          <div>
            <input type="text" placeholder={lang=="az"?"Your Name":"Adınız"} />
          </div>
          <div>
            <input type="email" placeholder={lang=="az"?"Your Email":"E-poçtunuz"} />
          </div>
          <div>
            <input type="email" placeholder={lang=="az"?"Subject":"Mövzu"} />
          </div>
          <div>
            <textarea
              name=""
              id=""
              placeholder={lang=="az"?"Your message (optional)":"Mesajınız (isteğe bağlı)"}
            ></textarea>
          </div>
          <button className="btn btn-warning">{lang=="az"?"Send Message":"Mesaj Göndər"}</button>
        </div>
        <div className="right col-md-6">
          <ul>
            <li>
              <h3>{lang=="az"?"Store Location":"Mağaza Yeri"}</h3>
              <p>
                {lang=="az"?"It was not possible to renovate the two little houses on the land because they were in ruins.":"Torpaqdakı iki balaca ev xaraba vəziyyətdə olduğundan təmir etmək mümkün olmayıb."}
              </p>
            </li>
            <li className="dp-align">
              <div>
                <h4>{lang=="az"?"Germany Store":"Almaniya mağazası"}</h4>
                <p>{lang=="az"?"785 15h Street, Office 478/B Green Mall Berlin, De 81566":"785 15h küçəsi, Office 478/B Green Mall Berlin, De 81566"}</p>
                <p>+888 999 777 66, +999 555 666 00</p>
              </div>
              <div>
                <h4>{lang=="az"?"Germany Store":"Almaniya mağazası"}</h4>
                <p>{lang=="az"?"785 15h Street, Office 478/B Green Mall Berlin, De 81566":"785 15h küçəsi, Office 478/B Green Mall Berlin, De 81566"}</p>
                <p>+888 999 777 66, +999 555 666 00</p>
              </div>
            </li>
            <li className="dp-align">
              <div>
                <h4>{lang=="az"?"Germany Store":"Almaniya mağazası"}</h4>
                <p>{lang=="az"?"785 15h Street, Office 478/B Green Mall Berlin, De 81566":"785 15h küçəsi, Office 478/B Green Mall Berlin, De 81566"}</p>
                <p>+888 999 777 66, +999 555 666 00</p>
              </div>
              <div>
                <h4>Germany Store</h4>
                <p>{lang=="az"?"785 15h Street, Office 478/B Green Mall Berlin, De 81566":"785 15h küçəsi, Office 478/B Green Mall Berlin, De 81566"}</p>
                <p>+888 999 777 66, +999 555 666 00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
