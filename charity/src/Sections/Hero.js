import Button from '../Components/Button'

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='hero-content'>
                <h2>
                    give hope for homeless
                </h2>

                <h1>
                    Helping each other
                    can make world better
                </h1>

                <p>
                    We Seek out world changers and difference makers around the
                    globe,and equip them to fulfill their unique purpose.
                </p>

                <div className='hero-btns'>
                    <Button className='primary-btn' label='donate now' />
                    <Button className='secondary-btn' label='know about us' />
                </div>
            </div>
        </section>
    )
}

export default Hero
