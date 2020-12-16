export interface IUsers {

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
    //Association with table Configuration
    //@OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    //private List<Configuration> configurations;


}
