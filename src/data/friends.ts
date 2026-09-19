// =====================================================================
// VRIENDEN DATA & HAND-AFBEELDINGEN
// =====================================================================
// Om een hand aan te passen:
// 1. Plaats een PNG van de hand in 'src/assets/hands/'
// 2. Importeer de afbeelding hieronder (bijv. import handHelena from "@/assets/hands/hand-helena.png")
// 3. Wijs de afbeelding toe aan de gewenste vriend via het veld 'handImage'
// =====================================================================

import juliaHand from "@/assets/creation-of-adam-hand.png";
import defaultHand from "@/assets/god-hand.png";

// Hand-afbeeldingen per vriend:
import handHelena from "@/assets/hands/hand-helena.png";
import handSimon from "@/assets/hands/hand-simon.png";
import handYoram from "@/assets/hands/hand-yoram.png";
import handDavid from "@/assets/hands/hand-david.png";
import handEva from "@/assets/hands/hand-eva.png";
import handFelix from "@/assets/hands/hand-felix.png";

export { juliaHand, defaultHand };

export interface Friend {
  id: number;
  name: string;
  discipline: string;
  bio: string;
  link: string;
  color: string;
  scale: number;
  rotation: number;
  /** Afbeelding van de hand voor deze specifieke vriend */
  handImage: string;
}

export const friends: Friend[] = [
  {
    id: 1,
    name: "Helena Orion",
    discipline: "Photography & Visual Poetry",
    bio: "Working under the name H.ori(z)on, Helena explores the boundaries of landscape and human presence. Her work, characterized by poetic and melancholic imagery, invites the viewer to look beyond the horizon. \"Beyond the crooked horizon breathes a being just like you\" reflects her fascination with the hidden souls in nature and portraits.",
    link: "https://www.instagram.com/helena.orion/",
    color: "#E07A5F",
    scale: 0.9,
    rotation: -10,
    handImage: handHelena, // <-- Pas hier de hand aan
  },
  {
    id: 2,
    name: "Simon Ruis",
    discipline: "Illustration & Murals",
    bio: "Based in Utrecht, Simon is an illustrator and artist known for his clean, colorful, and detailed visual style. He frequently creates illustrations for literary platforms like De Optimist, designs independent publications with Mold Publications, and paints vibrant murals.",
    link: "https://www.instagram.com/simonruisc/",
    color: "#F4A261",
    scale: 1.05,
    rotation: 5,
    handImage: handSimon, // <-- Pas hier de hand aan
  },
  {
    id: 3,
    name: "Yoram van Leeuwen",
    discipline: "Visual Arts & Illustration",
    bio: "Yoram's work explores mystical, abstract, and cosmic themes, often using high-contrast drawings and visual symbolism. Under the handle @yoram_art, he creates atmospheric artwork inspired by cycles of light and darkness, reflecting a fascination with contrast and the quiet mysteries of the night.",
    link: "https://www.instagram.com/yoram_art/",
    color: "#E9C46A",
    scale: 0.95,
    rotation: -5,
    handImage: handYoram, // <-- Pas hier de hand aan
  },
  {
    id: 4,
    name: "David Wood",
    discipline: "Woodworking",
    bio: "Crafts minimalist furniture from reclaimed timber. David believes in letting the material speak, highlighting the natural imperfections and history of each piece of wood.",
    link: "#",
    color: "#2A9D8F",
    scale: 1.1,
    rotation: 15,
    handImage: handDavid, // <-- Pas hier de hand aan
  },
  {
    id: 5,
    name: "Eva Sculptor",
    discipline: "Bronze Sculpture",
    bio: "Explores the human form through dynamic bronze casting. Eva's sculptures capture movement and emotion in solid metal, creating a striking tension.",
    link: "#",
    color: "#264653",
    scale: 0.85,
    rotation: -15,
    handImage: handEva, // <-- Pas hier de hand aan
  },
  {
    id: 6,
    name: "Felix Potter",
    discipline: "Porcelain",
    bio: "Delicate and translucent porcelain works that challenge the limits of the material. Felix combines traditional wheel-throwing with innovative 3D printing techniques.",
    link: "#",
    color: "#8AB17D",
    scale: 1,
    rotation: 8,
    handImage: handFelix, // <-- Pas hier de hand aan
  },
];
