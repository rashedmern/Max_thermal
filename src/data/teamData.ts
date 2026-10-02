export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  experience: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "md-rashed",
    name: "MD Rashed",
    designation: "Managing Director",
    image: "/images/team-md-rashed.jpg",
    experience: "15+ Years",
    bio: "Leading business forecasting, operational planning, and manufacturing scale. Ensuring cost optimization, high productivity, and long-term partnerships across Bangladesh's industrial sector.",
  },
  {
    id: "rabeya-naznin",
    name: "Rabeya Naznin",
    designation: "Deputy Managing Director",
    image: "/images/team-rabeya-naznin.jpg",
    experience: "12+ Years",
    bio: "Directing nationwide supply logistics, raw material inventory, and factory floor operations. Focused on streamlining delivery timelines and maintaining strict ASTM quality standards.",
  },
  {
    id: "mahmudul-hasan",
    name: "Mahmudul Hasan",
    designation: "Vice Chairman",
    image: "/images/team-mahmudul-hasan.jpg",
    experience: "18+ Years",
    bio: "Overseeing corporate finance, capital investment planning, and corporate governance. Guiding sustainable business expansion and infrastructure facility investments across Bangladesh.",
  },
];
