const { db } = require("@vercel/postgres");
const { users, stories, comments, tags } = require("./placeholder.ts");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        user_id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        avatar TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (user_id, name, email, password, avatar)
        VALUES (${user.userId}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.avatar})
        ON CONFLICT (user_id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedStories(client) {
  try {
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS stories (
    story_id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    tags TEXT[] NOT NULL,
    views INT NOT NULL,
    upvotes INT NOT NULL,
    downvotes INT NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "stories" table`);

    // Insert data into the "stories" table
    const insertedStories = await Promise.all(
      stories.map(
        (story) => client.sql`
        INSERT INTO stories (story_id, user_id, title, body, tags, views, upvotes, downvotes, date)
        VALUES (${story.storyId},${story.userId}, ${story.title}, ${story.body}, ${story.tags}, ${story.views}, ${story.upvotes}, ${story.downvotes}, ${story.date})
        ON CONFLICT (story_id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedStories.length} stories`);

    return {
      createTable,
      stories: insertedStories,
    };
  } catch (error) {
    console.error("Error seeding invoices:", error);
    throw error;
  }
}

async function seedComments(client) {
  try {
    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comments (
        comment_id TEXT PRIMARY KEY,
        story_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        text TEXT NOT NULL
      );
    `;

    console.log(`Created "comments" table`);

    // Insert data into the "comments" table
    const insertedComments = await Promise.all(
      comments.map(
        (comment) => client.sql`
        INSERT INTO comments (comment_id, story_id, user_id, text)
        VALUES (${comment.commentId}, ${comment.storyId}, ${comment.userId}, ${comment.text})
        ON CONFLICT (comment_id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedComments.length} comments`);

    return {
      createTable,
      customers: insertedComments,
    };
  } catch (error) {
    console.error("Error seeding customers:", error);
    throw error;
  }
}

async function seedTags(client) {
  try {
    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS tags (
        tag TEXT NOT NULL
      );
    `;

    console.log(`Created "tags" table`);

    // Insert data into the "tags" table
    const insertedTags = await Promise.all(
      tags.map(
        (tag) => client.sql`
        INSERT INTO tags (tag)
        VALUES (${tag})
      `
      )
    );

    console.log(`Seeded ${insertedTags.length} tags`);

    return {
      createTable,
      customers: insertedTags,
    };
  } catch (error) {
    console.error("Error seeding tags:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedStories(client);
  await seedComments(client);
  await seedTags(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
