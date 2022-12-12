import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const tlfRegEx = /^(0047|\+47|47)?[2-9]\d{7}$/;

const schema = yup.object().shape({
  name: yup.string().required("Vennligst fyll inn et navn").min(3, "Navn må være minst 3 bokstaver"),
  phone: yup.string().required("Vennligst oppgi et telefon nummer").matches(tlfRegEx, "test"),
  email: yup.string().required("Vennligst fyll inn E-post feltet").email("E-post må være i riktig format"),
  textarea: yup.string().required("Vennligst skriv en melding").min(10, "Meldingen må være minst 10 bokstaver."),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function formSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="contact-section">
      <div className="info-container contact-container">
        <div className="wrapper-contact">
          <div className="contact-icons-container">
            <div className="icons-img contact-img contact-icon1"></div>
            <p className="info-title">Adresse</p>
            <p className="contact-info-text">Topp Tak AS</p>
            <p className="contact-info-text">Pauliveien 1</p>
            <p className="contact-info-text">3185 Skoppum</p>
            <p className="contact-info-text">Norway</p>
          </div>
          <div className="contact-icons-container">
            <div className="icons-img contact-img contact-icon2"></div>
            <p className="info-title">Telefon</p>
            <p className="contact-info-text">+47 936 27 836</p>
            <p className="contact-info-text">+47 911 52 746</p>
          </div>
          <div className="contact-icons-container">
            <div className="icons-img contact-img contact-icon3"></div>
            <p className="info-title">E-post</p>
            <p className="contact-info-text">post@ToppTak.no</p>
          </div>
        </div>
      </div>
      <h2 className="contact-title" id="kontakt">
        Ta kontakt, så hjelper vi deg!
      </h2>
      <form onSubmit={handleSubmit(formSubmit)} className="form">
        <div>
          <label htmlFor="navn">
            <span>*</span> Navn:
          </label>
          <input {...register("name")} id="navn" />
          {errors.name && <span className="form-error">{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="telefon">
            <span>*</span> Telefon:
          </label>
          <input {...register("phone")} type="number" id="telefon" />
          {errors.phone && <span className="form-error">{errors.phone.message}</span>}
        </div>
        <div>
          <label htmlFor="e-post">
            <span>*</span> E-post:
          </label>
          <input {...register("email")} type="email" id="e-post" />
          {errors.email && <span className="form-error">{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="adresse">Adresse:</label>
          <input {...register("adress")} type="text" id="adresse" />
          {errors.adress && <span className="form-error">{errors.adress.message}</span>}
        </div>
        <div>
          <label htmlFor="melding">
            <span>*</span> Melding:
          </label>
          <textarea {...register("textarea")} type="text" id="melding" rows="8"></textarea>
          {errors.textarea && <span className="form-error">{errors.textarea.message}</span>}
        </div>
        <button className="cta form-btn">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
