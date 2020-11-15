import { connect, clearDatabase, closeDatabase } from "./db-handler";

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
  jest.setTimeout(70000);
  await connect();
});

/**
 * Mock
 */
beforeEach(async () => {
  await clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
  await closeDatabase();
});
