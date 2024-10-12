export default function ServicesPage() {
    const services = [
      {
        title: "Web Development",
        description: "Custom websites tailored to your needs",
        icon: "🌐"
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android apps for your business",
        icon: "📱"
      },
      {
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces",
        icon: "🎨"
      },
      {
        title: "Cloud Solutions",
        description: "Scalable and secure cloud infrastructure",
        icon: "☁️"
      },
      {
        title: "Data Analytics",
        description: "Insights to drive your business forward",
        icon: "📊"
      },
      {
        title: "Cybersecurity",
        description: "Protect your digital assets",
        icon: "🔒"
      }
    ]
  
    return (
      <div className="min-h-screen bg-gray-100">
        {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
          </div>
        </header> */}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="text-center mb-12">
                <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Comprehensive Solutions for Your Business
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                  We offer a wide range of services to help your business thrive
                  in the digital age.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white overflow-hidden shadow rounded-lg"
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 text-3xl"
                          aria-hidden="true"
                        >
                          {service.icon}
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-lg font-medium text-gray-900 truncate">
                              {service.title}
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                              {service.description}
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  