const menus = [
  {
    title: "Cozy Mystery Night",
    desc: "Comfort food perfect for curling up with a whodunit.",
    items: ["Butternut Squash Soup", "Herb-Roasted Chicken", "Warm Apple Crumble"]
  },
  {
    title: "Romantic Poetry Supper",
    desc: "Delicate flavors and a touch of candlelight.",
    items: ["Goat Cheese Salad", "Pan-Seared Salmon with Lemon Beurre Blanc", "Dark Chocolate Mousse"]
  },
  {
    title: "Adventure Travel Feast",
    desc: "Bold, spicy dishes inspired by far-off places.",
    items: ["Spiced Chickpea Stew", "Coconut Rice", "Grilled Plantains"]
  },
  {
    title: "Classic Library Tea",
    desc: "Light bites and warm tea for a quiet evening.",
    items: ["Cucumber Sandwiches", "Scones with Jam", "Chamomile Tea"]
  }
];

function createCard(menu) {
  const card = document.createElement('div');
  card.className = 'menu-card';

  const h3 = document.createElement('h3');
  h3.textContent = menu.title;
  card.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = menu.desc;
  card.appendChild(p);

  const ul = document.createElement('ul');
  ul.className = 'items';
  menu.items.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);
  });
  card.appendChild(ul);

  return card;
}

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('generate-button');
  const grid = document.getElementById('menu-grid');

  btn.addEventListener('click', () => {
    // Clear grid
    grid.innerHTML = '';
    const chosen = shuffle(menus).slice(0, 3);
    chosen.forEach(m => grid.appendChild(createCard(m)));
  });
});
