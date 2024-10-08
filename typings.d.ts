interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface PageInfo extends SanityBody {
  name: string;
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
  phoneNumber: string;
}

interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progss: number;
  title: string;
}

interface Skill extends SanityBody {
  _type: "skill";
  skillImage: Image;
  progress: number;
  title: string;
}

interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linktoBuild: string;
  summary: string;
  technologies: Technology[];
  livelink: string;
}

interface Education extends SanityBody {
  _type: "eduation";
  educationImage: Image;
  instituteTitle: string;
  educationTitle: string;
  isCurrentlyEducationHere: boolean;
  dateStart: string;
  dateEnd: string;
  CGPA: number;
}

interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export {
  SanityBody,
  Social,
  Skill,
  Education,
  Image,
  PageInfo,
  Technology,
  Project,
};
