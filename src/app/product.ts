export interface Product {
  ProductId: number;
  ColorIdx: number;
  ProductCode: string;
  ProductDescription: string;
  Price: number;
  VoDatum: number | string;
  IsHeavy: any;
  RestrictedLands: any;
  IsFsk: boolean;
  IsOrdergruppeC: boolean;
}
