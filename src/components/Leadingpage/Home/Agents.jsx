import img from '../../../assets/L_img/profile.jpg';
import { FaStar } from 'react-icons/fa';

const AgentsList = [
    {
        id: 1,
        name: 'Samson ',
        rate: 4.3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 2,
        name: 'Peter',
        rate: 3.7,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 3,
        name: 'Paul',
        rate: 5.0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 4,
        name: 'John',
        rate: 4.7,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 5,
        name: 'James ',
        rate: 4.0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 6,
        name: 'Simon',
        rate: 4.5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
];

const Agents = () => {
    return (
        <div className="py-8 mb-10 bg-white">
            <div className='flex justify-center mb-8'>
                <h1 className="text-4xl font-bold text-green-600">Meet Our Agents</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6'>
                {AgentsList.map((data) => (
                    <div key={data.id} className='w-full max-w-xs mx-auto'>
                        <div className='bg-white border border-gray-300 rounded-3xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
                            <div className='flex flex-col items-center p-4'>
                                {/* Image with hover zoom effect */}
                                <img 
                                    src={data.img} 
                                    alt={data.name} 
                                    className='w-32 h-32 object-cover rounded-full border-4 border-gradient-to-br from-green-500 to-yellow-500 transform transition-all duration-300 hover:scale-110'
                                />
                                {/* Rating and Name */}
                                <div className='flex items-center p-2 gap-2'>
                                    <FaStar className='text-yellow-500' />
                                    <span className='font-semibold text-lg'>{data.rate}</span>
                                </div>
                                <h1 className='font-semibold text-xl text-green-700 mt-2'>{data.name}</h1>
                                {/* Description */}
                                <p className='text-gray-600 p-2 text-center'>{data.text}</p>
                                {/* Button */}
                                <button className="text-white mt-2 shadow-md hover:shadow-lg bg-gradient-to-l from-[#ecc515] to-[#399c73] rounded-full px-5 py-2 transition-all duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Agents;