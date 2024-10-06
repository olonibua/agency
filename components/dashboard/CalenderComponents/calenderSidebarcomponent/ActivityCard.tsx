import Image from "next/image";
import React from "react";

interface ActivityCardProps {
  title: string;
  subtitle: string;
  draftDate: string;
  publishDate: string;
  imageUrl: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  subtitle,
  draftDate,
  publishDate,
  imageUrl,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="mt-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Draft date</span>
          <span>{draftDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Publish date</span>
          <span>{publishDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
