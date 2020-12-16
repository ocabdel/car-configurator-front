export interface IAdministrators {

  idUser: number;
  nom: string;
  prenom: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  idRole: number;

  //Association with table Role
  //@ManyToOne
  //private Role role;

}
