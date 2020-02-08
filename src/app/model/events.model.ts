export class Events{
  id: number
  name: string;
  event: {
    id: string;
    tittle: string;
    start: Date;
    end: Date;
    color: string;
  }[];
}
