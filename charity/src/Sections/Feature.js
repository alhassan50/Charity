import featureKidsPost from '../Assets/feature post image.png'
import mission from '../Assets/missions-img1.png'
import vision from '../Assets/missions-img2.png'

const FeatureCard = (props) => {
    return (
        <div className='feature-card'>
            <div className='card-content'>
                <div className='card-header'>
                    <figure>
                        <img src={props.image} alt='mission' />
                    </figure>
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <div className='card-description'>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Feature = () => {
    return (
        <section className="feature-section">
            <div className="feature-content">
                <div className="feature-text">
                    <div className="feature-text-header">
                        <h3 className="section-h3">
                            Welcome to charity
                        </h3>
                        <div></div>
                    </div>
                    
                    <p className="feature-text-desc-header">
                        Let Us Come Together
                        To Make a Difference
                    </p>

                    <p className="feature-text-desc">
                        We are a compassionate community dedicated to improving lives. Together, we offer hope and support to those in need. Join our mission and be part of the positive change we're making in the world
                    </p>

                    <div className='feauture-cards-container'>
                        <FeatureCard 
                            image={mission}
                            title='our mission'
                            description="Empower lives through compassion, providing hope, and fostering positive transformation."
                        />

                        <FeatureCard 
                            image={vision}
                            title='our vision'
                            description="A world filled with compassion and kindness, where every life is touched by hope, dignity, and opportunity."
                        />
                    </div>

                    <div className='donation-section'>
                        <div className='donation-content'>
                            <div className='donation-header'>
                                <h3>
                                    Donation
                                </h3>
                                <h3>
                                    75%
                                </h3>
                            </div>
                            <div className='donation-bar'>
                                <div className='donation-percentage'></div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <figure className='feature-image'>
                    <img src={featureKidsPost} alt="happy kids" />
                </figure>
            </div>
        </section>
    )
}

export default Feature