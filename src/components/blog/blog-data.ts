export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  isVideo?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The number of new cars sold over 20 years',
    excerpt: 'The number of new cars sold in the United States over a 20-year period can vary significantly depending on economic conditions, consumer preferences, and various other factors.',
    date: '02 OCT',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800',
  },
  {
    id: '2',
    title: 'Warning lights indicating activation of various systems',
    excerpt: 'Warning lights in a car\'s dashboard indicate the activation of various systems or alert the driver to potential issues. These..',
    date: '02 OCT',
    category: 'Usefull',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800',
  },
  {
    id: '3',
    title: 'What to know about changing the engine oil and oil..',
    excerpt: 'Regular oil and oil filter changes are essential for the health and longevity of your engine. Neglecting this maintenance can..',
    date: '02 OCT',
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1605341258814-22b069695028?q=80&w=800',
  },
  {
    id: '4',
    title: 'Why diesel is losing its popularity in Europe',
    excerpt: 'Diesel is losing popularity in Europe for several reasons, and this trend has been ongoing for several years. Some of the key..',
    date: '02 OCT',
    category: 'Usefull',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800',
  },
  {
    id: '5',
    title: 'Steering angle sensor: function, failure symptoms, and..',
    excerpt: 'The Steering Angle Sensor is an important part of a vehicle\'s safety system. It transmits the steering wheel\'s rate of turn,..',
    date: '09 NOV',
    category: 'Usefull',
    image: 'https://images.unsplash.com/photo-1549399500-144003965582?q=80&w=800',
  },
  {
    id: '6',
    title: 'How does a brake pressure regulator work?',
    excerpt: 'Braking systems use various mechanisms to ensure optimum performance. One such component is the car brake power regulator, also..',
    date: '25 MAY',
    category: 'Tips Usefull',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85eb19ea3?q=80&w=800',
  },
  {
    id: '7',
    title: 'Engine piston in a car: What is it and how does it work?',
    excerpt: 'During the power stroke of an internal combustion engine, the energy that is contained in the fuel is converted into heat and..',
    date: '15 DEC',
    category: 'Experts Usefull',
    image: 'https://images.unsplash.com/photo-1486006396193-471a2abc9302?q=80&w=800',
  },
  {
    id: '8',
    title: 'Heater not working, starting problems, and other faults',
    excerpt: 'Unfortunately, all heaters and furnaces need to be replaced eventually, but the good news is that some heating problems can be..',
    date: '20 APR',
    category: 'Industry insights',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800',
  },
  {
    id: '9',
    title: 'Fuel temperature sensor: function and failure symptoms',
    excerpt: 'A fuel temperature sensor is a critical vehicle\'s fuel system component that measures the temperature of the fuel and sends this..',
    date: '14 MAY',
    category: 'Video guides',
    image: 'https://images.unsplash.com/photo-1517672791490-32a9e3a22b16?q=80&w=800',
    isVideo: true,
  },
  {
    id: '10',
    title: 'Radial vs Cross Ply Tyres: What\'s The Difference?',
    excerpt: 'This guide will explain the different structures of these two types of tyres and the pros and cons of each to help you make more..',
    date: '11 MAY',
    category: 'Video guides',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800',
    isVideo: true,
  },
  {
    id: '11',
    title: 'How to change parking brake cable on MERCEDES W201',
    excerpt: 'Changing the parking brake cable on a Mercedes-Benz W201, also known as the Mercedes 190, can be a complex job and may require..',
    date: '24 APR',
    category: 'Video guides',
    image: 'https://images.unsplash.com/photo-1486006396193-471a2abc9302?q=80&w=800',
    isVideo: true,
  },
  {
    id: '12',
    title: 'How to change glass for wing mirror MERCEDES W201',
    excerpt: 'Replacing the glass for the wing mirror on a Mercedes-Benz W201, also known as the Mercedes 190, can be a straightforward process.',
    date: '17 MAR',
    category: 'Video guides',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85eb19ea3?q=80&w=800',
    isVideo: true,
  },
];
