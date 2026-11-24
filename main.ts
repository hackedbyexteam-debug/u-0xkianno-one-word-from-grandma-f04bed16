// One Word From Grandma — "Frankenstein".
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) reads as the single word a grandma would text about AI,
// (2) real grandma texting voice, warm and a little baffled, (3) funny in
// one word with no caption, (4) tied to AI/robots/machines, (5) fresh rather
// than obvious, instantly readable.
//
// Candidates: Frankenstein, Contraption, Witchcraft, Roomba, Sorcery,
// Robit, Terminator, Skynet, Gadget, Whatchamacallit, Alexa, Voodoo,
// Beepboop, Doohickey.
//
// Why Frankenstein wins:
// - Criterion 1+2: a grandma who has heard of Frankenstein's monster texts
//   exactly this when the grandkids explain AI: scientists built a creature
//   that might turn on them. Warm, baffled, instantly her voice.
// - Criterion 3: the joke lands in one word with no caption — AI as the
//   man-made monster is a complete punchline.
// - Criterion 4: tied to AI by the created-being metaphor, not a word that
//   would fit any subject (that kills Whatchamacallit/Doohickey/Gadget).
// - Criterion 5: fresh — the field will be full of Skynet and Terminator
//   (both rejected: Skynet is THE obvious pick, Terminator second); nobody
//   else's grandma texts Frankenstein.
// Rejected runners-up: Contraption (warmest voice, but only gentle humour,
// no real punch); Roomba (fresh and robot-tied, but reads as a brand she
// owns more than her word about AI); Witchcraft (funny, but fits any
// mysterious thing, weak on criterion 4).
//
// Gate: exactly 1 word, 12 characters (limit 1-30). No punctuation.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Frankenstein`;

// Competition gate: the entry must be 1-30 characters. Fail loudly instead
// of writing an invalid entry if ENTRY is ever edited past the limit.
const MAX_CHARS = 30;
if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}
console.error(`entry: ${ENTRY.length} chars`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
