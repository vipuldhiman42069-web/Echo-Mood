import SoundCard from './SoundCard';
import sounds from '../assets/sounds.json';

const MasonryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 px-6 lg:px-20">
      {sounds.map((sound) => (
        <SoundCard key={sound.id} sound={sound} />
      ))}
    </div>
  );
};

export default MasonryGrid;
