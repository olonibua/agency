import Image from 'next/image';
import React from 'react'

const AboutCampaign = ({ AllProps }: { AllProps: any }) => {
	const {image, campaignName, description, budget, duration, collaborators, targetAudience, keyObjectives } = AllProps;
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<div className="relative w-full h-64 md:h-80 mb-4">
					<Image
						src={image}
						alt={campaignName}
						layout="fill"
						objectFit="cover"
						// width={500}
						// height={1000}
						className="rounded-lg"
					/>
				</div>
				<h2 className="text-xl font-bold mb-2">{campaignName}</h2>
				<p className="mb-4">{description}</p>

				<div className="mb-4 bg-[#ECECEC] p-4 rounded-lg">
					<div className="flex justify-between items-center mb-2">
						<h3 className="text-lg font-semibold">
							{" "}
							Budget and Campaign duration
						</h3>
						<button className="text-sm text-gray-500">Edit</button>
					</div>
					<p>Campaign budget: {budget}</p>
					<p>Campaign duration: {duration}</p>
				</div>
			</div>

			<div>
				<div className="bg-[#F7F4EA] p-4 rounded-lg mb-4">
					<div className="flex justify-between items-center mb-2">
						<h3 className="text-lg font-semibold">Collaborations</h3>
						<button className="text-2xl">+</button>
					</div>
					{collaborators.map((collaborator: any, index: any) => (
						<div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-2">
							<div className="flex items-center mb-2 sm:mb-0">
								<div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
								<div>
									<p className="font-medium">{collaborator.name}</p>
									<p className="text-sm">
										{collaborator.followers} total followers
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<span
									className={
										collaborator.status ? "text-gray-500 mr-2" : "mr-2"
									}
								>
									{collaborator.status || collaborator.amount}
								</span>
								<button className="text-gray-500">➔</button>
							</div>
						</div>
					))}
				</div>

				<div className="mb-4 bg-[#ECECEC] p-4 rounded-lg">
					<div className="flex justify-between items-center mb-2">
						<h3 className="text-lg font-semibold">Target audience</h3>
						<button className="text-sm text-gray-500">Edit</button>
					</div>
					<p>Location: {targetAudience.location}</p>
					<p>Location radius: {targetAudience.locationRadius}</p>
					<p>Age range: {targetAudience.ageRange}</p>
					<p>Gender: {targetAudience.gender}</p>
				</div>

				<div className="bg-[#ECECEC] p-4 rounded-lg">
					<div className="flex justify-between items-center mb-2">
						<h3 className="text-lg font-semibold">Key objectives</h3>
						<button className="text-sm text-gray-500">Edit</button>
					</div>
					{keyObjectives.map((objective: any, index: any) => (
						<p key={index}>{objective}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutCampaign
