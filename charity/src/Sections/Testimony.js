import TestimonialCard from "../Components/TestimonialCard"

const testimonies = [
    {
        name: 'John Doe',
        title: 'Financial Analyst',
        profilePic: 'john doe.png',
        testimonyHeader: 'Kindness',
        testimonyBody: "I've been a part of this charity for years, and I'm continually inspired by the positive impact they make on the lives of those in need. It's truly a privilege to contribute to such a noble cause."
    }, 

    {
        name: 'Jack Harry',
        title: 'Senior Gardner Farmer',
        profilePic: 'jack harry.png',
        testimonyHeader: 'Humanity',
        testimonyBody: "I'm grateful to have found this charity. They are dedicated to helping the less fortunate, and their commitment to transparency and accountability is commendable. Every dollar donated goes a long way."
    },

    {
        name: 'Sakib Hossain',
        title: 'Environmental Activist',
        profilePic: 'sakib hossain.png',
        testimonyHeader: 'Ethics & Morality',
        testimonyBody: "The team behind this charity is incredible. Their passion for making a difference is contagious, and they always go above and beyond to support vulnerable communities. I'm proud to be a supporter."
    }
]

const Cards = () => {
    return (
        <>
            {
                testimonies.map(testimony => {
                    return (
                        <TestimonialCard 
                            name={testimony.name}
                            title={testimony.title}
                            profilePic={testimony.profilePic}
                            testimonyHeader={testimony.testimonyHeader}
                            testimonyBody={testimony.testimonyBody}
                        />
                    )
                })
            }
        </>
    )
}

const Testimony = () => {
    return (
        <section className="testimony-section">
            <div className="testimony-content">
                <div className="testimony-header">
                    <h3 className="section-h3">
                        Testimonial
                    </h3>

                    <p>
                        What People Say About Us
                    </p>
                </div>

                <div className="testimony-body">
                    <div className="cards-container">
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimony