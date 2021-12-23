export interface AppComment {
  id: number;
  parent_id: number | null;
  date_time: string;
  author_name: string;
  body: string;
  children?: AppComment[]
}