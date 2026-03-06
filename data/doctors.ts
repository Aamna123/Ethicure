export interface DoctorProfileData {
  slug: string;
  name: string;
  profileImage: string;
  specialization: string;
  location: string;
  yearsOfExperience: number;
  rating: number;
  totalReviews: number;
  description: string;
  phoneNumber: string;
  whatsappNumber?: string;
  areasOfExpertise: string[];
  qualifications: string[];
  hospitalAffiliation: string;
  languagesSpoken: string[];
  consultationFee: string;
  availableHours: string;
  aboutDoctor: string;
  patientReviews: Array<{
    id: string;
    name: string;
    title?: string;
    avatar?: string;
    rating: number;
    date: string;
    text: string;
  }>;
}

export const doctors: DoctorProfileData[] = [
  {
    slug: "dr-sarah-ahmed",
    name: "Dr. Sarah Ahmed",
    profileImage: "/images/docimg.png",
    specialization: "Cardiology",
    location: "New York, NY",
    yearsOfExperience: 10,
    rating: 4.9,
    totalReviews: 342,
    description: "Cardiologist — preventive and interventional cardiology",
    phoneNumber: "+1 (555) 123-4567",
    whatsappNumber: "+1 (555) 987-6543",
    areasOfExpertise: [
      "Interventional Cardiology",
      "Heart Disease Prevention",
      "Cardiac Rehabilitation",
      "Electrophysiology",
    ],
    qualifications: [
      "MD - Johns Hopkins University",
      "Fellowship - Massachusetts General Hospital",
      "Board Certified Cardiologist",
    ],
    hospitalAffiliation: "Mount Sinai Medical Center",
    languagesSpoken: ["English", "Arabic", "Spanish"],
    consultationFee: "$150 - $250",
    availableHours: "Mon-Fri: 9am - 5pm, Sat: 10am - 2pm",
    aboutDoctor:
      "Dr. Sarah Ahmed is a highly respected cardiologist with over a decade of experience in treating cardiovascular diseases. She focuses on patient-centered care and preventive strategies.",
    patientReviews: [
      {
        id: "r1",
        name: "John Martinez",
        rating: 5,
        date: "2 weeks ago",
        text: "Dr. Ahmed is exceptional! She took the time to explain my condition thoroughly and created a treatment plan that really worked.",
      },
      {
        id: "r2",
        name: "Emily Chen",
        rating: 5,
        date: "1 month ago",
        text: "Professional, caring, and knowledgeable. I highly recommend her to anyone needing cardiac care.",
      },
    ],
  },
  {
    slug: "dr-james-wilson",
    name: "Dr. James Wilson",
    profileImage: "/images/docimg.png",
    specialization: "Neurology",
    location: "San Francisco, CA",
    yearsOfExperience: 12,
    rating: 4.8,
    totalReviews: 210,
    description: "Neurologist — clinical neurophysiology",
    phoneNumber: "+1 (555) 222-3333",
    whatsappNumber: "+1 (555) 222-4444",
    areasOfExpertise: ["Stroke", "EEG", "Neurodegenerative Diseases"],
    qualifications: ["MD - Stanford University", "Fellowship - UCSF"],
    hospitalAffiliation: "UCSF Medical Center",
    languagesSpoken: ["English"],
    consultationFee: "$200 - $350",
    availableHours: "Mon-Fri: 10am - 6pm",
    aboutDoctor:
      "Dr. James Wilson specializes in stroke and neurodegenerative disorders and offers patient-focused neurological care.",
    patientReviews: [
      {
        id: "r3",
        name: "Micheal Johnson",
        rating: 5,
        date: "3 months ago",
        text: "Outstanding neurologist. Treated my condition with great care.",
      },
    ],
  },
  {
    slug: "dr-emily-park",
    name: "Dr. Emily Park",
    profileImage: "/images/docimg.png",
    specialization: "Pediatrics",
    location: "Seattle, WA",
    yearsOfExperience: 8,
    rating: 4.7,
    totalReviews: 180,
    description: "Pediatrician — child development and preventive care",
    phoneNumber: "+1 (555) 333-4444",
    whatsappNumber: "+1 (555) 333-5555",
    areasOfExpertise: [
      "Well-child Care",
      "Immunizations",
      "Developmental Assessments",
    ],
    qualifications: [
      "MD - University of Washington",
      "Board Certified Pediatrician",
    ],
    hospitalAffiliation: "Seattle Children’s Hospital",
    languagesSpoken: ["English", "Spanish"],
    consultationFee: "$100 - $180",
    availableHours: "Mon-Fri: 9am - 4pm",
    aboutDoctor:
      "Dr. Emily Park provides compassionate pediatric care focusing on growth and development.",
    patientReviews: [],
  },
  {
    slug: "dr-robert-lee",
    name: "Dr. Robert Lee",
    profileImage: "/images/docimg.png",
    specialization: "Orthopedics",
    location: "Chicago, IL",
    yearsOfExperience: 15,
    rating: 4.85,
    totalReviews: 400,
    description: "Orthopedic Surgeon — sports medicine",
    phoneNumber: "+1 (555) 444-5555",
    whatsappNumber: "+1 (555) 444-6666",
    areasOfExpertise: ["Sports Injuries", "Joint Replacement", "Arthroscopy"],
    qualifications: [
      "MD - Northwestern University",
      "Fellowship - Sports Medicine",
    ],
    hospitalAffiliation: "Northwestern Memorial Hospital",
    languagesSpoken: ["English"],
    consultationFee: "$180 - $300",
    availableHours: "Mon-Fri: 8am - 4pm",
    aboutDoctor:
      "Dr. Robert Lee is an experienced orthopedic surgeon specializing in sports-related injuries and joint preservation.",
    patientReviews: [],
  },
];
