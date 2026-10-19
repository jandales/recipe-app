require('dotenv').config();
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const mongoose = require('mongoose');
const User = require('../api/models/user');
const Recipe = require('../api/models/recipe');

const SEED_EMAILS = [
    'alice@example.com',
    'bob@example.com',
    'carol@example.com',
    'david@example.com',
    'emma@example.com',
    'frank@example.com',
    'grace@example.com',
    'henry@example.com',
    'ivy@example.com',
    'jack@example.com',
];

const RECIPE_DIR = path.join(__dirname, '..', '..', 'public', 'img', 'recipes');

/** Reliable Unsplash food images (cycled across recipes) */
const IMAGE_URLS = [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
    'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80',
    'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
    'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80',
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80',
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80',
    'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80',
];

const RECIPE_DEFS = [
    ['Classic Margherita Pizza', 'Crisp thin crust with tomato, mozzarella, and basil.', ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil', 'Olive oil'], ['Preheat oven to 475°F.', 'Stretch dough.', 'Top and bake 10–12 min.', 'Drizzle oil and serve.'], '12 min', '20 min', 'Easy', '2'],
    ['Creamy Garlic Pasta', 'Silky garlic cream sauce on fettuccine.', ['Fettuccine', 'Butter', 'Garlic', 'Cream', 'Parmesan'], ['Cook pasta.', 'Sauté garlic in butter.', 'Add cream and cheese.', 'Toss and serve.'], '15 min', '10 min', 'Easy', '4'],
    ['Herb-Roasted Chicken', 'Juicy chicken with rosemary, thyme, and lemon.', ['Whole chicken', 'Rosemary', 'Thyme', 'Lemon', 'Garlic'], ['Preheat to 425°F.', 'Rub with herbs and oil.', 'Roast until done.', 'Rest and carve.'], '75 min', '15 min', 'Medium', '6'],
    ['Avocado Toast Bowl', 'Smashed avocado on sourdough with egg and greens.', ['Sourdough', 'Avocado', 'Egg', 'Greens', 'Chili flakes'], ['Toast bread.', 'Mash avocado.', 'Cook egg.', 'Assemble and season.'], '8 min', '10 min', 'Easy', '1'],
    ['Spicy Beef Tacos', 'Seasoned beef in warm tortillas with salsa.', ['Ground beef', 'Tortillas', 'Onion', 'Salsa', 'Lime'], ['Brown beef.', 'Season and simmer.', 'Warm tortillas.', 'Fill and serve with lime.'], '20 min', '15 min', 'Easy', '4'],
    ['Berry Breakfast Smoothie', 'Berries, banana, and yogurt blended smooth.', ['Berries', 'Banana', 'Yogurt', 'Honey', 'Milk'], ['Add ingredients to blender.', 'Blend until smooth.', 'Pour and serve cold.'], '0 min', '5 min', 'Easy', '2'],
    ['Grilled Salmon with Asparagus', 'Flaky salmon with lemon butter and asparagus.', ['Salmon', 'Asparagus', 'Butter', 'Lemon', 'Dill'], ['Season fish and veg.', 'Grill salmon.', 'Grill asparagus.', 'Sauce and plate.'], '15 min', '10 min', 'Medium', '2'],
    ['Chocolate Chip Cookies', 'Chewy golden cookies packed with chips.', ['Flour', 'Butter', 'Sugar', 'Eggs', 'Chocolate chips'], ['Cream butter and sugar.', 'Add eggs and dry mix.', 'Scoop and bake 10–12 min.'], '12 min', '15 min', 'Easy', '24'],
    ['Thai Coconut Curry', 'Aromatic coconut curry with basil and rice.', ['Curry paste', 'Coconut milk', 'Chicken', 'Vegetables', 'Basil'], ['Fry paste.', 'Add coconut milk.', 'Simmer protein and veg.', 'Serve over rice.'], '25 min', '15 min', 'Medium', '4'],
    ['Garden Fresh Salad', 'Crisp greens with vinaigrette.', ['Greens', 'Tomato', 'Cucumber', 'Onion', 'Vinaigrette'], ['Wash greens.', 'Chop vegetables.', 'Toss with dressing.', 'Serve chilled.'], '0 min', '12 min', 'Easy', '4'],
    ['Fluffy Buttermilk Pancakes', 'Soft pancakes with maple syrup.', ['Flour', 'Buttermilk', 'Eggs', 'Butter', 'Maple syrup'], ['Mix batter.', 'Cook on griddle.', 'Flip when bubbly.', 'Serve with syrup.'], '15 min', '10 min', 'Easy', '4'],
    ['Beef Stir-Fry Noodles', 'Wok noodles with beef and crisp vegetables.', ['Noodles', 'Beef', 'Soy sauce', 'Broccoli', 'Garlic'], ['Cook noodles.', 'Stir-fry beef.', 'Add vegetables.', 'Toss with sauce.'], '18 min', '20 min', 'Medium', '3'],
    ['Caprese Salad', 'Tomato, mozzarella, and basil with balsamic.', ['Tomatoes', 'Mozzarella', 'Basil', 'Balsamic', 'Olive oil'], ['Slice tomato and cheese.', 'Layer with basil.', 'Drizzle oil and balsamic.'], '0 min', '10 min', 'Easy', '2'],
    ['Lemon Garlic Shrimp', 'Quick shrimp sautéed with lemon and garlic.', ['Shrimp', 'Garlic', 'Lemon', 'Butter', 'Parsley'], ['Sauté garlic in butter.', 'Add shrimp.', 'Finish with lemon and parsley.'], '8 min', '10 min', 'Easy', '3'],
    ['Mushroom Risotto', 'Creamy arborio rice with mushrooms and Parmesan.', ['Arborio rice', 'Mushrooms', 'Stock', 'Onion', 'Parmesan'], ['Sauté mushrooms and onion.', 'Toast rice.', 'Add stock gradually.', 'Finish with cheese.'], '35 min', '15 min', 'Hard', '4'],
    ['BBQ Pulled Pork Sandwich', 'Slow-cooked pork with tangy BBQ sauce.', ['Pork shoulder', 'BBQ sauce', 'Buns', 'Coleslaw', 'Spices'], ['Rub and slow-cook pork.', 'Shred meat.', 'Mix with sauce.', 'Serve on buns with slaw.'], '4 hr', '20 min', 'Medium', '8'],
    ['Vegetable Fried Rice', 'Day-old rice wok-fried with eggs and veg.', ['Rice', 'Eggs', 'Peas', 'Carrot', 'Soy sauce'], ['Scramble eggs.', 'Stir-fry vegetables.', 'Add rice and soy.', 'Toss until hot.'], '12 min', '10 min', 'Easy', '4'],
    ['French Onion Soup', 'Caramelized onions in rich broth with cheese toast.', ['Onions', 'Beef stock', 'Baguette', 'Gruyère', 'Butter'], ['Caramelize onions.', 'Add stock and simmer.', 'Top with bread and cheese.', 'Broil until melted.'], '45 min', '20 min', 'Medium', '4'],
    ['Chicken Caesar Wrap', 'Grilled chicken, romaine, and Caesar in a tortilla.', ['Chicken', 'Romaine', 'Caesar dressing', 'Tortilla', 'Parmesan'], ['Grill chicken.', 'Toss salad.', 'Wrap and slice.'], '15 min', '10 min', 'Easy', '2'],
    ['Blueberry Muffins', 'Tender muffins bursting with blueberries.', ['Flour', 'Blueberries', 'Sugar', 'Eggs', 'Butter'], ['Mix batter.', 'Fold in berries.', 'Bake at 375°F for 20 min.'], '20 min', '15 min', 'Easy', '12'],
    ['Tomato Basil Soup', 'Smooth tomato soup with fresh basil.', ['Tomatoes', 'Onion', 'Basil', 'Cream', 'Garlic'], ['Sauté aromatics.', 'Simmer tomatoes.', 'Blend smooth.', 'Finish with cream and basil.'], '30 min', '10 min', 'Easy', '4'],
    ['Steak Frites', 'Seared steak with crispy fries.', ['Steak', 'Potatoes', 'Butter', 'Garlic', 'Thyme'], ['Cut and fry potatoes.', 'Sear steak.', 'Rest and butter-baste.', 'Plate together.'], '25 min', '20 min', 'Medium', '2'],
    ['Shakshuka', 'Eggs poached in spiced tomato sauce.', ['Eggs', 'Tomatoes', 'Pepper', 'Onion', 'Cumin'], ['Sauté vegetables.', 'Simmer sauce.', 'Crack in eggs.', 'Cover until set.'], '20 min', '15 min', 'Easy', '3'],
    ['Chicken Tikka Masala', 'Tender chicken in creamy tomato curry.', ['Chicken', 'Yogurt', 'Tomato sauce', 'Cream', 'Spices'], ['Marinate chicken.', 'Grill or sear.', 'Simmer in sauce.', 'Serve with rice.'], '30 min', '30 min', 'Medium', '4'],
    ['Banana Bread', 'Moist banana loaf with a golden crust.', ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Butter'], ['Mash bananas.', 'Mix batter.', 'Bake at 350°F for 55 min.'], '55 min', '15 min', 'Easy', '8'],
    ['Greek Salad', 'Cucumber, tomato, feta, and olives.', ['Cucumber', 'Tomato', 'Feta', 'Olives', 'Olive oil'], ['Chop vegetables.', 'Add feta and olives.', 'Dress and toss.'], '0 min', '15 min', 'Easy', '4'],
    ['Pork Dumplings', 'Pan-fried dumplings with soy dipping sauce.', ['Dumpling wrappers', 'Ground pork', 'Ginger', 'Scallion', 'Soy sauce'], ['Mix filling.', 'Wrap dumplings.', 'Pan-fry then steam.', 'Serve with sauce.'], '20 min', '40 min', 'Hard', '4'],
    ['Fish Tacos', 'Crispy fish with slaw and lime crema.', ['White fish', 'Tortillas', 'Cabbage', 'Lime', 'Crema'], ['Season and cook fish.', 'Make slaw and crema.', 'Assemble tacos.'], '15 min', '20 min', 'Easy', '4'],
    ['Eggplant Parmesan', 'Breaded eggplant baked with marinara and cheese.', ['Eggplant', 'Breadcrumbs', 'Marinara', 'Mozzarella', 'Parmesan'], ['Bread eggplant.', 'Bake or fry.', 'Layer with sauce and cheese.', 'Bake until bubbly.'], '40 min', '25 min', 'Medium', '6'],
    ['Honey Garlic Glazed Ribs', 'Sticky ribs with honey garlic glaze.', ['Pork ribs', 'Honey', 'Garlic', 'Soy sauce', 'Spices'], ['Season ribs.', 'Bake low and slow.', 'Brush glaze.', 'Finish under broiler.'], '3 hr', '20 min', 'Medium', '4'],
    ['Miso Ramen Bowl', 'Savory miso broth with noodles and toppings.', ['Ramen noodles', 'Miso', 'Broth', 'Egg', 'Green onion'], ['Simmer broth with miso.', 'Cook noodles.', 'Add toppings.', 'Serve hot.'], '25 min', '15 min', 'Medium', '2'],
    ['Stuffed Bell Peppers', 'Peppers filled with rice, beef, and tomato.', ['Bell peppers', 'Ground beef', 'Rice', 'Tomato', 'Cheese'], ['Hollow peppers.', 'Cook filling.', 'Stuff and bake.', 'Top with cheese.'], '35 min', '20 min', 'Easy', '4'],
    ['Apple Crumble', 'Warm spiced apples under a buttery crumble.', ['Apples', 'Flour', 'Butter', 'Sugar', 'Cinnamon'], ['Slice apples.', 'Make crumble topping.', 'Bake until golden.', 'Serve warm.'], '40 min', '20 min', 'Easy', '6'],
    ['Chickpea Buddha Bowl', 'Roasted chickpeas, grains, and tahini drizzle.', ['Chickpeas', 'Quinoa', 'Kale', 'Sweet potato', 'Tahini'], ['Roast chickpeas and potato.', 'Cook quinoa.', 'Assemble bowl.', 'Drizzle tahini.'], '30 min', '15 min', 'Easy', '2'],
    ['Clam Chowder', 'Creamy New England chowder with potatoes.', ['Clams', 'Potato', 'Cream', 'Bacon', 'Onion'], ['Cook bacon and onion.', 'Add potato and clam juice.', 'Simmer.', 'Finish with cream and clams.'], '35 min', '20 min', 'Medium', '6'],
    ['Pesto Pasta Salad', 'Cold pasta with basil pesto and cherry tomatoes.', ['Pasta', 'Pesto', 'Cherry tomatoes', 'Mozzarella', 'Pine nuts'], ['Cook and cool pasta.', 'Toss with pesto.', 'Add tomatoes and cheese.', 'Chill and serve.'], '12 min', '15 min', 'Easy', '6'],
    ['Lamb Gyro Plate', 'Spiced lamb with pita, tzatziki, and salad.', ['Lamb', 'Pita', 'Tzatziki', 'Tomato', 'Onion'], ['Season and cook lamb.', 'Warm pita.', 'Assemble with toppings.'], '25 min', '20 min', 'Medium', '4'],
    ['Cinnamon Rolls', 'Soft rolls with cinnamon sugar and icing.', ['Flour', 'Yeast', 'Butter', 'Cinnamon', 'Sugar'], ['Make dough and rise.', 'Fill and roll.', 'Bake until golden.', 'Ice while warm.'], '25 min', '90 min', 'Medium', '12'],
    ['Veggie Omelette', 'Fluffy eggs with peppers, spinach, and cheese.', ['Eggs', 'Spinach', 'Pepper', 'Cheese', 'Butter'], ['Whisk eggs.', 'Sauté vegetables.', 'Cook omelette.', 'Fold with cheese.'], '8 min', '10 min', 'Easy', '1'],
    ['Beef Burgers', 'Juicy grilled burgers with classic toppings.', ['Ground beef', 'Buns', 'Lettuce', 'Tomato', 'Cheese'], ['Form patties.', 'Grill to preferred doneness.', 'Toast buns.', 'Assemble burgers.'], '12 min', '15 min', 'Easy', '4'],
    ['Pumpkin Soup', 'Silky roasted pumpkin soup with cream.', ['Pumpkin', 'Onion', 'Stock', 'Cream', 'Nutmeg'], ['Roast pumpkin.', 'Simmer with stock.', 'Blend smooth.', 'Finish with cream.'], '35 min', '15 min', 'Easy', '4'],
    ['Pad Thai', 'Sweet-sour noodles with peanuts and lime.', ['Rice noodles', 'Tofu or shrimp', 'Tamarind', 'Egg', 'Peanuts'], ['Soak noodles.', 'Stir-fry protein.', 'Add sauce and noodles.', 'Top with peanuts and lime.'], '15 min', '25 min', 'Medium', '2'],
    ['Baked Mac and Cheese', 'Creamy baked macaroni with a crunchy topping.', ['Macaroni', 'Cheddar', 'Milk', 'Butter', 'Breadcrumbs'], ['Cook pasta.', 'Make cheese sauce.', 'Combine and top.', 'Bake until bubbly.'], '25 min', '15 min', 'Easy', '6'],
    ['Sushi Bowl', 'Deconstructed sushi with rice, salmon, and avocado.', ['Sushi rice', 'Salmon', 'Avocado', 'Cucumber', 'Soy sauce'], ['Cook and season rice.', 'Slice toppings.', 'Assemble bowl.', 'Drizzle soy.'], '20 min', '20 min', 'Easy', '2'],
    ['Corn Chowder', 'Sweet corn soup with potato and cream.', ['Corn', 'Potato', 'Onion', 'Cream', 'Bacon'], ['Cook bacon and onion.', 'Add corn and potato.', 'Simmer.', 'Blend partially and finish with cream.'], '30 min', '15 min', 'Easy', '4'],
    ['Chicken Noodle Soup', 'Comforting broth with chicken and noodles.', ['Chicken', 'Noodles', 'Carrot', 'Celery', 'Onion'], ['Simmer chicken broth.', 'Add vegetables.', 'Shred chicken.', 'Cook noodles in soup.'], '40 min', '15 min', 'Easy', '6'],
    ['Tiramisu Cups', 'Espresso-soaked ladyfingers with mascarpone cream.', ['Ladyfingers', 'Espresso', 'Mascarpone', 'Sugar', 'Cocoa'], ['Whip cream filling.', 'Dip ladyfingers.', 'Layer in cups.', 'Dust with cocoa and chill.'], '0 min', '30 min', 'Medium', '6'],
    ['Falafel Wrap', 'Crispy falafel with hummus and pickled veg.', ['Falafel', 'Pita', 'Hummus', 'Cucumber', 'Pickles'], ['Warm pita.', 'Spread hummus.', 'Add falafel and veg.', 'Wrap tightly.'], '15 min', '20 min', 'Easy', '2'],
    ['Garlic Butter Steak Bites', 'Seared steak cubes in garlic butter.', ['Steak', 'Butter', 'Garlic', 'Parsley', 'Pepper'], ['Cube and season steak.', 'Sear hot and fast.', 'Toss in garlic butter.', 'Garnish with parsley.'], '10 min', '10 min', 'Easy', '3'],
    ['Mango Sticky Rice', 'Sweet coconut sticky rice with ripe mango.', ['Sticky rice', 'Mango', 'Coconut milk', 'Sugar', 'Salt'], ['Steam sticky rice.', 'Warm sweet coconut milk.', 'Pour over rice.', 'Serve with mango.'], '30 min', '20 min', 'Easy', '4'],
];

function buildRecipes() {
    return RECIPE_DEFS.map((def, i) => {
        const [name, description, ingredients, instructions, cookTime, prepTime, difficulty, servings] = def;
        return {
            name,
            description,
            ingredients,
            instructions,
            cookTime,
            prepTime,
            difficulty,
            servings,
            status: 'public',
            imageUrl: IMAGE_URLS[i % IMAGE_URLS.length],
        };
    });
}

function downloadImage(url, destPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        const client = url.startsWith('https') ? https : http;
        const request = client.get(url, { headers: { 'User-Agent': 'recipe-app-seed/1.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                file.close();
                fs.unlink(destPath, () => {});
                return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                file.close();
                fs.unlink(destPath, () => {});
                return reject(new Error(`HTTP ${res.statusCode}`));
            }
            res.pipe(file);
            file.on('finish', () => file.close(() => resolve(destPath)));
        });
        request.setTimeout(20000, () => {
            request.destroy(new Error('timeout'));
        });
        request.on('error', (err) => {
            file.close();
            fs.unlink(destPath, () => {});
            reject(err);
        });
    });
}

async function seed() {
    if (!process.env.DB_URL) {
        console.error('Missing DB_URL in .env');
        process.exit(1);
    }

    fs.mkdirSync(RECIPE_DIR, { recursive: true });

    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const users = await User.find({ email: { $in: SEED_EMAILS } });
    if (users.length === 0) {
        console.error('No seeded users found. Run npm run seed:users first.');
        process.exit(1);
    }

    // Ensure any existing seed-user recipes are public
    const makePublic = await Recipe.updateMany(
        { user: { $in: users.map((u) => u._id) } },
        { $set: { status: 'public' } }
    );
    console.log(`Set public: ${makePublic.modifiedCount} existing recipes`);

    const recipes = buildRecipes();
    let created = 0;
    let skipped = 0;

    for (let i = 0; i < recipes.length; i++) {
        const data = recipes[i];
        const owner = users[i % users.length];

        const exists = await Recipe.findOne({ name: data.name, user: owner._id });
        if (exists) {
            // Keep image if present; force public
            if (exists.status !== 'public') {
                exists.status = 'public';
                await exists.save();
            }
            console.log(`Skip (exists): ${data.name}`);
            skipped += 1;
            continue;
        }

        const filename = `seed-${Date.now()}-${i}.jpg`;
        const destPath = path.join(RECIPE_DIR, filename);
        const publicPath = `/img/recipes/${filename}`;

        try {
            await downloadImage(data.imageUrl, destPath);
        } catch (err) {
            console.warn(`Image failed for ${data.name}: ${err.message}`);
            const fallback = path.join(RECIPE_DIR, 'default.jpg');
            if (fs.existsSync(fallback)) {
                fs.copyFileSync(fallback, destPath);
            }
        }

        const imagePath = fs.existsSync(destPath) ? publicPath : '/img/recipes/default.jpg';

        await Recipe.create({
            name: data.name,
            description: data.description,
            ingredients: data.ingredients,
            instructions: data.instructions,
            cookTime: data.cookTime,
            prepTime: data.prepTime,
            difficulty: data.difficulty,
            servings: data.servings,
            status: 'public',
            image: imagePath,
            user: owner._id,
            saved: [],
        });

        console.log(`Created: ${data.name} → ${owner.email}`);
        created += 1;
    }

    const totalPublic = await Recipe.countDocuments({
        user: { $in: users.map((u) => u._id) },
        status: 'public',
    });

    console.log(`\nDone. Created ${created}, skipped ${skipped}.`);
    console.log(`Public recipes from seed users: ${totalPublic}`);
    await mongoose.disconnect();
    process.exit(0);
}

seed().catch((err) => {
    console.error(err);
    process.exit(1);
});
