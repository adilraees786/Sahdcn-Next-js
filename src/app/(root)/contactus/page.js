// import React from 'react'

// function contactus() {
//   return (
//     <div>contactus</div>
//   )
// }

// export default contactus

"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function contactus () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }


  const defaultProps = {
    center: {
        lat: 24.8607,
        lng:  67.0011
    },
    zoom: 25
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We'd love to hear from you. Please fill out this form or use our
            contact information below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </Label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full flex justify-center items-center"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="h-64 bg-gray-300">
              {/* Replace this div with an actual map component */}
              <div className="h-[80vh] w-11/12 mx-auto ">
                <GoogleMapReact
            
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >

                </GoogleMapReact>
            </div>
              <div className="h-full flex items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                  <p className="text-gray-600">
                    Saddar Karachi
                    <br />
                    City, State 12345
                    <br />
                    Country
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  <p className="text-gray-600">+92 3078068 476</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <p className="text-gray-600">adilraees911@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
