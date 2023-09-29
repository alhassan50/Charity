import Button from "../Components/Button"
import happyKids from '../Assets/happy kids.png'

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <figure>
                    <img src={happyKids} alt="happy kids" />
                </figure>

                <div className="about-text">
                    <div className="about-text-header">
                        <h3 className="section-h3">
                            about us
                        </h3>
                        <div></div>
                    </div>
                    
                    <p className="about-text-desc-header">
                        Your Support is Really
                        Powerful.
                    </p>

                    <p className="about-text-desc">
                        The secret to happiness lies in helping others. Never
                        underestimate the difference YOU can make in the
                        lives of the poor, the abused and the helpless.
                    </p>

                    <Button label="Read More" className="primary-btn" />
                </div>
            </div>
        </section>
    )
}

export default About