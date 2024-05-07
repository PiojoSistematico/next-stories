const users = [
  {
    id: "1",
    name: "Alice",
    stories: ["1", "2", "3", "4", "5"],
  },
  {
    id: "2",
    name: "Bob",
    stories: ["6", "7", "8"],
  },
  {
    id: "3",
    name: "Charlie",
    stories: ["9", "10"],
  },
  {
    id: "4",
    name: "Diana",
    stories: ["11", "12"],
  },
  {
    id: "5",
    name: "Eve",
    stories: ["13", "14", "15", "16", "17", "18", "19", "20"],
  },
];

const stories = [
  {
    id: "1",
    authorId: "1",
    title: "The Enchanted Forest",
    body: "Deep in the heart of the forest...",
    tags: ["fantasy", "adventure"],
    views: 100,
  },
  {
    id: "2",
    authorId: "1",
    title: "Lost in Time",
    body: "A mysterious portal opened...",
    tags: ["time-travel", "mystery"],
    views: 100,
  },
  {
    id: "3",
    authorId: "1",
    title: "The Secret Garden",
    body: "Behind the old mansion, there was a hidden paradise...",
    tags: ["mystery", "nature"],
    views: 100,
  },
  {
    id: "4",
    authorId: "1",
    title: "Beyond the Stars",
    body: "In a distant galaxy...",
    tags: ["space", "sci-fi"],
    views: 100,
  },
  {
    id: "5",
    authorId: "1",
    title: "The Legend of the Phoenix",
    body: "In ancient times...",
    tags: ["legend", "mythology"],
    views: 100,
  },
  {
    id: "6",
    authorId: "2",
    title: "The Haunted Mansion",
    body: "It was a dark and stormy night...",
    tags: ["horror", "mystery"],
    views: 100,
  },
  {
    id: "7",
    authorId: "2",
    title: "The Curse of the Ghost Ship",
    body: "Sailing on a moonless night...",
    tags: ["ghosts", "sea"],
    views: 100,
  },
  {
    id: "8",
    authorId: "2",
    title: "Whispers in the Dark",
    body: "In the depths of the forest...",
    tags: ["thriller", "mystery"],
    views: 100,
  },
  {
    id: "9",
    authorId: "3",
    title: "Echoes of Atlantis",
    body: "Beneath the waves...",
    tags: ["mythology", "adventure"],
    views: 100,
  },
  {
    id: "10",
    authorId: "3",
    title: "The Forbidden Temple",
    body: "Hidden in the jungle...",
    tags: ["adventure", "mystery"],
    views: 100,
  },
  {
    id: "11",
    authorId: "4",
    title: "A Journey to Remember",
    body: "Across vast landscapes...",
    tags: ["journey", "adventure"],
    views: 100,
  },
  {
    id: "12",
    authorId: "4",
    title: "Whispers of the Wind",
    body: "In the quiet meadows...",
    tags: ["nature", "poetry"],
    views: 100,
  },
  {
    id: "13",
    authorId: "5",
    title: "Into the Unknown",
    body: "Stepping into the void...",
    tags: ["exploration", "mystery"],
    views: 100,
  },
  {
    id: "14",
    authorId: "5",
    title: "The Last Stand",
    body: "Facing insurmountable odds...",
    tags: ["war", "drama"],
    views: 100,
  },
  {
    id: "15",
    authorId: "5",
    title: "Dreams of Tomorrow",
    body: "In a world yet to be...",
    tags: ["future", "sci-fi"],
    views: 100,
  },
  {
    id: "16",
    authorId: "5",
    title: "Shadows of the Past",
    body: "Haunted by memories...",
    tags: ["memory", "psychological"],
    views: 100,
  },
  {
    id: "17",
    authorId: "5",
    title: "Serenade of the Night",
    body: "Under the starry sky...",
    tags: ["romance", "night"],
    views: 100,
  },
  {
    id: "18",
    authorId: "5",
    title: "The Art of Silence",
    body: "In the tranquil moments...",
    tags: ["peace", "serenity"],
    views: 100,
  },
  {
    id: "19",
    authorId: "5",
    title: "Whispers of the Forest",
    body: "Amidst the rustling leaves...",
    tags: ["nature", "whisper"],
    views: 100,
  },
  {
    id: "20",
    authorId: "5",
    title: "Echoes of Eternity",
    body: "In the passage of time...",
    tags: ["time", "eternity"],
    views: 100,
  },
];

/* "Adventure and Exploration: Includes tags like "adventure," "journey," and "exploration."
    Mystery and Intrigue: Encompasses tags such as "mystery," "thriller," and "enigma."
    Fantasy and Mythology: Covers "fantasy," "legend," "mythology," and "magic."
    Science Fiction and Futurism: Involves "sci-fi," "future," and "space."
    Horror and Supernatural: Encompasses "horror," "ghosts," "haunted," and "supernatural."
    Nature and Wilderness: Includes "nature," "forest," "sea," and "wilderness."
    Romance and Relationships: Encompasses "romance," "love," "heartbreak," and "relationships."
    War and Conflict: Covers "war," "battle," "struggle," and "conflict."
    Philosophical and Psychological: Involves "psychological," "philosophy," and "introspection."
    Time and Eternity: Encompasses "time," "eternity," "past," "future," and "time-travel."" */

const categories = [
  "Adventure and Exploration",
  "Mystery and Intrigue",
  "Fantasy and Mythology",
  "Science Fiction and Futurism",
  "Horror and Supernatural",
  "Nature and Wilderness",
  "Romance and Relationships",
  "War and Conflict",
  "Philosophical and Psychological",
  "Time and Eternity",
];

module.exports = {
  users,
  stories,
  categories,
};
