/**
 * --------------- ChatTutor.org ----------------
 * Configuration file for chattutor.min.js which
 * should not be modified. This file consists of
 * the necesary configurations for running chat-
 * tutor in a course.
 * Currently the ChatTutor needs be added by hand
 * or using the install.py script in each page of
 * the application, weather build with jupyter or
 * other frameworks.
 * The style necesary for ChatTutor is provided in
 * chattutor.style.css, and can be adjusted for
 * every course's needs.
 *
 * The following configuration variables have the
 * following meaning:
 *
 * EMBEDDING_COLLECTION_NAME: the name of the
 * database that is [[either provided on
 * ChatTutor.org when an account is created and
 * a new course added - this will be added soon]]
 * or provided by the contributors to ChatTutor.
 *
 * TEST_MODE: should be false for prodction and
 * either true or false for testing. When true,
 * requests to the chattutor server are actually
 * done to https://localhost:<SERVER_PORT>.
 * This option is added because currently ChatTutor
 * has a CORS wall that only allows certain domains
 * to make requests to its APIs, and the CORS needs
 * to be manually updated when a course is ready
 * to use Chattutor. For testing purposes on should
 * run the ChatTutor server on the port SERVER_PORT
 * and request to it. This will be deprecated in
 * the latter phases of the project, when the CORS
 * will be updated automatically, and it is currently
 * used by our team for manually adding and testing
 * ChatTutor to new courses.
 *
 * COURSE_URL: the base url for the course
 *
 *
 * RUN_LOCALLY: true if and only if course is tested
 * locally. For production it should be false,
 * for testing it should be true.
 *
 * IS_STATIC: true if ran statically on a index.html
 * file, false if ran on a server, either local or online
 * Usually true for jupyter books
 */
const RUN_LOCALLY = false; // false
const TEST_MODE = false; // false 
const IS_STATIC = true;
const CHATTUTOR_BASE_URL = "https://chattutor-95445301833.us-central1.run.app"; // = false;
const AUTHORIZATION_KEY = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMWYzYmM2NmYwNzUxZjc4NDA2MDY3OTliMWFkZjllOWZiNjBkZmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5MTQzODA3OTc4MDY5NzUyNjIxIiwiaGQiOiJheGlvbWF0aWMtYWkuY29tIiwiZW1haWwiOiJhZHJpYW5hQGF4aW9tYXRpYy1haS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ikg4UTVrTF9ncllvWjFQUHlLUUZ3S2ciLCJuYmYiOjE3NDMxNTEzMTcsImlhdCI6MTc0MzE1MTYxNywiZXhwIjoxNzQzMTU1MjE3LCJqdGkiOiI3YmE0MGYwZWUyNDdkNjc1N2Q4ZGNmZGU2NGU4MzUxZGUyZjE2YjcwIn0.melTp0vpFEScIPa9M0M0HalMdUYNLlqwWnbWqO7ZuKo3S3l3s6__minFMqhxB2xYx50BmWARj0BrP-v6AkWf205frWh0XevhKaun3___VA_RxdNas74DOiFM9DclDQj7P7K5zPKwLCKg_gR3kGgQd3hafjWLvzdSf5lMC1IS8OsFhrQG5psYIf1JAFnkdhHPBw85UieTV2CVPib_6G5RWzcFvWwxqJ5xU-HGbyRbl7Kapmk_ydhH7PuMLOp2QSRjGi0u34DK-TzLrYKmlkPDGDa9zEKJDc7c2A29DT1Z7igz5ST4ThEsnxVnq6rScG6VbGEC9e6_O1MFenSp-EEWFg"
const EMBEDDING_COLLECTION_NAME = "MIT62410Dirk";
const COURSE_URL = "https://dkeathley.github.io/6.2410-lab";
/**
 * --------------- TESTING CONFIGS ----------------
 * ChatTutor can be embedded on default applications
 * that run on servers, or in static pages such as
 * Jupyter Notebooks.
 *
 * For the purpose of testing, the build method needs
 * to be specified so the server knows how to parse
 * the current url name.
 *
 * BUILT_WITH: "JUPYTER-NOTEBOOK"|"SERVER"
 *
 * This configuration is ONLY used for testing and
 * will have no weight in production mode
 * (RUN_LOCALLY = false)
 *
 * SERVER_PORT: the port listen to Chattutor
 * server if ran locally. Used ONLY for testing
 * purposes (TEST_MODE = false)
 */
const BUILT_WITH = "JUPYTER-NOTEBOOK";
const SERVER_PORT = 5000;

/**
 * JUPYTER-NOTEBOOK Specific configurations.
 */
const BUILD_HTML_JUPYTER_NOTEBOOK_FOLDER = "_build/html";
