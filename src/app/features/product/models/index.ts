export interface Product {
  pid: string;
  name: string;
  price: number;
  type: string;
  isActive: boolean;
}

export interface ProductBody {
  name: string;
  price: number;
  type: string;
  isActive: boolean;
}

export enum ProductType {

}
