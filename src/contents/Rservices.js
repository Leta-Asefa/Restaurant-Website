const Services = () => {

    const services = [
        {
            header: "Spontaneous Dining",
            description: "Enjoy the freedom of dining out whenever the mood strikes with our flexible seating options. No reservation needed—just walk in and savor a delightful meal with us, anytime.",
            image: "injerafood.webp"
        },
        {
            header: "Catering",
            description: "Elevate your events with our premium catering services. From intimate gatherings to grand celebrations, we provide exquisite dishes and exceptional service to make your occasion memorable",
            image:"catering.jpg"
        },
        {
            header: "Private Dining Rooms",
            description: "Enjoy a personalized dining experience in one of our elegant private dining rooms. Perfect for business meetings, family celebrations, or romantic dinners, complete with tailored menus and dedicated service.",
            image:"privateroom.jpg"
        },
        {
            header: "Takeout and Delivery",
            description: "Savor our delectable dishes from the comfort of your home with our convenient takeout and delivery options. Fresh, hot meals delivered right to your doorstep.",
            image:"delivery.png"
        },
        {
            header: "Seasonal Menus",
            description: "Experience the flavors of each season with our rotating seasonal menus, designed to highlight the best ingredients and culinary trends of the moment.",
            image:"specialmenu.webp"
        }



        

    ]

    return ( 
        <dvi className="grid grid-cols-3 p-20 gap-10">
            {
                services.map(service => {
                    return <div className="flex flex-col justify-center">
                        <img src={service.image}  className="w-full h-52 object-cover"/>
                        <h1 className="font-bold text-2xl">{service.header}</h1>
                        <p>{service.description}</p>
                    </div>
                })
            }


        </dvi>
     );
}
 
export default Services;