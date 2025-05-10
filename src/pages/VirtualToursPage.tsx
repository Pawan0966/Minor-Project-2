import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map, Users, Clock, Leaf, Star, BookOpen, Brain, Heart, Shield, Plane as Plant, ArrowRight, Check } from 'lucide-react';
import { VirtualTour } from '../types';

const VirtualToursPage: React.FC = () => {
  const [tours, setTours] = useState<VirtualTour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [featuredTour, setFeaturedTour] = useState<VirtualTour | null>(null);

  useEffect(() => {
    // In production, this would fetch from the API
    const fetchTours = async () => {
      try {
        const mockTours: VirtualTour[] = [
          {
            id: '1',
            title: 'Digestive Health Garden',
            description: 'Explore herbs and plants known for their digestive healing properties in Ayurvedic medicine.',
            plants: ['tulsi', 'ginger', 'mint'],
            coverImage: 'https://images.pexels.com/photos/5938413/pexels-photo-5938413.jpeg',
            category: 'health',
            duration: 30,
            difficulty: 'Easy',
            participants: 150,
            rating: 4.8,
            reviews: 45
          },
          {
            id: '2',
            title: 'Sacred Plants of Ayurveda',
            description: 'Journey through a collection of the most revered medicinal plants in Ayurvedic tradition.',
            plants: ['tulsi', 'ashwagandha', 'brahmi'],
            coverImage: 'https://images.pexels.com/photos/4099099/pexels-photo-4099099.jpeg',
            category: 'cultural',
            duration: 45,
            difficulty: 'Medium',
            participants: 230,
            rating: 4.9,
            reviews: 67
          },
          {
            id: '3',
            title: 'Stress Relief Garden',
            description: 'Discover adaptogenic herbs and calming plants used in traditional medicine.',
            plants: ['ashwagandha', 'brahmi', 'shankhpushpi'],
            coverImage: 'https://images.pexels.com/photos/7474209/pexels-photo-7474209.jpeg',
            category: 'health',
            duration: 25,
            difficulty: 'Easy',
            participants: 180,
            rating: 4.7,
            reviews: 38
          },
          {
            id: '4',
            title: 'Immunity Boosting Plants',
            description: 'Explore the powerful world of immune-enhancing medicinal herbs.',
            plants: ['tulsi', 'giloy', 'amla'],
            coverImage: 'https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg',
            category: 'health',
            duration: 35,
            difficulty: 'Easy',
            participants: 120,
            rating: 4.6,
            reviews: 29
          },
          {
            id: '5',
            title: 'Traditional Healing Garden',
            description: 'Journey through time-tested remedies and healing traditions.',
            plants: ['neem', 'turmeric', 'holy basil'],
            coverImage: 'https://images.pexels.com/photos/6157805/pexels-photo-6157805.jpeg',
            category: 'cultural',
            duration: 40,
            difficulty: 'Medium',
            participants: 165,
            rating: 4.8,
            reviews: 42
          },
          {
            id: '6',
            title: 'Seasonal Wellness Garden',
            description: 'Discover plants that support health through different seasons.',
            plants: ['ginger', 'tulsi', 'mint'],
            coverImage: 'https://images.pexels.com/photos/6157912/pexels-photo-6157912.jpeg',
            category: 'seasonal',
            duration: 30,
            difficulty: 'Easy',
            participants: 95,
            rating: 4.7,
            reviews: 31
          }
        ];
        setTours(mockTours);
        setFeaturedTour(mockTours[1]); // Set Sacred Plants tour as featured
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching tours:', error);
        setIsLoading(false);
      }
    };

    fetchTours();
  }, []);

  const filteredTours = selectedCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      title: "Interactive Learning",
      description: "Engage with 3D models and detailed information about each plant's properties and uses."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Holistic Understanding",
      description: "Learn about traditional healing systems and their approach to health and wellness."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Expert Guidance",
      description: "Tours curated by experienced practitioners and botanical experts."
    },
    {
      icon: <Plant className="h-8 w-8 text-primary-600" />,
      title: "Practical Knowledge",
      description: "Gain insights into growing and using medicinal plants in your daily life."
    }
  ];

  const features = [
    "360° views of medicinal plants",
    "Detailed botanical information",
    "Traditional usage guides",
    "Growing tips and cultivation advice",
    "Audio descriptions and narration",
    "Interactive plant identification",
    "Progress tracking and achievements",
    "Personalized learning paths"
  ];

  return (
    <div className="pt-20">
      <div className="bg-primary-700 text-white py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Map className="h-12 w-12 mx-auto mb-4 text-primary-200" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Virtual Garden Tours
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Take guided tours through our virtual gardens and discover the healing traditions of AYUSH medicine systems.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/tours/featured"
                className="btn bg-white text-primary-700 hover:bg-primary-50"
              >
                Start Featured Tour
              </Link>
              <Link
                to="/about"
                className="btn border border-white text-white hover:bg-primary-600"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Tour Section */}
      {featuredTour && (
        <div className="bg-primary-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  Featured Tour
                </span>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  {featuredTour.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredTour.description}
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 font-medium">{featuredTour.rating}</span>
                    <span className="ml-1 text-gray-500">({featuredTour.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary-600" />
                    <span className="ml-1">{featuredTour.participants} joined</span>
                  </div>
                </div>
                <Link
                  to={`/tour/${featuredTour.id}`}
                  className="inline-flex items-center btn btn-primary"
                >
                  Start Tour
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src={featuredTour.coverImage}
                  alt={featuredTour.title}
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Tour Highlights</p>
                      <p className="text-sm text-gray-600">{featuredTour.plants.join(' • ')}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{featuredTour.duration} mins</p>
                      <p className="text-sm text-gray-600">{featuredTour.difficulty}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Benefits of Virtual Tours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the power of traditional medicine through our immersive virtual tours
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Experience Our Interactive Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6157805/pexels-photo-6157805.jpeg"
                alt="Virtual Tour Features"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Learn at Your Pace</p>
                    <p className="text-sm text-gray-600">Interactive & Self-guided</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Tours Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-gray-900">
            Available Tours
          </h2>
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {['all', 'health', 'cultural', 'seasonal'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.coverImage}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="font-medium">{tour.rating}</span>
                      <span className="text-sm">({tour.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tour.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{tour.duration} mins</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{tour.participants} visited</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="h-4 w-4 mr-1" />
                      <span>{tour.difficulty}</span>
                    </div>
                  </div>

                  <Link
                    to={`/tour/${tour.id}`}
                    className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Start Tour
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners exploring the fascinating world of traditional medicine through our immersive virtual tours.
          </p>
          <Link
            to="/tours/featured"
            className="btn bg-white text-primary-700 hover:bg-primary-50 inline-flex items-center"
          >
            Begin Your First Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VirtualToursPage;