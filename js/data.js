const MAGAZINE = {
  title: "ART THROUGH TIME",
  subtitle: "From History to Contemporary Expression",
  course: "BSIT-3B",
  instructor: "Ms. Vienna Alexa Macatangay",
  year: "2026-2027",
  totalPages: 19,
};

// start/end = flipbook page numbers (1-based). Update when the layout is final.
const SECTIONS = [
  { id: "cover",        title: "Cover",               start: 1,  end: 1  },
  { id: "contents",     title: "Contents",            start: 2,  end: 2  },
  { id: "intro",        title: "Introduction",        start: 3,  end: 3  },
  { id: "history",      title: "Art Through History", start: 4,  end: 11 },
  { id: "contemporary", title: "Contemporary Art",    start: 12, end: 13 },
  { id: "thenandnow",   title: "Then & Now",          start: 14, end: 15 },
  { id: "myart",        title: "My Art, My Time",     start: 16, end: 16 },
  { id: "statement",    title: "Artist's Statement",  start: 17, end: 17 },
  { id: "reflection",   title: "Reflection",          start: 18, end: 18 },
  { id: "back",         title: "Back cover",          start: 19, end: 19 },
];

// Replace role / pages / photo.
const CONTRIBUTORS = [
  { 
    id: 1, name: "ALOGORDO, BERNADINE JOY NOCHE", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 2, 
    name: "CABALBAG, JOHN NHEJI GUTIERREZ", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 3, 
    name: "CABANGLAN, KYLE ANGEL TAJAN", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 4, 
    name: "CASTILLO, JERICHO MANALO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 5, 
    name: "CUARTO, JAMILLA FEDERICO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 6, 
    name: "DACILLO, CARL JOSEPH ENDAYA", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 7, 
    name: "ESCAREZ, JEREMY ROXAS", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 8, 
    name: "GOMEZ, ARHON JOSH AALA", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 9, 
    name: "ILAGAN, ADRIAN YURI MERCADO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 10, 
    name: "LAYA, DREI MATTHEW BEREDO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 11, 
    name: "LIRIO, PAUL JOHN FERNANDO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 12, 
    name: "LUGO, DHANLOWEL MAKAVELI TEANO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 13, 
    name: "MALITIG, JIMUEL BEN CORONADO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 14, 
    name: "MERCADO, ALYSSA JOYCE", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 15, 
    name: "MONZOR, JESSAM MAE DUMPA", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 16, 
    name: "OLAGUEBER, JHON MONTILDE", 
    role: "[ROLE]", 
    photo: "", 
    pages: []
  },
  { id: 17, 
    name: "PEDUTEM, ZYWIN ANGELO BECERIL", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 18, 
    name: "PLATERO, JOSE EUGENIO PAWIG", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 19, 
    name: "TRINIDAD, KIRT BRAINER CANOÑO", 
    role: "[ROLE]", 
    photo: "", 
    pages: [] 
  },
  { id: 20, 
    name: "UNIGO, PAUL BENEDICT GONZALES", 
    role: "Then & Now", 
    photo: "", 
    pages: [] 
  },
];

// Placeholder references. Replace with real sources.
const REFERENCES = [
  { type: "books",    text: "Author. (Year). Title. Publisher." },
  { type: "websites", text: "Museum / collection name", url: "https://example.com" },
  { type: "images",   text: "[Artwork title], [Artist]", page: 4, license: "Public domain" },

  // Then & Now (pages 14–15)
  { type: "images",   text: "Mona Lisa, Leonardo da Vinci (c. 1503–1506)", page: 14, license: "Public domain" },
  { type: "images",   text: "Dropping a Han Dynasty Urn, Ai Weiwei (1995)", page: 14, license: "© Ai Weiwei, courtesy Ai Weiwei Studio" },
  { type: "websites", text: "Guggenheim Bilbao. Ai Weiwei: Dropping a Han Dynasty Urn, 1995 (teacher's guide)", url: "https://guggenheim-bilbao.eus/en/learn/schools/teachers-guides/ai-weiwei-dropping-han-dynasty-urn-1995" },
  { type: "websites", text: "QAGOMA. Unpack the art speak behind contemporary art", url: "https://www.qagoma.qld.gov.au/stories/unpack-the-art-speak-behind-contemporary-art-confronting-contemporary-art" },
];
