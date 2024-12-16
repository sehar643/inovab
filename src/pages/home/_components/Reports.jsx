import React from 'react'

const Reports = () => {
  const reports = [
    {
      id: 1,
      image: '/report.png',
      title: 'October 2024 Report',
      pdf: '/reports/october2024.pdf'
    },
    {
      id: 2,
      image: '/report.png',
      title: 'September 2024 Report',
      pdf: '/reports/september2024.pdf'
    },
    {
      id: 3,
      image: '/report.png',
      title: 'August 2024 Report',
      pdf: '/reports/august2024.pdf'
    }
  ]

  return (
    <div className="md:h-[500px] lg:h-[500px] p-16 bg-[url('/homebg.png')] bg-cover bg-center">
      <div className="mb-14 md:ml-48 lg:ml-48">
        <h2 className="text-white text-2xl">ATTESTATION REPORTS</h2>
        <div className="md:w-[800px] lg:w-[800px] h-[2px] bg-white mt-2"></div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {reports.map((report) => (
          <div 
            key={report.id} 
            className="cursor-pointer transition-transform duration-200 hover:scale-105 max-w-[250px] mx-auto"
          >
            <a 
              href={report.pdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="rounded-t-lg">
                <img 
                  src={report.image} 
                  alt={report.title}
                  className="w-full h-auto object-contain max-h-[150px]" 
                />
              </div>
              <div className="bg-black text-white p-3 rounded-b-lg">
                <p className="text-center text-sm">{report.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reports
