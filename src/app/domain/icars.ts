export interface ICar {

  idCar: number;
  marque: string;
  model: string;
  motor: string;
  color: string;
  unitPrice: Float32Array;
  reference: string;
  imageURL : string;



  //Association with table Configuration
  //@OneToMany(mappedBy = "car", cascade = CascadeType.PERSIST)
  //private List<Configuration> configurations;
}
