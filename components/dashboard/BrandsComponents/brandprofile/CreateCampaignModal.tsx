import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { RadioGroup,  } from "@mui/material";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

interface CreateCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCampaignModal: React.FC<CreateCampaignModalProps> = ({
  isOpen,
  onClose,
}) => {
      const router = useRouter();

    const handleSave = () => {
        onClose()
      // Here you would typically save the brand data to your backend
      // For now, we'll just navigate to the brand profile page
      
      router.push("/dashboard/campaigns");
    };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black-500/50" /> {/* Add this line */}
      <DialogContent className="sm:max-w-[800px] shadow-lg ">
        <DialogHeader>
          <DialogTitle>Create new campaign</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">Upload cover photo</p>
              <p className="text-xs text-gray-400">
                Cover photo should have dimensions of 1920px by 1080px
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Key objectives</h3>
              <Input placeholder="Objective" className="mb-2" />
              <Input placeholder="Objective" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Campaign Information</h3>
            <Input placeholder="Campaign name" />
            <Textarea placeholder="About campaign" />
            <Input placeholder="Industry" />
            <h3 className="font-semibold mt-4">Budget and Campaign duration</h3>
            <Input placeholder="Campaign budget" />
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" placeholder="Start date" />
              <Input type="date" placeholder="End date" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Target audience</h3>
            <Input placeholder="Location" />
            <div>
              <Label>Location radius</Label>
              <Slider defaultValue={[5]} max={100} step={1} />
            </div>
            <div>
              <Label>Age range</Label>
              <Slider defaultValue={[18, 35]} min={18} max={65} step={1} />
            </div>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroup value="all" id="all" />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroup value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroup value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroup value="non-binary" id="non-binary" />
                <Label htmlFor="non-binary">Non-binary</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Complete later
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCampaignModal;
