const request = require('supertest');
const fs = require('fs');
const path = require('path');
const os = require('os');

let app;
let tempFile;

beforeEach(() => {
  tempFile = path.join(os.tmpdir(), `notes-${Date.now()}.json`);
  fs.writeFileSync(tempFile, JSON.stringify([
    { id: 1, title: 'First', content: '<p>test</p>' }
  ], null, 2));
  process.env.NOTES_FILE = tempFile;
  jest.resetModules();
  app = require('../server');
});

afterEach(() => {
  fs.unlinkSync(tempFile);
  delete process.env.NOTES_FILE;
});

test('GET /notes returns notes list', async () => {
  const res = await request(app).get('/notes');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body).toHaveLength(1);
  expect(res.body[0].title).toBe('First');
});

test('POST /notes creates a note', async () => {
  const res = await request(app)
    .post('/notes')
    .send({ title: 'Second', content: '<p>two</p>' });
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe('Second');

  const notes = JSON.parse(fs.readFileSync(tempFile, 'utf-8'));
  expect(notes).toHaveLength(2);
});
