// Simple Panchatantra data
const books = [
  {
    id: "mitra-bheda",
    title: "Mitra Bheda",
    tagline: "Loss of Friends",
    color: "linear-gradient(135deg, #ff7f7f, #ff9c6b)",
    stories: [
      {
        id: "lion-and-bull",
        title: "The Lion and the Bull",
        length: "3 min read",
        body:
          "Once, a mighty lion ruled a forest. One day a strong bull wandered in and became the lion’s friend. The jackals, who were the lion’s old advisers, became jealous and scared. They whispered lies in the lion’s ears: 'The bull wants your throne!' At the same time, they told the bull: 'The lion plans to eat you!' Filled with fear and anger, the two friends fought. The lion killed the bull, but lost a loyal friend and his own peace of mind.",
        moral: "Never let gossip and jealousy destroy true friendship."
      },
      {
        id: "monkey-and-wedge",
        title: "The Monkey and the Wedge",
        length: "2 min read",
        body:
          "Carpenters were building a temple. They left a log half-split with a wedge inside. A curious monkey tried to sit between the split log. As he played, he pulled out the wedge. The log snapped shut and trapped his legs. The monkey cried in pain, unable to move.",
        moral: "Do not meddle with things you do not understand."
      }
    ]
  },
  {
    id: "mitra-labha",
    title: "Mitra Labha",
    tagline: "Gaining Friends",
    color: "linear-gradient(135deg, #7fd1ff, #7f9fff)",
    stories: [
      {
        id: "dove-and-mouse",
        title: "The Doves, the Mouse and the Net",
        length: "3 min read",
        body:
          "A flock of doves was caught in a hunter’s net. Their leader told them, 'Let us all flap our wings together.' They lifted the net into the air and flew away. They landed near a mouse who was a friend of the dove king. The mouse quickly nibbled the strings and freed them all.",
        moral: "Working together and trusting good friends can solve big problems."
      }
    ]
  },
  {
    id: "kakolukiyam",
    title: "Kakolukiyam",
    tagline: "War & Peace",
    color: "linear-gradient(135deg, #6be3c8, #5fc0ff)",
    stories: [
      {
        id: "crows-and-owls",
        title: "The Crows and the Owls",
        length: "4 min read",
        body:
          "Crows and owls were enemies. The owls were stronger and hunted the crows at night. One clever crow pretended to join the owls and praised them. Slowly he learned their hiding place. One day, while the owls were away hunting, the crow led his flock to their cave and blocked its entrance with sticks and straw. When the owls returned, they could not enter and were defeated.",
        moral: "Wisdom and planning can defeat even a stronger enemy."
      }
    ]
  }
];

const bookGrid = document.getElementById("bookGrid");
const storySection = document.getElementById("storySection");
const selectedBookTitle = document.getElementById("selectedBookTitle");
const storyList = document.getElementById("storyList");
const randomStoryBtn = document.getElementById("randomStoryBtn");

const storyModal = document.getElementById("storyModal");
const closeModalBtn = document.getElementById("closeModal");
const storyTitleEl = document.getElementById("storyTitle");
const storyBodyEl = document.getElementById("storyBody");
const storyMoralEl = document.getElementById("storyMoral");

let currentBook = null;

// Render book cards
function renderBooks() {
  bookGrid.innerHTML = "";
  books.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.style.backgroundImage = book.color;
    card.innerHTML = `
      <span class="label">Kingdom</span>
      <h3>${book.title}</h3>
      <small>${book.tagline}</small>
      <small>${book.stories.length} stories</small>
    `;
    card.addEventListener("click", () => selectBook(book.id));
    bookGrid.appendChild(card);
  });
}

// Show stories for a book
function selectBook(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;
  currentBook = book;
  selectedBookTitle.textContent = book.title + " – Stories";
  storySection.hidden = false;

  storyList.innerHTML = "";
  book.stories.forEach((story) => {
    const item = document.createElement("div");
    item.className = "story-item";
    item.innerHTML = `
      <div>
        <div class="story-item-title">${story.title}</div>
        <div class="story-item-meta">${story.length}</div>
      </div>
      <div>▶</div>
    `;
    item.addEventListener("click", () => openStoryModal(story));
    storyList.appendChild(item);
  });

  storySection.scrollIntoView({ behavior: "smooth" });
}

function openStoryModal(story) {
  storyTitleEl.textContent = story.title;
  storyBodyEl.textContent = story.body;
  storyMoralEl.textContent = story.moral;
  storyModal.hidden = false;
}

function closeStoryModal() {
  storyModal.hidden = true;
}

// Simple “Story of the Day”
function showRandomStory() {
  const allStories = books.flatMap((b) =>
    b.stories.map((s) => ({ ...s, bookTitle: b.title }))
  );
  const random = allStories[Math.floor(Math.random() * allStories.length)];
  storyTitleEl.textContent = random.title + " (" + random.bookTitle + ")";
  storyBodyEl.textContent = random.body;
  storyMoralEl.textContent = random.moral;
  storyModal.hidden = false;
}

// Event listeners
closeModalBtn.addEventListener("click", closeStoryModal);
storyModal.addEventListener("click", (e) => {
  if (e.target === storyModal) closeStoryModal();
});
randomStoryBtn.addEventListener("click", showRandomStory);

// Init
renderBooks();
