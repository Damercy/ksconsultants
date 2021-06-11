const experts = [
  {
    name: "Asish Baron Adhikari",
    picture:
      "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/136484081_1926726520802965_1486797887711470775_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=t2LJI6PSQp4AX8wt5zv&_nc_ht=scontent-bom1-1.xx&oh=88b3b312a4121ad2c3d56cc8222c71d2&oe=60E8E601",
    qualifications:
      "M Tech. (Safety & Occupational health), B E (Mech), Diploma in Safety Engg., Certified safety officer of West Bengal , Certified Lead auditor of OHSAS 18001 ISO14001:2015/ISO 45001, BBS Trainer, Former Dy. General Manager of Durgapur Steel Plant (SAIL)",
    description:
      "With a total 33 years of experience, Mr. Adhikari worked as area safety officer in Coke oven &amp; coal chemical, Blast Furnace, Power Plant, Sinter Plant, Steel Melt Shop & Rolling Mills. He is an expert safety mgmt. specialist, an auditor, & a high rated safety trainer & he is also a associated as a lecturer in DSSPE (Safety Institute).",
  },
  {
    name: "NAZRUL ISLAM",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "M Tech. (Safety & Occupational health), B Tech(Mech), Dip in Safety Engg., Dip in Environment Magagement, Certified safety officer of W B, Certified Lead auditor OHSAS 18001/ISO 14001:2015/ISO 45001/ISO 9001:2015 & 50001.",
    description:
      "He is associated as Lecturer in DSSPE (Safety Institute ). Experience of working in Multinational companies as head EHS. An Expert on EHS &amp; Legal /Statutory requirements matter.",
  },
  {
    name: "DR. SUBRATA MANDAL",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "PhD in Business, Administration , B E (Elect) , MBA (Marketing) , Diploma in Training & Development , Advanced Diploma in Mgmt. Research",
    description:
      "He was a former  General Manager & Head of Training Deptt. of Durgapur Steel Plant(SAIL) with a total 33 years of rich experience. He is an excellent academician , a teacher , expert trainer, a motivator  & specialist in Behavioural Safety, Stress Mgmt  &Emotional Intelligence. ",
  },
  {
    name: "ASHOK CHATTERJEE",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "B E (Mech) , Former Chief General Manager at Durgapur Steel Plant (SAIL)",
    description:
      "With 32 years of experience, Ashoke is an excellent & reputed  Mechanical Engineer ability to solve any mechanical issues.",
  },
  {
    name: "GOUTAM MAZUMDAR",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "B E (Elect.), Former Dy. General Manager of Durgapur Steel Plant (SAIL)",
    description:
      "With 31 years of experience, Goutam is an excellent innovative & dedicated electrical engineer who solved many critical breakdown efficiently . He is an intelligent & widely travelled person.",
  },
  {
    name: "AMALENDU MAHANTI",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "B.Sc. Chemistry (Hons), AMII (Ch) E, Diploma in Industrial Safety, certified safety officer of West Bengal, certified Lead Auditors of OHSAS 18001, ISO &14001, Honorary Vice Chairman and Faculty Member, Durgapur Society for Safety &  Professional Education since 1998. Formerly, head of safety and fire, HFCL Durgapur Unit; HSE Manager, M/s Lurgi India Pvt.Ltd,  Sr Principal Engineer Construction HSE,  Amec Foster Wheeler India Pvt Ltd",
    description:
      "Specialist in Chemical safety, Oil& Gas, HAZOP, QRA, On site emergency planning.  construction safety ,  proficient in HSE codes and standards, well versed in OISD and other relevant statutes and international safety organizations. Total experience-28 Years in Fertilizer plant, construction safety, power & LNG project as project mgmt consultant.",
  },
  {
    name: "ANJAN BANDYOPADHYAY",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications: "B Tech (Mech) ,Dip in  Safety Engg",
    description:
      "He is also a  certified safety officer of West Bengal . He is having more than 20 years of  exposure in  Oil & Gas Safety  & Power plant . Expert in on site emergency plan , SMPV Rules , Manufacture storage & import of hazardous chemical Rules (MSIHCR) ,Process Safety Management , Environmental impact assessment  & related compliance management.",
  },
  {
    name: "SAJAL BASU",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications: "AMIE (Chemical Engg.)",
    description:
      "Having more than 32 years in Hindustan Fertilizer Corporation Limited, Sajal is a process safety specialist. He is conversant with advanced technology in chemical safety, a good trainer, auditor & expert in HAZOP/QRA.",
  },
  {
    name: "SANTANU DEY",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "Diploma in Civil Engineering ,Diploma in Safety Engg., Certified Lead Auditor in OHSAS 18001  & ISO 45001",
    description:
      "He is having 23 years of very rich experience of in Larsen & Tubro , Praxair, Bureau  Veritas, Ellenbarrie Industrial Gases limited, Vikram Solar, Ambuja Neotia group.He is having an indepth  knowledge in construction safety , scaffold construction , Safety training & Safety Audit management.",
  },
  {
    name: "MD. SELIM  MONDAL",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications: "MIE, Diploma in Safety Engg., Certified Safety Officer",
    description:
      "Mr. Selim worked in Gannon Drunkerly & Co. Ltd , Assam as Sr. HSE Officer , Neyveli Thermal Power Project , T & D India Ltd, as EHS officer , Shyam Steel Industries Ltd , GRSE Ltd , Dock yard , M/S Reibcons & Company business associate . He is well conversant in Safety Rules & Regulations , A good trainer and a certified first aid trainer from Indian Red Cross Society.",
  },
  {
    name: "AMBUJ SINHA",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "B Sc(Maths) , A M IIM(Met) ,Trained in Safety Audit & Safety Officer course ,Trained in Training Officer course from MTI ,Ranchi",
    description:
      "Mr. Sinha a former senior Manager  with 37 years of experience in power plant , Traffic management & Departmental Safety officer of Durgapur Steel Plant. A good trainer of material handling safety  management , Rail Road Safety  &  Transport safety.",
  },
  {
    name: "SANTANU KUMAR SAHA",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "B E (Mech), Former General Manager at Durgapur Steel Plant (SAIL)",
    description:
      "With 36 years of experience, Santanu Kumar is an expert in safe handling , operation , distribution   &  maintenance of  Fuel gas Pipe line , Gas holder & Gas safety mgmt.  He  has undergone training in Austria .he was also a part of investigation team member of some  gas related major steel plant accident.",
  },
  {
    name: "UTPAL BHATTACHARYYA",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications:
      "B E (Mech), Former General Manager, Durgapur Steel Plant(SAIL)",
    description:
      "With 39 years of experience, Utpal is a certified lead auditor of ISO 9001 & ISO 14001.He worked in Production planning & control deptt. Total Quality Management  deptt. Environmental control Department. He is having through knowledge of quality & Environment management system, statutory requirement of MOEF . He is a good trainer  & worked as departmental Safety Officer.",
  },
  {
    name: "GOLAM MOWLA",
    picture: "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
    qualifications: "B Sc(Pure), Diploma in Computer Science",
    description:
      "Golam is associated with Durgapur Society for Safety & Professional Education since 1998. A sincere & dedicated & hardworking person. He is a good coordinator  and conversant with all  safety related subjects, documentations & proficient in computer & internet. ",
  },
];

export default experts;
