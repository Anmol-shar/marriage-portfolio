const profiles: Profile[] = [
  {
    id: 1,
    gender: "Girl",
    name: "Priya Sharma",
    location: "Delhi",
    religion: "Hindu",
    caste: "Brahmin",
    age: 25,
    profession: "Teacher",
    image: "/src/assets/images/girl1.jpg",
  },

  {
    id: 2,
    gender: "Boy",
    name: "Rahul Verma",
    location: "Noida",
    religion: "Hindu",
    caste: "Rajput",
    age: 28,
    profession: "Software Engineer",
    image: "/src/assets/images/boy1.jpg",
  },
];

export default profiles;


export interface Profile {
  id: number;
  gender: string;
  name: string;
  location: string;
  religion: string;
  caste: string;
  age: number;
  profession: string;
  image: string;
}


export interface Requirement {
  gender: string;
  location: string;
  religion: string;
  caste: string;
}