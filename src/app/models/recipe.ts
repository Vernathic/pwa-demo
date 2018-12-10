export interface Recipe {
  id: number;
  title: string;
  servings: number;
  readyInMinutes: number;
  imageUrls: Array<string>;
}
