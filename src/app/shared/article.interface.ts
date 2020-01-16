export interface Article {
  title: string;
  body: string;
  source: {
    url: string;
    name: string;
  };
  image: string;
  publisher: string;
}
