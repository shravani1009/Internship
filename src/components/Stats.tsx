
import { GraduationCap, Building2, BookOpen, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      id: 1, 
      name: 'Students Upskilled', 
      value: '25,000+',
      icon: <GraduationCap className="h-8 w-8 text-gray-900" />
    },
    { 
      id: 2, 
      name: 'Employees Trained', 
      value: '10,000+',
      icon: <Building2 className="h-8 w-8 text-gray-900" />
    },
    { 
      id: 3, 
      name: 'Available Courses', 
      value: '15+',
      icon: <BookOpen className="h-8 w-8 text-gray-900" />
    },
    { 
      id: 4, 
      name: 'Expert Instructors', 
      value: '100+',
      icon: <Users className="h-8 w-8 text-gray-900" />
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white px-4 py-6 rounded-lg shadow-lg border border-gray-200 hover:border-green-600/30 transition-all"
          >
            <div className="flex items-center gap-4">
              {stat.icon}
              <div>
                <dt className="text-sm font-medium text-gray-600">{stat.name}</dt>
                <dd className="mt-2 text-4xl font-extrabold text-gray-900">{stat.value}</dd>
              </div>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stats;
