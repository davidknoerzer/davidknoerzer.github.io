import { StaticImageData } from "next/image";

export type CVChapter = {
  title: string;
  organization: string;
  description: string[];
  timeframe: string;
  image: StaticImageData;
};
