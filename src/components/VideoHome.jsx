import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const Video = () => {
  const [lang]=useContext(LangContext);
  return (
    <>
      <section className="video">
        <div className=" row video-top ">
          <div data-aos="fade-right"
          data-aos-delay="800"
           className="left col-md-6 col-sm-12 col-12 h-100">
            <div className="text-con">
              <span>{lang=="az"?"TOP DEAL TODAY":"BUGÜN ƏLAQƏLƏR"}</span>
              <p>{lang=="az"?"Up to 30% off The Living Room Event":"Qonaq otağı tədbirində 30%-ə qədər endirim"}</p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="800"className="right col-md-6 col-sm-12 col-12 text-center h-100">
            <span>{lang=="az"?"LIMITED TIME ONLY":"YALNIZ MƏHDUD VAXT"}</span>
            <h2>{lang=="az"?"The living room event up to 30% off":"Qonaq otağı tədbirində 30%-ə qədər endirim"}</h2>
            <p>
              
              {lang=="az"
              ?"Striking the perfect balance between comfort and modern style,Gather is clean-lined and current."
              :"Rahatlıq və müasir üslub arasında mükəmməl tarazlığı yaratmaq,Toplamaq təmiz astarlı və cari."}
            </p>
            <div className="time-con dp-align">
              <div>
                <span>151</span>
                <p>{lang=="az"?"Days":"Günlər"}</p>
              </div>
              <div>
                <span>19</span>
                <p>{lang=="az"?"Hours":"Saatlar"}</p>
              </div>
              <div>
                <span>39</span>
                <p>{lang=="az"?"Minutes":"Dəqiqələr"}</p>
              </div>
              <div>
                <span>20</span>
                <p>{lang=="az"?"Seconds":"Saniyələr"}</p>
              </div>
            </div>
            <button className="sale-btn btn ">{lang=="az"?"Shop the sale":"Alış-veriş edin"}</button>
          </div>
        </div>
        <div className="video-bottom mb-5">
          <div className="text-con">
            <span>{lang=="az"?"CRAFT OWN FURNITURE":"ÖZ MEBEL HAZIRLAYIN"}</span>
            <p> {lang=="az"?"Your new forever favorites are here":"Yeni əbədi favoritləriniz buradadır"}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
