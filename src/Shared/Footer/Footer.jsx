import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer p-10 bg-gradient-to-r from-[#5E24FB] to-[#9B74FC] text-white">
          <aside>
            <h1 className=" text-3xl font-extrabold">EventHost</h1>
            <p>
              IDEA Project, ICT Tower (0th Floor), <br /> Plot: E-14X, Agargaon,
              Dhaka - 1207 <br /> 02222-222222, 01111111111
            </p>
          </aside>
          <nav>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <a className="link link-hover">Event Dashboard</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Privacy & Refund Policy</a>
          </nav>
          <nav>
            <a className="link link-hover">Follow Us</a>
            <div className=" flex items-center text-xl gap-5 mt-3">
              <a target="_blank" href="https://web.facebook.com/naymHdev">
                <FaFacebook />
              </a>
              <a target="_blank" href="https://twitter.com/naymHdev">
                <FaInstagram />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/naymhdev">
                <TiSocialLinkedinCircular />
              </a>
              <a target="_blank" href="https://www.youtube.com/@naymhossen1b">
                <FaYoutube />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
