// THEN & NOW: pages 14 (left) and 15 (right)
// Historical: Mona Lisa, Leonardo da Vinci   |   Contemporary: Dropping a Han Dynasty Urn, Ai Weiwei
// Loaded before flipbook.js, which reads THEN_NOW.left / THEN_NOW.right.
// Styles live in css/thenandnow.css.

const TN_IMG = "images/then-and-now/";

const TN_HEAD = (note = "") => `
  <thead>
    <tr>
      <th scope="col" class="tn-aspect">Aspect${note}</th>
      <th scope="col">Historical Artwork<span>Mona Lisa</span></th>
      <th scope="col">Contemporary Artwork<span>Dropping a Han Dynasty Urn</span></th>
    </tr>
  </thead>`;

const THEN_NOW = {
  // ---------- PAGE 14 ----------
  left: `
  <div class="tn">
    <p class="bs-kicker">Then &amp; Now <span>·</span> 14</p>
    <h2 class="tn-title">Then &amp; Now</h2>
    <p class="tn-deck">Five centuries apart, two artists ask what makes a work, or an object, worth keeping.</p>

    <div class="tn-pair">
      <figure class="tn-then">
        <div class="tn-frame">
          <img src="${TN_IMG}mona-lisa.jpg" alt="Mona Lisa by Leonardo da Vinci, an oil portrait of a woman with a faint smile and a hazy landscape behind her">
          <span class="tn-tag">Then</span>
        </div>
        <figcaption><b>Mona Lisa</b> · c. 1503–1506</figcaption>
      </figure>
      <figure class="tn-now">
        <div class="tn-frame">
          <img src="${TN_IMG}dropping-a-han-dynasty-urn.jpg" alt="Three black-and-white photographs of Ai Weiwei holding a Han dynasty urn, dropping it, and standing beside the broken pieces">
          <span class="tn-tag">Now</span>
        </div>
        <figcaption><b>Dropping a Han Dynasty Urn</b> · 1995</figcaption>
      </figure>
    </div>

    <table class="tn-table">
      ${TN_HEAD()}
      <tbody>
        <tr><th scope="row">Artist</th>
          <td>Leonardo da Vinci (Italian)</td>
          <td>Ai Weiwei (born in Beijing, 1957)</td></tr>
        <tr><th scope="row">Period</th>
          <td>Italian High Renaissance, c. 1503–1506</td>
          <td>Contemporary art, 1995</td></tr>
        <tr><th scope="row">Medium</th>
          <td>Oil on poplar panel, 77 × 53 cm</td>
          <td>Three gelatin silver prints (black-and-white photographs) of a performance</td></tr>
        <tr><th scope="row">Subject / Theme</th>
          <td>Portrait of a woman, thought to be Lisa Gherardini, wife of Francesco del Giocondo</td>
          <td>The artist drops a 2,000-year-old urn and it shatters; tradition challenged by new values</td></tr>
        <tr><th scope="row">Style</th>
          <td>Renaissance naturalism with <i>sfumato</i> (thin, translucent layers for soft, smoky transitions)</td>
          <td>Conceptual art; Ai calls it a “cultural readymade.” Photography and performance in one</td></tr>
      </tbody>
    </table>

    <p class="tn-credit">Images: <i>Mona Lisa</i>, public domain. <i>Dropping a Han Dynasty Urn</i> © Ai Weiwei, courtesy Ai Weiwei Studio. Used for school purposes.</p>
  </div>`,

  // ---------- PAGE 15 ----------
  right: `
  <div class="tn">
    <p class="bs-kicker">Then &amp; Now <span>·</span> 15</p>

    <table class="tn-table">
      ${TN_HEAD()}
      <tbody>
        <tr><th scope="row">Elements &amp; Principles</th>
          <td>Soft light and shadow; earthy ochre, green and brown. Balance and harmony from a pyramid-shaped pose, with a hazy landscape for depth</td>
          <td>Black-and-white contrast, with the urn as focal point. Three frames show time and movement; the repeated figure sets a rhythm</td></tr>
        <tr><th scope="row">Message</th>
          <td>An ambiguous smile that people have debated for centuries</td>
          <td>Tradition is challenged by new values; an object has power only because people invest value in it</td></tr>
        <tr><th scope="row">Cultural Context</th>
          <td>Renaissance Italy, which joined scientific observation with painting</td>
          <td>China in the 1990s, rushing toward modernity; echoes the Cultural Revolution’s push to destroy the old to build the new</td></tr>
        <tr class="tn-merge"><th scope="row">Similarities</th>
          <td colspan="2">Both are famous works that people keep interpreting in different ways, and in both a person looks straight at the viewer. Both also ask why we treat some things as precious.</td></tr>
        <tr class="tn-merge"><th scope="row">Differences</th>
          <td colspan="2">One preserves a tradition, the other breaks one. The <i>Mona Lisa</i> is kept behind protective glass at the Louvre, while the urn was destroyed and survives only as photographs. A painting made over years versus an act captured in three frames.</td></tr>
      </tbody>
    </table>

    <section class="tn-analysis">
      <h3>Analysis: how did art change?</h3>
      <p><b>Meaning.</b> The <i>Mona Lisa</i> invites us to wonder about one person’s mystery. Ai’s work asks why a society treats old objects as sacred, and who decides their value.</p>
      <p><b>Purpose.</b> Leonardo painted a Florentine merchant’s wife to capture beauty and lifelike presence. Ai made a statement about heritage in a China rushing toward modernity. Many viewers find destroying an artifact disrespectful, and that reaction is part of the point.</p>
      <p><b>Materials.</b> Oil on a wooden panel became photographs of a real 2,000-year-old urn.</p>
      <p><b>Methods.</b> Leonardo built soft transitions over years with thin layers of translucent paint. Ai’s work is a quick act and its record; by photographing the destruction, he changed what the urn means.</p>
      <p class="tn-close">Art moved from making an object with a brush to making an idea or an action.</p>
    </section>
  </div>`
};
