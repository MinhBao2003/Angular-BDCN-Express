// trangchu.model.ts
export interface TrangchuModel {
  id: number;
  icon:string;
  img: string;
  img3:string;
  img3_1:string;
  img3_2:string;
  img3_3:string;
  img3_4:string;
  img3_5:string;
  name: string;
  prname: string;
  discountedPrice: string;
  describe: string;
  os: string;
  screenSize: string;
  screenTechnology: string;
  cameras: string;
  cameras1: string;
  cameras2: string;
  frontCamera: string;
  chip: string;
  characteristic1:string;
  characteristic2:string;
  characteristic3:string;
  characteristic4:string;
  characteristic5:string;
  question1:string;
  question2:string;
  question3:string;
  question4:string;
  varchar: {
    id1: string;
    rom1: string;
    price1: string;
    quanty1: string;
    color1: {
      img1: string;
      img1_2: string; // Adding missing property
      img1_1_1:string;
      img1_1_2:string;
      black1?: {
        quanty1: number;
        color_black:string;
      }[];
      purple1?: {
        quanty1_2: number;
        color_purple:string;
      }[];
    }[];
  }[];
  string: {
    id2: string;
    rom2: string;
    price2: string;
    quanty2: string;
    color2: {
      img2: string;
      img2_1: string; // Adding missing property
      img2_2_1:string;
      img2_2_2:string;
      green2?: {
        quanty2: number;
      }[];
      purple2?: {
        quanty2_1: number;
      }[];
    }[];
  }[];
}
