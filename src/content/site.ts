// Single source of truth for the site's text, contact details, links and photos.
// All wording comes from the original samaritanplace.ca (small grammar fixes only).

export type Photo = { src: string; w: number; h: number; alt: string };

const p = (name: string, w: number, h: number, alt: string): Photo => ({ src: `/images/${name}`, w, h, alt });

export const site = {
  name: "Samaritan Place",
  url: "https://www.samaritanplace.ca",
  tagline: "Long-term care in Saskatoon, Saskatchewan",
  operator: "Emmanuel Health",
  operatorTag: "A Catholic Health Organization",
  address: { street: "375 Cornish Road", city: "Saskatoon", province: "SK", postal: "S7T 0P3" },
  phone: "(306) 986-1460",
  phoneHref: "tel:+13069861460",
  tourPhone: "306-986-1460, ext. 1401",
  tourPhoneHref: "tel:+13069861460,1401",
  fax: "(306) 986-1464",
  email: "reception@samaritanplace.ca",
  hrEmail: "hr@samaritanplace.ca",
  lifeEmail: "spickering@samaritanplace.ca",
  mapQuery: "375 Cornish Road, Saskatoon, SK S7T 0P3",
  facebook:
    "https://www.facebook.com/pages/Samaritan-Place-Amicus-Health-Care/181815878562092#!/pages/Samaritan-Place-Amicus-Health-Care/181815878562092",
  donate: "https://www.canadahelps.org/en/dn/82374",
  careersPortal:
    "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=8751b03a-0f78-4d6e-a126-bae8042edb04&ccId=19000101_000001&lang=en_CA&&source=EN&selectedMenuKey=CareerCenter",
  portalLogin: "https://online.activitypro.net/users/login/emmanuel",
  healthAuthority: "https://www.saskatoonhealthregion.ca/locations_services/Services/Client-Patient",
  hospiceVolunteer: "https://sphfsk.ca/hospice/volunteer/",
};

export const nav = [
  { label: "Resident Life", href: "/residents/", sub: [
    { label: "Suites", href: "/residents/#suites" },
    { label: "Common Areas", href: "/residents/#common-areas" },
    { label: "Life Enhancement", href: "/residents/#life-enhancement" },
    { label: "Information for Residents", href: "/residents/#information" },
  ] },
  { label: "About Us", href: "/about/", sub: [
    { label: "Mission", href: "/about/#mission" },
    { label: "Philosophy of Care", href: "/about/#philosophy" },
    { label: "Leadership", href: "/about/#leadership" },
  ] },
  { label: "Get Involved", href: "/get-involved/", sub: [
    { label: "Careers", href: "/get-involved/#careers" },
    { label: "Volunteers & Friends", href: "/get-involved/#volunteers" },
    { label: "Donors", href: "/get-involved/#donors" },
  ] },
  { label: "Contact", href: "/contact/", sub: [] },
];

export const photos = {
  gardenAerial: p("garden-aerial.jpg", 900, 600, "Aerial view of the Samaritan Place gardens, with flower beds and a gazebo"),
  gardenWide: p("garden-wide.jpg", 900, 301, "Flower beds and walking paths in the courtyard garden"),
  kitchenTeam: p("kitchen-team.jpg", 900, 300, "Dietary staff preparing food in a bright kitchen"),
  patio: p("patio.jpg", 900, 300, "Residents sitting on the patio in front of the Samaritan Place building"),
  buildingStreet: p("building-street.jpg", 900, 300, "The Samaritan Place building on a sunny day"),
  chapelWide: p("chapel-wide.jpg", 900, 300, "Residents gathered for mass in the chapel"),
  gazebo: p("gazebo.jpg", 900, 366, "A young visitor and a resident enjoying the garden by the gazebo"),
  iceCream: p("resident-icecream.jpg", 499, 665, "A resident and a young visitor sharing ice cream outdoors"),
  dietaryCook: p("dietary-cook.jpg", 250, 180, "A member of the dietary team serving dessert"),
  exerciseGroup: p("exercise-group.jpg", 250, 167, "Residents enjoying a morning exercise session"),
  exerciseGroup2: p("exercise-group-2.jpg", 272, 181, "Residents joining in an activity together"),
  residentSmile: p("resident-smile.jpg", 275, 183, "A smiling resident in a bright room"),
  cottage: p("cottage.jpg", 250, 167, "One of the Samaritan Place cottages and its lawn"),
  exerciseLeader: p("exercise-leader.jpg", 304, 204, "A recreation team member leading an exercise class with her arms raised"),
  painting: p("painting.jpg", 307, 205, "A resident painting with watercolours"),
  mass: p("mass.jpg", 275, 183, "Mass in the Samaritan Place chapel"),
  mass2: p("mass-2.jpg", 250, 166, "A priest celebrating mass in front of the chapel's stained glass"),
  staffPurple: p("staff-purple.jpg", 225, 150, "A smiling member of the care team"),
  petTherapy: p("pet-therapy.jpg", 275, 183, "A visitor and his therapy dog sitting with a resident"),
  reception: p("reception.jpg", 250, 167, "The welcoming front reception area"),
  staffResident: p("staff-resident.jpg", 250, 167, "A care partner chatting with a resident"),
  sisterFlowers: p("sister-flowers.jpg", 225, 150, "A resident smiling beside a flower bed"),
  residentHat: p("resident-hat.jpg", 225, 150, "A resident smiling in a hat"),
  flowers: p("flowers.jpg", 250, 166, "Pink and red flowers in the gardens"),
  sisterDining: p("sister-dining.jpg", 275, 183, "A sister helping residents at the dining table"),
  therapeuticRec: p("therapeutic-rec.jpg", 275, 183, "Two therapeutic recreation students presenting a project"),
};

export const stats = [
  { value: 100, suffix: "+", label: "residents call Samaritan Place home" },
  { value: 6, prefix: "1 : ", label: "one care partner for every six residents" },
  { value: 20, label: "dual-living companion suites for couples" },
  { value: 80, label: "individual living suites" },
];

export const difference = [
  "Samaritan Place is the only care facility in Saskatchewan offering companion suites, enabling couples who require different levels of care to live here together.",
  "To foster individuality and independence, residents have the opportunity to make decisions about their care and daily program choices.",
  "The Household Model philosophy of care drives us to empower residents to truly become at home here, helping to add meaning and quality of life to the care facility living experience.",
  "At Samaritan Place, we have one care partner for every six residents, one of the best staff-to-resident ratios of any care facility in Saskatchewan.",
  "Our philosophy of resident-directed care is part of what truly makes Samaritan Place different.",
];

export const quotes = [
  { text: "It is amazing how it just became home for us.", who: "John and Virginia Nordlee", role: "Former Samaritan Place resident and companion" },
  { text: "Time just flies because there’s always some kind of entertainment, always something going on. It’s been just like a holiday to me.", who: "Sister Theresa Novakosky", role: "Former Samaritan Place companion" },
  { text: "We are all a big family here.", who: "Thompson Bird", role: "Samaritan Place resident" },
  { text: "Our leadership here is just wonderful.", who: "Virginia Nordlee", role: "Former Samaritan Place companion" },
];

export const downloads = {
  newsletter: { title: "Fall Newsletter 2026", href: "/docs/fall-newsletter-2026.pdf", type: "PDF", size: "9.2 MB" },
  outing: { title: "Outing Form", href: "/docs/outing-notification-form.docx", type: "DOCX", size: "27 KB" },
  booking: { title: "Room Booking Form", href: "/docs/room-booking-form.docx", type: "DOCX", size: "44 KB" },
  companion: { title: "Companion Living Brochure", href: "/docs/companion-living-brochure.pdf", type: "PDF", size: "330 KB" },
  handbook: { title: "Resident Handbook", href: "/docs/resident-handbook-2023.pdf", type: "PDF", size: "617 KB" },
  privacy: { title: "Privacy and Confidentiality Policy", href: "/docs/privacy-and-confidentiality-policy.pdf", type: "PDF", size: "185 KB" },
  volunteer: { title: "Volunteer Application Form", href: "/docs/volunteer-application-2026.pdf", type: "PDF", size: "272 KB" },
};

export const neighbourhoods = [
  {
    id: "park",
    name: "Park",
    kind: "Neighbourhood",
    floor: "Second floor",
    residents: 38,
    single: 28,
    companion: 10,
    text: "Park is on the second floor. It is home to 38 residents: 28 single suites and 10 companion suites.",
  },
  {
    id: "prairie",
    name: "Prairie",
    kind: "Neighbourhood",
    floor: "First floor",
    residents: 38,
    single: 28,
    companion: 10,
    text: "Prairie is on the first floor. It is home to 38 residents: 28 single suites and 10 companion suites.",
  },
  {
    id: "candle",
    name: "Candle",
    kind: "Cottage",
    floor: "First floor",
    residents: 12,
    single: 12,
    companion: 0,
    text: "Candle is a secure cottage on the first floor with 12 single suites.",
  },
  {
    id: "emma",
    name: "Emma",
    kind: "Cottage",
    floor: "First floor",
    residents: 12,
    single: 12,
    companion: 0,
    text: "Emma is a secure cottage on the first floor with 12 single suites.",
  },
];

export const suiteTypes = [
  {
    id: "individual",
    label: "Individual living",
    count: 56,
    blurb:
      "Our 56 individual living suites are designed for individuals who need special care home services but wish to remain as independent as possible. Our 600 square foot individual suites are modern, well-appointed rooms that include:",
    features: ["Large closet: 2 closets plus shelving in the bathroom", "Fridge", "Individual shower", "Microwave"],
    photos: [
      p("suite-bedroom.jpg", 955, 800, "A bright single suite with a bed, chair and wood-look floor"),
      p("suite-closet-wide.jpg", 1067, 800, "The kitchenette area of a single suite with a sink, counter and fridge"),
      p("suite-closet.jpg", 600, 800, "A large closet with a hanging rod in a single suite"),
      p("suite-shelves.jpg", 800, 1067, "Shelving inside a single suite's bathroom"),
      p("suite-bathroom.jpg", 1067, 800, "An accessible bathroom with grab bars"),
      p("suite-shower.jpg", 600, 800, "An individual shower with grab bars"),
    ],
  },
  {
    id: "companion",
    label: "Companion suites",
    count: 20,
    blurb:
      "Unique to Samaritan Place, we offer 20 dual-living companion suites, designed to become home for two people who wish to remain together.",
    features: [
      "Home for two people who wish to remain together",
      "Lets couples who need different levels of care live here as a pair",
      "The only care facility in Saskatchewan to offer companion suites",
    ],
    photos: [
      p("suite-bedroom.jpg", 955, 800, "A bright suite with a bed, chair and wood-look floor"),
      p("suite-closet-wide.jpg", 1067, 800, "The kitchenette area of a suite"),
    ],
  },
  {
    id: "cottage",
    label: "Cottage suites",
    count: 24,
    blurb:
      "Our 24 individual living suites in the cottages are designed for individuals who require secure placement. Our individual suites are modern, well-appointed rooms that include:",
    features: ["Large closet: 1 closet", "Individual in-suite shower"],
    photos: [
      p("cottage-room.jpg", 800, 1067, "A cottage suite with a bed and a window"),
      p("cottage-bed.jpg", 800, 1067, "A bed with a blue accent wall in a cottage suite"),
      p("cottage-closet.jpg", 800, 1067, "A closet in a cottage suite"),
      p("cottage-bathroom.jpg", 1067, 800, "An accessible cottage bathroom with grab bars"),
      p("cottage-sink.jpg", 800, 1067, "A bathroom sink and mirror in a cottage suite"),
    ],
  },
];

export const commonAreas = [
  { id: "tiger-lily", name: "Tiger Lily Cafe", text: "A bistro meeting area with a coffee station." },
  { id: "red-coat", name: "Red Coat Trail", text: "Our pub, on the second floor." },
  { id: "chapel", name: "Chapel", text: "A place to pray and attend mass." },
  { id: "family-dining", name: "Family Dining Room", text: "Residents can dine privately here with their visitors." },
  { id: "riverbank", name: "Riverbank Room", text: "One of our meeting areas for residents and their visitors." },
];

export const portalSlides: Photo[] = [
  p("portal-1.jpg", 1100, 625, "Family Portal presentation: family-oriented activity reports, calendars, photo sharing and transparent communication"),
  p("portal-2.jpg", 1100, 623, "Share with Families: families get access to the portal and can view reports and activity details"),
  p("portal-3.jpg", 1100, 622, "Family Reports: resident participation reports and charts available to families"),
  p("portal-4.jpg", 1100, 626, "Photo and Video Gallery: families can view photos and videos shared by staff"),
  p("portal-5.jpg", 1100, 625, "Calendar: the monthly activity calendar"),
  p("portal-6.jpg", 1100, 619, "Family Communication: a family discussion board connecting staff and families"),
  p("portal-7.jpg", 1100, 624, "Contact your recreation department to get started today"),
];

export const leaders = [
  { name: "Rae Sveinbjornson", role: "Executive Director", org: "The Hospice at Glengarda, Samaritan Place and St. Anne’s Senior Citizen’s Village", photo: p("leader-rae.jpg", 110, 138, "Portrait of Rae Sveinbjornson") },
  { name: "Sunil Sugandhi", role: "Spiritual Care and Mission Director", org: "", photo: p("leader-sunil.jpg", 103, 146, "Portrait of Sunil Sugandhi") },
  { name: "Susan Sweet", role: "Site Lead", org: "", photo: p("leader-susan.jpg", 105, 139, "Portrait of Susan Sweet") },
  { name: "Michelle Petterson", role: "Human Resources and Labour Relations Manager", org: "Samaritan Place, The Hospice at Glengarda and St. Anne’s Senior Citizen’s Village", photo: p("leader-michelle.jpg", 102, 141, "Portrait of Michelle Petterson") },
];

export const values = [
  { name: "Commitment", text: "We are dedicated to the service of others through the application of Catholic Social Justice teaching, accountable actions, meaningful collaboration and responsible stewardship." },
  { name: "Compassion", text: "We build genuine relationships that honor human dignity with respect and tenderness, creating a safe environment for all." },
  { name: "Holistic Care", text: "We focus on healing the whole person through the unity of body, mind, spirit and culture that is sensitive, open and respectful to each person." },
  { name: "Innovation", text: "We boldly lead the way with courage, continuously improving and advancing creative solutions." },
];

export const philosophy = [
  "Creating home as our sanctuary and the place that fosters graceful living happens naturally and subtly over time. We may not think of our decisions that occur every-day to sustain our home, but there is no doubt it is we who direct its development.",
  "Being in charge of our own home brings meaning and priceless quality to our life and enables our individual potential to flourish.",
];

export const principles = [
  { title: "Home and sanctuary", text: "The household is each resident’s home and sanctuary." },
  { title: "Self-directed lives", text: "The people who live here direct their own lives, individually and collectively." },
  { title: "Clear boundaries", text: "The boundaries of the person and his/her home are clear and respected as a matter of course." },
  { title: "A culture of grace", text: "Grace, a shared sense of what is sacred about the house and its people, is deeply valued, consciously created and preserved. Ritual, spontaneity, friendship, spirituality, celebration, recreation, choice, independence, art and humour are all manifestations of a culture of grace." },
  { title: "A self-led service team", text: "The people who live here are loved and served by a responsive, highly valued, decentralized, self-led service team that has responsibility and authority." },
  { title: "Leadership for all", text: "Leadership is characteristic, not a position. Leaders support and are supported by values-driven, resource bearing principles and practices as a way for each person to actualize his or her full potential." },
  { title: "Systems that serve", text: "All systems, including treatments, exist to support and serve the person, within the context of his or her life pursuits." },
  { title: "Community", text: "We build strong community with one another, our family, our neighbours, and our town. Each household is part of a neighbourhood of houses, dedicated to continuous learning." },
  { title: "A true home", text: "The physical building and all its amenities are designed to be a true home. Institutional creep in design and culture is treated as a wolf at the door." },
];

export const volunteerRoles = [
  "1:1 resident engagement (cards/games, helping a resident with their garden bed, visiting, & more)",
  "Supporting Life Enhancement programs: themed parties and events, live entertainment, bingo & other games, creative pursuits, socials (ice-cream, brunch, BBQs), nail painting & more!",
  "Going on resident outings with the Life Enhancement team",
  "Assisting with Chapel",
];

export const volunteerSteps = [
  "Complete the volunteer application form in as much detail as possible and return it to reception@samaritanplace.ca at your convenience.",
  "You will then be contacted by phone or email once the application has been received to explore options available for a volunteer experience that meets your interests and needs.",
  "You will be required to obtain a Criminal Record Check with vulnerable sector check prior to volunteering. To do so, a letter of intent will be provided to new volunteers to have the Criminal Records Check fee waived.",
  "Once the above steps are complete, all new volunteers will be provided with a general orientation to provide them with the information and tools needed to make their volunteer experience rewarding.",
];

export const friends = [
  { name: "Saskatoon Stonebridge Co-op", href: "http://www.saskatooncoop.ca/" },
  { name: "Saskatchewan Polytechnic", href: "https://saskpolytech.ca/programs-and-courses/programs/Therapeutic-Recreation.aspx" },
  { name: "Remai Art Gallery", href: "http://www.mendel.ca/" },
  { name: "St. Kateri School", href: "" },
  { name: "St. John’s Ambulance Pet Therapy", href: "http://www.sja.ca/Ontario/CommunityServices/Programs/Pages/TherapyDogServices.aspx" },
  { name: "Holy Family Cathedral Craft Guild", href: "http://holyfamilycathedral.ca/calendar/event/4/uqeoto475t8ppko6uoumtbt38c_20130905T150000Z" },
  { name: "Alzheimer’s Society of Saskatchewan", href: "http://www.alzheimer.ca/en/sk" },
  { name: "Saskatoon Public Library", href: "http://www.saskatoonlibrary.ca/" },
];

export const directory = [
  { name: "Rae Sveinbjornson", role: "Executive Director", detail: "Samaritan Place & St. Anne’s Senior Citizen Village", phone: "(306) 374-8900, ext. 223" },
  { name: "Susan Sweet", role: "Site Lead", detail: "Direct line", phone: "(306) 986-1461" },
  { name: "Kristine Helt", role: "Care Services Director", detail: "Direct line", phone: "(306) 986-1463" },
  { name: "Mariana Ribeiro", role: "Clinical Nurse Manager", detail: "", phone: "(306) 986-1460, ext. 1405" },
  { name: "Milene Kravetz da Silva", role: "Clinical Nurse Manager", detail: "", phone: "(306) 986-1460, ext. 1405" },
  { name: "Heather Anderson", role: "Clinical Nurse Manager", detail: "Casual", phone: "(306) 986-1460, ext. 1405" },
  { name: "Susan Foss", role: "Clinical Nurse Manager", detail: "Casual", phone: "(306) 986-1460, ext. 1405" },
  { name: "Sunil Sugandhi", role: "Spiritual Care Director", detail: "", phone: "(306) 986-1460, ext. 1406" },
  { name: "Sarah Pickering", role: "Life Enhancement Director", detail: "", phone: "(306) 986-1460, ext. 1462" },
  { name: "Michelle Petterson", role: "Human Resources & Labor Relations Manager", detail: "Hospice at Glengarda, Samaritan Place & St. Anne’s Senior Citizen Village", phone: "(306) 986-1460, ext. 1417" },
  { name: "Karen Winmill", role: "Accounting Officer", detail: "Samaritan Place & Hospice at Glengarda", phone: "(306) 986-1460, ext. 1404" },
  { name: "Jessica Langhorst", role: "Clinical Administrative Assistant", detail: "", phone: "(306) 986-1460, ext. 1400" },
  { name: "Akseeb Jawed", role: "Office Administrative Assistant", detail: "", phone: "(306) 986-1460, ext. 1401" },
  { name: "Chantelle Richard", role: "Scheduler", detail: "", phone: "(306) 986-1460, ext. 1421" },
  { name: "Lori Dumontel", role: "Scheduler", detail: "", phone: "(306) 986-1460, ext. 1421" },
  { name: "Lawrence Villaran", role: "Support Services Director", detail: "", phone: "(306) 986-1460, ext. 1476" },
];

export const telHref = (phone: string) => {
  const m = phone.match(/\(?(\d{3})\)?[ -]?(\d{3})-(\d{4})(?:, ext\. (\d+))?/);
  return m ? `tel:+1${m[1]}${m[2]}${m[3]}${m[4] ? `,${m[4]}` : ""}` : "";
};
