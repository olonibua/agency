import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface ReportOverview {
  engagement: string;
  posts: number;
  reach: string;
  emv: string;
}

interface ContentTypeInsight {
  type: string;
  posts: number;
  engagement: string;
  emv: string;
  reach: string;
}

interface TopContent {
  username: string;
  engagement: number;
  date: string;
  imageUrl: string;
}

interface InfluencerRanking {
  username: string;
  posts: number;
  followers: string;
  imageUrl: string;
}

interface ReportingSectionProps {
  reportOverview: ReportOverview;
  contentTypeInsights: ContentTypeInsight[];
  topContent: TopContent[];
  influencerRankings: InfluencerRanking[];
  statisticsOverview: {
    campaignReach: string;
    topGender: string;
    averageAge: number;
    topCountry: string;
    topInterest: string;
  };
  audienceAge: { [key: string]: number };
  interests: { [key: string]: number };
  gender: { [key: string]: number };
  topAudienceCountries: { [key: string]: number };
  topCities: { [key: string]: number };
}

const ReportingSection: React.FC<ReportingSectionProps> = ({
  reportOverview,
  contentTypeInsights,
  topContent,
  influencerRankings,
  statisticsOverview,
  audienceAge,
  interests,
  gender,
  topAudienceCountries,
  topCities,
}) => {
  return (
    <div className="space-y-6">
      <ReportOverviewCard reportOverview={reportOverview} />
      <ContentTypeInsightsTable insights={contentTypeInsights} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopContentCard topContent={topContent} />
        <InfluencerRankingsCard influencerRankings={influencerRankings} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatisticsOverviewCard statistics={statisticsOverview} />
        <AudienceInsightsCard
          audienceAge={audienceAge}
          interests={interests}
          gender={gender}
          topAudienceCountries={topAudienceCountries}
          topCities={topCities}
        />
      </div>
    </div>
  );
};

const ReportOverviewCard: React.FC<{ reportOverview: ReportOverview }> = ({
  reportOverview,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Report Overview</CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(reportOverview).map(([key, value]) => (
        <div key={key} className="text-center">
          <p className="text-sm text-gray-500 capitalize">{key}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-green-500">+0.2%</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

const ContentTypeInsightsTable: React.FC<{
  insights: ContentTypeInsight[];
}> = ({ insights }) => (
  <Card>
    <CardHeader>
      <CardTitle>Insights breakdown</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Content type</TableHead>
            <TableHead>Posts</TableHead>
            <TableHead>Engagement</TableHead>
            <TableHead>EMV</TableHead>
            <TableHead>Reach</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {insights.map((insight) => (
            <TableRow key={insight.type}>
              <TableCell>{insight.type}</TableCell>
              <TableCell>{insight.posts}</TableCell>
              <TableCell>{insight.engagement}</TableCell>
              <TableCell>{insight.emv}</TableCell>
              <TableCell>{insight.reach}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

const TopContentCard: React.FC<{ topContent: TopContent[] }> = ({
  topContent,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Top 5 content</CardTitle>
    </CardHeader>
    <CardContent>
      {topContent.map((content, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <Image
            src={content.imageUrl}
            alt={content.username}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium">{content.username}</p>
            <p className="text-sm text-gray-500">{content.date}</p>
          </div>
          <div className="ml-auto">
            <p className="text-sm">{content.engagement} engagements</p>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

const InfluencerRankingsCard: React.FC<{
  influencerRankings: InfluencerRanking[];
}> = ({ influencerRankings }) => (
  <Card>
    <CardHeader>
      <CardTitle>Influencer rankings</CardTitle>
    </CardHeader>
    <CardContent>
      {influencerRankings.map((influencer, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <Image
            src={influencer.imageUrl}
            alt={influencer.username}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium">{influencer.username}</p>
            <p className="text-sm text-gray-500">{influencer.posts} posts</p>
          </div>
          <div className="ml-auto">
            <p className="text-sm">{influencer.followers} followers</p>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

const StatisticsOverviewCard: React.FC<{
  statistics: ReportingSectionProps["statisticsOverview"];
}> = ({ statistics }) => (
  <Card>
    <CardHeader>
      <CardTitle>Statistics overview</CardTitle>
    </CardHeader>
    <CardContent>
      {Object.entries(statistics).map(([key, value]) => (
        <div key={key} className="flex justify-between mb-2">
          <p className="text-sm text-gray-500 capitalize">
            {key.replace(/([A-Z])/g, " $1").trim()}
          </p>
          <p className="font-medium">{value}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

const AudienceInsightsCard: React.FC<{
  audienceAge: { [key: string]: number };
  interests: { [key: string]: number };
  gender: { [key: string]: number };
  topAudienceCountries: { [key: string]: number };
  topCities: { [key: string]: number };
}> = ({ audienceAge, interests, gender, topAudienceCountries, topCities }) => (
  <Card>
    <CardHeader>
      <CardTitle>Audience Insights</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">Audience Age</h4>
          {Object.entries(audienceAge).map(([ageRange, percentage]) => (
            <div
              key={ageRange}
              className="flex items-center justify-between mb-1"
            >
              <span className="text-sm">{ageRange}</span>
              <div className="flex items-center">
                <Progress value={percentage} className="w-24 mr-2" />
                <span className="text-sm">{percentage}%</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-medium mb-2">Interests</h4>
          {Object.entries(interests).map(([interest, percentage]) => (
            <div
              key={interest}
              className="flex items-center justify-between mb-1"
            >
              <span className="text-sm">{interest}</span>
              <span className="text-sm">{percentage}%</span>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-medium mb-2">Gender</h4>
          {Object.entries(gender).map(([genderType, percentage]) => (
            <div
              key={genderType}
              className="flex items-center justify-between mb-1"
            >
              <span className="text-sm">{genderType}</span>
              <div className="flex items-center">
                <Progress value={percentage} className="w-24 mr-2" />
                <span className="text-sm">{percentage}%</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-medium mb-2">Top Audience Countries</h4>
          {Object.entries(topAudienceCountries).map(([country, percentage]) => (
            <div
              key={country}
              className="flex items-center justify-between mb-1"
            >
              <span className="text-sm">{country}</span>
              <span className="text-sm">{percentage}%</span>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-medium mb-2">Top Cities in Top Country</h4>
          {Object.entries(topCities).map(([city, percentage]) => (
            <div key={city} className="flex items-center justify-between mb-1">
              <span className="text-sm">{city}</span>
              <span className="text-sm">{percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ReportingSection;
