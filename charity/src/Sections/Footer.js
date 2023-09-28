import { FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"
import Button from "../Components/Button"

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="content-1">
                    <div className="contact-info">
                        <h3 className="section-h3">
                            Address
                        </h3>

                        <p className="contact-address">
                            A-272, Surajmal Vihar, Delhi, 11009281-8181-0860
                        </p>

                        <p className="contact-mail">
                            contact@vivekguptafoundation.in
                        </p>
                    </div>

                    <div className="contact-links">
                        <h3 className="section-h3">
                            Get in touch
                        </h3>

                        <p className="contact-us-link">
                            Contact Us
                        </p>

                        <p className="our-services-link">
                            Our Services
                        </p>
                    </div>

                    <div>
                        <h3 className="section-h3">
                            Newsletter
                        </h3>

                        <div className="newsletter-field">
                            <input type="text" placeholder="Enter Your Email" />
                            <Button label="Subscribe" className="primary-btn"/>
                        </div>

                        <p>
                            Your email is safe with us,we don't spam.
                        </p>

                    </div>
                </div>
                
                <hr />
                
                <div className="content-2 social-section">
                    <h3 className="section-h3">
                        follow me 
                    </h3>
                    <div className="social-icons">
                        <figure>
                            <FaTwitter />
                        </figure>

                        <figure>
                            <FaInstagram />
                        </figure>

                        <figure>
                            <FaPinterest />
                        </figure>

                        <figure>
                            <FaYoutube />
                        </figure>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer