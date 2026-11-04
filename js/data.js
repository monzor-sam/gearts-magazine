const MAGAZINE = {
  title: "ART THROUGH TIME",
  subtitle: "From History to Contemporary Expression",
  course: "BSIT-3B",
  instructor: "Ms. Vienna Alexa Macatangay",
  year: "2026-2027",
  totalPages: 20,
};

// start/end = flipbook page numbers (1-based). Update when the layout is final.
const SECTIONS = [
  { id: "cover",        title: "Cover",               start: 1,  end: 1  },
  { id: "contents",     title: "Contents",            start: 2,  end: 2  },
  { id: "intro",        title: "Introduction",        start: 3,  end: 3  },
  { id: "history",      title: "Art Through History", start: 4,  end: 11 },
  { id: "contemporary", title: "Contemporary Art",    start: 12, end: 13 },
  { id: "thenandnow",   title: "Then & Now",          start: 14, end: 15 },
  { id: "myart",        title: "My Art, My Time",     start: 16, end: 17 },
  { id: "statement",    title: "Artists' Statement",  start: 18, end: 18 },
  { id: "reflection",   title: "Reflection",          start: 19, end: 19 },
  { id: "back",         title: "Back cover",          start: 20, end: 20 },
];

const CONTRIBUTORS = [
  {
    id: 1, name: "ALOGORDO, BERNADINE JOY NOCHE",
    role: "Original Artwork Contributor",
    pages: [5]
  },
  {
    id: 2, name: "CABALBAG, JOHN NHEIJI GUTIERREZ",
    role: "Original Artwork Contributor",
    pages: [5]
  },
  {
    id: 3, name: "CABANGLAN, KYLE ANGEL TAJAN",
    role: "Original Artwork Contributor",
    pages: [5]
  },
  {
    id: 4, name: "CASTILLO, JERICHO MANALO",
    role: "Original Artwork Contributor",
    pages: [5]
  },
  {
    id: 5, name: "CUARTO, JAMILLA FEDERICO",
    role: "Original Artwork Contributor",
    pages: [7]
  },
  {
    id: 6, name: "DACILLO, CARL JOSEPH ENDAYA",
    role: "Original Artwork Contributor",
    pages: [7]
  },
  {
    id: 7, name: "ESCAREZ, JEREMY ROXAS",
    role: "Original Artwork Contributor",
    pages: [9]
  },
  {
    id: 8, name: "GOMEZ, ARHON JOSH AALA",
    role: "Original Artwork Contributor",
    pages: [9]
  },
  {
    id: 9, name: "ILAGAN, ADRIAN YURI MERCADO",
    role: "Original Artwork Contributor",
    pages: [11]
  },
  {
    id: 10, name: "LAYA, DREI MATTHEW BEREDO",
    role: "Original Artwork Contributor",
    pages: [11]
  },
  {
    id: 11, name: "LIRIO, PAUL JOHN FERNANDO",
    role: "Original Artwork Contributor",
    pages: [16]
  },
  {
    id: 12, name: "LUGO, DHANLOWEL MAKAVELI TEANO",
    role: "Original Artwork Contributor",
    pages: [16]
  },
  {
    id: 13, name: "MALITIG, JIMUEL BEN CORONADO",
    role: "Original Artwork Contributor",
    pages: [16]
  },
  {
    id: 14, name: "MERCADO, ALYSSA JOYCE",
    role: "Original Artwork Contributor",
    pages: [16]
  },
  {
    id: 15, name: "MONZOR, JESSAM MAE DUMPA",
    role: "Original Artwork Contributor, Front-End Developer, Web &amp; Magazine Layout Designer, Content Writer, Researcher",
    pages: [3, 4, 6, 8, 10, 17]
  },
  {
    id: 16, name: "OLAGUEBER, JHON MONTILDE",
    role: "Original Artwork Contributor",
    pages: [17]
  },
  {
    id: 17, name: "PEDUTEM, ZYWIN ANGELO BECERIL",
    role: "Original Artwork Contributor, Front-End Developer, Web &amp; Magazine Layout Designer, Content Writer, Researcher",
    pages: [1, 2, 16, 18, 20],
  },
  {
    id: 18, name: "PLATERO, JOSE EUGENIO PAWIG",
    role: "Original Artwork Contributor, Front-End Developer, Web &amp; Magazine Layout Designer, Content Writer, Researcher",
    pages: [12, 13, 16, 17, 18, 19]
  },
  {
    id: 19, name: "TRINIDAD, KIRT BRAINER CANOÑO",
    role: "Original Artwork Contributor",
    pages: [17]
  },
  {
    id: 20, name: "UNIGO, PAUL BENEDICT GONZALES",
    role: "Original Artwork Contributor, Front-End Developer, Content Writer, Researcher",
    pages: [14, 15, 17]
  }
];

const REFERENCES = [
  // ART THROUGH HISTORY – Greek and Roman Art (page 4)
  { type: "websites", text: "Smarthistory. Ancient Greek Art", url: "https://smarthistory.org/greek_intro/" },
  { type: "websites", text: "Smarthistory. Introduction to Ancient Roman Art", url: "https://smarthistory.org/introduction-to-ancient-roman-art/" },
  { type: "websites", text: "The Metropolitan Museum of Art. Ancient Greece", url: "https://www.metmuseum.org/de/toah/ht/04/eusb" },

  // Greek and Roman Art – Images (page 4)
  { type: "images", text: "Phidias and Athena Parthenos", page: 4, license: "Source: CGItems" },
  { type: "images", text: "Apollodorus of Damascus", page: 4, license: "Source: Wikimedia Commons" },
  { type: "images", text: "Trajan's Column", page: 4, license: "Source: Prof. Zucker via Flickr" },

  // Tellus Panel – Image
  { type: "images", text: "Tellus Panel", page: 4, license: "Art & Object" },
  { type: "websites", text: "Art & Object. How Roman Art Reimagined Greek Traditions", url: "https://www.artandobject.com/news/how-roman-art-reimagined-greek-traditions" },

  // Philippine Art History (page 6)
  { type: "websites", text: "CCP Encyclopedia of Philippine Art", url: "https://epa.culturalcenter.gov.ph/project_intro_to_sections/" },
  { type: "websites", text: "National Commission for Culture and the Arts. The Spanish Colonial Tradition in Philippine Visual Arts", url: "https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/visual-arts/the-spanish-colonial-tradition-in-philippine-visual-arts/" },
  { type: "websites", text: "National Museum of the Philippines. Fine Arts", url: "https://www.nationalmuseum.gov.ph/our-collections/fine-arts/" },
  { type: "websites", text: "Sutori. Philippine Art History", url: "https://www.sutori.com/en/story/philippine-art-history--RCiwxD9na5RJrToDzyuA7NJP" },

  // Philippine Art History – Images (page 6)
  { type: "images", text: "Juan Luna Portrait", page: 6, license: "Source: ArtStation" },
  { type: "images", text: "Fernando Amorsolo Portrait", page: 6, license: "Source: Wikipedia" },
  { type: "images", text: "Planting Rice, Fernando Amorsolo", page: 6, license: "Source: Pinterest" },
  { type: "images", text: "Spoliarium, Juan Luna (1884)", page: 6, license: "Source: Harvard University" },
  { type: "images", text: "Pre-Colonial Culture and Tradition in the Philippines", page: 6, license: "Source: Sutori" },

  // Modern Art History (page 8)
  { type: "websites", text: "The Museum of Modern Art (MoMA). Modern Art", url: "https://www.moma.org/collection/terms/modern-art" },
  { type: "websites", text: "The Museum of Modern Art (MoMA). Impressionism", url: "https://www.moma.org/collection/terms/impressionism" },
  { type: "websites", text: "National Gallery of Art. The Inquiring Eye: Early Modernism, 1900–1940", url: "https://www.nga.gov/educational-resources/inquiring-eye-early-modernism-1900-1940" },

  // Modern Art History – Images (page 8)
  { type: "images", text: "Salvador Dalí, The Persistence of Memory (1931)", page: 8, license: "Copyright Salvador Dalí / Artists Rights Society (ARS); source: Time Out New York", url: "https://www.timeout.com/newyork/art/famous-modern-art" },
  { type: "images", text: "Claude Monet, Self-Portrait with a Beret (1886)", page: 8, license: "Public domain; source: WikiArt", url: "https://www.wikiart.org/en/claude-monet/self-portrait-with-a-beret-1886" },
  { type: "images", text: "Claude Monet, Impression, Sunrise (1872)", page: 8, license: "Image source: Claude-Monet.com; verify image usage rights", url: "https://www.claude-monet.com/impression-sunrise.jsp" },
  { type: "images", text: "Pablo Picasso, Portrait Photograph", page: 8, license: "Image source: PabloPicasso.org; verify image usage rights", url: "https://www.pablopicasso.org/picasso-biography.jsp" },
  { type: "images", text: "Pablo Picasso, Les Demoiselles d'Avignon (1907)", page: 8, license: "Copyright Estate of Pablo Picasso / Artists Rights Society (ARS), New York; source: MoMA", url: "https://www.moma.org/collection/works/79766" },

  // Baroque Art History (page 10)
  { type: "websites", text: "The Metropolitan Museum of Art. Baroque Art and Architecture", url: "https://www.metmuseum.org/essays/baroque-art-and-architecture" },
  { type: "websites", text: "The National Gallery. Baroque", url: "https://www.nationalgallery.org.uk/paintings/glossary/baroque" },

  // Baroque Art History – Images (page 10)
  { type: "images", text: "Caravaggio, The Crowning with Thorns (c. 1602–1604)", page: 10, license: "Image source: Smarthistory; verify reuse permissions", url: "https://smarthistory.org/a-beginners-guide-to-baroque-art/" },
  { type: "images", text: "Caravaggio, The Calling of Saint Matthew (c. 1599–1600)", page: 10, license: "Image source: Wikipedia; verify image-specific license", url: "https://en.wikipedia.org/wiki/Baroque_painting" },
  { type: "images", text: "Caravaggio, Portrait", page: 10, license: "Image source: Wikipedia; verify image-specific license", url: "https://en.wikipedia.org/wiki/Caravaggio" },
  { type: "images", text: "Gian Lorenzo Bernini, Portrait", page: 10, license: "Image source: Wikipedia; verify image-specific license", url: "https://en.wikipedia.org/wiki/Gian_Lorenzo_Bernini" },
  { type: "images", text: "Gian Lorenzo Bernini, The Ecstasy of Saint Teresa (1647–1652)", page: 10, license: "Image source: Artble; verify reuse permissions", url: "https://www.artble.com/artists/gian_lorenzo_bernini/sculpture/the_ecstasy_of_saint_teresa" },

  // CONTEMPORARY ART — PAGE 12: AI WEIWEI
  { type: "images", text: "Ai Weiwei, Artist Portrait", page: 12, license: "Image source: ArtReview; verify reproduction permissions", url: "https://artreview.com/ai-weiwei-how-art-comes-alive/" },
  { type: "images", text: "Ai Weiwei, Dropping a Han Dynasty Urn (1995)", page: 12, license: "Image source: Smarthistory; verify reproduction permissions", url: "https://smarthistory.org/ai-weiwei-dropping-a-han-dynasty-urn/" },
  { type: "websites", text: "Smarthistory. Ai Weiwei, Dropping a Han Dynasty Urn", url: "https://smarthistory.org/ai-weiwei-dropping-a-han-dynasty-urn/" },
  { type: "websites", text: "Solomon R. Guggenheim Museum. Ai Weiwei", url: "https://www.guggenheim.org/teaching-materials/art-and-china-after-1989-theater-of-the-world/ai-weiwei" },

  // CONTEMPORARY ART — PAGE 13: LEEROY NEW
  { type: "images", text: "Leeroy New, Artist Portrait", page: 13, license: "Image source: Arts Help; verify reproduction permissions", url: "https://www.artshelp.com/elemental-by-leeroy-new-working-with-liter-of-light-to-showcase-beauty-in-sustainability-and-advocate-for-equal-access-to-solar-powered-lights-in-the-philippines/" },
  { type: "images", text: "Leeroy New, Mebuyan's Colony", page: 13, license: "Image source: Lahore Biennale Foundation; verify reproduction permissions", url: "https://www.lahorebiennale.org/lb03-artists/leeroy-new/" },
  { type: "websites", text: "Lahore Biennale Foundation. Leeroy New", url: "https://www.lahorebiennale.org/lb03-artists/leeroy-new/" },
  { type: "websites", text: "Cultural Center of the Philippines. Mebuyan's Colony: Function Beyond the Fantastical", url: "https://culturalcenter.gov.ph/press-release/mebuyans-colony-in-ccp-function-beyond-the-fantastical/" },
  { type: "websites", text: "Arts Help. Elemental by Leeroy New: Sustainability and Access to Solar-Powered Lights in the Philippines", url: "https://www.artshelp.com/elemental-by-leeroy-new-working-with-liter-of-light-to-showcase-beauty-in-sustainability-and-advocate-for-equal-access-to-solar-powered-lights-in-the-philippines/" },

  // Then & Now (pages 14–15)
  { type: "images", text: "Mona Lisa, Leonardo da Vinci (c. 1503–1506)", page: 14, license: "Public domain" },
  { type: "images", text: "Dropping a Han Dynasty Urn, Ai Weiwei (1995)", page: 14, license: "© Ai Weiwei, courtesy Ai Weiwei Studio" },
  { type: "websites", text: "Guggenheim Bilbao. Ai Weiwei: Dropping a Han Dynasty Urn, 1995 (Teacher's Guide)", url: "https://guggenheim-bilbao.eus/en/learn/schools/teachers-guides/ai-weiwei-dropping-han-dynasty-urn-1995" },
  { type: "websites", text: "QAGOMA. Unpack the Art Speak Behind Contemporary Art", url: "https://www.qagoma.qld.gov.au/stories/unpack-the-art-speak-behind-contemporary-art-confronting-contemporary-art" },
];
