import { IconButton } from '@mui/material';
import React from 'react'
import instagramIcon from "../../../../public/brandsIcons/instagram.png";
import twitterIcon from "../../../../public/brandsIcons/x.png";
import tiktokIcon from "../../../../public/brandsIcons/tiktok.png";
import youtubeIcon from "../../../../public/brandsIcons/youtube.png";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ChevronLeft, Edit, Linkedin, MoreVertical, Plus } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';


const BrandProfileMain = () => {
  return (
    <div>
      <div className="flex-grow bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-6">
            <Image
              src="/brandsIcons/sephora.png"
              alt="Sephora brand header"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-4 left-4 z-10 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-4 border-white bg-white flex items-center justify-center">
              <h1 className="text-lg md:text-xl font-bold">Sephora</h1>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Sephora</h1>
              <p className="text-gray-600 mt-2">
                Sephora is a French multinational retailer of personal care and
                beauty products with nearly 340 brands, along with its own
                private label, Sephora Collection, and includes beauty products
                such as cosmetics, skincare, fragrance, nail color, beauty
                tools, body lotions, and haircare
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { name: "youtube", icon: youtubeIcon },
                { name: "twitter", icon: twitterIcon },
                { name: "tiktok", icon: tiktokIcon },
                { name: "instagram", icon: instagramIcon },
              ].map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.name}.com/sephora`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
              <a
                href="https://www.sephora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.sephora.com
              </a>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Assigned Agents */}
            <Card className="p-4 bg-[#FFFBF5] shadow-none border-none">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Assigned Agents</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Edit
                </Button>
              </div>
              <div className="space-y-3">
                {["Natali craig", "Phoenix Barker"].map((agent) => (
                  <div key={agent} className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <Image
                        src={`/${agent.toLowerCase().replace(" ", "-")}.jpg`}
                        alt={agent}
                        width={32}
                        height={32}
                      />
                    </Avatar>
                    <span className="text-sm">{agent}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Person */}
            <Card className="p-4 bg-[#FBFBFB] shadow-none border-none">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Contact person</h2>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4 mr-2" /> Edit
                </Button>
              </div>
              <div className="space-y-2">
                <p className="flex justify-between">
                  Emily Smith
                  <Button variant="link" size="sm">
                    <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                  </Button>
                </p>
                <p>emily.smith@sephoralondon.co.uk</p>
                <p>+44 20 8923 5678</p>
              </div>
            </Card>

            {/* Company Details */}
            <Card className="p-4 bg-[#FBFBFB] shadow-none border-none">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Company details</h2>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4 mr-2" /> Edit
                </Button>
              </div>
              <div className="space-y-2">
                <p>123 Oxford Street, London, W1D 1LR, United Kingdom</p>
                <p>GB123456789</p>
                <p>info@sephoralondon.co.uk</p>
                <p>+44 20 1234 5678</p>
              </div>
            </Card>

            {/* Files */}
            <Card className="p-4 bg-[#FBFBFB] shadow-none border-none">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Files</h2>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4 mr-2" /> Add
                </Button>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: "Terms & Conditions.pdf",
                    size: "100kb",
                    status: "Complete",
                  },
                  { name: "NDA_002.pdf", size: "237kb", status: "Complete" },
                  {
                    name: "Jamilla X Sephora campaign report.pdf",
                    size: "237kb",
                    status: "Complete",
                  },
                ].map((file) => (
                  <div
                    key={file.name}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        {file.size} • {file.status}
                      </p>
                    </div>
                    <IconButton
                      variant="ghost"
                      //@ts-ignore
                      size="sm"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandProfileMain
