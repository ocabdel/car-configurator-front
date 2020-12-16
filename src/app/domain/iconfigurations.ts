import { ICar } from './icars';
import { IPacks } from './ipacks';
import { IUsers } from './iusers';

export interface IConfigurations {

  idConfig: number;
  marque: string;
  model: string;
  motor: string;
  color: string;
  namePack: string,
  idUser: number,
  dateConfig: Date;
  totalPrice: Float32Array;

  // 'Status' of the Configuration (value by default 'O' to mean 'Open')
  // 'T' for 'Treated' and Closed by the Administrator
  // 'A' for 'Abandoned'
  status: string;

  //Users: IUsers[];
  //Cars: ICar[];
  //Packs: IPacks[];

  //Association with table User
  //@ManyToOne
  //private User user;
  //Association with table Car
  //@ManyToOne
  //private Car car;
  //Association with table Pack
  //@ManyToOne
  //private Pack pack;

}
