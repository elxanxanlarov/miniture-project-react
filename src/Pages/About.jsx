import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const About = () => {
  const [lang]=useContext(LangContext);
  return (
    <section className="about">
      <div className="hero">
        <div className="text-con">
          <h1 className="col-7 ">
            {lang=="az"
            ?"Transforming Your House into a Home with Beautifully CraftedFurniture for Every Room"
            :"Hər otaq üçün gözəl hazırlanmış mebellərlə evinizi evə çevirmək"
          }
            
          </h1>
        </div>
        <div className="img-con">
          <img
            src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/ab-b_01.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="winner">
        <div className="dp-between row">
          <span className="col-md-4">{lang=="az"
          ?"Established in 2008":"2008-ci ildə yaradılmışdır"}</span>
          <p className="col-md-8">
           {lang=="az"
           ? "At Miniture, our journey began in 2008 with a vision to redefine how people perceive and experience furniture. Over the years, we have grown from a small, family-owned business into a leading provider of exquisite furniture, known for our dedication to quality, craftsmanship, and innovation."
            :"Miniture-da səyahətimiz 2008-ci ildə insanların mebeli necə qavradıqlarını və təcrübələrini yenidən müəyyən etmək vizyonu ilə başladı. Bu illər ərzində biz kiçik, ailə biznesindən keyfiyyətə, sənətkarlığa və innovasiyaya sadiqliyimizlə tanınan incə mebellərin aparıcı təchizatçısına çevrilmişik."
          }
          </p>
        </div>
        <div className="dp-between row">
          <span className="col-md-4">{lang=="az"?"The Early Years":"İlk İllər"}</span>
          <p className="col-md-8">
           {lang=="az"
           ?" In the early years of our company, we started as a humble workshop,crafting furniture by hand with a commitment to excellence. Our founder, Dzung Nova, had a passion for woodworking and a deep appreciation for the artistry that goes into creating fine furniture. This dedication laid the foundation for our company'svalues and principles."
           :"Şirkətimizin ilk illərində mükəmməlliyə sadiq qalaraq əl ilə mebel hazırlayan təvazökar bir emalatxana kimi başladıq. Təsisçimiz Dzunq Novanın ağac emalına həvəsi var idi və gözəl mebel yaratmağa gedən sənətkarlığı dərin qiymətləndirirdi. Bu fədakarlıq şirkətimizin dəyər və prinsiplərinin əsasını qoydu."
          }
          </p>
        </div>
        <div className="dp-between row">
          <span className="col-md-4">{lang=="az"?"Growth and Expansion":"Artım və Genişlənmə"}</span>
          <p className="col-md-8">
          {lang=="az"
           ?"As our reputation for quality craftsmanship and unique designs grew, so did our business. We expanded our operations to include as howroom where customers could experience our furniture firsthand. This expansion allowed us to connect with our customers on a more personal level and showcase the range of possibilities our furniture offered. "
           :"Keyfiyyətli sənətkarlıq və unikal dizaynlar üçün reputasiyamız artdıqca, biznesimiz də artdı. Müştərilərin bizim mebelimizlə birbaşa tanış ola biləcəyi bir otaq kimi əməliyyatlarımızı genişləndirdik. Bu genişlənmə bizə müştərilərimizlə daha şəxsi səviyyədə əlaqə saxlamağa və mebellərimizin təklif etdiyi imkanları nümayiş etdirməyə imkan verdi."
          }
            
          </p>
        </div>
        <div className="dp-between row">
          <span className="col-md-4">{lang=="az"?"Innovation and Customization":"Yenilik və Fərdiləşdirmə"}</span>
          <p className="col-md-8">
           {lang=="az"
           ?" At Miniture, our journey began in 2008 with a vision to redefine how people perceive and experience furniture. Over the years, we have grown from a small, family-owned business into a leading provider of exquisite furniture, known for our dedication to quality, craftsmanship, and innovation."
           :"Miniture-da səyahətimiz 2008-ci ildə insanların mebeli necə qavradıqlarını və təcrübələrini yenidən müəyyən etmək vizyonu ilə başladı. Bu illər ərzində biz kiçik, ailə biznesindən keyfiyyətə, sənətkarlığa və innovasiyaya sadiqliyimizlə tanınan incə mebellərin aparıcı təchizatçısına çevrilmişik."
          }
          </p>
        </div>
      </div>
      <div className="number-con dp-between">
        <div className="box">
          <h2>450+</h2>
          <p>{lang=="az"?"Premium products":"Premium məhsullar"}</p>
        </div>
        <div className="box">
          <h2>25+</h2>
          <p>{lang=="az"?"Years experiences":"İllərin təcrübələri"}</p>
        </div>
        <div className="box">
          <h2>3,600+</h2>
          <p>{lang=="az"?"Happy customers":"Xoşbəxt müştərilər"}</p>
        </div>
        <div className="box">
          <h2>29+</h2>
          <p>{lang=="az"?"Award gained":"Mükafat qazandı"}</p>
        </div>
      </div>
      <div className="team row">
        <h2 className="text-center my-5">{lang=="az"?"Our Team":"Bizim komanda"}</h2>
        <div className="box col-md-3">
          <div className="img-con">
            <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/ab_team_01.jpg" alt="" />
          </div>
          <div className="text-con">
            <span>{lang=="az"?"Co Founder":"Həm təsisçi"}</span>
            <p>Anthony Martinez</p>
          </div>
        </div>
        <div className="box col-md-3">
          <div className="img-con">
            <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/ab_team_02.jpg" alt="" />
          </div>
          <div className="text-con">
            <span>{lang=="az"?"Creative Director":"Yaradıcı direktor"}</span>
            <p>Elizabeth Johnson</p>
          </div>
        </div>
        <div className="box col-md-3">
          <div className="img-con">
            <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/ab_team_03.jpg" alt="" />
          </div>
          <div className="text-con">
            <span>{lang=="az"?"Developer":"Developer"}</span>
            <p>Andrew Harris</p>
          </div>
        </div>
        <div className="box col-md-3">
          <div className="img-con">
            <img src="https://miniture.b-cdn.net/wp-content/uploads/2023/10/ab_team_04.jpg" alt="" />
          </div>
          <div className="text-con">
            <span>{lang=="az"?"Designer":"Dizayner"}</span>
            <p>Claire Thompson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
