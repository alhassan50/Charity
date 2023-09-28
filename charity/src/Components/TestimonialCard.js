import quotationMark from '../Assets/quote.png'

const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className="card-content">
                <div className="card-testimony">
                    <figure>
                        {quotationMark}
                    </figure>
                    <h3>
                        {props.testimonyHeader}
                    </h3>
                    <p>
                        {props.testimonyBody}
                    </p>
                </div>

                <div className="card-profile">
                    <figure className='profile-pic'>
                        <img src={props.profilePic} alt={props.name} />
                    </figure>

                    <div className='profile-info'>
                        <h3>
                            {props.name}
                        </h3>
                        <h4>
                            {props.title}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
