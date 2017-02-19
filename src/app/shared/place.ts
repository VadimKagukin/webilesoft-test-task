export class Place {
  id: number;
  type: string;
  headerTitle: string;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  buttons: [{
    type: string;
    text: string;
    color: string;
    actionData: string; 
  }]
}