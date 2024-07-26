import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const SpecialDish = () => {

  const specialDishes = [
    {
      name: "Truffle Risotto",
      description: "Creamy risotto with black truffles, parmesan cheese, and a hint of white wine.",
      price: 24.99,
      image: "special1.jpg"
    },
    {
      name: "Grilled Lobster Tail",
      description: "Succulent lobster tail grilled to perfection, served with garlic butter sauce.",
      price: 29.99,
      image: "special2.jpg"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
      price: 8.99,
      image: "special1.jpg"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures animation only happens once
    threshold: 0.3, // Defines how much of the element is visible before triggering
  });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="text-center mt-10"
    >


      <h1 className="text-4xl font-bold">Our Special Dishes</h1>
      <p className="text-sm w-96 mx-auto">Savor our chef's finest creations, crafted with fresh ingredients and bursting with flavors to delight your palate.</p>
      <div className="flex justify-center gap-24 p-20">
        {specialDishes.map(dish => {
          return <div className="w-40">
            <img src={dish.image} className="w-40" />
            <h1 className="font-bold">{dish.name}</h1>
            <p>{dish.description}</p>
            <footer className="font-semibold">500 ETB ⭐⭐⭐⭐⭐ </footer>
          </div>
        })}
      </div>

    </motion.div>
  );
}

export default SpecialDish;