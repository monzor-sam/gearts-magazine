// Flipbook viewer: uses the StPageFlip library (loaded from CDN in viewer.html)
// Docs: https://nodlik.github.io/StPageFlip/

// 1) PAGE CONTENT. Put real HTML for any page here. Pages not listed get a placeholder.
const PAGE_HTML = {
    1: `
        <p class="label">Magazine portfolio</p>
        <h1 style="font-size: 2.4rem;">${MAGAZINE.title}</h1>
        <p><em>${MAGAZINE.subtitle}</em></p>
<img src="images/cover.jpg" alt="Cover art" style="width:100%; border-radius:8px;">
        <p>
            <strong>[STUDENT NAME(S)]</strong><br>
            ${MAGAZINE.course} · ${MAGAZINE.instructor} · ${MAGAZINE.year}
        </p>
    `,
    2: `
        <article class="mag-page toc-page">
            <p class="bs-kicker">Table of Contents <span>·</span> 2</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">Table of Contents</h2>

            <div class="toc-list">
                <div><span>01</span><b>Cover</b><i></i><strong>01</strong></div>
                <div><span>02</span><b>Table of Contents</b><i></i><strong>02</strong></div>
                <div><span>03</span><b>Introduction</b><i></i><strong>03</strong></div>

                <div class="toc-chapter">
                    <span>04</span><b>Art Through History</b><i></i><strong>04–11</strong>
                </div>
                <div class="toc-sub"><span>—</span><b>Greek and Roman Art</b><i></i><strong>04–05</strong></div>
                <div class="toc-sub"><span>—</span><b>Philippine Art History</b><i></i><strong>06–07</strong></div>
                <div class="toc-sub"><span>—</span><b>Additional Historical Topics</b><i></i><strong>08–11</strong></div>

                <div><span>05</span><b>Contemporary Art</b><i></i><strong>12–13</strong></div>
                <div><span>06</span><b>Then &amp; Now</b><i></i><strong>14–15</strong></div>
                <div><span>07</span><b>My Art, My Time</b><i></i><strong>16</strong></div>
                <div><span>08</span><b>Artist's Statement</b><i></i><strong>17</strong></div>
                <div><span>09</span><b>Reflection</b><i></i><strong>18</strong></div>
                <div><span>10</span><b>Back Cover</b><i></i><strong>19</strong></div>
            </div>

            <div class="mag-footnote"></div>
        </article>
    `,
    3: `
        <article class="mag-page intro-page">
            <p class="bs-kicker">Introduction <span>·</span> 3</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">Art Through Time</h2>
            <p class="mag-deck">Understanding yesterday. Seeing today. Imagining tomorrow.</p>

            <div class="intro-rule"></div>

            <p>
                Art is more than an image, an object, or a beautiful arrangement
                of forms. It is a record of how people understand their world,
                express their beliefs, and communicate what matters to them.
                <b>Art history</b> is the study of artworks, artists, styles,
                and visual traditions across time. It explores how art developed
                in different places and how historical events, cultures, religions,
                technologies, and social changes shaped what people created.
            </p>

            <p>
                <b>Contemporary art</b> refers to art made in the present era.
                It reflects the experiences, questions, and concerns of people
                living today. Contemporary artists work with many forms and
                materials—from painting and sculpture to photography, installation,
                digital media, and performance—to explore identity, society,
                culture, technology, and the environment.
            </p>

            <p>
                Understanding the history of art matters because it helps us
                recognize the ideas and experiences behind images. It allows us
                to appreciate cultural heritage, understand different perspectives,
                and see how visual expression changes as society changes.
                Looking at the past also helps us become more thoughtful viewers
                and more informed creators.
            </p>

            <p>
                Historical art continues to influence contemporary artists
                through its techniques, symbols, subjects, and ways of seeing.
                Artists may borrow a composition, reinterpret a traditional
                subject, challenge an old ideal, or combine historical references
                with modern materials and experiences. Rather than simply copying
                the past, they transform it into something meaningful for the present.
            </p>

            <blockquote class="intro-quote">
                “Art history offers us far more than a collection of 'greatest hits' or objects of market value; it provides a panoramic view of humanity itself, a timeline textured with the very fibers of human experience.”
                <br>
                — Lindenwood University / Art History Perspective
            </blockquote>

            <div class="mag-footnote">
                This magazine traces those connections, from ancient traditions
                to the creative expressions of today.
            </div>
        </article>
    `,
    4: `
        <article class="mag-page history-page">
            <p class="bs-kicker">ART THROUGH HISTORY <span>·</span> 4</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">Greek and Roman Art</h2>
            <p class="mag-deck">From classical ideals to the grandeur of an empire.</p>

            <div class="history-scroll">
                <div class="history-image-placeholder">
                    <img src="images/history/tellus-arapacis.jpg" alt="Tellus Panel from the Ara Pacis Augustae, Rome, 9 BCE">
                    <figcaption>
                        Tellus Panel from the Ara Pacis Augustae, Rome, 9 BCE
                    </figcaption>
                </div>

                <h3>A. Historical Background</h3>
                <p>
                    Ancient Greek art developed around the Aegean region,
                    particularly in mainland Greece and its surrounding islands.
                    Its major periods include the Geometric, Archaic, Classical,
                    and Hellenistic eras. Greek artists created sculptures,
                    pottery, temples, and paintings influenced by mythology,
                    religion, philosophy, and ideals of human beauty.
                </p>

                <p>
                    Roman art developed in the Italian peninsula and expanded
                    throughout the Roman Republic and Empire. The Romans adopted
                    and adapted many Greek artistic traditions while developing
                    their own approaches to portraiture, architecture, mosaics,
                    and historical storytelling. Their artworks often reflected
                    political power, public life, religion, and social identity.
                </p>

                <h3>B. Characteristics</h3>

                <p><b>Greek Art</b></p>
                <ul>
                    <li><b>Themes:</b> Mythology, gods and goddesses, heroes,
                    athletic achievements, and the human figure.</li>
                    <li><b>Styles:</b> Idealized human forms, naturalism,
                    symmetry, harmony, and balanced compositions.</li>
                    <li><b>Techniques:</b> Marble carving, bronze casting,
                    pottery painting, and architectural construction.</li>
                    <li><b>Materials:</b> Marble, bronze, limestone, clay,
                    and pigments.</li>
                    <li><b>Elements and principles:</b> Proportion, balance,
                    harmony, movement, symmetry, and rhythm.</li>
                </ul>

                <p><b>Roman Art</b></p>
                <ul>
                    <li><b>Themes:</b> Emperors, military victories, mythology,
                    historical events, and everyday life.</li>
                    <li><b>Styles:</b> Realistic portraiture, narrative reliefs,
                    monumental architecture, mosaics, and decorative paintings.</li>
                    <li><b>Techniques:</b> Stone carving, bronze casting,
                    fresco painting, mosaic making, and concrete construction.</li>
                    <li><b>Materials:</b> Marble, bronze, stone, brick,
                    concrete, glass, and pigments.</li>
                    <li><b>Elements and principles:</b> Scale, depth,
                    perspective, repetition, texture, and visual storytelling.</li>
                </ul>

                <h3>C. Representative Artists and Artworks</h3>

                <div class="representative-gallery">

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/phidias.png"
                                alt="Phidias, the sculptor">
                        </div>
                        <div class="artist-caption">
                            <b>Phidias</b>
                            <span>Greek Classical Sculptor</span>
                            <small>c. 480 – c. 430 BC</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/athena.jpg"
                                alt="Athena Parthenos statue by Phidias">
                        </div>
                        <div class="artist-caption">
                            <b>Athena Parthenos (Mid-5th Century BCE)</b>
                            <span>Phidias</span>
                            <small>Chryselephantine (Gold and Ivory on a Wooden Core)</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/apollodorus.jpg"
                                alt="Apollodorus of Damascus, the architect">
                        </div>
                        <div class="artist-caption">
                            <b>Apollodorus of Damascus</b>
                            <span>Roman Architect</span>
                            <small>1st Century BCE</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/trajan.jpg"
                                alt="Relief sculptures on Trajan's Column">
                        </div>
                        <div class="artist-caption">
                            <b>Trajan's Column (113 CE)</b>
                            <span>Apollodorus of Damascus</span>
                            <small>Carrara Marble</small>
                        </div>
                    </div>

                </div>

                <h3>D. Meaning and Significance</h3>
                <p>
                    Greek art emphasized beauty, harmony, proportion, and
                    human achievement. Its artistic ideals influenced many
                    later civilizations, particularly Rome.
                </p>

                <p>
                    Roman art adapted Greek influences and used visual
                    expression to communicate authority, preserve historical
                    memory, and celebrate public achievements. Together,
                    Greek and Roman art established important foundations
                    for Western sculpture, architecture, and visual culture.
                </p>
            </div>

            
            <div class="mag-footnote">
                Content Sources:
                <a href="https://smarthistory.org/greek_intro/"
                target="_blank" rel="noopener noreferrer">Smarthistory – Ancient Greek Art</a>;
                <a href="https://smarthistory.org/introduction-to-ancient-roman-art/"
                target="_blank" rel="noopener noreferrer">Smarthistory – Ancient Roman Art</a>;
                <a href="https://www.metmuseum.org/de/toah/ht/04/eusb"
                target="_blank" rel="noopener noreferrer">The Metropolitan Museum of Art – Ancient Greece</a>.
                <br>
                Images: Phidias and Athena Parthenos © CGItems. Apollodorus of Damascus, courtesy of Wikimedia Commons. Trajan's Column, courtesy of Prof. Zucker via Flickr. Tellus Panel, via Art & Object. Used for educational purposes.
            </div>
        </article>
    `,
    5: `
        <article class="mag-page original-page">
            <p class="bs-kicker">Original Artistic Response <span>·</span> 5</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">The Weight of Knowledge</h2>
            <p class="mag-deck">An original interpretation of Ancient Greek Art.</p>

            <div class="artwork-placeholder">
                <div class="art-placeholder-frame">
                    <img src="images/history/original-artwork-4.png"
                        alt="Original artwork inspired by Greek and Roman art">
                </div>
            </div>

            <h3>Artwork Details</h3>
            <p><b>Artists:</b> Algordo, Bernadine Joy & Cabalbag, John Nheiji</p>
            <p><b>Title:</b> The Weight of Knowledge</p>
            <p><b>Medium:</b> Pen and ink on paper</p>
            <p><b>Historical Inspiration:</b> Greek and Roman Art</p>

            <p>
                <b>Description:</b>
                This artwork portrays a student sitting on the steps of an ancient Greek temple, surrounded by books and papers, reflecting the overwhelming experience of learning. Inspired by the Parthenon in Athens and the Doric columns of classical Greek architecture, it combines ancient influences with a modern manga-style student. Instead of depicting gods, heroes, or philosophers, it presents an ordinary student's struggles with academic pressure, information overload, deadlines, and self-doubt. The crumpled papers and question marks symbolize confusion and burnout, while the artwork's message reminds viewers that struggling is a natural part of learning. Feeling lost does not mean failing; it means growing and discovering new understanding.
            </p>

            <p class="mag-kicker"></p>
            <h2 class="mag-heading">A Student's Journey Through History</h2>
            <p class="mag-deck">An original interpretation of Ancient Greek and Roman Art.</p>

            <div class="artwork-placeholder">
                <div class="art-placeholder-frame">
                    <img src="images/history/original-artwork-1.png"
                        alt="Original artwork inspired by Greek and Roman art">
                </div>
            </div>

            <h3>Artwork Details</h3>
            <p><b>Artists:</b> Cabanglan, Kyle Angel & Castillo, Jericho</p>
            <p><b>Title:</b> A Student's Journey Through History</p>
            <p><b>Medium:</b> Crayon on oslo paper</p>
            <p><b>Historical Inspiration:</b> Greek and Roman Art</p>

            <p>
                <b>Description:</b>
                A Student's Journey Through History is inspired by Ancient Greek and Roman architecture, featuring classical columns, rounded arches, and a central fountain. By combining these historical elements with modern students and everyday school life, the artwork represents the connection between past and present. It highlights the importance of education, cultural heritage, and the lasting influence of ancient art and architecture on contemporary society.
            </p>

            <div class="mag-footnote">
                Artworks courtesy of the student artists. Used for educational purposes.
            </div>
        </article>
    `,
    6: `
        <article class="mag-page history-page">
            <p class="bs-kicker">ART THROUGH HISTORY <span>·</span> 6</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">Philippine Art History</h2>
            <p class="mag-deck">A visual journey through Filipino culture, heritage, and identity.</p>

            <div class="history-scroll">
                <div class="history-image-placeholder">
                    <img src="images/history/pre-colonial-ph.jpeg" alt="Pre-Colonial Philippines">
                    <figcaption>
                        Pre-Colonial Culture and Traditions in the Philippines
                    </figcaption>
                </div>

                <h3>A. Historical Background</h3>
                <p>
                    Philippine art history reflects the diverse cultures,
                    traditions, and experiences of the Filipino people.
                    Before Spanish colonization, early communities produced
                    pottery, textiles, ornaments, metalwork, woodcarvings,
                    and ritual objects that expressed their beliefs and
                    ways of life.
                </p>

                <p>
                    During the Spanish colonial period, European artistic
                    traditions and Catholic imagery influenced paintings,
                    sculptures, churches, and religious decorations.
                    Under American rule, formal art education and exposure
                    to international movements expanded artistic practices.
                    In the modern and contemporary periods, Filipino artists
                    explored new styles, materials, and subjects while
                    continuing to express local culture and identity.
                </p>

                <h3>B. Characteristics</h3>
                <ul>
                    <li><b>Themes:</b> Filipino identity, spirituality,
                    community, nature, indigenous traditions, nationalism,
                    and everyday life.</li>
                    <li><b>Styles:</b> Indigenous and regional art,
                    religious art, academic realism, modernism,
                    social realism, and contemporary experimentation.</li>
                    <li><b>Techniques:</b> Weaving, carving, pottery,
                    metalworking, painting, printmaking, photography,
                    and digital art.</li>
                    <li><b>Materials:</b> Wood, clay, fibers, metal,
                    natural dyes, pigments, and modern materials.</li>
                    <li><b>Elements and principles:</b> Pattern, rhythm,
                    texture, color, symbolism, balance, and composition.</li>
                </ul>

                <h3>C. Representative Artists and Artworks</h3>

                <div class="representative-gallery">

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/juan-luna.jpg"
                                alt="Portrait of Filipino painter Juan Luna">
                        </div>
                        <div class="artist-caption">
                            <b>Juan Luna</b>
                            <span>Filipino painter</span>
                            <small>1857–1899</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/spoliarium.jpg"
                                alt="Spoliarium by Juan Luna">
                        </div>
                        <div class="artist-caption">
                            <b>Spoliarium (1884)</b>
                            <span>Juan Luna</span>
                            <small>Oil on canvas</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/fernando-amorsolo.png"
                                alt="Portrait of Filipino painter Fernando Amorsolo">
                        </div>
                        <div class="artist-caption">
                            <b>Fernando Amorsolo</b>
                            <span>Filipino painter</span>
                            <small>1892–1972</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/planting-rice.jpg"
                                alt="Planting Rice by Fernando Amorsolo">
                        </div>
                        <div class="artist-caption">
                            <b>Planting Rice (1949)</b>
                            <span>Fernando Amorsolo</span>
                            <small>Oil on canvas</small>
                        </div>
                    </div>

                </div>

                <h3>D. Meaning and Significance</h3>
                <p>
                    Philippine art preserves cultural memory and reflects
                    the country's changing history and identity. It shows
                    how Filipino communities expressed their beliefs,
                    traditions, struggles, and aspirations through visual
                    creativity.
                </p>

                <p>
                    Studying Philippine art allows us to appreciate the
                    diversity of Filipino culture and understand how
                    artists respond to historical events and contemporary
                    social realities.
                </p>
            </div>

            <div class="mag-footnote">
                Content Sources:
                <a href="https://epa.culturalcenter.gov.ph/project_intro_to_sections/"
                target="_blank" rel="noopener noreferrer">CCP Encyclopedia of Philippine Art</a>;
                <a href="https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/visual-arts/the-spanish-colonial-tradition-in-philippine-visual-arts/"
                target="_blank" rel="noopener noreferrer">NCCA – Spanish Colonial Art</a>;
                <a href="https://www.nationalmuseum.gov.ph/our-collections/fine-arts/"
                target="_blank" rel="noopener noreferrer">National Museum of the Philippines – Fine Arts</a>.
                <br>
                Images: Pre-colonial Philippines via Sutori, Juan Luna via ArtStation, Spoliarium via Scalar, Fernando Amorsolo via Wikipedia, Planting Rice via Pinterest. Used for educational purposes. 
            </div>
        </article>
    `,
    7: `
        <article class="mag-page original-page">
            <p class="bs-kicker">Original Artistic Response <span>·</span> 7</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">A Glimpse of Philippine History</h2>
            <p class="mag-deck">An original interpretation inspired by Filipino art and heritage.</p>

            <div class="artwork-placeholder">
                <div class="art-placeholder-frame">
                    <img src="images/history/original-artwork-2.png"
                        alt="Original artwork inspired by Philippine art history">
                </div>
            </div>

            <h3>Artwork Details</h3>
            <p><b>Artists:</b> Cuarto, Jamilla & Dacillo, Carl Joseph</p>
            <p><b>Title:</b> A Glimpse of Philippine History</p>
            <p><b>Medium:</b> Coffee painting on oslo paper</p>
            <p><b>Historical Inspiration:</b> Philippine Art History</p>

            <p>
                <b>Description:</b>
                This artwork portrays the Philippines during the Spanish colonial period and the Philippine Revolution through three symbols: José Rizal, the Philippine flag, and a church. Inspired by the nation's struggle for identity and independence, it uses coffee as its medium to create an aged, historical appearance. Its minimalist style connects the sacrifices and heritage of the past with the Filipino youth today, reminding viewers to value their history, freedom, and national identity.
            </p>

            <div class="mag-footnote">
                Artwork courtesy of the student artists. Used for educational purposes.
            </div>
        </article>
    `,
    8: `
        <article class="mag-page history-page">
            <p class="bs-kicker">ART THROUGH HISTORY <span>·</span> 8</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">Modern Art</h2>
            <p class="mag-deck">Breaking traditions, exploring new perspectives</p>

            <div class="history-scroll">
                <div class="history-image-placeholder">
                    <img src="images/history/persistence-of-memory.jpg" alt="Modern Art">
                    <figcaption>
                        Salvador Dalí, The Persistence of Memory, 1931
                    </figcaption>
                </div>

                <h3>A. Historical Background</h3>
                <p>
                    Modern Art developed during the late 19th century in Europe
                    and continued into the 20th century. It emerged during a period
                    of industrialization, urban growth, scientific discoveries,
                    and social change. These developments transformed everyday life
                    and encouraged artists to move away from traditional academic
                    rules and explore new ways of representing the world.
                </p>

                <h3>B. Characteristics</h3>
                <ul>
                    <li><b>Themes:</b> Everyday life, nature, emotions, identity,
                    technology, social change, dreams, and personal experiences.</li>
            
                    <li><b>Styles:</b> Impressionism, Cubism, Expressionism,
                    Surrealism, and Abstract Art, each offering different
                    approaches to representing reality.</li>
                
                    <li><b>Techniques:</b> Loose brushwork, bold color application,
                    geometric simplification, distortion, abstraction, and
                    experimentation with perspective.</li> 
                
                    <li><b>Materials:</b> Oil and acrylic paints, canvas, paper,
                    charcoal, watercolor, and mixed media.</li>
               
                    <li><b>Elements and Principles:</b> Artists experimented with
                    color, line, shape, form, texture, space, contrast, balance,
                    rhythm, and emphasis to communicate ideas and emotions.</li>
                </ul>

               <h3>C. Representative Artists and Artworks</h3>
                <div class="representative-gallery">

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/claude-monet.jpg"
                                alt="Portrait of French painter Claude Monet">
                        </div>
                        <div class="artist-caption">
                            <b>Claude Monet</b>
                            <span>French painter</span>
                            <small>1840–1926</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/impression-sunrise.jpg"
                                alt="Impression, Sunrise by Claude Monet">
                        </div>
                        <div class="artist-caption">
                            <b>Impression, Sunrise (1872)</b>
                            <span>Claude Monet</span>
                            <small>Oil on canvas</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/pablo-picasso.jpg"
                                alt="Portrait of Spanish painter Pablo Picasso">
                        </div>
                        <div class="artist-caption">
                            <b>Pablo Picasso</b>
                            <span>Spanish painter and sculptor</span>
                            <small>1881–1973</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/les-demoiselles.jpg"
                                alt="Les Demoiselles d'Avignon by Pablo Picasso">
                        </div>
                        <div class="artist-caption">
                            <b>Les Demoiselles d'Avignon (1907)</b>
                            <span>Pablo Picasso</span>
                            <small>Oil on canvas</small>
                        </div>
                    </div>

                </div>

                <h3>D. Meaning and Significance</h3>
                <p>
                    Modern Art represented a major change in the history of art
                    because it challenged established traditions and expanded
                    the meaning of artistic expression. It allowed artists to
                    communicate personal feelings, experiment with new ideas,
                    and respond to the changes of their time. Its influence
                    opened the way for contemporary art and continues to inspire
                    artists to explore creative freedom and different perspectives.
                </p>
            </div>

            <div class="mag-footnote">
                Content Sources:
                <a href="https://www.moma.org/collection/terms/modern-art"
                target="_blank" rel="noopener noreferrer">MoMA – Modern Art</a>;
                <a href="https://www.moma.org/collection/terms/impressionism"
                target="_blank" rel="noopener noreferrer">MoMA – Impressionism</a>;
                <a href="https://www.nga.gov/educational-resources/inquiring-eye-early-modernism-1900-1940"
                target="_blank" rel="noopener noreferrer">National Gallery of Art – Early Modernism</a>.
                <br>
                Images: Claude Monet via Wikiart, Impression Sunrise via claude-monet.com, Pablo Picasso via pablopicasso.org, Les Demoiselles d'Avignon via MoMA. Used for educational purposes.
            </div>
        </article>
    `,
    9: `
        <article class="mag-page original-page">
            <p class="bs-kicker">Original Artistic Response <span>·</span> 9</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">The Fracture of Time</h2>
            <p class="mag-deck">An original interpretation inspired by Modern Art.</p>

            <div class="artwork-placeholder">
                <div class="art-placeholder-frame">
                    <img src="images/history/original-artwork-3.png"
                        alt="Original artwork inspired by Modern Art">
                </div>
            </div>

            <h3>Artwork Details</h3>
            <p><b>Artists:</b> Escarez, Jeremy & Gomez, Arhon Josh</p>
            <p><b>Title:</b> The Fracture of Time</p>
            <p><b>Medium:</b> Graphite pencil on paper</p>
            <p><b>Historical Inspiration:</b> Modern Art</p>

            <p>
                <b>Description:</b>
                    This artwork explores how time and the pressures of modern life can wear people down. Inspired by Salvador Dalí’s Surrealist painting The Persistence of Memory (1931), it reinterprets his soft, melting clocks as a large, heavy stone clock with cracks, Roman numerals, and chipped brick edges. Using grayscale pencil and cross-hatching, the artwork symbolizes the stress of deadlines, busy schedules, and the feeling of never having enough time. Its cracks represent burnout and the pressure experienced by students and workers. Ultimately, the artwork reminds us that time cannot be controlled and that constantly racing against it can take a toll on our well-being. It encourages us to slow down, rest, take care of ourselves, and spend our limited time on what truly matters.            </p>

            <div class="mag-footnote">
                Artwork courtesy of the student artists. Used for educational purposes.
            </div>
        </article>
    `,
    10: `
        <article class="mag-page history-page">
            <p class="bs-kicker">ART THROUGH HISTORY <span>·</span> 10</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">Baroque Art</h2>
            <p class="mag-deck">Drama, movement, and emotion through artistic expression.</p>

            <div class="history-scroll">
                <div class="history-image-placeholder">
                    <img src="images/history/crowning-with-thorns.jpg" alt="Baroque Art">
                    <figcaption>
                        Caravaggio, The Crowning with Thorns, 1602–04
                    </figcaption>
                </div>

                <h3>A. Historical Background</h3>
                <p>
                    Baroque Art developed in Rome, Italy, during the late 16th
                    century and spread throughout Europe during the 17th and
                    early 18th centuries. It emerged during the Counter-Reformation,
                    when the Catholic Church used powerful religious artworks
                    to inspire faith and communicate biblical stories. It was
                    also supported by European monarchs and wealthy patrons
                    who commissioned grand paintings, sculptures, and buildings
                    to express their power, wealth, and influence.
                </p>

                <h3>B. Characteristics</h3>
                <ul>
                    <li><b>Themes:</b> Religion, mythology, power, royalty,
                    dramatic events, human emotions, and everyday life.</li>

                    <li><b>Styles:</b> Dramatic, grand, realistic, emotional,
                    and highly detailed compositions that create a sense
                    of movement and intensity.</li>

                    <li><b>Techniques:</b> Chiaroscuro, tenebrism, dramatic
                    lighting, strong contrasts, dynamic compositions,
                    and detailed sculptural modeling.</li>

                    <li><b>Materials:</b> Oil paint, canvas, marble, bronze,
                    wood, stone, and decorative materials.</li>

                    <li><b>Elements and Principles:</b> Strong contrast,
                    light and shadow, movement, curved lines, rich colors,
                    texture, balance, emphasis, and dramatic composition.</li>
                </ul>

                <h3>C. Representative Artists and Artworks</h3>
                <div class="representative-gallery">

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/caravaggio.jpg"
                                alt="Portrait of Italian painter Caravaggio">
                        </div>
                        <div class="artist-caption">
                            <b>Caravaggio</b>
                            <span>Italian painter</span>
                            <small>1571–1610</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/calling-of-st-matthew.jpg"
                                alt="The Calling of Saint Matthew by Caravaggio">
                        </div>
                        <div class="artist-caption">
                            <b>The Calling of Saint Matthew (1599–1600)</b>
                            <span>Caravaggio</span>
                            <small>Oil on canvas</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/gian-lorenzo-bernini.jpg"
                                alt="Portrait of Gian Lorenzo Bernini">
                        </div>
                        <div class="artist-caption">
                            <b>Gian Lorenzo Bernini</b>
                            <span>Italian sculptor and architect</span>
                            <small>1598–1680</small>
                        </div>
                    </div>

                    <div class="artist-feature">
                        <div class="artist-image">
                            <img src="images/history/ecstasy-of-saint-theresa.jpg"
                                alt="The Ecstasy of Saint Teresa by Bernini">
                        </div>
                        <div class="artist-caption">
                            <b>The Ecstasy of Saint Teresa (1647–1652)</b>
                            <span>Gian Lorenzo Bernini</span>
                            <small>Marble sculpture and architectural setting</small>
                        </div>
                    </div>

                </div>

                <h3>D. Meaning and Significance</h3>
                <p>
                    Baroque Art was important because it transformed art into
                    a powerful means of communicating faith, authority, and
                    emotion. Its dramatic lighting, movement, and realistic
                    details helped viewers feel involved in the scenes being
                    portrayed. It strengthened the influence of the Catholic
                    Church during the Counter-Reformation and demonstrated
                    the wealth and power of European rulers and patrons.
                    Its expressive style continues to influence art,
                    architecture, theater, and visual storytelling.
                </p>
            </div>

            <div class="mag-footnote">
                Content Sources:
                <a href="https://www.metmuseum.org/essays/baroque-art-and-architecture"
                target="_blank" rel="noopener noreferrer">The Metropolitan Museum of Art – Baroque Art and Architecture</a>;
                <a href="https://www.nationalgallery.org.uk/paintings/glossary/baroque"
                target="_blank" rel="noopener noreferrer">National Gallery – Baroque</a>.
                <br>
                Images: The Crowning with Thorns via Smarthistory; The Calling of Saint Matthew and Caravaggio portrait via Wikipedia; Gian Lorenzo Bernini portrait via Wikipedia; The Ecstasy of Saint Teresa via Artble. Used for educational purposes.
        </article>
    `,
    11: `
        <article class="mag-page original-page">
            <p class="bs-kicker">Original Artistic Response <span>·</span> 11</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">The Crown of Strength</h2>
            <p class="mag-deck">An original interpretation inspired by Baroque Art.</p>

            <div class="artwork-placeholder">
                <div class="art-placeholder-frame">
                    <img src="images/history/original-artwork-5.png"
                        alt="Original artwork inspired by Baroque Art">
                </div>
            </div>

            <h3>Artwork Details</h3>
            <p><b>Artists:</b> Ilagan, Adrian Yuri & Laya, Drei Matthew</p>
            <p><b>Title:</b> The Crown of Strength</p>
            <p><b>Medium:</b> [Artwork medium]</p>
            <p><b>Historical Inspiration:</b> Baroque Art</p>

            <p>
                <b>Description:</b>
                This artwork represents strength, hope, and personal growth through symbols such as a golden crown, classical column, radiant sun, flowing red fabric, and laurel branch. Inspired by the Baroque period's dramatic lighting, rich colors, strong contrasts, and movement, it reinterprets traditional artistic characteristics through meaningful imagery. The composition reflects the struggles and pressures people face while pursuing their dreams, emphasizing self-worth, courage, and perseverance. Ultimately, it reminds viewers that true strength comes not from achieving success easily, but from overcoming challenges, learning from setbacks, and becoming stronger along the way.
            </p>

            <div class="mag-footnote">
                Artwork courtesy of the student artists. Used for educational purposes.
            </div>
        </article>
    `,
    12: `
        <article class="behind-smile">
            <p class="bs-kicker">Art Through History <span>·</span> 12</p>
            <h3 class="bs-title">Between Books and Screens</h3>
            <figure class="bs-art">
                <img src="images/contemporary/contemporary_8.jpg" alt="Between Books and Screens artwork">
                <figcaption>Study · Technology · Everyday life</figcaption>
            </figure>
            <div class="bs-caption">
                <p>This artwork shows the daily life of a modern student balancing studies, technology, and other responsibilities. Inspired by Fernando Amorsolo’s paintings of everyday Filipino life, we reinterpreted those ordinary scenes in a modern setting by adding a laptop, smartphone, books, and social media icons. It represents how students today rely on technology for learning and communication while dealing with schoolwork, distractions, and deadlines. We want viewers to understand that being a student is not always easy, and that we need to manage our time, stay focused, and balance technology with our studies.</p>
            </div>
        </article>
    `,
    12: `
        <article class="behind-smile">
            <p class="bs-kicker">Contemporary Art <span>·</span> 12</p>
            <h3 class="bs-title">Rooted, Yet Connected</h3>
            <figure class="bs-art">
                <img src="images/contemporary/contemporary_9.jpg" alt="Filipino woman in traditional clothing holding a smartphone in a rice field">
                <figcaption>Tradition · Identity · Progress</figcaption>
            </figure>
            <div class="bs-caption">
                <p>This artwork shows a Filipino in a salakot and patadyong standing in a rice field, holding a smartphone, with a coconut tree, a nipa hut, and a distant city skyline behind her. Inspired by Fernando Amorsolo’s rural landscapes, we borrowed his warm golden palette and glowing sun, then reinterpreted his timeless countryside by adding a glowing phone and making her the center of the scene. The phone stands out against the warm colors to show technology entering traditional spaces. It represents Filipino identity in an age of globalization, where we stay tied to our land while living in a connected world.</p>
            </div>
        </article>
    `,
    13: `
        <article class="behind-smile">
            <p class="bs-kicker">Contemporary Art <span>·</span> 13</p>
            <h3 class="bs-title">Life and Death</h3>
            <figure class="bs-art">
                <img src="images/contemporary/contemporary_10.jpg" alt="Artwork combining a human face and a skull">
                <figcaption>Life · Change · Mortality</figcaption>
            </figure>
            <div class="bs-caption">
                <p>This artwork shows the two sides of human existence: life and death. One half is a human face representing life, beauty, and identity, while the other half is a skull representing the reality that life does not last forever. Inspired by the Renaissance study of human anatomy by artists like Leonardo da Vinci, we reinterpreted it by combining both into one face to show the contrast. It reflects how everyone experiences aging, change, and eventually death, and how people can focus too much on appearance. We want viewers to remember that life is temporary, so we should appreciate it and value who we are, not just how we look.</p>
            </div>
        </article>
    `,
    14: THEN_NOW.left,
    15: THEN_NOW.right,
    16: `
        <article class="behind-smile">
            <p class="bs-kicker">Art Through History <span>·</span> 16</p>
            <h3 class="bs-title">Behind the Smile</h3>
            <figure class="bs-art">
                <img src="images/contemporary/contemporary_7.png" alt="Behind the Smile artwork">
                <figcaption>What we show · What we feel</figcaption>
            </figure>
            <div class="bs-caption">
                <p>This artwork shows the gap between what people display outside and what they feel inside. Inspired by Modern Art’s abstract forms, expressive colors, and emotional symbolism, we combined an anime-inspired portrait with a dark, chaotic background of tangled red lines. Instead of showing sadness in the face, we let the background reveal the hidden struggles of overthinking and social pressure. We want viewers to remember that not everyone who smiles is happy, so we should always be kind and understanding.</p>
            </div>
        </article>
    `,
    18: `
        <article class="mag-page reflection-page">
            <p class="bs-kicker">Looking Back <span>·</span> 18</p>
            <p class="mag-kicker"></p>
            <h2 class="mag-heading">Reflection</h2>
            <p class="mag-deck">Art connects what people valued then with what matters to us now.</p>

            <div class="intro-rule"></div>

            <p>
                Creating this magazine changed the way we look at art. We began
                by seeing art history as a series of periods and famous works.
                As we explored Greek and Roman ideals, Philippine art, and later
                movements, we saw how each artwork carries traces of its time:
                its beliefs, daily life, social changes, and ideas about identity.
            </p>

            <p>
                That connection became clearer as we made our own contemporary
                responses. In artworks about hidden emotions, student life,
                technology and tradition, and the meaning of life, we brought
                historical ideas into subjects we recognize today. We learned
                that influence does not mean copying. We can study how artists
                make choices, then reshape those ideas through our own experiences.
            </p>

            <p>
                Working together also showed us that art can hold many
                interpretations. Listening to one another helped us notice
                details and meanings we might have missed on our own. Researching,
                discussing, and revising our work took patience, but each step
                helped us express our ideas more clearly.
            </p>

            <p>
                We now see art as a conversation across time. It can preserve
                memory, question what we take for granted, and express ideas
                that are difficult to put into words. As we continue learning,
                we hope to look more carefully at the images around us and create
                with respect for the histories and people that shape them.
            </p>

            <div class="mag-footnote">The past gives us a starting point; our own experiences carry the conversation forward.</div>
        </article>
    `,
};

const sectionOf = (p) => SECTIONS.find((s) => p >= s.start && p <= s.end);

function buildPages() {
    const book = document.getElementById("book");

    for (let p = 1; p <= MAGAZINE.totalPages; p++) {
        const s = sectionOf(p);
        const el = document.createElement("div");

        el.className = "page";

        el.innerHTML = PAGE_HTML[p] || `
            <p class="label">${String(p).padStart(2, "0")} · ${s ? s.title : ""}</p>
            <h3>${s ? s.title : "Page " + p}</h3>
            ${ph("", "image")}
            <p>Page ${p} placeholder</p>
        `;

        book.appendChild(el);
    }
}

const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
let zi = 2;

// 2) VIEWER
const holder = document.getElementById("book-holder");
const area = document.getElementById("book-area");
let flip = null;
const sizeKey = { v: "" };

// Page size that fits the visible area, multiplied by the zoom level
function dims() {
    const r = area.getBoundingClientRect();
    const cs = getComputedStyle(area);
    const W = r.width - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const H = r.height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const portrait = W < 640;
    const z = ZOOMS[zi];
    const fitW = portrait ? W : W / 2;
    const pw = Math.floor(Math.max(120, Math.min(fitW, H * 0.75)) * z);
    const ph = Math.floor(pw * 4 / 3);
    return { pw, ph, bw: portrait ? pw : pw * 2, portrait };
}

function init(page = 0) {
    if (flip) { try { flip.destroy(); } catch (e) {} }
    holder.innerHTML = '<div id="book"></div>';
    buildPages();

    const d = dims();
    sizeKey.v = `${d.pw}x${d.portrait}`;
    holder.style.width = d.bw + "px";
    holder.style.height = d.ph + "px";

    flip = new St.PageFlip(document.getElementById("book"), {
        width: d.pw,
        height: d.ph,
        size: "fixed",
        showCover: true,
        usePortrait: true,
        showPageCorners: false,   // no page peeking when the cursor hovers
        flippingTime: 900,
        maxShadowOpacity: 0.45,
        mobileScrollSupport: false
    });
    // every page (cover included) uses the same soft, paper-like flip
    flip.loadFromHTML(document.querySelectorAll("#book .page"));
    flip.on("flip", (e) => sync(e.data));
    if (page > 0) flip.turnToPage(page);
    sync(page);
}

// Rail (contents sidebar) and thumbnail scrubber
const rail = document.getElementById("rail");

rail.innerHTML = `<h2>Contents <button class="rail-close" id="rail-close" aria-label="Close contents">×</button></h2>` +
    SECTIONS.map((s) => `
    <button data-page="${s.start}">
        ${s.title}
        <span>${s.start === s.end ? s.start : s.start + "–" + s.end}</span>
    </button>
`).join("");

const scrub = document.getElementById("scrubber");
const spreads = [1];
for (let p = 2; p <= MAGAZINE.totalPages; p += 2) spreads.push(p);

scrub.innerHTML = spreads.map((p) => `
    <button data-page="${p}" title="Page ${p}">${p}</button>
`).join("") + `<span class="page-count" id="count"></span>`;

const goTo = (page) => flip.turnToPage(page - 1);
const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

// CONTENTS: toggles the sidebar (open by default on laptops, a drawer on phones/tablets)
const contentsBtn = document.getElementById("contents");
function setRail(open) {
    document.body.classList.toggle("rail-open", open);
    contentsBtn.setAttribute("aria-pressed", open);
}
setRail(!isMobile());
contentsBtn.onclick = () => setRail(!document.body.classList.contains("rail-open"));
document.getElementById("rail-close").onclick = () => setRail(false);

document.querySelectorAll("#rail button[data-page], #scrubber button").forEach((b) => {
    b.addEventListener("click", () => {
        goTo(+b.dataset.page);
        if (isMobile()) setRail(false);
    });
});

document.getElementById("prev").onclick = () => flip.flipPrev();
document.getElementById("next").onclick = () => flip.flipNext();

// ZOOM: resizes the book itself inside a scrollable area, so nothing gets covered
const zIn = document.getElementById("zoomin");
const zOut = document.getElementById("zoomreset") && document.getElementById("zoomout");
const zReset = document.getElementById("zoomreset");

function setZoom(i) {
    zi = Math.min(Math.max(i, 0), ZOOMS.length - 1);
    zReset.textContent = Math.round(ZOOMS[zi] * 100) + "%";
    zIn.disabled = zi === ZOOMS.length - 1;
    zOut.disabled = zi === 0;
    init(flip ? flip.getCurrentPageIndex() : startIndex());
    area.scrollLeft = (area.scrollWidth - area.clientWidth) / 2;
    area.scrollTop = (area.scrollHeight - area.clientHeight) / 2;
}
zIn.onclick = () => setZoom(zi + 1);
zOut.onclick = () => setZoom(zi - 1);
zReset.onclick = () => setZoom(2);

// Re-fit when the area changes (sidebar, rotation, window resize)
let timer;
new ResizeObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        const d = dims();
        if (flip && `${d.pw}x${d.portrait}` !== sizeKey.v) init(flip.getCurrentPageIndex());
    }, 120);
}).observe(area);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") flip.flipPrev();
    if (e.key === "ArrowRight") flip.flipNext();
    if (e.key === "+" || e.key === "=") setZoom(zi + 1);
    if (e.key === "-") setZoom(zi - 1);
    if (e.key === "0") setZoom(2);
});

function sync(index) {
    const page = index + 1;
    const s = sectionOf(page);

    rail.querySelectorAll("button[data-page]").forEach((b) => {
        b.classList.toggle("active", s && +b.dataset.page === s.start);
    });

    scrub.querySelectorAll("button").forEach((b) => {
        const start = +b.dataset.page;
        b.classList.toggle("active", page === start || (page === start + 1 && start > 1));
    });

    document.getElementById("count").textContent = `Page ${page} of ${MAGAZINE.totalPages}`;
    history.replaceState(null, "", `#p=${page}`);
}

// Deep links: viewer.html#p=12 opens at page 12
function startIndex() {
    const m = location.hash.match(/p=(\d+)/);
    return (m ? Math.min(Math.max(+m[1], 1), MAGAZINE.totalPages) : 1) - 1;
}

document.getElementById("fullscreen").onclick = () => {
    document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen();
};

setZoom(2);

// Automatically adjust artwork frames based on image orientation
function adjustArtworkFrames() {
    document.querySelectorAll(".art-placeholder-frame img").forEach(img => {
        function setOrientation() {
            const frame = img.closest(".art-placeholder-frame");

            if (!frame || !img.naturalWidth || !img.naturalHeight) return;

            frame.classList.remove("is-landscape", "is-portrait");

            if (img.naturalWidth >= img.naturalHeight) {
                frame.classList.add("is-landscape");
            } else {
                frame.classList.add("is-portrait");
            }
        }

        if (img.complete) {
            setOrientation();
        } else {
            img.addEventListener("load", setOrientation, { once: true });
        }
    });
}

adjustArtworkFrames();
