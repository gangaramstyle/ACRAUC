import DemoServer from './DemoServer';

// Start the server or run tests
if (process.argv[2] !== 'test') {
    let server = new DemoServer();
    server.start();
} else {}
