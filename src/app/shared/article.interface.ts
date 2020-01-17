export interface Article {
  _id: string;
  title: string;
  body: string;
  source: {
    url: string;
    name: string;
  };
  image: string;
  publisher: string;
}
