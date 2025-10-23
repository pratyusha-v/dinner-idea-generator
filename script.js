// Book-themed dinner menu generator
(() => {
	const themes = {
		'Cozy Mystery': {
			starters: ['Roasted Tomato Soup', 'Garlic Bread with Herb Butter', 'Warm Brie and Fig Crostini'],
			salads: ['Autumn Pear Salad', 'Simple Arugula with Lemon', 'Beet and Goat Cheese Salad'],
			mains: ['Chicken Pot Pie', 'Shepherdâ€™s Pie', 'Seared Salmon with Dill'],
			sides: ['Butter Mashed Potatoes', 'Glazed Carrots', 'Sautéed Green Beans'],
			desserts: ['Apple Crumble', 'Vanilla Pudding', 'Cinnamon Tea Cake']
		},
		'Classic Literature': {
			starters: ['Oysters Rockefeller', 'French Onion Soup', 'Smoked Salmon Blini'],
			salads: ['Niçoise Salad', 'Waldorf Salad', 'Fennel and Orange Salad'],
			mains: ['Beef Bourguignon', 'Coq au Vin', 'Lamb with Rosemary'],
			sides: ['Pommes Dauphinoise', 'Ratatouille', 'Buttered Asparagus'],
			desserts: ['Crème Brûlée', 'Poached Pears', 'Baked Alaska']
		},
		'Fantasy Feast': {
			starters: ['Spiced Pumpkin Soup', 'Herbed Mushroom Tart', 'Dragonberry Bruschetta'],
			salads: ['Enchanted Herb Salad', 'Citrus & Pomegranate', 'Forest Mushroom Salad'],
			mains: ['Roast Beast with Root Vegetables', 'Honey-Glazed Pork Loin', 'Stuffed Portobello Steaks'],
			sides: ['Roasted Roots', 'Crispy Sage Potatoes', 'Honey-Roasted Turnips'],
			desserts: ['Honey Cake', 'Spiced Pear Tart', 'Fig & Almond Pastry']
		},
		'Modern Fiction': {
			starters: ['Avocado Toast', 'Spicy Tuna Tartare', 'Crispy Cauliflower Bites'],
			salads: ['Kale Caesar', 'Quinoa & Cranberry', 'Modern Greek Salad'],
			mains: ['Pan-Seared Sea Bass', 'Grilled Vegetable Risotto', 'Soy-Glazed Chicken Bowl'],
			sides: ['Charred Broccolini', 'Truffle Fries', 'Lemon Couscous'],
			desserts: ['Molten Chocolate Cake', 'Matcha Panna Cotta', 'Lemon Tart']
		},
		'Romantic Novels': {
			starters: ['Prosciutto & Melon', 'Stracciatella Salad', 'Herb Ricotta Crostini'],
			salads: ['Caprese with Balsamic', 'Baby Greens with Champagne Vinaigrette', 'Strawberry Spinach Salad'],
			mains: ['Risotto with Asparagus', 'Butter-Poached Lobster', 'Filet Mignon'],
			sides: ['Truffle Mashed Potatoes', 'Grilled Asparagus', 'Rosemary Roasted Potatoes'],
			desserts: ['Chocolate-Covered Strawberries', 'Tiramisu', 'Raspberry Soufflé']
		}
	};

	function pickRandom(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function generateMenu(themeName, courses) {
		const t = themes[themeName] || themes['Cozy Mystery'];
		const menu = [];

		// Starter
		menu.push({ title: 'Starter', item: pickRandom(t.starters) });

		// Optionally salad
		if (courses >= 4) menu.push({ title: 'Salad', item: pickRandom(t.salads) });

		// Main
		menu.push({ title: 'Main', item: pickRandom(t.mains) });

		// Optionally side
		if (courses >= 5) menu.push({ title: 'Side', item: pickRandom(t.sides) });

		// Dessert
		menu.push({ title: 'Dessert', item: pickRandom(t.desserts) });

		return menu;
	}

	function renderMenu(menu, themeName) {
		const container = document.getElementById('menu-result');
		container.innerHTML = '';

		const title = document.createElement('h3');
		title.textContent = `${themeName} Menu`;
		container.appendChild(title);

		menu.forEach((c) => {
			const div = document.createElement('div');
			div.className = 'menu-course';
			div.innerHTML = `<strong>${c.title}:</strong> ${c.item}`;
			container.appendChild(div);
		});
	}

	// Hook up UI
	document.addEventListener('DOMContentLoaded', () => {
		const btn = document.getElementById('generate');
		const themeSel = document.getElementById('theme');
		const coursesSel = document.getElementById('courses');

		btn.addEventListener('click', () => {
			const theme = themeSel.value;
			const courses = parseInt(coursesSel.value, 10) || 3;
			const menu = generateMenu(theme, courses);
			renderMenu(menu, theme);
		});
	});
})();
