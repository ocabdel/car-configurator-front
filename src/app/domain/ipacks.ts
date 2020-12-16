export interface IPacks {

  idPack: number;
  namePack: string;
  unitPrice: Float32Array;
  reference: string;
  imageURL : string;

  //Association with table Configuration
  //@OneToMany(mappedBy = "pack", cascade = CascadeType.PERSIST)
  //private List<Configuration> configurations;
}
