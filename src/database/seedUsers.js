require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../api/models/user');

const PASSWORD = '12345678';

const users = [
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'Bob Smith', email: 'bob@example.com' },
    { name: 'Carol Davis', email: 'carol@example.com' },
    { name: 'David Wilson', email: 'david@example.com' },
    { name: 'Emma Brown', email: 'emma@example.com' },
    { name: 'Frank Miller', email: 'frank@example.com' },
    { name: 'Grace Lee', email: 'grace@example.com' },
    { name: 'Henry Taylor', email: 'henry@example.com' },
    { name: 'Ivy Anderson', email: 'ivy@example.com' },
    { name: 'Jack Thomas', email: 'jack@example.com' },
];

async function seed() {
    if (!process.env.DB_URL) {
        console.error('Missing DB_URL in .env');
        process.exit(1);
    }

    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    let created = 0;
    let skipped = 0;

    for (const data of users) {
        const exists = await User.findOne({ email: data.email });
        if (exists) {
            console.log(`Skip (exists): ${data.email}`);
            skipped += 1;
            continue;
        }

        // Use .save() so the pre-save hook hashes the password
        const user = new User({
            name: data.name,
            email: data.email,
            password: PASSWORD,
        });
        await user.save();
        console.log(`Created: ${data.email}`);
        created += 1;
    }

    console.log(`\nDone. Created ${created}, skipped ${skipped}.`);
    console.log(`Password for all seeded users: ${PASSWORD}`);

    await mongoose.disconnect();
    process.exit(0);
}

seed().catch((err) => {
    console.error(err);
    process.exit(1);
});
