import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import FindTalents from "../FindTalents";

const FindTalentModal: React.FC<{ onSearchClick: () => void }> = ({
  onSearchClick,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Find talent</Button>
      </DialogTrigger>
      <DialogOverlay className="bg-black-500/50" />
      <DialogContent className="w-[90%] max-w-[400px] p-4">
        <DialogHeader>
          <DialogTitle className="text-lg">Find talent</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <Input
            id="industry"
            className="w-full"
            placeholder="e.g. fashion, beauty..."
          />
          <Input id="location" className="w-full" placeholder="Location" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
            </SelectContent>
          </Select>
          <Button
            asChild
            type="submit"
            className="w-full"
            onClick={onSearchClick}
          >
            <span>Search</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FindTalentModal
