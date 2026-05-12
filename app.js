const storageKey = 'recipePlatformRecipes';
let currentUser = null;

function createSampleRecipes() {
  return [
    {
      id: crypto.randomUUID(),
      title: 'Jollof Rice',
      author: 'Nigerian Kitchen',
      category: 'Main',
      prepTime: '50 min',
      servings: '4',
      ingredients: 'Rice, tomatoes, red pepper, onions, chicken stock, thyme, bay leaves, curry powder, oil',
      instructions:
        'Blend tomatoes, peppers and onions into a smooth puree. Fry onions, add tomato blend and seasonings, then stir in rice and stock. Simmer until rice is cooked and rich in flavor.',
      image: 'https://images.unsplash.com/photo-1603079157432-21929542b58f?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Egusi Soup',
      author: 'Mama Lekan',
      category: 'Soup',
      prepTime: '45 min',
      servings: '5',
      ingredients: 'Egusi seeds, spinach, palm oil, onion, crayfish, stock, meat, seasoning cubes',
      instructions:
        'Blend egusi with water until grainy. Fry onions in palm oil, add ground egusi and stir until toasted. Add meat stock and vegetables, then simmer until thick and fragrant.',
      image: 'https://images.unsplash.com/photo-1546367579-52f12a9a54f8?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 4, 5, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Pounded Yam and Egusi',
      author: 'Yam Lovers',
      category: 'Main',
      prepTime: '40 min',
      servings: '4',
      ingredients: 'Yam, egusi seeds, spinach, palm oil, smoked fish, seasoning',
      instructions:
        'Boil yam and pound until smooth and stretchy. Prepare egusi soup with melon seeds, palm oil and greens, then serve hot with the pounded yam.',
      image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb4a?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 5, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Suya',
      author: 'Spice Master',
      category: 'Street Food',
      prepTime: '35 min',
      servings: '6',
      ingredients: 'Beef, suya spice, peanut powder, oil, onions, tomatoes',
      instructions:
        'Slice beef thinly and coat with suya spice mixture. Grill over medium heat until charred. Serve with sliced onions, tomatoes, and extra spice.',
      image: 'https://images.unsplash.com/photo-1528758015911-0aba2f7ecaec?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 5, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Akara (Bean Cakes)',
      author: 'Snack Queen',
      category: 'Breakfast',
      prepTime: '30 min',
      servings: '10',
      ingredients: 'Black-eyed peas, onion, pepper, salt, oil for frying',
      instructions:
        'Soak and peel beans, then blend with onions and pepper into a batter. Fry spoonfuls in hot oil until golden and crisp on both sides.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Moi Moi',
      author: 'Home Chef',
      category: 'Side',
      prepTime: '1 hr',
      servings: '8',
      ingredients: 'Beans, red pepper, onions, vegetable oil, eggs, fish, seasoning cubes',
      instructions:
        'Blend peeled beans with peppers and onions into a smooth batter. Mix in oil, eggs and fillings, pour into containers and steam until set.',
      image: 'https://images.unsplash.com/photo-1585076554762-322d7f1ad8f8?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Nigerian Chicken Pepper Soup',
      author: 'Soup Lady',
      category: 'Soup',
      prepTime: '35 min',
      servings: '4',
      ingredients: 'Chicken, pepper soup spice, onions, peppers, lemon, seasoning',
      instructions:
        'Boil chicken with onions and seasoning. Add pepper soup spice and chopped peppers, simmer until tender and aromatic.',
      image: 'https://images.unsplash.com/photo-1512058564366-c9e3c4e62015?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 5, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Fried Plantain (Dodo)',
      author: 'Sweet Fry',
      category: 'Side',
      prepTime: '20 min',
      servings: '3',
      ingredients: 'Ripe plantains, oil, salt',
      instructions:
        'Peel and slice plantains diagonally. Fry in hot oil until caramelized and golden, then drain and season with a pinch of salt.',
      image: 'https://images.unsplash.com/photo-1518552781972-48cc47e0be44?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Coconut Rice',
      author: 'Island Flavors',
      category: 'Main',
      prepTime: '35 min',
      servings: '4',
      ingredients: 'Rice, coconut milk, water, salt, onions, peas',
      instructions:
        'Heat oil, fry onions then stir in rice. Add coconut milk, water, salt and peas, then cook until rice absorbs the flavors and is tender.',
      image: 'https://images.unsplash.com/photo-1529692236671-f1b7c6b69554?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Ofada Rice and Ayamase',
      author: 'Owambe Chef',
      category: 'Main',
      prepTime: '1 hr',
      servings: '5',
      ingredients: 'Ofada rice, green bell peppers, onions, locust beans, smoked fish, palm oil',
      instructions:
        'Cook Ofada rice until soft. Blend green peppers and onions, fry with locust beans and smoked fish in palm oil to make the spicy ayamase sauce.',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Beans Porridge (Ewa Riro)',
      author: 'Comfort Food',
      category: 'Main',
      prepTime: '1 hr',
      servings: '5',
      ingredients: 'Honey beans, palm oil, onions, crayfish, pepper, smoked fish',
      instructions:
        'Soak beans then cook until soft. Fry onions and seasonings in palm oil, add to the beans and simmer until thick and richly flavored.',
      image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 5, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Yam Porridge (Asaro)',
      author: 'Yam House',
      category: 'Main',
      prepTime: '45 min',
      servings: '4',
      ingredients: 'Yam, tomatoes, peppers, onions, palm oil, spinach, seasoning cubes',
      instructions:
        'Cook yam cubes in blended tomatoes and peppers with seasoning. Mash some yam pieces, add vegetables and simmer until the porridge is creamy.',
      image: 'https://images.unsplash.com/photo-1598514982839-33ffebb3c826?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 4, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Efo Riro',
      author: 'Leafy Kitchen',
      category: 'Vegetable',
      prepTime: '40 min',
      servings: '4',
      ingredients: 'Spinach, palm oil, beef, smoked fish, crayfish, red peppers, onions',
      instructions:
        'Cook meat and fish with spices. Add blended pepper mix, then stir in spinach and simmer until the leafy stew is rich and fragrant.',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Banga Soup',
      author: 'Delta Feast',
      category: 'Soup',
      prepTime: '50 min',
      servings: '5',
      ingredients: 'Palm nut fruit, stockfish, beef, periwinkle, spices, dried fish',
      instructions:
        'Extract juice from palm nuts, then simmer with meats and spices until thick. Add seafood and cook until the seafood is tender.',
      image: 'https://images.unsplash.com/photo-1481931715705-36f6e8e7d5bc?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 5, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Nkwobi',
      author: 'Party House',
      category: 'Snack',
      prepTime: '45 min',
      servings: '4',
      ingredients: 'Cow foot, palm oil, potash, onions, utazi leaves, seasonings',
      instructions:
        'Boil cow foot until tender. Mix palm oil with potash and spices, then coat the boiled meat and serve with sliced onions and utazi leaves.',
      image: 'https://images.unsplash.com/photo-1507248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Oha Soup',
      author: 'Winter Green',
      category: 'Soup',
      prepTime: '50 min',
      servings: '5',
      ingredients: 'Oha leaves, cocoyam paste, palm oil, stockfish, meat, crayfish, pepper',
      instructions:
        'Cook meats and fish in stock. Add cocoyam paste to thicken, then stir in oha leaves and simmer until the soup is smooth and aromatic.',
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 5, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Nigerian Fish Stew',
      author: 'Coastal Chef',
      category: 'Main',
      prepTime: '40 min',
      servings: '4',
      ingredients: 'Fish, tomatoes, peppers, onions, palm oil, spices, stock cubes',
      instructions:
        'Fry tomatoes and pepper blend in palm oil. Add fish pieces and simmer gently until the stew thickens and the fish is cooked through.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Nigerian Fried Rice',
      author: 'Rice House',
      category: 'Main',
      prepTime: '35 min',
      servings: '4',
      ingredients: 'Rice, mixed vegetables, carrots, peas, chicken stock, curry powder, oil',
      instructions:
        'Cook rice in seasoned stock. Stir-fry vegetables and spices, then mix with the rice until evenly seasoned and fluffy.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Gizdodo',
      author: 'Yam Room',
      category: 'Side',
      prepTime: '30 min',
      servings: '4',
      ingredients: 'Gizzard, plantains, peppers, onions, seasoning, oil',
      instructions:
        'Fry plantains and gizzard separately until crisp. Sauté onions and peppers, then combine with the fried gizzard and plantains for a spicy side dish.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 4, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Peppered Snails',
      author: 'Delicacy',
      category: 'Snack',
      prepTime: '45 min',
      servings: '4',
      ingredients: 'Snails, onions, pepper mix, tomato paste, spices, oil',
      instructions:
        'Boil snails until tender. Fry pepper mix and tomato paste, then add cooked snails and simmer until the flavors are absorbed.',
      image: 'https://images.unsplash.com/photo-1512058564366-c9e3c4e62015?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 4, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Ogbono Soup',
      author: 'African Roots',
      category: 'Soup',
      prepTime: '50 min',
      servings: '5',
      ingredients: 'Ogbono seeds, beef, stockfish, palm oil, spinach, spices',
      instructions:
        'Blend ogbono seeds and stir into boiling stock until slimy. Add meats and vegetables, then simmer until the soup thickens beautifully.',
      image: 'https://images.unsplash.com/photo-1529692236671-f1b7c6b69554?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Beans and Dodo',
      author: 'Classic Plate',
      category: 'Main',
      prepTime: '1 hr',
      servings: '4',
      ingredients: 'Black-eyed peas, palm oil, onions, pepper, plantains, spices',
      instructions:
        'Cook beans until soft and seasoned. Fry ripe plantains until golden, then serve them alongside the rich beans porridge.',
      image: 'https://images.unsplash.com/photo-1540193421604-4e4fe1d88172?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 5, 5],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Kelewele',
      author: 'Snack Time',
      category: 'Side',
      prepTime: '25 min',
      servings: '3',
      ingredients: 'Plantains, ginger, garlic, chili powder, salt, oil',
      instructions:
        'Cube ripe plantains and toss with ginger, garlic, chili and salt. Fry until crisp for a spicy sweet side that pairs well with Nigerian meals.',
      image: 'https://images.unsplash.com/photo-1540193421604-4e4fe1d88172?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 4, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Peppered Goat Meat',
      author: 'Savory Bites',
      category: 'Main',
      prepTime: '55 min',
      servings: '5',
      ingredients: 'Goat meat, onions, peppers, tomatoes, seasoning cubes, palm oil',
      instructions:
        'Cook goat meat until tender. Prepare a spicy tomato-pepper sauce, then add the meat and simmer until the flavors are deeply absorbed.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      ratings: [5, 5, 4],
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Egg and Plantain Stir',
      author: 'Breakfast Hub',
      category: 'Breakfast',
      prepTime: '20 min',
      servings: '3',
      ingredients: 'Ripe plantains, eggs, onions, tomatoes, oil, seasoning',
      instructions:
        'Fry plantains until golden, then remove. Scramble eggs with sautéed onions and tomatoes, and fold the plantains back in for a sweet-savory breakfast dish.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      ratings: [4, 5, 4],
      createdAt: new Date().toISOString(),
    },
  ];
}

function ensureRecipeImages(recipes) {
  const samples = createSampleRecipes();
  const sampleMap = samples.reduce((map, recipe) => {
    map[recipe.title] = recipe;
    return map;
  }, {});
  let changed = false;
  recipes.forEach((recipe) => {
    const sample = sampleMap[recipe.title];
    if (sample && sample.image && recipe.image !== sample.image) {
      recipe.image = sample.image;
      changed = true;
    }
  });
  if (changed) {
    saveRecipes(recipes);
  }
  return recipes;
}

function getRecipes() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) {
    const sample = createSampleRecipes();
    localStorage.setItem(storageKey, JSON.stringify(sample));
    return sample;
  }
  try {
    let parsed = JSON.parse(stored) || [];
    if (!Array.isArray(parsed) || parsed.length < 18) {
      const sample = createSampleRecipes();
      saveRecipes(sample);
      return sample;
    }
    parsed = ensureRecipeImages(parsed);
    return parsed;
  } catch (error) {
    const sample = createSampleRecipes();
    saveRecipes(sample);
    return sample;
  }
}

function saveRecipes(recipes) {
  localStorage.setItem(storageKey, JSON.stringify(recipes));
}

function formatRating(ratings) {
  if (!Array.isArray(ratings) || ratings.length === 0) return 'No ratings yet';
  const sum = ratings.reduce((total, value) => total + Number(value), 0);
  const average = (sum / ratings.length).toFixed(1);
  return `${average} ★ (${ratings.length} ratings)`;
}

function buildRecipeCard(recipe) {
  const card = document.createElement('article');
  card.className = 'recipe-card';
  card.innerHTML = `
    <img src="${recipe.image || 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80'}" alt="${recipe.title}" />
    <div class="recipe-body">
      <div class="recipe-meta">
        <span>${recipe.category}</span>
        <span>${recipe.prepTime} · ${recipe.servings} servings</span>
      </div>
      <h3>${recipe.title}</h3>
      <p>${recipe.instructions.slice(0, 120)}${recipe.instructions.length > 120 ? '…' : ''}</p>
      <div class="recipe-meta">
        <span>By ${recipe.author}</span>
        <span>${formatRating(recipe.ratings)}</span>
      </div>
      <div class="rating-input">
        <select aria-label="Rate recipe" data-recipe-id="${recipe.id}">
          <option value="5">5 Wonderful</option>
          <option value="4">4 Great</option>
          <option value="3">3 Good</option>
          <option value="2">2 Fair</option>
          <option value="1">1 Needs work</option>
        </select>
        <button class="button secondary" data-rating-action="${recipe.id}">Add Rating</button>
      </div>
    </div>
  `;
  return card;
}

function renderRecipes() {
  const browseList = document.getElementById('browseList');
  const popularList = document.getElementById('popularList');
  const recipes = getRecipes();
  browseList.innerHTML = '';
  popularList.innerHTML = '';

  if (recipes.length === 0) {
    browseList.innerHTML = '<p>No recipes yet. Publish the first one!</p>';
    return;
  }

  recipes.forEach((recipe) => {
    browseList.appendChild(buildRecipeCard(recipe));
  });

  const sorted = [...recipes].sort((a, b) => {
    const ratingA = a.ratings.length ? a.ratings.reduce((sum, value) => sum + Number(value), 0) / a.ratings.length : 0;
    const ratingB = b.ratings.length ? b.ratings.reduce((sum, value) => sum + Number(value), 0) / b.ratings.length : 0;
    return ratingB - ratingA;
  });
  sorted.slice(0, 3).forEach((recipe) => {
    const mini = document.createElement('div');
    mini.className = 'recipe-card';
    mini.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <div class="recipe-body">
        <h3>${recipe.title}</h3>
        <div class="recipe-meta">
          <span>${recipe.category}</span>
          <span>${formatRating(recipe.ratings)}</span>
        </div>
      </div>
    `;
    popularList.appendChild(mini);
  });
}

function updateRating(recipeId, rating) {
  const recipes = getRecipes();
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  recipe.ratings = recipe.ratings || [];
  recipe.ratings.push(Number(rating));
  saveRecipes(recipes);
  renderRecipes();
  alert('Thanks! Your rating was added.');
}

function initPublishForm() {
  const preview = document.getElementById('imagePreview');
  const imageInput = document.getElementById('recipeImage');

  imageInput.addEventListener('change', () => {
    const file = imageInput.files?.[0];
    if (!file) {
      preview.innerHTML = '<p>No image selected.</p>';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      preview.innerHTML = `<img src="${reader.result}" alt="Recipe preview" />`;
      preview.dataset.image = reader.result;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('publishForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('recipeTitle').value.trim();
    const category = document.getElementById('recipeCategory').value.trim();
    const prepTime = document.getElementById('recipeTime').value.trim();
    const servings = document.getElementById('recipeServings').value.trim();
    const ingredients = document.getElementById('recipeIngredients').value.trim();
    const instructions = document.getElementById('recipeInstructions').value.trim();
    const image = preview.dataset.image || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80';

    if (!title || !category || !ingredients || !instructions) {
      alert('Please fill in all required recipe fields.');
      return;
    }

    const recipes = getRecipes();
    recipes.unshift({
      id: crypto.randomUUID(),
      title,
      author: currentUser.name,
      category,
      prepTime: prepTime || '15 min',
      servings: servings || '2',
      ingredients,
      instructions,
      image,
      ratings: [],
      createdAt: new Date().toISOString(),
    });
    saveRecipes(recipes);
    event.target.reset();
    preview.innerHTML = '<p>No image selected.</p>';
    delete preview.dataset.image;
    renderRecipes();
    alert('Recipe published successfully!');
  });
}

function bindActions() {
  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('[data-rating-action]');
    if (!button) return;
    const recipeId = button.dataset.ratingAction;
    const select = document.querySelector(`select[data-recipe-id="${recipeId}"]`);
    if (!select) return;
    updateRating(recipeId, select.value);
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('recipePlatformUser');
    window.location.href = 'login.html';
  });
}

function showUserInfo() {
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  if (userName) userName.textContent = currentUser.name;
  if (userEmail) userEmail.textContent = currentUser.email;
}

function initApp() {
  const storedUser = localStorage.getItem('recipePlatformUser');
  if (!storedUser) {
    window.location.href = 'login.html';
    return;
  }
  currentUser = JSON.parse(storedUser);
  showUserInfo();
  renderRecipes();
  initPublishForm();
  bindActions();
}

document.addEventListener('DOMContentLoaded', initApp);
