import React, { useState } from 'react';
import CallUsNow from './Rcallus';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Menu = () => {


    const foods = [
        { name: "Margherita Pizza", price: 12.99 },
        { name: "BBQ Chicken Pizza", price: 14.99 },
        { name: "Pepperoni Pizza", price: 13.99 },
        { name: "Veggie Pizza", price: 11.99 },
        { name: "Spaghetti Carbonara", price: 15.99 },
        { name: "Fettuccine Alfredo", price: 14.99 },
        { name: "Lasagna", price: 16.99 },
        { name: "Caesar Salad", price: 9.99 },
        { name: "Greek Salad", price: 10.99 },
        { name: "Caprese Salad", price: 11.99 },
        { name: "Chicken Parmesan", price: 17.99 },
        { name: "Eggplant Parmesan", price: 16.99 },
        { name: "Garlic Bread", price: 5.99 },
        { name: "Bruschetta", price: 7.99 },
        { name: "Mozzarella Sticks", price: 8.99 },
        { name: "Calamari", price: 12.99 },
        { name: "Minestrone Soup", price: 6.99 },
        { name: "Tomato Basil Soup", price: 6.99 },
        { name: "Mushroom Risotto", price: 14.99 },
        { name: "Shrimp Scampi", price: 18.99 },
        { name: "Beef Carpaccio", price: 19.99 },
        { name: "Tiramisu", price: 7.99 },
        { name: "Gelato", price: 5.99 },
        { name: "Panna Cotta", price: 6.99 },
        { name: "Cannoli", price: 6.99 },
        { name: "Affogato", price: 4.99 },
        { name: "Espresso", price: 2.99 },
        { name: "Cappuccino", price: 3.99 },
        { name: "Limoncello", price: 6.99 },
        { name: "Prosecco", price: 8.99 }
    ];

    const drinks = [
        { name: "Coca Cola", price: 1.99 },
        { name: "Pepsi", price: 1.99 },
        { name: "Orange Juice", price: 3.99 },
        { name: "Apple Juice", price: 3.99 },
        { name: "Lemonade", price: 2.99 },
        { name: "Iced Tea", price: 2.99 },
        { name: "Sparkling Water", price: 2.99 },
        { name: "Still Water", price: 1.99 },
        { name: "Ginger Ale", price: 2.99 },
        { name: "Club Soda", price: 1.99 },
        { name: "Root Beer", price: 2.99 },
        { name: "Energy Drink", price: 4.99 }
    ];

    const desserts = [
        { name: "Cheesecake", price: 6.99 },
        { name: "Brownie", price: 5.99 },
        { name: "Apple Pie", price: 4.99 },
        { name: "Chocolate Cake", price: 6.99 },
        { name: "Ice Cream Sundae", price: 7.99 },
        { name: "Fruit Salad", price: 4.99 },
        { name: "Pecan Pie", price: 6.99 },
        { name: "Banana Split", price: 5.99 },
        { name: "Lemon Tart", price: 6.99 },
        { name: "Cupcake", price: 3.99 },
        { name: "Macarons", price: 7.99 },
        { name: "Eclair", price: 4.99 },
        { name: "Mousse", price: 5.99 },
        { name: "Creme Brulee", price: 6.99 },
        { name: "Pavlova", price: 7.99 }
    ];

    const hotDrinks = [
        { name: "Coffee", price: 2.99 },
        { name: "Latte", price: 3.99 },
        { name: "Hot Chocolate", price: 3.49 },
        { name: "Tea", price: 2.49 },
        { name: "Chai Latte", price: 3.99 },
        { name: "Mocha", price: 4.49 },
        { name: "Matcha Latte", price: 4.99 },
        { name: "Americano", price: 2.99 }
    ];

    const [currentCategory, setCurrentCategory] = useState('foods');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    let src


    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.2, // Defines how much of the element is visible before triggering
    });


    const getCurrentItems = () => {
        let currentItems;
        switch (currentCategory) {
            case 'drinks':
                currentItems = drinks;
                break;
            case 'desserts':
                currentItems = desserts;
                break;
            case 'hotDrinks':
                currentItems = hotDrinks;
                break;
            default:
                currentItems = foods;
                break;
        }
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return currentItems.slice(indexOfFirstItem, indexOfLastItem);
    };

    const getTotalPages = () => {
        let totalItems;
        switch (currentCategory) {
            case 'drinks':
                totalItems = drinks.length;
                break;
            case 'desserts':
                totalItems = desserts.length;
                break;
            case 'hotDrinks':
                totalItems = hotDrinks.length;
                break;
            default:
                totalItems = foods.length;
                break;
        }
        return Math.ceil(totalItems / itemsPerPage);
    };

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setCurrentPage(1);
    };

    const pageNumbers = [];
    for (let i = 1; i <= getTotalPages(); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='relative'>
            <CallUsNow/>
        <div className="grid grid-cols-12 p-20 gap-5 bg-gray-800 text-white">
            

                <motion.div
                     ref={ref}
                     animate={{ y: inView ? 0 : -70 }}
                     transition={{ duration: 1 }}
                    className="col-span-3 flex flex-col justify-center text-center"
                >
                <img src="menu2.jpg" className="w-full h-auto" />
                <h1 className='font-bold text-xl'>Discover Our Menu</h1>
                <p>Delight in an array of culinary masterpieces crafted to excite your taste buds and elevate your dining experience.</p>
            </motion.div>

                <motion.div
                     ref={ref}
                     animate={{ x: inView ? 0 : -50 }}
                     transition={{ duration: 1 }}
                    className="col-span-9  p-4 rounded-lg"
                >
                <header className="flex space-x-4 mb-4">
                    <button onClick={() => handleCategoryChange('foods')} className={`p-1 rounded-md font-bold ${currentCategory === 'foods' ? 'bg-white text-black' : ''}`}>Foods</button>
                    <button onClick={() => handleCategoryChange('desserts')} className={`p-1 rounded-md font-bold ${currentCategory === 'desserts' ? 'bg-white text-black' : ''}`}>Desserts</button>
                    <button onClick={() => handleCategoryChange('hotDrinks')} className={`p-1 rounded-md font-bold ${currentCategory === 'hotDrinks' ? 'bg-white text-black' : ''}`}>Hot Drinks</button>
                    <button onClick={() => handleCategoryChange('drinks')} className={`p-1 rounded-md font-bold ${currentCategory === 'drinks' ? 'bg-white text-black' : ''}`}>Soft Drinks</button>
                </header>

                <main className="space-y-2">
                    {getCurrentItems().map(item => (
                        <div key={item.name} className="flex justify-between bg-white text-black p-2 rounded-lg">
                            <div className="flex gap-2">

                                <img src={`${currentCategory === 'foods' ? 'food1.jpg' : ''} 
                                            ${currentCategory === 'drinks' ? 'softdrinks.jpg' : ''}
                                            ${currentCategory === 'hotDrinks' ? '1.jpg' : ''}
                                            ${currentCategory === 'desserts' ? '4.webp' : ''}`}
                                    className="w-10 rounded-lg" alt={item.name}
                                />

                                <h1 className='font-semibold'>{item.name}</h1>

                            </div>

                            <div>
                                {item.price} ETB
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-center mt-4 space-x-2">
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`px-3 py-1 rounded ${currentPage === number ? 'bg-gray-50 text-black' : 'bg-gray-700'}`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                </main>
            </motion.div>
            </div>
        </div>
    );
};

export default Menu;
