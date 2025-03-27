import React, { useState, useEffect } from 'react';

interface Client {
  id: number;
  name: string;
  logo: string;
  location?: string;
}

const ClientsPage = () => {
  const [collegeClients, setCollegeClients] = useState<Client[]>([]);
  const [companyClients, setCompanyClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData: Client[] = [
          { id: 1, name: 'AC Patil College', logo: '/src/assets/Clients_Colleges/ac patil.png' },
          { id: 2, name: 'Auro University', logo: '/src/assets/Clients_Colleges/auro.png' },
          { id: 3, name: 'BBD University', logo: '/src/assets/Clients_Colleges/bbd.png' },
          { id: 4, name: 'Birla Institute', logo: '/src/assets/Clients_Colleges/birla.jpg' },
          { id: 5, name: 'FCRIT', logo: '/src/assets/Clients_Colleges/fcrit.png' },
          { id: 6, name: 'GITAM University', logo: '/src/assets/Clients_Colleges/gitam-removebg.png' },
          { id: 7, name: 'KARE', logo: '/src/assets/Clients_Colleges/kare-removebg-preview.png' },
          { id: 8, name: 'KJ Somaiya', logo: '/src/assets/Clients_Colleges/KJ Somaiya.png' },
          { id: 9, name: 'Malla Reddy', logo: '/src/assets/Clients_Colleges/malla_reddy-removebg-preview.png' },
          { id: 10, name: 'Marwadi University', logo: '/src/assets/Clients_Colleges/marwadi.png' },
          { id: 11, name: 'Mewar University', logo: '/src/assets/Clients_Colleges/mewar.png' },
          { id: 12, name: 'MIET', logo: '/src/assets/Clients_Colleges/miet.png' },
          { id: 13, name: 'Modern College', logo: '/src/assets/Clients_Colleges/modern-removebg-preview.png' },
          { id: 14, name: 'NMIMS', logo: '/src/assets/Clients_Colleges/nmims-removebg-preview.png' },
          { id: 15, name: 'PVG COET', logo: '/src/assets/Clients_Colleges/pvg coet.png' },
          { id: 16, name: 'RAIT', logo: '/src/assets/Clients_Colleges/rait.png' },
          { id: 17, name: 'RIT', logo: '/src/assets/Clients_Colleges/rit.png' },
          { id: 18, name: 'Saket College', logo: '/src/assets/Clients_Colleges/saket.png' },
          { id: 19, name: 'SECE', logo: '/src/assets/Clients_Colleges/sece.png' },
          { id: 20, name: 'Somaiya', logo: '/src/assets/Clients_Colleges/somaiya-removebg-preview.png' },
          { id: 21, name: 'Sri Krishna', logo: '/src/assets/Clients_Colleges/sri_krishna-removebg-preview.png' },
          { id: 22, name: 'SSMIT', logo: '/src/assets/Clients_Colleges/ssmit.png' },
          { id: 23, name: 'SSM', logo: '/src/assets/Clients_Colleges/ssmlogo.png' },
          { id: 24, name: 'SSU', logo: '/src/assets/Clients_Colleges/ssu-removebg-preview.png' },
          { id: 25, name: 'SVIMS', logo: '/src/assets/Clients_Colleges/Svims.png' },
          { id: 26, name: 'Swarandhra', logo: '/src/assets/Clients_Colleges/swarandhra.jpeg' },
          { id: 27, name: 'VESIT', logo: '/src/assets/Clients_Colleges/vesit.png' },
          { id: 28, name: 'VIT Mumbai', logo: '/src/assets/Clients_Colleges/vit_mum-removebg-preview.png' },
          { id: 29, name: 'VSIT', logo: '/src/assets/Clients_Colleges/vsit-removebg-preview.png' },
          { id: 30, name: 'Welingkar', logo: '/src/assets/Clients_Colleges/welingkar.png' }
        ];

        const companyData: Client[] = [
          { id: 1, name: 'Board', logo: '/src/assets/Client_Company/board.png' },
          { id: 2, name: 'Build Up', logo: '/src/assets/Client_Company/Build-up.png' },
          { id: 3, name: 'CA', logo: '/src/assets/Client_Company/ca.png' },
          { id: 4, name: 'DMAIC', logo: '/src/assets/Client_Company/dmaic.png' },
          { id: 5, name: 'EDU', logo: '/src/assets/Client_Company/edu.png' },
          { id: 6, name: 'ELECTROCLOUD', logo: '/src/assets/Client_Company/eletrocloud.png' },
          { id: 7, name: 'ETLHIVE', logo: '/src/assets/Client_Company/etlhive.png' },
          { id: 8, name: 'HUNARHO', logo: '/src/assets/Client_Company/hunarho.png' },
          { id: 9, name: 'IBM', logo: '/src/assets/Client_Company/ibm.png' },
          { id: 10, name: 'IKGAI', logo: '/src/assets/Client_Company/ikigai.png' },
          { id: 11, name: 'IMARTICUS', logo: '/src/assets/Client_Company/imarticus.png' },
          { id: 12, name: 'ITVEDANT', logo: '/src/assets/Client_Company/itvedant.png' },
          { id: 13, name: 'LOTLITE', logo: '/src/assets/Client_Company/lotlite.png' },
          { id: 14, name: 'MICROSOFT', logo: '/src/assets/Client_Company/microsoft.png' },
          { id: 15, name: 'NEXTURNTECH', logo: '/src/assets/Client_Company/nexturntech.jpeg' },
          { id: 16, name: 'PHEME SOFT', logo: '/src/assets/Client_Company/pheme_soft.png' },
          { id: 18, name: 'PNT Robotics', logo: '/src/assets/Client_Company/pnt_robotics.png' },
          { id: 19, name: 'Proschool', logo: '/src/assets/Client_Company/Proschool.png' },
          { id: 20, name: 'Quantum', logo: '/src/assets/Client_Company/quantum.png' },
          { id: 21, name: 'Raceitsolutions', logo: '/src/assets/Client_Company/raceitsolutions.png' },
          { id: 22, name: 'Remote Learning', logo: '/src/assets/Client_Company/remote_learnings.png' },
          { id: 23, name: 'Techradiance', logo: '/src/assets/Client_Company/techradiance.png' },
          { id: 24, name: 'Techtrunk', logo: '/src/assets/Client_Company/techtrunk.png' },
          { id: 25, name: 'TT', logo: '/src/assets/Client_Company/tt.png' },
          { id: 26, name: 'Udemy', logo: '/src/assets/Client_Company/udemy.png' }
        ];
 
        setCollegeClients(clientsData);
        setCompanyClients(companyData);        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading client data:', error);
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-16">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Business partnership and collaboration"
          className="w-full h-full object-cover object-center transform scale-95 brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4">OUR CLIENTS</h1>
          <p className="text-xl text-white/90">Building futures together</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Partners Grid */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-16 mt-8">
          

          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                College Clients
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
            </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {collegeClients.map((client) => (
                <div
                  key={client.id}
                  className="aspect-square bg-white rounded-lg p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-[80%] object-contain"
                  />
                  <p className="mt-2 text-xs font-medium text-gray-600 text-center truncate w-full">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Company Partners Grid */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Corporate Partners
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {companyClients.map((company) => (
                <div
                  key={company.id}
                  className="aspect-square bg-white rounded-lg p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-[80%] object-contain"
                  />
                  <p className="mt-2 text-xs font-medium text-gray-600 text-center truncate w-full">
                    {company.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      
      </div>
      </div>
    );
  };


export default ClientsPage;