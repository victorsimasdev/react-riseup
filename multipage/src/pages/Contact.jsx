import { useState } from 'react';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

function Contact() {
  const [selected, setSelected] = useState(null);

  const images = {
    "Julio Bezerra": "https://randomuser.me/api/portraits/men/21.jpg",
    "Ramom Aguiar": "https://randomuser.me/api/portraits/men/31.jpg",
    "Victor Simas": "https://randomuser.me/api/portraits/men/41.jpg",
    "Rafael Farias": "https://randomuser.me/api/portraits/men/51.jpg",
  };

  const handleClick = (name) => {
    setSelected(name);
  };

  return (
    <div>
      <Header />
      <div className="mt-[80px] flex flex-col items-center">
        <div className="flex justify-center mt-[5rem] gap-10">
          {Object.keys(images).map((name) => (
            <Link onClick={() => handleClick(name)} className="cursor-pointer">
              {name}
            </Link>
          ))}
        </div>
        {selected && (
          <div className="mt-10">
            <img
              src={images[selected]}
              alt={selected}
              className="w-64 h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
