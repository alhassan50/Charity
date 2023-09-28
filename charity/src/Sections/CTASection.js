import Button from "../Components/Button"

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h3 className="section-h3">
                    give us a hand
                </h3>

                <p>
                    Support us and change the course of a
                    child's life today!
                </p>

                <Button className="secondary-btn" label="DONATE" />
            </div>
        </section>
    )
}

export default CTASection