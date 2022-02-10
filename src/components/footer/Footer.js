import React from 'react';
import './Footer.css';
import Logo from '../logo/logo';
import RRSS from '../RRSS/RRSS';
import PopUp from '../popUp/popUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showLegalPopUp, setShowLegalPopUp] = useState(false);
  const [showCookiesPopUp, setShowCookiesPopUp] = useState(false);
  const [showMembersPopUp, setShowMembersPopUp] = useState(false);
  let navigate = useNavigate();

  return (
    <div className='footer'>
      {showLegalPopUp && (
        <PopUp setshowpopUp={setShowLegalPopUp}>
          <article>
            <Logo />
            <h3>Terminos y condiciones de uso</h3>
            <p>
              Los presentes Términos y Condiciones de uso (en adelante,
              “Términos y Condiciones”) establecen las condiciones bajo las
              cuales se ofrece a los usuarios el acceso a los sitios web,
              servicios y aplicaciones Emuvi (en adelante, “el Servicio”) , que
              es una plataforma que permite a los usuarios publicar ofertas para
              la compra–venta de una amplia variedad de artículos de su
              propiedad, así como la comunicación entre los usuarios ofertantes
              y los usuarios interesados en adquirir los artículos ofrecidos y
              la localización geográfica de los mismos, para completar la
              transacción.
            </p>
            <br></br>
            <p>
              El uso del Servicio atribuye a quien lo realiza la condición de
              usuario del mismo (en adelante, “el Usuario”) e implica la
              aceptación íntegra de estos Términos y Condiciones. En caso de no
              estar de acuerdo con todo o parte de estos Términos y Condiciones,
              el Usuario debe abstenerse de instalar y utilizar el Servicio.
            </p>
            <br></br>
            <p>
              Por medio de la aceptación de los presentes Términos y
              Condiciones, el Usuario manifiesta:
            </p>
            <br></br>
            <p>Que ha leído, entiende y comprende lo aquí expuesto.</p>
            <br></br>
            <p>Que asume todas las obligaciones aquí dispuestas.</p>
            <br></br>
            <p>
              Que es mayor de edad y tiene la capacidad legal suficiente para
              utilizar el Servicio.
            </p>
            <br></br>
            <p>
              La aceptación de estos Términos y Condiciones por parte de los
              Usuarios es un paso previo e indispensable a la utilización del
              Servicio. Wallapop se reserva el derecho a actualizar y/o
              modificar los Términos y Condiciones en cualquier momento y por
              cualquier motivo a su exclusiva discreción. Wallapop notificará
              acerca de cualquier cambio material en los Términos y Condiciones
              o en cualquier Servicio u otra función de los Servicios. Al
              acceder o usar los Servicios después de que Wallapop haya
              notificado al Usuario sobre una modificación o actualización, el
              Usuario acepta quedar obligado por los Términos y Condiciones
              modificados. Si los Términos y Condiciones modificados no resultan
              aceptables al Usuario, su única opción es dejar de utilizar los
              Servicios.
            </p>
            <h3>Titular del servicio</h3>
            <p>
              El titular y propietario del Servicio es El mundo viejo S.L. (en
              adelante, “Emuvi”), con domicilio en torre Emuvi paseo de la
              castellana 104 Madrid
            </p>
            <h3>Necesidad del registro</h3>
            <p>
              Para poder utilizar el Servicio es necesario el previo registro
              del Usuario, la aceptación de los presentes Términos y Condiciones
              y la Política de Privacidad y de cookies.
            </p>
            <br></br>
            <p>
              Los datos introducidos por el Usuario deberán ser exactos,
              actuales y veraces. El Usuario registrado será responsable en todo
              momento de la custodia de su contraseña, asumiendo en consecuencia
              cualesquiera daños y perjuicios que pudieran derivarse de su uso
              indebido, así como de la cesión, revelación o extravío de la
              misma, debiendo informar inmediatamente a Emuvi en caso de que
              tenga motivos para creer que su contraseña ha sido utilizada de
              manera no autorizada o es susceptible de serlo. En cualquier caso,
              se considera que el Usuario es responsable por el acceso y/o uso
              del Servicio en relación con su cuenta, quien responderá en todo
              caso de dicho acceso y/o uso.
            </p>
            <br></br>
            <p>
              Mediante la aceptación de los Términos y Condiciones, el Usuario
              consiente que sus datos pasen a formar parte del fichero de Emuvi
              y el tratamiento de esos datos será conforme a lo previsto en la
              Política de Privacidad.
            </p>
            <h3>Normas de Utilizacion del servicio</h3>
            <p>
              El Usuario se obliga a utilizar el Servicio conforme a lo
              establecido en la ley, la moral, el orden público y los presentes
              Términos y Condiciones. Asimismo, se obliga a hacer un uso
              adecuado del Servicio y a no emplearlo para realizar actividades
              ilícitas o constitutivas de delito, que atenten contra los
              derechos de terceros o que infrinjan cualquier norma del
              ordenamiento jurídico.
            </p>
            <br></br>
            <p>
              El Usuario se obliga a no transmitir, introducir, difundir y/o
              poner a disposición de terceros, cualquier tipo de material e
              información (productos, objetos, datos, contenidos, mensajes,
              dibujos, archivos de sonido e imagen, fotografías, software, etc.)
              que sean contrarios a la ley, la moral, el orden público y los
              presentes Términos y Condiciones. A título enunciativo y en ningún
              caso limitativo o excluyente, el Usuario se compromete a:
            </p>
            <ul>
              <li>
                No introducir o difundir contenidos o propaganda de carácter
                racista, xenófobo, pornográfico, de apología del terrorismo o
                que atenten contra los derechos humanos.
              </li>
              <li>
                No difundir, transmitir o poner a disposición de terceros
                cualquier tipo de información, elemento o contenido que atente
                contra los derechos fundamentales y las libertades públicas
                reconocidos constitucionalmente y en los tratados
                internacionales.
              </li>
              <li>
                No difundir, transmitir o poner a disposición de terceros
                cualquier tipo de información, elemento o contenido que
                constituya publicidad ilícita o desleal.
              </li>
              <li>
                No transmitir publicidad no solicitada o autorizada, material
                publicitario, “correo basura”, “cartas en cadena”, “estructuras
                piramidales”, o cualquier otra forma de solicitación, excepto en
                aquellas áreas (tales como espacios comerciales) que hayan sido
                exclusivamente concebidas para ello.
              </li>
              <li>
                No introducir o difundir cualquier información y contenidos
                falsos, engañosos, ambiguos o inexactos de forma que induzca o
                pueda inducir a error a los receptores de la información.
              </li>
              <li>
                No suplantar a otros Usuarios del Servicio ni transmitir los
                datos de acceso a la cuenta ni la contraseña a un tercero sin el
                consentimiento de Emuvi.
              </li>
              <li>
                No difundir, transmitir o poner a disposición de terceros
                cualquier tipo de información, elemento o contenido sin
                autorización de los titulares de los derechos de propiedad
                intelectual e industrial que puedan recaer sobre tal
                información, elemento o contenido.
              </li>
              <li>
                No difundir, transmitir o poner a disposición de terceros
                cualquier tipo de información, elemento o contenido que suponga
                una violación del secreto de las comunicaciones y la legislación
                de datos de carácter personal.
              </li>
              <li>
                No difundir, transmitir o poner a disposición de terceros
                fotografías ni cualquier representación o imagen de personas
                menores de edad.
              </li>
              <li>
                No publicar anuncios de productos que requieran receta médica o
                que deban dispensarse bajo la supervisión de un médico (doctor,
                dentista, optometrista, óptico, farmacéutico o veterinario), así
                como los productos que puedan influir en la salud del individuo
                (que presenten contraindicaciones, interacciones, etc.) y
                perecederos de cualquier tipo.
              </li>
              <li>
                Disponer de autorización sanitaria de funcionamiento para
                publicar anuncios relacionados con cualquier actividad sanitaria
                (necesidad de presentar el número de colegiación o número de
                registro del centro). No crear valoraciones de transacciones no
                efectuadas.
              </li>
              <li>
                No reportar falsamente o incorrectamente de forma reiterada.
              </li>
              <li>
                Usar los servicios de Emuvi correctamente. Por ejemplo, no crear
                cuentas de usuario para beneficiarse de promociones del servicio
                de envíos o para evitar el pago de suscripciones de
                profesionales.
              </li>
            </ul>
            <br></br>
            <p>
              El Usuario se obliga a mantener indemne a Emuvi ante cualquier
              posible reclamación, multa, pena o sanción que pueda venir
              obligada a soportar como consecuencia del incumplimiento por parte
              del Usuario de cualquiera de las normas de utilización antes
              indicadas, reservándose además Wallapop el derecho a solicitar la
              indemnización por daños y perjuicios que corresponda.
            </p>
            <h3>Exclusion de usuarios</h3>

            <p>
              Wallapop se reserva el derecho a impedir el uso del Servicio, ya
              sea de forma temporal o definitiva, a cualquier Usuario que
              infrinja cualquiera de las normas establecidas en estos Términos y
              Condiciones, la ley o la moral. Discrecionalmente, Wallapop
              también podrá excluir Usuarios e incluso dejar de prestar total o
              parcialmente el Servicio cuando así lo considere oportuno para
              mejorar la operativa del Servicio y/o del resto de los Usuarios
              del mismo.
            </p>
            <br></br>
          </article>
        </PopUp>
      )}
      {showCookiesPopUp && (
        <PopUp setshowpopUp={setShowCookiesPopUp}>
          <article>
            <Logo />
            <h3>Cookies</h3>
            <p>
              "Emuvi, por su propia cuenta o la de un tercero contratado para la
              prestación de servicios de medición y seguimiento, utiliza cookies
              cuando el Usuario navega por el sitio www.emuvi.com y sus
              subdominios" (en adelante, “el Sitio Web”). "Una cookie es un
              fichero que se descarga en el ordenador del Usuario al acceder a
              determinados sitios web, permitiendo a éstos, entre otras cosas,
              almacenar y recuperar información sobre los hábitos de navegación
              del Usuario o de su equipo y, dependiendo de la información que
              contengan y de la forma en que utilice su equipo, pueden
              utilizarse para reconocer un Usuario."
            </p>
            <br></br>
            <p>
              Las cookies utilizadas por este Sitio Web, así como su finalidad
              se describen a continuación:
            </p>
            <br></br>
            <p>
              Las cookies utilizadas por este Sitio Web, así como su finalidad
              se describen a continuación: Cookies persistentes de análisis de
              Google Analytics: Son aquéllas que, tratadas por nosotros y por
              Google Inc. nos permiten cuantificar el número de usuarios y así
              realizar la medición y análisis estadístico de la utilización que
              hacen los usuarios de nuestros servicios. Para ello se analiza su
              navegación en nuestro Sitio Web con el fin de mejorar la
              experiencia de navegación y los servicios que ofrecemos. Los datos
              obtenidos mediante este tipo de cookies permanecerán almacenados
              en el terminal del Usuario pudiendo ser tratados en cada acceso
              del mismo al Sitio Web hasta que se produzca la caducidad de las
              cookies o el propio Usuario las elimine.
            </p>
            <p>
              El hecho de continuar navegando por el Sitio Web implica la
              aceptación de la instalación de las cookies indicadas. En este
              sentido, “continuar navegando” significa hacer clic en cualquier
              botón, check box o link del Sitio Web, hacer “scroll”, así como
              descargar cualquier contenido ofrecido en el mismo.
            </p>
            <br></br>
            El Usuario puede bloquear o eliminar las cookies instaladas en su
            equipo mediante la configuración de las opciones del navegador
            instalado en el mismo. Por favor, consulte las instrucciones y
            manuales de su navegador para ampliar esta información.
          </article>
        </PopUp>
      )}
      {showMembersPopUp && (
        <PopUp setshowpopUp={setShowMembersPopUp}>
          <article>
            <Logo />
            <h3>Terminos y condiciones de uso</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>Texto sobre Nosotros</p>
          </article>
        </PopUp>
      )}

      <section id='enlacess'>
        <Logo></Logo>
        <RRSS></RRSS>
      </section>
      <div id='lanzadera'>
        <button className='red' onClick={() => setShowLegalPopUp(true)}>
          Términos y Condiciones
        </button>
        <button className='red' onClick={() => navigate('/aboutUs')}>
          Sobre Nosotros
        </button>
        <button className='red' onClick={() => setShowCookiesPopUp(true)}>
          Cookies
        </button>
      </div>
    </div>
  );
};

export default Footer;
