import "./Contacto.css";

export default function Contacto() {
  return (
    <>
      <section id="contact">
        <div class="form-wrapper">
          <header class="form-head">
            <h2>Contactanos</h2>
          </header>
          <form>
            <div class="name-form">
              <label for="name">Nombre:</label>
              <input id="name" type="text" name="name" required />
            </div>
            <div class="email-form">
              <label for="email">Correo :</label>
              <input id="email" type="email" name="email" required />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
}
