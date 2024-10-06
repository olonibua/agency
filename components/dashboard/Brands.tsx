"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import CreateBrandModal from './BrandsComponents/BrandModal';
import BrandModal from './BrandsComponents/BrandModal';

interface BrandsProps {
  pageTitle: string;
//   onCreateBrand: (brand: any) => void;
}


const Brands = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const brands = [
    { name: 'Sephora', industry: 'Beauty', agents: 2, campaigns: 5, spent: 12257 },
    { name: 'Zara', industry: 'Fashion', agents: 2, campaigns: 7, spent: 18257 },
    { name: 'Renuar', industry: 'Clothing', agents: 2, campaigns: null, spent: null },
    { name: 'American Eagle', industry: 'Clothing', agents: 2, campaigns: 12, spent: 67800 },
    { name: 'H&M', industry: 'Clothing', agents: 2, campaigns: 2, spent: 2257 },
    { name: 'Bershka', industry: 'Fashion', agents: 2, campaigns: 11, spent: 19257 },
    { name: 'Nike', industry: 'Sportswear', agents: 2, campaigns: 15, spent: 152257 },
    { name: 'Qatar Airways', industry: 'Travel', agents: 2, campaigns: 3, spent: 1257 },
  ]

  return (
    <div className="p-4 sm:p-6 bg-white border h-full">
      <p className="text-gray-600 mb-4">These are your available brands</p>
      
      <div className="flex justify-between items-center mb-4">
        <button 
          className="bg-black-500 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create new brand profile
        </button>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-md" />
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="flex items-center px-3 py-2 border rounded-md">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Sort
          </button>
          <button className="flex items-center px-3 py-2 border rounded-md">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Agents</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Number of campaigns
                <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total amount spent
                <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {brands.map((brand, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{brand.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{brand.industry}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[...Array(brand.agents)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                        <Image
                          src="/findtalentIcons/talent1.png"
                          alt={`Agent ${i + 1}`}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{brand.campaigns ?? '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {brand.spent ? `GBP ${brand.spent.toLocaleString()}` : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          &lt; Prev
        </button>
        <div className="flex items-center">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 text-sm font-medium ${
                page === 1 ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          Next &gt;
        </button>
      </div>

      {isModalOpen && (
        <BrandModal
         isEditing={false}

          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Brands;