export interface addTask {
  status: string;
  name: string;
  date: string;
  cat: string;
  getName(name: string): void;
  getDate(date: string): void;
  getCategory(cat: string): void;
}
