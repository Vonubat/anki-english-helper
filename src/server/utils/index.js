function gracefulShutdown() {
    console.log('Shutting down gracefully...');

    server.close(() => {
        console.log('Server closed.');

        // Close any other connections or resources here

        process.exit(0);
    });

    // Force close the server after 5 seconds
    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 5000);
}
