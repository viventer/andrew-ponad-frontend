export interface ErrorReportType {
  __v: number;
  _id: string;
  author: string | null;
  createdAt: string;
  description: string;
  id: string;
  images: string[];
  status: "new" | "fixed" | "inProgress";
  title: string;
  updatedAt: string;
  username: string;
  [key: string]: any;
}

export type ErrorReportEntity = [string, ErrorReportType];
