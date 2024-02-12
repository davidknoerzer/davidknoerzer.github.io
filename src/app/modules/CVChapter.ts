import { StaticImageData } from "next/image";

export type CVChapter = {
  title: string;
  organization: string;
  description: string[];
  startDate: Date;
  endDate: Date;
  isCurrentOccupation: boolean;
  image: StaticImageData;
};
