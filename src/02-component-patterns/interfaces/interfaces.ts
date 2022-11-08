

  
 export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
export interface productContextProps{
    counter: number;
    increaseBy: (value: number) => void;
    product: Product
  }